import {combineReducers} from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducers'
import likedJobs from './likes_reducers';
export default combineReducers ({
    auth,
    jobs,
    likedJobs

});