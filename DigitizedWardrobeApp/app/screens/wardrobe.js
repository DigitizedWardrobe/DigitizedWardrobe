import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const remote = 'https://s14.postimg.org/poli1vmkx/Tux.jpg'

class WardrobeScreen extends Component {
  render() {
    const resizeMode = 'contain';
    

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            width: 420,
            height: 731
          }}
          source={{ uri: remote }}
        />
      </View>
    );
  }
}

export default WardrobeScreen;
