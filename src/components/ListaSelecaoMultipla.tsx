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
    Pressable,
    Keyboard
} from 'react-native';
import { ListaSelecaoMultiplaProps } from '../..';

type Modelo = { chave?: any; valor?: any; desabilitado?: boolean | undefined }

const ListaSelecaoMultipla: React.FC<ListaSelecaoMultiplaProps> = ({
    setSelecionada,
    textoCaixaSelecao,
    estiloCaixaSelecao,
    estiloTextoCaixaSelecao,
    estiloLista,
    estiloItemLista,
    estiloTextoItemLista,
    maxAltura,
    dados,
    iconePesquisar = false,
    iconeSeta = false,
    pesquisar = true,
    textoCampoPesquisar = "pesquisar",
    aoSelecionar = () => {},
    subtituloListaItens,
    subtituloListaVisivel,
    fontFamily,
    textoItemNaoEncontrado = "Nenhum dado encontrado",
    estiloItemDesabilitado,
    estiloTextoItemDesabilitado,
    estiloCheckBoxDesabilitado,
    estiloCheckBox,
    salvar = 'chave',
    selecionada,
    listaVisivel = false,
    iconeFechar = false,
    estiloTag,
    estiloTextoTag,
    estiloTituloTag,
}) => {

    const [_primeiraRenderizacao, _setPrimeiraRenderizacao] = React.useState<boolean>(true);
    const [visivel, setVisivel] = React.useState<boolean>(listaVisivel);
    const [altura, setAltura] = React.useState<number>(350)
    const valorAnimado = React.useRef(new Animated.Value(0)).current;
    const [dadosFiltrados, setDadosFiltrados] = React.useState(dados);

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
            if (listaVisivel)
                deslizeParaBaixo();
            else
                deslizarParaCima();

        } ''
    }, [listaVisivel])

    return (
        <View>
            {
                (visivel && pesquisar)
                    ?
                    <View style={[styles.areaTag, estiloCaixaSelecao]}>
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
                                        let row = item.valor.toLowerCase()
                                        return row.search(val.toLowerCase()) > -1;
                                    });
                                    setDadosFiltrados(result)
                                }}
                                style={[{ padding: 0, height: 20, flex: 1, fontFamily }, estiloTextoCaixaSelecao]}
                            />
                            <TouchableOpacity onPress={() => {
                                deslizarParaCima()
                            }} >
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

                    (selecionada?.length > 0)

                        ?
                        <TouchableOpacity style={[styles.areaTag, estiloCaixaSelecao]} onPress={() => { if (!visivel) { Keyboard.dismiss(); deslizeParaBaixo() } else { deslizarParaCima() } }} >
                            <View>
                                <Text style={[{ fontWeight: '600', fontFamily }, estiloTituloTag]}>{subtituloListaItens}</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 8, flexWrap: 'wrap' }}>
                                    {
                                        selecionada?.map((item, index) => {
                                            return (
                                                <View key={index} style={[{ backgroundColor: 'gray', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 50, marginRight: 10, marginTop: 10 }, estiloTag]}>
                                                    <Text style={[{ color: 'white', fontSize: 12, fontFamily }, estiloTextoTag]}>{item}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.areaTag, estiloCaixaSelecao]} onPress={() => { if (!visivel) { Keyboard.dismiss(); deslizeParaBaixo() } else { deslizarParaCima() } }}>
                            <Text style={[{ fontFamily }, estiloTextoCaixaSelecao]}>{(textoCaixaSelecao) ? textoCaixaSelecao : 'selecione a opção'}</Text>
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
                    <Animated.View style={[{ maxHeight: valorAnimado }, styles.lista, estiloLista]}>
                        <View style={[{ maxHeight: altura }]}>
                            <ScrollView contentContainerStyle={{ paddingVertical: 10 }} nestedScrollEnabled={true}>

                                {
                                    (dadosFiltrados.length >= 1)
                                        ?
                                        dadosFiltrados.map((item: Modelo, index: number) => {
                                            let chave = item.chave ?? item.valor ?? item;
                                            let valor = item.valor ?? item;
                                            let desabilitado = item.desabilitado ?? false;
                                            if (desabilitado) {
                                                return (
                                                    <TouchableOpacity style={[styles.opcaoDesabilitada, estiloItemDesabilitado]} key={index}>
                                                        <View style={[{ width: 15, height: 15, marginRight: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c4c5c6' }, estiloCheckBoxDesabilitado]}>

                                                            {
                                                                (selecionada?.includes(valor))
                                                                    ?

                                                                    <Image
                                                                        key={index}
                                                                        source={require('../assets/images/verificar.png')}
                                                                        resizeMode='contain'
                                                                        style={[{ width: 8, height: 8, paddingLeft: 7 }]}
                                                                    />

                                                                    :
                                                                    null

                                                            }
                                                        </View>
                                                        <Text style={[{ fontFamily, color: '#c4c5c6' }, estiloTextoItemDesabilitado]}>{valor}</Text>
                                                    </TouchableOpacity>
                                                )
                                            } else {
                                                return (
                                                    <TouchableOpacity style={[styles.option, estiloItemLista]} key={index} onPress={() => {

                                                        let existing = selecionada?.indexOf(valor)

                                                        if (existing != -1 && existing != undefined) {

                                                            // let sv = [...listaItens];
                                                            // sv.splice(existing, 1)
                                                            // setListaItens(sv);

                                                            setSelecionada((val: any) => {
                                                                let temp = [...selecionada];
                                                                temp.splice(existing, 1)
                                                                return temp;
                                                            });

                                                        } else {
                                                            if (salvar === 'valor') {
                                                                setSelecionada((val: any) => {
                                                                    let temp = [...new Set([...val, valor])];
                                                                    return temp;
                                                                })
                                                            } else {
                                                                setSelecionada((val: any) => {
                                                                    let temp = [...new Set([...val, chave])];
                                                                    return temp;
                                                                })
                                                            }

                                                            // setListaItens((val: any) => {
                                                            //     let temp = [...new Set([...val, value])];
                                                            //     return temp;
                                                            // })
                                                        }



                                                    }}>
                                                        <View style={[{ width: 15, height: 15, borderWidth: 1, marginRight: 10, borderColor: 'gray', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }, estiloCheckBox]}>

                                                            {
                                                                (selecionada?.includes(valor))
                                                                    ?

                                                                    <Image
                                                                        key={index}
                                                                        source={require('../assets/images/verificar.png')}
                                                                        resizeMode='contain'
                                                                        style={{ width: 8, height: 8, paddingLeft: 7 }}
                                                                    />

                                                                    :
                                                                    null

                                                            }
                                                        </View>
                                                        <Text style={[{ fontFamily }, estiloTextoItemLista]}>{valor}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }

                                        })
                                        :
                                        <View style={[styles.option, estiloItemLista]}>
                                            <Text style={estiloTextoItemLista}>{textoItemNaoEncontrado}</Text>
                                        </View>
                                }



                            </ScrollView>

                            {
                                (selecionada?.length > 0)
                                    ?
                                    <Pressable>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 20 }}>
                                            <Text style={{ marginRight: 20, fontWeight: '600', fontFamily }}>{subtituloListaVisivel ? subtituloListaItens : 'Selecionado'}</Text>
                                            <View style={{ height: 1, flex: 1, backgroundColor: 'gray' }} />
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, flexWrap: 'wrap' }}>

                                            {
                                                selecionada?.map((item, index) => {
                                                    return (
                                                        <View key={index} style={[{ backgroundColor: 'gray', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 50, marginRight: 10, marginTop: 10 }, estiloTag]}>
                                                            <Text style={[{ color: 'white', fontSize: 12, fontFamily }, estiloTextoTag]}>{item}</Text>
                                                        </View>
                                                    )
                                                })
                                            }

                                        </View>
                                    </Pressable>
                                    :
                                    null
                            }



                        </View>

                    </Animated.View>
                    :
                    null
            }


        </View>
    )
}

export default ListaSelecaoMultipla;

const styles = StyleSheet.create({
    areaTag: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    lista: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        overflow: 'hidden'
    },
    option: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    opcaoDesabilitada: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    }

})
