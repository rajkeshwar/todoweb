/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2017-10-13 22:44:37 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2017-10-14 02:06:05
 */
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public columnNames: any[];
    public todoList: any[];
    public newTodo: string;
    public selectedValues = [];
    public todoMessages = [];
    // public BASE_SERVICE_URL = 'http://localhost:8000';
    public BASE_SERVICE_URL = 'http://tracksoft.in/api2';
    
    constructor(private http: Http, private router: Router) { }

    ngOnInit() {
        this.fetchAllTodos();
    }

    fetchAllTodos() {
        this.http.get(`${this.BASE_SERVICE_URL}/todos`)
            .map(resp => resp.json())
            .subscribe(resp => {
                this.todoList = resp.map(todo => {
                    todo.checked = todo.completed === 'YES' ? true: false;
                    return todo;
                });
                this.columnNames = Object.keys(resp[0]);
            });
    }

    toTitleCase( tableHeader ) {
        return tableHeader.split(/_/).map(token => {
            return token.charAt(0).toUpperCase() + token.substring(1).toLowerCase();
        }).join(' ');
    }

    addTodo( event ) {
        console.log('Adding todo: ', this.newTodo);
        this.http.post(`${this.BASE_SERVICE_URL}/todos`, {subject: this.newTodo})
            .map(resp => resp.json())
            .subscribe(resp => {
                this.todoMessages.push({severity:'success', summary:'Added', detail:'New todo added successfully'});
                setTimeout(_ => this.todoMessages.length = 0, 3000);
                this.newTodo = '';
                this.fetchAllTodos(); 
            });
    }

    todoChecked( label, rowData ) {
        console.log('Todo Checked: ', label, rowData);
        let status = label ? 'Completed' : 'In progress';
            rowData.completed = label ? 'YES' : 'NO';

        this.http.put(`${this.BASE_SERVICE_URL}/todos/${rowData.id}`, rowData)
            .map(resp => resp.json())
            .subscribe(resp => {
                this.todoMessages.push({severity:'info', summary:status, detail:`Todo marked as ${status.toLowerCase()}`});
                setTimeout(_ => this.todoMessages.length = 0, 3000);
                this.fetchAllTodos(); 
            });
    }

    deleteTodo( todo ) {
        console.log('todo will be deleted: ', todo);
        this.http.delete(`${this.BASE_SERVICE_URL}/todos/${todo.id}`)
            .map(resp => resp.json())
            .subscribe(resp => {
                this.todoMessages.push({severity:'warn', summary:'Deleted', detail:`Todo with id ${todo.id} deleted`});
                setTimeout(_ => this.todoMessages.length = 0, 3000);
                this.fetchAllTodos(); 
            });
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
