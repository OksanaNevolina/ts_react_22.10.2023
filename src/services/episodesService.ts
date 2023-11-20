import {apiService, IRes} from "./apiService";
import {IResEpisodes} from "../interfaces/InterfaceEpisodes";
import {urls} from "../constants";

const episodesService ={
    getAll:(page:string):IRes<IResEpisodes>=>apiService.get(urls.episode, {params:{page}})
}
export {
    episodesService
}