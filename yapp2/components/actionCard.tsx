//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// create a component
const ActionCard = () => {

      const openWebsite = (websiteLink: string) => {
            Linking.openURL(websiteLink);
      }
      return (
            <View style={styles.headingText}>
                  <Text  style={styles.headingText}>Blog Card</Text>
                  <View style={[styles.card, styles.elevatedCard]}>
                        <View style={styles.headingContainer}>
                              <Text style={styles.headerText}>
                                    What's new in Javascript 21 - ES 12
                              </Text>
                              <Image source={
                                    {
                                          uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                                    }
                              }
                                    style={styles.cardImage} />
                        </View>

                        <View style={styles.bodyContainer}>
                              <Text>
                                    Just like every year javascript brings new feature. This year javascript brings new 4 features, which are almost in production rollout
                              </Text>
                        </View>
                        <View style={styles.footContainer}>
                              <TouchableOpacity  onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                                    <Text  style={styles.socialLinks}>Read more</Text>

                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/?hl=en')}>
                                    <Text style={styles.socialLinks}>Follow me</Text>

                              </TouchableOpacity>
                        </View>

                  </View>
            </View>
      );
};


const styles = StyleSheet.create(
      {
            headingText: {
                  fontSize:24,
                  fontWeight:'bold',
                  paddingHorizontal: 8
            },
            card: {
                  width:350,
                  height:400,
                  borderRadius: 6,
                  marginVertical: 12,
                  marginHorizontal: 16,
                  padding: 12
            },
            elevatedCard: {
                  elevation: 3,

            },
            headerText: {
                  padding: 8,
                  fontWeight: 'bold'
            },
            headingContainer: {},
            cardImage: {
                  height: 190
            },
            bodyContainer: {
                  padding:10
            },
            footContainer: {
                  padding: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly'
            },
            socialLinks:{
                  color: 'white',
                  paddingHorizontal: 24,
                  paddingVertical: 8,
                  borderRadius: 12,
                  backgroundColor: 'black'
            }
      }
)

export default ActionCard;