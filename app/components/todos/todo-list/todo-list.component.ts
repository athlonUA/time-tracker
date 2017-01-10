import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../shared/todo.model';
import { Project } from '../../../shared/project.model';

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todos/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todos/todo-list/todo-list.component.css'],
})

export class TodoListComponent {
    @Input() todos: Todo[];
    @Input() projects: Project[];
    @Output() delete: EventEmitter<Todo>;

    constructor() {
        this.delete = new EventEmitter<Todo>();
    }

    onTodoDelete(todo: Todo): void {
        this.delete.emit(todo);
    }

    get sortedTodos(): Todo[] {
        return this.sortTodos();
    }

    private sortTodos(): Todo[] {
        return this.todos
            .sort((a, b) => {
                if (a.startTime < b.startTime) {
                    return 1;
                } else if (a.startTime > b.startTime) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }
}
