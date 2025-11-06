import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ApiDummy,
  Button,
  DatePickerModal,
  Header,
  ModalSelect,
  Option,
  TextInput,
} from './src';
import Gap from './src/utils/gap';

const SignupV = () => {
  const modalizeRef = useRef<Modalize>(null);
  const genders: Option[] = ApiDummy.genders;
  const [selectedGender, setSelectedGender] = useState<Option | null>(null);
  const handleSelect = (gender: Option) => {
    setSelectedGender(gender);
    modalizeRef.current?.close();
  };

  const modalizeRefCity = useRef<Modalize>(null);
  const cities: Option[] = ApiDummy.cities;
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const handleSelectCity = (city: Option) => {
    setSelectedCity(city);
    modalizeRefCity.current?.close();
  };

  // ======= DATE OF BIRTH =======
  const [dob, setDob] = useState<Date | null>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.page}>
        <StatusBar hidden={false} />
        <Header
          title="Sign Up"
          subTitle="Make sure it’s valid"
          backButton={true}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View>
            {/* === GENDER === */}
            <Text style={styles.label}>Gender</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => modalizeRef.current?.open()}
            >
              <Text style={styles.buttonText}>
                {selectedGender ? selectedGender.label : 'Select your gender'}
              </Text>
            </TouchableOpacity>

            <Gap height={16} />

            {/* === DATE OF BIRTH === */}
            <DatePickerModal
              label="Date of Birth"
              placeholder="Select your date of birth"
              value={dob}
              onChange={setDob}
            />

            <Gap height={16} />

            {/* === PHONE === */}
            <TextInput
              labelText="Phone No."
              placeholder="Type your phone number"
            />

            <Gap height={16} />

            {/* === CITY === */}
            <Text style={styles.label}>City</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => modalizeRefCity.current?.open()}
            >
              <Text style={styles.buttonText}>
                {selectedCity ? selectedCity.label : 'Select your city'}
              </Text>
            </TouchableOpacity>
          </View>

          <Gap height={40} />

          <View>
            <Button
              label="Sign Up Now"
              replace={true}
              pages="/src/(tabs)/Home"
            />
          </View>
        </ScrollView>

        {/*================ Gender Modal ===================*/}
        <ModalSelect
          ref={modalizeRef}
          title="Select your gender"
          options={genders}
          selectedOption={selectedGender}
          onSelect={handleSelect}
          onClose={() => modalizeRef.current?.close()}
        />

        {/*================ City Modal ===================*/}
        <ModalSelect
          ref={modalizeRefCity}
          title="Select your city"
          options={cities}
          selectedOption={selectedCity}
          onSelect={handleSelectCity}
          onClose={() => modalizeRefCity.current?.close()}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SignupV;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 51,
    paddingVertical: 60,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  label: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202' },
  button: {
    borderWidth: 1,
    borderColor: '#B2CEC3',
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#020202',
  },
});
