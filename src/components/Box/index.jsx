import React, { Component } from 'react'
import "./index.css"
export default class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="some" style={{width:"100px",background:"red"}}>fdsfdsfsedf</div>
        <div>我是box</div>
      </div>
    )
  }
}
