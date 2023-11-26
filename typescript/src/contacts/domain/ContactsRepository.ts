import { type Contact } from './Contact.js'

export interface ContactsRepository {
	add: (contact: Contact) => void
	get: () => Contact[]
}
