import React, { Component } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import api from "../services/api";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import padroes from "../style/default";

export default class Ligacoes extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.container_ligacao}>
        <Image style={styles.image} source={item.imagem} />
        <View style={styles.container_info}>
          <View style={styles.container_central}>
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.ligacoes_container}>
              <MaterialIcons
                name={item.call}
                size={18}
                color={
                  item.call == "call-received"
                    ? "red"
                    : padroes.cores.verde_claro
                }
              />
              <Text numberOfLines={1} style={styles.data_ligacao}>
                {item.data_ligacao}
              </Text>
            </View>
          </View>
          <View style={styles.container_direita}>
            <Ionicons
              name={item.tipo_de_ligacao == "cel" ? "ios-call" : "ios-videocam"}
              color={padroes.cores.roxoclaro}
              size={24}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={api.exemplo_de_ligacoes}
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
    marginRight: 10
  },
  container_ligacao: {
    flexDirection: "row",
    marginHorizontal: 8,
    height: 70
  },
  ligacoes_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  container_info: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: padroes.cores.cinza
  },
  container_central: {
    flex: 1,
    justifyContent: "center"
  },
  container_direita: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 10
  },
  nome: {
    fontWeight: "bold",
    fontSize: 15.5
  },
  data_ligacao: {
    color: "grey"
  }
});
