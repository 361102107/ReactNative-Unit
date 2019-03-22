import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import home_01 from "../../../assets/images/home_01.png";
import home_02 from "../../../assets/images/home_02.png";
import home_03 from "../../../assets/images/home_03.png";
import home_04 from "../../../assets/images/home_04.png";
import home_05 from "../../../assets/images/home_05.png";
export default class Index extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
                <View style = {styles.firstView}></View>
                <View style = {styles.secondView}></View>
                <View style = {styles.thirdView}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

  firstView: {
    height:120,
    backgroundColor: 'orange'
  },
  secondView: {
    height:25,
    marginTop:15,
    backgroundColor: 'gray'
  },
  thirdView: {
    marginTop:15,
    height:80,
    backgroundColor: 'yellow'
  }
});