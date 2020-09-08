 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Platform
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

 
 const HomeScreen = props => {
   
    return (
        // SafeAreaView only works for IOS?
    
        <SafeAreaView style={containerstyle.container}> 
    
     
     <SafeAreaView style={topbarstyle.container}>
          <Image 
          //source={require('./assets/gekas_logo2.png')} />
          source={require('../assets/gekas_logo2.png')} />
          <StatusBar style="auto" />
        </SafeAreaView>
    
        <SafeAreaView style={timebarstyle.container}>
          <AntDesign name="clockcircleo" size={24} color="black" />
          <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5,}}> Öppet idag 08:00 - 20:00</Text>
        </SafeAreaView>
    
        <SafeAreaView style={imagestyle.container}>
          <Image 
          source={{ 
            width: "100%",
            height: "100%",
            uri: "https://www.visithalland.com/app/uploads/2017/08/Gek%C3%A5s_Ullared-2880x1620.jpg"}} />
          <StatusBar style="auto" />
        </SafeAreaView>
    
        <SafeAreaView style={servicestyle.container}>
          <AntDesign name="videocamera" size={24} color="black" />
          <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5,}}> Webbkamera</Text>
          <AntDesign style={{marginLeft: 50}} name="customerservice" size={24} color="black" />
          <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5,}}> Kundservice</Text>
        </SafeAreaView>
    
        <SafeAreaView style={paragraphstyle.container}>
          <Text style={{textAlign: 'center', marginLeft: 35, marginRight: 35, marginTop: 15}}> En personlig presentkorg är alltid uppskattat att få och fungerar att ge bort som både julklapp, 
            inflyttningspresent, födelsedagspresent och vid andra speciella tillfällen. På Till hemmet-avdelningen 
            har vi fyllt på med korgar i olika storlekar och skepnader som väntar på att bli fyllda med fina gåvor!
          </Text>
    
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 25}}> Till Bloggen
          </Text>
        </SafeAreaView>
    
        </SafeAreaView>
      ); 
    }
    
    const topbarstyle = StyleSheet.create({
      container: {
        flex: 0.12,
        backgroundColor: '#0057b8',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
    const imagestyle = StyleSheet.create({
      container: {
        flex: 0.4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
    const timebarstyle = StyleSheet.create({
      container: {
        flex: 0.08,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    });
    
    const servicestyle = StyleSheet.create({
      container: {
        flex: 0.08,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    });
    
    const paragraphstyle = StyleSheet.create({
      container: {
        flex: 0.2,
        backgroundColor: '#fff',
        textAlignVertical: 'center',
        //marginLeft: 30,
        //marginRight: 30,
      },
    });
    
    
    
    const containerstyle = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
    });
     

export default HomeScreen;


