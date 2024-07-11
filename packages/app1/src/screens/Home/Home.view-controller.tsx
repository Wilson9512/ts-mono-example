import {Text, View} from 'react-native';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View style={{flex: 1}}>
      <Text>Home Screen Now!</Text>
    </View>
  );
};

export default Home;
