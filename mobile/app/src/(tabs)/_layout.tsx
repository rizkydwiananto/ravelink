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
import { StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider style={{ backgroundColor: '#F3F9F7', flex: 1 }}>
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
          styles.safeAreaTabs,
          {
            height: insets.bottom,
            backgroundColor: colorScheme === 'dark' ? '#000' : 'transparent',
          },
        ]}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0DA96E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 80,
    overflow: 'hidden',
  },
  iconContainer: {
    marginVertical: 20,
  },
  safeAreaTabs: {
    backgroundColor: 'dark', // match the tab bar color (can be changed)
  },
});
