const fs = require('fs')
const path = require('path')


const filePath = path.resolve(__dirname, './myFirstCalculator.js')
const minNum = 0
const maxNum = 50
const signs = ['+', '-', '/', '*']

let output = `
#!/usr/bin/env node

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.write('Welcome to this calculator!\\n')
rl.write('It can add, subtract, multiply and divide whole numbers from ${minNum} to ${maxNum}\\n')

rl.question('Please choose your first number: ', a =>
  rl.question('What do you want to do? +, -, /, or *: ', sign =>
    rl.question('Please choose your second number: ', b => {
`

for (let sign of signs) {
  for (let a = minNum; a <= maxNum; a++) {
    for (let b = minNum; b <= maxNum; b++) {
      const value = eval(a + sign + b)
      output += `      if (a == ${a} && sign == '${sign}' && b == ${b}) {\n`
      output += `        rl.write('${a} ${sign} ${b} = ${value}\\n')\n`
      output += `      }\n`
    }
  }
}

output += `
      rl.write('Thanks for using this calculator, goodbye :)\\n')
      rl.close()
    })
  )
)
`

fs.writeFileSync(filePath, output.trim())
