import React from "react";
import styled from "styled-components";
import { Platform,View} from "react-native";
import { MyText } from "../typography/text.components";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({restaurant,isMap}) => {

  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  // console.log(restaurant.photos[0])

  return (
    <Item>
      <Image source={{uri:restaurant.photos[0]}} />
      <MyText variant="caption" >
        {restaurant.name}
      </MyText>
    </Item>
  );
};

