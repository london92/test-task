import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Communications from 'react-native-communications';

import { Button } from './common'
import { formSubmit } from '../actions';

class Submit extends Component {

    render() {

        const { buttonStyle } = styles;

        return(
            <View style={buttonStyle}>
                <Button onPress={() => Communications.email(['mp@hejfish.com'],null,null,'Your Register Form ',
                    `Name des Bewirtschafters - ${this.props.name},
                     Straße - ${this.props.street},
                     Postleitzahl - ${this.props.postIndex},
                     Ort - ${this.props.place},
                     Land - ${this.props.country},
                     Vorname - ${this.props.person_name},
                     Nachname - ${this.props.person_surname},
                     Email - ${this.props.email},
                     Telefon - ${this.props.telephone}`)}>
                    JETZT REGISTRIEREN UND ANGELKARTE ANSEHEN
                </Button>
            </View>
        )
    }
}

Submit.propTypes = {
    formSubmit: PropTypes.func,
    name: PropTypes.string,
    street: PropTypes.string,
    postIndex: PropTypes.string,
    place: PropTypes.string,
    country: PropTypes.string,
    formUpdate: PropTypes.func,
    person_name: PropTypes.string,
    person_surname: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string
}

const mapStateToProps = state => {
    const { name, street, postIndex, place, country, person_name, person_surname, email, telephone } = state.registerForm;
    return { name, street, postIndex, place, country, person_name, person_surname, email, telephone }
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,
        marginBottom: 25
    }
})

export default connect(mapStateToProps, { formSubmit })(Submit);
