import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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
        {post.images.length === 1 ? (
          // 사진 1장: 몇 번째 표시도, 넘기기도 없음
          <img src={post.images[0]} alt={`${post.author}님의 사진`} />
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ el: '.dots' }}
            // 마지막 다음에 첫 장. 2장은 Swiper 의 loop 가 제대로 안 돌아서 되감기(rewind)로
            loop={post.images.length > 2}
            rewind={post.images.length === 2}
            slidesPerView={1.15}
            spaceBetween={8}
            speed={500}
          >
            {post.images.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  alt={`${post.author}님의 사진 ${post.images.length}장 중 ${i + 1}번째`}
                />
                {/* 2/4 표시는 사진마다 붙여서 사진과 함께 움직임 */}
                <span className="counter">
                  {i + 1}/{post.images.length}
                </span>
              </SwiperSlide>
            ))}
            {/* 사진 아래 점. Swiper 가 이 안에 점을 채움 */}
            <div className="dots" />
          </Swiper>
        )}
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
