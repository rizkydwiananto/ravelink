import { Ionicons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Gap } from '../../utils';

export type Option = {
  id: number;
  label: string;
};

type ModalSelectProps = {
  title: string;
  options: Option[];
  selectedOption: Option | null;
  onSelect: (option: Option) => void;
  onClose?: () => void; // optional callback saat tombol close ditekan
};

const ModalSelect = forwardRef<Modalize, ModalSelectProps>(
  ({ title, options, selectedOption, onSelect, onClose }, ref) => {
    return (
      <Modalize ref={ref} adjustToContentHeight modalStyle={styles.modal}>
        {/* Header */}
        <View style={styles.modalHeader}>
          <Text style={styles.labelModal}>{title}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Options */}
        <View style={styles.modalContent}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option,
                selectedOption?.id === option.id && styles.optionSelected,
              ]}
              onPress={() => onSelect(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption?.id === option.id && styles.optionTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Gap height={50} />
      </Modalize>
    );
  },
);

// 🧩 Tambahkan baris ini:
ModalSelect.displayName = 'ModalSelect';

export default ModalSelect;

const styles = StyleSheet.create({
  modal: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  labelModal: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#020202',
  },
  closeButton: {
    padding: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    width: '100%',
    marginBottom: 20,
  },
  modalContent: { paddingHorizontal: 20, paddingBottom: 20 },
  option: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionSelected: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 15,
    color: '#333',
    paddingLeft: 10,
  },
  optionTextSelected: {
    fontFamily: 'Poppins-SemiBold',
    color: '#0DA96E',
  },
});
