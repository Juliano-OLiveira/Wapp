import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import api from "../services/api";
import padroes from "../style/default";

export default class Conversas extends Component {
  static navigationOptions = {
    header: null
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Conversa", { perfil: item })
        }
      >
        <View style={styles.container_conversa}>
          <Image source={item.imagem} style={styles.image} />
          <View style={styles.container_info}>
            <View style={styles.container_central}>
              <Text style={styles.nome}>{item.nome}</Text>
              <View style={styles.ultima_mensagem_container}>
                <Text numberOfLines={1} style={styles.ultima_mensageiro}>
                  {item.ultimo_mensageiro}:
                </Text>
                <Text style={styles.ultima_mensagem} numberOfLines={1}>
                  {item.ultima_mensagem}
                </Text>
              </View>
            </View>
            <View style={styles.container_direita}>
              <Text style={styles.horario_ultima_mensagem}>
                {item.horario_ultima_mensagem}
              </Text>
              {item.mensagens_nao_lida > 0 ? (
                <View style={styles.mensagens_nao_lida}>
                  <Text style={styles.mensagens_nao_lida_texto}>
                    {item.mensagens_nao_lida}
                  </Text>
                </View>
              ) : (
                <View style={styles.mensagens_nao_lida_container_branco} />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={api.exemplo_de_conversas}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `list-item${index}`}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container_conversa: {
    flexDirection: "row",
    marginHorizontal: 8,
    height: 70
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 30,
    marginRight: 10
  },
  container_info: {
    borderBottomColor: padroes.cores.cinza,
    borderBottomWidth: 1.5,
    flex: 1,
    flexDirection: "row"
  },
  container_central: {
    flex: 1,
    justifyContent: "space-evenly"
  },
  ultima_mensagem_container: {
    flexDirection: "row"
  },
  ultima_mensageiro: {
    color: "grey",
    maxWidth: 60,
    marginRight: 5
  },
  container_direita: {
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  nome: {
    fontWeight: "bold",
    fontSize: 15.5
  },
  horario_ultima_mensagem: {
    color: padroes.cores.verde_claro
  },
  mensagens_nao_lida: {
    backgroundColor: padroes.cores.verde_claro,

    width: 25,
    height: 25,
    borderRadius: 15,

    justifyContent: "center"
  },
  mensagens_nao_lida_texto: {
    color: padroes.cores.branco,
    textAlign: "center"
  },
  ultima_mensagem: {
    color: "grey"
  }
});
