import { useCallback, useEffect, useRef, useState } from 'react'
import type { Post } from '../data/samplePosts'
import { fetchPosts } from '../data/fetchPosts'
import PostCard from './PostCard'
import FeedStatus, { type FeedStatusKind } from './FeedStatus'

// loading: 불러오는 중, idle: 쉬는 중(감지선이 보이면 다음 묶음), end: 더 없음, error: 오류
type LoadState = 'loading' | 'idle' | 'end' | 'error'

function Feed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loadState, setLoadState] = useState<LoadState>('loading')
  // 불러오는 중에는 다음 요청을 막는 표시. 화면을 다시 그리지 않아도 바로 바뀌도록 ref 로 둠
  const loadingRef = useRef(false)
  // 다음에 가져올 게시물의 시작 번호(0부터)
  const offsetRef = useRef(0)
  // 목록 맨 끝의 감지선
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(async () => {
    if (loadingRef.current) return
    loadingRef.current = true
    setLoadState('loading')
    try {
      const page = await fetchPosts(offsetRef.current)
      offsetRef.current += page.posts.length
      // 혹시 같은 글이 또 와도 id 로 걸러서 두 번 나오지 않게 함
      setPosts((prev) => {
        const seen = new Set(prev.map((post) => post.id))
        return [...prev, ...page.posts.filter((post) => !seen.has(post.id))]
      })
      setLoadState(page.hasMore ? 'idle' : 'end')
    } catch {
      setLoadState('error')
    } finally {
      loadingRef.current = false
    }
  }, [])

  // 처음 10개. 개발 모드에서 두 번 실행돼도 loadingRef 가 두 번째를 막음
  useEffect(() => {
    void loadMore()
  }, [loadMore])

  // 쉬는 중일 때만 감지선을 지켜봄. 더 없음·오류·불러오는 중에는 감지하지 않음
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (loadState !== 'idle' || !sentinel) return
    const observer = new IntersectionObserver((entries) => {
      // 빠르게 내리면 "안 보임 → 보임" 소식이 한꺼번에 오므로 가장 마지막 소식을 봄
      if (entries[entries.length - 1].isIntersecting) void loadMore()
    })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadState, loadMore])

  let statusKind: FeedStatusKind | null = null
  if (loadState === 'loading') statusKind = posts.length === 0 ? 'first' : 'more'
  if (loadState === 'end') statusKind = 'end'
  if (loadState === 'error') statusKind = 'error'

  return (
    <main className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div ref={sentinelRef} className="sentinel" aria-hidden="true" />
      {statusKind && <FeedStatus kind={statusKind} onRetry={() => void loadMore()} />}
    </main>
  )
}

export default Feed
