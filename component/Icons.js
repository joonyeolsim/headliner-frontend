import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';

export const ViewIcon  = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='eye-outline'
  />
);

export const VideoIcon  = () => (
    <Icon
      style={styles.icon}
      fill='#8F9BB3'
      name='video-outline'
    />
  );

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});