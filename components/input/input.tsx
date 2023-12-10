import { TextInput, TextInputProps, View, StyleSheet } from "react-native";

type InputComponentProps = TextInputProps & {
    startIcon?: React.ReactNode
    placeholder: string
    endIcon?: React.ReactNode
}

export function InputComponent({ placeholder, startIcon, endIcon, ...props }: InputComponentProps) {
    return (
        <View style={styles.view}>
            {startIcon}
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                {...props}
            />
            {endIcon}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        gap: 8,
        padding: 12,
        width: 356,
        borderRadius: 8,
        backgroundColor: '#016840'
    },
    input: {
        flex: 1,
        color: '#fff',
        alignItems: 'center'
    }
})