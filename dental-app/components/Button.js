import React from 'react';
import styled from 'styled-components/native';


const Button = ({ children, color }) => (
        <ButtonWrapper color={ color }>
            <ButtonText>{ children }</ButtonText>
        </ButtonWrapper>
 );

Button.defaultProps = {
    color: '#2A86FF'
};

const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${props => props.color };
    height: 45px;
`;

const ButtonText = styled.Text`
    color: white;
    font-weight: 400;
    font-size: 16px;
`;

export default Button;