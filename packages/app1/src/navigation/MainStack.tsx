import {
  NavigationContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from '@lib/react-native-navigation';
import {Home} from '@screens/Home';
import {Setting} from '@screens/Setting';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

function TabNavigatorScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomePager" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={TabNavigatorScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Setting"
        component={Setting}
        options={{headerBackTitle: 'Back', headerTitle: 'Detail'}}
      />
    </MainStack.Navigator>
  );
}

export const MainStackContainer = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};
