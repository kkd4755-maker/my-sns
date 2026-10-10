import { useEffect, useRef, useState } from 'react'
import type { Post } from '../data/samplePosts'

type PostCardProps = {
  post: Post
}

// 올린 시각을 "3시간 전" 형식으로 바꿈
function timeAgo(createdAt: string): string {
  const minutes = Math.floor((Date.now() - new Date(createdAt).getTime()) / 60000)
  if (minutes < 1) return '방금 전'
  if (minutes < 60) return `${minutes}분 전`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}시간 전`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}일 전`
  const date = new Date(createdAt)
  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}

function PostCard({ post }: PostCardProps) {
  const [open, setOpen] = useState(false)
  // 글이 2줄에서 잘렸는지. 잘렸을 때만 "더 보기" 버튼을 보여줌
  const [clamped, setClamped] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1)
    check()
    // 화면 폭이 바뀌면 줄 수도 바뀌므로 다시 확인
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article className="card">
      <div className="card-head">
        <span className="avatar">
          <img
            src={`https://picsum.photos/seed/${encodeURIComponent(post.author)}/80/80`}
            alt=""
          />
        </span>
        <span className="author">{post.author}</span>
      </div>
      <div className="photo">
        <img src={post.images[0]} alt={`${post.author}님의 사진`} />
      </div>
      <div className="card-body">
        <p ref={contentRef} className={open ? 'content open' : 'content'}>
          {post.content}
        </p>
        {clamped && !open && (
          <button className="more" type="button" onClick={() => setOpen(true)}>
            더 보기
          </button>
        )}
        <div className="time">
          <time dateTime={post.created_at}>{timeAgo(post.created_at)}</time>
        </div>
      </div>
    </article>
  )
}

export default PostCard
