// RULES OF REDUCERS
// 1. Must return any value besides 'undefined'
// 2. Produces 'state' or data to be used inside of your app using only previous state & the action
// 3. Must not return reach 'out of itself' to decide what value to return (reducers are pure)
//  -> don't reach outside ie; fetch files, make api requests, only return computation done on action/state
// 4. Must not mutate its input 'state' argument (misleading!)
//  -> checking for equality is referencing arrays in storage not values
//  -> if you accidentally return the same state, redux will not update data and rerender as it's the same ref

// Reducers are called 1 time when app initializes
// Reducers take previous state and action to create a new state

export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}