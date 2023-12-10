import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    children: React.ReactNode
}

export function ButtonComponent({ children, onPress, ...props }: ButtonComponentProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        width: 276,
        backgroundColor: '#016840',
        color: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#FFF'
    }
})