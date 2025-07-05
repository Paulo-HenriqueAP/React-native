import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeScreen = () => {
    const navegar = useNavigation();
    const [valor, setValor] = useState("");
    const handleChange = (text) => {
        setValor(text)
    }

    const openTelaCortes = () => {
      navegar.navigate("Cortes", {valor})
    }

    return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require("../../assets/logo.png")} />
              <Text>WhatsApp fornecido ⤵ </Text>
             <View>
                <View style={styles.mesmaLinha}>
                <TextInput onChangeText={handleChange}
                    style={styles.input}
                    value={valor}
                    keyboardType="numeric"/>
                <TouchableOpacity onPress={openTelaCortes} style={styles.confirmar}>
                    <MaterialIcons name="navigate-next" size={30} color="white" />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#ffffff",
        textAlign: "center",
        justifyContent:"center"
    },

    input: {
        borderColor: "gray",
        borderWidth: 1,
        width: 250,
        margin: 20,
        borderRadius: 3
    },

    logo: {
        width: 130,
        height: 130,
        borderRadius: 15,
        margin: 20
    },

    confirmar: {
        backgroundColor: "#16161D",
        borderRadius: 3,
        height: 30,
    },
    
    mesmaLinha: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default HomeScreen;