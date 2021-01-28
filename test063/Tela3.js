import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Tela3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TELA 3</Text>
        <Button
          title="Tela2"
          onPress={() =>
            this.props.navigation.navigate('Tela2')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#099',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tela3;