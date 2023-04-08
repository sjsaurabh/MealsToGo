import React, { useContext, useState } from "react";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    Title,
    ErrorContainer

} from "../components/account.style";
import { MyText } from "../../../component/typography/text.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View } from "react-native";
import { ActivityIndicator,Colors } from "react-native-paper";

export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister,isLoading, error } = useContext(AuthenticationContext);
    // console.log(error);
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />

                <View style={{ marginTop: 12 }}>
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        // secure
                        onChangeText={(p) => setPassword(p)}
                    />

                </View>
                <View style={{ marginTop: 12 }}>
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        // secure
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />

                </View>
                {
                    error && (

                        <View>
                        <ErrorContainer size="large">
                            <MyText variant="error">{error}</MyText>
                        </ErrorContainer>
                        </View>

                    )
                }

                <View style={{ margin: 12 }}>
                   {!isLoading ? (<AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => onRegister(email, password,repeatedPassword)}
                    >
                    Register
                    </AuthButton>) :(
                        <ActivityIndicator animating={true} color="blue"/>)
                }
                </View>
                


            </AccountContainer>
            <View style={{margin:10}}>
            <AuthButton mode="contained" onPress={()=>navigation.goBack()}>
                Back
            </AuthButton>
            </View>
        </AccountBackground>
    );
};
