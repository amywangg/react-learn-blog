import {combineReducers} from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    // dummy: ()=> 10 //dummy reducer to remove error message
    posts: postsReducer
});