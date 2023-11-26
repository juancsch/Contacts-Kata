import { AddContact } from './application/AddContact.js'
import { GetContacts } from './application/GetContacts.js'
import { inMemoryContactsRepository } from './infra/InMemoryContactsRepository.js'

export const contacts = {
	addContact: AddContact(inMemoryContactsRepository),
	getContacts: GetContacts(inMemoryContactsRepository)
}
