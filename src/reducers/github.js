import { GET_REPOS, NO_REPOS } from "../actions/types";

const initialState = {
    repos: []
}

function githubReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            };
        case NO_REPOS:
            return {
                ...state,
                repos: []
            };
        default:
            return state;
    }
}

export default githubReducer;