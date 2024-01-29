import React from 'react'
import {
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F25910', '#F6B99C', '#FFF', '#FEF8F5', '#652794', '#40036F']}
        style={styles.linearGradient}
      >
        <ScrollView>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require('../assets/spotsport.png')}
          />
          <Text
            style={{
              color: '#F25910',
              fontSize: 22,
              marginBottom: 63,
              alignSelf: 'center'
              // marginHorizontal: 47
            }}
          >
            {'ENCUENTRA TU PRUEBA'}
          </Text>
          <Text
            style={{
              color: '#F25910',
              fontSize: 40,
              marginBottom: 9,
              alignSelf: 'center'
              // marginHorizontal: 45
            }}
          >
            {'Bienvenido/a'}
          </Text>
          <View style={{ marginTop: 40 }}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18
                }}
              >
                {'Iniciar sesión con Google'}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18
                }}
              >
                {'Iniciar sesión con Apple'}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18
                }}
                onPress={() => navigation.navigate('IniciarSesin')}
              >
                {'Iniciar sesión sin registro'}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#E2DCEC',
                borderRadius: 50,
                paddingVertical: 20,
                marginBottom: 10,
                marginHorizontal: 21
              }}
            >
              <Text
                style={{
                  color: '#40036F',
                  fontSize: 18
                }}
                onPress={() => navigation.navigate('Registrarse')}
              >
                {'Registrarse'}
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 262,
    height: 69,
    marginVertical: 60,
    marginBottom: 11,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignContent: 'center'
  }
})
