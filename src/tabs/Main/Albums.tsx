import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Header } from "../../components";
import { styles } from "./Style";
import { SortIcon, AddIcon } from "../../../assets/Icons";
import AlbumComponent from "../../components/AlbumComponent/AlbumComponent";
function Albums() {
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
          <AlbumComponent />
          <AlbumComponent />
          <AlbumComponent />
        </View>
      </View>
    </Container>
  );
}

export default Albums;
