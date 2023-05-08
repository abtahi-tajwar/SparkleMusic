import { StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Container({ children }) {
  return (
    <LinearGradient colors={['#483737', '#000000']} style={styles.body}>
        {children}
    </LinearGradient>

  )
}

var styles = StyleSheet.create({
    body: {
      display: 'flex',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      paddingTop: 30
    }
});

export default Container