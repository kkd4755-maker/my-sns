import { supabase } from '../lib/supabase'
import type { Post } from './samplePosts'

// 한 번에 가져오는 게시물 개수
export const PAGE_SIZE = 10

export type PostPage = {
  posts: Post[]
  // 다음 묶음이 더 있는지. false 면 피드가 "더 없음"을 보여주고 감지를 멈춤
  hasMore: boolean
}

// 다음 10개 가져오기. offset 번째(0부터)부터 10개를 Supabase 의 sns_posts 에서 최신순으로
export async function fetchPosts(offset: number): Promise<PostPage> {
  const { data, error } = await supabase
    .from('sns_posts')
    .select('id, author, content, images, created_at')
    .order('created_at', { ascending: false })
    // range(a, b): a번째부터 b번째까지(b 포함). 0~9, 10~19, …
    .range(offset, offset + PAGE_SIZE - 1)
    .overrideTypes<Post[], { merge: false }>()
  // 실패하면 피드가 "불러오지 못했어요" 상태를 보여줌
  if (error) throw error
  // 10개보다 적게 오면 마지막 묶음이므로 "더 없음"
  return { posts: data, hasMore: data.length === PAGE_SIZE }
}
