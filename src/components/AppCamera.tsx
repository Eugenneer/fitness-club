import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll, ImagePickerIOS } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import { Ionicons } from '@expo/vector-icons';
  
interface Props {
    hasCameraPermission: any,
    type: any
}

interface State {

}
export default class CameraExample extends React.Component<Props,State> {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  /*componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  */

  snap = async () => {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync()
        let promise = CameraRoll.saveToCameraRoll(photo.uri,'photo')
            promise.then(function(result) { 
                console.log('save succeeded ' + result)
            }).catch(function(error) { 
                console.log('save failed ' + error)
            });
                console.log(photo)
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style = {{ flex: 1 }} 
            type = {this.state.type}
            ratio = '16:9' 
            ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.snap}
                style={{
                    flex: 0.8,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                <Ionicons name="ios-radio-button-on" size={70} color="white" />
            </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}