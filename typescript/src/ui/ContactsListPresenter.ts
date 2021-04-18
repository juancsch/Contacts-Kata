import { Contact } from '../contacts/domain/Contact'
import { contacts } from '../contacts'

export interface ContactsListView {
	showWelcomeMessage(): void
	showByeMessage(): void
	getContact(): Promise<Contact>
	listContacts(contacts: Contact[]): void
}

export class ContactsListPresenter {

	private contactsListView: ContactsListView

	constructor (view: ContactsListView) {
		this.contactsListView = view
	}

	onInit (): void {
		this.contactsListView.showWelcomeMessage()
		this.contactsListView.listContacts(
			contacts.getContacts()
		)
	}

	async onAddContact (): Promise<void> {
		const contact = await this.contactsListView.getContact()
		contacts.addContact(contact)
		this.contactsListView.listContacts(
			contacts.getContacts()
		)
	}

	onStop (): void {
		this.contactsListView.showByeMessage()
	}
}
