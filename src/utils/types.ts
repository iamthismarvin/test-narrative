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

export interface IDatasetsApi {
  id: number
  name: string
  label: string
  description: string
  thumbnailUrl: string
  costPerRecord: number
}
