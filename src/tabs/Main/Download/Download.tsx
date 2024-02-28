import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, TextInputChangeEventData, NativeSyntheticEvent } from "react-native";
import Container from "../../../components/Container";
import { Header, useTheme } from "../../../components";
import style from "./style";
import CustomText from "../../../atoms/Typography/CustomText";
import YoutubeDownloadCard from "../../../components/YoutubeDownloadCard/YoutubeDownloadCard";
import { SearchIcon } from "../../../../assets/Icons";
import { Dimensions } from "react-native";
import { Grid } from "../../../atoms/Grid/Grid";
import { FlatList } from "react-native";
import { startDownloadMusicFromYoutube, searchMusicFromYoutube } from "../../../redux/slices/youtube";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import * as FileSystem from "expo-file-system";
import DownloadProgressPopup from "../../../components/DownloadProgressPopup/DownloadProgressPopup";
import useYoutubeDownload from "../../../hooks/useYoutubeDownload";
// import { Button } from '@react-native-material/core'
import { Alert } from "react-native";
import { ActivityIndicator } from "@react-native-material/core";

const NUMBER_OF_COLUMNS = 2;

function Download() {
  const theme = useTheme();
  const { startDownload } = useYoutubeDownload();
  const screenWidth = Dimensions.get("window").width;
  const styles = createStyles({ theme });
  const dispatch = useAppDispatch();
  const youtubeState = useAppSelector((state) => state.youtube);
  const searchResults = youtubeState.searchResults;
  const searchLoading = youtubeState.loading.searchMusicFromYoutube;
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   console.log(JSON.stringify(searchResults))
  // }, [searchResults])
  const handleSearch = () => {
    dispatch(
      searchMusicFromYoutube({
        q: searchInput,
        maxResults: 10,
      })
    )
      .unwrap()
      .then((res) => {
        // Alert.alert('Debug Alert', `${searchInput}:${JSON.stringify(res)}`, [{
        //   text: 'Close',
        //   style: "cancel"
        // }])
        console.log(searchInput, JSON.stringify(res));
      })
      .catch((e) => {
        // Alert.alert('Error Alert', `${searchInput}:${JSON.stringify(e)}`, [{
        //   text: 'Close',
        //   style: "cancel"
        // }])
        console.log("Search error", e);
      });
  };
  const handleSearchInput = (text: string) => {
    setSearchInput(text);
  };

  const handleDownload = async ({ title, id }: { id: string; title: string }) => {
    // const response = await dispatch(startDownloadMusicFromYoutube({ title, id })).unwrap();
    startDownload({ id, title });
  };
  return (
    <Container>
      <Header />
      <View style={styles.container}>
        <DownloadProgressPopup />
        <View style={styles.searchContainer}>
          <TextInput placeholder="Type to search music from youtube" style={styles.searchInput} placeholderTextColor={"white"} value={searchInput} onChangeText={(text) => handleSearchInput(text)} />

          <TouchableHighlight onPress={handleSearch}>
            <View style={styles.searchBtn}>
              <SearchIcon color={"white"} />
              <CustomText>Search</CustomText>
            </View>
          </TouchableHighlight>
        </View>
        {!searchLoading ? <>
          <CustomText style={styles.searchResultLabel}>Search Results</CustomText>
          {/* <Grid 
              width={(screenWidth - 44)}
              cols={2}
              gap={9}
              data={[1, 1]}
              element={() => <YoutubeDownloadCard />}
            /> */}
          <View style={{ height: "auto", marginBottom: 330 }}>
            <FlatList
              // style={{ flex: 1 }}
              data={searchResults}
              numColumns={NUMBER_OF_COLUMNS}
              keyExtractor={(item) => item.id.videoId}
              columnWrapperStyle={{ gap: 10 }}
              contentContainerStyle={{ gap: 10 }}
              // style={{ marginBottom: 1000 }}
              renderItem={(data) => (
                <View style={{ flex: 1 / NUMBER_OF_COLUMNS }}>
                  <YoutubeDownloadCard id={data.item.id.videoId} title={data.item.snippet.title} thumbnail={data.item.snippet.thumbnails.default.url} description={data.item.snippet.description} onDownload={handleDownload} />
                </View>
              )}
            />
          </View>
        </> : <ActivityIndicator size={'large'} color={theme.colors.primary}/>}
      </View>
    </Container>
  );
}

type CreateStyleProp = {
  theme: Config.Theme;
};

const createStyles = ({ theme }: CreateStyleProp) => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 22,
      marginVertical: 12,
      gap: 12,
    },
    searchContainer: {
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      marginBottom: 30,
    },
    searchInput: {
      flex: 1,
      fontFamily: theme.typography?.fonts.primary.lightItalic,
      fontSize: 15,
      color: "white",
    },
    searchBtn: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
      flexDirection: "row",
      gap: 7,
      fontFamily: theme.typography.fonts.primary.bold,
      backgroundColor: theme.colors.backgroundPrimary,
    },
    searchResultLabel: {
      fontSize: 15,
      marginBottom: 12,
    },
    downloadCardsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });
};

export default Download;
