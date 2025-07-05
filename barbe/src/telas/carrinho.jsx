
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

const TelaFinal = ({ route }) => {
  const { carrinhoFinal, valor } = route.params;

  const saudacoes = ["Olá!", "Tudo bem?", "Hey!", "Como vai?", "Qualé!", "E aí!", "Oi!", "Belê?", "Fala aí!", "Como vai?" ];

  const escolhas = ["Gostaria deste corte", "Quero cortar assim", "Preciso desse corte", "Escolhi esse corte aqui", "Escolho o corte", "Quero o corte" ];

let inicioMsg = saudacoes[Math.floor(Math.random() * saudacoes.length)];
let extras = "";

let totalCarrinho = carrinhoFinal[0].preco;

if (carrinhoFinal[0].nome !="Não quero corte!") {
  meioMsg = `${escolhas[Math.floor(Math.random() * escolhas.length)]}: *${carrinhoFinal[0].nome}.*` 
} else {
  meioMsg = "Dei uma olhada e não vou querer corte.";
}

carrinhoFinal.length > 1? extras = "Quero agendar": null

for (let i = 1; i < carrinhoFinal.length; i++) {
 extras += `, ${carrinhoFinal[i].nome}`
 totalCarrinho += carrinhoFinal[i].preco

}

 const msgFinal = `whatsapp://send?phone=${valor}&text=${inicioMsg} ${meioMsg} ${extras}. O valor ficou ${totalCarrinho} reais.`;
  
  console.log(msgFinal)

  const abrirWpp = async() => {
  try {
    await Linking.openURL(msgFinal)
  } catch (err) {
    console.log(err)
  }
}

return (  
  <ScrollView >

    <View style = {styles.principal}>  
        {carrinhoFinal.map((item) => (
          <View key={item.id}  style={styles.carta}>
            <Image style={styles.img} source={item.caminho} />
            <View>
              <Text style={styles.nomeCorte}>{item.nome}</Text>
              <Text style={{color:"green", fontSize: 12, right:5, position:"absolute", bottom: -25}}>{item.preco}$</Text>
            </View>
           
          </View>
        ))}
      </View>

    <View> 
      <View style={styles.agendar}> 
        <Text style={{fontSize: 20}}>Total: R${totalCarrinho} </Text>

        <TouchableOpacity style={styles.mesmaLinha} onPress={abrirWpp}>
          <Text style={{fontSize: 20}}>Agendar </Text> <MaterialCommunityIcons name="whatsapp" size={24} color="green"/>
        </TouchableOpacity></View>
      </View>

  </ScrollView>
    )
}
//{carrinhoFinal.map((prodAdc, i) => (
//onPress={() => removerProduto(i)}

const styles = StyleSheet.create({
    principal: {
      flex: 1,
      margin: 10,
      padding: 4,
      borderRadius: 6,
      alignItems:"center"
  },
  carta: {
  flexDirection: 'row',
  alignItems: 'center', 
  margin: 5,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 5,
},

  nomeCorte: {
    width: 150,
    textAlign:"center",
    margin: 5,
    fontSize: 16
  },

  img: {
    width: 80,
    height: 80, 
    borderRadius: 6,
    margin: 5
  },

   mesmaLinha: {
    flexDirection: "row",
    alignItems: "center",
   
    borderWidth: 1,
    borderRadius: 3,
    borderColor:"black",
    padding: 8
    },

    agendar: {
      borderTopWidth: 2,
      borderColor: "black",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding:25,
      marginBottom:50
    }

})

export default TelaFinal;