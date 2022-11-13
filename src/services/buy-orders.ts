import api from '@/services/api'
import type { BuyOrdersResponse, BuyOrderGetResponse } from '@/utils/types'

export const getBuyOrders = async () => {
  try {
    const response = await api.get<BuyOrdersResponse>('buy-orders')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const getBuyOrder = async (id: string) => {
  try {
    const response = await api.get<BuyOrderGetResponse>(`buy-orders/${id}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}
