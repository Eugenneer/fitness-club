import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'
import DayPlan from './DayPlan'
import { Content, Header, Container } from 'native-base';
console.disableYellowBox = true;
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
                <Container>
                    <Content>
                        <Header/>
                        {
                        WEAK.map((item:string,i:number) => ( <DayPlan day = {item} /> ))
                        }
                    </Content>
                </Container>  
        )
    }
}
