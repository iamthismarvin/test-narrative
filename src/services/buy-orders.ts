import api from '@/services/api'
import type { BuyOrdersResponse } from '@/utils/types'

export const getBuyOrders = async () => {
  try {
    const response = await api.get<BuyOrdersResponse>('buy-orders')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
