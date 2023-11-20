import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICharacters} from "../../interfaces/charactersInterface";
import {charactersService} from "../../services/charactersService";
import {AxiosError} from "axios";
interface IState {
    characters:ICharacters[]
}
const initialState:IState = {
characters:[]
};

const getByIds = createAsyncThunk<ICharacters[], { ids: string }>(
    'characterSlace/getByIds',
    async ({ids}, {rejectWithValue}) => {
        try {
            const {data} = await charactersService.byIds(ids);
            return data

        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)
const characterSlace = createSlice({
    name:'characterSlace',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getByIds.fulfilled,(state, action) => {
            state.characters = action.payload
        })
})


const {reducer:characterReducer, actions} = characterSlace;

const characterActions = {
    ...actions,
    getByIds
}

export {
    characterActions,
    characterReducer
}
