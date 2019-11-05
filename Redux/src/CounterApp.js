import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

class CounterApp extends React.Component {

    render(){
        return(
            <View>
                <View style = {{flexDirection : "row", width : 200, justifyContent : "space-around"}}>
                    <TouchableOpacity onPress = {() => this.props.increaseCounter()}>
                        <Text style = {{fontSize : 20, color : "black"}}>Increase</Text>
                    </TouchableOpacity>
                    <Text  style = {{fontSize : 20, color : "black"}}>{this.props.counter}</Text>
                    <TouchableOpacity onPress = {() => this.props.decreaseCounter()} >
                        <Text  style = {{fontSize : 20, color : "black"}}>Increase</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return{
        increaseCounter : () => dispatch({type : "INCREASE_COUNTER"}),
        decreaseCounter : () => dispatch({type : "DECREASE_COUNTER"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);