import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Input, CardSection } from './common'
import { formUpdate } from '../actions';

class TopForm extends Component {

    render() {
        return(
            <View>
                <CardSection>
                    <Input placeholder="Name des Bewirtschafters / Vereins"
                           onChangeText={value => this.props.formUpdate({ prop: 'name', value })}
                           value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input placeholder="Straße"
                           onChangeText={value => this.props.formUpdate({ prop: 'street', value })}
                           value={this.props.street}
                    />
                </CardSection>

                <View style={{flexDirection: 'row'}}>
                    <View style={{alignSelf: 'flex-start', flex: 1}}>
                        <CardSection>
                            <Input placeholder="Postleitzahl"
                                   onChangeText={value => this.props.formUpdate({ prop: 'postIndex', value })}
                                   value={this.props.postIndex}
                                   keyboardType="numeric"
                            />
                        </CardSection >
                    </View>
                    <View style={{alignSelf: 'flex-start', flex: 1}}>
                        <CardSection>
                            <Input placeholder="Ort"
                                   onChangeText={value => this.props.formUpdate({ prop: 'place', value })}
                                   value={this.props.place}
                            />
                        </CardSection>
                    </View>
                </View>

                <CardSection>
                    <Input placeholder="Land"
                           onChangeText={value => this.props.formUpdate({ prop: 'country', value })}
                           value={this.props.country}
                    />
                </CardSection>
            </View>
        )
    }
}

TopForm.propTypes = {
    formUpdate: PropTypes.func,
    name: PropTypes.string,
    street: PropTypes.string,
    postIndex: PropTypes.string,
    place: PropTypes.string,
    country: PropTypes.string
}

const mapStateToProps = state => {
    const { name, street, postIndex, place, country } = state.registerForm;
    return { name, street, postIndex, place, country }
}

export default connect(mapStateToProps, { formUpdate })(TopForm);
