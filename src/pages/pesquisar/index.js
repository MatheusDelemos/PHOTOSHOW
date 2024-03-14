import { StyleSheet, Text, View } from 'react-native';

export default function Pesquisar() {
  return (
    <View style={styles.container}>
      <Text>Pesquisar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
});