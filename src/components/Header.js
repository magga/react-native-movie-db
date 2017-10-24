import { View, Text } from 'react-native';
import React from 'react';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = {
    textStyle: { 
        color: 'black', 
        fontSize: 25,
        padding: 10
    },
    viewStyle: {
        backgroundColor: '#96CEB4',
        alignItems: 'center',
        shadowColor: '#FFEEAD',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 5
    }
};

export default Header;
