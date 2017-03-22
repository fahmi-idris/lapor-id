import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class menuFloating extends Component {
  render() {
    return (
      <Button floating fab='vertical' icon='more_vert' className='red' large>
        <Button floating icon='create' className='yellow darken-1'/>
        <Button floating icon='help' className='green'/>
        <Button floating icon='person' className='blue'/>
      </Button>
    );
  }
}