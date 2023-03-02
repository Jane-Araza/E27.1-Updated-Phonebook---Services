import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACTS } from 'src/app/mock-data/mock-phonebook';
import { Contacts } from 'src/app/interfaces/phonebook';


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  contact: Contacts[] = [];
  Contacts = CONTACTS;

  constructor() { }

  getContact(): Observable<Contacts[]> {
    return of(this.contact);
  }
  create(contact: Contacts): Observable<Contacts> {
    this.contact.push(contact);
    return of(contact);
}
}
