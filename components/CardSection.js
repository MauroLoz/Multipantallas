import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding:11,
    backgroundColor: '#D9D3D3',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 2,
    position: 'relative'
  }
};

export default CardSection;
