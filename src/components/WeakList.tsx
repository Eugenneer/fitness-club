import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'
import DayPlan from './DayPlan'

const WEAK = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресение',
]

interface Props {

}

interface State {

}
export default class WeakList extends Component<Props, State>{
    render(){
        return(
            <View>
            {
               WEAK.map((item:string,i:number) => ( <DayPlan day = {item} /> ))
            }
            </View>    
        )
    }
}
