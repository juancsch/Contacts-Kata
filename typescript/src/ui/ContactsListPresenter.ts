import { Contact } from '../contacts/domain/Contact.js'
import { contacts } from '../contacts/module.js'

import { type ContactsListView } from './ConstactsListView.js'

export class ContactsListPresenter {
	private readonly contactsListView: ContactsListView

	constructor (view: ContactsListView) {
		this.contactsListView = view
	}

	start (): void {
		this.contactsListView.showWelcomeMessage()
		this.contactsListView.listContacts(
			contacts.getContacts()
		)
	}

	async addContact (): Promise<void> {
		const contact = await this.contactsListView.getContact()
		if (contact === 'bye') {
			throw new Error('bye')
		}
		contacts.addContact(Contact.from(contact))
		this.contactsListView.listContacts(
			contacts.getContacts()
		)
	}

	stop (): void {
		this.contactsListView.showByeMessage()
	}
}
