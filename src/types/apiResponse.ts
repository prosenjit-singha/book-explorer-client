type ApiResponse<T = unknown> = {
  status: number;
  error: null | { [key: string]: string } | string;
  message: string;
  data: T | null;
  meta?: {
    totalPages: number;
    page: number;
    limit: number;
    totalResults: number;
    sortBy: string;
    sortOrder: "asc" | "desc" | 1 | -1 | "ascending" | "descending";
  };
};

export default ApiResponse;
