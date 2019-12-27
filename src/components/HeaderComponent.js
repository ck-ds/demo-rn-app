import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import ic_back from '../assets/icons/ic_back.png';

const Header = props => {
  const handleBack = () => {
    props.nav.pop();
  };

  // header icon configuration
  let icon = ic_back;
  if (props.icon) {
    icon = props.icon;
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.menuPart}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={icon} resizeMode="cover" style={styles.menuIcon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: hp(7),
    flexDirection: 'row',
    backgroundColor: '#e84c3d',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
  },
  menuPart: {
    flexDirection: 'row',
  },
  menuIcon: {
    height: hp(3),
    aspectRatio: 1 / 1,
    marginRight: wp(3),
  },
  headerTitle: {
    fontSize: wp(4),
    color: '#fff',
  },
  headerLogo: {
    width: wp(22),
    aspectRatio: 6 / 2,
  },
});
