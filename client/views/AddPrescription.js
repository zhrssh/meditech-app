import React, { useState } from "react";
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
} from "react-native";
import TextInputComponent from "../components/TextInputs/TextInputComponent";

export default function AddingPrescription({ navigation }) {
    const [name, onChangeName] = useState("");
    const [dosage, onChangeDosage] = useState("");
    const [instruction, onChangeInstruction] = useState("");

    navigateToDashboard = () => {
        // console.log("Get Started Clicked..."); // debug purposes
        navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("client/assets/images/doctor-consultation.png")}
                    // width={}
                    style={styles.image}
                />
            </View>
            <TextInputComponent
                onChangeText={onChangeName}
                value={name}
                placeholder={"Medicine Name"}
            />
            <TextInputComponent
                onChangeText={onChangeDosage}
                value={dosage}
                placeholder={"Medicine Dosage"}
            />
            <TextInputComponent
                onChangeText={onChangeInstruction}
                value={instruction}
                placeholder={"Medicine Instruction"}
            />
            <TouchableOpacity onPress={navigateToDashboard}>
                <View
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.primary },
                    ]}
                >
                    <Text style={styles.buttonText}>ADD PRESCRIPTION</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const colors = {
    primary: "#00A65D",
    white: "#fff",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 40,
        gap: 20,
    },
    imageContainer: {
        // flex: 2,
        alignSelf: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "80%",
        height: 40,
    },
    buttonText: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: "white",
    },
    bottomTexts: {
        marginTop: 20,
        width: "80%",
        alignSelf: "center",
        gap: 20,
    },
});