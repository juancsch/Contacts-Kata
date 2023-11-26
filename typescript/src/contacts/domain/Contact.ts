export class Contact {
	name: string
	surname: string
	phoneNumber: string

	constructor (name: string, surname: string, phoneNumber: string) {
		this.name = name
		this.surname = surname
		this.phoneNumber = phoneNumber
	}

	toToken () {
		return `${this.name} ${this.surname} ${this.phoneNumber}`
	}

	static from (token: string) {
		const tokens = token.split(' ')
		return new Contact(tokens[0], tokens[1], tokens[2])
	}
}
