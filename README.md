<br>
<h1 align="center">
 ✅ Lista de seleção suspensa do React Native </h1>

<div align="center">

Lista de seleção do React Native equivalente ao Select do HTML "

</div>

<br>

<h4>Peso leve e fácil de usar lista suspensa de seleção.</h4>

-   Estilize-o do seu jeito com adereços de estilo de cada vista.
-   Desempenho suave em todas as plataformas IOS, Android e Web.
-   Alterar família de fontes Facilmente qual seletor de comunidade não tem.
-   Zero dependências

<br>

# Compatibilidade

<br>

|  iOS  | Android | Web | Expo |
--------|---------|-----|------|
|  ✅  |    ✅    | ✅ |  ✅  |


<br>

# 🔌 Instalação

```sh
$ npm install react-native-lista-selecao-suspensa

```

OU

```sh
$ yarn add react-native-lista-selecao-suspensa
```

<br>

#🤩 Uso básico para ListaSelecao
```jsx
import { ListaSelecao } from 'react-native-lista-selecao-suspensa'

const App = () => {

  const [selecionado, setSelecionado] = React.useState("");
  
  const dados = [
      {chave:'1', valor:'Celulares', desabilitado:true},
      {chave:'2', valor:'Aparelhos'},
      {chave:'3', valor:'Câmeras'},
      {chave:'4', valor:'Computadores', desabilitado:true},
      {chave:'5', valor:'food space'},
      {chave:'6', valor:'inottec'},
      {chave:'7', valor:'vitrine'},
  ]

  return(
    <ListaSelecao
        setSelecionada={(val) => setSelecionado(val)} 
        dados={dados} 
        salvar="valor"
    />
  )

};
```
<br>

# 🤩 Uso básico para ListaSelecaoMultipla
```jsx
import { ListaSelecaoMultipla } from 'react-native-lista-selecao-suspensa'

const App = () => {

  const [selecionado, setSelecionado] = React.useState("");
  
  const dados = [
      {chave:'1', valor:'Celulares', desabilitado:true},
      {chave:'2', valor:'Aparelhos'},
      {chave:'3', valor:'Câmeras'},
      {chave:'4', valor:'Computadores', desabilitado:true},
      {chave:'5', valor:'food space'},
      {chave:'6', valor:'inottec'},
      {chave:'7', valor:'vitrine'},
  ]

  return(
    <ListaSelecaoMultipla
        setSelecionada={(val) => setSelecionado(val)} 
        dados={dados} 
        salvar="valor"
        selecionada={selecionado} 
        subtituloListaItens="Categorias"
    />
  )

};
```

<br>


