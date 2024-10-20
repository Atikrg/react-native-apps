import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
      return (
            <View>
                  <Text style={styles.headingText}>FancyCard</Text>
                  <View style={[styles.card, styles.cardElevated]}>
                        <Image
                              source={{
                                    uri: 'https://plus.unsplash.com/premium_photo-1697730373328-26e408d64025?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                              }}
                              style={styles.cardImage}
                        />
                        <View style={styles.cardBody}>
                              <Text style={styles.cardTitle}>Hawa Mahal</Text>
                              <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                              <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace</Text>
                              <Text>12min away</Text>
                        </View>
                  </View>
            </View>
      )
}


const styles = StyleSheet.create({
      headingText: {
            fontSize:24,
            fontWeight: "bold",
            paddingHorizontal: 8
      },
      card: {
            width: 350,
            height: 380,
            borderRadius: 6,
            marginVertical: 12,
            marginHorizontal: 16
      },
      cardElevated: {
            backgroundColor: '#fffff',
            elevation: 1,
            shadowOffset: {
                  width: 1,
                  height: 1
            }
      },
      cardImage: {
            height: 180,
            marginBottom: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
      },
      cardBody: {
            padding:8,
            marginLeft:8,
            flex:1,
            flexGrow: 1,
            paddingHorizontal: 12
      },
      cardTitle: {
            color: "#000000",
            fontWeight:'bold',
            fontSize: 22
      },
      cardLabel: {
            color: "#000000",
            marginBottom:6
      },
      cardDescription: {
            color: "#000000",
            fontSize:12,
            marginTop:6,
            marginBottom:12
      },
      cardFooter: {

      }
})