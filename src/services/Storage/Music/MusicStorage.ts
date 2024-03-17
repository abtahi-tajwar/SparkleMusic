import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "expo-media-library";

export default class MusicStorage {
    static saveLastPlayedMusic (asset : Asset) {
        AsyncStorage.setItem('lastPlayedMusic', JSON.stringify(asset));
    }
    static getLastPlayedMusic () {
        return new Promise(async (resolve, reject) => {
            const lastPlayedMusic = await AsyncStorage.getItem('lastPlayedMusic')
            if (lastPlayedMusic) {
                resolve(JSON.parse(lastPlayedMusic))
            } else reject(null);
        })
    }
}