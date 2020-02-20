import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import padroes from "../style/default";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo
} from "@expo/vector-icons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cabecalho}> Zapp </Text>
        <View style={styles.container_direita}>
          <TouchableOpacity>
            <FontAwesome name="search" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="message-reply-text"
              color="white"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: padroes.cores.primaria
  },
  container_direita: {
    flexDirection: "row",
    paddingRight: 10,
    width: 120,
    justifyContent: "space-between",
    alignSelf: "center"
  },
  cabecalho: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
    fontSize: 20
  },
  bt: {}
});
