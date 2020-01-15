import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';


const DATA = [
    {
      title: '14 september',
      data: [
        {
         time: '15:30',
         diagnosis: 'something',
         active: true,
         user:{
           fullname: 'Donald Trump',
           avatar:
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaucKX5nhhE8F1QdrJzapbiV1nfEwj3YVvLXi9OPJ1VDlk5VN&s'
         }
        },
        {
         time: '16:30',
         diagnosis: 'something',
         user:{
           fullname: 'Angela Merkel',
           avatar:
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtdWV278_mW3vo5CUS5OHwCot7Ui3dMOBFRtDrYPkPm4LoI0-nA&s'
         }
        }
      ]
    },
    {
      title: '16 september',
      data:[
        {
         time: '15:30',
         diagnosis: 'something',
         user:{
           fullname: 'Donald Trump',
           avatar:
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaucKX5nhhE8F1QdrJzapbiV1nfEwj3YVvLXi9OPJ1VDlk5VN&s'
         }
        },
        {
         time: '16:30',
         diagnosis: 'something',
         user:{
           fullname: 'Angelaa Merkel',
           avatar:
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtdWV278_mW3vo5CUS5OHwCot7Ui3dMOBFRtDrYPkPm4LoI0-nA&s'
         }
        },
        {
          time: '15:30',
          diagnosis: 'something',
          user:{
            fullname: 'Donald Trump',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaucKX5nhhE8F1QdrJzapbiV1nfEwj3YVvLXi9OPJ1VDlk5VN&s'
          }
         },
         {
          time: '16:30',
          diagnosis: 'something',
          user:{
            fullname: 'Angelaa Merkel',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtdWV278_mW3vo5CUS5OHwCot7Ui3dMOBFRtDrYPkPm4LoI0-nA&s'
          }
         },
         {
          time: '15:30',
          diagnosis: 'something',
          user:{
            fullname: 'Donald Trump',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaucKX5nhhE8F1QdrJzapbiV1nfEwj3YVvLXi9OPJ1VDlk5VN&s'
          }
         },
         {
          time: '16:30',
          diagnosis: 'something',
          user:{
            fullname: 'Angelaa Merkel',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtdWV278_mW3vo5CUS5OHwCot7Ui3dMOBFRtDrYPkPm4LoI0-nA&s'
          }
         },
         {
          time: '15:30',
          diagnosis: 'something',
          user:{
            fullname: 'Donald Trump',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaucKX5nhhE8F1QdrJzapbiV1nfEwj3YVvLXi9OPJ1VDlk5VN&s'
          }
         },
         {
          time: '16:30',
           diagnosis: 'something',
          user:{
            fullname: 'Angelaa Merkel',
            avatar:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtdWV278_mW3vo5CUS5OHwCot7Ui3dMOBFRtDrYPkPm4LoI0-nA&s'
          }
         }
      ]
    },
  ];

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Patiens',
    headerTintColor: '#2A86FF',
    headerStyle:{
      elevation: 0.8,
      shadowOpacity: 0.8
    }
  };

  render() {
    const {
      navigation
    } = this.props;
    return <Container>
              <SectionList
              sections={DATA}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => <Appointment {...item}/> }
              renderSectionHeader={({section: { title } }) => (
                  <SectionTitle>{title}</SectionTitle>
              )}
              />
              <PlusButton>
              <Ionicons name="ios-add" size={36} color="white"/>
              </PlusButton>
          </Container>
  }
}


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
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen;