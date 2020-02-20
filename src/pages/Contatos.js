import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import api from "../services/api";
import { Ionicons } from "@expo/vector-icons";
import padroes from "../style/default";

export default class Contatos extends Component {
  // static navigationOptions = {
  //   header = null,
  // };
  renderItem = ({ item }) => {
    return (
      <View style={styles.container_contato}>
        <Image style={styles.image} source={item.imagem} />
        <View style={styles.container_info}>
          <View style={styles.container_central}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.numero_container}>
              <Text style={styles.numero}>{item.numero}</Text>
            </View>
          </View>
          <View style={styles.container_direita}>
            <TouchableOpacity>
              <Ionicons
                name="md-person-add"
                size={26}
                color={padroes.cores.verde_claro}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={api.exemplo_de_contato}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `list-item-${index}`}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 10
  },
  container_contato: {
    flexDirection: "row",
    marginHorizontal: 8,
    height: 70
  },
  nome: {
    fontWeight: "bold",
    fontSize: 15.5,
    marginLeft: 5
  },
  numero: {
    color: "grey",
    marginLeft: 5
  },
  container_direita: {
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  container_info: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: padroes.cores.cinza,
    borderBottomWidth: 1.5
  },
  container_central: {
    justifyContent: "space-evenly",
    flex: 1
  }
});
