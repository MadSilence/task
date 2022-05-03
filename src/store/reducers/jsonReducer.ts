import {JsonAction, JsonActionTypes, WordState} from "../../types/word";

const initialState: WordState = {
    json: [],
    loading: false,
    error: null
}

export const jsonReducer = (state = initialState, action: JsonAction): WordState => {
    switch (action.type) {
        case JsonActionTypes.FETCH_JSON:
            return {...state, loading: true}
        case JsonActionTypes.FETCH_JSON_SUCCESS:
            return {...state, loading: false, json: action.payload}
        case JsonActionTypes.FETCH_JSON_ERROR:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}
