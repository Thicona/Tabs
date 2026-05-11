import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

// 2. Definição do array ONGS_DATA
const ONGS_DATA = [
    { id: '1', nome: 'Amigos de Patas', cidade: 'São Paulo', emoji: '🏠' },
    { id: '2', nome: 'Abrigo Esperança', cidade: 'Belo Horizonte', emoji: '🏠' },
    { id: '3', nome: 'Patinhas de Luz', cidade: 'Curitiba', emoji: '🏠' },
    { id: '4', nome: 'Resgate Animal', cidade: 'Rio de Janeiro', emoji: '🏠' },
];

export default function Ongs() {

    // Função para renderizar cada item da lista
    const renderOng = ({ item }: { item: typeof ONGS_DATA[0] }) => (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.cidade}>{item.cidade}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ONGs Parceiras</Text>

            {/* 3. Utilização do FlatList */}
            <FlatList
                data={ONGS_DATA}
                keyExtractor={item => item.id}
                renderItem={renderOng}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

// 4. Estilização diferenciada com StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8', // Fundo levemente azulado
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        color: '#2D3748',
    },
    listContent: {
        paddingHorizontal: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        alignItems: 'center',
        // Sombra para destacar o card
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderLeftWidth: 6,
        borderLeftColor: '#4A90E2', // Detalhe azul para diferenciar dos pets
    },
    iconContainer: {
        backgroundColor: '#EBF8FF',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
    },
    emoji: {
        fontSize: 24,
    },
    textContainer: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A202C',
    },
    cidade: {
        fontSize: 14,
        color: '#718096',
        marginTop: 2,
    },
});
