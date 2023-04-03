import clsx from 'clsx';
import Link from 'next/link';

import PostCard from '@/components/PostCard';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

interface PostsListProps {
  posts?: QueryDatabaseResponse | undefined;
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <main>
      <div className={clsx('flex gap-4 w-full flex-wrap p-4')}>
        {posts?.results.map((post: any) => (
          <>
            <Link href={`/blog/${post.id}`}>
              <PostCard
                key={post.id}
                id={post.id}
                url={
                  post.cover !== null
                    ? post.cover.type === 'external'
                      ? post.cover.external?.url
                      : post.cover.file.url
                    : null
                }
                postTitle={post.properties.Title.title[0].plain_text}
              />
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