Para ao vivo `Demo` [(Expo Snack)](https://snack.expo.dev/@felipe-s-o/react-native-lista-selecao-suspensa)

<br>

# 🔧 Adereços Gerais
<i>Aplicável em ambos os componentes <b>ListaSelecao</b> & <b>ListaSelecaoMultipla</b></i>

| Nome | Tipo | Descrição |
| ---- | ---- | ----------- |
| salvar| string | Passe ('chave' ou 'valor') para salvar dados de sua escolha em sua variável de estado local
| aoSelecionar| Function | Passe qualquer função que você deseja acionar imediatamente após uma opção ser selecionada
| textoCaixaSelecao | String | Texto de espaço reservado que será exibido na caixa de seleção
| pesquisar | boolean | Definir como False se você não quiser usar a funcionalidade de pesquisa
| maxAltura| Number | Altura máxima do invólucro suspenso a ser ocupado
| dados| array OU array[object]| Dados que serão iterados como opções de selecionar lista
| setSelecionada| Function | Para Definir o valor da opção que será armazenado em seu estado local
| iconePesquisa| JSX Element | Passe qualquer JSX para este acessório como Texto, Imagem ou Ícone para mostrar em vez do ícone de pesquisa
| iconeSeta| JSX Element | Passe qualquer JSX para este acessório como Texto, Imagem ou Ícone para mostrar em vez do ícone de divisa
| iconeFechar| JSX Element | Passe qualquer JSX para este acessório como Texto, Imagem ou Ícone para mostrar em vez de fechar ícone
| textoCampoPesquisar| String | Texto de espaço reservado personalizado para pesquisa TextInput
| selecionada| String ou array[object]| Passar opção selecionada por padrão String para ListaSelecao OU array[object] para ListaSelecaoMultipla
| fontFamily| string | Passar nome da fonte para aplicar globalmente em cada campo de texto do componente
| textoItemNaoEncontrado| string | Passe sua mensagem personalizada se algum resultado da pesquisa retornar vazio
| ListaVisivel| boolean | Controle seu estado suspenso (on & off) alterando seu valor para true ou false

<br>

# 🔧 Adereços de estilo geral
<i>Aplicável em ambos os componentes <b>ListaSelecao</b> & <b>MultipleSelectList</b></i>

| Nome | Tipo | Descrição |
| ---- | ---- | ----------- |
| estiloCaixaSelecao| Object| Estilos adicionais para caixa de seleção
| estiloTextoCaixaSelecao| Object| Estilos adicionais para o texto da caixa de seleção
| estiloLista| Object| Estilos adicionais para o modo de exibição de rolagem suspenso
| estiloItemLista| Object| Estilos adicionais para item de lista única suspensa
| estiloTextoItemLista| Object| Estilos adicionais para texto de itens de lista suspensa
| estiloItemDesabilitado| Object| Estilos adicionais para item de lista suspensa desabilitado
| estiloTextoItemDesabilitado| Object| Estilos adicionais para texto de itens de lista suspensa desabilitados

<br>

# 🤩 Uso avançado
```jsx
import { ListaSelecao } from 'react-native-lista-selecao-suspensa'

const App = () => {

   const [selecionado, setSelecionado] = React.useState("");  

   const dados = [      
      {chave:'2', valor:'Aparelhos'},
      {chave:'3', valor:'Câmeras'},
      {chave:'5', valor:'food space'},
      {chave:'6', valor:'inottec'},
      {chave:'7', valor:'vitrine'},
  ]

  return(
    <SelectList 
      aoSelecionar={() => alert(selecionado)}
      setSelecionada={setSelecionado} 
      fontFamily='lato'
      dados={dados}  
      iconeFechar={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      iconePesquisar={<FontAwesome name="search" size={12} color={'black'} />} 
      pesquisar={false} 
      estiloCaixaSelecao={{borderRadius:0}} 
      selecionada={selecionado}  
    />
  )

};
```

<br>

# 🤩 Obtendo opções do banco de dados
```jsx
import { ListaSelecao } from 'react-native-lista-selecao-suspensa'

const App = () => {

  const [selecionado, setSelecionado] = React.useState("");  
  const [dados,setDados] = React.useState([]);
  
  React.useEffect(() => 
    //Obter valores do banco de dados
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Armazenar valores na matriz temporária
        let lista = response.data.map((item) => {
          return {chave: item.id, valor: item.name}
        })
        // Definir variável de dados
        setDados(lista)
      })
      .catch((e) => {
        console.log(e)
      })
  ,[])

  return(
    <SelectList setSelecionada={setSelecionado}  dados={dados}  aoSelecionar={() => alert(selecionado)} />
  )

};
```

<br>

# 🔧 Adereços adicionais
<i>Aplicável somente em <b>ListaSelecaoMultipla</b></i>

| Nome | Tipo | Descrição |
| ---- | ---- | ----------- |
| subtituloListaItens| string| Passar qualquer cadeia de caracteres a ser colocada em vez do rótulo padrão


<br>

# 🔧 Adereços de estilo adicionais
<i>Aplicável somente em <b>ListaSelecaoMultipla</b></i>

| Nome | Tipo | Descrição |
| ---- | ---- | ----------- |
| estiloCheckBoxDesabilitado| Object| Caixa de seleção de estilos adicionais desabilitada dentro da lista suspensa
| estiloCheckBox| Object| Caixa de seleção Estilos adicionais para ativo
| estiloTag| Object| Estilos adicionais para emblemas de valores selecionados
| estiloTextoTag| Object| Estilos adicionais para Texto de selos de valores selecionados
| estiloTituloTag| Object| Estilos adicionais para rótulo de várias listas de seleção

<br>

Para ao vivo `Demo` [(Expo Snack)](https://snack.expo.dev/@felipe-s-o/react-native-lista-selecao-suspensa)

<br>
## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/63815922?v=4" width=115><br><sub>Felipe Silva</sub>](https://github.com/Felipe-S-O) 

