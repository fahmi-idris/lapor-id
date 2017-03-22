import React, { Component } from 'react';
import Header from './components/header';
import MenuFloating from './components/menuFloating';
import Content from './components/content';
import Footer from './components/footer';
import './assets/css/content.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Content></Content>
        <Footer></Footer>
        <MenuFloating></MenuFloating>
      </div>
    );
  }
}

export default App;