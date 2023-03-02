import { Component } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Contacts } from 'src/app/interfaces/phonebook';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent {
  contact: Contacts[] = [];

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
    this.phonebookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }

  updateContactDetails?: Contacts;


  deleteContact(id: number) {
      this.contact.splice(id, 1);
  }

  updateContact(contact: Contacts){
    this.updateContactDetails = contact;
  }
}