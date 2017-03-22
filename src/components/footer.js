import React, { Component } from 'react';
import { Footer } from 'react-materialize';

export default class footer extends Component {
  render() {
    return (
      <Footer copyrights="&copy; 2017 All right reserved"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">Lapor ID</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Tentang Kami</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Kontak Kami</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Kebijakan Privasi</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Persyaratan dan Ketentuan</a></li>
          </ul>
        }
        className='blue'
      >
          <h5 className="white-text">Lapor ID</h5>
          <p className="grey-text text-lighten-4">Laporkan pelanggaran - pelanggaran yang terjadi di sekitar anda untuk lingkungan dan masyarakat yang lebih baik.</p>
      </Footer>
    );
  }
}