 
import { View, Text, TextInput } from 'react-native'; 


import styles from './styles';

export default function CadUsuario(){
    return (
        <View style={styles.container}>
            <Text style={styles.tituloTela}>Cadastro de Ususario</Text>
            <TextInput style={styles.input} placeholder='Nome completo' />
            <TextInput style={styles.input} placeholder='usuario' />
            <TextInput style={styles.input} placeholder='senha' />
        </View>
    );
}