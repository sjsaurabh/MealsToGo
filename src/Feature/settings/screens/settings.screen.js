import React, { useContext,useState ,useEffect} from "react";
import{Text,Button,View,TouchableOpacity} from 'react-native'
import styled from "styled-components";

import { List ,Avatar} from "react-native-paper";
import { SafeArea } from "../../../component/utility/safe-area.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { MyText } from "../../../component/typography/text.components";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout , user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  // useFocusEffect(() => {
  //   getProfilePicture(user);
  // }, [user]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     getProfilePicture(user)
  //   }, [user])
  // );
  useEffect(() => {
    getProfilePicture(user);
  }, [user]);
  return (
    <SafeArea>
    <AvatarContainer>
       <TouchableOpacity onPress={() => navigation.navigate("Camera")} >
       {!photo && (
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
      )}
      {photo && (
        <Avatar.Image
          size={180}
          source={{ uri: photo }}
          backgroundColor="#2182BD"
        />
      )}
        </TouchableOpacity>
        <View style={{marginTop:10}}>
          <MyText variant="label">{user.email}</MyText>
        </View>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
         
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
         
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};