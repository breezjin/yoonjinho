import axios from 'axios';

const NOTION_API_URL = process.env.NOTION_API_URL;
const NOTION_API_VERSION = process.env.NOTION_API_VERSION;
const NOTION_API_SECRET = process.env.NEXT_PUBLIC_NOTION_API_SECRET;

export default async function getPage(id?: string) {
  const searchHeaders = {
    Authorization: `Bearer ${NOTION_API_SECRET}`,
    'Notion-Version': NOTION_API_VERSION,
  };

  const res = await axios.get(`${NOTION_API_URL}/${id}`, { headers: searchHeaders });

  return res.data;
}
