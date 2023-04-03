import notion from '@/sdk/notion';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client';

export default async function clientSearchPosts() {
  try {
    const posts = await notion.databases.query({
      database_id: <string>process.env.NEXT_PUBLIC_NOTION_BLOG_DB,
      // filter: {
      //   property: 'Landmark',
      //   rich_text: {
      //     contains: 'Bridge',
      //   },
      // },
    });

    return posts;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          // ...
          break;
        case APIErrorCode.ObjectNotFound:
          // ...
          break;
        case APIErrorCode.Unauthorized:
          // ...
          break;
        // ...
        // default:
        //   // you could even take advantage of exhaustiveness checking
        //   assertNever(error.code);
      }
    }
  }
}
