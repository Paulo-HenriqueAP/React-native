import {View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView,  StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {styles} from "./css/style";

  const cortes = [
  {
    nome: "Buzz cut",
    caminho: require("../../assets/fotosCortes/Buzz cut.jpg"),
    preco: 20.00,
    sel: "",
    resumo: "É um corte que o cabelo é cortado rente ao couro cabelo com um comprimento uniforme em toda a cabeça. É um corte popular por ser prático, de baixa manutenção e com uma estética limpa e moderna."
  },
  {
    nome: "Caesar",
    caminho: require("../../assets/fotosCortes/Caesar.jpg"),
    preco: 33.00,
    sel: "",
    resumo: "É um corte de cabelo masculino curto, com uma franja reta e horizontal na frente e laterais e nuca mais curtas, frequentemente com um efeito de 'degradê' ou raspado, e um topo com um pouco de volume."
  },
  {
    nome: "Corte militar",
    caminho: require("../../assets/fotosCortes/Militar.jpg"),
    preco: 13.00,
    sel: "",
    resumo: "É um estilo de cabelo masculino caracterizado por ser curto nas laterais e na parte de trás, com um comprimento ligeiramente maior no topo da cabeça."
  },
  {
    nome: "Degradê",
    caminho: require("../../assets/fotosCortes/Degrade.jpg"),
    preco: 48.00,
    sel: "",
    resumo: "É um estilo versátil, caracterizado pela transição gradual entre comprimentos de cabelo, geralmente mais curto nas laterais e nuca, e mais longo no topo. O degradê pode variar de leve a mais marcado, dependendo da preferência pessoal."
  },
  {
    nome: "French crop",
    caminho: require("../../assets/fotosCortes/French crop.jpg"),
    preco: 51.00,
    sel: "",
    resumo: "É um corte no qual a parte de cima do cabelo é deixada mais comprida e a franja curta, enquanto as laterais e a parte de trás são mais curtas, muitas vezes desfiadas ou com um fade."
  },
  {
    nome: "Low fade",
    caminho: require("../../assets/fotosCortes/Low fade.jpg"),
    preco: 35.00,
    sel: "",
    resumo: "É um corte de cabelo que cria um degradê sutil nos lados e na nuca, mantendo mais cabelo no topo da cabeça."
  },
  {
    nome: "Moicano",
    caminho: require("../../assets/fotosCortes/Moicano.jpg"),
    preco: 72.00,
    sel: "",
    resumo: "É um estilo de cabelo com uma faixa de cabelo mais comprida no meio da cabeça, com os lados raspados ou bem curtos. O corte pode ser adaptado para diferentes tipos de cabelo e formatos de rosto."
  },
  {
    nome: "Moicano disfarçado",
    caminho: require("../../assets/fotosCortes/Moicanodis.jpg"),
    preco: 58.00,
    sel: "",
    resumo: "É um corte mais suave, mas ainda mantem a estética do moicano, criando um efeito degradê nas laterais em vez de uma raspagem total."
  },
  {
    nome: "Mullet",
    caminho: require("../../assets/fotosCortes/Mullet.jpg"),
    preco: 60.00,
    sel: "",
    resumo: "É um corte que é mais curto na frente, na parte de cima e nas laterais, e mais longo atrás. O mullet pode ser adaptado a diferentes tipos de cabelo (liso, ondulado, cacheado)."
  },
  {
    nome: "Nudred",
    caminho: require("../../assets/fotosCortes/Nudred.jpg"),
    preco: 60.00,
    sel: "",
    resumo: "Estilo afro com fios torcidos ou cacheados usando esponja Nudred. Visual autêntico, cheio de atitude e identidade!"
  },
  {
    nome: "Pompadour",
    caminho: require("../../assets/fotosCortes/Pompadour.jpg"),
    preco: 83.00,
    sel: "",
    resumo: "É um corte de cabelo clássico, com um volume na parte superior, penteado para cima e para trás, e laterais mais curtas."
  },
  {
    nome: "Undercut",
    caminho: require("../../assets/fotosCortes/Undercut.jpg"),
    preco: 67.00,
    sel: "",
    resumo: "Laterais e nuca raspadas ou bem curtas, com o topo mais longo e estilizado. Visual moderno, marcante e versátil."
  }
];

  const outrosProdutos = [
  {
    nome: "Alisamento",
    caminho: require("../../assets/outrosProdutos/Alisamento.jpg"),
    preco: 100.00,
    sel: "",
    resumo: "Cabelos lisos, alinhados e com estilo em poucas horas. Atendimento top, produto de qualidade e resultado de respeito!"
  },
  {
    nome: "Barba",
    caminho: require("../../assets/outrosProdutos/barba.jpg"),
    preco: 15.00,
    sel: "",
    resumo: "Barba bem feita é outro nível! Contorno alinhado, navalha afiada e finalização caprichada. Do degradê à barba cheia, aqui é cuidado de verdade!"
  },
  {
    nome: "Luzes",
    caminho: require("../../assets/outrosProdutos/Luzes.jpg"),
    preco: 50.00,
    sel: "",
    resumo: "Luzes que transformam! Destaque seu estilo com luzes feitas na medida certa para realçar seu visual e trazer mais personalidade. Cabelo moderno, com atitude!"
  },
  {
    nome: "Massagem facial",
    caminho: require("../../assets/outrosProdutos/Massagem.jpg"),
    preco: 25.00,
    sel: "",
    resumo: "Massagem Facial: cuidado além do corte! Ativa a circulação, relaxa, reduz o estresse e ainda melhora a pele. É o toque final pra sair leve e renovado! Agende seu momento"
  },
  {
    nome: "Nevou",
    caminho: require("../../assets/outrosProdutos/Nevou.jpg"),
    preco: 40,
    sel: "",
    resumo: "Nevou no cabelo masculino! Cores vibrantes ou descoloração feita com técnica e cuidado para realçar seu estilo sem perder a saúde dos fios. Visual moderno, autêntico e cheio de atitude"
  },
  {
    nome: "Pintura",
    caminho: require("../../assets/outrosProdutos/Pintura.jpg"),
    preco: 30.00,
    sel: "",
    resumo: "Falhas? Nunca mais! A pigmentação cobre imperfeições e realça seu visual com naturalidade e estilo. Seja na barba ou no couro cabeludo, o resultado é de respeito! Agende seu horário"
  },
  {
    nome: "Sobrancelha",
    caminho: require("../../assets/outrosProdutos/Sobrancelha.jpg"),
    preco: 10.00,
    sel: "",
    resumo: "Aquele acabamento limpo e natural que valoriza o olhar e eleva o visual. Homem também cuida!"
  },
  {
    nome: "Toalha Quente",
    caminho: require("../../assets/outrosProdutos/Toalha.jpg"),
    preco: 10.00,
    sel: "",
    resumo: "Ritual de respeito: Toalha Quente! Amolece os fios, abre os poros e prepara a pele pra um barbear impecável. Relaxa, renova e valoriza o atendimento! Vem sentir a experiência."
  },
  {
    nome: "Trança nagô",
    caminho: require("../../assets/outrosProdutos/Trancan.jpg"),
    preco: 80.00,
    sel: "",
    resumo: "Estilo que prende o olhar! Tranças masculinas feitas com técnica, cuidado e muito estilo. Dos modelos clássicos aos personalizados — aqui é arte na cabeça!"
  }
];

const semCorte = [{
    nome: "Não quero corte!",
    caminho: require("../../assets/fotosCortes/semCorte.jpg"),
    preco: 0.00
    }]

  let carrinhoFinal =[];

  let corteNoCarrinho = semCorte[0].caminho

  const App = () => {
  const [index, setIndex] = useState(0);
  const [produto, SetProduto] = useState(cortes);

  const navegar = useNavigation();
  const route = useRoute();
  const {valor} = route.params || "null";

  function carrosselSimples(direcao) {
    let i = index;

    direcao == "-" ? i-- : i++;

    if ( i < 0) {
      i = produto.length - 1
    } else if (i >= produto.length) {
      i = 0
    }

   setIndex(i);
};

const mostrar = {
  position: "absolute",
  left: 0,
};

const esconder = {
  position: "absolute",
  left: -200,
};




const openTelaCarrinho = () => {
  carrinhoFinal = [];
  const temCorte = cortes.filter(corte => corte.sel === "Selecionado!");

  const corteSelecionado = temCorte.length > 0 ? temCorte:semCorte;

  const outrosSelecionados = outrosProdutos.filter(extras => extras.sel === "Extra adicionado!");

  carrinhoFinal.push(...corteSelecionado, ...outrosSelecionados);

  navegar.navigate("Carrinho", {carrinhoFinal, valor})
}

const addProduto = () => {
  if (produto === cortes) {
    cortes.forEach((i) => {
      i.sel = ""
    })
  cortes[index].sel = "Selecionado!";
  corteNoCarrinho = cortes[index].caminho
   trocarTipoProduto("outros", 0);
  } else {
   outrosProdutos[index].sel = "Extra adicionado!";
   carrosselSimples("+")
  }
};

function trocarTipoProduto(prod, index){
 switch (prod) {
   case "outros":
    SetProduto(outrosProdutos);
    setIndex(index);
   break;

   case "cortes":
    SetProduto(cortes);
    
    cortes.forEach((item, i) => {
    item.sel == "Selecionado!"? setIndex(i):setIndex(index);
    })
   break;

   default:
    SetProduto(outrosProdutos);
    setIndex(0)
 }
}

function removerProduto(remover) {
  if (remover === "removerCorte") {
      cortes.forEach((i) => {
      i.sel = ""
    })
    corteNoCarrinho = semCorte[0].caminho
    carrosselSimples("+")
    return;
  }

  outrosProdutos.filter(qualIndex => qualIndex.nome === remover)[0].sel = "";
  carrosselSimples("+")
}

  return (
<SafeAreaView style={styles.principal} >

 {/*<TouchableOpacity style={styles.voltar} onPress={() => navegar.goBack()}>
  <MaterialIcons name="arrow-back" size={24} color="white" /> <Text> {valor} </Text>
 </TouchableOpacity>*/}

<View style={styles.abaCarrinho}> 
 <View>
    <TouchableOpacity onPress={() => removerProduto("removerCorte")} style={styles.pequenoCorte}>
      <Image style={styles.pequenoCarrinhoIMG} source={corteNoCarrinho}/>
      <MaterialIcons name="close" size={10} color="red" style={{right:1, bottom:0, position:"absolute"}} />
    </TouchableOpacity>

  {outrosProdutos.map((item) => (
    item.sel === "Extra adicionado!" ? (
      <TouchableOpacity onPress={() => removerProduto(item.nome)} style={styles.pequenoCarrinho}>
        <Image style={styles.pequenoCarrinhoIMG} source={item.caminho} />
        <MaterialIcons name="close" size={10} color="red" style={{right:1, bottom:0, position:"absolute"}} />
      </TouchableOpacity>
    ) : null
  ))}

  <TouchableOpacity onPress={openTelaCarrinho} style={styles.avancarCarrinho}>
      <MaterialIcons name="shopping-bag" size={40} color="white"/>
</TouchableOpacity>
</View>

</View>
    
    <View style={styles.carta}>
      <Image style={styles.corteCarta} source={produto[index].caminho}/>
      <Text style={styles.nomeCorte} >{produto[index].nome} </Text>

      <View>
        <Text style={styles.resumo}>{produto[index].resumo}</Text>
      </View> 
      
    </View>
    
    <View style={styles.interacao}> 
      <Text style={styles.valorCorte}>{produto[index].preco}$</Text>

        <View style={{alignItems: 'center', flexDirection: 'row', margin:15}}>
          <TouchableOpacity onPress={() => carrosselSimples("-")} >
          <MaterialIcons name="arrow-back-ios" size={40} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addCarrinho}>
            <MaterialIcons name="add-shopping-cart" size={45} color="white" onPress={() => addProduto()} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => carrosselSimples("+")}>
            <MaterialIcons name="arrow-forward-ios" size={40} color="white" />
          </TouchableOpacity>
        </View>

      <Text style={{color:"white"}}>{produto[index].sel}</Text>
    </View>

    <View style ={styles.previas1}>
  <TouchableOpacity style={styles.opcoesProduto} onPress={() => trocarTipoProduto("cortes", 0)}>
        <Text style={{color:"white"}}>Cortes </Text><MaterialIcons name="shortcut" size={10} color="white" />
  </TouchableOpacity>

    <ScrollView> 
      {cortes.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => trocarTipoProduto("cortes", i)} style={{width:150}}>
          {/*<Image style={styles.cortePrevia} source={item.caminho} />*/}
          <Text style={styles.listaProdutos}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
    
    <View style ={styles.previas2}>

      <TouchableOpacity style={styles.opcoesProduto} onPress={() => trocarTipoProduto("outros", 0)}>
        <Text style={{color:"white"}}>Extras </Text><MaterialIcons name="shortcut" size={10} color="white"/>
      </TouchableOpacity>

       <ScrollView> 
      {outrosProdutos.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => trocarTipoProduto("outros", i)} style={{width:150}}>
          {/*<Image style={styles.cortePrevia} source={item.caminho} />*/}
          <Text style={styles.listaProdutos}> {item.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
 </View>

    </SafeAreaView>
  )
}


export default App;