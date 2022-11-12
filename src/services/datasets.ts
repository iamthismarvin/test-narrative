import api from '@/services/api'
import type { DatasetsResponse } from '@/utils/types'

export const getDatasets = async () => {
  try {
    const response = await api.get<DatasetsResponse>('datasets')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
