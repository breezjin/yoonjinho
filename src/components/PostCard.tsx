import clsx from 'clsx';
import Image from 'next/image';

interface PostCardProps {
  id: string;
  url?: string;
  postTitle: string;
}

export default function PostCard({ id, url, postTitle }: PostCardProps) {
  return (
    <>
      <div className={clsx('flex h-60 w-80 items-center justify-center bg-slate-200')}>
        {url && (
          <div className={clsx('relative flex h-60 w-80 items-center justify-center overflow-hidden bg-slate-200')}>
            <Image
              key={id}
              src={url}
              fill
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 320px) 320px'
              priority
              alt={postTitle}
            />
          </div>
        )}
        {!url && (
          <div className={clsx('flex h-60 w-80 items-center justify-center bg-slate-200')}>이미지가 없습니다.</div>
        )}
      </div>
      <div className={clsx('text-h1 w-80')}>{postTitle}</div>
    </>
  );
}
