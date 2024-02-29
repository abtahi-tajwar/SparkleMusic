import { StyleSheet, Text, TouchableHighlight, View, ProgressBarAndroid } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/Typography/CustomText'
import { useTheme } from '../Theme';
import { Flex, FlexSpaceBetween } from '../../atoms';
import { DeleteIcon, MediaPauseIcon } from '../../../assets/Icons';
import * as Progress from 'react-native-progress';
import { renderExceprt } from '../../utils/helpers';
import { useAppSelector } from '../../redux/hooks';


export default function DownloadProgressPopup() {
  const theme = useTheme();
  const styles = createStyles({ theme })
  const youtubeState = useAppSelector(state => state.youtube)
  const { currentDownloadObject, downloadProgress } = youtubeState
  return (
    currentDownloadObject ? <View style={styles.container}>
      <View>
        <CustomText variant='300i' style={styles.songLabel}>Now Downloading</CustomText>
      </View>
      <FlexSpaceBetween>
        <CustomText style={styles.songTitle}>{renderExceprt(currentDownloadObject.details.title, 20)}</CustomText>
        <Flex style={{ gap: 12 }}>
          <TouchableHighlight>
            <MediaPauseIcon color={'white'} />
          </TouchableHighlight>
          <TouchableHighlight>
            <DeleteIcon color={'white'} />
          </TouchableHighlight>
        </Flex>
      </FlexSpaceBetween>
      <View style={{ marginTop: 12 }}>
        <Progress.Bar 
          // style={{ width: '100%' }}
          progress={downloadProgress} 
          width={300} 
          animated={true} 
          color={theme.colors.primary}
          borderColor={theme.colors.primaryLight}
        />
      </View>
    </View> : <View></View>
  )
}

const createStyles = ({ theme } : { theme : Config.Theme }) => {
    return StyleSheet.create({
      container: {
        padding: 12,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 5,
        backgroundColor: theme.colors.backgroundPrimary
      },
      songLabel: {
        fontSize: 12,
      },
      songTitle: {
        fontSize: 18
      }
  })
}