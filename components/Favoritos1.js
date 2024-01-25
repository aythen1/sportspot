import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'

const Favoritos1 = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.favoritos}>
      <View style={[styles.frameParent, styles.parentSpaceBlock1]}>
        <View>
          <Text style={[styles.tusFavoritos, styles.imGoingToFlexBox1]}>
            TUS FAVORITOS
          </Text>
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock4]}>
          <View style={styles.groupParentFlexBox5}>
            <Text style={styles.tusListasTypo}>Tus listas</Text>
          </View>
        </View>
        <Pressable
          style={[styles.frameContainer, styles.frameSpaceBlock4]}
          onPress={() => navigation.navigate('Favoritos')}
        >
          <View style={styles.frameGroup}>
            <View style={styles.pruebasDeCiclismoWrapper}>
              <Text style={styles.tusListasTypo}>Pruebas de ciclismo</Text>
            </View>
            <Text style={[styles.imGoingTo, styles.imGoingToFlexBox1]}>
              (2) Pruebas añadidas
            </Text>
          </View>
        </Pressable>
        <View style={[styles.frameContainer, styles.frameSpaceBlock4]}>
          <View style={styles.frameGroup}>
            <View style={styles.pruebasDeSenderismocaminataWrapper}>
              <Text
                style={[
                  styles.pruebasDeSenderismocaminata,
                  styles.tusListasTypo
                ]}
              >
                Pruebas de senderismo/caminata
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.imGoingToFlexBox1]}>
              (1) Pruebas añadidas
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentSpaceBlock1: {
    paddingHorizontal: Padding.p_xl,
    width: 360,
    position: 'absolute'
  },
  imGoingToFlexBox1: {
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  frameSpaceBlock4: {
    marginTop: 25,
    alignSelf: 'stretch'
  },
  tusListasTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  groupParentFlexBox5: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameLayout8: {
    height: 20,
    marginLeft: 47
  },
  tusFavoritos: {
    fontSize: FontSize.size_5xl,
    color: Color.sportsVioleta,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  frameWrapper: {
    justifyContent: 'center'
  },
  pruebasDeCiclismoWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  imGoingTo: {
    fontSize: FontSize.size_3xs,
    fontWeight: '500',
    color: Color.sportsNaranja,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder
  },
  frameGroup: {
    padding: Padding.p_3xs,
    flex: 1
  },
  frameContainer: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: 'row'
  },
  pruebasDeSenderismocaminata: {
    flex: 1
  },
  pruebasDeSenderismocaminataWrapper: {
    width: 212,
    flexDirection: 'row'
  },
  frameParent: {
    paddingTop: Padding.p_48xl,
    left: '50%',
    marginLeft: -180,
    paddingHorizontal: Padding.p_xl,
    top: 0
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    width: 22,
    height: 25
  },
  vector: {
    width: 23,
    marginLeft: 47
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    width: 20,
    marginLeft: 47
  },
  frame: {
    width: 19,
    marginLeft: 47
  },
  groupParent: {
    top: 10,
    left: 0,
    backgroundColor: Color.gris,
    height: 65,
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_xl,
    width: 360,
    position: 'absolute'
  },
  favoritos: {
    backgroundColor: Color.blanco,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Favoritos1