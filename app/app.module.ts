import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TimerComponent } from './components/todos/todo-timewatch/timer.component';
import { ButtonsComponent } from './components/todos/todo-timewatch/buttons.component';
import { TodoProjectComponent } from './components/todos/todo-project/todo-project.component';
import { TodosComponent } from './components/todos/todos.component';
import { MainPipe } from './pipes/main-pipe.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MainPipe
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoFormComponent,
        TodoItemComponent,
        TimerComponent,
        ButtonsComponent,
        TodoProjectComponent,
        TodosComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
