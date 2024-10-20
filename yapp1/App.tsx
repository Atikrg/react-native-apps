import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        {
          isDarkMode ? <Text style={styles.text}>Dark Mode</Text> : <Text style={styles.text}>Light Mode</Text>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    justifyContent: 'center', // center content vertically
    alignItems: 'center', // center content horizontally
  },
  text: {
    fontSize: 48, // optional, for better readability
    fontWeight: 'bold'
  }
});

export default App;
