import api from '@/services/api'
import type { ICountry } from '@/utils/types'

export const getCountries = async () => {
  try {
    const response = await api.get<ICountry>('countries')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
