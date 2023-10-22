import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constsnts/urls";


export type IRes<T> = Promise<AxiosResponse<T>>

const apiService= axios.create({baseURL})


export {
    apiService
}