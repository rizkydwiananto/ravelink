import {
  IC_History,
  IC_HistoryActive,
  IC_Home,
  IC_HomeActive,
  IC_Like,
  IC_LikeActive,
  IC_Message,
  IC_MessageActive,
} from '@/assets/icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar backgroundColor="#000" hidden={false} />
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <Tabs
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [styles.tabBar],
            tabBarIconStyle: styles.iconContainer,
          })}
        >
          <Tabs.Screen
            name="Home"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IC_HomeActive /> : <IC_Home />,
            }}
          />
          <Tabs.Screen
            name="History"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IC_HistoryActive /> : <IC_History />,
            }}
          />
          <Tabs.Screen
            name="Like"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IC_LikeActive /> : <IC_Like />,
            }}
          />
          <Tabs.Screen
            name="Message"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <IC_MessageActive /> : <IC_Message />,
            }}
          />
        </Tabs>
        <View
          style={[
            {
              height: insets.bottom,
              backgroundColor: colorScheme === 'dark' ? '#000' : 'transparent',
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0DA96E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 70,
    position: 'absolute',
  },
  iconContainer: {
    marginVertical: 15,
  },
});
