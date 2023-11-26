import { vi, expect, describe, it } from 'vitest'

import { GetContacts } from '../../../src/contacts/application/GetContacts.js'
import { Contact } from '../../../src/contacts/domain/Contact.js'

describe('Get Contacts', function () {
	it('should return list of contacts when there are contacts', () => {
		const contact = Contact.from('pepe luis 666')
		const contactRepositoryMock = {
			add: vi.fn(),
			get: vi.fn(() => [contact])
		}
		const getContacts = GetContacts(contactRepositoryMock)

		const contacts = getContacts()

		expect(contactRepositoryMock.get).toHaveBeenCalledTimes(1)
		expect(contacts).toEqual([contact])
	})

	it('should return empty list when there are not contacts', () => {
		const contactRepositoryMock = {
			add: vi.fn(),
			get: vi.fn(() => [])
		}
		const getContacts = GetContacts(contactRepositoryMock)

		const contacts = getContacts()

		expect(contactRepositoryMock.get).toHaveBeenCalledTimes(1)
		expect(contacts.length).toEqual(0)
	})
})
