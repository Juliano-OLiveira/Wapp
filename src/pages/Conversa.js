import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import api from "../services/api";
import padores from "../style/default";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import HeaderConversa from "../components/headerConversa";

export default class Conversa extends Component {
  static navigationOptions = {
    header: null
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={
          item.usuario == 1
            ? styles.mensagem_container
            : styles.mensagem_container_remetente
        }
      >
        <View
          style={
            item.usuario == 1 ? styles.mensagem : styles.mensagem_remetente
          }
        >
          <Text>{item.mensagem}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../images/wallpaper_whats.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <HeaderConversa {...this.props} />
          <FlatList
            data={api.exemplo_de_conversa_pessoal}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `list-item-${index}`}
            style={{ marginBottom: 10 }}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.inserir_texto_container}>
            <TextInput
              placeholder="Insira o texto aqui..."
              style={styles.inserir_texto}
            />
            <TouchableOpacity style={styles.bt_enviar}>
              <Ionicons
                name="md-send"
                color="white"
                size={30}
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inserir_texto_container: {
    flex: 1,
    maxHeight: 45,
    minWidth: 45,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 10
  },
  inserir_texto: {
    maxHeight: 50,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    fontSize: 18,
    paddingLeft: 10
  },
  bt_enviar: {
    backgroundColor: padores.cores.verde_claro,
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    marginLeft: 5,
    alignSelf: "center"
  }
});
