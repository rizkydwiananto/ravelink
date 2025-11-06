import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onChange: (date: Date) => void;
  maximumDate?: Date;
  minimumDate?: Date;
}

const DatePickerModal = ({
  label = 'Select Date',
  placeholder = 'Select your date',
  value,
  onChange,
  maximumDate = new Date(),
  minimumDate,
}: DatePickerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPicker = () => setIsVisible(true);
  const hidePicker = () => setIsVisible(false);

  const handleConfirm = (date: Date) => {
    onChange(date);
    hidePicker();
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity style={styles.inputWrapper} onPress={showPicker}>
        <Text style={styles.inputText}>
          {value
            ? value.toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : placeholder}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        locale="id-ID"
        display="default"
        textColor="#0DA96E" // (iOS only)
        accentColor="#0DA96E" // (Android accent color)
        confirmTextIOS="OK"
        cancelTextIOS="Batal"
      />
    </View>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B2CEC3',
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
  },
  inputText: {
    flex: 1,
    fontSize: 13,
    color: '#020202',
    fontFamily: 'Poppins-Light',
  },
});
