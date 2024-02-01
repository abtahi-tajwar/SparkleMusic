import { View, Button } from 'react-native'
import style from './Style'
import { MainLogoWithText, ProfileIcon, SettingsIcon } from '../../../assets/Icons'
import { IconButton } from '@react-native-material/core'

export function Header() {
  return (
    <View style={style.container}>
      <View style={style.mainLogo}><MainLogoWithText /></View>
      <View style={style.iconsContainer}>
        <IconButton icon={<ProfileIcon />} />
        <IconButton icon={<SettingsIcon />} />
      </View>
    </View>
  )
}
