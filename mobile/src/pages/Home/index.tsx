import React, { useState } from 'react'
import axios from 'axios'
import { View, Image, StyleSheet, Text, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
// import RNPickerSelect from 'react-native-picker-select'

interface IBGEUfReponse {
    sigla: string,
    nome: string
}

interface IBGECityReponse {
    nome: string
}

interface CityRepr {
    nome: string,
    value: string
}

const Home = () => {
    const navigation = useNavigation()
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedUf, setSelectedUf] = useState('')
    // const [cities, setCities] = useState<IBGECityReponse[]>([])
    // const [ufs, setUfs] = useState<IBGEUfReponse[]>([])

    // function returnIBGEUf(uf: IBGEUfReponse) {
    //     return {
    //         sigla: uf.sigla,
    //         nome: uf.nome
    //     }
    // }

    // function returnIBGECity(uf: IBGECityReponse) {
    //     return {
    //         nome: uf.nome
    //     }
    // }

    // function returnUf(uf: IBGEUfReponse) {
    //     return {
    //         value: uf.sigla,
    //         label: uf.nome
    //     }
    // }

    // function returnCity(city: IBGECityReponse) {
    //     return {
    //         label: city.nome,
    //         value: city.nome
    //     }
    // }

    // useEffect(() => {
    //     axios.get<IBGEUfReponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
    //         const ufInitials = response.data.map(uf => returnIBGEUf(uf))
    //         setUfs(ufInitials)
    //     })
    // }, [])

    // useEffect(() => {
    //     if (selectedUf === '0') {
    //         return
    //     }

    //     axios
    //         .get<IBGECityReponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    //         .then(response => {
    //             const citiesNames = response.data.map(city => returnIBGECity(city))
    //             setCities(citiesNames)
    //             console.log(cities)
    //         })
    // }, [selectedUf])

    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            selectedCity,
            selectedUf
        })
    }
    // function handleUfChange(uf: string) {
    //     setSelectedUf(uf)
    // }

    // function handleCityChange(city: string) {
    //     setSelectedCity(city)
    // }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/home-background.png')}
                style={styles.container}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    {/* <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={'Estado'}
                    onValueChange={(value) => handleUfChange(value)}
                    items={ufs.map(uf => returnUf(uf))}
                />
                <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={'Cidade'}
                    onValueChange={(value) => handleCityChange(value)}
                    items={cities.map(city => returnCity(city))}
                />
                    Não funcionou em meu android, portanto farei sem uso da api do IBGE */}

                    <TextInput
                        maxLength={2}
                        style={styles.input}
                        placeholder='Digite a UF'
                        value={selectedUf}
                        onChangeText={setSelectedUf}
                        autoCapitalize={'characters'}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a Cidade'
                        value={selectedCity}
                        onChangeText={setSelectedCity}
                        autoCorrect={false}
                    />

                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default Home