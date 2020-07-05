/**
 * 人脸验证
 */

import React from 'react';
import {View, ToastAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';

const FaceRecognitionScreen: () => React = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <RNCamera
        type={RNCamera.Constants.Type.front} // 后置摄像头还是前置摄像头
        captureAudio={false}
        style={{flex: 1}}
        faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate} // 人脸检测模式,更精确
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all} // 面部的兴趣点
        faceDetectionClassifications={
          RNCamera.Constants.FaceDetection.Classifications.all
        } // 确定是否存在某种面部特征
        pauseAfterCapture={false}
        onFaceDetectionError={(error) => {
          // console.log('error => ', error);
          // console.log('error.type => ', error.type);
          ToastAndroid.showWithGravity(
            '人脸检测器无法运行, 设备不支持',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }}
        onFacesDetected={(face) => {
          const faceData = face.faces[0];
          const probability = faceData.smilingProbability;
          if (probability > 0.2) {
            console.log('face => ', face);
            console.log('正在微笑 概率 ===> ', probability);
            ToastAndroid.showWithGravity(
              '正在微笑',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          const yawAngle = faceData.yawAngle;
          if (yawAngle > 20) {
            console.log('向左转脸 => ', yawAngle);
            ToastAndroid.showWithGravity(
              '向左转脸',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          if (yawAngle < -20) {
            console.log('向右转脸 => ', yawAngle);
            ToastAndroid.showWithGravity(
              '向右转脸',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          const leftEyeOpenProbability = faceData.leftEyeOpenProbability;
          const rightEyeOpenProbability = faceData.rightEyeOpenProbability;
          if (leftEyeOpenProbability < 0.05 && rightEyeOpenProbability < 0.05) {
            console.log('闭上眼睛啦');
            ToastAndroid.showWithGravity(
              '闭上眼睛啦',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
        }}
      />
    </View>
  );
};

export default FaceRecognitionScreen;
