import axios from 'axios';

import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const NOTION_API_URL = process.env.NOTION_API_URL;
const NOTION_API_VERSION = process.env.NOTION_API_VERSION;
const NOTION_API_SECRET = process.env.NEXT_PUBLIC_NOTION_API_SECRET;

export default async function searchPosts(searchQuery: string | null, size?: number): Promise<QueryDatabaseResponse> {
  const searchHeaders = {
    Authorization: NOTION_API_SECRET,
    'Notion-Version': NOTION_API_VERSION,
  };

  const body = {
    query: searchQuery ? searchQuery : '',
    page_size: size ?? 50,
    filter: {
      value: 'page',
      property: 'object',
    },
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time',
    },
  };

  const res = await axios.post(`${NOTION_API_URL}/search`, body, { headers: searchHeaders });

  return res.data;
}
