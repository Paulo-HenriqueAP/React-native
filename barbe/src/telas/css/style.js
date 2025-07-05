import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16161D',
  },

  carta: {
    alignItems: 'center',
    position: 'absolute',
    top: 80,
  },

  corteCarta: {
    width: 150,
    height: 150,
    borderRadius: 6,
    borderBottomWidth: 3,
    borderColor: 'black',
  },

  resumo: {
    color: 'gray',
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    margin: 5,
    width: 300,
  },

  interacao: {
    borderTopWidth: 1,
    borderColor: 'white',
    position: 'fixed',
    marginTop: 160,
    alignItems: 'center',
  },

  previas1: {
    bottom: 50,
    left: 10,
    position: 'absolute',
    height: 150,
    alignItems: 'center',
    borderRadius: 3,
    padding:5,
    borderBottomColor:"green",
    borderBottomWidth:1
  },

  previas2: {
    bottom: 50,
    right: 10,
    position: 'absolute',
    height: 150,
    alignItems: 'center',
    borderRadius: 3,
    padding:5,
    borderBottomColor:"green",
    borderBottomWidth:1
  },

  opcoesProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    width: 80,
    textAlign: 'center',
    justifyContent: 'center',
  },

  listaProdutos: {
    padding: 6,
    margin: 6,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },

  cortePrevia: {
    width: 50,
    height: 50,
    borderRadius: 6,
    margin: 5,
    borderWidth: 1,
  },

  nomeCorte: {
    fontSize: 30,
    color: 'white',
    marginTop: 5,
  },

  valorCorte: {
    fontSize: 25,
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
  mesmaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  voltar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    top: 0,
    position: 'absolute',
    left: 0,
  },

  addCarrinho: {
    borderBottomWidth: 2,
    width: 'max-content',
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'green',
    borderRadius: 6,
  },

  abaCarrinho: {
    position: 'absolute',
    top: 5,
    right: 0,
  },

  pequenoCarrinhoIMG: {
    width: 25,
    height: 25,
    borderRadius: 3,
  },

  pequenoCarrinho: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
    alignItems: 'right',
    width: 30,
    height: 38,
  },

  pequenoCorte: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15,
    alignItems: 'right',
    width: 30,
    height: 38,
  },

  avancarCarrinho: {
    marginBottom: 5,
    right: 4,
    alignItems:"center",
    marginTop:10
  },

  selProdutos: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    position: 'absolute',
    bottom: 130,
    color: 'gray',
  },
});

export { styles };
