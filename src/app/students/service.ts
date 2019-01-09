import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface like model
export interface ListStudents {
    list: Array<any>
}

@Injectable()
export class StudentService {
    apiUrl = 'http://localhost:8080/api/students';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get(this.apiUrl);
    }
}