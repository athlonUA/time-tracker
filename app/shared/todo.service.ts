import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from './todo.model';

const API_ENDPOINT = 'http://localhost:3004/todos';

@Injectable()
export class TodoService {
    constructor(private http: Http) {}

    getTodos(): Observable<Todo[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.post(todo);
    }

    saveTodo(todo: Todo): Observable<Todo> {
        return this.put(todo);
    }

    deleteTodo(todo: Todo): Observable<Todo> {
        return this.delete(todo);
    }

    private post(todo: Todo): Observable<Todo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(API_ENDPOINT, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private put(todo: Todo): Observable<Todo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${API_ENDPOINT}/${todo.id}`;

        return this.http.put(url, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private delete(todo: Todo): Observable<Todo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${API_ENDPOINT}/${todo.id}`;

        return this.http.delete(url, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);

        return Promise.reject(error.message || error)
    }
}
