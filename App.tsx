import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, Button, Pressable,Linking } from 'react-native';

const color = '#010409'
const imgprof ='https://avatars.githubusercontent.com/u/71413602?v=4'
const perfil = 'https://github.com/Yasmim-cmr'

export default function App() {
  const handlePressGoToGithub = async()=>{
   const res= await Linking.canOpenURL(perfil);
   console.log('verificando')
   if(res){
    await Linking.canOpenURL(perfil)
    console.log(perfil)
    
   }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color} />
    <View style = {styles.content}>
    <Image style={styles.avatar} source={{uri:imgprof}}/>
    <Text style = {styles.defaultText}> Yasmim Machado</Text>
    <Text style = {[styles.defaultText, styles.function]}> Developer </Text>
    <Text style= {[styles.defaultText, styles.function]}> Github: Yasmim-cmr</Text>
    <Pressable onPress={handlePressGoToGithub}>
    <View style ={[styles.button]}>
      <Text style={styles.textButton}> Open Git </Text>

    </View>
    </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'color',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  avatar:{

    height: 200,
    width:200,
    borderRadius:100,
    borderColor:'white',
    borderWidth: 2,
},
content:{ 
  alignItems: 'center',
  padding: 20,
},
defaultText:{
  color: color,
  fontSize:30,
  
},
function:{
  fontSize:20,

},
button:{
  marginTop: 20,
  backgroundColor:"#feee21",
  borderRadius:50,

  padding: 20,
},
textButton:{
  fontSize:20,

},

})
