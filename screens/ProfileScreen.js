
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather  from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from "../consts/colors";

const CardInfoUserName  = () => {
    return(
        <View style={styles.flexDirectionRow2}> 
            <View style={styles.flexDirectionRow}>
            <FontAwesome
                name="user"
                color="#05375a"
                size={20}
                display="inline"
                style={{ marginLeft: 20, marginTop: 5 }} />
            <Text style={styles.textFont}> Tên đăng nhập: </Text>
            </View>
            <View>
                <Text  style={styles.textFont2}> nthanhvinh2000 </Text>
            </View>
        </View>
    )
};
const CardInfoGender = () => {
    return(
        <View style={styles.flexDirectionRow2}> 
            <View style={styles.flexDirectionRow}>
            <FontAwesome
                name="venus-mars"
                color="#05375a"
                size={20}
                display="inline"
                style={{ marginLeft: 20, marginTop: 5 }} />
            <Text style={styles.textFont}> Giới tính: </Text>
            </View>
            <View>
                <Text  style={styles.textFont2}> Nam </Text>
            </View>
        </View>
    )
};
const CardInfoBirth = () => {
    return(
        <View style={styles.flexDirectionRow2}> 
            <View style={styles.flexDirectionRow}>
            <FontAwesome
                name="birthday-cake"
                color="#05375a"
                size={20}
                display="inline"
                style={{ marginLeft: 20, marginTop: 5 }} />
            <Text style={styles.textFont}> Ngày sinh: </Text>
            </View>
            <View>
                <Text  style={styles.textFont2}> 01/06/2000 </Text>
            </View>
        </View>
    )
};
const CardInfoPhoneNumber = () => {
    return(
        <View style={styles.flexDirectionRow2}> 
            <View style={styles.flexDirectionRow}>
            <FontAwesome
                name="phone"
                color="#05375a"
                size={20}
                display="inline"
                style={{ marginLeft: 20, marginTop: 5 }} />
            <Text style={styles.textFont}> Số điện thoại: </Text>
            </View>
            <View>
                <Text  style={styles.textFont2}> 0935079079 </Text>
            </View>
        </View>
    )
};
const CardInfoEmail = () => {
    return(
        <View style={styles.flexDirectionRow2}> 
            <View style={styles.flexDirectionRow}>
            <FontAwesome
                name="envelope"
                color="#05375a"
                size={20}
                display="inline"
                style={{ marginLeft: 20, marginTop: 5 }} />
            <Text style={styles.textFont}>  Email: </Text>
            </View>
            <View>
                <Text  style={styles.textFont2}> nthanhvinh@gmail.com </Text>
            </View>
        </View>
    )
};
const CardLogout = () => {
    return(
        <View style={styles.flexDirectionRowLogout}> 
            <TouchableOpacity>
                <Text style={styles.textFontLogout}> Log out </Text>
            </TouchableOpacity>
        </View>
    )
};

const  Profile = () =>  {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
       <View style={styles.userName}>
           <Image 
                style={styles.userImg}
                source={require("../assets/1.png")} />
            <Text style={styles.topBotSpace, styles.textUserName}> Nguyen Thanh Vinh </Text>
       </View>
       <CardInfoUserName />
       <CardInfoGender />
       <CardInfoBirth />
       <CardInfoPhoneNumber />
       <CardInfoEmail />
       <CardLogout />
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImg:{
      width: 150,
      height: 150,
      borderRadius: 75,
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 1,
  },
  textUserName:{
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600',
    lineHeight: 30,
  },
  topBotSpace:{
      marginTop: 10,
      marginBottom: 10,
  },
  userName:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  flexDirectionRow:{
      flexDirection: 'row',
      alignItems: 'center',
      
  },
  flexDirectionRow2:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 0.1,
      borderRadius: 15,
      marginLeft: 2,
      marginRight: 2,
      marginBottom: 5,
      marginTop: 10,
      backgroundColor: COLORS.orange,
      flexWrap: 'wrap',
  },
  flexDirectionRowLogout:{
    //   flexDirection: 'row',
    //   alignItems: 'center',
     
      paddingTop: 10,
      paddingBottom: 10,
      borderWidth: 0.1,
      borderRadius: 15,
      marginLeft: 2,
      marginRight: 2,
      marginBottom: 5,
      marginTop: 10,
      backgroundColor: '#CD3131',
  },
  flexDirectionBetWeen:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
textFont: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
    lineHeight: 30,
    color: '#05375a',
},
textFont2: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 30,
    color: '#252526',
},
textFontLogout: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 30,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize',
}
});
export default Profile;

