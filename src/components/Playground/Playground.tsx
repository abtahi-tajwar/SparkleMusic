
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Playground() {
  return (
    <View>
      <Text>Playground</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


// import { View, Text, StyleSheet } from 'react-native'
// import React, { useEffect } from 'react'
// import { downloadToFolder } from 'expo-file-dl'
// import { Button } from 'react-native'
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import * as Device from 'expo-device';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//     }),
//   });

//   async function registerForPushNotificationsAsync() {
//     let token;
  
//     if (Platform.OS === 'android') {
//       await Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//       });
//     }
  
//     if (Device.isDevice) {
//       const { status: existingStatus } = await Notifications.getPermissionsAsync();
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//         const { status } = await Notifications.requestPermissionsAsync();
//         finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//         alert('Failed to get push token for push notification!');
//         return;
//       }
//       // Learn more about projectId:
//       // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
//       token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
//       console.log(token);
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }
  
// }

// useEffect(() => {
//     registerForPushNotificationsAsync().then(token => console.log(token));
//   }, []);

// export default function Playground() {
//   return (
//     <View style={styles.container}>
//       <Button title='Download' onPress={async () => {
//         await downloadToFolder(
//           'https://mgamma.123tokyo.xyz/get.php/6/29/UxxajLWwzqY.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=nuUcAbXZC9--Xh3QsNWSrw&s=1708944098&n=Icona%20Pop%20-%20I%20Love%20It%20%28feat.%20Charli%20XCX%29%20%5BOFFICIAL%20VIDEO%5D',
//           'test-ytdownload-music.mp3',
//           'sparkle-music-download',
//           'default',
//           {
//             notificationType: {notification: 'custom'},
//             notificationContent: {
//               downloading: {
//                 title: 'Download In Progress',
//               },
//               finished: {
//                 title: 'Complete!',
//               },
//               error: {
//                 title: 'Oops!'
//               },
//             },
//             downloadProgressCallback: (data) => {
//               const {totalBytesWritten, totalBytesExpectedToWrite} = data;
//               const pctg = 100 * (totalBytesWritten / totalBytesExpectedToWrite);
//               console.log(`${pctg.toFixed(0)}%`);
//             },
//           }
//         );
//       }}
//       />
//       <Text>Playground</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })