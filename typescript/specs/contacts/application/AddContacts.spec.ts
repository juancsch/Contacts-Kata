import { AddContact } from '../../../src/contacts/application/AddContact'
import { Contact } from '../../../src/contacts/domain/Contact'

describe('Add Contacts', function () {

	it('should add contacts', () => {

		const contactRepositoryMock = {
			add: jest.fn(),
			get: jest.fn()
		}
		const addContact = AddContact(contactRepositoryMock)

		const contact = Contact.from('pepe luis 666')
		addContact(contact)

		expect(contactRepositoryMock.add).toHaveBeenCalledTimes(1)
		expect(contactRepositoryMock.add).toHaveBeenCalledWith(Contact.from('pepe luis 666'))
	})
})
