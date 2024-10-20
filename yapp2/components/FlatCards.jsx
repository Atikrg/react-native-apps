import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const FlatCards = () => {
      return (
            <View>
                  <Text style={styles.headingText}>FlashCards</Text>
                  <View>
                        <View style={styles.container}>
                              <View style={[styles.card, styles.cardOne]}>
                                    <Text>Red</Text>
                              </View>
                              <View style={[styles.card, styles.cardTwo]}>
                                    <Text>Blue</Text>
                              </View>
                              <View style={[styles.card, styles.cardThree]}>
                                    <Text>Green</Text>
                              </View>
                                <View style={[styles.card, styles.cardOne]}>
                                    <Text>Red</Text>
                              </View>
                              
                               
                        </View>
                  </View>
            </View>
      )
}


const styles = StyleSheet.create({
      headingText: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingHorizontal: 8
      },
      container: {
            flex:1,
            flexDirection: 'row',
            padding: 8,
      },
      card: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 10,
            margin: 8,
      },
      cardOne: {
            backgroundColor: '#EF5354'
      },
      cardTwo: {
            backgroundColor: '#4e8ff1'
      },
      cardThree: {
            backgroundColor: '#96fe90'
      }
})

export default FlatCards