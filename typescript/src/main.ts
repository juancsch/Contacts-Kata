import { ContactsListPresenter } from './ui/ContactsListPresenter.js'
import { contactsListView } from './ui/ConstactsListView.js'

const cl = new ContactsListPresenter(contactsListView)

try {
	cl.start()
	while (true) {
		await cl.addContact()
	}
} catch (err) {
	if ((err as Error).message === 'bye') {
		cl.stop()
		process.exit(0)
	}
	console.error('Catch unexpected Error:', err)
	process.exit(1)
}
