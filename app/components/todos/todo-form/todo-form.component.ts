import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Todo } from '../../../shared/todo.model';
import { Project } from '../../../shared/project.model';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todos/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todos/todo-form/todo-form.component.css']
})

export class TodoFormComponent implements OnChanges {
    @Input() projects: Project[];
    @Output() create: EventEmitter<Todo>;

    public todoTitle: string = '';
    public currentProject: Project;

    constructor() {
        this.create = new EventEmitter<Todo>();
    }

    ngOnChanges() {
        if (this.projects.length) {
            this.sortProjects();
            this.setCurrentProject();
        }
    }

    onTodoCreate(): void {
        if (this.todoTitle) {
            let currentTime = new Date().getTime();
            let todo = new Todo(this.todoTitle, this.currentProject.id, currentTime);

            this.create.emit(todo);
            this.todoTitle = '';
        }
    }

    onProjectSelect(project: Project): void {
        this.currentProject = project;
    }

    private sortProjects(): Project[] {
        return this.projects
            .sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                } else if (a.title < b.title) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }

    private setCurrentProject(): Project {
        return this.currentProject = this.projects[0];
    }
}
