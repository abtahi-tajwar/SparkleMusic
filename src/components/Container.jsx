import { StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from './Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';

function Container({ children }) {
  const theme = useTheme();
  return (
    <>
      <StatusBar barStyle="dark" backgroundColor={theme.colors.backgroundPrimary}  />
      <LinearGradient 
        colors={[theme.colors.backgroundPrimary, '#000000']} 
        locations={[0, 0.4]}
        style={styles.body}
      >
          {children}
      </LinearGradient>
    </>

  )
}

var styles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: 'black',
      color: 'white'
    },
    body: {
      display: 'flex',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      paddingTop: 0,
    }
});

export default Container