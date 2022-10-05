/**
 * This class creates an integer stack
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-04
 */

class RodasStack {
  stackAsList: number[] = []

  Push(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = RodasStack
