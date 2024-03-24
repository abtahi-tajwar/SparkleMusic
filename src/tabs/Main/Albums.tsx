import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Header } from "../../components";
import { styles } from "./Style";
import { SortIcon, AddIcon } from "../../../assets/Icons";
import AlbumComponent from "../../components/AlbumComponent/AlbumComponent";
import { useAppSelector } from "../../redux/hooks";
function Albums() {
  const albums = useAppSelector((state) => state.album.albums);
  console.log(albums);
  return (
    <Container>
      <Header />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Albums</Text>
          <View>
            <TouchableOpacity>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.sortContainer}>
            <SortIcon />
            <Text style={styles.sortTitle}>Recents</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.albumContainer}>
          {albums &&
            albums.map((album, i: Number) => (
              <View>
                <AlbumComponent key={i} title={album.title} />
              </View>
            ))}
        </View>
      </View>
    </Container>
  );
}

export default Albums;
