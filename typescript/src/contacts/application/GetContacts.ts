import { Contact } from '../domain/Contact'
import { ContactsRepository } from '../domain/ContactsRepository'

export function GetContacts (contactsRepository: ContactsRepository) {

	return function (): Contact[] {
		return contactsRepository.get()
	}
}
