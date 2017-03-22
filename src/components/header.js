import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

export default class header extends Component {
  render() {
    return (
      <Navbar brand='Lapor ID' right className='blue'>
				<NavItem href='#'><Icon>home</Icon></NavItem>
				<NavItem href='#'><Icon>person</Icon></NavItem>
				<NavItem href='#'><Icon>notifications</Icon></NavItem>
				<NavItem href='#'><Icon>settings_power</Icon></NavItem>
			</Navbar>
    );
  }
}