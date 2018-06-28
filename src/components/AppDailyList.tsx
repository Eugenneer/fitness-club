import React from 'react'
import { Component } from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Item, Input, ListItem, List } from 'native-base';
import styles from '../styles'

const NONE = 'none'
const FLEX = 'flex'

interface Props {

}

interface State {
  inputText: String,
  inputTextDisplay: 'none'|'flex',
  dataS: Array<any>,
  selectedHours: number,
  selectedMinutes: number,
}

​export default class SwipeRowExample extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      inputTextDisplay: NONE,
      dataS: ['1111','2222'],
      selectedHours: 0,
      selectedMinutes: 0,
    }
    console.log(this.state.dataS)
  }
  onDisplay = () => {
    console.log('onDisplay')
    console.log(this.state.dataS)
    this.setState({
      inputTextDisplay: FLEX
    })
  }
  onAccept = () => {
    console.log('onAccept')
    let newData = this.state.dataS ? this.state.dataS : []
        newData.push(this.state.inputText)
      this.setState({
        dataS: newData,
        inputTextDisplay: NONE,
        inputText: ''
      })
      console.log(this.state.dataS)
  }
  render() {
    return (
      <View>
        <SwipeRow
          leftOpenValue={75}
          left={
            <Button success onPress={this.onDisplay}>
              <Icon active name="add" />
            </Button>
          }
          body={
            <View>
              <Text style = {styles.itemHeaderStyle}>Понедельник</Text>
            </View>
          }
        />
        <List>
        {
           this.state.dataS.map((item,i) => (
              <ListItem key = {i}>
                <Text>{item}</Text>
              </ListItem>
           ))
         }
         </List>
        <Item rounded style = {{display: this.state.inputTextDisplay}}>
        <View style={{flexDirection: 'row'}}>
          <Input placeholder='Время и наименование'
                style = {{marginLeft:10}}
                onChangeText={(inputText: String) => this.setState({inputText})}/>
          <Icon name='checkmark-circle' 
                onPress={this.onAccept}
          />
        </View>
        </Item>
      </View>
    )
  }
}