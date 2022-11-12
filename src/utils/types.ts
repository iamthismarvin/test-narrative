export interface IBuyOrderApi {
  id: string
  name: string
  createdAt: string
  datasetIds: number[]
  countries: string[]
  budget: number
}

export interface IBuyOrderListItem {
  name: string
  date: string
  records: number
}
