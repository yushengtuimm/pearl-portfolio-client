export interface PaginateResult<T> {
  docs: T[];
  totalDocs: number;
  offset?: number;
  limit: number;
  page?: number;
  totalPages: number;
  nextPage?: number | null;
  prevPage?: number | null;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
