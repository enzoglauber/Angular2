import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StatesService {

  constructor(
    private http: Http
  ) { }

  get() {
    return this.http.get('assets/json/states.json').map( (response: Response) =>  response.json() );
  }
}
