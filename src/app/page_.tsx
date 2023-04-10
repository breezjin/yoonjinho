import clientSearchPosts from '@/app/api/notion/clientSearchPosts';
import PostsList from '@/components/postsList';

export default async function Home() {
  const posts = await clientSearchPosts();

  return (
    <>
      <PostsList posts={posts} />
    </>
  );
}
