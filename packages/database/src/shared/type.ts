export const DEFAULT_LIMIT = 10
export const DEFAULT_PAGE = 1

export enum PeriodValues {
  THIS_WEEK = "week",
  THIS_MONTH = "month",
  THIS_YEAR = "year",
  INFINITY = "infinity",
}

export enum FilterValues {
  LASTED = "lasted",
  HOT = "hot",
  // TRENDING = "trending",
}

export type ActionReturnType<T> = {
  data?: T
  error?: any
}

export type OrderBy = "asc" | "desc"

export type TGetListResponse<T> = {
  data: T[]
  total: number
  page: number
  totalPages: number
  limit: number
}
