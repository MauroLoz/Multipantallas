import React from 'react';
import { View } from 'react-native';
import { setWarningFilter } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    fontWeight: 'bold',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: '#858383',
    shadowColor: '#858383',
    shadowOffset: { width: 5, height: 5 },
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  }
};

export default Card;
