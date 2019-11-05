import React from 'react';
import {View,Button,Linking,Alert} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

check(PERMISSIONS.ANDROID.READ_CALL_LOG && PERMISSIONS.ANDROID.READ_CONTACTS).
        then(result => {
            console.log(result);
            switch(result) {
                case RESULTS.UNAVAILABLE : console.log( 'This feature is not available (on this device / in this context)',);
                    break;
                case RESULTS.DENIED : console.log( 'The permission has not been requested / is denied but requestable',);
                    break;
                case RESULTS.BLOCKED : {
                   reqPermission();
                }
                    break;
                case RESULTS.GRANTED : console.log('The permission is granted');
                    break;
            }
        }).
        catch(error => {}).
        finally();
const PermissionHandle = (props) => {
    return(
        <View>
            <Button title = "Permission" onPress = {() => {
                Linking.openSettings();
            }} />
        </View>
    )
};

const reqPermission = () => {
    Alert.alert(
        "Alert Title",
        "Alert Msg",
        [
          { text: "Later", onPress: () => console.log("later pressed") },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
}

export default PermissionHandle;