import { Component } from '@angular/core';
import { Contacts } from 'src/app/interfaces/phonebook';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
contact: Contacts[] = [];

newContactName = '';
newContactNumber = '';
newContact = '';

public errorMessage:string | undefined;

constructor (private phonebookService: PhonebookService) { }
  ngOnInit() {
    this.phonebookService.getContact().subscribe(contact => {
      this.contact = contact;
    })
  }
  addContact() {
    const newContact: Contacts = {
      name: this.newContactName,
      number: this.newContactNumber,
    };
    const contactExists = this.contact.some(
      (contactInfo) => 
      contactInfo.name === this.newContactName || 
      contactInfo.number === this.newContactNumber
    );
    if (!contactExists) {
      this.contact.push(newContact);
    } else {
      this.errorMessage = "Name or phone number has already been taken ";
    }
  }
}

