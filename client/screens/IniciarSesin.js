import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import { useNavigation } from '@react-navigation/native'
import { Padding, Border, FontFamily, FontSize, Color } from '../GlobalStyles'

const IniciarSesin = ({ navigation }) => {
  // const navigation = useNavigation()

  return (
    <LinearGradient
      style={styles.iniciarSesin}
      locations={[0, 0.13, 0.37, 0.64, 0.88, 1]}
      colors={['#f25910', '#f7b99c', '#fff', '#fef8f5', '#642794', '#40036f']}
    >
      <ScrollView>
        <View style={styles.frameParent}>
          <View style={styles.capturaDePantalla20231024Parent}>
            <Image
              style={styles.capturaDePantalla20231024Icon}
              contentFit="cover"
              source={require('../assets/spotsport.png')}
            />
            <Text style={styles.encuentraTuPrueba}>ENCUENTRA TU PRUEBA</Text>
          </View>
          <View style={styles.frameGroup}>
            <View
              style={[styles.nombreDeUsuarioWrapper, styles.wrapperFlexBox]}
            >
              <TextInput
                style={[styles.nombreDeUsuario, styles.entrarTypo]}
                placeholder="Nombre de usuario"
              />
            </View>
            <View style={[styles.contraseaWrapper, styles.wrapperFlexBox]}>
              <TextInput
                style={[styles.nombreDeUsuario, styles.entrarTypo]}
                placeholder="Contraseña"
              />
            </View>
            <Pressable
              style={[styles.entrarWrapper, styles.wrapperFlexBox]}
              onPress={() => navigation.navigate('InicioDeportista')}
            >
              <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
            </Pressable>
            <Text style={[styles.hasOlvidadoTu, styles.entrarTypo]}>
              ¿Has olvidado tu contraseña?
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  entrarTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Icon: {
    width: 262,
    height: 69
  },
  encuentraTuPrueba: {
    fontSize: FontSize.size_3xl,
    color: Color.sportsNaranja,
    textAlign: 'center',
    marginTop: 6,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  capturaDePantalla20231024Parent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nombreDeUsuario: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inputPlaceholder
  },
  nombreDeUsuarioWrapper: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  contraseaWrapper: {
    marginTop: 10,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gris,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch'
  },
  entrar: {
    color: Color.gris,
    fontSize: FontSize.size_lg
  },
  entrarWrapper: {
    backgroundColor: Color.sportsNaranja,
    paddingHorizontal: Padding.p_11xl,
    marginTop: 10,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    height: 55,
    borderRadius: Border.br_31xl,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  hasOlvidadoTu: {
    fontSize: FontSize.size_mini,
    marginTop: 10,
    color: Color.sportsVioleta,
    textAlign: 'left'
  },
  frameGroup: {
    width: 318,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  frameParent: {
    // position: 'absolute',
    // marginTop: -400,
    // marginLeft: -180,
    // top: '50%',
    // left: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_181xl,
    paddingBottom: Padding.p_152xl,
    alignItems: 'center',
    height: 700
  },
  iniciarSesin: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: 700
  }
})

export default IniciarSesin