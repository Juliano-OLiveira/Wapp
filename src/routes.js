import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Contatos from "./pages/Contatos";
import Ligacoes from "./pages/Ligacoes";
import Conversas from "./pages/Conversas";
import Conversa from "./pages/Conversa";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import padroes from "./style/default";
import Header from "./components/header";

export default class Routes extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 23 }}>
        <Header />
        <AppTabeNavigator style={{ backgroundColor: padroes.cores.primaria }} />
      </SafeAreaView>
    );
  }
}
const ConversasStack = createStackNavigator({
  Home: Conversas,
  Conversa
});

const AppTabeNavigator = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Conversas: ConversasStack,
      Contatos: Contatos,
      Chamadas: Ligacoes
    },
    {
      initialRouteName: "Conversas",
      defaultNavigationOptions: {
        tabBarOptions: {
          labelStyle: {
            fontSize: 14,
            fontWeight: "bold"
          },
          style: {
            backgroundColor: "#7d40E7"
          }
        }
      }
    }
  )
);

ConversasStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  console.log(routeName);
  if (routeName == "Conversa") {
    tabBarVisible = false;
  }

  return { tabBarVisible };
};
