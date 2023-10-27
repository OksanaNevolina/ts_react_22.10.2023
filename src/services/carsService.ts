import {ICar} from "../interfaces/interfaceCar";
import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";


const carsService ={
    getAll:(): IRes<ICar[]> => apiService.get(urls.cars),
    create:(car:ICar):IRes<ICar> => apiService.post(urls.cars, car),
    carUpdate:(id:number,car:ICar): IRes<ICar> => apiService.put(urls.byId(id),car),
    getIdCar:(id:number): IRes<ICar> => apiService.get(urls.byId(id)),
    delete:(id:number):IRes<void> => apiService.delete(urls.byId(id))

}
export {
    carsService
}