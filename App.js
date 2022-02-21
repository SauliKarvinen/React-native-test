import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Animated,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";

import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import useStyles from "./styles/styles.js";

export default function App() {
  const [pressed, setPressed] = useState(false);
  const [divCount, setDivCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  const [testArray, setTestArray] = useState([]);
  const styles = useStyles();

  const cardFade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(cardFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  });

  useEffect(() => {
    const arr = [1, 2, 3, 4];
    setTestArray(arr);
  }, []);

  const handlePress = () => {
    var rnd = Math.floor(Math.random() * testArray.length);

    var rndline = testArray[rnd];

    while (rndline === text) {
      rnd = Math.floor(Math.random() * testArray.length);
      rndline = testArray[rnd];
    }
    let newArr = arr;
    newArr.push(rndline);
    setArr(newArr);
    setText(rndline);
  };

  const handleRefresh = () => {
    setDivCount(0);
    setArr([]);
  };

  const handleFacebook = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <View style={[styles.ylapalkki, styles.palkit]}>
        <TouchableOpacity>
          <Icon color="#fff" style={styles.icons} name="menu" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.linkedin.com")}
        >
          <Icon size={20} color="#fff" name="user" type="entypo" />
        </TouchableOpacity>
        <Icon color="#fff" style={styles.icons} name="message" />
        <Icon color="#fff" style={styles.icons} name="search" />
      </View>
      <View style={styles.buttonArea}>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.button,
          ]}
        >
          <Paragraph style={{ color: "black" }}>Click</Paragraph>
        </Pressable>
      </View>
      <ScrollView style={styles.centerArea}>
        {arr.map((x, index) => (
          <Animated.View key={index} style={{ opacity: cardFade.current }}>
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph>{x}</Paragraph>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>

      <View style={[styles.alapalkki, styles.palkit]}>
        <Icon size={40} color="#fff" name="arrow-left" />
        <Icon size={40} color="#fff" name="arrow-right" />
        <Icon color="#fff" name="phone" />
        <TouchableOpacity>
          <Icon onPress={handleRefresh} color="#fff" name="refresh" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* 


        
*/
