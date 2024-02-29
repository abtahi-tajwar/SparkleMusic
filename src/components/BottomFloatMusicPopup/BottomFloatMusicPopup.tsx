import { Animated, ImageSourcePropType, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ViewStyle } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { useTheme } from '../Theme';
import CustomText from '../../atoms/Typography/CustomText';
import { renderExceprt } from '../../utils/helpers';

const TempImage : ImageSourcePropType = require('../../../assets/dev/music-2.png')

export default function BottomFloatPopup() {
    const theme = useTheme()
    const style = createStyle(theme);

    const currentMusic = useAppSelector(state => state.music.currentMusic)

    // Animation values
    const initialAnimationValues = {
      popPositionBottom: 0,
      popRotate: 10
    }
    const popPositionBottom = useRef(new Animated.Value(initialAnimationValues.popPositionBottom)).current
    const popRotate = useRef(new Animated.Value(initialAnimationValues.popRotate)).current

    const animatePopup = () => {
      Animated.timing(popPositionBottom, {
        toValue: 40,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(popRotate, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }

    const resetAnimatePopup = () => {
      popPositionBottom.setValue(initialAnimationValues.popPositionBottom)
      popRotate.setValue(initialAnimationValues.popRotate)
    }


    useEffect(() => {
      resetAnimatePopup();
      animatePopup();
    }, [currentMusic?.asset])
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Animated.View
        style={[
          style.container,
          {
            bottom: popPositionBottom,
            transform: [{ rotate: popRotate.interpolate({
              inputRange: [0, 10],
              outputRange: ['0deg', '10deg']
            }) }],
          }
        ]}
      >
        <Image 
          source={TempImage}
          style={style.image}
        />
        <CustomText style={style.text}>{renderExceprt(currentMusic?.asset.filename as string, 30)}</CustomText>
      </Animated.View>
      
    </TouchableOpacity>
  )
}

const createStyle = (theme : Config.Theme) => {
    return StyleSheet.create({
          container: {
            // transformOrigin: "center",
            position: "absolute",
            // bottom: 40,
            alignSelf: 'center',
            borderRadius: 50,
            width: '80%',
            backgroundColor: theme.colors ? theme.colors.backgroundPrimary : 'black',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
        },
        image: {
          height: 32,
          width: 32,
          borderRadius: 50,
        },
        text: {
          color: 'white'
        }
    })
}