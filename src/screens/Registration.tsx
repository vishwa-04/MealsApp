import React from 'react';
import {Image, TextInput, View, Button, Text} from 'react-native';
// import {useForm} from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import {styles} from '../styles';

function Registration(): JSX.Element {
  return (
    <View>
      <View style={styles.registrationLogoContainer}>
        <Image
          style={styles.registrationLogo}
          source={require('../assets/images/download.png')}
        />
        <Text style={styles.registerTitle}>Sign Up</Text>
      </View>
      <View style={styles.detailsContainer}>
        <TextInput style={styles.input} autoFocus placeholder="Name" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button title="Sign Up" />
      </View>
    </View>
  );
}

export default Registration;
