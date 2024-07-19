import { IProduct } from '@/common/types/product'
import instance from '@/configs/axios'
import { AxiosResponse } from 'axios'

export const getAllProducts = async (params?: any): Promise<AxiosResponse<any>> => {
    return await instance.get('/products', { params })

}

export const removeProduct = async (product: IProduct): Promise<AxiosResponse<any> | undefined> => {
    try {
        const response = await instance.delete(`/products/${product._id}`, {
           
        })
        return response
    } catch (error) {
        console.log(error)
    }
    return undefined; 
}


