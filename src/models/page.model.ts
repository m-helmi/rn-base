export interface Page<T> {
  data: T[];
  totalCount: number;
  pageCount: number;
  page: number;
  limit: number;
  pagination: {
    total_pages: number;
    total: number;
    current_page: number;
  };
}
export interface PageBranches<T> {
  data: {
    branches: T[];
    pagination: {
      total: number;
      count: number;
      per_page: string;
      current_page: number;
      total_pages: number;
      has_more: boolean;
    };
  };
  totalCount: number;
  pageCount: number;
  page: number;
  limit: number;
}
