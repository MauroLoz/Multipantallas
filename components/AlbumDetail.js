import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { BorderlessButton } from 'react-native-gesture-handler';

const AlbumDetail = ({navigation, title, albumId}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
          Ver Ahora!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  thumbnailStyle: {
    height: 0,
    width: 20,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
   
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
