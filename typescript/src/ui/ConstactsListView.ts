import { createInterface } from 'readline'
import { Contact } from '../contacts/domain/Contact'
import { ContactsListView } from './ContactsListPresenter'

export const contactsListView: ContactsListView = {
	showWelcomeMessage,
	showByeMessage,
	getContact,
	listContacts
}

const rl = createInterface({
	input: process.stdin,
	output: process.stdout
})

const question = (text: string) => new Promise<string>(resolve => rl.question(text, resolve))

function showWelcomeMessage (): void {
	console.log('Welcome to contacts manage ...')
}

function showByeMessage (): void {
	console.log('... see you soon!!')
}

async function getContact (): Promise<Contact> {
	const token = await question('new contact?\n> ')
	return Contact.from(token)
}

function listContacts (contacts: Contact[]): void {
	console.log('contacts\n', contacts)
}
