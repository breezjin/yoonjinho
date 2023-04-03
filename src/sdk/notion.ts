import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_SECRET,
});

export default notion;
