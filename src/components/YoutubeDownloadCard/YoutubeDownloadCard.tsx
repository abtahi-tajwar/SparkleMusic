import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { Button } from 'react-native'
import React from 'react'
import { DownloadIcon, DownloadIcon2, PreviewIcon } from '../../../assets/Icons'
import CustomText from '../../atoms/Typography/CustomText'
import { useTheme } from '../Theme'

const TempMusicImage = require('../../../assets/dev/MusicScreenImg.jpg')

export default function YoutubeDownloadCard() {
    const theme = useTheme();
    const handlePreviewPress = () => {
        console.log("Pressed")
    }
    const styles = createStyles({ 
        theme
    })
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={TempMusicImage} style={styles.img} />
        </View>
      <View style={styles.previewBtnContainer}>
        <TouchableHighlight>
            <View style={styles.previewBtn}>
                <PreviewIcon color={'white'} />
                <CustomText>Preview</CustomText>
            </View>
        </TouchableHighlight>
      </View>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>Sphere - Jongho Baek (Original Cover)</CustomText>
        <TouchableHighlight>
            <View style={styles.downloadBtn}>
                <DownloadIcon2 color={'white'}/>
                <CustomText>Download</CustomText>
            </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const createStyles = ({ theme } : { theme: Config.Theme}) => {
    return StyleSheet.create({
        container: {
            width: '100%',
            // flex: 1,
            position: 'relative',
            backgroundColor: theme.colors?.backgroundPrimary,
            // height: 200
        },
        imgContainer: {
            width: '100%',
            height: 110,
        },
        img: {
            width: '100%',
            height: '100%',
            // aspectRatio: '1/1',
            objectFit: 'cover'
        },
        previewBtnContainer: {
            position: 'absolute',
            right: 4,
            top: 4,
        },
        previewBtn: {
            backgroundColor: '#000000A1',
            paddingVertical: 5,
            paddingHorizontal: 8,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
        },
        detailsContainer: {
            gap: 6,
            padding: 6
        },
        title: {
            fontSize: 8,
        },
        downloadBtn: {
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            backgroundColor: theme.colors?.primary,
            paddingVertical: 5,
            borderRadius: 4
        }
        
    })
}