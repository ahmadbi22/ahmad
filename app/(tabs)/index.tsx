import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ahmad</Text>
      <Text style={styles.txt}>2.7.2006</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1 , 
    backgroundColor:'white' , 
    paddingTop: 45
  },
  txt:{
    fontSize: 30 , 
    marginLeft: 50 ,
  }
})
