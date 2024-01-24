import * as React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'

const PruebasEncontradasDetalle = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.pruebasEncontradasDetalle}>
      <View style={[styles.unsplashon4qwhhjcemParent, styles.parentPosition]}>
        <Image
          style={styles.unsplashon4qwhhjcemIcon}
          contentFit="cover"
          source={require('../assets/unsplashon4qwhhjcem.png')}
        />
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.pruebaDeCiclismo, styles.reseasDeLaTypo]}>
                Prueba de ciclismo
              </Text>
              <Text style={[styles.modalidadMontaa, styles.ciclismoTypo]}>
                Modalidad Montaña
              </Text>
            </View>
            <View style={styles.alertParent}>
              <Image
                style={styles.alertIcon}
                contentFit="cover"
                source={require('../assets/alert.png')}
              />
              <Image
                style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                contentFit="cover"
                source={require('../assets/claritysharesolid.png')}
              />
              <Image
                style={[styles.clarityshareSolidIcon, styles.containerLayout]}
                contentFit="cover"
                source={require('../assets/like--spotsport.png')}
              />
            </View>
          </View>
          <Text
            style={[styles.loremIpsumDolor, styles.laInscripcinDeLayout]}
          >{`Lorem ipsum dolor sit amet consectetur. Scelerisque augue mattis libero tristique venenatis vulputate tristique. 

Mi feugiat cras dignissim proin pharetra. Eget in tellus mi cras fames vestibulum. `}</Text>
          <Text style={[styles.laInscripcinDe, styles.laInscripcinDeLayout]}>
            La inscripción de la prueba es en el pueblo de Hornachos, Badajoz.
            Se celebrará el 1 de febrero de 2024. Si te interesa par-ticipar
            tienes hasta el 22 de enero de 2024 para realizar la inscripción. El
            precio de inscripción es de 22€ por persona.
          </Text>
          <Text style={[styles.reseasDeLa, styles.reseasDeLaTypo]}>
            Reseñas de la prueba
          </Text>
        </View>
        <Pressable
          style={[styles.cilarrowTopParent, styles.parentSpaceBlock]}
          onPress={() => navigation.navigate('PruebasEncontradasOrdenar')}
        >
          <Image
            style={styles.cilarrowTopIcon}
            contentFit="cover"
            source={require('../assets/cilarrowtop.png')}
          />
          <Text style={[styles.ciclismo, styles.ciclismoTypo]}>Ciclismo</Text>
        </Pressable>
      </View>
      <View style={[styles.menInferior, styles.menInferiorPosition]}>
        <View style={[styles.groupParent, styles.menInferiorPosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('UltimasConsultas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-1171276700.png')}
            />
          </Pressable>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate('Favoritos1')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/vector.png')}
            />
          </Pressable>
          <Image
            style={styles.capturaDePantalla20231124}
            contentFit="cover"
            source={require('../assets/captura-de-pantalla-20231124-114115-1.png')}
          />
          <Pressable
            style={[styles.container, styles.containerLayout]}
            onPress={() => navigation.navigate('HistorialDePruebas')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/frame-1547756022.png')}
            />
          </Pressable>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate('TuPerfil')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/group-1171276701.png')}
            />
          </Pressable>
        </View>
        <Image
          style={styles.menInferiorChild}
          contentFit="cover"
          source={require('../assets/ellipse-7194.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    position: 'absolute'
  },
  reseasDeLaTypo: {
    color: Color.sportsNaranja,
    fontSize: FontSize.size_3xl,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  ciclismoTypo: {
    color: Color.sportsVioleta,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700'
  },
  containerLayout: {
    width: 20,
    height: 20
  },
  laInscripcinDeLayout: {
    width: 320,
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size,
    marginTop: 20
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  unsplashon4qwhhjcemIcon: {
    maxWidth: '100%',
    height: 351,
    zIndex: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    width: '100%'
  },
  pruebaDeCiclismo: {
    textAlign: 'left'
  },
  modalidadMontaa: {
    fontSize: FontSize.size_lg
  },
  alertIcon: {
    height: 22,
    width: 19
  },
  clarityshareSolidIcon: {
    marginLeft: 10,
    height: 20,
    overflow: 'hidden'
  },
  alertParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: 'row'
  },
  frameGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  loremIpsumDolor: {
    fontWeight: '300',
    fontFamily: FontFamily.interLight,
    marginTop: 20,
    textAlign: 'left'
  },
  laInscripcinDe: {
    textAlign: 'justify',
    marginTop: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    color: Color.violeta2,
    fontSize: FontSize.inputPlaceholder_size
  },
  reseasDeLa: {
    marginTop: 20,
    textAlign: 'left'
  },
  frameParent: {
    backgroundColor: Color.naranja3,
    padding: Padding.p_xl,
    zIndex: 1,
    alignSelf: 'stretch'
  },
  cilarrowTopIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  ciclismo: {
    fontSize: FontSize.size_xl,
    marginLeft: 13
  },
  cilarrowTopParent: {
    top: 50,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    width: 178,
    height: 53,
    zIndex: 2,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.blanco
  },
  unsplashon4qwhhjcemParent: {
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
    marginLeft: 47,
    height: 20
  },
  capturaDePantalla20231124: {
    width: 33,
    height: 33,
    marginLeft: 47
  },
  container: {
    marginLeft: 47,
    height: 20
  },
  frame: {
    marginLeft: 47,
    height: 20,
    width: 19
  },
  groupParent: {
    top: 10,
    backgroundColor: Color.gris,
    height: 65,
    justifyContent: 'center',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  menInferiorChild: {
    left: 165,
    width: 37,
    height: 24,
    top: 0,
    position: 'absolute'
  },
  menInferior: {
    top: 725,
    height: 75
  },
  pruebasEncontradasDetalle: {
    flex: 1,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.blanco
  }
})

export default PruebasEncontradasDetalle
