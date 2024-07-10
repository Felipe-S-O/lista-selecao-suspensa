
import type * as React from "react";
import { ViewStyle, TextStyle } from 'react-native';

export interface ListaSelecaoProps {
    /**
      * Função para definir o valor da opção selecionada que será armazenado em seu estado local
     */
    setSelecionada: Function,

    /**
    *Texto de espaço reservado que será exibido na caixa de seleção
    */
    textoCaixaSelecao?: string,

    /**
    * Estilos adicionais para caixa de seleção
    */
    estiloCaixaSelecao?: ViewStyle,

    /**
    *Estilo adicionais para texto da caixa de seleção
    */
    estiloTextoCaixaSelecao?: TextStyle,

    /**
    *Estilo adicionais para visualização de rolagem suspensa
    */
    estiloLista?: ViewStyle,

    /**
    *Estilo adicionais para item da lista suspensa
    */
    estiloItemLista?: ViewStyle,

    /**
    * Estilo adicionais para texto de itens de lista
    */
    estiloTextoItemLista?: TextStyle,

    /**
    * Altura máxima do wrapper suspenso a ser ocupado
    */
    maxAltura?: number,

    /**
    * Dados que serão iterados como opções da lista de seleção
    */
    dados: Array<{}>,

    /**
    * A opção padrão da lista de seleção
    */
    selecionada?: string,

    /**
    * Passe qualquer JSX para este suporte, como Texto, Imagem ou Ícone, para mostrar em vez do ícone de pesquisa
    */
    iconePesquisar?: JSX.Element,

    /**
    *  Passe qualquer JSX para este suporte, como Texto, Imagem ou Ícone, para mostrar em vez do ícone seta
    */
    iconeSeta?: JSX.Element,

    /**
    * defina como falso se você não quiser usar a funcionalidade de pesquisa
    */
    pesquisar?: boolean,

    /**
    * defina texto do campo pesquisa
    */
    textoCampoPesquisar?: string,

    /**
    * Acionar uma ação quando a opção for selecionada
    */
    aoSelecionar?: () => void,

    /**
    * definir fontFamily de todo o componente Texto 
    */
    fontFamily?: string,

    /**
    * defina isto para alterar o texto padrão da falha de pesquisa
    */
    textoItemNaoEncontrado?: string,

    /**
    * Estilo adicionais para item de lista desabilitado
    */
    estiloItemDesabilitado?: ViewStyle,

    /**
    * Estilo adicionais para texto de itens de lista desativados
    */
    estiloTextoItemDesabilitado?: TextStyle,

    /**
    * O que armazenar dentro do seu estado local (chave ou valor)
    */
    salvar?: 'key' | 'value',

    /**
    * Controle o menu suspenso com este suporte
    */
    ListaVisivel?: boolean,

    /**
    *  Passe qualquer JSX para este suporte como Texto, Imagem ou Ícone para mostrar em vez de fechar o ícone
    */
    iconeFechar?: JSX.Element,
}


export interface ListaSelecaoMultiplaProps {
    /**
    * Função para definir o valor da opção selecionada que será armazenado em seu estado local
    */
    setSelecionada: Function,

    /**
    * Texto de espaço reservado que será exibido na caixa de seleção
    */
    textoCaixaSelecao?: string,

    /**
    * Estilo adicionais para caixa de seleção
    */
    estiloCaixaSelecao?: ViewStyle,

    /**
    * Estilo adicionais para texto da caixa de seleção
    */
    estiloTextoCaixaSelecao?: TextStyle,

    /**
    * Estilo adicionais para visualização de rolagem suspensa
    */
    estiloLista?: ViewStyle,

    /**
    * Estilo adicionais para item da lista suspensa
    */
    estiloItemLista?: ViewStyle,

    /**
    * Estilo adicionais para texto de itens de lista
    */
    estiloTextoItemLista?: TextStyle,

    /**
    * Altura máxima do wrapper suspenso a ser ocupado
    */
    maxAltura?: number,

    /**
    * Dados que serão iterados como opções da lista de seleção
    */
    dados: Array<{}>,

    /**
    * Passe qualquer JSX para este suporte, como Texto, Imagem ou Ícone, para mostrar em vez do ícone de pesquisa
    */
    iconePesquisar?: JSX.Element,

    /**
    *  Passe qualquer JSX para este suporte, como Texto, Imagem ou Ícone, para mostrar em vez do ícone seta
    */
    iconeSeta?: JSX.Element,

    /**
   * defina como falso se você não quiser usar a funcionalidade de pesquisa
   */
    pesquisar?: boolean,

    /**
    * defina texto do campo pesquisa
    */
    textoCampoPesquisar?: string,

    /**
    * Acionar uma ação quando a opção for selecionada
    */
    aoSelecionar?: () => void,

    /**
    * definir o texto do rótulo que aparece logo após vários valores serem selecionados
    */
    subtituloListaItens?: string,

    /**
    * definir o texto do rótulo que aparece quando os valores estão sendo selecionados
    */
    subtituloListaVisivel?: string,

    /**
    * definir fontFamily de todo o componente Texto
    */
    fontFamily?: string,

    /**
    * defina isto para alterar o texto padrão da falha de pesquisa
    */
    textoItemNaoEncontrado?: string,

    /**
    * Estilo adicionais para item de lista desabilitado
    */
    estiloItemDesabilitado?: ViewStyle,

    /**
    * Estilo adicionais para texto de itens de lista desativados
    */
    estiloTextoItemDesabilitado?: TextStyle,


    /**
    * Estilo adicionais para caixa de seleção desabilitada
    */
    estiloCheckBoxDesabilitado?: ViewStyle,

    /**
    * Estilo adicionais para caixa de seleção
    */
    estiloCheckBox?: ViewStyle,

    /**
    * O que armazenar dentro do seu estado local (chave ou valor)
    */
    salvar?: 'key' | 'value',

    /**
    * A opção padrão da lista de seleção
    */
    selecionada: Array<{}>,

    /**
    * Controle o menu suspenso com este suporte
    */
    listaVisivel?: boolean,

    /**
    * Passe qualquer JSX para este suporte como Texto, Imagem ou Ícone para mostrar em vez de fechar o ícone
    */
    iconeFechar?: JSX.Element,

    /**
    * Estilo adicionais para Tag de seleção múltipla
    */
    estiloTag?: ViewStyle,

    /**
    * Estilo adicionais para texto de Tag de seleção múltipla
    */
    estiloTextoTag?: ViewStyle,

    /**
    * Estilo adicionais para titulo tags
    */
    estiloTituloTag?: TextStyle,
}

declare class ListaSelecaoMultipla extends React.Component<ListaSelecaoMultiplaProps> { }

declare class ListaSelecao extends React.Component<ListaSelecaoProps> { }

export {
    ListaSelecaoMultipla,
    ListaSelecao
};