import api from '@/services/api'
import type { CountriesResponse } from '@/utils/types'

export const getCountries = async () => {
  try {
    const response = await api.get<CountriesResponse>('countries')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
