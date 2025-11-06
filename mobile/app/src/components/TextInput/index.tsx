import React from 'react';
import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native';

type InputProps = {
  labelText?: string;
  placeholder?: string;
};

const TextInput: React.FC<InputProps> = ({
  labelText = '',
  placeholder = '',
}) => {
  return (
    <View>
      <Text style={styles.label}>{labelText}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202' },
  input: {
    borderWidth: 1,
    borderColor: '#B2CEC3',
    borderRadius: 8,
    padding: 10,
  },
});
