import {
    START_LOADING,
    SUCCESSFUL_LOADING,
    LOADING_ERROR,
} from './actionTypes';

export function startLoading() {
    return {
        type: START_LOADING,
    }
}

export function successfulLoading(data) {
    return {
        type: SUCCESSFUL_LOADING,
        payload: data
    }
}

export function loadingError(data) {
    return {
        type: LOADING_ERROR,
        payload: data
    }
}