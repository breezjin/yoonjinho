import clsx from 'clsx';
import Image from 'next/image';

interface PostCardProps {
  id: string;
  url?: string;
  postTitle: string;
}

export default function PostCard({ id, url, postTitle }: PostCardProps) {
  return (
    <div className={clsx('flex flex-col w-96 h-72')}>
      {url && <Image width={384} height={288} key={id} src={url} alt={postTitle} />}
      {!url && (
        <div className={clsx('flex w-[384px] h-[288px] justify-center items-center bg-slate-200')}>
          이미지가 없습니다.
        </div>
      )}
      <div className={clsx('text-h1')}>{postTitle}</div>
      <div></div>
    </div>
  );
}
