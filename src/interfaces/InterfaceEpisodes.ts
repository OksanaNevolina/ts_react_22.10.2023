 export interface IResEpisodes {
    info: {
         count: number,
         pages: number,
         next: string,
         prev: null
     },
     results: IResults[]
 }
 export interface IResults {

    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: [
        string,
        string,
    ]
}
