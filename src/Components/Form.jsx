import React,{ Component } from "react";

class Form extends Component {

    constructor(props){
        super(props);
        this.Tarefa="";
    }
    _adicionarTarefa(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.AdicionarTarefa(this.Tarefa);
  }

    HandlerTarefa(event){
        event.stopPropagation();
        this.Tarefa = event.target.value;
    }


    render() {
        return (

            <div>
                <div><h1> TODO LIST </h1></div>
                <div>
                    <form>
                        <input type="text" placeholder="adicionar tarefa na lista"
                        onChange={this.HandlerTarefa.bind(this)}></input>
                        <button onClick={this._adicionarTarefa.bind(this)} >Adicionar</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form;