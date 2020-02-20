import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import api from "../services/api";
import padroes from "../style/default";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default class HeaderConversa extends Component {
  render() {
    const parametro = this.props.navigation.getParam("perfil", null);
    return (
      <View style={styles.container}>
        <View style={styles.container_left}>
          <TouchableOpacity
            style={styles.icone_voltar}
            onPress={() => this.props.navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back"
              size={30}
              color="white"
              style={{ alignSelf: "center" }}
            />
            <Image style={styles.image} source={parametro.imagem} />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.cabecalho}>
            {parametro.nome}
          </Text>
        </View>
        <View style={styles.container_right}>
          <TouchableOpacity>
            <Entypo name="attachment" size={20} color="white" />
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
  image: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  container: {
    minHeight: 65,
    maxHeight: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: padroes.cores.primaria,
    flex: 1
  },
  cabecalho: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    alignSelf: "center"
  },
  container_left: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center"
  },
  icone_voltar: {
    flexDirection: "row"
  },
  container_right: {
    flexDirection: "row",
    paddingRight: 10,
    width: 80,
    justifyContent: "space-between",
    alignSelf: "center"
  }
});
