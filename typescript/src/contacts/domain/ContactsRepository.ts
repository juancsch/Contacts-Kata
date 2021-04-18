import { Contact } from './Contact'

export interface ContactsRepository {
	add (contact: Contact): void,
	get (): Contact[]
}
