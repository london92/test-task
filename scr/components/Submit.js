import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Communications from 'react-native-communications';

import { Button } from './common'
import { formSubmit } from '../actions';

class Submit extends Component {

    constructor(){
        super();
        this._submit = this._submit.bind(this);
    }

    _submit(){
        for(item in this.props.form){
            if(this.props.form[item] == ''){
                Alert.alert(
                    'Error',
                    'All fields must be filed',
                    [{text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}],
                    { cancelable: false }
                )
                return
            }
        }

        Communications.email(['mp@hejfish.com'],null,null,'Your Register Form ',
                    `Name des Bewirtschafters - ${this.props.form.name},
                     Straße - ${this.props.form.street},
                     Postleitzahl - ${this.props.form.postIndex},
                     Ort - ${this.props.form.place},
                     Land - ${this.props.form.country},
                     Vorname - ${this.props.form.person_name},
                     Nachname - ${this.props.form.person_surname},
                     Email - ${this.props.form.email},
                     Telefon - ${this.props.form.telephone}`);

        this.props.formSubmit();
    }

    render() {

        const { buttonStyle } = styles;

        return(
            <View style={buttonStyle}>
                <Button onPress={this._submit}>
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
    const form = state.registerForm;
    return { form }
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,
        marginBottom: 25
    }
})

export default connect(mapStateToProps, { formSubmit })(Submit);
