import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 10,
        marginTop: 10,
        overflow: 'hidden'
    },
    image: {
        objectFit: 'cover',
    },
    body_container: {
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
        color: '#444'
    },
    text: {
        fontSize: 16,
        fontWeight: '400'
    },
    author: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10
    }
})
