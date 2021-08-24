import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Cabecalho = ({titulo}) => {
    return(
        <View>
            <Text style={styles.tituloCabecalho}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloCabecalho: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingBottom:5,
        textAlign: 'center',
        backgroundColor: '#1A237E',
        color: "#FFFFFF"
    }
})
export default Cabecalho