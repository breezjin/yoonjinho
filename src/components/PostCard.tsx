import Image from 'next/image';

interface PostCardProps {
  id: string;
  url?: string;
  text: string;
}

export default function PostCard({ id, url, text }: PostCardProps) {
  console.log('url >>>', url);

  return (
    <div className="flex flex-col w-96">
      {url && <Image key={id} src={url} alt={text} width={384} height={288} />}
      {!url && (
        <div className="flex w-[384px] h-[288px] justify-center items-center bg-slate-800">이미지가 없습니다.</div>
      )}
      <div className="text-h1">{text}</div>
      <div></div>
    </div>
  );
}
