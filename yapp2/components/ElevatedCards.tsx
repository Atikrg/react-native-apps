import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
            </View>
      </ScrollView>
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
            padding: 8,
      },
      card: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            color: 'white',
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
      },
      cardElevated:{
            backgroundColor: '#6fff00',
            elevation: 14,
            shadowOffset: {
                  width: 1,
                  height:1
            },
            shadowColor: "yellow"
      }
    })
    