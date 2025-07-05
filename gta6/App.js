import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (

    <ScrollView>
      <View style={styles.body}>
        <Text style={styles.title}> Grand Theft Auto VI </Text>
        <Text style={styles.subTitle}>Em 2026, jogue com</Text>
        <Text style={styles.subTitle2}>Lucia Caminos</Text>
        <Text style={styles.fundo}>
          <Image style={styles.pers} source={require('./assets/lucia.webp')} />
        </Text>

        <Text style={styles.subTitle2}>Ou Jason Duval</Text>
        <Text style={styles.fundo}>
          <Image style={styles.pers} source={require('./assets/jason.webp')} />
        </Text>

        <Text style={styles.subTitle2}> No estado de Leonida</Text>
        <Text style={styles.fundo}>
          <Image style={styles.city} source={require('./assets/city.webp')} />
        </Text>

         <Text style={styles.rodape}>Rockstar Games</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#26282A',
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    backgroundColor: '#26282A',
    color: 'white',
    display: 'block',
    fontFamily: 'monospace',
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
    display: 'block',
    marginBottom: 20,
  },

  subTitle2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'monospace',
  },

  pers: {
    width: 200,
    height: 200,
    borderRadius: 10,
    border: '3px solid #16161D',
  },

  fundo: {
    textAlign: 'center',
    width: 250,
  },

  city: {
    width: 250,
    height: 250,
    borderRadius: 10,
    border: '3px solid #16161D',
  },

  rodape : {
    color: "#FFAB00",
     fontFamily: 'monospace',
     display: "block",
     margin: 20
  }
});
