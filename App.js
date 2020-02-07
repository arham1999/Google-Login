import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';


export default class App extends React.Component {


  googlee = async _ => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: `640861615708-jmh8decgj9fkpecnbauqnrmv2annj0di.apps.googleusercontent.com`
  
      });
      
      if (type === 'success') {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        console.log('yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',user, accessToken);
      }
    } catch(error) {
      console.log(error.message)
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={_=>this.googlee()} title="Google Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
