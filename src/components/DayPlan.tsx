import React from 'react'
import { Component } from 'react';
import { Container, Header, Content, Picker, SwipeRow, View, Text, Icon, Button, Item, Input, ListItem, List } from 'native-base';
import styles from '../styles'
import {EventRow} from '../types/EventRow'

const NONE = 'none'
const FLEX = 'flex'

interface Props {
  day: string
}

interface State {
  inputText: string,
  inputTextDisplay: 'none'|'flex',
  dataS: Array<any>,
  selectedHours: string,
  selectedMinutes: string,
}

​export default class DayPlan extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      inputTextDisplay: NONE,
      dataS: [],
      selectedHours: '0',
      selectedMinutes: '0',
    }
  }
  onDisplay = () => {
    this.setState({
      inputTextDisplay: FLEX
    })
  }
  setRow = () => {
    let newData = this.state.dataS ? this.state.dataS : []
    let obj:EventRow = {
        hh: +this.state.selectedHours,
        mm: +this.state.selectedMinutes,
        name: this.state.inputText,
        description: ''
      }
        newData.push(obj)
        newData.sort((a:EventRow,b:EventRow) => {return (a.hh * 100 + a.mm) - (b.hh * 100 + b.mm)})
      this.setState({
        dataS: newData,
        inputTextDisplay: NONE,
        inputText: '',
        selectedHours: '',
        selectedMinutes: ''
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
              <Text style = {styles.itemHeaderStyle}>{this.props.day}</Text>
            </View>
          }
        />
        <List>
        {
           this.state.dataS.map((item,i) => (
              <ListItem key = {i}>
                <Text>{item.hh + ' : '+ item.mm + ' - ' + item.name}</Text>
              </ListItem>
           ))
         }
         </List>
         <View style={{ flexDirection: "row", justifyContent: 'space-between', display: this.state.inputTextDisplay}}>
         <Item style = {styles.hourStyle}>
            <Input placeholder='hh'
                  onChangeText={(selectedHours) => this.setState({selectedHours})}/>
          </Item>
          <Item style = {styles.minutStyle}>
          <Input placeholder='mm'
                  onChangeText={(selectedMinutes) => this.setState({selectedMinutes})}/>
          </Item>
          <Item style = {styles.inputStyle}>
            <Input placeholder='Время и наименование'
                  onChangeText={(inputText: string) => this.setState({inputText})}/>
          </Item>
          </View>
        <Button primary onPress = {this.setRow} style={{display: this.state.inputTextDisplay, margin: 1}}><Text> Accept </Text></Button>
      </View>
    )
  }
}