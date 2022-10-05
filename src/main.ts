/**
 * The program uses the RodasStack
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2022-10-04
 */

import RodasStack from './rodasStack'
import promptSync from 'prompt-sync'

// this function uses the RodasStack
const prompt = promptSync()
const stackNumber = new RodasStack()

const userInput = Number(prompt('Enter an integer: '))
stackNumber.Push(userInput)

stackNumber.StackArray()

console.log('\nDone.')
