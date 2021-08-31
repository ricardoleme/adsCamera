# Expo Camera
Exemplo em React Native (Expo) utilizando a API da Câmera. (Curso de Análise e Desenvolvimento de Sistemas da Fatec Itu) <br/>
*Example in React Native (Expo) using the Camera API. (Fatec Itu (small city in Brazil) - Systems Analysis and Development Course)* 


## Primeiros passos

  - Instale o expo-cli de forma global
```sh
$ npm install -g expo-cli
```
  - Para inicializar o projeto
```sh
$ expo init expocam
$ cd expocam
$ expo install expo-camera
$ expo install expo-media-library
$ expo start
```

## Instalação via clone

O projeto necessita do [node.js] para rodar.

Instale as dependências e devDependências e inicie o servidor

```sh
$ git clone https://github.com/ricardoleme/adsCamera
$ cd expo-camera
$ npm install -d
$ node app
```
## Gerando a APK para o Android 

- Obtenha uma conta gratuita do [Expo] antes de iniciar
- Edite o arquivo app.json e informe os dados do bundle, conforme exemplo:

```sh
"ios": {
      "bundleIdentifier": "br.edu.fatecitu.expocam",
      "buildNumber": "1.0.0"
    },
"android": {
      "package": "br.edu.fatecitu.expocam",
      "versionCode": 1
    },
```
- Digite o comando de geração da APK:
```sh
$ expo build:android -t apk
```
License
----

MIT


**Software Livre é vida!🐧**



   [node.js]: <http://nodejs.org>
   [Expo]: <https://expo.io/signup>
