import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Tela2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TELA 2</Text>
        <Button
          title="Tela 3"
          onPress={() =>
            this.props.navigation.navigate('Tela3')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#029',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tela2;