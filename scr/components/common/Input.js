import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { onChangeText, value, placeholder, secureTextEntry, keyboardType = 'default' } = this.props;
        const { inputStyle, containerStyle } = styles;

        return(
            <View style={containerStyle}>
                <TextInput
                    keyboardType={keyboardType}
                    selectionColor='#1EBBCF'
                    underlineColorAndroid='transparent'
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={inputStyle}
                    onChangeText={onChangeText}
                    value={value}
                    placeholderTextColor="#8C8C8C"/>
            </View>
        )
    }
}
Input.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string
};

const styles = StyleSheet.create({
    inputStyle:{
        height: 20,
        color: '#4A4949',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 12,
        lineHeight: 28,
        flex: 2,
        textAlign: 'center'
    },
    containerStyle: {
        height: 25,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export { Input };
