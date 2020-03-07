import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const ItemLista = React.memo(({ nomeEmpresa, dataInicio, id, dataInicioAcordo, dataFimAcordo, orgaoResponsavel, cnpj, razaoSocial, nomeFantasia, ufEmpresa, situacaoAcordo, quantidade }) => {

  return (
    <View key={id} style={{ borderBottomColor: 'lightgray', borderBottomWidth: 0.5, padding: 10 }}>
      <Text style={{ color: '#fff' }}>Nome Empresa: {nomeEmpresa}</Text>
      <Text style={{ color: '#fff' }}>Data de Inicio: {dataInicio}</Text>
      <Text style={{ color: '#fff' }}>Data de Inicio Acordo: {dataInicioAcordo}</Text>
      <Text style={{ color: '#fff' }}>Data de Fim do Acordo: {dataFimAcordo}</Text>
      <Text style={{ color: '#fff' }}>Orgão Responsavel: {orgaoResponsavel}</Text>
      <Text style={{ color: '#fff' }}>CNPJ: {cnpj}</Text>
      <Text style={{ color: '#fff' }}>Razão Social: {razaoSocial}</Text>
      <Text style={{ color: '#fff' }}>Nome Fantasia: {nomeFantasia}</Text>
      <Text style={{ color: '#fff' }}>Estado da Empresa: {ufEmpresa}</Text>
      <Text style={{ color: '#fff' }}>Situação do Acordo: {situacaoAcordo}</Text>
      <Text style={{ color: '#fff' }}>Qunatidade: {quantidade}</Text>
    </View>
  )
})


export default App = () => {
  let [dados, setdados] = useState([]);
  useEffect(async () => {
    fetch('http://www.transparencia.gov.br/api-de-dados/acordos-leniencia?pagina=1').then(
      v => v.json().then(v => setdados(v)))
  }, [])

  return (
    <View style={styles.container}>

      <FlatList style={{ width: '100%', backgroundColor: '#000' }}
        renderItem={({ item }) => <ItemLista {...item} />}
        ListEmptyComponent={_ => <Text style={{ color: '#fff' }}>Lista vazia</Text>}
        data={dados}
        extraData={dados}
        keyExtractor={(item) => item.id} />

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
