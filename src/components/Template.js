import React ,{ Component }  from 'react'
import { Link } from 'react-router';
import Header from './template/Header';

export default class Template extends Component {

  render() {
    return (
      <div className='Template'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
