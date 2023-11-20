const baseURL = "https://rickandmortyapi.com/api"

const character = '/character'
const episode = '/episode'

const urls = {
    episode,
    byId:(ids:string):string=>`${character}/${ids}`
}
export {
    baseURL,
    urls
}