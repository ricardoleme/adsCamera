import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native'

import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons'

import Cabecalho from './components/Cabecalho'

export default function App() {
  //referência da câmera
  const cameraRef = useRef(null)
  //status do acesso à câmera
  const [temPermissao, setTemPermissao] = useState(null)
  const [iconePadrao, setIconePadrao] = useState('md')
  //tipo inicial da câmera (front ou back)
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back)
  //status inicial do flash
  const [tipoFlash, setTipoFlash] = useState(Camera.Constants.FlashMode.off)

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') {
        const cameraDisponível = await Camera.isAvailableAsync()
        setTemPermissao(!cameraDisponível)
      } else {
        const { status } = await Camera.requestPermissionsAsync();
        setTemPermissao(status === 'granted')
      }
    })()
  }, [])

  useEffect(() => {
    //dependendo do SO, exibiremos diferentes ícones
    switch (Platform.OS) {
      case 'android':
        setIconePadrao('md')
        break
      case 'ios':
        setIconePadrao('ios')
        break
    }
  }, [])

  if (temPermissao === false) {
    return <Text>Acesso negado à câmera ou o dispositivo não dispõem de uma</Text>
  }

  async function tirarFoto(){
    if(cameraRef) {
      const options = {
        quality: 0.5,
        skipProcessing: true,
        base64: true
      }
      const foto = await cameraRef.current.takePictureAsync(options)
      console.log(foto.uri)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho titulo="ADS Câmera" />
      <Camera
        style={{ flex: 1 }}
        type={tipoCamera}
        flashMode={tipoFlash}
        ratio={"16:9"}
        ref={cameraRef}>
        <View style={styles.camera}>
          <TouchableOpacity
            style={styles.touch}
            onPress={tirarFoto}
          >
            <Ionicons name={`${iconePadrao}-camera`} size={40} color="#9E9E9E" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setTipoCamera(
                tipoCamera === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }}
          >
            <Ionicons name={`${iconePadrao}-camera-reverse`} size={40} color="#9E9E9E" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setTipoFlash(
                tipoFlash === Camera.Constants.FlashMode.on
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.on
              )
            }}>
            <Ionicons name={
              tipoFlash === Camera.Constants.FlashMode.on
                ? iconePadrao + "-flash"
                : iconePadrao + "-flash-off"
            } size={40} color="#9E9E9E" />
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  touch: {
    margin: 20
  }
})