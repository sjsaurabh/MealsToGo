import styled from "styled-components";
import { FlatList } from "react-native";


export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 1 }
  }
  )`
  margin: ${(props) => props.theme.space[3]}
  `;