/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, SafeAreaView, View, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const images = [
  { id: 1, uri: require('./src/Images/manas.jpg') },
  { id: 2, uri: require('./src/Images/1.jpg') },
  { id: 3, uri: require('./src/Images/2.jpg') },
  { id: 4, uri: require('./src/Images/3.jpg') },
  { id: 5, uri: require('./src/Images/4.jpg') }
]
const images1 = [
  { id: 6, uri: require('./src/Images/5.jpg') },
  { id: 7, uri: require('./src/Images/6.jpg') },
  { id: 8, uri: require('./src/Images/7.jpg') },
  { id: 9, uri: require('./src/Images/8.jpg') },
  { id: 10, uri: require('./src/Images/9.jpg') }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoading1: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        // isLoading1: false
      });
    }, 5000);
    setTimeout(() => {
      this.setState({
        isLoading1: false
      });
    }, 7000);
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 0.5 }}>
          {this.state.isLoading ?
            <SkeletonPlaceholder>
              <View style={{ width: "100%", height: 140 }} />
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: "white",
                  alignSelf: "center",
                  position: "relative",
                  top: -50
                }}
              />
              <View style={{ width: 120, height: 20, alignSelf: "center" }} />
              <View
                style={{
                  width: 240,
                  height: 20,
                  alignSelf: "center",
                  marginTop: 12,
                }}
              />
            </SkeletonPlaceholder>
            :
            /* <View style={{ height: '100%', justifyContent: "center", alignItems: "center" }}>
              <Text>Hello, Reactive(React-Native)!</Text>
            </View> */
            <FlatList
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              horizontal
              data={images}
              renderItem={({ item }) =>
                <View style={{ width: Dimensions.get('window').width, padding: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={item.uri} resizeMode="cover" style={{ width: Dimensions.get('window').width - 50, height: 200, borderRadius: 10, }} />
                </View>}
              keyExtractor={item => item.id}
            />
          }
        </View>
        <View style={{ flex: 1, marginTop: 12 }}>
          {[0, 1, 2, 3, 4].map((_, index) => (
            <View key={index} style={{ marginTop: 20, marginBottom: 12 }}>
              {this.state.isLoading1 ?
                <SkeletonPlaceholder>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: 100, height: 100 }} />
                    <View
                      style={{
                        justifyContent: "space-between",
                        marginLeft: 12,
                        flex: 1
                      }}
                    >
                      <View style={{ width: "50%", height: 20 }} />
                      <View style={{ width: "30%", height: 20 }} />
                      <View style={{ width: "80%", height: 20 }} />
                    </View>
                  </View>
                </SkeletonPlaceholder>
                :
                /* <View style={{ height: '100%', justifyContent: "center", alignItems: "center" }}>
                  <Text>Hello, SwiftUI!</Text>
                </View> */

                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={images1}
                  renderItem={({ item }) =>
                    <View style={{ width: Dimensions.get('window').width, padding: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}>
                      <Image source={item.uri} resizeMode="cover" style={{ width: Dimensions.get('window').width - 50, height: 200, borderRadius: 10, }} />
                    </View>}
                  keyExtractor={item => item.id}
                />
              }
            </View>
          ))}
        </View>

      </SafeAreaView>

    );
  }
}




const styles = StyleSheet.create({
});

export default App;
