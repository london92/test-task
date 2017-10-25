import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


class Button extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const { buttonContainer, textContainer } = styles;
        const { onPress, children } = this.props;

        return(
            <TouchableOpacity onPress={onPress} style={buttonContainer}>
                <Text style={textContainer}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#CF1D1D',
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5
    },
    textContainer: {
        alignSelf: 'center',
        color : '#fff',
        fontWeight: '600',
        fontSize: 14,
        padding: 5,
        paddingTop: 10
    }
});

Button.propTypes ={
    onPress: PropTypes.func,
    children: PropTypes.any.isRequired
};

export  { Button };
