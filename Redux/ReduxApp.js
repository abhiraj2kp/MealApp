import React from 'react';
import {createStore} from 'redux';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';

const intialState = {
    counter : 0
}
const reduer = (state = intialState ,action) => {
    switch(action.type) {
        case "INCREASE_COUNTER" :
        return({counter : state.counter + 1});
        case "DECREASE_COUNTER" :
        return({counter : state.counter -1})
    }
    return state;
}
const store = createStore(reduer );
class ReduxApp extends React.Component {

    render(){
        return(
            <Provider store = {store}>
                <CounterApp />
            </Provider>
        );
    }
}
export default ReduxApp;