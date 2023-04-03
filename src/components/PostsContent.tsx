import clsx from 'clsx';
import Image from 'next/image';

import { GetPagePropertyResponse, PartialPageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

interface PostContentProps {
  properties: GetPagePropertyResponse | PartialPageObjectResponse | undefined;
}

export default function PostContent({ properties }: PostContentProps) {
  return (
    <div className={clsx('flex flex-col w-96 h-72')}>
      <div>{properties?.object}</div>
    </div>
  );
}
