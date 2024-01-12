import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ParamListBase, NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC<NativeStackScreenProps<ParamListBase>> = ({
  navigation,
}) => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
    <Button
      title="Navigate to account screen"
      onPress={() => {
        navigation.navigate('Account');
      }}
    />
  </View>
);

const AccountScreen: React.FC<NativeStackScreenProps<ParamListBase>> = ({
  navigation,
}) => (
  <View style={styles.screenContainer}>
    <Text>Account Screen</Text>
    <Button
      title="Navigate to settings screen"
      onPress={() => {
        navigation.navigate('Settings');
      }}
    />
  </View>
);

const SettingsScreen: React.FC<NativeStackScreenProps<ParamListBase>> = () => (
  <View style={styles.screenContainer}>
    <Text>Settings Screen</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'none',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Account Screen',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
