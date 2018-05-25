import React from 'react';

import {
  Camera,
  Permissions
} from 'expo';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  CameraKitCamera,
  CameraKitGallery,
} from 'react-native-ui-lib';

class AppCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: false
    };
  }

  render() {
    const {
      permission
    } = this.state;

    const {
      onCheckGalleryAuthoPressed
    } = this;

    console.log(onCheckGalleryAuthoPressed)

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => onCheckGalleryAuthoPressed()}>
            <Text style={styles.buttonText}>
              Photos Autotization Status
            </Text>
          </TouchableOpacity>
        { 
          permission &&
          <CameraKitCamera
            ref={ cam => this.camera = cam }
            style={ styles.cameraScreen }
            onReadQRCode={ e => console.log(e.nativeEvent.qrcodeStringValue) }
          />}

        { !permission && <Text>No access to camera</Text> }
      </View>
    );
  }

    onCheckCameraAuthoPressed = async () => {
    const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
    console.log(123)
    if (success) {
      console.log(success)
      AlertIOS.alert('You have permission 🤗')
    }
    else {
      console.log(success)
      AlertIOS.alert('No permission 😳')
    }
    console.log(1233)
  }
}

const styles = StyleSheet.create({
  cameraScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AppCamera;
