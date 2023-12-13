import { Image, FlatList, SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const produtos = [
    {
        codigo_produto:1,
        codigo_categoria:1,
        nome_produto:'Teclado',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/informatica1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:2,
        codigo_categoria:1,
        nome_produto:'Mouse',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/informatica2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:3,
        codigo_categoria:5,
        nome_produto:'Isaac SmartWatch',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/eletronico1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:4,
        codigo_categoria:5,
        nome_produto:'SmartPhone',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/eletronico2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:5,
        codigo_categoria:4,
        nome_produto:'Camiseta',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/vestuario1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:6,
        codigo_categoria:4,
        nome_produto:'Calça',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/vestuario2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:7,
        codigo_categoria:3,
        nome_produto:'Desodorante',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/higiene1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:8,
        codigo_categoria:3,
        nome_produto:'Shampoo',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/higiene2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:9,
        codigo_categoria:2,
        nome_produto:'Caderno',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/papelaria1.png'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
    {
        codigo_produto:10,
        codigo_categoria:2,
        nome_produto:'Caneta',
        valor_produto:'90,00',
        imagem_livro:require('../assets/imagens/livros/papelaria2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien.'
    },
];

const prodItem = ({ item }) => {
    return (
        <View style={styles.prod_container}>

            <Image
                style={styles.prod_image}
                source={item.imagem_livro}
            />

            <View style={styles.prod_text_container}>

                <Text style={styles.prod_data}>{item.nome_produto}</Text>

                <Text style={styles.prod_data}>{item.valor_produto}</Text>

                <TouchableOpacity style={styles.prod_button_details}>
                    <Text style={styles.prod_button_text}>DETALHES</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default function Produtos() {
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={produtos}
                renderItem={prodItem}
                ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                keyExtractor={produtos => produtos.codigo_produto}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    prod_list_header: {
        height: 100,
    },
    prod_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        backgroundColor: '#CCC',
    },
    prod_image: {
        width: 150,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    prod_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    prod_data: {
        fontSize: 20,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    prod_author: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    prod_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    prod_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});