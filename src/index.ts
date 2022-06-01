class Person {
  speak (name: string): string {
    return `olar ${name}`
  }
}

const p = new Person()
p.speak('gragos')
