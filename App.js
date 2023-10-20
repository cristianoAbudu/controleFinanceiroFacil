import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TextInput,
  Button,
  Alert
} from 'react-native';

import React, {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="R$"
        keyboardType="numeric"
      />
      <Text>Categoria:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <TextInput
        placeholder="Descrição"
      />
      <Button
        title="OK"
        onPress={() => Alert.alert('OK')}
      />
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
});
