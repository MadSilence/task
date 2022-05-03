export interface Definition {
    definition: string;
    synonyms: any[];
    antonyms: any[];
    example?: string;
}

export interface License {
    name: string;
    url: string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface Phonetic {
    audio: string;
    sourceUrl?: string;
    license?: License;
    text?: string;
}

export interface IWord {
    url: string;
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
    phonetic?: string;
}

export interface WordState {
    json: IWord[];
    loading: boolean;
    error: null | string;
}

export enum JsonActionTypes {
    FETCH_JSON = 'FETCH_JSON',
    FETCH_JSON_SUCCESS = 'FETCH_JSON_SUCCESS',
    FETCH_JSON_ERROR = 'FETCH_JSON_ERROR',
}

interface FetchJsonAction {
    type: JsonActionTypes.FETCH_JSON
}

interface FetchJsonSuccessAction {
    type: JsonActionTypes.FETCH_JSON_SUCCESS;
    payload: any[];
}

interface FetchJsonErrorAction {
    type: JsonActionTypes.FETCH_JSON_ERROR;
    payload: string;
}


export type JsonAction =
    FetchJsonAction
    | FetchJsonSuccessAction
    | FetchJsonErrorAction
