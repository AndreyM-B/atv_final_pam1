import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaDrawer1() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>BEM VINDO!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        fontSize:40,
        fontWeight: 'bold',
    }
});