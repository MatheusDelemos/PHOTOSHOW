import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const { nome, setNome } = useState("");
  const { email, setEmail } = useState("");
  const { senha, setSenha } = useState("");
  const { confirmarsenha, setConfirmarSenha } = useState("");
  const { cpf, setCpf } = useState("");
  const { endereco, setEndereco } = useState("");
  const cadastro = () => {
    alert("Usuario cadastrado");
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image
        style={{ width: 200, height: 400, marginBottom: 100 }}
        source={require("./assets/photoshow.png.png")}
      />
      <TextInput
        placeholder="Nome"
        style={styles.TextInput}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="E-mail" // indica o campo o nome no texto
        style={styles.TextInput}
        onChangeText={(text) => setEmail(text)} //text minha função
      />
      <TextInput
        secureTextEntry={true} // Ocultar senha
        placeholder="Senha"
        style={styles.TextInput}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        secureTextEntry={true} // Ocultar senha
        placeholder="Confirmar Senha"
        style={styles.TextInput}
        onChangeText={(text) => setConfirmarSenha(text)}
      />
      <TextInput
        placeholder="CPF"
        style={styles.TextInput}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        placeholder="Endereço"
        style={styles.TextInput}
        onChangeText={(text) => setEndereco(text)}
      />
      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={styles.buttonText}>CADASTRAR!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27282D",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  TextInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro: {
    backgroundColor: "#7242f5",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
