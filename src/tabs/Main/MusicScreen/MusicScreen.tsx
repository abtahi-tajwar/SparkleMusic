import { View } from "react-native";
import {
  CurrentMusicDuration,
  CurrentMusicSeeker,
  Header,
} from "../../../components";
import Container from "../../../components/Container";
import { Image, Text } from "react-native";
import { styles } from "./Style";
import { CurrentMusicActionButtons } from "../../../components/CurrentMusicActionButtons/CurrentMusicActionButtons";
import { MediaRepeatIcon, MediaShuffleIcon } from "../../../../assets/Icons";
import { useAppSelector } from "../../../redux/hooks";

const MusicScreenImg = require("../../../../assets/dev/MusicScreenImg.jpg");

function MusicScreen() {
  const musicState = useAppSelector((state) => state.music);

  return (
    <Container>
      <Header></Header>

      {musicState.currentMusic && (
        <View>
          <View style={styles.bannerImgContainer}>
            <Image style={styles.bannerImg} source={MusicScreenImg} />
          </View>
          <Text style={styles.title}>
            {musicState.currentMusic.asset.filename}
          </Text>
          <View style={styles.controller}>
            <CurrentMusicDuration style={styles.duration} />
            <CurrentMusicSeeker />
          </View>
          <View style={styles.actionBtnContainer}>
            <MediaShuffleIcon color={'white'} />
            <CurrentMusicActionButtons
              style={styles.actionBtn}
              varient="full"
            />
            <MediaRepeatIcon color={'white'} />
          </View>
        </View>
      )}
    </Container>
  );
}

export default MusicScreen;
