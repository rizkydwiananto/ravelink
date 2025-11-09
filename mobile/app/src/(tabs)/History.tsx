import { IC_Countries } from '@/assets/icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { HeaderIndex } from '../components';
import { Gap } from '../utils';

const History = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F3F9F7' }}>
      <HeaderIndex title="History" backButton={true} />

      <Gap height={30} />

      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ paddingBottom: 30 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular' }}>
            June 2021
          </Text>

          <Gap height={10} />

          <Shadow
            distance={4}
            offset={[0, 4]}
            startColor="rgba(0,0,0,0.10)"
            style={{ width: '100%', borderRadius: 10 }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 15,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Light',
                    color: '#ACACAC',
                  }}
                >
                  Order Number 000005715
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                  }}
                >
                  $116
                </Text>
              </View>

              <Gap height={15} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F0F0F0',
                  marginHorizontal: -15,
                  paddingHorizontal: 15,
                  paddingVertical: 6,
                }}
              >
                <IC_Countries width={20} height={20} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Light',
                    marginLeft: 10,
                  }}
                >
                  The Rizky’s House Countries
                </Text>
              </View>

              <Gap height={15} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  color: '#FFC700',
                }}
              >
                Continue Payment
              </Text>
            </View>
          </Shadow>
        </View>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
