import jsonPlaceholder from '../api/jsonPlaceholder'

// async takes some time for it to get the data
// need a middleware to send action to reducers

// REDUX THUNK - Allows for actions to be functions
// dispatch => Is action a function or an object?
// Function: gets invoked with dispatch => wait for request to finish
//  => request completes, dispatch action manually goes back to beginning of cycle
// (this time around action usually is an object so will go to the reducer)
// Action: send to reducer

export const fetchPosts = () =>
    // Return a function to go through middleware
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        // instead of return an object, manually dispatch
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    };