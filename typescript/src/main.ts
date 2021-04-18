import { ContactsListPresenter } from './ui/ContactsListPresenter'
import { contactsListView } from './ui/ConstactsListView'

const cl = new ContactsListPresenter(contactsListView)

// function stop () {
// 	p.onStop()
// 	process.exit(0)
// }

// process.on('SIGINT', stop)
// process.on('SIGTERM', stop)
// process.on('SIGKILL', stop)

cl.onInit()

;(async function () {
	while (true) await cl.onAddContact()
})()
