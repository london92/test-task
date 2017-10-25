import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Input, CardSection } from './common'
import { formUpdate } from '../actions';

class BottomForm extends Component {

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{alignSelf: 'flex-start', flex: 1}}>
                        <CardSection>
                            <Input placeholder="Vorname"
                                   onChangeText={value => this.props.formUpdate({ prop: 'person_name', value })}
                                   value={this.props.person_name}
                            />
                        </CardSection >
                    </View>
                    <View style={{alignSelf: 'flex-start', flex: 1}}>
                        <CardSection>
                            <Input placeholder="Nachname"
                                   onChangeText={value => this.props.formUpdate({ prop: 'person_surname', value })}
                                   value={this.props.person_surname}
                            />
                        </CardSection>
                    </View>
                </View>

                <CardSection>
                    <Input placeholder="Email"
                           onChangeText={value => this.props.formUpdate({ prop: 'email', value })}
                           value={this.props.email}
                           keyboardType="email-address"
                    />
                </CardSection>

                <CardSection>
                    <Input placeholder="Telefon"
                           onChangeText={value => this.props.formUpdate({ prop: 'telephone', value })}
                           value={this.props.telephone}
                           keyboardType="numeric"
                    />
                </CardSection>
            </View>
        )
    }
}

BottomForm.propTypes = {
    formUpdate: PropTypes.func,
    person_name: PropTypes.string,
    person_surname: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string
}

const mapStateToProps = state => {
    const { person_name, person_surname, email, telephone } = state.registerForm;
    return { person_name, person_surname, email, telephone }
}

export default connect(mapStateToProps, { formUpdate })(BottomForm);
