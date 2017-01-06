import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Project } from './project.model';

const API_ENDPOINT = 'http://localhost:3004/projects';

@Injectable()
export class ProjectService {
    constructor(private http: Http) {}

    getProjects(): Observable<Project[]> {
        return this.http.get(API_ENDPOINT)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error has occurred: ', error);
        
        return Promise.reject(error.message || error)
    }
}
