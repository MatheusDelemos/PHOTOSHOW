import { StyleSheet, Text, View } from 'react-native';

export default function Adicionar() {
  return (
    <View style={styles.container}>
      <Text>Adicionar</Text>
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