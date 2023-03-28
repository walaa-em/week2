import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';

import './Home.css';

export default class Home extends Component {

  state = {

    userName: "world",
    cls: 'bg-info',
  }

  render() {
    return (
      <>

      <div className={this.state.cls + ' ' + 'text-center'} >
        <h1 className='testhome'>Home {this.state.userName} </h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, iure iste. Natus facere autem asperiores</p>
      </div>

      

      </>
    )
  }
}
