import { AddContact } from './application/AddContact'
import { GetContacts } from './application/GetContacts'
import { inMemoryContactsRepository } from './infra/InMemoryContactsRepository'

export const contacts = {
	addContact: AddContact(inMemoryContactsRepository),
	getContacts: GetContacts(inMemoryContactsRepository)
}
