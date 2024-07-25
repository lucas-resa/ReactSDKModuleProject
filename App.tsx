import { showWebView } from 'despegar-react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Test App</Text>
        <Button title='Codigo nativo' 
        onPress={ () => showWebView('https://www.despegar.com.ar/')}>
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
