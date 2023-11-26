import { type Contact } from '../domain/Contact.js'
import { type ContactsRepository } from '../domain/ContactsRepository.js'

export function AddContact (contactsRepository: ContactsRepository) {
	return (contact: Contact): void => {
		contactsRepository.add(contact)
	}
}
