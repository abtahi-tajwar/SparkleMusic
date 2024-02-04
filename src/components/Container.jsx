import { StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from './Theme';

function Container({ children }) {
  const theme = useTheme();
  return (
    <LinearGradient 
      colors={[theme.colors.backgroundPrimary, '#000000']} 
      locations={[0.05, 0.4]}
      style={styles.body}
    >
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