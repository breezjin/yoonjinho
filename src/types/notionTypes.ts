export interface SearchPostsResponse<T, C, O> {
  object: string;
  results: T[];
  next_cursor: C;
  has_more: boolean;
  type: string;
  page_or_database: O;
}
