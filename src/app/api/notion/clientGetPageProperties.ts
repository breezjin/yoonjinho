import notion from '@/sdk/notion';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client';

export default async function clientGetPageProperties(postId: string) {
  try {
    const notionPage = await notion.pages.retrieve({ page_id: postId });

    return notionPage;
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
