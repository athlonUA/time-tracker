import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../../../shared/project.model';

@Component({
    moduleId: module.id,
    selector: 'todo-project',
    templateUrl: 'todo-project.component.html',
    styleUrls: ['todo-project.component.css'],
})

export class TodoProjectComponent {
    @Input() projects: Project[];
    @Input() currentProject: Project;
    @Output() projectSelect: EventEmitter<Project>;

    constructor() {
        this.projectSelect = new EventEmitter<Project>();
    }

    onProjectSelect(): void {
        this.projectSelect.emit(this.currentProject);
    }
}
