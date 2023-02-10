import { lazy } from "react"
import { StyleSheet, View, Pressable, Text } from "react-native"

export default function SubmitButton({label}) {
    return (
        <View>
            <Pressable>
                <Text style={styles.text}>
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }

}) 