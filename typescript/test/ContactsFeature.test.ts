import { type ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { expect, describe, test } from 'vitest'

describe('Contacts feature specification', function () {
	test('run main with child process check stdout', async () => {
		// Given
		const contacts = ['John Doe']

		// When
		const runMain = spawn('npx', ['ts-node', '--esm', 'src/main.ts'])

		// Then
		const stdout = await captureStdOutFrom(runMain, contacts)
		// console.log('STDOUT:\n', stdout)
		expect(stdout).toContain('Welcome to contacts manage ...')
		expect(stdout).toContain('contacts: []')
		expect(stdout).toContain('new contact?\n>')
		expect(stdout).toContain('contacts: [ Contact { name: \'John\', surname: \'Doe\', phoneNumber: undefined } ]')
		expect(stdout).toContain('... see you soon!!')
	})

	async function captureStdOutFrom (cmd: ChildProcessWithoutNullStreams, contacts: string[]) {
		return await new Promise<string>((resolve, reject) => {
			let stdout = ''
			cmd.stdout.on('data', (msg) => {
				// console.log('*** stdout:', msg.toString())
				stdout += msg.toString()
				if (msg.toString().includes('> ') === true) {
					if (contacts.length === 0) {
						cmd.stdin.write('bye\n')
					} else {
						cmd.stdin.write(contacts.shift() + '\n')
					}
				}
			})
			cmd.on('close', (status) => {
				// console.log('*** evt close:', status)
				resolve(stdout)
			})
			cmd.on('eror', (err) => {
				// console.log('*** evt error:', err)
				reject(err)
			})
		})
	}
})
