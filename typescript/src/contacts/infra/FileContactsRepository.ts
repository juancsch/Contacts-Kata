import { readFile, writeFile } from 'fs/promises'
import { Contact } from '../domain/Contact'
import { ContactsRepository } from '../domain/ContactsRepository'

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
