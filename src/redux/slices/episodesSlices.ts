import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IResEpisodes, IResults} from "../../interfaces/InterfaceEpisodes";
import {AxiosError} from "axios";
import {episodesService} from "../../services/episodesService";

interface IState {
    episodes:IResults[],
    pages:number,
    next:string,
    prev: string
}

const initialState:IState = {
    pages: 0,
    episodes: [],
    next:'',
    prev:''
};

const getAll = createAsyncThunk<IResEpisodes, {page:string }>(
    'episodesSlices/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await episodesService.getAll(page.page);
            return data

        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)
const episodesSlices = createSlice({
    name:'episodesSlices',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results, info: {pages,prev,next}} = action.payload;
            state.episodes = results
            state.pages = pages
            state.next =next
            state.prev =prev
        })

})

const {reducer:episodesReducer, actions} = episodesSlices;

const  ActionsEpisodes ={
    ...actions,
    getAll
}
export {
    ActionsEpisodes,
    episodesReducer
}