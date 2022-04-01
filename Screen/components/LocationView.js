import React from "react";
import MapView from 'react-native-maps';
import { TouchableOpacity, Linking, Platform } from 'react-native';


export const LocationView = ({ location }) => {
  const openMaps = () => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${location.latitude},${location.longitude}`,
      android: `http://maps.google.com/?q=${location.latitude},${location.longitude}`,
    });
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        }
      })
      .catch((err) => {
        console.error('An error occurred', err);
      });
  };
  return (
    <TouchableOpacity
      onPress={openMaps}
      style={{ backgroundColor: 'gray', width: 250, height: 250 }}>
      <MapView
        style={{ height: 250, width: 250 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitude,
          longitudeDelta:location.longitude
        }}
        annotations={[
          {
            latitude: location.latitude,
            longitude: location.longitude,
          },
        ]}
        scrollEnabled={false}
        zoomEnabled={false}
      />
    </TouchableOpacity>
  );
};