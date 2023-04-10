import { PostsItemForBlog } from '@/components/PostsListItem';
import { SimpleLayout } from '@/components/SimpleLayout';

import searchPosts from '../api/notion/searchPosts';

export default async function Blog() {
  const posts = (await searchPosts(null, 10)).results;

  return (
    <>
      <SimpleLayout title='Blog' intro='일상의 소소한 기록들과 하고싶은 이야기들을 모아놓은 Blog 공간 입니다.'>
        <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
          <div className='flex max-w-3xl flex-col space-y-16'>
            {posts.map(post => (
              <PostsItemForBlog key={post.id} post={post} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
