import React, { Component } from "react";
import axios from 'axios';

class Clientes extends Component {

    constructor(props){
        super(props)
      this.clientes =[]
      axios.get('https://localhost:44360/Todo')
  .then(function (response) {
    // handle success
    console.log(response);
  })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>TESTEEEE</li>
                </ul>
            </div>
        )
    }
}

export default Clientes;