import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Animated,
    TextInput,
    Keyboard
} from 'react-native';
import { ListaSelecaoProps } from '../..';

type Modelo = { chave?: any; valor?: any; desactivado?: boolean | undefined }

const ListaSelecao: React.FC<ListaSelecaoProps> = ({
    setSelecionada,
    textoCaixaSelecao,
    estiloCaixaSelecao,
    estiloTextoCaixaSelecao,
    estiloLista,
    estiloItemLista,
    estiloTextoItemLista,
    maxAltura,
    dados,
    selecionada = "",
    iconePesquisar = false,
    iconeSeta = false,
    pesquisar = true,
    textoCampoPesquisar = "pesquisar",
    aoSelecionar = () => { },
    fontFamily,
    textoItemNaoEncontrado = "Nenhum dado encontrado",
    estiloItemDesabilitado,
    estiloTextoItemDesabilitado,
    salvar = 'chave',
    ListaVisivel = false,
    iconeFechar = false,
}) => {

    const [_primeiraRenderizacao, _setPrimeiraRenderizacao] = React.useState<boolean>(true);
    const [visivel, setVisivel] = React.useState<boolean>(ListaVisivel);
    const [altura, setAltura] = React.useState<number>(200)
    const valorAnimado = React.useRef(new Animated.Value(0)).current;
    const [dadosFiltrados, setDadosFiltrados] = React.useState(dados)

    const deslizeParaBaixo = () => {
        setVisivel(true)
        Animated.timing(valorAnimado, {
            toValue: altura,
            duration: 500,
            useNativeDriver: false,

        }).start()
    }

    const deslizarParaCima = () => {
        Animated.timing(valorAnimado, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,

        }).start(() => setVisivel(false))
    }

    React.useEffect(() => {
        if (maxAltura)
            setAltura(maxAltura)
    }, [maxAltura])


    React.useEffect(() => {
        setDadosFiltrados(dados);
    }, [dados])


    React.useEffect(() => {
        if (_primeiraRenderizacao) {
            _setPrimeiraRenderizacao(false);
            return;
        }
        aoSelecionar()
    }, [selecionada])

    React.useEffect(() => {
        if (!_primeiraRenderizacao) {
            if (ListaVisivel)
                deslizeParaBaixo();
            else
                deslizarParaCima();
        }

    }, [ListaVisivel])


    return (
        <View>
            {
                (visivel && pesquisar)
                    ?
                    <View style={[styles.embrulho, estiloCaixaSelecao]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            {
                                (!iconePesquisar)
                                    ?
                                    <Image
                                        source={require('../assets/images/pesquisar.png')}
                                        resizeMode='contain'
                                        style={{ width: 20, height: 20, marginRight: 7 }}
                                    />
                                    :
                                    iconePesquisar
                            }

                            <TextInput
                                placeholder={textoCampoPesquisar}
                                onChangeText={(val) => {
                                    let result = dados.filter((item: Modelo) => {
                                        val.toLowerCase();
                                        let row = item.chave.toLowerCase()
                                        return row.pesquisar(val.toLowerCase()) > -1;
                                    });
                                    setDadosFiltrados(result)
                                }}
                                style={[{ padding: 0, height: 20, flex: 1, fontFamily }, estiloTextoCaixaSelecao]}
                            />
                            <TouchableOpacity onPress={() => deslizarParaCima()} >

                                {
                                    (!iconeFechar)
                                        ?
                                        <Image
                                            source={require('../assets/images/fechar.png')}
                                            resizeMode='contain'
                                            style={{ width: 17, height: 17 }}
                                        />
                                        :
                                        iconeFechar
                                }
                            </TouchableOpacity>
                        </View>

                    </View>
                    :
                    <TouchableOpacity style={[styles.embrulho, estiloCaixaSelecao]} onPress={() => { if (!visivel) { Keyboard.dismiss(); deslizeParaBaixo() } else { deslizarParaCima() } }}>
                        <Text style={[{ fontFamily }, estiloTextoCaixaSelecao]}>{(selecionada == "") ? ((textoCaixaSelecao) ? textoCaixaSelecao : 'selecione a opção') : selecionada}</Text>
                        {
                            (!iconeSeta)
                                ?
                                <Image
                                    source={require('../assets/images/seta.png')}
                                    resizeMode='contain'
                                    style={{ width: 20, height: 20 }}
                                />
                                :
                                iconeSeta
                        }

                    </TouchableOpacity>
            }

            {
                (visivel)
                    ?
                    <Animated.View style={[{ maxHeight: valorAnimado }, styles.visivel, estiloLista]}>
                        <ScrollView contentContainerStyle={{ paddingVertical: 10, overflow: 'hidden' }} nestedScrollEnabled={true}>

                            {
                                (dadosFiltrados.length >= 1)
                                    ?
                                    dadosFiltrados.map((item: Modelo, index: number) => {
                                        let chave = item.chave ?? item.valor ?? item;
                                        let valor = item.valor ?? item;
                                        let desactivado = item.desactivado ?? false;
                                        if (desactivado) {
                                            return (
                                                <TouchableOpacity style={[styles.opcaoDesabilitada, estiloItemDesabilitado]} key={index} onPress={() => { }}>
                                                    <Text style={[{ color: '#c4c5c6', fontFamily }, estiloTextoItemDesabilitado]}>{valor}</Text>
                                                </TouchableOpacity>
                                            )
                                        } else {
                                            return (
                                                <TouchableOpacity style={[styles.opcao, estiloItemLista]} key={index} onPress={() => {
                                                    if (salvar === 'valor') {
                                                        setSelecionada(valor);
                                                    } else {
                                                        setSelecionada(chave)
                                                    }

                                                    deslizarParaCima()
                                                    setTimeout(() => { setDadosFiltrados(dados) }, 800)

                                                }}>
                                                    <Text style={[{ fontFamily }, estiloTextoItemLista]}>{valor}</Text>
                                                </TouchableOpacity>
                                            )
                                        }

                                    })
                                    :
                                    <View style={[styles.opcao, estiloItemLista]}>
                                        <Text style={[{ fontFamily }, estiloTextoItemLista]}>{textoItemNaoEncontrado}</Text>
                                    </View>
                            }
                        </ScrollView>
                    </Animated.View>
                    :
                    null
            }

        </View>
    )
}


export default ListaSelecao;


const styles = StyleSheet.create({
    embrulho: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    visivel: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginTop: 10,
        overflow: 'hidden'
    },
    opcao: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        overflow: 'hidden'
    },
    opcaoDesabilitada: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        opacity: 0.9
    }

})
