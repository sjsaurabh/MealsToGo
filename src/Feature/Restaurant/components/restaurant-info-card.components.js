

import React from "react";
import { Text ,StyleSheet, View,Image} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { MyText } from "../../../component/typography/text.components";
import { Spacer } from "../../../component/spacer/spacer.components";
import Favourite from "../../../component/favourits/favourite.component";
const Section=styled.View`
flex-direction:row;
align-item:center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Open =styled(SvgXml)`
flex-direction: row;
`

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

let Info=styled.View`
padding: ${(props) => props.theme.space[3]};
`
// let Title=styled(Text)`
// font-family: ${(props) => props.theme.fonts.body};
// font-size:${(props)=>props.theme.fontSizes.body}; 
// color:${(props)=>props.theme.colors.ui.primary};
// `;
let Address=styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size:${(props)=>props.theme.fontSizes.caption}
`
let Icon =styled.Image`
width:15px;
height:15px;

`
let RestaurantCard =styled(Card)`
backgroundColor: ${(props)=>props.theme.colors.bg.primary}

 `
let RestaurantCover = styled(Card.Cover)`
padding:${(props)=>props.theme.space[3]}
backgroundColor:${(props)=>props.theme.colors.bg.primary}
`

export const RestaurantInfoCard =({restaurent= {} })=> {
    const {
        name='Some Restaurant',
        
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address="Btm layout bangalore",
        isOpenNow=true,
        rating=3.2,
        isClosedTemporarily=true,
    } =restaurent;
     
    const ratingArray= Array.from (new Array(Math.ceil(rating))); 
  //  console.log(ratingArray);
    return (
        <RestaurantCard elevation={5} style={styles.card}>
         <Favourite restaurant={restaurent}/>
         <RestaurantCover key={name} style={styles.cover} source={{uri:photos[0]}}/>
           <Info>
            
             <MyText variant='label'>{name}</MyText>
               <Section>
                    <Rating>
                     {
                         ratingArray.map((currentvalue,index, array)=>{
                          return(
                         <SvgXml 
                         key={index}
                          xml={star}
                           width={20} 
                           height={20} />
                         )
                         })
                     }
                    </Rating>
                     <SectionEnd>
                        {
                            isClosedTemporarily && (<Text variant="error" style={{color:'red'}} >
                                                         CLOSED TEMPORARILY
                                                       </Text>)
                        }
                        
                        <Spacer variant="left.large" / >
                       {
                        isOpenNow && <Open xml={open} width={20} height={20}/>
                       }
                       
                       <Spacer variant="left.large"/ >
                        <Icon  source={{ uri: icon }} />
                        
                     </SectionEnd>
               </Section>
            <Address>{address}</Address>
            </Info>
                
                
        </RestaurantCard>
    )
}
let styles=StyleSheet.create({
    // card:{
    //    backgroundColor:'white' 
    // },
    // cover:{
    //  padding:20,
    //  backgroundColor:'red'
    // },
    // title:{
    //     padding:16,
    // }
})

//------------------------------------------

// import React from "react";
// import { Text ,StyleSheet} from "react-native";
// import { Card } from "react-native-paper";
// import styled from "styled-components";

// let Title=styled(Text)`
// padding:16px;
// color:${(props)=>props.theme.colors.ui.primary}
// `;
// let RestaurantCard =styled(Card)`
// backgroundColor:white;

//  `
// let RestaurantCover = styled(Card.Cover)`
// padding:16px;
// backgroundColor:yellow
// `

// export const RestaurantInfoCard =({restaurent={}})=> {
//     const {
//         name='Some Restaurant',
//         icon,
//         photos=["https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"],
//         address="100 some random street",
//         isOpenNow=true,
//         rating=4,
//         isClosedTemporarily
//     } =restaurent;

   
//     return (
//         <RestaurantCard elevation={5} style={styles.card}>
//          <RestaurantCover key={name} style={styles.cover} source={{uri:photos[0]}}/>
//          <Title>{name}</Title>
//         </RestaurantCard>
//     )
// }
// let styles=StyleSheet.create({
//     // card:{
//     //    backgroundColor:'white' 
//     // },
//     // cover:{
//     //  padding:20,
//     //  backgroundColor:'red'
//     // },
//     // title:{
//     //     padding:16,
//     // }
// })