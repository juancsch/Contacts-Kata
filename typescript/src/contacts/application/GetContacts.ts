import { type Contact } from '../domain/Contact.js'
import { type ContactsRepository } from '../domain/ContactsRepository.js'

export function GetContacts (contactsRepository: ContactsRepository) {
	return (): Contact[] => {
		return contactsRepository.get()
	}
}
