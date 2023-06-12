/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable} from 'react-native';
import {
  Image,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native';
// import {useForm} from 'react-hook-form';
// import * as yup from 'yup';
// import {yupResolver} from '@hookform/resolvers/yup';
import {styles} from '../styles';

function Registration(): JSX.Element {
  return (
    // <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // </ScrollView>
  );
}

export default Registration;
