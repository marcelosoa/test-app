import { StyleSheet, View } from 'react-native';
import { ButtonComponent } from '../../components/button/button';
import { InputComponent } from '../../components/input/input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { AccountModel } from '../../domain/models/account.model';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Authentication } from '../../config/firebase/firebaseConfig';


export default function TabOneScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [account, setAccount] = useState<AccountModel | null>(null)

  const handleLogin = async (account: AccountModel) => {
    try {
      await signInWithEmailAndPassword(Authentication, account.email, account.password)
      setAccount(account)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <InputComponent
        placeholder='Alo'
        startIcon={<MaterialCommunityIcons name='home' color={'#fff'} size={24} />}
        onChangeText={(email) => setEmail(email)}
      />
      <InputComponent
        placeholder='Alo'
        endIcon={<MaterialCommunityIcons name='home' color={'#fff'} size={24} />}
        onChangeText={(password) => setPassword(password)}
      />
      <ButtonComponent onPress={() => handleLogin({ email, password })}>
        Entrar
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
