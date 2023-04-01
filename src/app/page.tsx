import dayjs from 'dayjs';

import PostCard from '@/components/PostCard';

import getPage from './api/notion/getPage';
import searchPosts from './api/notion/searchPosts';

export default async function Home() {
  const now = dayjs();
  const posts = await searchPosts();
  console.log('posts >>>', posts);

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-4 w-screen">
        {posts.results.map((post: any) => (
          <PostCard
            key={post.id}
            id={post.id}
            url={
              post.cover !== null
                ? post.cover.type === 'external'
                  ? post.cover.external?.url
                  : now.isAfter(post.cover.file.expiry_time)
                  ? getPage(post.id).then(data => data.cover.url)
                  : post.cover.file.url
                : null
            }
            text={post.properties.Title.title[0].plain_text}
          />
        ))}
      </div>
    </main>
  );
}
