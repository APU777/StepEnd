import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';
import axios from "axios";



 const HomeScreen = ({ navigation }) => {
      const [data, setData] = useState(null);

      useEffect(() => {
        axios.get('https://trycode.pw/c/DL80P.json').then(({ data }) => {
          setData(data);
        });
      }, []);

      return (
          <Container>
            {data && (
              <SectionList
              sections={data}
              keyExtractor={(item, index) => index}
            renderItem={({ item }) => 
              (
                <Appointment navigate={ navigation.navigate } item={ item }/> 
              )
            }
              renderSectionHeader={({section: { title } }) => (
                  <SectionTitle>{title}</SectionTitle>
              )}
              />
            )}
              <PlusButton>
                <Ionicons name="ios-add" size={36} color="white"/>
              </PlusButton>
          </Container>
          )
};

HomeScreen.navigationOptions = {
  title: 'Patiens',
  headerTintColor: '#2A86FF',
  headerStyle:{
    elevation: 0.8,
    shadowOpacity: 0.8
  }
};

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2A86FF;
  shadow-opacity: 0.4;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;