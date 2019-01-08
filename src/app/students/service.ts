import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface like model
export interface Config {
    heroesUrl: string;
    textfile: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/test.json';

    apiUrl = 'http://localhost:8080/api/students';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get(this.apiUrl);
    }
}