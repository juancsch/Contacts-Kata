import { Contact } from '../domain/Contact'
import { ContactsRepository } from '../domain/ContactsRepository'

export function AddContact (contactsRepository: ContactsRepository) {

	return function (contact: Contact): void {
		contactsRepository.add(contact)
	}
}
