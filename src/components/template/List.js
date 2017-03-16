import React ,{ Component }  from 'react'
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

export default class List extends Component {

  render() {
    return (
      <div className='List'>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>Text text text text text text text text text text text text text text text text text text text text text </p>
            <p><Button bsStyle="primary">OK!!!</Button></p>
          </Jumbotron>
      </div>
    )
  }
}
