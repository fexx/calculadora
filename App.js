import React, { Component } from 'react';
import { View} from 'react-native';

import {Topo, Resultado, Painel } from './src/components';

export default class App extends Component {
    
render() {    
    return (
        <View>
            <Topo />
            <Resultado />
            <Painel />
        </View>
    );
  }
}