import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodesSlices";
import {characterReducer} from "./slices/characterSlace";

const store = configureStore({
    reducer:{
        episodes:episodesReducer,
        characters:characterReducer
    }
}

)
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}
export {
    store
}