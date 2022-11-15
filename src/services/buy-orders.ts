import api from '@/services/api'
import type {
  BuyOrdersResponse,
  BuyOrderGetResponse,
  IBuyOrder,
  IBuyOrderBody,
} from '@/utils/types'

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

export const putBuyOrder = async (order: IBuyOrder) => {
  try {
    const response = await api.put(`buy-orders/${order.id}`, order)
    return response
  } catch (err) {
    console.log(err)
  }
}

export const deleteBuyOrder = async (id: string) => {
  try {
    const response = await api.delete(`buy-orders/${id}`)
    return response
  } catch (err) {
    console.log(err)
  }
}

export const postBuyOrder = async (order: IBuyOrderBody) => {
  try {
    const response = await api.post(`buy-orders`, order)
    return response
  } catch (err) {
    console.log(err)
  }
}
