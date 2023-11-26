import { type Contact } from '../domain/Contact.js'
import { type ContactsRepository } from '../domain/ContactsRepository.js'

export const inMemoryContactsRepository: ContactsRepository = {
	add,
	get
}

const contacts: Contact[] = []

function add (contact: Contact): void {
	contacts.push(contact)
}

function get (): Contact[] {
	return contacts
}
