import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import {
  // Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { getAllSports } from '../redux/actions/sports'
// import { useNavigation } from '@react-navigation/native'
import CalendarOneDay from './CalendarOneDay'
import SportsPopUp from './SportsPopUp'
import { onSubmit } from './utils/createEvent'
import { Checkbox } from 'react-native-paper'

const FomularioEventos = () => {
  const dispatch = useDispatch()
  //   const navigation = useNavigation()
  const { dateStart, dateSuscription } = useSelector((state) => state.events)
  const { sport } = useSelector((state) => state.sports)
  const { user } = useSelector((state) => state.users)
  // const [date, setDate] = useState(null)
  // const [dateInscription, setDateInscription] = useState(null)
  const [calendar, setCalendar] = useState(null)
  const [calendarInscription, setCalendarInscription] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const [sportsModal, setSportsModal] = useState(false)
  const [event, setEvent] = useState({
    title: '',
    // description: '',
    price: '',
    location: '',
    timeStart: '',
    place: '',
    eventLink: '',
    inscriptionLink: '',
    space: '',
    mail: '',
    phone: ''
  })
  const [checked, setChecked] = useState(false)

  const onCloseModalSports = () => {
    setSportsModal(false)
  }

  useEffect(() => {
    dispatch(getAllSports())
  }, [])

  const onValuesEvent = (field, value) => {
    setEvent((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const uploadImage = async () => {
    let result = {}
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    })
    setSelectedImage(`data:image/jpeg;base64,${result?.assets[0].base64}`)
  }

  const closeCalendar = () => {
    setCalendar(false)
  }

  const closeCalendarInscription = () => {
    setCalendarInscription(false)
  }

  return (
    <View>
      <View style={styles.items}>
        <Text style={styles.text}>Nombre del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.title}
          onChangeText={(value) => onValuesEvent('title', value)}
          placeholder="Escriba el lugar del evento"
          placeholderTextColor={Color.sportsVioleta}
        />
      </View>

      <Pressable style={styles.items} onPress={() => setSportsModal(true)}>
        <Text style={styles.text}>Deporte</Text>
        <Text style={styles.helloTypoScroll}>
          {sport?.name?.slice(0, 1).toUpperCase()}
          {sport?.name?.slice(1)}{' '}
          {sport.type ? sport?.type : 'Elije tu deporte'}
        </Text>
      </Pressable>

      <View style={styles.items}>
        <Text style={styles.text}>Link del evento</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.location}
          onChangeText={(value) => onValuesEvent('eventLink', value)}
          placeholder="https://www.deportedeporte.com/"
          placeholderTextColor={Color.sportsVioleta}
        />
      </View>

      <View style={styles.items}>
        <Text style={styles.text}>Link de la inscripción</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.location}
          onChangeText={(value) => onValuesEvent('inscriptionLink', value)}
          placeholder="https://www.deportedeporte.com/inscripción/"
          placeholderTextColor={Color.sportsVioleta}
        />
      </View>

      <View style={styles.items2Container}>
        <View style={styles.items2Flex}>
          <Text style={styles.text2}>Precio de inscripción</Text>
          <View style={styles.items2}>
            <TextInput
              style={styles.helloTypoScrollPrecio}
              value={event.price}
              onChangeText={(value) => onValuesEvent('price', value)}
              placeholder="35€"
              placeholderTextColor={Color.sportsVioleta}
            />
          </View>
        </View>

        <View style={styles.items2Flex}>
          <Text style={styles.text2}>Plazas disponibles</Text>
          <View style={styles.items2}>
            <TextInput
              style={styles.helloTypoScrollPrecio}
              value={event.price}
              onChangeText={(value) => onValuesEvent('space', value)}
              placeholder="XXXX"
              placeholderTextColor={Color.sportsVioleta}
            />
          </View>
        </View>

        <View style={styles.items2Flex}>
          <Text style={styles.text2}>Subir cartel del evento</Text>
          <Pressable style={styles.items2} onPress={uploadImage}>
            {/* <Image
              style={{ width: 20, height: 20 }}
              contentFit="cover"
              source={selectedImage && { uri: selectedImage }}
            /> */}
            <Text style={styles.subirArchivo}>Subir archivo</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.checkContainer}>
        <Text style={styles.textDiseño}>
          Quiero contratar el diseño del cartel
        </Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked)
          }}
          color={Color.sportsNaranja}
        />
      </View>

      <Text style={styles.contactoText}>Datos de contacto del organizador</Text>

      <View style={styles.items}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.location}
          onChangeText={(value) => onValuesEvent('mail', value)}
          placeholder="organizador@gmail.com"
          placeholderTextColor={Color.sportsVioleta}
        />
      </View>

      <View style={styles.items}>
        <Text style={styles.text}>Telefono</Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.location}
          onChangeText={(value) => onValuesEvent('phone', value)}
          placeholder="XXX-XXX-XXX"
          placeholderTextColor={Color.sportsVioleta}
        />
      </View>

      {/* <View style={[styles.itemsTextArea]}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10, marginTop: 6 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text
          style={{
            fontSize: FontSize.inputPlaceholder_size,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: Color.sportsVioleta
          }}
        >
          Descripcion:
        </Text>
        <TextInput
          style={styles.textArea}
          multiline={true} // Permitir múltiples líneas
          numberOfLines={2} // Número de líneas visibles inicia
          value={event.description}
          onChangeText={(value) => onValuesEvent('description', value)}
        />
      </View> */}

      {/* <Pressable style={styles.items} onPress={() => setCalendar(true)}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScrollDate}>Fecha: {dateStart}</Text>
      </Pressable>
      <Pressable
        style={styles.items}
        onPress={() => setCalendarInscription(true)}
      >
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />
        <Text style={styles.helloTypoScrollDate}>
          Fecha de inscripcion: {dateSuscription}
        </Text>
      </Pressable> */}
      {/* <View style={styles.items}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../assets/frame-1547755976.png')}
        />

        <Text
          style={{
            fontSize: FontSize.inputPlaceholder_size,
            fontFamily: FontFamily.inputPlaceholder,
            fontWeight: '700',
            color: Color.sportsVioleta
          }}
        >
          Hora:
        </Text>
        <TextInput
          style={styles.helloTypoScroll}
          value={event.timeStart}
          onChangeText={(value) => onValuesEvent('timeStart', value)}
        />
      </View> */}

      <TouchableOpacity
        style={{
          //   width: 100,
          height: 52,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 10,
          backgroundColor: Color.sportsNaranja
        }}
        onPress={() =>
          onSubmit(
            event,
            sport,
            user,
            selectedImage,
            dispatch,
            dateSuscription,
            dateStart
          )
        }
      >
        <Text style={{ color: 'white' }}>Enviar</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent visible={calendar}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeCalendar}
          />
          <CalendarOneDay
            onClose={closeCalendar}
            start={true}
            suscription={false}
            // setDate={setDate}
            // date={date}
          />
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={sportsModal}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={onCloseModalSports}
          />
          <SportsPopUp
            onClose={onCloseModalSports}
            // setDate={setDate}
            // date={date}
          />
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={calendarInscription}>
        <View style={styles.frameContainer10Overlay}>
          <Pressable
            style={styles.frameContainer10Bg}
            onPress={closeCalendarInscription}
          />
          <CalendarOneDay
            onClose={closeCalendarInscription}
            start={false}
            suscription={true}
            // setDate={setDateInscription}
            // date={dateInscription}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    // width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  frameContainer10Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer10Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  helloTypoScroll: {
    width: '100%',
    marginLeft: 5,
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta
  },
  helloTypoScrollDate: {
    width: '90%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  subirArchivo: {
    width: '100%',
    marginLeft: 5,
    fontSize: 12,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    top: 6
  },
  helloTypoScrollPrecio: {
    width: '60%',
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Color.sportsVioleta,
    height: 45,
    padding: 8
  },
  items2Container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  checkContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  items2Flex: {
    flexDirection: 'column',
    width: '31%',
    gap: 5,
    justifyContent: 'center'
  },
  items2: {
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    height: 45,
    padding: 8
  },
  itemsTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.blanco,
    padding: 8,
    minHeight: 60
  },
  textArea: {
    width: '60%',
    marginLeft: 5,
    fontSize: FontSize.inputPlaceholder_size,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta
  },
  text: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    position: 'absolute',
    left: 30,
    bottom: 38.5
  },
  text2: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  textDiseño: {
    fontSize: FontSize.inputLabel_size,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.sportsVioleta,
    textAlign: 'center'
  },
  contactoText: {
    marginBottom: 20,
    marginTop: 20,
    color: Color.sportsNaranja,
    left: 5
  }
})

export default FomularioEventos
