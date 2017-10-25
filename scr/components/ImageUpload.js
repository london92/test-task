import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';


class ImageUpload extends Component {

    constructor(){
        super();
        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        console.log('image upload');
    }

    render(){
        const { buttonStyle, textStyle } = styles;

        return(
            <TouchableOpacity onPress={this._onPress}>
                <View style={buttonStyle}>
                    <Foundation name="upload-cloud" size={20} color="#919191"/>
                    <Text style={textStyle}>Logo {"\n"} hochladen</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#919191',
        height: 175,
        width: 100,
        marginLeft: 10
    },
    textStyle: {
        fontSize: 14,
        color: '#919191',
        textAlign: 'center'
    }
});

export default ImageUpload;
