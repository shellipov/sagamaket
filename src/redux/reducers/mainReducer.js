import {
    START_LOADING,
    SUCCESSFUL_LOADING,
    LOADING_ERROR,
} from '../actionTypes';

const init = {
    data: null,
    error: null,
    loading: false,
}

export default function reducer(state = init, action) {
    switch (action.type) {

        case START_LOADING:
            return {
                ...state,
                data: null,
                error: null,
                loading: true,

            }

        case SUCCESSFUL_LOADING:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            }

        case LOADING_ERROR:
            return {
                ...state,
                data: null,
                error: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}