import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import reducers from './scr/reducers';
import { Header } from './scr/components/Header';
import ImageUpload from './scr/components/ImageUpload';
import TopForm from './scr/components/TopForm';
import BottomForm from './scr/components/BottomForm';
import Submit from './scr/components/Submit';


export default class App extends Component {
  render() {

    const { container, formContainer, topInputContainer, bottomInputContainer } = styles;

    return (
        <Provider store={createStore(reducers)}>
          <View style={container}>
            <Header/>
            <View style={formContainer}>
              <ImageUpload style={{flex: 1}}/>
              <View style={topInputContainer}>
                <TopForm/>
              </View>
            </View>
            <View style={bottomInputContainer}>
               <BottomForm/>
            </View>
            <Submit/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    formContainer: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 5
    },
    topInputContainer: {
        flex: 2,
    },
    bottomInputContainer: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row'
    }
});
