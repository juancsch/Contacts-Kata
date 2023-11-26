// import { readFile, writeFile } from 'fs/promises'
import { type Contact } from '../domain/Contact.js'
import { type ContactsRepository } from '../domain/ContactsRepository.js'

export function FileContactsRepository (filepath: string): ContactsRepository {
	const contacts: Contact[] = []
	// read file ...

	return {
		add,
		get
	}

	function add (contact: Contact): void {
		contacts.push(contact)
		// write file ...
	}

	function get (): Contact[] {
		return contacts
	}
}
