import type { Post } from '../data/samplePosts'
import PostCard from './PostCard'

type FeedProps = {
  posts: Post[]
}

function Feed({ posts }: FeedProps) {
  return (
    <main className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  )
}

export default Feed
