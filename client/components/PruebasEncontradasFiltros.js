import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Switch,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEventFromPrice,
  setFiltersToFilters
} from '../redux/slices/events.slices'
import { List } from 'react-native-paper'

const PruebasEncontradasFiltros = ({ setModalVisible }) => {
  const dispatch = useDispatch()
  const { eventsFilter } = useSelector((state) => state.events)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(150)
  const [typesFilter, setTypesFilter] = useState({})
  const [switchStates, setSwitchStates] = useState({})

  const toggleSwitch = (key, value) => {
    const [name, modality] = key.split('-')

    setSwitchStates((prevState) => ({ ...prevState, [key]: value }))

    setTypesFilter((prevState) => {
      const updateState = { ...prevState }

      if (value) {
        updateState[name] = [...(updateState[name] || []), modality]
      } else {
        updateState[name] = (updateState[name] || []).filter(
          (item) => item !== modality
        )
      }

      return updateState
    })
  }

  const toggleSwitchSport = (key, value) => {
    const name = key.split('-')[1]

    setSwitchStates((prevState) => ({ ...prevState, [key]: value }))

    setTypesFilter((prevState) => {
      const updateState = { ...prevState }

      if (value) {
        updateState[name] = [...(updateState[name] || [])]
      }

      return updateState
    })
  }

  const handleValuesChange = (newValues) => {
    setStart(newValues[0])
    setEnd(newValues[1])
  }

  const priceDispatch = () => {
    dispatch(setEventFromPrice({ start, end }))
  }

  const uniqueSports = {}

  eventsFilter.forEach((event) => {
    const { sportname, event_modality } = event
    if (!uniqueSports[sportname]) {
      uniqueSports[sportname] = { sportname, event_modality: [event_modality] }
    } else {
      if (!uniqueSports[sportname].event_modality.includes(event_modality)) {
        uniqueSports[sportname].event_modality.push(event_modality)
      }
    }
  })

  const result = Object.values(uniqueSports)

  const [expandedStates, setExpandedStates] = useState({})

  const handlePress = (sportName) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [sportName]: !prevState[sportName]
    }))
  }

  const submit = () => {
    setModalVisible(false)
    dispatch(setFiltersToFilters(typesFilter))
  }

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        marginTop: 226,
        paddingBottom: 300,
        paddingHorizontal: 15
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.tuPresupuestoParent, styles.parentFrameFlexBox]}>
        <Text style={[styles.tuPresupuesto, styles.filtrosTypo]}>
          Tu presupuesto:
        </Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Image
            style={styles.charmcrossIcon}
            contentFit="cover"
            source={require('../assets/charmcross.png')}
          />
        </Pressable>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inicio: {start}</Text>
        <Text>Fin: {end}</Text>
        <MultiSlider
          values={[start, end]}
          sliderLength={300}
          onValuesChange={handleValuesChange}
          onValuesChangeFinish={priceDispatch}
          min={0}
          max={200}
          step={1}
          allowOverlap={false}
          snapped
          markerStyle={{
            // height: Platform.select({ ios: 20, android: 30 }),
            // width: Platform.select({ ios: 20, android: 30 }),
            // borderRadius: Platform.select({ ios: 10, android: 15 }),
            backgroundColor: Color.sportsNaranja
          }}
          selectedStyle={{ backgroundColor: Color.naranja3 }}
          unselectedStyle={{ backgroundColor: 'lightgray' }}
          containerStyle={{ height: 40 }}
        />
      </View>

      <View>
        <View
          style={{
            // backgroundColor: 'red'
            flexDirection: 'column'
            // justifyContent: 'center'
            // alignItems: 'center'
          }} /* style={styles.frameParent2} */
        >
          {result.map((sport, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <List.Section
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5
                }}
                titleStyle={[styles.ciclsmo, styles.ciclsmoTypo]}
                title={`${sport.sportname
                  .slice(0, 1)
                  .toUpperCase()}${sport.sportname.slice(1)}`}
              >
                <List.Accordion
                  onPress={() => handlePress(sport.sportname)}
                  expanded={expandedStates[sport.sportname]}
                >
                  {sport.event_modality.map((type, i) => (
                    <View
                      key={i}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <List.Item
                        titleStyle={[styles.carretera, styles.filtrosTypo]}
                        title={type}
                      />
                      <Switch
                        trackColor={{ false: '#767577', true: '#F25910' }}
                        thumbColor={
                          switchStates[`${sport.sportname}-${type}`]
                            ? '#FFFFFF'
                            : '#FFFFFF'
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(value) =>
                          toggleSwitch(`${sport.sportname}-${type}`, value)
                        }
                        value={switchStates[`${sport.sportname}-${type}`]}
                        style={styles.switch}
                      />
                    </View>
                  ))}
                </List.Accordion>
              </List.Section>
              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#F25910' }}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) =>
                    toggleSwitchSport(
                      `${sport.sportname}-${sport.sportname}`,
                      value
                    )
                  }
                  value={switchStates[`${sport.sportname}-${sport.sportname}`]}
                  style={styles.switch}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Color.sportsNaranja,
          height: 42,
          marginTop: 10,
          padding: Padding.p_3xs,
          borderRadius: Border.br_31xl,
          alignSelf: 'stretch',
          justifyContent: 'center',
          width: '100%'
        }}
        onPress={() => submit()}
      >
        <Text
          style={{
            color: Color.blanco,
            textAlign: 'center',
            fontSize: FontSize.inputPlaceholder_size,
            alignSelf: 'stretch',
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700'
          }}
        >
          Aplicar filtros
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ciclsmoTypo: {
    textAlign: 'left',
    color: Color.sportsVioleta,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  parentSpaceBlock: {
    marginTop: 20,
    width: 320,
    alignItems: 'center'
  },
  filtrosTypo: {
    fontSize: FontSize.inputPlaceholder_size,
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  parentFrameFlexBox: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },

  frameSpaceBlock: {
    marginTop: 12,
    alignSelf: 'stretch'
  },
  linePosition: {
    top: 39,
    alignItems: 'center',
    position: 'absolute'
  },
  lineViewLayout: {
    height: 7,
    width: 2,
    borderRightWidth: 2,
    borderStyle: 'solid'
  },
  textTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    top: 26,
    position: 'absolute'
  },
  togglePosition: {
    borderRadius: Border.br_xl,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  toggleLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '8.19%',
    top: '8.19%',
    width: '47.67%',
    height: '83.63%',
    position: 'absolute',
    overflow: 'hidden'
  },
  menInferiorPosition: {
    width: 360,
    left: 0,
    position: 'absolute'
  },
  frameLayout: {
    height: 20,
    marginLeft: 47
  },
  pruebasEncontradas: {
    fontSize: FontSize.size_5xl
  },
  cilarrowTopIcon: {
    width: 25,
    height: 25,
    overflow: 'hidden'
  },
  badajozCilcismo22: {
    marginLeft: 13,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size
  },
  cilarrowTopParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.naranja3,
    padding: Padding.p_3xs,
    flexDirection: 'row'
  },
  filtros: {
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size
  },
  frameChild: {
    marginTop: 5,
    height: 10,
    width: 10
  },
  filtrosParent: {
    alignItems: 'center'
  },
  ordenarPorParent: {
    marginLeft: 122,
    alignItems: 'center'
  },
  frameGroup: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  tuPresupuesto: {
    alignSelf: 'stretch',
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    fontSize: FontSize.inputPlaceholder_size,
    flex: 1
  },
  charmcrossIcon: {
    width: 21,
    height: 21,
    overflow: 'hidden'
  },
  tuPresupuestoParent: {
    alignItems: 'flex-end'
  },
  frameInner: {
    top: 34,
    left: 14,
    width: 268,
    height: 1,
    position: 'absolute'
  },
  lineView: {
    borderColor: Color.sportsVioleta
  },
  text: {
    color: Color.sportsVioleta,
    letterSpacing: -1,
    fontSize: FontSize.size_sm
  },
  lineParent: {
    left: -1
  },
  lineGroup: {
    left: 242
  },
  text2: {
    color: Color.sportsNaranja
  },
  frameChild2: {
    borderColor: Color.sportsNaranja
  },
  parent: {
    top: 5,
    left: 105,
    alignItems: 'center',
    position: 'absolute'
  },
  ellipseIcon: {
    left: 112
  },
  frameChild3: {
    left: 2
  },
  frameView: {
    height: 61
  },
  path3391Icon: {
    height: 5,
    width: 10
  },
  ciclsmo: {
    fontSize: FontSize.size_mid,
    marginLeft: 5
  },
  path3391Parent: {
    // alignItems: 'center',
    // flexDirection: 'row',
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'flex-end'
  },
  toggleChild: {
    backgroundColor: Color.sportsNaranja
  },
  toggleItem: {
    right: '4.67%',
    left: '47.67%'
  },
  toggle: {
    width: 30,
    height: 17
  },
  carretera: {
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder
  },
  toggleInner: {
    backgroundColor: Color.gris
  },
  toggleChild1: {
    right: '44.67%',
    left: '7.67%'
  },
  carreteraParent: {
    alignItems: 'center'
  },
  pistaParent: {
    marginTop: 8
  },
  montaaParent: {
    alignItems: 'flex-end',
    marginTop: 8
  },
  ciclocrssParent: {
    marginTop: 8,
    alignItems: 'center'
  },
  frameParent4: {
    paddingLeft: Padding.p_11xl,
    marginTop: 11,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  frameParent2: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  path3391Icon1: {
    width: 5,
    height: 10
  },
  frameParent5: {
    marginTop: 15
  },
  frameParent1: {
    alignItems: 'flex-end'
  },
  frameContainer: {
    borderRadius: Border.br_5xs,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: -2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingVertical: Padding.p_mini,
    marginTop: 8,
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.blanco,
    top: 220,
    // flex: 1,
    paddingBottom: 400
  },
  pruebasEncontradasParent: {
    paddingTop: Padding.p_48xl,
    paddingHorizontal: Padding.p_xl,
    left: 0,
    top: 0,
    position: 'absolute'
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
    height: 65,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.gris,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_xl
  },
  pruebasEncontradasFiltros: {
    height: 400,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.blanco
  },
  switch: {
    transform: [{ scale: 0.8 }]
  }
})

export default PruebasEncontradasFiltros
