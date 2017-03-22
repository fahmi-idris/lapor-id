import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, Modal, Button } from 'react-materialize';

export default class content extends Component {
  render() {
    let container = { paddingTop: '30px' }
    return (
      <div className='container' style={container}>
        <Row>
          <Col s={12} className='grid-example'>
            <Card className='small' header={<CardTitle reveal image={"./img/img.jpg"} waves='light'/>}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p>
                  <Modal header='Modal Header' bottomSheet trigger={ <Button waves='light'>Beri Komentar</Button> }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Modal>
                </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}