import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../shared/todo.model';
import { Project } from '../../../shared/project.model';

@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todos/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todos/todo-item/todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Input() projects: Project[];
    @Output() delete: EventEmitter<Todo>;

    constructor() {
        this.delete = new EventEmitter<Todo>();
    }

    onTodoDelete() {
        this.delete.emit(this.todo);
    }

    getProjectTitle(): string {
        let projectTitle = '';
        if (this.projects.length) {
            let project = this.projects
                .find((project: Project) => project.id == this.todo.projectId);

            projectTitle = project.title;
        }

        return projectTitle;
    }
}
