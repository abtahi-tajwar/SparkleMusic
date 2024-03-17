import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import { AlbumOptionDots } from "../../../assets/Icons";

const MusicScreenImg = require("../../../assets/dev/MusicScreenImg.jpg");

const AlbumComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image style={styles.bannerImg} source={MusicScreenImg} />
        <Text style={styles.title}>Favorites</Text>
      </View>

      <TouchableOpacity>
        <View>
          <AlbumOptionDots />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumComponent;
