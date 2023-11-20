import {apiService, IRes} from "./apiService";
import {ICharacters} from "../interfaces/charactersInterface";
import {urls} from "../constants";

const charactersService = {
    byIds:(ids:string):IRes<ICharacters[]>=>apiService.get(urls.byId(ids))
}
export {
    charactersService
}