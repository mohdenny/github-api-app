import api from '../utils/api';
import { GET_REPOS, NO_REPOS } from './types';

// Get Github Repos
export const getGithubRepos = (username) => async (dispatch) => {
    try {
        const res = await api.get()

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: NO_REPOS
        });
    }
};