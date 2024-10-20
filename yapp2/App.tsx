import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/actionCard';
import ContactList from './components/contactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList/>
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

