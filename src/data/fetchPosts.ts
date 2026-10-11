import { samplePosts, type Post } from './samplePosts'

// 한 번에 가져오는 게시물 개수
export const PAGE_SIZE = 10

export type PostPage = {
  posts: Post[]
  // 다음 묶음이 더 있는지. false 면 피드가 "더 없음"을 보여주고 감지를 멈춤
  hasMore: boolean
}

// 다음 10개 가져오기. offset 번째(0부터)부터 10개
// 지금은 샘플에서 잘라 오고, 나중에(STEP 17) 이 함수 속만 Supabase 요청으로 바꿈
export async function fetchPosts(offset: number): Promise<PostPage> {
  // 샘플은 순식간에 붙어서 "불러오는 중"이 안 보이므로 0.8초 기다림
  await new Promise((resolve) => setTimeout(resolve, 800))
  const posts = samplePosts.slice(offset, offset + PAGE_SIZE)
  return { posts, hasMore: offset + PAGE_SIZE < samplePosts.length }
}
