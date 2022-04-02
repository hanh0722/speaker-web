export interface CorePaginationParams {
  sort?: 1 | -1 | 'asc' | 'desc',
  page_size?: number;
  page?: number;
  key?: string
}