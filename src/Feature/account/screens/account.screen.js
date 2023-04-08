import React from "react";
import { View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

import { AccountBackground, 
    AccountContainer,
     AccountCover ,
     AuthButton,
     AnimationWrapper,
     Title,
    } from "../components/account.style";
    

export const AccountScreen = ({navigation}) => {
 
  return (
    <AccountBackground>
      <AccountCover/>
      <AnimationWrapper>
      <AnimatedLottieView
      key="animation"
      autoPlay
      loop
      resizeMode="cover"
      source={require('../../../../assets/watermelon.json')}
      />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
     
      <View style={{margin:7}}>
      <AuthButton 
      icon="lock-open-outline"
      color="blue"
      mode="contained"
      onPress={()=>navigation.navigate('Login')}
      >
      Login
      </AuthButton>
      </View>
      <View style={{margin:7}}>
      <AuthButton 
      icon="email"
      
      mode="contained"
      onPress={()=>navigation.navigate('Register')}
      >
      Resister
      </AuthButton>
     
      </View>
      </AccountContainer>
    </AccountBackground>
  );
};