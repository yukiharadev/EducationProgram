import React from "react";
import { View, Text,StyleSheet, KeyboardAvoidingView,TextInput,TouchableOpacity } from "react-native";
import { Header } from "@rneui/themed";


export default function Account(){
    return(
        <View>
            <Header
                containerStyle={{
                backgroundColor: '#F19480',
                justifyContent: 'space-around',
            }}
                centerComponent={{ text: 'TÀI KHOẢN', style: { color: '#fff' } }}
            />
            <Text style={styles.welcome}>Welcome to DNU</Text>
            <KeyboardAvoidingView style={styles.inputGroup}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={(text) => {}}
                        />
                </View>

                <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => {}}
                />
                </View>
                <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => {}}
                    secureTextEntry
                />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.signIn}>SignIn</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 7,
        fontWeight: 'bold',
    },
    inputGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        },
    container: {
        width: "80%",
        padding: 5,
    },
    input: {    
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        fontSize: 18,
        borderRadius: 20,
        },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        },
        
    signIn: {
        fontSize: 18,
        color: "#F19480",
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 20,
        borderWidth: 1
    },
})