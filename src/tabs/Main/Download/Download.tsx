import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from "react-native"
import Container from '../../../components/Container'
import { Header, useTheme } from '../../../components'
import style from './style'
import CustomText from '../../../atoms/Typography/CustomText'
import YoutubeDownloadCard from '../../../components/YoutubeDownloadCard/YoutubeDownloadCard'
import { SearchIcon } from '../../../../assets/Icons'
import { Dimensions } from 'react-native'
import { Grid } from '../../../atoms/Grid/Grid'
import { FlatList } from 'react-native'
// import { Button } from '@react-native-material/core'

const NUMBER_OF_COLUMNS = 2;

function Download() {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width
  const styles = createStyles({ theme });
  const downloadList = [
    { id: "ojksfjd", data: null },
    { id: "wuroieuw", data: null },
    { id: "whunuis", data: null }
  ]
  return (
    <Container>
        <Header />
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput 
              placeholder='Type to search music from youtube'
              style={styles.searchInput}
              placeholderTextColor={'white'}
            />
            
            <TouchableHighlight>
                <View style={styles.searchBtn}>
                    <SearchIcon color={'white'} />
                    <CustomText>Search</CustomText>
                </View>
            </TouchableHighlight>
          </View>
          <CustomText style={styles.searchResultLabel}>Search Results</CustomText>
          {/* <Grid 
              width={(screenWidth - 44)}
              cols={2}
              gap={9}
              data={[1, 1]}
              element={() => <YoutubeDownloadCard />}
            /> */}
            <FlatList 
              data={downloadList}
              numColumns={NUMBER_OF_COLUMNS}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ gap: 10 }}
              contentContainerStyle={{ gap: 10 }}
              renderItem={() => (
                <View style={{ flex: 1/NUMBER_OF_COLUMNS }}>
                  <YoutubeDownloadCard />
                </View>
              )}
            />
        </View>
    </Container>
  )
}

type CreateStyleProp = {
    theme : Config.Theme
}

const createStyles = ({ theme } : CreateStyleProp) => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 22,
      marginVertical: 12
    },
    searchContainer: {
      flexDirection: 'row',
      gap: 24,
      alignItems: 'center',
      marginBottom: 30
    },
    searchInput: {
      flex: 1,
      fontFamily: theme.typography?.fonts.primary.lightItalic,
      fontSize: 15,
      color: 'white',
      
    },
    searchBtn: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
      flexDirection: 'row',
      gap: 7,
      fontFamily: theme.typography.fonts.primary.bold,
      backgroundColor: theme.colors.backgroundPrimary
    },
    searchResultLabel: {
      fontSize: 15,
      marginBottom: 12
    },
    downloadCardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    
  })
}

export default Download