import React, { Component } from "react";

class ListaDeTarefas extends Component {
 
    render() {
      return (
        <ul>
          {this.props.tarefas.map((tarefas, index) => {
            return (
              <li key={index}>
                  {console.log("!"+this.props.tarefas)}
               <span>{this.props.tarefas}</span>
              </li>
            );
          })}
        </ul>
      );
    }
  }

export default ListaDeTarefas;