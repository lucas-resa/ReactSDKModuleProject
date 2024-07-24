import { testMethod } from 'despegar-test';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  // var testFunction = () => {
  // multiply(12, 5).then (
  //   value => console.log('El resultado es: ' + value)
  // )
  // }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Test App</Text>
        <Button title='Codigo nativo' 
        onPress={ () => testMethod('https://www.despegar.com.ar/')}>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20
  }
});

export default App;
