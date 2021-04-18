import { GetContacts } from '../../../src/contacts/application/GetContacts'
import { Contact } from '../../../src/contacts/domain/Contact'

describe('Get Contacts', function () {

	it('should return list of contacts when there are contacts', () => {

		const contact = Contact.from('pepe luis 666')
		const contactRepositoryMock = {
			add: jest.fn(),
			get: jest.fn(() => [contact])
		}
		const getContacts = GetContacts(contactRepositoryMock)

		const contacts = getContacts()

		expect(contactRepositoryMock.get).toHaveBeenCalledTimes(1)
		expect(contacts).toEqual([contact])
	})

	it('should return empty list when there are not contacts', () => {

		const contactRepositoryMock = {
			add: jest.fn(),
			get: jest.fn(() => [])
		}
		const getContacts = GetContacts(contactRepositoryMock)

		const contacts = getContacts()

		expect(contactRepositoryMock.get).toHaveBeenCalledTimes(1)
		expect(contacts.length).toEqual(0)
	})
})
