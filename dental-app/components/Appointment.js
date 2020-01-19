import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import GrayText from './GrayText';

const Appointment = ({ navigate, item }) => {
  const { user, diagnosis, active, time } = item; 
  return(
       <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
                <Avatar 
                    source={{
                    uri: user.avatar
                }}
                />
                <View style={{ flex: 1 }}>
                    <FullName>{user.fullname}</FullName>
                    <GrayText>{diagnosis}</GrayText>
                </View>
                <GroupDate active={active}>{time}</GroupDate>
            </GroupItem>
  );
};

Appointment.defaultProps = {
    groupTitle: 'Untitled',
    items: []
};

const GroupDate = styled.Text`
  background:${props => (props.active ? '#2A86FF;' : '#e9f5ff;')};
  color:${props => (props.active ? '#fff;' : '#4294ff;')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3
`;

export default Appointment;