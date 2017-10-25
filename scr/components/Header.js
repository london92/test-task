import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


const Header = () => {

    const { logoStyle, titleStyle, descriptionStyle } = styles;

    return(
        <View>
            <EvilIcons style={logoStyle} name="like" size={100} color="#1EBBCF"/>
            <Text style={titleStyle}>Großartig!</Text>
            <Text style={descriptionStyle}>Registrier dich jetzt um Angelkarten {"\n"} online zu verkaufen</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    logoStyle: {
        alignSelf: 'center'
    },
    titleStyle: {
        marginTop: 20,
        fontSize: 32,
        color: '#266F87',
        textAlign: 'center'
    },
    descriptionStyle: {
        marginTop: 10,
        fontSize: 14,
        color: '#266F87',
        textAlign: 'center',
        marginBottom: 10
    }

})

export { Header };


