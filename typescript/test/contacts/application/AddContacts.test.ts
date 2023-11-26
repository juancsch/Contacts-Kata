import { vi, expect, describe, it } from 'vitest'

import { AddContact } from '../../../src/contacts/application/AddContact.js'
import { Contact } from '../../../src/contacts/domain/Contact.js'

describe('Add Contacts', function () {
	it('should add contacts', () => {
		const contactRepositoryMock = {
			add: vi.fn(),
			get: vi.fn()
		}
		const addContact = AddContact(contactRepositoryMock)

		const contact = Contact.from('pepe luis 666')
		addContact(contact)

		expect(contactRepositoryMock.add).toHaveBeenCalledTimes(1)
		expect(contactRepositoryMock.add).toHaveBeenCalledWith(Contact.from('pepe luis 666'))
	})
})
