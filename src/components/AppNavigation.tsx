import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { EventRow } from '../types/EventRow';
import { List, ListItem } from 'native-base';

const events: any = [
  {name: 'cross-fitt', description: 'тренировка тела'}, 
  {name: 'ioga', description: 'тренировка духа'}, 
  {name: 'cardio', description: 'тренировка сердца'}, 
  {name: 'open-air', description: 'насыщение кислородом'}
]

interface Props {
  navigation: any
}

interface State {

}
class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <List>
        {
           events.map((item,i) => (
            <ListItem>
              <Text style = {{marginLeft:10}}
                    onPress={() => this.props.navigation.navigate('Details',{
                      description: item.description,
                    })}
              >{item.name }</Text>
            </ListItem>
           )) 
        }
      </List>  
    );
  }
}

class DetailsScreen extends React.Component<Props, State> {
  render() {
    const description = this.props.navigation.getParam('description', 'NO-description');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{description}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class AppNavigation extends React.Component {
  render() {
    return <RootStack />;
  }
}