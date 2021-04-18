import { Contact } from '../../src/contacts/domain/Contact'
import { ContactsListPresenter } from '../../src/ui/ContactsListPresenter'

describe('Contacts list presenter specification', function () {

	it('should show welcome message and contacts when start presenter', () => {

		// given
		const viewMock = {
			showWelcomeMessage: jest.fn(),
			showByeMessage: jest.fn(),
			getContact: jest.fn(),
			listContacts: jest.fn()
		}
		const presenter = new ContactsListPresenter(viewMock)

		// when
		presenter.onInit()

		// then
		expect(viewMock.showWelcomeMessage).toHaveBeenCalledTimes(1)
		expect(viewMock.listContacts).toHaveBeenCalledWith([])
	})

	it('should show all list contacts when add new contact', async () => {

		// given
		const contact = Contact.from('pepe luis 666')
		const viewMock = {
			showWelcomeMessage: jest.fn(),
			listContacts: jest.fn(),
			getContact: jest.fn(() => Promise.resolve(contact)),
			showByeMessage: jest.fn()
		}
		const presenter = new ContactsListPresenter(viewMock)

		// when
		await presenter.onAddContact()

		// then
		expect(viewMock.listContacts).toHaveBeenCalledWith([contact])
	})

	it('should show bye message when stop presenter', () => {

		// given
		const viewMock = {
			showWelcomeMessage: jest.fn(),
			showByeMessage: jest.fn(),
			getContact: jest.fn(),
			listContacts: jest.fn()
		}
		const presenter = new ContactsListPresenter(viewMock)

		// when
		presenter.onStop()

		// then
		expect(viewMock.showByeMessage).toHaveBeenCalledTimes(1)
	})
})
