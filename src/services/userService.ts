import {apiService, IRes} from "./apiService";
import {urls} from "../constsnts/urls";
import {IUser} from "../Interfaces/userInterface";

const userService = {
    getAll: (): IRes<IUser[]>=> apiService.get(urls.users.base),
    getById:(id:number): IRes<IUser> => apiService.get(urls.users.byId(id))
}
export {
    userService
}