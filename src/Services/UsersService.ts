import {apiService, IRes} from "./apiService";
import {IUser} from "../Inrerfaces/UserInterface";
import {ulsl} from "../Consants/urls";

const UsersService = {
    getAll: (): IRes<IUser[]> => apiService.get(ulsl.users.base) ,
    getId: (id:number): IRes<IUser> => apiService.get(ulsl.users.getById(id))

}
export {
    UsersService
}