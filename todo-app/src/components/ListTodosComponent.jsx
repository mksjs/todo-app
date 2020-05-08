import React, { Component } from "react";

class ListTodosComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            todos : 
                [
                    {id :1 , description : 'Learn React', targetDate : new Date(), done : false},
                    {id :2 , description : 'Learn SpringBoot', targetDate : new Date(), done : false},
                    {id :3 , description : 'Learn Angular', targetDate : new Date(), done : false},
                    {id :4 , description : 'Learn ninja framework', targetDate : new Date(), done : false},
                    {id :5 , description : 'Learn ds', targetDate : new Date(), done : false},
                ]
        }
    }
    render() {
        return (
            <div className="ListTodosComponent"> 
                <h1>Todos List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr> 
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key ={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;