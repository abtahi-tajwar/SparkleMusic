import { View, Text } from 'react-native'
import React from 'react'
import { TextStyle } from 'react-native'

type CustomTextProp = {
  variant?: ('300' | '300i' | '400' | '400i' | '700' | '700i'),
  style?: TextStyle,
  children: React.ReactNode
}

export default function CustomText({ children, variant, style} : CustomTextProp) {
  if (!variant) {
    return <Text style={[{ fontFamily: 'Aleo_400Regular' }, style]}>{children}</Text>
  }
  if (variant === '300') return <Text style={[{ fontFamily: 'Aleo_300Light' }, style]}>{children}</Text>
  if (variant === '300i') return <Text style={[{ fontFamily: 'Aleo_300Light_Italic' }, style]}>{children}</Text>
  if (variant === '400') return <Text style={[{ fontFamily: 'Aleo_400Regular' }, style]}>{children}</Text>
  if (variant === '400i') return <Text style={[{ fontFamily: 'Aleo_400Regular_Italic' }, style]}>{children}</Text>
  if (variant === '700') return <Text style={[{ fontFamily: 'Aleo_700Bold' }, style]}>{children}</Text>
  if (variant === '700i') return <Text style={[{ fontFamily: 'Aleo_700Bold_Italic' }, style]}>{children}</Text>
}