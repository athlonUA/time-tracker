import { Component, OnInit } from '@angular/core';

import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

import { Project } from '../../shared/project.model';
import { ProjectService } from '../../shared/project.service';

@Component({
    selector: 'todos',
    templateUrl: './app/components/todos/todos.component.html',
    styleUrls: ['./app/components/todos/todos.component.css'],
})

export class TodosComponent implements OnInit {
    todos: Todo[];
    projects: Project[];
    todoService: TodoService;
    projectService: ProjectService;

    constructor(todoService: TodoService, projectService: ProjectService) {
        this.todos = [];
        this.projects = [];
        this.todoService = todoService;
        this.projectService = projectService;
    }

    ngOnInit() {
        this.todoService.getTodos()
            .subscribe(todos => this.todos = todos);

        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }

    onTodoCreate(todo: Todo): void {
        this.todoService.addTodo(todo)
            .subscribe((todo) => this.addTodo(todo));
    }

    onTodoDelete(todo: Todo): void {
        this.todoService.deleteTodo(todo)
            .subscribe(() => this.deleteTodo(todo));
    }

    private addTodo(todo: Todo): void {
        this.todos.splice(this.todos.length - 1, 0, todo);
    }

    private deleteTodo(todo: Todo): void {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}
