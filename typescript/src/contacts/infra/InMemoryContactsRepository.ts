import { Contact } from '../domain/Contact'
import { ContactsRepository } from '../domain/ContactsRepository'

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
