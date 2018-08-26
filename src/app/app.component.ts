import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Observable } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.persons$ = this.personService.getPersons();
  }

  onRefreshClick() {
    this.persons$ = this.personService.getPersons();
  }
}
