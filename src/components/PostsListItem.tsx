import dayjs from 'dayjs';

import { Card } from './Card';

export function PostsItemForMain({ post }: any) {
  return (
    <Card as='article'>
      <Card.Title href={`/blog/${post.id}`} className=''>
        {post.properties.Title.title[0].plain_text}
      </Card.Title>
      <Card.Eyebrow as='time' dateTime={post.created_time} decorate>
        {dayjs(post.created_time).format('YYYY-MM-DD')}
      </Card.Eyebrow>
      <Card.Description>{post.properties.Description.rich_text[0]?.plain_text}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export function PostsItemForBlog({ post }: any) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/blog/${post.id}`} className=''>
          {post.properties.Title.title[0].plain_text}
        </Card.Title>
        <Card.Eyebrow as='time' dateTime={post.created_time} className='md:hidden' decorate>
          {dayjs(post.created_time).format('YYYY-MM-DD')}
        </Card.Eyebrow>
        <Card.Description>{post.properties.Description.rich_text[0]?.plain_text}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as='time' dateTime={post.created_time} className='mt-1 hidden md:block'>
        {dayjs(post.created_time).format('YYYY-MM-DD')}
      </Card.Eyebrow>
    </article>
  );
}
