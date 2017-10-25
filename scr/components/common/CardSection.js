import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class CardSection extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        margin: 3,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position : 'relative',
        borderRadius: 3
    }
});

CardSection.propTypes = {
    children: PropTypes.any.isRequired
};

export { CardSection } ;
