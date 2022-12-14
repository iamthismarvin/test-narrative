export interface IBuyOrderBody {
  name: string
  createdAt: string
  datasetIds: number[]
  countries: string[]
  budget: number
}

export interface IBuyOrder extends IBuyOrderBody {
  id: string
}

export interface IBuyOrderListItem {
  id: string
  name: string
  date: string
  records: number
}

export interface ICountry {
  name: string
  countryCode: string
  storedData: { datasetId: number; recordCount: number }[]
}

export interface IDataset {
  id: number
  name: string
  label: string
  description: string
  thumbnailUrl: string
  costPerRecord: number
}

export type BuyOrdersResponse = IBuyOrder[] | undefined
export type CountriesResponse = ICountry[] | undefined
export type DatasetsResponse = IDataset[] | undefined
export type BuyOrderGetResponse = IBuyOrder | undefined
