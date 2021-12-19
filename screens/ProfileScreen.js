
import * as React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image} from 'react-native';
import Splash from '../components/Splash';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather  from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from "../consts/colors";
const NavigateToSignUp = props => {
  props.navigation.navigate('SignUp');
}


const  Profile = props =>  {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <SafeAreaView>
       <View style={styles.userName}>
           <Image 
                style={styles.userImg}
                source={require("../assets/1.png")} />
                <Text style={styles.topBotSpace, styles.textUserName}> Nguyen Thanh Vinh </Text>
       </View>
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
  }
});
export default Profile;

