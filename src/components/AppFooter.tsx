import React from 'react'
import { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import {MODES} from "../constants";
const AppFooter = ({mode = MODES.DAILYLIST, setMode = (el) => {el}}) => (
        <Footer>
          <FooterTab>
            <Button badge vertical
                    active={mode === MODES.DAILYLIST}
                    onPress={
                      () => setMode(MODES.DAILYLIST)}
            >
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
            </Button>
            <Button vertical
                    active={mode === MODES.CAMERA}
                    onPress={
                      () => setMode(MODES.CAMERA)}        
            >
              <Icon name="camera" />
            </Button>
            <Button badge vertical
                    active={mode === MODES.NAVIGATE}
                    onPress={
                      () => setMode(MODES.NAVIGATE)} 
            >
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
            </Button>
            <Button vertical
                    active={mode === MODES.PERSON}
                    onPress={
                      () => setMode(MODES.PERSON)}
            >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
)
export default AppFooter