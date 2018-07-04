import React from 'react';
import { Component } from 'react';
import { Picker, SwipeRow, View, Text, Icon, Button, Item, Input, ListItem, List } from 'native-base';
import styles from '../styles';
import {EventRow} from '../types/EventRow';

console.disableYellowBox = true;
const NONE = 'none'
const FLEX = 'flex'
const MAXLENGTH = 2
const events = ['cross-fir', 'ioga', 'cardio', 'open-air']

interface Props {
  day: string
}

interface State {
  inputTextDisplay: 'none'|'flex',
  dataS: Array<any>,
  selectedHours: string,
  selectedMinutes: string,
  selectedEvent: string,
  edit: boolean,
  editButtonDisplay: 'none'|'flex',
  acceptButtonDisplay: 'none'|'flex',
  indexOfSelectedElement: number,
}

​export default class DayPlan extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      inputTextDisplay: NONE, 
      dataS: [],
      selectedHours: '',
      selectedMinutes: '',
      selectedEvent: '',
      edit: false,
      editButtonDisplay: NONE,
      acceptButtonDisplay: NONE,
      indexOfSelectedElement: null,
    }
  }
  onDisplay = () => {
    this.setState({
      inputTextDisplay: FLEX,
      acceptButtonDisplay: FLEX,
    })
  }
  setRow = () => {
    let newData = this.state.dataS ? this.state.dataS : []
    let obj:EventRow = {
        hh: this.state.selectedHours,
        mm: this.state.selectedMinutes,
        name: this.state.selectedEvent,
        description: ''
        }
        newData.push(obj)
        newData.sort((a:EventRow,b:EventRow) => {return +(a.hh + a.mm) - +(b.hh + b.mm)})
        this.setState({
          dataS: newData,
          inputTextDisplay: NONE,
          acceptButtonDisplay: NONE,
          selectedHours: '',
          selectedMinutes: '',
          selectedEvent: ''
        })
        console.log(this.state.dataS)
  }
  cancelRow = () => {
    this.setState({
      inputTextDisplay: NONE,
      editButtonDisplay: NONE,
      acceptButtonDisplay: NONE,
      selectedHours: '',
      selectedMinutes: '',
      selectedEvent: ''
    })
  }

  onDelete = (element: EventRow) => {
    let newData = this.state.dataS
        newData.splice(newData.indexOf(element),1)
        this.setState({
          dataS: newData,
          inputTextDisplay: NONE,
          selectedHours: '',
          selectedMinutes: '',
          selectedEvent: ''
        })    
  }

  onEdit = (element: EventRow, index:number) => {
    this.setState({
      edit: true,
      selectedHours: element.hh,
      selectedMinutes: element.mm,
      selectedEvent: element.name,
      inputTextDisplay: FLEX, 
      editButtonDisplay: FLEX, 
      indexOfSelectedElement: index
    })
  }

  remake = () => {
    let newData = this.state.dataS
        newData[this.state.indexOfSelectedElement] = {
          hh: this.state.selectedHours,
          mm: this.state.selectedMinutes,
          name: this.state.selectedEvent,
          description: ''
        }
        newData.sort((a:EventRow,b:EventRow) => {return +(a.hh + a.mm) - +(b.hh + b.mm)})
    this.setState({
      dataS: newData,
      inputTextDisplay: NONE, 
      editButtonDisplay: NONE, 
    })
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
                <SwipeRow
                  key = {i}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  left={
                    <Button success onPress={() => this.onEdit(item, i)}>
                      <Icon active name="add" />
                    </Button>
                  }
                  body={
                    <View>
                      <Text style = {{marginLeft:10}}>{item.hh + ' : '+ item.mm + ' - ' + item.name}</Text>
                    </View>
                  }
                  right={
                    <Button danger onPress = {() => this.onDelete(item)}>
                      <Icon active name="trash" />
                    </Button>
                  }
                />
           ))
         }
        </List>
        
        <View style={{ flexDirection: "row", justifyContent: 'space-between', display: this.state.inputTextDisplay}}>
          <Item style = {styles.hourStyle}>
            <Input placeholder='hh' value = {this.state.selectedHours} maxLength = {MAXLENGTH} onChangeText={(selectedHours) => this.setState({selectedHours})}/>
          </Item>
          <Item style = {styles.minutStyle}>
            <Input placeholder='mm' value = {this.state.selectedMinutes} maxLength = {MAXLENGTH} onChangeText={(selectedMinutes) => this.setState({selectedMinutes})}/>
          </Item>
          <Item style = {styles.inputStyle}>
            <Picker
            selectedValue={this.state.selectedEvent}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedEvent: itemValue})} >
              {
                events.map((item,i) => (<Picker.Item label={item} value={item} />))
              }
            </Picker>
          </Item>
        </View>
        
        <View style={{ flexDirection: "row", left: 0, right: 0, justifyContent: 'space-between', display: this.state.inputTextDisplay }}>
          <Button primary onPress = {this.setRow} style={{margin: 1, display: this.state.acceptButtonDisplay}}><Text> Accept </Text></Button>
          <Button primary onPress = {this.remake} style={{margin: 1, display: this.state.editButtonDisplay}}><Text> Save </Text></Button>
          <Button primary onPress = {this.cancelRow} style={{margin: 1}}><Text> Cancel </Text></Button>
        </View>
      </View>
    )
  }
}