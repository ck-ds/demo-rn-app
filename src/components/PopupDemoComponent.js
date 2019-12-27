import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PopupDemoComponent = props => {
  let parentView = null;

  const handleStartShouldSetResponder = event => {
    if (parentView._nativeTag === event.target) {
      props.closePopup();
    }
  };

  const setViewRef = ref => {
    parentView = ref;
  };

  return (
    <View
      ref={setViewRef}
      onStartShouldSetResponder={handleStartShouldSetResponder}
      style={styles.modalContainer}>
      <View style={styles.popupContainer}>
        <Text style={styles.popupText}>Pop Up Demo</Text>
      </View>
    </View>
  );
};

export default PopupDemoComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '80%',
    height: 160,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupText: {
    color: 'green',
    fontSize: 20,
    fontWeight: '800',
  },
});
