import React, { useState, useCallback } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Calendar from '../../components/Calendar'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '../../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUser,
  updateUser,
  updateUserAvatar
} from '../../redux/actions/users'
import BackArrowSVG from '../../components/SVG/BackArrowSVG'

const EditarPerfil = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const [topContainerVisible, setTopContainerVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [date, setDate] = useState('')
  const [valuesUser, setValuesUser] = useState({
    name: user?.name || '',
    apellido: user?.apellido || '',
    sexo: user?.sexo || '',
    fechaNacimiento: user?.fechaNacimiento || '',
    direccion: user?.direccion || '',
    telefono: user?.telefono || ''
  })

  const settingValuesUser = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const openTopContainer = useCallback(() => {
    setTopContainerVisible(true)
  }, [])

  const closeTopContainer = useCallback(() => {
    setTopContainerVisible(false)
  }, [])

  const onSubmit = () => {
    const data = {
      id: user.id,
      valuesUser
    }
    dispatch(updateUser(data))
    dispatch(getUser(user.id))
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
    const data = {
      id: user.id,
      avatar: `data:image/jpeg;base64,${result?.assets[0].base64}`
    }
    dispatch(updateUserAvatar(data))
    dispatch(getUser(user.id))
  }

  return (
    <ScrollView>
      <View style={styles.editarPerfil}>
        <View style={styles.topContainer}>
          <Text style={[styles.gestionaTuCuentaContainer, styles.labelFlexBox]}>
            {`GESTIONA TU
CUENTA`}
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </Pressable>
        </View>
        <View style={styles.editarPerfilInner}>
          <View style={[styles.editarPerfilWrapper, styles.groupParentFlexBox]}>
            <Text style={styles.editarPerfil1}>Editar perfil</Text>
          </View>
        </View>
        <Pressable
          style={styles.unsplashn6gnca77urcWrapper}
          onPress={() => uploadImage()}
        >
          <Image
            style={styles.unsplashn6gnca77urcIcon}
            contentFit="cover"
            source={
              selectedImage
                ? { uri: selectedImage }
                : user?.avatar
                ? { uri: user.avatar }
                : require('../../assets/unsplashn6gnca77urc.png')
            }
          />
          <View style={styles.editar}>
            <LinearGradient
              colors={['#BA08F9', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0.5 }}
              style={{ flex: 1 }}
            >
              <Text style={styles.editarText}>Editar</Text>
            </LinearGradient>
          </View>
        </Pressable>
        <View style={styles.frameParent}>
          <View style={styles.card1Wrapper}>
            <View style={styles.card1}>
              <Image
                style={styles.userIcon}
                contentFit="cover"
                source={require('../../assets/user.png')}
              />
              <View style={styles.datosPersonalesWrapper}>
                <Text
                  style={[styles.datosPersonales, styles.card1ChildPosition]}
                >
                  Datos personales
                </Text>
              </View>
              <View style={[styles.inputParent, styles.inputFlexBox]}>
                <View style={styles.input}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Nombre
                    </Text>
                    <TextInput
                      placeholder={user.name || 'Nombre'}
                      placeholderTextColor={
                        user.name ? Color.sportsVioleta : 'gray'
                      }
                      value={valuesUser?.name}
                      onChangeText={(value) => settingValuesUser('name', value)}
                    />
                  </View>
                </View>
                <View style={styles.input1}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Apellido
                    </Text>
                    <TextInput
                      placeholder={user?.apellido || 'Apellido'}
                      placeholderTextColor={
                        user.apellido ? Color.sportsVioleta : 'gray'
                      }
                      value={valuesUser?.apellido}
                      onChangeText={(value) =>
                        settingValuesUser('apellido', value)
                      }
                    />
                  </View>
                </View>
                <View style={[styles.input2, styles.inputBorder]}>
                  <View
                    style={[styles.inputContent, styles.inputContentFlexBox]}
                  >
                    <Text style={[styles.label, styles.labelFlexBox]}>
                      Género
                    </Text>
                    <TextInput
                      placeholder={user?.sexo || '-'}
                      placeholderTextColor={
                        user.sexo ? Color.sportsVioleta : 'gray'
                      }
                      value={valuesUser.sexo}
                      onChangeText={(value) => settingValuesUser('sexo', value)}
                    />
                  </View>
                </View>
                <Pressable style={[styles.top, styles.inputBorderDate]}>
                  <View
                    style={[styles.inputContent3, styles.groupParentFlexBox]}
                  >
                    <View style={[styles.inputContentDate]}>
                      <Text style={[styles.label, styles.labelFlexBox]}>
                        Fecha de nacimiento
                      </Text>
                      <TextInput
                        placeholder={user?.fechaNacimiento || '12/12/2020'}
                        placeholderTextColor={
                          user.fechaNacimiento ? Color.sportsVioleta : 'gray'
                        }
                        value={date || '2020/12/12'}
                        onChangeText={(value) =>
                          settingValuesUser('fechaNacimiento', value)
                        }
                        editable={false}
                      />
                    </View>
                    <Pressable onPress={openTopContainer}>
                      <Image
                        style={styles.iconlylightcalendar}
                        contentFit="cover"
                        source={require('../../assets/iconlylightcalendar.png')}
                      />
                    </Pressable>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.card11Wrapper}>
            <View style={styles.card11}>
              <Image
                style={[styles.favoriteIActiveIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require('../../assets/favorite-iactive1.png')}
              />
              <View style={styles.datosDeContactoWrapper}>
                <Text
                  style={[styles.datosPersonales, styles.card1ChildPosition]}
                >
                  Datos de contacto
                </Text>
              </View>
              <Image
                style={[styles.addressbookIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../../assets/addressbook.png')}
              />
            </View>
            <View style={[styles.inputGroup, styles.inputFlexBox]}>
              <View style={styles.input}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>Email</Text>
                  <Text
                    style={{ color: user.email ? Color.sportsVioleta : 'gray' }}
                  >
                    {user?.email || 'ejemplo@gmail.com'}
                  </Text>
                </View>
              </View>
              <View style={styles.inputCel}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Teléfono
                  </Text>
                  <TextInput
                    placeholder={user?.telefono || 'Escribe aqui...'}
                    placeholderTextColor={
                      user.telefono ? Color.sportsVioleta : 'gray'
                    }
                    value={valuesUser.telefono}
                    onChangeText={(value) =>
                      settingValuesUser('telefono', value)
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={[styles.inputAdress, styles.inputBorder]}>
                <View style={[styles.inputContent, styles.inputContentFlexBox]}>
                  <Text style={[styles.label, styles.labelFlexBox]}>
                    Dirección
                  </Text>
                  <TextInput
                    placeholder={user?.direccion || 'Escribe aqui...'}
                    placeholderTextColor={
                      user.direccion ? Color.sportsVioleta : 'gray'
                    }
                    value={valuesUser.direccion}
                    onChangeText={(value) =>
                      settingValuesUser('direccion', value)
                    }
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.helloAshfakWrapper}
                onPress={onSubmit}
              >
                <Text style={[styles.helloAshfak, styles.kmTypo]}>
                  Actualizar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={topContainerVisible}>
        <View style={styles.topContainerOverlay}>
          <Pressable
            style={styles.topContainerBg}
            onPress={closeTopContainer}
          />
          <Calendar
            onClose={closeTopContainer}
            setSelected={setDate}
            setEventsFilter={setValuesUser}
          />
        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  labelFlexBox: {
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  helloAshfak: {
    color: Color.blanco,
    textAlign: 'left',
    fontSize: FontSize.inputPlaceholder_size,
    fontWeight: '700'
  },
  helloAshfakWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sportsNaranja,
    height: 42,
    width: '93%',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center'
  },
  topContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  groupParentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card1ChildPosition: {
    left: '0%',
    top: '10%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  inputFlexBox: {
    alignItems: 'flex-end',
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  inputContentFlexBox: {
    flex: 1,
    alignSelf: 'stretch'
  },
  inputBorder: {
    height: 47,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  inputBorderDate: {
    height: 47,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  gestionaTuCuentaContainer: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700',
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  editarPerfil1: {
    color: Color.sportsNaranja,
    fontFamily: FontFamily.inputPlaceholder,
    fontWeight: '700'
  },
  editarPerfilWrapper: {
    alignItems: 'center'
  },
  editarPerfilInner: {
    top: 20,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  unsplashn6gnca77urcIcon: {
    borderRadius: Border.br_5xs,
    width: 132,
    height: 122,
    position: 'relative'
  },
  unsplashn6gnca77urcWrapper: {
    top: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    height: 22,
    marginLeft: 4,
    width: 22
  },
  datosPersonales: {
    fontSize: FontSize.size_sm,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.inputPlaceholder,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.sportsVioleta
  },
  datosPersonalesWrapper: {
    width: 195,
    height: 35,
    marginLeft: 11,
    alignItems: 'center'
  },
  label: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: 'stretch'
  },
  inputContent: {
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  inputContentDate: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flex: 1
  },
  input: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: 295,
    paddingVertical: Padding.p_5xs
  },
  inputCel: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: 295,
    paddingVertical: Padding.p_5xs,
    top: 10
  },
  inputAdress: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    width: 295,
    paddingVertical: Padding.p_5xs,
    top: 20
  },
  input1: {
    paddingHorizontal: Padding.p_base,
    height: 46,
    width: 295,
    borderWidth: 1,
    borderColor: Color.sportsVioleta,
    borderStyle: 'solid',
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs
  },
  input2: {
    width: '40%'
  },
  topContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  topContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlylightcalendar: {
    width: 24,
    marginLeft: 16,
    height: 24
  },
  inputContent3: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1
  },
  top: {
    width: '52.5%'
  },
  inputParent: {
    gap: 15
  },
  card1: {
    width: '100%',
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_5xs,
    flexWrap: 'wrap',
    borderRadius: Border.br_base,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.blanco,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  card1Wrapper: {
    height: '45%',
    gap: 5
  },
  card11Wrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.blanco,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  favoriteIActiveIcon1: {
    height: '14.29%',
    width: '4.92%',
    top: '12.49%',
    right: '4.25%',
    bottom: '73.22%',
    left: '90.83%',
    display: 'none'
  },
  datosDeContactoWrapper: {
    height: '13.63%',
    width: '59.6%',
    right: '26.02%',
    marginBottom: '82.9%',
    left: '14.37%',
    position: 'absolute'
  },
  addressbookIcon: {
    height: '11.06%',
    width: '9.79%',
    top: '2.86%',
    right: '86.85%',
    bottom: '84.08%',
    left: '3.36%'
  },
  card11: {
    height: 245,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 5
  },
  inputGroup: {
    top: 52,
    left: 18,
    zIndex: 1,
    position: 'absolute',
    gap: 20
  },
  frameParent: {
    top: 80
  },
  editarPerfil: {
    paddingBottom: 220,
    width: '100%',
    backgroundColor: Color.blanco,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  editar: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 132,
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  },
  editarText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: FontFamily.inputPlaceholder,
    marginTop: 5
  }
})

export default EditarPerfil
