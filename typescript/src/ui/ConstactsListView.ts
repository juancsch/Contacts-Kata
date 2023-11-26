import { createInterface } from 'readline/promises'

import { type Contact } from '../contacts/domain/Contact.js'

export type ContactsListView = typeof contactsListView

export const contactsListView = {
	showWelcomeMessage,
	showByeMessage,
	getContact,
	listContacts
}

const rl = createInterface({
	input: process.stdin,
	output: process.stdout
})

async function question (text: string) {
	return await rl.question(text)
}

function showWelcomeMessage (): void {
	console.log('Welcome to contacts manage ...')
}

function showByeMessage (): void {
	console.log('... see you soon!!')
}

async function getContact (): Promise<string> {
	return await question('new contact?\n> ')
}

function listContacts (contacts: Contact[]): void {
	console.log('contacts:', contacts)
}
