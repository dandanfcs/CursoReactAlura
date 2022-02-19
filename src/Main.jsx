import React, { Component } from "react";
import ListaDeTarefas from './Components/ListaDeTarefas';
import Form from './Components/Form';


class Main extends Component {

    constructor(){
        super();
        this.state = {
            tarefas:[]
        }
    }

    AdicionarTarefa(Tarefa){
     
        const novaTarefa = Tarefa;
        const novoArrayDeTarefas = [...this.state.tarefas, novaTarefa];
        const novoEstado = {
            tarefas:novoArrayDeTarefas
        };
        this.setState(novoEstado);
        Tarefa = ''
    }

    render() {

        return (
            <div>
                <Form AdicionarTarefa={this.AdicionarTarefa.bind(this)}/>
                <ListaDeTarefas tarefas={this.state.tarefas} />
            </div>
        )
    }
}
export default Main;