const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 0,
    age : 17
}

// Membuat Reducer
const rootReducer = (state = initialState, action) => {
    // Reducer dengan If

    // if(action.type === 'ADD_AGE'){
    //     return {
    //         ...state,
    //         age : state.age + 1
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE'){
    //     return {
    //         ...state,
    //         value : state.value + action.newValue
    //     }
    // }

    // Menggunakan Switch Agar Lebih Rapih
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age : state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value : state.value + action.newValue
            }
        default:
            return state;
    }
    
}

//Membuat store
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
store.subscribe (() => {
    console.log('store change: ', store.getState());
})

// Dispatching Actions
store.dispatch({type : 'ADD_AGE'})
store.dispatch({type : 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());

