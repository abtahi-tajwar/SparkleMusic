import { View, Button } from 'react-native'
import style from './Style'
import { MainLogoWithText, ProfileIcon, SettingsIcon } from '../../../assets/Icons'
import { IconButton } from '@react-native-material/core'
import { useTheme } from '../Theme'

export function Header() {
  const theme = useTheme();
  return (
    <View style={style.container}>
      <View style={style.mainLogo}><MainLogoWithText fill={theme.colors?.primary} /></View>
      <View style={style.iconsContainer}>
        <IconButton icon={<ProfileIcon />} />
        <IconButton icon={<SettingsIcon />} />
      </View>
    </View>
  )
}
