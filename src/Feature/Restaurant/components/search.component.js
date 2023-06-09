import React,{useContext,  useState} from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
let SearchContainer = styled.View`
padding: ${(props)=>props.theme.space[3]}
`;
export const Search =({ isFavouritesToggled, onFavouritesToggle })=>{
    const {keyword,search} =useContext( LocationContext)
    const[searchKeyword,setSearchKeyword]=useState(keyword)
     
    return(
        <SearchContainer>
            <Searchbar
            icon={isFavouritesToggled ? "heart" : "heart-outline"}
            onIconPress={onFavouritesToggle}
             placeholder="search for a location"
             value={searchKeyword}
             onSubmitEditing={()=>{
                search(searchKeyword)
             }}
             onChangeText={(text)=>{
                setSearchKeyword(text);
                
             }}
             />
          </SearchContainer>
    )
}
