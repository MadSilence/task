import {Dispatch} from "redux";
import axios from "axios";
import {JsonAction, JsonActionTypes} from "../../types/word";

export const fetchJson = (input:string ) => {
    return async (dispatch: Dispatch<JsonAction>) => {
        try {
            dispatch({type: JsonActionTypes.FETCH_JSON})
            const response = await axios.get(('https://api.dictionaryapi.dev/api/v2/entries/en' + input), {})
            dispatch({type: JsonActionTypes.FETCH_JSON_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: JsonActionTypes.FETCH_JSON_ERROR,
                payload: 'Error was occurred'
            })
        }
    }
}
