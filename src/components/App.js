import React from 'react';

import PostList from './PostList'

// GENERAL DATA LOADING WITH REDUX
// Render some component on screen => componentDidMount gets called
// => call action creator => runs code to make an API request
// => API responds with data => action creator returns an action with fetched data as payload
// => Reducer sees the action and returns the data off 'payload'
// => new state object generated, redux/react-redux causes react app to be rerendered

// components are generally responsivle for fetching data they need by calling an action creator
// action creators are responsible for making API requests (redux-thunk)
// we get fetched data into component by generating new state in redux store 

// MIDDLEWARE IN REDUX
// function that gets called with every action we dispatch
// has the ability to STOP or MODIFY actions
// most popular use of middleware is for dealing with ASYNC actions (api requests)

const App = ()=>{
    return (
    <div className='ui container'>
        <PostList/>
    </div>
    );
}

export default App;