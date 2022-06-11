import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textShadowColor: '#000000',
    textShadowRadius: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#858383',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#000000',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    marginBottom: 5
  }
};

export default Button;
