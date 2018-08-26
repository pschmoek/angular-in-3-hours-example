import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('/api/persons');
  }

}
