#!/usr/bin/env node

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.write('Welcome to this calculator!\n')
rl.write('It can add, subtract, multiply and divide whole numbers from 0 to 50\n')

rl.question('Please choose your first number: ', a =>
  rl.question('What do you want to do? +, -, /, or *: ', sign =>
    rl.question('Please choose your second number: ', b => {
      if (a == 0 && sign == '+' && b == 0) {
        rl.write('0 + 0 = 0\n')
      }
      if (a == 0 && sign == '+' && b == 1) {
        rl.write('0 + 1 = 1\n')
      }
      if (a == 0 && sign == '+' && b == 2) {
        rl.write('0 + 2 = 2\n')
      }
      if (a == 0 && sign == '+' && b == 3) {
        rl.write('0 + 3 = 3\n')
      }
      if (a == 0 && sign == '+' && b == 4) {
        rl.write('0 + 4 = 4\n')
      }
      if (a == 0 && sign == '+' && b == 5) {
        rl.write('0 + 5 = 5\n')
      }
      if (a == 0 && sign == '+' && b == 6) {
        rl.write('0 + 6 = 6\n')
      }
      if (a == 0 && sign == '+' && b == 7) {
        rl.write('0 + 7 = 7\n')
      }
      if (a == 0 && sign == '+' && b == 8) {
        rl.write('0 + 8 = 8\n')
      }
      if (a == 0 && sign == '+' && b == 9) {
        rl.write('0 + 9 = 9\n')
      }
      if (a == 0 && sign == '+' && b == 10) {
        rl.write('0 + 10 = 10\n')
      }
      if (a == 0 && sign == '+' && b == 11) {
        rl.write('0 + 11 = 11\n')
      }
      if (a == 0 && sign == '+' && b == 12) {
        rl.write('0 + 12 = 12\n')
      }
      if (a == 0 && sign == '+' && b == 13) {
        rl.write('0 + 13 = 13\n')
      }
      if (a == 0 && sign == '+' && b == 14) {
        rl.write('0 + 14 = 14\n')
      }
      if (a == 0 && sign == '+' && b == 15) {
        rl.write('0 + 15 = 15\n')
      }
      if (a == 0 && sign == '+' && b == 16) {
        rl.write('0 + 16 = 16\n')
      }
      if (a == 0 && sign == '+' && b == 17) {
        rl.write('0 + 17 = 17\n')
      }
      if (a == 0 && sign == '+' && b == 18) {
        rl.write('0 + 18 = 18\n')
      }
      if (a == 0 && sign == '+' && b == 19) {
        rl.write('0 + 19 = 19\n')
      }
      if (a == 0 && sign == '+' && b == 20) {
        rl.write('0 + 20 = 20\n')
      }
      if (a == 0 && sign == '+' && b == 21) {
        rl.write('0 + 21 = 21\n')
      }
      if (a == 0 && sign == '+' && b == 22) {
        rl.write('0 + 22 = 22\n')
      }
      if (a == 0 && sign == '+' && b == 23) {
        rl.write('0 + 23 = 23\n')
      }
      if (a == 0 && sign == '+' && b == 24) {
        rl.write('0 + 24 = 24\n')
      }
      if (a == 0 && sign == '+' && b == 25) {
        rl.write('0 + 25 = 25\n')
      }
      if (a == 0 && sign == '+' && b == 26) {
        rl.write('0 + 26 = 26\n')
      }
      if (a == 0 && sign == '+' && b == 27) {
        rl.write('0 + 27 = 27\n')
      }
      if (a == 0 && sign == '+' && b == 28) {
        rl.write('0 + 28 = 28\n')
      }
      if (a == 0 && sign == '+' && b == 29) {
        rl.write('0 + 29 = 29\n')
      }
      if (a == 0 && sign == '+' && b == 30) {
        rl.write('0 + 30 = 30\n')
      }
      if (a == 0 && sign == '+' && b == 31) {
        rl.write('0 + 31 = 31\n')
      }
      if (a == 0 && sign == '+' && b == 32) {
        rl.write('0 + 32 = 32\n')
      }
      if (a == 0 && sign == '+' && b == 33) {
        rl.write('0 + 33 = 33\n')
      }
      if (a == 0 && sign == '+' && b == 34) {
        rl.write('0 + 34 = 34\n')
      }
      if (a == 0 && sign == '+' && b == 35) {
        rl.write('0 + 35 = 35\n')
      }
      if (a == 0 && sign == '+' && b == 36) {
        rl.write('0 + 36 = 36\n')
      }
      if (a == 0 && sign == '+' && b == 37) {
        rl.write('0 + 37 = 37\n')
      }
      if (a == 0 && sign == '+' && b == 38) {
        rl.write('0 + 38 = 38\n')
      }
      if (a == 0 && sign == '+' && b == 39) {
        rl.write('0 + 39 = 39\n')
      }
      if (a == 0 && sign == '+' && b == 40) {
        rl.write('0 + 40 = 40\n')
      }
      if (a == 0 && sign == '+' && b == 41) {
        rl.write('0 + 41 = 41\n')
      }
      if (a == 0 && sign == '+' && b == 42) {
        rl.write('0 + 42 = 42\n')
      }
      if (a == 0 && sign == '+' && b == 43) {
        rl.write('0 + 43 = 43\n')
      }
      if (a == 0 && sign == '+' && b == 44) {
        rl.write('0 + 44 = 44\n')
      }
      if (a == 0 && sign == '+' && b == 45) {
        rl.write('0 + 45 = 45\n')
      }
      if (a == 0 && sign == '+' && b == 46) {
        rl.write('0 + 46 = 46\n')
      }
      if (a == 0 && sign == '+' && b == 47) {
        rl.write('0 + 47 = 47\n')
      }
      if (a == 0 && sign == '+' && b == 48) {
        rl.write('0 + 48 = 48\n')
      }
      if (a == 0 && sign == '+' && b == 49) {
        rl.write('0 + 49 = 49\n')
      }
      if (a == 0 && sign == '+' && b == 50) {
        rl.write('0 + 50 = 50\n')
      }
      if (a == 1 && sign == '+' && b == 0) {
        rl.write('1 + 0 = 1\n')
      }
      if (a == 1 && sign == '+' && b == 1) {
        rl.write('1 + 1 = 2\n')
      }
      if (a == 1 && sign == '+' && b == 2) {
        rl.write('1 + 2 = 3\n')
      }
      if (a == 1 && sign == '+' && b == 3) {
        rl.write('1 + 3 = 4\n')
      }
      if (a == 1 && sign == '+' && b == 4) {
        rl.write('1 + 4 = 5\n')
      }
      if (a == 1 && sign == '+' && b == 5) {
        rl.write('1 + 5 = 6\n')
      }
      if (a == 1 && sign == '+' && b == 6) {
        rl.write('1 + 6 = 7\n')
      }
      if (a == 1 && sign == '+' && b == 7) {
        rl.write('1 + 7 = 8\n')
      }
      if (a == 1 && sign == '+' && b == 8) {
        rl.write('1 + 8 = 9\n')
      }
      if (a == 1 && sign == '+' && b == 9) {
        rl.write('1 + 9 = 10\n')
      }
      if (a == 1 && sign == '+' && b == 10) {
        rl.write('1 + 10 = 11\n')
      }
      if (a == 1 && sign == '+' && b == 11) {
        rl.write('1 + 11 = 12\n')
      }
      if (a == 1 && sign == '+' && b == 12) {
        rl.write('1 + 12 = 13\n')
      }
      if (a == 1 && sign == '+' && b == 13) {
        rl.write('1 + 13 = 14\n')
      }
      if (a == 1 && sign == '+' && b == 14) {
        rl.write('1 + 14 = 15\n')
      }
      if (a == 1 && sign == '+' && b == 15) {
        rl.write('1 + 15 = 16\n')
      }
      if (a == 1 && sign == '+' && b == 16) {
        rl.write('1 + 16 = 17\n')
      }
      if (a == 1 && sign == '+' && b == 17) {
        rl.write('1 + 17 = 18\n')
      }
      if (a == 1 && sign == '+' && b == 18) {
        rl.write('1 + 18 = 19\n')
      }
      if (a == 1 && sign == '+' && b == 19) {
        rl.write('1 + 19 = 20\n')
      }
      if (a == 1 && sign == '+' && b == 20) {
        rl.write('1 + 20 = 21\n')
      }
      if (a == 1 && sign == '+' && b == 21) {
        rl.write('1 + 21 = 22\n')
      }
      if (a == 1 && sign == '+' && b == 22) {
        rl.write('1 + 22 = 23\n')
      }
      if (a == 1 && sign == '+' && b == 23) {
        rl.write('1 + 23 = 24\n')
      }
      if (a == 1 && sign == '+' && b == 24) {
        rl.write('1 + 24 = 25\n')
      }
      if (a == 1 && sign == '+' && b == 25) {
        rl.write('1 + 25 = 26\n')
      }
      if (a == 1 && sign == '+' && b == 26) {
        rl.write('1 + 26 = 27\n')
      }
      if (a == 1 && sign == '+' && b == 27) {
        rl.write('1 + 27 = 28\n')
      }
      if (a == 1 && sign == '+' && b == 28) {
        rl.write('1 + 28 = 29\n')
      }
      if (a == 1 && sign == '+' && b == 29) {
        rl.write('1 + 29 = 30\n')
      }
      if (a == 1 && sign == '+' && b == 30) {
        rl.write('1 + 30 = 31\n')
      }
      if (a == 1 && sign == '+' && b == 31) {
        rl.write('1 + 31 = 32\n')
      }
      if (a == 1 && sign == '+' && b == 32) {
        rl.write('1 + 32 = 33\n')
      }
      if (a == 1 && sign == '+' && b == 33) {
        rl.write('1 + 33 = 34\n')
      }
      if (a == 1 && sign == '+' && b == 34) {
        rl.write('1 + 34 = 35\n')
      }
      if (a == 1 && sign == '+' && b == 35) {
        rl.write('1 + 35 = 36\n')
      }
      if (a == 1 && sign == '+' && b == 36) {
        rl.write('1 + 36 = 37\n')
      }
      if (a == 1 && sign == '+' && b == 37) {
        rl.write('1 + 37 = 38\n')
      }
      if (a == 1 && sign == '+' && b == 38) {
        rl.write('1 + 38 = 39\n')
      }
      if (a == 1 && sign == '+' && b == 39) {
        rl.write('1 + 39 = 40\n')
      }
      if (a == 1 && sign == '+' && b == 40) {
        rl.write('1 + 40 = 41\n')
      }
      if (a == 1 && sign == '+' && b == 41) {
        rl.write('1 + 41 = 42\n')
      }
      if (a == 1 && sign == '+' && b == 42) {
        rl.write('1 + 42 = 43\n')
      }
      if (a == 1 && sign == '+' && b == 43) {
        rl.write('1 + 43 = 44\n')
      }
      if (a == 1 && sign == '+' && b == 44) {
        rl.write('1 + 44 = 45\n')
      }
      if (a == 1 && sign == '+' && b == 45) {
        rl.write('1 + 45 = 46\n')
      }
      if (a == 1 && sign == '+' && b == 46) {
        rl.write('1 + 46 = 47\n')
      }
      if (a == 1 && sign == '+' && b == 47) {
        rl.write('1 + 47 = 48\n')
      }
      if (a == 1 && sign == '+' && b == 48) {
        rl.write('1 + 48 = 49\n')
      }
      if (a == 1 && sign == '+' && b == 49) {
        rl.write('1 + 49 = 50\n')
      }
      if (a == 1 && sign == '+' && b == 50) {
        rl.write('1 + 50 = 51\n')
      }
      if (a == 2 && sign == '+' && b == 0) {
        rl.write('2 + 0 = 2\n')
      }
      if (a == 2 && sign == '+' && b == 1) {
        rl.write('2 + 1 = 3\n')
      }
      if (a == 2 && sign == '+' && b == 2) {
        rl.write('2 + 2 = 4\n')
      }
      if (a == 2 && sign == '+' && b == 3) {
        rl.write('2 + 3 = 5\n')
      }
      if (a == 2 && sign == '+' && b == 4) {
        rl.write('2 + 4 = 6\n')
      }
      if (a == 2 && sign == '+' && b == 5) {
        rl.write('2 + 5 = 7\n')
      }
      if (a == 2 && sign == '+' && b == 6) {
        rl.write('2 + 6 = 8\n')
      }
      if (a == 2 && sign == '+' && b == 7) {
        rl.write('2 + 7 = 9\n')
      }
      if (a == 2 && sign == '+' && b == 8) {
        rl.write('2 + 8 = 10\n')
      }
      if (a == 2 && sign == '+' && b == 9) {
        rl.write('2 + 9 = 11\n')
      }
      if (a == 2 && sign == '+' && b == 10) {
        rl.write('2 + 10 = 12\n')
      }
      if (a == 2 && sign == '+' && b == 11) {
        rl.write('2 + 11 = 13\n')
      }
      if (a == 2 && sign == '+' && b == 12) {
        rl.write('2 + 12 = 14\n')
      }
      if (a == 2 && sign == '+' && b == 13) {
        rl.write('2 + 13 = 15\n')
      }
      if (a == 2 && sign == '+' && b == 14) {
        rl.write('2 + 14 = 16\n')
      }
      if (a == 2 && sign == '+' && b == 15) {
        rl.write('2 + 15 = 17\n')
      }
      if (a == 2 && sign == '+' && b == 16) {
        rl.write('2 + 16 = 18\n')
      }
      if (a == 2 && sign == '+' && b == 17) {
        rl.write('2 + 17 = 19\n')
      }
      if (a == 2 && sign == '+' && b == 18) {
        rl.write('2 + 18 = 20\n')
      }
      if (a == 2 && sign == '+' && b == 19) {
        rl.write('2 + 19 = 21\n')
      }
      if (a == 2 && sign == '+' && b == 20) {
        rl.write('2 + 20 = 22\n')
      }
      if (a == 2 && sign == '+' && b == 21) {
        rl.write('2 + 21 = 23\n')
      }
      if (a == 2 && sign == '+' && b == 22) {
        rl.write('2 + 22 = 24\n')
      }
      if (a == 2 && sign == '+' && b == 23) {
        rl.write('2 + 23 = 25\n')
      }
      if (a == 2 && sign == '+' && b == 24) {
        rl.write('2 + 24 = 26\n')
      }
      if (a == 2 && sign == '+' && b == 25) {
        rl.write('2 + 25 = 27\n')
      }
      if (a == 2 && sign == '+' && b == 26) {
        rl.write('2 + 26 = 28\n')
      }
      if (a == 2 && sign == '+' && b == 27) {
        rl.write('2 + 27 = 29\n')
      }
      if (a == 2 && sign == '+' && b == 28) {
        rl.write('2 + 28 = 30\n')
      }
      if (a == 2 && sign == '+' && b == 29) {
        rl.write('2 + 29 = 31\n')
      }
      if (a == 2 && sign == '+' && b == 30) {
        rl.write('2 + 30 = 32\n')
      }
      if (a == 2 && sign == '+' && b == 31) {
        rl.write('2 + 31 = 33\n')
      }
      if (a == 2 && sign == '+' && b == 32) {
        rl.write('2 + 32 = 34\n')
      }
      if (a == 2 && sign == '+' && b == 33) {
        rl.write('2 + 33 = 35\n')
      }
      if (a == 2 && sign == '+' && b == 34) {
        rl.write('2 + 34 = 36\n')
      }
      if (a == 2 && sign == '+' && b == 35) {
        rl.write('2 + 35 = 37\n')
      }
      if (a == 2 && sign == '+' && b == 36) {
        rl.write('2 + 36 = 38\n')
      }
      if (a == 2 && sign == '+' && b == 37) {
        rl.write('2 + 37 = 39\n')
      }
      if (a == 2 && sign == '+' && b == 38) {
        rl.write('2 + 38 = 40\n')
      }
      if (a == 2 && sign == '+' && b == 39) {
        rl.write('2 + 39 = 41\n')
      }
      if (a == 2 && sign == '+' && b == 40) {
        rl.write('2 + 40 = 42\n')
      }
      if (a == 2 && sign == '+' && b == 41) {
        rl.write('2 + 41 = 43\n')
      }
      if (a == 2 && sign == '+' && b == 42) {
        rl.write('2 + 42 = 44\n')
      }
      if (a == 2 && sign == '+' && b == 43) {
        rl.write('2 + 43 = 45\n')
      }
      if (a == 2 && sign == '+' && b == 44) {
        rl.write('2 + 44 = 46\n')
      }
      if (a == 2 && sign == '+' && b == 45) {
        rl.write('2 + 45 = 47\n')
      }
      if (a == 2 && sign == '+' && b == 46) {
        rl.write('2 + 46 = 48\n')
      }
      if (a == 2 && sign == '+' && b == 47) {
        rl.write('2 + 47 = 49\n')
      }
      if (a == 2 && sign == '+' && b == 48) {
        rl.write('2 + 48 = 50\n')
      }
      if (a == 2 && sign == '+' && b == 49) {
        rl.write('2 + 49 = 51\n')
      }
      if (a == 2 && sign == '+' && b == 50) {
        rl.write('2 + 50 = 52\n')
      }
      if (a == 3 && sign == '+' && b == 0) {
        rl.write('3 + 0 = 3\n')
      }
      if (a == 3 && sign == '+' && b == 1) {
        rl.write('3 + 1 = 4\n')
      }
      if (a == 3 && sign == '+' && b == 2) {
        rl.write('3 + 2 = 5\n')
      }
      if (a == 3 && sign == '+' && b == 3) {
        rl.write('3 + 3 = 6\n')
      }
      if (a == 3 && sign == '+' && b == 4) {
        rl.write('3 + 4 = 7\n')
      }
      if (a == 3 && sign == '+' && b == 5) {
        rl.write('3 + 5 = 8\n')
      }
      if (a == 3 && sign == '+' && b == 6) {
        rl.write('3 + 6 = 9\n')
      }
      if (a == 3 && sign == '+' && b == 7) {
        rl.write('3 + 7 = 10\n')
      }
      if (a == 3 && sign == '+' && b == 8) {
        rl.write('3 + 8 = 11\n')
      }
      if (a == 3 && sign == '+' && b == 9) {
        rl.write('3 + 9 = 12\n')
      }
      if (a == 3 && sign == '+' && b == 10) {
        rl.write('3 + 10 = 13\n')
      }
      if (a == 3 && sign == '+' && b == 11) {
        rl.write('3 + 11 = 14\n')
      }
      if (a == 3 && sign == '+' && b == 12) {
        rl.write('3 + 12 = 15\n')
      }
      if (a == 3 && sign == '+' && b == 13) {
        rl.write('3 + 13 = 16\n')
      }
      if (a == 3 && sign == '+' && b == 14) {
        rl.write('3 + 14 = 17\n')
      }
      if (a == 3 && sign == '+' && b == 15) {
        rl.write('3 + 15 = 18\n')
      }
      if (a == 3 && sign == '+' && b == 16) {
        rl.write('3 + 16 = 19\n')
      }
      if (a == 3 && sign == '+' && b == 17) {
        rl.write('3 + 17 = 20\n')
      }
      if (a == 3 && sign == '+' && b == 18) {
        rl.write('3 + 18 = 21\n')
      }
      if (a == 3 && sign == '+' && b == 19) {
        rl.write('3 + 19 = 22\n')
      }
      if (a == 3 && sign == '+' && b == 20) {
        rl.write('3 + 20 = 23\n')
      }
      if (a == 3 && sign == '+' && b == 21) {
        rl.write('3 + 21 = 24\n')
      }
      if (a == 3 && sign == '+' && b == 22) {
        rl.write('3 + 22 = 25\n')
      }
      if (a == 3 && sign == '+' && b == 23) {
        rl.write('3 + 23 = 26\n')
      }
      if (a == 3 && sign == '+' && b == 24) {
        rl.write('3 + 24 = 27\n')
      }
      if (a == 3 && sign == '+' && b == 25) {
        rl.write('3 + 25 = 28\n')
      }
      if (a == 3 && sign == '+' && b == 26) {
        rl.write('3 + 26 = 29\n')
      }
      if (a == 3 && sign == '+' && b == 27) {
        rl.write('3 + 27 = 30\n')
      }
      if (a == 3 && sign == '+' && b == 28) {
        rl.write('3 + 28 = 31\n')
      }
      if (a == 3 && sign == '+' && b == 29) {
        rl.write('3 + 29 = 32\n')
      }
      if (a == 3 && sign == '+' && b == 30) {
        rl.write('3 + 30 = 33\n')
      }
      if (a == 3 && sign == '+' && b == 31) {
        rl.write('3 + 31 = 34\n')
      }
      if (a == 3 && sign == '+' && b == 32) {
        rl.write('3 + 32 = 35\n')
      }
      if (a == 3 && sign == '+' && b == 33) {
        rl.write('3 + 33 = 36\n')
      }
      if (a == 3 && sign == '+' && b == 34) {
        rl.write('3 + 34 = 37\n')
      }
      if (a == 3 && sign == '+' && b == 35) {
        rl.write('3 + 35 = 38\n')
      }
      if (a == 3 && sign == '+' && b == 36) {
        rl.write('3 + 36 = 39\n')
      }
      if (a == 3 && sign == '+' && b == 37) {
        rl.write('3 + 37 = 40\n')
      }
      if (a == 3 && sign == '+' && b == 38) {
        rl.write('3 + 38 = 41\n')
      }
      if (a == 3 && sign == '+' && b == 39) {
        rl.write('3 + 39 = 42\n')
      }
      if (a == 3 && sign == '+' && b == 40) {
        rl.write('3 + 40 = 43\n')
      }
      if (a == 3 && sign == '+' && b == 41) {
        rl.write('3 + 41 = 44\n')
      }
      if (a == 3 && sign == '+' && b == 42) {
        rl.write('3 + 42 = 45\n')
      }
      if (a == 3 && sign == '+' && b == 43) {
        rl.write('3 + 43 = 46\n')
      }
      if (a == 3 && sign == '+' && b == 44) {
        rl.write('3 + 44 = 47\n')
      }
      if (a == 3 && sign == '+' && b == 45) {
        rl.write('3 + 45 = 48\n')
      }
      if (a == 3 && sign == '+' && b == 46) {
        rl.write('3 + 46 = 49\n')
      }
      if (a == 3 && sign == '+' && b == 47) {
        rl.write('3 + 47 = 50\n')
      }
      if (a == 3 && sign == '+' && b == 48) {
        rl.write('3 + 48 = 51\n')
      }
      if (a == 3 && sign == '+' && b == 49) {
        rl.write('3 + 49 = 52\n')
      }
      if (a == 3 && sign == '+' && b == 50) {
        rl.write('3 + 50 = 53\n')
      }
      if (a == 4 && sign == '+' && b == 0) {
        rl.write('4 + 0 = 4\n')
      }
      if (a == 4 && sign == '+' && b == 1) {
        rl.write('4 + 1 = 5\n')
      }
      if (a == 4 && sign == '+' && b == 2) {
        rl.write('4 + 2 = 6\n')
      }
      if (a == 4 && sign == '+' && b == 3) {
        rl.write('4 + 3 = 7\n')
      }
      if (a == 4 && sign == '+' && b == 4) {
        rl.write('4 + 4 = 8\n')
      }
      if (a == 4 && sign == '+' && b == 5) {
        rl.write('4 + 5 = 9\n')
      }
      if (a == 4 && sign == '+' && b == 6) {
        rl.write('4 + 6 = 10\n')
      }
      if (a == 4 && sign == '+' && b == 7) {
        rl.write('4 + 7 = 11\n')
      }
      if (a == 4 && sign == '+' && b == 8) {
        rl.write('4 + 8 = 12\n')
      }
      if (a == 4 && sign == '+' && b == 9) {
        rl.write('4 + 9 = 13\n')
      }
      if (a == 4 && sign == '+' && b == 10) {
        rl.write('4 + 10 = 14\n')
      }
      if (a == 4 && sign == '+' && b == 11) {
        rl.write('4 + 11 = 15\n')
      }
      if (a == 4 && sign == '+' && b == 12) {
        rl.write('4 + 12 = 16\n')
      }
      if (a == 4 && sign == '+' && b == 13) {
        rl.write('4 + 13 = 17\n')
      }
      if (a == 4 && sign == '+' && b == 14) {
        rl.write('4 + 14 = 18\n')
      }
      if (a == 4 && sign == '+' && b == 15) {
        rl.write('4 + 15 = 19\n')
      }
      if (a == 4 && sign == '+' && b == 16) {
        rl.write('4 + 16 = 20\n')
      }
      if (a == 4 && sign == '+' && b == 17) {
        rl.write('4 + 17 = 21\n')
      }
      if (a == 4 && sign == '+' && b == 18) {
        rl.write('4 + 18 = 22\n')
      }
      if (a == 4 && sign == '+' && b == 19) {
        rl.write('4 + 19 = 23\n')
      }
      if (a == 4 && sign == '+' && b == 20) {
        rl.write('4 + 20 = 24\n')
      }
      if (a == 4 && sign == '+' && b == 21) {
        rl.write('4 + 21 = 25\n')
      }
      if (a == 4 && sign == '+' && b == 22) {
        rl.write('4 + 22 = 26\n')
      }
      if (a == 4 && sign == '+' && b == 23) {
        rl.write('4 + 23 = 27\n')
      }
      if (a == 4 && sign == '+' && b == 24) {
        rl.write('4 + 24 = 28\n')
      }
      if (a == 4 && sign == '+' && b == 25) {
        rl.write('4 + 25 = 29\n')
      }
      if (a == 4 && sign == '+' && b == 26) {
        rl.write('4 + 26 = 30\n')
      }
      if (a == 4 && sign == '+' && b == 27) {
        rl.write('4 + 27 = 31\n')
      }
      if (a == 4 && sign == '+' && b == 28) {
        rl.write('4 + 28 = 32\n')
      }
      if (a == 4 && sign == '+' && b == 29) {
        rl.write('4 + 29 = 33\n')
      }
      if (a == 4 && sign == '+' && b == 30) {
        rl.write('4 + 30 = 34\n')
      }
      if (a == 4 && sign == '+' && b == 31) {
        rl.write('4 + 31 = 35\n')
      }
      if (a == 4 && sign == '+' && b == 32) {
        rl.write('4 + 32 = 36\n')
      }
      if (a == 4 && sign == '+' && b == 33) {
        rl.write('4 + 33 = 37\n')
      }
      if (a == 4 && sign == '+' && b == 34) {
        rl.write('4 + 34 = 38\n')
      }
      if (a == 4 && sign == '+' && b == 35) {
        rl.write('4 + 35 = 39\n')
      }
      if (a == 4 && sign == '+' && b == 36) {
        rl.write('4 + 36 = 40\n')
      }
      if (a == 4 && sign == '+' && b == 37) {
        rl.write('4 + 37 = 41\n')
      }
      if (a == 4 && sign == '+' && b == 38) {
        rl.write('4 + 38 = 42\n')
      }
      if (a == 4 && sign == '+' && b == 39) {
        rl.write('4 + 39 = 43\n')
      }
      if (a == 4 && sign == '+' && b == 40) {
        rl.write('4 + 40 = 44\n')
      }
      if (a == 4 && sign == '+' && b == 41) {
        rl.write('4 + 41 = 45\n')
      }
      if (a == 4 && sign == '+' && b == 42) {
        rl.write('4 + 42 = 46\n')
      }
      if (a == 4 && sign == '+' && b == 43) {
        rl.write('4 + 43 = 47\n')
      }
      if (a == 4 && sign == '+' && b == 44) {
        rl.write('4 + 44 = 48\n')
      }
      if (a == 4 && sign == '+' && b == 45) {
        rl.write('4 + 45 = 49\n')
      }
      if (a == 4 && sign == '+' && b == 46) {
        rl.write('4 + 46 = 50\n')
      }
      if (a == 4 && sign == '+' && b == 47) {
        rl.write('4 + 47 = 51\n')
      }
      if (a == 4 && sign == '+' && b == 48) {
        rl.write('4 + 48 = 52\n')
      }
      if (a == 4 && sign == '+' && b == 49) {
        rl.write('4 + 49 = 53\n')
      }
      if (a == 4 && sign == '+' && b == 50) {
        rl.write('4 + 50 = 54\n')
      }
      if (a == 5 && sign == '+' && b == 0) {
        rl.write('5 + 0 = 5\n')
      }
      if (a == 5 && sign == '+' && b == 1) {
        rl.write('5 + 1 = 6\n')
      }
      if (a == 5 && sign == '+' && b == 2) {
        rl.write('5 + 2 = 7\n')
      }
      if (a == 5 && sign == '+' && b == 3) {
        rl.write('5 + 3 = 8\n')
      }
      if (a == 5 && sign == '+' && b == 4) {
        rl.write('5 + 4 = 9\n')
      }
      if (a == 5 && sign == '+' && b == 5) {
        rl.write('5 + 5 = 10\n')
      }
      if (a == 5 && sign == '+' && b == 6) {
        rl.write('5 + 6 = 11\n')
      }
      if (a == 5 && sign == '+' && b == 7) {
        rl.write('5 + 7 = 12\n')
      }
      if (a == 5 && sign == '+' && b == 8) {
        rl.write('5 + 8 = 13\n')
      }
      if (a == 5 && sign == '+' && b == 9) {
        rl.write('5 + 9 = 14\n')
      }
      if (a == 5 && sign == '+' && b == 10) {
        rl.write('5 + 10 = 15\n')
      }
      if (a == 5 && sign == '+' && b == 11) {
        rl.write('5 + 11 = 16\n')
      }
      if (a == 5 && sign == '+' && b == 12) {
        rl.write('5 + 12 = 17\n')
      }
      if (a == 5 && sign == '+' && b == 13) {
        rl.write('5 + 13 = 18\n')
      }
      if (a == 5 && sign == '+' && b == 14) {
        rl.write('5 + 14 = 19\n')
      }
      if (a == 5 && sign == '+' && b == 15) {
        rl.write('5 + 15 = 20\n')
      }
      if (a == 5 && sign == '+' && b == 16) {
        rl.write('5 + 16 = 21\n')
      }
      if (a == 5 && sign == '+' && b == 17) {
        rl.write('5 + 17 = 22\n')
      }
      if (a == 5 && sign == '+' && b == 18) {
        rl.write('5 + 18 = 23\n')
      }
      if (a == 5 && sign == '+' && b == 19) {
        rl.write('5 + 19 = 24\n')
      }
      if (a == 5 && sign == '+' && b == 20) {
        rl.write('5 + 20 = 25\n')
      }
      if (a == 5 && sign == '+' && b == 21) {
        rl.write('5 + 21 = 26\n')
      }
      if (a == 5 && sign == '+' && b == 22) {
        rl.write('5 + 22 = 27\n')
      }
      if (a == 5 && sign == '+' && b == 23) {
        rl.write('5 + 23 = 28\n')
      }
      if (a == 5 && sign == '+' && b == 24) {
        rl.write('5 + 24 = 29\n')
      }
      if (a == 5 && sign == '+' && b == 25) {
        rl.write('5 + 25 = 30\n')
      }
      if (a == 5 && sign == '+' && b == 26) {
        rl.write('5 + 26 = 31\n')
      }
      if (a == 5 && sign == '+' && b == 27) {
        rl.write('5 + 27 = 32\n')
      }
      if (a == 5 && sign == '+' && b == 28) {
        rl.write('5 + 28 = 33\n')
      }
      if (a == 5 && sign == '+' && b == 29) {
        rl.write('5 + 29 = 34\n')
      }
      if (a == 5 && sign == '+' && b == 30) {
        rl.write('5 + 30 = 35\n')
      }
      if (a == 5 && sign == '+' && b == 31) {
        rl.write('5 + 31 = 36\n')
      }
      if (a == 5 && sign == '+' && b == 32) {
        rl.write('5 + 32 = 37\n')
      }
      if (a == 5 && sign == '+' && b == 33) {
        rl.write('5 + 33 = 38\n')
      }
      if (a == 5 && sign == '+' && b == 34) {
        rl.write('5 + 34 = 39\n')
      }
      if (a == 5 && sign == '+' && b == 35) {
        rl.write('5 + 35 = 40\n')
      }
      if (a == 5 && sign == '+' && b == 36) {
        rl.write('5 + 36 = 41\n')
      }
      if (a == 5 && sign == '+' && b == 37) {
        rl.write('5 + 37 = 42\n')
      }
      if (a == 5 && sign == '+' && b == 38) {
        rl.write('5 + 38 = 43\n')
      }
      if (a == 5 && sign == '+' && b == 39) {
        rl.write('5 + 39 = 44\n')
      }
      if (a == 5 && sign == '+' && b == 40) {
        rl.write('5 + 40 = 45\n')
      }
      if (a == 5 && sign == '+' && b == 41) {
        rl.write('5 + 41 = 46\n')
      }
      if (a == 5 && sign == '+' && b == 42) {
        rl.write('5 + 42 = 47\n')
      }
      if (a == 5 && sign == '+' && b == 43) {
        rl.write('5 + 43 = 48\n')
      }
      if (a == 5 && sign == '+' && b == 44) {
        rl.write('5 + 44 = 49\n')
      }
      if (a == 5 && sign == '+' && b == 45) {
        rl.write('5 + 45 = 50\n')
      }
      if (a == 5 && sign == '+' && b == 46) {
        rl.write('5 + 46 = 51\n')
      }
      if (a == 5 && sign == '+' && b == 47) {
        rl.write('5 + 47 = 52\n')
      }
      if (a == 5 && sign == '+' && b == 48) {
        rl.write('5 + 48 = 53\n')
      }
      if (a == 5 && sign == '+' && b == 49) {
        rl.write('5 + 49 = 54\n')
      }
      if (a == 5 && sign == '+' && b == 50) {
        rl.write('5 + 50 = 55\n')
      }
      if (a == 6 && sign == '+' && b == 0) {
        rl.write('6 + 0 = 6\n')
      }
      if (a == 6 && sign == '+' && b == 1) {
        rl.write('6 + 1 = 7\n')
      }
      if (a == 6 && sign == '+' && b == 2) {
        rl.write('6 + 2 = 8\n')
      }
      if (a == 6 && sign == '+' && b == 3) {
        rl.write('6 + 3 = 9\n')
      }
      if (a == 6 && sign == '+' && b == 4) {
        rl.write('6 + 4 = 10\n')
      }
      if (a == 6 && sign == '+' && b == 5) {
        rl.write('6 + 5 = 11\n')
      }
      if (a == 6 && sign == '+' && b == 6) {
        rl.write('6 + 6 = 12\n')
      }
      if (a == 6 && sign == '+' && b == 7) {
        rl.write('6 + 7 = 13\n')
      }
      if (a == 6 && sign == '+' && b == 8) {
        rl.write('6 + 8 = 14\n')
      }
      if (a == 6 && sign == '+' && b == 9) {
        rl.write('6 + 9 = 15\n')
      }
      if (a == 6 && sign == '+' && b == 10) {
        rl.write('6 + 10 = 16\n')
      }
      if (a == 6 && sign == '+' && b == 11) {
        rl.write('6 + 11 = 17\n')
      }
      if (a == 6 && sign == '+' && b == 12) {
        rl.write('6 + 12 = 18\n')
      }
      if (a == 6 && sign == '+' && b == 13) {
        rl.write('6 + 13 = 19\n')
      }
      if (a == 6 && sign == '+' && b == 14) {
        rl.write('6 + 14 = 20\n')
      }
      if (a == 6 && sign == '+' && b == 15) {
        rl.write('6 + 15 = 21\n')
      }
      if (a == 6 && sign == '+' && b == 16) {
        rl.write('6 + 16 = 22\n')
      }
      if (a == 6 && sign == '+' && b == 17) {
        rl.write('6 + 17 = 23\n')
      }
      if (a == 6 && sign == '+' && b == 18) {
        rl.write('6 + 18 = 24\n')
      }
      if (a == 6 && sign == '+' && b == 19) {
        rl.write('6 + 19 = 25\n')
      }
      if (a == 6 && sign == '+' && b == 20) {
        rl.write('6 + 20 = 26\n')
      }
      if (a == 6 && sign == '+' && b == 21) {
        rl.write('6 + 21 = 27\n')
      }
      if (a == 6 && sign == '+' && b == 22) {
        rl.write('6 + 22 = 28\n')
      }
      if (a == 6 && sign == '+' && b == 23) {
        rl.write('6 + 23 = 29\n')
      }
      if (a == 6 && sign == '+' && b == 24) {
        rl.write('6 + 24 = 30\n')
      }
      if (a == 6 && sign == '+' && b == 25) {
        rl.write('6 + 25 = 31\n')
      }
      if (a == 6 && sign == '+' && b == 26) {
        rl.write('6 + 26 = 32\n')
      }
      if (a == 6 && sign == '+' && b == 27) {
        rl.write('6 + 27 = 33\n')
      }
      if (a == 6 && sign == '+' && b == 28) {
        rl.write('6 + 28 = 34\n')
      }
      if (a == 6 && sign == '+' && b == 29) {
        rl.write('6 + 29 = 35\n')
      }
      if (a == 6 && sign == '+' && b == 30) {
        rl.write('6 + 30 = 36\n')
      }
      if (a == 6 && sign == '+' && b == 31) {
        rl.write('6 + 31 = 37\n')
      }
      if (a == 6 && sign == '+' && b == 32) {
        rl.write('6 + 32 = 38\n')
      }
      if (a == 6 && sign == '+' && b == 33) {
        rl.write('6 + 33 = 39\n')
      }
      if (a == 6 && sign == '+' && b == 34) {
        rl.write('6 + 34 = 40\n')
      }
      if (a == 6 && sign == '+' && b == 35) {
        rl.write('6 + 35 = 41\n')
      }
      if (a == 6 && sign == '+' && b == 36) {
        rl.write('6 + 36 = 42\n')
      }
      if (a == 6 && sign == '+' && b == 37) {
        rl.write('6 + 37 = 43\n')
      }
      if (a == 6 && sign == '+' && b == 38) {
        rl.write('6 + 38 = 44\n')
      }
      if (a == 6 && sign == '+' && b == 39) {
        rl.write('6 + 39 = 45\n')
      }
      if (a == 6 && sign == '+' && b == 40) {
        rl.write('6 + 40 = 46\n')
      }
      if (a == 6 && sign == '+' && b == 41) {
        rl.write('6 + 41 = 47\n')
      }
      if (a == 6 && sign == '+' && b == 42) {
        rl.write('6 + 42 = 48\n')
      }
      if (a == 6 && sign == '+' && b == 43) {
        rl.write('6 + 43 = 49\n')
      }
      if (a == 6 && sign == '+' && b == 44) {
        rl.write('6 + 44 = 50\n')
      }
      if (a == 6 && sign == '+' && b == 45) {
        rl.write('6 + 45 = 51\n')
      }
      if (a == 6 && sign == '+' && b == 46) {
        rl.write('6 + 46 = 52\n')
      }
      if (a == 6 && sign == '+' && b == 47) {
        rl.write('6 + 47 = 53\n')
      }
      if (a == 6 && sign == '+' && b == 48) {
        rl.write('6 + 48 = 54\n')
      }
      if (a == 6 && sign == '+' && b == 49) {
        rl.write('6 + 49 = 55\n')
      }
      if (a == 6 && sign == '+' && b == 50) {
        rl.write('6 + 50 = 56\n')
      }
      if (a == 7 && sign == '+' && b == 0) {
        rl.write('7 + 0 = 7\n')
      }
      if (a == 7 && sign == '+' && b == 1) {
        rl.write('7 + 1 = 8\n')
      }
      if (a == 7 && sign == '+' && b == 2) {
        rl.write('7 + 2 = 9\n')
      }
      if (a == 7 && sign == '+' && b == 3) {
        rl.write('7 + 3 = 10\n')
      }
      if (a == 7 && sign == '+' && b == 4) {
        rl.write('7 + 4 = 11\n')
      }
      if (a == 7 && sign == '+' && b == 5) {
        rl.write('7 + 5 = 12\n')
      }
      if (a == 7 && sign == '+' && b == 6) {
        rl.write('7 + 6 = 13\n')
      }
      if (a == 7 && sign == '+' && b == 7) {
        rl.write('7 + 7 = 14\n')
      }
      if (a == 7 && sign == '+' && b == 8) {
        rl.write('7 + 8 = 15\n')
      }
      if (a == 7 && sign == '+' && b == 9) {
        rl.write('7 + 9 = 16\n')
      }
      if (a == 7 && sign == '+' && b == 10) {
        rl.write('7 + 10 = 17\n')
      }
      if (a == 7 && sign == '+' && b == 11) {
        rl.write('7 + 11 = 18\n')
      }
      if (a == 7 && sign == '+' && b == 12) {
        rl.write('7 + 12 = 19\n')
      }
      if (a == 7 && sign == '+' && b == 13) {
        rl.write('7 + 13 = 20\n')
      }
      if (a == 7 && sign == '+' && b == 14) {
        rl.write('7 + 14 = 21\n')
      }
      if (a == 7 && sign == '+' && b == 15) {
        rl.write('7 + 15 = 22\n')
      }
      if (a == 7 && sign == '+' && b == 16) {
        rl.write('7 + 16 = 23\n')
      }
      if (a == 7 && sign == '+' && b == 17) {
        rl.write('7 + 17 = 24\n')
      }
      if (a == 7 && sign == '+' && b == 18) {
        rl.write('7 + 18 = 25\n')
      }
      if (a == 7 && sign == '+' && b == 19) {
        rl.write('7 + 19 = 26\n')
      }
      if (a == 7 && sign == '+' && b == 20) {
        rl.write('7 + 20 = 27\n')
      }
      if (a == 7 && sign == '+' && b == 21) {
        rl.write('7 + 21 = 28\n')
      }
      if (a == 7 && sign == '+' && b == 22) {
        rl.write('7 + 22 = 29\n')
      }
      if (a == 7 && sign == '+' && b == 23) {
        rl.write('7 + 23 = 30\n')
      }
      if (a == 7 && sign == '+' && b == 24) {
        rl.write('7 + 24 = 31\n')
      }
      if (a == 7 && sign == '+' && b == 25) {
        rl.write('7 + 25 = 32\n')
      }
      if (a == 7 && sign == '+' && b == 26) {
        rl.write('7 + 26 = 33\n')
      }
      if (a == 7 && sign == '+' && b == 27) {
        rl.write('7 + 27 = 34\n')
      }
      if (a == 7 && sign == '+' && b == 28) {
        rl.write('7 + 28 = 35\n')
      }
      if (a == 7 && sign == '+' && b == 29) {
        rl.write('7 + 29 = 36\n')
      }
      if (a == 7 && sign == '+' && b == 30) {
        rl.write('7 + 30 = 37\n')
      }
      if (a == 7 && sign == '+' && b == 31) {
        rl.write('7 + 31 = 38\n')
      }
      if (a == 7 && sign == '+' && b == 32) {
        rl.write('7 + 32 = 39\n')
      }
      if (a == 7 && sign == '+' && b == 33) {
        rl.write('7 + 33 = 40\n')
      }
      if (a == 7 && sign == '+' && b == 34) {
        rl.write('7 + 34 = 41\n')
      }
      if (a == 7 && sign == '+' && b == 35) {
        rl.write('7 + 35 = 42\n')
      }
      if (a == 7 && sign == '+' && b == 36) {
        rl.write('7 + 36 = 43\n')
      }
      if (a == 7 && sign == '+' && b == 37) {
        rl.write('7 + 37 = 44\n')
      }
      if (a == 7 && sign == '+' && b == 38) {
        rl.write('7 + 38 = 45\n')
      }
      if (a == 7 && sign == '+' && b == 39) {
        rl.write('7 + 39 = 46\n')
      }
      if (a == 7 && sign == '+' && b == 40) {
        rl.write('7 + 40 = 47\n')
      }
      if (a == 7 && sign == '+' && b == 41) {
        rl.write('7 + 41 = 48\n')
      }
      if (a == 7 && sign == '+' && b == 42) {
        rl.write('7 + 42 = 49\n')
      }
      if (a == 7 && sign == '+' && b == 43) {
        rl.write('7 + 43 = 50\n')
      }
      if (a == 7 && sign == '+' && b == 44) {
        rl.write('7 + 44 = 51\n')
      }
      if (a == 7 && sign == '+' && b == 45) {
        rl.write('7 + 45 = 52\n')
      }
      if (a == 7 && sign == '+' && b == 46) {
        rl.write('7 + 46 = 53\n')
      }
      if (a == 7 && sign == '+' && b == 47) {
        rl.write('7 + 47 = 54\n')
      }
      if (a == 7 && sign == '+' && b == 48) {
        rl.write('7 + 48 = 55\n')
      }
      if (a == 7 && sign == '+' && b == 49) {
        rl.write('7 + 49 = 56\n')
      }
      if (a == 7 && sign == '+' && b == 50) {
        rl.write('7 + 50 = 57\n')
      }
      if (a == 8 && sign == '+' && b == 0) {
        rl.write('8 + 0 = 8\n')
      }
      if (a == 8 && sign == '+' && b == 1) {
        rl.write('8 + 1 = 9\n')
      }
      if (a == 8 && sign == '+' && b == 2) {
        rl.write('8 + 2 = 10\n')
      }
      if (a == 8 && sign == '+' && b == 3) {
        rl.write('8 + 3 = 11\n')
      }
      if (a == 8 && sign == '+' && b == 4) {
        rl.write('8 + 4 = 12\n')
      }
      if (a == 8 && sign == '+' && b == 5) {
        rl.write('8 + 5 = 13\n')
      }
      if (a == 8 && sign == '+' && b == 6) {
        rl.write('8 + 6 = 14\n')
      }
      if (a == 8 && sign == '+' && b == 7) {
        rl.write('8 + 7 = 15\n')
      }
      if (a == 8 && sign == '+' && b == 8) {
        rl.write('8 + 8 = 16\n')
      }
      if (a == 8 && sign == '+' && b == 9) {
        rl.write('8 + 9 = 17\n')
      }
      if (a == 8 && sign == '+' && b == 10) {
        rl.write('8 + 10 = 18\n')
      }
      if (a == 8 && sign == '+' && b == 11) {
        rl.write('8 + 11 = 19\n')
      }
      if (a == 8 && sign == '+' && b == 12) {
        rl.write('8 + 12 = 20\n')
      }
      if (a == 8 && sign == '+' && b == 13) {
        rl.write('8 + 13 = 21\n')
      }
      if (a == 8 && sign == '+' && b == 14) {
        rl.write('8 + 14 = 22\n')
      }
      if (a == 8 && sign == '+' && b == 15) {
        rl.write('8 + 15 = 23\n')
      }
      if (a == 8 && sign == '+' && b == 16) {
        rl.write('8 + 16 = 24\n')
      }
      if (a == 8 && sign == '+' && b == 17) {
        rl.write('8 + 17 = 25\n')
      }
      if (a == 8 && sign == '+' && b == 18) {
        rl.write('8 + 18 = 26\n')
      }
      if (a == 8 && sign == '+' && b == 19) {
        rl.write('8 + 19 = 27\n')
      }
      if (a == 8 && sign == '+' && b == 20) {
        rl.write('8 + 20 = 28\n')
      }
      if (a == 8 && sign == '+' && b == 21) {
        rl.write('8 + 21 = 29\n')
      }
      if (a == 8 && sign == '+' && b == 22) {
        rl.write('8 + 22 = 30\n')
      }
      if (a == 8 && sign == '+' && b == 23) {
        rl.write('8 + 23 = 31\n')
      }
      if (a == 8 && sign == '+' && b == 24) {
        rl.write('8 + 24 = 32\n')
      }
      if (a == 8 && sign == '+' && b == 25) {
        rl.write('8 + 25 = 33\n')
      }
      if (a == 8 && sign == '+' && b == 26) {
        rl.write('8 + 26 = 34\n')
      }
      if (a == 8 && sign == '+' && b == 27) {
        rl.write('8 + 27 = 35\n')
      }
      if (a == 8 && sign == '+' && b == 28) {
        rl.write('8 + 28 = 36\n')
      }
      if (a == 8 && sign == '+' && b == 29) {
        rl.write('8 + 29 = 37\n')
      }
      if (a == 8 && sign == '+' && b == 30) {
        rl.write('8 + 30 = 38\n')
      }
      if (a == 8 && sign == '+' && b == 31) {
        rl.write('8 + 31 = 39\n')
      }
      if (a == 8 && sign == '+' && b == 32) {
        rl.write('8 + 32 = 40\n')
      }
      if (a == 8 && sign == '+' && b == 33) {
        rl.write('8 + 33 = 41\n')
      }
      if (a == 8 && sign == '+' && b == 34) {
        rl.write('8 + 34 = 42\n')
      }
      if (a == 8 && sign == '+' && b == 35) {
        rl.write('8 + 35 = 43\n')
      }
      if (a == 8 && sign == '+' && b == 36) {
        rl.write('8 + 36 = 44\n')
      }
      if (a == 8 && sign == '+' && b == 37) {
        rl.write('8 + 37 = 45\n')
      }
      if (a == 8 && sign == '+' && b == 38) {
        rl.write('8 + 38 = 46\n')
      }
      if (a == 8 && sign == '+' && b == 39) {
        rl.write('8 + 39 = 47\n')
      }
      if (a == 8 && sign == '+' && b == 40) {
        rl.write('8 + 40 = 48\n')
      }
      if (a == 8 && sign == '+' && b == 41) {
        rl.write('8 + 41 = 49\n')
      }
      if (a == 8 && sign == '+' && b == 42) {
        rl.write('8 + 42 = 50\n')
      }
      if (a == 8 && sign == '+' && b == 43) {
        rl.write('8 + 43 = 51\n')
      }
      if (a == 8 && sign == '+' && b == 44) {
        rl.write('8 + 44 = 52\n')
      }
      if (a == 8 && sign == '+' && b == 45) {
        rl.write('8 + 45 = 53\n')
      }
      if (a == 8 && sign == '+' && b == 46) {
        rl.write('8 + 46 = 54\n')
      }
      if (a == 8 && sign == '+' && b == 47) {
        rl.write('8 + 47 = 55\n')
      }
      if (a == 8 && sign == '+' && b == 48) {
        rl.write('8 + 48 = 56\n')
      }
      if (a == 8 && sign == '+' && b == 49) {
        rl.write('8 + 49 = 57\n')
      }
      if (a == 8 && sign == '+' && b == 50) {
        rl.write('8 + 50 = 58\n')
      }
      if (a == 9 && sign == '+' && b == 0) {
        rl.write('9 + 0 = 9\n')
      }
      if (a == 9 && sign == '+' && b == 1) {
        rl.write('9 + 1 = 10\n')
      }
      if (a == 9 && sign == '+' && b == 2) {
        rl.write('9 + 2 = 11\n')
      }
      if (a == 9 && sign == '+' && b == 3) {
        rl.write('9 + 3 = 12\n')
      }
      if (a == 9 && sign == '+' && b == 4) {
        rl.write('9 + 4 = 13\n')
      }
      if (a == 9 && sign == '+' && b == 5) {
        rl.write('9 + 5 = 14\n')
      }
      if (a == 9 && sign == '+' && b == 6) {
        rl.write('9 + 6 = 15\n')
      }
      if (a == 9 && sign == '+' && b == 7) {
        rl.write('9 + 7 = 16\n')
      }
      if (a == 9 && sign == '+' && b == 8) {
        rl.write('9 + 8 = 17\n')
      }
      if (a == 9 && sign == '+' && b == 9) {
        rl.write('9 + 9 = 18\n')
      }
      if (a == 9 && sign == '+' && b == 10) {
        rl.write('9 + 10 = 19\n')
      }
      if (a == 9 && sign == '+' && b == 11) {
        rl.write('9 + 11 = 20\n')
      }
      if (a == 9 && sign == '+' && b == 12) {
        rl.write('9 + 12 = 21\n')
      }
      if (a == 9 && sign == '+' && b == 13) {
        rl.write('9 + 13 = 22\n')
      }
      if (a == 9 && sign == '+' && b == 14) {
        rl.write('9 + 14 = 23\n')
      }
      if (a == 9 && sign == '+' && b == 15) {
        rl.write('9 + 15 = 24\n')
      }
      if (a == 9 && sign == '+' && b == 16) {
        rl.write('9 + 16 = 25\n')
      }
      if (a == 9 && sign == '+' && b == 17) {
        rl.write('9 + 17 = 26\n')
      }
      if (a == 9 && sign == '+' && b == 18) {
        rl.write('9 + 18 = 27\n')
      }
      if (a == 9 && sign == '+' && b == 19) {
        rl.write('9 + 19 = 28\n')
      }
      if (a == 9 && sign == '+' && b == 20) {
        rl.write('9 + 20 = 29\n')
      }
      if (a == 9 && sign == '+' && b == 21) {
        rl.write('9 + 21 = 30\n')
      }
      if (a == 9 && sign == '+' && b == 22) {
        rl.write('9 + 22 = 31\n')
      }
      if (a == 9 && sign == '+' && b == 23) {
        rl.write('9 + 23 = 32\n')
      }
      if (a == 9 && sign == '+' && b == 24) {
        rl.write('9 + 24 = 33\n')
      }
      if (a == 9 && sign == '+' && b == 25) {
        rl.write('9 + 25 = 34\n')
      }
      if (a == 9 && sign == '+' && b == 26) {
        rl.write('9 + 26 = 35\n')
      }
      if (a == 9 && sign == '+' && b == 27) {
        rl.write('9 + 27 = 36\n')
      }
      if (a == 9 && sign == '+' && b == 28) {
        rl.write('9 + 28 = 37\n')
      }
      if (a == 9 && sign == '+' && b == 29) {
        rl.write('9 + 29 = 38\n')
      }
      if (a == 9 && sign == '+' && b == 30) {
        rl.write('9 + 30 = 39\n')
      }
      if (a == 9 && sign == '+' && b == 31) {
        rl.write('9 + 31 = 40\n')
      }
      if (a == 9 && sign == '+' && b == 32) {
        rl.write('9 + 32 = 41\n')
      }
      if (a == 9 && sign == '+' && b == 33) {
        rl.write('9 + 33 = 42\n')
      }
      if (a == 9 && sign == '+' && b == 34) {
        rl.write('9 + 34 = 43\n')
      }
      if (a == 9 && sign == '+' && b == 35) {
        rl.write('9 + 35 = 44\n')
      }
      if (a == 9 && sign == '+' && b == 36) {
        rl.write('9 + 36 = 45\n')
      }
      if (a == 9 && sign == '+' && b == 37) {
        rl.write('9 + 37 = 46\n')
      }
      if (a == 9 && sign == '+' && b == 38) {
        rl.write('9 + 38 = 47\n')
      }
      if (a == 9 && sign == '+' && b == 39) {
        rl.write('9 + 39 = 48\n')
      }
      if (a == 9 && sign == '+' && b == 40) {
        rl.write('9 + 40 = 49\n')
      }
      if (a == 9 && sign == '+' && b == 41) {
        rl.write('9 + 41 = 50\n')
      }
      if (a == 9 && sign == '+' && b == 42) {
        rl.write('9 + 42 = 51\n')
      }
      if (a == 9 && sign == '+' && b == 43) {
        rl.write('9 + 43 = 52\n')
      }
      if (a == 9 && sign == '+' && b == 44) {
        rl.write('9 + 44 = 53\n')
      }
      if (a == 9 && sign == '+' && b == 45) {
        rl.write('9 + 45 = 54\n')
      }
      if (a == 9 && sign == '+' && b == 46) {
        rl.write('9 + 46 = 55\n')
      }
      if (a == 9 && sign == '+' && b == 47) {
        rl.write('9 + 47 = 56\n')
      }
      if (a == 9 && sign == '+' && b == 48) {
        rl.write('9 + 48 = 57\n')
      }
      if (a == 9 && sign == '+' && b == 49) {
        rl.write('9 + 49 = 58\n')
      }
      if (a == 9 && sign == '+' && b == 50) {
        rl.write('9 + 50 = 59\n')
      }
      if (a == 10 && sign == '+' && b == 0) {
        rl.write('10 + 0 = 10\n')
      }
      if (a == 10 && sign == '+' && b == 1) {
        rl.write('10 + 1 = 11\n')
      }
      if (a == 10 && sign == '+' && b == 2) {
        rl.write('10 + 2 = 12\n')
      }
      if (a == 10 && sign == '+' && b == 3) {
        rl.write('10 + 3 = 13\n')
      }
      if (a == 10 && sign == '+' && b == 4) {
        rl.write('10 + 4 = 14\n')
      }
      if (a == 10 && sign == '+' && b == 5) {
        rl.write('10 + 5 = 15\n')
      }
      if (a == 10 && sign == '+' && b == 6) {
        rl.write('10 + 6 = 16\n')
      }
      if (a == 10 && sign == '+' && b == 7) {
        rl.write('10 + 7 = 17\n')
      }
      if (a == 10 && sign == '+' && b == 8) {
        rl.write('10 + 8 = 18\n')
      }
      if (a == 10 && sign == '+' && b == 9) {
        rl.write('10 + 9 = 19\n')
      }
      if (a == 10 && sign == '+' && b == 10) {
        rl.write('10 + 10 = 20\n')
      }
      if (a == 10 && sign == '+' && b == 11) {
        rl.write('10 + 11 = 21\n')
      }
      if (a == 10 && sign == '+' && b == 12) {
        rl.write('10 + 12 = 22\n')
      }
      if (a == 10 && sign == '+' && b == 13) {
        rl.write('10 + 13 = 23\n')
      }
      if (a == 10 && sign == '+' && b == 14) {
        rl.write('10 + 14 = 24\n')
      }
      if (a == 10 && sign == '+' && b == 15) {
        rl.write('10 + 15 = 25\n')
      }
      if (a == 10 && sign == '+' && b == 16) {
        rl.write('10 + 16 = 26\n')
      }
      if (a == 10 && sign == '+' && b == 17) {
        rl.write('10 + 17 = 27\n')
      }
      if (a == 10 && sign == '+' && b == 18) {
        rl.write('10 + 18 = 28\n')
      }
      if (a == 10 && sign == '+' && b == 19) {
        rl.write('10 + 19 = 29\n')
      }
      if (a == 10 && sign == '+' && b == 20) {
        rl.write('10 + 20 = 30\n')
      }
      if (a == 10 && sign == '+' && b == 21) {
        rl.write('10 + 21 = 31\n')
      }
      if (a == 10 && sign == '+' && b == 22) {
        rl.write('10 + 22 = 32\n')
      }
      if (a == 10 && sign == '+' && b == 23) {
        rl.write('10 + 23 = 33\n')
      }
      if (a == 10 && sign == '+' && b == 24) {
        rl.write('10 + 24 = 34\n')
      }
      if (a == 10 && sign == '+' && b == 25) {
        rl.write('10 + 25 = 35\n')
      }
      if (a == 10 && sign == '+' && b == 26) {
        rl.write('10 + 26 = 36\n')
      }
      if (a == 10 && sign == '+' && b == 27) {
        rl.write('10 + 27 = 37\n')
      }
      if (a == 10 && sign == '+' && b == 28) {
        rl.write('10 + 28 = 38\n')
      }
      if (a == 10 && sign == '+' && b == 29) {
        rl.write('10 + 29 = 39\n')
      }
      if (a == 10 && sign == '+' && b == 30) {
        rl.write('10 + 30 = 40\n')
      }
      if (a == 10 && sign == '+' && b == 31) {
        rl.write('10 + 31 = 41\n')
      }
      if (a == 10 && sign == '+' && b == 32) {
        rl.write('10 + 32 = 42\n')
      }
      if (a == 10 && sign == '+' && b == 33) {
        rl.write('10 + 33 = 43\n')
      }
      if (a == 10 && sign == '+' && b == 34) {
        rl.write('10 + 34 = 44\n')
      }
      if (a == 10 && sign == '+' && b == 35) {
        rl.write('10 + 35 = 45\n')
      }
      if (a == 10 && sign == '+' && b == 36) {
        rl.write('10 + 36 = 46\n')
      }
      if (a == 10 && sign == '+' && b == 37) {
        rl.write('10 + 37 = 47\n')
      }
      if (a == 10 && sign == '+' && b == 38) {
        rl.write('10 + 38 = 48\n')
      }
      if (a == 10 && sign == '+' && b == 39) {
        rl.write('10 + 39 = 49\n')
      }
      if (a == 10 && sign == '+' && b == 40) {
        rl.write('10 + 40 = 50\n')
      }
      if (a == 10 && sign == '+' && b == 41) {
        rl.write('10 + 41 = 51\n')
      }
      if (a == 10 && sign == '+' && b == 42) {
        rl.write('10 + 42 = 52\n')
      }
      if (a == 10 && sign == '+' && b == 43) {
        rl.write('10 + 43 = 53\n')
      }
      if (a == 10 && sign == '+' && b == 44) {
        rl.write('10 + 44 = 54\n')
      }
      if (a == 10 && sign == '+' && b == 45) {
        rl.write('10 + 45 = 55\n')
      }
      if (a == 10 && sign == '+' && b == 46) {
        rl.write('10 + 46 = 56\n')
      }
      if (a == 10 && sign == '+' && b == 47) {
        rl.write('10 + 47 = 57\n')
      }
      if (a == 10 && sign == '+' && b == 48) {
        rl.write('10 + 48 = 58\n')
      }
      if (a == 10 && sign == '+' && b == 49) {
        rl.write('10 + 49 = 59\n')
      }
      if (a == 10 && sign == '+' && b == 50) {
        rl.write('10 + 50 = 60\n')
      }
      if (a == 11 && sign == '+' && b == 0) {
        rl.write('11 + 0 = 11\n')
      }
      if (a == 11 && sign == '+' && b == 1) {
        rl.write('11 + 1 = 12\n')
      }
      if (a == 11 && sign == '+' && b == 2) {
        rl.write('11 + 2 = 13\n')
      }
      if (a == 11 && sign == '+' && b == 3) {
        rl.write('11 + 3 = 14\n')
      }
      if (a == 11 && sign == '+' && b == 4) {
        rl.write('11 + 4 = 15\n')
      }
      if (a == 11 && sign == '+' && b == 5) {
        rl.write('11 + 5 = 16\n')
      }
      if (a == 11 && sign == '+' && b == 6) {
        rl.write('11 + 6 = 17\n')
      }
      if (a == 11 && sign == '+' && b == 7) {
        rl.write('11 + 7 = 18\n')
      }
      if (a == 11 && sign == '+' && b == 8) {
        rl.write('11 + 8 = 19\n')
      }
      if (a == 11 && sign == '+' && b == 9) {
        rl.write('11 + 9 = 20\n')
      }
      if (a == 11 && sign == '+' && b == 10) {
        rl.write('11 + 10 = 21\n')
      }
      if (a == 11 && sign == '+' && b == 11) {
        rl.write('11 + 11 = 22\n')
      }
      if (a == 11 && sign == '+' && b == 12) {
        rl.write('11 + 12 = 23\n')
      }
      if (a == 11 && sign == '+' && b == 13) {
        rl.write('11 + 13 = 24\n')
      }
      if (a == 11 && sign == '+' && b == 14) {
        rl.write('11 + 14 = 25\n')
      }
      if (a == 11 && sign == '+' && b == 15) {
        rl.write('11 + 15 = 26\n')
      }
      if (a == 11 && sign == '+' && b == 16) {
        rl.write('11 + 16 = 27\n')
      }
      if (a == 11 && sign == '+' && b == 17) {
        rl.write('11 + 17 = 28\n')
      }
      if (a == 11 && sign == '+' && b == 18) {
        rl.write('11 + 18 = 29\n')
      }
      if (a == 11 && sign == '+' && b == 19) {
        rl.write('11 + 19 = 30\n')
      }
      if (a == 11 && sign == '+' && b == 20) {
        rl.write('11 + 20 = 31\n')
      }
      if (a == 11 && sign == '+' && b == 21) {
        rl.write('11 + 21 = 32\n')
      }
      if (a == 11 && sign == '+' && b == 22) {
        rl.write('11 + 22 = 33\n')
      }
      if (a == 11 && sign == '+' && b == 23) {
        rl.write('11 + 23 = 34\n')
      }
      if (a == 11 && sign == '+' && b == 24) {
        rl.write('11 + 24 = 35\n')
      }
      if (a == 11 && sign == '+' && b == 25) {
        rl.write('11 + 25 = 36\n')
      }
      if (a == 11 && sign == '+' && b == 26) {
        rl.write('11 + 26 = 37\n')
      }
      if (a == 11 && sign == '+' && b == 27) {
        rl.write('11 + 27 = 38\n')
      }
      if (a == 11 && sign == '+' && b == 28) {
        rl.write('11 + 28 = 39\n')
      }
      if (a == 11 && sign == '+' && b == 29) {
        rl.write('11 + 29 = 40\n')
      }
      if (a == 11 && sign == '+' && b == 30) {
        rl.write('11 + 30 = 41\n')
      }
      if (a == 11 && sign == '+' && b == 31) {
        rl.write('11 + 31 = 42\n')
      }
      if (a == 11 && sign == '+' && b == 32) {
        rl.write('11 + 32 = 43\n')
      }
      if (a == 11 && sign == '+' && b == 33) {
        rl.write('11 + 33 = 44\n')
      }
      if (a == 11 && sign == '+' && b == 34) {
        rl.write('11 + 34 = 45\n')
      }
      if (a == 11 && sign == '+' && b == 35) {
        rl.write('11 + 35 = 46\n')
      }
      if (a == 11 && sign == '+' && b == 36) {
        rl.write('11 + 36 = 47\n')
      }
      if (a == 11 && sign == '+' && b == 37) {
        rl.write('11 + 37 = 48\n')
      }
      if (a == 11 && sign == '+' && b == 38) {
        rl.write('11 + 38 = 49\n')
      }
      if (a == 11 && sign == '+' && b == 39) {
        rl.write('11 + 39 = 50\n')
      }
      if (a == 11 && sign == '+' && b == 40) {
        rl.write('11 + 40 = 51\n')
      }
      if (a == 11 && sign == '+' && b == 41) {
        rl.write('11 + 41 = 52\n')
      }
      if (a == 11 && sign == '+' && b == 42) {
        rl.write('11 + 42 = 53\n')
      }
      if (a == 11 && sign == '+' && b == 43) {
        rl.write('11 + 43 = 54\n')
      }
      if (a == 11 && sign == '+' && b == 44) {
        rl.write('11 + 44 = 55\n')
      }
      if (a == 11 && sign == '+' && b == 45) {
        rl.write('11 + 45 = 56\n')
      }
      if (a == 11 && sign == '+' && b == 46) {
        rl.write('11 + 46 = 57\n')
      }
      if (a == 11 && sign == '+' && b == 47) {
        rl.write('11 + 47 = 58\n')
      }
      if (a == 11 && sign == '+' && b == 48) {
        rl.write('11 + 48 = 59\n')
      }
      if (a == 11 && sign == '+' && b == 49) {
        rl.write('11 + 49 = 60\n')
      }
      if (a == 11 && sign == '+' && b == 50) {
        rl.write('11 + 50 = 61\n')
      }
      if (a == 12 && sign == '+' && b == 0) {
        rl.write('12 + 0 = 12\n')
      }
      if (a == 12 && sign == '+' && b == 1) {
        rl.write('12 + 1 = 13\n')
      }
      if (a == 12 && sign == '+' && b == 2) {
        rl.write('12 + 2 = 14\n')
      }
      if (a == 12 && sign == '+' && b == 3) {
        rl.write('12 + 3 = 15\n')
      }
      if (a == 12 && sign == '+' && b == 4) {
        rl.write('12 + 4 = 16\n')
      }
      if (a == 12 && sign == '+' && b == 5) {
        rl.write('12 + 5 = 17\n')
      }
      if (a == 12 && sign == '+' && b == 6) {
        rl.write('12 + 6 = 18\n')
      }
      if (a == 12 && sign == '+' && b == 7) {
        rl.write('12 + 7 = 19\n')
      }
      if (a == 12 && sign == '+' && b == 8) {
        rl.write('12 + 8 = 20\n')
      }
      if (a == 12 && sign == '+' && b == 9) {
        rl.write('12 + 9 = 21\n')
      }
      if (a == 12 && sign == '+' && b == 10) {
        rl.write('12 + 10 = 22\n')
      }
      if (a == 12 && sign == '+' && b == 11) {
        rl.write('12 + 11 = 23\n')
      }
      if (a == 12 && sign == '+' && b == 12) {
        rl.write('12 + 12 = 24\n')
      }
      if (a == 12 && sign == '+' && b == 13) {
        rl.write('12 + 13 = 25\n')
      }
      if (a == 12 && sign == '+' && b == 14) {
        rl.write('12 + 14 = 26\n')
      }
      if (a == 12 && sign == '+' && b == 15) {
        rl.write('12 + 15 = 27\n')
      }
      if (a == 12 && sign == '+' && b == 16) {
        rl.write('12 + 16 = 28\n')
      }
      if (a == 12 && sign == '+' && b == 17) {
        rl.write('12 + 17 = 29\n')
      }
      if (a == 12 && sign == '+' && b == 18) {
        rl.write('12 + 18 = 30\n')
      }
      if (a == 12 && sign == '+' && b == 19) {
        rl.write('12 + 19 = 31\n')
      }
      if (a == 12 && sign == '+' && b == 20) {
        rl.write('12 + 20 = 32\n')
      }
      if (a == 12 && sign == '+' && b == 21) {
        rl.write('12 + 21 = 33\n')
      }
      if (a == 12 && sign == '+' && b == 22) {
        rl.write('12 + 22 = 34\n')
      }
      if (a == 12 && sign == '+' && b == 23) {
        rl.write('12 + 23 = 35\n')
      }
      if (a == 12 && sign == '+' && b == 24) {
        rl.write('12 + 24 = 36\n')
      }
      if (a == 12 && sign == '+' && b == 25) {
        rl.write('12 + 25 = 37\n')
      }
      if (a == 12 && sign == '+' && b == 26) {
        rl.write('12 + 26 = 38\n')
      }
      if (a == 12 && sign == '+' && b == 27) {
        rl.write('12 + 27 = 39\n')
      }
      if (a == 12 && sign == '+' && b == 28) {
        rl.write('12 + 28 = 40\n')
      }
      if (a == 12 && sign == '+' && b == 29) {
        rl.write('12 + 29 = 41\n')
      }
      if (a == 12 && sign == '+' && b == 30) {
        rl.write('12 + 30 = 42\n')
      }
      if (a == 12 && sign == '+' && b == 31) {
        rl.write('12 + 31 = 43\n')
      }
      if (a == 12 && sign == '+' && b == 32) {
        rl.write('12 + 32 = 44\n')
      }
      if (a == 12 && sign == '+' && b == 33) {
        rl.write('12 + 33 = 45\n')
      }
      if (a == 12 && sign == '+' && b == 34) {
        rl.write('12 + 34 = 46\n')
      }
      if (a == 12 && sign == '+' && b == 35) {
        rl.write('12 + 35 = 47\n')
      }
      if (a == 12 && sign == '+' && b == 36) {
        rl.write('12 + 36 = 48\n')
      }
      if (a == 12 && sign == '+' && b == 37) {
        rl.write('12 + 37 = 49\n')
      }
      if (a == 12 && sign == '+' && b == 38) {
        rl.write('12 + 38 = 50\n')
      }
      if (a == 12 && sign == '+' && b == 39) {
        rl.write('12 + 39 = 51\n')
      }
      if (a == 12 && sign == '+' && b == 40) {
        rl.write('12 + 40 = 52\n')
      }
      if (a == 12 && sign == '+' && b == 41) {
        rl.write('12 + 41 = 53\n')
      }
      if (a == 12 && sign == '+' && b == 42) {
        rl.write('12 + 42 = 54\n')
      }
      if (a == 12 && sign == '+' && b == 43) {
        rl.write('12 + 43 = 55\n')
      }
      if (a == 12 && sign == '+' && b == 44) {
        rl.write('12 + 44 = 56\n')
      }
      if (a == 12 && sign == '+' && b == 45) {
        rl.write('12 + 45 = 57\n')
      }
      if (a == 12 && sign == '+' && b == 46) {
        rl.write('12 + 46 = 58\n')
      }
      if (a == 12 && sign == '+' && b == 47) {
        rl.write('12 + 47 = 59\n')
      }
      if (a == 12 && sign == '+' && b == 48) {
        rl.write('12 + 48 = 60\n')
      }
      if (a == 12 && sign == '+' && b == 49) {
        rl.write('12 + 49 = 61\n')
      }
      if (a == 12 && sign == '+' && b == 50) {
        rl.write('12 + 50 = 62\n')
      }
      if (a == 13 && sign == '+' && b == 0) {
        rl.write('13 + 0 = 13\n')
      }
      if (a == 13 && sign == '+' && b == 1) {
        rl.write('13 + 1 = 14\n')
      }
      if (a == 13 && sign == '+' && b == 2) {
        rl.write('13 + 2 = 15\n')
      }
      if (a == 13 && sign == '+' && b == 3) {
        rl.write('13 + 3 = 16\n')
      }
      if (a == 13 && sign == '+' && b == 4) {
        rl.write('13 + 4 = 17\n')
      }
      if (a == 13 && sign == '+' && b == 5) {
        rl.write('13 + 5 = 18\n')
      }
      if (a == 13 && sign == '+' && b == 6) {
        rl.write('13 + 6 = 19\n')
      }
      if (a == 13 && sign == '+' && b == 7) {
        rl.write('13 + 7 = 20\n')
      }
      if (a == 13 && sign == '+' && b == 8) {
        rl.write('13 + 8 = 21\n')
      }
      if (a == 13 && sign == '+' && b == 9) {
        rl.write('13 + 9 = 22\n')
      }
      if (a == 13 && sign == '+' && b == 10) {
        rl.write('13 + 10 = 23\n')
      }
      if (a == 13 && sign == '+' && b == 11) {
        rl.write('13 + 11 = 24\n')
      }
      if (a == 13 && sign == '+' && b == 12) {
        rl.write('13 + 12 = 25\n')
      }
      if (a == 13 && sign == '+' && b == 13) {
        rl.write('13 + 13 = 26\n')
      }
      if (a == 13 && sign == '+' && b == 14) {
        rl.write('13 + 14 = 27\n')
      }
      if (a == 13 && sign == '+' && b == 15) {
        rl.write('13 + 15 = 28\n')
      }
      if (a == 13 && sign == '+' && b == 16) {
        rl.write('13 + 16 = 29\n')
      }
      if (a == 13 && sign == '+' && b == 17) {
        rl.write('13 + 17 = 30\n')
      }
      if (a == 13 && sign == '+' && b == 18) {
        rl.write('13 + 18 = 31\n')
      }
      if (a == 13 && sign == '+' && b == 19) {
        rl.write('13 + 19 = 32\n')
      }
      if (a == 13 && sign == '+' && b == 20) {
        rl.write('13 + 20 = 33\n')
      }
      if (a == 13 && sign == '+' && b == 21) {
        rl.write('13 + 21 = 34\n')
      }
      if (a == 13 && sign == '+' && b == 22) {
        rl.write('13 + 22 = 35\n')
      }
      if (a == 13 && sign == '+' && b == 23) {
        rl.write('13 + 23 = 36\n')
      }
      if (a == 13 && sign == '+' && b == 24) {
        rl.write('13 + 24 = 37\n')
      }
      if (a == 13 && sign == '+' && b == 25) {
        rl.write('13 + 25 = 38\n')
      }
      if (a == 13 && sign == '+' && b == 26) {
        rl.write('13 + 26 = 39\n')
      }
      if (a == 13 && sign == '+' && b == 27) {
        rl.write('13 + 27 = 40\n')
      }
      if (a == 13 && sign == '+' && b == 28) {
        rl.write('13 + 28 = 41\n')
      }
      if (a == 13 && sign == '+' && b == 29) {
        rl.write('13 + 29 = 42\n')
      }
      if (a == 13 && sign == '+' && b == 30) {
        rl.write('13 + 30 = 43\n')
      }
      if (a == 13 && sign == '+' && b == 31) {
        rl.write('13 + 31 = 44\n')
      }
      if (a == 13 && sign == '+' && b == 32) {
        rl.write('13 + 32 = 45\n')
      }
      if (a == 13 && sign == '+' && b == 33) {
        rl.write('13 + 33 = 46\n')
      }
      if (a == 13 && sign == '+' && b == 34) {
        rl.write('13 + 34 = 47\n')
      }
      if (a == 13 && sign == '+' && b == 35) {
        rl.write('13 + 35 = 48\n')
      }
      if (a == 13 && sign == '+' && b == 36) {
        rl.write('13 + 36 = 49\n')
      }
      if (a == 13 && sign == '+' && b == 37) {
        rl.write('13 + 37 = 50\n')
      }
      if (a == 13 && sign == '+' && b == 38) {
        rl.write('13 + 38 = 51\n')
      }
      if (a == 13 && sign == '+' && b == 39) {
        rl.write('13 + 39 = 52\n')
      }
      if (a == 13 && sign == '+' && b == 40) {
        rl.write('13 + 40 = 53\n')
      }
      if (a == 13 && sign == '+' && b == 41) {
        rl.write('13 + 41 = 54\n')
      }
      if (a == 13 && sign == '+' && b == 42) {
        rl.write('13 + 42 = 55\n')
      }
      if (a == 13 && sign == '+' && b == 43) {
        rl.write('13 + 43 = 56\n')
      }
      if (a == 13 && sign == '+' && b == 44) {
        rl.write('13 + 44 = 57\n')
      }
      if (a == 13 && sign == '+' && b == 45) {
        rl.write('13 + 45 = 58\n')
      }
      if (a == 13 && sign == '+' && b == 46) {
        rl.write('13 + 46 = 59\n')
      }
      if (a == 13 && sign == '+' && b == 47) {
        rl.write('13 + 47 = 60\n')
      }
      if (a == 13 && sign == '+' && b == 48) {
        rl.write('13 + 48 = 61\n')
      }
      if (a == 13 && sign == '+' && b == 49) {
        rl.write('13 + 49 = 62\n')
      }
      if (a == 13 && sign == '+' && b == 50) {
        rl.write('13 + 50 = 63\n')
      }
      if (a == 14 && sign == '+' && b == 0) {
        rl.write('14 + 0 = 14\n')
      }
      if (a == 14 && sign == '+' && b == 1) {
        rl.write('14 + 1 = 15\n')
      }
      if (a == 14 && sign == '+' && b == 2) {
        rl.write('14 + 2 = 16\n')
      }
      if (a == 14 && sign == '+' && b == 3) {
        rl.write('14 + 3 = 17\n')
      }
      if (a == 14 && sign == '+' && b == 4) {
        rl.write('14 + 4 = 18\n')
      }
      if (a == 14 && sign == '+' && b == 5) {
        rl.write('14 + 5 = 19\n')
      }
      if (a == 14 && sign == '+' && b == 6) {
        rl.write('14 + 6 = 20\n')
      }
      if (a == 14 && sign == '+' && b == 7) {
        rl.write('14 + 7 = 21\n')
      }
      if (a == 14 && sign == '+' && b == 8) {
        rl.write('14 + 8 = 22\n')
      }
      if (a == 14 && sign == '+' && b == 9) {
        rl.write('14 + 9 = 23\n')
      }
      if (a == 14 && sign == '+' && b == 10) {
        rl.write('14 + 10 = 24\n')
      }
      if (a == 14 && sign == '+' && b == 11) {
        rl.write('14 + 11 = 25\n')
      }
      if (a == 14 && sign == '+' && b == 12) {
        rl.write('14 + 12 = 26\n')
      }
      if (a == 14 && sign == '+' && b == 13) {
        rl.write('14 + 13 = 27\n')
      }
      if (a == 14 && sign == '+' && b == 14) {
        rl.write('14 + 14 = 28\n')
      }
      if (a == 14 && sign == '+' && b == 15) {
        rl.write('14 + 15 = 29\n')
      }
      if (a == 14 && sign == '+' && b == 16) {
        rl.write('14 + 16 = 30\n')
      }
      if (a == 14 && sign == '+' && b == 17) {
        rl.write('14 + 17 = 31\n')
      }
      if (a == 14 && sign == '+' && b == 18) {
        rl.write('14 + 18 = 32\n')
      }
      if (a == 14 && sign == '+' && b == 19) {
        rl.write('14 + 19 = 33\n')
      }
      if (a == 14 && sign == '+' && b == 20) {
        rl.write('14 + 20 = 34\n')
      }
      if (a == 14 && sign == '+' && b == 21) {
        rl.write('14 + 21 = 35\n')
      }
      if (a == 14 && sign == '+' && b == 22) {
        rl.write('14 + 22 = 36\n')
      }
      if (a == 14 && sign == '+' && b == 23) {
        rl.write('14 + 23 = 37\n')
      }
      if (a == 14 && sign == '+' && b == 24) {
        rl.write('14 + 24 = 38\n')
      }
      if (a == 14 && sign == '+' && b == 25) {
        rl.write('14 + 25 = 39\n')
      }
      if (a == 14 && sign == '+' && b == 26) {
        rl.write('14 + 26 = 40\n')
      }
      if (a == 14 && sign == '+' && b == 27) {
        rl.write('14 + 27 = 41\n')
      }
      if (a == 14 && sign == '+' && b == 28) {
        rl.write('14 + 28 = 42\n')
      }
      if (a == 14 && sign == '+' && b == 29) {
        rl.write('14 + 29 = 43\n')
      }
      if (a == 14 && sign == '+' && b == 30) {
        rl.write('14 + 30 = 44\n')
      }
      if (a == 14 && sign == '+' && b == 31) {
        rl.write('14 + 31 = 45\n')
      }
      if (a == 14 && sign == '+' && b == 32) {
        rl.write('14 + 32 = 46\n')
      }
      if (a == 14 && sign == '+' && b == 33) {
        rl.write('14 + 33 = 47\n')
      }
      if (a == 14 && sign == '+' && b == 34) {
        rl.write('14 + 34 = 48\n')
      }
      if (a == 14 && sign == '+' && b == 35) {
        rl.write('14 + 35 = 49\n')
      }
      if (a == 14 && sign == '+' && b == 36) {
        rl.write('14 + 36 = 50\n')
      }
      if (a == 14 && sign == '+' && b == 37) {
        rl.write('14 + 37 = 51\n')
      }
      if (a == 14 && sign == '+' && b == 38) {
        rl.write('14 + 38 = 52\n')
      }
      if (a == 14 && sign == '+' && b == 39) {
        rl.write('14 + 39 = 53\n')
      }
      if (a == 14 && sign == '+' && b == 40) {
        rl.write('14 + 40 = 54\n')
      }
      if (a == 14 && sign == '+' && b == 41) {
        rl.write('14 + 41 = 55\n')
      }
      if (a == 14 && sign == '+' && b == 42) {
        rl.write('14 + 42 = 56\n')
      }
      if (a == 14 && sign == '+' && b == 43) {
        rl.write('14 + 43 = 57\n')
      }
      if (a == 14 && sign == '+' && b == 44) {
        rl.write('14 + 44 = 58\n')
      }
      if (a == 14 && sign == '+' && b == 45) {
        rl.write('14 + 45 = 59\n')
      }
      if (a == 14 && sign == '+' && b == 46) {
        rl.write('14 + 46 = 60\n')
      }
      if (a == 14 && sign == '+' && b == 47) {
        rl.write('14 + 47 = 61\n')
      }
      if (a == 14 && sign == '+' && b == 48) {
        rl.write('14 + 48 = 62\n')
      }
      if (a == 14 && sign == '+' && b == 49) {
        rl.write('14 + 49 = 63\n')
      }
      if (a == 14 && sign == '+' && b == 50) {
        rl.write('14 + 50 = 64\n')
      }
      if (a == 15 && sign == '+' && b == 0) {
        rl.write('15 + 0 = 15\n')
      }
      if (a == 15 && sign == '+' && b == 1) {
        rl.write('15 + 1 = 16\n')
      }
      if (a == 15 && sign == '+' && b == 2) {
        rl.write('15 + 2 = 17\n')
      }
      if (a == 15 && sign == '+' && b == 3) {
        rl.write('15 + 3 = 18\n')
      }
      if (a == 15 && sign == '+' && b == 4) {
        rl.write('15 + 4 = 19\n')
      }
      if (a == 15 && sign == '+' && b == 5) {
        rl.write('15 + 5 = 20\n')
      }
      if (a == 15 && sign == '+' && b == 6) {
        rl.write('15 + 6 = 21\n')
      }
      if (a == 15 && sign == '+' && b == 7) {
        rl.write('15 + 7 = 22\n')
      }
      if (a == 15 && sign == '+' && b == 8) {
        rl.write('15 + 8 = 23\n')
      }
      if (a == 15 && sign == '+' && b == 9) {
        rl.write('15 + 9 = 24\n')
      }
      if (a == 15 && sign == '+' && b == 10) {
        rl.write('15 + 10 = 25\n')
      }
      if (a == 15 && sign == '+' && b == 11) {
        rl.write('15 + 11 = 26\n')
      }
      if (a == 15 && sign == '+' && b == 12) {
        rl.write('15 + 12 = 27\n')
      }
      if (a == 15 && sign == '+' && b == 13) {
        rl.write('15 + 13 = 28\n')
      }
      if (a == 15 && sign == '+' && b == 14) {
        rl.write('15 + 14 = 29\n')
      }
      if (a == 15 && sign == '+' && b == 15) {
        rl.write('15 + 15 = 30\n')
      }
      if (a == 15 && sign == '+' && b == 16) {
        rl.write('15 + 16 = 31\n')
      }
      if (a == 15 && sign == '+' && b == 17) {
        rl.write('15 + 17 = 32\n')
      }
      if (a == 15 && sign == '+' && b == 18) {
        rl.write('15 + 18 = 33\n')
      }
      if (a == 15 && sign == '+' && b == 19) {
        rl.write('15 + 19 = 34\n')
      }
      if (a == 15 && sign == '+' && b == 20) {
        rl.write('15 + 20 = 35\n')
      }
      if (a == 15 && sign == '+' && b == 21) {
        rl.write('15 + 21 = 36\n')
      }
      if (a == 15 && sign == '+' && b == 22) {
        rl.write('15 + 22 = 37\n')
      }
      if (a == 15 && sign == '+' && b == 23) {
        rl.write('15 + 23 = 38\n')
      }
      if (a == 15 && sign == '+' && b == 24) {
        rl.write('15 + 24 = 39\n')
      }
      if (a == 15 && sign == '+' && b == 25) {
        rl.write('15 + 25 = 40\n')
      }
      if (a == 15 && sign == '+' && b == 26) {
        rl.write('15 + 26 = 41\n')
      }
      if (a == 15 && sign == '+' && b == 27) {
        rl.write('15 + 27 = 42\n')
      }
      if (a == 15 && sign == '+' && b == 28) {
        rl.write('15 + 28 = 43\n')
      }
      if (a == 15 && sign == '+' && b == 29) {
        rl.write('15 + 29 = 44\n')
      }
      if (a == 15 && sign == '+' && b == 30) {
        rl.write('15 + 30 = 45\n')
      }
      if (a == 15 && sign == '+' && b == 31) {
        rl.write('15 + 31 = 46\n')
      }
      if (a == 15 && sign == '+' && b == 32) {
        rl.write('15 + 32 = 47\n')
      }
      if (a == 15 && sign == '+' && b == 33) {
        rl.write('15 + 33 = 48\n')
      }
      if (a == 15 && sign == '+' && b == 34) {
        rl.write('15 + 34 = 49\n')
      }
      if (a == 15 && sign == '+' && b == 35) {
        rl.write('15 + 35 = 50\n')
      }
      if (a == 15 && sign == '+' && b == 36) {
        rl.write('15 + 36 = 51\n')
      }
      if (a == 15 && sign == '+' && b == 37) {
        rl.write('15 + 37 = 52\n')
      }
      if (a == 15 && sign == '+' && b == 38) {
        rl.write('15 + 38 = 53\n')
      }
      if (a == 15 && sign == '+' && b == 39) {
        rl.write('15 + 39 = 54\n')
      }
      if (a == 15 && sign == '+' && b == 40) {
        rl.write('15 + 40 = 55\n')
      }
      if (a == 15 && sign == '+' && b == 41) {
        rl.write('15 + 41 = 56\n')
      }
      if (a == 15 && sign == '+' && b == 42) {
        rl.write('15 + 42 = 57\n')
      }
      if (a == 15 && sign == '+' && b == 43) {
        rl.write('15 + 43 = 58\n')
      }
      if (a == 15 && sign == '+' && b == 44) {
        rl.write('15 + 44 = 59\n')
      }
      if (a == 15 && sign == '+' && b == 45) {
        rl.write('15 + 45 = 60\n')
      }
      if (a == 15 && sign == '+' && b == 46) {
        rl.write('15 + 46 = 61\n')
      }
      if (a == 15 && sign == '+' && b == 47) {
        rl.write('15 + 47 = 62\n')
      }
      if (a == 15 && sign == '+' && b == 48) {
        rl.write('15 + 48 = 63\n')
      }
      if (a == 15 && sign == '+' && b == 49) {
        rl.write('15 + 49 = 64\n')
      }
      if (a == 15 && sign == '+' && b == 50) {
        rl.write('15 + 50 = 65\n')
      }
      if (a == 16 && sign == '+' && b == 0) {
        rl.write('16 + 0 = 16\n')
      }
      if (a == 16 && sign == '+' && b == 1) {
        rl.write('16 + 1 = 17\n')
      }
      if (a == 16 && sign == '+' && b == 2) {
        rl.write('16 + 2 = 18\n')
      }
      if (a == 16 && sign == '+' && b == 3) {
        rl.write('16 + 3 = 19\n')
      }
      if (a == 16 && sign == '+' && b == 4) {
        rl.write('16 + 4 = 20\n')
      }
      if (a == 16 && sign == '+' && b == 5) {
        rl.write('16 + 5 = 21\n')
      }
      if (a == 16 && sign == '+' && b == 6) {
        rl.write('16 + 6 = 22\n')
      }
      if (a == 16 && sign == '+' && b == 7) {
        rl.write('16 + 7 = 23\n')
      }
      if (a == 16 && sign == '+' && b == 8) {
        rl.write('16 + 8 = 24\n')
      }
      if (a == 16 && sign == '+' && b == 9) {
        rl.write('16 + 9 = 25\n')
      }
      if (a == 16 && sign == '+' && b == 10) {
        rl.write('16 + 10 = 26\n')
      }
      if (a == 16 && sign == '+' && b == 11) {
        rl.write('16 + 11 = 27\n')
      }
      if (a == 16 && sign == '+' && b == 12) {
        rl.write('16 + 12 = 28\n')
      }
      if (a == 16 && sign == '+' && b == 13) {
        rl.write('16 + 13 = 29\n')
      }
      if (a == 16 && sign == '+' && b == 14) {
        rl.write('16 + 14 = 30\n')
      }
      if (a == 16 && sign == '+' && b == 15) {
        rl.write('16 + 15 = 31\n')
      }
      if (a == 16 && sign == '+' && b == 16) {
        rl.write('16 + 16 = 32\n')
      }
      if (a == 16 && sign == '+' && b == 17) {
        rl.write('16 + 17 = 33\n')
      }
      if (a == 16 && sign == '+' && b == 18) {
        rl.write('16 + 18 = 34\n')
      }
      if (a == 16 && sign == '+' && b == 19) {
        rl.write('16 + 19 = 35\n')
      }
      if (a == 16 && sign == '+' && b == 20) {
        rl.write('16 + 20 = 36\n')
      }
      if (a == 16 && sign == '+' && b == 21) {
        rl.write('16 + 21 = 37\n')
      }
      if (a == 16 && sign == '+' && b == 22) {
        rl.write('16 + 22 = 38\n')
      }
      if (a == 16 && sign == '+' && b == 23) {
        rl.write('16 + 23 = 39\n')
      }
      if (a == 16 && sign == '+' && b == 24) {
        rl.write('16 + 24 = 40\n')
      }
      if (a == 16 && sign == '+' && b == 25) {
        rl.write('16 + 25 = 41\n')
      }
      if (a == 16 && sign == '+' && b == 26) {
        rl.write('16 + 26 = 42\n')
      }
      if (a == 16 && sign == '+' && b == 27) {
        rl.write('16 + 27 = 43\n')
      }
      if (a == 16 && sign == '+' && b == 28) {
        rl.write('16 + 28 = 44\n')
      }
      if (a == 16 && sign == '+' && b == 29) {
        rl.write('16 + 29 = 45\n')
      }
      if (a == 16 && sign == '+' && b == 30) {
        rl.write('16 + 30 = 46\n')
      }
      if (a == 16 && sign == '+' && b == 31) {
        rl.write('16 + 31 = 47\n')
      }
      if (a == 16 && sign == '+' && b == 32) {
        rl.write('16 + 32 = 48\n')
      }
      if (a == 16 && sign == '+' && b == 33) {
        rl.write('16 + 33 = 49\n')
      }
      if (a == 16 && sign == '+' && b == 34) {
        rl.write('16 + 34 = 50\n')
      }
      if (a == 16 && sign == '+' && b == 35) {
        rl.write('16 + 35 = 51\n')
      }
      if (a == 16 && sign == '+' && b == 36) {
        rl.write('16 + 36 = 52\n')
      }
      if (a == 16 && sign == '+' && b == 37) {
        rl.write('16 + 37 = 53\n')
      }
      if (a == 16 && sign == '+' && b == 38) {
        rl.write('16 + 38 = 54\n')
      }
      if (a == 16 && sign == '+' && b == 39) {
        rl.write('16 + 39 = 55\n')
      }
      if (a == 16 && sign == '+' && b == 40) {
        rl.write('16 + 40 = 56\n')
      }
      if (a == 16 && sign == '+' && b == 41) {
        rl.write('16 + 41 = 57\n')
      }
      if (a == 16 && sign == '+' && b == 42) {
        rl.write('16 + 42 = 58\n')
      }
      if (a == 16 && sign == '+' && b == 43) {
        rl.write('16 + 43 = 59\n')
      }
      if (a == 16 && sign == '+' && b == 44) {
        rl.write('16 + 44 = 60\n')
      }
      if (a == 16 && sign == '+' && b == 45) {
        rl.write('16 + 45 = 61\n')
      }
      if (a == 16 && sign == '+' && b == 46) {
        rl.write('16 + 46 = 62\n')
      }
      if (a == 16 && sign == '+' && b == 47) {
        rl.write('16 + 47 = 63\n')
      }
      if (a == 16 && sign == '+' && b == 48) {
        rl.write('16 + 48 = 64\n')
      }
      if (a == 16 && sign == '+' && b == 49) {
        rl.write('16 + 49 = 65\n')
      }
      if (a == 16 && sign == '+' && b == 50) {
        rl.write('16 + 50 = 66\n')
      }
      if (a == 17 && sign == '+' && b == 0) {
        rl.write('17 + 0 = 17\n')
      }
      if (a == 17 && sign == '+' && b == 1) {
        rl.write('17 + 1 = 18\n')
      }
      if (a == 17 && sign == '+' && b == 2) {
        rl.write('17 + 2 = 19\n')
      }
      if (a == 17 && sign == '+' && b == 3) {
        rl.write('17 + 3 = 20\n')
      }
      if (a == 17 && sign == '+' && b == 4) {
        rl.write('17 + 4 = 21\n')
      }
      if (a == 17 && sign == '+' && b == 5) {
        rl.write('17 + 5 = 22\n')
      }
      if (a == 17 && sign == '+' && b == 6) {
        rl.write('17 + 6 = 23\n')
      }
      if (a == 17 && sign == '+' && b == 7) {
        rl.write('17 + 7 = 24\n')
      }
      if (a == 17 && sign == '+' && b == 8) {
        rl.write('17 + 8 = 25\n')
      }
      if (a == 17 && sign == '+' && b == 9) {
        rl.write('17 + 9 = 26\n')
      }
      if (a == 17 && sign == '+' && b == 10) {
        rl.write('17 + 10 = 27\n')
      }
      if (a == 17 && sign == '+' && b == 11) {
        rl.write('17 + 11 = 28\n')
      }
      if (a == 17 && sign == '+' && b == 12) {
        rl.write('17 + 12 = 29\n')
      }
      if (a == 17 && sign == '+' && b == 13) {
        rl.write('17 + 13 = 30\n')
      }
      if (a == 17 && sign == '+' && b == 14) {
        rl.write('17 + 14 = 31\n')
      }
      if (a == 17 && sign == '+' && b == 15) {
        rl.write('17 + 15 = 32\n')
      }
      if (a == 17 && sign == '+' && b == 16) {
        rl.write('17 + 16 = 33\n')
      }
      if (a == 17 && sign == '+' && b == 17) {
        rl.write('17 + 17 = 34\n')
      }
      if (a == 17 && sign == '+' && b == 18) {
        rl.write('17 + 18 = 35\n')
      }
      if (a == 17 && sign == '+' && b == 19) {
        rl.write('17 + 19 = 36\n')
      }
      if (a == 17 && sign == '+' && b == 20) {
        rl.write('17 + 20 = 37\n')
      }
      if (a == 17 && sign == '+' && b == 21) {
        rl.write('17 + 21 = 38\n')
      }
      if (a == 17 && sign == '+' && b == 22) {
        rl.write('17 + 22 = 39\n')
      }
      if (a == 17 && sign == '+' && b == 23) {
        rl.write('17 + 23 = 40\n')
      }
      if (a == 17 && sign == '+' && b == 24) {
        rl.write('17 + 24 = 41\n')
      }
      if (a == 17 && sign == '+' && b == 25) {
        rl.write('17 + 25 = 42\n')
      }
      if (a == 17 && sign == '+' && b == 26) {
        rl.write('17 + 26 = 43\n')
      }
      if (a == 17 && sign == '+' && b == 27) {
        rl.write('17 + 27 = 44\n')
      }
      if (a == 17 && sign == '+' && b == 28) {
        rl.write('17 + 28 = 45\n')
      }
      if (a == 17 && sign == '+' && b == 29) {
        rl.write('17 + 29 = 46\n')
      }
      if (a == 17 && sign == '+' && b == 30) {
        rl.write('17 + 30 = 47\n')
      }
      if (a == 17 && sign == '+' && b == 31) {
        rl.write('17 + 31 = 48\n')
      }
      if (a == 17 && sign == '+' && b == 32) {
        rl.write('17 + 32 = 49\n')
      }
      if (a == 17 && sign == '+' && b == 33) {
        rl.write('17 + 33 = 50\n')
      }
      if (a == 17 && sign == '+' && b == 34) {
        rl.write('17 + 34 = 51\n')
      }
      if (a == 17 && sign == '+' && b == 35) {
        rl.write('17 + 35 = 52\n')
      }
      if (a == 17 && sign == '+' && b == 36) {
        rl.write('17 + 36 = 53\n')
      }
      if (a == 17 && sign == '+' && b == 37) {
        rl.write('17 + 37 = 54\n')
      }
      if (a == 17 && sign == '+' && b == 38) {
        rl.write('17 + 38 = 55\n')
      }
      if (a == 17 && sign == '+' && b == 39) {
        rl.write('17 + 39 = 56\n')
      }
      if (a == 17 && sign == '+' && b == 40) {
        rl.write('17 + 40 = 57\n')
      }
      if (a == 17 && sign == '+' && b == 41) {
        rl.write('17 + 41 = 58\n')
      }
      if (a == 17 && sign == '+' && b == 42) {
        rl.write('17 + 42 = 59\n')
      }
      if (a == 17 && sign == '+' && b == 43) {
        rl.write('17 + 43 = 60\n')
      }
      if (a == 17 && sign == '+' && b == 44) {
        rl.write('17 + 44 = 61\n')
      }
      if (a == 17 && sign == '+' && b == 45) {
        rl.write('17 + 45 = 62\n')
      }
      if (a == 17 && sign == '+' && b == 46) {
        rl.write('17 + 46 = 63\n')
      }
      if (a == 17 && sign == '+' && b == 47) {
        rl.write('17 + 47 = 64\n')
      }
      if (a == 17 && sign == '+' && b == 48) {
        rl.write('17 + 48 = 65\n')
      }
      if (a == 17 && sign == '+' && b == 49) {
        rl.write('17 + 49 = 66\n')
      }
      if (a == 17 && sign == '+' && b == 50) {
        rl.write('17 + 50 = 67\n')
      }
      if (a == 18 && sign == '+' && b == 0) {
        rl.write('18 + 0 = 18\n')
      }
      if (a == 18 && sign == '+' && b == 1) {
        rl.write('18 + 1 = 19\n')
      }
      if (a == 18 && sign == '+' && b == 2) {
        rl.write('18 + 2 = 20\n')
      }
      if (a == 18 && sign == '+' && b == 3) {
        rl.write('18 + 3 = 21\n')
      }
      if (a == 18 && sign == '+' && b == 4) {
        rl.write('18 + 4 = 22\n')
      }
      if (a == 18 && sign == '+' && b == 5) {
        rl.write('18 + 5 = 23\n')
      }
      if (a == 18 && sign == '+' && b == 6) {
        rl.write('18 + 6 = 24\n')
      }
      if (a == 18 && sign == '+' && b == 7) {
        rl.write('18 + 7 = 25\n')
      }
      if (a == 18 && sign == '+' && b == 8) {
        rl.write('18 + 8 = 26\n')
      }
      if (a == 18 && sign == '+' && b == 9) {
        rl.write('18 + 9 = 27\n')
      }
      if (a == 18 && sign == '+' && b == 10) {
        rl.write('18 + 10 = 28\n')
      }
      if (a == 18 && sign == '+' && b == 11) {
        rl.write('18 + 11 = 29\n')
      }
      if (a == 18 && sign == '+' && b == 12) {
        rl.write('18 + 12 = 30\n')
      }
      if (a == 18 && sign == '+' && b == 13) {
        rl.write('18 + 13 = 31\n')
      }
      if (a == 18 && sign == '+' && b == 14) {
        rl.write('18 + 14 = 32\n')
      }
      if (a == 18 && sign == '+' && b == 15) {
        rl.write('18 + 15 = 33\n')
      }
      if (a == 18 && sign == '+' && b == 16) {
        rl.write('18 + 16 = 34\n')
      }
      if (a == 18 && sign == '+' && b == 17) {
        rl.write('18 + 17 = 35\n')
      }
      if (a == 18 && sign == '+' && b == 18) {
        rl.write('18 + 18 = 36\n')
      }
      if (a == 18 && sign == '+' && b == 19) {
        rl.write('18 + 19 = 37\n')
      }
      if (a == 18 && sign == '+' && b == 20) {
        rl.write('18 + 20 = 38\n')
      }
      if (a == 18 && sign == '+' && b == 21) {
        rl.write('18 + 21 = 39\n')
      }
      if (a == 18 && sign == '+' && b == 22) {
        rl.write('18 + 22 = 40\n')
      }
      if (a == 18 && sign == '+' && b == 23) {
        rl.write('18 + 23 = 41\n')
      }
      if (a == 18 && sign == '+' && b == 24) {
        rl.write('18 + 24 = 42\n')
      }
      if (a == 18 && sign == '+' && b == 25) {
        rl.write('18 + 25 = 43\n')
      }
      if (a == 18 && sign == '+' && b == 26) {
        rl.write('18 + 26 = 44\n')
      }
      if (a == 18 && sign == '+' && b == 27) {
        rl.write('18 + 27 = 45\n')
      }
      if (a == 18 && sign == '+' && b == 28) {
        rl.write('18 + 28 = 46\n')
      }
      if (a == 18 && sign == '+' && b == 29) {
        rl.write('18 + 29 = 47\n')
      }
      if (a == 18 && sign == '+' && b == 30) {
        rl.write('18 + 30 = 48\n')
      }
      if (a == 18 && sign == '+' && b == 31) {
        rl.write('18 + 31 = 49\n')
      }
      if (a == 18 && sign == '+' && b == 32) {
        rl.write('18 + 32 = 50\n')
      }
      if (a == 18 && sign == '+' && b == 33) {
        rl.write('18 + 33 = 51\n')
      }
      if (a == 18 && sign == '+' && b == 34) {
        rl.write('18 + 34 = 52\n')
      }
      if (a == 18 && sign == '+' && b == 35) {
        rl.write('18 + 35 = 53\n')
      }
      if (a == 18 && sign == '+' && b == 36) {
        rl.write('18 + 36 = 54\n')
      }
      if (a == 18 && sign == '+' && b == 37) {
        rl.write('18 + 37 = 55\n')
      }
      if (a == 18 && sign == '+' && b == 38) {
        rl.write('18 + 38 = 56\n')
      }
      if (a == 18 && sign == '+' && b == 39) {
        rl.write('18 + 39 = 57\n')
      }
      if (a == 18 && sign == '+' && b == 40) {
        rl.write('18 + 40 = 58\n')
      }
      if (a == 18 && sign == '+' && b == 41) {
        rl.write('18 + 41 = 59\n')
      }
      if (a == 18 && sign == '+' && b == 42) {
        rl.write('18 + 42 = 60\n')
      }
      if (a == 18 && sign == '+' && b == 43) {
        rl.write('18 + 43 = 61\n')
      }
      if (a == 18 && sign == '+' && b == 44) {
        rl.write('18 + 44 = 62\n')
      }
      if (a == 18 && sign == '+' && b == 45) {
        rl.write('18 + 45 = 63\n')
      }
      if (a == 18 && sign == '+' && b == 46) {
        rl.write('18 + 46 = 64\n')
      }
      if (a == 18 && sign == '+' && b == 47) {
        rl.write('18 + 47 = 65\n')
      }
      if (a == 18 && sign == '+' && b == 48) {
        rl.write('18 + 48 = 66\n')
      }
      if (a == 18 && sign == '+' && b == 49) {
        rl.write('18 + 49 = 67\n')
      }
      if (a == 18 && sign == '+' && b == 50) {
        rl.write('18 + 50 = 68\n')
      }
      if (a == 19 && sign == '+' && b == 0) {
        rl.write('19 + 0 = 19\n')
      }
      if (a == 19 && sign == '+' && b == 1) {
        rl.write('19 + 1 = 20\n')
      }
      if (a == 19 && sign == '+' && b == 2) {
        rl.write('19 + 2 = 21\n')
      }
      if (a == 19 && sign == '+' && b == 3) {
        rl.write('19 + 3 = 22\n')
      }
      if (a == 19 && sign == '+' && b == 4) {
        rl.write('19 + 4 = 23\n')
      }
      if (a == 19 && sign == '+' && b == 5) {
        rl.write('19 + 5 = 24\n')
      }
      if (a == 19 && sign == '+' && b == 6) {
        rl.write('19 + 6 = 25\n')
      }
      if (a == 19 && sign == '+' && b == 7) {
        rl.write('19 + 7 = 26\n')
      }
      if (a == 19 && sign == '+' && b == 8) {
        rl.write('19 + 8 = 27\n')
      }
      if (a == 19 && sign == '+' && b == 9) {
        rl.write('19 + 9 = 28\n')
      }
      if (a == 19 && sign == '+' && b == 10) {
        rl.write('19 + 10 = 29\n')
      }
      if (a == 19 && sign == '+' && b == 11) {
        rl.write('19 + 11 = 30\n')
      }
      if (a == 19 && sign == '+' && b == 12) {
        rl.write('19 + 12 = 31\n')
      }
      if (a == 19 && sign == '+' && b == 13) {
        rl.write('19 + 13 = 32\n')
      }
      if (a == 19 && sign == '+' && b == 14) {
        rl.write('19 + 14 = 33\n')
      }
      if (a == 19 && sign == '+' && b == 15) {
        rl.write('19 + 15 = 34\n')
      }
      if (a == 19 && sign == '+' && b == 16) {
        rl.write('19 + 16 = 35\n')
      }
      if (a == 19 && sign == '+' && b == 17) {
        rl.write('19 + 17 = 36\n')
      }
      if (a == 19 && sign == '+' && b == 18) {
        rl.write('19 + 18 = 37\n')
      }
      if (a == 19 && sign == '+' && b == 19) {
        rl.write('19 + 19 = 38\n')
      }
      if (a == 19 && sign == '+' && b == 20) {
        rl.write('19 + 20 = 39\n')
      }
      if (a == 19 && sign == '+' && b == 21) {
        rl.write('19 + 21 = 40\n')
      }
      if (a == 19 && sign == '+' && b == 22) {
        rl.write('19 + 22 = 41\n')
      }
      if (a == 19 && sign == '+' && b == 23) {
        rl.write('19 + 23 = 42\n')
      }
      if (a == 19 && sign == '+' && b == 24) {
        rl.write('19 + 24 = 43\n')
      }
      if (a == 19 && sign == '+' && b == 25) {
        rl.write('19 + 25 = 44\n')
      }
      if (a == 19 && sign == '+' && b == 26) {
        rl.write('19 + 26 = 45\n')
      }
      if (a == 19 && sign == '+' && b == 27) {
        rl.write('19 + 27 = 46\n')
      }
      if (a == 19 && sign == '+' && b == 28) {
        rl.write('19 + 28 = 47\n')
      }
      if (a == 19 && sign == '+' && b == 29) {
        rl.write('19 + 29 = 48\n')
      }
      if (a == 19 && sign == '+' && b == 30) {
        rl.write('19 + 30 = 49\n')
      }
      if (a == 19 && sign == '+' && b == 31) {
        rl.write('19 + 31 = 50\n')
      }
      if (a == 19 && sign == '+' && b == 32) {
        rl.write('19 + 32 = 51\n')
      }
      if (a == 19 && sign == '+' && b == 33) {
        rl.write('19 + 33 = 52\n')
      }
      if (a == 19 && sign == '+' && b == 34) {
        rl.write('19 + 34 = 53\n')
      }
      if (a == 19 && sign == '+' && b == 35) {
        rl.write('19 + 35 = 54\n')
      }
      if (a == 19 && sign == '+' && b == 36) {
        rl.write('19 + 36 = 55\n')
      }
      if (a == 19 && sign == '+' && b == 37) {
        rl.write('19 + 37 = 56\n')
      }
      if (a == 19 && sign == '+' && b == 38) {
        rl.write('19 + 38 = 57\n')
      }
      if (a == 19 && sign == '+' && b == 39) {
        rl.write('19 + 39 = 58\n')
      }
      if (a == 19 && sign == '+' && b == 40) {
        rl.write('19 + 40 = 59\n')
      }
      if (a == 19 && sign == '+' && b == 41) {
        rl.write('19 + 41 = 60\n')
      }
      if (a == 19 && sign == '+' && b == 42) {
        rl.write('19 + 42 = 61\n')
      }
      if (a == 19 && sign == '+' && b == 43) {
        rl.write('19 + 43 = 62\n')
      }
      if (a == 19 && sign == '+' && b == 44) {
        rl.write('19 + 44 = 63\n')
      }
      if (a == 19 && sign == '+' && b == 45) {
        rl.write('19 + 45 = 64\n')
      }
      if (a == 19 && sign == '+' && b == 46) {
        rl.write('19 + 46 = 65\n')
      }
      if (a == 19 && sign == '+' && b == 47) {
        rl.write('19 + 47 = 66\n')
      }
      if (a == 19 && sign == '+' && b == 48) {
        rl.write('19 + 48 = 67\n')
      }
      if (a == 19 && sign == '+' && b == 49) {
        rl.write('19 + 49 = 68\n')
      }
      if (a == 19 && sign == '+' && b == 50) {
        rl.write('19 + 50 = 69\n')
      }
      if (a == 20 && sign == '+' && b == 0) {
        rl.write('20 + 0 = 20\n')
      }
      if (a == 20 && sign == '+' && b == 1) {
        rl.write('20 + 1 = 21\n')
      }
      if (a == 20 && sign == '+' && b == 2) {
        rl.write('20 + 2 = 22\n')
      }
      if (a == 20 && sign == '+' && b == 3) {
        rl.write('20 + 3 = 23\n')
      }
      if (a == 20 && sign == '+' && b == 4) {
        rl.write('20 + 4 = 24\n')
      }
      if (a == 20 && sign == '+' && b == 5) {
        rl.write('20 + 5 = 25\n')
      }
      if (a == 20 && sign == '+' && b == 6) {
        rl.write('20 + 6 = 26\n')
      }
      if (a == 20 && sign == '+' && b == 7) {
        rl.write('20 + 7 = 27\n')
      }
      if (a == 20 && sign == '+' && b == 8) {
        rl.write('20 + 8 = 28\n')
      }
      if (a == 20 && sign == '+' && b == 9) {
        rl.write('20 + 9 = 29\n')
      }
      if (a == 20 && sign == '+' && b == 10) {
        rl.write('20 + 10 = 30\n')
      }
      if (a == 20 && sign == '+' && b == 11) {
        rl.write('20 + 11 = 31\n')
      }
      if (a == 20 && sign == '+' && b == 12) {
        rl.write('20 + 12 = 32\n')
      }
      if (a == 20 && sign == '+' && b == 13) {
        rl.write('20 + 13 = 33\n')
      }
      if (a == 20 && sign == '+' && b == 14) {
        rl.write('20 + 14 = 34\n')
      }
      if (a == 20 && sign == '+' && b == 15) {
        rl.write('20 + 15 = 35\n')
      }
      if (a == 20 && sign == '+' && b == 16) {
        rl.write('20 + 16 = 36\n')
      }
      if (a == 20 && sign == '+' && b == 17) {
        rl.write('20 + 17 = 37\n')
      }
      if (a == 20 && sign == '+' && b == 18) {
        rl.write('20 + 18 = 38\n')
      }
      if (a == 20 && sign == '+' && b == 19) {
        rl.write('20 + 19 = 39\n')
      }
      if (a == 20 && sign == '+' && b == 20) {
        rl.write('20 + 20 = 40\n')
      }
      if (a == 20 && sign == '+' && b == 21) {
        rl.write('20 + 21 = 41\n')
      }
      if (a == 20 && sign == '+' && b == 22) {
        rl.write('20 + 22 = 42\n')
      }
      if (a == 20 && sign == '+' && b == 23) {
        rl.write('20 + 23 = 43\n')
      }
      if (a == 20 && sign == '+' && b == 24) {
        rl.write('20 + 24 = 44\n')
      }
      if (a == 20 && sign == '+' && b == 25) {
        rl.write('20 + 25 = 45\n')
      }
      if (a == 20 && sign == '+' && b == 26) {
        rl.write('20 + 26 = 46\n')
      }
      if (a == 20 && sign == '+' && b == 27) {
        rl.write('20 + 27 = 47\n')
      }
      if (a == 20 && sign == '+' && b == 28) {
        rl.write('20 + 28 = 48\n')
      }
      if (a == 20 && sign == '+' && b == 29) {
        rl.write('20 + 29 = 49\n')
      }
      if (a == 20 && sign == '+' && b == 30) {
        rl.write('20 + 30 = 50\n')
      }
      if (a == 20 && sign == '+' && b == 31) {
        rl.write('20 + 31 = 51\n')
      }
      if (a == 20 && sign == '+' && b == 32) {
        rl.write('20 + 32 = 52\n')
      }
      if (a == 20 && sign == '+' && b == 33) {
        rl.write('20 + 33 = 53\n')
      }
      if (a == 20 && sign == '+' && b == 34) {
        rl.write('20 + 34 = 54\n')
      }
      if (a == 20 && sign == '+' && b == 35) {
        rl.write('20 + 35 = 55\n')
      }
      if (a == 20 && sign == '+' && b == 36) {
        rl.write('20 + 36 = 56\n')
      }
      if (a == 20 && sign == '+' && b == 37) {
        rl.write('20 + 37 = 57\n')
      }
      if (a == 20 && sign == '+' && b == 38) {
        rl.write('20 + 38 = 58\n')
      }
      if (a == 20 && sign == '+' && b == 39) {
        rl.write('20 + 39 = 59\n')
      }
      if (a == 20 && sign == '+' && b == 40) {
        rl.write('20 + 40 = 60\n')
      }
      if (a == 20 && sign == '+' && b == 41) {
        rl.write('20 + 41 = 61\n')
      }
      if (a == 20 && sign == '+' && b == 42) {
        rl.write('20 + 42 = 62\n')
      }
      if (a == 20 && sign == '+' && b == 43) {
        rl.write('20 + 43 = 63\n')
      }
      if (a == 20 && sign == '+' && b == 44) {
        rl.write('20 + 44 = 64\n')
      }
      if (a == 20 && sign == '+' && b == 45) {
        rl.write('20 + 45 = 65\n')
      }
      if (a == 20 && sign == '+' && b == 46) {
        rl.write('20 + 46 = 66\n')
      }
      if (a == 20 && sign == '+' && b == 47) {
        rl.write('20 + 47 = 67\n')
      }
      if (a == 20 && sign == '+' && b == 48) {
        rl.write('20 + 48 = 68\n')
      }
      if (a == 20 && sign == '+' && b == 49) {
        rl.write('20 + 49 = 69\n')
      }
      if (a == 20 && sign == '+' && b == 50) {
        rl.write('20 + 50 = 70\n')
      }
      if (a == 21 && sign == '+' && b == 0) {
        rl.write('21 + 0 = 21\n')
      }
      if (a == 21 && sign == '+' && b == 1) {
        rl.write('21 + 1 = 22\n')
      }
      if (a == 21 && sign == '+' && b == 2) {
        rl.write('21 + 2 = 23\n')
      }
      if (a == 21 && sign == '+' && b == 3) {
        rl.write('21 + 3 = 24\n')
      }
      if (a == 21 && sign == '+' && b == 4) {
        rl.write('21 + 4 = 25\n')
      }
      if (a == 21 && sign == '+' && b == 5) {
        rl.write('21 + 5 = 26\n')
      }
      if (a == 21 && sign == '+' && b == 6) {
        rl.write('21 + 6 = 27\n')
      }
      if (a == 21 && sign == '+' && b == 7) {
        rl.write('21 + 7 = 28\n')
      }
      if (a == 21 && sign == '+' && b == 8) {
        rl.write('21 + 8 = 29\n')
      }
      if (a == 21 && sign == '+' && b == 9) {
        rl.write('21 + 9 = 30\n')
      }
      if (a == 21 && sign == '+' && b == 10) {
        rl.write('21 + 10 = 31\n')
      }
      if (a == 21 && sign == '+' && b == 11) {
        rl.write('21 + 11 = 32\n')
      }
      if (a == 21 && sign == '+' && b == 12) {
        rl.write('21 + 12 = 33\n')
      }
      if (a == 21 && sign == '+' && b == 13) {
        rl.write('21 + 13 = 34\n')
      }
      if (a == 21 && sign == '+' && b == 14) {
        rl.write('21 + 14 = 35\n')
      }
      if (a == 21 && sign == '+' && b == 15) {
        rl.write('21 + 15 = 36\n')
      }
      if (a == 21 && sign == '+' && b == 16) {
        rl.write('21 + 16 = 37\n')
      }
      if (a == 21 && sign == '+' && b == 17) {
        rl.write('21 + 17 = 38\n')
      }
      if (a == 21 && sign == '+' && b == 18) {
        rl.write('21 + 18 = 39\n')
      }
      if (a == 21 && sign == '+' && b == 19) {
        rl.write('21 + 19 = 40\n')
      }
      if (a == 21 && sign == '+' && b == 20) {
        rl.write('21 + 20 = 41\n')
      }
      if (a == 21 && sign == '+' && b == 21) {
        rl.write('21 + 21 = 42\n')
      }
      if (a == 21 && sign == '+' && b == 22) {
        rl.write('21 + 22 = 43\n')
      }
      if (a == 21 && sign == '+' && b == 23) {
        rl.write('21 + 23 = 44\n')
      }
      if (a == 21 && sign == '+' && b == 24) {
        rl.write('21 + 24 = 45\n')
      }
      if (a == 21 && sign == '+' && b == 25) {
        rl.write('21 + 25 = 46\n')
      }
      if (a == 21 && sign == '+' && b == 26) {
        rl.write('21 + 26 = 47\n')
      }
      if (a == 21 && sign == '+' && b == 27) {
        rl.write('21 + 27 = 48\n')
      }
      if (a == 21 && sign == '+' && b == 28) {
        rl.write('21 + 28 = 49\n')
      }
      if (a == 21 && sign == '+' && b == 29) {
        rl.write('21 + 29 = 50\n')
      }
      if (a == 21 && sign == '+' && b == 30) {
        rl.write('21 + 30 = 51\n')
      }
      if (a == 21 && sign == '+' && b == 31) {
        rl.write('21 + 31 = 52\n')
      }
      if (a == 21 && sign == '+' && b == 32) {
        rl.write('21 + 32 = 53\n')
      }
      if (a == 21 && sign == '+' && b == 33) {
        rl.write('21 + 33 = 54\n')
      }
      if (a == 21 && sign == '+' && b == 34) {
        rl.write('21 + 34 = 55\n')
      }
      if (a == 21 && sign == '+' && b == 35) {
        rl.write('21 + 35 = 56\n')
      }
      if (a == 21 && sign == '+' && b == 36) {
        rl.write('21 + 36 = 57\n')
      }
      if (a == 21 && sign == '+' && b == 37) {
        rl.write('21 + 37 = 58\n')
      }
      if (a == 21 && sign == '+' && b == 38) {
        rl.write('21 + 38 = 59\n')
      }
      if (a == 21 && sign == '+' && b == 39) {
        rl.write('21 + 39 = 60\n')
      }
      if (a == 21 && sign == '+' && b == 40) {
        rl.write('21 + 40 = 61\n')
      }
      if (a == 21 && sign == '+' && b == 41) {
        rl.write('21 + 41 = 62\n')
      }
      if (a == 21 && sign == '+' && b == 42) {
        rl.write('21 + 42 = 63\n')
      }
      if (a == 21 && sign == '+' && b == 43) {
        rl.write('21 + 43 = 64\n')
      }
      if (a == 21 && sign == '+' && b == 44) {
        rl.write('21 + 44 = 65\n')
      }
      if (a == 21 && sign == '+' && b == 45) {
        rl.write('21 + 45 = 66\n')
      }
      if (a == 21 && sign == '+' && b == 46) {
        rl.write('21 + 46 = 67\n')
      }
      if (a == 21 && sign == '+' && b == 47) {
        rl.write('21 + 47 = 68\n')
      }
      if (a == 21 && sign == '+' && b == 48) {
        rl.write('21 + 48 = 69\n')
      }
      if (a == 21 && sign == '+' && b == 49) {
        rl.write('21 + 49 = 70\n')
      }
      if (a == 21 && sign == '+' && b == 50) {
        rl.write('21 + 50 = 71\n')
      }
      if (a == 22 && sign == '+' && b == 0) {
        rl.write('22 + 0 = 22\n')
      }
      if (a == 22 && sign == '+' && b == 1) {
        rl.write('22 + 1 = 23\n')
      }
      if (a == 22 && sign == '+' && b == 2) {
        rl.write('22 + 2 = 24\n')
      }
      if (a == 22 && sign == '+' && b == 3) {
        rl.write('22 + 3 = 25\n')
      }
      if (a == 22 && sign == '+' && b == 4) {
        rl.write('22 + 4 = 26\n')
      }
      if (a == 22 && sign == '+' && b == 5) {
        rl.write('22 + 5 = 27\n')
      }
      if (a == 22 && sign == '+' && b == 6) {
        rl.write('22 + 6 = 28\n')
      }
      if (a == 22 && sign == '+' && b == 7) {
        rl.write('22 + 7 = 29\n')
      }
      if (a == 22 && sign == '+' && b == 8) {
        rl.write('22 + 8 = 30\n')
      }
      if (a == 22 && sign == '+' && b == 9) {
        rl.write('22 + 9 = 31\n')
      }
      if (a == 22 && sign == '+' && b == 10) {
        rl.write('22 + 10 = 32\n')
      }
      if (a == 22 && sign == '+' && b == 11) {
        rl.write('22 + 11 = 33\n')
      }
      if (a == 22 && sign == '+' && b == 12) {
        rl.write('22 + 12 = 34\n')
      }
      if (a == 22 && sign == '+' && b == 13) {
        rl.write('22 + 13 = 35\n')
      }
      if (a == 22 && sign == '+' && b == 14) {
        rl.write('22 + 14 = 36\n')
      }
      if (a == 22 && sign == '+' && b == 15) {
        rl.write('22 + 15 = 37\n')
      }
      if (a == 22 && sign == '+' && b == 16) {
        rl.write('22 + 16 = 38\n')
      }
      if (a == 22 && sign == '+' && b == 17) {
        rl.write('22 + 17 = 39\n')
      }
      if (a == 22 && sign == '+' && b == 18) {
        rl.write('22 + 18 = 40\n')
      }
      if (a == 22 && sign == '+' && b == 19) {
        rl.write('22 + 19 = 41\n')
      }
      if (a == 22 && sign == '+' && b == 20) {
        rl.write('22 + 20 = 42\n')
      }
      if (a == 22 && sign == '+' && b == 21) {
        rl.write('22 + 21 = 43\n')
      }
      if (a == 22 && sign == '+' && b == 22) {
        rl.write('22 + 22 = 44\n')
      }
      if (a == 22 && sign == '+' && b == 23) {
        rl.write('22 + 23 = 45\n')
      }
      if (a == 22 && sign == '+' && b == 24) {
        rl.write('22 + 24 = 46\n')
      }
      if (a == 22 && sign == '+' && b == 25) {
        rl.write('22 + 25 = 47\n')
      }
      if (a == 22 && sign == '+' && b == 26) {
        rl.write('22 + 26 = 48\n')
      }
      if (a == 22 && sign == '+' && b == 27) {
        rl.write('22 + 27 = 49\n')
      }
      if (a == 22 && sign == '+' && b == 28) {
        rl.write('22 + 28 = 50\n')
      }
      if (a == 22 && sign == '+' && b == 29) {
        rl.write('22 + 29 = 51\n')
      }
      if (a == 22 && sign == '+' && b == 30) {
        rl.write('22 + 30 = 52\n')
      }
      if (a == 22 && sign == '+' && b == 31) {
        rl.write('22 + 31 = 53\n')
      }
      if (a == 22 && sign == '+' && b == 32) {
        rl.write('22 + 32 = 54\n')
      }
      if (a == 22 && sign == '+' && b == 33) {
        rl.write('22 + 33 = 55\n')
      }
      if (a == 22 && sign == '+' && b == 34) {
        rl.write('22 + 34 = 56\n')
      }
      if (a == 22 && sign == '+' && b == 35) {
        rl.write('22 + 35 = 57\n')
      }
      if (a == 22 && sign == '+' && b == 36) {
        rl.write('22 + 36 = 58\n')
      }
      if (a == 22 && sign == '+' && b == 37) {
        rl.write('22 + 37 = 59\n')
      }
      if (a == 22 && sign == '+' && b == 38) {
        rl.write('22 + 38 = 60\n')
      }
      if (a == 22 && sign == '+' && b == 39) {
        rl.write('22 + 39 = 61\n')
      }
      if (a == 22 && sign == '+' && b == 40) {
        rl.write('22 + 40 = 62\n')
      }
      if (a == 22 && sign == '+' && b == 41) {
        rl.write('22 + 41 = 63\n')
      }
      if (a == 22 && sign == '+' && b == 42) {
        rl.write('22 + 42 = 64\n')
      }
      if (a == 22 && sign == '+' && b == 43) {
        rl.write('22 + 43 = 65\n')
      }
      if (a == 22 && sign == '+' && b == 44) {
        rl.write('22 + 44 = 66\n')
      }
      if (a == 22 && sign == '+' && b == 45) {
        rl.write('22 + 45 = 67\n')
      }
      if (a == 22 && sign == '+' && b == 46) {
        rl.write('22 + 46 = 68\n')
      }
      if (a == 22 && sign == '+' && b == 47) {
        rl.write('22 + 47 = 69\n')
      }
      if (a == 22 && sign == '+' && b == 48) {
        rl.write('22 + 48 = 70\n')
      }
      if (a == 22 && sign == '+' && b == 49) {
        rl.write('22 + 49 = 71\n')
      }
      if (a == 22 && sign == '+' && b == 50) {
        rl.write('22 + 50 = 72\n')
      }
      if (a == 23 && sign == '+' && b == 0) {
        rl.write('23 + 0 = 23\n')
      }
      if (a == 23 && sign == '+' && b == 1) {
        rl.write('23 + 1 = 24\n')
      }
      if (a == 23 && sign == '+' && b == 2) {
        rl.write('23 + 2 = 25\n')
      }
      if (a == 23 && sign == '+' && b == 3) {
        rl.write('23 + 3 = 26\n')
      }
      if (a == 23 && sign == '+' && b == 4) {
        rl.write('23 + 4 = 27\n')
      }
      if (a == 23 && sign == '+' && b == 5) {
        rl.write('23 + 5 = 28\n')
      }
      if (a == 23 && sign == '+' && b == 6) {
        rl.write('23 + 6 = 29\n')
      }
      if (a == 23 && sign == '+' && b == 7) {
        rl.write('23 + 7 = 30\n')
      }
      if (a == 23 && sign == '+' && b == 8) {
        rl.write('23 + 8 = 31\n')
      }
      if (a == 23 && sign == '+' && b == 9) {
        rl.write('23 + 9 = 32\n')
      }
      if (a == 23 && sign == '+' && b == 10) {
        rl.write('23 + 10 = 33\n')
      }
      if (a == 23 && sign == '+' && b == 11) {
        rl.write('23 + 11 = 34\n')
      }
      if (a == 23 && sign == '+' && b == 12) {
        rl.write('23 + 12 = 35\n')
      }
      if (a == 23 && sign == '+' && b == 13) {
        rl.write('23 + 13 = 36\n')
      }
      if (a == 23 && sign == '+' && b == 14) {
        rl.write('23 + 14 = 37\n')
      }
      if (a == 23 && sign == '+' && b == 15) {
        rl.write('23 + 15 = 38\n')
      }
      if (a == 23 && sign == '+' && b == 16) {
        rl.write('23 + 16 = 39\n')
      }
      if (a == 23 && sign == '+' && b == 17) {
        rl.write('23 + 17 = 40\n')
      }
      if (a == 23 && sign == '+' && b == 18) {
        rl.write('23 + 18 = 41\n')
      }
      if (a == 23 && sign == '+' && b == 19) {
        rl.write('23 + 19 = 42\n')
      }
      if (a == 23 && sign == '+' && b == 20) {
        rl.write('23 + 20 = 43\n')
      }
      if (a == 23 && sign == '+' && b == 21) {
        rl.write('23 + 21 = 44\n')
      }
      if (a == 23 && sign == '+' && b == 22) {
        rl.write('23 + 22 = 45\n')
      }
      if (a == 23 && sign == '+' && b == 23) {
        rl.write('23 + 23 = 46\n')
      }
      if (a == 23 && sign == '+' && b == 24) {
        rl.write('23 + 24 = 47\n')
      }
      if (a == 23 && sign == '+' && b == 25) {
        rl.write('23 + 25 = 48\n')
      }
      if (a == 23 && sign == '+' && b == 26) {
        rl.write('23 + 26 = 49\n')
      }
      if (a == 23 && sign == '+' && b == 27) {
        rl.write('23 + 27 = 50\n')
      }
      if (a == 23 && sign == '+' && b == 28) {
        rl.write('23 + 28 = 51\n')
      }
      if (a == 23 && sign == '+' && b == 29) {
        rl.write('23 + 29 = 52\n')
      }
      if (a == 23 && sign == '+' && b == 30) {
        rl.write('23 + 30 = 53\n')
      }
      if (a == 23 && sign == '+' && b == 31) {
        rl.write('23 + 31 = 54\n')
      }
      if (a == 23 && sign == '+' && b == 32) {
        rl.write('23 + 32 = 55\n')
      }
      if (a == 23 && sign == '+' && b == 33) {
        rl.write('23 + 33 = 56\n')
      }
      if (a == 23 && sign == '+' && b == 34) {
        rl.write('23 + 34 = 57\n')
      }
      if (a == 23 && sign == '+' && b == 35) {
        rl.write('23 + 35 = 58\n')
      }
      if (a == 23 && sign == '+' && b == 36) {
        rl.write('23 + 36 = 59\n')
      }
      if (a == 23 && sign == '+' && b == 37) {
        rl.write('23 + 37 = 60\n')
      }
      if (a == 23 && sign == '+' && b == 38) {
        rl.write('23 + 38 = 61\n')
      }
      if (a == 23 && sign == '+' && b == 39) {
        rl.write('23 + 39 = 62\n')
      }
      if (a == 23 && sign == '+' && b == 40) {
        rl.write('23 + 40 = 63\n')
      }
      if (a == 23 && sign == '+' && b == 41) {
        rl.write('23 + 41 = 64\n')
      }
      if (a == 23 && sign == '+' && b == 42) {
        rl.write('23 + 42 = 65\n')
      }
      if (a == 23 && sign == '+' && b == 43) {
        rl.write('23 + 43 = 66\n')
      }
      if (a == 23 && sign == '+' && b == 44) {
        rl.write('23 + 44 = 67\n')
      }
      if (a == 23 && sign == '+' && b == 45) {
        rl.write('23 + 45 = 68\n')
      }
      if (a == 23 && sign == '+' && b == 46) {
        rl.write('23 + 46 = 69\n')
      }
      if (a == 23 && sign == '+' && b == 47) {
        rl.write('23 + 47 = 70\n')
      }
      if (a == 23 && sign == '+' && b == 48) {
        rl.write('23 + 48 = 71\n')
      }
      if (a == 23 && sign == '+' && b == 49) {
        rl.write('23 + 49 = 72\n')
      }
      if (a == 23 && sign == '+' && b == 50) {
        rl.write('23 + 50 = 73\n')
      }
      if (a == 24 && sign == '+' && b == 0) {
        rl.write('24 + 0 = 24\n')
      }
      if (a == 24 && sign == '+' && b == 1) {
        rl.write('24 + 1 = 25\n')
      }
      if (a == 24 && sign == '+' && b == 2) {
        rl.write('24 + 2 = 26\n')
      }
      if (a == 24 && sign == '+' && b == 3) {
        rl.write('24 + 3 = 27\n')
      }
      if (a == 24 && sign == '+' && b == 4) {
        rl.write('24 + 4 = 28\n')
      }
      if (a == 24 && sign == '+' && b == 5) {
        rl.write('24 + 5 = 29\n')
      }
      if (a == 24 && sign == '+' && b == 6) {
        rl.write('24 + 6 = 30\n')
      }
      if (a == 24 && sign == '+' && b == 7) {
        rl.write('24 + 7 = 31\n')
      }
      if (a == 24 && sign == '+' && b == 8) {
        rl.write('24 + 8 = 32\n')
      }
      if (a == 24 && sign == '+' && b == 9) {
        rl.write('24 + 9 = 33\n')
      }
      if (a == 24 && sign == '+' && b == 10) {
        rl.write('24 + 10 = 34\n')
      }
      if (a == 24 && sign == '+' && b == 11) {
        rl.write('24 + 11 = 35\n')
      }
      if (a == 24 && sign == '+' && b == 12) {
        rl.write('24 + 12 = 36\n')
      }
      if (a == 24 && sign == '+' && b == 13) {
        rl.write('24 + 13 = 37\n')
      }
      if (a == 24 && sign == '+' && b == 14) {
        rl.write('24 + 14 = 38\n')
      }
      if (a == 24 && sign == '+' && b == 15) {
        rl.write('24 + 15 = 39\n')
      }
      if (a == 24 && sign == '+' && b == 16) {
        rl.write('24 + 16 = 40\n')
      }
      if (a == 24 && sign == '+' && b == 17) {
        rl.write('24 + 17 = 41\n')
      }
      if (a == 24 && sign == '+' && b == 18) {
        rl.write('24 + 18 = 42\n')
      }
      if (a == 24 && sign == '+' && b == 19) {
        rl.write('24 + 19 = 43\n')
      }
      if (a == 24 && sign == '+' && b == 20) {
        rl.write('24 + 20 = 44\n')
      }
      if (a == 24 && sign == '+' && b == 21) {
        rl.write('24 + 21 = 45\n')
      }
      if (a == 24 && sign == '+' && b == 22) {
        rl.write('24 + 22 = 46\n')
      }
      if (a == 24 && sign == '+' && b == 23) {
        rl.write('24 + 23 = 47\n')
      }
      if (a == 24 && sign == '+' && b == 24) {
        rl.write('24 + 24 = 48\n')
      }
      if (a == 24 && sign == '+' && b == 25) {
        rl.write('24 + 25 = 49\n')
      }
      if (a == 24 && sign == '+' && b == 26) {
        rl.write('24 + 26 = 50\n')
      }
      if (a == 24 && sign == '+' && b == 27) {
        rl.write('24 + 27 = 51\n')
      }
      if (a == 24 && sign == '+' && b == 28) {
        rl.write('24 + 28 = 52\n')
      }
      if (a == 24 && sign == '+' && b == 29) {
        rl.write('24 + 29 = 53\n')
      }
      if (a == 24 && sign == '+' && b == 30) {
        rl.write('24 + 30 = 54\n')
      }
      if (a == 24 && sign == '+' && b == 31) {
        rl.write('24 + 31 = 55\n')
      }
      if (a == 24 && sign == '+' && b == 32) {
        rl.write('24 + 32 = 56\n')
      }
      if (a == 24 && sign == '+' && b == 33) {
        rl.write('24 + 33 = 57\n')
      }
      if (a == 24 && sign == '+' && b == 34) {
        rl.write('24 + 34 = 58\n')
      }
      if (a == 24 && sign == '+' && b == 35) {
        rl.write('24 + 35 = 59\n')
      }
      if (a == 24 && sign == '+' && b == 36) {
        rl.write('24 + 36 = 60\n')
      }
      if (a == 24 && sign == '+' && b == 37) {
        rl.write('24 + 37 = 61\n')
      }
      if (a == 24 && sign == '+' && b == 38) {
        rl.write('24 + 38 = 62\n')
      }
      if (a == 24 && sign == '+' && b == 39) {
        rl.write('24 + 39 = 63\n')
      }
      if (a == 24 && sign == '+' && b == 40) {
        rl.write('24 + 40 = 64\n')
      }
      if (a == 24 && sign == '+' && b == 41) {
        rl.write('24 + 41 = 65\n')
      }
      if (a == 24 && sign == '+' && b == 42) {
        rl.write('24 + 42 = 66\n')
      }
      if (a == 24 && sign == '+' && b == 43) {
        rl.write('24 + 43 = 67\n')
      }
      if (a == 24 && sign == '+' && b == 44) {
        rl.write('24 + 44 = 68\n')
      }
      if (a == 24 && sign == '+' && b == 45) {
        rl.write('24 + 45 = 69\n')
      }
      if (a == 24 && sign == '+' && b == 46) {
        rl.write('24 + 46 = 70\n')
      }
      if (a == 24 && sign == '+' && b == 47) {
        rl.write('24 + 47 = 71\n')
      }
      if (a == 24 && sign == '+' && b == 48) {
        rl.write('24 + 48 = 72\n')
      }
      if (a == 24 && sign == '+' && b == 49) {
        rl.write('24 + 49 = 73\n')
      }
      if (a == 24 && sign == '+' && b == 50) {
        rl.write('24 + 50 = 74\n')
      }
      if (a == 25 && sign == '+' && b == 0) {
        rl.write('25 + 0 = 25\n')
      }
      if (a == 25 && sign == '+' && b == 1) {
        rl.write('25 + 1 = 26\n')
      }
      if (a == 25 && sign == '+' && b == 2) {
        rl.write('25 + 2 = 27\n')
      }
      if (a == 25 && sign == '+' && b == 3) {
        rl.write('25 + 3 = 28\n')
      }
      if (a == 25 && sign == '+' && b == 4) {
        rl.write('25 + 4 = 29\n')
      }
      if (a == 25 && sign == '+' && b == 5) {
        rl.write('25 + 5 = 30\n')
      }
      if (a == 25 && sign == '+' && b == 6) {
        rl.write('25 + 6 = 31\n')
      }
      if (a == 25 && sign == '+' && b == 7) {
        rl.write('25 + 7 = 32\n')
      }
      if (a == 25 && sign == '+' && b == 8) {
        rl.write('25 + 8 = 33\n')
      }
      if (a == 25 && sign == '+' && b == 9) {
        rl.write('25 + 9 = 34\n')
      }
      if (a == 25 && sign == '+' && b == 10) {
        rl.write('25 + 10 = 35\n')
      }
      if (a == 25 && sign == '+' && b == 11) {
        rl.write('25 + 11 = 36\n')
      }
      if (a == 25 && sign == '+' && b == 12) {
        rl.write('25 + 12 = 37\n')
      }
      if (a == 25 && sign == '+' && b == 13) {
        rl.write('25 + 13 = 38\n')
      }
      if (a == 25 && sign == '+' && b == 14) {
        rl.write('25 + 14 = 39\n')
      }
      if (a == 25 && sign == '+' && b == 15) {
        rl.write('25 + 15 = 40\n')
      }
      if (a == 25 && sign == '+' && b == 16) {
        rl.write('25 + 16 = 41\n')
      }
      if (a == 25 && sign == '+' && b == 17) {
        rl.write('25 + 17 = 42\n')
      }
      if (a == 25 && sign == '+' && b == 18) {
        rl.write('25 + 18 = 43\n')
      }
      if (a == 25 && sign == '+' && b == 19) {
        rl.write('25 + 19 = 44\n')
      }
      if (a == 25 && sign == '+' && b == 20) {
        rl.write('25 + 20 = 45\n')
      }
      if (a == 25 && sign == '+' && b == 21) {
        rl.write('25 + 21 = 46\n')
      }
      if (a == 25 && sign == '+' && b == 22) {
        rl.write('25 + 22 = 47\n')
      }
      if (a == 25 && sign == '+' && b == 23) {
        rl.write('25 + 23 = 48\n')
      }
      if (a == 25 && sign == '+' && b == 24) {
        rl.write('25 + 24 = 49\n')
      }
      if (a == 25 && sign == '+' && b == 25) {
        rl.write('25 + 25 = 50\n')
      }
      if (a == 25 && sign == '+' && b == 26) {
        rl.write('25 + 26 = 51\n')
      }
      if (a == 25 && sign == '+' && b == 27) {
        rl.write('25 + 27 = 52\n')
      }
      if (a == 25 && sign == '+' && b == 28) {
        rl.write('25 + 28 = 53\n')
      }
      if (a == 25 && sign == '+' && b == 29) {
        rl.write('25 + 29 = 54\n')
      }
      if (a == 25 && sign == '+' && b == 30) {
        rl.write('25 + 30 = 55\n')
      }
      if (a == 25 && sign == '+' && b == 31) {
        rl.write('25 + 31 = 56\n')
      }
      if (a == 25 && sign == '+' && b == 32) {
        rl.write('25 + 32 = 57\n')
      }
      if (a == 25 && sign == '+' && b == 33) {
        rl.write('25 + 33 = 58\n')
      }
      if (a == 25 && sign == '+' && b == 34) {
        rl.write('25 + 34 = 59\n')
      }
      if (a == 25 && sign == '+' && b == 35) {
        rl.write('25 + 35 = 60\n')
      }
      if (a == 25 && sign == '+' && b == 36) {
        rl.write('25 + 36 = 61\n')
      }
      if (a == 25 && sign == '+' && b == 37) {
        rl.write('25 + 37 = 62\n')
      }
      if (a == 25 && sign == '+' && b == 38) {
        rl.write('25 + 38 = 63\n')
      }
      if (a == 25 && sign == '+' && b == 39) {
        rl.write('25 + 39 = 64\n')
      }
      if (a == 25 && sign == '+' && b == 40) {
        rl.write('25 + 40 = 65\n')
      }
      if (a == 25 && sign == '+' && b == 41) {
        rl.write('25 + 41 = 66\n')
      }
      if (a == 25 && sign == '+' && b == 42) {
        rl.write('25 + 42 = 67\n')
      }
      if (a == 25 && sign == '+' && b == 43) {
        rl.write('25 + 43 = 68\n')
      }
      if (a == 25 && sign == '+' && b == 44) {
        rl.write('25 + 44 = 69\n')
      }
      if (a == 25 && sign == '+' && b == 45) {
        rl.write('25 + 45 = 70\n')
      }
      if (a == 25 && sign == '+' && b == 46) {
        rl.write('25 + 46 = 71\n')
      }
      if (a == 25 && sign == '+' && b == 47) {
        rl.write('25 + 47 = 72\n')
      }
      if (a == 25 && sign == '+' && b == 48) {
        rl.write('25 + 48 = 73\n')
      }
      if (a == 25 && sign == '+' && b == 49) {
        rl.write('25 + 49 = 74\n')
      }
      if (a == 25 && sign == '+' && b == 50) {
        rl.write('25 + 50 = 75\n')
      }
      if (a == 26 && sign == '+' && b == 0) {
        rl.write('26 + 0 = 26\n')
      }
      if (a == 26 && sign == '+' && b == 1) {
        rl.write('26 + 1 = 27\n')
      }
      if (a == 26 && sign == '+' && b == 2) {
        rl.write('26 + 2 = 28\n')
      }
      if (a == 26 && sign == '+' && b == 3) {
        rl.write('26 + 3 = 29\n')
      }
      if (a == 26 && sign == '+' && b == 4) {
        rl.write('26 + 4 = 30\n')
      }
      if (a == 26 && sign == '+' && b == 5) {
        rl.write('26 + 5 = 31\n')
      }
      if (a == 26 && sign == '+' && b == 6) {
        rl.write('26 + 6 = 32\n')
      }
      if (a == 26 && sign == '+' && b == 7) {
        rl.write('26 + 7 = 33\n')
      }
      if (a == 26 && sign == '+' && b == 8) {
        rl.write('26 + 8 = 34\n')
      }
      if (a == 26 && sign == '+' && b == 9) {
        rl.write('26 + 9 = 35\n')
      }
      if (a == 26 && sign == '+' && b == 10) {
        rl.write('26 + 10 = 36\n')
      }
      if (a == 26 && sign == '+' && b == 11) {
        rl.write('26 + 11 = 37\n')
      }
      if (a == 26 && sign == '+' && b == 12) {
        rl.write('26 + 12 = 38\n')
      }
      if (a == 26 && sign == '+' && b == 13) {
        rl.write('26 + 13 = 39\n')
      }
      if (a == 26 && sign == '+' && b == 14) {
        rl.write('26 + 14 = 40\n')
      }
      if (a == 26 && sign == '+' && b == 15) {
        rl.write('26 + 15 = 41\n')
      }
      if (a == 26 && sign == '+' && b == 16) {
        rl.write('26 + 16 = 42\n')
      }
      if (a == 26 && sign == '+' && b == 17) {
        rl.write('26 + 17 = 43\n')
      }
      if (a == 26 && sign == '+' && b == 18) {
        rl.write('26 + 18 = 44\n')
      }
      if (a == 26 && sign == '+' && b == 19) {
        rl.write('26 + 19 = 45\n')
      }
      if (a == 26 && sign == '+' && b == 20) {
        rl.write('26 + 20 = 46\n')
      }
      if (a == 26 && sign == '+' && b == 21) {
        rl.write('26 + 21 = 47\n')
      }
      if (a == 26 && sign == '+' && b == 22) {
        rl.write('26 + 22 = 48\n')
      }
      if (a == 26 && sign == '+' && b == 23) {
        rl.write('26 + 23 = 49\n')
      }
      if (a == 26 && sign == '+' && b == 24) {
        rl.write('26 + 24 = 50\n')
      }
      if (a == 26 && sign == '+' && b == 25) {
        rl.write('26 + 25 = 51\n')
      }
      if (a == 26 && sign == '+' && b == 26) {
        rl.write('26 + 26 = 52\n')
      }
      if (a == 26 && sign == '+' && b == 27) {
        rl.write('26 + 27 = 53\n')
      }
      if (a == 26 && sign == '+' && b == 28) {
        rl.write('26 + 28 = 54\n')
      }
      if (a == 26 && sign == '+' && b == 29) {
        rl.write('26 + 29 = 55\n')
      }
      if (a == 26 && sign == '+' && b == 30) {
        rl.write('26 + 30 = 56\n')
      }
      if (a == 26 && sign == '+' && b == 31) {
        rl.write('26 + 31 = 57\n')
      }
      if (a == 26 && sign == '+' && b == 32) {
        rl.write('26 + 32 = 58\n')
      }
      if (a == 26 && sign == '+' && b == 33) {
        rl.write('26 + 33 = 59\n')
      }
      if (a == 26 && sign == '+' && b == 34) {
        rl.write('26 + 34 = 60\n')
      }
      if (a == 26 && sign == '+' && b == 35) {
        rl.write('26 + 35 = 61\n')
      }
      if (a == 26 && sign == '+' && b == 36) {
        rl.write('26 + 36 = 62\n')
      }
      if (a == 26 && sign == '+' && b == 37) {
        rl.write('26 + 37 = 63\n')
      }
      if (a == 26 && sign == '+' && b == 38) {
        rl.write('26 + 38 = 64\n')
      }
      if (a == 26 && sign == '+' && b == 39) {
        rl.write('26 + 39 = 65\n')
      }
      if (a == 26 && sign == '+' && b == 40) {
        rl.write('26 + 40 = 66\n')
      }
      if (a == 26 && sign == '+' && b == 41) {
        rl.write('26 + 41 = 67\n')
      }
      if (a == 26 && sign == '+' && b == 42) {
        rl.write('26 + 42 = 68\n')
      }
      if (a == 26 && sign == '+' && b == 43) {
        rl.write('26 + 43 = 69\n')
      }
      if (a == 26 && sign == '+' && b == 44) {
        rl.write('26 + 44 = 70\n')
      }
      if (a == 26 && sign == '+' && b == 45) {
        rl.write('26 + 45 = 71\n')
      }
      if (a == 26 && sign == '+' && b == 46) {
        rl.write('26 + 46 = 72\n')
      }
      if (a == 26 && sign == '+' && b == 47) {
        rl.write('26 + 47 = 73\n')
      }
      if (a == 26 && sign == '+' && b == 48) {
        rl.write('26 + 48 = 74\n')
      }
      if (a == 26 && sign == '+' && b == 49) {
        rl.write('26 + 49 = 75\n')
      }
      if (a == 26 && sign == '+' && b == 50) {
        rl.write('26 + 50 = 76\n')
      }
      if (a == 27 && sign == '+' && b == 0) {
        rl.write('27 + 0 = 27\n')
      }
      if (a == 27 && sign == '+' && b == 1) {
        rl.write('27 + 1 = 28\n')
      }
      if (a == 27 && sign == '+' && b == 2) {
        rl.write('27 + 2 = 29\n')
      }
      if (a == 27 && sign == '+' && b == 3) {
        rl.write('27 + 3 = 30\n')
      }
      if (a == 27 && sign == '+' && b == 4) {
        rl.write('27 + 4 = 31\n')
      }
      if (a == 27 && sign == '+' && b == 5) {
        rl.write('27 + 5 = 32\n')
      }
      if (a == 27 && sign == '+' && b == 6) {
        rl.write('27 + 6 = 33\n')
      }
      if (a == 27 && sign == '+' && b == 7) {
        rl.write('27 + 7 = 34\n')
      }
      if (a == 27 && sign == '+' && b == 8) {
        rl.write('27 + 8 = 35\n')
      }
      if (a == 27 && sign == '+' && b == 9) {
        rl.write('27 + 9 = 36\n')
      }
      if (a == 27 && sign == '+' && b == 10) {
        rl.write('27 + 10 = 37\n')
      }
      if (a == 27 && sign == '+' && b == 11) {
        rl.write('27 + 11 = 38\n')
      }
      if (a == 27 && sign == '+' && b == 12) {
        rl.write('27 + 12 = 39\n')
      }
      if (a == 27 && sign == '+' && b == 13) {
        rl.write('27 + 13 = 40\n')
      }
      if (a == 27 && sign == '+' && b == 14) {
        rl.write('27 + 14 = 41\n')
      }
      if (a == 27 && sign == '+' && b == 15) {
        rl.write('27 + 15 = 42\n')
      }
      if (a == 27 && sign == '+' && b == 16) {
        rl.write('27 + 16 = 43\n')
      }
      if (a == 27 && sign == '+' && b == 17) {
        rl.write('27 + 17 = 44\n')
      }
      if (a == 27 && sign == '+' && b == 18) {
        rl.write('27 + 18 = 45\n')
      }
      if (a == 27 && sign == '+' && b == 19) {
        rl.write('27 + 19 = 46\n')
      }
      if (a == 27 && sign == '+' && b == 20) {
        rl.write('27 + 20 = 47\n')
      }
      if (a == 27 && sign == '+' && b == 21) {
        rl.write('27 + 21 = 48\n')
      }
      if (a == 27 && sign == '+' && b == 22) {
        rl.write('27 + 22 = 49\n')
      }
      if (a == 27 && sign == '+' && b == 23) {
        rl.write('27 + 23 = 50\n')
      }
      if (a == 27 && sign == '+' && b == 24) {
        rl.write('27 + 24 = 51\n')
      }
      if (a == 27 && sign == '+' && b == 25) {
        rl.write('27 + 25 = 52\n')
      }
      if (a == 27 && sign == '+' && b == 26) {
        rl.write('27 + 26 = 53\n')
      }
      if (a == 27 && sign == '+' && b == 27) {
        rl.write('27 + 27 = 54\n')
      }
      if (a == 27 && sign == '+' && b == 28) {
        rl.write('27 + 28 = 55\n')
      }
      if (a == 27 && sign == '+' && b == 29) {
        rl.write('27 + 29 = 56\n')
      }
      if (a == 27 && sign == '+' && b == 30) {
        rl.write('27 + 30 = 57\n')
      }
      if (a == 27 && sign == '+' && b == 31) {
        rl.write('27 + 31 = 58\n')
      }
      if (a == 27 && sign == '+' && b == 32) {
        rl.write('27 + 32 = 59\n')
      }
      if (a == 27 && sign == '+' && b == 33) {
        rl.write('27 + 33 = 60\n')
      }
      if (a == 27 && sign == '+' && b == 34) {
        rl.write('27 + 34 = 61\n')
      }
      if (a == 27 && sign == '+' && b == 35) {
        rl.write('27 + 35 = 62\n')
      }
      if (a == 27 && sign == '+' && b == 36) {
        rl.write('27 + 36 = 63\n')
      }
      if (a == 27 && sign == '+' && b == 37) {
        rl.write('27 + 37 = 64\n')
      }
      if (a == 27 && sign == '+' && b == 38) {
        rl.write('27 + 38 = 65\n')
      }
      if (a == 27 && sign == '+' && b == 39) {
        rl.write('27 + 39 = 66\n')
      }
      if (a == 27 && sign == '+' && b == 40) {
        rl.write('27 + 40 = 67\n')
      }
      if (a == 27 && sign == '+' && b == 41) {
        rl.write('27 + 41 = 68\n')
      }
      if (a == 27 && sign == '+' && b == 42) {
        rl.write('27 + 42 = 69\n')
      }
      if (a == 27 && sign == '+' && b == 43) {
        rl.write('27 + 43 = 70\n')
      }
      if (a == 27 && sign == '+' && b == 44) {
        rl.write('27 + 44 = 71\n')
      }
      if (a == 27 && sign == '+' && b == 45) {
        rl.write('27 + 45 = 72\n')
      }
      if (a == 27 && sign == '+' && b == 46) {
        rl.write('27 + 46 = 73\n')
      }
      if (a == 27 && sign == '+' && b == 47) {
        rl.write('27 + 47 = 74\n')
      }
      if (a == 27 && sign == '+' && b == 48) {
        rl.write('27 + 48 = 75\n')
      }
      if (a == 27 && sign == '+' && b == 49) {
        rl.write('27 + 49 = 76\n')
      }
      if (a == 27 && sign == '+' && b == 50) {
        rl.write('27 + 50 = 77\n')
      }
      if (a == 28 && sign == '+' && b == 0) {
        rl.write('28 + 0 = 28\n')
      }
      if (a == 28 && sign == '+' && b == 1) {
        rl.write('28 + 1 = 29\n')
      }
      if (a == 28 && sign == '+' && b == 2) {
        rl.write('28 + 2 = 30\n')
      }
      if (a == 28 && sign == '+' && b == 3) {
        rl.write('28 + 3 = 31\n')
      }
      if (a == 28 && sign == '+' && b == 4) {
        rl.write('28 + 4 = 32\n')
      }
      if (a == 28 && sign == '+' && b == 5) {
        rl.write('28 + 5 = 33\n')
      }
      if (a == 28 && sign == '+' && b == 6) {
        rl.write('28 + 6 = 34\n')
      }
      if (a == 28 && sign == '+' && b == 7) {
        rl.write('28 + 7 = 35\n')
      }
      if (a == 28 && sign == '+' && b == 8) {
        rl.write('28 + 8 = 36\n')
      }
      if (a == 28 && sign == '+' && b == 9) {
        rl.write('28 + 9 = 37\n')
      }
      if (a == 28 && sign == '+' && b == 10) {
        rl.write('28 + 10 = 38\n')
      }
      if (a == 28 && sign == '+' && b == 11) {
        rl.write('28 + 11 = 39\n')
      }
      if (a == 28 && sign == '+' && b == 12) {
        rl.write('28 + 12 = 40\n')
      }
      if (a == 28 && sign == '+' && b == 13) {
        rl.write('28 + 13 = 41\n')
      }
      if (a == 28 && sign == '+' && b == 14) {
        rl.write('28 + 14 = 42\n')
      }
      if (a == 28 && sign == '+' && b == 15) {
        rl.write('28 + 15 = 43\n')
      }
      if (a == 28 && sign == '+' && b == 16) {
        rl.write('28 + 16 = 44\n')
      }
      if (a == 28 && sign == '+' && b == 17) {
        rl.write('28 + 17 = 45\n')
      }
      if (a == 28 && sign == '+' && b == 18) {
        rl.write('28 + 18 = 46\n')
      }
      if (a == 28 && sign == '+' && b == 19) {
        rl.write('28 + 19 = 47\n')
      }
      if (a == 28 && sign == '+' && b == 20) {
        rl.write('28 + 20 = 48\n')
      }
      if (a == 28 && sign == '+' && b == 21) {
        rl.write('28 + 21 = 49\n')
      }
      if (a == 28 && sign == '+' && b == 22) {
        rl.write('28 + 22 = 50\n')
      }
      if (a == 28 && sign == '+' && b == 23) {
        rl.write('28 + 23 = 51\n')
      }
      if (a == 28 && sign == '+' && b == 24) {
        rl.write('28 + 24 = 52\n')
      }
      if (a == 28 && sign == '+' && b == 25) {
        rl.write('28 + 25 = 53\n')
      }
      if (a == 28 && sign == '+' && b == 26) {
        rl.write('28 + 26 = 54\n')
      }
      if (a == 28 && sign == '+' && b == 27) {
        rl.write('28 + 27 = 55\n')
      }
      if (a == 28 && sign == '+' && b == 28) {
        rl.write('28 + 28 = 56\n')
      }
      if (a == 28 && sign == '+' && b == 29) {
        rl.write('28 + 29 = 57\n')
      }
      if (a == 28 && sign == '+' && b == 30) {
        rl.write('28 + 30 = 58\n')
      }
      if (a == 28 && sign == '+' && b == 31) {
        rl.write('28 + 31 = 59\n')
      }
      if (a == 28 && sign == '+' && b == 32) {
        rl.write('28 + 32 = 60\n')
      }
      if (a == 28 && sign == '+' && b == 33) {
        rl.write('28 + 33 = 61\n')
      }
      if (a == 28 && sign == '+' && b == 34) {
        rl.write('28 + 34 = 62\n')
      }
      if (a == 28 && sign == '+' && b == 35) {
        rl.write('28 + 35 = 63\n')
      }
      if (a == 28 && sign == '+' && b == 36) {
        rl.write('28 + 36 = 64\n')
      }
      if (a == 28 && sign == '+' && b == 37) {
        rl.write('28 + 37 = 65\n')
      }
      if (a == 28 && sign == '+' && b == 38) {
        rl.write('28 + 38 = 66\n')
      }
      if (a == 28 && sign == '+' && b == 39) {
        rl.write('28 + 39 = 67\n')
      }
      if (a == 28 && sign == '+' && b == 40) {
        rl.write('28 + 40 = 68\n')
      }
      if (a == 28 && sign == '+' && b == 41) {
        rl.write('28 + 41 = 69\n')
      }
      if (a == 28 && sign == '+' && b == 42) {
        rl.write('28 + 42 = 70\n')
      }
      if (a == 28 && sign == '+' && b == 43) {
        rl.write('28 + 43 = 71\n')
      }
      if (a == 28 && sign == '+' && b == 44) {
        rl.write('28 + 44 = 72\n')
      }
      if (a == 28 && sign == '+' && b == 45) {
        rl.write('28 + 45 = 73\n')
      }
      if (a == 28 && sign == '+' && b == 46) {
        rl.write('28 + 46 = 74\n')
      }
      if (a == 28 && sign == '+' && b == 47) {
        rl.write('28 + 47 = 75\n')
      }
      if (a == 28 && sign == '+' && b == 48) {
        rl.write('28 + 48 = 76\n')
      }
      if (a == 28 && sign == '+' && b == 49) {
        rl.write('28 + 49 = 77\n')
      }
      if (a == 28 && sign == '+' && b == 50) {
        rl.write('28 + 50 = 78\n')
      }
      if (a == 29 && sign == '+' && b == 0) {
        rl.write('29 + 0 = 29\n')
      }
      if (a == 29 && sign == '+' && b == 1) {
        rl.write('29 + 1 = 30\n')
      }
      if (a == 29 && sign == '+' && b == 2) {
        rl.write('29 + 2 = 31\n')
      }
      if (a == 29 && sign == '+' && b == 3) {
        rl.write('29 + 3 = 32\n')
      }
      if (a == 29 && sign == '+' && b == 4) {
        rl.write('29 + 4 = 33\n')
      }
      if (a == 29 && sign == '+' && b == 5) {
        rl.write('29 + 5 = 34\n')
      }
      if (a == 29 && sign == '+' && b == 6) {
        rl.write('29 + 6 = 35\n')
      }
      if (a == 29 && sign == '+' && b == 7) {
        rl.write('29 + 7 = 36\n')
      }
      if (a == 29 && sign == '+' && b == 8) {
        rl.write('29 + 8 = 37\n')
      }
      if (a == 29 && sign == '+' && b == 9) {
        rl.write('29 + 9 = 38\n')
      }
      if (a == 29 && sign == '+' && b == 10) {
        rl.write('29 + 10 = 39\n')
      }
      if (a == 29 && sign == '+' && b == 11) {
        rl.write('29 + 11 = 40\n')
      }
      if (a == 29 && sign == '+' && b == 12) {
        rl.write('29 + 12 = 41\n')
      }
      if (a == 29 && sign == '+' && b == 13) {
        rl.write('29 + 13 = 42\n')
      }
      if (a == 29 && sign == '+' && b == 14) {
        rl.write('29 + 14 = 43\n')
      }
      if (a == 29 && sign == '+' && b == 15) {
        rl.write('29 + 15 = 44\n')
      }
      if (a == 29 && sign == '+' && b == 16) {
        rl.write('29 + 16 = 45\n')
      }
      if (a == 29 && sign == '+' && b == 17) {
        rl.write('29 + 17 = 46\n')
      }
      if (a == 29 && sign == '+' && b == 18) {
        rl.write('29 + 18 = 47\n')
      }
      if (a == 29 && sign == '+' && b == 19) {
        rl.write('29 + 19 = 48\n')
      }
      if (a == 29 && sign == '+' && b == 20) {
        rl.write('29 + 20 = 49\n')
      }
      if (a == 29 && sign == '+' && b == 21) {
        rl.write('29 + 21 = 50\n')
      }
      if (a == 29 && sign == '+' && b == 22) {
        rl.write('29 + 22 = 51\n')
      }
      if (a == 29 && sign == '+' && b == 23) {
        rl.write('29 + 23 = 52\n')
      }
      if (a == 29 && sign == '+' && b == 24) {
        rl.write('29 + 24 = 53\n')
      }
      if (a == 29 && sign == '+' && b == 25) {
        rl.write('29 + 25 = 54\n')
      }
      if (a == 29 && sign == '+' && b == 26) {
        rl.write('29 + 26 = 55\n')
      }
      if (a == 29 && sign == '+' && b == 27) {
        rl.write('29 + 27 = 56\n')
      }
      if (a == 29 && sign == '+' && b == 28) {
        rl.write('29 + 28 = 57\n')
      }
      if (a == 29 && sign == '+' && b == 29) {
        rl.write('29 + 29 = 58\n')
      }
      if (a == 29 && sign == '+' && b == 30) {
        rl.write('29 + 30 = 59\n')
      }
      if (a == 29 && sign == '+' && b == 31) {
        rl.write('29 + 31 = 60\n')
      }
      if (a == 29 && sign == '+' && b == 32) {
        rl.write('29 + 32 = 61\n')
      }
      if (a == 29 && sign == '+' && b == 33) {
        rl.write('29 + 33 = 62\n')
      }
      if (a == 29 && sign == '+' && b == 34) {
        rl.write('29 + 34 = 63\n')
      }
      if (a == 29 && sign == '+' && b == 35) {
        rl.write('29 + 35 = 64\n')
      }
      if (a == 29 && sign == '+' && b == 36) {
        rl.write('29 + 36 = 65\n')
      }
      if (a == 29 && sign == '+' && b == 37) {
        rl.write('29 + 37 = 66\n')
      }
      if (a == 29 && sign == '+' && b == 38) {
        rl.write('29 + 38 = 67\n')
      }
      if (a == 29 && sign == '+' && b == 39) {
        rl.write('29 + 39 = 68\n')
      }
      if (a == 29 && sign == '+' && b == 40) {
        rl.write('29 + 40 = 69\n')
      }
      if (a == 29 && sign == '+' && b == 41) {
        rl.write('29 + 41 = 70\n')
      }
      if (a == 29 && sign == '+' && b == 42) {
        rl.write('29 + 42 = 71\n')
      }
      if (a == 29 && sign == '+' && b == 43) {
        rl.write('29 + 43 = 72\n')
      }
      if (a == 29 && sign == '+' && b == 44) {
        rl.write('29 + 44 = 73\n')
      }
      if (a == 29 && sign == '+' && b == 45) {
        rl.write('29 + 45 = 74\n')
      }
      if (a == 29 && sign == '+' && b == 46) {
        rl.write('29 + 46 = 75\n')
      }
      if (a == 29 && sign == '+' && b == 47) {
        rl.write('29 + 47 = 76\n')
      }
      if (a == 29 && sign == '+' && b == 48) {
        rl.write('29 + 48 = 77\n')
      }
      if (a == 29 && sign == '+' && b == 49) {
        rl.write('29 + 49 = 78\n')
      }
      if (a == 29 && sign == '+' && b == 50) {
        rl.write('29 + 50 = 79\n')
      }
      if (a == 30 && sign == '+' && b == 0) {
        rl.write('30 + 0 = 30\n')
      }
      if (a == 30 && sign == '+' && b == 1) {
        rl.write('30 + 1 = 31\n')
      }
      if (a == 30 && sign == '+' && b == 2) {
        rl.write('30 + 2 = 32\n')
      }
      if (a == 30 && sign == '+' && b == 3) {
        rl.write('30 + 3 = 33\n')
      }
      if (a == 30 && sign == '+' && b == 4) {
        rl.write('30 + 4 = 34\n')
      }
      if (a == 30 && sign == '+' && b == 5) {
        rl.write('30 + 5 = 35\n')
      }
      if (a == 30 && sign == '+' && b == 6) {
        rl.write('30 + 6 = 36\n')
      }
      if (a == 30 && sign == '+' && b == 7) {
        rl.write('30 + 7 = 37\n')
      }
      if (a == 30 && sign == '+' && b == 8) {
        rl.write('30 + 8 = 38\n')
      }
      if (a == 30 && sign == '+' && b == 9) {
        rl.write('30 + 9 = 39\n')
      }
      if (a == 30 && sign == '+' && b == 10) {
        rl.write('30 + 10 = 40\n')
      }
      if (a == 30 && sign == '+' && b == 11) {
        rl.write('30 + 11 = 41\n')
      }
      if (a == 30 && sign == '+' && b == 12) {
        rl.write('30 + 12 = 42\n')
      }
      if (a == 30 && sign == '+' && b == 13) {
        rl.write('30 + 13 = 43\n')
      }
      if (a == 30 && sign == '+' && b == 14) {
        rl.write('30 + 14 = 44\n')
      }
      if (a == 30 && sign == '+' && b == 15) {
        rl.write('30 + 15 = 45\n')
      }
      if (a == 30 && sign == '+' && b == 16) {
        rl.write('30 + 16 = 46\n')
      }
      if (a == 30 && sign == '+' && b == 17) {
        rl.write('30 + 17 = 47\n')
      }
      if (a == 30 && sign == '+' && b == 18) {
        rl.write('30 + 18 = 48\n')
      }
      if (a == 30 && sign == '+' && b == 19) {
        rl.write('30 + 19 = 49\n')
      }
      if (a == 30 && sign == '+' && b == 20) {
        rl.write('30 + 20 = 50\n')
      }
      if (a == 30 && sign == '+' && b == 21) {
        rl.write('30 + 21 = 51\n')
      }
      if (a == 30 && sign == '+' && b == 22) {
        rl.write('30 + 22 = 52\n')
      }
      if (a == 30 && sign == '+' && b == 23) {
        rl.write('30 + 23 = 53\n')
      }
      if (a == 30 && sign == '+' && b == 24) {
        rl.write('30 + 24 = 54\n')
      }
      if (a == 30 && sign == '+' && b == 25) {
        rl.write('30 + 25 = 55\n')
      }
      if (a == 30 && sign == '+' && b == 26) {
        rl.write('30 + 26 = 56\n')
      }
      if (a == 30 && sign == '+' && b == 27) {
        rl.write('30 + 27 = 57\n')
      }
      if (a == 30 && sign == '+' && b == 28) {
        rl.write('30 + 28 = 58\n')
      }
      if (a == 30 && sign == '+' && b == 29) {
        rl.write('30 + 29 = 59\n')
      }
      if (a == 30 && sign == '+' && b == 30) {
        rl.write('30 + 30 = 60\n')
      }
      if (a == 30 && sign == '+' && b == 31) {
        rl.write('30 + 31 = 61\n')
      }
      if (a == 30 && sign == '+' && b == 32) {
        rl.write('30 + 32 = 62\n')
      }
      if (a == 30 && sign == '+' && b == 33) {
        rl.write('30 + 33 = 63\n')
      }
      if (a == 30 && sign == '+' && b == 34) {
        rl.write('30 + 34 = 64\n')
      }
      if (a == 30 && sign == '+' && b == 35) {
        rl.write('30 + 35 = 65\n')
      }
      if (a == 30 && sign == '+' && b == 36) {
        rl.write('30 + 36 = 66\n')
      }
      if (a == 30 && sign == '+' && b == 37) {
        rl.write('30 + 37 = 67\n')
      }
      if (a == 30 && sign == '+' && b == 38) {
        rl.write('30 + 38 = 68\n')
      }
      if (a == 30 && sign == '+' && b == 39) {
        rl.write('30 + 39 = 69\n')
      }
      if (a == 30 && sign == '+' && b == 40) {
        rl.write('30 + 40 = 70\n')
      }
      if (a == 30 && sign == '+' && b == 41) {
        rl.write('30 + 41 = 71\n')
      }
      if (a == 30 && sign == '+' && b == 42) {
        rl.write('30 + 42 = 72\n')
      }
      if (a == 30 && sign == '+' && b == 43) {
        rl.write('30 + 43 = 73\n')
      }
      if (a == 30 && sign == '+' && b == 44) {
        rl.write('30 + 44 = 74\n')
      }
      if (a == 30 && sign == '+' && b == 45) {
        rl.write('30 + 45 = 75\n')
      }
      if (a == 30 && sign == '+' && b == 46) {
        rl.write('30 + 46 = 76\n')
      }
      if (a == 30 && sign == '+' && b == 47) {
        rl.write('30 + 47 = 77\n')
      }
      if (a == 30 && sign == '+' && b == 48) {
        rl.write('30 + 48 = 78\n')
      }
      if (a == 30 && sign == '+' && b == 49) {
        rl.write('30 + 49 = 79\n')
      }
      if (a == 30 && sign == '+' && b == 50) {
        rl.write('30 + 50 = 80\n')
      }
      if (a == 31 && sign == '+' && b == 0) {
        rl.write('31 + 0 = 31\n')
      }
      if (a == 31 && sign == '+' && b == 1) {
        rl.write('31 + 1 = 32\n')
      }
      if (a == 31 && sign == '+' && b == 2) {
        rl.write('31 + 2 = 33\n')
      }
      if (a == 31 && sign == '+' && b == 3) {
        rl.write('31 + 3 = 34\n')
      }
      if (a == 31 && sign == '+' && b == 4) {
        rl.write('31 + 4 = 35\n')
      }
      if (a == 31 && sign == '+' && b == 5) {
        rl.write('31 + 5 = 36\n')
      }
      if (a == 31 && sign == '+' && b == 6) {
        rl.write('31 + 6 = 37\n')
      }
      if (a == 31 && sign == '+' && b == 7) {
        rl.write('31 + 7 = 38\n')
      }
      if (a == 31 && sign == '+' && b == 8) {
        rl.write('31 + 8 = 39\n')
      }
      if (a == 31 && sign == '+' && b == 9) {
        rl.write('31 + 9 = 40\n')
      }
      if (a == 31 && sign == '+' && b == 10) {
        rl.write('31 + 10 = 41\n')
      }
      if (a == 31 && sign == '+' && b == 11) {
        rl.write('31 + 11 = 42\n')
      }
      if (a == 31 && sign == '+' && b == 12) {
        rl.write('31 + 12 = 43\n')
      }
      if (a == 31 && sign == '+' && b == 13) {
        rl.write('31 + 13 = 44\n')
      }
      if (a == 31 && sign == '+' && b == 14) {
        rl.write('31 + 14 = 45\n')
      }
      if (a == 31 && sign == '+' && b == 15) {
        rl.write('31 + 15 = 46\n')
      }
      if (a == 31 && sign == '+' && b == 16) {
        rl.write('31 + 16 = 47\n')
      }
      if (a == 31 && sign == '+' && b == 17) {
        rl.write('31 + 17 = 48\n')
      }
      if (a == 31 && sign == '+' && b == 18) {
        rl.write('31 + 18 = 49\n')
      }
      if (a == 31 && sign == '+' && b == 19) {
        rl.write('31 + 19 = 50\n')
      }
      if (a == 31 && sign == '+' && b == 20) {
        rl.write('31 + 20 = 51\n')
      }
      if (a == 31 && sign == '+' && b == 21) {
        rl.write('31 + 21 = 52\n')
      }
      if (a == 31 && sign == '+' && b == 22) {
        rl.write('31 + 22 = 53\n')
      }
      if (a == 31 && sign == '+' && b == 23) {
        rl.write('31 + 23 = 54\n')
      }
      if (a == 31 && sign == '+' && b == 24) {
        rl.write('31 + 24 = 55\n')
      }
      if (a == 31 && sign == '+' && b == 25) {
        rl.write('31 + 25 = 56\n')
      }
      if (a == 31 && sign == '+' && b == 26) {
        rl.write('31 + 26 = 57\n')
      }
      if (a == 31 && sign == '+' && b == 27) {
        rl.write('31 + 27 = 58\n')
      }
      if (a == 31 && sign == '+' && b == 28) {
        rl.write('31 + 28 = 59\n')
      }
      if (a == 31 && sign == '+' && b == 29) {
        rl.write('31 + 29 = 60\n')
      }
      if (a == 31 && sign == '+' && b == 30) {
        rl.write('31 + 30 = 61\n')
      }
      if (a == 31 && sign == '+' && b == 31) {
        rl.write('31 + 31 = 62\n')
      }
      if (a == 31 && sign == '+' && b == 32) {
        rl.write('31 + 32 = 63\n')
      }
      if (a == 31 && sign == '+' && b == 33) {
        rl.write('31 + 33 = 64\n')
      }
      if (a == 31 && sign == '+' && b == 34) {
        rl.write('31 + 34 = 65\n')
      }
      if (a == 31 && sign == '+' && b == 35) {
        rl.write('31 + 35 = 66\n')
      }
      if (a == 31 && sign == '+' && b == 36) {
        rl.write('31 + 36 = 67\n')
      }
      if (a == 31 && sign == '+' && b == 37) {
        rl.write('31 + 37 = 68\n')
      }
      if (a == 31 && sign == '+' && b == 38) {
        rl.write('31 + 38 = 69\n')
      }
      if (a == 31 && sign == '+' && b == 39) {
        rl.write('31 + 39 = 70\n')
      }
      if (a == 31 && sign == '+' && b == 40) {
        rl.write('31 + 40 = 71\n')
      }
      if (a == 31 && sign == '+' && b == 41) {
        rl.write('31 + 41 = 72\n')
      }
      if (a == 31 && sign == '+' && b == 42) {
        rl.write('31 + 42 = 73\n')
      }
      if (a == 31 && sign == '+' && b == 43) {
        rl.write('31 + 43 = 74\n')
      }
      if (a == 31 && sign == '+' && b == 44) {
        rl.write('31 + 44 = 75\n')
      }
      if (a == 31 && sign == '+' && b == 45) {
        rl.write('31 + 45 = 76\n')
      }
      if (a == 31 && sign == '+' && b == 46) {
        rl.write('31 + 46 = 77\n')
      }
      if (a == 31 && sign == '+' && b == 47) {
        rl.write('31 + 47 = 78\n')
      }
      if (a == 31 && sign == '+' && b == 48) {
        rl.write('31 + 48 = 79\n')
      }
      if (a == 31 && sign == '+' && b == 49) {
        rl.write('31 + 49 = 80\n')
      }
      if (a == 31 && sign == '+' && b == 50) {
        rl.write('31 + 50 = 81\n')
      }
      if (a == 32 && sign == '+' && b == 0) {
        rl.write('32 + 0 = 32\n')
      }
      if (a == 32 && sign == '+' && b == 1) {
        rl.write('32 + 1 = 33\n')
      }
      if (a == 32 && sign == '+' && b == 2) {
        rl.write('32 + 2 = 34\n')
      }
      if (a == 32 && sign == '+' && b == 3) {
        rl.write('32 + 3 = 35\n')
      }
      if (a == 32 && sign == '+' && b == 4) {
        rl.write('32 + 4 = 36\n')
      }
      if (a == 32 && sign == '+' && b == 5) {
        rl.write('32 + 5 = 37\n')
      }
      if (a == 32 && sign == '+' && b == 6) {
        rl.write('32 + 6 = 38\n')
      }
      if (a == 32 && sign == '+' && b == 7) {
        rl.write('32 + 7 = 39\n')
      }
      if (a == 32 && sign == '+' && b == 8) {
        rl.write('32 + 8 = 40\n')
      }
      if (a == 32 && sign == '+' && b == 9) {
        rl.write('32 + 9 = 41\n')
      }
      if (a == 32 && sign == '+' && b == 10) {
        rl.write('32 + 10 = 42\n')
      }
      if (a == 32 && sign == '+' && b == 11) {
        rl.write('32 + 11 = 43\n')
      }
      if (a == 32 && sign == '+' && b == 12) {
        rl.write('32 + 12 = 44\n')
      }
      if (a == 32 && sign == '+' && b == 13) {
        rl.write('32 + 13 = 45\n')
      }
      if (a == 32 && sign == '+' && b == 14) {
        rl.write('32 + 14 = 46\n')
      }
      if (a == 32 && sign == '+' && b == 15) {
        rl.write('32 + 15 = 47\n')
      }
      if (a == 32 && sign == '+' && b == 16) {
        rl.write('32 + 16 = 48\n')
      }
      if (a == 32 && sign == '+' && b == 17) {
        rl.write('32 + 17 = 49\n')
      }
      if (a == 32 && sign == '+' && b == 18) {
        rl.write('32 + 18 = 50\n')
      }
      if (a == 32 && sign == '+' && b == 19) {
        rl.write('32 + 19 = 51\n')
      }
      if (a == 32 && sign == '+' && b == 20) {
        rl.write('32 + 20 = 52\n')
      }
      if (a == 32 && sign == '+' && b == 21) {
        rl.write('32 + 21 = 53\n')
      }
      if (a == 32 && sign == '+' && b == 22) {
        rl.write('32 + 22 = 54\n')
      }
      if (a == 32 && sign == '+' && b == 23) {
        rl.write('32 + 23 = 55\n')
      }
      if (a == 32 && sign == '+' && b == 24) {
        rl.write('32 + 24 = 56\n')
      }
      if (a == 32 && sign == '+' && b == 25) {
        rl.write('32 + 25 = 57\n')
      }
      if (a == 32 && sign == '+' && b == 26) {
        rl.write('32 + 26 = 58\n')
      }
      if (a == 32 && sign == '+' && b == 27) {
        rl.write('32 + 27 = 59\n')
      }
      if (a == 32 && sign == '+' && b == 28) {
        rl.write('32 + 28 = 60\n')
      }
      if (a == 32 && sign == '+' && b == 29) {
        rl.write('32 + 29 = 61\n')
      }
      if (a == 32 && sign == '+' && b == 30) {
        rl.write('32 + 30 = 62\n')
      }
      if (a == 32 && sign == '+' && b == 31) {
        rl.write('32 + 31 = 63\n')
      }
      if (a == 32 && sign == '+' && b == 32) {
        rl.write('32 + 32 = 64\n')
      }
      if (a == 32 && sign == '+' && b == 33) {
        rl.write('32 + 33 = 65\n')
      }
      if (a == 32 && sign == '+' && b == 34) {
        rl.write('32 + 34 = 66\n')
      }
      if (a == 32 && sign == '+' && b == 35) {
        rl.write('32 + 35 = 67\n')
      }
      if (a == 32 && sign == '+' && b == 36) {
        rl.write('32 + 36 = 68\n')
      }
      if (a == 32 && sign == '+' && b == 37) {
        rl.write('32 + 37 = 69\n')
      }
      if (a == 32 && sign == '+' && b == 38) {
        rl.write('32 + 38 = 70\n')
      }
      if (a == 32 && sign == '+' && b == 39) {
        rl.write('32 + 39 = 71\n')
      }
      if (a == 32 && sign == '+' && b == 40) {
        rl.write('32 + 40 = 72\n')
      }
      if (a == 32 && sign == '+' && b == 41) {
        rl.write('32 + 41 = 73\n')
      }
      if (a == 32 && sign == '+' && b == 42) {
        rl.write('32 + 42 = 74\n')
      }
      if (a == 32 && sign == '+' && b == 43) {
        rl.write('32 + 43 = 75\n')
      }
      if (a == 32 && sign == '+' && b == 44) {
        rl.write('32 + 44 = 76\n')
      }
      if (a == 32 && sign == '+' && b == 45) {
        rl.write('32 + 45 = 77\n')
      }
      if (a == 32 && sign == '+' && b == 46) {
        rl.write('32 + 46 = 78\n')
      }
      if (a == 32 && sign == '+' && b == 47) {
        rl.write('32 + 47 = 79\n')
      }
      if (a == 32 && sign == '+' && b == 48) {
        rl.write('32 + 48 = 80\n')
      }
      if (a == 32 && sign == '+' && b == 49) {
        rl.write('32 + 49 = 81\n')
      }
      if (a == 32 && sign == '+' && b == 50) {
        rl.write('32 + 50 = 82\n')
      }
      if (a == 33 && sign == '+' && b == 0) {
        rl.write('33 + 0 = 33\n')
      }
      if (a == 33 && sign == '+' && b == 1) {
        rl.write('33 + 1 = 34\n')
      }
      if (a == 33 && sign == '+' && b == 2) {
        rl.write('33 + 2 = 35\n')
      }
      if (a == 33 && sign == '+' && b == 3) {
        rl.write('33 + 3 = 36\n')
      }
      if (a == 33 && sign == '+' && b == 4) {
        rl.write('33 + 4 = 37\n')
      }
      if (a == 33 && sign == '+' && b == 5) {
        rl.write('33 + 5 = 38\n')
      }
      if (a == 33 && sign == '+' && b == 6) {
        rl.write('33 + 6 = 39\n')
      }
      if (a == 33 && sign == '+' && b == 7) {
        rl.write('33 + 7 = 40\n')
      }
      if (a == 33 && sign == '+' && b == 8) {
        rl.write('33 + 8 = 41\n')
      }
      if (a == 33 && sign == '+' && b == 9) {
        rl.write('33 + 9 = 42\n')
      }
      if (a == 33 && sign == '+' && b == 10) {
        rl.write('33 + 10 = 43\n')
      }
      if (a == 33 && sign == '+' && b == 11) {
        rl.write('33 + 11 = 44\n')
      }
      if (a == 33 && sign == '+' && b == 12) {
        rl.write('33 + 12 = 45\n')
      }
      if (a == 33 && sign == '+' && b == 13) {
        rl.write('33 + 13 = 46\n')
      }
      if (a == 33 && sign == '+' && b == 14) {
        rl.write('33 + 14 = 47\n')
      }
      if (a == 33 && sign == '+' && b == 15) {
        rl.write('33 + 15 = 48\n')
      }
      if (a == 33 && sign == '+' && b == 16) {
        rl.write('33 + 16 = 49\n')
      }
      if (a == 33 && sign == '+' && b == 17) {
        rl.write('33 + 17 = 50\n')
      }
      if (a == 33 && sign == '+' && b == 18) {
        rl.write('33 + 18 = 51\n')
      }
      if (a == 33 && sign == '+' && b == 19) {
        rl.write('33 + 19 = 52\n')
      }
      if (a == 33 && sign == '+' && b == 20) {
        rl.write('33 + 20 = 53\n')
      }
      if (a == 33 && sign == '+' && b == 21) {
        rl.write('33 + 21 = 54\n')
      }
      if (a == 33 && sign == '+' && b == 22) {
        rl.write('33 + 22 = 55\n')
      }
      if (a == 33 && sign == '+' && b == 23) {
        rl.write('33 + 23 = 56\n')
      }
      if (a == 33 && sign == '+' && b == 24) {
        rl.write('33 + 24 = 57\n')
      }
      if (a == 33 && sign == '+' && b == 25) {
        rl.write('33 + 25 = 58\n')
      }
      if (a == 33 && sign == '+' && b == 26) {
        rl.write('33 + 26 = 59\n')
      }
      if (a == 33 && sign == '+' && b == 27) {
        rl.write('33 + 27 = 60\n')
      }
      if (a == 33 && sign == '+' && b == 28) {
        rl.write('33 + 28 = 61\n')
      }
      if (a == 33 && sign == '+' && b == 29) {
        rl.write('33 + 29 = 62\n')
      }
      if (a == 33 && sign == '+' && b == 30) {
        rl.write('33 + 30 = 63\n')
      }
      if (a == 33 && sign == '+' && b == 31) {
        rl.write('33 + 31 = 64\n')
      }
      if (a == 33 && sign == '+' && b == 32) {
        rl.write('33 + 32 = 65\n')
      }
      if (a == 33 && sign == '+' && b == 33) {
        rl.write('33 + 33 = 66\n')
      }
      if (a == 33 && sign == '+' && b == 34) {
        rl.write('33 + 34 = 67\n')
      }
      if (a == 33 && sign == '+' && b == 35) {
        rl.write('33 + 35 = 68\n')
      }
      if (a == 33 && sign == '+' && b == 36) {
        rl.write('33 + 36 = 69\n')
      }
      if (a == 33 && sign == '+' && b == 37) {
        rl.write('33 + 37 = 70\n')
      }
      if (a == 33 && sign == '+' && b == 38) {
        rl.write('33 + 38 = 71\n')
      }
      if (a == 33 && sign == '+' && b == 39) {
        rl.write('33 + 39 = 72\n')
      }
      if (a == 33 && sign == '+' && b == 40) {
        rl.write('33 + 40 = 73\n')
      }
      if (a == 33 && sign == '+' && b == 41) {
        rl.write('33 + 41 = 74\n')
      }
      if (a == 33 && sign == '+' && b == 42) {
        rl.write('33 + 42 = 75\n')
      }
      if (a == 33 && sign == '+' && b == 43) {
        rl.write('33 + 43 = 76\n')
      }
      if (a == 33 && sign == '+' && b == 44) {
        rl.write('33 + 44 = 77\n')
      }
      if (a == 33 && sign == '+' && b == 45) {
        rl.write('33 + 45 = 78\n')
      }
      if (a == 33 && sign == '+' && b == 46) {
        rl.write('33 + 46 = 79\n')
      }
      if (a == 33 && sign == '+' && b == 47) {
        rl.write('33 + 47 = 80\n')
      }
      if (a == 33 && sign == '+' && b == 48) {
        rl.write('33 + 48 = 81\n')
      }
      if (a == 33 && sign == '+' && b == 49) {
        rl.write('33 + 49 = 82\n')
      }
      if (a == 33 && sign == '+' && b == 50) {
        rl.write('33 + 50 = 83\n')
      }
      if (a == 34 && sign == '+' && b == 0) {
        rl.write('34 + 0 = 34\n')
      }
      if (a == 34 && sign == '+' && b == 1) {
        rl.write('34 + 1 = 35\n')
      }
      if (a == 34 && sign == '+' && b == 2) {
        rl.write('34 + 2 = 36\n')
      }
      if (a == 34 && sign == '+' && b == 3) {
        rl.write('34 + 3 = 37\n')
      }
      if (a == 34 && sign == '+' && b == 4) {
        rl.write('34 + 4 = 38\n')
      }
      if (a == 34 && sign == '+' && b == 5) {
        rl.write('34 + 5 = 39\n')
      }
      if (a == 34 && sign == '+' && b == 6) {
        rl.write('34 + 6 = 40\n')
      }
      if (a == 34 && sign == '+' && b == 7) {
        rl.write('34 + 7 = 41\n')
      }
      if (a == 34 && sign == '+' && b == 8) {
        rl.write('34 + 8 = 42\n')
      }
      if (a == 34 && sign == '+' && b == 9) {
        rl.write('34 + 9 = 43\n')
      }
      if (a == 34 && sign == '+' && b == 10) {
        rl.write('34 + 10 = 44\n')
      }
      if (a == 34 && sign == '+' && b == 11) {
        rl.write('34 + 11 = 45\n')
      }
      if (a == 34 && sign == '+' && b == 12) {
        rl.write('34 + 12 = 46\n')
      }
      if (a == 34 && sign == '+' && b == 13) {
        rl.write('34 + 13 = 47\n')
      }
      if (a == 34 && sign == '+' && b == 14) {
        rl.write('34 + 14 = 48\n')
      }
      if (a == 34 && sign == '+' && b == 15) {
        rl.write('34 + 15 = 49\n')
      }
      if (a == 34 && sign == '+' && b == 16) {
        rl.write('34 + 16 = 50\n')
      }
      if (a == 34 && sign == '+' && b == 17) {
        rl.write('34 + 17 = 51\n')
      }
      if (a == 34 && sign == '+' && b == 18) {
        rl.write('34 + 18 = 52\n')
      }
      if (a == 34 && sign == '+' && b == 19) {
        rl.write('34 + 19 = 53\n')
      }
      if (a == 34 && sign == '+' && b == 20) {
        rl.write('34 + 20 = 54\n')
      }
      if (a == 34 && sign == '+' && b == 21) {
        rl.write('34 + 21 = 55\n')
      }
      if (a == 34 && sign == '+' && b == 22) {
        rl.write('34 + 22 = 56\n')
      }
      if (a == 34 && sign == '+' && b == 23) {
        rl.write('34 + 23 = 57\n')
      }
      if (a == 34 && sign == '+' && b == 24) {
        rl.write('34 + 24 = 58\n')
      }
      if (a == 34 && sign == '+' && b == 25) {
        rl.write('34 + 25 = 59\n')
      }
      if (a == 34 && sign == '+' && b == 26) {
        rl.write('34 + 26 = 60\n')
      }
      if (a == 34 && sign == '+' && b == 27) {
        rl.write('34 + 27 = 61\n')
      }
      if (a == 34 && sign == '+' && b == 28) {
        rl.write('34 + 28 = 62\n')
      }
      if (a == 34 && sign == '+' && b == 29) {
        rl.write('34 + 29 = 63\n')
      }
      if (a == 34 && sign == '+' && b == 30) {
        rl.write('34 + 30 = 64\n')
      }
      if (a == 34 && sign == '+' && b == 31) {
        rl.write('34 + 31 = 65\n')
      }
      if (a == 34 && sign == '+' && b == 32) {
        rl.write('34 + 32 = 66\n')
      }
      if (a == 34 && sign == '+' && b == 33) {
        rl.write('34 + 33 = 67\n')
      }
      if (a == 34 && sign == '+' && b == 34) {
        rl.write('34 + 34 = 68\n')
      }
      if (a == 34 && sign == '+' && b == 35) {
        rl.write('34 + 35 = 69\n')
      }
      if (a == 34 && sign == '+' && b == 36) {
        rl.write('34 + 36 = 70\n')
      }
      if (a == 34 && sign == '+' && b == 37) {
        rl.write('34 + 37 = 71\n')
      }
      if (a == 34 && sign == '+' && b == 38) {
        rl.write('34 + 38 = 72\n')
      }
      if (a == 34 && sign == '+' && b == 39) {
        rl.write('34 + 39 = 73\n')
      }
      if (a == 34 && sign == '+' && b == 40) {
        rl.write('34 + 40 = 74\n')
      }
      if (a == 34 && sign == '+' && b == 41) {
        rl.write('34 + 41 = 75\n')
      }
      if (a == 34 && sign == '+' && b == 42) {
        rl.write('34 + 42 = 76\n')
      }
      if (a == 34 && sign == '+' && b == 43) {
        rl.write('34 + 43 = 77\n')
      }
      if (a == 34 && sign == '+' && b == 44) {
        rl.write('34 + 44 = 78\n')
      }
      if (a == 34 && sign == '+' && b == 45) {
        rl.write('34 + 45 = 79\n')
      }
      if (a == 34 && sign == '+' && b == 46) {
        rl.write('34 + 46 = 80\n')
      }
      if (a == 34 && sign == '+' && b == 47) {
        rl.write('34 + 47 = 81\n')
      }
      if (a == 34 && sign == '+' && b == 48) {
        rl.write('34 + 48 = 82\n')
      }
      if (a == 34 && sign == '+' && b == 49) {
        rl.write('34 + 49 = 83\n')
      }
      if (a == 34 && sign == '+' && b == 50) {
        rl.write('34 + 50 = 84\n')
      }
      if (a == 35 && sign == '+' && b == 0) {
        rl.write('35 + 0 = 35\n')
      }
      if (a == 35 && sign == '+' && b == 1) {
        rl.write('35 + 1 = 36\n')
      }
      if (a == 35 && sign == '+' && b == 2) {
        rl.write('35 + 2 = 37\n')
      }
      if (a == 35 && sign == '+' && b == 3) {
        rl.write('35 + 3 = 38\n')
      }
      if (a == 35 && sign == '+' && b == 4) {
        rl.write('35 + 4 = 39\n')
      }
      if (a == 35 && sign == '+' && b == 5) {
        rl.write('35 + 5 = 40\n')
      }
      if (a == 35 && sign == '+' && b == 6) {
        rl.write('35 + 6 = 41\n')
      }
      if (a == 35 && sign == '+' && b == 7) {
        rl.write('35 + 7 = 42\n')
      }
      if (a == 35 && sign == '+' && b == 8) {
        rl.write('35 + 8 = 43\n')
      }
      if (a == 35 && sign == '+' && b == 9) {
        rl.write('35 + 9 = 44\n')
      }
      if (a == 35 && sign == '+' && b == 10) {
        rl.write('35 + 10 = 45\n')
      }
      if (a == 35 && sign == '+' && b == 11) {
        rl.write('35 + 11 = 46\n')
      }
      if (a == 35 && sign == '+' && b == 12) {
        rl.write('35 + 12 = 47\n')
      }
      if (a == 35 && sign == '+' && b == 13) {
        rl.write('35 + 13 = 48\n')
      }
      if (a == 35 && sign == '+' && b == 14) {
        rl.write('35 + 14 = 49\n')
      }
      if (a == 35 && sign == '+' && b == 15) {
        rl.write('35 + 15 = 50\n')
      }
      if (a == 35 && sign == '+' && b == 16) {
        rl.write('35 + 16 = 51\n')
      }
      if (a == 35 && sign == '+' && b == 17) {
        rl.write('35 + 17 = 52\n')
      }
      if (a == 35 && sign == '+' && b == 18) {
        rl.write('35 + 18 = 53\n')
      }
      if (a == 35 && sign == '+' && b == 19) {
        rl.write('35 + 19 = 54\n')
      }
      if (a == 35 && sign == '+' && b == 20) {
        rl.write('35 + 20 = 55\n')
      }
      if (a == 35 && sign == '+' && b == 21) {
        rl.write('35 + 21 = 56\n')
      }
      if (a == 35 && sign == '+' && b == 22) {
        rl.write('35 + 22 = 57\n')
      }
      if (a == 35 && sign == '+' && b == 23) {
        rl.write('35 + 23 = 58\n')
      }
      if (a == 35 && sign == '+' && b == 24) {
        rl.write('35 + 24 = 59\n')
      }
      if (a == 35 && sign == '+' && b == 25) {
        rl.write('35 + 25 = 60\n')
      }
      if (a == 35 && sign == '+' && b == 26) {
        rl.write('35 + 26 = 61\n')
      }
      if (a == 35 && sign == '+' && b == 27) {
        rl.write('35 + 27 = 62\n')
      }
      if (a == 35 && sign == '+' && b == 28) {
        rl.write('35 + 28 = 63\n')
      }
      if (a == 35 && sign == '+' && b == 29) {
        rl.write('35 + 29 = 64\n')
      }
      if (a == 35 && sign == '+' && b == 30) {
        rl.write('35 + 30 = 65\n')
      }
      if (a == 35 && sign == '+' && b == 31) {
        rl.write('35 + 31 = 66\n')
      }
      if (a == 35 && sign == '+' && b == 32) {
        rl.write('35 + 32 = 67\n')
      }
      if (a == 35 && sign == '+' && b == 33) {
        rl.write('35 + 33 = 68\n')
      }
      if (a == 35 && sign == '+' && b == 34) {
        rl.write('35 + 34 = 69\n')
      }
      if (a == 35 && sign == '+' && b == 35) {
        rl.write('35 + 35 = 70\n')
      }
      if (a == 35 && sign == '+' && b == 36) {
        rl.write('35 + 36 = 71\n')
      }
      if (a == 35 && sign == '+' && b == 37) {
        rl.write('35 + 37 = 72\n')
      }
      if (a == 35 && sign == '+' && b == 38) {
        rl.write('35 + 38 = 73\n')
      }
      if (a == 35 && sign == '+' && b == 39) {
        rl.write('35 + 39 = 74\n')
      }
      if (a == 35 && sign == '+' && b == 40) {
        rl.write('35 + 40 = 75\n')
      }
      if (a == 35 && sign == '+' && b == 41) {
        rl.write('35 + 41 = 76\n')
      }
      if (a == 35 && sign == '+' && b == 42) {
        rl.write('35 + 42 = 77\n')
      }
      if (a == 35 && sign == '+' && b == 43) {
        rl.write('35 + 43 = 78\n')
      }
      if (a == 35 && sign == '+' && b == 44) {
        rl.write('35 + 44 = 79\n')
      }
      if (a == 35 && sign == '+' && b == 45) {
        rl.write('35 + 45 = 80\n')
      }
      if (a == 35 && sign == '+' && b == 46) {
        rl.write('35 + 46 = 81\n')
      }
      if (a == 35 && sign == '+' && b == 47) {
        rl.write('35 + 47 = 82\n')
      }
      if (a == 35 && sign == '+' && b == 48) {
        rl.write('35 + 48 = 83\n')
      }
      if (a == 35 && sign == '+' && b == 49) {
        rl.write('35 + 49 = 84\n')
      }
      if (a == 35 && sign == '+' && b == 50) {
        rl.write('35 + 50 = 85\n')
      }
      if (a == 36 && sign == '+' && b == 0) {
        rl.write('36 + 0 = 36\n')
      }
      if (a == 36 && sign == '+' && b == 1) {
        rl.write('36 + 1 = 37\n')
      }
      if (a == 36 && sign == '+' && b == 2) {
        rl.write('36 + 2 = 38\n')
      }
      if (a == 36 && sign == '+' && b == 3) {
        rl.write('36 + 3 = 39\n')
      }
      if (a == 36 && sign == '+' && b == 4) {
        rl.write('36 + 4 = 40\n')
      }
      if (a == 36 && sign == '+' && b == 5) {
        rl.write('36 + 5 = 41\n')
      }
      if (a == 36 && sign == '+' && b == 6) {
        rl.write('36 + 6 = 42\n')
      }
      if (a == 36 && sign == '+' && b == 7) {
        rl.write('36 + 7 = 43\n')
      }
      if (a == 36 && sign == '+' && b == 8) {
        rl.write('36 + 8 = 44\n')
      }
      if (a == 36 && sign == '+' && b == 9) {
        rl.write('36 + 9 = 45\n')
      }
      if (a == 36 && sign == '+' && b == 10) {
        rl.write('36 + 10 = 46\n')
      }
      if (a == 36 && sign == '+' && b == 11) {
        rl.write('36 + 11 = 47\n')
      }
      if (a == 36 && sign == '+' && b == 12) {
        rl.write('36 + 12 = 48\n')
      }
      if (a == 36 && sign == '+' && b == 13) {
        rl.write('36 + 13 = 49\n')
      }
      if (a == 36 && sign == '+' && b == 14) {
        rl.write('36 + 14 = 50\n')
      }
      if (a == 36 && sign == '+' && b == 15) {
        rl.write('36 + 15 = 51\n')
      }
      if (a == 36 && sign == '+' && b == 16) {
        rl.write('36 + 16 = 52\n')
      }
      if (a == 36 && sign == '+' && b == 17) {
        rl.write('36 + 17 = 53\n')
      }
      if (a == 36 && sign == '+' && b == 18) {
        rl.write('36 + 18 = 54\n')
      }
      if (a == 36 && sign == '+' && b == 19) {
        rl.write('36 + 19 = 55\n')
      }
      if (a == 36 && sign == '+' && b == 20) {
        rl.write('36 + 20 = 56\n')
      }
      if (a == 36 && sign == '+' && b == 21) {
        rl.write('36 + 21 = 57\n')
      }
      if (a == 36 && sign == '+' && b == 22) {
        rl.write('36 + 22 = 58\n')
      }
      if (a == 36 && sign == '+' && b == 23) {
        rl.write('36 + 23 = 59\n')
      }
      if (a == 36 && sign == '+' && b == 24) {
        rl.write('36 + 24 = 60\n')
      }
      if (a == 36 && sign == '+' && b == 25) {
        rl.write('36 + 25 = 61\n')
      }
      if (a == 36 && sign == '+' && b == 26) {
        rl.write('36 + 26 = 62\n')
      }
      if (a == 36 && sign == '+' && b == 27) {
        rl.write('36 + 27 = 63\n')
      }
      if (a == 36 && sign == '+' && b == 28) {
        rl.write('36 + 28 = 64\n')
      }
      if (a == 36 && sign == '+' && b == 29) {
        rl.write('36 + 29 = 65\n')
      }
      if (a == 36 && sign == '+' && b == 30) {
        rl.write('36 + 30 = 66\n')
      }
      if (a == 36 && sign == '+' && b == 31) {
        rl.write('36 + 31 = 67\n')
      }
      if (a == 36 && sign == '+' && b == 32) {
        rl.write('36 + 32 = 68\n')
      }
      if (a == 36 && sign == '+' && b == 33) {
        rl.write('36 + 33 = 69\n')
      }
      if (a == 36 && sign == '+' && b == 34) {
        rl.write('36 + 34 = 70\n')
      }
      if (a == 36 && sign == '+' && b == 35) {
        rl.write('36 + 35 = 71\n')
      }
      if (a == 36 && sign == '+' && b == 36) {
        rl.write('36 + 36 = 72\n')
      }
      if (a == 36 && sign == '+' && b == 37) {
        rl.write('36 + 37 = 73\n')
      }
      if (a == 36 && sign == '+' && b == 38) {
        rl.write('36 + 38 = 74\n')
      }
      if (a == 36 && sign == '+' && b == 39) {
        rl.write('36 + 39 = 75\n')
      }
      if (a == 36 && sign == '+' && b == 40) {
        rl.write('36 + 40 = 76\n')
      }
      if (a == 36 && sign == '+' && b == 41) {
        rl.write('36 + 41 = 77\n')
      }
      if (a == 36 && sign == '+' && b == 42) {
        rl.write('36 + 42 = 78\n')
      }
      if (a == 36 && sign == '+' && b == 43) {
        rl.write('36 + 43 = 79\n')
      }
      if (a == 36 && sign == '+' && b == 44) {
        rl.write('36 + 44 = 80\n')
      }
      if (a == 36 && sign == '+' && b == 45) {
        rl.write('36 + 45 = 81\n')
      }
      if (a == 36 && sign == '+' && b == 46) {
        rl.write('36 + 46 = 82\n')
      }
      if (a == 36 && sign == '+' && b == 47) {
        rl.write('36 + 47 = 83\n')
      }
      if (a == 36 && sign == '+' && b == 48) {
        rl.write('36 + 48 = 84\n')
      }
      if (a == 36 && sign == '+' && b == 49) {
        rl.write('36 + 49 = 85\n')
      }
      if (a == 36 && sign == '+' && b == 50) {
        rl.write('36 + 50 = 86\n')
      }
      if (a == 37 && sign == '+' && b == 0) {
        rl.write('37 + 0 = 37\n')
      }
      if (a == 37 && sign == '+' && b == 1) {
        rl.write('37 + 1 = 38\n')
      }
      if (a == 37 && sign == '+' && b == 2) {
        rl.write('37 + 2 = 39\n')
      }
      if (a == 37 && sign == '+' && b == 3) {
        rl.write('37 + 3 = 40\n')
      }
      if (a == 37 && sign == '+' && b == 4) {
        rl.write('37 + 4 = 41\n')
      }
      if (a == 37 && sign == '+' && b == 5) {
        rl.write('37 + 5 = 42\n')
      }
      if (a == 37 && sign == '+' && b == 6) {
        rl.write('37 + 6 = 43\n')
      }
      if (a == 37 && sign == '+' && b == 7) {
        rl.write('37 + 7 = 44\n')
      }
      if (a == 37 && sign == '+' && b == 8) {
        rl.write('37 + 8 = 45\n')
      }
      if (a == 37 && sign == '+' && b == 9) {
        rl.write('37 + 9 = 46\n')
      }
      if (a == 37 && sign == '+' && b == 10) {
        rl.write('37 + 10 = 47\n')
      }
      if (a == 37 && sign == '+' && b == 11) {
        rl.write('37 + 11 = 48\n')
      }
      if (a == 37 && sign == '+' && b == 12) {
        rl.write('37 + 12 = 49\n')
      }
      if (a == 37 && sign == '+' && b == 13) {
        rl.write('37 + 13 = 50\n')
      }
      if (a == 37 && sign == '+' && b == 14) {
        rl.write('37 + 14 = 51\n')
      }
      if (a == 37 && sign == '+' && b == 15) {
        rl.write('37 + 15 = 52\n')
      }
      if (a == 37 && sign == '+' && b == 16) {
        rl.write('37 + 16 = 53\n')
      }
      if (a == 37 && sign == '+' && b == 17) {
        rl.write('37 + 17 = 54\n')
      }
      if (a == 37 && sign == '+' && b == 18) {
        rl.write('37 + 18 = 55\n')
      }
      if (a == 37 && sign == '+' && b == 19) {
        rl.write('37 + 19 = 56\n')
      }
      if (a == 37 && sign == '+' && b == 20) {
        rl.write('37 + 20 = 57\n')
      }
      if (a == 37 && sign == '+' && b == 21) {
        rl.write('37 + 21 = 58\n')
      }
      if (a == 37 && sign == '+' && b == 22) {
        rl.write('37 + 22 = 59\n')
      }
      if (a == 37 && sign == '+' && b == 23) {
        rl.write('37 + 23 = 60\n')
      }
      if (a == 37 && sign == '+' && b == 24) {
        rl.write('37 + 24 = 61\n')
      }
      if (a == 37 && sign == '+' && b == 25) {
        rl.write('37 + 25 = 62\n')
      }
      if (a == 37 && sign == '+' && b == 26) {
        rl.write('37 + 26 = 63\n')
      }
      if (a == 37 && sign == '+' && b == 27) {
        rl.write('37 + 27 = 64\n')
      }
      if (a == 37 && sign == '+' && b == 28) {
        rl.write('37 + 28 = 65\n')
      }
      if (a == 37 && sign == '+' && b == 29) {
        rl.write('37 + 29 = 66\n')
      }
      if (a == 37 && sign == '+' && b == 30) {
        rl.write('37 + 30 = 67\n')
      }
      if (a == 37 && sign == '+' && b == 31) {
        rl.write('37 + 31 = 68\n')
      }
      if (a == 37 && sign == '+' && b == 32) {
        rl.write('37 + 32 = 69\n')
      }
      if (a == 37 && sign == '+' && b == 33) {
        rl.write('37 + 33 = 70\n')
      }
      if (a == 37 && sign == '+' && b == 34) {
        rl.write('37 + 34 = 71\n')
      }
      if (a == 37 && sign == '+' && b == 35) {
        rl.write('37 + 35 = 72\n')
      }
      if (a == 37 && sign == '+' && b == 36) {
        rl.write('37 + 36 = 73\n')
      }
      if (a == 37 && sign == '+' && b == 37) {
        rl.write('37 + 37 = 74\n')
      }
      if (a == 37 && sign == '+' && b == 38) {
        rl.write('37 + 38 = 75\n')
      }
      if (a == 37 && sign == '+' && b == 39) {
        rl.write('37 + 39 = 76\n')
      }
      if (a == 37 && sign == '+' && b == 40) {
        rl.write('37 + 40 = 77\n')
      }
      if (a == 37 && sign == '+' && b == 41) {
        rl.write('37 + 41 = 78\n')
      }
      if (a == 37 && sign == '+' && b == 42) {
        rl.write('37 + 42 = 79\n')
      }
      if (a == 37 && sign == '+' && b == 43) {
        rl.write('37 + 43 = 80\n')
      }
      if (a == 37 && sign == '+' && b == 44) {
        rl.write('37 + 44 = 81\n')
      }
      if (a == 37 && sign == '+' && b == 45) {
        rl.write('37 + 45 = 82\n')
      }
      if (a == 37 && sign == '+' && b == 46) {
        rl.write('37 + 46 = 83\n')
      }
      if (a == 37 && sign == '+' && b == 47) {
        rl.write('37 + 47 = 84\n')
      }
      if (a == 37 && sign == '+' && b == 48) {
        rl.write('37 + 48 = 85\n')
      }
      if (a == 37 && sign == '+' && b == 49) {
        rl.write('37 + 49 = 86\n')
      }
      if (a == 37 && sign == '+' && b == 50) {
        rl.write('37 + 50 = 87\n')
      }
      if (a == 38 && sign == '+' && b == 0) {
        rl.write('38 + 0 = 38\n')
      }
      if (a == 38 && sign == '+' && b == 1) {
        rl.write('38 + 1 = 39\n')
      }
      if (a == 38 && sign == '+' && b == 2) {
        rl.write('38 + 2 = 40\n')
      }
      if (a == 38 && sign == '+' && b == 3) {
        rl.write('38 + 3 = 41\n')
      }
      if (a == 38 && sign == '+' && b == 4) {
        rl.write('38 + 4 = 42\n')
      }
      if (a == 38 && sign == '+' && b == 5) {
        rl.write('38 + 5 = 43\n')
      }
      if (a == 38 && sign == '+' && b == 6) {
        rl.write('38 + 6 = 44\n')
      }
      if (a == 38 && sign == '+' && b == 7) {
        rl.write('38 + 7 = 45\n')
      }
      if (a == 38 && sign == '+' && b == 8) {
        rl.write('38 + 8 = 46\n')
      }
      if (a == 38 && sign == '+' && b == 9) {
        rl.write('38 + 9 = 47\n')
      }
      if (a == 38 && sign == '+' && b == 10) {
        rl.write('38 + 10 = 48\n')
      }
      if (a == 38 && sign == '+' && b == 11) {
        rl.write('38 + 11 = 49\n')
      }
      if (a == 38 && sign == '+' && b == 12) {
        rl.write('38 + 12 = 50\n')
      }
      if (a == 38 && sign == '+' && b == 13) {
        rl.write('38 + 13 = 51\n')
      }
      if (a == 38 && sign == '+' && b == 14) {
        rl.write('38 + 14 = 52\n')
      }
      if (a == 38 && sign == '+' && b == 15) {
        rl.write('38 + 15 = 53\n')
      }
      if (a == 38 && sign == '+' && b == 16) {
        rl.write('38 + 16 = 54\n')
      }
      if (a == 38 && sign == '+' && b == 17) {
        rl.write('38 + 17 = 55\n')
      }
      if (a == 38 && sign == '+' && b == 18) {
        rl.write('38 + 18 = 56\n')
      }
      if (a == 38 && sign == '+' && b == 19) {
        rl.write('38 + 19 = 57\n')
      }
      if (a == 38 && sign == '+' && b == 20) {
        rl.write('38 + 20 = 58\n')
      }
      if (a == 38 && sign == '+' && b == 21) {
        rl.write('38 + 21 = 59\n')
      }
      if (a == 38 && sign == '+' && b == 22) {
        rl.write('38 + 22 = 60\n')
      }
      if (a == 38 && sign == '+' && b == 23) {
        rl.write('38 + 23 = 61\n')
      }
      if (a == 38 && sign == '+' && b == 24) {
        rl.write('38 + 24 = 62\n')
      }
      if (a == 38 && sign == '+' && b == 25) {
        rl.write('38 + 25 = 63\n')
      }
      if (a == 38 && sign == '+' && b == 26) {
        rl.write('38 + 26 = 64\n')
      }
      if (a == 38 && sign == '+' && b == 27) {
        rl.write('38 + 27 = 65\n')
      }
      if (a == 38 && sign == '+' && b == 28) {
        rl.write('38 + 28 = 66\n')
      }
      if (a == 38 && sign == '+' && b == 29) {
        rl.write('38 + 29 = 67\n')
      }
      if (a == 38 && sign == '+' && b == 30) {
        rl.write('38 + 30 = 68\n')
      }
      if (a == 38 && sign == '+' && b == 31) {
        rl.write('38 + 31 = 69\n')
      }
      if (a == 38 && sign == '+' && b == 32) {
        rl.write('38 + 32 = 70\n')
      }
      if (a == 38 && sign == '+' && b == 33) {
        rl.write('38 + 33 = 71\n')
      }
      if (a == 38 && sign == '+' && b == 34) {
        rl.write('38 + 34 = 72\n')
      }
      if (a == 38 && sign == '+' && b == 35) {
        rl.write('38 + 35 = 73\n')
      }
      if (a == 38 && sign == '+' && b == 36) {
        rl.write('38 + 36 = 74\n')
      }
      if (a == 38 && sign == '+' && b == 37) {
        rl.write('38 + 37 = 75\n')
      }
      if (a == 38 && sign == '+' && b == 38) {
        rl.write('38 + 38 = 76\n')
      }
      if (a == 38 && sign == '+' && b == 39) {
        rl.write('38 + 39 = 77\n')
      }
      if (a == 38 && sign == '+' && b == 40) {
        rl.write('38 + 40 = 78\n')
      }
      if (a == 38 && sign == '+' && b == 41) {
        rl.write('38 + 41 = 79\n')
      }
      if (a == 38 && sign == '+' && b == 42) {
        rl.write('38 + 42 = 80\n')
      }
      if (a == 38 && sign == '+' && b == 43) {
        rl.write('38 + 43 = 81\n')
      }
      if (a == 38 && sign == '+' && b == 44) {
        rl.write('38 + 44 = 82\n')
      }
      if (a == 38 && sign == '+' && b == 45) {
        rl.write('38 + 45 = 83\n')
      }
      if (a == 38 && sign == '+' && b == 46) {
        rl.write('38 + 46 = 84\n')
      }
      if (a == 38 && sign == '+' && b == 47) {
        rl.write('38 + 47 = 85\n')
      }
      if (a == 38 && sign == '+' && b == 48) {
        rl.write('38 + 48 = 86\n')
      }
      if (a == 38 && sign == '+' && b == 49) {
        rl.write('38 + 49 = 87\n')
      }
      if (a == 38 && sign == '+' && b == 50) {
        rl.write('38 + 50 = 88\n')
      }
      if (a == 39 && sign == '+' && b == 0) {
        rl.write('39 + 0 = 39\n')
      }
      if (a == 39 && sign == '+' && b == 1) {
        rl.write('39 + 1 = 40\n')
      }
      if (a == 39 && sign == '+' && b == 2) {
        rl.write('39 + 2 = 41\n')
      }
      if (a == 39 && sign == '+' && b == 3) {
        rl.write('39 + 3 = 42\n')
      }
      if (a == 39 && sign == '+' && b == 4) {
        rl.write('39 + 4 = 43\n')
      }
      if (a == 39 && sign == '+' && b == 5) {
        rl.write('39 + 5 = 44\n')
      }
      if (a == 39 && sign == '+' && b == 6) {
        rl.write('39 + 6 = 45\n')
      }
      if (a == 39 && sign == '+' && b == 7) {
        rl.write('39 + 7 = 46\n')
      }
      if (a == 39 && sign == '+' && b == 8) {
        rl.write('39 + 8 = 47\n')
      }
      if (a == 39 && sign == '+' && b == 9) {
        rl.write('39 + 9 = 48\n')
      }
      if (a == 39 && sign == '+' && b == 10) {
        rl.write('39 + 10 = 49\n')
      }
      if (a == 39 && sign == '+' && b == 11) {
        rl.write('39 + 11 = 50\n')
      }
      if (a == 39 && sign == '+' && b == 12) {
        rl.write('39 + 12 = 51\n')
      }
      if (a == 39 && sign == '+' && b == 13) {
        rl.write('39 + 13 = 52\n')
      }
      if (a == 39 && sign == '+' && b == 14) {
        rl.write('39 + 14 = 53\n')
      }
      if (a == 39 && sign == '+' && b == 15) {
        rl.write('39 + 15 = 54\n')
      }
      if (a == 39 && sign == '+' && b == 16) {
        rl.write('39 + 16 = 55\n')
      }
      if (a == 39 && sign == '+' && b == 17) {
        rl.write('39 + 17 = 56\n')
      }
      if (a == 39 && sign == '+' && b == 18) {
        rl.write('39 + 18 = 57\n')
      }
      if (a == 39 && sign == '+' && b == 19) {
        rl.write('39 + 19 = 58\n')
      }
      if (a == 39 && sign == '+' && b == 20) {
        rl.write('39 + 20 = 59\n')
      }
      if (a == 39 && sign == '+' && b == 21) {
        rl.write('39 + 21 = 60\n')
      }
      if (a == 39 && sign == '+' && b == 22) {
        rl.write('39 + 22 = 61\n')
      }
      if (a == 39 && sign == '+' && b == 23) {
        rl.write('39 + 23 = 62\n')
      }
      if (a == 39 && sign == '+' && b == 24) {
        rl.write('39 + 24 = 63\n')
      }
      if (a == 39 && sign == '+' && b == 25) {
        rl.write('39 + 25 = 64\n')
      }
      if (a == 39 && sign == '+' && b == 26) {
        rl.write('39 + 26 = 65\n')
      }
      if (a == 39 && sign == '+' && b == 27) {
        rl.write('39 + 27 = 66\n')
      }
      if (a == 39 && sign == '+' && b == 28) {
        rl.write('39 + 28 = 67\n')
      }
      if (a == 39 && sign == '+' && b == 29) {
        rl.write('39 + 29 = 68\n')
      }
      if (a == 39 && sign == '+' && b == 30) {
        rl.write('39 + 30 = 69\n')
      }
      if (a == 39 && sign == '+' && b == 31) {
        rl.write('39 + 31 = 70\n')
      }
      if (a == 39 && sign == '+' && b == 32) {
        rl.write('39 + 32 = 71\n')
      }
      if (a == 39 && sign == '+' && b == 33) {
        rl.write('39 + 33 = 72\n')
      }
      if (a == 39 && sign == '+' && b == 34) {
        rl.write('39 + 34 = 73\n')
      }
      if (a == 39 && sign == '+' && b == 35) {
        rl.write('39 + 35 = 74\n')
      }
      if (a == 39 && sign == '+' && b == 36) {
        rl.write('39 + 36 = 75\n')
      }
      if (a == 39 && sign == '+' && b == 37) {
        rl.write('39 + 37 = 76\n')
      }
      if (a == 39 && sign == '+' && b == 38) {
        rl.write('39 + 38 = 77\n')
      }
      if (a == 39 && sign == '+' && b == 39) {
        rl.write('39 + 39 = 78\n')
      }
      if (a == 39 && sign == '+' && b == 40) {
        rl.write('39 + 40 = 79\n')
      }
      if (a == 39 && sign == '+' && b == 41) {
        rl.write('39 + 41 = 80\n')
      }
      if (a == 39 && sign == '+' && b == 42) {
        rl.write('39 + 42 = 81\n')
      }
      if (a == 39 && sign == '+' && b == 43) {
        rl.write('39 + 43 = 82\n')
      }
      if (a == 39 && sign == '+' && b == 44) {
        rl.write('39 + 44 = 83\n')
      }
      if (a == 39 && sign == '+' && b == 45) {
        rl.write('39 + 45 = 84\n')
      }
      if (a == 39 && sign == '+' && b == 46) {
        rl.write('39 + 46 = 85\n')
      }
      if (a == 39 && sign == '+' && b == 47) {
        rl.write('39 + 47 = 86\n')
      }
      if (a == 39 && sign == '+' && b == 48) {
        rl.write('39 + 48 = 87\n')
      }
      if (a == 39 && sign == '+' && b == 49) {
        rl.write('39 + 49 = 88\n')
      }
      if (a == 39 && sign == '+' && b == 50) {
        rl.write('39 + 50 = 89\n')
      }
      if (a == 40 && sign == '+' && b == 0) {
        rl.write('40 + 0 = 40\n')
      }
      if (a == 40 && sign == '+' && b == 1) {
        rl.write('40 + 1 = 41\n')
      }
      if (a == 40 && sign == '+' && b == 2) {
        rl.write('40 + 2 = 42\n')
      }
      if (a == 40 && sign == '+' && b == 3) {
        rl.write('40 + 3 = 43\n')
      }
      if (a == 40 && sign == '+' && b == 4) {
        rl.write('40 + 4 = 44\n')
      }
      if (a == 40 && sign == '+' && b == 5) {
        rl.write('40 + 5 = 45\n')
      }
      if (a == 40 && sign == '+' && b == 6) {
        rl.write('40 + 6 = 46\n')
      }
      if (a == 40 && sign == '+' && b == 7) {
        rl.write('40 + 7 = 47\n')
      }
      if (a == 40 && sign == '+' && b == 8) {
        rl.write('40 + 8 = 48\n')
      }
      if (a == 40 && sign == '+' && b == 9) {
        rl.write('40 + 9 = 49\n')
      }
      if (a == 40 && sign == '+' && b == 10) {
        rl.write('40 + 10 = 50\n')
      }
      if (a == 40 && sign == '+' && b == 11) {
        rl.write('40 + 11 = 51\n')
      }
      if (a == 40 && sign == '+' && b == 12) {
        rl.write('40 + 12 = 52\n')
      }
      if (a == 40 && sign == '+' && b == 13) {
        rl.write('40 + 13 = 53\n')
      }
      if (a == 40 && sign == '+' && b == 14) {
        rl.write('40 + 14 = 54\n')
      }
      if (a == 40 && sign == '+' && b == 15) {
        rl.write('40 + 15 = 55\n')
      }
      if (a == 40 && sign == '+' && b == 16) {
        rl.write('40 + 16 = 56\n')
      }
      if (a == 40 && sign == '+' && b == 17) {
        rl.write('40 + 17 = 57\n')
      }
      if (a == 40 && sign == '+' && b == 18) {
        rl.write('40 + 18 = 58\n')
      }
      if (a == 40 && sign == '+' && b == 19) {
        rl.write('40 + 19 = 59\n')
      }
      if (a == 40 && sign == '+' && b == 20) {
        rl.write('40 + 20 = 60\n')
      }
      if (a == 40 && sign == '+' && b == 21) {
        rl.write('40 + 21 = 61\n')
      }
      if (a == 40 && sign == '+' && b == 22) {
        rl.write('40 + 22 = 62\n')
      }
      if (a == 40 && sign == '+' && b == 23) {
        rl.write('40 + 23 = 63\n')
      }
      if (a == 40 && sign == '+' && b == 24) {
        rl.write('40 + 24 = 64\n')
      }
      if (a == 40 && sign == '+' && b == 25) {
        rl.write('40 + 25 = 65\n')
      }
      if (a == 40 && sign == '+' && b == 26) {
        rl.write('40 + 26 = 66\n')
      }
      if (a == 40 && sign == '+' && b == 27) {
        rl.write('40 + 27 = 67\n')
      }
      if (a == 40 && sign == '+' && b == 28) {
        rl.write('40 + 28 = 68\n')
      }
      if (a == 40 && sign == '+' && b == 29) {
        rl.write('40 + 29 = 69\n')
      }
      if (a == 40 && sign == '+' && b == 30) {
        rl.write('40 + 30 = 70\n')
      }
      if (a == 40 && sign == '+' && b == 31) {
        rl.write('40 + 31 = 71\n')
      }
      if (a == 40 && sign == '+' && b == 32) {
        rl.write('40 + 32 = 72\n')
      }
      if (a == 40 && sign == '+' && b == 33) {
        rl.write('40 + 33 = 73\n')
      }
      if (a == 40 && sign == '+' && b == 34) {
        rl.write('40 + 34 = 74\n')
      }
      if (a == 40 && sign == '+' && b == 35) {
        rl.write('40 + 35 = 75\n')
      }
      if (a == 40 && sign == '+' && b == 36) {
        rl.write('40 + 36 = 76\n')
      }
      if (a == 40 && sign == '+' && b == 37) {
        rl.write('40 + 37 = 77\n')
      }
      if (a == 40 && sign == '+' && b == 38) {
        rl.write('40 + 38 = 78\n')
      }
      if (a == 40 && sign == '+' && b == 39) {
        rl.write('40 + 39 = 79\n')
      }
      if (a == 40 && sign == '+' && b == 40) {
        rl.write('40 + 40 = 80\n')
      }
      if (a == 40 && sign == '+' && b == 41) {
        rl.write('40 + 41 = 81\n')
      }
      if (a == 40 && sign == '+' && b == 42) {
        rl.write('40 + 42 = 82\n')
      }
      if (a == 40 && sign == '+' && b == 43) {
        rl.write('40 + 43 = 83\n')
      }
      if (a == 40 && sign == '+' && b == 44) {
        rl.write('40 + 44 = 84\n')
      }
      if (a == 40 && sign == '+' && b == 45) {
        rl.write('40 + 45 = 85\n')
      }
      if (a == 40 && sign == '+' && b == 46) {
        rl.write('40 + 46 = 86\n')
      }
      if (a == 40 && sign == '+' && b == 47) {
        rl.write('40 + 47 = 87\n')
      }
      if (a == 40 && sign == '+' && b == 48) {
        rl.write('40 + 48 = 88\n')
      }
      if (a == 40 && sign == '+' && b == 49) {
        rl.write('40 + 49 = 89\n')
      }
      if (a == 40 && sign == '+' && b == 50) {
        rl.write('40 + 50 = 90\n')
      }
      if (a == 41 && sign == '+' && b == 0) {
        rl.write('41 + 0 = 41\n')
      }
      if (a == 41 && sign == '+' && b == 1) {
        rl.write('41 + 1 = 42\n')
      }
      if (a == 41 && sign == '+' && b == 2) {
        rl.write('41 + 2 = 43\n')
      }
      if (a == 41 && sign == '+' && b == 3) {
        rl.write('41 + 3 = 44\n')
      }
      if (a == 41 && sign == '+' && b == 4) {
        rl.write('41 + 4 = 45\n')
      }
      if (a == 41 && sign == '+' && b == 5) {
        rl.write('41 + 5 = 46\n')
      }
      if (a == 41 && sign == '+' && b == 6) {
        rl.write('41 + 6 = 47\n')
      }
      if (a == 41 && sign == '+' && b == 7) {
        rl.write('41 + 7 = 48\n')
      }
      if (a == 41 && sign == '+' && b == 8) {
        rl.write('41 + 8 = 49\n')
      }
      if (a == 41 && sign == '+' && b == 9) {
        rl.write('41 + 9 = 50\n')
      }
      if (a == 41 && sign == '+' && b == 10) {
        rl.write('41 + 10 = 51\n')
      }
      if (a == 41 && sign == '+' && b == 11) {
        rl.write('41 + 11 = 52\n')
      }
      if (a == 41 && sign == '+' && b == 12) {
        rl.write('41 + 12 = 53\n')
      }
      if (a == 41 && sign == '+' && b == 13) {
        rl.write('41 + 13 = 54\n')
      }
      if (a == 41 && sign == '+' && b == 14) {
        rl.write('41 + 14 = 55\n')
      }
      if (a == 41 && sign == '+' && b == 15) {
        rl.write('41 + 15 = 56\n')
      }
      if (a == 41 && sign == '+' && b == 16) {
        rl.write('41 + 16 = 57\n')
      }
      if (a == 41 && sign == '+' && b == 17) {
        rl.write('41 + 17 = 58\n')
      }
      if (a == 41 && sign == '+' && b == 18) {
        rl.write('41 + 18 = 59\n')
      }
      if (a == 41 && sign == '+' && b == 19) {
        rl.write('41 + 19 = 60\n')
      }
      if (a == 41 && sign == '+' && b == 20) {
        rl.write('41 + 20 = 61\n')
      }
      if (a == 41 && sign == '+' && b == 21) {
        rl.write('41 + 21 = 62\n')
      }
      if (a == 41 && sign == '+' && b == 22) {
        rl.write('41 + 22 = 63\n')
      }
      if (a == 41 && sign == '+' && b == 23) {
        rl.write('41 + 23 = 64\n')
      }
      if (a == 41 && sign == '+' && b == 24) {
        rl.write('41 + 24 = 65\n')
      }
      if (a == 41 && sign == '+' && b == 25) {
        rl.write('41 + 25 = 66\n')
      }
      if (a == 41 && sign == '+' && b == 26) {
        rl.write('41 + 26 = 67\n')
      }
      if (a == 41 && sign == '+' && b == 27) {
        rl.write('41 + 27 = 68\n')
      }
      if (a == 41 && sign == '+' && b == 28) {
        rl.write('41 + 28 = 69\n')
      }
      if (a == 41 && sign == '+' && b == 29) {
        rl.write('41 + 29 = 70\n')
      }
      if (a == 41 && sign == '+' && b == 30) {
        rl.write('41 + 30 = 71\n')
      }
      if (a == 41 && sign == '+' && b == 31) {
        rl.write('41 + 31 = 72\n')
      }
      if (a == 41 && sign == '+' && b == 32) {
        rl.write('41 + 32 = 73\n')
      }
      if (a == 41 && sign == '+' && b == 33) {
        rl.write('41 + 33 = 74\n')
      }
      if (a == 41 && sign == '+' && b == 34) {
        rl.write('41 + 34 = 75\n')
      }
      if (a == 41 && sign == '+' && b == 35) {
        rl.write('41 + 35 = 76\n')
      }
      if (a == 41 && sign == '+' && b == 36) {
        rl.write('41 + 36 = 77\n')
      }
      if (a == 41 && sign == '+' && b == 37) {
        rl.write('41 + 37 = 78\n')
      }
      if (a == 41 && sign == '+' && b == 38) {
        rl.write('41 + 38 = 79\n')
      }
      if (a == 41 && sign == '+' && b == 39) {
        rl.write('41 + 39 = 80\n')
      }
      if (a == 41 && sign == '+' && b == 40) {
        rl.write('41 + 40 = 81\n')
      }
      if (a == 41 && sign == '+' && b == 41) {
        rl.write('41 + 41 = 82\n')
      }
      if (a == 41 && sign == '+' && b == 42) {
        rl.write('41 + 42 = 83\n')
      }
      if (a == 41 && sign == '+' && b == 43) {
        rl.write('41 + 43 = 84\n')
      }
      if (a == 41 && sign == '+' && b == 44) {
        rl.write('41 + 44 = 85\n')
      }
      if (a == 41 && sign == '+' && b == 45) {
        rl.write('41 + 45 = 86\n')
      }
      if (a == 41 && sign == '+' && b == 46) {
        rl.write('41 + 46 = 87\n')
      }
      if (a == 41 && sign == '+' && b == 47) {
        rl.write('41 + 47 = 88\n')
      }
      if (a == 41 && sign == '+' && b == 48) {
        rl.write('41 + 48 = 89\n')
      }
      if (a == 41 && sign == '+' && b == 49) {
        rl.write('41 + 49 = 90\n')
      }
      if (a == 41 && sign == '+' && b == 50) {
        rl.write('41 + 50 = 91\n')
      }
      if (a == 42 && sign == '+' && b == 0) {
        rl.write('42 + 0 = 42\n')
      }
      if (a == 42 && sign == '+' && b == 1) {
        rl.write('42 + 1 = 43\n')
      }
      if (a == 42 && sign == '+' && b == 2) {
        rl.write('42 + 2 = 44\n')
      }
      if (a == 42 && sign == '+' && b == 3) {
        rl.write('42 + 3 = 45\n')
      }
      if (a == 42 && sign == '+' && b == 4) {
        rl.write('42 + 4 = 46\n')
      }
      if (a == 42 && sign == '+' && b == 5) {
        rl.write('42 + 5 = 47\n')
      }
      if (a == 42 && sign == '+' && b == 6) {
        rl.write('42 + 6 = 48\n')
      }
      if (a == 42 && sign == '+' && b == 7) {
        rl.write('42 + 7 = 49\n')
      }
      if (a == 42 && sign == '+' && b == 8) {
        rl.write('42 + 8 = 50\n')
      }
      if (a == 42 && sign == '+' && b == 9) {
        rl.write('42 + 9 = 51\n')
      }
      if (a == 42 && sign == '+' && b == 10) {
        rl.write('42 + 10 = 52\n')
      }
      if (a == 42 && sign == '+' && b == 11) {
        rl.write('42 + 11 = 53\n')
      }
      if (a == 42 && sign == '+' && b == 12) {
        rl.write('42 + 12 = 54\n')
      }
      if (a == 42 && sign == '+' && b == 13) {
        rl.write('42 + 13 = 55\n')
      }
      if (a == 42 && sign == '+' && b == 14) {
        rl.write('42 + 14 = 56\n')
      }
      if (a == 42 && sign == '+' && b == 15) {
        rl.write('42 + 15 = 57\n')
      }
      if (a == 42 && sign == '+' && b == 16) {
        rl.write('42 + 16 = 58\n')
      }
      if (a == 42 && sign == '+' && b == 17) {
        rl.write('42 + 17 = 59\n')
      }
      if (a == 42 && sign == '+' && b == 18) {
        rl.write('42 + 18 = 60\n')
      }
      if (a == 42 && sign == '+' && b == 19) {
        rl.write('42 + 19 = 61\n')
      }
      if (a == 42 && sign == '+' && b == 20) {
        rl.write('42 + 20 = 62\n')
      }
      if (a == 42 && sign == '+' && b == 21) {
        rl.write('42 + 21 = 63\n')
      }
      if (a == 42 && sign == '+' && b == 22) {
        rl.write('42 + 22 = 64\n')
      }
      if (a == 42 && sign == '+' && b == 23) {
        rl.write('42 + 23 = 65\n')
      }
      if (a == 42 && sign == '+' && b == 24) {
        rl.write('42 + 24 = 66\n')
      }
      if (a == 42 && sign == '+' && b == 25) {
        rl.write('42 + 25 = 67\n')
      }
      if (a == 42 && sign == '+' && b == 26) {
        rl.write('42 + 26 = 68\n')
      }
      if (a == 42 && sign == '+' && b == 27) {
        rl.write('42 + 27 = 69\n')
      }
      if (a == 42 && sign == '+' && b == 28) {
        rl.write('42 + 28 = 70\n')
      }
      if (a == 42 && sign == '+' && b == 29) {
        rl.write('42 + 29 = 71\n')
      }
      if (a == 42 && sign == '+' && b == 30) {
        rl.write('42 + 30 = 72\n')
      }
      if (a == 42 && sign == '+' && b == 31) {
        rl.write('42 + 31 = 73\n')
      }
      if (a == 42 && sign == '+' && b == 32) {
        rl.write('42 + 32 = 74\n')
      }
      if (a == 42 && sign == '+' && b == 33) {
        rl.write('42 + 33 = 75\n')
      }
      if (a == 42 && sign == '+' && b == 34) {
        rl.write('42 + 34 = 76\n')
      }
      if (a == 42 && sign == '+' && b == 35) {
        rl.write('42 + 35 = 77\n')
      }
      if (a == 42 && sign == '+' && b == 36) {
        rl.write('42 + 36 = 78\n')
      }
      if (a == 42 && sign == '+' && b == 37) {
        rl.write('42 + 37 = 79\n')
      }
      if (a == 42 && sign == '+' && b == 38) {
        rl.write('42 + 38 = 80\n')
      }
      if (a == 42 && sign == '+' && b == 39) {
        rl.write('42 + 39 = 81\n')
      }
      if (a == 42 && sign == '+' && b == 40) {
        rl.write('42 + 40 = 82\n')
      }
      if (a == 42 && sign == '+' && b == 41) {
        rl.write('42 + 41 = 83\n')
      }
      if (a == 42 && sign == '+' && b == 42) {
        rl.write('42 + 42 = 84\n')
      }
      if (a == 42 && sign == '+' && b == 43) {
        rl.write('42 + 43 = 85\n')
      }
      if (a == 42 && sign == '+' && b == 44) {
        rl.write('42 + 44 = 86\n')
      }
      if (a == 42 && sign == '+' && b == 45) {
        rl.write('42 + 45 = 87\n')
      }
      if (a == 42 && sign == '+' && b == 46) {
        rl.write('42 + 46 = 88\n')
      }
      if (a == 42 && sign == '+' && b == 47) {
        rl.write('42 + 47 = 89\n')
      }
      if (a == 42 && sign == '+' && b == 48) {
        rl.write('42 + 48 = 90\n')
      }
      if (a == 42 && sign == '+' && b == 49) {
        rl.write('42 + 49 = 91\n')
      }
      if (a == 42 && sign == '+' && b == 50) {
        rl.write('42 + 50 = 92\n')
      }
      if (a == 43 && sign == '+' && b == 0) {
        rl.write('43 + 0 = 43\n')
      }
      if (a == 43 && sign == '+' && b == 1) {
        rl.write('43 + 1 = 44\n')
      }
      if (a == 43 && sign == '+' && b == 2) {
        rl.write('43 + 2 = 45\n')
      }
      if (a == 43 && sign == '+' && b == 3) {
        rl.write('43 + 3 = 46\n')
      }
      if (a == 43 && sign == '+' && b == 4) {
        rl.write('43 + 4 = 47\n')
      }
      if (a == 43 && sign == '+' && b == 5) {
        rl.write('43 + 5 = 48\n')
      }
      if (a == 43 && sign == '+' && b == 6) {
        rl.write('43 + 6 = 49\n')
      }
      if (a == 43 && sign == '+' && b == 7) {
        rl.write('43 + 7 = 50\n')
      }
      if (a == 43 && sign == '+' && b == 8) {
        rl.write('43 + 8 = 51\n')
      }
      if (a == 43 && sign == '+' && b == 9) {
        rl.write('43 + 9 = 52\n')
      }
      if (a == 43 && sign == '+' && b == 10) {
        rl.write('43 + 10 = 53\n')
      }
      if (a == 43 && sign == '+' && b == 11) {
        rl.write('43 + 11 = 54\n')
      }
      if (a == 43 && sign == '+' && b == 12) {
        rl.write('43 + 12 = 55\n')
      }
      if (a == 43 && sign == '+' && b == 13) {
        rl.write('43 + 13 = 56\n')
      }
      if (a == 43 && sign == '+' && b == 14) {
        rl.write('43 + 14 = 57\n')
      }
      if (a == 43 && sign == '+' && b == 15) {
        rl.write('43 + 15 = 58\n')
      }
      if (a == 43 && sign == '+' && b == 16) {
        rl.write('43 + 16 = 59\n')
      }
      if (a == 43 && sign == '+' && b == 17) {
        rl.write('43 + 17 = 60\n')
      }
      if (a == 43 && sign == '+' && b == 18) {
        rl.write('43 + 18 = 61\n')
      }
      if (a == 43 && sign == '+' && b == 19) {
        rl.write('43 + 19 = 62\n')
      }
      if (a == 43 && sign == '+' && b == 20) {
        rl.write('43 + 20 = 63\n')
      }
      if (a == 43 && sign == '+' && b == 21) {
        rl.write('43 + 21 = 64\n')
      }
      if (a == 43 && sign == '+' && b == 22) {
        rl.write('43 + 22 = 65\n')
      }
      if (a == 43 && sign == '+' && b == 23) {
        rl.write('43 + 23 = 66\n')
      }
      if (a == 43 && sign == '+' && b == 24) {
        rl.write('43 + 24 = 67\n')
      }
      if (a == 43 && sign == '+' && b == 25) {
        rl.write('43 + 25 = 68\n')
      }
      if (a == 43 && sign == '+' && b == 26) {
        rl.write('43 + 26 = 69\n')
      }
      if (a == 43 && sign == '+' && b == 27) {
        rl.write('43 + 27 = 70\n')
      }
      if (a == 43 && sign == '+' && b == 28) {
        rl.write('43 + 28 = 71\n')
      }
      if (a == 43 && sign == '+' && b == 29) {
        rl.write('43 + 29 = 72\n')
      }
      if (a == 43 && sign == '+' && b == 30) {
        rl.write('43 + 30 = 73\n')
      }
      if (a == 43 && sign == '+' && b == 31) {
        rl.write('43 + 31 = 74\n')
      }
      if (a == 43 && sign == '+' && b == 32) {
        rl.write('43 + 32 = 75\n')
      }
      if (a == 43 && sign == '+' && b == 33) {
        rl.write('43 + 33 = 76\n')
      }
      if (a == 43 && sign == '+' && b == 34) {
        rl.write('43 + 34 = 77\n')
      }
      if (a == 43 && sign == '+' && b == 35) {
        rl.write('43 + 35 = 78\n')
      }
      if (a == 43 && sign == '+' && b == 36) {
        rl.write('43 + 36 = 79\n')
      }
      if (a == 43 && sign == '+' && b == 37) {
        rl.write('43 + 37 = 80\n')
      }
      if (a == 43 && sign == '+' && b == 38) {
        rl.write('43 + 38 = 81\n')
      }
      if (a == 43 && sign == '+' && b == 39) {
        rl.write('43 + 39 = 82\n')
      }
      if (a == 43 && sign == '+' && b == 40) {
        rl.write('43 + 40 = 83\n')
      }
      if (a == 43 && sign == '+' && b == 41) {
        rl.write('43 + 41 = 84\n')
      }
      if (a == 43 && sign == '+' && b == 42) {
        rl.write('43 + 42 = 85\n')
      }
      if (a == 43 && sign == '+' && b == 43) {
        rl.write('43 + 43 = 86\n')
      }
      if (a == 43 && sign == '+' && b == 44) {
        rl.write('43 + 44 = 87\n')
      }
      if (a == 43 && sign == '+' && b == 45) {
        rl.write('43 + 45 = 88\n')
      }
      if (a == 43 && sign == '+' && b == 46) {
        rl.write('43 + 46 = 89\n')
      }
      if (a == 43 && sign == '+' && b == 47) {
        rl.write('43 + 47 = 90\n')
      }
      if (a == 43 && sign == '+' && b == 48) {
        rl.write('43 + 48 = 91\n')
      }
      if (a == 43 && sign == '+' && b == 49) {
        rl.write('43 + 49 = 92\n')
      }
      if (a == 43 && sign == '+' && b == 50) {
        rl.write('43 + 50 = 93\n')
      }
      if (a == 44 && sign == '+' && b == 0) {
        rl.write('44 + 0 = 44\n')
      }
      if (a == 44 && sign == '+' && b == 1) {
        rl.write('44 + 1 = 45\n')
      }
      if (a == 44 && sign == '+' && b == 2) {
        rl.write('44 + 2 = 46\n')
      }
      if (a == 44 && sign == '+' && b == 3) {
        rl.write('44 + 3 = 47\n')
      }
      if (a == 44 && sign == '+' && b == 4) {
        rl.write('44 + 4 = 48\n')
      }
      if (a == 44 && sign == '+' && b == 5) {
        rl.write('44 + 5 = 49\n')
      }
      if (a == 44 && sign == '+' && b == 6) {
        rl.write('44 + 6 = 50\n')
      }
      if (a == 44 && sign == '+' && b == 7) {
        rl.write('44 + 7 = 51\n')
      }
      if (a == 44 && sign == '+' && b == 8) {
        rl.write('44 + 8 = 52\n')
      }
      if (a == 44 && sign == '+' && b == 9) {
        rl.write('44 + 9 = 53\n')
      }
      if (a == 44 && sign == '+' && b == 10) {
        rl.write('44 + 10 = 54\n')
      }
      if (a == 44 && sign == '+' && b == 11) {
        rl.write('44 + 11 = 55\n')
      }
      if (a == 44 && sign == '+' && b == 12) {
        rl.write('44 + 12 = 56\n')
      }
      if (a == 44 && sign == '+' && b == 13) {
        rl.write('44 + 13 = 57\n')
      }
      if (a == 44 && sign == '+' && b == 14) {
        rl.write('44 + 14 = 58\n')
      }
      if (a == 44 && sign == '+' && b == 15) {
        rl.write('44 + 15 = 59\n')
      }
      if (a == 44 && sign == '+' && b == 16) {
        rl.write('44 + 16 = 60\n')
      }
      if (a == 44 && sign == '+' && b == 17) {
        rl.write('44 + 17 = 61\n')
      }
      if (a == 44 && sign == '+' && b == 18) {
        rl.write('44 + 18 = 62\n')
      }
      if (a == 44 && sign == '+' && b == 19) {
        rl.write('44 + 19 = 63\n')
      }
      if (a == 44 && sign == '+' && b == 20) {
        rl.write('44 + 20 = 64\n')
      }
      if (a == 44 && sign == '+' && b == 21) {
        rl.write('44 + 21 = 65\n')
      }
      if (a == 44 && sign == '+' && b == 22) {
        rl.write('44 + 22 = 66\n')
      }
      if (a == 44 && sign == '+' && b == 23) {
        rl.write('44 + 23 = 67\n')
      }
      if (a == 44 && sign == '+' && b == 24) {
        rl.write('44 + 24 = 68\n')
      }
      if (a == 44 && sign == '+' && b == 25) {
        rl.write('44 + 25 = 69\n')
      }
      if (a == 44 && sign == '+' && b == 26) {
        rl.write('44 + 26 = 70\n')
      }
      if (a == 44 && sign == '+' && b == 27) {
        rl.write('44 + 27 = 71\n')
      }
      if (a == 44 && sign == '+' && b == 28) {
        rl.write('44 + 28 = 72\n')
      }
      if (a == 44 && sign == '+' && b == 29) {
        rl.write('44 + 29 = 73\n')
      }
      if (a == 44 && sign == '+' && b == 30) {
        rl.write('44 + 30 = 74\n')
      }
      if (a == 44 && sign == '+' && b == 31) {
        rl.write('44 + 31 = 75\n')
      }
      if (a == 44 && sign == '+' && b == 32) {
        rl.write('44 + 32 = 76\n')
      }
      if (a == 44 && sign == '+' && b == 33) {
        rl.write('44 + 33 = 77\n')
      }
      if (a == 44 && sign == '+' && b == 34) {
        rl.write('44 + 34 = 78\n')
      }
      if (a == 44 && sign == '+' && b == 35) {
        rl.write('44 + 35 = 79\n')
      }
      if (a == 44 && sign == '+' && b == 36) {
        rl.write('44 + 36 = 80\n')
      }
      if (a == 44 && sign == '+' && b == 37) {
        rl.write('44 + 37 = 81\n')
      }
      if (a == 44 && sign == '+' && b == 38) {
        rl.write('44 + 38 = 82\n')
      }
      if (a == 44 && sign == '+' && b == 39) {
        rl.write('44 + 39 = 83\n')
      }
      if (a == 44 && sign == '+' && b == 40) {
        rl.write('44 + 40 = 84\n')
      }
      if (a == 44 && sign == '+' && b == 41) {
        rl.write('44 + 41 = 85\n')
      }
      if (a == 44 && sign == '+' && b == 42) {
        rl.write('44 + 42 = 86\n')
      }
      if (a == 44 && sign == '+' && b == 43) {
        rl.write('44 + 43 = 87\n')
      }
      if (a == 44 && sign == '+' && b == 44) {
        rl.write('44 + 44 = 88\n')
      }
      if (a == 44 && sign == '+' && b == 45) {
        rl.write('44 + 45 = 89\n')
      }
      if (a == 44 && sign == '+' && b == 46) {
        rl.write('44 + 46 = 90\n')
      }
      if (a == 44 && sign == '+' && b == 47) {
        rl.write('44 + 47 = 91\n')
      }
      if (a == 44 && sign == '+' && b == 48) {
        rl.write('44 + 48 = 92\n')
      }
      if (a == 44 && sign == '+' && b == 49) {
        rl.write('44 + 49 = 93\n')
      }
      if (a == 44 && sign == '+' && b == 50) {
        rl.write('44 + 50 = 94\n')
      }
      if (a == 45 && sign == '+' && b == 0) {
        rl.write('45 + 0 = 45\n')
      }
      if (a == 45 && sign == '+' && b == 1) {
        rl.write('45 + 1 = 46\n')
      }
      if (a == 45 && sign == '+' && b == 2) {
        rl.write('45 + 2 = 47\n')
      }
      if (a == 45 && sign == '+' && b == 3) {
        rl.write('45 + 3 = 48\n')
      }
      if (a == 45 && sign == '+' && b == 4) {
        rl.write('45 + 4 = 49\n')
      }
      if (a == 45 && sign == '+' && b == 5) {
        rl.write('45 + 5 = 50\n')
      }
      if (a == 45 && sign == '+' && b == 6) {
        rl.write('45 + 6 = 51\n')
      }
      if (a == 45 && sign == '+' && b == 7) {
        rl.write('45 + 7 = 52\n')
      }
      if (a == 45 && sign == '+' && b == 8) {
        rl.write('45 + 8 = 53\n')
      }
      if (a == 45 && sign == '+' && b == 9) {
        rl.write('45 + 9 = 54\n')
      }
      if (a == 45 && sign == '+' && b == 10) {
        rl.write('45 + 10 = 55\n')
      }
      if (a == 45 && sign == '+' && b == 11) {
        rl.write('45 + 11 = 56\n')
      }
      if (a == 45 && sign == '+' && b == 12) {
        rl.write('45 + 12 = 57\n')
      }
      if (a == 45 && sign == '+' && b == 13) {
        rl.write('45 + 13 = 58\n')
      }
      if (a == 45 && sign == '+' && b == 14) {
        rl.write('45 + 14 = 59\n')
      }
      if (a == 45 && sign == '+' && b == 15) {
        rl.write('45 + 15 = 60\n')
      }
      if (a == 45 && sign == '+' && b == 16) {
        rl.write('45 + 16 = 61\n')
      }
      if (a == 45 && sign == '+' && b == 17) {
        rl.write('45 + 17 = 62\n')
      }
      if (a == 45 && sign == '+' && b == 18) {
        rl.write('45 + 18 = 63\n')
      }
      if (a == 45 && sign == '+' && b == 19) {
        rl.write('45 + 19 = 64\n')
      }
      if (a == 45 && sign == '+' && b == 20) {
        rl.write('45 + 20 = 65\n')
      }
      if (a == 45 && sign == '+' && b == 21) {
        rl.write('45 + 21 = 66\n')
      }
      if (a == 45 && sign == '+' && b == 22) {
        rl.write('45 + 22 = 67\n')
      }
      if (a == 45 && sign == '+' && b == 23) {
        rl.write('45 + 23 = 68\n')
      }
      if (a == 45 && sign == '+' && b == 24) {
        rl.write('45 + 24 = 69\n')
      }
      if (a == 45 && sign == '+' && b == 25) {
        rl.write('45 + 25 = 70\n')
      }
      if (a == 45 && sign == '+' && b == 26) {
        rl.write('45 + 26 = 71\n')
      }
      if (a == 45 && sign == '+' && b == 27) {
        rl.write('45 + 27 = 72\n')
      }
      if (a == 45 && sign == '+' && b == 28) {
        rl.write('45 + 28 = 73\n')
      }
      if (a == 45 && sign == '+' && b == 29) {
        rl.write('45 + 29 = 74\n')
      }
      if (a == 45 && sign == '+' && b == 30) {
        rl.write('45 + 30 = 75\n')
      }
      if (a == 45 && sign == '+' && b == 31) {
        rl.write('45 + 31 = 76\n')
      }
      if (a == 45 && sign == '+' && b == 32) {
        rl.write('45 + 32 = 77\n')
      }
      if (a == 45 && sign == '+' && b == 33) {
        rl.write('45 + 33 = 78\n')
      }
      if (a == 45 && sign == '+' && b == 34) {
        rl.write('45 + 34 = 79\n')
      }
      if (a == 45 && sign == '+' && b == 35) {
        rl.write('45 + 35 = 80\n')
      }
      if (a == 45 && sign == '+' && b == 36) {
        rl.write('45 + 36 = 81\n')
      }
      if (a == 45 && sign == '+' && b == 37) {
        rl.write('45 + 37 = 82\n')
      }
      if (a == 45 && sign == '+' && b == 38) {
        rl.write('45 + 38 = 83\n')
      }
      if (a == 45 && sign == '+' && b == 39) {
        rl.write('45 + 39 = 84\n')
      }
      if (a == 45 && sign == '+' && b == 40) {
        rl.write('45 + 40 = 85\n')
      }
      if (a == 45 && sign == '+' && b == 41) {
        rl.write('45 + 41 = 86\n')
      }
      if (a == 45 && sign == '+' && b == 42) {
        rl.write('45 + 42 = 87\n')
      }
      if (a == 45 && sign == '+' && b == 43) {
        rl.write('45 + 43 = 88\n')
      }
      if (a == 45 && sign == '+' && b == 44) {
        rl.write('45 + 44 = 89\n')
      }
      if (a == 45 && sign == '+' && b == 45) {
        rl.write('45 + 45 = 90\n')
      }
      if (a == 45 && sign == '+' && b == 46) {
        rl.write('45 + 46 = 91\n')
      }
      if (a == 45 && sign == '+' && b == 47) {
        rl.write('45 + 47 = 92\n')
      }
      if (a == 45 && sign == '+' && b == 48) {
        rl.write('45 + 48 = 93\n')
      }
      if (a == 45 && sign == '+' && b == 49) {
        rl.write('45 + 49 = 94\n')
      }
      if (a == 45 && sign == '+' && b == 50) {
        rl.write('45 + 50 = 95\n')
      }
      if (a == 46 && sign == '+' && b == 0) {
        rl.write('46 + 0 = 46\n')
      }
      if (a == 46 && sign == '+' && b == 1) {
        rl.write('46 + 1 = 47\n')
      }
      if (a == 46 && sign == '+' && b == 2) {
        rl.write('46 + 2 = 48\n')
      }
      if (a == 46 && sign == '+' && b == 3) {
        rl.write('46 + 3 = 49\n')
      }
      if (a == 46 && sign == '+' && b == 4) {
        rl.write('46 + 4 = 50\n')
      }
      if (a == 46 && sign == '+' && b == 5) {
        rl.write('46 + 5 = 51\n')
      }
      if (a == 46 && sign == '+' && b == 6) {
        rl.write('46 + 6 = 52\n')
      }
      if (a == 46 && sign == '+' && b == 7) {
        rl.write('46 + 7 = 53\n')
      }
      if (a == 46 && sign == '+' && b == 8) {
        rl.write('46 + 8 = 54\n')
      }
      if (a == 46 && sign == '+' && b == 9) {
        rl.write('46 + 9 = 55\n')
      }
      if (a == 46 && sign == '+' && b == 10) {
        rl.write('46 + 10 = 56\n')
      }
      if (a == 46 && sign == '+' && b == 11) {
        rl.write('46 + 11 = 57\n')
      }
      if (a == 46 && sign == '+' && b == 12) {
        rl.write('46 + 12 = 58\n')
      }
      if (a == 46 && sign == '+' && b == 13) {
        rl.write('46 + 13 = 59\n')
      }
      if (a == 46 && sign == '+' && b == 14) {
        rl.write('46 + 14 = 60\n')
      }
      if (a == 46 && sign == '+' && b == 15) {
        rl.write('46 + 15 = 61\n')
      }
      if (a == 46 && sign == '+' && b == 16) {
        rl.write('46 + 16 = 62\n')
      }
      if (a == 46 && sign == '+' && b == 17) {
        rl.write('46 + 17 = 63\n')
      }
      if (a == 46 && sign == '+' && b == 18) {
        rl.write('46 + 18 = 64\n')
      }
      if (a == 46 && sign == '+' && b == 19) {
        rl.write('46 + 19 = 65\n')
      }
      if (a == 46 && sign == '+' && b == 20) {
        rl.write('46 + 20 = 66\n')
      }
      if (a == 46 && sign == '+' && b == 21) {
        rl.write('46 + 21 = 67\n')
      }
      if (a == 46 && sign == '+' && b == 22) {
        rl.write('46 + 22 = 68\n')
      }
      if (a == 46 && sign == '+' && b == 23) {
        rl.write('46 + 23 = 69\n')
      }
      if (a == 46 && sign == '+' && b == 24) {
        rl.write('46 + 24 = 70\n')
      }
      if (a == 46 && sign == '+' && b == 25) {
        rl.write('46 + 25 = 71\n')
      }
      if (a == 46 && sign == '+' && b == 26) {
        rl.write('46 + 26 = 72\n')
      }
      if (a == 46 && sign == '+' && b == 27) {
        rl.write('46 + 27 = 73\n')
      }
      if (a == 46 && sign == '+' && b == 28) {
        rl.write('46 + 28 = 74\n')
      }
      if (a == 46 && sign == '+' && b == 29) {
        rl.write('46 + 29 = 75\n')
      }
      if (a == 46 && sign == '+' && b == 30) {
        rl.write('46 + 30 = 76\n')
      }
      if (a == 46 && sign == '+' && b == 31) {
        rl.write('46 + 31 = 77\n')
      }
      if (a == 46 && sign == '+' && b == 32) {
        rl.write('46 + 32 = 78\n')
      }
      if (a == 46 && sign == '+' && b == 33) {
        rl.write('46 + 33 = 79\n')
      }
      if (a == 46 && sign == '+' && b == 34) {
        rl.write('46 + 34 = 80\n')
      }
      if (a == 46 && sign == '+' && b == 35) {
        rl.write('46 + 35 = 81\n')
      }
      if (a == 46 && sign == '+' && b == 36) {
        rl.write('46 + 36 = 82\n')
      }
      if (a == 46 && sign == '+' && b == 37) {
        rl.write('46 + 37 = 83\n')
      }
      if (a == 46 && sign == '+' && b == 38) {
        rl.write('46 + 38 = 84\n')
      }
      if (a == 46 && sign == '+' && b == 39) {
        rl.write('46 + 39 = 85\n')
      }
      if (a == 46 && sign == '+' && b == 40) {
        rl.write('46 + 40 = 86\n')
      }
      if (a == 46 && sign == '+' && b == 41) {
        rl.write('46 + 41 = 87\n')
      }
      if (a == 46 && sign == '+' && b == 42) {
        rl.write('46 + 42 = 88\n')
      }
      if (a == 46 && sign == '+' && b == 43) {
        rl.write('46 + 43 = 89\n')
      }
      if (a == 46 && sign == '+' && b == 44) {
        rl.write('46 + 44 = 90\n')
      }
      if (a == 46 && sign == '+' && b == 45) {
        rl.write('46 + 45 = 91\n')
      }
      if (a == 46 && sign == '+' && b == 46) {
        rl.write('46 + 46 = 92\n')
      }
      if (a == 46 && sign == '+' && b == 47) {
        rl.write('46 + 47 = 93\n')
      }
      if (a == 46 && sign == '+' && b == 48) {
        rl.write('46 + 48 = 94\n')
      }
      if (a == 46 && sign == '+' && b == 49) {
        rl.write('46 + 49 = 95\n')
      }
      if (a == 46 && sign == '+' && b == 50) {
        rl.write('46 + 50 = 96\n')
      }
      if (a == 47 && sign == '+' && b == 0) {
        rl.write('47 + 0 = 47\n')
      }
      if (a == 47 && sign == '+' && b == 1) {
        rl.write('47 + 1 = 48\n')
      }
      if (a == 47 && sign == '+' && b == 2) {
        rl.write('47 + 2 = 49\n')
      }
      if (a == 47 && sign == '+' && b == 3) {
        rl.write('47 + 3 = 50\n')
      }
      if (a == 47 && sign == '+' && b == 4) {
        rl.write('47 + 4 = 51\n')
      }
      if (a == 47 && sign == '+' && b == 5) {
        rl.write('47 + 5 = 52\n')
      }
      if (a == 47 && sign == '+' && b == 6) {
        rl.write('47 + 6 = 53\n')
      }
      if (a == 47 && sign == '+' && b == 7) {
        rl.write('47 + 7 = 54\n')
      }
      if (a == 47 && sign == '+' && b == 8) {
        rl.write('47 + 8 = 55\n')
      }
      if (a == 47 && sign == '+' && b == 9) {
        rl.write('47 + 9 = 56\n')
      }
      if (a == 47 && sign == '+' && b == 10) {
        rl.write('47 + 10 = 57\n')
      }
      if (a == 47 && sign == '+' && b == 11) {
        rl.write('47 + 11 = 58\n')
      }
      if (a == 47 && sign == '+' && b == 12) {
        rl.write('47 + 12 = 59\n')
      }
      if (a == 47 && sign == '+' && b == 13) {
        rl.write('47 + 13 = 60\n')
      }
      if (a == 47 && sign == '+' && b == 14) {
        rl.write('47 + 14 = 61\n')
      }
      if (a == 47 && sign == '+' && b == 15) {
        rl.write('47 + 15 = 62\n')
      }
      if (a == 47 && sign == '+' && b == 16) {
        rl.write('47 + 16 = 63\n')
      }
      if (a == 47 && sign == '+' && b == 17) {
        rl.write('47 + 17 = 64\n')
      }
      if (a == 47 && sign == '+' && b == 18) {
        rl.write('47 + 18 = 65\n')
      }
      if (a == 47 && sign == '+' && b == 19) {
        rl.write('47 + 19 = 66\n')
      }
      if (a == 47 && sign == '+' && b == 20) {
        rl.write('47 + 20 = 67\n')
      }
      if (a == 47 && sign == '+' && b == 21) {
        rl.write('47 + 21 = 68\n')
      }
      if (a == 47 && sign == '+' && b == 22) {
        rl.write('47 + 22 = 69\n')
      }
      if (a == 47 && sign == '+' && b == 23) {
        rl.write('47 + 23 = 70\n')
      }
      if (a == 47 && sign == '+' && b == 24) {
        rl.write('47 + 24 = 71\n')
      }
      if (a == 47 && sign == '+' && b == 25) {
        rl.write('47 + 25 = 72\n')
      }
      if (a == 47 && sign == '+' && b == 26) {
        rl.write('47 + 26 = 73\n')
      }
      if (a == 47 && sign == '+' && b == 27) {
        rl.write('47 + 27 = 74\n')
      }
      if (a == 47 && sign == '+' && b == 28) {
        rl.write('47 + 28 = 75\n')
      }
      if (a == 47 && sign == '+' && b == 29) {
        rl.write('47 + 29 = 76\n')
      }
      if (a == 47 && sign == '+' && b == 30) {
        rl.write('47 + 30 = 77\n')
      }
      if (a == 47 && sign == '+' && b == 31) {
        rl.write('47 + 31 = 78\n')
      }
      if (a == 47 && sign == '+' && b == 32) {
        rl.write('47 + 32 = 79\n')
      }
      if (a == 47 && sign == '+' && b == 33) {
        rl.write('47 + 33 = 80\n')
      }
      if (a == 47 && sign == '+' && b == 34) {
        rl.write('47 + 34 = 81\n')
      }
      if (a == 47 && sign == '+' && b == 35) {
        rl.write('47 + 35 = 82\n')
      }
      if (a == 47 && sign == '+' && b == 36) {
        rl.write('47 + 36 = 83\n')
      }
      if (a == 47 && sign == '+' && b == 37) {
        rl.write('47 + 37 = 84\n')
      }
      if (a == 47 && sign == '+' && b == 38) {
        rl.write('47 + 38 = 85\n')
      }
      if (a == 47 && sign == '+' && b == 39) {
        rl.write('47 + 39 = 86\n')
      }
      if (a == 47 && sign == '+' && b == 40) {
        rl.write('47 + 40 = 87\n')
      }
      if (a == 47 && sign == '+' && b == 41) {
        rl.write('47 + 41 = 88\n')
      }
      if (a == 47 && sign == '+' && b == 42) {
        rl.write('47 + 42 = 89\n')
      }
      if (a == 47 && sign == '+' && b == 43) {
        rl.write('47 + 43 = 90\n')
      }
      if (a == 47 && sign == '+' && b == 44) {
        rl.write('47 + 44 = 91\n')
      }
      if (a == 47 && sign == '+' && b == 45) {
        rl.write('47 + 45 = 92\n')
      }
      if (a == 47 && sign == '+' && b == 46) {
        rl.write('47 + 46 = 93\n')
      }
      if (a == 47 && sign == '+' && b == 47) {
        rl.write('47 + 47 = 94\n')
      }
      if (a == 47 && sign == '+' && b == 48) {
        rl.write('47 + 48 = 95\n')
      }
      if (a == 47 && sign == '+' && b == 49) {
        rl.write('47 + 49 = 96\n')
      }
      if (a == 47 && sign == '+' && b == 50) {
        rl.write('47 + 50 = 97\n')
      }
      if (a == 48 && sign == '+' && b == 0) {
        rl.write('48 + 0 = 48\n')
      }
      if (a == 48 && sign == '+' && b == 1) {
        rl.write('48 + 1 = 49\n')
      }
      if (a == 48 && sign == '+' && b == 2) {
        rl.write('48 + 2 = 50\n')
      }
      if (a == 48 && sign == '+' && b == 3) {
        rl.write('48 + 3 = 51\n')
      }
      if (a == 48 && sign == '+' && b == 4) {
        rl.write('48 + 4 = 52\n')
      }
      if (a == 48 && sign == '+' && b == 5) {
        rl.write('48 + 5 = 53\n')
      }
      if (a == 48 && sign == '+' && b == 6) {
        rl.write('48 + 6 = 54\n')
      }
      if (a == 48 && sign == '+' && b == 7) {
        rl.write('48 + 7 = 55\n')
      }
      if (a == 48 && sign == '+' && b == 8) {
        rl.write('48 + 8 = 56\n')
      }
      if (a == 48 && sign == '+' && b == 9) {
        rl.write('48 + 9 = 57\n')
      }
      if (a == 48 && sign == '+' && b == 10) {
        rl.write('48 + 10 = 58\n')
      }
      if (a == 48 && sign == '+' && b == 11) {
        rl.write('48 + 11 = 59\n')
      }
      if (a == 48 && sign == '+' && b == 12) {
        rl.write('48 + 12 = 60\n')
      }
      if (a == 48 && sign == '+' && b == 13) {
        rl.write('48 + 13 = 61\n')
      }
      if (a == 48 && sign == '+' && b == 14) {
        rl.write('48 + 14 = 62\n')
      }
      if (a == 48 && sign == '+' && b == 15) {
        rl.write('48 + 15 = 63\n')
      }
      if (a == 48 && sign == '+' && b == 16) {
        rl.write('48 + 16 = 64\n')
      }
      if (a == 48 && sign == '+' && b == 17) {
        rl.write('48 + 17 = 65\n')
      }
      if (a == 48 && sign == '+' && b == 18) {
        rl.write('48 + 18 = 66\n')
      }
      if (a == 48 && sign == '+' && b == 19) {
        rl.write('48 + 19 = 67\n')
      }
      if (a == 48 && sign == '+' && b == 20) {
        rl.write('48 + 20 = 68\n')
      }
      if (a == 48 && sign == '+' && b == 21) {
        rl.write('48 + 21 = 69\n')
      }
      if (a == 48 && sign == '+' && b == 22) {
        rl.write('48 + 22 = 70\n')
      }
      if (a == 48 && sign == '+' && b == 23) {
        rl.write('48 + 23 = 71\n')
      }
      if (a == 48 && sign == '+' && b == 24) {
        rl.write('48 + 24 = 72\n')
      }
      if (a == 48 && sign == '+' && b == 25) {
        rl.write('48 + 25 = 73\n')
      }
      if (a == 48 && sign == '+' && b == 26) {
        rl.write('48 + 26 = 74\n')
      }
      if (a == 48 && sign == '+' && b == 27) {
        rl.write('48 + 27 = 75\n')
      }
      if (a == 48 && sign == '+' && b == 28) {
        rl.write('48 + 28 = 76\n')
      }
      if (a == 48 && sign == '+' && b == 29) {
        rl.write('48 + 29 = 77\n')
      }
      if (a == 48 && sign == '+' && b == 30) {
        rl.write('48 + 30 = 78\n')
      }
      if (a == 48 && sign == '+' && b == 31) {
        rl.write('48 + 31 = 79\n')
      }
      if (a == 48 && sign == '+' && b == 32) {
        rl.write('48 + 32 = 80\n')
      }
      if (a == 48 && sign == '+' && b == 33) {
        rl.write('48 + 33 = 81\n')
      }
      if (a == 48 && sign == '+' && b == 34) {
        rl.write('48 + 34 = 82\n')
      }
      if (a == 48 && sign == '+' && b == 35) {
        rl.write('48 + 35 = 83\n')
      }
      if (a == 48 && sign == '+' && b == 36) {
        rl.write('48 + 36 = 84\n')
      }
      if (a == 48 && sign == '+' && b == 37) {
        rl.write('48 + 37 = 85\n')
      }
      if (a == 48 && sign == '+' && b == 38) {
        rl.write('48 + 38 = 86\n')
      }
      if (a == 48 && sign == '+' && b == 39) {
        rl.write('48 + 39 = 87\n')
      }
      if (a == 48 && sign == '+' && b == 40) {
        rl.write('48 + 40 = 88\n')
      }
      if (a == 48 && sign == '+' && b == 41) {
        rl.write('48 + 41 = 89\n')
      }
      if (a == 48 && sign == '+' && b == 42) {
        rl.write('48 + 42 = 90\n')
      }
      if (a == 48 && sign == '+' && b == 43) {
        rl.write('48 + 43 = 91\n')
      }
      if (a == 48 && sign == '+' && b == 44) {
        rl.write('48 + 44 = 92\n')
      }
      if (a == 48 && sign == '+' && b == 45) {
        rl.write('48 + 45 = 93\n')
      }
      if (a == 48 && sign == '+' && b == 46) {
        rl.write('48 + 46 = 94\n')
      }
      if (a == 48 && sign == '+' && b == 47) {
        rl.write('48 + 47 = 95\n')
      }
      if (a == 48 && sign == '+' && b == 48) {
        rl.write('48 + 48 = 96\n')
      }
      if (a == 48 && sign == '+' && b == 49) {
        rl.write('48 + 49 = 97\n')
      }
      if (a == 48 && sign == '+' && b == 50) {
        rl.write('48 + 50 = 98\n')
      }
      if (a == 49 && sign == '+' && b == 0) {
        rl.write('49 + 0 = 49\n')
      }
      if (a == 49 && sign == '+' && b == 1) {
        rl.write('49 + 1 = 50\n')
      }
      if (a == 49 && sign == '+' && b == 2) {
        rl.write('49 + 2 = 51\n')
      }
      if (a == 49 && sign == '+' && b == 3) {
        rl.write('49 + 3 = 52\n')
      }
      if (a == 49 && sign == '+' && b == 4) {
        rl.write('49 + 4 = 53\n')
      }
      if (a == 49 && sign == '+' && b == 5) {
        rl.write('49 + 5 = 54\n')
      }
      if (a == 49 && sign == '+' && b == 6) {
        rl.write('49 + 6 = 55\n')
      }
      if (a == 49 && sign == '+' && b == 7) {
        rl.write('49 + 7 = 56\n')
      }
      if (a == 49 && sign == '+' && b == 8) {
        rl.write('49 + 8 = 57\n')
      }
      if (a == 49 && sign == '+' && b == 9) {
        rl.write('49 + 9 = 58\n')
      }
      if (a == 49 && sign == '+' && b == 10) {
        rl.write('49 + 10 = 59\n')
      }
      if (a == 49 && sign == '+' && b == 11) {
        rl.write('49 + 11 = 60\n')
      }
      if (a == 49 && sign == '+' && b == 12) {
        rl.write('49 + 12 = 61\n')
      }
      if (a == 49 && sign == '+' && b == 13) {
        rl.write('49 + 13 = 62\n')
      }
      if (a == 49 && sign == '+' && b == 14) {
        rl.write('49 + 14 = 63\n')
      }
      if (a == 49 && sign == '+' && b == 15) {
        rl.write('49 + 15 = 64\n')
      }
      if (a == 49 && sign == '+' && b == 16) {
        rl.write('49 + 16 = 65\n')
      }
      if (a == 49 && sign == '+' && b == 17) {
        rl.write('49 + 17 = 66\n')
      }
      if (a == 49 && sign == '+' && b == 18) {
        rl.write('49 + 18 = 67\n')
      }
      if (a == 49 && sign == '+' && b == 19) {
        rl.write('49 + 19 = 68\n')
      }
      if (a == 49 && sign == '+' && b == 20) {
        rl.write('49 + 20 = 69\n')
      }
      if (a == 49 && sign == '+' && b == 21) {
        rl.write('49 + 21 = 70\n')
      }
      if (a == 49 && sign == '+' && b == 22) {
        rl.write('49 + 22 = 71\n')
      }
      if (a == 49 && sign == '+' && b == 23) {
        rl.write('49 + 23 = 72\n')
      }
      if (a == 49 && sign == '+' && b == 24) {
        rl.write('49 + 24 = 73\n')
      }
      if (a == 49 && sign == '+' && b == 25) {
        rl.write('49 + 25 = 74\n')
      }
      if (a == 49 && sign == '+' && b == 26) {
        rl.write('49 + 26 = 75\n')
      }
      if (a == 49 && sign == '+' && b == 27) {
        rl.write('49 + 27 = 76\n')
      }
      if (a == 49 && sign == '+' && b == 28) {
        rl.write('49 + 28 = 77\n')
      }
      if (a == 49 && sign == '+' && b == 29) {
        rl.write('49 + 29 = 78\n')
      }
      if (a == 49 && sign == '+' && b == 30) {
        rl.write('49 + 30 = 79\n')
      }
      if (a == 49 && sign == '+' && b == 31) {
        rl.write('49 + 31 = 80\n')
      }
      if (a == 49 && sign == '+' && b == 32) {
        rl.write('49 + 32 = 81\n')
      }
      if (a == 49 && sign == '+' && b == 33) {
        rl.write('49 + 33 = 82\n')
      }
      if (a == 49 && sign == '+' && b == 34) {
        rl.write('49 + 34 = 83\n')
      }
      if (a == 49 && sign == '+' && b == 35) {
        rl.write('49 + 35 = 84\n')
      }
      if (a == 49 && sign == '+' && b == 36) {
        rl.write('49 + 36 = 85\n')
      }
      if (a == 49 && sign == '+' && b == 37) {
        rl.write('49 + 37 = 86\n')
      }
      if (a == 49 && sign == '+' && b == 38) {
        rl.write('49 + 38 = 87\n')
      }
      if (a == 49 && sign == '+' && b == 39) {
        rl.write('49 + 39 = 88\n')
      }
      if (a == 49 && sign == '+' && b == 40) {
        rl.write('49 + 40 = 89\n')
      }
      if (a == 49 && sign == '+' && b == 41) {
        rl.write('49 + 41 = 90\n')
      }
      if (a == 49 && sign == '+' && b == 42) {
        rl.write('49 + 42 = 91\n')
      }
      if (a == 49 && sign == '+' && b == 43) {
        rl.write('49 + 43 = 92\n')
      }
      if (a == 49 && sign == '+' && b == 44) {
        rl.write('49 + 44 = 93\n')
      }
      if (a == 49 && sign == '+' && b == 45) {
        rl.write('49 + 45 = 94\n')
      }
      if (a == 49 && sign == '+' && b == 46) {
        rl.write('49 + 46 = 95\n')
      }
      if (a == 49 && sign == '+' && b == 47) {
        rl.write('49 + 47 = 96\n')
      }
      if (a == 49 && sign == '+' && b == 48) {
        rl.write('49 + 48 = 97\n')
      }
      if (a == 49 && sign == '+' && b == 49) {
        rl.write('49 + 49 = 98\n')
      }
      if (a == 49 && sign == '+' && b == 50) {
        rl.write('49 + 50 = 99\n')
      }
      if (a == 50 && sign == '+' && b == 0) {
        rl.write('50 + 0 = 50\n')
      }
      if (a == 50 && sign == '+' && b == 1) {
        rl.write('50 + 1 = 51\n')
      }
      if (a == 50 && sign == '+' && b == 2) {
        rl.write('50 + 2 = 52\n')
      }
      if (a == 50 && sign == '+' && b == 3) {
        rl.write('50 + 3 = 53\n')
      }
      if (a == 50 && sign == '+' && b == 4) {
        rl.write('50 + 4 = 54\n')
      }
      if (a == 50 && sign == '+' && b == 5) {
        rl.write('50 + 5 = 55\n')
      }
      if (a == 50 && sign == '+' && b == 6) {
        rl.write('50 + 6 = 56\n')
      }
      if (a == 50 && sign == '+' && b == 7) {
        rl.write('50 + 7 = 57\n')
      }
      if (a == 50 && sign == '+' && b == 8) {
        rl.write('50 + 8 = 58\n')
      }
      if (a == 50 && sign == '+' && b == 9) {
        rl.write('50 + 9 = 59\n')
      }
      if (a == 50 && sign == '+' && b == 10) {
        rl.write('50 + 10 = 60\n')
      }
      if (a == 50 && sign == '+' && b == 11) {
        rl.write('50 + 11 = 61\n')
      }
      if (a == 50 && sign == '+' && b == 12) {
        rl.write('50 + 12 = 62\n')
      }
      if (a == 50 && sign == '+' && b == 13) {
        rl.write('50 + 13 = 63\n')
      }
      if (a == 50 && sign == '+' && b == 14) {
        rl.write('50 + 14 = 64\n')
      }
      if (a == 50 && sign == '+' && b == 15) {
        rl.write('50 + 15 = 65\n')
      }
      if (a == 50 && sign == '+' && b == 16) {
        rl.write('50 + 16 = 66\n')
      }
      if (a == 50 && sign == '+' && b == 17) {
        rl.write('50 + 17 = 67\n')
      }
      if (a == 50 && sign == '+' && b == 18) {
        rl.write('50 + 18 = 68\n')
      }
      if (a == 50 && sign == '+' && b == 19) {
        rl.write('50 + 19 = 69\n')
      }
      if (a == 50 && sign == '+' && b == 20) {
        rl.write('50 + 20 = 70\n')
      }
      if (a == 50 && sign == '+' && b == 21) {
        rl.write('50 + 21 = 71\n')
      }
      if (a == 50 && sign == '+' && b == 22) {
        rl.write('50 + 22 = 72\n')
      }
      if (a == 50 && sign == '+' && b == 23) {
        rl.write('50 + 23 = 73\n')
      }
      if (a == 50 && sign == '+' && b == 24) {
        rl.write('50 + 24 = 74\n')
      }
      if (a == 50 && sign == '+' && b == 25) {
        rl.write('50 + 25 = 75\n')
      }
      if (a == 50 && sign == '+' && b == 26) {
        rl.write('50 + 26 = 76\n')
      }
      if (a == 50 && sign == '+' && b == 27) {
        rl.write('50 + 27 = 77\n')
      }
      if (a == 50 && sign == '+' && b == 28) {
        rl.write('50 + 28 = 78\n')
      }
      if (a == 50 && sign == '+' && b == 29) {
        rl.write('50 + 29 = 79\n')
      }
      if (a == 50 && sign == '+' && b == 30) {
        rl.write('50 + 30 = 80\n')
      }
      if (a == 50 && sign == '+' && b == 31) {
        rl.write('50 + 31 = 81\n')
      }
      if (a == 50 && sign == '+' && b == 32) {
        rl.write('50 + 32 = 82\n')
      }
      if (a == 50 && sign == '+' && b == 33) {
        rl.write('50 + 33 = 83\n')
      }
      if (a == 50 && sign == '+' && b == 34) {
        rl.write('50 + 34 = 84\n')
      }
      if (a == 50 && sign == '+' && b == 35) {
        rl.write('50 + 35 = 85\n')
      }
      if (a == 50 && sign == '+' && b == 36) {
        rl.write('50 + 36 = 86\n')
      }
      if (a == 50 && sign == '+' && b == 37) {
        rl.write('50 + 37 = 87\n')
      }
      if (a == 50 && sign == '+' && b == 38) {
        rl.write('50 + 38 = 88\n')
      }
      if (a == 50 && sign == '+' && b == 39) {
        rl.write('50 + 39 = 89\n')
      }
      if (a == 50 && sign == '+' && b == 40) {
        rl.write('50 + 40 = 90\n')
      }
      if (a == 50 && sign == '+' && b == 41) {
        rl.write('50 + 41 = 91\n')
      }
      if (a == 50 && sign == '+' && b == 42) {
        rl.write('50 + 42 = 92\n')
      }
      if (a == 50 && sign == '+' && b == 43) {
        rl.write('50 + 43 = 93\n')
      }
      if (a == 50 && sign == '+' && b == 44) {
        rl.write('50 + 44 = 94\n')
      }
      if (a == 50 && sign == '+' && b == 45) {
        rl.write('50 + 45 = 95\n')
      }
      if (a == 50 && sign == '+' && b == 46) {
        rl.write('50 + 46 = 96\n')
      }
      if (a == 50 && sign == '+' && b == 47) {
        rl.write('50 + 47 = 97\n')
      }
      if (a == 50 && sign == '+' && b == 48) {
        rl.write('50 + 48 = 98\n')
      }
      if (a == 50 && sign == '+' && b == 49) {
        rl.write('50 + 49 = 99\n')
      }
      if (a == 50 && sign == '+' && b == 50) {
        rl.write('50 + 50 = 100\n')
      }
      if (a == 0 && sign == '-' && b == 0) {
        rl.write('0 - 0 = 0\n')
      }
      if (a == 0 && sign == '-' && b == 1) {
        rl.write('0 - 1 = -1\n')
      }
      if (a == 0 && sign == '-' && b == 2) {
        rl.write('0 - 2 = -2\n')
      }
      if (a == 0 && sign == '-' && b == 3) {
        rl.write('0 - 3 = -3\n')
      }
      if (a == 0 && sign == '-' && b == 4) {
        rl.write('0 - 4 = -4\n')
      }
      if (a == 0 && sign == '-' && b == 5) {
        rl.write('0 - 5 = -5\n')
      }
      if (a == 0 && sign == '-' && b == 6) {
        rl.write('0 - 6 = -6\n')
      }
      if (a == 0 && sign == '-' && b == 7) {
        rl.write('0 - 7 = -7\n')
      }
      if (a == 0 && sign == '-' && b == 8) {
        rl.write('0 - 8 = -8\n')
      }
      if (a == 0 && sign == '-' && b == 9) {
        rl.write('0 - 9 = -9\n')
      }
      if (a == 0 && sign == '-' && b == 10) {
        rl.write('0 - 10 = -10\n')
      }
      if (a == 0 && sign == '-' && b == 11) {
        rl.write('0 - 11 = -11\n')
      }
      if (a == 0 && sign == '-' && b == 12) {
        rl.write('0 - 12 = -12\n')
      }
      if (a == 0 && sign == '-' && b == 13) {
        rl.write('0 - 13 = -13\n')
      }
      if (a == 0 && sign == '-' && b == 14) {
        rl.write('0 - 14 = -14\n')
      }
      if (a == 0 && sign == '-' && b == 15) {
        rl.write('0 - 15 = -15\n')
      }
      if (a == 0 && sign == '-' && b == 16) {
        rl.write('0 - 16 = -16\n')
      }
      if (a == 0 && sign == '-' && b == 17) {
        rl.write('0 - 17 = -17\n')
      }
      if (a == 0 && sign == '-' && b == 18) {
        rl.write('0 - 18 = -18\n')
      }
      if (a == 0 && sign == '-' && b == 19) {
        rl.write('0 - 19 = -19\n')
      }
      if (a == 0 && sign == '-' && b == 20) {
        rl.write('0 - 20 = -20\n')
      }
      if (a == 0 && sign == '-' && b == 21) {
        rl.write('0 - 21 = -21\n')
      }
      if (a == 0 && sign == '-' && b == 22) {
        rl.write('0 - 22 = -22\n')
      }
      if (a == 0 && sign == '-' && b == 23) {
        rl.write('0 - 23 = -23\n')
      }
      if (a == 0 && sign == '-' && b == 24) {
        rl.write('0 - 24 = -24\n')
      }
      if (a == 0 && sign == '-' && b == 25) {
        rl.write('0 - 25 = -25\n')
      }
      if (a == 0 && sign == '-' && b == 26) {
        rl.write('0 - 26 = -26\n')
      }
      if (a == 0 && sign == '-' && b == 27) {
        rl.write('0 - 27 = -27\n')
      }
      if (a == 0 && sign == '-' && b == 28) {
        rl.write('0 - 28 = -28\n')
      }
      if (a == 0 && sign == '-' && b == 29) {
        rl.write('0 - 29 = -29\n')
      }
      if (a == 0 && sign == '-' && b == 30) {
        rl.write('0 - 30 = -30\n')
      }
      if (a == 0 && sign == '-' && b == 31) {
        rl.write('0 - 31 = -31\n')
      }
      if (a == 0 && sign == '-' && b == 32) {
        rl.write('0 - 32 = -32\n')
      }
      if (a == 0 && sign == '-' && b == 33) {
        rl.write('0 - 33 = -33\n')
      }
      if (a == 0 && sign == '-' && b == 34) {
        rl.write('0 - 34 = -34\n')
      }
      if (a == 0 && sign == '-' && b == 35) {
        rl.write('0 - 35 = -35\n')
      }
      if (a == 0 && sign == '-' && b == 36) {
        rl.write('0 - 36 = -36\n')
      }
      if (a == 0 && sign == '-' && b == 37) {
        rl.write('0 - 37 = -37\n')
      }
      if (a == 0 && sign == '-' && b == 38) {
        rl.write('0 - 38 = -38\n')
      }
      if (a == 0 && sign == '-' && b == 39) {
        rl.write('0 - 39 = -39\n')
      }
      if (a == 0 && sign == '-' && b == 40) {
        rl.write('0 - 40 = -40\n')
      }
      if (a == 0 && sign == '-' && b == 41) {
        rl.write('0 - 41 = -41\n')
      }
      if (a == 0 && sign == '-' && b == 42) {
        rl.write('0 - 42 = -42\n')
      }
      if (a == 0 && sign == '-' && b == 43) {
        rl.write('0 - 43 = -43\n')
      }
      if (a == 0 && sign == '-' && b == 44) {
        rl.write('0 - 44 = -44\n')
      }
      if (a == 0 && sign == '-' && b == 45) {
        rl.write('0 - 45 = -45\n')
      }
      if (a == 0 && sign == '-' && b == 46) {
        rl.write('0 - 46 = -46\n')
      }
      if (a == 0 && sign == '-' && b == 47) {
        rl.write('0 - 47 = -47\n')
      }
      if (a == 0 && sign == '-' && b == 48) {
        rl.write('0 - 48 = -48\n')
      }
      if (a == 0 && sign == '-' && b == 49) {
        rl.write('0 - 49 = -49\n')
      }
      if (a == 0 && sign == '-' && b == 50) {
        rl.write('0 - 50 = -50\n')
      }
      if (a == 1 && sign == '-' && b == 0) {
        rl.write('1 - 0 = 1\n')
      }
      if (a == 1 && sign == '-' && b == 1) {
        rl.write('1 - 1 = 0\n')
      }
      if (a == 1 && sign == '-' && b == 2) {
        rl.write('1 - 2 = -1\n')
      }
      if (a == 1 && sign == '-' && b == 3) {
        rl.write('1 - 3 = -2\n')
      }
      if (a == 1 && sign == '-' && b == 4) {
        rl.write('1 - 4 = -3\n')
      }
      if (a == 1 && sign == '-' && b == 5) {
        rl.write('1 - 5 = -4\n')
      }
      if (a == 1 && sign == '-' && b == 6) {
        rl.write('1 - 6 = -5\n')
      }
      if (a == 1 && sign == '-' && b == 7) {
        rl.write('1 - 7 = -6\n')
      }
      if (a == 1 && sign == '-' && b == 8) {
        rl.write('1 - 8 = -7\n')
      }
      if (a == 1 && sign == '-' && b == 9) {
        rl.write('1 - 9 = -8\n')
      }
      if (a == 1 && sign == '-' && b == 10) {
        rl.write('1 - 10 = -9\n')
      }
      if (a == 1 && sign == '-' && b == 11) {
        rl.write('1 - 11 = -10\n')
      }
      if (a == 1 && sign == '-' && b == 12) {
        rl.write('1 - 12 = -11\n')
      }
      if (a == 1 && sign == '-' && b == 13) {
        rl.write('1 - 13 = -12\n')
      }
      if (a == 1 && sign == '-' && b == 14) {
        rl.write('1 - 14 = -13\n')
      }
      if (a == 1 && sign == '-' && b == 15) {
        rl.write('1 - 15 = -14\n')
      }
      if (a == 1 && sign == '-' && b == 16) {
        rl.write('1 - 16 = -15\n')
      }
      if (a == 1 && sign == '-' && b == 17) {
        rl.write('1 - 17 = -16\n')
      }
      if (a == 1 && sign == '-' && b == 18) {
        rl.write('1 - 18 = -17\n')
      }
      if (a == 1 && sign == '-' && b == 19) {
        rl.write('1 - 19 = -18\n')
      }
      if (a == 1 && sign == '-' && b == 20) {
        rl.write('1 - 20 = -19\n')
      }
      if (a == 1 && sign == '-' && b == 21) {
        rl.write('1 - 21 = -20\n')
      }
      if (a == 1 && sign == '-' && b == 22) {
        rl.write('1 - 22 = -21\n')
      }
      if (a == 1 && sign == '-' && b == 23) {
        rl.write('1 - 23 = -22\n')
      }
      if (a == 1 && sign == '-' && b == 24) {
        rl.write('1 - 24 = -23\n')
      }
      if (a == 1 && sign == '-' && b == 25) {
        rl.write('1 - 25 = -24\n')
      }
      if (a == 1 && sign == '-' && b == 26) {
        rl.write('1 - 26 = -25\n')
      }
      if (a == 1 && sign == '-' && b == 27) {
        rl.write('1 - 27 = -26\n')
      }
      if (a == 1 && sign == '-' && b == 28) {
        rl.write('1 - 28 = -27\n')
      }
      if (a == 1 && sign == '-' && b == 29) {
        rl.write('1 - 29 = -28\n')
      }
      if (a == 1 && sign == '-' && b == 30) {
        rl.write('1 - 30 = -29\n')
      }
      if (a == 1 && sign == '-' && b == 31) {
        rl.write('1 - 31 = -30\n')
      }
      if (a == 1 && sign == '-' && b == 32) {
        rl.write('1 - 32 = -31\n')
      }
      if (a == 1 && sign == '-' && b == 33) {
        rl.write('1 - 33 = -32\n')
      }
      if (a == 1 && sign == '-' && b == 34) {
        rl.write('1 - 34 = -33\n')
      }
      if (a == 1 && sign == '-' && b == 35) {
        rl.write('1 - 35 = -34\n')
      }
      if (a == 1 && sign == '-' && b == 36) {
        rl.write('1 - 36 = -35\n')
      }
      if (a == 1 && sign == '-' && b == 37) {
        rl.write('1 - 37 = -36\n')
      }
      if (a == 1 && sign == '-' && b == 38) {
        rl.write('1 - 38 = -37\n')
      }
      if (a == 1 && sign == '-' && b == 39) {
        rl.write('1 - 39 = -38\n')
      }
      if (a == 1 && sign == '-' && b == 40) {
        rl.write('1 - 40 = -39\n')
      }
      if (a == 1 && sign == '-' && b == 41) {
        rl.write('1 - 41 = -40\n')
      }
      if (a == 1 && sign == '-' && b == 42) {
        rl.write('1 - 42 = -41\n')
      }
      if (a == 1 && sign == '-' && b == 43) {
        rl.write('1 - 43 = -42\n')
      }
      if (a == 1 && sign == '-' && b == 44) {
        rl.write('1 - 44 = -43\n')
      }
      if (a == 1 && sign == '-' && b == 45) {
        rl.write('1 - 45 = -44\n')
      }
      if (a == 1 && sign == '-' && b == 46) {
        rl.write('1 - 46 = -45\n')
      }
      if (a == 1 && sign == '-' && b == 47) {
        rl.write('1 - 47 = -46\n')
      }
      if (a == 1 && sign == '-' && b == 48) {
        rl.write('1 - 48 = -47\n')
      }
      if (a == 1 && sign == '-' && b == 49) {
        rl.write('1 - 49 = -48\n')
      }
      if (a == 1 && sign == '-' && b == 50) {
        rl.write('1 - 50 = -49\n')
      }
      if (a == 2 && sign == '-' && b == 0) {
        rl.write('2 - 0 = 2\n')
      }
      if (a == 2 && sign == '-' && b == 1) {
        rl.write('2 - 1 = 1\n')
      }
      if (a == 2 && sign == '-' && b == 2) {
        rl.write('2 - 2 = 0\n')
      }
      if (a == 2 && sign == '-' && b == 3) {
        rl.write('2 - 3 = -1\n')
      }
      if (a == 2 && sign == '-' && b == 4) {
        rl.write('2 - 4 = -2\n')
      }
      if (a == 2 && sign == '-' && b == 5) {
        rl.write('2 - 5 = -3\n')
      }
      if (a == 2 && sign == '-' && b == 6) {
        rl.write('2 - 6 = -4\n')
      }
      if (a == 2 && sign == '-' && b == 7) {
        rl.write('2 - 7 = -5\n')
      }
      if (a == 2 && sign == '-' && b == 8) {
        rl.write('2 - 8 = -6\n')
      }
      if (a == 2 && sign == '-' && b == 9) {
        rl.write('2 - 9 = -7\n')
      }
      if (a == 2 && sign == '-' && b == 10) {
        rl.write('2 - 10 = -8\n')
      }
      if (a == 2 && sign == '-' && b == 11) {
        rl.write('2 - 11 = -9\n')
      }
      if (a == 2 && sign == '-' && b == 12) {
        rl.write('2 - 12 = -10\n')
      }
      if (a == 2 && sign == '-' && b == 13) {
        rl.write('2 - 13 = -11\n')
      }
      if (a == 2 && sign == '-' && b == 14) {
        rl.write('2 - 14 = -12\n')
      }
      if (a == 2 && sign == '-' && b == 15) {
        rl.write('2 - 15 = -13\n')
      }
      if (a == 2 && sign == '-' && b == 16) {
        rl.write('2 - 16 = -14\n')
      }
      if (a == 2 && sign == '-' && b == 17) {
        rl.write('2 - 17 = -15\n')
      }
      if (a == 2 && sign == '-' && b == 18) {
        rl.write('2 - 18 = -16\n')
      }
      if (a == 2 && sign == '-' && b == 19) {
        rl.write('2 - 19 = -17\n')
      }
      if (a == 2 && sign == '-' && b == 20) {
        rl.write('2 - 20 = -18\n')
      }
      if (a == 2 && sign == '-' && b == 21) {
        rl.write('2 - 21 = -19\n')
      }
      if (a == 2 && sign == '-' && b == 22) {
        rl.write('2 - 22 = -20\n')
      }
      if (a == 2 && sign == '-' && b == 23) {
        rl.write('2 - 23 = -21\n')
      }
      if (a == 2 && sign == '-' && b == 24) {
        rl.write('2 - 24 = -22\n')
      }
      if (a == 2 && sign == '-' && b == 25) {
        rl.write('2 - 25 = -23\n')
      }
      if (a == 2 && sign == '-' && b == 26) {
        rl.write('2 - 26 = -24\n')
      }
      if (a == 2 && sign == '-' && b == 27) {
        rl.write('2 - 27 = -25\n')
      }
      if (a == 2 && sign == '-' && b == 28) {
        rl.write('2 - 28 = -26\n')
      }
      if (a == 2 && sign == '-' && b == 29) {
        rl.write('2 - 29 = -27\n')
      }
      if (a == 2 && sign == '-' && b == 30) {
        rl.write('2 - 30 = -28\n')
      }
      if (a == 2 && sign == '-' && b == 31) {
        rl.write('2 - 31 = -29\n')
      }
      if (a == 2 && sign == '-' && b == 32) {
        rl.write('2 - 32 = -30\n')
      }
      if (a == 2 && sign == '-' && b == 33) {
        rl.write('2 - 33 = -31\n')
      }
      if (a == 2 && sign == '-' && b == 34) {
        rl.write('2 - 34 = -32\n')
      }
      if (a == 2 && sign == '-' && b == 35) {
        rl.write('2 - 35 = -33\n')
      }
      if (a == 2 && sign == '-' && b == 36) {
        rl.write('2 - 36 = -34\n')
      }
      if (a == 2 && sign == '-' && b == 37) {
        rl.write('2 - 37 = -35\n')
      }
      if (a == 2 && sign == '-' && b == 38) {
        rl.write('2 - 38 = -36\n')
      }
      if (a == 2 && sign == '-' && b == 39) {
        rl.write('2 - 39 = -37\n')
      }
      if (a == 2 && sign == '-' && b == 40) {
        rl.write('2 - 40 = -38\n')
      }
      if (a == 2 && sign == '-' && b == 41) {
        rl.write('2 - 41 = -39\n')
      }
      if (a == 2 && sign == '-' && b == 42) {
        rl.write('2 - 42 = -40\n')
      }
      if (a == 2 && sign == '-' && b == 43) {
        rl.write('2 - 43 = -41\n')
      }
      if (a == 2 && sign == '-' && b == 44) {
        rl.write('2 - 44 = -42\n')
      }
      if (a == 2 && sign == '-' && b == 45) {
        rl.write('2 - 45 = -43\n')
      }
      if (a == 2 && sign == '-' && b == 46) {
        rl.write('2 - 46 = -44\n')
      }
      if (a == 2 && sign == '-' && b == 47) {
        rl.write('2 - 47 = -45\n')
      }
      if (a == 2 && sign == '-' && b == 48) {
        rl.write('2 - 48 = -46\n')
      }
      if (a == 2 && sign == '-' && b == 49) {
        rl.write('2 - 49 = -47\n')
      }
      if (a == 2 && sign == '-' && b == 50) {
        rl.write('2 - 50 = -48\n')
      }
      if (a == 3 && sign == '-' && b == 0) {
        rl.write('3 - 0 = 3\n')
      }
      if (a == 3 && sign == '-' && b == 1) {
        rl.write('3 - 1 = 2\n')
      }
      if (a == 3 && sign == '-' && b == 2) {
        rl.write('3 - 2 = 1\n')
      }
      if (a == 3 && sign == '-' && b == 3) {
        rl.write('3 - 3 = 0\n')
      }
      if (a == 3 && sign == '-' && b == 4) {
        rl.write('3 - 4 = -1\n')
      }
      if (a == 3 && sign == '-' && b == 5) {
        rl.write('3 - 5 = -2\n')
      }
      if (a == 3 && sign == '-' && b == 6) {
        rl.write('3 - 6 = -3\n')
      }
      if (a == 3 && sign == '-' && b == 7) {
        rl.write('3 - 7 = -4\n')
      }
      if (a == 3 && sign == '-' && b == 8) {
        rl.write('3 - 8 = -5\n')
      }
      if (a == 3 && sign == '-' && b == 9) {
        rl.write('3 - 9 = -6\n')
      }
      if (a == 3 && sign == '-' && b == 10) {
        rl.write('3 - 10 = -7\n')
      }
      if (a == 3 && sign == '-' && b == 11) {
        rl.write('3 - 11 = -8\n')
      }
      if (a == 3 && sign == '-' && b == 12) {
        rl.write('3 - 12 = -9\n')
      }
      if (a == 3 && sign == '-' && b == 13) {
        rl.write('3 - 13 = -10\n')
      }
      if (a == 3 && sign == '-' && b == 14) {
        rl.write('3 - 14 = -11\n')
      }
      if (a == 3 && sign == '-' && b == 15) {
        rl.write('3 - 15 = -12\n')
      }
      if (a == 3 && sign == '-' && b == 16) {
        rl.write('3 - 16 = -13\n')
      }
      if (a == 3 && sign == '-' && b == 17) {
        rl.write('3 - 17 = -14\n')
      }
      if (a == 3 && sign == '-' && b == 18) {
        rl.write('3 - 18 = -15\n')
      }
      if (a == 3 && sign == '-' && b == 19) {
        rl.write('3 - 19 = -16\n')
      }
      if (a == 3 && sign == '-' && b == 20) {
        rl.write('3 - 20 = -17\n')
      }
      if (a == 3 && sign == '-' && b == 21) {
        rl.write('3 - 21 = -18\n')
      }
      if (a == 3 && sign == '-' && b == 22) {
        rl.write('3 - 22 = -19\n')
      }
      if (a == 3 && sign == '-' && b == 23) {
        rl.write('3 - 23 = -20\n')
      }
      if (a == 3 && sign == '-' && b == 24) {
        rl.write('3 - 24 = -21\n')
      }
      if (a == 3 && sign == '-' && b == 25) {
        rl.write('3 - 25 = -22\n')
      }
      if (a == 3 && sign == '-' && b == 26) {
        rl.write('3 - 26 = -23\n')
      }
      if (a == 3 && sign == '-' && b == 27) {
        rl.write('3 - 27 = -24\n')
      }
      if (a == 3 && sign == '-' && b == 28) {
        rl.write('3 - 28 = -25\n')
      }
      if (a == 3 && sign == '-' && b == 29) {
        rl.write('3 - 29 = -26\n')
      }
      if (a == 3 && sign == '-' && b == 30) {
        rl.write('3 - 30 = -27\n')
      }
      if (a == 3 && sign == '-' && b == 31) {
        rl.write('3 - 31 = -28\n')
      }
      if (a == 3 && sign == '-' && b == 32) {
        rl.write('3 - 32 = -29\n')
      }
      if (a == 3 && sign == '-' && b == 33) {
        rl.write('3 - 33 = -30\n')
      }
      if (a == 3 && sign == '-' && b == 34) {
        rl.write('3 - 34 = -31\n')
      }
      if (a == 3 && sign == '-' && b == 35) {
        rl.write('3 - 35 = -32\n')
      }
      if (a == 3 && sign == '-' && b == 36) {
        rl.write('3 - 36 = -33\n')
      }
      if (a == 3 && sign == '-' && b == 37) {
        rl.write('3 - 37 = -34\n')
      }
      if (a == 3 && sign == '-' && b == 38) {
        rl.write('3 - 38 = -35\n')
      }
      if (a == 3 && sign == '-' && b == 39) {
        rl.write('3 - 39 = -36\n')
      }
      if (a == 3 && sign == '-' && b == 40) {
        rl.write('3 - 40 = -37\n')
      }
      if (a == 3 && sign == '-' && b == 41) {
        rl.write('3 - 41 = -38\n')
      }
      if (a == 3 && sign == '-' && b == 42) {
        rl.write('3 - 42 = -39\n')
      }
      if (a == 3 && sign == '-' && b == 43) {
        rl.write('3 - 43 = -40\n')
      }
      if (a == 3 && sign == '-' && b == 44) {
        rl.write('3 - 44 = -41\n')
      }
      if (a == 3 && sign == '-' && b == 45) {
        rl.write('3 - 45 = -42\n')
      }
      if (a == 3 && sign == '-' && b == 46) {
        rl.write('3 - 46 = -43\n')
      }
      if (a == 3 && sign == '-' && b == 47) {
        rl.write('3 - 47 = -44\n')
      }
      if (a == 3 && sign == '-' && b == 48) {
        rl.write('3 - 48 = -45\n')
      }
      if (a == 3 && sign == '-' && b == 49) {
        rl.write('3 - 49 = -46\n')
      }
      if (a == 3 && sign == '-' && b == 50) {
        rl.write('3 - 50 = -47\n')
      }
      if (a == 4 && sign == '-' && b == 0) {
        rl.write('4 - 0 = 4\n')
      }
      if (a == 4 && sign == '-' && b == 1) {
        rl.write('4 - 1 = 3\n')
      }
      if (a == 4 && sign == '-' && b == 2) {
        rl.write('4 - 2 = 2\n')
      }
      if (a == 4 && sign == '-' && b == 3) {
        rl.write('4 - 3 = 1\n')
      }
      if (a == 4 && sign == '-' && b == 4) {
        rl.write('4 - 4 = 0\n')
      }
      if (a == 4 && sign == '-' && b == 5) {
        rl.write('4 - 5 = -1\n')
      }
      if (a == 4 && sign == '-' && b == 6) {
        rl.write('4 - 6 = -2\n')
      }
      if (a == 4 && sign == '-' && b == 7) {
        rl.write('4 - 7 = -3\n')
      }
      if (a == 4 && sign == '-' && b == 8) {
        rl.write('4 - 8 = -4\n')
      }
      if (a == 4 && sign == '-' && b == 9) {
        rl.write('4 - 9 = -5\n')
      }
      if (a == 4 && sign == '-' && b == 10) {
        rl.write('4 - 10 = -6\n')
      }
      if (a == 4 && sign == '-' && b == 11) {
        rl.write('4 - 11 = -7\n')
      }
      if (a == 4 && sign == '-' && b == 12) {
        rl.write('4 - 12 = -8\n')
      }
      if (a == 4 && sign == '-' && b == 13) {
        rl.write('4 - 13 = -9\n')
      }
      if (a == 4 && sign == '-' && b == 14) {
        rl.write('4 - 14 = -10\n')
      }
      if (a == 4 && sign == '-' && b == 15) {
        rl.write('4 - 15 = -11\n')
      }
      if (a == 4 && sign == '-' && b == 16) {
        rl.write('4 - 16 = -12\n')
      }
      if (a == 4 && sign == '-' && b == 17) {
        rl.write('4 - 17 = -13\n')
      }
      if (a == 4 && sign == '-' && b == 18) {
        rl.write('4 - 18 = -14\n')
      }
      if (a == 4 && sign == '-' && b == 19) {
        rl.write('4 - 19 = -15\n')
      }
      if (a == 4 && sign == '-' && b == 20) {
        rl.write('4 - 20 = -16\n')
      }
      if (a == 4 && sign == '-' && b == 21) {
        rl.write('4 - 21 = -17\n')
      }
      if (a == 4 && sign == '-' && b == 22) {
        rl.write('4 - 22 = -18\n')
      }
      if (a == 4 && sign == '-' && b == 23) {
        rl.write('4 - 23 = -19\n')
      }
      if (a == 4 && sign == '-' && b == 24) {
        rl.write('4 - 24 = -20\n')
      }
      if (a == 4 && sign == '-' && b == 25) {
        rl.write('4 - 25 = -21\n')
      }
      if (a == 4 && sign == '-' && b == 26) {
        rl.write('4 - 26 = -22\n')
      }
      if (a == 4 && sign == '-' && b == 27) {
        rl.write('4 - 27 = -23\n')
      }
      if (a == 4 && sign == '-' && b == 28) {
        rl.write('4 - 28 = -24\n')
      }
      if (a == 4 && sign == '-' && b == 29) {
        rl.write('4 - 29 = -25\n')
      }
      if (a == 4 && sign == '-' && b == 30) {
        rl.write('4 - 30 = -26\n')
      }
      if (a == 4 && sign == '-' && b == 31) {
        rl.write('4 - 31 = -27\n')
      }
      if (a == 4 && sign == '-' && b == 32) {
        rl.write('4 - 32 = -28\n')
      }
      if (a == 4 && sign == '-' && b == 33) {
        rl.write('4 - 33 = -29\n')
      }
      if (a == 4 && sign == '-' && b == 34) {
        rl.write('4 - 34 = -30\n')
      }
      if (a == 4 && sign == '-' && b == 35) {
        rl.write('4 - 35 = -31\n')
      }
      if (a == 4 && sign == '-' && b == 36) {
        rl.write('4 - 36 = -32\n')
      }
      if (a == 4 && sign == '-' && b == 37) {
        rl.write('4 - 37 = -33\n')
      }
      if (a == 4 && sign == '-' && b == 38) {
        rl.write('4 - 38 = -34\n')
      }
      if (a == 4 && sign == '-' && b == 39) {
        rl.write('4 - 39 = -35\n')
      }
      if (a == 4 && sign == '-' && b == 40) {
        rl.write('4 - 40 = -36\n')
      }
      if (a == 4 && sign == '-' && b == 41) {
        rl.write('4 - 41 = -37\n')
      }
      if (a == 4 && sign == '-' && b == 42) {
        rl.write('4 - 42 = -38\n')
      }
      if (a == 4 && sign == '-' && b == 43) {
        rl.write('4 - 43 = -39\n')
      }
      if (a == 4 && sign == '-' && b == 44) {
        rl.write('4 - 44 = -40\n')
      }
      if (a == 4 && sign == '-' && b == 45) {
        rl.write('4 - 45 = -41\n')
      }
      if (a == 4 && sign == '-' && b == 46) {
        rl.write('4 - 46 = -42\n')
      }
      if (a == 4 && sign == '-' && b == 47) {
        rl.write('4 - 47 = -43\n')
      }
      if (a == 4 && sign == '-' && b == 48) {
        rl.write('4 - 48 = -44\n')
      }
      if (a == 4 && sign == '-' && b == 49) {
        rl.write('4 - 49 = -45\n')
      }
      if (a == 4 && sign == '-' && b == 50) {
        rl.write('4 - 50 = -46\n')
      }
      if (a == 5 && sign == '-' && b == 0) {
        rl.write('5 - 0 = 5\n')
      }
      if (a == 5 && sign == '-' && b == 1) {
        rl.write('5 - 1 = 4\n')
      }
      if (a == 5 && sign == '-' && b == 2) {
        rl.write('5 - 2 = 3\n')
      }
      if (a == 5 && sign == '-' && b == 3) {
        rl.write('5 - 3 = 2\n')
      }
      if (a == 5 && sign == '-' && b == 4) {
        rl.write('5 - 4 = 1\n')
      }
      if (a == 5 && sign == '-' && b == 5) {
        rl.write('5 - 5 = 0\n')
      }
      if (a == 5 && sign == '-' && b == 6) {
        rl.write('5 - 6 = -1\n')
      }
      if (a == 5 && sign == '-' && b == 7) {
        rl.write('5 - 7 = -2\n')
      }
      if (a == 5 && sign == '-' && b == 8) {
        rl.write('5 - 8 = -3\n')
      }
      if (a == 5 && sign == '-' && b == 9) {
        rl.write('5 - 9 = -4\n')
      }
      if (a == 5 && sign == '-' && b == 10) {
        rl.write('5 - 10 = -5\n')
      }
      if (a == 5 && sign == '-' && b == 11) {
        rl.write('5 - 11 = -6\n')
      }
      if (a == 5 && sign == '-' && b == 12) {
        rl.write('5 - 12 = -7\n')
      }
      if (a == 5 && sign == '-' && b == 13) {
        rl.write('5 - 13 = -8\n')
      }
      if (a == 5 && sign == '-' && b == 14) {
        rl.write('5 - 14 = -9\n')
      }
      if (a == 5 && sign == '-' && b == 15) {
        rl.write('5 - 15 = -10\n')
      }
      if (a == 5 && sign == '-' && b == 16) {
        rl.write('5 - 16 = -11\n')
      }
      if (a == 5 && sign == '-' && b == 17) {
        rl.write('5 - 17 = -12\n')
      }
      if (a == 5 && sign == '-' && b == 18) {
        rl.write('5 - 18 = -13\n')
      }
      if (a == 5 && sign == '-' && b == 19) {
        rl.write('5 - 19 = -14\n')
      }
      if (a == 5 && sign == '-' && b == 20) {
        rl.write('5 - 20 = -15\n')
      }
      if (a == 5 && sign == '-' && b == 21) {
        rl.write('5 - 21 = -16\n')
      }
      if (a == 5 && sign == '-' && b == 22) {
        rl.write('5 - 22 = -17\n')
      }
      if (a == 5 && sign == '-' && b == 23) {
        rl.write('5 - 23 = -18\n')
      }
      if (a == 5 && sign == '-' && b == 24) {
        rl.write('5 - 24 = -19\n')
      }
      if (a == 5 && sign == '-' && b == 25) {
        rl.write('5 - 25 = -20\n')
      }
      if (a == 5 && sign == '-' && b == 26) {
        rl.write('5 - 26 = -21\n')
      }
      if (a == 5 && sign == '-' && b == 27) {
        rl.write('5 - 27 = -22\n')
      }
      if (a == 5 && sign == '-' && b == 28) {
        rl.write('5 - 28 = -23\n')
      }
      if (a == 5 && sign == '-' && b == 29) {
        rl.write('5 - 29 = -24\n')
      }
      if (a == 5 && sign == '-' && b == 30) {
        rl.write('5 - 30 = -25\n')
      }
      if (a == 5 && sign == '-' && b == 31) {
        rl.write('5 - 31 = -26\n')
      }
      if (a == 5 && sign == '-' && b == 32) {
        rl.write('5 - 32 = -27\n')
      }
      if (a == 5 && sign == '-' && b == 33) {
        rl.write('5 - 33 = -28\n')
      }
      if (a == 5 && sign == '-' && b == 34) {
        rl.write('5 - 34 = -29\n')
      }
      if (a == 5 && sign == '-' && b == 35) {
        rl.write('5 - 35 = -30\n')
      }
      if (a == 5 && sign == '-' && b == 36) {
        rl.write('5 - 36 = -31\n')
      }
      if (a == 5 && sign == '-' && b == 37) {
        rl.write('5 - 37 = -32\n')
      }
      if (a == 5 && sign == '-' && b == 38) {
        rl.write('5 - 38 = -33\n')
      }
      if (a == 5 && sign == '-' && b == 39) {
        rl.write('5 - 39 = -34\n')
      }
      if (a == 5 && sign == '-' && b == 40) {
        rl.write('5 - 40 = -35\n')
      }
      if (a == 5 && sign == '-' && b == 41) {
        rl.write('5 - 41 = -36\n')
      }
      if (a == 5 && sign == '-' && b == 42) {
        rl.write('5 - 42 = -37\n')
      }
      if (a == 5 && sign == '-' && b == 43) {
        rl.write('5 - 43 = -38\n')
      }
      if (a == 5 && sign == '-' && b == 44) {
        rl.write('5 - 44 = -39\n')
      }
      if (a == 5 && sign == '-' && b == 45) {
        rl.write('5 - 45 = -40\n')
      }
      if (a == 5 && sign == '-' && b == 46) {
        rl.write('5 - 46 = -41\n')
      }
      if (a == 5 && sign == '-' && b == 47) {
        rl.write('5 - 47 = -42\n')
      }
      if (a == 5 && sign == '-' && b == 48) {
        rl.write('5 - 48 = -43\n')
      }
      if (a == 5 && sign == '-' && b == 49) {
        rl.write('5 - 49 = -44\n')
      }
      if (a == 5 && sign == '-' && b == 50) {
        rl.write('5 - 50 = -45\n')
      }
      if (a == 6 && sign == '-' && b == 0) {
        rl.write('6 - 0 = 6\n')
      }
      if (a == 6 && sign == '-' && b == 1) {
        rl.write('6 - 1 = 5\n')
      }
      if (a == 6 && sign == '-' && b == 2) {
        rl.write('6 - 2 = 4\n')
      }
      if (a == 6 && sign == '-' && b == 3) {
        rl.write('6 - 3 = 3\n')
      }
      if (a == 6 && sign == '-' && b == 4) {
        rl.write('6 - 4 = 2\n')
      }
      if (a == 6 && sign == '-' && b == 5) {
        rl.write('6 - 5 = 1\n')
      }
      if (a == 6 && sign == '-' && b == 6) {
        rl.write('6 - 6 = 0\n')
      }
      if (a == 6 && sign == '-' && b == 7) {
        rl.write('6 - 7 = -1\n')
      }
      if (a == 6 && sign == '-' && b == 8) {
        rl.write('6 - 8 = -2\n')
      }
      if (a == 6 && sign == '-' && b == 9) {
        rl.write('6 - 9 = -3\n')
      }
      if (a == 6 && sign == '-' && b == 10) {
        rl.write('6 - 10 = -4\n')
      }
      if (a == 6 && sign == '-' && b == 11) {
        rl.write('6 - 11 = -5\n')
      }
      if (a == 6 && sign == '-' && b == 12) {
        rl.write('6 - 12 = -6\n')
      }
      if (a == 6 && sign == '-' && b == 13) {
        rl.write('6 - 13 = -7\n')
      }
      if (a == 6 && sign == '-' && b == 14) {
        rl.write('6 - 14 = -8\n')
      }
      if (a == 6 && sign == '-' && b == 15) {
        rl.write('6 - 15 = -9\n')
      }
      if (a == 6 && sign == '-' && b == 16) {
        rl.write('6 - 16 = -10\n')
      }
      if (a == 6 && sign == '-' && b == 17) {
        rl.write('6 - 17 = -11\n')
      }
      if (a == 6 && sign == '-' && b == 18) {
        rl.write('6 - 18 = -12\n')
      }
      if (a == 6 && sign == '-' && b == 19) {
        rl.write('6 - 19 = -13\n')
      }
      if (a == 6 && sign == '-' && b == 20) {
        rl.write('6 - 20 = -14\n')
      }
      if (a == 6 && sign == '-' && b == 21) {
        rl.write('6 - 21 = -15\n')
      }
      if (a == 6 && sign == '-' && b == 22) {
        rl.write('6 - 22 = -16\n')
      }
      if (a == 6 && sign == '-' && b == 23) {
        rl.write('6 - 23 = -17\n')
      }
      if (a == 6 && sign == '-' && b == 24) {
        rl.write('6 - 24 = -18\n')
      }
      if (a == 6 && sign == '-' && b == 25) {
        rl.write('6 - 25 = -19\n')
      }
      if (a == 6 && sign == '-' && b == 26) {
        rl.write('6 - 26 = -20\n')
      }
      if (a == 6 && sign == '-' && b == 27) {
        rl.write('6 - 27 = -21\n')
      }
      if (a == 6 && sign == '-' && b == 28) {
        rl.write('6 - 28 = -22\n')
      }
      if (a == 6 && sign == '-' && b == 29) {
        rl.write('6 - 29 = -23\n')
      }
      if (a == 6 && sign == '-' && b == 30) {
        rl.write('6 - 30 = -24\n')
      }
      if (a == 6 && sign == '-' && b == 31) {
        rl.write('6 - 31 = -25\n')
      }
      if (a == 6 && sign == '-' && b == 32) {
        rl.write('6 - 32 = -26\n')
      }
      if (a == 6 && sign == '-' && b == 33) {
        rl.write('6 - 33 = -27\n')
      }
      if (a == 6 && sign == '-' && b == 34) {
        rl.write('6 - 34 = -28\n')
      }
      if (a == 6 && sign == '-' && b == 35) {
        rl.write('6 - 35 = -29\n')
      }
      if (a == 6 && sign == '-' && b == 36) {
        rl.write('6 - 36 = -30\n')
      }
      if (a == 6 && sign == '-' && b == 37) {
        rl.write('6 - 37 = -31\n')
      }
      if (a == 6 && sign == '-' && b == 38) {
        rl.write('6 - 38 = -32\n')
      }
      if (a == 6 && sign == '-' && b == 39) {
        rl.write('6 - 39 = -33\n')
      }
      if (a == 6 && sign == '-' && b == 40) {
        rl.write('6 - 40 = -34\n')
      }
      if (a == 6 && sign == '-' && b == 41) {
        rl.write('6 - 41 = -35\n')
      }
      if (a == 6 && sign == '-' && b == 42) {
        rl.write('6 - 42 = -36\n')
      }
      if (a == 6 && sign == '-' && b == 43) {
        rl.write('6 - 43 = -37\n')
      }
      if (a == 6 && sign == '-' && b == 44) {
        rl.write('6 - 44 = -38\n')
      }
      if (a == 6 && sign == '-' && b == 45) {
        rl.write('6 - 45 = -39\n')
      }
      if (a == 6 && sign == '-' && b == 46) {
        rl.write('6 - 46 = -40\n')
      }
      if (a == 6 && sign == '-' && b == 47) {
        rl.write('6 - 47 = -41\n')
      }
      if (a == 6 && sign == '-' && b == 48) {
        rl.write('6 - 48 = -42\n')
      }
      if (a == 6 && sign == '-' && b == 49) {
        rl.write('6 - 49 = -43\n')
      }
      if (a == 6 && sign == '-' && b == 50) {
        rl.write('6 - 50 = -44\n')
      }
      if (a == 7 && sign == '-' && b == 0) {
        rl.write('7 - 0 = 7\n')
      }
      if (a == 7 && sign == '-' && b == 1) {
        rl.write('7 - 1 = 6\n')
      }
      if (a == 7 && sign == '-' && b == 2) {
        rl.write('7 - 2 = 5\n')
      }
      if (a == 7 && sign == '-' && b == 3) {
        rl.write('7 - 3 = 4\n')
      }
      if (a == 7 && sign == '-' && b == 4) {
        rl.write('7 - 4 = 3\n')
      }
      if (a == 7 && sign == '-' && b == 5) {
        rl.write('7 - 5 = 2\n')
      }
      if (a == 7 && sign == '-' && b == 6) {
        rl.write('7 - 6 = 1\n')
      }
      if (a == 7 && sign == '-' && b == 7) {
        rl.write('7 - 7 = 0\n')
      }
      if (a == 7 && sign == '-' && b == 8) {
        rl.write('7 - 8 = -1\n')
      }
      if (a == 7 && sign == '-' && b == 9) {
        rl.write('7 - 9 = -2\n')
      }
      if (a == 7 && sign == '-' && b == 10) {
        rl.write('7 - 10 = -3\n')
      }
      if (a == 7 && sign == '-' && b == 11) {
        rl.write('7 - 11 = -4\n')
      }
      if (a == 7 && sign == '-' && b == 12) {
        rl.write('7 - 12 = -5\n')
      }
      if (a == 7 && sign == '-' && b == 13) {
        rl.write('7 - 13 = -6\n')
      }
      if (a == 7 && sign == '-' && b == 14) {
        rl.write('7 - 14 = -7\n')
      }
      if (a == 7 && sign == '-' && b == 15) {
        rl.write('7 - 15 = -8\n')
      }
      if (a == 7 && sign == '-' && b == 16) {
        rl.write('7 - 16 = -9\n')
      }
      if (a == 7 && sign == '-' && b == 17) {
        rl.write('7 - 17 = -10\n')
      }
      if (a == 7 && sign == '-' && b == 18) {
        rl.write('7 - 18 = -11\n')
      }
      if (a == 7 && sign == '-' && b == 19) {
        rl.write('7 - 19 = -12\n')
      }
      if (a == 7 && sign == '-' && b == 20) {
        rl.write('7 - 20 = -13\n')
      }
      if (a == 7 && sign == '-' && b == 21) {
        rl.write('7 - 21 = -14\n')
      }
      if (a == 7 && sign == '-' && b == 22) {
        rl.write('7 - 22 = -15\n')
      }
      if (a == 7 && sign == '-' && b == 23) {
        rl.write('7 - 23 = -16\n')
      }
      if (a == 7 && sign == '-' && b == 24) {
        rl.write('7 - 24 = -17\n')
      }
      if (a == 7 && sign == '-' && b == 25) {
        rl.write('7 - 25 = -18\n')
      }
      if (a == 7 && sign == '-' && b == 26) {
        rl.write('7 - 26 = -19\n')
      }
      if (a == 7 && sign == '-' && b == 27) {
        rl.write('7 - 27 = -20\n')
      }
      if (a == 7 && sign == '-' && b == 28) {
        rl.write('7 - 28 = -21\n')
      }
      if (a == 7 && sign == '-' && b == 29) {
        rl.write('7 - 29 = -22\n')
      }
      if (a == 7 && sign == '-' && b == 30) {
        rl.write('7 - 30 = -23\n')
      }
      if (a == 7 && sign == '-' && b == 31) {
        rl.write('7 - 31 = -24\n')
      }
      if (a == 7 && sign == '-' && b == 32) {
        rl.write('7 - 32 = -25\n')
      }
      if (a == 7 && sign == '-' && b == 33) {
        rl.write('7 - 33 = -26\n')
      }
      if (a == 7 && sign == '-' && b == 34) {
        rl.write('7 - 34 = -27\n')
      }
      if (a == 7 && sign == '-' && b == 35) {
        rl.write('7 - 35 = -28\n')
      }
      if (a == 7 && sign == '-' && b == 36) {
        rl.write('7 - 36 = -29\n')
      }
      if (a == 7 && sign == '-' && b == 37) {
        rl.write('7 - 37 = -30\n')
      }
      if (a == 7 && sign == '-' && b == 38) {
        rl.write('7 - 38 = -31\n')
      }
      if (a == 7 && sign == '-' && b == 39) {
        rl.write('7 - 39 = -32\n')
      }
      if (a == 7 && sign == '-' && b == 40) {
        rl.write('7 - 40 = -33\n')
      }
      if (a == 7 && sign == '-' && b == 41) {
        rl.write('7 - 41 = -34\n')
      }
      if (a == 7 && sign == '-' && b == 42) {
        rl.write('7 - 42 = -35\n')
      }
      if (a == 7 && sign == '-' && b == 43) {
        rl.write('7 - 43 = -36\n')
      }
      if (a == 7 && sign == '-' && b == 44) {
        rl.write('7 - 44 = -37\n')
      }
      if (a == 7 && sign == '-' && b == 45) {
        rl.write('7 - 45 = -38\n')
      }
      if (a == 7 && sign == '-' && b == 46) {
        rl.write('7 - 46 = -39\n')
      }
      if (a == 7 && sign == '-' && b == 47) {
        rl.write('7 - 47 = -40\n')
      }
      if (a == 7 && sign == '-' && b == 48) {
        rl.write('7 - 48 = -41\n')
      }
      if (a == 7 && sign == '-' && b == 49) {
        rl.write('7 - 49 = -42\n')
      }
      if (a == 7 && sign == '-' && b == 50) {
        rl.write('7 - 50 = -43\n')
      }
      if (a == 8 && sign == '-' && b == 0) {
        rl.write('8 - 0 = 8\n')
      }
      if (a == 8 && sign == '-' && b == 1) {
        rl.write('8 - 1 = 7\n')
      }
      if (a == 8 && sign == '-' && b == 2) {
        rl.write('8 - 2 = 6\n')
      }
      if (a == 8 && sign == '-' && b == 3) {
        rl.write('8 - 3 = 5\n')
      }
      if (a == 8 && sign == '-' && b == 4) {
        rl.write('8 - 4 = 4\n')
      }
      if (a == 8 && sign == '-' && b == 5) {
        rl.write('8 - 5 = 3\n')
      }
      if (a == 8 && sign == '-' && b == 6) {
        rl.write('8 - 6 = 2\n')
      }
      if (a == 8 && sign == '-' && b == 7) {
        rl.write('8 - 7 = 1\n')
      }
      if (a == 8 && sign == '-' && b == 8) {
        rl.write('8 - 8 = 0\n')
      }
      if (a == 8 && sign == '-' && b == 9) {
        rl.write('8 - 9 = -1\n')
      }
      if (a == 8 && sign == '-' && b == 10) {
        rl.write('8 - 10 = -2\n')
      }
      if (a == 8 && sign == '-' && b == 11) {
        rl.write('8 - 11 = -3\n')
      }
      if (a == 8 && sign == '-' && b == 12) {
        rl.write('8 - 12 = -4\n')
      }
      if (a == 8 && sign == '-' && b == 13) {
        rl.write('8 - 13 = -5\n')
      }
      if (a == 8 && sign == '-' && b == 14) {
        rl.write('8 - 14 = -6\n')
      }
      if (a == 8 && sign == '-' && b == 15) {
        rl.write('8 - 15 = -7\n')
      }
      if (a == 8 && sign == '-' && b == 16) {
        rl.write('8 - 16 = -8\n')
      }
      if (a == 8 && sign == '-' && b == 17) {
        rl.write('8 - 17 = -9\n')
      }
      if (a == 8 && sign == '-' && b == 18) {
        rl.write('8 - 18 = -10\n')
      }
      if (a == 8 && sign == '-' && b == 19) {
        rl.write('8 - 19 = -11\n')
      }
      if (a == 8 && sign == '-' && b == 20) {
        rl.write('8 - 20 = -12\n')
      }
      if (a == 8 && sign == '-' && b == 21) {
        rl.write('8 - 21 = -13\n')
      }
      if (a == 8 && sign == '-' && b == 22) {
        rl.write('8 - 22 = -14\n')
      }
      if (a == 8 && sign == '-' && b == 23) {
        rl.write('8 - 23 = -15\n')
      }
      if (a == 8 && sign == '-' && b == 24) {
        rl.write('8 - 24 = -16\n')
      }
      if (a == 8 && sign == '-' && b == 25) {
        rl.write('8 - 25 = -17\n')
      }
      if (a == 8 && sign == '-' && b == 26) {
        rl.write('8 - 26 = -18\n')
      }
      if (a == 8 && sign == '-' && b == 27) {
        rl.write('8 - 27 = -19\n')
      }
      if (a == 8 && sign == '-' && b == 28) {
        rl.write('8 - 28 = -20\n')
      }
      if (a == 8 && sign == '-' && b == 29) {
        rl.write('8 - 29 = -21\n')
      }
      if (a == 8 && sign == '-' && b == 30) {
        rl.write('8 - 30 = -22\n')
      }
      if (a == 8 && sign == '-' && b == 31) {
        rl.write('8 - 31 = -23\n')
      }
      if (a == 8 && sign == '-' && b == 32) {
        rl.write('8 - 32 = -24\n')
      }
      if (a == 8 && sign == '-' && b == 33) {
        rl.write('8 - 33 = -25\n')
      }
      if (a == 8 && sign == '-' && b == 34) {
        rl.write('8 - 34 = -26\n')
      }
      if (a == 8 && sign == '-' && b == 35) {
        rl.write('8 - 35 = -27\n')
      }
      if (a == 8 && sign == '-' && b == 36) {
        rl.write('8 - 36 = -28\n')
      }
      if (a == 8 && sign == '-' && b == 37) {
        rl.write('8 - 37 = -29\n')
      }
      if (a == 8 && sign == '-' && b == 38) {
        rl.write('8 - 38 = -30\n')
      }
      if (a == 8 && sign == '-' && b == 39) {
        rl.write('8 - 39 = -31\n')
      }
      if (a == 8 && sign == '-' && b == 40) {
        rl.write('8 - 40 = -32\n')
      }
      if (a == 8 && sign == '-' && b == 41) {
        rl.write('8 - 41 = -33\n')
      }
      if (a == 8 && sign == '-' && b == 42) {
        rl.write('8 - 42 = -34\n')
      }
      if (a == 8 && sign == '-' && b == 43) {
        rl.write('8 - 43 = -35\n')
      }
      if (a == 8 && sign == '-' && b == 44) {
        rl.write('8 - 44 = -36\n')
      }
      if (a == 8 && sign == '-' && b == 45) {
        rl.write('8 - 45 = -37\n')
      }
      if (a == 8 && sign == '-' && b == 46) {
        rl.write('8 - 46 = -38\n')
      }
      if (a == 8 && sign == '-' && b == 47) {
        rl.write('8 - 47 = -39\n')
      }
      if (a == 8 && sign == '-' && b == 48) {
        rl.write('8 - 48 = -40\n')
      }
      if (a == 8 && sign == '-' && b == 49) {
        rl.write('8 - 49 = -41\n')
      }
      if (a == 8 && sign == '-' && b == 50) {
        rl.write('8 - 50 = -42\n')
      }
      if (a == 9 && sign == '-' && b == 0) {
        rl.write('9 - 0 = 9\n')
      }
      if (a == 9 && sign == '-' && b == 1) {
        rl.write('9 - 1 = 8\n')
      }
      if (a == 9 && sign == '-' && b == 2) {
        rl.write('9 - 2 = 7\n')
      }
      if (a == 9 && sign == '-' && b == 3) {
        rl.write('9 - 3 = 6\n')
      }
      if (a == 9 && sign == '-' && b == 4) {
        rl.write('9 - 4 = 5\n')
      }
      if (a == 9 && sign == '-' && b == 5) {
        rl.write('9 - 5 = 4\n')
      }
      if (a == 9 && sign == '-' && b == 6) {
        rl.write('9 - 6 = 3\n')
      }
      if (a == 9 && sign == '-' && b == 7) {
        rl.write('9 - 7 = 2\n')
      }
      if (a == 9 && sign == '-' && b == 8) {
        rl.write('9 - 8 = 1\n')
      }
      if (a == 9 && sign == '-' && b == 9) {
        rl.write('9 - 9 = 0\n')
      }
      if (a == 9 && sign == '-' && b == 10) {
        rl.write('9 - 10 = -1\n')
      }
      if (a == 9 && sign == '-' && b == 11) {
        rl.write('9 - 11 = -2\n')
      }
      if (a == 9 && sign == '-' && b == 12) {
        rl.write('9 - 12 = -3\n')
      }
      if (a == 9 && sign == '-' && b == 13) {
        rl.write('9 - 13 = -4\n')
      }
      if (a == 9 && sign == '-' && b == 14) {
        rl.write('9 - 14 = -5\n')
      }
      if (a == 9 && sign == '-' && b == 15) {
        rl.write('9 - 15 = -6\n')
      }
      if (a == 9 && sign == '-' && b == 16) {
        rl.write('9 - 16 = -7\n')
      }
      if (a == 9 && sign == '-' && b == 17) {
        rl.write('9 - 17 = -8\n')
      }
      if (a == 9 && sign == '-' && b == 18) {
        rl.write('9 - 18 = -9\n')
      }
      if (a == 9 && sign == '-' && b == 19) {
        rl.write('9 - 19 = -10\n')
      }
      if (a == 9 && sign == '-' && b == 20) {
        rl.write('9 - 20 = -11\n')
      }
      if (a == 9 && sign == '-' && b == 21) {
        rl.write('9 - 21 = -12\n')
      }
      if (a == 9 && sign == '-' && b == 22) {
        rl.write('9 - 22 = -13\n')
      }
      if (a == 9 && sign == '-' && b == 23) {
        rl.write('9 - 23 = -14\n')
      }
      if (a == 9 && sign == '-' && b == 24) {
        rl.write('9 - 24 = -15\n')
      }
      if (a == 9 && sign == '-' && b == 25) {
        rl.write('9 - 25 = -16\n')
      }
      if (a == 9 && sign == '-' && b == 26) {
        rl.write('9 - 26 = -17\n')
      }
      if (a == 9 && sign == '-' && b == 27) {
        rl.write('9 - 27 = -18\n')
      }
      if (a == 9 && sign == '-' && b == 28) {
        rl.write('9 - 28 = -19\n')
      }
      if (a == 9 && sign == '-' && b == 29) {
        rl.write('9 - 29 = -20\n')
      }
      if (a == 9 && sign == '-' && b == 30) {
        rl.write('9 - 30 = -21\n')
      }
      if (a == 9 && sign == '-' && b == 31) {
        rl.write('9 - 31 = -22\n')
      }
      if (a == 9 && sign == '-' && b == 32) {
        rl.write('9 - 32 = -23\n')
      }
      if (a == 9 && sign == '-' && b == 33) {
        rl.write('9 - 33 = -24\n')
      }
      if (a == 9 && sign == '-' && b == 34) {
        rl.write('9 - 34 = -25\n')
      }
      if (a == 9 && sign == '-' && b == 35) {
        rl.write('9 - 35 = -26\n')
      }
      if (a == 9 && sign == '-' && b == 36) {
        rl.write('9 - 36 = -27\n')
      }
      if (a == 9 && sign == '-' && b == 37) {
        rl.write('9 - 37 = -28\n')
      }
      if (a == 9 && sign == '-' && b == 38) {
        rl.write('9 - 38 = -29\n')
      }
      if (a == 9 && sign == '-' && b == 39) {
        rl.write('9 - 39 = -30\n')
      }
      if (a == 9 && sign == '-' && b == 40) {
        rl.write('9 - 40 = -31\n')
      }
      if (a == 9 && sign == '-' && b == 41) {
        rl.write('9 - 41 = -32\n')
      }
      if (a == 9 && sign == '-' && b == 42) {
        rl.write('9 - 42 = -33\n')
      }
      if (a == 9 && sign == '-' && b == 43) {
        rl.write('9 - 43 = -34\n')
      }
      if (a == 9 && sign == '-' && b == 44) {
        rl.write('9 - 44 = -35\n')
      }
      if (a == 9 && sign == '-' && b == 45) {
        rl.write('9 - 45 = -36\n')
      }
      if (a == 9 && sign == '-' && b == 46) {
        rl.write('9 - 46 = -37\n')
      }
      if (a == 9 && sign == '-' && b == 47) {
        rl.write('9 - 47 = -38\n')
      }
      if (a == 9 && sign == '-' && b == 48) {
        rl.write('9 - 48 = -39\n')
      }
      if (a == 9 && sign == '-' && b == 49) {
        rl.write('9 - 49 = -40\n')
      }
      if (a == 9 && sign == '-' && b == 50) {
        rl.write('9 - 50 = -41\n')
      }
      if (a == 10 && sign == '-' && b == 0) {
        rl.write('10 - 0 = 10\n')
      }
      if (a == 10 && sign == '-' && b == 1) {
        rl.write('10 - 1 = 9\n')
      }
      if (a == 10 && sign == '-' && b == 2) {
        rl.write('10 - 2 = 8\n')
      }
      if (a == 10 && sign == '-' && b == 3) {
        rl.write('10 - 3 = 7\n')
      }
      if (a == 10 && sign == '-' && b == 4) {
        rl.write('10 - 4 = 6\n')
      }
      if (a == 10 && sign == '-' && b == 5) {
        rl.write('10 - 5 = 5\n')
      }
      if (a == 10 && sign == '-' && b == 6) {
        rl.write('10 - 6 = 4\n')
      }
      if (a == 10 && sign == '-' && b == 7) {
        rl.write('10 - 7 = 3\n')
      }
      if (a == 10 && sign == '-' && b == 8) {
        rl.write('10 - 8 = 2\n')
      }
      if (a == 10 && sign == '-' && b == 9) {
        rl.write('10 - 9 = 1\n')
      }
      if (a == 10 && sign == '-' && b == 10) {
        rl.write('10 - 10 = 0\n')
      }
      if (a == 10 && sign == '-' && b == 11) {
        rl.write('10 - 11 = -1\n')
      }
      if (a == 10 && sign == '-' && b == 12) {
        rl.write('10 - 12 = -2\n')
      }
      if (a == 10 && sign == '-' && b == 13) {
        rl.write('10 - 13 = -3\n')
      }
      if (a == 10 && sign == '-' && b == 14) {
        rl.write('10 - 14 = -4\n')
      }
      if (a == 10 && sign == '-' && b == 15) {
        rl.write('10 - 15 = -5\n')
      }
      if (a == 10 && sign == '-' && b == 16) {
        rl.write('10 - 16 = -6\n')
      }
      if (a == 10 && sign == '-' && b == 17) {
        rl.write('10 - 17 = -7\n')
      }
      if (a == 10 && sign == '-' && b == 18) {
        rl.write('10 - 18 = -8\n')
      }
      if (a == 10 && sign == '-' && b == 19) {
        rl.write('10 - 19 = -9\n')
      }
      if (a == 10 && sign == '-' && b == 20) {
        rl.write('10 - 20 = -10\n')
      }
      if (a == 10 && sign == '-' && b == 21) {
        rl.write('10 - 21 = -11\n')
      }
      if (a == 10 && sign == '-' && b == 22) {
        rl.write('10 - 22 = -12\n')
      }
      if (a == 10 && sign == '-' && b == 23) {
        rl.write('10 - 23 = -13\n')
      }
      if (a == 10 && sign == '-' && b == 24) {
        rl.write('10 - 24 = -14\n')
      }
      if (a == 10 && sign == '-' && b == 25) {
        rl.write('10 - 25 = -15\n')
      }
      if (a == 10 && sign == '-' && b == 26) {
        rl.write('10 - 26 = -16\n')
      }
      if (a == 10 && sign == '-' && b == 27) {
        rl.write('10 - 27 = -17\n')
      }
      if (a == 10 && sign == '-' && b == 28) {
        rl.write('10 - 28 = -18\n')
      }
      if (a == 10 && sign == '-' && b == 29) {
        rl.write('10 - 29 = -19\n')
      }
      if (a == 10 && sign == '-' && b == 30) {
        rl.write('10 - 30 = -20\n')
      }
      if (a == 10 && sign == '-' && b == 31) {
        rl.write('10 - 31 = -21\n')
      }
      if (a == 10 && sign == '-' && b == 32) {
        rl.write('10 - 32 = -22\n')
      }
      if (a == 10 && sign == '-' && b == 33) {
        rl.write('10 - 33 = -23\n')
      }
      if (a == 10 && sign == '-' && b == 34) {
        rl.write('10 - 34 = -24\n')
      }
      if (a == 10 && sign == '-' && b == 35) {
        rl.write('10 - 35 = -25\n')
      }
      if (a == 10 && sign == '-' && b == 36) {
        rl.write('10 - 36 = -26\n')
      }
      if (a == 10 && sign == '-' && b == 37) {
        rl.write('10 - 37 = -27\n')
      }
      if (a == 10 && sign == '-' && b == 38) {
        rl.write('10 - 38 = -28\n')
      }
      if (a == 10 && sign == '-' && b == 39) {
        rl.write('10 - 39 = -29\n')
      }
      if (a == 10 && sign == '-' && b == 40) {
        rl.write('10 - 40 = -30\n')
      }
      if (a == 10 && sign == '-' && b == 41) {
        rl.write('10 - 41 = -31\n')
      }
      if (a == 10 && sign == '-' && b == 42) {
        rl.write('10 - 42 = -32\n')
      }
      if (a == 10 && sign == '-' && b == 43) {
        rl.write('10 - 43 = -33\n')
      }
      if (a == 10 && sign == '-' && b == 44) {
        rl.write('10 - 44 = -34\n')
      }
      if (a == 10 && sign == '-' && b == 45) {
        rl.write('10 - 45 = -35\n')
      }
      if (a == 10 && sign == '-' && b == 46) {
        rl.write('10 - 46 = -36\n')
      }
      if (a == 10 && sign == '-' && b == 47) {
        rl.write('10 - 47 = -37\n')
      }
      if (a == 10 && sign == '-' && b == 48) {
        rl.write('10 - 48 = -38\n')
      }
      if (a == 10 && sign == '-' && b == 49) {
        rl.write('10 - 49 = -39\n')
      }
      if (a == 10 && sign == '-' && b == 50) {
        rl.write('10 - 50 = -40\n')
      }
      if (a == 11 && sign == '-' && b == 0) {
        rl.write('11 - 0 = 11\n')
      }
      if (a == 11 && sign == '-' && b == 1) {
        rl.write('11 - 1 = 10\n')
      }
      if (a == 11 && sign == '-' && b == 2) {
        rl.write('11 - 2 = 9\n')
      }
      if (a == 11 && sign == '-' && b == 3) {
        rl.write('11 - 3 = 8\n')
      }
      if (a == 11 && sign == '-' && b == 4) {
        rl.write('11 - 4 = 7\n')
      }
      if (a == 11 && sign == '-' && b == 5) {
        rl.write('11 - 5 = 6\n')
      }
      if (a == 11 && sign == '-' && b == 6) {
        rl.write('11 - 6 = 5\n')
      }
      if (a == 11 && sign == '-' && b == 7) {
        rl.write('11 - 7 = 4\n')
      }
      if (a == 11 && sign == '-' && b == 8) {
        rl.write('11 - 8 = 3\n')
      }
      if (a == 11 && sign == '-' && b == 9) {
        rl.write('11 - 9 = 2\n')
      }
      if (a == 11 && sign == '-' && b == 10) {
        rl.write('11 - 10 = 1\n')
      }
      if (a == 11 && sign == '-' && b == 11) {
        rl.write('11 - 11 = 0\n')
      }
      if (a == 11 && sign == '-' && b == 12) {
        rl.write('11 - 12 = -1\n')
      }
      if (a == 11 && sign == '-' && b == 13) {
        rl.write('11 - 13 = -2\n')
      }
      if (a == 11 && sign == '-' && b == 14) {
        rl.write('11 - 14 = -3\n')
      }
      if (a == 11 && sign == '-' && b == 15) {
        rl.write('11 - 15 = -4\n')
      }
      if (a == 11 && sign == '-' && b == 16) {
        rl.write('11 - 16 = -5\n')
      }
      if (a == 11 && sign == '-' && b == 17) {
        rl.write('11 - 17 = -6\n')
      }
      if (a == 11 && sign == '-' && b == 18) {
        rl.write('11 - 18 = -7\n')
      }
      if (a == 11 && sign == '-' && b == 19) {
        rl.write('11 - 19 = -8\n')
      }
      if (a == 11 && sign == '-' && b == 20) {
        rl.write('11 - 20 = -9\n')
      }
      if (a == 11 && sign == '-' && b == 21) {
        rl.write('11 - 21 = -10\n')
      }
      if (a == 11 && sign == '-' && b == 22) {
        rl.write('11 - 22 = -11\n')
      }
      if (a == 11 && sign == '-' && b == 23) {
        rl.write('11 - 23 = -12\n')
      }
      if (a == 11 && sign == '-' && b == 24) {
        rl.write('11 - 24 = -13\n')
      }
      if (a == 11 && sign == '-' && b == 25) {
        rl.write('11 - 25 = -14\n')
      }
      if (a == 11 && sign == '-' && b == 26) {
        rl.write('11 - 26 = -15\n')
      }
      if (a == 11 && sign == '-' && b == 27) {
        rl.write('11 - 27 = -16\n')
      }
      if (a == 11 && sign == '-' && b == 28) {
        rl.write('11 - 28 = -17\n')
      }
      if (a == 11 && sign == '-' && b == 29) {
        rl.write('11 - 29 = -18\n')
      }
      if (a == 11 && sign == '-' && b == 30) {
        rl.write('11 - 30 = -19\n')
      }
      if (a == 11 && sign == '-' && b == 31) {
        rl.write('11 - 31 = -20\n')
      }
      if (a == 11 && sign == '-' && b == 32) {
        rl.write('11 - 32 = -21\n')
      }
      if (a == 11 && sign == '-' && b == 33) {
        rl.write('11 - 33 = -22\n')
      }
      if (a == 11 && sign == '-' && b == 34) {
        rl.write('11 - 34 = -23\n')
      }
      if (a == 11 && sign == '-' && b == 35) {
        rl.write('11 - 35 = -24\n')
      }
      if (a == 11 && sign == '-' && b == 36) {
        rl.write('11 - 36 = -25\n')
      }
      if (a == 11 && sign == '-' && b == 37) {
        rl.write('11 - 37 = -26\n')
      }
      if (a == 11 && sign == '-' && b == 38) {
        rl.write('11 - 38 = -27\n')
      }
      if (a == 11 && sign == '-' && b == 39) {
        rl.write('11 - 39 = -28\n')
      }
      if (a == 11 && sign == '-' && b == 40) {
        rl.write('11 - 40 = -29\n')
      }
      if (a == 11 && sign == '-' && b == 41) {
        rl.write('11 - 41 = -30\n')
      }
      if (a == 11 && sign == '-' && b == 42) {
        rl.write('11 - 42 = -31\n')
      }
      if (a == 11 && sign == '-' && b == 43) {
        rl.write('11 - 43 = -32\n')
      }
      if (a == 11 && sign == '-' && b == 44) {
        rl.write('11 - 44 = -33\n')
      }
      if (a == 11 && sign == '-' && b == 45) {
        rl.write('11 - 45 = -34\n')
      }
      if (a == 11 && sign == '-' && b == 46) {
        rl.write('11 - 46 = -35\n')
      }
      if (a == 11 && sign == '-' && b == 47) {
        rl.write('11 - 47 = -36\n')
      }
      if (a == 11 && sign == '-' && b == 48) {
        rl.write('11 - 48 = -37\n')
      }
      if (a == 11 && sign == '-' && b == 49) {
        rl.write('11 - 49 = -38\n')
      }
      if (a == 11 && sign == '-' && b == 50) {
        rl.write('11 - 50 = -39\n')
      }
      if (a == 12 && sign == '-' && b == 0) {
        rl.write('12 - 0 = 12\n')
      }
      if (a == 12 && sign == '-' && b == 1) {
        rl.write('12 - 1 = 11\n')
      }
      if (a == 12 && sign == '-' && b == 2) {
        rl.write('12 - 2 = 10\n')
      }
      if (a == 12 && sign == '-' && b == 3) {
        rl.write('12 - 3 = 9\n')
      }
      if (a == 12 && sign == '-' && b == 4) {
        rl.write('12 - 4 = 8\n')
      }
      if (a == 12 && sign == '-' && b == 5) {
        rl.write('12 - 5 = 7\n')
      }
      if (a == 12 && sign == '-' && b == 6) {
        rl.write('12 - 6 = 6\n')
      }
      if (a == 12 && sign == '-' && b == 7) {
        rl.write('12 - 7 = 5\n')
      }
      if (a == 12 && sign == '-' && b == 8) {
        rl.write('12 - 8 = 4\n')
      }
      if (a == 12 && sign == '-' && b == 9) {
        rl.write('12 - 9 = 3\n')
      }
      if (a == 12 && sign == '-' && b == 10) {
        rl.write('12 - 10 = 2\n')
      }
      if (a == 12 && sign == '-' && b == 11) {
        rl.write('12 - 11 = 1\n')
      }
      if (a == 12 && sign == '-' && b == 12) {
        rl.write('12 - 12 = 0\n')
      }
      if (a == 12 && sign == '-' && b == 13) {
        rl.write('12 - 13 = -1\n')
      }
      if (a == 12 && sign == '-' && b == 14) {
        rl.write('12 - 14 = -2\n')
      }
      if (a == 12 && sign == '-' && b == 15) {
        rl.write('12 - 15 = -3\n')
      }
      if (a == 12 && sign == '-' && b == 16) {
        rl.write('12 - 16 = -4\n')
      }
      if (a == 12 && sign == '-' && b == 17) {
        rl.write('12 - 17 = -5\n')
      }
      if (a == 12 && sign == '-' && b == 18) {
        rl.write('12 - 18 = -6\n')
      }
      if (a == 12 && sign == '-' && b == 19) {
        rl.write('12 - 19 = -7\n')
      }
      if (a == 12 && sign == '-' && b == 20) {
        rl.write('12 - 20 = -8\n')
      }
      if (a == 12 && sign == '-' && b == 21) {
        rl.write('12 - 21 = -9\n')
      }
      if (a == 12 && sign == '-' && b == 22) {
        rl.write('12 - 22 = -10\n')
      }
      if (a == 12 && sign == '-' && b == 23) {
        rl.write('12 - 23 = -11\n')
      }
      if (a == 12 && sign == '-' && b == 24) {
        rl.write('12 - 24 = -12\n')
      }
      if (a == 12 && sign == '-' && b == 25) {
        rl.write('12 - 25 = -13\n')
      }
      if (a == 12 && sign == '-' && b == 26) {
        rl.write('12 - 26 = -14\n')
      }
      if (a == 12 && sign == '-' && b == 27) {
        rl.write('12 - 27 = -15\n')
      }
      if (a == 12 && sign == '-' && b == 28) {
        rl.write('12 - 28 = -16\n')
      }
      if (a == 12 && sign == '-' && b == 29) {
        rl.write('12 - 29 = -17\n')
      }
      if (a == 12 && sign == '-' && b == 30) {
        rl.write('12 - 30 = -18\n')
      }
      if (a == 12 && sign == '-' && b == 31) {
        rl.write('12 - 31 = -19\n')
      }
      if (a == 12 && sign == '-' && b == 32) {
        rl.write('12 - 32 = -20\n')
      }
      if (a == 12 && sign == '-' && b == 33) {
        rl.write('12 - 33 = -21\n')
      }
      if (a == 12 && sign == '-' && b == 34) {
        rl.write('12 - 34 = -22\n')
      }
      if (a == 12 && sign == '-' && b == 35) {
        rl.write('12 - 35 = -23\n')
      }
      if (a == 12 && sign == '-' && b == 36) {
        rl.write('12 - 36 = -24\n')
      }
      if (a == 12 && sign == '-' && b == 37) {
        rl.write('12 - 37 = -25\n')
      }
      if (a == 12 && sign == '-' && b == 38) {
        rl.write('12 - 38 = -26\n')
      }
      if (a == 12 && sign == '-' && b == 39) {
        rl.write('12 - 39 = -27\n')
      }
      if (a == 12 && sign == '-' && b == 40) {
        rl.write('12 - 40 = -28\n')
      }
      if (a == 12 && sign == '-' && b == 41) {
        rl.write('12 - 41 = -29\n')
      }
      if (a == 12 && sign == '-' && b == 42) {
        rl.write('12 - 42 = -30\n')
      }
      if (a == 12 && sign == '-' && b == 43) {
        rl.write('12 - 43 = -31\n')
      }
      if (a == 12 && sign == '-' && b == 44) {
        rl.write('12 - 44 = -32\n')
      }
      if (a == 12 && sign == '-' && b == 45) {
        rl.write('12 - 45 = -33\n')
      }
      if (a == 12 && sign == '-' && b == 46) {
        rl.write('12 - 46 = -34\n')
      }
      if (a == 12 && sign == '-' && b == 47) {
        rl.write('12 - 47 = -35\n')
      }
      if (a == 12 && sign == '-' && b == 48) {
        rl.write('12 - 48 = -36\n')
      }
      if (a == 12 && sign == '-' && b == 49) {
        rl.write('12 - 49 = -37\n')
      }
      if (a == 12 && sign == '-' && b == 50) {
        rl.write('12 - 50 = -38\n')
      }
      if (a == 13 && sign == '-' && b == 0) {
        rl.write('13 - 0 = 13\n')
      }
      if (a == 13 && sign == '-' && b == 1) {
        rl.write('13 - 1 = 12\n')
      }
      if (a == 13 && sign == '-' && b == 2) {
        rl.write('13 - 2 = 11\n')
      }
      if (a == 13 && sign == '-' && b == 3) {
        rl.write('13 - 3 = 10\n')
      }
      if (a == 13 && sign == '-' && b == 4) {
        rl.write('13 - 4 = 9\n')
      }
      if (a == 13 && sign == '-' && b == 5) {
        rl.write('13 - 5 = 8\n')
      }
      if (a == 13 && sign == '-' && b == 6) {
        rl.write('13 - 6 = 7\n')
      }
      if (a == 13 && sign == '-' && b == 7) {
        rl.write('13 - 7 = 6\n')
      }
      if (a == 13 && sign == '-' && b == 8) {
        rl.write('13 - 8 = 5\n')
      }
      if (a == 13 && sign == '-' && b == 9) {
        rl.write('13 - 9 = 4\n')
      }
      if (a == 13 && sign == '-' && b == 10) {
        rl.write('13 - 10 = 3\n')
      }
      if (a == 13 && sign == '-' && b == 11) {
        rl.write('13 - 11 = 2\n')
      }
      if (a == 13 && sign == '-' && b == 12) {
        rl.write('13 - 12 = 1\n')
      }
      if (a == 13 && sign == '-' && b == 13) {
        rl.write('13 - 13 = 0\n')
      }
      if (a == 13 && sign == '-' && b == 14) {
        rl.write('13 - 14 = -1\n')
      }
      if (a == 13 && sign == '-' && b == 15) {
        rl.write('13 - 15 = -2\n')
      }
      if (a == 13 && sign == '-' && b == 16) {
        rl.write('13 - 16 = -3\n')
      }
      if (a == 13 && sign == '-' && b == 17) {
        rl.write('13 - 17 = -4\n')
      }
      if (a == 13 && sign == '-' && b == 18) {
        rl.write('13 - 18 = -5\n')
      }
      if (a == 13 && sign == '-' && b == 19) {
        rl.write('13 - 19 = -6\n')
      }
      if (a == 13 && sign == '-' && b == 20) {
        rl.write('13 - 20 = -7\n')
      }
      if (a == 13 && sign == '-' && b == 21) {
        rl.write('13 - 21 = -8\n')
      }
      if (a == 13 && sign == '-' && b == 22) {
        rl.write('13 - 22 = -9\n')
      }
      if (a == 13 && sign == '-' && b == 23) {
        rl.write('13 - 23 = -10\n')
      }
      if (a == 13 && sign == '-' && b == 24) {
        rl.write('13 - 24 = -11\n')
      }
      if (a == 13 && sign == '-' && b == 25) {
        rl.write('13 - 25 = -12\n')
      }
      if (a == 13 && sign == '-' && b == 26) {
        rl.write('13 - 26 = -13\n')
      }
      if (a == 13 && sign == '-' && b == 27) {
        rl.write('13 - 27 = -14\n')
      }
      if (a == 13 && sign == '-' && b == 28) {
        rl.write('13 - 28 = -15\n')
      }
      if (a == 13 && sign == '-' && b == 29) {
        rl.write('13 - 29 = -16\n')
      }
      if (a == 13 && sign == '-' && b == 30) {
        rl.write('13 - 30 = -17\n')
      }
      if (a == 13 && sign == '-' && b == 31) {
        rl.write('13 - 31 = -18\n')
      }
      if (a == 13 && sign == '-' && b == 32) {
        rl.write('13 - 32 = -19\n')
      }
      if (a == 13 && sign == '-' && b == 33) {
        rl.write('13 - 33 = -20\n')
      }
      if (a == 13 && sign == '-' && b == 34) {
        rl.write('13 - 34 = -21\n')
      }
      if (a == 13 && sign == '-' && b == 35) {
        rl.write('13 - 35 = -22\n')
      }
      if (a == 13 && sign == '-' && b == 36) {
        rl.write('13 - 36 = -23\n')
      }
      if (a == 13 && sign == '-' && b == 37) {
        rl.write('13 - 37 = -24\n')
      }
      if (a == 13 && sign == '-' && b == 38) {
        rl.write('13 - 38 = -25\n')
      }
      if (a == 13 && sign == '-' && b == 39) {
        rl.write('13 - 39 = -26\n')
      }
      if (a == 13 && sign == '-' && b == 40) {
        rl.write('13 - 40 = -27\n')
      }
      if (a == 13 && sign == '-' && b == 41) {
        rl.write('13 - 41 = -28\n')
      }
      if (a == 13 && sign == '-' && b == 42) {
        rl.write('13 - 42 = -29\n')
      }
      if (a == 13 && sign == '-' && b == 43) {
        rl.write('13 - 43 = -30\n')
      }
      if (a == 13 && sign == '-' && b == 44) {
        rl.write('13 - 44 = -31\n')
      }
      if (a == 13 && sign == '-' && b == 45) {
        rl.write('13 - 45 = -32\n')
      }
      if (a == 13 && sign == '-' && b == 46) {
        rl.write('13 - 46 = -33\n')
      }
      if (a == 13 && sign == '-' && b == 47) {
        rl.write('13 - 47 = -34\n')
      }
      if (a == 13 && sign == '-' && b == 48) {
        rl.write('13 - 48 = -35\n')
      }
      if (a == 13 && sign == '-' && b == 49) {
        rl.write('13 - 49 = -36\n')
      }
      if (a == 13 && sign == '-' && b == 50) {
        rl.write('13 - 50 = -37\n')
      }
      if (a == 14 && sign == '-' && b == 0) {
        rl.write('14 - 0 = 14\n')
      }
      if (a == 14 && sign == '-' && b == 1) {
        rl.write('14 - 1 = 13\n')
      }
      if (a == 14 && sign == '-' && b == 2) {
        rl.write('14 - 2 = 12\n')
      }
      if (a == 14 && sign == '-' && b == 3) {
        rl.write('14 - 3 = 11\n')
      }
      if (a == 14 && sign == '-' && b == 4) {
        rl.write('14 - 4 = 10\n')
      }
      if (a == 14 && sign == '-' && b == 5) {
        rl.write('14 - 5 = 9\n')
      }
      if (a == 14 && sign == '-' && b == 6) {
        rl.write('14 - 6 = 8\n')
      }
      if (a == 14 && sign == '-' && b == 7) {
        rl.write('14 - 7 = 7\n')
      }
      if (a == 14 && sign == '-' && b == 8) {
        rl.write('14 - 8 = 6\n')
      }
      if (a == 14 && sign == '-' && b == 9) {
        rl.write('14 - 9 = 5\n')
      }
      if (a == 14 && sign == '-' && b == 10) {
        rl.write('14 - 10 = 4\n')
      }
      if (a == 14 && sign == '-' && b == 11) {
        rl.write('14 - 11 = 3\n')
      }
      if (a == 14 && sign == '-' && b == 12) {
        rl.write('14 - 12 = 2\n')
      }
      if (a == 14 && sign == '-' && b == 13) {
        rl.write('14 - 13 = 1\n')
      }
      if (a == 14 && sign == '-' && b == 14) {
        rl.write('14 - 14 = 0\n')
      }
      if (a == 14 && sign == '-' && b == 15) {
        rl.write('14 - 15 = -1\n')
      }
      if (a == 14 && sign == '-' && b == 16) {
        rl.write('14 - 16 = -2\n')
      }
      if (a == 14 && sign == '-' && b == 17) {
        rl.write('14 - 17 = -3\n')
      }
      if (a == 14 && sign == '-' && b == 18) {
        rl.write('14 - 18 = -4\n')
      }
      if (a == 14 && sign == '-' && b == 19) {
        rl.write('14 - 19 = -5\n')
      }
      if (a == 14 && sign == '-' && b == 20) {
        rl.write('14 - 20 = -6\n')
      }
      if (a == 14 && sign == '-' && b == 21) {
        rl.write('14 - 21 = -7\n')
      }
      if (a == 14 && sign == '-' && b == 22) {
        rl.write('14 - 22 = -8\n')
      }
      if (a == 14 && sign == '-' && b == 23) {
        rl.write('14 - 23 = -9\n')
      }
      if (a == 14 && sign == '-' && b == 24) {
        rl.write('14 - 24 = -10\n')
      }
      if (a == 14 && sign == '-' && b == 25) {
        rl.write('14 - 25 = -11\n')
      }
      if (a == 14 && sign == '-' && b == 26) {
        rl.write('14 - 26 = -12\n')
      }
      if (a == 14 && sign == '-' && b == 27) {
        rl.write('14 - 27 = -13\n')
      }
      if (a == 14 && sign == '-' && b == 28) {
        rl.write('14 - 28 = -14\n')
      }
      if (a == 14 && sign == '-' && b == 29) {
        rl.write('14 - 29 = -15\n')
      }
      if (a == 14 && sign == '-' && b == 30) {
        rl.write('14 - 30 = -16\n')
      }
      if (a == 14 && sign == '-' && b == 31) {
        rl.write('14 - 31 = -17\n')
      }
      if (a == 14 && sign == '-' && b == 32) {
        rl.write('14 - 32 = -18\n')
      }
      if (a == 14 && sign == '-' && b == 33) {
        rl.write('14 - 33 = -19\n')
      }
      if (a == 14 && sign == '-' && b == 34) {
        rl.write('14 - 34 = -20\n')
      }
      if (a == 14 && sign == '-' && b == 35) {
        rl.write('14 - 35 = -21\n')
      }
      if (a == 14 && sign == '-' && b == 36) {
        rl.write('14 - 36 = -22\n')
      }
      if (a == 14 && sign == '-' && b == 37) {
        rl.write('14 - 37 = -23\n')
      }
      if (a == 14 && sign == '-' && b == 38) {
        rl.write('14 - 38 = -24\n')
      }
      if (a == 14 && sign == '-' && b == 39) {
        rl.write('14 - 39 = -25\n')
      }
      if (a == 14 && sign == '-' && b == 40) {
        rl.write('14 - 40 = -26\n')
      }
      if (a == 14 && sign == '-' && b == 41) {
        rl.write('14 - 41 = -27\n')
      }
      if (a == 14 && sign == '-' && b == 42) {
        rl.write('14 - 42 = -28\n')
      }
      if (a == 14 && sign == '-' && b == 43) {
        rl.write('14 - 43 = -29\n')
      }
      if (a == 14 && sign == '-' && b == 44) {
        rl.write('14 - 44 = -30\n')
      }
      if (a == 14 && sign == '-' && b == 45) {
        rl.write('14 - 45 = -31\n')
      }
      if (a == 14 && sign == '-' && b == 46) {
        rl.write('14 - 46 = -32\n')
      }
      if (a == 14 && sign == '-' && b == 47) {
        rl.write('14 - 47 = -33\n')
      }
      if (a == 14 && sign == '-' && b == 48) {
        rl.write('14 - 48 = -34\n')
      }
      if (a == 14 && sign == '-' && b == 49) {
        rl.write('14 - 49 = -35\n')
      }
      if (a == 14 && sign == '-' && b == 50) {
        rl.write('14 - 50 = -36\n')
      }
      if (a == 15 && sign == '-' && b == 0) {
        rl.write('15 - 0 = 15\n')
      }
      if (a == 15 && sign == '-' && b == 1) {
        rl.write('15 - 1 = 14\n')
      }
      if (a == 15 && sign == '-' && b == 2) {
        rl.write('15 - 2 = 13\n')
      }
      if (a == 15 && sign == '-' && b == 3) {
        rl.write('15 - 3 = 12\n')
      }
      if (a == 15 && sign == '-' && b == 4) {
        rl.write('15 - 4 = 11\n')
      }
      if (a == 15 && sign == '-' && b == 5) {
        rl.write('15 - 5 = 10\n')
      }
      if (a == 15 && sign == '-' && b == 6) {
        rl.write('15 - 6 = 9\n')
      }
      if (a == 15 && sign == '-' && b == 7) {
        rl.write('15 - 7 = 8\n')
      }
      if (a == 15 && sign == '-' && b == 8) {
        rl.write('15 - 8 = 7\n')
      }
      if (a == 15 && sign == '-' && b == 9) {
        rl.write('15 - 9 = 6\n')
      }
      if (a == 15 && sign == '-' && b == 10) {
        rl.write('15 - 10 = 5\n')
      }
      if (a == 15 && sign == '-' && b == 11) {
        rl.write('15 - 11 = 4\n')
      }
      if (a == 15 && sign == '-' && b == 12) {
        rl.write('15 - 12 = 3\n')
      }
      if (a == 15 && sign == '-' && b == 13) {
        rl.write('15 - 13 = 2\n')
      }
      if (a == 15 && sign == '-' && b == 14) {
        rl.write('15 - 14 = 1\n')
      }
      if (a == 15 && sign == '-' && b == 15) {
        rl.write('15 - 15 = 0\n')
      }
      if (a == 15 && sign == '-' && b == 16) {
        rl.write('15 - 16 = -1\n')
      }
      if (a == 15 && sign == '-' && b == 17) {
        rl.write('15 - 17 = -2\n')
      }
      if (a == 15 && sign == '-' && b == 18) {
        rl.write('15 - 18 = -3\n')
      }
      if (a == 15 && sign == '-' && b == 19) {
        rl.write('15 - 19 = -4\n')
      }
      if (a == 15 && sign == '-' && b == 20) {
        rl.write('15 - 20 = -5\n')
      }
      if (a == 15 && sign == '-' && b == 21) {
        rl.write('15 - 21 = -6\n')
      }
      if (a == 15 && sign == '-' && b == 22) {
        rl.write('15 - 22 = -7\n')
      }
      if (a == 15 && sign == '-' && b == 23) {
        rl.write('15 - 23 = -8\n')
      }
      if (a == 15 && sign == '-' && b == 24) {
        rl.write('15 - 24 = -9\n')
      }
      if (a == 15 && sign == '-' && b == 25) {
        rl.write('15 - 25 = -10\n')
      }
      if (a == 15 && sign == '-' && b == 26) {
        rl.write('15 - 26 = -11\n')
      }
      if (a == 15 && sign == '-' && b == 27) {
        rl.write('15 - 27 = -12\n')
      }
      if (a == 15 && sign == '-' && b == 28) {
        rl.write('15 - 28 = -13\n')
      }
      if (a == 15 && sign == '-' && b == 29) {
        rl.write('15 - 29 = -14\n')
      }
      if (a == 15 && sign == '-' && b == 30) {
        rl.write('15 - 30 = -15\n')
      }
      if (a == 15 && sign == '-' && b == 31) {
        rl.write('15 - 31 = -16\n')
      }
      if (a == 15 && sign == '-' && b == 32) {
        rl.write('15 - 32 = -17\n')
      }
      if (a == 15 && sign == '-' && b == 33) {
        rl.write('15 - 33 = -18\n')
      }
      if (a == 15 && sign == '-' && b == 34) {
        rl.write('15 - 34 = -19\n')
      }
      if (a == 15 && sign == '-' && b == 35) {
        rl.write('15 - 35 = -20\n')
      }
      if (a == 15 && sign == '-' && b == 36) {
        rl.write('15 - 36 = -21\n')
      }
      if (a == 15 && sign == '-' && b == 37) {
        rl.write('15 - 37 = -22\n')
      }
      if (a == 15 && sign == '-' && b == 38) {
        rl.write('15 - 38 = -23\n')
      }
      if (a == 15 && sign == '-' && b == 39) {
        rl.write('15 - 39 = -24\n')
      }
      if (a == 15 && sign == '-' && b == 40) {
        rl.write('15 - 40 = -25\n')
      }
      if (a == 15 && sign == '-' && b == 41) {
        rl.write('15 - 41 = -26\n')
      }
      if (a == 15 && sign == '-' && b == 42) {
        rl.write('15 - 42 = -27\n')
      }
      if (a == 15 && sign == '-' && b == 43) {
        rl.write('15 - 43 = -28\n')
      }
      if (a == 15 && sign == '-' && b == 44) {
        rl.write('15 - 44 = -29\n')
      }
      if (a == 15 && sign == '-' && b == 45) {
        rl.write('15 - 45 = -30\n')
      }
      if (a == 15 && sign == '-' && b == 46) {
        rl.write('15 - 46 = -31\n')
      }
      if (a == 15 && sign == '-' && b == 47) {
        rl.write('15 - 47 = -32\n')
      }
      if (a == 15 && sign == '-' && b == 48) {
        rl.write('15 - 48 = -33\n')
      }
      if (a == 15 && sign == '-' && b == 49) {
        rl.write('15 - 49 = -34\n')
      }
      if (a == 15 && sign == '-' && b == 50) {
        rl.write('15 - 50 = -35\n')
      }
      if (a == 16 && sign == '-' && b == 0) {
        rl.write('16 - 0 = 16\n')
      }
      if (a == 16 && sign == '-' && b == 1) {
        rl.write('16 - 1 = 15\n')
      }
      if (a == 16 && sign == '-' && b == 2) {
        rl.write('16 - 2 = 14\n')
      }
      if (a == 16 && sign == '-' && b == 3) {
        rl.write('16 - 3 = 13\n')
      }
      if (a == 16 && sign == '-' && b == 4) {
        rl.write('16 - 4 = 12\n')
      }
      if (a == 16 && sign == '-' && b == 5) {
        rl.write('16 - 5 = 11\n')
      }
      if (a == 16 && sign == '-' && b == 6) {
        rl.write('16 - 6 = 10\n')
      }
      if (a == 16 && sign == '-' && b == 7) {
        rl.write('16 - 7 = 9\n')
      }
      if (a == 16 && sign == '-' && b == 8) {
        rl.write('16 - 8 = 8\n')
      }
      if (a == 16 && sign == '-' && b == 9) {
        rl.write('16 - 9 = 7\n')
      }
      if (a == 16 && sign == '-' && b == 10) {
        rl.write('16 - 10 = 6\n')
      }
      if (a == 16 && sign == '-' && b == 11) {
        rl.write('16 - 11 = 5\n')
      }
      if (a == 16 && sign == '-' && b == 12) {
        rl.write('16 - 12 = 4\n')
      }
      if (a == 16 && sign == '-' && b == 13) {
        rl.write('16 - 13 = 3\n')
      }
      if (a == 16 && sign == '-' && b == 14) {
        rl.write('16 - 14 = 2\n')
      }
      if (a == 16 && sign == '-' && b == 15) {
        rl.write('16 - 15 = 1\n')
      }
      if (a == 16 && sign == '-' && b == 16) {
        rl.write('16 - 16 = 0\n')
      }
      if (a == 16 && sign == '-' && b == 17) {
        rl.write('16 - 17 = -1\n')
      }
      if (a == 16 && sign == '-' && b == 18) {
        rl.write('16 - 18 = -2\n')
      }
      if (a == 16 && sign == '-' && b == 19) {
        rl.write('16 - 19 = -3\n')
      }
      if (a == 16 && sign == '-' && b == 20) {
        rl.write('16 - 20 = -4\n')
      }
      if (a == 16 && sign == '-' && b == 21) {
        rl.write('16 - 21 = -5\n')
      }
      if (a == 16 && sign == '-' && b == 22) {
        rl.write('16 - 22 = -6\n')
      }
      if (a == 16 && sign == '-' && b == 23) {
        rl.write('16 - 23 = -7\n')
      }
      if (a == 16 && sign == '-' && b == 24) {
        rl.write('16 - 24 = -8\n')
      }
      if (a == 16 && sign == '-' && b == 25) {
        rl.write('16 - 25 = -9\n')
      }
      if (a == 16 && sign == '-' && b == 26) {
        rl.write('16 - 26 = -10\n')
      }
      if (a == 16 && sign == '-' && b == 27) {
        rl.write('16 - 27 = -11\n')
      }
      if (a == 16 && sign == '-' && b == 28) {
        rl.write('16 - 28 = -12\n')
      }
      if (a == 16 && sign == '-' && b == 29) {
        rl.write('16 - 29 = -13\n')
      }
      if (a == 16 && sign == '-' && b == 30) {
        rl.write('16 - 30 = -14\n')
      }
      if (a == 16 && sign == '-' && b == 31) {
        rl.write('16 - 31 = -15\n')
      }
      if (a == 16 && sign == '-' && b == 32) {
        rl.write('16 - 32 = -16\n')
      }
      if (a == 16 && sign == '-' && b == 33) {
        rl.write('16 - 33 = -17\n')
      }
      if (a == 16 && sign == '-' && b == 34) {
        rl.write('16 - 34 = -18\n')
      }
      if (a == 16 && sign == '-' && b == 35) {
        rl.write('16 - 35 = -19\n')
      }
      if (a == 16 && sign == '-' && b == 36) {
        rl.write('16 - 36 = -20\n')
      }
      if (a == 16 && sign == '-' && b == 37) {
        rl.write('16 - 37 = -21\n')
      }
      if (a == 16 && sign == '-' && b == 38) {
        rl.write('16 - 38 = -22\n')
      }
      if (a == 16 && sign == '-' && b == 39) {
        rl.write('16 - 39 = -23\n')
      }
      if (a == 16 && sign == '-' && b == 40) {
        rl.write('16 - 40 = -24\n')
      }
      if (a == 16 && sign == '-' && b == 41) {
        rl.write('16 - 41 = -25\n')
      }
      if (a == 16 && sign == '-' && b == 42) {
        rl.write('16 - 42 = -26\n')
      }
      if (a == 16 && sign == '-' && b == 43) {
        rl.write('16 - 43 = -27\n')
      }
      if (a == 16 && sign == '-' && b == 44) {
        rl.write('16 - 44 = -28\n')
      }
      if (a == 16 && sign == '-' && b == 45) {
        rl.write('16 - 45 = -29\n')
      }
      if (a == 16 && sign == '-' && b == 46) {
        rl.write('16 - 46 = -30\n')
      }
      if (a == 16 && sign == '-' && b == 47) {
        rl.write('16 - 47 = -31\n')
      }
      if (a == 16 && sign == '-' && b == 48) {
        rl.write('16 - 48 = -32\n')
      }
      if (a == 16 && sign == '-' && b == 49) {
        rl.write('16 - 49 = -33\n')
      }
      if (a == 16 && sign == '-' && b == 50) {
        rl.write('16 - 50 = -34\n')
      }
      if (a == 17 && sign == '-' && b == 0) {
        rl.write('17 - 0 = 17\n')
      }
      if (a == 17 && sign == '-' && b == 1) {
        rl.write('17 - 1 = 16\n')
      }
      if (a == 17 && sign == '-' && b == 2) {
        rl.write('17 - 2 = 15\n')
      }
      if (a == 17 && sign == '-' && b == 3) {
        rl.write('17 - 3 = 14\n')
      }
      if (a == 17 && sign == '-' && b == 4) {
        rl.write('17 - 4 = 13\n')
      }
      if (a == 17 && sign == '-' && b == 5) {
        rl.write('17 - 5 = 12\n')
      }
      if (a == 17 && sign == '-' && b == 6) {
        rl.write('17 - 6 = 11\n')
      }
      if (a == 17 && sign == '-' && b == 7) {
        rl.write('17 - 7 = 10\n')
      }
      if (a == 17 && sign == '-' && b == 8) {
        rl.write('17 - 8 = 9\n')
      }
      if (a == 17 && sign == '-' && b == 9) {
        rl.write('17 - 9 = 8\n')
      }
      if (a == 17 && sign == '-' && b == 10) {
        rl.write('17 - 10 = 7\n')
      }
      if (a == 17 && sign == '-' && b == 11) {
        rl.write('17 - 11 = 6\n')
      }
      if (a == 17 && sign == '-' && b == 12) {
        rl.write('17 - 12 = 5\n')
      }
      if (a == 17 && sign == '-' && b == 13) {
        rl.write('17 - 13 = 4\n')
      }
      if (a == 17 && sign == '-' && b == 14) {
        rl.write('17 - 14 = 3\n')
      }
      if (a == 17 && sign == '-' && b == 15) {
        rl.write('17 - 15 = 2\n')
      }
      if (a == 17 && sign == '-' && b == 16) {
        rl.write('17 - 16 = 1\n')
      }
      if (a == 17 && sign == '-' && b == 17) {
        rl.write('17 - 17 = 0\n')
      }
      if (a == 17 && sign == '-' && b == 18) {
        rl.write('17 - 18 = -1\n')
      }
      if (a == 17 && sign == '-' && b == 19) {
        rl.write('17 - 19 = -2\n')
      }
      if (a == 17 && sign == '-' && b == 20) {
        rl.write('17 - 20 = -3\n')
      }
      if (a == 17 && sign == '-' && b == 21) {
        rl.write('17 - 21 = -4\n')
      }
      if (a == 17 && sign == '-' && b == 22) {
        rl.write('17 - 22 = -5\n')
      }
      if (a == 17 && sign == '-' && b == 23) {
        rl.write('17 - 23 = -6\n')
      }
      if (a == 17 && sign == '-' && b == 24) {
        rl.write('17 - 24 = -7\n')
      }
      if (a == 17 && sign == '-' && b == 25) {
        rl.write('17 - 25 = -8\n')
      }
      if (a == 17 && sign == '-' && b == 26) {
        rl.write('17 - 26 = -9\n')
      }
      if (a == 17 && sign == '-' && b == 27) {
        rl.write('17 - 27 = -10\n')
      }
      if (a == 17 && sign == '-' && b == 28) {
        rl.write('17 - 28 = -11\n')
      }
      if (a == 17 && sign == '-' && b == 29) {
        rl.write('17 - 29 = -12\n')
      }
      if (a == 17 && sign == '-' && b == 30) {
        rl.write('17 - 30 = -13\n')
      }
      if (a == 17 && sign == '-' && b == 31) {
        rl.write('17 - 31 = -14\n')
      }
      if (a == 17 && sign == '-' && b == 32) {
        rl.write('17 - 32 = -15\n')
      }
      if (a == 17 && sign == '-' && b == 33) {
        rl.write('17 - 33 = -16\n')
      }
      if (a == 17 && sign == '-' && b == 34) {
        rl.write('17 - 34 = -17\n')
      }
      if (a == 17 && sign == '-' && b == 35) {
        rl.write('17 - 35 = -18\n')
      }
      if (a == 17 && sign == '-' && b == 36) {
        rl.write('17 - 36 = -19\n')
      }
      if (a == 17 && sign == '-' && b == 37) {
        rl.write('17 - 37 = -20\n')
      }
      if (a == 17 && sign == '-' && b == 38) {
        rl.write('17 - 38 = -21\n')
      }
      if (a == 17 && sign == '-' && b == 39) {
        rl.write('17 - 39 = -22\n')
      }
      if (a == 17 && sign == '-' && b == 40) {
        rl.write('17 - 40 = -23\n')
      }
      if (a == 17 && sign == '-' && b == 41) {
        rl.write('17 - 41 = -24\n')
      }
      if (a == 17 && sign == '-' && b == 42) {
        rl.write('17 - 42 = -25\n')
      }
      if (a == 17 && sign == '-' && b == 43) {
        rl.write('17 - 43 = -26\n')
      }
      if (a == 17 && sign == '-' && b == 44) {
        rl.write('17 - 44 = -27\n')
      }
      if (a == 17 && sign == '-' && b == 45) {
        rl.write('17 - 45 = -28\n')
      }
      if (a == 17 && sign == '-' && b == 46) {
        rl.write('17 - 46 = -29\n')
      }
      if (a == 17 && sign == '-' && b == 47) {
        rl.write('17 - 47 = -30\n')
      }
      if (a == 17 && sign == '-' && b == 48) {
        rl.write('17 - 48 = -31\n')
      }
      if (a == 17 && sign == '-' && b == 49) {
        rl.write('17 - 49 = -32\n')
      }
      if (a == 17 && sign == '-' && b == 50) {
        rl.write('17 - 50 = -33\n')
      }
      if (a == 18 && sign == '-' && b == 0) {
        rl.write('18 - 0 = 18\n')
      }
      if (a == 18 && sign == '-' && b == 1) {
        rl.write('18 - 1 = 17\n')
      }
      if (a == 18 && sign == '-' && b == 2) {
        rl.write('18 - 2 = 16\n')
      }
      if (a == 18 && sign == '-' && b == 3) {
        rl.write('18 - 3 = 15\n')
      }
      if (a == 18 && sign == '-' && b == 4) {
        rl.write('18 - 4 = 14\n')
      }
      if (a == 18 && sign == '-' && b == 5) {
        rl.write('18 - 5 = 13\n')
      }
      if (a == 18 && sign == '-' && b == 6) {
        rl.write('18 - 6 = 12\n')
      }
      if (a == 18 && sign == '-' && b == 7) {
        rl.write('18 - 7 = 11\n')
      }
      if (a == 18 && sign == '-' && b == 8) {
        rl.write('18 - 8 = 10\n')
      }
      if (a == 18 && sign == '-' && b == 9) {
        rl.write('18 - 9 = 9\n')
      }
      if (a == 18 && sign == '-' && b == 10) {
        rl.write('18 - 10 = 8\n')
      }
      if (a == 18 && sign == '-' && b == 11) {
        rl.write('18 - 11 = 7\n')
      }
      if (a == 18 && sign == '-' && b == 12) {
        rl.write('18 - 12 = 6\n')
      }
      if (a == 18 && sign == '-' && b == 13) {
        rl.write('18 - 13 = 5\n')
      }
      if (a == 18 && sign == '-' && b == 14) {
        rl.write('18 - 14 = 4\n')
      }
      if (a == 18 && sign == '-' && b == 15) {
        rl.write('18 - 15 = 3\n')
      }
      if (a == 18 && sign == '-' && b == 16) {
        rl.write('18 - 16 = 2\n')
      }
      if (a == 18 && sign == '-' && b == 17) {
        rl.write('18 - 17 = 1\n')
      }
      if (a == 18 && sign == '-' && b == 18) {
        rl.write('18 - 18 = 0\n')
      }
      if (a == 18 && sign == '-' && b == 19) {
        rl.write('18 - 19 = -1\n')
      }
      if (a == 18 && sign == '-' && b == 20) {
        rl.write('18 - 20 = -2\n')
      }
      if (a == 18 && sign == '-' && b == 21) {
        rl.write('18 - 21 = -3\n')
      }
      if (a == 18 && sign == '-' && b == 22) {
        rl.write('18 - 22 = -4\n')
      }
      if (a == 18 && sign == '-' && b == 23) {
        rl.write('18 - 23 = -5\n')
      }
      if (a == 18 && sign == '-' && b == 24) {
        rl.write('18 - 24 = -6\n')
      }
      if (a == 18 && sign == '-' && b == 25) {
        rl.write('18 - 25 = -7\n')
      }
      if (a == 18 && sign == '-' && b == 26) {
        rl.write('18 - 26 = -8\n')
      }
      if (a == 18 && sign == '-' && b == 27) {
        rl.write('18 - 27 = -9\n')
      }
      if (a == 18 && sign == '-' && b == 28) {
        rl.write('18 - 28 = -10\n')
      }
      if (a == 18 && sign == '-' && b == 29) {
        rl.write('18 - 29 = -11\n')
      }
      if (a == 18 && sign == '-' && b == 30) {
        rl.write('18 - 30 = -12\n')
      }
      if (a == 18 && sign == '-' && b == 31) {
        rl.write('18 - 31 = -13\n')
      }
      if (a == 18 && sign == '-' && b == 32) {
        rl.write('18 - 32 = -14\n')
      }
      if (a == 18 && sign == '-' && b == 33) {
        rl.write('18 - 33 = -15\n')
      }
      if (a == 18 && sign == '-' && b == 34) {
        rl.write('18 - 34 = -16\n')
      }
      if (a == 18 && sign == '-' && b == 35) {
        rl.write('18 - 35 = -17\n')
      }
      if (a == 18 && sign == '-' && b == 36) {
        rl.write('18 - 36 = -18\n')
      }
      if (a == 18 && sign == '-' && b == 37) {
        rl.write('18 - 37 = -19\n')
      }
      if (a == 18 && sign == '-' && b == 38) {
        rl.write('18 - 38 = -20\n')
      }
      if (a == 18 && sign == '-' && b == 39) {
        rl.write('18 - 39 = -21\n')
      }
      if (a == 18 && sign == '-' && b == 40) {
        rl.write('18 - 40 = -22\n')
      }
      if (a == 18 && sign == '-' && b == 41) {
        rl.write('18 - 41 = -23\n')
      }
      if (a == 18 && sign == '-' && b == 42) {
        rl.write('18 - 42 = -24\n')
      }
      if (a == 18 && sign == '-' && b == 43) {
        rl.write('18 - 43 = -25\n')
      }
      if (a == 18 && sign == '-' && b == 44) {
        rl.write('18 - 44 = -26\n')
      }
      if (a == 18 && sign == '-' && b == 45) {
        rl.write('18 - 45 = -27\n')
      }
      if (a == 18 && sign == '-' && b == 46) {
        rl.write('18 - 46 = -28\n')
      }
      if (a == 18 && sign == '-' && b == 47) {
        rl.write('18 - 47 = -29\n')
      }
      if (a == 18 && sign == '-' && b == 48) {
        rl.write('18 - 48 = -30\n')
      }
      if (a == 18 && sign == '-' && b == 49) {
        rl.write('18 - 49 = -31\n')
      }
      if (a == 18 && sign == '-' && b == 50) {
        rl.write('18 - 50 = -32\n')
      }
      if (a == 19 && sign == '-' && b == 0) {
        rl.write('19 - 0 = 19\n')
      }
      if (a == 19 && sign == '-' && b == 1) {
        rl.write('19 - 1 = 18\n')
      }
      if (a == 19 && sign == '-' && b == 2) {
        rl.write('19 - 2 = 17\n')
      }
      if (a == 19 && sign == '-' && b == 3) {
        rl.write('19 - 3 = 16\n')
      }
      if (a == 19 && sign == '-' && b == 4) {
        rl.write('19 - 4 = 15\n')
      }
      if (a == 19 && sign == '-' && b == 5) {
        rl.write('19 - 5 = 14\n')
      }
      if (a == 19 && sign == '-' && b == 6) {
        rl.write('19 - 6 = 13\n')
      }
      if (a == 19 && sign == '-' && b == 7) {
        rl.write('19 - 7 = 12\n')
      }
      if (a == 19 && sign == '-' && b == 8) {
        rl.write('19 - 8 = 11\n')
      }
      if (a == 19 && sign == '-' && b == 9) {
        rl.write('19 - 9 = 10\n')
      }
      if (a == 19 && sign == '-' && b == 10) {
        rl.write('19 - 10 = 9\n')
      }
      if (a == 19 && sign == '-' && b == 11) {
        rl.write('19 - 11 = 8\n')
      }
      if (a == 19 && sign == '-' && b == 12) {
        rl.write('19 - 12 = 7\n')
      }
      if (a == 19 && sign == '-' && b == 13) {
        rl.write('19 - 13 = 6\n')
      }
      if (a == 19 && sign == '-' && b == 14) {
        rl.write('19 - 14 = 5\n')
      }
      if (a == 19 && sign == '-' && b == 15) {
        rl.write('19 - 15 = 4\n')
      }
      if (a == 19 && sign == '-' && b == 16) {
        rl.write('19 - 16 = 3\n')
      }
      if (a == 19 && sign == '-' && b == 17) {
        rl.write('19 - 17 = 2\n')
      }
      if (a == 19 && sign == '-' && b == 18) {
        rl.write('19 - 18 = 1\n')
      }
      if (a == 19 && sign == '-' && b == 19) {
        rl.write('19 - 19 = 0\n')
      }
      if (a == 19 && sign == '-' && b == 20) {
        rl.write('19 - 20 = -1\n')
      }
      if (a == 19 && sign == '-' && b == 21) {
        rl.write('19 - 21 = -2\n')
      }
      if (a == 19 && sign == '-' && b == 22) {
        rl.write('19 - 22 = -3\n')
      }
      if (a == 19 && sign == '-' && b == 23) {
        rl.write('19 - 23 = -4\n')
      }
      if (a == 19 && sign == '-' && b == 24) {
        rl.write('19 - 24 = -5\n')
      }
      if (a == 19 && sign == '-' && b == 25) {
        rl.write('19 - 25 = -6\n')
      }
      if (a == 19 && sign == '-' && b == 26) {
        rl.write('19 - 26 = -7\n')
      }
      if (a == 19 && sign == '-' && b == 27) {
        rl.write('19 - 27 = -8\n')
      }
      if (a == 19 && sign == '-' && b == 28) {
        rl.write('19 - 28 = -9\n')
      }
      if (a == 19 && sign == '-' && b == 29) {
        rl.write('19 - 29 = -10\n')
      }
      if (a == 19 && sign == '-' && b == 30) {
        rl.write('19 - 30 = -11\n')
      }
      if (a == 19 && sign == '-' && b == 31) {
        rl.write('19 - 31 = -12\n')
      }
      if (a == 19 && sign == '-' && b == 32) {
        rl.write('19 - 32 = -13\n')
      }
      if (a == 19 && sign == '-' && b == 33) {
        rl.write('19 - 33 = -14\n')
      }
      if (a == 19 && sign == '-' && b == 34) {
        rl.write('19 - 34 = -15\n')
      }
      if (a == 19 && sign == '-' && b == 35) {
        rl.write('19 - 35 = -16\n')
      }
      if (a == 19 && sign == '-' && b == 36) {
        rl.write('19 - 36 = -17\n')
      }
      if (a == 19 && sign == '-' && b == 37) {
        rl.write('19 - 37 = -18\n')
      }
      if (a == 19 && sign == '-' && b == 38) {
        rl.write('19 - 38 = -19\n')
      }
      if (a == 19 && sign == '-' && b == 39) {
        rl.write('19 - 39 = -20\n')
      }
      if (a == 19 && sign == '-' && b == 40) {
        rl.write('19 - 40 = -21\n')
      }
      if (a == 19 && sign == '-' && b == 41) {
        rl.write('19 - 41 = -22\n')
      }
      if (a == 19 && sign == '-' && b == 42) {
        rl.write('19 - 42 = -23\n')
      }
      if (a == 19 && sign == '-' && b == 43) {
        rl.write('19 - 43 = -24\n')
      }
      if (a == 19 && sign == '-' && b == 44) {
        rl.write('19 - 44 = -25\n')
      }
      if (a == 19 && sign == '-' && b == 45) {
        rl.write('19 - 45 = -26\n')
      }
      if (a == 19 && sign == '-' && b == 46) {
        rl.write('19 - 46 = -27\n')
      }
      if (a == 19 && sign == '-' && b == 47) {
        rl.write('19 - 47 = -28\n')
      }
      if (a == 19 && sign == '-' && b == 48) {
        rl.write('19 - 48 = -29\n')
      }
      if (a == 19 && sign == '-' && b == 49) {
        rl.write('19 - 49 = -30\n')
      }
      if (a == 19 && sign == '-' && b == 50) {
        rl.write('19 - 50 = -31\n')
      }
      if (a == 20 && sign == '-' && b == 0) {
        rl.write('20 - 0 = 20\n')
      }
      if (a == 20 && sign == '-' && b == 1) {
        rl.write('20 - 1 = 19\n')
      }
      if (a == 20 && sign == '-' && b == 2) {
        rl.write('20 - 2 = 18\n')
      }
      if (a == 20 && sign == '-' && b == 3) {
        rl.write('20 - 3 = 17\n')
      }
      if (a == 20 && sign == '-' && b == 4) {
        rl.write('20 - 4 = 16\n')
      }
      if (a == 20 && sign == '-' && b == 5) {
        rl.write('20 - 5 = 15\n')
      }
      if (a == 20 && sign == '-' && b == 6) {
        rl.write('20 - 6 = 14\n')
      }
      if (a == 20 && sign == '-' && b == 7) {
        rl.write('20 - 7 = 13\n')
      }
      if (a == 20 && sign == '-' && b == 8) {
        rl.write('20 - 8 = 12\n')
      }
      if (a == 20 && sign == '-' && b == 9) {
        rl.write('20 - 9 = 11\n')
      }
      if (a == 20 && sign == '-' && b == 10) {
        rl.write('20 - 10 = 10\n')
      }
      if (a == 20 && sign == '-' && b == 11) {
        rl.write('20 - 11 = 9\n')
      }
      if (a == 20 && sign == '-' && b == 12) {
        rl.write('20 - 12 = 8\n')
      }
      if (a == 20 && sign == '-' && b == 13) {
        rl.write('20 - 13 = 7\n')
      }
      if (a == 20 && sign == '-' && b == 14) {
        rl.write('20 - 14 = 6\n')
      }
      if (a == 20 && sign == '-' && b == 15) {
        rl.write('20 - 15 = 5\n')
      }
      if (a == 20 && sign == '-' && b == 16) {
        rl.write('20 - 16 = 4\n')
      }
      if (a == 20 && sign == '-' && b == 17) {
        rl.write('20 - 17 = 3\n')
      }
      if (a == 20 && sign == '-' && b == 18) {
        rl.write('20 - 18 = 2\n')
      }
      if (a == 20 && sign == '-' && b == 19) {
        rl.write('20 - 19 = 1\n')
      }
      if (a == 20 && sign == '-' && b == 20) {
        rl.write('20 - 20 = 0\n')
      }
      if (a == 20 && sign == '-' && b == 21) {
        rl.write('20 - 21 = -1\n')
      }
      if (a == 20 && sign == '-' && b == 22) {
        rl.write('20 - 22 = -2\n')
      }
      if (a == 20 && sign == '-' && b == 23) {
        rl.write('20 - 23 = -3\n')
      }
      if (a == 20 && sign == '-' && b == 24) {
        rl.write('20 - 24 = -4\n')
      }
      if (a == 20 && sign == '-' && b == 25) {
        rl.write('20 - 25 = -5\n')
      }
      if (a == 20 && sign == '-' && b == 26) {
        rl.write('20 - 26 = -6\n')
      }
      if (a == 20 && sign == '-' && b == 27) {
        rl.write('20 - 27 = -7\n')
      }
      if (a == 20 && sign == '-' && b == 28) {
        rl.write('20 - 28 = -8\n')
      }
      if (a == 20 && sign == '-' && b == 29) {
        rl.write('20 - 29 = -9\n')
      }
      if (a == 20 && sign == '-' && b == 30) {
        rl.write('20 - 30 = -10\n')
      }
      if (a == 20 && sign == '-' && b == 31) {
        rl.write('20 - 31 = -11\n')
      }
      if (a == 20 && sign == '-' && b == 32) {
        rl.write('20 - 32 = -12\n')
      }
      if (a == 20 && sign == '-' && b == 33) {
        rl.write('20 - 33 = -13\n')
      }
      if (a == 20 && sign == '-' && b == 34) {
        rl.write('20 - 34 = -14\n')
      }
      if (a == 20 && sign == '-' && b == 35) {
        rl.write('20 - 35 = -15\n')
      }
      if (a == 20 && sign == '-' && b == 36) {
        rl.write('20 - 36 = -16\n')
      }
      if (a == 20 && sign == '-' && b == 37) {
        rl.write('20 - 37 = -17\n')
      }
      if (a == 20 && sign == '-' && b == 38) {
        rl.write('20 - 38 = -18\n')
      }
      if (a == 20 && sign == '-' && b == 39) {
        rl.write('20 - 39 = -19\n')
      }
      if (a == 20 && sign == '-' && b == 40) {
        rl.write('20 - 40 = -20\n')
      }
      if (a == 20 && sign == '-' && b == 41) {
        rl.write('20 - 41 = -21\n')
      }
      if (a == 20 && sign == '-' && b == 42) {
        rl.write('20 - 42 = -22\n')
      }
      if (a == 20 && sign == '-' && b == 43) {
        rl.write('20 - 43 = -23\n')
      }
      if (a == 20 && sign == '-' && b == 44) {
        rl.write('20 - 44 = -24\n')
      }
      if (a == 20 && sign == '-' && b == 45) {
        rl.write('20 - 45 = -25\n')
      }
      if (a == 20 && sign == '-' && b == 46) {
        rl.write('20 - 46 = -26\n')
      }
      if (a == 20 && sign == '-' && b == 47) {
        rl.write('20 - 47 = -27\n')
      }
      if (a == 20 && sign == '-' && b == 48) {
        rl.write('20 - 48 = -28\n')
      }
      if (a == 20 && sign == '-' && b == 49) {
        rl.write('20 - 49 = -29\n')
      }
      if (a == 20 && sign == '-' && b == 50) {
        rl.write('20 - 50 = -30\n')
      }
      if (a == 21 && sign == '-' && b == 0) {
        rl.write('21 - 0 = 21\n')
      }
      if (a == 21 && sign == '-' && b == 1) {
        rl.write('21 - 1 = 20\n')
      }
      if (a == 21 && sign == '-' && b == 2) {
        rl.write('21 - 2 = 19\n')
      }
      if (a == 21 && sign == '-' && b == 3) {
        rl.write('21 - 3 = 18\n')
      }
      if (a == 21 && sign == '-' && b == 4) {
        rl.write('21 - 4 = 17\n')
      }
      if (a == 21 && sign == '-' && b == 5) {
        rl.write('21 - 5 = 16\n')
      }
      if (a == 21 && sign == '-' && b == 6) {
        rl.write('21 - 6 = 15\n')
      }
      if (a == 21 && sign == '-' && b == 7) {
        rl.write('21 - 7 = 14\n')
      }
      if (a == 21 && sign == '-' && b == 8) {
        rl.write('21 - 8 = 13\n')
      }
      if (a == 21 && sign == '-' && b == 9) {
        rl.write('21 - 9 = 12\n')
      }
      if (a == 21 && sign == '-' && b == 10) {
        rl.write('21 - 10 = 11\n')
      }
      if (a == 21 && sign == '-' && b == 11) {
        rl.write('21 - 11 = 10\n')
      }
      if (a == 21 && sign == '-' && b == 12) {
        rl.write('21 - 12 = 9\n')
      }
      if (a == 21 && sign == '-' && b == 13) {
        rl.write('21 - 13 = 8\n')
      }
      if (a == 21 && sign == '-' && b == 14) {
        rl.write('21 - 14 = 7\n')
      }
      if (a == 21 && sign == '-' && b == 15) {
        rl.write('21 - 15 = 6\n')
      }
      if (a == 21 && sign == '-' && b == 16) {
        rl.write('21 - 16 = 5\n')
      }
      if (a == 21 && sign == '-' && b == 17) {
        rl.write('21 - 17 = 4\n')
      }
      if (a == 21 && sign == '-' && b == 18) {
        rl.write('21 - 18 = 3\n')
      }
      if (a == 21 && sign == '-' && b == 19) {
        rl.write('21 - 19 = 2\n')
      }
      if (a == 21 && sign == '-' && b == 20) {
        rl.write('21 - 20 = 1\n')
      }
      if (a == 21 && sign == '-' && b == 21) {
        rl.write('21 - 21 = 0\n')
      }
      if (a == 21 && sign == '-' && b == 22) {
        rl.write('21 - 22 = -1\n')
      }
      if (a == 21 && sign == '-' && b == 23) {
        rl.write('21 - 23 = -2\n')
      }
      if (a == 21 && sign == '-' && b == 24) {
        rl.write('21 - 24 = -3\n')
      }
      if (a == 21 && sign == '-' && b == 25) {
        rl.write('21 - 25 = -4\n')
      }
      if (a == 21 && sign == '-' && b == 26) {
        rl.write('21 - 26 = -5\n')
      }
      if (a == 21 && sign == '-' && b == 27) {
        rl.write('21 - 27 = -6\n')
      }
      if (a == 21 && sign == '-' && b == 28) {
        rl.write('21 - 28 = -7\n')
      }
      if (a == 21 && sign == '-' && b == 29) {
        rl.write('21 - 29 = -8\n')
      }
      if (a == 21 && sign == '-' && b == 30) {
        rl.write('21 - 30 = -9\n')
      }
      if (a == 21 && sign == '-' && b == 31) {
        rl.write('21 - 31 = -10\n')
      }
      if (a == 21 && sign == '-' && b == 32) {
        rl.write('21 - 32 = -11\n')
      }
      if (a == 21 && sign == '-' && b == 33) {
        rl.write('21 - 33 = -12\n')
      }
      if (a == 21 && sign == '-' && b == 34) {
        rl.write('21 - 34 = -13\n')
      }
      if (a == 21 && sign == '-' && b == 35) {
        rl.write('21 - 35 = -14\n')
      }
      if (a == 21 && sign == '-' && b == 36) {
        rl.write('21 - 36 = -15\n')
      }
      if (a == 21 && sign == '-' && b == 37) {
        rl.write('21 - 37 = -16\n')
      }
      if (a == 21 && sign == '-' && b == 38) {
        rl.write('21 - 38 = -17\n')
      }
      if (a == 21 && sign == '-' && b == 39) {
        rl.write('21 - 39 = -18\n')
      }
      if (a == 21 && sign == '-' && b == 40) {
        rl.write('21 - 40 = -19\n')
      }
      if (a == 21 && sign == '-' && b == 41) {
        rl.write('21 - 41 = -20\n')
      }
      if (a == 21 && sign == '-' && b == 42) {
        rl.write('21 - 42 = -21\n')
      }
      if (a == 21 && sign == '-' && b == 43) {
        rl.write('21 - 43 = -22\n')
      }
      if (a == 21 && sign == '-' && b == 44) {
        rl.write('21 - 44 = -23\n')
      }
      if (a == 21 && sign == '-' && b == 45) {
        rl.write('21 - 45 = -24\n')
      }
      if (a == 21 && sign == '-' && b == 46) {
        rl.write('21 - 46 = -25\n')
      }
      if (a == 21 && sign == '-' && b == 47) {
        rl.write('21 - 47 = -26\n')
      }
      if (a == 21 && sign == '-' && b == 48) {
        rl.write('21 - 48 = -27\n')
      }
      if (a == 21 && sign == '-' && b == 49) {
        rl.write('21 - 49 = -28\n')
      }
      if (a == 21 && sign == '-' && b == 50) {
        rl.write('21 - 50 = -29\n')
      }
      if (a == 22 && sign == '-' && b == 0) {
        rl.write('22 - 0 = 22\n')
      }
      if (a == 22 && sign == '-' && b == 1) {
        rl.write('22 - 1 = 21\n')
      }
      if (a == 22 && sign == '-' && b == 2) {
        rl.write('22 - 2 = 20\n')
      }
      if (a == 22 && sign == '-' && b == 3) {
        rl.write('22 - 3 = 19\n')
      }
      if (a == 22 && sign == '-' && b == 4) {
        rl.write('22 - 4 = 18\n')
      }
      if (a == 22 && sign == '-' && b == 5) {
        rl.write('22 - 5 = 17\n')
      }
      if (a == 22 && sign == '-' && b == 6) {
        rl.write('22 - 6 = 16\n')
      }
      if (a == 22 && sign == '-' && b == 7) {
        rl.write('22 - 7 = 15\n')
      }
      if (a == 22 && sign == '-' && b == 8) {
        rl.write('22 - 8 = 14\n')
      }
      if (a == 22 && sign == '-' && b == 9) {
        rl.write('22 - 9 = 13\n')
      }
      if (a == 22 && sign == '-' && b == 10) {
        rl.write('22 - 10 = 12\n')
      }
      if (a == 22 && sign == '-' && b == 11) {
        rl.write('22 - 11 = 11\n')
      }
      if (a == 22 && sign == '-' && b == 12) {
        rl.write('22 - 12 = 10\n')
      }
      if (a == 22 && sign == '-' && b == 13) {
        rl.write('22 - 13 = 9\n')
      }
      if (a == 22 && sign == '-' && b == 14) {
        rl.write('22 - 14 = 8\n')
      }
      if (a == 22 && sign == '-' && b == 15) {
        rl.write('22 - 15 = 7\n')
      }
      if (a == 22 && sign == '-' && b == 16) {
        rl.write('22 - 16 = 6\n')
      }
      if (a == 22 && sign == '-' && b == 17) {
        rl.write('22 - 17 = 5\n')
      }
      if (a == 22 && sign == '-' && b == 18) {
        rl.write('22 - 18 = 4\n')
      }
      if (a == 22 && sign == '-' && b == 19) {
        rl.write('22 - 19 = 3\n')
      }
      if (a == 22 && sign == '-' && b == 20) {
        rl.write('22 - 20 = 2\n')
      }
      if (a == 22 && sign == '-' && b == 21) {
        rl.write('22 - 21 = 1\n')
      }
      if (a == 22 && sign == '-' && b == 22) {
        rl.write('22 - 22 = 0\n')
      }
      if (a == 22 && sign == '-' && b == 23) {
        rl.write('22 - 23 = -1\n')
      }
      if (a == 22 && sign == '-' && b == 24) {
        rl.write('22 - 24 = -2\n')
      }
      if (a == 22 && sign == '-' && b == 25) {
        rl.write('22 - 25 = -3\n')
      }
      if (a == 22 && sign == '-' && b == 26) {
        rl.write('22 - 26 = -4\n')
      }
      if (a == 22 && sign == '-' && b == 27) {
        rl.write('22 - 27 = -5\n')
      }
      if (a == 22 && sign == '-' && b == 28) {
        rl.write('22 - 28 = -6\n')
      }
      if (a == 22 && sign == '-' && b == 29) {
        rl.write('22 - 29 = -7\n')
      }
      if (a == 22 && sign == '-' && b == 30) {
        rl.write('22 - 30 = -8\n')
      }
      if (a == 22 && sign == '-' && b == 31) {
        rl.write('22 - 31 = -9\n')
      }
      if (a == 22 && sign == '-' && b == 32) {
        rl.write('22 - 32 = -10\n')
      }
      if (a == 22 && sign == '-' && b == 33) {
        rl.write('22 - 33 = -11\n')
      }
      if (a == 22 && sign == '-' && b == 34) {
        rl.write('22 - 34 = -12\n')
      }
      if (a == 22 && sign == '-' && b == 35) {
        rl.write('22 - 35 = -13\n')
      }
      if (a == 22 && sign == '-' && b == 36) {
        rl.write('22 - 36 = -14\n')
      }
      if (a == 22 && sign == '-' && b == 37) {
        rl.write('22 - 37 = -15\n')
      }
      if (a == 22 && sign == '-' && b == 38) {
        rl.write('22 - 38 = -16\n')
      }
      if (a == 22 && sign == '-' && b == 39) {
        rl.write('22 - 39 = -17\n')
      }
      if (a == 22 && sign == '-' && b == 40) {
        rl.write('22 - 40 = -18\n')
      }
      if (a == 22 && sign == '-' && b == 41) {
        rl.write('22 - 41 = -19\n')
      }
      if (a == 22 && sign == '-' && b == 42) {
        rl.write('22 - 42 = -20\n')
      }
      if (a == 22 && sign == '-' && b == 43) {
        rl.write('22 - 43 = -21\n')
      }
      if (a == 22 && sign == '-' && b == 44) {
        rl.write('22 - 44 = -22\n')
      }
      if (a == 22 && sign == '-' && b == 45) {
        rl.write('22 - 45 = -23\n')
      }
      if (a == 22 && sign == '-' && b == 46) {
        rl.write('22 - 46 = -24\n')
      }
      if (a == 22 && sign == '-' && b == 47) {
        rl.write('22 - 47 = -25\n')
      }
      if (a == 22 && sign == '-' && b == 48) {
        rl.write('22 - 48 = -26\n')
      }
      if (a == 22 && sign == '-' && b == 49) {
        rl.write('22 - 49 = -27\n')
      }
      if (a == 22 && sign == '-' && b == 50) {
        rl.write('22 - 50 = -28\n')
      }
      if (a == 23 && sign == '-' && b == 0) {
        rl.write('23 - 0 = 23\n')
      }
      if (a == 23 && sign == '-' && b == 1) {
        rl.write('23 - 1 = 22\n')
      }
      if (a == 23 && sign == '-' && b == 2) {
        rl.write('23 - 2 = 21\n')
      }
      if (a == 23 && sign == '-' && b == 3) {
        rl.write('23 - 3 = 20\n')
      }
      if (a == 23 && sign == '-' && b == 4) {
        rl.write('23 - 4 = 19\n')
      }
      if (a == 23 && sign == '-' && b == 5) {
        rl.write('23 - 5 = 18\n')
      }
      if (a == 23 && sign == '-' && b == 6) {
        rl.write('23 - 6 = 17\n')
      }
      if (a == 23 && sign == '-' && b == 7) {
        rl.write('23 - 7 = 16\n')
      }
      if (a == 23 && sign == '-' && b == 8) {
        rl.write('23 - 8 = 15\n')
      }
      if (a == 23 && sign == '-' && b == 9) {
        rl.write('23 - 9 = 14\n')
      }
      if (a == 23 && sign == '-' && b == 10) {
        rl.write('23 - 10 = 13\n')
      }
      if (a == 23 && sign == '-' && b == 11) {
        rl.write('23 - 11 = 12\n')
      }
      if (a == 23 && sign == '-' && b == 12) {
        rl.write('23 - 12 = 11\n')
      }
      if (a == 23 && sign == '-' && b == 13) {
        rl.write('23 - 13 = 10\n')
      }
      if (a == 23 && sign == '-' && b == 14) {
        rl.write('23 - 14 = 9\n')
      }
      if (a == 23 && sign == '-' && b == 15) {
        rl.write('23 - 15 = 8\n')
      }
      if (a == 23 && sign == '-' && b == 16) {
        rl.write('23 - 16 = 7\n')
      }
      if (a == 23 && sign == '-' && b == 17) {
        rl.write('23 - 17 = 6\n')
      }
      if (a == 23 && sign == '-' && b == 18) {
        rl.write('23 - 18 = 5\n')
      }
      if (a == 23 && sign == '-' && b == 19) {
        rl.write('23 - 19 = 4\n')
      }
      if (a == 23 && sign == '-' && b == 20) {
        rl.write('23 - 20 = 3\n')
      }
      if (a == 23 && sign == '-' && b == 21) {
        rl.write('23 - 21 = 2\n')
      }
      if (a == 23 && sign == '-' && b == 22) {
        rl.write('23 - 22 = 1\n')
      }
      if (a == 23 && sign == '-' && b == 23) {
        rl.write('23 - 23 = 0\n')
      }
      if (a == 23 && sign == '-' && b == 24) {
        rl.write('23 - 24 = -1\n')
      }
      if (a == 23 && sign == '-' && b == 25) {
        rl.write('23 - 25 = -2\n')
      }
      if (a == 23 && sign == '-' && b == 26) {
        rl.write('23 - 26 = -3\n')
      }
      if (a == 23 && sign == '-' && b == 27) {
        rl.write('23 - 27 = -4\n')
      }
      if (a == 23 && sign == '-' && b == 28) {
        rl.write('23 - 28 = -5\n')
      }
      if (a == 23 && sign == '-' && b == 29) {
        rl.write('23 - 29 = -6\n')
      }
      if (a == 23 && sign == '-' && b == 30) {
        rl.write('23 - 30 = -7\n')
      }
      if (a == 23 && sign == '-' && b == 31) {
        rl.write('23 - 31 = -8\n')
      }
      if (a == 23 && sign == '-' && b == 32) {
        rl.write('23 - 32 = -9\n')
      }
      if (a == 23 && sign == '-' && b == 33) {
        rl.write('23 - 33 = -10\n')
      }
      if (a == 23 && sign == '-' && b == 34) {
        rl.write('23 - 34 = -11\n')
      }
      if (a == 23 && sign == '-' && b == 35) {
        rl.write('23 - 35 = -12\n')
      }
      if (a == 23 && sign == '-' && b == 36) {
        rl.write('23 - 36 = -13\n')
      }
      if (a == 23 && sign == '-' && b == 37) {
        rl.write('23 - 37 = -14\n')
      }
      if (a == 23 && sign == '-' && b == 38) {
        rl.write('23 - 38 = -15\n')
      }
      if (a == 23 && sign == '-' && b == 39) {
        rl.write('23 - 39 = -16\n')
      }
      if (a == 23 && sign == '-' && b == 40) {
        rl.write('23 - 40 = -17\n')
      }
      if (a == 23 && sign == '-' && b == 41) {
        rl.write('23 - 41 = -18\n')
      }
      if (a == 23 && sign == '-' && b == 42) {
        rl.write('23 - 42 = -19\n')
      }
      if (a == 23 && sign == '-' && b == 43) {
        rl.write('23 - 43 = -20\n')
      }
      if (a == 23 && sign == '-' && b == 44) {
        rl.write('23 - 44 = -21\n')
      }
      if (a == 23 && sign == '-' && b == 45) {
        rl.write('23 - 45 = -22\n')
      }
      if (a == 23 && sign == '-' && b == 46) {
        rl.write('23 - 46 = -23\n')
      }
      if (a == 23 && sign == '-' && b == 47) {
        rl.write('23 - 47 = -24\n')
      }
      if (a == 23 && sign == '-' && b == 48) {
        rl.write('23 - 48 = -25\n')
      }
      if (a == 23 && sign == '-' && b == 49) {
        rl.write('23 - 49 = -26\n')
      }
      if (a == 23 && sign == '-' && b == 50) {
        rl.write('23 - 50 = -27\n')
      }
      if (a == 24 && sign == '-' && b == 0) {
        rl.write('24 - 0 = 24\n')
      }
      if (a == 24 && sign == '-' && b == 1) {
        rl.write('24 - 1 = 23\n')
      }
      if (a == 24 && sign == '-' && b == 2) {
        rl.write('24 - 2 = 22\n')
      }
      if (a == 24 && sign == '-' && b == 3) {
        rl.write('24 - 3 = 21\n')
      }
      if (a == 24 && sign == '-' && b == 4) {
        rl.write('24 - 4 = 20\n')
      }
      if (a == 24 && sign == '-' && b == 5) {
        rl.write('24 - 5 = 19\n')
      }
      if (a == 24 && sign == '-' && b == 6) {
        rl.write('24 - 6 = 18\n')
      }
      if (a == 24 && sign == '-' && b == 7) {
        rl.write('24 - 7 = 17\n')
      }
      if (a == 24 && sign == '-' && b == 8) {
        rl.write('24 - 8 = 16\n')
      }
      if (a == 24 && sign == '-' && b == 9) {
        rl.write('24 - 9 = 15\n')
      }
      if (a == 24 && sign == '-' && b == 10) {
        rl.write('24 - 10 = 14\n')
      }
      if (a == 24 && sign == '-' && b == 11) {
        rl.write('24 - 11 = 13\n')
      }
      if (a == 24 && sign == '-' && b == 12) {
        rl.write('24 - 12 = 12\n')
      }
      if (a == 24 && sign == '-' && b == 13) {
        rl.write('24 - 13 = 11\n')
      }
      if (a == 24 && sign == '-' && b == 14) {
        rl.write('24 - 14 = 10\n')
      }
      if (a == 24 && sign == '-' && b == 15) {
        rl.write('24 - 15 = 9\n')
      }
      if (a == 24 && sign == '-' && b == 16) {
        rl.write('24 - 16 = 8\n')
      }
      if (a == 24 && sign == '-' && b == 17) {
        rl.write('24 - 17 = 7\n')
      }
      if (a == 24 && sign == '-' && b == 18) {
        rl.write('24 - 18 = 6\n')
      }
      if (a == 24 && sign == '-' && b == 19) {
        rl.write('24 - 19 = 5\n')
      }
      if (a == 24 && sign == '-' && b == 20) {
        rl.write('24 - 20 = 4\n')
      }
      if (a == 24 && sign == '-' && b == 21) {
        rl.write('24 - 21 = 3\n')
      }
      if (a == 24 && sign == '-' && b == 22) {
        rl.write('24 - 22 = 2\n')
      }
      if (a == 24 && sign == '-' && b == 23) {
        rl.write('24 - 23 = 1\n')
      }
      if (a == 24 && sign == '-' && b == 24) {
        rl.write('24 - 24 = 0\n')
      }
      if (a == 24 && sign == '-' && b == 25) {
        rl.write('24 - 25 = -1\n')
      }
      if (a == 24 && sign == '-' && b == 26) {
        rl.write('24 - 26 = -2\n')
      }
      if (a == 24 && sign == '-' && b == 27) {
        rl.write('24 - 27 = -3\n')
      }
      if (a == 24 && sign == '-' && b == 28) {
        rl.write('24 - 28 = -4\n')
      }
      if (a == 24 && sign == '-' && b == 29) {
        rl.write('24 - 29 = -5\n')
      }
      if (a == 24 && sign == '-' && b == 30) {
        rl.write('24 - 30 = -6\n')
      }
      if (a == 24 && sign == '-' && b == 31) {
        rl.write('24 - 31 = -7\n')
      }
      if (a == 24 && sign == '-' && b == 32) {
        rl.write('24 - 32 = -8\n')
      }
      if (a == 24 && sign == '-' && b == 33) {
        rl.write('24 - 33 = -9\n')
      }
      if (a == 24 && sign == '-' && b == 34) {
        rl.write('24 - 34 = -10\n')
      }
      if (a == 24 && sign == '-' && b == 35) {
        rl.write('24 - 35 = -11\n')
      }
      if (a == 24 && sign == '-' && b == 36) {
        rl.write('24 - 36 = -12\n')
      }
      if (a == 24 && sign == '-' && b == 37) {
        rl.write('24 - 37 = -13\n')
      }
      if (a == 24 && sign == '-' && b == 38) {
        rl.write('24 - 38 = -14\n')
      }
      if (a == 24 && sign == '-' && b == 39) {
        rl.write('24 - 39 = -15\n')
      }
      if (a == 24 && sign == '-' && b == 40) {
        rl.write('24 - 40 = -16\n')
      }
      if (a == 24 && sign == '-' && b == 41) {
        rl.write('24 - 41 = -17\n')
      }
      if (a == 24 && sign == '-' && b == 42) {
        rl.write('24 - 42 = -18\n')
      }
      if (a == 24 && sign == '-' && b == 43) {
        rl.write('24 - 43 = -19\n')
      }
      if (a == 24 && sign == '-' && b == 44) {
        rl.write('24 - 44 = -20\n')
      }
      if (a == 24 && sign == '-' && b == 45) {
        rl.write('24 - 45 = -21\n')
      }
      if (a == 24 && sign == '-' && b == 46) {
        rl.write('24 - 46 = -22\n')
      }
      if (a == 24 && sign == '-' && b == 47) {
        rl.write('24 - 47 = -23\n')
      }
      if (a == 24 && sign == '-' && b == 48) {
        rl.write('24 - 48 = -24\n')
      }
      if (a == 24 && sign == '-' && b == 49) {
        rl.write('24 - 49 = -25\n')
      }
      if (a == 24 && sign == '-' && b == 50) {
        rl.write('24 - 50 = -26\n')
      }
      if (a == 25 && sign == '-' && b == 0) {
        rl.write('25 - 0 = 25\n')
      }
      if (a == 25 && sign == '-' && b == 1) {
        rl.write('25 - 1 = 24\n')
      }
      if (a == 25 && sign == '-' && b == 2) {
        rl.write('25 - 2 = 23\n')
      }
      if (a == 25 && sign == '-' && b == 3) {
        rl.write('25 - 3 = 22\n')
      }
      if (a == 25 && sign == '-' && b == 4) {
        rl.write('25 - 4 = 21\n')
      }
      if (a == 25 && sign == '-' && b == 5) {
        rl.write('25 - 5 = 20\n')
      }
      if (a == 25 && sign == '-' && b == 6) {
        rl.write('25 - 6 = 19\n')
      }
      if (a == 25 && sign == '-' && b == 7) {
        rl.write('25 - 7 = 18\n')
      }
      if (a == 25 && sign == '-' && b == 8) {
        rl.write('25 - 8 = 17\n')
      }
      if (a == 25 && sign == '-' && b == 9) {
        rl.write('25 - 9 = 16\n')
      }
      if (a == 25 && sign == '-' && b == 10) {
        rl.write('25 - 10 = 15\n')
      }
      if (a == 25 && sign == '-' && b == 11) {
        rl.write('25 - 11 = 14\n')
      }
      if (a == 25 && sign == '-' && b == 12) {
        rl.write('25 - 12 = 13\n')
      }
      if (a == 25 && sign == '-' && b == 13) {
        rl.write('25 - 13 = 12\n')
      }
      if (a == 25 && sign == '-' && b == 14) {
        rl.write('25 - 14 = 11\n')
      }
      if (a == 25 && sign == '-' && b == 15) {
        rl.write('25 - 15 = 10\n')
      }
      if (a == 25 && sign == '-' && b == 16) {
        rl.write('25 - 16 = 9\n')
      }
      if (a == 25 && sign == '-' && b == 17) {
        rl.write('25 - 17 = 8\n')
      }
      if (a == 25 && sign == '-' && b == 18) {
        rl.write('25 - 18 = 7\n')
      }
      if (a == 25 && sign == '-' && b == 19) {
        rl.write('25 - 19 = 6\n')
      }
      if (a == 25 && sign == '-' && b == 20) {
        rl.write('25 - 20 = 5\n')
      }
      if (a == 25 && sign == '-' && b == 21) {
        rl.write('25 - 21 = 4\n')
      }
      if (a == 25 && sign == '-' && b == 22) {
        rl.write('25 - 22 = 3\n')
      }
      if (a == 25 && sign == '-' && b == 23) {
        rl.write('25 - 23 = 2\n')
      }
      if (a == 25 && sign == '-' && b == 24) {
        rl.write('25 - 24 = 1\n')
      }
      if (a == 25 && sign == '-' && b == 25) {
        rl.write('25 - 25 = 0\n')
      }
      if (a == 25 && sign == '-' && b == 26) {
        rl.write('25 - 26 = -1\n')
      }
      if (a == 25 && sign == '-' && b == 27) {
        rl.write('25 - 27 = -2\n')
      }
      if (a == 25 && sign == '-' && b == 28) {
        rl.write('25 - 28 = -3\n')
      }
      if (a == 25 && sign == '-' && b == 29) {
        rl.write('25 - 29 = -4\n')
      }
      if (a == 25 && sign == '-' && b == 30) {
        rl.write('25 - 30 = -5\n')
      }
      if (a == 25 && sign == '-' && b == 31) {
        rl.write('25 - 31 = -6\n')
      }
      if (a == 25 && sign == '-' && b == 32) {
        rl.write('25 - 32 = -7\n')
      }
      if (a == 25 && sign == '-' && b == 33) {
        rl.write('25 - 33 = -8\n')
      }
      if (a == 25 && sign == '-' && b == 34) {
        rl.write('25 - 34 = -9\n')
      }
      if (a == 25 && sign == '-' && b == 35) {
        rl.write('25 - 35 = -10\n')
      }
      if (a == 25 && sign == '-' && b == 36) {
        rl.write('25 - 36 = -11\n')
      }
      if (a == 25 && sign == '-' && b == 37) {
        rl.write('25 - 37 = -12\n')
      }
      if (a == 25 && sign == '-' && b == 38) {
        rl.write('25 - 38 = -13\n')
      }
      if (a == 25 && sign == '-' && b == 39) {
        rl.write('25 - 39 = -14\n')
      }
      if (a == 25 && sign == '-' && b == 40) {
        rl.write('25 - 40 = -15\n')
      }
      if (a == 25 && sign == '-' && b == 41) {
        rl.write('25 - 41 = -16\n')
      }
      if (a == 25 && sign == '-' && b == 42) {
        rl.write('25 - 42 = -17\n')
      }
      if (a == 25 && sign == '-' && b == 43) {
        rl.write('25 - 43 = -18\n')
      }
      if (a == 25 && sign == '-' && b == 44) {
        rl.write('25 - 44 = -19\n')
      }
      if (a == 25 && sign == '-' && b == 45) {
        rl.write('25 - 45 = -20\n')
      }
      if (a == 25 && sign == '-' && b == 46) {
        rl.write('25 - 46 = -21\n')
      }
      if (a == 25 && sign == '-' && b == 47) {
        rl.write('25 - 47 = -22\n')
      }
      if (a == 25 && sign == '-' && b == 48) {
        rl.write('25 - 48 = -23\n')
      }
      if (a == 25 && sign == '-' && b == 49) {
        rl.write('25 - 49 = -24\n')
      }
      if (a == 25 && sign == '-' && b == 50) {
        rl.write('25 - 50 = -25\n')
      }
      if (a == 26 && sign == '-' && b == 0) {
        rl.write('26 - 0 = 26\n')
      }
      if (a == 26 && sign == '-' && b == 1) {
        rl.write('26 - 1 = 25\n')
      }
      if (a == 26 && sign == '-' && b == 2) {
        rl.write('26 - 2 = 24\n')
      }
      if (a == 26 && sign == '-' && b == 3) {
        rl.write('26 - 3 = 23\n')
      }
      if (a == 26 && sign == '-' && b == 4) {
        rl.write('26 - 4 = 22\n')
      }
      if (a == 26 && sign == '-' && b == 5) {
        rl.write('26 - 5 = 21\n')
      }
      if (a == 26 && sign == '-' && b == 6) {
        rl.write('26 - 6 = 20\n')
      }
      if (a == 26 && sign == '-' && b == 7) {
        rl.write('26 - 7 = 19\n')
      }
      if (a == 26 && sign == '-' && b == 8) {
        rl.write('26 - 8 = 18\n')
      }
      if (a == 26 && sign == '-' && b == 9) {
        rl.write('26 - 9 = 17\n')
      }
      if (a == 26 && sign == '-' && b == 10) {
        rl.write('26 - 10 = 16\n')
      }
      if (a == 26 && sign == '-' && b == 11) {
        rl.write('26 - 11 = 15\n')
      }
      if (a == 26 && sign == '-' && b == 12) {
        rl.write('26 - 12 = 14\n')
      }
      if (a == 26 && sign == '-' && b == 13) {
        rl.write('26 - 13 = 13\n')
      }
      if (a == 26 && sign == '-' && b == 14) {
        rl.write('26 - 14 = 12\n')
      }
      if (a == 26 && sign == '-' && b == 15) {
        rl.write('26 - 15 = 11\n')
      }
      if (a == 26 && sign == '-' && b == 16) {
        rl.write('26 - 16 = 10\n')
      }
      if (a == 26 && sign == '-' && b == 17) {
        rl.write('26 - 17 = 9\n')
      }
      if (a == 26 && sign == '-' && b == 18) {
        rl.write('26 - 18 = 8\n')
      }
      if (a == 26 && sign == '-' && b == 19) {
        rl.write('26 - 19 = 7\n')
      }
      if (a == 26 && sign == '-' && b == 20) {
        rl.write('26 - 20 = 6\n')
      }
      if (a == 26 && sign == '-' && b == 21) {
        rl.write('26 - 21 = 5\n')
      }
      if (a == 26 && sign == '-' && b == 22) {
        rl.write('26 - 22 = 4\n')
      }
      if (a == 26 && sign == '-' && b == 23) {
        rl.write('26 - 23 = 3\n')
      }
      if (a == 26 && sign == '-' && b == 24) {
        rl.write('26 - 24 = 2\n')
      }
      if (a == 26 && sign == '-' && b == 25) {
        rl.write('26 - 25 = 1\n')
      }
      if (a == 26 && sign == '-' && b == 26) {
        rl.write('26 - 26 = 0\n')
      }
      if (a == 26 && sign == '-' && b == 27) {
        rl.write('26 - 27 = -1\n')
      }
      if (a == 26 && sign == '-' && b == 28) {
        rl.write('26 - 28 = -2\n')
      }
      if (a == 26 && sign == '-' && b == 29) {
        rl.write('26 - 29 = -3\n')
      }
      if (a == 26 && sign == '-' && b == 30) {
        rl.write('26 - 30 = -4\n')
      }
      if (a == 26 && sign == '-' && b == 31) {
        rl.write('26 - 31 = -5\n')
      }
      if (a == 26 && sign == '-' && b == 32) {
        rl.write('26 - 32 = -6\n')
      }
      if (a == 26 && sign == '-' && b == 33) {
        rl.write('26 - 33 = -7\n')
      }
      if (a == 26 && sign == '-' && b == 34) {
        rl.write('26 - 34 = -8\n')
      }
      if (a == 26 && sign == '-' && b == 35) {
        rl.write('26 - 35 = -9\n')
      }
      if (a == 26 && sign == '-' && b == 36) {
        rl.write('26 - 36 = -10\n')
      }
      if (a == 26 && sign == '-' && b == 37) {
        rl.write('26 - 37 = -11\n')
      }
      if (a == 26 && sign == '-' && b == 38) {
        rl.write('26 - 38 = -12\n')
      }
      if (a == 26 && sign == '-' && b == 39) {
        rl.write('26 - 39 = -13\n')
      }
      if (a == 26 && sign == '-' && b == 40) {
        rl.write('26 - 40 = -14\n')
      }
      if (a == 26 && sign == '-' && b == 41) {
        rl.write('26 - 41 = -15\n')
      }
      if (a == 26 && sign == '-' && b == 42) {
        rl.write('26 - 42 = -16\n')
      }
      if (a == 26 && sign == '-' && b == 43) {
        rl.write('26 - 43 = -17\n')
      }
      if (a == 26 && sign == '-' && b == 44) {
        rl.write('26 - 44 = -18\n')
      }
      if (a == 26 && sign == '-' && b == 45) {
        rl.write('26 - 45 = -19\n')
      }
      if (a == 26 && sign == '-' && b == 46) {
        rl.write('26 - 46 = -20\n')
      }
      if (a == 26 && sign == '-' && b == 47) {
        rl.write('26 - 47 = -21\n')
      }
      if (a == 26 && sign == '-' && b == 48) {
        rl.write('26 - 48 = -22\n')
      }
      if (a == 26 && sign == '-' && b == 49) {
        rl.write('26 - 49 = -23\n')
      }
      if (a == 26 && sign == '-' && b == 50) {
        rl.write('26 - 50 = -24\n')
      }
      if (a == 27 && sign == '-' && b == 0) {
        rl.write('27 - 0 = 27\n')
      }
      if (a == 27 && sign == '-' && b == 1) {
        rl.write('27 - 1 = 26\n')
      }
      if (a == 27 && sign == '-' && b == 2) {
        rl.write('27 - 2 = 25\n')
      }
      if (a == 27 && sign == '-' && b == 3) {
        rl.write('27 - 3 = 24\n')
      }
      if (a == 27 && sign == '-' && b == 4) {
        rl.write('27 - 4 = 23\n')
      }
      if (a == 27 && sign == '-' && b == 5) {
        rl.write('27 - 5 = 22\n')
      }
      if (a == 27 && sign == '-' && b == 6) {
        rl.write('27 - 6 = 21\n')
      }
      if (a == 27 && sign == '-' && b == 7) {
        rl.write('27 - 7 = 20\n')
      }
      if (a == 27 && sign == '-' && b == 8) {
        rl.write('27 - 8 = 19\n')
      }
      if (a == 27 && sign == '-' && b == 9) {
        rl.write('27 - 9 = 18\n')
      }
      if (a == 27 && sign == '-' && b == 10) {
        rl.write('27 - 10 = 17\n')
      }
      if (a == 27 && sign == '-' && b == 11) {
        rl.write('27 - 11 = 16\n')
      }
      if (a == 27 && sign == '-' && b == 12) {
        rl.write('27 - 12 = 15\n')
      }
      if (a == 27 && sign == '-' && b == 13) {
        rl.write('27 - 13 = 14\n')
      }
      if (a == 27 && sign == '-' && b == 14) {
        rl.write('27 - 14 = 13\n')
      }
      if (a == 27 && sign == '-' && b == 15) {
        rl.write('27 - 15 = 12\n')
      }
      if (a == 27 && sign == '-' && b == 16) {
        rl.write('27 - 16 = 11\n')
      }
      if (a == 27 && sign == '-' && b == 17) {
        rl.write('27 - 17 = 10\n')
      }
      if (a == 27 && sign == '-' && b == 18) {
        rl.write('27 - 18 = 9\n')
      }
      if (a == 27 && sign == '-' && b == 19) {
        rl.write('27 - 19 = 8\n')
      }
      if (a == 27 && sign == '-' && b == 20) {
        rl.write('27 - 20 = 7\n')
      }
      if (a == 27 && sign == '-' && b == 21) {
        rl.write('27 - 21 = 6\n')
      }
      if (a == 27 && sign == '-' && b == 22) {
        rl.write('27 - 22 = 5\n')
      }
      if (a == 27 && sign == '-' && b == 23) {
        rl.write('27 - 23 = 4\n')
      }
      if (a == 27 && sign == '-' && b == 24) {
        rl.write('27 - 24 = 3\n')
      }
      if (a == 27 && sign == '-' && b == 25) {
        rl.write('27 - 25 = 2\n')
      }
      if (a == 27 && sign == '-' && b == 26) {
        rl.write('27 - 26 = 1\n')
      }
      if (a == 27 && sign == '-' && b == 27) {
        rl.write('27 - 27 = 0\n')
      }
      if (a == 27 && sign == '-' && b == 28) {
        rl.write('27 - 28 = -1\n')
      }
      if (a == 27 && sign == '-' && b == 29) {
        rl.write('27 - 29 = -2\n')
      }
      if (a == 27 && sign == '-' && b == 30) {
        rl.write('27 - 30 = -3\n')
      }
      if (a == 27 && sign == '-' && b == 31) {
        rl.write('27 - 31 = -4\n')
      }
      if (a == 27 && sign == '-' && b == 32) {
        rl.write('27 - 32 = -5\n')
      }
      if (a == 27 && sign == '-' && b == 33) {
        rl.write('27 - 33 = -6\n')
      }
      if (a == 27 && sign == '-' && b == 34) {
        rl.write('27 - 34 = -7\n')
      }
      if (a == 27 && sign == '-' && b == 35) {
        rl.write('27 - 35 = -8\n')
      }
      if (a == 27 && sign == '-' && b == 36) {
        rl.write('27 - 36 = -9\n')
      }
      if (a == 27 && sign == '-' && b == 37) {
        rl.write('27 - 37 = -10\n')
      }
      if (a == 27 && sign == '-' && b == 38) {
        rl.write('27 - 38 = -11\n')
      }
      if (a == 27 && sign == '-' && b == 39) {
        rl.write('27 - 39 = -12\n')
      }
      if (a == 27 && sign == '-' && b == 40) {
        rl.write('27 - 40 = -13\n')
      }
      if (a == 27 && sign == '-' && b == 41) {
        rl.write('27 - 41 = -14\n')
      }
      if (a == 27 && sign == '-' && b == 42) {
        rl.write('27 - 42 = -15\n')
      }
      if (a == 27 && sign == '-' && b == 43) {
        rl.write('27 - 43 = -16\n')
      }
      if (a == 27 && sign == '-' && b == 44) {
        rl.write('27 - 44 = -17\n')
      }
      if (a == 27 && sign == '-' && b == 45) {
        rl.write('27 - 45 = -18\n')
      }
      if (a == 27 && sign == '-' && b == 46) {
        rl.write('27 - 46 = -19\n')
      }
      if (a == 27 && sign == '-' && b == 47) {
        rl.write('27 - 47 = -20\n')
      }
      if (a == 27 && sign == '-' && b == 48) {
        rl.write('27 - 48 = -21\n')
      }
      if (a == 27 && sign == '-' && b == 49) {
        rl.write('27 - 49 = -22\n')
      }
      if (a == 27 && sign == '-' && b == 50) {
        rl.write('27 - 50 = -23\n')
      }
      if (a == 28 && sign == '-' && b == 0) {
        rl.write('28 - 0 = 28\n')
      }
      if (a == 28 && sign == '-' && b == 1) {
        rl.write('28 - 1 = 27\n')
      }
      if (a == 28 && sign == '-' && b == 2) {
        rl.write('28 - 2 = 26\n')
      }
      if (a == 28 && sign == '-' && b == 3) {
        rl.write('28 - 3 = 25\n')
      }
      if (a == 28 && sign == '-' && b == 4) {
        rl.write('28 - 4 = 24\n')
      }
      if (a == 28 && sign == '-' && b == 5) {
        rl.write('28 - 5 = 23\n')
      }
      if (a == 28 && sign == '-' && b == 6) {
        rl.write('28 - 6 = 22\n')
      }
      if (a == 28 && sign == '-' && b == 7) {
        rl.write('28 - 7 = 21\n')
      }
      if (a == 28 && sign == '-' && b == 8) {
        rl.write('28 - 8 = 20\n')
      }
      if (a == 28 && sign == '-' && b == 9) {
        rl.write('28 - 9 = 19\n')
      }
      if (a == 28 && sign == '-' && b == 10) {
        rl.write('28 - 10 = 18\n')
      }
      if (a == 28 && sign == '-' && b == 11) {
        rl.write('28 - 11 = 17\n')
      }
      if (a == 28 && sign == '-' && b == 12) {
        rl.write('28 - 12 = 16\n')
      }
      if (a == 28 && sign == '-' && b == 13) {
        rl.write('28 - 13 = 15\n')
      }
      if (a == 28 && sign == '-' && b == 14) {
        rl.write('28 - 14 = 14\n')
      }
      if (a == 28 && sign == '-' && b == 15) {
        rl.write('28 - 15 = 13\n')
      }
      if (a == 28 && sign == '-' && b == 16) {
        rl.write('28 - 16 = 12\n')
      }
      if (a == 28 && sign == '-' && b == 17) {
        rl.write('28 - 17 = 11\n')
      }
      if (a == 28 && sign == '-' && b == 18) {
        rl.write('28 - 18 = 10\n')
      }
      if (a == 28 && sign == '-' && b == 19) {
        rl.write('28 - 19 = 9\n')
      }
      if (a == 28 && sign == '-' && b == 20) {
        rl.write('28 - 20 = 8\n')
      }
      if (a == 28 && sign == '-' && b == 21) {
        rl.write('28 - 21 = 7\n')
      }
      if (a == 28 && sign == '-' && b == 22) {
        rl.write('28 - 22 = 6\n')
      }
      if (a == 28 && sign == '-' && b == 23) {
        rl.write('28 - 23 = 5\n')
      }
      if (a == 28 && sign == '-' && b == 24) {
        rl.write('28 - 24 = 4\n')
      }
      if (a == 28 && sign == '-' && b == 25) {
        rl.write('28 - 25 = 3\n')
      }
      if (a == 28 && sign == '-' && b == 26) {
        rl.write('28 - 26 = 2\n')
      }
      if (a == 28 && sign == '-' && b == 27) {
        rl.write('28 - 27 = 1\n')
      }
      if (a == 28 && sign == '-' && b == 28) {
        rl.write('28 - 28 = 0\n')
      }
      if (a == 28 && sign == '-' && b == 29) {
        rl.write('28 - 29 = -1\n')
      }
      if (a == 28 && sign == '-' && b == 30) {
        rl.write('28 - 30 = -2\n')
      }
      if (a == 28 && sign == '-' && b == 31) {
        rl.write('28 - 31 = -3\n')
      }
      if (a == 28 && sign == '-' && b == 32) {
        rl.write('28 - 32 = -4\n')
      }
      if (a == 28 && sign == '-' && b == 33) {
        rl.write('28 - 33 = -5\n')
      }
      if (a == 28 && sign == '-' && b == 34) {
        rl.write('28 - 34 = -6\n')
      }
      if (a == 28 && sign == '-' && b == 35) {
        rl.write('28 - 35 = -7\n')
      }
      if (a == 28 && sign == '-' && b == 36) {
        rl.write('28 - 36 = -8\n')
      }
      if (a == 28 && sign == '-' && b == 37) {
        rl.write('28 - 37 = -9\n')
      }
      if (a == 28 && sign == '-' && b == 38) {
        rl.write('28 - 38 = -10\n')
      }
      if (a == 28 && sign == '-' && b == 39) {
        rl.write('28 - 39 = -11\n')
      }
      if (a == 28 && sign == '-' && b == 40) {
        rl.write('28 - 40 = -12\n')
      }
      if (a == 28 && sign == '-' && b == 41) {
        rl.write('28 - 41 = -13\n')
      }
      if (a == 28 && sign == '-' && b == 42) {
        rl.write('28 - 42 = -14\n')
      }
      if (a == 28 && sign == '-' && b == 43) {
        rl.write('28 - 43 = -15\n')
      }
      if (a == 28 && sign == '-' && b == 44) {
        rl.write('28 - 44 = -16\n')
      }
      if (a == 28 && sign == '-' && b == 45) {
        rl.write('28 - 45 = -17\n')
      }
      if (a == 28 && sign == '-' && b == 46) {
        rl.write('28 - 46 = -18\n')
      }
      if (a == 28 && sign == '-' && b == 47) {
        rl.write('28 - 47 = -19\n')
      }
      if (a == 28 && sign == '-' && b == 48) {
        rl.write('28 - 48 = -20\n')
      }
      if (a == 28 && sign == '-' && b == 49) {
        rl.write('28 - 49 = -21\n')
      }
      if (a == 28 && sign == '-' && b == 50) {
        rl.write('28 - 50 = -22\n')
      }
      if (a == 29 && sign == '-' && b == 0) {
        rl.write('29 - 0 = 29\n')
      }
      if (a == 29 && sign == '-' && b == 1) {
        rl.write('29 - 1 = 28\n')
      }
      if (a == 29 && sign == '-' && b == 2) {
        rl.write('29 - 2 = 27\n')
      }
      if (a == 29 && sign == '-' && b == 3) {
        rl.write('29 - 3 = 26\n')
      }
      if (a == 29 && sign == '-' && b == 4) {
        rl.write('29 - 4 = 25\n')
      }
      if (a == 29 && sign == '-' && b == 5) {
        rl.write('29 - 5 = 24\n')
      }
      if (a == 29 && sign == '-' && b == 6) {
        rl.write('29 - 6 = 23\n')
      }
      if (a == 29 && sign == '-' && b == 7) {
        rl.write('29 - 7 = 22\n')
      }
      if (a == 29 && sign == '-' && b == 8) {
        rl.write('29 - 8 = 21\n')
      }
      if (a == 29 && sign == '-' && b == 9) {
        rl.write('29 - 9 = 20\n')
      }
      if (a == 29 && sign == '-' && b == 10) {
        rl.write('29 - 10 = 19\n')
      }
      if (a == 29 && sign == '-' && b == 11) {
        rl.write('29 - 11 = 18\n')
      }
      if (a == 29 && sign == '-' && b == 12) {
        rl.write('29 - 12 = 17\n')
      }
      if (a == 29 && sign == '-' && b == 13) {
        rl.write('29 - 13 = 16\n')
      }
      if (a == 29 && sign == '-' && b == 14) {
        rl.write('29 - 14 = 15\n')
      }
      if (a == 29 && sign == '-' && b == 15) {
        rl.write('29 - 15 = 14\n')
      }
      if (a == 29 && sign == '-' && b == 16) {
        rl.write('29 - 16 = 13\n')
      }
      if (a == 29 && sign == '-' && b == 17) {
        rl.write('29 - 17 = 12\n')
      }
      if (a == 29 && sign == '-' && b == 18) {
        rl.write('29 - 18 = 11\n')
      }
      if (a == 29 && sign == '-' && b == 19) {
        rl.write('29 - 19 = 10\n')
      }
      if (a == 29 && sign == '-' && b == 20) {
        rl.write('29 - 20 = 9\n')
      }
      if (a == 29 && sign == '-' && b == 21) {
        rl.write('29 - 21 = 8\n')
      }
      if (a == 29 && sign == '-' && b == 22) {
        rl.write('29 - 22 = 7\n')
      }
      if (a == 29 && sign == '-' && b == 23) {
        rl.write('29 - 23 = 6\n')
      }
      if (a == 29 && sign == '-' && b == 24) {
        rl.write('29 - 24 = 5\n')
      }
      if (a == 29 && sign == '-' && b == 25) {
        rl.write('29 - 25 = 4\n')
      }
      if (a == 29 && sign == '-' && b == 26) {
        rl.write('29 - 26 = 3\n')
      }
      if (a == 29 && sign == '-' && b == 27) {
        rl.write('29 - 27 = 2\n')
      }
      if (a == 29 && sign == '-' && b == 28) {
        rl.write('29 - 28 = 1\n')
      }
      if (a == 29 && sign == '-' && b == 29) {
        rl.write('29 - 29 = 0\n')
      }
      if (a == 29 && sign == '-' && b == 30) {
        rl.write('29 - 30 = -1\n')
      }
      if (a == 29 && sign == '-' && b == 31) {
        rl.write('29 - 31 = -2\n')
      }
      if (a == 29 && sign == '-' && b == 32) {
        rl.write('29 - 32 = -3\n')
      }
      if (a == 29 && sign == '-' && b == 33) {
        rl.write('29 - 33 = -4\n')
      }
      if (a == 29 && sign == '-' && b == 34) {
        rl.write('29 - 34 = -5\n')
      }
      if (a == 29 && sign == '-' && b == 35) {
        rl.write('29 - 35 = -6\n')
      }
      if (a == 29 && sign == '-' && b == 36) {
        rl.write('29 - 36 = -7\n')
      }
      if (a == 29 && sign == '-' && b == 37) {
        rl.write('29 - 37 = -8\n')
      }
      if (a == 29 && sign == '-' && b == 38) {
        rl.write('29 - 38 = -9\n')
      }
      if (a == 29 && sign == '-' && b == 39) {
        rl.write('29 - 39 = -10\n')
      }
      if (a == 29 && sign == '-' && b == 40) {
        rl.write('29 - 40 = -11\n')
      }
      if (a == 29 && sign == '-' && b == 41) {
        rl.write('29 - 41 = -12\n')
      }
      if (a == 29 && sign == '-' && b == 42) {
        rl.write('29 - 42 = -13\n')
      }
      if (a == 29 && sign == '-' && b == 43) {
        rl.write('29 - 43 = -14\n')
      }
      if (a == 29 && sign == '-' && b == 44) {
        rl.write('29 - 44 = -15\n')
      }
      if (a == 29 && sign == '-' && b == 45) {
        rl.write('29 - 45 = -16\n')
      }
      if (a == 29 && sign == '-' && b == 46) {
        rl.write('29 - 46 = -17\n')
      }
      if (a == 29 && sign == '-' && b == 47) {
        rl.write('29 - 47 = -18\n')
      }
      if (a == 29 && sign == '-' && b == 48) {
        rl.write('29 - 48 = -19\n')
      }
      if (a == 29 && sign == '-' && b == 49) {
        rl.write('29 - 49 = -20\n')
      }
      if (a == 29 && sign == '-' && b == 50) {
        rl.write('29 - 50 = -21\n')
      }
      if (a == 30 && sign == '-' && b == 0) {
        rl.write('30 - 0 = 30\n')
      }
      if (a == 30 && sign == '-' && b == 1) {
        rl.write('30 - 1 = 29\n')
      }
      if (a == 30 && sign == '-' && b == 2) {
        rl.write('30 - 2 = 28\n')
      }
      if (a == 30 && sign == '-' && b == 3) {
        rl.write('30 - 3 = 27\n')
      }
      if (a == 30 && sign == '-' && b == 4) {
        rl.write('30 - 4 = 26\n')
      }
      if (a == 30 && sign == '-' && b == 5) {
        rl.write('30 - 5 = 25\n')
      }
      if (a == 30 && sign == '-' && b == 6) {
        rl.write('30 - 6 = 24\n')
      }
      if (a == 30 && sign == '-' && b == 7) {
        rl.write('30 - 7 = 23\n')
      }
      if (a == 30 && sign == '-' && b == 8) {
        rl.write('30 - 8 = 22\n')
      }
      if (a == 30 && sign == '-' && b == 9) {
        rl.write('30 - 9 = 21\n')
      }
      if (a == 30 && sign == '-' && b == 10) {
        rl.write('30 - 10 = 20\n')
      }
      if (a == 30 && sign == '-' && b == 11) {
        rl.write('30 - 11 = 19\n')
      }
      if (a == 30 && sign == '-' && b == 12) {
        rl.write('30 - 12 = 18\n')
      }
      if (a == 30 && sign == '-' && b == 13) {
        rl.write('30 - 13 = 17\n')
      }
      if (a == 30 && sign == '-' && b == 14) {
        rl.write('30 - 14 = 16\n')
      }
      if (a == 30 && sign == '-' && b == 15) {
        rl.write('30 - 15 = 15\n')
      }
      if (a == 30 && sign == '-' && b == 16) {
        rl.write('30 - 16 = 14\n')
      }
      if (a == 30 && sign == '-' && b == 17) {
        rl.write('30 - 17 = 13\n')
      }
      if (a == 30 && sign == '-' && b == 18) {
        rl.write('30 - 18 = 12\n')
      }
      if (a == 30 && sign == '-' && b == 19) {
        rl.write('30 - 19 = 11\n')
      }
      if (a == 30 && sign == '-' && b == 20) {
        rl.write('30 - 20 = 10\n')
      }
      if (a == 30 && sign == '-' && b == 21) {
        rl.write('30 - 21 = 9\n')
      }
      if (a == 30 && sign == '-' && b == 22) {
        rl.write('30 - 22 = 8\n')
      }
      if (a == 30 && sign == '-' && b == 23) {
        rl.write('30 - 23 = 7\n')
      }
      if (a == 30 && sign == '-' && b == 24) {
        rl.write('30 - 24 = 6\n')
      }
      if (a == 30 && sign == '-' && b == 25) {
        rl.write('30 - 25 = 5\n')
      }
      if (a == 30 && sign == '-' && b == 26) {
        rl.write('30 - 26 = 4\n')
      }
      if (a == 30 && sign == '-' && b == 27) {
        rl.write('30 - 27 = 3\n')
      }
      if (a == 30 && sign == '-' && b == 28) {
        rl.write('30 - 28 = 2\n')
      }
      if (a == 30 && sign == '-' && b == 29) {
        rl.write('30 - 29 = 1\n')
      }
      if (a == 30 && sign == '-' && b == 30) {
        rl.write('30 - 30 = 0\n')
      }
      if (a == 30 && sign == '-' && b == 31) {
        rl.write('30 - 31 = -1\n')
      }
      if (a == 30 && sign == '-' && b == 32) {
        rl.write('30 - 32 = -2\n')
      }
      if (a == 30 && sign == '-' && b == 33) {
        rl.write('30 - 33 = -3\n')
      }
      if (a == 30 && sign == '-' && b == 34) {
        rl.write('30 - 34 = -4\n')
      }
      if (a == 30 && sign == '-' && b == 35) {
        rl.write('30 - 35 = -5\n')
      }
      if (a == 30 && sign == '-' && b == 36) {
        rl.write('30 - 36 = -6\n')
      }
      if (a == 30 && sign == '-' && b == 37) {
        rl.write('30 - 37 = -7\n')
      }
      if (a == 30 && sign == '-' && b == 38) {
        rl.write('30 - 38 = -8\n')
      }
      if (a == 30 && sign == '-' && b == 39) {
        rl.write('30 - 39 = -9\n')
      }
      if (a == 30 && sign == '-' && b == 40) {
        rl.write('30 - 40 = -10\n')
      }
      if (a == 30 && sign == '-' && b == 41) {
        rl.write('30 - 41 = -11\n')
      }
      if (a == 30 && sign == '-' && b == 42) {
        rl.write('30 - 42 = -12\n')
      }
      if (a == 30 && sign == '-' && b == 43) {
        rl.write('30 - 43 = -13\n')
      }
      if (a == 30 && sign == '-' && b == 44) {
        rl.write('30 - 44 = -14\n')
      }
      if (a == 30 && sign == '-' && b == 45) {
        rl.write('30 - 45 = -15\n')
      }
      if (a == 30 && sign == '-' && b == 46) {
        rl.write('30 - 46 = -16\n')
      }
      if (a == 30 && sign == '-' && b == 47) {
        rl.write('30 - 47 = -17\n')
      }
      if (a == 30 && sign == '-' && b == 48) {
        rl.write('30 - 48 = -18\n')
      }
      if (a == 30 && sign == '-' && b == 49) {
        rl.write('30 - 49 = -19\n')
      }
      if (a == 30 && sign == '-' && b == 50) {
        rl.write('30 - 50 = -20\n')
      }
      if (a == 31 && sign == '-' && b == 0) {
        rl.write('31 - 0 = 31\n')
      }
      if (a == 31 && sign == '-' && b == 1) {
        rl.write('31 - 1 = 30\n')
      }
      if (a == 31 && sign == '-' && b == 2) {
        rl.write('31 - 2 = 29\n')
      }
      if (a == 31 && sign == '-' && b == 3) {
        rl.write('31 - 3 = 28\n')
      }
      if (a == 31 && sign == '-' && b == 4) {
        rl.write('31 - 4 = 27\n')
      }
      if (a == 31 && sign == '-' && b == 5) {
        rl.write('31 - 5 = 26\n')
      }
      if (a == 31 && sign == '-' && b == 6) {
        rl.write('31 - 6 = 25\n')
      }
      if (a == 31 && sign == '-' && b == 7) {
        rl.write('31 - 7 = 24\n')
      }
      if (a == 31 && sign == '-' && b == 8) {
        rl.write('31 - 8 = 23\n')
      }
      if (a == 31 && sign == '-' && b == 9) {
        rl.write('31 - 9 = 22\n')
      }
      if (a == 31 && sign == '-' && b == 10) {
        rl.write('31 - 10 = 21\n')
      }
      if (a == 31 && sign == '-' && b == 11) {
        rl.write('31 - 11 = 20\n')
      }
      if (a == 31 && sign == '-' && b == 12) {
        rl.write('31 - 12 = 19\n')
      }
      if (a == 31 && sign == '-' && b == 13) {
        rl.write('31 - 13 = 18\n')
      }
      if (a == 31 && sign == '-' && b == 14) {
        rl.write('31 - 14 = 17\n')
      }
      if (a == 31 && sign == '-' && b == 15) {
        rl.write('31 - 15 = 16\n')
      }
      if (a == 31 && sign == '-' && b == 16) {
        rl.write('31 - 16 = 15\n')
      }
      if (a == 31 && sign == '-' && b == 17) {
        rl.write('31 - 17 = 14\n')
      }
      if (a == 31 && sign == '-' && b == 18) {
        rl.write('31 - 18 = 13\n')
      }
      if (a == 31 && sign == '-' && b == 19) {
        rl.write('31 - 19 = 12\n')
      }
      if (a == 31 && sign == '-' && b == 20) {
        rl.write('31 - 20 = 11\n')
      }
      if (a == 31 && sign == '-' && b == 21) {
        rl.write('31 - 21 = 10\n')
      }
      if (a == 31 && sign == '-' && b == 22) {
        rl.write('31 - 22 = 9\n')
      }
      if (a == 31 && sign == '-' && b == 23) {
        rl.write('31 - 23 = 8\n')
      }
      if (a == 31 && sign == '-' && b == 24) {
        rl.write('31 - 24 = 7\n')
      }
      if (a == 31 && sign == '-' && b == 25) {
        rl.write('31 - 25 = 6\n')
      }
      if (a == 31 && sign == '-' && b == 26) {
        rl.write('31 - 26 = 5\n')
      }
      if (a == 31 && sign == '-' && b == 27) {
        rl.write('31 - 27 = 4\n')
      }
      if (a == 31 && sign == '-' && b == 28) {
        rl.write('31 - 28 = 3\n')
      }
      if (a == 31 && sign == '-' && b == 29) {
        rl.write('31 - 29 = 2\n')
      }
      if (a == 31 && sign == '-' && b == 30) {
        rl.write('31 - 30 = 1\n')
      }
      if (a == 31 && sign == '-' && b == 31) {
        rl.write('31 - 31 = 0\n')
      }
      if (a == 31 && sign == '-' && b == 32) {
        rl.write('31 - 32 = -1\n')
      }
      if (a == 31 && sign == '-' && b == 33) {
        rl.write('31 - 33 = -2\n')
      }
      if (a == 31 && sign == '-' && b == 34) {
        rl.write('31 - 34 = -3\n')
      }
      if (a == 31 && sign == '-' && b == 35) {
        rl.write('31 - 35 = -4\n')
      }
      if (a == 31 && sign == '-' && b == 36) {
        rl.write('31 - 36 = -5\n')
      }
      if (a == 31 && sign == '-' && b == 37) {
        rl.write('31 - 37 = -6\n')
      }
      if (a == 31 && sign == '-' && b == 38) {
        rl.write('31 - 38 = -7\n')
      }
      if (a == 31 && sign == '-' && b == 39) {
        rl.write('31 - 39 = -8\n')
      }
      if (a == 31 && sign == '-' && b == 40) {
        rl.write('31 - 40 = -9\n')
      }
      if (a == 31 && sign == '-' && b == 41) {
        rl.write('31 - 41 = -10\n')
      }
      if (a == 31 && sign == '-' && b == 42) {
        rl.write('31 - 42 = -11\n')
      }
      if (a == 31 && sign == '-' && b == 43) {
        rl.write('31 - 43 = -12\n')
      }
      if (a == 31 && sign == '-' && b == 44) {
        rl.write('31 - 44 = -13\n')
      }
      if (a == 31 && sign == '-' && b == 45) {
        rl.write('31 - 45 = -14\n')
      }
      if (a == 31 && sign == '-' && b == 46) {
        rl.write('31 - 46 = -15\n')
      }
      if (a == 31 && sign == '-' && b == 47) {
        rl.write('31 - 47 = -16\n')
      }
      if (a == 31 && sign == '-' && b == 48) {
        rl.write('31 - 48 = -17\n')
      }
      if (a == 31 && sign == '-' && b == 49) {
        rl.write('31 - 49 = -18\n')
      }
      if (a == 31 && sign == '-' && b == 50) {
        rl.write('31 - 50 = -19\n')
      }
      if (a == 32 && sign == '-' && b == 0) {
        rl.write('32 - 0 = 32\n')
      }
      if (a == 32 && sign == '-' && b == 1) {
        rl.write('32 - 1 = 31\n')
      }
      if (a == 32 && sign == '-' && b == 2) {
        rl.write('32 - 2 = 30\n')
      }
      if (a == 32 && sign == '-' && b == 3) {
        rl.write('32 - 3 = 29\n')
      }
      if (a == 32 && sign == '-' && b == 4) {
        rl.write('32 - 4 = 28\n')
      }
      if (a == 32 && sign == '-' && b == 5) {
        rl.write('32 - 5 = 27\n')
      }
      if (a == 32 && sign == '-' && b == 6) {
        rl.write('32 - 6 = 26\n')
      }
      if (a == 32 && sign == '-' && b == 7) {
        rl.write('32 - 7 = 25\n')
      }
      if (a == 32 && sign == '-' && b == 8) {
        rl.write('32 - 8 = 24\n')
      }
      if (a == 32 && sign == '-' && b == 9) {
        rl.write('32 - 9 = 23\n')
      }
      if (a == 32 && sign == '-' && b == 10) {
        rl.write('32 - 10 = 22\n')
      }
      if (a == 32 && sign == '-' && b == 11) {
        rl.write('32 - 11 = 21\n')
      }
      if (a == 32 && sign == '-' && b == 12) {
        rl.write('32 - 12 = 20\n')
      }
      if (a == 32 && sign == '-' && b == 13) {
        rl.write('32 - 13 = 19\n')
      }
      if (a == 32 && sign == '-' && b == 14) {
        rl.write('32 - 14 = 18\n')
      }
      if (a == 32 && sign == '-' && b == 15) {
        rl.write('32 - 15 = 17\n')
      }
      if (a == 32 && sign == '-' && b == 16) {
        rl.write('32 - 16 = 16\n')
      }
      if (a == 32 && sign == '-' && b == 17) {
        rl.write('32 - 17 = 15\n')
      }
      if (a == 32 && sign == '-' && b == 18) {
        rl.write('32 - 18 = 14\n')
      }
      if (a == 32 && sign == '-' && b == 19) {
        rl.write('32 - 19 = 13\n')
      }
      if (a == 32 && sign == '-' && b == 20) {
        rl.write('32 - 20 = 12\n')
      }
      if (a == 32 && sign == '-' && b == 21) {
        rl.write('32 - 21 = 11\n')
      }
      if (a == 32 && sign == '-' && b == 22) {
        rl.write('32 - 22 = 10\n')
      }
      if (a == 32 && sign == '-' && b == 23) {
        rl.write('32 - 23 = 9\n')
      }
      if (a == 32 && sign == '-' && b == 24) {
        rl.write('32 - 24 = 8\n')
      }
      if (a == 32 && sign == '-' && b == 25) {
        rl.write('32 - 25 = 7\n')
      }
      if (a == 32 && sign == '-' && b == 26) {
        rl.write('32 - 26 = 6\n')
      }
      if (a == 32 && sign == '-' && b == 27) {
        rl.write('32 - 27 = 5\n')
      }
      if (a == 32 && sign == '-' && b == 28) {
        rl.write('32 - 28 = 4\n')
      }
      if (a == 32 && sign == '-' && b == 29) {
        rl.write('32 - 29 = 3\n')
      }
      if (a == 32 && sign == '-' && b == 30) {
        rl.write('32 - 30 = 2\n')
      }
      if (a == 32 && sign == '-' && b == 31) {
        rl.write('32 - 31 = 1\n')
      }
      if (a == 32 && sign == '-' && b == 32) {
        rl.write('32 - 32 = 0\n')
      }
      if (a == 32 && sign == '-' && b == 33) {
        rl.write('32 - 33 = -1\n')
      }
      if (a == 32 && sign == '-' && b == 34) {
        rl.write('32 - 34 = -2\n')
      }
      if (a == 32 && sign == '-' && b == 35) {
        rl.write('32 - 35 = -3\n')
      }
      if (a == 32 && sign == '-' && b == 36) {
        rl.write('32 - 36 = -4\n')
      }
      if (a == 32 && sign == '-' && b == 37) {
        rl.write('32 - 37 = -5\n')
      }
      if (a == 32 && sign == '-' && b == 38) {
        rl.write('32 - 38 = -6\n')
      }
      if (a == 32 && sign == '-' && b == 39) {
        rl.write('32 - 39 = -7\n')
      }
      if (a == 32 && sign == '-' && b == 40) {
        rl.write('32 - 40 = -8\n')
      }
      if (a == 32 && sign == '-' && b == 41) {
        rl.write('32 - 41 = -9\n')
      }
      if (a == 32 && sign == '-' && b == 42) {
        rl.write('32 - 42 = -10\n')
      }
      if (a == 32 && sign == '-' && b == 43) {
        rl.write('32 - 43 = -11\n')
      }
      if (a == 32 && sign == '-' && b == 44) {
        rl.write('32 - 44 = -12\n')
      }
      if (a == 32 && sign == '-' && b == 45) {
        rl.write('32 - 45 = -13\n')
      }
      if (a == 32 && sign == '-' && b == 46) {
        rl.write('32 - 46 = -14\n')
      }
      if (a == 32 && sign == '-' && b == 47) {
        rl.write('32 - 47 = -15\n')
      }
      if (a == 32 && sign == '-' && b == 48) {
        rl.write('32 - 48 = -16\n')
      }
      if (a == 32 && sign == '-' && b == 49) {
        rl.write('32 - 49 = -17\n')
      }
      if (a == 32 && sign == '-' && b == 50) {
        rl.write('32 - 50 = -18\n')
      }
      if (a == 33 && sign == '-' && b == 0) {
        rl.write('33 - 0 = 33\n')
      }
      if (a == 33 && sign == '-' && b == 1) {
        rl.write('33 - 1 = 32\n')
      }
      if (a == 33 && sign == '-' && b == 2) {
        rl.write('33 - 2 = 31\n')
      }
      if (a == 33 && sign == '-' && b == 3) {
        rl.write('33 - 3 = 30\n')
      }
      if (a == 33 && sign == '-' && b == 4) {
        rl.write('33 - 4 = 29\n')
      }
      if (a == 33 && sign == '-' && b == 5) {
        rl.write('33 - 5 = 28\n')
      }
      if (a == 33 && sign == '-' && b == 6) {
        rl.write('33 - 6 = 27\n')
      }
      if (a == 33 && sign == '-' && b == 7) {
        rl.write('33 - 7 = 26\n')
      }
      if (a == 33 && sign == '-' && b == 8) {
        rl.write('33 - 8 = 25\n')
      }
      if (a == 33 && sign == '-' && b == 9) {
        rl.write('33 - 9 = 24\n')
      }
      if (a == 33 && sign == '-' && b == 10) {
        rl.write('33 - 10 = 23\n')
      }
      if (a == 33 && sign == '-' && b == 11) {
        rl.write('33 - 11 = 22\n')
      }
      if (a == 33 && sign == '-' && b == 12) {
        rl.write('33 - 12 = 21\n')
      }
      if (a == 33 && sign == '-' && b == 13) {
        rl.write('33 - 13 = 20\n')
      }
      if (a == 33 && sign == '-' && b == 14) {
        rl.write('33 - 14 = 19\n')
      }
      if (a == 33 && sign == '-' && b == 15) {
        rl.write('33 - 15 = 18\n')
      }
      if (a == 33 && sign == '-' && b == 16) {
        rl.write('33 - 16 = 17\n')
      }
      if (a == 33 && sign == '-' && b == 17) {
        rl.write('33 - 17 = 16\n')
      }
      if (a == 33 && sign == '-' && b == 18) {
        rl.write('33 - 18 = 15\n')
      }
      if (a == 33 && sign == '-' && b == 19) {
        rl.write('33 - 19 = 14\n')
      }
      if (a == 33 && sign == '-' && b == 20) {
        rl.write('33 - 20 = 13\n')
      }
      if (a == 33 && sign == '-' && b == 21) {
        rl.write('33 - 21 = 12\n')
      }
      if (a == 33 && sign == '-' && b == 22) {
        rl.write('33 - 22 = 11\n')
      }
      if (a == 33 && sign == '-' && b == 23) {
        rl.write('33 - 23 = 10\n')
      }
      if (a == 33 && sign == '-' && b == 24) {
        rl.write('33 - 24 = 9\n')
      }
      if (a == 33 && sign == '-' && b == 25) {
        rl.write('33 - 25 = 8\n')
      }
      if (a == 33 && sign == '-' && b == 26) {
        rl.write('33 - 26 = 7\n')
      }
      if (a == 33 && sign == '-' && b == 27) {
        rl.write('33 - 27 = 6\n')
      }
      if (a == 33 && sign == '-' && b == 28) {
        rl.write('33 - 28 = 5\n')
      }
      if (a == 33 && sign == '-' && b == 29) {
        rl.write('33 - 29 = 4\n')
      }
      if (a == 33 && sign == '-' && b == 30) {
        rl.write('33 - 30 = 3\n')
      }
      if (a == 33 && sign == '-' && b == 31) {
        rl.write('33 - 31 = 2\n')
      }
      if (a == 33 && sign == '-' && b == 32) {
        rl.write('33 - 32 = 1\n')
      }
      if (a == 33 && sign == '-' && b == 33) {
        rl.write('33 - 33 = 0\n')
      }
      if (a == 33 && sign == '-' && b == 34) {
        rl.write('33 - 34 = -1\n')
      }
      if (a == 33 && sign == '-' && b == 35) {
        rl.write('33 - 35 = -2\n')
      }
      if (a == 33 && sign == '-' && b == 36) {
        rl.write('33 - 36 = -3\n')
      }
      if (a == 33 && sign == '-' && b == 37) {
        rl.write('33 - 37 = -4\n')
      }
      if (a == 33 && sign == '-' && b == 38) {
        rl.write('33 - 38 = -5\n')
      }
      if (a == 33 && sign == '-' && b == 39) {
        rl.write('33 - 39 = -6\n')
      }
      if (a == 33 && sign == '-' && b == 40) {
        rl.write('33 - 40 = -7\n')
      }
      if (a == 33 && sign == '-' && b == 41) {
        rl.write('33 - 41 = -8\n')
      }
      if (a == 33 && sign == '-' && b == 42) {
        rl.write('33 - 42 = -9\n')
      }
      if (a == 33 && sign == '-' && b == 43) {
        rl.write('33 - 43 = -10\n')
      }
      if (a == 33 && sign == '-' && b == 44) {
        rl.write('33 - 44 = -11\n')
      }
      if (a == 33 && sign == '-' && b == 45) {
        rl.write('33 - 45 = -12\n')
      }
      if (a == 33 && sign == '-' && b == 46) {
        rl.write('33 - 46 = -13\n')
      }
      if (a == 33 && sign == '-' && b == 47) {
        rl.write('33 - 47 = -14\n')
      }
      if (a == 33 && sign == '-' && b == 48) {
        rl.write('33 - 48 = -15\n')
      }
      if (a == 33 && sign == '-' && b == 49) {
        rl.write('33 - 49 = -16\n')
      }
      if (a == 33 && sign == '-' && b == 50) {
        rl.write('33 - 50 = -17\n')
      }
      if (a == 34 && sign == '-' && b == 0) {
        rl.write('34 - 0 = 34\n')
      }
      if (a == 34 && sign == '-' && b == 1) {
        rl.write('34 - 1 = 33\n')
      }
      if (a == 34 && sign == '-' && b == 2) {
        rl.write('34 - 2 = 32\n')
      }
      if (a == 34 && sign == '-' && b == 3) {
        rl.write('34 - 3 = 31\n')
      }
      if (a == 34 && sign == '-' && b == 4) {
        rl.write('34 - 4 = 30\n')
      }
      if (a == 34 && sign == '-' && b == 5) {
        rl.write('34 - 5 = 29\n')
      }
      if (a == 34 && sign == '-' && b == 6) {
        rl.write('34 - 6 = 28\n')
      }
      if (a == 34 && sign == '-' && b == 7) {
        rl.write('34 - 7 = 27\n')
      }
      if (a == 34 && sign == '-' && b == 8) {
        rl.write('34 - 8 = 26\n')
      }
      if (a == 34 && sign == '-' && b == 9) {
        rl.write('34 - 9 = 25\n')
      }
      if (a == 34 && sign == '-' && b == 10) {
        rl.write('34 - 10 = 24\n')
      }
      if (a == 34 && sign == '-' && b == 11) {
        rl.write('34 - 11 = 23\n')
      }
      if (a == 34 && sign == '-' && b == 12) {
        rl.write('34 - 12 = 22\n')
      }
      if (a == 34 && sign == '-' && b == 13) {
        rl.write('34 - 13 = 21\n')
      }
      if (a == 34 && sign == '-' && b == 14) {
        rl.write('34 - 14 = 20\n')
      }
      if (a == 34 && sign == '-' && b == 15) {
        rl.write('34 - 15 = 19\n')
      }
      if (a == 34 && sign == '-' && b == 16) {
        rl.write('34 - 16 = 18\n')
      }
      if (a == 34 && sign == '-' && b == 17) {
        rl.write('34 - 17 = 17\n')
      }
      if (a == 34 && sign == '-' && b == 18) {
        rl.write('34 - 18 = 16\n')
      }
      if (a == 34 && sign == '-' && b == 19) {
        rl.write('34 - 19 = 15\n')
      }
      if (a == 34 && sign == '-' && b == 20) {
        rl.write('34 - 20 = 14\n')
      }
      if (a == 34 && sign == '-' && b == 21) {
        rl.write('34 - 21 = 13\n')
      }
      if (a == 34 && sign == '-' && b == 22) {
        rl.write('34 - 22 = 12\n')
      }
      if (a == 34 && sign == '-' && b == 23) {
        rl.write('34 - 23 = 11\n')
      }
      if (a == 34 && sign == '-' && b == 24) {
        rl.write('34 - 24 = 10\n')
      }
      if (a == 34 && sign == '-' && b == 25) {
        rl.write('34 - 25 = 9\n')
      }
      if (a == 34 && sign == '-' && b == 26) {
        rl.write('34 - 26 = 8\n')
      }
      if (a == 34 && sign == '-' && b == 27) {
        rl.write('34 - 27 = 7\n')
      }
      if (a == 34 && sign == '-' && b == 28) {
        rl.write('34 - 28 = 6\n')
      }
      if (a == 34 && sign == '-' && b == 29) {
        rl.write('34 - 29 = 5\n')
      }
      if (a == 34 && sign == '-' && b == 30) {
        rl.write('34 - 30 = 4\n')
      }
      if (a == 34 && sign == '-' && b == 31) {
        rl.write('34 - 31 = 3\n')
      }
      if (a == 34 && sign == '-' && b == 32) {
        rl.write('34 - 32 = 2\n')
      }
      if (a == 34 && sign == '-' && b == 33) {
        rl.write('34 - 33 = 1\n')
      }
      if (a == 34 && sign == '-' && b == 34) {
        rl.write('34 - 34 = 0\n')
      }
      if (a == 34 && sign == '-' && b == 35) {
        rl.write('34 - 35 = -1\n')
      }
      if (a == 34 && sign == '-' && b == 36) {
        rl.write('34 - 36 = -2\n')
      }
      if (a == 34 && sign == '-' && b == 37) {
        rl.write('34 - 37 = -3\n')
      }
      if (a == 34 && sign == '-' && b == 38) {
        rl.write('34 - 38 = -4\n')
      }
      if (a == 34 && sign == '-' && b == 39) {
        rl.write('34 - 39 = -5\n')
      }
      if (a == 34 && sign == '-' && b == 40) {
        rl.write('34 - 40 = -6\n')
      }
      if (a == 34 && sign == '-' && b == 41) {
        rl.write('34 - 41 = -7\n')
      }
      if (a == 34 && sign == '-' && b == 42) {
        rl.write('34 - 42 = -8\n')
      }
      if (a == 34 && sign == '-' && b == 43) {
        rl.write('34 - 43 = -9\n')
      }
      if (a == 34 && sign == '-' && b == 44) {
        rl.write('34 - 44 = -10\n')
      }
      if (a == 34 && sign == '-' && b == 45) {
        rl.write('34 - 45 = -11\n')
      }
      if (a == 34 && sign == '-' && b == 46) {
        rl.write('34 - 46 = -12\n')
      }
      if (a == 34 && sign == '-' && b == 47) {
        rl.write('34 - 47 = -13\n')
      }
      if (a == 34 && sign == '-' && b == 48) {
        rl.write('34 - 48 = -14\n')
      }
      if (a == 34 && sign == '-' && b == 49) {
        rl.write('34 - 49 = -15\n')
      }
      if (a == 34 && sign == '-' && b == 50) {
        rl.write('34 - 50 = -16\n')
      }
      if (a == 35 && sign == '-' && b == 0) {
        rl.write('35 - 0 = 35\n')
      }
      if (a == 35 && sign == '-' && b == 1) {
        rl.write('35 - 1 = 34\n')
      }
      if (a == 35 && sign == '-' && b == 2) {
        rl.write('35 - 2 = 33\n')
      }
      if (a == 35 && sign == '-' && b == 3) {
        rl.write('35 - 3 = 32\n')
      }
      if (a == 35 && sign == '-' && b == 4) {
        rl.write('35 - 4 = 31\n')
      }
      if (a == 35 && sign == '-' && b == 5) {
        rl.write('35 - 5 = 30\n')
      }
      if (a == 35 && sign == '-' && b == 6) {
        rl.write('35 - 6 = 29\n')
      }
      if (a == 35 && sign == '-' && b == 7) {
        rl.write('35 - 7 = 28\n')
      }
      if (a == 35 && sign == '-' && b == 8) {
        rl.write('35 - 8 = 27\n')
      }
      if (a == 35 && sign == '-' && b == 9) {
        rl.write('35 - 9 = 26\n')
      }
      if (a == 35 && sign == '-' && b == 10) {
        rl.write('35 - 10 = 25\n')
      }
      if (a == 35 && sign == '-' && b == 11) {
        rl.write('35 - 11 = 24\n')
      }
      if (a == 35 && sign == '-' && b == 12) {
        rl.write('35 - 12 = 23\n')
      }
      if (a == 35 && sign == '-' && b == 13) {
        rl.write('35 - 13 = 22\n')
      }
      if (a == 35 && sign == '-' && b == 14) {
        rl.write('35 - 14 = 21\n')
      }
      if (a == 35 && sign == '-' && b == 15) {
        rl.write('35 - 15 = 20\n')
      }
      if (a == 35 && sign == '-' && b == 16) {
        rl.write('35 - 16 = 19\n')
      }
      if (a == 35 && sign == '-' && b == 17) {
        rl.write('35 - 17 = 18\n')
      }
      if (a == 35 && sign == '-' && b == 18) {
        rl.write('35 - 18 = 17\n')
      }
      if (a == 35 && sign == '-' && b == 19) {
        rl.write('35 - 19 = 16\n')
      }
      if (a == 35 && sign == '-' && b == 20) {
        rl.write('35 - 20 = 15\n')
      }
      if (a == 35 && sign == '-' && b == 21) {
        rl.write('35 - 21 = 14\n')
      }
      if (a == 35 && sign == '-' && b == 22) {
        rl.write('35 - 22 = 13\n')
      }
      if (a == 35 && sign == '-' && b == 23) {
        rl.write('35 - 23 = 12\n')
      }
      if (a == 35 && sign == '-' && b == 24) {
        rl.write('35 - 24 = 11\n')
      }
      if (a == 35 && sign == '-' && b == 25) {
        rl.write('35 - 25 = 10\n')
      }
      if (a == 35 && sign == '-' && b == 26) {
        rl.write('35 - 26 = 9\n')
      }
      if (a == 35 && sign == '-' && b == 27) {
        rl.write('35 - 27 = 8\n')
      }
      if (a == 35 && sign == '-' && b == 28) {
        rl.write('35 - 28 = 7\n')
      }
      if (a == 35 && sign == '-' && b == 29) {
        rl.write('35 - 29 = 6\n')
      }
      if (a == 35 && sign == '-' && b == 30) {
        rl.write('35 - 30 = 5\n')
      }
      if (a == 35 && sign == '-' && b == 31) {
        rl.write('35 - 31 = 4\n')
      }
      if (a == 35 && sign == '-' && b == 32) {
        rl.write('35 - 32 = 3\n')
      }
      if (a == 35 && sign == '-' && b == 33) {
        rl.write('35 - 33 = 2\n')
      }
      if (a == 35 && sign == '-' && b == 34) {
        rl.write('35 - 34 = 1\n')
      }
      if (a == 35 && sign == '-' && b == 35) {
        rl.write('35 - 35 = 0\n')
      }
      if (a == 35 && sign == '-' && b == 36) {
        rl.write('35 - 36 = -1\n')
      }
      if (a == 35 && sign == '-' && b == 37) {
        rl.write('35 - 37 = -2\n')
      }
      if (a == 35 && sign == '-' && b == 38) {
        rl.write('35 - 38 = -3\n')
      }
      if (a == 35 && sign == '-' && b == 39) {
        rl.write('35 - 39 = -4\n')
      }
      if (a == 35 && sign == '-' && b == 40) {
        rl.write('35 - 40 = -5\n')
      }
      if (a == 35 && sign == '-' && b == 41) {
        rl.write('35 - 41 = -6\n')
      }
      if (a == 35 && sign == '-' && b == 42) {
        rl.write('35 - 42 = -7\n')
      }
      if (a == 35 && sign == '-' && b == 43) {
        rl.write('35 - 43 = -8\n')
      }
      if (a == 35 && sign == '-' && b == 44) {
        rl.write('35 - 44 = -9\n')
      }
      if (a == 35 && sign == '-' && b == 45) {
        rl.write('35 - 45 = -10\n')
      }
      if (a == 35 && sign == '-' && b == 46) {
        rl.write('35 - 46 = -11\n')
      }
      if (a == 35 && sign == '-' && b == 47) {
        rl.write('35 - 47 = -12\n')
      }
      if (a == 35 && sign == '-' && b == 48) {
        rl.write('35 - 48 = -13\n')
      }
      if (a == 35 && sign == '-' && b == 49) {
        rl.write('35 - 49 = -14\n')
      }
      if (a == 35 && sign == '-' && b == 50) {
        rl.write('35 - 50 = -15\n')
      }
      if (a == 36 && sign == '-' && b == 0) {
        rl.write('36 - 0 = 36\n')
      }
      if (a == 36 && sign == '-' && b == 1) {
        rl.write('36 - 1 = 35\n')
      }
      if (a == 36 && sign == '-' && b == 2) {
        rl.write('36 - 2 = 34\n')
      }
      if (a == 36 && sign == '-' && b == 3) {
        rl.write('36 - 3 = 33\n')
      }
      if (a == 36 && sign == '-' && b == 4) {
        rl.write('36 - 4 = 32\n')
      }
      if (a == 36 && sign == '-' && b == 5) {
        rl.write('36 - 5 = 31\n')
      }
      if (a == 36 && sign == '-' && b == 6) {
        rl.write('36 - 6 = 30\n')
      }
      if (a == 36 && sign == '-' && b == 7) {
        rl.write('36 - 7 = 29\n')
      }
      if (a == 36 && sign == '-' && b == 8) {
        rl.write('36 - 8 = 28\n')
      }
      if (a == 36 && sign == '-' && b == 9) {
        rl.write('36 - 9 = 27\n')
      }
      if (a == 36 && sign == '-' && b == 10) {
        rl.write('36 - 10 = 26\n')
      }
      if (a == 36 && sign == '-' && b == 11) {
        rl.write('36 - 11 = 25\n')
      }
      if (a == 36 && sign == '-' && b == 12) {
        rl.write('36 - 12 = 24\n')
      }
      if (a == 36 && sign == '-' && b == 13) {
        rl.write('36 - 13 = 23\n')
      }
      if (a == 36 && sign == '-' && b == 14) {
        rl.write('36 - 14 = 22\n')
      }
      if (a == 36 && sign == '-' && b == 15) {
        rl.write('36 - 15 = 21\n')
      }
      if (a == 36 && sign == '-' && b == 16) {
        rl.write('36 - 16 = 20\n')
      }
      if (a == 36 && sign == '-' && b == 17) {
        rl.write('36 - 17 = 19\n')
      }
      if (a == 36 && sign == '-' && b == 18) {
        rl.write('36 - 18 = 18\n')
      }
      if (a == 36 && sign == '-' && b == 19) {
        rl.write('36 - 19 = 17\n')
      }
      if (a == 36 && sign == '-' && b == 20) {
        rl.write('36 - 20 = 16\n')
      }
      if (a == 36 && sign == '-' && b == 21) {
        rl.write('36 - 21 = 15\n')
      }
      if (a == 36 && sign == '-' && b == 22) {
        rl.write('36 - 22 = 14\n')
      }
      if (a == 36 && sign == '-' && b == 23) {
        rl.write('36 - 23 = 13\n')
      }
      if (a == 36 && sign == '-' && b == 24) {
        rl.write('36 - 24 = 12\n')
      }
      if (a == 36 && sign == '-' && b == 25) {
        rl.write('36 - 25 = 11\n')
      }
      if (a == 36 && sign == '-' && b == 26) {
        rl.write('36 - 26 = 10\n')
      }
      if (a == 36 && sign == '-' && b == 27) {
        rl.write('36 - 27 = 9\n')
      }
      if (a == 36 && sign == '-' && b == 28) {
        rl.write('36 - 28 = 8\n')
      }
      if (a == 36 && sign == '-' && b == 29) {
        rl.write('36 - 29 = 7\n')
      }
      if (a == 36 && sign == '-' && b == 30) {
        rl.write('36 - 30 = 6\n')
      }
      if (a == 36 && sign == '-' && b == 31) {
        rl.write('36 - 31 = 5\n')
      }
      if (a == 36 && sign == '-' && b == 32) {
        rl.write('36 - 32 = 4\n')
      }
      if (a == 36 && sign == '-' && b == 33) {
        rl.write('36 - 33 = 3\n')
      }
      if (a == 36 && sign == '-' && b == 34) {
        rl.write('36 - 34 = 2\n')
      }
      if (a == 36 && sign == '-' && b == 35) {
        rl.write('36 - 35 = 1\n')
      }
      if (a == 36 && sign == '-' && b == 36) {
        rl.write('36 - 36 = 0\n')
      }
      if (a == 36 && sign == '-' && b == 37) {
        rl.write('36 - 37 = -1\n')
      }
      if (a == 36 && sign == '-' && b == 38) {
        rl.write('36 - 38 = -2\n')
      }
      if (a == 36 && sign == '-' && b == 39) {
        rl.write('36 - 39 = -3\n')
      }
      if (a == 36 && sign == '-' && b == 40) {
        rl.write('36 - 40 = -4\n')
      }
      if (a == 36 && sign == '-' && b == 41) {
        rl.write('36 - 41 = -5\n')
      }
      if (a == 36 && sign == '-' && b == 42) {
        rl.write('36 - 42 = -6\n')
      }
      if (a == 36 && sign == '-' && b == 43) {
        rl.write('36 - 43 = -7\n')
      }
      if (a == 36 && sign == '-' && b == 44) {
        rl.write('36 - 44 = -8\n')
      }
      if (a == 36 && sign == '-' && b == 45) {
        rl.write('36 - 45 = -9\n')
      }
      if (a == 36 && sign == '-' && b == 46) {
        rl.write('36 - 46 = -10\n')
      }
      if (a == 36 && sign == '-' && b == 47) {
        rl.write('36 - 47 = -11\n')
      }
      if (a == 36 && sign == '-' && b == 48) {
        rl.write('36 - 48 = -12\n')
      }
      if (a == 36 && sign == '-' && b == 49) {
        rl.write('36 - 49 = -13\n')
      }
      if (a == 36 && sign == '-' && b == 50) {
        rl.write('36 - 50 = -14\n')
      }
      if (a == 37 && sign == '-' && b == 0) {
        rl.write('37 - 0 = 37\n')
      }
      if (a == 37 && sign == '-' && b == 1) {
        rl.write('37 - 1 = 36\n')
      }
      if (a == 37 && sign == '-' && b == 2) {
        rl.write('37 - 2 = 35\n')
      }
      if (a == 37 && sign == '-' && b == 3) {
        rl.write('37 - 3 = 34\n')
      }
      if (a == 37 && sign == '-' && b == 4) {
        rl.write('37 - 4 = 33\n')
      }
      if (a == 37 && sign == '-' && b == 5) {
        rl.write('37 - 5 = 32\n')
      }
      if (a == 37 && sign == '-' && b == 6) {
        rl.write('37 - 6 = 31\n')
      }
      if (a == 37 && sign == '-' && b == 7) {
        rl.write('37 - 7 = 30\n')
      }
      if (a == 37 && sign == '-' && b == 8) {
        rl.write('37 - 8 = 29\n')
      }
      if (a == 37 && sign == '-' && b == 9) {
        rl.write('37 - 9 = 28\n')
      }
      if (a == 37 && sign == '-' && b == 10) {
        rl.write('37 - 10 = 27\n')
      }
      if (a == 37 && sign == '-' && b == 11) {
        rl.write('37 - 11 = 26\n')
      }
      if (a == 37 && sign == '-' && b == 12) {
        rl.write('37 - 12 = 25\n')
      }
      if (a == 37 && sign == '-' && b == 13) {
        rl.write('37 - 13 = 24\n')
      }
      if (a == 37 && sign == '-' && b == 14) {
        rl.write('37 - 14 = 23\n')
      }
      if (a == 37 && sign == '-' && b == 15) {
        rl.write('37 - 15 = 22\n')
      }
      if (a == 37 && sign == '-' && b == 16) {
        rl.write('37 - 16 = 21\n')
      }
      if (a == 37 && sign == '-' && b == 17) {
        rl.write('37 - 17 = 20\n')
      }
      if (a == 37 && sign == '-' && b == 18) {
        rl.write('37 - 18 = 19\n')
      }
      if (a == 37 && sign == '-' && b == 19) {
        rl.write('37 - 19 = 18\n')
      }
      if (a == 37 && sign == '-' && b == 20) {
        rl.write('37 - 20 = 17\n')
      }
      if (a == 37 && sign == '-' && b == 21) {
        rl.write('37 - 21 = 16\n')
      }
      if (a == 37 && sign == '-' && b == 22) {
        rl.write('37 - 22 = 15\n')
      }
      if (a == 37 && sign == '-' && b == 23) {
        rl.write('37 - 23 = 14\n')
      }
      if (a == 37 && sign == '-' && b == 24) {
        rl.write('37 - 24 = 13\n')
      }
      if (a == 37 && sign == '-' && b == 25) {
        rl.write('37 - 25 = 12\n')
      }
      if (a == 37 && sign == '-' && b == 26) {
        rl.write('37 - 26 = 11\n')
      }
      if (a == 37 && sign == '-' && b == 27) {
        rl.write('37 - 27 = 10\n')
      }
      if (a == 37 && sign == '-' && b == 28) {
        rl.write('37 - 28 = 9\n')
      }
      if (a == 37 && sign == '-' && b == 29) {
        rl.write('37 - 29 = 8\n')
      }
      if (a == 37 && sign == '-' && b == 30) {
        rl.write('37 - 30 = 7\n')
      }
      if (a == 37 && sign == '-' && b == 31) {
        rl.write('37 - 31 = 6\n')
      }
      if (a == 37 && sign == '-' && b == 32) {
        rl.write('37 - 32 = 5\n')
      }
      if (a == 37 && sign == '-' && b == 33) {
        rl.write('37 - 33 = 4\n')
      }
      if (a == 37 && sign == '-' && b == 34) {
        rl.write('37 - 34 = 3\n')
      }
      if (a == 37 && sign == '-' && b == 35) {
        rl.write('37 - 35 = 2\n')
      }
      if (a == 37 && sign == '-' && b == 36) {
        rl.write('37 - 36 = 1\n')
      }
      if (a == 37 && sign == '-' && b == 37) {
        rl.write('37 - 37 = 0\n')
      }
      if (a == 37 && sign == '-' && b == 38) {
        rl.write('37 - 38 = -1\n')
      }
      if (a == 37 && sign == '-' && b == 39) {
        rl.write('37 - 39 = -2\n')
      }
      if (a == 37 && sign == '-' && b == 40) {
        rl.write('37 - 40 = -3\n')
      }
      if (a == 37 && sign == '-' && b == 41) {
        rl.write('37 - 41 = -4\n')
      }
      if (a == 37 && sign == '-' && b == 42) {
        rl.write('37 - 42 = -5\n')
      }
      if (a == 37 && sign == '-' && b == 43) {
        rl.write('37 - 43 = -6\n')
      }
      if (a == 37 && sign == '-' && b == 44) {
        rl.write('37 - 44 = -7\n')
      }
      if (a == 37 && sign == '-' && b == 45) {
        rl.write('37 - 45 = -8\n')
      }
      if (a == 37 && sign == '-' && b == 46) {
        rl.write('37 - 46 = -9\n')
      }
      if (a == 37 && sign == '-' && b == 47) {
        rl.write('37 - 47 = -10\n')
      }
      if (a == 37 && sign == '-' && b == 48) {
        rl.write('37 - 48 = -11\n')
      }
      if (a == 37 && sign == '-' && b == 49) {
        rl.write('37 - 49 = -12\n')
      }
      if (a == 37 && sign == '-' && b == 50) {
        rl.write('37 - 50 = -13\n')
      }
      if (a == 38 && sign == '-' && b == 0) {
        rl.write('38 - 0 = 38\n')
      }
      if (a == 38 && sign == '-' && b == 1) {
        rl.write('38 - 1 = 37\n')
      }
      if (a == 38 && sign == '-' && b == 2) {
        rl.write('38 - 2 = 36\n')
      }
      if (a == 38 && sign == '-' && b == 3) {
        rl.write('38 - 3 = 35\n')
      }
      if (a == 38 && sign == '-' && b == 4) {
        rl.write('38 - 4 = 34\n')
      }
      if (a == 38 && sign == '-' && b == 5) {
        rl.write('38 - 5 = 33\n')
      }
      if (a == 38 && sign == '-' && b == 6) {
        rl.write('38 - 6 = 32\n')
      }
      if (a == 38 && sign == '-' && b == 7) {
        rl.write('38 - 7 = 31\n')
      }
      if (a == 38 && sign == '-' && b == 8) {
        rl.write('38 - 8 = 30\n')
      }
      if (a == 38 && sign == '-' && b == 9) {
        rl.write('38 - 9 = 29\n')
      }
      if (a == 38 && sign == '-' && b == 10) {
        rl.write('38 - 10 = 28\n')
      }
      if (a == 38 && sign == '-' && b == 11) {
        rl.write('38 - 11 = 27\n')
      }
      if (a == 38 && sign == '-' && b == 12) {
        rl.write('38 - 12 = 26\n')
      }
      if (a == 38 && sign == '-' && b == 13) {
        rl.write('38 - 13 = 25\n')
      }
      if (a == 38 && sign == '-' && b == 14) {
        rl.write('38 - 14 = 24\n')
      }
      if (a == 38 && sign == '-' && b == 15) {
        rl.write('38 - 15 = 23\n')
      }
      if (a == 38 && sign == '-' && b == 16) {
        rl.write('38 - 16 = 22\n')
      }
      if (a == 38 && sign == '-' && b == 17) {
        rl.write('38 - 17 = 21\n')
      }
      if (a == 38 && sign == '-' && b == 18) {
        rl.write('38 - 18 = 20\n')
      }
      if (a == 38 && sign == '-' && b == 19) {
        rl.write('38 - 19 = 19\n')
      }
      if (a == 38 && sign == '-' && b == 20) {
        rl.write('38 - 20 = 18\n')
      }
      if (a == 38 && sign == '-' && b == 21) {
        rl.write('38 - 21 = 17\n')
      }
      if (a == 38 && sign == '-' && b == 22) {
        rl.write('38 - 22 = 16\n')
      }
      if (a == 38 && sign == '-' && b == 23) {
        rl.write('38 - 23 = 15\n')
      }
      if (a == 38 && sign == '-' && b == 24) {
        rl.write('38 - 24 = 14\n')
      }
      if (a == 38 && sign == '-' && b == 25) {
        rl.write('38 - 25 = 13\n')
      }
      if (a == 38 && sign == '-' && b == 26) {
        rl.write('38 - 26 = 12\n')
      }
      if (a == 38 && sign == '-' && b == 27) {
        rl.write('38 - 27 = 11\n')
      }
      if (a == 38 && sign == '-' && b == 28) {
        rl.write('38 - 28 = 10\n')
      }
      if (a == 38 && sign == '-' && b == 29) {
        rl.write('38 - 29 = 9\n')
      }
      if (a == 38 && sign == '-' && b == 30) {
        rl.write('38 - 30 = 8\n')
      }
      if (a == 38 && sign == '-' && b == 31) {
        rl.write('38 - 31 = 7\n')
      }
      if (a == 38 && sign == '-' && b == 32) {
        rl.write('38 - 32 = 6\n')
      }
      if (a == 38 && sign == '-' && b == 33) {
        rl.write('38 - 33 = 5\n')
      }
      if (a == 38 && sign == '-' && b == 34) {
        rl.write('38 - 34 = 4\n')
      }
      if (a == 38 && sign == '-' && b == 35) {
        rl.write('38 - 35 = 3\n')
      }
      if (a == 38 && sign == '-' && b == 36) {
        rl.write('38 - 36 = 2\n')
      }
      if (a == 38 && sign == '-' && b == 37) {
        rl.write('38 - 37 = 1\n')
      }
      if (a == 38 && sign == '-' && b == 38) {
        rl.write('38 - 38 = 0\n')
      }
      if (a == 38 && sign == '-' && b == 39) {
        rl.write('38 - 39 = -1\n')
      }
      if (a == 38 && sign == '-' && b == 40) {
        rl.write('38 - 40 = -2\n')
      }
      if (a == 38 && sign == '-' && b == 41) {
        rl.write('38 - 41 = -3\n')
      }
      if (a == 38 && sign == '-' && b == 42) {
        rl.write('38 - 42 = -4\n')
      }
      if (a == 38 && sign == '-' && b == 43) {
        rl.write('38 - 43 = -5\n')
      }
      if (a == 38 && sign == '-' && b == 44) {
        rl.write('38 - 44 = -6\n')
      }
      if (a == 38 && sign == '-' && b == 45) {
        rl.write('38 - 45 = -7\n')
      }
      if (a == 38 && sign == '-' && b == 46) {
        rl.write('38 - 46 = -8\n')
      }
      if (a == 38 && sign == '-' && b == 47) {
        rl.write('38 - 47 = -9\n')
      }
      if (a == 38 && sign == '-' && b == 48) {
        rl.write('38 - 48 = -10\n')
      }
      if (a == 38 && sign == '-' && b == 49) {
        rl.write('38 - 49 = -11\n')
      }
      if (a == 38 && sign == '-' && b == 50) {
        rl.write('38 - 50 = -12\n')
      }
      if (a == 39 && sign == '-' && b == 0) {
        rl.write('39 - 0 = 39\n')
      }
      if (a == 39 && sign == '-' && b == 1) {
        rl.write('39 - 1 = 38\n')
      }
      if (a == 39 && sign == '-' && b == 2) {
        rl.write('39 - 2 = 37\n')
      }
      if (a == 39 && sign == '-' && b == 3) {
        rl.write('39 - 3 = 36\n')
      }
      if (a == 39 && sign == '-' && b == 4) {
        rl.write('39 - 4 = 35\n')
      }
      if (a == 39 && sign == '-' && b == 5) {
        rl.write('39 - 5 = 34\n')
      }
      if (a == 39 && sign == '-' && b == 6) {
        rl.write('39 - 6 = 33\n')
      }
      if (a == 39 && sign == '-' && b == 7) {
        rl.write('39 - 7 = 32\n')
      }
      if (a == 39 && sign == '-' && b == 8) {
        rl.write('39 - 8 = 31\n')
      }
      if (a == 39 && sign == '-' && b == 9) {
        rl.write('39 - 9 = 30\n')
      }
      if (a == 39 && sign == '-' && b == 10) {
        rl.write('39 - 10 = 29\n')
      }
      if (a == 39 && sign == '-' && b == 11) {
        rl.write('39 - 11 = 28\n')
      }
      if (a == 39 && sign == '-' && b == 12) {
        rl.write('39 - 12 = 27\n')
      }
      if (a == 39 && sign == '-' && b == 13) {
        rl.write('39 - 13 = 26\n')
      }
      if (a == 39 && sign == '-' && b == 14) {
        rl.write('39 - 14 = 25\n')
      }
      if (a == 39 && sign == '-' && b == 15) {
        rl.write('39 - 15 = 24\n')
      }
      if (a == 39 && sign == '-' && b == 16) {
        rl.write('39 - 16 = 23\n')
      }
      if (a == 39 && sign == '-' && b == 17) {
        rl.write('39 - 17 = 22\n')
      }
      if (a == 39 && sign == '-' && b == 18) {
        rl.write('39 - 18 = 21\n')
      }
      if (a == 39 && sign == '-' && b == 19) {
        rl.write('39 - 19 = 20\n')
      }
      if (a == 39 && sign == '-' && b == 20) {
        rl.write('39 - 20 = 19\n')
      }
      if (a == 39 && sign == '-' && b == 21) {
        rl.write('39 - 21 = 18\n')
      }
      if (a == 39 && sign == '-' && b == 22) {
        rl.write('39 - 22 = 17\n')
      }
      if (a == 39 && sign == '-' && b == 23) {
        rl.write('39 - 23 = 16\n')
      }
      if (a == 39 && sign == '-' && b == 24) {
        rl.write('39 - 24 = 15\n')
      }
      if (a == 39 && sign == '-' && b == 25) {
        rl.write('39 - 25 = 14\n')
      }
      if (a == 39 && sign == '-' && b == 26) {
        rl.write('39 - 26 = 13\n')
      }
      if (a == 39 && sign == '-' && b == 27) {
        rl.write('39 - 27 = 12\n')
      }
      if (a == 39 && sign == '-' && b == 28) {
        rl.write('39 - 28 = 11\n')
      }
      if (a == 39 && sign == '-' && b == 29) {
        rl.write('39 - 29 = 10\n')
      }
      if (a == 39 && sign == '-' && b == 30) {
        rl.write('39 - 30 = 9\n')
      }
      if (a == 39 && sign == '-' && b == 31) {
        rl.write('39 - 31 = 8\n')
      }
      if (a == 39 && sign == '-' && b == 32) {
        rl.write('39 - 32 = 7\n')
      }
      if (a == 39 && sign == '-' && b == 33) {
        rl.write('39 - 33 = 6\n')
      }
      if (a == 39 && sign == '-' && b == 34) {
        rl.write('39 - 34 = 5\n')
      }
      if (a == 39 && sign == '-' && b == 35) {
        rl.write('39 - 35 = 4\n')
      }
      if (a == 39 && sign == '-' && b == 36) {
        rl.write('39 - 36 = 3\n')
      }
      if (a == 39 && sign == '-' && b == 37) {
        rl.write('39 - 37 = 2\n')
      }
      if (a == 39 && sign == '-' && b == 38) {
        rl.write('39 - 38 = 1\n')
      }
      if (a == 39 && sign == '-' && b == 39) {
        rl.write('39 - 39 = 0\n')
      }
      if (a == 39 && sign == '-' && b == 40) {
        rl.write('39 - 40 = -1\n')
      }
      if (a == 39 && sign == '-' && b == 41) {
        rl.write('39 - 41 = -2\n')
      }
      if (a == 39 && sign == '-' && b == 42) {
        rl.write('39 - 42 = -3\n')
      }
      if (a == 39 && sign == '-' && b == 43) {
        rl.write('39 - 43 = -4\n')
      }
      if (a == 39 && sign == '-' && b == 44) {
        rl.write('39 - 44 = -5\n')
      }
      if (a == 39 && sign == '-' && b == 45) {
        rl.write('39 - 45 = -6\n')
      }
      if (a == 39 && sign == '-' && b == 46) {
        rl.write('39 - 46 = -7\n')
      }
      if (a == 39 && sign == '-' && b == 47) {
        rl.write('39 - 47 = -8\n')
      }
      if (a == 39 && sign == '-' && b == 48) {
        rl.write('39 - 48 = -9\n')
      }
      if (a == 39 && sign == '-' && b == 49) {
        rl.write('39 - 49 = -10\n')
      }
      if (a == 39 && sign == '-' && b == 50) {
        rl.write('39 - 50 = -11\n')
      }
      if (a == 40 && sign == '-' && b == 0) {
        rl.write('40 - 0 = 40\n')
      }
      if (a == 40 && sign == '-' && b == 1) {
        rl.write('40 - 1 = 39\n')
      }
      if (a == 40 && sign == '-' && b == 2) {
        rl.write('40 - 2 = 38\n')
      }
      if (a == 40 && sign == '-' && b == 3) {
        rl.write('40 - 3 = 37\n')
      }
      if (a == 40 && sign == '-' && b == 4) {
        rl.write('40 - 4 = 36\n')
      }
      if (a == 40 && sign == '-' && b == 5) {
        rl.write('40 - 5 = 35\n')
      }
      if (a == 40 && sign == '-' && b == 6) {
        rl.write('40 - 6 = 34\n')
      }
      if (a == 40 && sign == '-' && b == 7) {
        rl.write('40 - 7 = 33\n')
      }
      if (a == 40 && sign == '-' && b == 8) {
        rl.write('40 - 8 = 32\n')
      }
      if (a == 40 && sign == '-' && b == 9) {
        rl.write('40 - 9 = 31\n')
      }
      if (a == 40 && sign == '-' && b == 10) {
        rl.write('40 - 10 = 30\n')
      }
      if (a == 40 && sign == '-' && b == 11) {
        rl.write('40 - 11 = 29\n')
      }
      if (a == 40 && sign == '-' && b == 12) {
        rl.write('40 - 12 = 28\n')
      }
      if (a == 40 && sign == '-' && b == 13) {
        rl.write('40 - 13 = 27\n')
      }
      if (a == 40 && sign == '-' && b == 14) {
        rl.write('40 - 14 = 26\n')
      }
      if (a == 40 && sign == '-' && b == 15) {
        rl.write('40 - 15 = 25\n')
      }
      if (a == 40 && sign == '-' && b == 16) {
        rl.write('40 - 16 = 24\n')
      }
      if (a == 40 && sign == '-' && b == 17) {
        rl.write('40 - 17 = 23\n')
      }
      if (a == 40 && sign == '-' && b == 18) {
        rl.write('40 - 18 = 22\n')
      }
      if (a == 40 && sign == '-' && b == 19) {
        rl.write('40 - 19 = 21\n')
      }
      if (a == 40 && sign == '-' && b == 20) {
        rl.write('40 - 20 = 20\n')
      }
      if (a == 40 && sign == '-' && b == 21) {
        rl.write('40 - 21 = 19\n')
      }
      if (a == 40 && sign == '-' && b == 22) {
        rl.write('40 - 22 = 18\n')
      }
      if (a == 40 && sign == '-' && b == 23) {
        rl.write('40 - 23 = 17\n')
      }
      if (a == 40 && sign == '-' && b == 24) {
        rl.write('40 - 24 = 16\n')
      }
      if (a == 40 && sign == '-' && b == 25) {
        rl.write('40 - 25 = 15\n')
      }
      if (a == 40 && sign == '-' && b == 26) {
        rl.write('40 - 26 = 14\n')
      }
      if (a == 40 && sign == '-' && b == 27) {
        rl.write('40 - 27 = 13\n')
      }
      if (a == 40 && sign == '-' && b == 28) {
        rl.write('40 - 28 = 12\n')
      }
      if (a == 40 && sign == '-' && b == 29) {
        rl.write('40 - 29 = 11\n')
      }
      if (a == 40 && sign == '-' && b == 30) {
        rl.write('40 - 30 = 10\n')
      }
      if (a == 40 && sign == '-' && b == 31) {
        rl.write('40 - 31 = 9\n')
      }
      if (a == 40 && sign == '-' && b == 32) {
        rl.write('40 - 32 = 8\n')
      }
      if (a == 40 && sign == '-' && b == 33) {
        rl.write('40 - 33 = 7\n')
      }
      if (a == 40 && sign == '-' && b == 34) {
        rl.write('40 - 34 = 6\n')
      }
      if (a == 40 && sign == '-' && b == 35) {
        rl.write('40 - 35 = 5\n')
      }
      if (a == 40 && sign == '-' && b == 36) {
        rl.write('40 - 36 = 4\n')
      }
      if (a == 40 && sign == '-' && b == 37) {
        rl.write('40 - 37 = 3\n')
      }
      if (a == 40 && sign == '-' && b == 38) {
        rl.write('40 - 38 = 2\n')
      }
      if (a == 40 && sign == '-' && b == 39) {
        rl.write('40 - 39 = 1\n')
      }
      if (a == 40 && sign == '-' && b == 40) {
        rl.write('40 - 40 = 0\n')
      }
      if (a == 40 && sign == '-' && b == 41) {
        rl.write('40 - 41 = -1\n')
      }
      if (a == 40 && sign == '-' && b == 42) {
        rl.write('40 - 42 = -2\n')
      }
      if (a == 40 && sign == '-' && b == 43) {
        rl.write('40 - 43 = -3\n')
      }
      if (a == 40 && sign == '-' && b == 44) {
        rl.write('40 - 44 = -4\n')
      }
      if (a == 40 && sign == '-' && b == 45) {
        rl.write('40 - 45 = -5\n')
      }
      if (a == 40 && sign == '-' && b == 46) {
        rl.write('40 - 46 = -6\n')
      }
      if (a == 40 && sign == '-' && b == 47) {
        rl.write('40 - 47 = -7\n')
      }
      if (a == 40 && sign == '-' && b == 48) {
        rl.write('40 - 48 = -8\n')
      }
      if (a == 40 && sign == '-' && b == 49) {
        rl.write('40 - 49 = -9\n')
      }
      if (a == 40 && sign == '-' && b == 50) {
        rl.write('40 - 50 = -10\n')
      }
      if (a == 41 && sign == '-' && b == 0) {
        rl.write('41 - 0 = 41\n')
      }
      if (a == 41 && sign == '-' && b == 1) {
        rl.write('41 - 1 = 40\n')
      }
      if (a == 41 && sign == '-' && b == 2) {
        rl.write('41 - 2 = 39\n')
      }
      if (a == 41 && sign == '-' && b == 3) {
        rl.write('41 - 3 = 38\n')
      }
      if (a == 41 && sign == '-' && b == 4) {
        rl.write('41 - 4 = 37\n')
      }
      if (a == 41 && sign == '-' && b == 5) {
        rl.write('41 - 5 = 36\n')
      }
      if (a == 41 && sign == '-' && b == 6) {
        rl.write('41 - 6 = 35\n')
      }
      if (a == 41 && sign == '-' && b == 7) {
        rl.write('41 - 7 = 34\n')
      }
      if (a == 41 && sign == '-' && b == 8) {
        rl.write('41 - 8 = 33\n')
      }
      if (a == 41 && sign == '-' && b == 9) {
        rl.write('41 - 9 = 32\n')
      }
      if (a == 41 && sign == '-' && b == 10) {
        rl.write('41 - 10 = 31\n')
      }
      if (a == 41 && sign == '-' && b == 11) {
        rl.write('41 - 11 = 30\n')
      }
      if (a == 41 && sign == '-' && b == 12) {
        rl.write('41 - 12 = 29\n')
      }
      if (a == 41 && sign == '-' && b == 13) {
        rl.write('41 - 13 = 28\n')
      }
      if (a == 41 && sign == '-' && b == 14) {
        rl.write('41 - 14 = 27\n')
      }
      if (a == 41 && sign == '-' && b == 15) {
        rl.write('41 - 15 = 26\n')
      }
      if (a == 41 && sign == '-' && b == 16) {
        rl.write('41 - 16 = 25\n')
      }
      if (a == 41 && sign == '-' && b == 17) {
        rl.write('41 - 17 = 24\n')
      }
      if (a == 41 && sign == '-' && b == 18) {
        rl.write('41 - 18 = 23\n')
      }
      if (a == 41 && sign == '-' && b == 19) {
        rl.write('41 - 19 = 22\n')
      }
      if (a == 41 && sign == '-' && b == 20) {
        rl.write('41 - 20 = 21\n')
      }
      if (a == 41 && sign == '-' && b == 21) {
        rl.write('41 - 21 = 20\n')
      }
      if (a == 41 && sign == '-' && b == 22) {
        rl.write('41 - 22 = 19\n')
      }
      if (a == 41 && sign == '-' && b == 23) {
        rl.write('41 - 23 = 18\n')
      }
      if (a == 41 && sign == '-' && b == 24) {
        rl.write('41 - 24 = 17\n')
      }
      if (a == 41 && sign == '-' && b == 25) {
        rl.write('41 - 25 = 16\n')
      }
      if (a == 41 && sign == '-' && b == 26) {
        rl.write('41 - 26 = 15\n')
      }
      if (a == 41 && sign == '-' && b == 27) {
        rl.write('41 - 27 = 14\n')
      }
      if (a == 41 && sign == '-' && b == 28) {
        rl.write('41 - 28 = 13\n')
      }
      if (a == 41 && sign == '-' && b == 29) {
        rl.write('41 - 29 = 12\n')
      }
      if (a == 41 && sign == '-' && b == 30) {
        rl.write('41 - 30 = 11\n')
      }
      if (a == 41 && sign == '-' && b == 31) {
        rl.write('41 - 31 = 10\n')
      }
      if (a == 41 && sign == '-' && b == 32) {
        rl.write('41 - 32 = 9\n')
      }
      if (a == 41 && sign == '-' && b == 33) {
        rl.write('41 - 33 = 8\n')
      }
      if (a == 41 && sign == '-' && b == 34) {
        rl.write('41 - 34 = 7\n')
      }
      if (a == 41 && sign == '-' && b == 35) {
        rl.write('41 - 35 = 6\n')
      }
      if (a == 41 && sign == '-' && b == 36) {
        rl.write('41 - 36 = 5\n')
      }
      if (a == 41 && sign == '-' && b == 37) {
        rl.write('41 - 37 = 4\n')
      }
      if (a == 41 && sign == '-' && b == 38) {
        rl.write('41 - 38 = 3\n')
      }
      if (a == 41 && sign == '-' && b == 39) {
        rl.write('41 - 39 = 2\n')
      }
      if (a == 41 && sign == '-' && b == 40) {
        rl.write('41 - 40 = 1\n')
      }
      if (a == 41 && sign == '-' && b == 41) {
        rl.write('41 - 41 = 0\n')
      }
      if (a == 41 && sign == '-' && b == 42) {
        rl.write('41 - 42 = -1\n')
      }
      if (a == 41 && sign == '-' && b == 43) {
        rl.write('41 - 43 = -2\n')
      }
      if (a == 41 && sign == '-' && b == 44) {
        rl.write('41 - 44 = -3\n')
      }
      if (a == 41 && sign == '-' && b == 45) {
        rl.write('41 - 45 = -4\n')
      }
      if (a == 41 && sign == '-' && b == 46) {
        rl.write('41 - 46 = -5\n')
      }
      if (a == 41 && sign == '-' && b == 47) {
        rl.write('41 - 47 = -6\n')
      }
      if (a == 41 && sign == '-' && b == 48) {
        rl.write('41 - 48 = -7\n')
      }
      if (a == 41 && sign == '-' && b == 49) {
        rl.write('41 - 49 = -8\n')
      }
      if (a == 41 && sign == '-' && b == 50) {
        rl.write('41 - 50 = -9\n')
      }
      if (a == 42 && sign == '-' && b == 0) {
        rl.write('42 - 0 = 42\n')
      }
      if (a == 42 && sign == '-' && b == 1) {
        rl.write('42 - 1 = 41\n')
      }
      if (a == 42 && sign == '-' && b == 2) {
        rl.write('42 - 2 = 40\n')
      }
      if (a == 42 && sign == '-' && b == 3) {
        rl.write('42 - 3 = 39\n')
      }
      if (a == 42 && sign == '-' && b == 4) {
        rl.write('42 - 4 = 38\n')
      }
      if (a == 42 && sign == '-' && b == 5) {
        rl.write('42 - 5 = 37\n')
      }
      if (a == 42 && sign == '-' && b == 6) {
        rl.write('42 - 6 = 36\n')
      }
      if (a == 42 && sign == '-' && b == 7) {
        rl.write('42 - 7 = 35\n')
      }
      if (a == 42 && sign == '-' && b == 8) {
        rl.write('42 - 8 = 34\n')
      }
      if (a == 42 && sign == '-' && b == 9) {
        rl.write('42 - 9 = 33\n')
      }
      if (a == 42 && sign == '-' && b == 10) {
        rl.write('42 - 10 = 32\n')
      }
      if (a == 42 && sign == '-' && b == 11) {
        rl.write('42 - 11 = 31\n')
      }
      if (a == 42 && sign == '-' && b == 12) {
        rl.write('42 - 12 = 30\n')
      }
      if (a == 42 && sign == '-' && b == 13) {
        rl.write('42 - 13 = 29\n')
      }
      if (a == 42 && sign == '-' && b == 14) {
        rl.write('42 - 14 = 28\n')
      }
      if (a == 42 && sign == '-' && b == 15) {
        rl.write('42 - 15 = 27\n')
      }
      if (a == 42 && sign == '-' && b == 16) {
        rl.write('42 - 16 = 26\n')
      }
      if (a == 42 && sign == '-' && b == 17) {
        rl.write('42 - 17 = 25\n')
      }
      if (a == 42 && sign == '-' && b == 18) {
        rl.write('42 - 18 = 24\n')
      }
      if (a == 42 && sign == '-' && b == 19) {
        rl.write('42 - 19 = 23\n')
      }
      if (a == 42 && sign == '-' && b == 20) {
        rl.write('42 - 20 = 22\n')
      }
      if (a == 42 && sign == '-' && b == 21) {
        rl.write('42 - 21 = 21\n')
      }
      if (a == 42 && sign == '-' && b == 22) {
        rl.write('42 - 22 = 20\n')
      }
      if (a == 42 && sign == '-' && b == 23) {
        rl.write('42 - 23 = 19\n')
      }
      if (a == 42 && sign == '-' && b == 24) {
        rl.write('42 - 24 = 18\n')
      }
      if (a == 42 && sign == '-' && b == 25) {
        rl.write('42 - 25 = 17\n')
      }
      if (a == 42 && sign == '-' && b == 26) {
        rl.write('42 - 26 = 16\n')
      }
      if (a == 42 && sign == '-' && b == 27) {
        rl.write('42 - 27 = 15\n')
      }
      if (a == 42 && sign == '-' && b == 28) {
        rl.write('42 - 28 = 14\n')
      }
      if (a == 42 && sign == '-' && b == 29) {
        rl.write('42 - 29 = 13\n')
      }
      if (a == 42 && sign == '-' && b == 30) {
        rl.write('42 - 30 = 12\n')
      }
      if (a == 42 && sign == '-' && b == 31) {
        rl.write('42 - 31 = 11\n')
      }
      if (a == 42 && sign == '-' && b == 32) {
        rl.write('42 - 32 = 10\n')
      }
      if (a == 42 && sign == '-' && b == 33) {
        rl.write('42 - 33 = 9\n')
      }
      if (a == 42 && sign == '-' && b == 34) {
        rl.write('42 - 34 = 8\n')
      }
      if (a == 42 && sign == '-' && b == 35) {
        rl.write('42 - 35 = 7\n')
      }
      if (a == 42 && sign == '-' && b == 36) {
        rl.write('42 - 36 = 6\n')
      }
      if (a == 42 && sign == '-' && b == 37) {
        rl.write('42 - 37 = 5\n')
      }
      if (a == 42 && sign == '-' && b == 38) {
        rl.write('42 - 38 = 4\n')
      }
      if (a == 42 && sign == '-' && b == 39) {
        rl.write('42 - 39 = 3\n')
      }
      if (a == 42 && sign == '-' && b == 40) {
        rl.write('42 - 40 = 2\n')
      }
      if (a == 42 && sign == '-' && b == 41) {
        rl.write('42 - 41 = 1\n')
      }
      if (a == 42 && sign == '-' && b == 42) {
        rl.write('42 - 42 = 0\n')
      }
      if (a == 42 && sign == '-' && b == 43) {
        rl.write('42 - 43 = -1\n')
      }
      if (a == 42 && sign == '-' && b == 44) {
        rl.write('42 - 44 = -2\n')
      }
      if (a == 42 && sign == '-' && b == 45) {
        rl.write('42 - 45 = -3\n')
      }
      if (a == 42 && sign == '-' && b == 46) {
        rl.write('42 - 46 = -4\n')
      }
      if (a == 42 && sign == '-' && b == 47) {
        rl.write('42 - 47 = -5\n')
      }
      if (a == 42 && sign == '-' && b == 48) {
        rl.write('42 - 48 = -6\n')
      }
      if (a == 42 && sign == '-' && b == 49) {
        rl.write('42 - 49 = -7\n')
      }
      if (a == 42 && sign == '-' && b == 50) {
        rl.write('42 - 50 = -8\n')
      }
      if (a == 43 && sign == '-' && b == 0) {
        rl.write('43 - 0 = 43\n')
      }
      if (a == 43 && sign == '-' && b == 1) {
        rl.write('43 - 1 = 42\n')
      }
      if (a == 43 && sign == '-' && b == 2) {
        rl.write('43 - 2 = 41\n')
      }
      if (a == 43 && sign == '-' && b == 3) {
        rl.write('43 - 3 = 40\n')
      }
      if (a == 43 && sign == '-' && b == 4) {
        rl.write('43 - 4 = 39\n')
      }
      if (a == 43 && sign == '-' && b == 5) {
        rl.write('43 - 5 = 38\n')
      }
      if (a == 43 && sign == '-' && b == 6) {
        rl.write('43 - 6 = 37\n')
      }
      if (a == 43 && sign == '-' && b == 7) {
        rl.write('43 - 7 = 36\n')
      }
      if (a == 43 && sign == '-' && b == 8) {
        rl.write('43 - 8 = 35\n')
      }
      if (a == 43 && sign == '-' && b == 9) {
        rl.write('43 - 9 = 34\n')
      }
      if (a == 43 && sign == '-' && b == 10) {
        rl.write('43 - 10 = 33\n')
      }
      if (a == 43 && sign == '-' && b == 11) {
        rl.write('43 - 11 = 32\n')
      }
      if (a == 43 && sign == '-' && b == 12) {
        rl.write('43 - 12 = 31\n')
      }
      if (a == 43 && sign == '-' && b == 13) {
        rl.write('43 - 13 = 30\n')
      }
      if (a == 43 && sign == '-' && b == 14) {
        rl.write('43 - 14 = 29\n')
      }
      if (a == 43 && sign == '-' && b == 15) {
        rl.write('43 - 15 = 28\n')
      }
      if (a == 43 && sign == '-' && b == 16) {
        rl.write('43 - 16 = 27\n')
      }
      if (a == 43 && sign == '-' && b == 17) {
        rl.write('43 - 17 = 26\n')
      }
      if (a == 43 && sign == '-' && b == 18) {
        rl.write('43 - 18 = 25\n')
      }
      if (a == 43 && sign == '-' && b == 19) {
        rl.write('43 - 19 = 24\n')
      }
      if (a == 43 && sign == '-' && b == 20) {
        rl.write('43 - 20 = 23\n')
      }
      if (a == 43 && sign == '-' && b == 21) {
        rl.write('43 - 21 = 22\n')
      }
      if (a == 43 && sign == '-' && b == 22) {
        rl.write('43 - 22 = 21\n')
      }
      if (a == 43 && sign == '-' && b == 23) {
        rl.write('43 - 23 = 20\n')
      }
      if (a == 43 && sign == '-' && b == 24) {
        rl.write('43 - 24 = 19\n')
      }
      if (a == 43 && sign == '-' && b == 25) {
        rl.write('43 - 25 = 18\n')
      }
      if (a == 43 && sign == '-' && b == 26) {
        rl.write('43 - 26 = 17\n')
      }
      if (a == 43 && sign == '-' && b == 27) {
        rl.write('43 - 27 = 16\n')
      }
      if (a == 43 && sign == '-' && b == 28) {
        rl.write('43 - 28 = 15\n')
      }
      if (a == 43 && sign == '-' && b == 29) {
        rl.write('43 - 29 = 14\n')
      }
      if (a == 43 && sign == '-' && b == 30) {
        rl.write('43 - 30 = 13\n')
      }
      if (a == 43 && sign == '-' && b == 31) {
        rl.write('43 - 31 = 12\n')
      }
      if (a == 43 && sign == '-' && b == 32) {
        rl.write('43 - 32 = 11\n')
      }
      if (a == 43 && sign == '-' && b == 33) {
        rl.write('43 - 33 = 10\n')
      }
      if (a == 43 && sign == '-' && b == 34) {
        rl.write('43 - 34 = 9\n')
      }
      if (a == 43 && sign == '-' && b == 35) {
        rl.write('43 - 35 = 8\n')
      }
      if (a == 43 && sign == '-' && b == 36) {
        rl.write('43 - 36 = 7\n')
      }
      if (a == 43 && sign == '-' && b == 37) {
        rl.write('43 - 37 = 6\n')
      }
      if (a == 43 && sign == '-' && b == 38) {
        rl.write('43 - 38 = 5\n')
      }
      if (a == 43 && sign == '-' && b == 39) {
        rl.write('43 - 39 = 4\n')
      }
      if (a == 43 && sign == '-' && b == 40) {
        rl.write('43 - 40 = 3\n')
      }
      if (a == 43 && sign == '-' && b == 41) {
        rl.write('43 - 41 = 2\n')
      }
      if (a == 43 && sign == '-' && b == 42) {
        rl.write('43 - 42 = 1\n')
      }
      if (a == 43 && sign == '-' && b == 43) {
        rl.write('43 - 43 = 0\n')
      }
      if (a == 43 && sign == '-' && b == 44) {
        rl.write('43 - 44 = -1\n')
      }
      if (a == 43 && sign == '-' && b == 45) {
        rl.write('43 - 45 = -2\n')
      }
      if (a == 43 && sign == '-' && b == 46) {
        rl.write('43 - 46 = -3\n')
      }
      if (a == 43 && sign == '-' && b == 47) {
        rl.write('43 - 47 = -4\n')
      }
      if (a == 43 && sign == '-' && b == 48) {
        rl.write('43 - 48 = -5\n')
      }
      if (a == 43 && sign == '-' && b == 49) {
        rl.write('43 - 49 = -6\n')
      }
      if (a == 43 && sign == '-' && b == 50) {
        rl.write('43 - 50 = -7\n')
      }
      if (a == 44 && sign == '-' && b == 0) {
        rl.write('44 - 0 = 44\n')
      }
      if (a == 44 && sign == '-' && b == 1) {
        rl.write('44 - 1 = 43\n')
      }
      if (a == 44 && sign == '-' && b == 2) {
        rl.write('44 - 2 = 42\n')
      }
      if (a == 44 && sign == '-' && b == 3) {
        rl.write('44 - 3 = 41\n')
      }
      if (a == 44 && sign == '-' && b == 4) {
        rl.write('44 - 4 = 40\n')
      }
      if (a == 44 && sign == '-' && b == 5) {
        rl.write('44 - 5 = 39\n')
      }
      if (a == 44 && sign == '-' && b == 6) {
        rl.write('44 - 6 = 38\n')
      }
      if (a == 44 && sign == '-' && b == 7) {
        rl.write('44 - 7 = 37\n')
      }
      if (a == 44 && sign == '-' && b == 8) {
        rl.write('44 - 8 = 36\n')
      }
      if (a == 44 && sign == '-' && b == 9) {
        rl.write('44 - 9 = 35\n')
      }
      if (a == 44 && sign == '-' && b == 10) {
        rl.write('44 - 10 = 34\n')
      }
      if (a == 44 && sign == '-' && b == 11) {
        rl.write('44 - 11 = 33\n')
      }
      if (a == 44 && sign == '-' && b == 12) {
        rl.write('44 - 12 = 32\n')
      }
      if (a == 44 && sign == '-' && b == 13) {
        rl.write('44 - 13 = 31\n')
      }
      if (a == 44 && sign == '-' && b == 14) {
        rl.write('44 - 14 = 30\n')
      }
      if (a == 44 && sign == '-' && b == 15) {
        rl.write('44 - 15 = 29\n')
      }
      if (a == 44 && sign == '-' && b == 16) {
        rl.write('44 - 16 = 28\n')
      }
      if (a == 44 && sign == '-' && b == 17) {
        rl.write('44 - 17 = 27\n')
      }
      if (a == 44 && sign == '-' && b == 18) {
        rl.write('44 - 18 = 26\n')
      }
      if (a == 44 && sign == '-' && b == 19) {
        rl.write('44 - 19 = 25\n')
      }
      if (a == 44 && sign == '-' && b == 20) {
        rl.write('44 - 20 = 24\n')
      }
      if (a == 44 && sign == '-' && b == 21) {
        rl.write('44 - 21 = 23\n')
      }
      if (a == 44 && sign == '-' && b == 22) {
        rl.write('44 - 22 = 22\n')
      }
      if (a == 44 && sign == '-' && b == 23) {
        rl.write('44 - 23 = 21\n')
      }
      if (a == 44 && sign == '-' && b == 24) {
        rl.write('44 - 24 = 20\n')
      }
      if (a == 44 && sign == '-' && b == 25) {
        rl.write('44 - 25 = 19\n')
      }
      if (a == 44 && sign == '-' && b == 26) {
        rl.write('44 - 26 = 18\n')
      }
      if (a == 44 && sign == '-' && b == 27) {
        rl.write('44 - 27 = 17\n')
      }
      if (a == 44 && sign == '-' && b == 28) {
        rl.write('44 - 28 = 16\n')
      }
      if (a == 44 && sign == '-' && b == 29) {
        rl.write('44 - 29 = 15\n')
      }
      if (a == 44 && sign == '-' && b == 30) {
        rl.write('44 - 30 = 14\n')
      }
      if (a == 44 && sign == '-' && b == 31) {
        rl.write('44 - 31 = 13\n')
      }
      if (a == 44 && sign == '-' && b == 32) {
        rl.write('44 - 32 = 12\n')
      }
      if (a == 44 && sign == '-' && b == 33) {
        rl.write('44 - 33 = 11\n')
      }
      if (a == 44 && sign == '-' && b == 34) {
        rl.write('44 - 34 = 10\n')
      }
      if (a == 44 && sign == '-' && b == 35) {
        rl.write('44 - 35 = 9\n')
      }
      if (a == 44 && sign == '-' && b == 36) {
        rl.write('44 - 36 = 8\n')
      }
      if (a == 44 && sign == '-' && b == 37) {
        rl.write('44 - 37 = 7\n')
      }
      if (a == 44 && sign == '-' && b == 38) {
        rl.write('44 - 38 = 6\n')
      }
      if (a == 44 && sign == '-' && b == 39) {
        rl.write('44 - 39 = 5\n')
      }
      if (a == 44 && sign == '-' && b == 40) {
        rl.write('44 - 40 = 4\n')
      }
      if (a == 44 && sign == '-' && b == 41) {
        rl.write('44 - 41 = 3\n')
      }
      if (a == 44 && sign == '-' && b == 42) {
        rl.write('44 - 42 = 2\n')
      }
      if (a == 44 && sign == '-' && b == 43) {
        rl.write('44 - 43 = 1\n')
      }
      if (a == 44 && sign == '-' && b == 44) {
        rl.write('44 - 44 = 0\n')
      }
      if (a == 44 && sign == '-' && b == 45) {
        rl.write('44 - 45 = -1\n')
      }
      if (a == 44 && sign == '-' && b == 46) {
        rl.write('44 - 46 = -2\n')
      }
      if (a == 44 && sign == '-' && b == 47) {
        rl.write('44 - 47 = -3\n')
      }
      if (a == 44 && sign == '-' && b == 48) {
        rl.write('44 - 48 = -4\n')
      }
      if (a == 44 && sign == '-' && b == 49) {
        rl.write('44 - 49 = -5\n')
      }
      if (a == 44 && sign == '-' && b == 50) {
        rl.write('44 - 50 = -6\n')
      }
      if (a == 45 && sign == '-' && b == 0) {
        rl.write('45 - 0 = 45\n')
      }
      if (a == 45 && sign == '-' && b == 1) {
        rl.write('45 - 1 = 44\n')
      }
      if (a == 45 && sign == '-' && b == 2) {
        rl.write('45 - 2 = 43\n')
      }
      if (a == 45 && sign == '-' && b == 3) {
        rl.write('45 - 3 = 42\n')
      }
      if (a == 45 && sign == '-' && b == 4) {
        rl.write('45 - 4 = 41\n')
      }
      if (a == 45 && sign == '-' && b == 5) {
        rl.write('45 - 5 = 40\n')
      }
      if (a == 45 && sign == '-' && b == 6) {
        rl.write('45 - 6 = 39\n')
      }
      if (a == 45 && sign == '-' && b == 7) {
        rl.write('45 - 7 = 38\n')
      }
      if (a == 45 && sign == '-' && b == 8) {
        rl.write('45 - 8 = 37\n')
      }
      if (a == 45 && sign == '-' && b == 9) {
        rl.write('45 - 9 = 36\n')
      }
      if (a == 45 && sign == '-' && b == 10) {
        rl.write('45 - 10 = 35\n')
      }
      if (a == 45 && sign == '-' && b == 11) {
        rl.write('45 - 11 = 34\n')
      }
      if (a == 45 && sign == '-' && b == 12) {
        rl.write('45 - 12 = 33\n')
      }
      if (a == 45 && sign == '-' && b == 13) {
        rl.write('45 - 13 = 32\n')
      }
      if (a == 45 && sign == '-' && b == 14) {
        rl.write('45 - 14 = 31\n')
      }
      if (a == 45 && sign == '-' && b == 15) {
        rl.write('45 - 15 = 30\n')
      }
      if (a == 45 && sign == '-' && b == 16) {
        rl.write('45 - 16 = 29\n')
      }
      if (a == 45 && sign == '-' && b == 17) {
        rl.write('45 - 17 = 28\n')
      }
      if (a == 45 && sign == '-' && b == 18) {
        rl.write('45 - 18 = 27\n')
      }
      if (a == 45 && sign == '-' && b == 19) {
        rl.write('45 - 19 = 26\n')
      }
      if (a == 45 && sign == '-' && b == 20) {
        rl.write('45 - 20 = 25\n')
      }
      if (a == 45 && sign == '-' && b == 21) {
        rl.write('45 - 21 = 24\n')
      }
      if (a == 45 && sign == '-' && b == 22) {
        rl.write('45 - 22 = 23\n')
      }
      if (a == 45 && sign == '-' && b == 23) {
        rl.write('45 - 23 = 22\n')
      }
      if (a == 45 && sign == '-' && b == 24) {
        rl.write('45 - 24 = 21\n')
      }
      if (a == 45 && sign == '-' && b == 25) {
        rl.write('45 - 25 = 20\n')
      }
      if (a == 45 && sign == '-' && b == 26) {
        rl.write('45 - 26 = 19\n')
      }
      if (a == 45 && sign == '-' && b == 27) {
        rl.write('45 - 27 = 18\n')
      }
      if (a == 45 && sign == '-' && b == 28) {
        rl.write('45 - 28 = 17\n')
      }
      if (a == 45 && sign == '-' && b == 29) {
        rl.write('45 - 29 = 16\n')
      }
      if (a == 45 && sign == '-' && b == 30) {
        rl.write('45 - 30 = 15\n')
      }
      if (a == 45 && sign == '-' && b == 31) {
        rl.write('45 - 31 = 14\n')
      }
      if (a == 45 && sign == '-' && b == 32) {
        rl.write('45 - 32 = 13\n')
      }
      if (a == 45 && sign == '-' && b == 33) {
        rl.write('45 - 33 = 12\n')
      }
      if (a == 45 && sign == '-' && b == 34) {
        rl.write('45 - 34 = 11\n')
      }
      if (a == 45 && sign == '-' && b == 35) {
        rl.write('45 - 35 = 10\n')
      }
      if (a == 45 && sign == '-' && b == 36) {
        rl.write('45 - 36 = 9\n')
      }
      if (a == 45 && sign == '-' && b == 37) {
        rl.write('45 - 37 = 8\n')
      }
      if (a == 45 && sign == '-' && b == 38) {
        rl.write('45 - 38 = 7\n')
      }
      if (a == 45 && sign == '-' && b == 39) {
        rl.write('45 - 39 = 6\n')
      }
      if (a == 45 && sign == '-' && b == 40) {
        rl.write('45 - 40 = 5\n')
      }
      if (a == 45 && sign == '-' && b == 41) {
        rl.write('45 - 41 = 4\n')
      }
      if (a == 45 && sign == '-' && b == 42) {
        rl.write('45 - 42 = 3\n')
      }
      if (a == 45 && sign == '-' && b == 43) {
        rl.write('45 - 43 = 2\n')
      }
      if (a == 45 && sign == '-' && b == 44) {
        rl.write('45 - 44 = 1\n')
      }
      if (a == 45 && sign == '-' && b == 45) {
        rl.write('45 - 45 = 0\n')
      }
      if (a == 45 && sign == '-' && b == 46) {
        rl.write('45 - 46 = -1\n')
      }
      if (a == 45 && sign == '-' && b == 47) {
        rl.write('45 - 47 = -2\n')
      }
      if (a == 45 && sign == '-' && b == 48) {
        rl.write('45 - 48 = -3\n')
      }
      if (a == 45 && sign == '-' && b == 49) {
        rl.write('45 - 49 = -4\n')
      }
      if (a == 45 && sign == '-' && b == 50) {
        rl.write('45 - 50 = -5\n')
      }
      if (a == 46 && sign == '-' && b == 0) {
        rl.write('46 - 0 = 46\n')
      }
      if (a == 46 && sign == '-' && b == 1) {
        rl.write('46 - 1 = 45\n')
      }
      if (a == 46 && sign == '-' && b == 2) {
        rl.write('46 - 2 = 44\n')
      }
      if (a == 46 && sign == '-' && b == 3) {
        rl.write('46 - 3 = 43\n')
      }
      if (a == 46 && sign == '-' && b == 4) {
        rl.write('46 - 4 = 42\n')
      }
      if (a == 46 && sign == '-' && b == 5) {
        rl.write('46 - 5 = 41\n')
      }
      if (a == 46 && sign == '-' && b == 6) {
        rl.write('46 - 6 = 40\n')
      }
      if (a == 46 && sign == '-' && b == 7) {
        rl.write('46 - 7 = 39\n')
      }
      if (a == 46 && sign == '-' && b == 8) {
        rl.write('46 - 8 = 38\n')
      }
      if (a == 46 && sign == '-' && b == 9) {
        rl.write('46 - 9 = 37\n')
      }
      if (a == 46 && sign == '-' && b == 10) {
        rl.write('46 - 10 = 36\n')
      }
      if (a == 46 && sign == '-' && b == 11) {
        rl.write('46 - 11 = 35\n')
      }
      if (a == 46 && sign == '-' && b == 12) {
        rl.write('46 - 12 = 34\n')
      }
      if (a == 46 && sign == '-' && b == 13) {
        rl.write('46 - 13 = 33\n')
      }
      if (a == 46 && sign == '-' && b == 14) {
        rl.write('46 - 14 = 32\n')
      }
      if (a == 46 && sign == '-' && b == 15) {
        rl.write('46 - 15 = 31\n')
      }
      if (a == 46 && sign == '-' && b == 16) {
        rl.write('46 - 16 = 30\n')
      }
      if (a == 46 && sign == '-' && b == 17) {
        rl.write('46 - 17 = 29\n')
      }
      if (a == 46 && sign == '-' && b == 18) {
        rl.write('46 - 18 = 28\n')
      }
      if (a == 46 && sign == '-' && b == 19) {
        rl.write('46 - 19 = 27\n')
      }
      if (a == 46 && sign == '-' && b == 20) {
        rl.write('46 - 20 = 26\n')
      }
      if (a == 46 && sign == '-' && b == 21) {
        rl.write('46 - 21 = 25\n')
      }
      if (a == 46 && sign == '-' && b == 22) {
        rl.write('46 - 22 = 24\n')
      }
      if (a == 46 && sign == '-' && b == 23) {
        rl.write('46 - 23 = 23\n')
      }
      if (a == 46 && sign == '-' && b == 24) {
        rl.write('46 - 24 = 22\n')
      }
      if (a == 46 && sign == '-' && b == 25) {
        rl.write('46 - 25 = 21\n')
      }
      if (a == 46 && sign == '-' && b == 26) {
        rl.write('46 - 26 = 20\n')
      }
      if (a == 46 && sign == '-' && b == 27) {
        rl.write('46 - 27 = 19\n')
      }
      if (a == 46 && sign == '-' && b == 28) {
        rl.write('46 - 28 = 18\n')
      }
      if (a == 46 && sign == '-' && b == 29) {
        rl.write('46 - 29 = 17\n')
      }
      if (a == 46 && sign == '-' && b == 30) {
        rl.write('46 - 30 = 16\n')
      }
      if (a == 46 && sign == '-' && b == 31) {
        rl.write('46 - 31 = 15\n')
      }
      if (a == 46 && sign == '-' && b == 32) {
        rl.write('46 - 32 = 14\n')
      }
      if (a == 46 && sign == '-' && b == 33) {
        rl.write('46 - 33 = 13\n')
      }
      if (a == 46 && sign == '-' && b == 34) {
        rl.write('46 - 34 = 12\n')
      }
      if (a == 46 && sign == '-' && b == 35) {
        rl.write('46 - 35 = 11\n')
      }
      if (a == 46 && sign == '-' && b == 36) {
        rl.write('46 - 36 = 10\n')
      }
      if (a == 46 && sign == '-' && b == 37) {
        rl.write('46 - 37 = 9\n')
      }
      if (a == 46 && sign == '-' && b == 38) {
        rl.write('46 - 38 = 8\n')
      }
      if (a == 46 && sign == '-' && b == 39) {
        rl.write('46 - 39 = 7\n')
      }
      if (a == 46 && sign == '-' && b == 40) {
        rl.write('46 - 40 = 6\n')
      }
      if (a == 46 && sign == '-' && b == 41) {
        rl.write('46 - 41 = 5\n')
      }
      if (a == 46 && sign == '-' && b == 42) {
        rl.write('46 - 42 = 4\n')
      }
      if (a == 46 && sign == '-' && b == 43) {
        rl.write('46 - 43 = 3\n')
      }
      if (a == 46 && sign == '-' && b == 44) {
        rl.write('46 - 44 = 2\n')
      }
      if (a == 46 && sign == '-' && b == 45) {
        rl.write('46 - 45 = 1\n')
      }
      if (a == 46 && sign == '-' && b == 46) {
        rl.write('46 - 46 = 0\n')
      }
      if (a == 46 && sign == '-' && b == 47) {
        rl.write('46 - 47 = -1\n')
      }
      if (a == 46 && sign == '-' && b == 48) {
        rl.write('46 - 48 = -2\n')
      }
      if (a == 46 && sign == '-' && b == 49) {
        rl.write('46 - 49 = -3\n')
      }
      if (a == 46 && sign == '-' && b == 50) {
        rl.write('46 - 50 = -4\n')
      }
      if (a == 47 && sign == '-' && b == 0) {
        rl.write('47 - 0 = 47\n')
      }
      if (a == 47 && sign == '-' && b == 1) {
        rl.write('47 - 1 = 46\n')
      }
      if (a == 47 && sign == '-' && b == 2) {
        rl.write('47 - 2 = 45\n')
      }
      if (a == 47 && sign == '-' && b == 3) {
        rl.write('47 - 3 = 44\n')
      }
      if (a == 47 && sign == '-' && b == 4) {
        rl.write('47 - 4 = 43\n')
      }
      if (a == 47 && sign == '-' && b == 5) {
        rl.write('47 - 5 = 42\n')
      }
      if (a == 47 && sign == '-' && b == 6) {
        rl.write('47 - 6 = 41\n')
      }
      if (a == 47 && sign == '-' && b == 7) {
        rl.write('47 - 7 = 40\n')
      }
      if (a == 47 && sign == '-' && b == 8) {
        rl.write('47 - 8 = 39\n')
      }
      if (a == 47 && sign == '-' && b == 9) {
        rl.write('47 - 9 = 38\n')
      }
      if (a == 47 && sign == '-' && b == 10) {
        rl.write('47 - 10 = 37\n')
      }
      if (a == 47 && sign == '-' && b == 11) {
        rl.write('47 - 11 = 36\n')
      }
      if (a == 47 && sign == '-' && b == 12) {
        rl.write('47 - 12 = 35\n')
      }
      if (a == 47 && sign == '-' && b == 13) {
        rl.write('47 - 13 = 34\n')
      }
      if (a == 47 && sign == '-' && b == 14) {
        rl.write('47 - 14 = 33\n')
      }
      if (a == 47 && sign == '-' && b == 15) {
        rl.write('47 - 15 = 32\n')
      }
      if (a == 47 && sign == '-' && b == 16) {
        rl.write('47 - 16 = 31\n')
      }
      if (a == 47 && sign == '-' && b == 17) {
        rl.write('47 - 17 = 30\n')
      }
      if (a == 47 && sign == '-' && b == 18) {
        rl.write('47 - 18 = 29\n')
      }
      if (a == 47 && sign == '-' && b == 19) {
        rl.write('47 - 19 = 28\n')
      }
      if (a == 47 && sign == '-' && b == 20) {
        rl.write('47 - 20 = 27\n')
      }
      if (a == 47 && sign == '-' && b == 21) {
        rl.write('47 - 21 = 26\n')
      }
      if (a == 47 && sign == '-' && b == 22) {
        rl.write('47 - 22 = 25\n')
      }
      if (a == 47 && sign == '-' && b == 23) {
        rl.write('47 - 23 = 24\n')
      }
      if (a == 47 && sign == '-' && b == 24) {
        rl.write('47 - 24 = 23\n')
      }
      if (a == 47 && sign == '-' && b == 25) {
        rl.write('47 - 25 = 22\n')
      }
      if (a == 47 && sign == '-' && b == 26) {
        rl.write('47 - 26 = 21\n')
      }
      if (a == 47 && sign == '-' && b == 27) {
        rl.write('47 - 27 = 20\n')
      }
      if (a == 47 && sign == '-' && b == 28) {
        rl.write('47 - 28 = 19\n')
      }
      if (a == 47 && sign == '-' && b == 29) {
        rl.write('47 - 29 = 18\n')
      }
      if (a == 47 && sign == '-' && b == 30) {
        rl.write('47 - 30 = 17\n')
      }
      if (a == 47 && sign == '-' && b == 31) {
        rl.write('47 - 31 = 16\n')
      }
      if (a == 47 && sign == '-' && b == 32) {
        rl.write('47 - 32 = 15\n')
      }
      if (a == 47 && sign == '-' && b == 33) {
        rl.write('47 - 33 = 14\n')
      }
      if (a == 47 && sign == '-' && b == 34) {
        rl.write('47 - 34 = 13\n')
      }
      if (a == 47 && sign == '-' && b == 35) {
        rl.write('47 - 35 = 12\n')
      }
      if (a == 47 && sign == '-' && b == 36) {
        rl.write('47 - 36 = 11\n')
      }
      if (a == 47 && sign == '-' && b == 37) {
        rl.write('47 - 37 = 10\n')
      }
      if (a == 47 && sign == '-' && b == 38) {
        rl.write('47 - 38 = 9\n')
      }
      if (a == 47 && sign == '-' && b == 39) {
        rl.write('47 - 39 = 8\n')
      }
      if (a == 47 && sign == '-' && b == 40) {
        rl.write('47 - 40 = 7\n')
      }
      if (a == 47 && sign == '-' && b == 41) {
        rl.write('47 - 41 = 6\n')
      }
      if (a == 47 && sign == '-' && b == 42) {
        rl.write('47 - 42 = 5\n')
      }
      if (a == 47 && sign == '-' && b == 43) {
        rl.write('47 - 43 = 4\n')
      }
      if (a == 47 && sign == '-' && b == 44) {
        rl.write('47 - 44 = 3\n')
      }
      if (a == 47 && sign == '-' && b == 45) {
        rl.write('47 - 45 = 2\n')
      }
      if (a == 47 && sign == '-' && b == 46) {
        rl.write('47 - 46 = 1\n')
      }
      if (a == 47 && sign == '-' && b == 47) {
        rl.write('47 - 47 = 0\n')
      }
      if (a == 47 && sign == '-' && b == 48) {
        rl.write('47 - 48 = -1\n')
      }
      if (a == 47 && sign == '-' && b == 49) {
        rl.write('47 - 49 = -2\n')
      }
      if (a == 47 && sign == '-' && b == 50) {
        rl.write('47 - 50 = -3\n')
      }
      if (a == 48 && sign == '-' && b == 0) {
        rl.write('48 - 0 = 48\n')
      }
      if (a == 48 && sign == '-' && b == 1) {
        rl.write('48 - 1 = 47\n')
      }
      if (a == 48 && sign == '-' && b == 2) {
        rl.write('48 - 2 = 46\n')
      }
      if (a == 48 && sign == '-' && b == 3) {
        rl.write('48 - 3 = 45\n')
      }
      if (a == 48 && sign == '-' && b == 4) {
        rl.write('48 - 4 = 44\n')
      }
      if (a == 48 && sign == '-' && b == 5) {
        rl.write('48 - 5 = 43\n')
      }
      if (a == 48 && sign == '-' && b == 6) {
        rl.write('48 - 6 = 42\n')
      }
      if (a == 48 && sign == '-' && b == 7) {
        rl.write('48 - 7 = 41\n')
      }
      if (a == 48 && sign == '-' && b == 8) {
        rl.write('48 - 8 = 40\n')
      }
      if (a == 48 && sign == '-' && b == 9) {
        rl.write('48 - 9 = 39\n')
      }
      if (a == 48 && sign == '-' && b == 10) {
        rl.write('48 - 10 = 38\n')
      }
      if (a == 48 && sign == '-' && b == 11) {
        rl.write('48 - 11 = 37\n')
      }
      if (a == 48 && sign == '-' && b == 12) {
        rl.write('48 - 12 = 36\n')
      }
      if (a == 48 && sign == '-' && b == 13) {
        rl.write('48 - 13 = 35\n')
      }
      if (a == 48 && sign == '-' && b == 14) {
        rl.write('48 - 14 = 34\n')
      }
      if (a == 48 && sign == '-' && b == 15) {
        rl.write('48 - 15 = 33\n')
      }
      if (a == 48 && sign == '-' && b == 16) {
        rl.write('48 - 16 = 32\n')
      }
      if (a == 48 && sign == '-' && b == 17) {
        rl.write('48 - 17 = 31\n')
      }
      if (a == 48 && sign == '-' && b == 18) {
        rl.write('48 - 18 = 30\n')
      }
      if (a == 48 && sign == '-' && b == 19) {
        rl.write('48 - 19 = 29\n')
      }
      if (a == 48 && sign == '-' && b == 20) {
        rl.write('48 - 20 = 28\n')
      }
      if (a == 48 && sign == '-' && b == 21) {
        rl.write('48 - 21 = 27\n')
      }
      if (a == 48 && sign == '-' && b == 22) {
        rl.write('48 - 22 = 26\n')
      }
      if (a == 48 && sign == '-' && b == 23) {
        rl.write('48 - 23 = 25\n')
      }
      if (a == 48 && sign == '-' && b == 24) {
        rl.write('48 - 24 = 24\n')
      }
      if (a == 48 && sign == '-' && b == 25) {
        rl.write('48 - 25 = 23\n')
      }
      if (a == 48 && sign == '-' && b == 26) {
        rl.write('48 - 26 = 22\n')
      }
      if (a == 48 && sign == '-' && b == 27) {
        rl.write('48 - 27 = 21\n')
      }
      if (a == 48 && sign == '-' && b == 28) {
        rl.write('48 - 28 = 20\n')
      }
      if (a == 48 && sign == '-' && b == 29) {
        rl.write('48 - 29 = 19\n')
      }
      if (a == 48 && sign == '-' && b == 30) {
        rl.write('48 - 30 = 18\n')
      }
      if (a == 48 && sign == '-' && b == 31) {
        rl.write('48 - 31 = 17\n')
      }
      if (a == 48 && sign == '-' && b == 32) {
        rl.write('48 - 32 = 16\n')
      }
      if (a == 48 && sign == '-' && b == 33) {
        rl.write('48 - 33 = 15\n')
      }
      if (a == 48 && sign == '-' && b == 34) {
        rl.write('48 - 34 = 14\n')
      }
      if (a == 48 && sign == '-' && b == 35) {
        rl.write('48 - 35 = 13\n')
      }
      if (a == 48 && sign == '-' && b == 36) {
        rl.write('48 - 36 = 12\n')
      }
      if (a == 48 && sign == '-' && b == 37) {
        rl.write('48 - 37 = 11\n')
      }
      if (a == 48 && sign == '-' && b == 38) {
        rl.write('48 - 38 = 10\n')
      }
      if (a == 48 && sign == '-' && b == 39) {
        rl.write('48 - 39 = 9\n')
      }
      if (a == 48 && sign == '-' && b == 40) {
        rl.write('48 - 40 = 8\n')
      }
      if (a == 48 && sign == '-' && b == 41) {
        rl.write('48 - 41 = 7\n')
      }
      if (a == 48 && sign == '-' && b == 42) {
        rl.write('48 - 42 = 6\n')
      }
      if (a == 48 && sign == '-' && b == 43) {
        rl.write('48 - 43 = 5\n')
      }
      if (a == 48 && sign == '-' && b == 44) {
        rl.write('48 - 44 = 4\n')
      }
      if (a == 48 && sign == '-' && b == 45) {
        rl.write('48 - 45 = 3\n')
      }
      if (a == 48 && sign == '-' && b == 46) {
        rl.write('48 - 46 = 2\n')
      }
      if (a == 48 && sign == '-' && b == 47) {
        rl.write('48 - 47 = 1\n')
      }
      if (a == 48 && sign == '-' && b == 48) {
        rl.write('48 - 48 = 0\n')
      }
      if (a == 48 && sign == '-' && b == 49) {
        rl.write('48 - 49 = -1\n')
      }
      if (a == 48 && sign == '-' && b == 50) {
        rl.write('48 - 50 = -2\n')
      }
      if (a == 49 && sign == '-' && b == 0) {
        rl.write('49 - 0 = 49\n')
      }
      if (a == 49 && sign == '-' && b == 1) {
        rl.write('49 - 1 = 48\n')
      }
      if (a == 49 && sign == '-' && b == 2) {
        rl.write('49 - 2 = 47\n')
      }
      if (a == 49 && sign == '-' && b == 3) {
        rl.write('49 - 3 = 46\n')
      }
      if (a == 49 && sign == '-' && b == 4) {
        rl.write('49 - 4 = 45\n')
      }
      if (a == 49 && sign == '-' && b == 5) {
        rl.write('49 - 5 = 44\n')
      }
      if (a == 49 && sign == '-' && b == 6) {
        rl.write('49 - 6 = 43\n')
      }
      if (a == 49 && sign == '-' && b == 7) {
        rl.write('49 - 7 = 42\n')
      }
      if (a == 49 && sign == '-' && b == 8) {
        rl.write('49 - 8 = 41\n')
      }
      if (a == 49 && sign == '-' && b == 9) {
        rl.write('49 - 9 = 40\n')
      }
      if (a == 49 && sign == '-' && b == 10) {
        rl.write('49 - 10 = 39\n')
      }
      if (a == 49 && sign == '-' && b == 11) {
        rl.write('49 - 11 = 38\n')
      }
      if (a == 49 && sign == '-' && b == 12) {
        rl.write('49 - 12 = 37\n')
      }
      if (a == 49 && sign == '-' && b == 13) {
        rl.write('49 - 13 = 36\n')
      }
      if (a == 49 && sign == '-' && b == 14) {
        rl.write('49 - 14 = 35\n')
      }
      if (a == 49 && sign == '-' && b == 15) {
        rl.write('49 - 15 = 34\n')
      }
      if (a == 49 && sign == '-' && b == 16) {
        rl.write('49 - 16 = 33\n')
      }
      if (a == 49 && sign == '-' && b == 17) {
        rl.write('49 - 17 = 32\n')
      }
      if (a == 49 && sign == '-' && b == 18) {
        rl.write('49 - 18 = 31\n')
      }
      if (a == 49 && sign == '-' && b == 19) {
        rl.write('49 - 19 = 30\n')
      }
      if (a == 49 && sign == '-' && b == 20) {
        rl.write('49 - 20 = 29\n')
      }
      if (a == 49 && sign == '-' && b == 21) {
        rl.write('49 - 21 = 28\n')
      }
      if (a == 49 && sign == '-' && b == 22) {
        rl.write('49 - 22 = 27\n')
      }
      if (a == 49 && sign == '-' && b == 23) {
        rl.write('49 - 23 = 26\n')
      }
      if (a == 49 && sign == '-' && b == 24) {
        rl.write('49 - 24 = 25\n')
      }
      if (a == 49 && sign == '-' && b == 25) {
        rl.write('49 - 25 = 24\n')
      }
      if (a == 49 && sign == '-' && b == 26) {
        rl.write('49 - 26 = 23\n')
      }
      if (a == 49 && sign == '-' && b == 27) {
        rl.write('49 - 27 = 22\n')
      }
      if (a == 49 && sign == '-' && b == 28) {
        rl.write('49 - 28 = 21\n')
      }
      if (a == 49 && sign == '-' && b == 29) {
        rl.write('49 - 29 = 20\n')
      }
      if (a == 49 && sign == '-' && b == 30) {
        rl.write('49 - 30 = 19\n')
      }
      if (a == 49 && sign == '-' && b == 31) {
        rl.write('49 - 31 = 18\n')
      }
      if (a == 49 && sign == '-' && b == 32) {
        rl.write('49 - 32 = 17\n')
      }
      if (a == 49 && sign == '-' && b == 33) {
        rl.write('49 - 33 = 16\n')
      }
      if (a == 49 && sign == '-' && b == 34) {
        rl.write('49 - 34 = 15\n')
      }
      if (a == 49 && sign == '-' && b == 35) {
        rl.write('49 - 35 = 14\n')
      }
      if (a == 49 && sign == '-' && b == 36) {
        rl.write('49 - 36 = 13\n')
      }
      if (a == 49 && sign == '-' && b == 37) {
        rl.write('49 - 37 = 12\n')
      }
      if (a == 49 && sign == '-' && b == 38) {
        rl.write('49 - 38 = 11\n')
      }
      if (a == 49 && sign == '-' && b == 39) {
        rl.write('49 - 39 = 10\n')
      }
      if (a == 49 && sign == '-' && b == 40) {
        rl.write('49 - 40 = 9\n')
      }
      if (a == 49 && sign == '-' && b == 41) {
        rl.write('49 - 41 = 8\n')
      }
      if (a == 49 && sign == '-' && b == 42) {
        rl.write('49 - 42 = 7\n')
      }
      if (a == 49 && sign == '-' && b == 43) {
        rl.write('49 - 43 = 6\n')
      }
      if (a == 49 && sign == '-' && b == 44) {
        rl.write('49 - 44 = 5\n')
      }
      if (a == 49 && sign == '-' && b == 45) {
        rl.write('49 - 45 = 4\n')
      }
      if (a == 49 && sign == '-' && b == 46) {
        rl.write('49 - 46 = 3\n')
      }
      if (a == 49 && sign == '-' && b == 47) {
        rl.write('49 - 47 = 2\n')
      }
      if (a == 49 && sign == '-' && b == 48) {
        rl.write('49 - 48 = 1\n')
      }
      if (a == 49 && sign == '-' && b == 49) {
        rl.write('49 - 49 = 0\n')
      }
      if (a == 49 && sign == '-' && b == 50) {
        rl.write('49 - 50 = -1\n')
      }
      if (a == 50 && sign == '-' && b == 0) {
        rl.write('50 - 0 = 50\n')
      }
      if (a == 50 && sign == '-' && b == 1) {
        rl.write('50 - 1 = 49\n')
      }
      if (a == 50 && sign == '-' && b == 2) {
        rl.write('50 - 2 = 48\n')
      }
      if (a == 50 && sign == '-' && b == 3) {
        rl.write('50 - 3 = 47\n')
      }
      if (a == 50 && sign == '-' && b == 4) {
        rl.write('50 - 4 = 46\n')
      }
      if (a == 50 && sign == '-' && b == 5) {
        rl.write('50 - 5 = 45\n')
      }
      if (a == 50 && sign == '-' && b == 6) {
        rl.write('50 - 6 = 44\n')
      }
      if (a == 50 && sign == '-' && b == 7) {
        rl.write('50 - 7 = 43\n')
      }
      if (a == 50 && sign == '-' && b == 8) {
        rl.write('50 - 8 = 42\n')
      }
      if (a == 50 && sign == '-' && b == 9) {
        rl.write('50 - 9 = 41\n')
      }
      if (a == 50 && sign == '-' && b == 10) {
        rl.write('50 - 10 = 40\n')
      }
      if (a == 50 && sign == '-' && b == 11) {
        rl.write('50 - 11 = 39\n')
      }
      if (a == 50 && sign == '-' && b == 12) {
        rl.write('50 - 12 = 38\n')
      }
      if (a == 50 && sign == '-' && b == 13) {
        rl.write('50 - 13 = 37\n')
      }
      if (a == 50 && sign == '-' && b == 14) {
        rl.write('50 - 14 = 36\n')
      }
      if (a == 50 && sign == '-' && b == 15) {
        rl.write('50 - 15 = 35\n')
      }
      if (a == 50 && sign == '-' && b == 16) {
        rl.write('50 - 16 = 34\n')
      }
      if (a == 50 && sign == '-' && b == 17) {
        rl.write('50 - 17 = 33\n')
      }
      if (a == 50 && sign == '-' && b == 18) {
        rl.write('50 - 18 = 32\n')
      }
      if (a == 50 && sign == '-' && b == 19) {
        rl.write('50 - 19 = 31\n')
      }
      if (a == 50 && sign == '-' && b == 20) {
        rl.write('50 - 20 = 30\n')
      }
      if (a == 50 && sign == '-' && b == 21) {
        rl.write('50 - 21 = 29\n')
      }
      if (a == 50 && sign == '-' && b == 22) {
        rl.write('50 - 22 = 28\n')
      }
      if (a == 50 && sign == '-' && b == 23) {
        rl.write('50 - 23 = 27\n')
      }
      if (a == 50 && sign == '-' && b == 24) {
        rl.write('50 - 24 = 26\n')
      }
      if (a == 50 && sign == '-' && b == 25) {
        rl.write('50 - 25 = 25\n')
      }
      if (a == 50 && sign == '-' && b == 26) {
        rl.write('50 - 26 = 24\n')
      }
      if (a == 50 && sign == '-' && b == 27) {
        rl.write('50 - 27 = 23\n')
      }
      if (a == 50 && sign == '-' && b == 28) {
        rl.write('50 - 28 = 22\n')
      }
      if (a == 50 && sign == '-' && b == 29) {
        rl.write('50 - 29 = 21\n')
      }
      if (a == 50 && sign == '-' && b == 30) {
        rl.write('50 - 30 = 20\n')
      }
      if (a == 50 && sign == '-' && b == 31) {
        rl.write('50 - 31 = 19\n')
      }
      if (a == 50 && sign == '-' && b == 32) {
        rl.write('50 - 32 = 18\n')
      }
      if (a == 50 && sign == '-' && b == 33) {
        rl.write('50 - 33 = 17\n')
      }
      if (a == 50 && sign == '-' && b == 34) {
        rl.write('50 - 34 = 16\n')
      }
      if (a == 50 && sign == '-' && b == 35) {
        rl.write('50 - 35 = 15\n')
      }
      if (a == 50 && sign == '-' && b == 36) {
        rl.write('50 - 36 = 14\n')
      }
      if (a == 50 && sign == '-' && b == 37) {
        rl.write('50 - 37 = 13\n')
      }
      if (a == 50 && sign == '-' && b == 38) {
        rl.write('50 - 38 = 12\n')
      }
      if (a == 50 && sign == '-' && b == 39) {
        rl.write('50 - 39 = 11\n')
      }
      if (a == 50 && sign == '-' && b == 40) {
        rl.write('50 - 40 = 10\n')
      }
      if (a == 50 && sign == '-' && b == 41) {
        rl.write('50 - 41 = 9\n')
      }
      if (a == 50 && sign == '-' && b == 42) {
        rl.write('50 - 42 = 8\n')
      }
      if (a == 50 && sign == '-' && b == 43) {
        rl.write('50 - 43 = 7\n')
      }
      if (a == 50 && sign == '-' && b == 44) {
        rl.write('50 - 44 = 6\n')
      }
      if (a == 50 && sign == '-' && b == 45) {
        rl.write('50 - 45 = 5\n')
      }
      if (a == 50 && sign == '-' && b == 46) {
        rl.write('50 - 46 = 4\n')
      }
      if (a == 50 && sign == '-' && b == 47) {
        rl.write('50 - 47 = 3\n')
      }
      if (a == 50 && sign == '-' && b == 48) {
        rl.write('50 - 48 = 2\n')
      }
      if (a == 50 && sign == '-' && b == 49) {
        rl.write('50 - 49 = 1\n')
      }
      if (a == 50 && sign == '-' && b == 50) {
        rl.write('50 - 50 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 0) {
        rl.write('0 / 0 = NaN\n')
      }
      if (a == 0 && sign == '/' && b == 1) {
        rl.write('0 / 1 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 2) {
        rl.write('0 / 2 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 3) {
        rl.write('0 / 3 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 4) {
        rl.write('0 / 4 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 5) {
        rl.write('0 / 5 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 6) {
        rl.write('0 / 6 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 7) {
        rl.write('0 / 7 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 8) {
        rl.write('0 / 8 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 9) {
        rl.write('0 / 9 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 10) {
        rl.write('0 / 10 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 11) {
        rl.write('0 / 11 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 12) {
        rl.write('0 / 12 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 13) {
        rl.write('0 / 13 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 14) {
        rl.write('0 / 14 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 15) {
        rl.write('0 / 15 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 16) {
        rl.write('0 / 16 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 17) {
        rl.write('0 / 17 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 18) {
        rl.write('0 / 18 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 19) {
        rl.write('0 / 19 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 20) {
        rl.write('0 / 20 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 21) {
        rl.write('0 / 21 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 22) {
        rl.write('0 / 22 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 23) {
        rl.write('0 / 23 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 24) {
        rl.write('0 / 24 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 25) {
        rl.write('0 / 25 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 26) {
        rl.write('0 / 26 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 27) {
        rl.write('0 / 27 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 28) {
        rl.write('0 / 28 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 29) {
        rl.write('0 / 29 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 30) {
        rl.write('0 / 30 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 31) {
        rl.write('0 / 31 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 32) {
        rl.write('0 / 32 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 33) {
        rl.write('0 / 33 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 34) {
        rl.write('0 / 34 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 35) {
        rl.write('0 / 35 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 36) {
        rl.write('0 / 36 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 37) {
        rl.write('0 / 37 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 38) {
        rl.write('0 / 38 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 39) {
        rl.write('0 / 39 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 40) {
        rl.write('0 / 40 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 41) {
        rl.write('0 / 41 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 42) {
        rl.write('0 / 42 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 43) {
        rl.write('0 / 43 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 44) {
        rl.write('0 / 44 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 45) {
        rl.write('0 / 45 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 46) {
        rl.write('0 / 46 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 47) {
        rl.write('0 / 47 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 48) {
        rl.write('0 / 48 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 49) {
        rl.write('0 / 49 = 0\n')
      }
      if (a == 0 && sign == '/' && b == 50) {
        rl.write('0 / 50 = 0\n')
      }
      if (a == 1 && sign == '/' && b == 0) {
        rl.write('1 / 0 = Infinity\n')
      }
      if (a == 1 && sign == '/' && b == 1) {
        rl.write('1 / 1 = 1\n')
      }
      if (a == 1 && sign == '/' && b == 2) {
        rl.write('1 / 2 = 0.5\n')
      }
      if (a == 1 && sign == '/' && b == 3) {
        rl.write('1 / 3 = 0.3333333333333333\n')
      }
      if (a == 1 && sign == '/' && b == 4) {
        rl.write('1 / 4 = 0.25\n')
      }
      if (a == 1 && sign == '/' && b == 5) {
        rl.write('1 / 5 = 0.2\n')
      }
      if (a == 1 && sign == '/' && b == 6) {
        rl.write('1 / 6 = 0.16666666666666666\n')
      }
      if (a == 1 && sign == '/' && b == 7) {
        rl.write('1 / 7 = 0.14285714285714285\n')
      }
      if (a == 1 && sign == '/' && b == 8) {
        rl.write('1 / 8 = 0.125\n')
      }
      if (a == 1 && sign == '/' && b == 9) {
        rl.write('1 / 9 = 0.1111111111111111\n')
      }
      if (a == 1 && sign == '/' && b == 10) {
        rl.write('1 / 10 = 0.1\n')
      }
      if (a == 1 && sign == '/' && b == 11) {
        rl.write('1 / 11 = 0.09090909090909091\n')
      }
      if (a == 1 && sign == '/' && b == 12) {
        rl.write('1 / 12 = 0.08333333333333333\n')
      }
      if (a == 1 && sign == '/' && b == 13) {
        rl.write('1 / 13 = 0.07692307692307693\n')
      }
      if (a == 1 && sign == '/' && b == 14) {
        rl.write('1 / 14 = 0.07142857142857142\n')
      }
      if (a == 1 && sign == '/' && b == 15) {
        rl.write('1 / 15 = 0.06666666666666667\n')
      }
      if (a == 1 && sign == '/' && b == 16) {
        rl.write('1 / 16 = 0.0625\n')
      }
      if (a == 1 && sign == '/' && b == 17) {
        rl.write('1 / 17 = 0.058823529411764705\n')
      }
      if (a == 1 && sign == '/' && b == 18) {
        rl.write('1 / 18 = 0.05555555555555555\n')
      }
      if (a == 1 && sign == '/' && b == 19) {
        rl.write('1 / 19 = 0.05263157894736842\n')
      }
      if (a == 1 && sign == '/' && b == 20) {
        rl.write('1 / 20 = 0.05\n')
      }
      if (a == 1 && sign == '/' && b == 21) {
        rl.write('1 / 21 = 0.047619047619047616\n')
      }
      if (a == 1 && sign == '/' && b == 22) {
        rl.write('1 / 22 = 0.045454545454545456\n')
      }
      if (a == 1 && sign == '/' && b == 23) {
        rl.write('1 / 23 = 0.043478260869565216\n')
      }
      if (a == 1 && sign == '/' && b == 24) {
        rl.write('1 / 24 = 0.041666666666666664\n')
      }
      if (a == 1 && sign == '/' && b == 25) {
        rl.write('1 / 25 = 0.04\n')
      }
      if (a == 1 && sign == '/' && b == 26) {
        rl.write('1 / 26 = 0.038461538461538464\n')
      }
      if (a == 1 && sign == '/' && b == 27) {
        rl.write('1 / 27 = 0.037037037037037035\n')
      }
      if (a == 1 && sign == '/' && b == 28) {
        rl.write('1 / 28 = 0.03571428571428571\n')
      }
      if (a == 1 && sign == '/' && b == 29) {
        rl.write('1 / 29 = 0.034482758620689655\n')
      }
      if (a == 1 && sign == '/' && b == 30) {
        rl.write('1 / 30 = 0.03333333333333333\n')
      }
      if (a == 1 && sign == '/' && b == 31) {
        rl.write('1 / 31 = 0.03225806451612903\n')
      }
      if (a == 1 && sign == '/' && b == 32) {
        rl.write('1 / 32 = 0.03125\n')
      }
      if (a == 1 && sign == '/' && b == 33) {
        rl.write('1 / 33 = 0.030303030303030304\n')
      }
      if (a == 1 && sign == '/' && b == 34) {
        rl.write('1 / 34 = 0.029411764705882353\n')
      }
      if (a == 1 && sign == '/' && b == 35) {
        rl.write('1 / 35 = 0.02857142857142857\n')
      }
      if (a == 1 && sign == '/' && b == 36) {
        rl.write('1 / 36 = 0.027777777777777776\n')
      }
      if (a == 1 && sign == '/' && b == 37) {
        rl.write('1 / 37 = 0.02702702702702703\n')
      }
      if (a == 1 && sign == '/' && b == 38) {
        rl.write('1 / 38 = 0.02631578947368421\n')
      }
      if (a == 1 && sign == '/' && b == 39) {
        rl.write('1 / 39 = 0.02564102564102564\n')
      }
      if (a == 1 && sign == '/' && b == 40) {
        rl.write('1 / 40 = 0.025\n')
      }
      if (a == 1 && sign == '/' && b == 41) {
        rl.write('1 / 41 = 0.024390243902439025\n')
      }
      if (a == 1 && sign == '/' && b == 42) {
        rl.write('1 / 42 = 0.023809523809523808\n')
      }
      if (a == 1 && sign == '/' && b == 43) {
        rl.write('1 / 43 = 0.023255813953488372\n')
      }
      if (a == 1 && sign == '/' && b == 44) {
        rl.write('1 / 44 = 0.022727272727272728\n')
      }
      if (a == 1 && sign == '/' && b == 45) {
        rl.write('1 / 45 = 0.022222222222222223\n')
      }
      if (a == 1 && sign == '/' && b == 46) {
        rl.write('1 / 46 = 0.021739130434782608\n')
      }
      if (a == 1 && sign == '/' && b == 47) {
        rl.write('1 / 47 = 0.02127659574468085\n')
      }
      if (a == 1 && sign == '/' && b == 48) {
        rl.write('1 / 48 = 0.020833333333333332\n')
      }
      if (a == 1 && sign == '/' && b == 49) {
        rl.write('1 / 49 = 0.02040816326530612\n')
      }
      if (a == 1 && sign == '/' && b == 50) {
        rl.write('1 / 50 = 0.02\n')
      }
      if (a == 2 && sign == '/' && b == 0) {
        rl.write('2 / 0 = Infinity\n')
      }
      if (a == 2 && sign == '/' && b == 1) {
        rl.write('2 / 1 = 2\n')
      }
      if (a == 2 && sign == '/' && b == 2) {
        rl.write('2 / 2 = 1\n')
      }
      if (a == 2 && sign == '/' && b == 3) {
        rl.write('2 / 3 = 0.6666666666666666\n')
      }
      if (a == 2 && sign == '/' && b == 4) {
        rl.write('2 / 4 = 0.5\n')
      }
      if (a == 2 && sign == '/' && b == 5) {
        rl.write('2 / 5 = 0.4\n')
      }
      if (a == 2 && sign == '/' && b == 6) {
        rl.write('2 / 6 = 0.3333333333333333\n')
      }
      if (a == 2 && sign == '/' && b == 7) {
        rl.write('2 / 7 = 0.2857142857142857\n')
      }
      if (a == 2 && sign == '/' && b == 8) {
        rl.write('2 / 8 = 0.25\n')
      }
      if (a == 2 && sign == '/' && b == 9) {
        rl.write('2 / 9 = 0.2222222222222222\n')
      }
      if (a == 2 && sign == '/' && b == 10) {
        rl.write('2 / 10 = 0.2\n')
      }
      if (a == 2 && sign == '/' && b == 11) {
        rl.write('2 / 11 = 0.18181818181818182\n')
      }
      if (a == 2 && sign == '/' && b == 12) {
        rl.write('2 / 12 = 0.16666666666666666\n')
      }
      if (a == 2 && sign == '/' && b == 13) {
        rl.write('2 / 13 = 0.15384615384615385\n')
      }
      if (a == 2 && sign == '/' && b == 14) {
        rl.write('2 / 14 = 0.14285714285714285\n')
      }
      if (a == 2 && sign == '/' && b == 15) {
        rl.write('2 / 15 = 0.13333333333333333\n')
      }
      if (a == 2 && sign == '/' && b == 16) {
        rl.write('2 / 16 = 0.125\n')
      }
      if (a == 2 && sign == '/' && b == 17) {
        rl.write('2 / 17 = 0.11764705882352941\n')
      }
      if (a == 2 && sign == '/' && b == 18) {
        rl.write('2 / 18 = 0.1111111111111111\n')
      }
      if (a == 2 && sign == '/' && b == 19) {
        rl.write('2 / 19 = 0.10526315789473684\n')
      }
      if (a == 2 && sign == '/' && b == 20) {
        rl.write('2 / 20 = 0.1\n')
      }
      if (a == 2 && sign == '/' && b == 21) {
        rl.write('2 / 21 = 0.09523809523809523\n')
      }
      if (a == 2 && sign == '/' && b == 22) {
        rl.write('2 / 22 = 0.09090909090909091\n')
      }
      if (a == 2 && sign == '/' && b == 23) {
        rl.write('2 / 23 = 0.08695652173913043\n')
      }
      if (a == 2 && sign == '/' && b == 24) {
        rl.write('2 / 24 = 0.08333333333333333\n')
      }
      if (a == 2 && sign == '/' && b == 25) {
        rl.write('2 / 25 = 0.08\n')
      }
      if (a == 2 && sign == '/' && b == 26) {
        rl.write('2 / 26 = 0.07692307692307693\n')
      }
      if (a == 2 && sign == '/' && b == 27) {
        rl.write('2 / 27 = 0.07407407407407407\n')
      }
      if (a == 2 && sign == '/' && b == 28) {
        rl.write('2 / 28 = 0.07142857142857142\n')
      }
      if (a == 2 && sign == '/' && b == 29) {
        rl.write('2 / 29 = 0.06896551724137931\n')
      }
      if (a == 2 && sign == '/' && b == 30) {
        rl.write('2 / 30 = 0.06666666666666667\n')
      }
      if (a == 2 && sign == '/' && b == 31) {
        rl.write('2 / 31 = 0.06451612903225806\n')
      }
      if (a == 2 && sign == '/' && b == 32) {
        rl.write('2 / 32 = 0.0625\n')
      }
      if (a == 2 && sign == '/' && b == 33) {
        rl.write('2 / 33 = 0.06060606060606061\n')
      }
      if (a == 2 && sign == '/' && b == 34) {
        rl.write('2 / 34 = 0.058823529411764705\n')
      }
      if (a == 2 && sign == '/' && b == 35) {
        rl.write('2 / 35 = 0.05714285714285714\n')
      }
      if (a == 2 && sign == '/' && b == 36) {
        rl.write('2 / 36 = 0.05555555555555555\n')
      }
      if (a == 2 && sign == '/' && b == 37) {
        rl.write('2 / 37 = 0.05405405405405406\n')
      }
      if (a == 2 && sign == '/' && b == 38) {
        rl.write('2 / 38 = 0.05263157894736842\n')
      }
      if (a == 2 && sign == '/' && b == 39) {
        rl.write('2 / 39 = 0.05128205128205128\n')
      }
      if (a == 2 && sign == '/' && b == 40) {
        rl.write('2 / 40 = 0.05\n')
      }
      if (a == 2 && sign == '/' && b == 41) {
        rl.write('2 / 41 = 0.04878048780487805\n')
      }
      if (a == 2 && sign == '/' && b == 42) {
        rl.write('2 / 42 = 0.047619047619047616\n')
      }
      if (a == 2 && sign == '/' && b == 43) {
        rl.write('2 / 43 = 0.046511627906976744\n')
      }
      if (a == 2 && sign == '/' && b == 44) {
        rl.write('2 / 44 = 0.045454545454545456\n')
      }
      if (a == 2 && sign == '/' && b == 45) {
        rl.write('2 / 45 = 0.044444444444444446\n')
      }
      if (a == 2 && sign == '/' && b == 46) {
        rl.write('2 / 46 = 0.043478260869565216\n')
      }
      if (a == 2 && sign == '/' && b == 47) {
        rl.write('2 / 47 = 0.0425531914893617\n')
      }
      if (a == 2 && sign == '/' && b == 48) {
        rl.write('2 / 48 = 0.041666666666666664\n')
      }
      if (a == 2 && sign == '/' && b == 49) {
        rl.write('2 / 49 = 0.04081632653061224\n')
      }
      if (a == 2 && sign == '/' && b == 50) {
        rl.write('2 / 50 = 0.04\n')
      }
      if (a == 3 && sign == '/' && b == 0) {
        rl.write('3 / 0 = Infinity\n')
      }
      if (a == 3 && sign == '/' && b == 1) {
        rl.write('3 / 1 = 3\n')
      }
      if (a == 3 && sign == '/' && b == 2) {
        rl.write('3 / 2 = 1.5\n')
      }
      if (a == 3 && sign == '/' && b == 3) {
        rl.write('3 / 3 = 1\n')
      }
      if (a == 3 && sign == '/' && b == 4) {
        rl.write('3 / 4 = 0.75\n')
      }
      if (a == 3 && sign == '/' && b == 5) {
        rl.write('3 / 5 = 0.6\n')
      }
      if (a == 3 && sign == '/' && b == 6) {
        rl.write('3 / 6 = 0.5\n')
      }
      if (a == 3 && sign == '/' && b == 7) {
        rl.write('3 / 7 = 0.42857142857142855\n')
      }
      if (a == 3 && sign == '/' && b == 8) {
        rl.write('3 / 8 = 0.375\n')
      }
      if (a == 3 && sign == '/' && b == 9) {
        rl.write('3 / 9 = 0.3333333333333333\n')
      }
      if (a == 3 && sign == '/' && b == 10) {
        rl.write('3 / 10 = 0.3\n')
      }
      if (a == 3 && sign == '/' && b == 11) {
        rl.write('3 / 11 = 0.2727272727272727\n')
      }
      if (a == 3 && sign == '/' && b == 12) {
        rl.write('3 / 12 = 0.25\n')
      }
      if (a == 3 && sign == '/' && b == 13) {
        rl.write('3 / 13 = 0.23076923076923078\n')
      }
      if (a == 3 && sign == '/' && b == 14) {
        rl.write('3 / 14 = 0.21428571428571427\n')
      }
      if (a == 3 && sign == '/' && b == 15) {
        rl.write('3 / 15 = 0.2\n')
      }
      if (a == 3 && sign == '/' && b == 16) {
        rl.write('3 / 16 = 0.1875\n')
      }
      if (a == 3 && sign == '/' && b == 17) {
        rl.write('3 / 17 = 0.17647058823529413\n')
      }
      if (a == 3 && sign == '/' && b == 18) {
        rl.write('3 / 18 = 0.16666666666666666\n')
      }
      if (a == 3 && sign == '/' && b == 19) {
        rl.write('3 / 19 = 0.15789473684210525\n')
      }
      if (a == 3 && sign == '/' && b == 20) {
        rl.write('3 / 20 = 0.15\n')
      }
      if (a == 3 && sign == '/' && b == 21) {
        rl.write('3 / 21 = 0.14285714285714285\n')
      }
      if (a == 3 && sign == '/' && b == 22) {
        rl.write('3 / 22 = 0.13636363636363635\n')
      }
      if (a == 3 && sign == '/' && b == 23) {
        rl.write('3 / 23 = 0.13043478260869565\n')
      }
      if (a == 3 && sign == '/' && b == 24) {
        rl.write('3 / 24 = 0.125\n')
      }
      if (a == 3 && sign == '/' && b == 25) {
        rl.write('3 / 25 = 0.12\n')
      }
      if (a == 3 && sign == '/' && b == 26) {
        rl.write('3 / 26 = 0.11538461538461539\n')
      }
      if (a == 3 && sign == '/' && b == 27) {
        rl.write('3 / 27 = 0.1111111111111111\n')
      }
      if (a == 3 && sign == '/' && b == 28) {
        rl.write('3 / 28 = 0.10714285714285714\n')
      }
      if (a == 3 && sign == '/' && b == 29) {
        rl.write('3 / 29 = 0.10344827586206896\n')
      }
      if (a == 3 && sign == '/' && b == 30) {
        rl.write('3 / 30 = 0.1\n')
      }
      if (a == 3 && sign == '/' && b == 31) {
        rl.write('3 / 31 = 0.0967741935483871\n')
      }
      if (a == 3 && sign == '/' && b == 32) {
        rl.write('3 / 32 = 0.09375\n')
      }
      if (a == 3 && sign == '/' && b == 33) {
        rl.write('3 / 33 = 0.09090909090909091\n')
      }
      if (a == 3 && sign == '/' && b == 34) {
        rl.write('3 / 34 = 0.08823529411764706\n')
      }
      if (a == 3 && sign == '/' && b == 35) {
        rl.write('3 / 35 = 0.08571428571428572\n')
      }
      if (a == 3 && sign == '/' && b == 36) {
        rl.write('3 / 36 = 0.08333333333333333\n')
      }
      if (a == 3 && sign == '/' && b == 37) {
        rl.write('3 / 37 = 0.08108108108108109\n')
      }
      if (a == 3 && sign == '/' && b == 38) {
        rl.write('3 / 38 = 0.07894736842105263\n')
      }
      if (a == 3 && sign == '/' && b == 39) {
        rl.write('3 / 39 = 0.07692307692307693\n')
      }
      if (a == 3 && sign == '/' && b == 40) {
        rl.write('3 / 40 = 0.075\n')
      }
      if (a == 3 && sign == '/' && b == 41) {
        rl.write('3 / 41 = 0.07317073170731707\n')
      }
      if (a == 3 && sign == '/' && b == 42) {
        rl.write('3 / 42 = 0.07142857142857142\n')
      }
      if (a == 3 && sign == '/' && b == 43) {
        rl.write('3 / 43 = 0.06976744186046512\n')
      }
      if (a == 3 && sign == '/' && b == 44) {
        rl.write('3 / 44 = 0.06818181818181818\n')
      }
      if (a == 3 && sign == '/' && b == 45) {
        rl.write('3 / 45 = 0.06666666666666667\n')
      }
      if (a == 3 && sign == '/' && b == 46) {
        rl.write('3 / 46 = 0.06521739130434782\n')
      }
      if (a == 3 && sign == '/' && b == 47) {
        rl.write('3 / 47 = 0.06382978723404255\n')
      }
      if (a == 3 && sign == '/' && b == 48) {
        rl.write('3 / 48 = 0.0625\n')
      }
      if (a == 3 && sign == '/' && b == 49) {
        rl.write('3 / 49 = 0.061224489795918366\n')
      }
      if (a == 3 && sign == '/' && b == 50) {
        rl.write('3 / 50 = 0.06\n')
      }
      if (a == 4 && sign == '/' && b == 0) {
        rl.write('4 / 0 = Infinity\n')
      }
      if (a == 4 && sign == '/' && b == 1) {
        rl.write('4 / 1 = 4\n')
      }
      if (a == 4 && sign == '/' && b == 2) {
        rl.write('4 / 2 = 2\n')
      }
      if (a == 4 && sign == '/' && b == 3) {
        rl.write('4 / 3 = 1.3333333333333333\n')
      }
      if (a == 4 && sign == '/' && b == 4) {
        rl.write('4 / 4 = 1\n')
      }
      if (a == 4 && sign == '/' && b == 5) {
        rl.write('4 / 5 = 0.8\n')
      }
      if (a == 4 && sign == '/' && b == 6) {
        rl.write('4 / 6 = 0.6666666666666666\n')
      }
      if (a == 4 && sign == '/' && b == 7) {
        rl.write('4 / 7 = 0.5714285714285714\n')
      }
      if (a == 4 && sign == '/' && b == 8) {
        rl.write('4 / 8 = 0.5\n')
      }
      if (a == 4 && sign == '/' && b == 9) {
        rl.write('4 / 9 = 0.4444444444444444\n')
      }
      if (a == 4 && sign == '/' && b == 10) {
        rl.write('4 / 10 = 0.4\n')
      }
      if (a == 4 && sign == '/' && b == 11) {
        rl.write('4 / 11 = 0.36363636363636365\n')
      }
      if (a == 4 && sign == '/' && b == 12) {
        rl.write('4 / 12 = 0.3333333333333333\n')
      }
      if (a == 4 && sign == '/' && b == 13) {
        rl.write('4 / 13 = 0.3076923076923077\n')
      }
      if (a == 4 && sign == '/' && b == 14) {
        rl.write('4 / 14 = 0.2857142857142857\n')
      }
      if (a == 4 && sign == '/' && b == 15) {
        rl.write('4 / 15 = 0.26666666666666666\n')
      }
      if (a == 4 && sign == '/' && b == 16) {
        rl.write('4 / 16 = 0.25\n')
      }
      if (a == 4 && sign == '/' && b == 17) {
        rl.write('4 / 17 = 0.23529411764705882\n')
      }
      if (a == 4 && sign == '/' && b == 18) {
        rl.write('4 / 18 = 0.2222222222222222\n')
      }
      if (a == 4 && sign == '/' && b == 19) {
        rl.write('4 / 19 = 0.21052631578947367\n')
      }
      if (a == 4 && sign == '/' && b == 20) {
        rl.write('4 / 20 = 0.2\n')
      }
      if (a == 4 && sign == '/' && b == 21) {
        rl.write('4 / 21 = 0.19047619047619047\n')
      }
      if (a == 4 && sign == '/' && b == 22) {
        rl.write('4 / 22 = 0.18181818181818182\n')
      }
      if (a == 4 && sign == '/' && b == 23) {
        rl.write('4 / 23 = 0.17391304347826086\n')
      }
      if (a == 4 && sign == '/' && b == 24) {
        rl.write('4 / 24 = 0.16666666666666666\n')
      }
      if (a == 4 && sign == '/' && b == 25) {
        rl.write('4 / 25 = 0.16\n')
      }
      if (a == 4 && sign == '/' && b == 26) {
        rl.write('4 / 26 = 0.15384615384615385\n')
      }
      if (a == 4 && sign == '/' && b == 27) {
        rl.write('4 / 27 = 0.14814814814814814\n')
      }
      if (a == 4 && sign == '/' && b == 28) {
        rl.write('4 / 28 = 0.14285714285714285\n')
      }
      if (a == 4 && sign == '/' && b == 29) {
        rl.write('4 / 29 = 0.13793103448275862\n')
      }
      if (a == 4 && sign == '/' && b == 30) {
        rl.write('4 / 30 = 0.13333333333333333\n')
      }
      if (a == 4 && sign == '/' && b == 31) {
        rl.write('4 / 31 = 0.12903225806451613\n')
      }
      if (a == 4 && sign == '/' && b == 32) {
        rl.write('4 / 32 = 0.125\n')
      }
      if (a == 4 && sign == '/' && b == 33) {
        rl.write('4 / 33 = 0.12121212121212122\n')
      }
      if (a == 4 && sign == '/' && b == 34) {
        rl.write('4 / 34 = 0.11764705882352941\n')
      }
      if (a == 4 && sign == '/' && b == 35) {
        rl.write('4 / 35 = 0.11428571428571428\n')
      }
      if (a == 4 && sign == '/' && b == 36) {
        rl.write('4 / 36 = 0.1111111111111111\n')
      }
      if (a == 4 && sign == '/' && b == 37) {
        rl.write('4 / 37 = 0.10810810810810811\n')
      }
      if (a == 4 && sign == '/' && b == 38) {
        rl.write('4 / 38 = 0.10526315789473684\n')
      }
      if (a == 4 && sign == '/' && b == 39) {
        rl.write('4 / 39 = 0.10256410256410256\n')
      }
      if (a == 4 && sign == '/' && b == 40) {
        rl.write('4 / 40 = 0.1\n')
      }
      if (a == 4 && sign == '/' && b == 41) {
        rl.write('4 / 41 = 0.0975609756097561\n')
      }
      if (a == 4 && sign == '/' && b == 42) {
        rl.write('4 / 42 = 0.09523809523809523\n')
      }
      if (a == 4 && sign == '/' && b == 43) {
        rl.write('4 / 43 = 0.09302325581395349\n')
      }
      if (a == 4 && sign == '/' && b == 44) {
        rl.write('4 / 44 = 0.09090909090909091\n')
      }
      if (a == 4 && sign == '/' && b == 45) {
        rl.write('4 / 45 = 0.08888888888888889\n')
      }
      if (a == 4 && sign == '/' && b == 46) {
        rl.write('4 / 46 = 0.08695652173913043\n')
      }
      if (a == 4 && sign == '/' && b == 47) {
        rl.write('4 / 47 = 0.0851063829787234\n')
      }
      if (a == 4 && sign == '/' && b == 48) {
        rl.write('4 / 48 = 0.08333333333333333\n')
      }
      if (a == 4 && sign == '/' && b == 49) {
        rl.write('4 / 49 = 0.08163265306122448\n')
      }
      if (a == 4 && sign == '/' && b == 50) {
        rl.write('4 / 50 = 0.08\n')
      }
      if (a == 5 && sign == '/' && b == 0) {
        rl.write('5 / 0 = Infinity\n')
      }
      if (a == 5 && sign == '/' && b == 1) {
        rl.write('5 / 1 = 5\n')
      }
      if (a == 5 && sign == '/' && b == 2) {
        rl.write('5 / 2 = 2.5\n')
      }
      if (a == 5 && sign == '/' && b == 3) {
        rl.write('5 / 3 = 1.6666666666666667\n')
      }
      if (a == 5 && sign == '/' && b == 4) {
        rl.write('5 / 4 = 1.25\n')
      }
      if (a == 5 && sign == '/' && b == 5) {
        rl.write('5 / 5 = 1\n')
      }
      if (a == 5 && sign == '/' && b == 6) {
        rl.write('5 / 6 = 0.8333333333333334\n')
      }
      if (a == 5 && sign == '/' && b == 7) {
        rl.write('5 / 7 = 0.7142857142857143\n')
      }
      if (a == 5 && sign == '/' && b == 8) {
        rl.write('5 / 8 = 0.625\n')
      }
      if (a == 5 && sign == '/' && b == 9) {
        rl.write('5 / 9 = 0.5555555555555556\n')
      }
      if (a == 5 && sign == '/' && b == 10) {
        rl.write('5 / 10 = 0.5\n')
      }
      if (a == 5 && sign == '/' && b == 11) {
        rl.write('5 / 11 = 0.45454545454545453\n')
      }
      if (a == 5 && sign == '/' && b == 12) {
        rl.write('5 / 12 = 0.4166666666666667\n')
      }
      if (a == 5 && sign == '/' && b == 13) {
        rl.write('5 / 13 = 0.38461538461538464\n')
      }
      if (a == 5 && sign == '/' && b == 14) {
        rl.write('5 / 14 = 0.35714285714285715\n')
      }
      if (a == 5 && sign == '/' && b == 15) {
        rl.write('5 / 15 = 0.3333333333333333\n')
      }
      if (a == 5 && sign == '/' && b == 16) {
        rl.write('5 / 16 = 0.3125\n')
      }
      if (a == 5 && sign == '/' && b == 17) {
        rl.write('5 / 17 = 0.29411764705882354\n')
      }
      if (a == 5 && sign == '/' && b == 18) {
        rl.write('5 / 18 = 0.2777777777777778\n')
      }
      if (a == 5 && sign == '/' && b == 19) {
        rl.write('5 / 19 = 0.2631578947368421\n')
      }
      if (a == 5 && sign == '/' && b == 20) {
        rl.write('5 / 20 = 0.25\n')
      }
      if (a == 5 && sign == '/' && b == 21) {
        rl.write('5 / 21 = 0.23809523809523808\n')
      }
      if (a == 5 && sign == '/' && b == 22) {
        rl.write('5 / 22 = 0.22727272727272727\n')
      }
      if (a == 5 && sign == '/' && b == 23) {
        rl.write('5 / 23 = 0.21739130434782608\n')
      }
      if (a == 5 && sign == '/' && b == 24) {
        rl.write('5 / 24 = 0.20833333333333334\n')
      }
      if (a == 5 && sign == '/' && b == 25) {
        rl.write('5 / 25 = 0.2\n')
      }
      if (a == 5 && sign == '/' && b == 26) {
        rl.write('5 / 26 = 0.19230769230769232\n')
      }
      if (a == 5 && sign == '/' && b == 27) {
        rl.write('5 / 27 = 0.18518518518518517\n')
      }
      if (a == 5 && sign == '/' && b == 28) {
        rl.write('5 / 28 = 0.17857142857142858\n')
      }
      if (a == 5 && sign == '/' && b == 29) {
        rl.write('5 / 29 = 0.1724137931034483\n')
      }
      if (a == 5 && sign == '/' && b == 30) {
        rl.write('5 / 30 = 0.16666666666666666\n')
      }
      if (a == 5 && sign == '/' && b == 31) {
        rl.write('5 / 31 = 0.16129032258064516\n')
      }
      if (a == 5 && sign == '/' && b == 32) {
        rl.write('5 / 32 = 0.15625\n')
      }
      if (a == 5 && sign == '/' && b == 33) {
        rl.write('5 / 33 = 0.15151515151515152\n')
      }
      if (a == 5 && sign == '/' && b == 34) {
        rl.write('5 / 34 = 0.14705882352941177\n')
      }
      if (a == 5 && sign == '/' && b == 35) {
        rl.write('5 / 35 = 0.14285714285714285\n')
      }
      if (a == 5 && sign == '/' && b == 36) {
        rl.write('5 / 36 = 0.1388888888888889\n')
      }
      if (a == 5 && sign == '/' && b == 37) {
        rl.write('5 / 37 = 0.13513513513513514\n')
      }
      if (a == 5 && sign == '/' && b == 38) {
        rl.write('5 / 38 = 0.13157894736842105\n')
      }
      if (a == 5 && sign == '/' && b == 39) {
        rl.write('5 / 39 = 0.1282051282051282\n')
      }
      if (a == 5 && sign == '/' && b == 40) {
        rl.write('5 / 40 = 0.125\n')
      }
      if (a == 5 && sign == '/' && b == 41) {
        rl.write('5 / 41 = 0.12195121951219512\n')
      }
      if (a == 5 && sign == '/' && b == 42) {
        rl.write('5 / 42 = 0.11904761904761904\n')
      }
      if (a == 5 && sign == '/' && b == 43) {
        rl.write('5 / 43 = 0.11627906976744186\n')
      }
      if (a == 5 && sign == '/' && b == 44) {
        rl.write('5 / 44 = 0.11363636363636363\n')
      }
      if (a == 5 && sign == '/' && b == 45) {
        rl.write('5 / 45 = 0.1111111111111111\n')
      }
      if (a == 5 && sign == '/' && b == 46) {
        rl.write('5 / 46 = 0.10869565217391304\n')
      }
      if (a == 5 && sign == '/' && b == 47) {
        rl.write('5 / 47 = 0.10638297872340426\n')
      }
      if (a == 5 && sign == '/' && b == 48) {
        rl.write('5 / 48 = 0.10416666666666667\n')
      }
      if (a == 5 && sign == '/' && b == 49) {
        rl.write('5 / 49 = 0.10204081632653061\n')
      }
      if (a == 5 && sign == '/' && b == 50) {
        rl.write('5 / 50 = 0.1\n')
      }
      if (a == 6 && sign == '/' && b == 0) {
        rl.write('6 / 0 = Infinity\n')
      }
      if (a == 6 && sign == '/' && b == 1) {
        rl.write('6 / 1 = 6\n')
      }
      if (a == 6 && sign == '/' && b == 2) {
        rl.write('6 / 2 = 3\n')
      }
      if (a == 6 && sign == '/' && b == 3) {
        rl.write('6 / 3 = 2\n')
      }
      if (a == 6 && sign == '/' && b == 4) {
        rl.write('6 / 4 = 1.5\n')
      }
      if (a == 6 && sign == '/' && b == 5) {
        rl.write('6 / 5 = 1.2\n')
      }
      if (a == 6 && sign == '/' && b == 6) {
        rl.write('6 / 6 = 1\n')
      }
      if (a == 6 && sign == '/' && b == 7) {
        rl.write('6 / 7 = 0.8571428571428571\n')
      }
      if (a == 6 && sign == '/' && b == 8) {
        rl.write('6 / 8 = 0.75\n')
      }
      if (a == 6 && sign == '/' && b == 9) {
        rl.write('6 / 9 = 0.6666666666666666\n')
      }
      if (a == 6 && sign == '/' && b == 10) {
        rl.write('6 / 10 = 0.6\n')
      }
      if (a == 6 && sign == '/' && b == 11) {
        rl.write('6 / 11 = 0.5454545454545454\n')
      }
      if (a == 6 && sign == '/' && b == 12) {
        rl.write('6 / 12 = 0.5\n')
      }
      if (a == 6 && sign == '/' && b == 13) {
        rl.write('6 / 13 = 0.46153846153846156\n')
      }
      if (a == 6 && sign == '/' && b == 14) {
        rl.write('6 / 14 = 0.42857142857142855\n')
      }
      if (a == 6 && sign == '/' && b == 15) {
        rl.write('6 / 15 = 0.4\n')
      }
      if (a == 6 && sign == '/' && b == 16) {
        rl.write('6 / 16 = 0.375\n')
      }
      if (a == 6 && sign == '/' && b == 17) {
        rl.write('6 / 17 = 0.35294117647058826\n')
      }
      if (a == 6 && sign == '/' && b == 18) {
        rl.write('6 / 18 = 0.3333333333333333\n')
      }
      if (a == 6 && sign == '/' && b == 19) {
        rl.write('6 / 19 = 0.3157894736842105\n')
      }
      if (a == 6 && sign == '/' && b == 20) {
        rl.write('6 / 20 = 0.3\n')
      }
      if (a == 6 && sign == '/' && b == 21) {
        rl.write('6 / 21 = 0.2857142857142857\n')
      }
      if (a == 6 && sign == '/' && b == 22) {
        rl.write('6 / 22 = 0.2727272727272727\n')
      }
      if (a == 6 && sign == '/' && b == 23) {
        rl.write('6 / 23 = 0.2608695652173913\n')
      }
      if (a == 6 && sign == '/' && b == 24) {
        rl.write('6 / 24 = 0.25\n')
      }
      if (a == 6 && sign == '/' && b == 25) {
        rl.write('6 / 25 = 0.24\n')
      }
      if (a == 6 && sign == '/' && b == 26) {
        rl.write('6 / 26 = 0.23076923076923078\n')
      }
      if (a == 6 && sign == '/' && b == 27) {
        rl.write('6 / 27 = 0.2222222222222222\n')
      }
      if (a == 6 && sign == '/' && b == 28) {
        rl.write('6 / 28 = 0.21428571428571427\n')
      }
      if (a == 6 && sign == '/' && b == 29) {
        rl.write('6 / 29 = 0.20689655172413793\n')
      }
      if (a == 6 && sign == '/' && b == 30) {
        rl.write('6 / 30 = 0.2\n')
      }
      if (a == 6 && sign == '/' && b == 31) {
        rl.write('6 / 31 = 0.1935483870967742\n')
      }
      if (a == 6 && sign == '/' && b == 32) {
        rl.write('6 / 32 = 0.1875\n')
      }
      if (a == 6 && sign == '/' && b == 33) {
        rl.write('6 / 33 = 0.18181818181818182\n')
      }
      if (a == 6 && sign == '/' && b == 34) {
        rl.write('6 / 34 = 0.17647058823529413\n')
      }
      if (a == 6 && sign == '/' && b == 35) {
        rl.write('6 / 35 = 0.17142857142857143\n')
      }
      if (a == 6 && sign == '/' && b == 36) {
        rl.write('6 / 36 = 0.16666666666666666\n')
      }
      if (a == 6 && sign == '/' && b == 37) {
        rl.write('6 / 37 = 0.16216216216216217\n')
      }
      if (a == 6 && sign == '/' && b == 38) {
        rl.write('6 / 38 = 0.15789473684210525\n')
      }
      if (a == 6 && sign == '/' && b == 39) {
        rl.write('6 / 39 = 0.15384615384615385\n')
      }
      if (a == 6 && sign == '/' && b == 40) {
        rl.write('6 / 40 = 0.15\n')
      }
      if (a == 6 && sign == '/' && b == 41) {
        rl.write('6 / 41 = 0.14634146341463414\n')
      }
      if (a == 6 && sign == '/' && b == 42) {
        rl.write('6 / 42 = 0.14285714285714285\n')
      }
      if (a == 6 && sign == '/' && b == 43) {
        rl.write('6 / 43 = 0.13953488372093023\n')
      }
      if (a == 6 && sign == '/' && b == 44) {
        rl.write('6 / 44 = 0.13636363636363635\n')
      }
      if (a == 6 && sign == '/' && b == 45) {
        rl.write('6 / 45 = 0.13333333333333333\n')
      }
      if (a == 6 && sign == '/' && b == 46) {
        rl.write('6 / 46 = 0.13043478260869565\n')
      }
      if (a == 6 && sign == '/' && b == 47) {
        rl.write('6 / 47 = 0.1276595744680851\n')
      }
      if (a == 6 && sign == '/' && b == 48) {
        rl.write('6 / 48 = 0.125\n')
      }
      if (a == 6 && sign == '/' && b == 49) {
        rl.write('6 / 49 = 0.12244897959183673\n')
      }
      if (a == 6 && sign == '/' && b == 50) {
        rl.write('6 / 50 = 0.12\n')
      }
      if (a == 7 && sign == '/' && b == 0) {
        rl.write('7 / 0 = Infinity\n')
      }
      if (a == 7 && sign == '/' && b == 1) {
        rl.write('7 / 1 = 7\n')
      }
      if (a == 7 && sign == '/' && b == 2) {
        rl.write('7 / 2 = 3.5\n')
      }
      if (a == 7 && sign == '/' && b == 3) {
        rl.write('7 / 3 = 2.3333333333333335\n')
      }
      if (a == 7 && sign == '/' && b == 4) {
        rl.write('7 / 4 = 1.75\n')
      }
      if (a == 7 && sign == '/' && b == 5) {
        rl.write('7 / 5 = 1.4\n')
      }
      if (a == 7 && sign == '/' && b == 6) {
        rl.write('7 / 6 = 1.1666666666666667\n')
      }
      if (a == 7 && sign == '/' && b == 7) {
        rl.write('7 / 7 = 1\n')
      }
      if (a == 7 && sign == '/' && b == 8) {
        rl.write('7 / 8 = 0.875\n')
      }
      if (a == 7 && sign == '/' && b == 9) {
        rl.write('7 / 9 = 0.7777777777777778\n')
      }
      if (a == 7 && sign == '/' && b == 10) {
        rl.write('7 / 10 = 0.7\n')
      }
      if (a == 7 && sign == '/' && b == 11) {
        rl.write('7 / 11 = 0.6363636363636364\n')
      }
      if (a == 7 && sign == '/' && b == 12) {
        rl.write('7 / 12 = 0.5833333333333334\n')
      }
      if (a == 7 && sign == '/' && b == 13) {
        rl.write('7 / 13 = 0.5384615384615384\n')
      }
      if (a == 7 && sign == '/' && b == 14) {
        rl.write('7 / 14 = 0.5\n')
      }
      if (a == 7 && sign == '/' && b == 15) {
        rl.write('7 / 15 = 0.4666666666666667\n')
      }
      if (a == 7 && sign == '/' && b == 16) {
        rl.write('7 / 16 = 0.4375\n')
      }
      if (a == 7 && sign == '/' && b == 17) {
        rl.write('7 / 17 = 0.4117647058823529\n')
      }
      if (a == 7 && sign == '/' && b == 18) {
        rl.write('7 / 18 = 0.3888888888888889\n')
      }
      if (a == 7 && sign == '/' && b == 19) {
        rl.write('7 / 19 = 0.3684210526315789\n')
      }
      if (a == 7 && sign == '/' && b == 20) {
        rl.write('7 / 20 = 0.35\n')
      }
      if (a == 7 && sign == '/' && b == 21) {
        rl.write('7 / 21 = 0.3333333333333333\n')
      }
      if (a == 7 && sign == '/' && b == 22) {
        rl.write('7 / 22 = 0.3181818181818182\n')
      }
      if (a == 7 && sign == '/' && b == 23) {
        rl.write('7 / 23 = 0.30434782608695654\n')
      }
      if (a == 7 && sign == '/' && b == 24) {
        rl.write('7 / 24 = 0.2916666666666667\n')
      }
      if (a == 7 && sign == '/' && b == 25) {
        rl.write('7 / 25 = 0.28\n')
      }
      if (a == 7 && sign == '/' && b == 26) {
        rl.write('7 / 26 = 0.2692307692307692\n')
      }
      if (a == 7 && sign == '/' && b == 27) {
        rl.write('7 / 27 = 0.25925925925925924\n')
      }
      if (a == 7 && sign == '/' && b == 28) {
        rl.write('7 / 28 = 0.25\n')
      }
      if (a == 7 && sign == '/' && b == 29) {
        rl.write('7 / 29 = 0.2413793103448276\n')
      }
      if (a == 7 && sign == '/' && b == 30) {
        rl.write('7 / 30 = 0.23333333333333334\n')
      }
      if (a == 7 && sign == '/' && b == 31) {
        rl.write('7 / 31 = 0.22580645161290322\n')
      }
      if (a == 7 && sign == '/' && b == 32) {
        rl.write('7 / 32 = 0.21875\n')
      }
      if (a == 7 && sign == '/' && b == 33) {
        rl.write('7 / 33 = 0.21212121212121213\n')
      }
      if (a == 7 && sign == '/' && b == 34) {
        rl.write('7 / 34 = 0.20588235294117646\n')
      }
      if (a == 7 && sign == '/' && b == 35) {
        rl.write('7 / 35 = 0.2\n')
      }
      if (a == 7 && sign == '/' && b == 36) {
        rl.write('7 / 36 = 0.19444444444444445\n')
      }
      if (a == 7 && sign == '/' && b == 37) {
        rl.write('7 / 37 = 0.1891891891891892\n')
      }
      if (a == 7 && sign == '/' && b == 38) {
        rl.write('7 / 38 = 0.18421052631578946\n')
      }
      if (a == 7 && sign == '/' && b == 39) {
        rl.write('7 / 39 = 0.1794871794871795\n')
      }
      if (a == 7 && sign == '/' && b == 40) {
        rl.write('7 / 40 = 0.175\n')
      }
      if (a == 7 && sign == '/' && b == 41) {
        rl.write('7 / 41 = 0.17073170731707318\n')
      }
      if (a == 7 && sign == '/' && b == 42) {
        rl.write('7 / 42 = 0.16666666666666666\n')
      }
      if (a == 7 && sign == '/' && b == 43) {
        rl.write('7 / 43 = 0.16279069767441862\n')
      }
      if (a == 7 && sign == '/' && b == 44) {
        rl.write('7 / 44 = 0.1590909090909091\n')
      }
      if (a == 7 && sign == '/' && b == 45) {
        rl.write('7 / 45 = 0.15555555555555556\n')
      }
      if (a == 7 && sign == '/' && b == 46) {
        rl.write('7 / 46 = 0.15217391304347827\n')
      }
      if (a == 7 && sign == '/' && b == 47) {
        rl.write('7 / 47 = 0.14893617021276595\n')
      }
      if (a == 7 && sign == '/' && b == 48) {
        rl.write('7 / 48 = 0.14583333333333334\n')
      }
      if (a == 7 && sign == '/' && b == 49) {
        rl.write('7 / 49 = 0.14285714285714285\n')
      }
      if (a == 7 && sign == '/' && b == 50) {
        rl.write('7 / 50 = 0.14\n')
      }
      if (a == 8 && sign == '/' && b == 0) {
        rl.write('8 / 0 = Infinity\n')
      }
      if (a == 8 && sign == '/' && b == 1) {
        rl.write('8 / 1 = 8\n')
      }
      if (a == 8 && sign == '/' && b == 2) {
        rl.write('8 / 2 = 4\n')
      }
      if (a == 8 && sign == '/' && b == 3) {
        rl.write('8 / 3 = 2.6666666666666665\n')
      }
      if (a == 8 && sign == '/' && b == 4) {
        rl.write('8 / 4 = 2\n')
      }
      if (a == 8 && sign == '/' && b == 5) {
        rl.write('8 / 5 = 1.6\n')
      }
      if (a == 8 && sign == '/' && b == 6) {
        rl.write('8 / 6 = 1.3333333333333333\n')
      }
      if (a == 8 && sign == '/' && b == 7) {
        rl.write('8 / 7 = 1.1428571428571428\n')
      }
      if (a == 8 && sign == '/' && b == 8) {
        rl.write('8 / 8 = 1\n')
      }
      if (a == 8 && sign == '/' && b == 9) {
        rl.write('8 / 9 = 0.8888888888888888\n')
      }
      if (a == 8 && sign == '/' && b == 10) {
        rl.write('8 / 10 = 0.8\n')
      }
      if (a == 8 && sign == '/' && b == 11) {
        rl.write('8 / 11 = 0.7272727272727273\n')
      }
      if (a == 8 && sign == '/' && b == 12) {
        rl.write('8 / 12 = 0.6666666666666666\n')
      }
      if (a == 8 && sign == '/' && b == 13) {
        rl.write('8 / 13 = 0.6153846153846154\n')
      }
      if (a == 8 && sign == '/' && b == 14) {
        rl.write('8 / 14 = 0.5714285714285714\n')
      }
      if (a == 8 && sign == '/' && b == 15) {
        rl.write('8 / 15 = 0.5333333333333333\n')
      }
      if (a == 8 && sign == '/' && b == 16) {
        rl.write('8 / 16 = 0.5\n')
      }
      if (a == 8 && sign == '/' && b == 17) {
        rl.write('8 / 17 = 0.47058823529411764\n')
      }
      if (a == 8 && sign == '/' && b == 18) {
        rl.write('8 / 18 = 0.4444444444444444\n')
      }
      if (a == 8 && sign == '/' && b == 19) {
        rl.write('8 / 19 = 0.42105263157894735\n')
      }
      if (a == 8 && sign == '/' && b == 20) {
        rl.write('8 / 20 = 0.4\n')
      }
      if (a == 8 && sign == '/' && b == 21) {
        rl.write('8 / 21 = 0.38095238095238093\n')
      }
      if (a == 8 && sign == '/' && b == 22) {
        rl.write('8 / 22 = 0.36363636363636365\n')
      }
      if (a == 8 && sign == '/' && b == 23) {
        rl.write('8 / 23 = 0.34782608695652173\n')
      }
      if (a == 8 && sign == '/' && b == 24) {
        rl.write('8 / 24 = 0.3333333333333333\n')
      }
      if (a == 8 && sign == '/' && b == 25) {
        rl.write('8 / 25 = 0.32\n')
      }
      if (a == 8 && sign == '/' && b == 26) {
        rl.write('8 / 26 = 0.3076923076923077\n')
      }
      if (a == 8 && sign == '/' && b == 27) {
        rl.write('8 / 27 = 0.2962962962962963\n')
      }
      if (a == 8 && sign == '/' && b == 28) {
        rl.write('8 / 28 = 0.2857142857142857\n')
      }
      if (a == 8 && sign == '/' && b == 29) {
        rl.write('8 / 29 = 0.27586206896551724\n')
      }
      if (a == 8 && sign == '/' && b == 30) {
        rl.write('8 / 30 = 0.26666666666666666\n')
      }
      if (a == 8 && sign == '/' && b == 31) {
        rl.write('8 / 31 = 0.25806451612903225\n')
      }
      if (a == 8 && sign == '/' && b == 32) {
        rl.write('8 / 32 = 0.25\n')
      }
      if (a == 8 && sign == '/' && b == 33) {
        rl.write('8 / 33 = 0.24242424242424243\n')
      }
      if (a == 8 && sign == '/' && b == 34) {
        rl.write('8 / 34 = 0.23529411764705882\n')
      }
      if (a == 8 && sign == '/' && b == 35) {
        rl.write('8 / 35 = 0.22857142857142856\n')
      }
      if (a == 8 && sign == '/' && b == 36) {
        rl.write('8 / 36 = 0.2222222222222222\n')
      }
      if (a == 8 && sign == '/' && b == 37) {
        rl.write('8 / 37 = 0.21621621621621623\n')
      }
      if (a == 8 && sign == '/' && b == 38) {
        rl.write('8 / 38 = 0.21052631578947367\n')
      }
      if (a == 8 && sign == '/' && b == 39) {
        rl.write('8 / 39 = 0.20512820512820512\n')
      }
      if (a == 8 && sign == '/' && b == 40) {
        rl.write('8 / 40 = 0.2\n')
      }
      if (a == 8 && sign == '/' && b == 41) {
        rl.write('8 / 41 = 0.1951219512195122\n')
      }
      if (a == 8 && sign == '/' && b == 42) {
        rl.write('8 / 42 = 0.19047619047619047\n')
      }
      if (a == 8 && sign == '/' && b == 43) {
        rl.write('8 / 43 = 0.18604651162790697\n')
      }
      if (a == 8 && sign == '/' && b == 44) {
        rl.write('8 / 44 = 0.18181818181818182\n')
      }
      if (a == 8 && sign == '/' && b == 45) {
        rl.write('8 / 45 = 0.17777777777777778\n')
      }
      if (a == 8 && sign == '/' && b == 46) {
        rl.write('8 / 46 = 0.17391304347826086\n')
      }
      if (a == 8 && sign == '/' && b == 47) {
        rl.write('8 / 47 = 0.1702127659574468\n')
      }
      if (a == 8 && sign == '/' && b == 48) {
        rl.write('8 / 48 = 0.16666666666666666\n')
      }
      if (a == 8 && sign == '/' && b == 49) {
        rl.write('8 / 49 = 0.16326530612244897\n')
      }
      if (a == 8 && sign == '/' && b == 50) {
        rl.write('8 / 50 = 0.16\n')
      }
      if (a == 9 && sign == '/' && b == 0) {
        rl.write('9 / 0 = Infinity\n')
      }
      if (a == 9 && sign == '/' && b == 1) {
        rl.write('9 / 1 = 9\n')
      }
      if (a == 9 && sign == '/' && b == 2) {
        rl.write('9 / 2 = 4.5\n')
      }
      if (a == 9 && sign == '/' && b == 3) {
        rl.write('9 / 3 = 3\n')
      }
      if (a == 9 && sign == '/' && b == 4) {
        rl.write('9 / 4 = 2.25\n')
      }
      if (a == 9 && sign == '/' && b == 5) {
        rl.write('9 / 5 = 1.8\n')
      }
      if (a == 9 && sign == '/' && b == 6) {
        rl.write('9 / 6 = 1.5\n')
      }
      if (a == 9 && sign == '/' && b == 7) {
        rl.write('9 / 7 = 1.2857142857142858\n')
      }
      if (a == 9 && sign == '/' && b == 8) {
        rl.write('9 / 8 = 1.125\n')
      }
      if (a == 9 && sign == '/' && b == 9) {
        rl.write('9 / 9 = 1\n')
      }
      if (a == 9 && sign == '/' && b == 10) {
        rl.write('9 / 10 = 0.9\n')
      }
      if (a == 9 && sign == '/' && b == 11) {
        rl.write('9 / 11 = 0.8181818181818182\n')
      }
      if (a == 9 && sign == '/' && b == 12) {
        rl.write('9 / 12 = 0.75\n')
      }
      if (a == 9 && sign == '/' && b == 13) {
        rl.write('9 / 13 = 0.6923076923076923\n')
      }
      if (a == 9 && sign == '/' && b == 14) {
        rl.write('9 / 14 = 0.6428571428571429\n')
      }
      if (a == 9 && sign == '/' && b == 15) {
        rl.write('9 / 15 = 0.6\n')
      }
      if (a == 9 && sign == '/' && b == 16) {
        rl.write('9 / 16 = 0.5625\n')
      }
      if (a == 9 && sign == '/' && b == 17) {
        rl.write('9 / 17 = 0.5294117647058824\n')
      }
      if (a == 9 && sign == '/' && b == 18) {
        rl.write('9 / 18 = 0.5\n')
      }
      if (a == 9 && sign == '/' && b == 19) {
        rl.write('9 / 19 = 0.47368421052631576\n')
      }
      if (a == 9 && sign == '/' && b == 20) {
        rl.write('9 / 20 = 0.45\n')
      }
      if (a == 9 && sign == '/' && b == 21) {
        rl.write('9 / 21 = 0.42857142857142855\n')
      }
      if (a == 9 && sign == '/' && b == 22) {
        rl.write('9 / 22 = 0.4090909090909091\n')
      }
      if (a == 9 && sign == '/' && b == 23) {
        rl.write('9 / 23 = 0.391304347826087\n')
      }
      if (a == 9 && sign == '/' && b == 24) {
        rl.write('9 / 24 = 0.375\n')
      }
      if (a == 9 && sign == '/' && b == 25) {
        rl.write('9 / 25 = 0.36\n')
      }
      if (a == 9 && sign == '/' && b == 26) {
        rl.write('9 / 26 = 0.34615384615384615\n')
      }
      if (a == 9 && sign == '/' && b == 27) {
        rl.write('9 / 27 = 0.3333333333333333\n')
      }
      if (a == 9 && sign == '/' && b == 28) {
        rl.write('9 / 28 = 0.32142857142857145\n')
      }
      if (a == 9 && sign == '/' && b == 29) {
        rl.write('9 / 29 = 0.3103448275862069\n')
      }
      if (a == 9 && sign == '/' && b == 30) {
        rl.write('9 / 30 = 0.3\n')
      }
      if (a == 9 && sign == '/' && b == 31) {
        rl.write('9 / 31 = 0.2903225806451613\n')
      }
      if (a == 9 && sign == '/' && b == 32) {
        rl.write('9 / 32 = 0.28125\n')
      }
      if (a == 9 && sign == '/' && b == 33) {
        rl.write('9 / 33 = 0.2727272727272727\n')
      }
      if (a == 9 && sign == '/' && b == 34) {
        rl.write('9 / 34 = 0.2647058823529412\n')
      }
      if (a == 9 && sign == '/' && b == 35) {
        rl.write('9 / 35 = 0.2571428571428571\n')
      }
      if (a == 9 && sign == '/' && b == 36) {
        rl.write('9 / 36 = 0.25\n')
      }
      if (a == 9 && sign == '/' && b == 37) {
        rl.write('9 / 37 = 0.24324324324324326\n')
      }
      if (a == 9 && sign == '/' && b == 38) {
        rl.write('9 / 38 = 0.23684210526315788\n')
      }
      if (a == 9 && sign == '/' && b == 39) {
        rl.write('9 / 39 = 0.23076923076923078\n')
      }
      if (a == 9 && sign == '/' && b == 40) {
        rl.write('9 / 40 = 0.225\n')
      }
      if (a == 9 && sign == '/' && b == 41) {
        rl.write('9 / 41 = 0.21951219512195122\n')
      }
      if (a == 9 && sign == '/' && b == 42) {
        rl.write('9 / 42 = 0.21428571428571427\n')
      }
      if (a == 9 && sign == '/' && b == 43) {
        rl.write('9 / 43 = 0.20930232558139536\n')
      }
      if (a == 9 && sign == '/' && b == 44) {
        rl.write('9 / 44 = 0.20454545454545456\n')
      }
      if (a == 9 && sign == '/' && b == 45) {
        rl.write('9 / 45 = 0.2\n')
      }
      if (a == 9 && sign == '/' && b == 46) {
        rl.write('9 / 46 = 0.1956521739130435\n')
      }
      if (a == 9 && sign == '/' && b == 47) {
        rl.write('9 / 47 = 0.19148936170212766\n')
      }
      if (a == 9 && sign == '/' && b == 48) {
        rl.write('9 / 48 = 0.1875\n')
      }
      if (a == 9 && sign == '/' && b == 49) {
        rl.write('9 / 49 = 0.1836734693877551\n')
      }
      if (a == 9 && sign == '/' && b == 50) {
        rl.write('9 / 50 = 0.18\n')
      }
      if (a == 10 && sign == '/' && b == 0) {
        rl.write('10 / 0 = Infinity\n')
      }
      if (a == 10 && sign == '/' && b == 1) {
        rl.write('10 / 1 = 10\n')
      }
      if (a == 10 && sign == '/' && b == 2) {
        rl.write('10 / 2 = 5\n')
      }
      if (a == 10 && sign == '/' && b == 3) {
        rl.write('10 / 3 = 3.3333333333333335\n')
      }
      if (a == 10 && sign == '/' && b == 4) {
        rl.write('10 / 4 = 2.5\n')
      }
      if (a == 10 && sign == '/' && b == 5) {
        rl.write('10 / 5 = 2\n')
      }
      if (a == 10 && sign == '/' && b == 6) {
        rl.write('10 / 6 = 1.6666666666666667\n')
      }
      if (a == 10 && sign == '/' && b == 7) {
        rl.write('10 / 7 = 1.4285714285714286\n')
      }
      if (a == 10 && sign == '/' && b == 8) {
        rl.write('10 / 8 = 1.25\n')
      }
      if (a == 10 && sign == '/' && b == 9) {
        rl.write('10 / 9 = 1.1111111111111112\n')
      }
      if (a == 10 && sign == '/' && b == 10) {
        rl.write('10 / 10 = 1\n')
      }
      if (a == 10 && sign == '/' && b == 11) {
        rl.write('10 / 11 = 0.9090909090909091\n')
      }
      if (a == 10 && sign == '/' && b == 12) {
        rl.write('10 / 12 = 0.8333333333333334\n')
      }
      if (a == 10 && sign == '/' && b == 13) {
        rl.write('10 / 13 = 0.7692307692307693\n')
      }
      if (a == 10 && sign == '/' && b == 14) {
        rl.write('10 / 14 = 0.7142857142857143\n')
      }
      if (a == 10 && sign == '/' && b == 15) {
        rl.write('10 / 15 = 0.6666666666666666\n')
      }
      if (a == 10 && sign == '/' && b == 16) {
        rl.write('10 / 16 = 0.625\n')
      }
      if (a == 10 && sign == '/' && b == 17) {
        rl.write('10 / 17 = 0.5882352941176471\n')
      }
      if (a == 10 && sign == '/' && b == 18) {
        rl.write('10 / 18 = 0.5555555555555556\n')
      }
      if (a == 10 && sign == '/' && b == 19) {
        rl.write('10 / 19 = 0.5263157894736842\n')
      }
      if (a == 10 && sign == '/' && b == 20) {
        rl.write('10 / 20 = 0.5\n')
      }
      if (a == 10 && sign == '/' && b == 21) {
        rl.write('10 / 21 = 0.47619047619047616\n')
      }
      if (a == 10 && sign == '/' && b == 22) {
        rl.write('10 / 22 = 0.45454545454545453\n')
      }
      if (a == 10 && sign == '/' && b == 23) {
        rl.write('10 / 23 = 0.43478260869565216\n')
      }
      if (a == 10 && sign == '/' && b == 24) {
        rl.write('10 / 24 = 0.4166666666666667\n')
      }
      if (a == 10 && sign == '/' && b == 25) {
        rl.write('10 / 25 = 0.4\n')
      }
      if (a == 10 && sign == '/' && b == 26) {
        rl.write('10 / 26 = 0.38461538461538464\n')
      }
      if (a == 10 && sign == '/' && b == 27) {
        rl.write('10 / 27 = 0.37037037037037035\n')
      }
      if (a == 10 && sign == '/' && b == 28) {
        rl.write('10 / 28 = 0.35714285714285715\n')
      }
      if (a == 10 && sign == '/' && b == 29) {
        rl.write('10 / 29 = 0.3448275862068966\n')
      }
      if (a == 10 && sign == '/' && b == 30) {
        rl.write('10 / 30 = 0.3333333333333333\n')
      }
      if (a == 10 && sign == '/' && b == 31) {
        rl.write('10 / 31 = 0.3225806451612903\n')
      }
      if (a == 10 && sign == '/' && b == 32) {
        rl.write('10 / 32 = 0.3125\n')
      }
      if (a == 10 && sign == '/' && b == 33) {
        rl.write('10 / 33 = 0.30303030303030304\n')
      }
      if (a == 10 && sign == '/' && b == 34) {
        rl.write('10 / 34 = 0.29411764705882354\n')
      }
      if (a == 10 && sign == '/' && b == 35) {
        rl.write('10 / 35 = 0.2857142857142857\n')
      }
      if (a == 10 && sign == '/' && b == 36) {
        rl.write('10 / 36 = 0.2777777777777778\n')
      }
      if (a == 10 && sign == '/' && b == 37) {
        rl.write('10 / 37 = 0.2702702702702703\n')
      }
      if (a == 10 && sign == '/' && b == 38) {
        rl.write('10 / 38 = 0.2631578947368421\n')
      }
      if (a == 10 && sign == '/' && b == 39) {
        rl.write('10 / 39 = 0.2564102564102564\n')
      }
      if (a == 10 && sign == '/' && b == 40) {
        rl.write('10 / 40 = 0.25\n')
      }
      if (a == 10 && sign == '/' && b == 41) {
        rl.write('10 / 41 = 0.24390243902439024\n')
      }
      if (a == 10 && sign == '/' && b == 42) {
        rl.write('10 / 42 = 0.23809523809523808\n')
      }
      if (a == 10 && sign == '/' && b == 43) {
        rl.write('10 / 43 = 0.23255813953488372\n')
      }
      if (a == 10 && sign == '/' && b == 44) {
        rl.write('10 / 44 = 0.22727272727272727\n')
      }
      if (a == 10 && sign == '/' && b == 45) {
        rl.write('10 / 45 = 0.2222222222222222\n')
      }
      if (a == 10 && sign == '/' && b == 46) {
        rl.write('10 / 46 = 0.21739130434782608\n')
      }
      if (a == 10 && sign == '/' && b == 47) {
        rl.write('10 / 47 = 0.2127659574468085\n')
      }
      if (a == 10 && sign == '/' && b == 48) {
        rl.write('10 / 48 = 0.20833333333333334\n')
      }
      if (a == 10 && sign == '/' && b == 49) {
        rl.write('10 / 49 = 0.20408163265306123\n')
      }
      if (a == 10 && sign == '/' && b == 50) {
        rl.write('10 / 50 = 0.2\n')
      }
      if (a == 11 && sign == '/' && b == 0) {
        rl.write('11 / 0 = Infinity\n')
      }
      if (a == 11 && sign == '/' && b == 1) {
        rl.write('11 / 1 = 11\n')
      }
      if (a == 11 && sign == '/' && b == 2) {
        rl.write('11 / 2 = 5.5\n')
      }
      if (a == 11 && sign == '/' && b == 3) {
        rl.write('11 / 3 = 3.6666666666666665\n')
      }
      if (a == 11 && sign == '/' && b == 4) {
        rl.write('11 / 4 = 2.75\n')
      }
      if (a == 11 && sign == '/' && b == 5) {
        rl.write('11 / 5 = 2.2\n')
      }
      if (a == 11 && sign == '/' && b == 6) {
        rl.write('11 / 6 = 1.8333333333333333\n')
      }
      if (a == 11 && sign == '/' && b == 7) {
        rl.write('11 / 7 = 1.5714285714285714\n')
      }
      if (a == 11 && sign == '/' && b == 8) {
        rl.write('11 / 8 = 1.375\n')
      }
      if (a == 11 && sign == '/' && b == 9) {
        rl.write('11 / 9 = 1.2222222222222223\n')
      }
      if (a == 11 && sign == '/' && b == 10) {
        rl.write('11 / 10 = 1.1\n')
      }
      if (a == 11 && sign == '/' && b == 11) {
        rl.write('11 / 11 = 1\n')
      }
      if (a == 11 && sign == '/' && b == 12) {
        rl.write('11 / 12 = 0.9166666666666666\n')
      }
      if (a == 11 && sign == '/' && b == 13) {
        rl.write('11 / 13 = 0.8461538461538461\n')
      }
      if (a == 11 && sign == '/' && b == 14) {
        rl.write('11 / 14 = 0.7857142857142857\n')
      }
      if (a == 11 && sign == '/' && b == 15) {
        rl.write('11 / 15 = 0.7333333333333333\n')
      }
      if (a == 11 && sign == '/' && b == 16) {
        rl.write('11 / 16 = 0.6875\n')
      }
      if (a == 11 && sign == '/' && b == 17) {
        rl.write('11 / 17 = 0.6470588235294118\n')
      }
      if (a == 11 && sign == '/' && b == 18) {
        rl.write('11 / 18 = 0.6111111111111112\n')
      }
      if (a == 11 && sign == '/' && b == 19) {
        rl.write('11 / 19 = 0.5789473684210527\n')
      }
      if (a == 11 && sign == '/' && b == 20) {
        rl.write('11 / 20 = 0.55\n')
      }
      if (a == 11 && sign == '/' && b == 21) {
        rl.write('11 / 21 = 0.5238095238095238\n')
      }
      if (a == 11 && sign == '/' && b == 22) {
        rl.write('11 / 22 = 0.5\n')
      }
      if (a == 11 && sign == '/' && b == 23) {
        rl.write('11 / 23 = 0.4782608695652174\n')
      }
      if (a == 11 && sign == '/' && b == 24) {
        rl.write('11 / 24 = 0.4583333333333333\n')
      }
      if (a == 11 && sign == '/' && b == 25) {
        rl.write('11 / 25 = 0.44\n')
      }
      if (a == 11 && sign == '/' && b == 26) {
        rl.write('11 / 26 = 0.4230769230769231\n')
      }
      if (a == 11 && sign == '/' && b == 27) {
        rl.write('11 / 27 = 0.4074074074074074\n')
      }
      if (a == 11 && sign == '/' && b == 28) {
        rl.write('11 / 28 = 0.39285714285714285\n')
      }
      if (a == 11 && sign == '/' && b == 29) {
        rl.write('11 / 29 = 0.3793103448275862\n')
      }
      if (a == 11 && sign == '/' && b == 30) {
        rl.write('11 / 30 = 0.36666666666666664\n')
      }
      if (a == 11 && sign == '/' && b == 31) {
        rl.write('11 / 31 = 0.3548387096774194\n')
      }
      if (a == 11 && sign == '/' && b == 32) {
        rl.write('11 / 32 = 0.34375\n')
      }
      if (a == 11 && sign == '/' && b == 33) {
        rl.write('11 / 33 = 0.3333333333333333\n')
      }
      if (a == 11 && sign == '/' && b == 34) {
        rl.write('11 / 34 = 0.3235294117647059\n')
      }
      if (a == 11 && sign == '/' && b == 35) {
        rl.write('11 / 35 = 0.3142857142857143\n')
      }
      if (a == 11 && sign == '/' && b == 36) {
        rl.write('11 / 36 = 0.3055555555555556\n')
      }
      if (a == 11 && sign == '/' && b == 37) {
        rl.write('11 / 37 = 0.2972972972972973\n')
      }
      if (a == 11 && sign == '/' && b == 38) {
        rl.write('11 / 38 = 0.2894736842105263\n')
      }
      if (a == 11 && sign == '/' && b == 39) {
        rl.write('11 / 39 = 0.28205128205128205\n')
      }
      if (a == 11 && sign == '/' && b == 40) {
        rl.write('11 / 40 = 0.275\n')
      }
      if (a == 11 && sign == '/' && b == 41) {
        rl.write('11 / 41 = 0.2682926829268293\n')
      }
      if (a == 11 && sign == '/' && b == 42) {
        rl.write('11 / 42 = 0.2619047619047619\n')
      }
      if (a == 11 && sign == '/' && b == 43) {
        rl.write('11 / 43 = 0.2558139534883721\n')
      }
      if (a == 11 && sign == '/' && b == 44) {
        rl.write('11 / 44 = 0.25\n')
      }
      if (a == 11 && sign == '/' && b == 45) {
        rl.write('11 / 45 = 0.24444444444444444\n')
      }
      if (a == 11 && sign == '/' && b == 46) {
        rl.write('11 / 46 = 0.2391304347826087\n')
      }
      if (a == 11 && sign == '/' && b == 47) {
        rl.write('11 / 47 = 0.23404255319148937\n')
      }
      if (a == 11 && sign == '/' && b == 48) {
        rl.write('11 / 48 = 0.22916666666666666\n')
      }
      if (a == 11 && sign == '/' && b == 49) {
        rl.write('11 / 49 = 0.22448979591836735\n')
      }
      if (a == 11 && sign == '/' && b == 50) {
        rl.write('11 / 50 = 0.22\n')
      }
      if (a == 12 && sign == '/' && b == 0) {
        rl.write('12 / 0 = Infinity\n')
      }
      if (a == 12 && sign == '/' && b == 1) {
        rl.write('12 / 1 = 12\n')
      }
      if (a == 12 && sign == '/' && b == 2) {
        rl.write('12 / 2 = 6\n')
      }
      if (a == 12 && sign == '/' && b == 3) {
        rl.write('12 / 3 = 4\n')
      }
      if (a == 12 && sign == '/' && b == 4) {
        rl.write('12 / 4 = 3\n')
      }
      if (a == 12 && sign == '/' && b == 5) {
        rl.write('12 / 5 = 2.4\n')
      }
      if (a == 12 && sign == '/' && b == 6) {
        rl.write('12 / 6 = 2\n')
      }
      if (a == 12 && sign == '/' && b == 7) {
        rl.write('12 / 7 = 1.7142857142857142\n')
      }
      if (a == 12 && sign == '/' && b == 8) {
        rl.write('12 / 8 = 1.5\n')
      }
      if (a == 12 && sign == '/' && b == 9) {
        rl.write('12 / 9 = 1.3333333333333333\n')
      }
      if (a == 12 && sign == '/' && b == 10) {
        rl.write('12 / 10 = 1.2\n')
      }
      if (a == 12 && sign == '/' && b == 11) {
        rl.write('12 / 11 = 1.0909090909090908\n')
      }
      if (a == 12 && sign == '/' && b == 12) {
        rl.write('12 / 12 = 1\n')
      }
      if (a == 12 && sign == '/' && b == 13) {
        rl.write('12 / 13 = 0.9230769230769231\n')
      }
      if (a == 12 && sign == '/' && b == 14) {
        rl.write('12 / 14 = 0.8571428571428571\n')
      }
      if (a == 12 && sign == '/' && b == 15) {
        rl.write('12 / 15 = 0.8\n')
      }
      if (a == 12 && sign == '/' && b == 16) {
        rl.write('12 / 16 = 0.75\n')
      }
      if (a == 12 && sign == '/' && b == 17) {
        rl.write('12 / 17 = 0.7058823529411765\n')
      }
      if (a == 12 && sign == '/' && b == 18) {
        rl.write('12 / 18 = 0.6666666666666666\n')
      }
      if (a == 12 && sign == '/' && b == 19) {
        rl.write('12 / 19 = 0.631578947368421\n')
      }
      if (a == 12 && sign == '/' && b == 20) {
        rl.write('12 / 20 = 0.6\n')
      }
      if (a == 12 && sign == '/' && b == 21) {
        rl.write('12 / 21 = 0.5714285714285714\n')
      }
      if (a == 12 && sign == '/' && b == 22) {
        rl.write('12 / 22 = 0.5454545454545454\n')
      }
      if (a == 12 && sign == '/' && b == 23) {
        rl.write('12 / 23 = 0.5217391304347826\n')
      }
      if (a == 12 && sign == '/' && b == 24) {
        rl.write('12 / 24 = 0.5\n')
      }
      if (a == 12 && sign == '/' && b == 25) {
        rl.write('12 / 25 = 0.48\n')
      }
      if (a == 12 && sign == '/' && b == 26) {
        rl.write('12 / 26 = 0.46153846153846156\n')
      }
      if (a == 12 && sign == '/' && b == 27) {
        rl.write('12 / 27 = 0.4444444444444444\n')
      }
      if (a == 12 && sign == '/' && b == 28) {
        rl.write('12 / 28 = 0.42857142857142855\n')
      }
      if (a == 12 && sign == '/' && b == 29) {
        rl.write('12 / 29 = 0.41379310344827586\n')
      }
      if (a == 12 && sign == '/' && b == 30) {
        rl.write('12 / 30 = 0.4\n')
      }
      if (a == 12 && sign == '/' && b == 31) {
        rl.write('12 / 31 = 0.3870967741935484\n')
      }
      if (a == 12 && sign == '/' && b == 32) {
        rl.write('12 / 32 = 0.375\n')
      }
      if (a == 12 && sign == '/' && b == 33) {
        rl.write('12 / 33 = 0.36363636363636365\n')
      }
      if (a == 12 && sign == '/' && b == 34) {
        rl.write('12 / 34 = 0.35294117647058826\n')
      }
      if (a == 12 && sign == '/' && b == 35) {
        rl.write('12 / 35 = 0.34285714285714286\n')
      }
      if (a == 12 && sign == '/' && b == 36) {
        rl.write('12 / 36 = 0.3333333333333333\n')
      }
      if (a == 12 && sign == '/' && b == 37) {
        rl.write('12 / 37 = 0.32432432432432434\n')
      }
      if (a == 12 && sign == '/' && b == 38) {
        rl.write('12 / 38 = 0.3157894736842105\n')
      }
      if (a == 12 && sign == '/' && b == 39) {
        rl.write('12 / 39 = 0.3076923076923077\n')
      }
      if (a == 12 && sign == '/' && b == 40) {
        rl.write('12 / 40 = 0.3\n')
      }
      if (a == 12 && sign == '/' && b == 41) {
        rl.write('12 / 41 = 0.2926829268292683\n')
      }
      if (a == 12 && sign == '/' && b == 42) {
        rl.write('12 / 42 = 0.2857142857142857\n')
      }
      if (a == 12 && sign == '/' && b == 43) {
        rl.write('12 / 43 = 0.27906976744186046\n')
      }
      if (a == 12 && sign == '/' && b == 44) {
        rl.write('12 / 44 = 0.2727272727272727\n')
      }
      if (a == 12 && sign == '/' && b == 45) {
        rl.write('12 / 45 = 0.26666666666666666\n')
      }
      if (a == 12 && sign == '/' && b == 46) {
        rl.write('12 / 46 = 0.2608695652173913\n')
      }
      if (a == 12 && sign == '/' && b == 47) {
        rl.write('12 / 47 = 0.2553191489361702\n')
      }
      if (a == 12 && sign == '/' && b == 48) {
        rl.write('12 / 48 = 0.25\n')
      }
      if (a == 12 && sign == '/' && b == 49) {
        rl.write('12 / 49 = 0.24489795918367346\n')
      }
      if (a == 12 && sign == '/' && b == 50) {
        rl.write('12 / 50 = 0.24\n')
      }
      if (a == 13 && sign == '/' && b == 0) {
        rl.write('13 / 0 = Infinity\n')
      }
      if (a == 13 && sign == '/' && b == 1) {
        rl.write('13 / 1 = 13\n')
      }
      if (a == 13 && sign == '/' && b == 2) {
        rl.write('13 / 2 = 6.5\n')
      }
      if (a == 13 && sign == '/' && b == 3) {
        rl.write('13 / 3 = 4.333333333333333\n')
      }
      if (a == 13 && sign == '/' && b == 4) {
        rl.write('13 / 4 = 3.25\n')
      }
      if (a == 13 && sign == '/' && b == 5) {
        rl.write('13 / 5 = 2.6\n')
      }
      if (a == 13 && sign == '/' && b == 6) {
        rl.write('13 / 6 = 2.1666666666666665\n')
      }
      if (a == 13 && sign == '/' && b == 7) {
        rl.write('13 / 7 = 1.8571428571428572\n')
      }
      if (a == 13 && sign == '/' && b == 8) {
        rl.write('13 / 8 = 1.625\n')
      }
      if (a == 13 && sign == '/' && b == 9) {
        rl.write('13 / 9 = 1.4444444444444444\n')
      }
      if (a == 13 && sign == '/' && b == 10) {
        rl.write('13 / 10 = 1.3\n')
      }
      if (a == 13 && sign == '/' && b == 11) {
        rl.write('13 / 11 = 1.1818181818181819\n')
      }
      if (a == 13 && sign == '/' && b == 12) {
        rl.write('13 / 12 = 1.0833333333333333\n')
      }
      if (a == 13 && sign == '/' && b == 13) {
        rl.write('13 / 13 = 1\n')
      }
      if (a == 13 && sign == '/' && b == 14) {
        rl.write('13 / 14 = 0.9285714285714286\n')
      }
      if (a == 13 && sign == '/' && b == 15) {
        rl.write('13 / 15 = 0.8666666666666667\n')
      }
      if (a == 13 && sign == '/' && b == 16) {
        rl.write('13 / 16 = 0.8125\n')
      }
      if (a == 13 && sign == '/' && b == 17) {
        rl.write('13 / 17 = 0.7647058823529411\n')
      }
      if (a == 13 && sign == '/' && b == 18) {
        rl.write('13 / 18 = 0.7222222222222222\n')
      }
      if (a == 13 && sign == '/' && b == 19) {
        rl.write('13 / 19 = 0.6842105263157895\n')
      }
      if (a == 13 && sign == '/' && b == 20) {
        rl.write('13 / 20 = 0.65\n')
      }
      if (a == 13 && sign == '/' && b == 21) {
        rl.write('13 / 21 = 0.6190476190476191\n')
      }
      if (a == 13 && sign == '/' && b == 22) {
        rl.write('13 / 22 = 0.5909090909090909\n')
      }
      if (a == 13 && sign == '/' && b == 23) {
        rl.write('13 / 23 = 0.5652173913043478\n')
      }
      if (a == 13 && sign == '/' && b == 24) {
        rl.write('13 / 24 = 0.5416666666666666\n')
      }
      if (a == 13 && sign == '/' && b == 25) {
        rl.write('13 / 25 = 0.52\n')
      }
      if (a == 13 && sign == '/' && b == 26) {
        rl.write('13 / 26 = 0.5\n')
      }
      if (a == 13 && sign == '/' && b == 27) {
        rl.write('13 / 27 = 0.48148148148148145\n')
      }
      if (a == 13 && sign == '/' && b == 28) {
        rl.write('13 / 28 = 0.4642857142857143\n')
      }
      if (a == 13 && sign == '/' && b == 29) {
        rl.write('13 / 29 = 0.4482758620689655\n')
      }
      if (a == 13 && sign == '/' && b == 30) {
        rl.write('13 / 30 = 0.43333333333333335\n')
      }
      if (a == 13 && sign == '/' && b == 31) {
        rl.write('13 / 31 = 0.41935483870967744\n')
      }
      if (a == 13 && sign == '/' && b == 32) {
        rl.write('13 / 32 = 0.40625\n')
      }
      if (a == 13 && sign == '/' && b == 33) {
        rl.write('13 / 33 = 0.3939393939393939\n')
      }
      if (a == 13 && sign == '/' && b == 34) {
        rl.write('13 / 34 = 0.38235294117647056\n')
      }
      if (a == 13 && sign == '/' && b == 35) {
        rl.write('13 / 35 = 0.37142857142857144\n')
      }
      if (a == 13 && sign == '/' && b == 36) {
        rl.write('13 / 36 = 0.3611111111111111\n')
      }
      if (a == 13 && sign == '/' && b == 37) {
        rl.write('13 / 37 = 0.35135135135135137\n')
      }
      if (a == 13 && sign == '/' && b == 38) {
        rl.write('13 / 38 = 0.34210526315789475\n')
      }
      if (a == 13 && sign == '/' && b == 39) {
        rl.write('13 / 39 = 0.3333333333333333\n')
      }
      if (a == 13 && sign == '/' && b == 40) {
        rl.write('13 / 40 = 0.325\n')
      }
      if (a == 13 && sign == '/' && b == 41) {
        rl.write('13 / 41 = 0.3170731707317073\n')
      }
      if (a == 13 && sign == '/' && b == 42) {
        rl.write('13 / 42 = 0.30952380952380953\n')
      }
      if (a == 13 && sign == '/' && b == 43) {
        rl.write('13 / 43 = 0.3023255813953488\n')
      }
      if (a == 13 && sign == '/' && b == 44) {
        rl.write('13 / 44 = 0.29545454545454547\n')
      }
      if (a == 13 && sign == '/' && b == 45) {
        rl.write('13 / 45 = 0.28888888888888886\n')
      }
      if (a == 13 && sign == '/' && b == 46) {
        rl.write('13 / 46 = 0.2826086956521739\n')
      }
      if (a == 13 && sign == '/' && b == 47) {
        rl.write('13 / 47 = 0.2765957446808511\n')
      }
      if (a == 13 && sign == '/' && b == 48) {
        rl.write('13 / 48 = 0.2708333333333333\n')
      }
      if (a == 13 && sign == '/' && b == 49) {
        rl.write('13 / 49 = 0.2653061224489796\n')
      }
      if (a == 13 && sign == '/' && b == 50) {
        rl.write('13 / 50 = 0.26\n')
      }
      if (a == 14 && sign == '/' && b == 0) {
        rl.write('14 / 0 = Infinity\n')
      }
      if (a == 14 && sign == '/' && b == 1) {
        rl.write('14 / 1 = 14\n')
      }
      if (a == 14 && sign == '/' && b == 2) {
        rl.write('14 / 2 = 7\n')
      }
      if (a == 14 && sign == '/' && b == 3) {
        rl.write('14 / 3 = 4.666666666666667\n')
      }
      if (a == 14 && sign == '/' && b == 4) {
        rl.write('14 / 4 = 3.5\n')
      }
      if (a == 14 && sign == '/' && b == 5) {
        rl.write('14 / 5 = 2.8\n')
      }
      if (a == 14 && sign == '/' && b == 6) {
        rl.write('14 / 6 = 2.3333333333333335\n')
      }
      if (a == 14 && sign == '/' && b == 7) {
        rl.write('14 / 7 = 2\n')
      }
      if (a == 14 && sign == '/' && b == 8) {
        rl.write('14 / 8 = 1.75\n')
      }
      if (a == 14 && sign == '/' && b == 9) {
        rl.write('14 / 9 = 1.5555555555555556\n')
      }
      if (a == 14 && sign == '/' && b == 10) {
        rl.write('14 / 10 = 1.4\n')
      }
      if (a == 14 && sign == '/' && b == 11) {
        rl.write('14 / 11 = 1.2727272727272727\n')
      }
      if (a == 14 && sign == '/' && b == 12) {
        rl.write('14 / 12 = 1.1666666666666667\n')
      }
      if (a == 14 && sign == '/' && b == 13) {
        rl.write('14 / 13 = 1.0769230769230769\n')
      }
      if (a == 14 && sign == '/' && b == 14) {
        rl.write('14 / 14 = 1\n')
      }
      if (a == 14 && sign == '/' && b == 15) {
        rl.write('14 / 15 = 0.9333333333333333\n')
      }
      if (a == 14 && sign == '/' && b == 16) {
        rl.write('14 / 16 = 0.875\n')
      }
      if (a == 14 && sign == '/' && b == 17) {
        rl.write('14 / 17 = 0.8235294117647058\n')
      }
      if (a == 14 && sign == '/' && b == 18) {
        rl.write('14 / 18 = 0.7777777777777778\n')
      }
      if (a == 14 && sign == '/' && b == 19) {
        rl.write('14 / 19 = 0.7368421052631579\n')
      }
      if (a == 14 && sign == '/' && b == 20) {
        rl.write('14 / 20 = 0.7\n')
      }
      if (a == 14 && sign == '/' && b == 21) {
        rl.write('14 / 21 = 0.6666666666666666\n')
      }
      if (a == 14 && sign == '/' && b == 22) {
        rl.write('14 / 22 = 0.6363636363636364\n')
      }
      if (a == 14 && sign == '/' && b == 23) {
        rl.write('14 / 23 = 0.6086956521739131\n')
      }
      if (a == 14 && sign == '/' && b == 24) {
        rl.write('14 / 24 = 0.5833333333333334\n')
      }
      if (a == 14 && sign == '/' && b == 25) {
        rl.write('14 / 25 = 0.56\n')
      }
      if (a == 14 && sign == '/' && b == 26) {
        rl.write('14 / 26 = 0.5384615384615384\n')
      }
      if (a == 14 && sign == '/' && b == 27) {
        rl.write('14 / 27 = 0.5185185185185185\n')
      }
      if (a == 14 && sign == '/' && b == 28) {
        rl.write('14 / 28 = 0.5\n')
      }
      if (a == 14 && sign == '/' && b == 29) {
        rl.write('14 / 29 = 0.4827586206896552\n')
      }
      if (a == 14 && sign == '/' && b == 30) {
        rl.write('14 / 30 = 0.4666666666666667\n')
      }
      if (a == 14 && sign == '/' && b == 31) {
        rl.write('14 / 31 = 0.45161290322580644\n')
      }
      if (a == 14 && sign == '/' && b == 32) {
        rl.write('14 / 32 = 0.4375\n')
      }
      if (a == 14 && sign == '/' && b == 33) {
        rl.write('14 / 33 = 0.42424242424242425\n')
      }
      if (a == 14 && sign == '/' && b == 34) {
        rl.write('14 / 34 = 0.4117647058823529\n')
      }
      if (a == 14 && sign == '/' && b == 35) {
        rl.write('14 / 35 = 0.4\n')
      }
      if (a == 14 && sign == '/' && b == 36) {
        rl.write('14 / 36 = 0.3888888888888889\n')
      }
      if (a == 14 && sign == '/' && b == 37) {
        rl.write('14 / 37 = 0.3783783783783784\n')
      }
      if (a == 14 && sign == '/' && b == 38) {
        rl.write('14 / 38 = 0.3684210526315789\n')
      }
      if (a == 14 && sign == '/' && b == 39) {
        rl.write('14 / 39 = 0.358974358974359\n')
      }
      if (a == 14 && sign == '/' && b == 40) {
        rl.write('14 / 40 = 0.35\n')
      }
      if (a == 14 && sign == '/' && b == 41) {
        rl.write('14 / 41 = 0.34146341463414637\n')
      }
      if (a == 14 && sign == '/' && b == 42) {
        rl.write('14 / 42 = 0.3333333333333333\n')
      }
      if (a == 14 && sign == '/' && b == 43) {
        rl.write('14 / 43 = 0.32558139534883723\n')
      }
      if (a == 14 && sign == '/' && b == 44) {
        rl.write('14 / 44 = 0.3181818181818182\n')
      }
      if (a == 14 && sign == '/' && b == 45) {
        rl.write('14 / 45 = 0.3111111111111111\n')
      }
      if (a == 14 && sign == '/' && b == 46) {
        rl.write('14 / 46 = 0.30434782608695654\n')
      }
      if (a == 14 && sign == '/' && b == 47) {
        rl.write('14 / 47 = 0.2978723404255319\n')
      }
      if (a == 14 && sign == '/' && b == 48) {
        rl.write('14 / 48 = 0.2916666666666667\n')
      }
      if (a == 14 && sign == '/' && b == 49) {
        rl.write('14 / 49 = 0.2857142857142857\n')
      }
      if (a == 14 && sign == '/' && b == 50) {
        rl.write('14 / 50 = 0.28\n')
      }
      if (a == 15 && sign == '/' && b == 0) {
        rl.write('15 / 0 = Infinity\n')
      }
      if (a == 15 && sign == '/' && b == 1) {
        rl.write('15 / 1 = 15\n')
      }
      if (a == 15 && sign == '/' && b == 2) {
        rl.write('15 / 2 = 7.5\n')
      }
      if (a == 15 && sign == '/' && b == 3) {
        rl.write('15 / 3 = 5\n')
      }
      if (a == 15 && sign == '/' && b == 4) {
        rl.write('15 / 4 = 3.75\n')
      }
      if (a == 15 && sign == '/' && b == 5) {
        rl.write('15 / 5 = 3\n')
      }
      if (a == 15 && sign == '/' && b == 6) {
        rl.write('15 / 6 = 2.5\n')
      }
      if (a == 15 && sign == '/' && b == 7) {
        rl.write('15 / 7 = 2.142857142857143\n')
      }
      if (a == 15 && sign == '/' && b == 8) {
        rl.write('15 / 8 = 1.875\n')
      }
      if (a == 15 && sign == '/' && b == 9) {
        rl.write('15 / 9 = 1.6666666666666667\n')
      }
      if (a == 15 && sign == '/' && b == 10) {
        rl.write('15 / 10 = 1.5\n')
      }
      if (a == 15 && sign == '/' && b == 11) {
        rl.write('15 / 11 = 1.3636363636363635\n')
      }
      if (a == 15 && sign == '/' && b == 12) {
        rl.write('15 / 12 = 1.25\n')
      }
      if (a == 15 && sign == '/' && b == 13) {
        rl.write('15 / 13 = 1.1538461538461537\n')
      }
      if (a == 15 && sign == '/' && b == 14) {
        rl.write('15 / 14 = 1.0714285714285714\n')
      }
      if (a == 15 && sign == '/' && b == 15) {
        rl.write('15 / 15 = 1\n')
      }
      if (a == 15 && sign == '/' && b == 16) {
        rl.write('15 / 16 = 0.9375\n')
      }
      if (a == 15 && sign == '/' && b == 17) {
        rl.write('15 / 17 = 0.8823529411764706\n')
      }
      if (a == 15 && sign == '/' && b == 18) {
        rl.write('15 / 18 = 0.8333333333333334\n')
      }
      if (a == 15 && sign == '/' && b == 19) {
        rl.write('15 / 19 = 0.7894736842105263\n')
      }
      if (a == 15 && sign == '/' && b == 20) {
        rl.write('15 / 20 = 0.75\n')
      }
      if (a == 15 && sign == '/' && b == 21) {
        rl.write('15 / 21 = 0.7142857142857143\n')
      }
      if (a == 15 && sign == '/' && b == 22) {
        rl.write('15 / 22 = 0.6818181818181818\n')
      }
      if (a == 15 && sign == '/' && b == 23) {
        rl.write('15 / 23 = 0.6521739130434783\n')
      }
      if (a == 15 && sign == '/' && b == 24) {
        rl.write('15 / 24 = 0.625\n')
      }
      if (a == 15 && sign == '/' && b == 25) {
        rl.write('15 / 25 = 0.6\n')
      }
      if (a == 15 && sign == '/' && b == 26) {
        rl.write('15 / 26 = 0.5769230769230769\n')
      }
      if (a == 15 && sign == '/' && b == 27) {
        rl.write('15 / 27 = 0.5555555555555556\n')
      }
      if (a == 15 && sign == '/' && b == 28) {
        rl.write('15 / 28 = 0.5357142857142857\n')
      }
      if (a == 15 && sign == '/' && b == 29) {
        rl.write('15 / 29 = 0.5172413793103449\n')
      }
      if (a == 15 && sign == '/' && b == 30) {
        rl.write('15 / 30 = 0.5\n')
      }
      if (a == 15 && sign == '/' && b == 31) {
        rl.write('15 / 31 = 0.4838709677419355\n')
      }
      if (a == 15 && sign == '/' && b == 32) {
        rl.write('15 / 32 = 0.46875\n')
      }
      if (a == 15 && sign == '/' && b == 33) {
        rl.write('15 / 33 = 0.45454545454545453\n')
      }
      if (a == 15 && sign == '/' && b == 34) {
        rl.write('15 / 34 = 0.4411764705882353\n')
      }
      if (a == 15 && sign == '/' && b == 35) {
        rl.write('15 / 35 = 0.42857142857142855\n')
      }
      if (a == 15 && sign == '/' && b == 36) {
        rl.write('15 / 36 = 0.4166666666666667\n')
      }
      if (a == 15 && sign == '/' && b == 37) {
        rl.write('15 / 37 = 0.40540540540540543\n')
      }
      if (a == 15 && sign == '/' && b == 38) {
        rl.write('15 / 38 = 0.39473684210526316\n')
      }
      if (a == 15 && sign == '/' && b == 39) {
        rl.write('15 / 39 = 0.38461538461538464\n')
      }
      if (a == 15 && sign == '/' && b == 40) {
        rl.write('15 / 40 = 0.375\n')
      }
      if (a == 15 && sign == '/' && b == 41) {
        rl.write('15 / 41 = 0.36585365853658536\n')
      }
      if (a == 15 && sign == '/' && b == 42) {
        rl.write('15 / 42 = 0.35714285714285715\n')
      }
      if (a == 15 && sign == '/' && b == 43) {
        rl.write('15 / 43 = 0.3488372093023256\n')
      }
      if (a == 15 && sign == '/' && b == 44) {
        rl.write('15 / 44 = 0.3409090909090909\n')
      }
      if (a == 15 && sign == '/' && b == 45) {
        rl.write('15 / 45 = 0.3333333333333333\n')
      }
      if (a == 15 && sign == '/' && b == 46) {
        rl.write('15 / 46 = 0.32608695652173914\n')
      }
      if (a == 15 && sign == '/' && b == 47) {
        rl.write('15 / 47 = 0.3191489361702128\n')
      }
      if (a == 15 && sign == '/' && b == 48) {
        rl.write('15 / 48 = 0.3125\n')
      }
      if (a == 15 && sign == '/' && b == 49) {
        rl.write('15 / 49 = 0.30612244897959184\n')
      }
      if (a == 15 && sign == '/' && b == 50) {
        rl.write('15 / 50 = 0.3\n')
      }
      if (a == 16 && sign == '/' && b == 0) {
        rl.write('16 / 0 = Infinity\n')
      }
      if (a == 16 && sign == '/' && b == 1) {
        rl.write('16 / 1 = 16\n')
      }
      if (a == 16 && sign == '/' && b == 2) {
        rl.write('16 / 2 = 8\n')
      }
      if (a == 16 && sign == '/' && b == 3) {
        rl.write('16 / 3 = 5.333333333333333\n')
      }
      if (a == 16 && sign == '/' && b == 4) {
        rl.write('16 / 4 = 4\n')
      }
      if (a == 16 && sign == '/' && b == 5) {
        rl.write('16 / 5 = 3.2\n')
      }
      if (a == 16 && sign == '/' && b == 6) {
        rl.write('16 / 6 = 2.6666666666666665\n')
      }
      if (a == 16 && sign == '/' && b == 7) {
        rl.write('16 / 7 = 2.2857142857142856\n')
      }
      if (a == 16 && sign == '/' && b == 8) {
        rl.write('16 / 8 = 2\n')
      }
      if (a == 16 && sign == '/' && b == 9) {
        rl.write('16 / 9 = 1.7777777777777777\n')
      }
      if (a == 16 && sign == '/' && b == 10) {
        rl.write('16 / 10 = 1.6\n')
      }
      if (a == 16 && sign == '/' && b == 11) {
        rl.write('16 / 11 = 1.4545454545454546\n')
      }
      if (a == 16 && sign == '/' && b == 12) {
        rl.write('16 / 12 = 1.3333333333333333\n')
      }
      if (a == 16 && sign == '/' && b == 13) {
        rl.write('16 / 13 = 1.2307692307692308\n')
      }
      if (a == 16 && sign == '/' && b == 14) {
        rl.write('16 / 14 = 1.1428571428571428\n')
      }
      if (a == 16 && sign == '/' && b == 15) {
        rl.write('16 / 15 = 1.0666666666666667\n')
      }
      if (a == 16 && sign == '/' && b == 16) {
        rl.write('16 / 16 = 1\n')
      }
      if (a == 16 && sign == '/' && b == 17) {
        rl.write('16 / 17 = 0.9411764705882353\n')
      }
      if (a == 16 && sign == '/' && b == 18) {
        rl.write('16 / 18 = 0.8888888888888888\n')
      }
      if (a == 16 && sign == '/' && b == 19) {
        rl.write('16 / 19 = 0.8421052631578947\n')
      }
      if (a == 16 && sign == '/' && b == 20) {
        rl.write('16 / 20 = 0.8\n')
      }
      if (a == 16 && sign == '/' && b == 21) {
        rl.write('16 / 21 = 0.7619047619047619\n')
      }
      if (a == 16 && sign == '/' && b == 22) {
        rl.write('16 / 22 = 0.7272727272727273\n')
      }
      if (a == 16 && sign == '/' && b == 23) {
        rl.write('16 / 23 = 0.6956521739130435\n')
      }
      if (a == 16 && sign == '/' && b == 24) {
        rl.write('16 / 24 = 0.6666666666666666\n')
      }
      if (a == 16 && sign == '/' && b == 25) {
        rl.write('16 / 25 = 0.64\n')
      }
      if (a == 16 && sign == '/' && b == 26) {
        rl.write('16 / 26 = 0.6153846153846154\n')
      }
      if (a == 16 && sign == '/' && b == 27) {
        rl.write('16 / 27 = 0.5925925925925926\n')
      }
      if (a == 16 && sign == '/' && b == 28) {
        rl.write('16 / 28 = 0.5714285714285714\n')
      }
      if (a == 16 && sign == '/' && b == 29) {
        rl.write('16 / 29 = 0.5517241379310345\n')
      }
      if (a == 16 && sign == '/' && b == 30) {
        rl.write('16 / 30 = 0.5333333333333333\n')
      }
      if (a == 16 && sign == '/' && b == 31) {
        rl.write('16 / 31 = 0.5161290322580645\n')
      }
      if (a == 16 && sign == '/' && b == 32) {
        rl.write('16 / 32 = 0.5\n')
      }
      if (a == 16 && sign == '/' && b == 33) {
        rl.write('16 / 33 = 0.48484848484848486\n')
      }
      if (a == 16 && sign == '/' && b == 34) {
        rl.write('16 / 34 = 0.47058823529411764\n')
      }
      if (a == 16 && sign == '/' && b == 35) {
        rl.write('16 / 35 = 0.45714285714285713\n')
      }
      if (a == 16 && sign == '/' && b == 36) {
        rl.write('16 / 36 = 0.4444444444444444\n')
      }
      if (a == 16 && sign == '/' && b == 37) {
        rl.write('16 / 37 = 0.43243243243243246\n')
      }
      if (a == 16 && sign == '/' && b == 38) {
        rl.write('16 / 38 = 0.42105263157894735\n')
      }
      if (a == 16 && sign == '/' && b == 39) {
        rl.write('16 / 39 = 0.41025641025641024\n')
      }
      if (a == 16 && sign == '/' && b == 40) {
        rl.write('16 / 40 = 0.4\n')
      }
      if (a == 16 && sign == '/' && b == 41) {
        rl.write('16 / 41 = 0.3902439024390244\n')
      }
      if (a == 16 && sign == '/' && b == 42) {
        rl.write('16 / 42 = 0.38095238095238093\n')
      }
      if (a == 16 && sign == '/' && b == 43) {
        rl.write('16 / 43 = 0.37209302325581395\n')
      }
      if (a == 16 && sign == '/' && b == 44) {
        rl.write('16 / 44 = 0.36363636363636365\n')
      }
      if (a == 16 && sign == '/' && b == 45) {
        rl.write('16 / 45 = 0.35555555555555557\n')
      }
      if (a == 16 && sign == '/' && b == 46) {
        rl.write('16 / 46 = 0.34782608695652173\n')
      }
      if (a == 16 && sign == '/' && b == 47) {
        rl.write('16 / 47 = 0.3404255319148936\n')
      }
      if (a == 16 && sign == '/' && b == 48) {
        rl.write('16 / 48 = 0.3333333333333333\n')
      }
      if (a == 16 && sign == '/' && b == 49) {
        rl.write('16 / 49 = 0.32653061224489793\n')
      }
      if (a == 16 && sign == '/' && b == 50) {
        rl.write('16 / 50 = 0.32\n')
      }
      if (a == 17 && sign == '/' && b == 0) {
        rl.write('17 / 0 = Infinity\n')
      }
      if (a == 17 && sign == '/' && b == 1) {
        rl.write('17 / 1 = 17\n')
      }
      if (a == 17 && sign == '/' && b == 2) {
        rl.write('17 / 2 = 8.5\n')
      }
      if (a == 17 && sign == '/' && b == 3) {
        rl.write('17 / 3 = 5.666666666666667\n')
      }
      if (a == 17 && sign == '/' && b == 4) {
        rl.write('17 / 4 = 4.25\n')
      }
      if (a == 17 && sign == '/' && b == 5) {
        rl.write('17 / 5 = 3.4\n')
      }
      if (a == 17 && sign == '/' && b == 6) {
        rl.write('17 / 6 = 2.8333333333333335\n')
      }
      if (a == 17 && sign == '/' && b == 7) {
        rl.write('17 / 7 = 2.4285714285714284\n')
      }
      if (a == 17 && sign == '/' && b == 8) {
        rl.write('17 / 8 = 2.125\n')
      }
      if (a == 17 && sign == '/' && b == 9) {
        rl.write('17 / 9 = 1.8888888888888888\n')
      }
      if (a == 17 && sign == '/' && b == 10) {
        rl.write('17 / 10 = 1.7\n')
      }
      if (a == 17 && sign == '/' && b == 11) {
        rl.write('17 / 11 = 1.5454545454545454\n')
      }
      if (a == 17 && sign == '/' && b == 12) {
        rl.write('17 / 12 = 1.4166666666666667\n')
      }
      if (a == 17 && sign == '/' && b == 13) {
        rl.write('17 / 13 = 1.3076923076923077\n')
      }
      if (a == 17 && sign == '/' && b == 14) {
        rl.write('17 / 14 = 1.2142857142857142\n')
      }
      if (a == 17 && sign == '/' && b == 15) {
        rl.write('17 / 15 = 1.1333333333333333\n')
      }
      if (a == 17 && sign == '/' && b == 16) {
        rl.write('17 / 16 = 1.0625\n')
      }
      if (a == 17 && sign == '/' && b == 17) {
        rl.write('17 / 17 = 1\n')
      }
      if (a == 17 && sign == '/' && b == 18) {
        rl.write('17 / 18 = 0.9444444444444444\n')
      }
      if (a == 17 && sign == '/' && b == 19) {
        rl.write('17 / 19 = 0.8947368421052632\n')
      }
      if (a == 17 && sign == '/' && b == 20) {
        rl.write('17 / 20 = 0.85\n')
      }
      if (a == 17 && sign == '/' && b == 21) {
        rl.write('17 / 21 = 0.8095238095238095\n')
      }
      if (a == 17 && sign == '/' && b == 22) {
        rl.write('17 / 22 = 0.7727272727272727\n')
      }
      if (a == 17 && sign == '/' && b == 23) {
        rl.write('17 / 23 = 0.7391304347826086\n')
      }
      if (a == 17 && sign == '/' && b == 24) {
        rl.write('17 / 24 = 0.7083333333333334\n')
      }
      if (a == 17 && sign == '/' && b == 25) {
        rl.write('17 / 25 = 0.68\n')
      }
      if (a == 17 && sign == '/' && b == 26) {
        rl.write('17 / 26 = 0.6538461538461539\n')
      }
      if (a == 17 && sign == '/' && b == 27) {
        rl.write('17 / 27 = 0.6296296296296297\n')
      }
      if (a == 17 && sign == '/' && b == 28) {
        rl.write('17 / 28 = 0.6071428571428571\n')
      }
      if (a == 17 && sign == '/' && b == 29) {
        rl.write('17 / 29 = 0.5862068965517241\n')
      }
      if (a == 17 && sign == '/' && b == 30) {
        rl.write('17 / 30 = 0.5666666666666667\n')
      }
      if (a == 17 && sign == '/' && b == 31) {
        rl.write('17 / 31 = 0.5483870967741935\n')
      }
      if (a == 17 && sign == '/' && b == 32) {
        rl.write('17 / 32 = 0.53125\n')
      }
      if (a == 17 && sign == '/' && b == 33) {
        rl.write('17 / 33 = 0.5151515151515151\n')
      }
      if (a == 17 && sign == '/' && b == 34) {
        rl.write('17 / 34 = 0.5\n')
      }
      if (a == 17 && sign == '/' && b == 35) {
        rl.write('17 / 35 = 0.4857142857142857\n')
      }
      if (a == 17 && sign == '/' && b == 36) {
        rl.write('17 / 36 = 0.4722222222222222\n')
      }
      if (a == 17 && sign == '/' && b == 37) {
        rl.write('17 / 37 = 0.4594594594594595\n')
      }
      if (a == 17 && sign == '/' && b == 38) {
        rl.write('17 / 38 = 0.4473684210526316\n')
      }
      if (a == 17 && sign == '/' && b == 39) {
        rl.write('17 / 39 = 0.4358974358974359\n')
      }
      if (a == 17 && sign == '/' && b == 40) {
        rl.write('17 / 40 = 0.425\n')
      }
      if (a == 17 && sign == '/' && b == 41) {
        rl.write('17 / 41 = 0.4146341463414634\n')
      }
      if (a == 17 && sign == '/' && b == 42) {
        rl.write('17 / 42 = 0.40476190476190477\n')
      }
      if (a == 17 && sign == '/' && b == 43) {
        rl.write('17 / 43 = 0.3953488372093023\n')
      }
      if (a == 17 && sign == '/' && b == 44) {
        rl.write('17 / 44 = 0.38636363636363635\n')
      }
      if (a == 17 && sign == '/' && b == 45) {
        rl.write('17 / 45 = 0.37777777777777777\n')
      }
      if (a == 17 && sign == '/' && b == 46) {
        rl.write('17 / 46 = 0.3695652173913043\n')
      }
      if (a == 17 && sign == '/' && b == 47) {
        rl.write('17 / 47 = 0.3617021276595745\n')
      }
      if (a == 17 && sign == '/' && b == 48) {
        rl.write('17 / 48 = 0.3541666666666667\n')
      }
      if (a == 17 && sign == '/' && b == 49) {
        rl.write('17 / 49 = 0.3469387755102041\n')
      }
      if (a == 17 && sign == '/' && b == 50) {
        rl.write('17 / 50 = 0.34\n')
      }
      if (a == 18 && sign == '/' && b == 0) {
        rl.write('18 / 0 = Infinity\n')
      }
      if (a == 18 && sign == '/' && b == 1) {
        rl.write('18 / 1 = 18\n')
      }
      if (a == 18 && sign == '/' && b == 2) {
        rl.write('18 / 2 = 9\n')
      }
      if (a == 18 && sign == '/' && b == 3) {
        rl.write('18 / 3 = 6\n')
      }
      if (a == 18 && sign == '/' && b == 4) {
        rl.write('18 / 4 = 4.5\n')
      }
      if (a == 18 && sign == '/' && b == 5) {
        rl.write('18 / 5 = 3.6\n')
      }
      if (a == 18 && sign == '/' && b == 6) {
        rl.write('18 / 6 = 3\n')
      }
      if (a == 18 && sign == '/' && b == 7) {
        rl.write('18 / 7 = 2.5714285714285716\n')
      }
      if (a == 18 && sign == '/' && b == 8) {
        rl.write('18 / 8 = 2.25\n')
      }
      if (a == 18 && sign == '/' && b == 9) {
        rl.write('18 / 9 = 2\n')
      }
      if (a == 18 && sign == '/' && b == 10) {
        rl.write('18 / 10 = 1.8\n')
      }
      if (a == 18 && sign == '/' && b == 11) {
        rl.write('18 / 11 = 1.6363636363636365\n')
      }
      if (a == 18 && sign == '/' && b == 12) {
        rl.write('18 / 12 = 1.5\n')
      }
      if (a == 18 && sign == '/' && b == 13) {
        rl.write('18 / 13 = 1.3846153846153846\n')
      }
      if (a == 18 && sign == '/' && b == 14) {
        rl.write('18 / 14 = 1.2857142857142858\n')
      }
      if (a == 18 && sign == '/' && b == 15) {
        rl.write('18 / 15 = 1.2\n')
      }
      if (a == 18 && sign == '/' && b == 16) {
        rl.write('18 / 16 = 1.125\n')
      }
      if (a == 18 && sign == '/' && b == 17) {
        rl.write('18 / 17 = 1.0588235294117647\n')
      }
      if (a == 18 && sign == '/' && b == 18) {
        rl.write('18 / 18 = 1\n')
      }
      if (a == 18 && sign == '/' && b == 19) {
        rl.write('18 / 19 = 0.9473684210526315\n')
      }
      if (a == 18 && sign == '/' && b == 20) {
        rl.write('18 / 20 = 0.9\n')
      }
      if (a == 18 && sign == '/' && b == 21) {
        rl.write('18 / 21 = 0.8571428571428571\n')
      }
      if (a == 18 && sign == '/' && b == 22) {
        rl.write('18 / 22 = 0.8181818181818182\n')
      }
      if (a == 18 && sign == '/' && b == 23) {
        rl.write('18 / 23 = 0.782608695652174\n')
      }
      if (a == 18 && sign == '/' && b == 24) {
        rl.write('18 / 24 = 0.75\n')
      }
      if (a == 18 && sign == '/' && b == 25) {
        rl.write('18 / 25 = 0.72\n')
      }
      if (a == 18 && sign == '/' && b == 26) {
        rl.write('18 / 26 = 0.6923076923076923\n')
      }
      if (a == 18 && sign == '/' && b == 27) {
        rl.write('18 / 27 = 0.6666666666666666\n')
      }
      if (a == 18 && sign == '/' && b == 28) {
        rl.write('18 / 28 = 0.6428571428571429\n')
      }
      if (a == 18 && sign == '/' && b == 29) {
        rl.write('18 / 29 = 0.6206896551724138\n')
      }
      if (a == 18 && sign == '/' && b == 30) {
        rl.write('18 / 30 = 0.6\n')
      }
      if (a == 18 && sign == '/' && b == 31) {
        rl.write('18 / 31 = 0.5806451612903226\n')
      }
      if (a == 18 && sign == '/' && b == 32) {
        rl.write('18 / 32 = 0.5625\n')
      }
      if (a == 18 && sign == '/' && b == 33) {
        rl.write('18 / 33 = 0.5454545454545454\n')
      }
      if (a == 18 && sign == '/' && b == 34) {
        rl.write('18 / 34 = 0.5294117647058824\n')
      }
      if (a == 18 && sign == '/' && b == 35) {
        rl.write('18 / 35 = 0.5142857142857142\n')
      }
      if (a == 18 && sign == '/' && b == 36) {
        rl.write('18 / 36 = 0.5\n')
      }
      if (a == 18 && sign == '/' && b == 37) {
        rl.write('18 / 37 = 0.4864864864864865\n')
      }
      if (a == 18 && sign == '/' && b == 38) {
        rl.write('18 / 38 = 0.47368421052631576\n')
      }
      if (a == 18 && sign == '/' && b == 39) {
        rl.write('18 / 39 = 0.46153846153846156\n')
      }
      if (a == 18 && sign == '/' && b == 40) {
        rl.write('18 / 40 = 0.45\n')
      }
      if (a == 18 && sign == '/' && b == 41) {
        rl.write('18 / 41 = 0.43902439024390244\n')
      }
      if (a == 18 && sign == '/' && b == 42) {
        rl.write('18 / 42 = 0.42857142857142855\n')
      }
      if (a == 18 && sign == '/' && b == 43) {
        rl.write('18 / 43 = 0.4186046511627907\n')
      }
      if (a == 18 && sign == '/' && b == 44) {
        rl.write('18 / 44 = 0.4090909090909091\n')
      }
      if (a == 18 && sign == '/' && b == 45) {
        rl.write('18 / 45 = 0.4\n')
      }
      if (a == 18 && sign == '/' && b == 46) {
        rl.write('18 / 46 = 0.391304347826087\n')
      }
      if (a == 18 && sign == '/' && b == 47) {
        rl.write('18 / 47 = 0.3829787234042553\n')
      }
      if (a == 18 && sign == '/' && b == 48) {
        rl.write('18 / 48 = 0.375\n')
      }
      if (a == 18 && sign == '/' && b == 49) {
        rl.write('18 / 49 = 0.3673469387755102\n')
      }
      if (a == 18 && sign == '/' && b == 50) {
        rl.write('18 / 50 = 0.36\n')
      }
      if (a == 19 && sign == '/' && b == 0) {
        rl.write('19 / 0 = Infinity\n')
      }
      if (a == 19 && sign == '/' && b == 1) {
        rl.write('19 / 1 = 19\n')
      }
      if (a == 19 && sign == '/' && b == 2) {
        rl.write('19 / 2 = 9.5\n')
      }
      if (a == 19 && sign == '/' && b == 3) {
        rl.write('19 / 3 = 6.333333333333333\n')
      }
      if (a == 19 && sign == '/' && b == 4) {
        rl.write('19 / 4 = 4.75\n')
      }
      if (a == 19 && sign == '/' && b == 5) {
        rl.write('19 / 5 = 3.8\n')
      }
      if (a == 19 && sign == '/' && b == 6) {
        rl.write('19 / 6 = 3.1666666666666665\n')
      }
      if (a == 19 && sign == '/' && b == 7) {
        rl.write('19 / 7 = 2.7142857142857144\n')
      }
      if (a == 19 && sign == '/' && b == 8) {
        rl.write('19 / 8 = 2.375\n')
      }
      if (a == 19 && sign == '/' && b == 9) {
        rl.write('19 / 9 = 2.111111111111111\n')
      }
      if (a == 19 && sign == '/' && b == 10) {
        rl.write('19 / 10 = 1.9\n')
      }
      if (a == 19 && sign == '/' && b == 11) {
        rl.write('19 / 11 = 1.7272727272727273\n')
      }
      if (a == 19 && sign == '/' && b == 12) {
        rl.write('19 / 12 = 1.5833333333333333\n')
      }
      if (a == 19 && sign == '/' && b == 13) {
        rl.write('19 / 13 = 1.4615384615384615\n')
      }
      if (a == 19 && sign == '/' && b == 14) {
        rl.write('19 / 14 = 1.3571428571428572\n')
      }
      if (a == 19 && sign == '/' && b == 15) {
        rl.write('19 / 15 = 1.2666666666666666\n')
      }
      if (a == 19 && sign == '/' && b == 16) {
        rl.write('19 / 16 = 1.1875\n')
      }
      if (a == 19 && sign == '/' && b == 17) {
        rl.write('19 / 17 = 1.1176470588235294\n')
      }
      if (a == 19 && sign == '/' && b == 18) {
        rl.write('19 / 18 = 1.0555555555555556\n')
      }
      if (a == 19 && sign == '/' && b == 19) {
        rl.write('19 / 19 = 1\n')
      }
      if (a == 19 && sign == '/' && b == 20) {
        rl.write('19 / 20 = 0.95\n')
      }
      if (a == 19 && sign == '/' && b == 21) {
        rl.write('19 / 21 = 0.9047619047619048\n')
      }
      if (a == 19 && sign == '/' && b == 22) {
        rl.write('19 / 22 = 0.8636363636363636\n')
      }
      if (a == 19 && sign == '/' && b == 23) {
        rl.write('19 / 23 = 0.8260869565217391\n')
      }
      if (a == 19 && sign == '/' && b == 24) {
        rl.write('19 / 24 = 0.7916666666666666\n')
      }
      if (a == 19 && sign == '/' && b == 25) {
        rl.write('19 / 25 = 0.76\n')
      }
      if (a == 19 && sign == '/' && b == 26) {
        rl.write('19 / 26 = 0.7307692307692307\n')
      }
      if (a == 19 && sign == '/' && b == 27) {
        rl.write('19 / 27 = 0.7037037037037037\n')
      }
      if (a == 19 && sign == '/' && b == 28) {
        rl.write('19 / 28 = 0.6785714285714286\n')
      }
      if (a == 19 && sign == '/' && b == 29) {
        rl.write('19 / 29 = 0.6551724137931034\n')
      }
      if (a == 19 && sign == '/' && b == 30) {
        rl.write('19 / 30 = 0.6333333333333333\n')
      }
      if (a == 19 && sign == '/' && b == 31) {
        rl.write('19 / 31 = 0.6129032258064516\n')
      }
      if (a == 19 && sign == '/' && b == 32) {
        rl.write('19 / 32 = 0.59375\n')
      }
      if (a == 19 && sign == '/' && b == 33) {
        rl.write('19 / 33 = 0.5757575757575758\n')
      }
      if (a == 19 && sign == '/' && b == 34) {
        rl.write('19 / 34 = 0.5588235294117647\n')
      }
      if (a == 19 && sign == '/' && b == 35) {
        rl.write('19 / 35 = 0.5428571428571428\n')
      }
      if (a == 19 && sign == '/' && b == 36) {
        rl.write('19 / 36 = 0.5277777777777778\n')
      }
      if (a == 19 && sign == '/' && b == 37) {
        rl.write('19 / 37 = 0.5135135135135135\n')
      }
      if (a == 19 && sign == '/' && b == 38) {
        rl.write('19 / 38 = 0.5\n')
      }
      if (a == 19 && sign == '/' && b == 39) {
        rl.write('19 / 39 = 0.48717948717948717\n')
      }
      if (a == 19 && sign == '/' && b == 40) {
        rl.write('19 / 40 = 0.475\n')
      }
      if (a == 19 && sign == '/' && b == 41) {
        rl.write('19 / 41 = 0.4634146341463415\n')
      }
      if (a == 19 && sign == '/' && b == 42) {
        rl.write('19 / 42 = 0.4523809523809524\n')
      }
      if (a == 19 && sign == '/' && b == 43) {
        rl.write('19 / 43 = 0.4418604651162791\n')
      }
      if (a == 19 && sign == '/' && b == 44) {
        rl.write('19 / 44 = 0.4318181818181818\n')
      }
      if (a == 19 && sign == '/' && b == 45) {
        rl.write('19 / 45 = 0.4222222222222222\n')
      }
      if (a == 19 && sign == '/' && b == 46) {
        rl.write('19 / 46 = 0.41304347826086957\n')
      }
      if (a == 19 && sign == '/' && b == 47) {
        rl.write('19 / 47 = 0.40425531914893614\n')
      }
      if (a == 19 && sign == '/' && b == 48) {
        rl.write('19 / 48 = 0.3958333333333333\n')
      }
      if (a == 19 && sign == '/' && b == 49) {
        rl.write('19 / 49 = 0.3877551020408163\n')
      }
      if (a == 19 && sign == '/' && b == 50) {
        rl.write('19 / 50 = 0.38\n')
      }
      if (a == 20 && sign == '/' && b == 0) {
        rl.write('20 / 0 = Infinity\n')
      }
      if (a == 20 && sign == '/' && b == 1) {
        rl.write('20 / 1 = 20\n')
      }
      if (a == 20 && sign == '/' && b == 2) {
        rl.write('20 / 2 = 10\n')
      }
      if (a == 20 && sign == '/' && b == 3) {
        rl.write('20 / 3 = 6.666666666666667\n')
      }
      if (a == 20 && sign == '/' && b == 4) {
        rl.write('20 / 4 = 5\n')
      }
      if (a == 20 && sign == '/' && b == 5) {
        rl.write('20 / 5 = 4\n')
      }
      if (a == 20 && sign == '/' && b == 6) {
        rl.write('20 / 6 = 3.3333333333333335\n')
      }
      if (a == 20 && sign == '/' && b == 7) {
        rl.write('20 / 7 = 2.857142857142857\n')
      }
      if (a == 20 && sign == '/' && b == 8) {
        rl.write('20 / 8 = 2.5\n')
      }
      if (a == 20 && sign == '/' && b == 9) {
        rl.write('20 / 9 = 2.2222222222222223\n')
      }
      if (a == 20 && sign == '/' && b == 10) {
        rl.write('20 / 10 = 2\n')
      }
      if (a == 20 && sign == '/' && b == 11) {
        rl.write('20 / 11 = 1.8181818181818181\n')
      }
      if (a == 20 && sign == '/' && b == 12) {
        rl.write('20 / 12 = 1.6666666666666667\n')
      }
      if (a == 20 && sign == '/' && b == 13) {
        rl.write('20 / 13 = 1.5384615384615385\n')
      }
      if (a == 20 && sign == '/' && b == 14) {
        rl.write('20 / 14 = 1.4285714285714286\n')
      }
      if (a == 20 && sign == '/' && b == 15) {
        rl.write('20 / 15 = 1.3333333333333333\n')
      }
      if (a == 20 && sign == '/' && b == 16) {
        rl.write('20 / 16 = 1.25\n')
      }
      if (a == 20 && sign == '/' && b == 17) {
        rl.write('20 / 17 = 1.1764705882352942\n')
      }
      if (a == 20 && sign == '/' && b == 18) {
        rl.write('20 / 18 = 1.1111111111111112\n')
      }
      if (a == 20 && sign == '/' && b == 19) {
        rl.write('20 / 19 = 1.0526315789473684\n')
      }
      if (a == 20 && sign == '/' && b == 20) {
        rl.write('20 / 20 = 1\n')
      }
      if (a == 20 && sign == '/' && b == 21) {
        rl.write('20 / 21 = 0.9523809523809523\n')
      }
      if (a == 20 && sign == '/' && b == 22) {
        rl.write('20 / 22 = 0.9090909090909091\n')
      }
      if (a == 20 && sign == '/' && b == 23) {
        rl.write('20 / 23 = 0.8695652173913043\n')
      }
      if (a == 20 && sign == '/' && b == 24) {
        rl.write('20 / 24 = 0.8333333333333334\n')
      }
      if (a == 20 && sign == '/' && b == 25) {
        rl.write('20 / 25 = 0.8\n')
      }
      if (a == 20 && sign == '/' && b == 26) {
        rl.write('20 / 26 = 0.7692307692307693\n')
      }
      if (a == 20 && sign == '/' && b == 27) {
        rl.write('20 / 27 = 0.7407407407407407\n')
      }
      if (a == 20 && sign == '/' && b == 28) {
        rl.write('20 / 28 = 0.7142857142857143\n')
      }
      if (a == 20 && sign == '/' && b == 29) {
        rl.write('20 / 29 = 0.6896551724137931\n')
      }
      if (a == 20 && sign == '/' && b == 30) {
        rl.write('20 / 30 = 0.6666666666666666\n')
      }
      if (a == 20 && sign == '/' && b == 31) {
        rl.write('20 / 31 = 0.6451612903225806\n')
      }
      if (a == 20 && sign == '/' && b == 32) {
        rl.write('20 / 32 = 0.625\n')
      }
      if (a == 20 && sign == '/' && b == 33) {
        rl.write('20 / 33 = 0.6060606060606061\n')
      }
      if (a == 20 && sign == '/' && b == 34) {
        rl.write('20 / 34 = 0.5882352941176471\n')
      }
      if (a == 20 && sign == '/' && b == 35) {
        rl.write('20 / 35 = 0.5714285714285714\n')
      }
      if (a == 20 && sign == '/' && b == 36) {
        rl.write('20 / 36 = 0.5555555555555556\n')
      }
      if (a == 20 && sign == '/' && b == 37) {
        rl.write('20 / 37 = 0.5405405405405406\n')
      }
      if (a == 20 && sign == '/' && b == 38) {
        rl.write('20 / 38 = 0.5263157894736842\n')
      }
      if (a == 20 && sign == '/' && b == 39) {
        rl.write('20 / 39 = 0.5128205128205128\n')
      }
      if (a == 20 && sign == '/' && b == 40) {
        rl.write('20 / 40 = 0.5\n')
      }
      if (a == 20 && sign == '/' && b == 41) {
        rl.write('20 / 41 = 0.4878048780487805\n')
      }
      if (a == 20 && sign == '/' && b == 42) {
        rl.write('20 / 42 = 0.47619047619047616\n')
      }
      if (a == 20 && sign == '/' && b == 43) {
        rl.write('20 / 43 = 0.46511627906976744\n')
      }
      if (a == 20 && sign == '/' && b == 44) {
        rl.write('20 / 44 = 0.45454545454545453\n')
      }
      if (a == 20 && sign == '/' && b == 45) {
        rl.write('20 / 45 = 0.4444444444444444\n')
      }
      if (a == 20 && sign == '/' && b == 46) {
        rl.write('20 / 46 = 0.43478260869565216\n')
      }
      if (a == 20 && sign == '/' && b == 47) {
        rl.write('20 / 47 = 0.425531914893617\n')
      }
      if (a == 20 && sign == '/' && b == 48) {
        rl.write('20 / 48 = 0.4166666666666667\n')
      }
      if (a == 20 && sign == '/' && b == 49) {
        rl.write('20 / 49 = 0.40816326530612246\n')
      }
      if (a == 20 && sign == '/' && b == 50) {
        rl.write('20 / 50 = 0.4\n')
      }
      if (a == 21 && sign == '/' && b == 0) {
        rl.write('21 / 0 = Infinity\n')
      }
      if (a == 21 && sign == '/' && b == 1) {
        rl.write('21 / 1 = 21\n')
      }
      if (a == 21 && sign == '/' && b == 2) {
        rl.write('21 / 2 = 10.5\n')
      }
      if (a == 21 && sign == '/' && b == 3) {
        rl.write('21 / 3 = 7\n')
      }
      if (a == 21 && sign == '/' && b == 4) {
        rl.write('21 / 4 = 5.25\n')
      }
      if (a == 21 && sign == '/' && b == 5) {
        rl.write('21 / 5 = 4.2\n')
      }
      if (a == 21 && sign == '/' && b == 6) {
        rl.write('21 / 6 = 3.5\n')
      }
      if (a == 21 && sign == '/' && b == 7) {
        rl.write('21 / 7 = 3\n')
      }
      if (a == 21 && sign == '/' && b == 8) {
        rl.write('21 / 8 = 2.625\n')
      }
      if (a == 21 && sign == '/' && b == 9) {
        rl.write('21 / 9 = 2.3333333333333335\n')
      }
      if (a == 21 && sign == '/' && b == 10) {
        rl.write('21 / 10 = 2.1\n')
      }
      if (a == 21 && sign == '/' && b == 11) {
        rl.write('21 / 11 = 1.9090909090909092\n')
      }
      if (a == 21 && sign == '/' && b == 12) {
        rl.write('21 / 12 = 1.75\n')
      }
      if (a == 21 && sign == '/' && b == 13) {
        rl.write('21 / 13 = 1.6153846153846154\n')
      }
      if (a == 21 && sign == '/' && b == 14) {
        rl.write('21 / 14 = 1.5\n')
      }
      if (a == 21 && sign == '/' && b == 15) {
        rl.write('21 / 15 = 1.4\n')
      }
      if (a == 21 && sign == '/' && b == 16) {
        rl.write('21 / 16 = 1.3125\n')
      }
      if (a == 21 && sign == '/' && b == 17) {
        rl.write('21 / 17 = 1.2352941176470589\n')
      }
      if (a == 21 && sign == '/' && b == 18) {
        rl.write('21 / 18 = 1.1666666666666667\n')
      }
      if (a == 21 && sign == '/' && b == 19) {
        rl.write('21 / 19 = 1.105263157894737\n')
      }
      if (a == 21 && sign == '/' && b == 20) {
        rl.write('21 / 20 = 1.05\n')
      }
      if (a == 21 && sign == '/' && b == 21) {
        rl.write('21 / 21 = 1\n')
      }
      if (a == 21 && sign == '/' && b == 22) {
        rl.write('21 / 22 = 0.9545454545454546\n')
      }
      if (a == 21 && sign == '/' && b == 23) {
        rl.write('21 / 23 = 0.9130434782608695\n')
      }
      if (a == 21 && sign == '/' && b == 24) {
        rl.write('21 / 24 = 0.875\n')
      }
      if (a == 21 && sign == '/' && b == 25) {
        rl.write('21 / 25 = 0.84\n')
      }
      if (a == 21 && sign == '/' && b == 26) {
        rl.write('21 / 26 = 0.8076923076923077\n')
      }
      if (a == 21 && sign == '/' && b == 27) {
        rl.write('21 / 27 = 0.7777777777777778\n')
      }
      if (a == 21 && sign == '/' && b == 28) {
        rl.write('21 / 28 = 0.75\n')
      }
      if (a == 21 && sign == '/' && b == 29) {
        rl.write('21 / 29 = 0.7241379310344828\n')
      }
      if (a == 21 && sign == '/' && b == 30) {
        rl.write('21 / 30 = 0.7\n')
      }
      if (a == 21 && sign == '/' && b == 31) {
        rl.write('21 / 31 = 0.6774193548387096\n')
      }
      if (a == 21 && sign == '/' && b == 32) {
        rl.write('21 / 32 = 0.65625\n')
      }
      if (a == 21 && sign == '/' && b == 33) {
        rl.write('21 / 33 = 0.6363636363636364\n')
      }
      if (a == 21 && sign == '/' && b == 34) {
        rl.write('21 / 34 = 0.6176470588235294\n')
      }
      if (a == 21 && sign == '/' && b == 35) {
        rl.write('21 / 35 = 0.6\n')
      }
      if (a == 21 && sign == '/' && b == 36) {
        rl.write('21 / 36 = 0.5833333333333334\n')
      }
      if (a == 21 && sign == '/' && b == 37) {
        rl.write('21 / 37 = 0.5675675675675675\n')
      }
      if (a == 21 && sign == '/' && b == 38) {
        rl.write('21 / 38 = 0.5526315789473685\n')
      }
      if (a == 21 && sign == '/' && b == 39) {
        rl.write('21 / 39 = 0.5384615384615384\n')
      }
      if (a == 21 && sign == '/' && b == 40) {
        rl.write('21 / 40 = 0.525\n')
      }
      if (a == 21 && sign == '/' && b == 41) {
        rl.write('21 / 41 = 0.5121951219512195\n')
      }
      if (a == 21 && sign == '/' && b == 42) {
        rl.write('21 / 42 = 0.5\n')
      }
      if (a == 21 && sign == '/' && b == 43) {
        rl.write('21 / 43 = 0.4883720930232558\n')
      }
      if (a == 21 && sign == '/' && b == 44) {
        rl.write('21 / 44 = 0.4772727272727273\n')
      }
      if (a == 21 && sign == '/' && b == 45) {
        rl.write('21 / 45 = 0.4666666666666667\n')
      }
      if (a == 21 && sign == '/' && b == 46) {
        rl.write('21 / 46 = 0.45652173913043476\n')
      }
      if (a == 21 && sign == '/' && b == 47) {
        rl.write('21 / 47 = 0.44680851063829785\n')
      }
      if (a == 21 && sign == '/' && b == 48) {
        rl.write('21 / 48 = 0.4375\n')
      }
      if (a == 21 && sign == '/' && b == 49) {
        rl.write('21 / 49 = 0.42857142857142855\n')
      }
      if (a == 21 && sign == '/' && b == 50) {
        rl.write('21 / 50 = 0.42\n')
      }
      if (a == 22 && sign == '/' && b == 0) {
        rl.write('22 / 0 = Infinity\n')
      }
      if (a == 22 && sign == '/' && b == 1) {
        rl.write('22 / 1 = 22\n')
      }
      if (a == 22 && sign == '/' && b == 2) {
        rl.write('22 / 2 = 11\n')
      }
      if (a == 22 && sign == '/' && b == 3) {
        rl.write('22 / 3 = 7.333333333333333\n')
      }
      if (a == 22 && sign == '/' && b == 4) {
        rl.write('22 / 4 = 5.5\n')
      }
      if (a == 22 && sign == '/' && b == 5) {
        rl.write('22 / 5 = 4.4\n')
      }
      if (a == 22 && sign == '/' && b == 6) {
        rl.write('22 / 6 = 3.6666666666666665\n')
      }
      if (a == 22 && sign == '/' && b == 7) {
        rl.write('22 / 7 = 3.142857142857143\n')
      }
      if (a == 22 && sign == '/' && b == 8) {
        rl.write('22 / 8 = 2.75\n')
      }
      if (a == 22 && sign == '/' && b == 9) {
        rl.write('22 / 9 = 2.4444444444444446\n')
      }
      if (a == 22 && sign == '/' && b == 10) {
        rl.write('22 / 10 = 2.2\n')
      }
      if (a == 22 && sign == '/' && b == 11) {
        rl.write('22 / 11 = 2\n')
      }
      if (a == 22 && sign == '/' && b == 12) {
        rl.write('22 / 12 = 1.8333333333333333\n')
      }
      if (a == 22 && sign == '/' && b == 13) {
        rl.write('22 / 13 = 1.6923076923076923\n')
      }
      if (a == 22 && sign == '/' && b == 14) {
        rl.write('22 / 14 = 1.5714285714285714\n')
      }
      if (a == 22 && sign == '/' && b == 15) {
        rl.write('22 / 15 = 1.4666666666666666\n')
      }
      if (a == 22 && sign == '/' && b == 16) {
        rl.write('22 / 16 = 1.375\n')
      }
      if (a == 22 && sign == '/' && b == 17) {
        rl.write('22 / 17 = 1.2941176470588236\n')
      }
      if (a == 22 && sign == '/' && b == 18) {
        rl.write('22 / 18 = 1.2222222222222223\n')
      }
      if (a == 22 && sign == '/' && b == 19) {
        rl.write('22 / 19 = 1.1578947368421053\n')
      }
      if (a == 22 && sign == '/' && b == 20) {
        rl.write('22 / 20 = 1.1\n')
      }
      if (a == 22 && sign == '/' && b == 21) {
        rl.write('22 / 21 = 1.0476190476190477\n')
      }
      if (a == 22 && sign == '/' && b == 22) {
        rl.write('22 / 22 = 1\n')
      }
      if (a == 22 && sign == '/' && b == 23) {
        rl.write('22 / 23 = 0.9565217391304348\n')
      }
      if (a == 22 && sign == '/' && b == 24) {
        rl.write('22 / 24 = 0.9166666666666666\n')
      }
      if (a == 22 && sign == '/' && b == 25) {
        rl.write('22 / 25 = 0.88\n')
      }
      if (a == 22 && sign == '/' && b == 26) {
        rl.write('22 / 26 = 0.8461538461538461\n')
      }
      if (a == 22 && sign == '/' && b == 27) {
        rl.write('22 / 27 = 0.8148148148148148\n')
      }
      if (a == 22 && sign == '/' && b == 28) {
        rl.write('22 / 28 = 0.7857142857142857\n')
      }
      if (a == 22 && sign == '/' && b == 29) {
        rl.write('22 / 29 = 0.7586206896551724\n')
      }
      if (a == 22 && sign == '/' && b == 30) {
        rl.write('22 / 30 = 0.7333333333333333\n')
      }
      if (a == 22 && sign == '/' && b == 31) {
        rl.write('22 / 31 = 0.7096774193548387\n')
      }
      if (a == 22 && sign == '/' && b == 32) {
        rl.write('22 / 32 = 0.6875\n')
      }
      if (a == 22 && sign == '/' && b == 33) {
        rl.write('22 / 33 = 0.6666666666666666\n')
      }
      if (a == 22 && sign == '/' && b == 34) {
        rl.write('22 / 34 = 0.6470588235294118\n')
      }
      if (a == 22 && sign == '/' && b == 35) {
        rl.write('22 / 35 = 0.6285714285714286\n')
      }
      if (a == 22 && sign == '/' && b == 36) {
        rl.write('22 / 36 = 0.6111111111111112\n')
      }
      if (a == 22 && sign == '/' && b == 37) {
        rl.write('22 / 37 = 0.5945945945945946\n')
      }
      if (a == 22 && sign == '/' && b == 38) {
        rl.write('22 / 38 = 0.5789473684210527\n')
      }
      if (a == 22 && sign == '/' && b == 39) {
        rl.write('22 / 39 = 0.5641025641025641\n')
      }
      if (a == 22 && sign == '/' && b == 40) {
        rl.write('22 / 40 = 0.55\n')
      }
      if (a == 22 && sign == '/' && b == 41) {
        rl.write('22 / 41 = 0.5365853658536586\n')
      }
      if (a == 22 && sign == '/' && b == 42) {
        rl.write('22 / 42 = 0.5238095238095238\n')
      }
      if (a == 22 && sign == '/' && b == 43) {
        rl.write('22 / 43 = 0.5116279069767442\n')
      }
      if (a == 22 && sign == '/' && b == 44) {
        rl.write('22 / 44 = 0.5\n')
      }
      if (a == 22 && sign == '/' && b == 45) {
        rl.write('22 / 45 = 0.4888888888888889\n')
      }
      if (a == 22 && sign == '/' && b == 46) {
        rl.write('22 / 46 = 0.4782608695652174\n')
      }
      if (a == 22 && sign == '/' && b == 47) {
        rl.write('22 / 47 = 0.46808510638297873\n')
      }
      if (a == 22 && sign == '/' && b == 48) {
        rl.write('22 / 48 = 0.4583333333333333\n')
      }
      if (a == 22 && sign == '/' && b == 49) {
        rl.write('22 / 49 = 0.4489795918367347\n')
      }
      if (a == 22 && sign == '/' && b == 50) {
        rl.write('22 / 50 = 0.44\n')
      }
      if (a == 23 && sign == '/' && b == 0) {
        rl.write('23 / 0 = Infinity\n')
      }
      if (a == 23 && sign == '/' && b == 1) {
        rl.write('23 / 1 = 23\n')
      }
      if (a == 23 && sign == '/' && b == 2) {
        rl.write('23 / 2 = 11.5\n')
      }
      if (a == 23 && sign == '/' && b == 3) {
        rl.write('23 / 3 = 7.666666666666667\n')
      }
      if (a == 23 && sign == '/' && b == 4) {
        rl.write('23 / 4 = 5.75\n')
      }
      if (a == 23 && sign == '/' && b == 5) {
        rl.write('23 / 5 = 4.6\n')
      }
      if (a == 23 && sign == '/' && b == 6) {
        rl.write('23 / 6 = 3.8333333333333335\n')
      }
      if (a == 23 && sign == '/' && b == 7) {
        rl.write('23 / 7 = 3.2857142857142856\n')
      }
      if (a == 23 && sign == '/' && b == 8) {
        rl.write('23 / 8 = 2.875\n')
      }
      if (a == 23 && sign == '/' && b == 9) {
        rl.write('23 / 9 = 2.5555555555555554\n')
      }
      if (a == 23 && sign == '/' && b == 10) {
        rl.write('23 / 10 = 2.3\n')
      }
      if (a == 23 && sign == '/' && b == 11) {
        rl.write('23 / 11 = 2.090909090909091\n')
      }
      if (a == 23 && sign == '/' && b == 12) {
        rl.write('23 / 12 = 1.9166666666666667\n')
      }
      if (a == 23 && sign == '/' && b == 13) {
        rl.write('23 / 13 = 1.7692307692307692\n')
      }
      if (a == 23 && sign == '/' && b == 14) {
        rl.write('23 / 14 = 1.6428571428571428\n')
      }
      if (a == 23 && sign == '/' && b == 15) {
        rl.write('23 / 15 = 1.5333333333333334\n')
      }
      if (a == 23 && sign == '/' && b == 16) {
        rl.write('23 / 16 = 1.4375\n')
      }
      if (a == 23 && sign == '/' && b == 17) {
        rl.write('23 / 17 = 1.3529411764705883\n')
      }
      if (a == 23 && sign == '/' && b == 18) {
        rl.write('23 / 18 = 1.2777777777777777\n')
      }
      if (a == 23 && sign == '/' && b == 19) {
        rl.write('23 / 19 = 1.2105263157894737\n')
      }
      if (a == 23 && sign == '/' && b == 20) {
        rl.write('23 / 20 = 1.15\n')
      }
      if (a == 23 && sign == '/' && b == 21) {
        rl.write('23 / 21 = 1.0952380952380953\n')
      }
      if (a == 23 && sign == '/' && b == 22) {
        rl.write('23 / 22 = 1.0454545454545454\n')
      }
      if (a == 23 && sign == '/' && b == 23) {
        rl.write('23 / 23 = 1\n')
      }
      if (a == 23 && sign == '/' && b == 24) {
        rl.write('23 / 24 = 0.9583333333333334\n')
      }
      if (a == 23 && sign == '/' && b == 25) {
        rl.write('23 / 25 = 0.92\n')
      }
      if (a == 23 && sign == '/' && b == 26) {
        rl.write('23 / 26 = 0.8846153846153846\n')
      }
      if (a == 23 && sign == '/' && b == 27) {
        rl.write('23 / 27 = 0.8518518518518519\n')
      }
      if (a == 23 && sign == '/' && b == 28) {
        rl.write('23 / 28 = 0.8214285714285714\n')
      }
      if (a == 23 && sign == '/' && b == 29) {
        rl.write('23 / 29 = 0.7931034482758621\n')
      }
      if (a == 23 && sign == '/' && b == 30) {
        rl.write('23 / 30 = 0.7666666666666667\n')
      }
      if (a == 23 && sign == '/' && b == 31) {
        rl.write('23 / 31 = 0.7419354838709677\n')
      }
      if (a == 23 && sign == '/' && b == 32) {
        rl.write('23 / 32 = 0.71875\n')
      }
      if (a == 23 && sign == '/' && b == 33) {
        rl.write('23 / 33 = 0.696969696969697\n')
      }
      if (a == 23 && sign == '/' && b == 34) {
        rl.write('23 / 34 = 0.6764705882352942\n')
      }
      if (a == 23 && sign == '/' && b == 35) {
        rl.write('23 / 35 = 0.6571428571428571\n')
      }
      if (a == 23 && sign == '/' && b == 36) {
        rl.write('23 / 36 = 0.6388888888888888\n')
      }
      if (a == 23 && sign == '/' && b == 37) {
        rl.write('23 / 37 = 0.6216216216216216\n')
      }
      if (a == 23 && sign == '/' && b == 38) {
        rl.write('23 / 38 = 0.6052631578947368\n')
      }
      if (a == 23 && sign == '/' && b == 39) {
        rl.write('23 / 39 = 0.5897435897435898\n')
      }
      if (a == 23 && sign == '/' && b == 40) {
        rl.write('23 / 40 = 0.575\n')
      }
      if (a == 23 && sign == '/' && b == 41) {
        rl.write('23 / 41 = 0.5609756097560976\n')
      }
      if (a == 23 && sign == '/' && b == 42) {
        rl.write('23 / 42 = 0.5476190476190477\n')
      }
      if (a == 23 && sign == '/' && b == 43) {
        rl.write('23 / 43 = 0.5348837209302325\n')
      }
      if (a == 23 && sign == '/' && b == 44) {
        rl.write('23 / 44 = 0.5227272727272727\n')
      }
      if (a == 23 && sign == '/' && b == 45) {
        rl.write('23 / 45 = 0.5111111111111111\n')
      }
      if (a == 23 && sign == '/' && b == 46) {
        rl.write('23 / 46 = 0.5\n')
      }
      if (a == 23 && sign == '/' && b == 47) {
        rl.write('23 / 47 = 0.48936170212765956\n')
      }
      if (a == 23 && sign == '/' && b == 48) {
        rl.write('23 / 48 = 0.4791666666666667\n')
      }
      if (a == 23 && sign == '/' && b == 49) {
        rl.write('23 / 49 = 0.46938775510204084\n')
      }
      if (a == 23 && sign == '/' && b == 50) {
        rl.write('23 / 50 = 0.46\n')
      }
      if (a == 24 && sign == '/' && b == 0) {
        rl.write('24 / 0 = Infinity\n')
      }
      if (a == 24 && sign == '/' && b == 1) {
        rl.write('24 / 1 = 24\n')
      }
      if (a == 24 && sign == '/' && b == 2) {
        rl.write('24 / 2 = 12\n')
      }
      if (a == 24 && sign == '/' && b == 3) {
        rl.write('24 / 3 = 8\n')
      }
      if (a == 24 && sign == '/' && b == 4) {
        rl.write('24 / 4 = 6\n')
      }
      if (a == 24 && sign == '/' && b == 5) {
        rl.write('24 / 5 = 4.8\n')
      }
      if (a == 24 && sign == '/' && b == 6) {
        rl.write('24 / 6 = 4\n')
      }
      if (a == 24 && sign == '/' && b == 7) {
        rl.write('24 / 7 = 3.4285714285714284\n')
      }
      if (a == 24 && sign == '/' && b == 8) {
        rl.write('24 / 8 = 3\n')
      }
      if (a == 24 && sign == '/' && b == 9) {
        rl.write('24 / 9 = 2.6666666666666665\n')
      }
      if (a == 24 && sign == '/' && b == 10) {
        rl.write('24 / 10 = 2.4\n')
      }
      if (a == 24 && sign == '/' && b == 11) {
        rl.write('24 / 11 = 2.1818181818181817\n')
      }
      if (a == 24 && sign == '/' && b == 12) {
        rl.write('24 / 12 = 2\n')
      }
      if (a == 24 && sign == '/' && b == 13) {
        rl.write('24 / 13 = 1.8461538461538463\n')
      }
      if (a == 24 && sign == '/' && b == 14) {
        rl.write('24 / 14 = 1.7142857142857142\n')
      }
      if (a == 24 && sign == '/' && b == 15) {
        rl.write('24 / 15 = 1.6\n')
      }
      if (a == 24 && sign == '/' && b == 16) {
        rl.write('24 / 16 = 1.5\n')
      }
      if (a == 24 && sign == '/' && b == 17) {
        rl.write('24 / 17 = 1.411764705882353\n')
      }
      if (a == 24 && sign == '/' && b == 18) {
        rl.write('24 / 18 = 1.3333333333333333\n')
      }
      if (a == 24 && sign == '/' && b == 19) {
        rl.write('24 / 19 = 1.263157894736842\n')
      }
      if (a == 24 && sign == '/' && b == 20) {
        rl.write('24 / 20 = 1.2\n')
      }
      if (a == 24 && sign == '/' && b == 21) {
        rl.write('24 / 21 = 1.1428571428571428\n')
      }
      if (a == 24 && sign == '/' && b == 22) {
        rl.write('24 / 22 = 1.0909090909090908\n')
      }
      if (a == 24 && sign == '/' && b == 23) {
        rl.write('24 / 23 = 1.0434782608695652\n')
      }
      if (a == 24 && sign == '/' && b == 24) {
        rl.write('24 / 24 = 1\n')
      }
      if (a == 24 && sign == '/' && b == 25) {
        rl.write('24 / 25 = 0.96\n')
      }
      if (a == 24 && sign == '/' && b == 26) {
        rl.write('24 / 26 = 0.9230769230769231\n')
      }
      if (a == 24 && sign == '/' && b == 27) {
        rl.write('24 / 27 = 0.8888888888888888\n')
      }
      if (a == 24 && sign == '/' && b == 28) {
        rl.write('24 / 28 = 0.8571428571428571\n')
      }
      if (a == 24 && sign == '/' && b == 29) {
        rl.write('24 / 29 = 0.8275862068965517\n')
      }
      if (a == 24 && sign == '/' && b == 30) {
        rl.write('24 / 30 = 0.8\n')
      }
      if (a == 24 && sign == '/' && b == 31) {
        rl.write('24 / 31 = 0.7741935483870968\n')
      }
      if (a == 24 && sign == '/' && b == 32) {
        rl.write('24 / 32 = 0.75\n')
      }
      if (a == 24 && sign == '/' && b == 33) {
        rl.write('24 / 33 = 0.7272727272727273\n')
      }
      if (a == 24 && sign == '/' && b == 34) {
        rl.write('24 / 34 = 0.7058823529411765\n')
      }
      if (a == 24 && sign == '/' && b == 35) {
        rl.write('24 / 35 = 0.6857142857142857\n')
      }
      if (a == 24 && sign == '/' && b == 36) {
        rl.write('24 / 36 = 0.6666666666666666\n')
      }
      if (a == 24 && sign == '/' && b == 37) {
        rl.write('24 / 37 = 0.6486486486486487\n')
      }
      if (a == 24 && sign == '/' && b == 38) {
        rl.write('24 / 38 = 0.631578947368421\n')
      }
      if (a == 24 && sign == '/' && b == 39) {
        rl.write('24 / 39 = 0.6153846153846154\n')
      }
      if (a == 24 && sign == '/' && b == 40) {
        rl.write('24 / 40 = 0.6\n')
      }
      if (a == 24 && sign == '/' && b == 41) {
        rl.write('24 / 41 = 0.5853658536585366\n')
      }
      if (a == 24 && sign == '/' && b == 42) {
        rl.write('24 / 42 = 0.5714285714285714\n')
      }
      if (a == 24 && sign == '/' && b == 43) {
        rl.write('24 / 43 = 0.5581395348837209\n')
      }
      if (a == 24 && sign == '/' && b == 44) {
        rl.write('24 / 44 = 0.5454545454545454\n')
      }
      if (a == 24 && sign == '/' && b == 45) {
        rl.write('24 / 45 = 0.5333333333333333\n')
      }
      if (a == 24 && sign == '/' && b == 46) {
        rl.write('24 / 46 = 0.5217391304347826\n')
      }
      if (a == 24 && sign == '/' && b == 47) {
        rl.write('24 / 47 = 0.5106382978723404\n')
      }
      if (a == 24 && sign == '/' && b == 48) {
        rl.write('24 / 48 = 0.5\n')
      }
      if (a == 24 && sign == '/' && b == 49) {
        rl.write('24 / 49 = 0.4897959183673469\n')
      }
      if (a == 24 && sign == '/' && b == 50) {
        rl.write('24 / 50 = 0.48\n')
      }
      if (a == 25 && sign == '/' && b == 0) {
        rl.write('25 / 0 = Infinity\n')
      }
      if (a == 25 && sign == '/' && b == 1) {
        rl.write('25 / 1 = 25\n')
      }
      if (a == 25 && sign == '/' && b == 2) {
        rl.write('25 / 2 = 12.5\n')
      }
      if (a == 25 && sign == '/' && b == 3) {
        rl.write('25 / 3 = 8.333333333333334\n')
      }
      if (a == 25 && sign == '/' && b == 4) {
        rl.write('25 / 4 = 6.25\n')
      }
      if (a == 25 && sign == '/' && b == 5) {
        rl.write('25 / 5 = 5\n')
      }
      if (a == 25 && sign == '/' && b == 6) {
        rl.write('25 / 6 = 4.166666666666667\n')
      }
      if (a == 25 && sign == '/' && b == 7) {
        rl.write('25 / 7 = 3.5714285714285716\n')
      }
      if (a == 25 && sign == '/' && b == 8) {
        rl.write('25 / 8 = 3.125\n')
      }
      if (a == 25 && sign == '/' && b == 9) {
        rl.write('25 / 9 = 2.7777777777777777\n')
      }
      if (a == 25 && sign == '/' && b == 10) {
        rl.write('25 / 10 = 2.5\n')
      }
      if (a == 25 && sign == '/' && b == 11) {
        rl.write('25 / 11 = 2.272727272727273\n')
      }
      if (a == 25 && sign == '/' && b == 12) {
        rl.write('25 / 12 = 2.0833333333333335\n')
      }
      if (a == 25 && sign == '/' && b == 13) {
        rl.write('25 / 13 = 1.9230769230769231\n')
      }
      if (a == 25 && sign == '/' && b == 14) {
        rl.write('25 / 14 = 1.7857142857142858\n')
      }
      if (a == 25 && sign == '/' && b == 15) {
        rl.write('25 / 15 = 1.6666666666666667\n')
      }
      if (a == 25 && sign == '/' && b == 16) {
        rl.write('25 / 16 = 1.5625\n')
      }
      if (a == 25 && sign == '/' && b == 17) {
        rl.write('25 / 17 = 1.4705882352941178\n')
      }
      if (a == 25 && sign == '/' && b == 18) {
        rl.write('25 / 18 = 1.3888888888888888\n')
      }
      if (a == 25 && sign == '/' && b == 19) {
        rl.write('25 / 19 = 1.3157894736842106\n')
      }
      if (a == 25 && sign == '/' && b == 20) {
        rl.write('25 / 20 = 1.25\n')
      }
      if (a == 25 && sign == '/' && b == 21) {
        rl.write('25 / 21 = 1.1904761904761905\n')
      }
      if (a == 25 && sign == '/' && b == 22) {
        rl.write('25 / 22 = 1.1363636363636365\n')
      }
      if (a == 25 && sign == '/' && b == 23) {
        rl.write('25 / 23 = 1.0869565217391304\n')
      }
      if (a == 25 && sign == '/' && b == 24) {
        rl.write('25 / 24 = 1.0416666666666667\n')
      }
      if (a == 25 && sign == '/' && b == 25) {
        rl.write('25 / 25 = 1\n')
      }
      if (a == 25 && sign == '/' && b == 26) {
        rl.write('25 / 26 = 0.9615384615384616\n')
      }
      if (a == 25 && sign == '/' && b == 27) {
        rl.write('25 / 27 = 0.9259259259259259\n')
      }
      if (a == 25 && sign == '/' && b == 28) {
        rl.write('25 / 28 = 0.8928571428571429\n')
      }
      if (a == 25 && sign == '/' && b == 29) {
        rl.write('25 / 29 = 0.8620689655172413\n')
      }
      if (a == 25 && sign == '/' && b == 30) {
        rl.write('25 / 30 = 0.8333333333333334\n')
      }
      if (a == 25 && sign == '/' && b == 31) {
        rl.write('25 / 31 = 0.8064516129032258\n')
      }
      if (a == 25 && sign == '/' && b == 32) {
        rl.write('25 / 32 = 0.78125\n')
      }
      if (a == 25 && sign == '/' && b == 33) {
        rl.write('25 / 33 = 0.7575757575757576\n')
      }
      if (a == 25 && sign == '/' && b == 34) {
        rl.write('25 / 34 = 0.7352941176470589\n')
      }
      if (a == 25 && sign == '/' && b == 35) {
        rl.write('25 / 35 = 0.7142857142857143\n')
      }
      if (a == 25 && sign == '/' && b == 36) {
        rl.write('25 / 36 = 0.6944444444444444\n')
      }
      if (a == 25 && sign == '/' && b == 37) {
        rl.write('25 / 37 = 0.6756756756756757\n')
      }
      if (a == 25 && sign == '/' && b == 38) {
        rl.write('25 / 38 = 0.6578947368421053\n')
      }
      if (a == 25 && sign == '/' && b == 39) {
        rl.write('25 / 39 = 0.6410256410256411\n')
      }
      if (a == 25 && sign == '/' && b == 40) {
        rl.write('25 / 40 = 0.625\n')
      }
      if (a == 25 && sign == '/' && b == 41) {
        rl.write('25 / 41 = 0.6097560975609756\n')
      }
      if (a == 25 && sign == '/' && b == 42) {
        rl.write('25 / 42 = 0.5952380952380952\n')
      }
      if (a == 25 && sign == '/' && b == 43) {
        rl.write('25 / 43 = 0.5813953488372093\n')
      }
      if (a == 25 && sign == '/' && b == 44) {
        rl.write('25 / 44 = 0.5681818181818182\n')
      }
      if (a == 25 && sign == '/' && b == 45) {
        rl.write('25 / 45 = 0.5555555555555556\n')
      }
      if (a == 25 && sign == '/' && b == 46) {
        rl.write('25 / 46 = 0.5434782608695652\n')
      }
      if (a == 25 && sign == '/' && b == 47) {
        rl.write('25 / 47 = 0.5319148936170213\n')
      }
      if (a == 25 && sign == '/' && b == 48) {
        rl.write('25 / 48 = 0.5208333333333334\n')
      }
      if (a == 25 && sign == '/' && b == 49) {
        rl.write('25 / 49 = 0.5102040816326531\n')
      }
      if (a == 25 && sign == '/' && b == 50) {
        rl.write('25 / 50 = 0.5\n')
      }
      if (a == 26 && sign == '/' && b == 0) {
        rl.write('26 / 0 = Infinity\n')
      }
      if (a == 26 && sign == '/' && b == 1) {
        rl.write('26 / 1 = 26\n')
      }
      if (a == 26 && sign == '/' && b == 2) {
        rl.write('26 / 2 = 13\n')
      }
      if (a == 26 && sign == '/' && b == 3) {
        rl.write('26 / 3 = 8.666666666666666\n')
      }
      if (a == 26 && sign == '/' && b == 4) {
        rl.write('26 / 4 = 6.5\n')
      }
      if (a == 26 && sign == '/' && b == 5) {
        rl.write('26 / 5 = 5.2\n')
      }
      if (a == 26 && sign == '/' && b == 6) {
        rl.write('26 / 6 = 4.333333333333333\n')
      }
      if (a == 26 && sign == '/' && b == 7) {
        rl.write('26 / 7 = 3.7142857142857144\n')
      }
      if (a == 26 && sign == '/' && b == 8) {
        rl.write('26 / 8 = 3.25\n')
      }
      if (a == 26 && sign == '/' && b == 9) {
        rl.write('26 / 9 = 2.888888888888889\n')
      }
      if (a == 26 && sign == '/' && b == 10) {
        rl.write('26 / 10 = 2.6\n')
      }
      if (a == 26 && sign == '/' && b == 11) {
        rl.write('26 / 11 = 2.3636363636363638\n')
      }
      if (a == 26 && sign == '/' && b == 12) {
        rl.write('26 / 12 = 2.1666666666666665\n')
      }
      if (a == 26 && sign == '/' && b == 13) {
        rl.write('26 / 13 = 2\n')
      }
      if (a == 26 && sign == '/' && b == 14) {
        rl.write('26 / 14 = 1.8571428571428572\n')
      }
      if (a == 26 && sign == '/' && b == 15) {
        rl.write('26 / 15 = 1.7333333333333334\n')
      }
      if (a == 26 && sign == '/' && b == 16) {
        rl.write('26 / 16 = 1.625\n')
      }
      if (a == 26 && sign == '/' && b == 17) {
        rl.write('26 / 17 = 1.5294117647058822\n')
      }
      if (a == 26 && sign == '/' && b == 18) {
        rl.write('26 / 18 = 1.4444444444444444\n')
      }
      if (a == 26 && sign == '/' && b == 19) {
        rl.write('26 / 19 = 1.368421052631579\n')
      }
      if (a == 26 && sign == '/' && b == 20) {
        rl.write('26 / 20 = 1.3\n')
      }
      if (a == 26 && sign == '/' && b == 21) {
        rl.write('26 / 21 = 1.2380952380952381\n')
      }
      if (a == 26 && sign == '/' && b == 22) {
        rl.write('26 / 22 = 1.1818181818181819\n')
      }
      if (a == 26 && sign == '/' && b == 23) {
        rl.write('26 / 23 = 1.1304347826086956\n')
      }
      if (a == 26 && sign == '/' && b == 24) {
        rl.write('26 / 24 = 1.0833333333333333\n')
      }
      if (a == 26 && sign == '/' && b == 25) {
        rl.write('26 / 25 = 1.04\n')
      }
      if (a == 26 && sign == '/' && b == 26) {
        rl.write('26 / 26 = 1\n')
      }
      if (a == 26 && sign == '/' && b == 27) {
        rl.write('26 / 27 = 0.9629629629629629\n')
      }
      if (a == 26 && sign == '/' && b == 28) {
        rl.write('26 / 28 = 0.9285714285714286\n')
      }
      if (a == 26 && sign == '/' && b == 29) {
        rl.write('26 / 29 = 0.896551724137931\n')
      }
      if (a == 26 && sign == '/' && b == 30) {
        rl.write('26 / 30 = 0.8666666666666667\n')
      }
      if (a == 26 && sign == '/' && b == 31) {
        rl.write('26 / 31 = 0.8387096774193549\n')
      }
      if (a == 26 && sign == '/' && b == 32) {
        rl.write('26 / 32 = 0.8125\n')
      }
      if (a == 26 && sign == '/' && b == 33) {
        rl.write('26 / 33 = 0.7878787878787878\n')
      }
      if (a == 26 && sign == '/' && b == 34) {
        rl.write('26 / 34 = 0.7647058823529411\n')
      }
      if (a == 26 && sign == '/' && b == 35) {
        rl.write('26 / 35 = 0.7428571428571429\n')
      }
      if (a == 26 && sign == '/' && b == 36) {
        rl.write('26 / 36 = 0.7222222222222222\n')
      }
      if (a == 26 && sign == '/' && b == 37) {
        rl.write('26 / 37 = 0.7027027027027027\n')
      }
      if (a == 26 && sign == '/' && b == 38) {
        rl.write('26 / 38 = 0.6842105263157895\n')
      }
      if (a == 26 && sign == '/' && b == 39) {
        rl.write('26 / 39 = 0.6666666666666666\n')
      }
      if (a == 26 && sign == '/' && b == 40) {
        rl.write('26 / 40 = 0.65\n')
      }
      if (a == 26 && sign == '/' && b == 41) {
        rl.write('26 / 41 = 0.6341463414634146\n')
      }
      if (a == 26 && sign == '/' && b == 42) {
        rl.write('26 / 42 = 0.6190476190476191\n')
      }
      if (a == 26 && sign == '/' && b == 43) {
        rl.write('26 / 43 = 0.6046511627906976\n')
      }
      if (a == 26 && sign == '/' && b == 44) {
        rl.write('26 / 44 = 0.5909090909090909\n')
      }
      if (a == 26 && sign == '/' && b == 45) {
        rl.write('26 / 45 = 0.5777777777777777\n')
      }
      if (a == 26 && sign == '/' && b == 46) {
        rl.write('26 / 46 = 0.5652173913043478\n')
      }
      if (a == 26 && sign == '/' && b == 47) {
        rl.write('26 / 47 = 0.5531914893617021\n')
      }
      if (a == 26 && sign == '/' && b == 48) {
        rl.write('26 / 48 = 0.5416666666666666\n')
      }
      if (a == 26 && sign == '/' && b == 49) {
        rl.write('26 / 49 = 0.5306122448979592\n')
      }
      if (a == 26 && sign == '/' && b == 50) {
        rl.write('26 / 50 = 0.52\n')
      }
      if (a == 27 && sign == '/' && b == 0) {
        rl.write('27 / 0 = Infinity\n')
      }
      if (a == 27 && sign == '/' && b == 1) {
        rl.write('27 / 1 = 27\n')
      }
      if (a == 27 && sign == '/' && b == 2) {
        rl.write('27 / 2 = 13.5\n')
      }
      if (a == 27 && sign == '/' && b == 3) {
        rl.write('27 / 3 = 9\n')
      }
      if (a == 27 && sign == '/' && b == 4) {
        rl.write('27 / 4 = 6.75\n')
      }
      if (a == 27 && sign == '/' && b == 5) {
        rl.write('27 / 5 = 5.4\n')
      }
      if (a == 27 && sign == '/' && b == 6) {
        rl.write('27 / 6 = 4.5\n')
      }
      if (a == 27 && sign == '/' && b == 7) {
        rl.write('27 / 7 = 3.857142857142857\n')
      }
      if (a == 27 && sign == '/' && b == 8) {
        rl.write('27 / 8 = 3.375\n')
      }
      if (a == 27 && sign == '/' && b == 9) {
        rl.write('27 / 9 = 3\n')
      }
      if (a == 27 && sign == '/' && b == 10) {
        rl.write('27 / 10 = 2.7\n')
      }
      if (a == 27 && sign == '/' && b == 11) {
        rl.write('27 / 11 = 2.4545454545454546\n')
      }
      if (a == 27 && sign == '/' && b == 12) {
        rl.write('27 / 12 = 2.25\n')
      }
      if (a == 27 && sign == '/' && b == 13) {
        rl.write('27 / 13 = 2.076923076923077\n')
      }
      if (a == 27 && sign == '/' && b == 14) {
        rl.write('27 / 14 = 1.9285714285714286\n')
      }
      if (a == 27 && sign == '/' && b == 15) {
        rl.write('27 / 15 = 1.8\n')
      }
      if (a == 27 && sign == '/' && b == 16) {
        rl.write('27 / 16 = 1.6875\n')
      }
      if (a == 27 && sign == '/' && b == 17) {
        rl.write('27 / 17 = 1.588235294117647\n')
      }
      if (a == 27 && sign == '/' && b == 18) {
        rl.write('27 / 18 = 1.5\n')
      }
      if (a == 27 && sign == '/' && b == 19) {
        rl.write('27 / 19 = 1.4210526315789473\n')
      }
      if (a == 27 && sign == '/' && b == 20) {
        rl.write('27 / 20 = 1.35\n')
      }
      if (a == 27 && sign == '/' && b == 21) {
        rl.write('27 / 21 = 1.2857142857142858\n')
      }
      if (a == 27 && sign == '/' && b == 22) {
        rl.write('27 / 22 = 1.2272727272727273\n')
      }
      if (a == 27 && sign == '/' && b == 23) {
        rl.write('27 / 23 = 1.173913043478261\n')
      }
      if (a == 27 && sign == '/' && b == 24) {
        rl.write('27 / 24 = 1.125\n')
      }
      if (a == 27 && sign == '/' && b == 25) {
        rl.write('27 / 25 = 1.08\n')
      }
      if (a == 27 && sign == '/' && b == 26) {
        rl.write('27 / 26 = 1.0384615384615385\n')
      }
      if (a == 27 && sign == '/' && b == 27) {
        rl.write('27 / 27 = 1\n')
      }
      if (a == 27 && sign == '/' && b == 28) {
        rl.write('27 / 28 = 0.9642857142857143\n')
      }
      if (a == 27 && sign == '/' && b == 29) {
        rl.write('27 / 29 = 0.9310344827586207\n')
      }
      if (a == 27 && sign == '/' && b == 30) {
        rl.write('27 / 30 = 0.9\n')
      }
      if (a == 27 && sign == '/' && b == 31) {
        rl.write('27 / 31 = 0.8709677419354839\n')
      }
      if (a == 27 && sign == '/' && b == 32) {
        rl.write('27 / 32 = 0.84375\n')
      }
      if (a == 27 && sign == '/' && b == 33) {
        rl.write('27 / 33 = 0.8181818181818182\n')
      }
      if (a == 27 && sign == '/' && b == 34) {
        rl.write('27 / 34 = 0.7941176470588235\n')
      }
      if (a == 27 && sign == '/' && b == 35) {
        rl.write('27 / 35 = 0.7714285714285715\n')
      }
      if (a == 27 && sign == '/' && b == 36) {
        rl.write('27 / 36 = 0.75\n')
      }
      if (a == 27 && sign == '/' && b == 37) {
        rl.write('27 / 37 = 0.7297297297297297\n')
      }
      if (a == 27 && sign == '/' && b == 38) {
        rl.write('27 / 38 = 0.7105263157894737\n')
      }
      if (a == 27 && sign == '/' && b == 39) {
        rl.write('27 / 39 = 0.6923076923076923\n')
      }
      if (a == 27 && sign == '/' && b == 40) {
        rl.write('27 / 40 = 0.675\n')
      }
      if (a == 27 && sign == '/' && b == 41) {
        rl.write('27 / 41 = 0.6585365853658537\n')
      }
      if (a == 27 && sign == '/' && b == 42) {
        rl.write('27 / 42 = 0.6428571428571429\n')
      }
      if (a == 27 && sign == '/' && b == 43) {
        rl.write('27 / 43 = 0.627906976744186\n')
      }
      if (a == 27 && sign == '/' && b == 44) {
        rl.write('27 / 44 = 0.6136363636363636\n')
      }
      if (a == 27 && sign == '/' && b == 45) {
        rl.write('27 / 45 = 0.6\n')
      }
      if (a == 27 && sign == '/' && b == 46) {
        rl.write('27 / 46 = 0.5869565217391305\n')
      }
      if (a == 27 && sign == '/' && b == 47) {
        rl.write('27 / 47 = 0.574468085106383\n')
      }
      if (a == 27 && sign == '/' && b == 48) {
        rl.write('27 / 48 = 0.5625\n')
      }
      if (a == 27 && sign == '/' && b == 49) {
        rl.write('27 / 49 = 0.5510204081632653\n')
      }
      if (a == 27 && sign == '/' && b == 50) {
        rl.write('27 / 50 = 0.54\n')
      }
      if (a == 28 && sign == '/' && b == 0) {
        rl.write('28 / 0 = Infinity\n')
      }
      if (a == 28 && sign == '/' && b == 1) {
        rl.write('28 / 1 = 28\n')
      }
      if (a == 28 && sign == '/' && b == 2) {
        rl.write('28 / 2 = 14\n')
      }
      if (a == 28 && sign == '/' && b == 3) {
        rl.write('28 / 3 = 9.333333333333334\n')
      }
      if (a == 28 && sign == '/' && b == 4) {
        rl.write('28 / 4 = 7\n')
      }
      if (a == 28 && sign == '/' && b == 5) {
        rl.write('28 / 5 = 5.6\n')
      }
      if (a == 28 && sign == '/' && b == 6) {
        rl.write('28 / 6 = 4.666666666666667\n')
      }
      if (a == 28 && sign == '/' && b == 7) {
        rl.write('28 / 7 = 4\n')
      }
      if (a == 28 && sign == '/' && b == 8) {
        rl.write('28 / 8 = 3.5\n')
      }
      if (a == 28 && sign == '/' && b == 9) {
        rl.write('28 / 9 = 3.111111111111111\n')
      }
      if (a == 28 && sign == '/' && b == 10) {
        rl.write('28 / 10 = 2.8\n')
      }
      if (a == 28 && sign == '/' && b == 11) {
        rl.write('28 / 11 = 2.5454545454545454\n')
      }
      if (a == 28 && sign == '/' && b == 12) {
        rl.write('28 / 12 = 2.3333333333333335\n')
      }
      if (a == 28 && sign == '/' && b == 13) {
        rl.write('28 / 13 = 2.1538461538461537\n')
      }
      if (a == 28 && sign == '/' && b == 14) {
        rl.write('28 / 14 = 2\n')
      }
      if (a == 28 && sign == '/' && b == 15) {
        rl.write('28 / 15 = 1.8666666666666667\n')
      }
      if (a == 28 && sign == '/' && b == 16) {
        rl.write('28 / 16 = 1.75\n')
      }
      if (a == 28 && sign == '/' && b == 17) {
        rl.write('28 / 17 = 1.6470588235294117\n')
      }
      if (a == 28 && sign == '/' && b == 18) {
        rl.write('28 / 18 = 1.5555555555555556\n')
      }
      if (a == 28 && sign == '/' && b == 19) {
        rl.write('28 / 19 = 1.4736842105263157\n')
      }
      if (a == 28 && sign == '/' && b == 20) {
        rl.write('28 / 20 = 1.4\n')
      }
      if (a == 28 && sign == '/' && b == 21) {
        rl.write('28 / 21 = 1.3333333333333333\n')
      }
      if (a == 28 && sign == '/' && b == 22) {
        rl.write('28 / 22 = 1.2727272727272727\n')
      }
      if (a == 28 && sign == '/' && b == 23) {
        rl.write('28 / 23 = 1.2173913043478262\n')
      }
      if (a == 28 && sign == '/' && b == 24) {
        rl.write('28 / 24 = 1.1666666666666667\n')
      }
      if (a == 28 && sign == '/' && b == 25) {
        rl.write('28 / 25 = 1.12\n')
      }
      if (a == 28 && sign == '/' && b == 26) {
        rl.write('28 / 26 = 1.0769230769230769\n')
      }
      if (a == 28 && sign == '/' && b == 27) {
        rl.write('28 / 27 = 1.037037037037037\n')
      }
      if (a == 28 && sign == '/' && b == 28) {
        rl.write('28 / 28 = 1\n')
      }
      if (a == 28 && sign == '/' && b == 29) {
        rl.write('28 / 29 = 0.9655172413793104\n')
      }
      if (a == 28 && sign == '/' && b == 30) {
        rl.write('28 / 30 = 0.9333333333333333\n')
      }
      if (a == 28 && sign == '/' && b == 31) {
        rl.write('28 / 31 = 0.9032258064516129\n')
      }
      if (a == 28 && sign == '/' && b == 32) {
        rl.write('28 / 32 = 0.875\n')
      }
      if (a == 28 && sign == '/' && b == 33) {
        rl.write('28 / 33 = 0.8484848484848485\n')
      }
      if (a == 28 && sign == '/' && b == 34) {
        rl.write('28 / 34 = 0.8235294117647058\n')
      }
      if (a == 28 && sign == '/' && b == 35) {
        rl.write('28 / 35 = 0.8\n')
      }
      if (a == 28 && sign == '/' && b == 36) {
        rl.write('28 / 36 = 0.7777777777777778\n')
      }
      if (a == 28 && sign == '/' && b == 37) {
        rl.write('28 / 37 = 0.7567567567567568\n')
      }
      if (a == 28 && sign == '/' && b == 38) {
        rl.write('28 / 38 = 0.7368421052631579\n')
      }
      if (a == 28 && sign == '/' && b == 39) {
        rl.write('28 / 39 = 0.717948717948718\n')
      }
      if (a == 28 && sign == '/' && b == 40) {
        rl.write('28 / 40 = 0.7\n')
      }
      if (a == 28 && sign == '/' && b == 41) {
        rl.write('28 / 41 = 0.6829268292682927\n')
      }
      if (a == 28 && sign == '/' && b == 42) {
        rl.write('28 / 42 = 0.6666666666666666\n')
      }
      if (a == 28 && sign == '/' && b == 43) {
        rl.write('28 / 43 = 0.6511627906976745\n')
      }
      if (a == 28 && sign == '/' && b == 44) {
        rl.write('28 / 44 = 0.6363636363636364\n')
      }
      if (a == 28 && sign == '/' && b == 45) {
        rl.write('28 / 45 = 0.6222222222222222\n')
      }
      if (a == 28 && sign == '/' && b == 46) {
        rl.write('28 / 46 = 0.6086956521739131\n')
      }
      if (a == 28 && sign == '/' && b == 47) {
        rl.write('28 / 47 = 0.5957446808510638\n')
      }
      if (a == 28 && sign == '/' && b == 48) {
        rl.write('28 / 48 = 0.5833333333333334\n')
      }
      if (a == 28 && sign == '/' && b == 49) {
        rl.write('28 / 49 = 0.5714285714285714\n')
      }
      if (a == 28 && sign == '/' && b == 50) {
        rl.write('28 / 50 = 0.56\n')
      }
      if (a == 29 && sign == '/' && b == 0) {
        rl.write('29 / 0 = Infinity\n')
      }
      if (a == 29 && sign == '/' && b == 1) {
        rl.write('29 / 1 = 29\n')
      }
      if (a == 29 && sign == '/' && b == 2) {
        rl.write('29 / 2 = 14.5\n')
      }
      if (a == 29 && sign == '/' && b == 3) {
        rl.write('29 / 3 = 9.666666666666666\n')
      }
      if (a == 29 && sign == '/' && b == 4) {
        rl.write('29 / 4 = 7.25\n')
      }
      if (a == 29 && sign == '/' && b == 5) {
        rl.write('29 / 5 = 5.8\n')
      }
      if (a == 29 && sign == '/' && b == 6) {
        rl.write('29 / 6 = 4.833333333333333\n')
      }
      if (a == 29 && sign == '/' && b == 7) {
        rl.write('29 / 7 = 4.142857142857143\n')
      }
      if (a == 29 && sign == '/' && b == 8) {
        rl.write('29 / 8 = 3.625\n')
      }
      if (a == 29 && sign == '/' && b == 9) {
        rl.write('29 / 9 = 3.2222222222222223\n')
      }
      if (a == 29 && sign == '/' && b == 10) {
        rl.write('29 / 10 = 2.9\n')
      }
      if (a == 29 && sign == '/' && b == 11) {
        rl.write('29 / 11 = 2.6363636363636362\n')
      }
      if (a == 29 && sign == '/' && b == 12) {
        rl.write('29 / 12 = 2.4166666666666665\n')
      }
      if (a == 29 && sign == '/' && b == 13) {
        rl.write('29 / 13 = 2.230769230769231\n')
      }
      if (a == 29 && sign == '/' && b == 14) {
        rl.write('29 / 14 = 2.0714285714285716\n')
      }
      if (a == 29 && sign == '/' && b == 15) {
        rl.write('29 / 15 = 1.9333333333333333\n')
      }
      if (a == 29 && sign == '/' && b == 16) {
        rl.write('29 / 16 = 1.8125\n')
      }
      if (a == 29 && sign == '/' && b == 17) {
        rl.write('29 / 17 = 1.7058823529411764\n')
      }
      if (a == 29 && sign == '/' && b == 18) {
        rl.write('29 / 18 = 1.6111111111111112\n')
      }
      if (a == 29 && sign == '/' && b == 19) {
        rl.write('29 / 19 = 1.5263157894736843\n')
      }
      if (a == 29 && sign == '/' && b == 20) {
        rl.write('29 / 20 = 1.45\n')
      }
      if (a == 29 && sign == '/' && b == 21) {
        rl.write('29 / 21 = 1.380952380952381\n')
      }
      if (a == 29 && sign == '/' && b == 22) {
        rl.write('29 / 22 = 1.3181818181818181\n')
      }
      if (a == 29 && sign == '/' && b == 23) {
        rl.write('29 / 23 = 1.2608695652173914\n')
      }
      if (a == 29 && sign == '/' && b == 24) {
        rl.write('29 / 24 = 1.2083333333333333\n')
      }
      if (a == 29 && sign == '/' && b == 25) {
        rl.write('29 / 25 = 1.16\n')
      }
      if (a == 29 && sign == '/' && b == 26) {
        rl.write('29 / 26 = 1.1153846153846154\n')
      }
      if (a == 29 && sign == '/' && b == 27) {
        rl.write('29 / 27 = 1.0740740740740742\n')
      }
      if (a == 29 && sign == '/' && b == 28) {
        rl.write('29 / 28 = 1.0357142857142858\n')
      }
      if (a == 29 && sign == '/' && b == 29) {
        rl.write('29 / 29 = 1\n')
      }
      if (a == 29 && sign == '/' && b == 30) {
        rl.write('29 / 30 = 0.9666666666666667\n')
      }
      if (a == 29 && sign == '/' && b == 31) {
        rl.write('29 / 31 = 0.9354838709677419\n')
      }
      if (a == 29 && sign == '/' && b == 32) {
        rl.write('29 / 32 = 0.90625\n')
      }
      if (a == 29 && sign == '/' && b == 33) {
        rl.write('29 / 33 = 0.8787878787878788\n')
      }
      if (a == 29 && sign == '/' && b == 34) {
        rl.write('29 / 34 = 0.8529411764705882\n')
      }
      if (a == 29 && sign == '/' && b == 35) {
        rl.write('29 / 35 = 0.8285714285714286\n')
      }
      if (a == 29 && sign == '/' && b == 36) {
        rl.write('29 / 36 = 0.8055555555555556\n')
      }
      if (a == 29 && sign == '/' && b == 37) {
        rl.write('29 / 37 = 0.7837837837837838\n')
      }
      if (a == 29 && sign == '/' && b == 38) {
        rl.write('29 / 38 = 0.7631578947368421\n')
      }
      if (a == 29 && sign == '/' && b == 39) {
        rl.write('29 / 39 = 0.7435897435897436\n')
      }
      if (a == 29 && sign == '/' && b == 40) {
        rl.write('29 / 40 = 0.725\n')
      }
      if (a == 29 && sign == '/' && b == 41) {
        rl.write('29 / 41 = 0.7073170731707317\n')
      }
      if (a == 29 && sign == '/' && b == 42) {
        rl.write('29 / 42 = 0.6904761904761905\n')
      }
      if (a == 29 && sign == '/' && b == 43) {
        rl.write('29 / 43 = 0.6744186046511628\n')
      }
      if (a == 29 && sign == '/' && b == 44) {
        rl.write('29 / 44 = 0.6590909090909091\n')
      }
      if (a == 29 && sign == '/' && b == 45) {
        rl.write('29 / 45 = 0.6444444444444445\n')
      }
      if (a == 29 && sign == '/' && b == 46) {
        rl.write('29 / 46 = 0.6304347826086957\n')
      }
      if (a == 29 && sign == '/' && b == 47) {
        rl.write('29 / 47 = 0.6170212765957447\n')
      }
      if (a == 29 && sign == '/' && b == 48) {
        rl.write('29 / 48 = 0.6041666666666666\n')
      }
      if (a == 29 && sign == '/' && b == 49) {
        rl.write('29 / 49 = 0.5918367346938775\n')
      }
      if (a == 29 && sign == '/' && b == 50) {
        rl.write('29 / 50 = 0.58\n')
      }
      if (a == 30 && sign == '/' && b == 0) {
        rl.write('30 / 0 = Infinity\n')
      }
      if (a == 30 && sign == '/' && b == 1) {
        rl.write('30 / 1 = 30\n')
      }
      if (a == 30 && sign == '/' && b == 2) {
        rl.write('30 / 2 = 15\n')
      }
      if (a == 30 && sign == '/' && b == 3) {
        rl.write('30 / 3 = 10\n')
      }
      if (a == 30 && sign == '/' && b == 4) {
        rl.write('30 / 4 = 7.5\n')
      }
      if (a == 30 && sign == '/' && b == 5) {
        rl.write('30 / 5 = 6\n')
      }
      if (a == 30 && sign == '/' && b == 6) {
        rl.write('30 / 6 = 5\n')
      }
      if (a == 30 && sign == '/' && b == 7) {
        rl.write('30 / 7 = 4.285714285714286\n')
      }
      if (a == 30 && sign == '/' && b == 8) {
        rl.write('30 / 8 = 3.75\n')
      }
      if (a == 30 && sign == '/' && b == 9) {
        rl.write('30 / 9 = 3.3333333333333335\n')
      }
      if (a == 30 && sign == '/' && b == 10) {
        rl.write('30 / 10 = 3\n')
      }
      if (a == 30 && sign == '/' && b == 11) {
        rl.write('30 / 11 = 2.727272727272727\n')
      }
      if (a == 30 && sign == '/' && b == 12) {
        rl.write('30 / 12 = 2.5\n')
      }
      if (a == 30 && sign == '/' && b == 13) {
        rl.write('30 / 13 = 2.3076923076923075\n')
      }
      if (a == 30 && sign == '/' && b == 14) {
        rl.write('30 / 14 = 2.142857142857143\n')
      }
      if (a == 30 && sign == '/' && b == 15) {
        rl.write('30 / 15 = 2\n')
      }
      if (a == 30 && sign == '/' && b == 16) {
        rl.write('30 / 16 = 1.875\n')
      }
      if (a == 30 && sign == '/' && b == 17) {
        rl.write('30 / 17 = 1.7647058823529411\n')
      }
      if (a == 30 && sign == '/' && b == 18) {
        rl.write('30 / 18 = 1.6666666666666667\n')
      }
      if (a == 30 && sign == '/' && b == 19) {
        rl.write('30 / 19 = 1.5789473684210527\n')
      }
      if (a == 30 && sign == '/' && b == 20) {
        rl.write('30 / 20 = 1.5\n')
      }
      if (a == 30 && sign == '/' && b == 21) {
        rl.write('30 / 21 = 1.4285714285714286\n')
      }
      if (a == 30 && sign == '/' && b == 22) {
        rl.write('30 / 22 = 1.3636363636363635\n')
      }
      if (a == 30 && sign == '/' && b == 23) {
        rl.write('30 / 23 = 1.3043478260869565\n')
      }
      if (a == 30 && sign == '/' && b == 24) {
        rl.write('30 / 24 = 1.25\n')
      }
      if (a == 30 && sign == '/' && b == 25) {
        rl.write('30 / 25 = 1.2\n')
      }
      if (a == 30 && sign == '/' && b == 26) {
        rl.write('30 / 26 = 1.1538461538461537\n')
      }
      if (a == 30 && sign == '/' && b == 27) {
        rl.write('30 / 27 = 1.1111111111111112\n')
      }
      if (a == 30 && sign == '/' && b == 28) {
        rl.write('30 / 28 = 1.0714285714285714\n')
      }
      if (a == 30 && sign == '/' && b == 29) {
        rl.write('30 / 29 = 1.0344827586206897\n')
      }
      if (a == 30 && sign == '/' && b == 30) {
        rl.write('30 / 30 = 1\n')
      }
      if (a == 30 && sign == '/' && b == 31) {
        rl.write('30 / 31 = 0.967741935483871\n')
      }
      if (a == 30 && sign == '/' && b == 32) {
        rl.write('30 / 32 = 0.9375\n')
      }
      if (a == 30 && sign == '/' && b == 33) {
        rl.write('30 / 33 = 0.9090909090909091\n')
      }
      if (a == 30 && sign == '/' && b == 34) {
        rl.write('30 / 34 = 0.8823529411764706\n')
      }
      if (a == 30 && sign == '/' && b == 35) {
        rl.write('30 / 35 = 0.8571428571428571\n')
      }
      if (a == 30 && sign == '/' && b == 36) {
        rl.write('30 / 36 = 0.8333333333333334\n')
      }
      if (a == 30 && sign == '/' && b == 37) {
        rl.write('30 / 37 = 0.8108108108108109\n')
      }
      if (a == 30 && sign == '/' && b == 38) {
        rl.write('30 / 38 = 0.7894736842105263\n')
      }
      if (a == 30 && sign == '/' && b == 39) {
        rl.write('30 / 39 = 0.7692307692307693\n')
      }
      if (a == 30 && sign == '/' && b == 40) {
        rl.write('30 / 40 = 0.75\n')
      }
      if (a == 30 && sign == '/' && b == 41) {
        rl.write('30 / 41 = 0.7317073170731707\n')
      }
      if (a == 30 && sign == '/' && b == 42) {
        rl.write('30 / 42 = 0.7142857142857143\n')
      }
      if (a == 30 && sign == '/' && b == 43) {
        rl.write('30 / 43 = 0.6976744186046512\n')
      }
      if (a == 30 && sign == '/' && b == 44) {
        rl.write('30 / 44 = 0.6818181818181818\n')
      }
      if (a == 30 && sign == '/' && b == 45) {
        rl.write('30 / 45 = 0.6666666666666666\n')
      }
      if (a == 30 && sign == '/' && b == 46) {
        rl.write('30 / 46 = 0.6521739130434783\n')
      }
      if (a == 30 && sign == '/' && b == 47) {
        rl.write('30 / 47 = 0.6382978723404256\n')
      }
      if (a == 30 && sign == '/' && b == 48) {
        rl.write('30 / 48 = 0.625\n')
      }
      if (a == 30 && sign == '/' && b == 49) {
        rl.write('30 / 49 = 0.6122448979591837\n')
      }
      if (a == 30 && sign == '/' && b == 50) {
        rl.write('30 / 50 = 0.6\n')
      }
      if (a == 31 && sign == '/' && b == 0) {
        rl.write('31 / 0 = Infinity\n')
      }
      if (a == 31 && sign == '/' && b == 1) {
        rl.write('31 / 1 = 31\n')
      }
      if (a == 31 && sign == '/' && b == 2) {
        rl.write('31 / 2 = 15.5\n')
      }
      if (a == 31 && sign == '/' && b == 3) {
        rl.write('31 / 3 = 10.333333333333334\n')
      }
      if (a == 31 && sign == '/' && b == 4) {
        rl.write('31 / 4 = 7.75\n')
      }
      if (a == 31 && sign == '/' && b == 5) {
        rl.write('31 / 5 = 6.2\n')
      }
      if (a == 31 && sign == '/' && b == 6) {
        rl.write('31 / 6 = 5.166666666666667\n')
      }
      if (a == 31 && sign == '/' && b == 7) {
        rl.write('31 / 7 = 4.428571428571429\n')
      }
      if (a == 31 && sign == '/' && b == 8) {
        rl.write('31 / 8 = 3.875\n')
      }
      if (a == 31 && sign == '/' && b == 9) {
        rl.write('31 / 9 = 3.4444444444444446\n')
      }
      if (a == 31 && sign == '/' && b == 10) {
        rl.write('31 / 10 = 3.1\n')
      }
      if (a == 31 && sign == '/' && b == 11) {
        rl.write('31 / 11 = 2.8181818181818183\n')
      }
      if (a == 31 && sign == '/' && b == 12) {
        rl.write('31 / 12 = 2.5833333333333335\n')
      }
      if (a == 31 && sign == '/' && b == 13) {
        rl.write('31 / 13 = 2.3846153846153846\n')
      }
      if (a == 31 && sign == '/' && b == 14) {
        rl.write('31 / 14 = 2.2142857142857144\n')
      }
      if (a == 31 && sign == '/' && b == 15) {
        rl.write('31 / 15 = 2.066666666666667\n')
      }
      if (a == 31 && sign == '/' && b == 16) {
        rl.write('31 / 16 = 1.9375\n')
      }
      if (a == 31 && sign == '/' && b == 17) {
        rl.write('31 / 17 = 1.8235294117647058\n')
      }
      if (a == 31 && sign == '/' && b == 18) {
        rl.write('31 / 18 = 1.7222222222222223\n')
      }
      if (a == 31 && sign == '/' && b == 19) {
        rl.write('31 / 19 = 1.631578947368421\n')
      }
      if (a == 31 && sign == '/' && b == 20) {
        rl.write('31 / 20 = 1.55\n')
      }
      if (a == 31 && sign == '/' && b == 21) {
        rl.write('31 / 21 = 1.4761904761904763\n')
      }
      if (a == 31 && sign == '/' && b == 22) {
        rl.write('31 / 22 = 1.4090909090909092\n')
      }
      if (a == 31 && sign == '/' && b == 23) {
        rl.write('31 / 23 = 1.3478260869565217\n')
      }
      if (a == 31 && sign == '/' && b == 24) {
        rl.write('31 / 24 = 1.2916666666666667\n')
      }
      if (a == 31 && sign == '/' && b == 25) {
        rl.write('31 / 25 = 1.24\n')
      }
      if (a == 31 && sign == '/' && b == 26) {
        rl.write('31 / 26 = 1.1923076923076923\n')
      }
      if (a == 31 && sign == '/' && b == 27) {
        rl.write('31 / 27 = 1.1481481481481481\n')
      }
      if (a == 31 && sign == '/' && b == 28) {
        rl.write('31 / 28 = 1.1071428571428572\n')
      }
      if (a == 31 && sign == '/' && b == 29) {
        rl.write('31 / 29 = 1.0689655172413792\n')
      }
      if (a == 31 && sign == '/' && b == 30) {
        rl.write('31 / 30 = 1.0333333333333334\n')
      }
      if (a == 31 && sign == '/' && b == 31) {
        rl.write('31 / 31 = 1\n')
      }
      if (a == 31 && sign == '/' && b == 32) {
        rl.write('31 / 32 = 0.96875\n')
      }
      if (a == 31 && sign == '/' && b == 33) {
        rl.write('31 / 33 = 0.9393939393939394\n')
      }
      if (a == 31 && sign == '/' && b == 34) {
        rl.write('31 / 34 = 0.9117647058823529\n')
      }
      if (a == 31 && sign == '/' && b == 35) {
        rl.write('31 / 35 = 0.8857142857142857\n')
      }
      if (a == 31 && sign == '/' && b == 36) {
        rl.write('31 / 36 = 0.8611111111111112\n')
      }
      if (a == 31 && sign == '/' && b == 37) {
        rl.write('31 / 37 = 0.8378378378378378\n')
      }
      if (a == 31 && sign == '/' && b == 38) {
        rl.write('31 / 38 = 0.8157894736842105\n')
      }
      if (a == 31 && sign == '/' && b == 39) {
        rl.write('31 / 39 = 0.7948717948717948\n')
      }
      if (a == 31 && sign == '/' && b == 40) {
        rl.write('31 / 40 = 0.775\n')
      }
      if (a == 31 && sign == '/' && b == 41) {
        rl.write('31 / 41 = 0.7560975609756098\n')
      }
      if (a == 31 && sign == '/' && b == 42) {
        rl.write('31 / 42 = 0.7380952380952381\n')
      }
      if (a == 31 && sign == '/' && b == 43) {
        rl.write('31 / 43 = 0.7209302325581395\n')
      }
      if (a == 31 && sign == '/' && b == 44) {
        rl.write('31 / 44 = 0.7045454545454546\n')
      }
      if (a == 31 && sign == '/' && b == 45) {
        rl.write('31 / 45 = 0.6888888888888889\n')
      }
      if (a == 31 && sign == '/' && b == 46) {
        rl.write('31 / 46 = 0.6739130434782609\n')
      }
      if (a == 31 && sign == '/' && b == 47) {
        rl.write('31 / 47 = 0.6595744680851063\n')
      }
      if (a == 31 && sign == '/' && b == 48) {
        rl.write('31 / 48 = 0.6458333333333334\n')
      }
      if (a == 31 && sign == '/' && b == 49) {
        rl.write('31 / 49 = 0.6326530612244898\n')
      }
      if (a == 31 && sign == '/' && b == 50) {
        rl.write('31 / 50 = 0.62\n')
      }
      if (a == 32 && sign == '/' && b == 0) {
        rl.write('32 / 0 = Infinity\n')
      }
      if (a == 32 && sign == '/' && b == 1) {
        rl.write('32 / 1 = 32\n')
      }
      if (a == 32 && sign == '/' && b == 2) {
        rl.write('32 / 2 = 16\n')
      }
      if (a == 32 && sign == '/' && b == 3) {
        rl.write('32 / 3 = 10.666666666666666\n')
      }
      if (a == 32 && sign == '/' && b == 4) {
        rl.write('32 / 4 = 8\n')
      }
      if (a == 32 && sign == '/' && b == 5) {
        rl.write('32 / 5 = 6.4\n')
      }
      if (a == 32 && sign == '/' && b == 6) {
        rl.write('32 / 6 = 5.333333333333333\n')
      }
      if (a == 32 && sign == '/' && b == 7) {
        rl.write('32 / 7 = 4.571428571428571\n')
      }
      if (a == 32 && sign == '/' && b == 8) {
        rl.write('32 / 8 = 4\n')
      }
      if (a == 32 && sign == '/' && b == 9) {
        rl.write('32 / 9 = 3.5555555555555554\n')
      }
      if (a == 32 && sign == '/' && b == 10) {
        rl.write('32 / 10 = 3.2\n')
      }
      if (a == 32 && sign == '/' && b == 11) {
        rl.write('32 / 11 = 2.909090909090909\n')
      }
      if (a == 32 && sign == '/' && b == 12) {
        rl.write('32 / 12 = 2.6666666666666665\n')
      }
      if (a == 32 && sign == '/' && b == 13) {
        rl.write('32 / 13 = 2.4615384615384617\n')
      }
      if (a == 32 && sign == '/' && b == 14) {
        rl.write('32 / 14 = 2.2857142857142856\n')
      }
      if (a == 32 && sign == '/' && b == 15) {
        rl.write('32 / 15 = 2.1333333333333333\n')
      }
      if (a == 32 && sign == '/' && b == 16) {
        rl.write('32 / 16 = 2\n')
      }
      if (a == 32 && sign == '/' && b == 17) {
        rl.write('32 / 17 = 1.8823529411764706\n')
      }
      if (a == 32 && sign == '/' && b == 18) {
        rl.write('32 / 18 = 1.7777777777777777\n')
      }
      if (a == 32 && sign == '/' && b == 19) {
        rl.write('32 / 19 = 1.6842105263157894\n')
      }
      if (a == 32 && sign == '/' && b == 20) {
        rl.write('32 / 20 = 1.6\n')
      }
      if (a == 32 && sign == '/' && b == 21) {
        rl.write('32 / 21 = 1.5238095238095237\n')
      }
      if (a == 32 && sign == '/' && b == 22) {
        rl.write('32 / 22 = 1.4545454545454546\n')
      }
      if (a == 32 && sign == '/' && b == 23) {
        rl.write('32 / 23 = 1.391304347826087\n')
      }
      if (a == 32 && sign == '/' && b == 24) {
        rl.write('32 / 24 = 1.3333333333333333\n')
      }
      if (a == 32 && sign == '/' && b == 25) {
        rl.write('32 / 25 = 1.28\n')
      }
      if (a == 32 && sign == '/' && b == 26) {
        rl.write('32 / 26 = 1.2307692307692308\n')
      }
      if (a == 32 && sign == '/' && b == 27) {
        rl.write('32 / 27 = 1.1851851851851851\n')
      }
      if (a == 32 && sign == '/' && b == 28) {
        rl.write('32 / 28 = 1.1428571428571428\n')
      }
      if (a == 32 && sign == '/' && b == 29) {
        rl.write('32 / 29 = 1.103448275862069\n')
      }
      if (a == 32 && sign == '/' && b == 30) {
        rl.write('32 / 30 = 1.0666666666666667\n')
      }
      if (a == 32 && sign == '/' && b == 31) {
        rl.write('32 / 31 = 1.032258064516129\n')
      }
      if (a == 32 && sign == '/' && b == 32) {
        rl.write('32 / 32 = 1\n')
      }
      if (a == 32 && sign == '/' && b == 33) {
        rl.write('32 / 33 = 0.9696969696969697\n')
      }
      if (a == 32 && sign == '/' && b == 34) {
        rl.write('32 / 34 = 0.9411764705882353\n')
      }
      if (a == 32 && sign == '/' && b == 35) {
        rl.write('32 / 35 = 0.9142857142857143\n')
      }
      if (a == 32 && sign == '/' && b == 36) {
        rl.write('32 / 36 = 0.8888888888888888\n')
      }
      if (a == 32 && sign == '/' && b == 37) {
        rl.write('32 / 37 = 0.8648648648648649\n')
      }
      if (a == 32 && sign == '/' && b == 38) {
        rl.write('32 / 38 = 0.8421052631578947\n')
      }
      if (a == 32 && sign == '/' && b == 39) {
        rl.write('32 / 39 = 0.8205128205128205\n')
      }
      if (a == 32 && sign == '/' && b == 40) {
        rl.write('32 / 40 = 0.8\n')
      }
      if (a == 32 && sign == '/' && b == 41) {
        rl.write('32 / 41 = 0.7804878048780488\n')
      }
      if (a == 32 && sign == '/' && b == 42) {
        rl.write('32 / 42 = 0.7619047619047619\n')
      }
      if (a == 32 && sign == '/' && b == 43) {
        rl.write('32 / 43 = 0.7441860465116279\n')
      }
      if (a == 32 && sign == '/' && b == 44) {
        rl.write('32 / 44 = 0.7272727272727273\n')
      }
      if (a == 32 && sign == '/' && b == 45) {
        rl.write('32 / 45 = 0.7111111111111111\n')
      }
      if (a == 32 && sign == '/' && b == 46) {
        rl.write('32 / 46 = 0.6956521739130435\n')
      }
      if (a == 32 && sign == '/' && b == 47) {
        rl.write('32 / 47 = 0.6808510638297872\n')
      }
      if (a == 32 && sign == '/' && b == 48) {
        rl.write('32 / 48 = 0.6666666666666666\n')
      }
      if (a == 32 && sign == '/' && b == 49) {
        rl.write('32 / 49 = 0.6530612244897959\n')
      }
      if (a == 32 && sign == '/' && b == 50) {
        rl.write('32 / 50 = 0.64\n')
      }
      if (a == 33 && sign == '/' && b == 0) {
        rl.write('33 / 0 = Infinity\n')
      }
      if (a == 33 && sign == '/' && b == 1) {
        rl.write('33 / 1 = 33\n')
      }
      if (a == 33 && sign == '/' && b == 2) {
        rl.write('33 / 2 = 16.5\n')
      }
      if (a == 33 && sign == '/' && b == 3) {
        rl.write('33 / 3 = 11\n')
      }
      if (a == 33 && sign == '/' && b == 4) {
        rl.write('33 / 4 = 8.25\n')
      }
      if (a == 33 && sign == '/' && b == 5) {
        rl.write('33 / 5 = 6.6\n')
      }
      if (a == 33 && sign == '/' && b == 6) {
        rl.write('33 / 6 = 5.5\n')
      }
      if (a == 33 && sign == '/' && b == 7) {
        rl.write('33 / 7 = 4.714285714285714\n')
      }
      if (a == 33 && sign == '/' && b == 8) {
        rl.write('33 / 8 = 4.125\n')
      }
      if (a == 33 && sign == '/' && b == 9) {
        rl.write('33 / 9 = 3.6666666666666665\n')
      }
      if (a == 33 && sign == '/' && b == 10) {
        rl.write('33 / 10 = 3.3\n')
      }
      if (a == 33 && sign == '/' && b == 11) {
        rl.write('33 / 11 = 3\n')
      }
      if (a == 33 && sign == '/' && b == 12) {
        rl.write('33 / 12 = 2.75\n')
      }
      if (a == 33 && sign == '/' && b == 13) {
        rl.write('33 / 13 = 2.5384615384615383\n')
      }
      if (a == 33 && sign == '/' && b == 14) {
        rl.write('33 / 14 = 2.357142857142857\n')
      }
      if (a == 33 && sign == '/' && b == 15) {
        rl.write('33 / 15 = 2.2\n')
      }
      if (a == 33 && sign == '/' && b == 16) {
        rl.write('33 / 16 = 2.0625\n')
      }
      if (a == 33 && sign == '/' && b == 17) {
        rl.write('33 / 17 = 1.9411764705882353\n')
      }
      if (a == 33 && sign == '/' && b == 18) {
        rl.write('33 / 18 = 1.8333333333333333\n')
      }
      if (a == 33 && sign == '/' && b == 19) {
        rl.write('33 / 19 = 1.736842105263158\n')
      }
      if (a == 33 && sign == '/' && b == 20) {
        rl.write('33 / 20 = 1.65\n')
      }
      if (a == 33 && sign == '/' && b == 21) {
        rl.write('33 / 21 = 1.5714285714285714\n')
      }
      if (a == 33 && sign == '/' && b == 22) {
        rl.write('33 / 22 = 1.5\n')
      }
      if (a == 33 && sign == '/' && b == 23) {
        rl.write('33 / 23 = 1.434782608695652\n')
      }
      if (a == 33 && sign == '/' && b == 24) {
        rl.write('33 / 24 = 1.375\n')
      }
      if (a == 33 && sign == '/' && b == 25) {
        rl.write('33 / 25 = 1.32\n')
      }
      if (a == 33 && sign == '/' && b == 26) {
        rl.write('33 / 26 = 1.2692307692307692\n')
      }
      if (a == 33 && sign == '/' && b == 27) {
        rl.write('33 / 27 = 1.2222222222222223\n')
      }
      if (a == 33 && sign == '/' && b == 28) {
        rl.write('33 / 28 = 1.1785714285714286\n')
      }
      if (a == 33 && sign == '/' && b == 29) {
        rl.write('33 / 29 = 1.1379310344827587\n')
      }
      if (a == 33 && sign == '/' && b == 30) {
        rl.write('33 / 30 = 1.1\n')
      }
      if (a == 33 && sign == '/' && b == 31) {
        rl.write('33 / 31 = 1.064516129032258\n')
      }
      if (a == 33 && sign == '/' && b == 32) {
        rl.write('33 / 32 = 1.03125\n')
      }
      if (a == 33 && sign == '/' && b == 33) {
        rl.write('33 / 33 = 1\n')
      }
      if (a == 33 && sign == '/' && b == 34) {
        rl.write('33 / 34 = 0.9705882352941176\n')
      }
      if (a == 33 && sign == '/' && b == 35) {
        rl.write('33 / 35 = 0.9428571428571428\n')
      }
      if (a == 33 && sign == '/' && b == 36) {
        rl.write('33 / 36 = 0.9166666666666666\n')
      }
      if (a == 33 && sign == '/' && b == 37) {
        rl.write('33 / 37 = 0.8918918918918919\n')
      }
      if (a == 33 && sign == '/' && b == 38) {
        rl.write('33 / 38 = 0.868421052631579\n')
      }
      if (a == 33 && sign == '/' && b == 39) {
        rl.write('33 / 39 = 0.8461538461538461\n')
      }
      if (a == 33 && sign == '/' && b == 40) {
        rl.write('33 / 40 = 0.825\n')
      }
      if (a == 33 && sign == '/' && b == 41) {
        rl.write('33 / 41 = 0.8048780487804879\n')
      }
      if (a == 33 && sign == '/' && b == 42) {
        rl.write('33 / 42 = 0.7857142857142857\n')
      }
      if (a == 33 && sign == '/' && b == 43) {
        rl.write('33 / 43 = 0.7674418604651163\n')
      }
      if (a == 33 && sign == '/' && b == 44) {
        rl.write('33 / 44 = 0.75\n')
      }
      if (a == 33 && sign == '/' && b == 45) {
        rl.write('33 / 45 = 0.7333333333333333\n')
      }
      if (a == 33 && sign == '/' && b == 46) {
        rl.write('33 / 46 = 0.717391304347826\n')
      }
      if (a == 33 && sign == '/' && b == 47) {
        rl.write('33 / 47 = 0.7021276595744681\n')
      }
      if (a == 33 && sign == '/' && b == 48) {
        rl.write('33 / 48 = 0.6875\n')
      }
      if (a == 33 && sign == '/' && b == 49) {
        rl.write('33 / 49 = 0.673469387755102\n')
      }
      if (a == 33 && sign == '/' && b == 50) {
        rl.write('33 / 50 = 0.66\n')
      }
      if (a == 34 && sign == '/' && b == 0) {
        rl.write('34 / 0 = Infinity\n')
      }
      if (a == 34 && sign == '/' && b == 1) {
        rl.write('34 / 1 = 34\n')
      }
      if (a == 34 && sign == '/' && b == 2) {
        rl.write('34 / 2 = 17\n')
      }
      if (a == 34 && sign == '/' && b == 3) {
        rl.write('34 / 3 = 11.333333333333334\n')
      }
      if (a == 34 && sign == '/' && b == 4) {
        rl.write('34 / 4 = 8.5\n')
      }
      if (a == 34 && sign == '/' && b == 5) {
        rl.write('34 / 5 = 6.8\n')
      }
      if (a == 34 && sign == '/' && b == 6) {
        rl.write('34 / 6 = 5.666666666666667\n')
      }
      if (a == 34 && sign == '/' && b == 7) {
        rl.write('34 / 7 = 4.857142857142857\n')
      }
      if (a == 34 && sign == '/' && b == 8) {
        rl.write('34 / 8 = 4.25\n')
      }
      if (a == 34 && sign == '/' && b == 9) {
        rl.write('34 / 9 = 3.7777777777777777\n')
      }
      if (a == 34 && sign == '/' && b == 10) {
        rl.write('34 / 10 = 3.4\n')
      }
      if (a == 34 && sign == '/' && b == 11) {
        rl.write('34 / 11 = 3.090909090909091\n')
      }
      if (a == 34 && sign == '/' && b == 12) {
        rl.write('34 / 12 = 2.8333333333333335\n')
      }
      if (a == 34 && sign == '/' && b == 13) {
        rl.write('34 / 13 = 2.6153846153846154\n')
      }
      if (a == 34 && sign == '/' && b == 14) {
        rl.write('34 / 14 = 2.4285714285714284\n')
      }
      if (a == 34 && sign == '/' && b == 15) {
        rl.write('34 / 15 = 2.2666666666666666\n')
      }
      if (a == 34 && sign == '/' && b == 16) {
        rl.write('34 / 16 = 2.125\n')
      }
      if (a == 34 && sign == '/' && b == 17) {
        rl.write('34 / 17 = 2\n')
      }
      if (a == 34 && sign == '/' && b == 18) {
        rl.write('34 / 18 = 1.8888888888888888\n')
      }
      if (a == 34 && sign == '/' && b == 19) {
        rl.write('34 / 19 = 1.7894736842105263\n')
      }
      if (a == 34 && sign == '/' && b == 20) {
        rl.write('34 / 20 = 1.7\n')
      }
      if (a == 34 && sign == '/' && b == 21) {
        rl.write('34 / 21 = 1.619047619047619\n')
      }
      if (a == 34 && sign == '/' && b == 22) {
        rl.write('34 / 22 = 1.5454545454545454\n')
      }
      if (a == 34 && sign == '/' && b == 23) {
        rl.write('34 / 23 = 1.4782608695652173\n')
      }
      if (a == 34 && sign == '/' && b == 24) {
        rl.write('34 / 24 = 1.4166666666666667\n')
      }
      if (a == 34 && sign == '/' && b == 25) {
        rl.write('34 / 25 = 1.36\n')
      }
      if (a == 34 && sign == '/' && b == 26) {
        rl.write('34 / 26 = 1.3076923076923077\n')
      }
      if (a == 34 && sign == '/' && b == 27) {
        rl.write('34 / 27 = 1.2592592592592593\n')
      }
      if (a == 34 && sign == '/' && b == 28) {
        rl.write('34 / 28 = 1.2142857142857142\n')
      }
      if (a == 34 && sign == '/' && b == 29) {
        rl.write('34 / 29 = 1.1724137931034482\n')
      }
      if (a == 34 && sign == '/' && b == 30) {
        rl.write('34 / 30 = 1.1333333333333333\n')
      }
      if (a == 34 && sign == '/' && b == 31) {
        rl.write('34 / 31 = 1.096774193548387\n')
      }
      if (a == 34 && sign == '/' && b == 32) {
        rl.write('34 / 32 = 1.0625\n')
      }
      if (a == 34 && sign == '/' && b == 33) {
        rl.write('34 / 33 = 1.0303030303030303\n')
      }
      if (a == 34 && sign == '/' && b == 34) {
        rl.write('34 / 34 = 1\n')
      }
      if (a == 34 && sign == '/' && b == 35) {
        rl.write('34 / 35 = 0.9714285714285714\n')
      }
      if (a == 34 && sign == '/' && b == 36) {
        rl.write('34 / 36 = 0.9444444444444444\n')
      }
      if (a == 34 && sign == '/' && b == 37) {
        rl.write('34 / 37 = 0.918918918918919\n')
      }
      if (a == 34 && sign == '/' && b == 38) {
        rl.write('34 / 38 = 0.8947368421052632\n')
      }
      if (a == 34 && sign == '/' && b == 39) {
        rl.write('34 / 39 = 0.8717948717948718\n')
      }
      if (a == 34 && sign == '/' && b == 40) {
        rl.write('34 / 40 = 0.85\n')
      }
      if (a == 34 && sign == '/' && b == 41) {
        rl.write('34 / 41 = 0.8292682926829268\n')
      }
      if (a == 34 && sign == '/' && b == 42) {
        rl.write('34 / 42 = 0.8095238095238095\n')
      }
      if (a == 34 && sign == '/' && b == 43) {
        rl.write('34 / 43 = 0.7906976744186046\n')
      }
      if (a == 34 && sign == '/' && b == 44) {
        rl.write('34 / 44 = 0.7727272727272727\n')
      }
      if (a == 34 && sign == '/' && b == 45) {
        rl.write('34 / 45 = 0.7555555555555555\n')
      }
      if (a == 34 && sign == '/' && b == 46) {
        rl.write('34 / 46 = 0.7391304347826086\n')
      }
      if (a == 34 && sign == '/' && b == 47) {
        rl.write('34 / 47 = 0.723404255319149\n')
      }
      if (a == 34 && sign == '/' && b == 48) {
        rl.write('34 / 48 = 0.7083333333333334\n')
      }
      if (a == 34 && sign == '/' && b == 49) {
        rl.write('34 / 49 = 0.6938775510204082\n')
      }
      if (a == 34 && sign == '/' && b == 50) {
        rl.write('34 / 50 = 0.68\n')
      }
      if (a == 35 && sign == '/' && b == 0) {
        rl.write('35 / 0 = Infinity\n')
      }
      if (a == 35 && sign == '/' && b == 1) {
        rl.write('35 / 1 = 35\n')
      }
      if (a == 35 && sign == '/' && b == 2) {
        rl.write('35 / 2 = 17.5\n')
      }
      if (a == 35 && sign == '/' && b == 3) {
        rl.write('35 / 3 = 11.666666666666666\n')
      }
      if (a == 35 && sign == '/' && b == 4) {
        rl.write('35 / 4 = 8.75\n')
      }
      if (a == 35 && sign == '/' && b == 5) {
        rl.write('35 / 5 = 7\n')
      }
      if (a == 35 && sign == '/' && b == 6) {
        rl.write('35 / 6 = 5.833333333333333\n')
      }
      if (a == 35 && sign == '/' && b == 7) {
        rl.write('35 / 7 = 5\n')
      }
      if (a == 35 && sign == '/' && b == 8) {
        rl.write('35 / 8 = 4.375\n')
      }
      if (a == 35 && sign == '/' && b == 9) {
        rl.write('35 / 9 = 3.888888888888889\n')
      }
      if (a == 35 && sign == '/' && b == 10) {
        rl.write('35 / 10 = 3.5\n')
      }
      if (a == 35 && sign == '/' && b == 11) {
        rl.write('35 / 11 = 3.1818181818181817\n')
      }
      if (a == 35 && sign == '/' && b == 12) {
        rl.write('35 / 12 = 2.9166666666666665\n')
      }
      if (a == 35 && sign == '/' && b == 13) {
        rl.write('35 / 13 = 2.6923076923076925\n')
      }
      if (a == 35 && sign == '/' && b == 14) {
        rl.write('35 / 14 = 2.5\n')
      }
      if (a == 35 && sign == '/' && b == 15) {
        rl.write('35 / 15 = 2.3333333333333335\n')
      }
      if (a == 35 && sign == '/' && b == 16) {
        rl.write('35 / 16 = 2.1875\n')
      }
      if (a == 35 && sign == '/' && b == 17) {
        rl.write('35 / 17 = 2.0588235294117645\n')
      }
      if (a == 35 && sign == '/' && b == 18) {
        rl.write('35 / 18 = 1.9444444444444444\n')
      }
      if (a == 35 && sign == '/' && b == 19) {
        rl.write('35 / 19 = 1.8421052631578947\n')
      }
      if (a == 35 && sign == '/' && b == 20) {
        rl.write('35 / 20 = 1.75\n')
      }
      if (a == 35 && sign == '/' && b == 21) {
        rl.write('35 / 21 = 1.6666666666666667\n')
      }
      if (a == 35 && sign == '/' && b == 22) {
        rl.write('35 / 22 = 1.5909090909090908\n')
      }
      if (a == 35 && sign == '/' && b == 23) {
        rl.write('35 / 23 = 1.5217391304347827\n')
      }
      if (a == 35 && sign == '/' && b == 24) {
        rl.write('35 / 24 = 1.4583333333333333\n')
      }
      if (a == 35 && sign == '/' && b == 25) {
        rl.write('35 / 25 = 1.4\n')
      }
      if (a == 35 && sign == '/' && b == 26) {
        rl.write('35 / 26 = 1.3461538461538463\n')
      }
      if (a == 35 && sign == '/' && b == 27) {
        rl.write('35 / 27 = 1.2962962962962963\n')
      }
      if (a == 35 && sign == '/' && b == 28) {
        rl.write('35 / 28 = 1.25\n')
      }
      if (a == 35 && sign == '/' && b == 29) {
        rl.write('35 / 29 = 1.206896551724138\n')
      }
      if (a == 35 && sign == '/' && b == 30) {
        rl.write('35 / 30 = 1.1666666666666667\n')
      }
      if (a == 35 && sign == '/' && b == 31) {
        rl.write('35 / 31 = 1.1290322580645162\n')
      }
      if (a == 35 && sign == '/' && b == 32) {
        rl.write('35 / 32 = 1.09375\n')
      }
      if (a == 35 && sign == '/' && b == 33) {
        rl.write('35 / 33 = 1.0606060606060606\n')
      }
      if (a == 35 && sign == '/' && b == 34) {
        rl.write('35 / 34 = 1.0294117647058822\n')
      }
      if (a == 35 && sign == '/' && b == 35) {
        rl.write('35 / 35 = 1\n')
      }
      if (a == 35 && sign == '/' && b == 36) {
        rl.write('35 / 36 = 0.9722222222222222\n')
      }
      if (a == 35 && sign == '/' && b == 37) {
        rl.write('35 / 37 = 0.9459459459459459\n')
      }
      if (a == 35 && sign == '/' && b == 38) {
        rl.write('35 / 38 = 0.9210526315789473\n')
      }
      if (a == 35 && sign == '/' && b == 39) {
        rl.write('35 / 39 = 0.8974358974358975\n')
      }
      if (a == 35 && sign == '/' && b == 40) {
        rl.write('35 / 40 = 0.875\n')
      }
      if (a == 35 && sign == '/' && b == 41) {
        rl.write('35 / 41 = 0.8536585365853658\n')
      }
      if (a == 35 && sign == '/' && b == 42) {
        rl.write('35 / 42 = 0.8333333333333334\n')
      }
      if (a == 35 && sign == '/' && b == 43) {
        rl.write('35 / 43 = 0.813953488372093\n')
      }
      if (a == 35 && sign == '/' && b == 44) {
        rl.write('35 / 44 = 0.7954545454545454\n')
      }
      if (a == 35 && sign == '/' && b == 45) {
        rl.write('35 / 45 = 0.7777777777777778\n')
      }
      if (a == 35 && sign == '/' && b == 46) {
        rl.write('35 / 46 = 0.7608695652173914\n')
      }
      if (a == 35 && sign == '/' && b == 47) {
        rl.write('35 / 47 = 0.7446808510638298\n')
      }
      if (a == 35 && sign == '/' && b == 48) {
        rl.write('35 / 48 = 0.7291666666666666\n')
      }
      if (a == 35 && sign == '/' && b == 49) {
        rl.write('35 / 49 = 0.7142857142857143\n')
      }
      if (a == 35 && sign == '/' && b == 50) {
        rl.write('35 / 50 = 0.7\n')
      }
      if (a == 36 && sign == '/' && b == 0) {
        rl.write('36 / 0 = Infinity\n')
      }
      if (a == 36 && sign == '/' && b == 1) {
        rl.write('36 / 1 = 36\n')
      }
      if (a == 36 && sign == '/' && b == 2) {
        rl.write('36 / 2 = 18\n')
      }
      if (a == 36 && sign == '/' && b == 3) {
        rl.write('36 / 3 = 12\n')
      }
      if (a == 36 && sign == '/' && b == 4) {
        rl.write('36 / 4 = 9\n')
      }
      if (a == 36 && sign == '/' && b == 5) {
        rl.write('36 / 5 = 7.2\n')
      }
      if (a == 36 && sign == '/' && b == 6) {
        rl.write('36 / 6 = 6\n')
      }
      if (a == 36 && sign == '/' && b == 7) {
        rl.write('36 / 7 = 5.142857142857143\n')
      }
      if (a == 36 && sign == '/' && b == 8) {
        rl.write('36 / 8 = 4.5\n')
      }
      if (a == 36 && sign == '/' && b == 9) {
        rl.write('36 / 9 = 4\n')
      }
      if (a == 36 && sign == '/' && b == 10) {
        rl.write('36 / 10 = 3.6\n')
      }
      if (a == 36 && sign == '/' && b == 11) {
        rl.write('36 / 11 = 3.272727272727273\n')
      }
      if (a == 36 && sign == '/' && b == 12) {
        rl.write('36 / 12 = 3\n')
      }
      if (a == 36 && sign == '/' && b == 13) {
        rl.write('36 / 13 = 2.769230769230769\n')
      }
      if (a == 36 && sign == '/' && b == 14) {
        rl.write('36 / 14 = 2.5714285714285716\n')
      }
      if (a == 36 && sign == '/' && b == 15) {
        rl.write('36 / 15 = 2.4\n')
      }
      if (a == 36 && sign == '/' && b == 16) {
        rl.write('36 / 16 = 2.25\n')
      }
      if (a == 36 && sign == '/' && b == 17) {
        rl.write('36 / 17 = 2.1176470588235294\n')
      }
      if (a == 36 && sign == '/' && b == 18) {
        rl.write('36 / 18 = 2\n')
      }
      if (a == 36 && sign == '/' && b == 19) {
        rl.write('36 / 19 = 1.894736842105263\n')
      }
      if (a == 36 && sign == '/' && b == 20) {
        rl.write('36 / 20 = 1.8\n')
      }
      if (a == 36 && sign == '/' && b == 21) {
        rl.write('36 / 21 = 1.7142857142857142\n')
      }
      if (a == 36 && sign == '/' && b == 22) {
        rl.write('36 / 22 = 1.6363636363636365\n')
      }
      if (a == 36 && sign == '/' && b == 23) {
        rl.write('36 / 23 = 1.565217391304348\n')
      }
      if (a == 36 && sign == '/' && b == 24) {
        rl.write('36 / 24 = 1.5\n')
      }
      if (a == 36 && sign == '/' && b == 25) {
        rl.write('36 / 25 = 1.44\n')
      }
      if (a == 36 && sign == '/' && b == 26) {
        rl.write('36 / 26 = 1.3846153846153846\n')
      }
      if (a == 36 && sign == '/' && b == 27) {
        rl.write('36 / 27 = 1.3333333333333333\n')
      }
      if (a == 36 && sign == '/' && b == 28) {
        rl.write('36 / 28 = 1.2857142857142858\n')
      }
      if (a == 36 && sign == '/' && b == 29) {
        rl.write('36 / 29 = 1.2413793103448276\n')
      }
      if (a == 36 && sign == '/' && b == 30) {
        rl.write('36 / 30 = 1.2\n')
      }
      if (a == 36 && sign == '/' && b == 31) {
        rl.write('36 / 31 = 1.1612903225806452\n')
      }
      if (a == 36 && sign == '/' && b == 32) {
        rl.write('36 / 32 = 1.125\n')
      }
      if (a == 36 && sign == '/' && b == 33) {
        rl.write('36 / 33 = 1.0909090909090908\n')
      }
      if (a == 36 && sign == '/' && b == 34) {
        rl.write('36 / 34 = 1.0588235294117647\n')
      }
      if (a == 36 && sign == '/' && b == 35) {
        rl.write('36 / 35 = 1.0285714285714285\n')
      }
      if (a == 36 && sign == '/' && b == 36) {
        rl.write('36 / 36 = 1\n')
      }
      if (a == 36 && sign == '/' && b == 37) {
        rl.write('36 / 37 = 0.972972972972973\n')
      }
      if (a == 36 && sign == '/' && b == 38) {
        rl.write('36 / 38 = 0.9473684210526315\n')
      }
      if (a == 36 && sign == '/' && b == 39) {
        rl.write('36 / 39 = 0.9230769230769231\n')
      }
      if (a == 36 && sign == '/' && b == 40) {
        rl.write('36 / 40 = 0.9\n')
      }
      if (a == 36 && sign == '/' && b == 41) {
        rl.write('36 / 41 = 0.8780487804878049\n')
      }
      if (a == 36 && sign == '/' && b == 42) {
        rl.write('36 / 42 = 0.8571428571428571\n')
      }
      if (a == 36 && sign == '/' && b == 43) {
        rl.write('36 / 43 = 0.8372093023255814\n')
      }
      if (a == 36 && sign == '/' && b == 44) {
        rl.write('36 / 44 = 0.8181818181818182\n')
      }
      if (a == 36 && sign == '/' && b == 45) {
        rl.write('36 / 45 = 0.8\n')
      }
      if (a == 36 && sign == '/' && b == 46) {
        rl.write('36 / 46 = 0.782608695652174\n')
      }
      if (a == 36 && sign == '/' && b == 47) {
        rl.write('36 / 47 = 0.7659574468085106\n')
      }
      if (a == 36 && sign == '/' && b == 48) {
        rl.write('36 / 48 = 0.75\n')
      }
      if (a == 36 && sign == '/' && b == 49) {
        rl.write('36 / 49 = 0.7346938775510204\n')
      }
      if (a == 36 && sign == '/' && b == 50) {
        rl.write('36 / 50 = 0.72\n')
      }
      if (a == 37 && sign == '/' && b == 0) {
        rl.write('37 / 0 = Infinity\n')
      }
      if (a == 37 && sign == '/' && b == 1) {
        rl.write('37 / 1 = 37\n')
      }
      if (a == 37 && sign == '/' && b == 2) {
        rl.write('37 / 2 = 18.5\n')
      }
      if (a == 37 && sign == '/' && b == 3) {
        rl.write('37 / 3 = 12.333333333333334\n')
      }
      if (a == 37 && sign == '/' && b == 4) {
        rl.write('37 / 4 = 9.25\n')
      }
      if (a == 37 && sign == '/' && b == 5) {
        rl.write('37 / 5 = 7.4\n')
      }
      if (a == 37 && sign == '/' && b == 6) {
        rl.write('37 / 6 = 6.166666666666667\n')
      }
      if (a == 37 && sign == '/' && b == 7) {
        rl.write('37 / 7 = 5.285714285714286\n')
      }
      if (a == 37 && sign == '/' && b == 8) {
        rl.write('37 / 8 = 4.625\n')
      }
      if (a == 37 && sign == '/' && b == 9) {
        rl.write('37 / 9 = 4.111111111111111\n')
      }
      if (a == 37 && sign == '/' && b == 10) {
        rl.write('37 / 10 = 3.7\n')
      }
      if (a == 37 && sign == '/' && b == 11) {
        rl.write('37 / 11 = 3.3636363636363638\n')
      }
      if (a == 37 && sign == '/' && b == 12) {
        rl.write('37 / 12 = 3.0833333333333335\n')
      }
      if (a == 37 && sign == '/' && b == 13) {
        rl.write('37 / 13 = 2.8461538461538463\n')
      }
      if (a == 37 && sign == '/' && b == 14) {
        rl.write('37 / 14 = 2.642857142857143\n')
      }
      if (a == 37 && sign == '/' && b == 15) {
        rl.write('37 / 15 = 2.466666666666667\n')
      }
      if (a == 37 && sign == '/' && b == 16) {
        rl.write('37 / 16 = 2.3125\n')
      }
      if (a == 37 && sign == '/' && b == 17) {
        rl.write('37 / 17 = 2.176470588235294\n')
      }
      if (a == 37 && sign == '/' && b == 18) {
        rl.write('37 / 18 = 2.0555555555555554\n')
      }
      if (a == 37 && sign == '/' && b == 19) {
        rl.write('37 / 19 = 1.9473684210526316\n')
      }
      if (a == 37 && sign == '/' && b == 20) {
        rl.write('37 / 20 = 1.85\n')
      }
      if (a == 37 && sign == '/' && b == 21) {
        rl.write('37 / 21 = 1.7619047619047619\n')
      }
      if (a == 37 && sign == '/' && b == 22) {
        rl.write('37 / 22 = 1.6818181818181819\n')
      }
      if (a == 37 && sign == '/' && b == 23) {
        rl.write('37 / 23 = 1.608695652173913\n')
      }
      if (a == 37 && sign == '/' && b == 24) {
        rl.write('37 / 24 = 1.5416666666666667\n')
      }
      if (a == 37 && sign == '/' && b == 25) {
        rl.write('37 / 25 = 1.48\n')
      }
      if (a == 37 && sign == '/' && b == 26) {
        rl.write('37 / 26 = 1.4230769230769231\n')
      }
      if (a == 37 && sign == '/' && b == 27) {
        rl.write('37 / 27 = 1.3703703703703705\n')
      }
      if (a == 37 && sign == '/' && b == 28) {
        rl.write('37 / 28 = 1.3214285714285714\n')
      }
      if (a == 37 && sign == '/' && b == 29) {
        rl.write('37 / 29 = 1.2758620689655173\n')
      }
      if (a == 37 && sign == '/' && b == 30) {
        rl.write('37 / 30 = 1.2333333333333334\n')
      }
      if (a == 37 && sign == '/' && b == 31) {
        rl.write('37 / 31 = 1.1935483870967742\n')
      }
      if (a == 37 && sign == '/' && b == 32) {
        rl.write('37 / 32 = 1.15625\n')
      }
      if (a == 37 && sign == '/' && b == 33) {
        rl.write('37 / 33 = 1.121212121212121\n')
      }
      if (a == 37 && sign == '/' && b == 34) {
        rl.write('37 / 34 = 1.088235294117647\n')
      }
      if (a == 37 && sign == '/' && b == 35) {
        rl.write('37 / 35 = 1.0571428571428572\n')
      }
      if (a == 37 && sign == '/' && b == 36) {
        rl.write('37 / 36 = 1.0277777777777777\n')
      }
      if (a == 37 && sign == '/' && b == 37) {
        rl.write('37 / 37 = 1\n')
      }
      if (a == 37 && sign == '/' && b == 38) {
        rl.write('37 / 38 = 0.9736842105263158\n')
      }
      if (a == 37 && sign == '/' && b == 39) {
        rl.write('37 / 39 = 0.9487179487179487\n')
      }
      if (a == 37 && sign == '/' && b == 40) {
        rl.write('37 / 40 = 0.925\n')
      }
      if (a == 37 && sign == '/' && b == 41) {
        rl.write('37 / 41 = 0.9024390243902439\n')
      }
      if (a == 37 && sign == '/' && b == 42) {
        rl.write('37 / 42 = 0.8809523809523809\n')
      }
      if (a == 37 && sign == '/' && b == 43) {
        rl.write('37 / 43 = 0.8604651162790697\n')
      }
      if (a == 37 && sign == '/' && b == 44) {
        rl.write('37 / 44 = 0.8409090909090909\n')
      }
      if (a == 37 && sign == '/' && b == 45) {
        rl.write('37 / 45 = 0.8222222222222222\n')
      }
      if (a == 37 && sign == '/' && b == 46) {
        rl.write('37 / 46 = 0.8043478260869565\n')
      }
      if (a == 37 && sign == '/' && b == 47) {
        rl.write('37 / 47 = 0.7872340425531915\n')
      }
      if (a == 37 && sign == '/' && b == 48) {
        rl.write('37 / 48 = 0.7708333333333334\n')
      }
      if (a == 37 && sign == '/' && b == 49) {
        rl.write('37 / 49 = 0.7551020408163265\n')
      }
      if (a == 37 && sign == '/' && b == 50) {
        rl.write('37 / 50 = 0.74\n')
      }
      if (a == 38 && sign == '/' && b == 0) {
        rl.write('38 / 0 = Infinity\n')
      }
      if (a == 38 && sign == '/' && b == 1) {
        rl.write('38 / 1 = 38\n')
      }
      if (a == 38 && sign == '/' && b == 2) {
        rl.write('38 / 2 = 19\n')
      }
      if (a == 38 && sign == '/' && b == 3) {
        rl.write('38 / 3 = 12.666666666666666\n')
      }
      if (a == 38 && sign == '/' && b == 4) {
        rl.write('38 / 4 = 9.5\n')
      }
      if (a == 38 && sign == '/' && b == 5) {
        rl.write('38 / 5 = 7.6\n')
      }
      if (a == 38 && sign == '/' && b == 6) {
        rl.write('38 / 6 = 6.333333333333333\n')
      }
      if (a == 38 && sign == '/' && b == 7) {
        rl.write('38 / 7 = 5.428571428571429\n')
      }
      if (a == 38 && sign == '/' && b == 8) {
        rl.write('38 / 8 = 4.75\n')
      }
      if (a == 38 && sign == '/' && b == 9) {
        rl.write('38 / 9 = 4.222222222222222\n')
      }
      if (a == 38 && sign == '/' && b == 10) {
        rl.write('38 / 10 = 3.8\n')
      }
      if (a == 38 && sign == '/' && b == 11) {
        rl.write('38 / 11 = 3.4545454545454546\n')
      }
      if (a == 38 && sign == '/' && b == 12) {
        rl.write('38 / 12 = 3.1666666666666665\n')
      }
      if (a == 38 && sign == '/' && b == 13) {
        rl.write('38 / 13 = 2.923076923076923\n')
      }
      if (a == 38 && sign == '/' && b == 14) {
        rl.write('38 / 14 = 2.7142857142857144\n')
      }
      if (a == 38 && sign == '/' && b == 15) {
        rl.write('38 / 15 = 2.533333333333333\n')
      }
      if (a == 38 && sign == '/' && b == 16) {
        rl.write('38 / 16 = 2.375\n')
      }
      if (a == 38 && sign == '/' && b == 17) {
        rl.write('38 / 17 = 2.235294117647059\n')
      }
      if (a == 38 && sign == '/' && b == 18) {
        rl.write('38 / 18 = 2.111111111111111\n')
      }
      if (a == 38 && sign == '/' && b == 19) {
        rl.write('38 / 19 = 2\n')
      }
      if (a == 38 && sign == '/' && b == 20) {
        rl.write('38 / 20 = 1.9\n')
      }
      if (a == 38 && sign == '/' && b == 21) {
        rl.write('38 / 21 = 1.8095238095238095\n')
      }
      if (a == 38 && sign == '/' && b == 22) {
        rl.write('38 / 22 = 1.7272727272727273\n')
      }
      if (a == 38 && sign == '/' && b == 23) {
        rl.write('38 / 23 = 1.6521739130434783\n')
      }
      if (a == 38 && sign == '/' && b == 24) {
        rl.write('38 / 24 = 1.5833333333333333\n')
      }
      if (a == 38 && sign == '/' && b == 25) {
        rl.write('38 / 25 = 1.52\n')
      }
      if (a == 38 && sign == '/' && b == 26) {
        rl.write('38 / 26 = 1.4615384615384615\n')
      }
      if (a == 38 && sign == '/' && b == 27) {
        rl.write('38 / 27 = 1.4074074074074074\n')
      }
      if (a == 38 && sign == '/' && b == 28) {
        rl.write('38 / 28 = 1.3571428571428572\n')
      }
      if (a == 38 && sign == '/' && b == 29) {
        rl.write('38 / 29 = 1.3103448275862069\n')
      }
      if (a == 38 && sign == '/' && b == 30) {
        rl.write('38 / 30 = 1.2666666666666666\n')
      }
      if (a == 38 && sign == '/' && b == 31) {
        rl.write('38 / 31 = 1.2258064516129032\n')
      }
      if (a == 38 && sign == '/' && b == 32) {
        rl.write('38 / 32 = 1.1875\n')
      }
      if (a == 38 && sign == '/' && b == 33) {
        rl.write('38 / 33 = 1.1515151515151516\n')
      }
      if (a == 38 && sign == '/' && b == 34) {
        rl.write('38 / 34 = 1.1176470588235294\n')
      }
      if (a == 38 && sign == '/' && b == 35) {
        rl.write('38 / 35 = 1.0857142857142856\n')
      }
      if (a == 38 && sign == '/' && b == 36) {
        rl.write('38 / 36 = 1.0555555555555556\n')
      }
      if (a == 38 && sign == '/' && b == 37) {
        rl.write('38 / 37 = 1.027027027027027\n')
      }
      if (a == 38 && sign == '/' && b == 38) {
        rl.write('38 / 38 = 1\n')
      }
      if (a == 38 && sign == '/' && b == 39) {
        rl.write('38 / 39 = 0.9743589743589743\n')
      }
      if (a == 38 && sign == '/' && b == 40) {
        rl.write('38 / 40 = 0.95\n')
      }
      if (a == 38 && sign == '/' && b == 41) {
        rl.write('38 / 41 = 0.926829268292683\n')
      }
      if (a == 38 && sign == '/' && b == 42) {
        rl.write('38 / 42 = 0.9047619047619048\n')
      }
      if (a == 38 && sign == '/' && b == 43) {
        rl.write('38 / 43 = 0.8837209302325582\n')
      }
      if (a == 38 && sign == '/' && b == 44) {
        rl.write('38 / 44 = 0.8636363636363636\n')
      }
      if (a == 38 && sign == '/' && b == 45) {
        rl.write('38 / 45 = 0.8444444444444444\n')
      }
      if (a == 38 && sign == '/' && b == 46) {
        rl.write('38 / 46 = 0.8260869565217391\n')
      }
      if (a == 38 && sign == '/' && b == 47) {
        rl.write('38 / 47 = 0.8085106382978723\n')
      }
      if (a == 38 && sign == '/' && b == 48) {
        rl.write('38 / 48 = 0.7916666666666666\n')
      }
      if (a == 38 && sign == '/' && b == 49) {
        rl.write('38 / 49 = 0.7755102040816326\n')
      }
      if (a == 38 && sign == '/' && b == 50) {
        rl.write('38 / 50 = 0.76\n')
      }
      if (a == 39 && sign == '/' && b == 0) {
        rl.write('39 / 0 = Infinity\n')
      }
      if (a == 39 && sign == '/' && b == 1) {
        rl.write('39 / 1 = 39\n')
      }
      if (a == 39 && sign == '/' && b == 2) {
        rl.write('39 / 2 = 19.5\n')
      }
      if (a == 39 && sign == '/' && b == 3) {
        rl.write('39 / 3 = 13\n')
      }
      if (a == 39 && sign == '/' && b == 4) {
        rl.write('39 / 4 = 9.75\n')
      }
      if (a == 39 && sign == '/' && b == 5) {
        rl.write('39 / 5 = 7.8\n')
      }
      if (a == 39 && sign == '/' && b == 6) {
        rl.write('39 / 6 = 6.5\n')
      }
      if (a == 39 && sign == '/' && b == 7) {
        rl.write('39 / 7 = 5.571428571428571\n')
      }
      if (a == 39 && sign == '/' && b == 8) {
        rl.write('39 / 8 = 4.875\n')
      }
      if (a == 39 && sign == '/' && b == 9) {
        rl.write('39 / 9 = 4.333333333333333\n')
      }
      if (a == 39 && sign == '/' && b == 10) {
        rl.write('39 / 10 = 3.9\n')
      }
      if (a == 39 && sign == '/' && b == 11) {
        rl.write('39 / 11 = 3.5454545454545454\n')
      }
      if (a == 39 && sign == '/' && b == 12) {
        rl.write('39 / 12 = 3.25\n')
      }
      if (a == 39 && sign == '/' && b == 13) {
        rl.write('39 / 13 = 3\n')
      }
      if (a == 39 && sign == '/' && b == 14) {
        rl.write('39 / 14 = 2.7857142857142856\n')
      }
      if (a == 39 && sign == '/' && b == 15) {
        rl.write('39 / 15 = 2.6\n')
      }
      if (a == 39 && sign == '/' && b == 16) {
        rl.write('39 / 16 = 2.4375\n')
      }
      if (a == 39 && sign == '/' && b == 17) {
        rl.write('39 / 17 = 2.2941176470588234\n')
      }
      if (a == 39 && sign == '/' && b == 18) {
        rl.write('39 / 18 = 2.1666666666666665\n')
      }
      if (a == 39 && sign == '/' && b == 19) {
        rl.write('39 / 19 = 2.0526315789473686\n')
      }
      if (a == 39 && sign == '/' && b == 20) {
        rl.write('39 / 20 = 1.95\n')
      }
      if (a == 39 && sign == '/' && b == 21) {
        rl.write('39 / 21 = 1.8571428571428572\n')
      }
      if (a == 39 && sign == '/' && b == 22) {
        rl.write('39 / 22 = 1.7727272727272727\n')
      }
      if (a == 39 && sign == '/' && b == 23) {
        rl.write('39 / 23 = 1.6956521739130435\n')
      }
      if (a == 39 && sign == '/' && b == 24) {
        rl.write('39 / 24 = 1.625\n')
      }
      if (a == 39 && sign == '/' && b == 25) {
        rl.write('39 / 25 = 1.56\n')
      }
      if (a == 39 && sign == '/' && b == 26) {
        rl.write('39 / 26 = 1.5\n')
      }
      if (a == 39 && sign == '/' && b == 27) {
        rl.write('39 / 27 = 1.4444444444444444\n')
      }
      if (a == 39 && sign == '/' && b == 28) {
        rl.write('39 / 28 = 1.3928571428571428\n')
      }
      if (a == 39 && sign == '/' && b == 29) {
        rl.write('39 / 29 = 1.3448275862068966\n')
      }
      if (a == 39 && sign == '/' && b == 30) {
        rl.write('39 / 30 = 1.3\n')
      }
      if (a == 39 && sign == '/' && b == 31) {
        rl.write('39 / 31 = 1.2580645161290323\n')
      }
      if (a == 39 && sign == '/' && b == 32) {
        rl.write('39 / 32 = 1.21875\n')
      }
      if (a == 39 && sign == '/' && b == 33) {
        rl.write('39 / 33 = 1.1818181818181819\n')
      }
      if (a == 39 && sign == '/' && b == 34) {
        rl.write('39 / 34 = 1.1470588235294117\n')
      }
      if (a == 39 && sign == '/' && b == 35) {
        rl.write('39 / 35 = 1.1142857142857143\n')
      }
      if (a == 39 && sign == '/' && b == 36) {
        rl.write('39 / 36 = 1.0833333333333333\n')
      }
      if (a == 39 && sign == '/' && b == 37) {
        rl.write('39 / 37 = 1.054054054054054\n')
      }
      if (a == 39 && sign == '/' && b == 38) {
        rl.write('39 / 38 = 1.0263157894736843\n')
      }
      if (a == 39 && sign == '/' && b == 39) {
        rl.write('39 / 39 = 1\n')
      }
      if (a == 39 && sign == '/' && b == 40) {
        rl.write('39 / 40 = 0.975\n')
      }
      if (a == 39 && sign == '/' && b == 41) {
        rl.write('39 / 41 = 0.9512195121951219\n')
      }
      if (a == 39 && sign == '/' && b == 42) {
        rl.write('39 / 42 = 0.9285714285714286\n')
      }
      if (a == 39 && sign == '/' && b == 43) {
        rl.write('39 / 43 = 0.9069767441860465\n')
      }
      if (a == 39 && sign == '/' && b == 44) {
        rl.write('39 / 44 = 0.8863636363636364\n')
      }
      if (a == 39 && sign == '/' && b == 45) {
        rl.write('39 / 45 = 0.8666666666666667\n')
      }
      if (a == 39 && sign == '/' && b == 46) {
        rl.write('39 / 46 = 0.8478260869565217\n')
      }
      if (a == 39 && sign == '/' && b == 47) {
        rl.write('39 / 47 = 0.8297872340425532\n')
      }
      if (a == 39 && sign == '/' && b == 48) {
        rl.write('39 / 48 = 0.8125\n')
      }
      if (a == 39 && sign == '/' && b == 49) {
        rl.write('39 / 49 = 0.7959183673469388\n')
      }
      if (a == 39 && sign == '/' && b == 50) {
        rl.write('39 / 50 = 0.78\n')
      }
      if (a == 40 && sign == '/' && b == 0) {
        rl.write('40 / 0 = Infinity\n')
      }
      if (a == 40 && sign == '/' && b == 1) {
        rl.write('40 / 1 = 40\n')
      }
      if (a == 40 && sign == '/' && b == 2) {
        rl.write('40 / 2 = 20\n')
      }
      if (a == 40 && sign == '/' && b == 3) {
        rl.write('40 / 3 = 13.333333333333334\n')
      }
      if (a == 40 && sign == '/' && b == 4) {
        rl.write('40 / 4 = 10\n')
      }
      if (a == 40 && sign == '/' && b == 5) {
        rl.write('40 / 5 = 8\n')
      }
      if (a == 40 && sign == '/' && b == 6) {
        rl.write('40 / 6 = 6.666666666666667\n')
      }
      if (a == 40 && sign == '/' && b == 7) {
        rl.write('40 / 7 = 5.714285714285714\n')
      }
      if (a == 40 && sign == '/' && b == 8) {
        rl.write('40 / 8 = 5\n')
      }
      if (a == 40 && sign == '/' && b == 9) {
        rl.write('40 / 9 = 4.444444444444445\n')
      }
      if (a == 40 && sign == '/' && b == 10) {
        rl.write('40 / 10 = 4\n')
      }
      if (a == 40 && sign == '/' && b == 11) {
        rl.write('40 / 11 = 3.6363636363636362\n')
      }
      if (a == 40 && sign == '/' && b == 12) {
        rl.write('40 / 12 = 3.3333333333333335\n')
      }
      if (a == 40 && sign == '/' && b == 13) {
        rl.write('40 / 13 = 3.076923076923077\n')
      }
      if (a == 40 && sign == '/' && b == 14) {
        rl.write('40 / 14 = 2.857142857142857\n')
      }
      if (a == 40 && sign == '/' && b == 15) {
        rl.write('40 / 15 = 2.6666666666666665\n')
      }
      if (a == 40 && sign == '/' && b == 16) {
        rl.write('40 / 16 = 2.5\n')
      }
      if (a == 40 && sign == '/' && b == 17) {
        rl.write('40 / 17 = 2.3529411764705883\n')
      }
      if (a == 40 && sign == '/' && b == 18) {
        rl.write('40 / 18 = 2.2222222222222223\n')
      }
      if (a == 40 && sign == '/' && b == 19) {
        rl.write('40 / 19 = 2.1052631578947367\n')
      }
      if (a == 40 && sign == '/' && b == 20) {
        rl.write('40 / 20 = 2\n')
      }
      if (a == 40 && sign == '/' && b == 21) {
        rl.write('40 / 21 = 1.9047619047619047\n')
      }
      if (a == 40 && sign == '/' && b == 22) {
        rl.write('40 / 22 = 1.8181818181818181\n')
      }
      if (a == 40 && sign == '/' && b == 23) {
        rl.write('40 / 23 = 1.7391304347826086\n')
      }
      if (a == 40 && sign == '/' && b == 24) {
        rl.write('40 / 24 = 1.6666666666666667\n')
      }
      if (a == 40 && sign == '/' && b == 25) {
        rl.write('40 / 25 = 1.6\n')
      }
      if (a == 40 && sign == '/' && b == 26) {
        rl.write('40 / 26 = 1.5384615384615385\n')
      }
      if (a == 40 && sign == '/' && b == 27) {
        rl.write('40 / 27 = 1.4814814814814814\n')
      }
      if (a == 40 && sign == '/' && b == 28) {
        rl.write('40 / 28 = 1.4285714285714286\n')
      }
      if (a == 40 && sign == '/' && b == 29) {
        rl.write('40 / 29 = 1.3793103448275863\n')
      }
      if (a == 40 && sign == '/' && b == 30) {
        rl.write('40 / 30 = 1.3333333333333333\n')
      }
      if (a == 40 && sign == '/' && b == 31) {
        rl.write('40 / 31 = 1.2903225806451613\n')
      }
      if (a == 40 && sign == '/' && b == 32) {
        rl.write('40 / 32 = 1.25\n')
      }
      if (a == 40 && sign == '/' && b == 33) {
        rl.write('40 / 33 = 1.2121212121212122\n')
      }
      if (a == 40 && sign == '/' && b == 34) {
        rl.write('40 / 34 = 1.1764705882352942\n')
      }
      if (a == 40 && sign == '/' && b == 35) {
        rl.write('40 / 35 = 1.1428571428571428\n')
      }
      if (a == 40 && sign == '/' && b == 36) {
        rl.write('40 / 36 = 1.1111111111111112\n')
      }
      if (a == 40 && sign == '/' && b == 37) {
        rl.write('40 / 37 = 1.0810810810810811\n')
      }
      if (a == 40 && sign == '/' && b == 38) {
        rl.write('40 / 38 = 1.0526315789473684\n')
      }
      if (a == 40 && sign == '/' && b == 39) {
        rl.write('40 / 39 = 1.0256410256410255\n')
      }
      if (a == 40 && sign == '/' && b == 40) {
        rl.write('40 / 40 = 1\n')
      }
      if (a == 40 && sign == '/' && b == 41) {
        rl.write('40 / 41 = 0.975609756097561\n')
      }
      if (a == 40 && sign == '/' && b == 42) {
        rl.write('40 / 42 = 0.9523809523809523\n')
      }
      if (a == 40 && sign == '/' && b == 43) {
        rl.write('40 / 43 = 0.9302325581395349\n')
      }
      if (a == 40 && sign == '/' && b == 44) {
        rl.write('40 / 44 = 0.9090909090909091\n')
      }
      if (a == 40 && sign == '/' && b == 45) {
        rl.write('40 / 45 = 0.8888888888888888\n')
      }
      if (a == 40 && sign == '/' && b == 46) {
        rl.write('40 / 46 = 0.8695652173913043\n')
      }
      if (a == 40 && sign == '/' && b == 47) {
        rl.write('40 / 47 = 0.851063829787234\n')
      }
      if (a == 40 && sign == '/' && b == 48) {
        rl.write('40 / 48 = 0.8333333333333334\n')
      }
      if (a == 40 && sign == '/' && b == 49) {
        rl.write('40 / 49 = 0.8163265306122449\n')
      }
      if (a == 40 && sign == '/' && b == 50) {
        rl.write('40 / 50 = 0.8\n')
      }
      if (a == 41 && sign == '/' && b == 0) {
        rl.write('41 / 0 = Infinity\n')
      }
      if (a == 41 && sign == '/' && b == 1) {
        rl.write('41 / 1 = 41\n')
      }
      if (a == 41 && sign == '/' && b == 2) {
        rl.write('41 / 2 = 20.5\n')
      }
      if (a == 41 && sign == '/' && b == 3) {
        rl.write('41 / 3 = 13.666666666666666\n')
      }
      if (a == 41 && sign == '/' && b == 4) {
        rl.write('41 / 4 = 10.25\n')
      }
      if (a == 41 && sign == '/' && b == 5) {
        rl.write('41 / 5 = 8.2\n')
      }
      if (a == 41 && sign == '/' && b == 6) {
        rl.write('41 / 6 = 6.833333333333333\n')
      }
      if (a == 41 && sign == '/' && b == 7) {
        rl.write('41 / 7 = 5.857142857142857\n')
      }
      if (a == 41 && sign == '/' && b == 8) {
        rl.write('41 / 8 = 5.125\n')
      }
      if (a == 41 && sign == '/' && b == 9) {
        rl.write('41 / 9 = 4.555555555555555\n')
      }
      if (a == 41 && sign == '/' && b == 10) {
        rl.write('41 / 10 = 4.1\n')
      }
      if (a == 41 && sign == '/' && b == 11) {
        rl.write('41 / 11 = 3.727272727272727\n')
      }
      if (a == 41 && sign == '/' && b == 12) {
        rl.write('41 / 12 = 3.4166666666666665\n')
      }
      if (a == 41 && sign == '/' && b == 13) {
        rl.write('41 / 13 = 3.1538461538461537\n')
      }
      if (a == 41 && sign == '/' && b == 14) {
        rl.write('41 / 14 = 2.9285714285714284\n')
      }
      if (a == 41 && sign == '/' && b == 15) {
        rl.write('41 / 15 = 2.7333333333333334\n')
      }
      if (a == 41 && sign == '/' && b == 16) {
        rl.write('41 / 16 = 2.5625\n')
      }
      if (a == 41 && sign == '/' && b == 17) {
        rl.write('41 / 17 = 2.411764705882353\n')
      }
      if (a == 41 && sign == '/' && b == 18) {
        rl.write('41 / 18 = 2.2777777777777777\n')
      }
      if (a == 41 && sign == '/' && b == 19) {
        rl.write('41 / 19 = 2.1578947368421053\n')
      }
      if (a == 41 && sign == '/' && b == 20) {
        rl.write('41 / 20 = 2.05\n')
      }
      if (a == 41 && sign == '/' && b == 21) {
        rl.write('41 / 21 = 1.9523809523809523\n')
      }
      if (a == 41 && sign == '/' && b == 22) {
        rl.write('41 / 22 = 1.8636363636363635\n')
      }
      if (a == 41 && sign == '/' && b == 23) {
        rl.write('41 / 23 = 1.7826086956521738\n')
      }
      if (a == 41 && sign == '/' && b == 24) {
        rl.write('41 / 24 = 1.7083333333333333\n')
      }
      if (a == 41 && sign == '/' && b == 25) {
        rl.write('41 / 25 = 1.64\n')
      }
      if (a == 41 && sign == '/' && b == 26) {
        rl.write('41 / 26 = 1.5769230769230769\n')
      }
      if (a == 41 && sign == '/' && b == 27) {
        rl.write('41 / 27 = 1.5185185185185186\n')
      }
      if (a == 41 && sign == '/' && b == 28) {
        rl.write('41 / 28 = 1.4642857142857142\n')
      }
      if (a == 41 && sign == '/' && b == 29) {
        rl.write('41 / 29 = 1.4137931034482758\n')
      }
      if (a == 41 && sign == '/' && b == 30) {
        rl.write('41 / 30 = 1.3666666666666667\n')
      }
      if (a == 41 && sign == '/' && b == 31) {
        rl.write('41 / 31 = 1.3225806451612903\n')
      }
      if (a == 41 && sign == '/' && b == 32) {
        rl.write('41 / 32 = 1.28125\n')
      }
      if (a == 41 && sign == '/' && b == 33) {
        rl.write('41 / 33 = 1.2424242424242424\n')
      }
      if (a == 41 && sign == '/' && b == 34) {
        rl.write('41 / 34 = 1.2058823529411764\n')
      }
      if (a == 41 && sign == '/' && b == 35) {
        rl.write('41 / 35 = 1.1714285714285715\n')
      }
      if (a == 41 && sign == '/' && b == 36) {
        rl.write('41 / 36 = 1.1388888888888888\n')
      }
      if (a == 41 && sign == '/' && b == 37) {
        rl.write('41 / 37 = 1.1081081081081081\n')
      }
      if (a == 41 && sign == '/' && b == 38) {
        rl.write('41 / 38 = 1.0789473684210527\n')
      }
      if (a == 41 && sign == '/' && b == 39) {
        rl.write('41 / 39 = 1.0512820512820513\n')
      }
      if (a == 41 && sign == '/' && b == 40) {
        rl.write('41 / 40 = 1.025\n')
      }
      if (a == 41 && sign == '/' && b == 41) {
        rl.write('41 / 41 = 1\n')
      }
      if (a == 41 && sign == '/' && b == 42) {
        rl.write('41 / 42 = 0.9761904761904762\n')
      }
      if (a == 41 && sign == '/' && b == 43) {
        rl.write('41 / 43 = 0.9534883720930233\n')
      }
      if (a == 41 && sign == '/' && b == 44) {
        rl.write('41 / 44 = 0.9318181818181818\n')
      }
      if (a == 41 && sign == '/' && b == 45) {
        rl.write('41 / 45 = 0.9111111111111111\n')
      }
      if (a == 41 && sign == '/' && b == 46) {
        rl.write('41 / 46 = 0.8913043478260869\n')
      }
      if (a == 41 && sign == '/' && b == 47) {
        rl.write('41 / 47 = 0.8723404255319149\n')
      }
      if (a == 41 && sign == '/' && b == 48) {
        rl.write('41 / 48 = 0.8541666666666666\n')
      }
      if (a == 41 && sign == '/' && b == 49) {
        rl.write('41 / 49 = 0.8367346938775511\n')
      }
      if (a == 41 && sign == '/' && b == 50) {
        rl.write('41 / 50 = 0.82\n')
      }
      if (a == 42 && sign == '/' && b == 0) {
        rl.write('42 / 0 = Infinity\n')
      }
      if (a == 42 && sign == '/' && b == 1) {
        rl.write('42 / 1 = 42\n')
      }
      if (a == 42 && sign == '/' && b == 2) {
        rl.write('42 / 2 = 21\n')
      }
      if (a == 42 && sign == '/' && b == 3) {
        rl.write('42 / 3 = 14\n')
      }
      if (a == 42 && sign == '/' && b == 4) {
        rl.write('42 / 4 = 10.5\n')
      }
      if (a == 42 && sign == '/' && b == 5) {
        rl.write('42 / 5 = 8.4\n')
      }
      if (a == 42 && sign == '/' && b == 6) {
        rl.write('42 / 6 = 7\n')
      }
      if (a == 42 && sign == '/' && b == 7) {
        rl.write('42 / 7 = 6\n')
      }
      if (a == 42 && sign == '/' && b == 8) {
        rl.write('42 / 8 = 5.25\n')
      }
      if (a == 42 && sign == '/' && b == 9) {
        rl.write('42 / 9 = 4.666666666666667\n')
      }
      if (a == 42 && sign == '/' && b == 10) {
        rl.write('42 / 10 = 4.2\n')
      }
      if (a == 42 && sign == '/' && b == 11) {
        rl.write('42 / 11 = 3.8181818181818183\n')
      }
      if (a == 42 && sign == '/' && b == 12) {
        rl.write('42 / 12 = 3.5\n')
      }
      if (a == 42 && sign == '/' && b == 13) {
        rl.write('42 / 13 = 3.230769230769231\n')
      }
      if (a == 42 && sign == '/' && b == 14) {
        rl.write('42 / 14 = 3\n')
      }
      if (a == 42 && sign == '/' && b == 15) {
        rl.write('42 / 15 = 2.8\n')
      }
      if (a == 42 && sign == '/' && b == 16) {
        rl.write('42 / 16 = 2.625\n')
      }
      if (a == 42 && sign == '/' && b == 17) {
        rl.write('42 / 17 = 2.4705882352941178\n')
      }
      if (a == 42 && sign == '/' && b == 18) {
        rl.write('42 / 18 = 2.3333333333333335\n')
      }
      if (a == 42 && sign == '/' && b == 19) {
        rl.write('42 / 19 = 2.210526315789474\n')
      }
      if (a == 42 && sign == '/' && b == 20) {
        rl.write('42 / 20 = 2.1\n')
      }
      if (a == 42 && sign == '/' && b == 21) {
        rl.write('42 / 21 = 2\n')
      }
      if (a == 42 && sign == '/' && b == 22) {
        rl.write('42 / 22 = 1.9090909090909092\n')
      }
      if (a == 42 && sign == '/' && b == 23) {
        rl.write('42 / 23 = 1.826086956521739\n')
      }
      if (a == 42 && sign == '/' && b == 24) {
        rl.write('42 / 24 = 1.75\n')
      }
      if (a == 42 && sign == '/' && b == 25) {
        rl.write('42 / 25 = 1.68\n')
      }
      if (a == 42 && sign == '/' && b == 26) {
        rl.write('42 / 26 = 1.6153846153846154\n')
      }
      if (a == 42 && sign == '/' && b == 27) {
        rl.write('42 / 27 = 1.5555555555555556\n')
      }
      if (a == 42 && sign == '/' && b == 28) {
        rl.write('42 / 28 = 1.5\n')
      }
      if (a == 42 && sign == '/' && b == 29) {
        rl.write('42 / 29 = 1.4482758620689655\n')
      }
      if (a == 42 && sign == '/' && b == 30) {
        rl.write('42 / 30 = 1.4\n')
      }
      if (a == 42 && sign == '/' && b == 31) {
        rl.write('42 / 31 = 1.3548387096774193\n')
      }
      if (a == 42 && sign == '/' && b == 32) {
        rl.write('42 / 32 = 1.3125\n')
      }
      if (a == 42 && sign == '/' && b == 33) {
        rl.write('42 / 33 = 1.2727272727272727\n')
      }
      if (a == 42 && sign == '/' && b == 34) {
        rl.write('42 / 34 = 1.2352941176470589\n')
      }
      if (a == 42 && sign == '/' && b == 35) {
        rl.write('42 / 35 = 1.2\n')
      }
      if (a == 42 && sign == '/' && b == 36) {
        rl.write('42 / 36 = 1.1666666666666667\n')
      }
      if (a == 42 && sign == '/' && b == 37) {
        rl.write('42 / 37 = 1.135135135135135\n')
      }
      if (a == 42 && sign == '/' && b == 38) {
        rl.write('42 / 38 = 1.105263157894737\n')
      }
      if (a == 42 && sign == '/' && b == 39) {
        rl.write('42 / 39 = 1.0769230769230769\n')
      }
      if (a == 42 && sign == '/' && b == 40) {
        rl.write('42 / 40 = 1.05\n')
      }
      if (a == 42 && sign == '/' && b == 41) {
        rl.write('42 / 41 = 1.024390243902439\n')
      }
      if (a == 42 && sign == '/' && b == 42) {
        rl.write('42 / 42 = 1\n')
      }
      if (a == 42 && sign == '/' && b == 43) {
        rl.write('42 / 43 = 0.9767441860465116\n')
      }
      if (a == 42 && sign == '/' && b == 44) {
        rl.write('42 / 44 = 0.9545454545454546\n')
      }
      if (a == 42 && sign == '/' && b == 45) {
        rl.write('42 / 45 = 0.9333333333333333\n')
      }
      if (a == 42 && sign == '/' && b == 46) {
        rl.write('42 / 46 = 0.9130434782608695\n')
      }
      if (a == 42 && sign == '/' && b == 47) {
        rl.write('42 / 47 = 0.8936170212765957\n')
      }
      if (a == 42 && sign == '/' && b == 48) {
        rl.write('42 / 48 = 0.875\n')
      }
      if (a == 42 && sign == '/' && b == 49) {
        rl.write('42 / 49 = 0.8571428571428571\n')
      }
      if (a == 42 && sign == '/' && b == 50) {
        rl.write('42 / 50 = 0.84\n')
      }
      if (a == 43 && sign == '/' && b == 0) {
        rl.write('43 / 0 = Infinity\n')
      }
      if (a == 43 && sign == '/' && b == 1) {
        rl.write('43 / 1 = 43\n')
      }
      if (a == 43 && sign == '/' && b == 2) {
        rl.write('43 / 2 = 21.5\n')
      }
      if (a == 43 && sign == '/' && b == 3) {
        rl.write('43 / 3 = 14.333333333333334\n')
      }
      if (a == 43 && sign == '/' && b == 4) {
        rl.write('43 / 4 = 10.75\n')
      }
      if (a == 43 && sign == '/' && b == 5) {
        rl.write('43 / 5 = 8.6\n')
      }
      if (a == 43 && sign == '/' && b == 6) {
        rl.write('43 / 6 = 7.166666666666667\n')
      }
      if (a == 43 && sign == '/' && b == 7) {
        rl.write('43 / 7 = 6.142857142857143\n')
      }
      if (a == 43 && sign == '/' && b == 8) {
        rl.write('43 / 8 = 5.375\n')
      }
      if (a == 43 && sign == '/' && b == 9) {
        rl.write('43 / 9 = 4.777777777777778\n')
      }
      if (a == 43 && sign == '/' && b == 10) {
        rl.write('43 / 10 = 4.3\n')
      }
      if (a == 43 && sign == '/' && b == 11) {
        rl.write('43 / 11 = 3.909090909090909\n')
      }
      if (a == 43 && sign == '/' && b == 12) {
        rl.write('43 / 12 = 3.5833333333333335\n')
      }
      if (a == 43 && sign == '/' && b == 13) {
        rl.write('43 / 13 = 3.3076923076923075\n')
      }
      if (a == 43 && sign == '/' && b == 14) {
        rl.write('43 / 14 = 3.0714285714285716\n')
      }
      if (a == 43 && sign == '/' && b == 15) {
        rl.write('43 / 15 = 2.8666666666666667\n')
      }
      if (a == 43 && sign == '/' && b == 16) {
        rl.write('43 / 16 = 2.6875\n')
      }
      if (a == 43 && sign == '/' && b == 17) {
        rl.write('43 / 17 = 2.5294117647058822\n')
      }
      if (a == 43 && sign == '/' && b == 18) {
        rl.write('43 / 18 = 2.388888888888889\n')
      }
      if (a == 43 && sign == '/' && b == 19) {
        rl.write('43 / 19 = 2.263157894736842\n')
      }
      if (a == 43 && sign == '/' && b == 20) {
        rl.write('43 / 20 = 2.15\n')
      }
      if (a == 43 && sign == '/' && b == 21) {
        rl.write('43 / 21 = 2.0476190476190474\n')
      }
      if (a == 43 && sign == '/' && b == 22) {
        rl.write('43 / 22 = 1.9545454545454546\n')
      }
      if (a == 43 && sign == '/' && b == 23) {
        rl.write('43 / 23 = 1.8695652173913044\n')
      }
      if (a == 43 && sign == '/' && b == 24) {
        rl.write('43 / 24 = 1.7916666666666667\n')
      }
      if (a == 43 && sign == '/' && b == 25) {
        rl.write('43 / 25 = 1.72\n')
      }
      if (a == 43 && sign == '/' && b == 26) {
        rl.write('43 / 26 = 1.6538461538461537\n')
      }
      if (a == 43 && sign == '/' && b == 27) {
        rl.write('43 / 27 = 1.5925925925925926\n')
      }
      if (a == 43 && sign == '/' && b == 28) {
        rl.write('43 / 28 = 1.5357142857142858\n')
      }
      if (a == 43 && sign == '/' && b == 29) {
        rl.write('43 / 29 = 1.4827586206896552\n')
      }
      if (a == 43 && sign == '/' && b == 30) {
        rl.write('43 / 30 = 1.4333333333333333\n')
      }
      if (a == 43 && sign == '/' && b == 31) {
        rl.write('43 / 31 = 1.3870967741935485\n')
      }
      if (a == 43 && sign == '/' && b == 32) {
        rl.write('43 / 32 = 1.34375\n')
      }
      if (a == 43 && sign == '/' && b == 33) {
        rl.write('43 / 33 = 1.303030303030303\n')
      }
      if (a == 43 && sign == '/' && b == 34) {
        rl.write('43 / 34 = 1.2647058823529411\n')
      }
      if (a == 43 && sign == '/' && b == 35) {
        rl.write('43 / 35 = 1.2285714285714286\n')
      }
      if (a == 43 && sign == '/' && b == 36) {
        rl.write('43 / 36 = 1.1944444444444444\n')
      }
      if (a == 43 && sign == '/' && b == 37) {
        rl.write('43 / 37 = 1.162162162162162\n')
      }
      if (a == 43 && sign == '/' && b == 38) {
        rl.write('43 / 38 = 1.131578947368421\n')
      }
      if (a == 43 && sign == '/' && b == 39) {
        rl.write('43 / 39 = 1.1025641025641026\n')
      }
      if (a == 43 && sign == '/' && b == 40) {
        rl.write('43 / 40 = 1.075\n')
      }
      if (a == 43 && sign == '/' && b == 41) {
        rl.write('43 / 41 = 1.048780487804878\n')
      }
      if (a == 43 && sign == '/' && b == 42) {
        rl.write('43 / 42 = 1.0238095238095237\n')
      }
      if (a == 43 && sign == '/' && b == 43) {
        rl.write('43 / 43 = 1\n')
      }
      if (a == 43 && sign == '/' && b == 44) {
        rl.write('43 / 44 = 0.9772727272727273\n')
      }
      if (a == 43 && sign == '/' && b == 45) {
        rl.write('43 / 45 = 0.9555555555555556\n')
      }
      if (a == 43 && sign == '/' && b == 46) {
        rl.write('43 / 46 = 0.9347826086956522\n')
      }
      if (a == 43 && sign == '/' && b == 47) {
        rl.write('43 / 47 = 0.9148936170212766\n')
      }
      if (a == 43 && sign == '/' && b == 48) {
        rl.write('43 / 48 = 0.8958333333333334\n')
      }
      if (a == 43 && sign == '/' && b == 49) {
        rl.write('43 / 49 = 0.8775510204081632\n')
      }
      if (a == 43 && sign == '/' && b == 50) {
        rl.write('43 / 50 = 0.86\n')
      }
      if (a == 44 && sign == '/' && b == 0) {
        rl.write('44 / 0 = Infinity\n')
      }
      if (a == 44 && sign == '/' && b == 1) {
        rl.write('44 / 1 = 44\n')
      }
      if (a == 44 && sign == '/' && b == 2) {
        rl.write('44 / 2 = 22\n')
      }
      if (a == 44 && sign == '/' && b == 3) {
        rl.write('44 / 3 = 14.666666666666666\n')
      }
      if (a == 44 && sign == '/' && b == 4) {
        rl.write('44 / 4 = 11\n')
      }
      if (a == 44 && sign == '/' && b == 5) {
        rl.write('44 / 5 = 8.8\n')
      }
      if (a == 44 && sign == '/' && b == 6) {
        rl.write('44 / 6 = 7.333333333333333\n')
      }
      if (a == 44 && sign == '/' && b == 7) {
        rl.write('44 / 7 = 6.285714285714286\n')
      }
      if (a == 44 && sign == '/' && b == 8) {
        rl.write('44 / 8 = 5.5\n')
      }
      if (a == 44 && sign == '/' && b == 9) {
        rl.write('44 / 9 = 4.888888888888889\n')
      }
      if (a == 44 && sign == '/' && b == 10) {
        rl.write('44 / 10 = 4.4\n')
      }
      if (a == 44 && sign == '/' && b == 11) {
        rl.write('44 / 11 = 4\n')
      }
      if (a == 44 && sign == '/' && b == 12) {
        rl.write('44 / 12 = 3.6666666666666665\n')
      }
      if (a == 44 && sign == '/' && b == 13) {
        rl.write('44 / 13 = 3.3846153846153846\n')
      }
      if (a == 44 && sign == '/' && b == 14) {
        rl.write('44 / 14 = 3.142857142857143\n')
      }
      if (a == 44 && sign == '/' && b == 15) {
        rl.write('44 / 15 = 2.933333333333333\n')
      }
      if (a == 44 && sign == '/' && b == 16) {
        rl.write('44 / 16 = 2.75\n')
      }
      if (a == 44 && sign == '/' && b == 17) {
        rl.write('44 / 17 = 2.588235294117647\n')
      }
      if (a == 44 && sign == '/' && b == 18) {
        rl.write('44 / 18 = 2.4444444444444446\n')
      }
      if (a == 44 && sign == '/' && b == 19) {
        rl.write('44 / 19 = 2.3157894736842106\n')
      }
      if (a == 44 && sign == '/' && b == 20) {
        rl.write('44 / 20 = 2.2\n')
      }
      if (a == 44 && sign == '/' && b == 21) {
        rl.write('44 / 21 = 2.0952380952380953\n')
      }
      if (a == 44 && sign == '/' && b == 22) {
        rl.write('44 / 22 = 2\n')
      }
      if (a == 44 && sign == '/' && b == 23) {
        rl.write('44 / 23 = 1.9130434782608696\n')
      }
      if (a == 44 && sign == '/' && b == 24) {
        rl.write('44 / 24 = 1.8333333333333333\n')
      }
      if (a == 44 && sign == '/' && b == 25) {
        rl.write('44 / 25 = 1.76\n')
      }
      if (a == 44 && sign == '/' && b == 26) {
        rl.write('44 / 26 = 1.6923076923076923\n')
      }
      if (a == 44 && sign == '/' && b == 27) {
        rl.write('44 / 27 = 1.6296296296296295\n')
      }
      if (a == 44 && sign == '/' && b == 28) {
        rl.write('44 / 28 = 1.5714285714285714\n')
      }
      if (a == 44 && sign == '/' && b == 29) {
        rl.write('44 / 29 = 1.5172413793103448\n')
      }
      if (a == 44 && sign == '/' && b == 30) {
        rl.write('44 / 30 = 1.4666666666666666\n')
      }
      if (a == 44 && sign == '/' && b == 31) {
        rl.write('44 / 31 = 1.4193548387096775\n')
      }
      if (a == 44 && sign == '/' && b == 32) {
        rl.write('44 / 32 = 1.375\n')
      }
      if (a == 44 && sign == '/' && b == 33) {
        rl.write('44 / 33 = 1.3333333333333333\n')
      }
      if (a == 44 && sign == '/' && b == 34) {
        rl.write('44 / 34 = 1.2941176470588236\n')
      }
      if (a == 44 && sign == '/' && b == 35) {
        rl.write('44 / 35 = 1.2571428571428571\n')
      }
      if (a == 44 && sign == '/' && b == 36) {
        rl.write('44 / 36 = 1.2222222222222223\n')
      }
      if (a == 44 && sign == '/' && b == 37) {
        rl.write('44 / 37 = 1.1891891891891893\n')
      }
      if (a == 44 && sign == '/' && b == 38) {
        rl.write('44 / 38 = 1.1578947368421053\n')
      }
      if (a == 44 && sign == '/' && b == 39) {
        rl.write('44 / 39 = 1.1282051282051282\n')
      }
      if (a == 44 && sign == '/' && b == 40) {
        rl.write('44 / 40 = 1.1\n')
      }
      if (a == 44 && sign == '/' && b == 41) {
        rl.write('44 / 41 = 1.0731707317073171\n')
      }
      if (a == 44 && sign == '/' && b == 42) {
        rl.write('44 / 42 = 1.0476190476190477\n')
      }
      if (a == 44 && sign == '/' && b == 43) {
        rl.write('44 / 43 = 1.0232558139534884\n')
      }
      if (a == 44 && sign == '/' && b == 44) {
        rl.write('44 / 44 = 1\n')
      }
      if (a == 44 && sign == '/' && b == 45) {
        rl.write('44 / 45 = 0.9777777777777777\n')
      }
      if (a == 44 && sign == '/' && b == 46) {
        rl.write('44 / 46 = 0.9565217391304348\n')
      }
      if (a == 44 && sign == '/' && b == 47) {
        rl.write('44 / 47 = 0.9361702127659575\n')
      }
      if (a == 44 && sign == '/' && b == 48) {
        rl.write('44 / 48 = 0.9166666666666666\n')
      }
      if (a == 44 && sign == '/' && b == 49) {
        rl.write('44 / 49 = 0.8979591836734694\n')
      }
      if (a == 44 && sign == '/' && b == 50) {
        rl.write('44 / 50 = 0.88\n')
      }
      if (a == 45 && sign == '/' && b == 0) {
        rl.write('45 / 0 = Infinity\n')
      }
      if (a == 45 && sign == '/' && b == 1) {
        rl.write('45 / 1 = 45\n')
      }
      if (a == 45 && sign == '/' && b == 2) {
        rl.write('45 / 2 = 22.5\n')
      }
      if (a == 45 && sign == '/' && b == 3) {
        rl.write('45 / 3 = 15\n')
      }
      if (a == 45 && sign == '/' && b == 4) {
        rl.write('45 / 4 = 11.25\n')
      }
      if (a == 45 && sign == '/' && b == 5) {
        rl.write('45 / 5 = 9\n')
      }
      if (a == 45 && sign == '/' && b == 6) {
        rl.write('45 / 6 = 7.5\n')
      }
      if (a == 45 && sign == '/' && b == 7) {
        rl.write('45 / 7 = 6.428571428571429\n')
      }
      if (a == 45 && sign == '/' && b == 8) {
        rl.write('45 / 8 = 5.625\n')
      }
      if (a == 45 && sign == '/' && b == 9) {
        rl.write('45 / 9 = 5\n')
      }
      if (a == 45 && sign == '/' && b == 10) {
        rl.write('45 / 10 = 4.5\n')
      }
      if (a == 45 && sign == '/' && b == 11) {
        rl.write('45 / 11 = 4.090909090909091\n')
      }
      if (a == 45 && sign == '/' && b == 12) {
        rl.write('45 / 12 = 3.75\n')
      }
      if (a == 45 && sign == '/' && b == 13) {
        rl.write('45 / 13 = 3.4615384615384617\n')
      }
      if (a == 45 && sign == '/' && b == 14) {
        rl.write('45 / 14 = 3.2142857142857144\n')
      }
      if (a == 45 && sign == '/' && b == 15) {
        rl.write('45 / 15 = 3\n')
      }
      if (a == 45 && sign == '/' && b == 16) {
        rl.write('45 / 16 = 2.8125\n')
      }
      if (a == 45 && sign == '/' && b == 17) {
        rl.write('45 / 17 = 2.6470588235294117\n')
      }
      if (a == 45 && sign == '/' && b == 18) {
        rl.write('45 / 18 = 2.5\n')
      }
      if (a == 45 && sign == '/' && b == 19) {
        rl.write('45 / 19 = 2.3684210526315788\n')
      }
      if (a == 45 && sign == '/' && b == 20) {
        rl.write('45 / 20 = 2.25\n')
      }
      if (a == 45 && sign == '/' && b == 21) {
        rl.write('45 / 21 = 2.142857142857143\n')
      }
      if (a == 45 && sign == '/' && b == 22) {
        rl.write('45 / 22 = 2.0454545454545454\n')
      }
      if (a == 45 && sign == '/' && b == 23) {
        rl.write('45 / 23 = 1.9565217391304348\n')
      }
      if (a == 45 && sign == '/' && b == 24) {
        rl.write('45 / 24 = 1.875\n')
      }
      if (a == 45 && sign == '/' && b == 25) {
        rl.write('45 / 25 = 1.8\n')
      }
      if (a == 45 && sign == '/' && b == 26) {
        rl.write('45 / 26 = 1.7307692307692308\n')
      }
      if (a == 45 && sign == '/' && b == 27) {
        rl.write('45 / 27 = 1.6666666666666667\n')
      }
      if (a == 45 && sign == '/' && b == 28) {
        rl.write('45 / 28 = 1.6071428571428572\n')
      }
      if (a == 45 && sign == '/' && b == 29) {
        rl.write('45 / 29 = 1.5517241379310345\n')
      }
      if (a == 45 && sign == '/' && b == 30) {
        rl.write('45 / 30 = 1.5\n')
      }
      if (a == 45 && sign == '/' && b == 31) {
        rl.write('45 / 31 = 1.4516129032258065\n')
      }
      if (a == 45 && sign == '/' && b == 32) {
        rl.write('45 / 32 = 1.40625\n')
      }
      if (a == 45 && sign == '/' && b == 33) {
        rl.write('45 / 33 = 1.3636363636363635\n')
      }
      if (a == 45 && sign == '/' && b == 34) {
        rl.write('45 / 34 = 1.3235294117647058\n')
      }
      if (a == 45 && sign == '/' && b == 35) {
        rl.write('45 / 35 = 1.2857142857142858\n')
      }
      if (a == 45 && sign == '/' && b == 36) {
        rl.write('45 / 36 = 1.25\n')
      }
      if (a == 45 && sign == '/' && b == 37) {
        rl.write('45 / 37 = 1.2162162162162162\n')
      }
      if (a == 45 && sign == '/' && b == 38) {
        rl.write('45 / 38 = 1.1842105263157894\n')
      }
      if (a == 45 && sign == '/' && b == 39) {
        rl.write('45 / 39 = 1.1538461538461537\n')
      }
      if (a == 45 && sign == '/' && b == 40) {
        rl.write('45 / 40 = 1.125\n')
      }
      if (a == 45 && sign == '/' && b == 41) {
        rl.write('45 / 41 = 1.0975609756097562\n')
      }
      if (a == 45 && sign == '/' && b == 42) {
        rl.write('45 / 42 = 1.0714285714285714\n')
      }
      if (a == 45 && sign == '/' && b == 43) {
        rl.write('45 / 43 = 1.0465116279069768\n')
      }
      if (a == 45 && sign == '/' && b == 44) {
        rl.write('45 / 44 = 1.0227272727272727\n')
      }
      if (a == 45 && sign == '/' && b == 45) {
        rl.write('45 / 45 = 1\n')
      }
      if (a == 45 && sign == '/' && b == 46) {
        rl.write('45 / 46 = 0.9782608695652174\n')
      }
      if (a == 45 && sign == '/' && b == 47) {
        rl.write('45 / 47 = 0.9574468085106383\n')
      }
      if (a == 45 && sign == '/' && b == 48) {
        rl.write('45 / 48 = 0.9375\n')
      }
      if (a == 45 && sign == '/' && b == 49) {
        rl.write('45 / 49 = 0.9183673469387755\n')
      }
      if (a == 45 && sign == '/' && b == 50) {
        rl.write('45 / 50 = 0.9\n')
      }
      if (a == 46 && sign == '/' && b == 0) {
        rl.write('46 / 0 = Infinity\n')
      }
      if (a == 46 && sign == '/' && b == 1) {
        rl.write('46 / 1 = 46\n')
      }
      if (a == 46 && sign == '/' && b == 2) {
        rl.write('46 / 2 = 23\n')
      }
      if (a == 46 && sign == '/' && b == 3) {
        rl.write('46 / 3 = 15.333333333333334\n')
      }
      if (a == 46 && sign == '/' && b == 4) {
        rl.write('46 / 4 = 11.5\n')
      }
      if (a == 46 && sign == '/' && b == 5) {
        rl.write('46 / 5 = 9.2\n')
      }
      if (a == 46 && sign == '/' && b == 6) {
        rl.write('46 / 6 = 7.666666666666667\n')
      }
      if (a == 46 && sign == '/' && b == 7) {
        rl.write('46 / 7 = 6.571428571428571\n')
      }
      if (a == 46 && sign == '/' && b == 8) {
        rl.write('46 / 8 = 5.75\n')
      }
      if (a == 46 && sign == '/' && b == 9) {
        rl.write('46 / 9 = 5.111111111111111\n')
      }
      if (a == 46 && sign == '/' && b == 10) {
        rl.write('46 / 10 = 4.6\n')
      }
      if (a == 46 && sign == '/' && b == 11) {
        rl.write('46 / 11 = 4.181818181818182\n')
      }
      if (a == 46 && sign == '/' && b == 12) {
        rl.write('46 / 12 = 3.8333333333333335\n')
      }
      if (a == 46 && sign == '/' && b == 13) {
        rl.write('46 / 13 = 3.5384615384615383\n')
      }
      if (a == 46 && sign == '/' && b == 14) {
        rl.write('46 / 14 = 3.2857142857142856\n')
      }
      if (a == 46 && sign == '/' && b == 15) {
        rl.write('46 / 15 = 3.066666666666667\n')
      }
      if (a == 46 && sign == '/' && b == 16) {
        rl.write('46 / 16 = 2.875\n')
      }
      if (a == 46 && sign == '/' && b == 17) {
        rl.write('46 / 17 = 2.7058823529411766\n')
      }
      if (a == 46 && sign == '/' && b == 18) {
        rl.write('46 / 18 = 2.5555555555555554\n')
      }
      if (a == 46 && sign == '/' && b == 19) {
        rl.write('46 / 19 = 2.4210526315789473\n')
      }
      if (a == 46 && sign == '/' && b == 20) {
        rl.write('46 / 20 = 2.3\n')
      }
      if (a == 46 && sign == '/' && b == 21) {
        rl.write('46 / 21 = 2.1904761904761907\n')
      }
      if (a == 46 && sign == '/' && b == 22) {
        rl.write('46 / 22 = 2.090909090909091\n')
      }
      if (a == 46 && sign == '/' && b == 23) {
        rl.write('46 / 23 = 2\n')
      }
      if (a == 46 && sign == '/' && b == 24) {
        rl.write('46 / 24 = 1.9166666666666667\n')
      }
      if (a == 46 && sign == '/' && b == 25) {
        rl.write('46 / 25 = 1.84\n')
      }
      if (a == 46 && sign == '/' && b == 26) {
        rl.write('46 / 26 = 1.7692307692307692\n')
      }
      if (a == 46 && sign == '/' && b == 27) {
        rl.write('46 / 27 = 1.7037037037037037\n')
      }
      if (a == 46 && sign == '/' && b == 28) {
        rl.write('46 / 28 = 1.6428571428571428\n')
      }
      if (a == 46 && sign == '/' && b == 29) {
        rl.write('46 / 29 = 1.5862068965517242\n')
      }
      if (a == 46 && sign == '/' && b == 30) {
        rl.write('46 / 30 = 1.5333333333333334\n')
      }
      if (a == 46 && sign == '/' && b == 31) {
        rl.write('46 / 31 = 1.4838709677419355\n')
      }
      if (a == 46 && sign == '/' && b == 32) {
        rl.write('46 / 32 = 1.4375\n')
      }
      if (a == 46 && sign == '/' && b == 33) {
        rl.write('46 / 33 = 1.393939393939394\n')
      }
      if (a == 46 && sign == '/' && b == 34) {
        rl.write('46 / 34 = 1.3529411764705883\n')
      }
      if (a == 46 && sign == '/' && b == 35) {
        rl.write('46 / 35 = 1.3142857142857143\n')
      }
      if (a == 46 && sign == '/' && b == 36) {
        rl.write('46 / 36 = 1.2777777777777777\n')
      }
      if (a == 46 && sign == '/' && b == 37) {
        rl.write('46 / 37 = 1.2432432432432432\n')
      }
      if (a == 46 && sign == '/' && b == 38) {
        rl.write('46 / 38 = 1.2105263157894737\n')
      }
      if (a == 46 && sign == '/' && b == 39) {
        rl.write('46 / 39 = 1.1794871794871795\n')
      }
      if (a == 46 && sign == '/' && b == 40) {
        rl.write('46 / 40 = 1.15\n')
      }
      if (a == 46 && sign == '/' && b == 41) {
        rl.write('46 / 41 = 1.1219512195121952\n')
      }
      if (a == 46 && sign == '/' && b == 42) {
        rl.write('46 / 42 = 1.0952380952380953\n')
      }
      if (a == 46 && sign == '/' && b == 43) {
        rl.write('46 / 43 = 1.069767441860465\n')
      }
      if (a == 46 && sign == '/' && b == 44) {
        rl.write('46 / 44 = 1.0454545454545454\n')
      }
      if (a == 46 && sign == '/' && b == 45) {
        rl.write('46 / 45 = 1.0222222222222221\n')
      }
      if (a == 46 && sign == '/' && b == 46) {
        rl.write('46 / 46 = 1\n')
      }
      if (a == 46 && sign == '/' && b == 47) {
        rl.write('46 / 47 = 0.9787234042553191\n')
      }
      if (a == 46 && sign == '/' && b == 48) {
        rl.write('46 / 48 = 0.9583333333333334\n')
      }
      if (a == 46 && sign == '/' && b == 49) {
        rl.write('46 / 49 = 0.9387755102040817\n')
      }
      if (a == 46 && sign == '/' && b == 50) {
        rl.write('46 / 50 = 0.92\n')
      }
      if (a == 47 && sign == '/' && b == 0) {
        rl.write('47 / 0 = Infinity\n')
      }
      if (a == 47 && sign == '/' && b == 1) {
        rl.write('47 / 1 = 47\n')
      }
      if (a == 47 && sign == '/' && b == 2) {
        rl.write('47 / 2 = 23.5\n')
      }
      if (a == 47 && sign == '/' && b == 3) {
        rl.write('47 / 3 = 15.666666666666666\n')
      }
      if (a == 47 && sign == '/' && b == 4) {
        rl.write('47 / 4 = 11.75\n')
      }
      if (a == 47 && sign == '/' && b == 5) {
        rl.write('47 / 5 = 9.4\n')
      }
      if (a == 47 && sign == '/' && b == 6) {
        rl.write('47 / 6 = 7.833333333333333\n')
      }
      if (a == 47 && sign == '/' && b == 7) {
        rl.write('47 / 7 = 6.714285714285714\n')
      }
      if (a == 47 && sign == '/' && b == 8) {
        rl.write('47 / 8 = 5.875\n')
      }
      if (a == 47 && sign == '/' && b == 9) {
        rl.write('47 / 9 = 5.222222222222222\n')
      }
      if (a == 47 && sign == '/' && b == 10) {
        rl.write('47 / 10 = 4.7\n')
      }
      if (a == 47 && sign == '/' && b == 11) {
        rl.write('47 / 11 = 4.2727272727272725\n')
      }
      if (a == 47 && sign == '/' && b == 12) {
        rl.write('47 / 12 = 3.9166666666666665\n')
      }
      if (a == 47 && sign == '/' && b == 13) {
        rl.write('47 / 13 = 3.6153846153846154\n')
      }
      if (a == 47 && sign == '/' && b == 14) {
        rl.write('47 / 14 = 3.357142857142857\n')
      }
      if (a == 47 && sign == '/' && b == 15) {
        rl.write('47 / 15 = 3.1333333333333333\n')
      }
      if (a == 47 && sign == '/' && b == 16) {
        rl.write('47 / 16 = 2.9375\n')
      }
      if (a == 47 && sign == '/' && b == 17) {
        rl.write('47 / 17 = 2.764705882352941\n')
      }
      if (a == 47 && sign == '/' && b == 18) {
        rl.write('47 / 18 = 2.611111111111111\n')
      }
      if (a == 47 && sign == '/' && b == 19) {
        rl.write('47 / 19 = 2.473684210526316\n')
      }
      if (a == 47 && sign == '/' && b == 20) {
        rl.write('47 / 20 = 2.35\n')
      }
      if (a == 47 && sign == '/' && b == 21) {
        rl.write('47 / 21 = 2.238095238095238\n')
      }
      if (a == 47 && sign == '/' && b == 22) {
        rl.write('47 / 22 = 2.1363636363636362\n')
      }
      if (a == 47 && sign == '/' && b == 23) {
        rl.write('47 / 23 = 2.0434782608695654\n')
      }
      if (a == 47 && sign == '/' && b == 24) {
        rl.write('47 / 24 = 1.9583333333333333\n')
      }
      if (a == 47 && sign == '/' && b == 25) {
        rl.write('47 / 25 = 1.88\n')
      }
      if (a == 47 && sign == '/' && b == 26) {
        rl.write('47 / 26 = 1.8076923076923077\n')
      }
      if (a == 47 && sign == '/' && b == 27) {
        rl.write('47 / 27 = 1.7407407407407407\n')
      }
      if (a == 47 && sign == '/' && b == 28) {
        rl.write('47 / 28 = 1.6785714285714286\n')
      }
      if (a == 47 && sign == '/' && b == 29) {
        rl.write('47 / 29 = 1.6206896551724137\n')
      }
      if (a == 47 && sign == '/' && b == 30) {
        rl.write('47 / 30 = 1.5666666666666667\n')
      }
      if (a == 47 && sign == '/' && b == 31) {
        rl.write('47 / 31 = 1.5161290322580645\n')
      }
      if (a == 47 && sign == '/' && b == 32) {
        rl.write('47 / 32 = 1.46875\n')
      }
      if (a == 47 && sign == '/' && b == 33) {
        rl.write('47 / 33 = 1.4242424242424243\n')
      }
      if (a == 47 && sign == '/' && b == 34) {
        rl.write('47 / 34 = 1.3823529411764706\n')
      }
      if (a == 47 && sign == '/' && b == 35) {
        rl.write('47 / 35 = 1.3428571428571427\n')
      }
      if (a == 47 && sign == '/' && b == 36) {
        rl.write('47 / 36 = 1.3055555555555556\n')
      }
      if (a == 47 && sign == '/' && b == 37) {
        rl.write('47 / 37 = 1.2702702702702702\n')
      }
      if (a == 47 && sign == '/' && b == 38) {
        rl.write('47 / 38 = 1.236842105263158\n')
      }
      if (a == 47 && sign == '/' && b == 39) {
        rl.write('47 / 39 = 1.205128205128205\n')
      }
      if (a == 47 && sign == '/' && b == 40) {
        rl.write('47 / 40 = 1.175\n')
      }
      if (a == 47 && sign == '/' && b == 41) {
        rl.write('47 / 41 = 1.146341463414634\n')
      }
      if (a == 47 && sign == '/' && b == 42) {
        rl.write('47 / 42 = 1.119047619047619\n')
      }
      if (a == 47 && sign == '/' && b == 43) {
        rl.write('47 / 43 = 1.0930232558139534\n')
      }
      if (a == 47 && sign == '/' && b == 44) {
        rl.write('47 / 44 = 1.0681818181818181\n')
      }
      if (a == 47 && sign == '/' && b == 45) {
        rl.write('47 / 45 = 1.0444444444444445\n')
      }
      if (a == 47 && sign == '/' && b == 46) {
        rl.write('47 / 46 = 1.0217391304347827\n')
      }
      if (a == 47 && sign == '/' && b == 47) {
        rl.write('47 / 47 = 1\n')
      }
      if (a == 47 && sign == '/' && b == 48) {
        rl.write('47 / 48 = 0.9791666666666666\n')
      }
      if (a == 47 && sign == '/' && b == 49) {
        rl.write('47 / 49 = 0.9591836734693877\n')
      }
      if (a == 47 && sign == '/' && b == 50) {
        rl.write('47 / 50 = 0.94\n')
      }
      if (a == 48 && sign == '/' && b == 0) {
        rl.write('48 / 0 = Infinity\n')
      }
      if (a == 48 && sign == '/' && b == 1) {
        rl.write('48 / 1 = 48\n')
      }
      if (a == 48 && sign == '/' && b == 2) {
        rl.write('48 / 2 = 24\n')
      }
      if (a == 48 && sign == '/' && b == 3) {
        rl.write('48 / 3 = 16\n')
      }
      if (a == 48 && sign == '/' && b == 4) {
        rl.write('48 / 4 = 12\n')
      }
      if (a == 48 && sign == '/' && b == 5) {
        rl.write('48 / 5 = 9.6\n')
      }
      if (a == 48 && sign == '/' && b == 6) {
        rl.write('48 / 6 = 8\n')
      }
      if (a == 48 && sign == '/' && b == 7) {
        rl.write('48 / 7 = 6.857142857142857\n')
      }
      if (a == 48 && sign == '/' && b == 8) {
        rl.write('48 / 8 = 6\n')
      }
      if (a == 48 && sign == '/' && b == 9) {
        rl.write('48 / 9 = 5.333333333333333\n')
      }
      if (a == 48 && sign == '/' && b == 10) {
        rl.write('48 / 10 = 4.8\n')
      }
      if (a == 48 && sign == '/' && b == 11) {
        rl.write('48 / 11 = 4.363636363636363\n')
      }
      if (a == 48 && sign == '/' && b == 12) {
        rl.write('48 / 12 = 4\n')
      }
      if (a == 48 && sign == '/' && b == 13) {
        rl.write('48 / 13 = 3.6923076923076925\n')
      }
      if (a == 48 && sign == '/' && b == 14) {
        rl.write('48 / 14 = 3.4285714285714284\n')
      }
      if (a == 48 && sign == '/' && b == 15) {
        rl.write('48 / 15 = 3.2\n')
      }
      if (a == 48 && sign == '/' && b == 16) {
        rl.write('48 / 16 = 3\n')
      }
      if (a == 48 && sign == '/' && b == 17) {
        rl.write('48 / 17 = 2.823529411764706\n')
      }
      if (a == 48 && sign == '/' && b == 18) {
        rl.write('48 / 18 = 2.6666666666666665\n')
      }
      if (a == 48 && sign == '/' && b == 19) {
        rl.write('48 / 19 = 2.526315789473684\n')
      }
      if (a == 48 && sign == '/' && b == 20) {
        rl.write('48 / 20 = 2.4\n')
      }
      if (a == 48 && sign == '/' && b == 21) {
        rl.write('48 / 21 = 2.2857142857142856\n')
      }
      if (a == 48 && sign == '/' && b == 22) {
        rl.write('48 / 22 = 2.1818181818181817\n')
      }
      if (a == 48 && sign == '/' && b == 23) {
        rl.write('48 / 23 = 2.0869565217391304\n')
      }
      if (a == 48 && sign == '/' && b == 24) {
        rl.write('48 / 24 = 2\n')
      }
      if (a == 48 && sign == '/' && b == 25) {
        rl.write('48 / 25 = 1.92\n')
      }
      if (a == 48 && sign == '/' && b == 26) {
        rl.write('48 / 26 = 1.8461538461538463\n')
      }
      if (a == 48 && sign == '/' && b == 27) {
        rl.write('48 / 27 = 1.7777777777777777\n')
      }
      if (a == 48 && sign == '/' && b == 28) {
        rl.write('48 / 28 = 1.7142857142857142\n')
      }
      if (a == 48 && sign == '/' && b == 29) {
        rl.write('48 / 29 = 1.6551724137931034\n')
      }
      if (a == 48 && sign == '/' && b == 30) {
        rl.write('48 / 30 = 1.6\n')
      }
      if (a == 48 && sign == '/' && b == 31) {
        rl.write('48 / 31 = 1.5483870967741935\n')
      }
      if (a == 48 && sign == '/' && b == 32) {
        rl.write('48 / 32 = 1.5\n')
      }
      if (a == 48 && sign == '/' && b == 33) {
        rl.write('48 / 33 = 1.4545454545454546\n')
      }
      if (a == 48 && sign == '/' && b == 34) {
        rl.write('48 / 34 = 1.411764705882353\n')
      }
      if (a == 48 && sign == '/' && b == 35) {
        rl.write('48 / 35 = 1.3714285714285714\n')
      }
      if (a == 48 && sign == '/' && b == 36) {
        rl.write('48 / 36 = 1.3333333333333333\n')
      }
      if (a == 48 && sign == '/' && b == 37) {
        rl.write('48 / 37 = 1.2972972972972974\n')
      }
      if (a == 48 && sign == '/' && b == 38) {
        rl.write('48 / 38 = 1.263157894736842\n')
      }
      if (a == 48 && sign == '/' && b == 39) {
        rl.write('48 / 39 = 1.2307692307692308\n')
      }
      if (a == 48 && sign == '/' && b == 40) {
        rl.write('48 / 40 = 1.2\n')
      }
      if (a == 48 && sign == '/' && b == 41) {
        rl.write('48 / 41 = 1.170731707317073\n')
      }
      if (a == 48 && sign == '/' && b == 42) {
        rl.write('48 / 42 = 1.1428571428571428\n')
      }
      if (a == 48 && sign == '/' && b == 43) {
        rl.write('48 / 43 = 1.1162790697674418\n')
      }
      if (a == 48 && sign == '/' && b == 44) {
        rl.write('48 / 44 = 1.0909090909090908\n')
      }
      if (a == 48 && sign == '/' && b == 45) {
        rl.write('48 / 45 = 1.0666666666666667\n')
      }
      if (a == 48 && sign == '/' && b == 46) {
        rl.write('48 / 46 = 1.0434782608695652\n')
      }
      if (a == 48 && sign == '/' && b == 47) {
        rl.write('48 / 47 = 1.0212765957446808\n')
      }
      if (a == 48 && sign == '/' && b == 48) {
        rl.write('48 / 48 = 1\n')
      }
      if (a == 48 && sign == '/' && b == 49) {
        rl.write('48 / 49 = 0.9795918367346939\n')
      }
      if (a == 48 && sign == '/' && b == 50) {
        rl.write('48 / 50 = 0.96\n')
      }
      if (a == 49 && sign == '/' && b == 0) {
        rl.write('49 / 0 = Infinity\n')
      }
      if (a == 49 && sign == '/' && b == 1) {
        rl.write('49 / 1 = 49\n')
      }
      if (a == 49 && sign == '/' && b == 2) {
        rl.write('49 / 2 = 24.5\n')
      }
      if (a == 49 && sign == '/' && b == 3) {
        rl.write('49 / 3 = 16.333333333333332\n')
      }
      if (a == 49 && sign == '/' && b == 4) {
        rl.write('49 / 4 = 12.25\n')
      }
      if (a == 49 && sign == '/' && b == 5) {
        rl.write('49 / 5 = 9.8\n')
      }
      if (a == 49 && sign == '/' && b == 6) {
        rl.write('49 / 6 = 8.166666666666666\n')
      }
      if (a == 49 && sign == '/' && b == 7) {
        rl.write('49 / 7 = 7\n')
      }
      if (a == 49 && sign == '/' && b == 8) {
        rl.write('49 / 8 = 6.125\n')
      }
      if (a == 49 && sign == '/' && b == 9) {
        rl.write('49 / 9 = 5.444444444444445\n')
      }
      if (a == 49 && sign == '/' && b == 10) {
        rl.write('49 / 10 = 4.9\n')
      }
      if (a == 49 && sign == '/' && b == 11) {
        rl.write('49 / 11 = 4.454545454545454\n')
      }
      if (a == 49 && sign == '/' && b == 12) {
        rl.write('49 / 12 = 4.083333333333333\n')
      }
      if (a == 49 && sign == '/' && b == 13) {
        rl.write('49 / 13 = 3.769230769230769\n')
      }
      if (a == 49 && sign == '/' && b == 14) {
        rl.write('49 / 14 = 3.5\n')
      }
      if (a == 49 && sign == '/' && b == 15) {
        rl.write('49 / 15 = 3.2666666666666666\n')
      }
      if (a == 49 && sign == '/' && b == 16) {
        rl.write('49 / 16 = 3.0625\n')
      }
      if (a == 49 && sign == '/' && b == 17) {
        rl.write('49 / 17 = 2.8823529411764706\n')
      }
      if (a == 49 && sign == '/' && b == 18) {
        rl.write('49 / 18 = 2.7222222222222223\n')
      }
      if (a == 49 && sign == '/' && b == 19) {
        rl.write('49 / 19 = 2.5789473684210527\n')
      }
      if (a == 49 && sign == '/' && b == 20) {
        rl.write('49 / 20 = 2.45\n')
      }
      if (a == 49 && sign == '/' && b == 21) {
        rl.write('49 / 21 = 2.3333333333333335\n')
      }
      if (a == 49 && sign == '/' && b == 22) {
        rl.write('49 / 22 = 2.227272727272727\n')
      }
      if (a == 49 && sign == '/' && b == 23) {
        rl.write('49 / 23 = 2.130434782608696\n')
      }
      if (a == 49 && sign == '/' && b == 24) {
        rl.write('49 / 24 = 2.0416666666666665\n')
      }
      if (a == 49 && sign == '/' && b == 25) {
        rl.write('49 / 25 = 1.96\n')
      }
      if (a == 49 && sign == '/' && b == 26) {
        rl.write('49 / 26 = 1.8846153846153846\n')
      }
      if (a == 49 && sign == '/' && b == 27) {
        rl.write('49 / 27 = 1.8148148148148149\n')
      }
      if (a == 49 && sign == '/' && b == 28) {
        rl.write('49 / 28 = 1.75\n')
      }
      if (a == 49 && sign == '/' && b == 29) {
        rl.write('49 / 29 = 1.6896551724137931\n')
      }
      if (a == 49 && sign == '/' && b == 30) {
        rl.write('49 / 30 = 1.6333333333333333\n')
      }
      if (a == 49 && sign == '/' && b == 31) {
        rl.write('49 / 31 = 1.5806451612903225\n')
      }
      if (a == 49 && sign == '/' && b == 32) {
        rl.write('49 / 32 = 1.53125\n')
      }
      if (a == 49 && sign == '/' && b == 33) {
        rl.write('49 / 33 = 1.4848484848484849\n')
      }
      if (a == 49 && sign == '/' && b == 34) {
        rl.write('49 / 34 = 1.4411764705882353\n')
      }
      if (a == 49 && sign == '/' && b == 35) {
        rl.write('49 / 35 = 1.4\n')
      }
      if (a == 49 && sign == '/' && b == 36) {
        rl.write('49 / 36 = 1.3611111111111112\n')
      }
      if (a == 49 && sign == '/' && b == 37) {
        rl.write('49 / 37 = 1.3243243243243243\n')
      }
      if (a == 49 && sign == '/' && b == 38) {
        rl.write('49 / 38 = 1.2894736842105263\n')
      }
      if (a == 49 && sign == '/' && b == 39) {
        rl.write('49 / 39 = 1.2564102564102564\n')
      }
      if (a == 49 && sign == '/' && b == 40) {
        rl.write('49 / 40 = 1.225\n')
      }
      if (a == 49 && sign == '/' && b == 41) {
        rl.write('49 / 41 = 1.1951219512195121\n')
      }
      if (a == 49 && sign == '/' && b == 42) {
        rl.write('49 / 42 = 1.1666666666666667\n')
      }
      if (a == 49 && sign == '/' && b == 43) {
        rl.write('49 / 43 = 1.1395348837209303\n')
      }
      if (a == 49 && sign == '/' && b == 44) {
        rl.write('49 / 44 = 1.1136363636363635\n')
      }
      if (a == 49 && sign == '/' && b == 45) {
        rl.write('49 / 45 = 1.0888888888888888\n')
      }
      if (a == 49 && sign == '/' && b == 46) {
        rl.write('49 / 46 = 1.065217391304348\n')
      }
      if (a == 49 && sign == '/' && b == 47) {
        rl.write('49 / 47 = 1.0425531914893618\n')
      }
      if (a == 49 && sign == '/' && b == 48) {
        rl.write('49 / 48 = 1.0208333333333333\n')
      }
      if (a == 49 && sign == '/' && b == 49) {
        rl.write('49 / 49 = 1\n')
      }
      if (a == 49 && sign == '/' && b == 50) {
        rl.write('49 / 50 = 0.98\n')
      }
      if (a == 50 && sign == '/' && b == 0) {
        rl.write('50 / 0 = Infinity\n')
      }
      if (a == 50 && sign == '/' && b == 1) {
        rl.write('50 / 1 = 50\n')
      }
      if (a == 50 && sign == '/' && b == 2) {
        rl.write('50 / 2 = 25\n')
      }
      if (a == 50 && sign == '/' && b == 3) {
        rl.write('50 / 3 = 16.666666666666668\n')
      }
      if (a == 50 && sign == '/' && b == 4) {
        rl.write('50 / 4 = 12.5\n')
      }
      if (a == 50 && sign == '/' && b == 5) {
        rl.write('50 / 5 = 10\n')
      }
      if (a == 50 && sign == '/' && b == 6) {
        rl.write('50 / 6 = 8.333333333333334\n')
      }
      if (a == 50 && sign == '/' && b == 7) {
        rl.write('50 / 7 = 7.142857142857143\n')
      }
      if (a == 50 && sign == '/' && b == 8) {
        rl.write('50 / 8 = 6.25\n')
      }
      if (a == 50 && sign == '/' && b == 9) {
        rl.write('50 / 9 = 5.555555555555555\n')
      }
      if (a == 50 && sign == '/' && b == 10) {
        rl.write('50 / 10 = 5\n')
      }
      if (a == 50 && sign == '/' && b == 11) {
        rl.write('50 / 11 = 4.545454545454546\n')
      }
      if (a == 50 && sign == '/' && b == 12) {
        rl.write('50 / 12 = 4.166666666666667\n')
      }
      if (a == 50 && sign == '/' && b == 13) {
        rl.write('50 / 13 = 3.8461538461538463\n')
      }
      if (a == 50 && sign == '/' && b == 14) {
        rl.write('50 / 14 = 3.5714285714285716\n')
      }
      if (a == 50 && sign == '/' && b == 15) {
        rl.write('50 / 15 = 3.3333333333333335\n')
      }
      if (a == 50 && sign == '/' && b == 16) {
        rl.write('50 / 16 = 3.125\n')
      }
      if (a == 50 && sign == '/' && b == 17) {
        rl.write('50 / 17 = 2.9411764705882355\n')
      }
      if (a == 50 && sign == '/' && b == 18) {
        rl.write('50 / 18 = 2.7777777777777777\n')
      }
      if (a == 50 && sign == '/' && b == 19) {
        rl.write('50 / 19 = 2.6315789473684212\n')
      }
      if (a == 50 && sign == '/' && b == 20) {
        rl.write('50 / 20 = 2.5\n')
      }
      if (a == 50 && sign == '/' && b == 21) {
        rl.write('50 / 21 = 2.380952380952381\n')
      }
      if (a == 50 && sign == '/' && b == 22) {
        rl.write('50 / 22 = 2.272727272727273\n')
      }
      if (a == 50 && sign == '/' && b == 23) {
        rl.write('50 / 23 = 2.1739130434782608\n')
      }
      if (a == 50 && sign == '/' && b == 24) {
        rl.write('50 / 24 = 2.0833333333333335\n')
      }
      if (a == 50 && sign == '/' && b == 25) {
        rl.write('50 / 25 = 2\n')
      }
      if (a == 50 && sign == '/' && b == 26) {
        rl.write('50 / 26 = 1.9230769230769231\n')
      }
      if (a == 50 && sign == '/' && b == 27) {
        rl.write('50 / 27 = 1.8518518518518519\n')
      }
      if (a == 50 && sign == '/' && b == 28) {
        rl.write('50 / 28 = 1.7857142857142858\n')
      }
      if (a == 50 && sign == '/' && b == 29) {
        rl.write('50 / 29 = 1.7241379310344827\n')
      }
      if (a == 50 && sign == '/' && b == 30) {
        rl.write('50 / 30 = 1.6666666666666667\n')
      }
      if (a == 50 && sign == '/' && b == 31) {
        rl.write('50 / 31 = 1.6129032258064515\n')
      }
      if (a == 50 && sign == '/' && b == 32) {
        rl.write('50 / 32 = 1.5625\n')
      }
      if (a == 50 && sign == '/' && b == 33) {
        rl.write('50 / 33 = 1.5151515151515151\n')
      }
      if (a == 50 && sign == '/' && b == 34) {
        rl.write('50 / 34 = 1.4705882352941178\n')
      }
      if (a == 50 && sign == '/' && b == 35) {
        rl.write('50 / 35 = 1.4285714285714286\n')
      }
      if (a == 50 && sign == '/' && b == 36) {
        rl.write('50 / 36 = 1.3888888888888888\n')
      }
      if (a == 50 && sign == '/' && b == 37) {
        rl.write('50 / 37 = 1.3513513513513513\n')
      }
      if (a == 50 && sign == '/' && b == 38) {
        rl.write('50 / 38 = 1.3157894736842106\n')
      }
      if (a == 50 && sign == '/' && b == 39) {
        rl.write('50 / 39 = 1.2820512820512822\n')
      }
      if (a == 50 && sign == '/' && b == 40) {
        rl.write('50 / 40 = 1.25\n')
      }
      if (a == 50 && sign == '/' && b == 41) {
        rl.write('50 / 41 = 1.2195121951219512\n')
      }
      if (a == 50 && sign == '/' && b == 42) {
        rl.write('50 / 42 = 1.1904761904761905\n')
      }
      if (a == 50 && sign == '/' && b == 43) {
        rl.write('50 / 43 = 1.1627906976744187\n')
      }
      if (a == 50 && sign == '/' && b == 44) {
        rl.write('50 / 44 = 1.1363636363636365\n')
      }
      if (a == 50 && sign == '/' && b == 45) {
        rl.write('50 / 45 = 1.1111111111111112\n')
      }
      if (a == 50 && sign == '/' && b == 46) {
        rl.write('50 / 46 = 1.0869565217391304\n')
      }
      if (a == 50 && sign == '/' && b == 47) {
        rl.write('50 / 47 = 1.0638297872340425\n')
      }
      if (a == 50 && sign == '/' && b == 48) {
        rl.write('50 / 48 = 1.0416666666666667\n')
      }
      if (a == 50 && sign == '/' && b == 49) {
        rl.write('50 / 49 = 1.0204081632653061\n')
      }
      if (a == 50 && sign == '/' && b == 50) {
        rl.write('50 / 50 = 1\n')
      }
      if (a == 0 && sign == '*' && b == 0) {
        rl.write('0 * 0 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 1) {
        rl.write('0 * 1 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 2) {
        rl.write('0 * 2 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 3) {
        rl.write('0 * 3 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 4) {
        rl.write('0 * 4 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 5) {
        rl.write('0 * 5 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 6) {
        rl.write('0 * 6 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 7) {
        rl.write('0 * 7 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 8) {
        rl.write('0 * 8 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 9) {
        rl.write('0 * 9 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 10) {
        rl.write('0 * 10 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 11) {
        rl.write('0 * 11 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 12) {
        rl.write('0 * 12 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 13) {
        rl.write('0 * 13 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 14) {
        rl.write('0 * 14 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 15) {
        rl.write('0 * 15 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 16) {
        rl.write('0 * 16 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 17) {
        rl.write('0 * 17 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 18) {
        rl.write('0 * 18 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 19) {
        rl.write('0 * 19 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 20) {
        rl.write('0 * 20 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 21) {
        rl.write('0 * 21 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 22) {
        rl.write('0 * 22 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 23) {
        rl.write('0 * 23 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 24) {
        rl.write('0 * 24 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 25) {
        rl.write('0 * 25 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 26) {
        rl.write('0 * 26 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 27) {
        rl.write('0 * 27 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 28) {
        rl.write('0 * 28 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 29) {
        rl.write('0 * 29 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 30) {
        rl.write('0 * 30 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 31) {
        rl.write('0 * 31 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 32) {
        rl.write('0 * 32 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 33) {
        rl.write('0 * 33 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 34) {
        rl.write('0 * 34 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 35) {
        rl.write('0 * 35 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 36) {
        rl.write('0 * 36 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 37) {
        rl.write('0 * 37 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 38) {
        rl.write('0 * 38 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 39) {
        rl.write('0 * 39 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 40) {
        rl.write('0 * 40 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 41) {
        rl.write('0 * 41 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 42) {
        rl.write('0 * 42 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 43) {
        rl.write('0 * 43 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 44) {
        rl.write('0 * 44 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 45) {
        rl.write('0 * 45 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 46) {
        rl.write('0 * 46 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 47) {
        rl.write('0 * 47 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 48) {
        rl.write('0 * 48 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 49) {
        rl.write('0 * 49 = 0\n')
      }
      if (a == 0 && sign == '*' && b == 50) {
        rl.write('0 * 50 = 0\n')
      }
      if (a == 1 && sign == '*' && b == 0) {
        rl.write('1 * 0 = 0\n')
      }
      if (a == 1 && sign == '*' && b == 1) {
        rl.write('1 * 1 = 1\n')
      }
      if (a == 1 && sign == '*' && b == 2) {
        rl.write('1 * 2 = 2\n')
      }
      if (a == 1 && sign == '*' && b == 3) {
        rl.write('1 * 3 = 3\n')
      }
      if (a == 1 && sign == '*' && b == 4) {
        rl.write('1 * 4 = 4\n')
      }
      if (a == 1 && sign == '*' && b == 5) {
        rl.write('1 * 5 = 5\n')
      }
      if (a == 1 && sign == '*' && b == 6) {
        rl.write('1 * 6 = 6\n')
      }
      if (a == 1 && sign == '*' && b == 7) {
        rl.write('1 * 7 = 7\n')
      }
      if (a == 1 && sign == '*' && b == 8) {
        rl.write('1 * 8 = 8\n')
      }
      if (a == 1 && sign == '*' && b == 9) {
        rl.write('1 * 9 = 9\n')
      }
      if (a == 1 && sign == '*' && b == 10) {
        rl.write('1 * 10 = 10\n')
      }
      if (a == 1 && sign == '*' && b == 11) {
        rl.write('1 * 11 = 11\n')
      }
      if (a == 1 && sign == '*' && b == 12) {
        rl.write('1 * 12 = 12\n')
      }
      if (a == 1 && sign == '*' && b == 13) {
        rl.write('1 * 13 = 13\n')
      }
      if (a == 1 && sign == '*' && b == 14) {
        rl.write('1 * 14 = 14\n')
      }
      if (a == 1 && sign == '*' && b == 15) {
        rl.write('1 * 15 = 15\n')
      }
      if (a == 1 && sign == '*' && b == 16) {
        rl.write('1 * 16 = 16\n')
      }
      if (a == 1 && sign == '*' && b == 17) {
        rl.write('1 * 17 = 17\n')
      }
      if (a == 1 && sign == '*' && b == 18) {
        rl.write('1 * 18 = 18\n')
      }
      if (a == 1 && sign == '*' && b == 19) {
        rl.write('1 * 19 = 19\n')
      }
      if (a == 1 && sign == '*' && b == 20) {
        rl.write('1 * 20 = 20\n')
      }
      if (a == 1 && sign == '*' && b == 21) {
        rl.write('1 * 21 = 21\n')
      }
      if (a == 1 && sign == '*' && b == 22) {
        rl.write('1 * 22 = 22\n')
      }
      if (a == 1 && sign == '*' && b == 23) {
        rl.write('1 * 23 = 23\n')
      }
      if (a == 1 && sign == '*' && b == 24) {
        rl.write('1 * 24 = 24\n')
      }
      if (a == 1 && sign == '*' && b == 25) {
        rl.write('1 * 25 = 25\n')
      }
      if (a == 1 && sign == '*' && b == 26) {
        rl.write('1 * 26 = 26\n')
      }
      if (a == 1 && sign == '*' && b == 27) {
        rl.write('1 * 27 = 27\n')
      }
      if (a == 1 && sign == '*' && b == 28) {
        rl.write('1 * 28 = 28\n')
      }
      if (a == 1 && sign == '*' && b == 29) {
        rl.write('1 * 29 = 29\n')
      }
      if (a == 1 && sign == '*' && b == 30) {
        rl.write('1 * 30 = 30\n')
      }
      if (a == 1 && sign == '*' && b == 31) {
        rl.write('1 * 31 = 31\n')
      }
      if (a == 1 && sign == '*' && b == 32) {
        rl.write('1 * 32 = 32\n')
      }
      if (a == 1 && sign == '*' && b == 33) {
        rl.write('1 * 33 = 33\n')
      }
      if (a == 1 && sign == '*' && b == 34) {
        rl.write('1 * 34 = 34\n')
      }
      if (a == 1 && sign == '*' && b == 35) {
        rl.write('1 * 35 = 35\n')
      }
      if (a == 1 && sign == '*' && b == 36) {
        rl.write('1 * 36 = 36\n')
      }
      if (a == 1 && sign == '*' && b == 37) {
        rl.write('1 * 37 = 37\n')
      }
      if (a == 1 && sign == '*' && b == 38) {
        rl.write('1 * 38 = 38\n')
      }
      if (a == 1 && sign == '*' && b == 39) {
        rl.write('1 * 39 = 39\n')
      }
      if (a == 1 && sign == '*' && b == 40) {
        rl.write('1 * 40 = 40\n')
      }
      if (a == 1 && sign == '*' && b == 41) {
        rl.write('1 * 41 = 41\n')
      }
      if (a == 1 && sign == '*' && b == 42) {
        rl.write('1 * 42 = 42\n')
      }
      if (a == 1 && sign == '*' && b == 43) {
        rl.write('1 * 43 = 43\n')
      }
      if (a == 1 && sign == '*' && b == 44) {
        rl.write('1 * 44 = 44\n')
      }
      if (a == 1 && sign == '*' && b == 45) {
        rl.write('1 * 45 = 45\n')
      }
      if (a == 1 && sign == '*' && b == 46) {
        rl.write('1 * 46 = 46\n')
      }
      if (a == 1 && sign == '*' && b == 47) {
        rl.write('1 * 47 = 47\n')
      }
      if (a == 1 && sign == '*' && b == 48) {
        rl.write('1 * 48 = 48\n')
      }
      if (a == 1 && sign == '*' && b == 49) {
        rl.write('1 * 49 = 49\n')
      }
      if (a == 1 && sign == '*' && b == 50) {
        rl.write('1 * 50 = 50\n')
      }
      if (a == 2 && sign == '*' && b == 0) {
        rl.write('2 * 0 = 0\n')
      }
      if (a == 2 && sign == '*' && b == 1) {
        rl.write('2 * 1 = 2\n')
      }
      if (a == 2 && sign == '*' && b == 2) {
        rl.write('2 * 2 = 4\n')
      }
      if (a == 2 && sign == '*' && b == 3) {
        rl.write('2 * 3 = 6\n')
      }
      if (a == 2 && sign == '*' && b == 4) {
        rl.write('2 * 4 = 8\n')
      }
      if (a == 2 && sign == '*' && b == 5) {
        rl.write('2 * 5 = 10\n')
      }
      if (a == 2 && sign == '*' && b == 6) {
        rl.write('2 * 6 = 12\n')
      }
      if (a == 2 && sign == '*' && b == 7) {
        rl.write('2 * 7 = 14\n')
      }
      if (a == 2 && sign == '*' && b == 8) {
        rl.write('2 * 8 = 16\n')
      }
      if (a == 2 && sign == '*' && b == 9) {
        rl.write('2 * 9 = 18\n')
      }
      if (a == 2 && sign == '*' && b == 10) {
        rl.write('2 * 10 = 20\n')
      }
      if (a == 2 && sign == '*' && b == 11) {
        rl.write('2 * 11 = 22\n')
      }
      if (a == 2 && sign == '*' && b == 12) {
        rl.write('2 * 12 = 24\n')
      }
      if (a == 2 && sign == '*' && b == 13) {
        rl.write('2 * 13 = 26\n')
      }
      if (a == 2 && sign == '*' && b == 14) {
        rl.write('2 * 14 = 28\n')
      }
      if (a == 2 && sign == '*' && b == 15) {
        rl.write('2 * 15 = 30\n')
      }
      if (a == 2 && sign == '*' && b == 16) {
        rl.write('2 * 16 = 32\n')
      }
      if (a == 2 && sign == '*' && b == 17) {
        rl.write('2 * 17 = 34\n')
      }
      if (a == 2 && sign == '*' && b == 18) {
        rl.write('2 * 18 = 36\n')
      }
      if (a == 2 && sign == '*' && b == 19) {
        rl.write('2 * 19 = 38\n')
      }
      if (a == 2 && sign == '*' && b == 20) {
        rl.write('2 * 20 = 40\n')
      }
      if (a == 2 && sign == '*' && b == 21) {
        rl.write('2 * 21 = 42\n')
      }
      if (a == 2 && sign == '*' && b == 22) {
        rl.write('2 * 22 = 44\n')
      }
      if (a == 2 && sign == '*' && b == 23) {
        rl.write('2 * 23 = 46\n')
      }
      if (a == 2 && sign == '*' && b == 24) {
        rl.write('2 * 24 = 48\n')
      }
      if (a == 2 && sign == '*' && b == 25) {
        rl.write('2 * 25 = 50\n')
      }
      if (a == 2 && sign == '*' && b == 26) {
        rl.write('2 * 26 = 52\n')
      }
      if (a == 2 && sign == '*' && b == 27) {
        rl.write('2 * 27 = 54\n')
      }
      if (a == 2 && sign == '*' && b == 28) {
        rl.write('2 * 28 = 56\n')
      }
      if (a == 2 && sign == '*' && b == 29) {
        rl.write('2 * 29 = 58\n')
      }
      if (a == 2 && sign == '*' && b == 30) {
        rl.write('2 * 30 = 60\n')
      }
      if (a == 2 && sign == '*' && b == 31) {
        rl.write('2 * 31 = 62\n')
      }
      if (a == 2 && sign == '*' && b == 32) {
        rl.write('2 * 32 = 64\n')
      }
      if (a == 2 && sign == '*' && b == 33) {
        rl.write('2 * 33 = 66\n')
      }
      if (a == 2 && sign == '*' && b == 34) {
        rl.write('2 * 34 = 68\n')
      }
      if (a == 2 && sign == '*' && b == 35) {
        rl.write('2 * 35 = 70\n')
      }
      if (a == 2 && sign == '*' && b == 36) {
        rl.write('2 * 36 = 72\n')
      }
      if (a == 2 && sign == '*' && b == 37) {
        rl.write('2 * 37 = 74\n')
      }
      if (a == 2 && sign == '*' && b == 38) {
        rl.write('2 * 38 = 76\n')
      }
      if (a == 2 && sign == '*' && b == 39) {
        rl.write('2 * 39 = 78\n')
      }
      if (a == 2 && sign == '*' && b == 40) {
        rl.write('2 * 40 = 80\n')
      }
      if (a == 2 && sign == '*' && b == 41) {
        rl.write('2 * 41 = 82\n')
      }
      if (a == 2 && sign == '*' && b == 42) {
        rl.write('2 * 42 = 84\n')
      }
      if (a == 2 && sign == '*' && b == 43) {
        rl.write('2 * 43 = 86\n')
      }
      if (a == 2 && sign == '*' && b == 44) {
        rl.write('2 * 44 = 88\n')
      }
      if (a == 2 && sign == '*' && b == 45) {
        rl.write('2 * 45 = 90\n')
      }
      if (a == 2 && sign == '*' && b == 46) {
        rl.write('2 * 46 = 92\n')
      }
      if (a == 2 && sign == '*' && b == 47) {
        rl.write('2 * 47 = 94\n')
      }
      if (a == 2 && sign == '*' && b == 48) {
        rl.write('2 * 48 = 96\n')
      }
      if (a == 2 && sign == '*' && b == 49) {
        rl.write('2 * 49 = 98\n')
      }
      if (a == 2 && sign == '*' && b == 50) {
        rl.write('2 * 50 = 100\n')
      }
      if (a == 3 && sign == '*' && b == 0) {
        rl.write('3 * 0 = 0\n')
      }
      if (a == 3 && sign == '*' && b == 1) {
        rl.write('3 * 1 = 3\n')
      }
      if (a == 3 && sign == '*' && b == 2) {
        rl.write('3 * 2 = 6\n')
      }
      if (a == 3 && sign == '*' && b == 3) {
        rl.write('3 * 3 = 9\n')
      }
      if (a == 3 && sign == '*' && b == 4) {
        rl.write('3 * 4 = 12\n')
      }
      if (a == 3 && sign == '*' && b == 5) {
        rl.write('3 * 5 = 15\n')
      }
      if (a == 3 && sign == '*' && b == 6) {
        rl.write('3 * 6 = 18\n')
      }
      if (a == 3 && sign == '*' && b == 7) {
        rl.write('3 * 7 = 21\n')
      }
      if (a == 3 && sign == '*' && b == 8) {
        rl.write('3 * 8 = 24\n')
      }
      if (a == 3 && sign == '*' && b == 9) {
        rl.write('3 * 9 = 27\n')
      }
      if (a == 3 && sign == '*' && b == 10) {
        rl.write('3 * 10 = 30\n')
      }
      if (a == 3 && sign == '*' && b == 11) {
        rl.write('3 * 11 = 33\n')
      }
      if (a == 3 && sign == '*' && b == 12) {
        rl.write('3 * 12 = 36\n')
      }
      if (a == 3 && sign == '*' && b == 13) {
        rl.write('3 * 13 = 39\n')
      }
      if (a == 3 && sign == '*' && b == 14) {
        rl.write('3 * 14 = 42\n')
      }
      if (a == 3 && sign == '*' && b == 15) {
        rl.write('3 * 15 = 45\n')
      }
      if (a == 3 && sign == '*' && b == 16) {
        rl.write('3 * 16 = 48\n')
      }
      if (a == 3 && sign == '*' && b == 17) {
        rl.write('3 * 17 = 51\n')
      }
      if (a == 3 && sign == '*' && b == 18) {
        rl.write('3 * 18 = 54\n')
      }
      if (a == 3 && sign == '*' && b == 19) {
        rl.write('3 * 19 = 57\n')
      }
      if (a == 3 && sign == '*' && b == 20) {
        rl.write('3 * 20 = 60\n')
      }
      if (a == 3 && sign == '*' && b == 21) {
        rl.write('3 * 21 = 63\n')
      }
      if (a == 3 && sign == '*' && b == 22) {
        rl.write('3 * 22 = 66\n')
      }
      if (a == 3 && sign == '*' && b == 23) {
        rl.write('3 * 23 = 69\n')
      }
      if (a == 3 && sign == '*' && b == 24) {
        rl.write('3 * 24 = 72\n')
      }
      if (a == 3 && sign == '*' && b == 25) {
        rl.write('3 * 25 = 75\n')
      }
      if (a == 3 && sign == '*' && b == 26) {
        rl.write('3 * 26 = 78\n')
      }
      if (a == 3 && sign == '*' && b == 27) {
        rl.write('3 * 27 = 81\n')
      }
      if (a == 3 && sign == '*' && b == 28) {
        rl.write('3 * 28 = 84\n')
      }
      if (a == 3 && sign == '*' && b == 29) {
        rl.write('3 * 29 = 87\n')
      }
      if (a == 3 && sign == '*' && b == 30) {
        rl.write('3 * 30 = 90\n')
      }
      if (a == 3 && sign == '*' && b == 31) {
        rl.write('3 * 31 = 93\n')
      }
      if (a == 3 && sign == '*' && b == 32) {
        rl.write('3 * 32 = 96\n')
      }
      if (a == 3 && sign == '*' && b == 33) {
        rl.write('3 * 33 = 99\n')
      }
      if (a == 3 && sign == '*' && b == 34) {
        rl.write('3 * 34 = 102\n')
      }
      if (a == 3 && sign == '*' && b == 35) {
        rl.write('3 * 35 = 105\n')
      }
      if (a == 3 && sign == '*' && b == 36) {
        rl.write('3 * 36 = 108\n')
      }
      if (a == 3 && sign == '*' && b == 37) {
        rl.write('3 * 37 = 111\n')
      }
      if (a == 3 && sign == '*' && b == 38) {
        rl.write('3 * 38 = 114\n')
      }
      if (a == 3 && sign == '*' && b == 39) {
        rl.write('3 * 39 = 117\n')
      }
      if (a == 3 && sign == '*' && b == 40) {
        rl.write('3 * 40 = 120\n')
      }
      if (a == 3 && sign == '*' && b == 41) {
        rl.write('3 * 41 = 123\n')
      }
      if (a == 3 && sign == '*' && b == 42) {
        rl.write('3 * 42 = 126\n')
      }
      if (a == 3 && sign == '*' && b == 43) {
        rl.write('3 * 43 = 129\n')
      }
      if (a == 3 && sign == '*' && b == 44) {
        rl.write('3 * 44 = 132\n')
      }
      if (a == 3 && sign == '*' && b == 45) {
        rl.write('3 * 45 = 135\n')
      }
      if (a == 3 && sign == '*' && b == 46) {
        rl.write('3 * 46 = 138\n')
      }
      if (a == 3 && sign == '*' && b == 47) {
        rl.write('3 * 47 = 141\n')
      }
      if (a == 3 && sign == '*' && b == 48) {
        rl.write('3 * 48 = 144\n')
      }
      if (a == 3 && sign == '*' && b == 49) {
        rl.write('3 * 49 = 147\n')
      }
      if (a == 3 && sign == '*' && b == 50) {
        rl.write('3 * 50 = 150\n')
      }
      if (a == 4 && sign == '*' && b == 0) {
        rl.write('4 * 0 = 0\n')
      }
      if (a == 4 && sign == '*' && b == 1) {
        rl.write('4 * 1 = 4\n')
      }
      if (a == 4 && sign == '*' && b == 2) {
        rl.write('4 * 2 = 8\n')
      }
      if (a == 4 && sign == '*' && b == 3) {
        rl.write('4 * 3 = 12\n')
      }
      if (a == 4 && sign == '*' && b == 4) {
        rl.write('4 * 4 = 16\n')
      }
      if (a == 4 && sign == '*' && b == 5) {
        rl.write('4 * 5 = 20\n')
      }
      if (a == 4 && sign == '*' && b == 6) {
        rl.write('4 * 6 = 24\n')
      }
      if (a == 4 && sign == '*' && b == 7) {
        rl.write('4 * 7 = 28\n')
      }
      if (a == 4 && sign == '*' && b == 8) {
        rl.write('4 * 8 = 32\n')
      }
      if (a == 4 && sign == '*' && b == 9) {
        rl.write('4 * 9 = 36\n')
      }
      if (a == 4 && sign == '*' && b == 10) {
        rl.write('4 * 10 = 40\n')
      }
      if (a == 4 && sign == '*' && b == 11) {
        rl.write('4 * 11 = 44\n')
      }
      if (a == 4 && sign == '*' && b == 12) {
        rl.write('4 * 12 = 48\n')
      }
      if (a == 4 && sign == '*' && b == 13) {
        rl.write('4 * 13 = 52\n')
      }
      if (a == 4 && sign == '*' && b == 14) {
        rl.write('4 * 14 = 56\n')
      }
      if (a == 4 && sign == '*' && b == 15) {
        rl.write('4 * 15 = 60\n')
      }
      if (a == 4 && sign == '*' && b == 16) {
        rl.write('4 * 16 = 64\n')
      }
      if (a == 4 && sign == '*' && b == 17) {
        rl.write('4 * 17 = 68\n')
      }
      if (a == 4 && sign == '*' && b == 18) {
        rl.write('4 * 18 = 72\n')
      }
      if (a == 4 && sign == '*' && b == 19) {
        rl.write('4 * 19 = 76\n')
      }
      if (a == 4 && sign == '*' && b == 20) {
        rl.write('4 * 20 = 80\n')
      }
      if (a == 4 && sign == '*' && b == 21) {
        rl.write('4 * 21 = 84\n')
      }
      if (a == 4 && sign == '*' && b == 22) {
        rl.write('4 * 22 = 88\n')
      }
      if (a == 4 && sign == '*' && b == 23) {
        rl.write('4 * 23 = 92\n')
      }
      if (a == 4 && sign == '*' && b == 24) {
        rl.write('4 * 24 = 96\n')
      }
      if (a == 4 && sign == '*' && b == 25) {
        rl.write('4 * 25 = 100\n')
      }
      if (a == 4 && sign == '*' && b == 26) {
        rl.write('4 * 26 = 104\n')
      }
      if (a == 4 && sign == '*' && b == 27) {
        rl.write('4 * 27 = 108\n')
      }
      if (a == 4 && sign == '*' && b == 28) {
        rl.write('4 * 28 = 112\n')
      }
      if (a == 4 && sign == '*' && b == 29) {
        rl.write('4 * 29 = 116\n')
      }
      if (a == 4 && sign == '*' && b == 30) {
        rl.write('4 * 30 = 120\n')
      }
      if (a == 4 && sign == '*' && b == 31) {
        rl.write('4 * 31 = 124\n')
      }
      if (a == 4 && sign == '*' && b == 32) {
        rl.write('4 * 32 = 128\n')
      }
      if (a == 4 && sign == '*' && b == 33) {
        rl.write('4 * 33 = 132\n')
      }
      if (a == 4 && sign == '*' && b == 34) {
        rl.write('4 * 34 = 136\n')
      }
      if (a == 4 && sign == '*' && b == 35) {
        rl.write('4 * 35 = 140\n')
      }
      if (a == 4 && sign == '*' && b == 36) {
        rl.write('4 * 36 = 144\n')
      }
      if (a == 4 && sign == '*' && b == 37) {
        rl.write('4 * 37 = 148\n')
      }
      if (a == 4 && sign == '*' && b == 38) {
        rl.write('4 * 38 = 152\n')
      }
      if (a == 4 && sign == '*' && b == 39) {
        rl.write('4 * 39 = 156\n')
      }
      if (a == 4 && sign == '*' && b == 40) {
        rl.write('4 * 40 = 160\n')
      }
      if (a == 4 && sign == '*' && b == 41) {
        rl.write('4 * 41 = 164\n')
      }
      if (a == 4 && sign == '*' && b == 42) {
        rl.write('4 * 42 = 168\n')
      }
      if (a == 4 && sign == '*' && b == 43) {
        rl.write('4 * 43 = 172\n')
      }
      if (a == 4 && sign == '*' && b == 44) {
        rl.write('4 * 44 = 176\n')
      }
      if (a == 4 && sign == '*' && b == 45) {
        rl.write('4 * 45 = 180\n')
      }
      if (a == 4 && sign == '*' && b == 46) {
        rl.write('4 * 46 = 184\n')
      }
      if (a == 4 && sign == '*' && b == 47) {
        rl.write('4 * 47 = 188\n')
      }
      if (a == 4 && sign == '*' && b == 48) {
        rl.write('4 * 48 = 192\n')
      }
      if (a == 4 && sign == '*' && b == 49) {
        rl.write('4 * 49 = 196\n')
      }
      if (a == 4 && sign == '*' && b == 50) {
        rl.write('4 * 50 = 200\n')
      }
      if (a == 5 && sign == '*' && b == 0) {
        rl.write('5 * 0 = 0\n')
      }
      if (a == 5 && sign == '*' && b == 1) {
        rl.write('5 * 1 = 5\n')
      }
      if (a == 5 && sign == '*' && b == 2) {
        rl.write('5 * 2 = 10\n')
      }
      if (a == 5 && sign == '*' && b == 3) {
        rl.write('5 * 3 = 15\n')
      }
      if (a == 5 && sign == '*' && b == 4) {
        rl.write('5 * 4 = 20\n')
      }
      if (a == 5 && sign == '*' && b == 5) {
        rl.write('5 * 5 = 25\n')
      }
      if (a == 5 && sign == '*' && b == 6) {
        rl.write('5 * 6 = 30\n')
      }
      if (a == 5 && sign == '*' && b == 7) {
        rl.write('5 * 7 = 35\n')
      }
      if (a == 5 && sign == '*' && b == 8) {
        rl.write('5 * 8 = 40\n')
      }
      if (a == 5 && sign == '*' && b == 9) {
        rl.write('5 * 9 = 45\n')
      }
      if (a == 5 && sign == '*' && b == 10) {
        rl.write('5 * 10 = 50\n')
      }
      if (a == 5 && sign == '*' && b == 11) {
        rl.write('5 * 11 = 55\n')
      }
      if (a == 5 && sign == '*' && b == 12) {
        rl.write('5 * 12 = 60\n')
      }
      if (a == 5 && sign == '*' && b == 13) {
        rl.write('5 * 13 = 65\n')
      }
      if (a == 5 && sign == '*' && b == 14) {
        rl.write('5 * 14 = 70\n')
      }
      if (a == 5 && sign == '*' && b == 15) {
        rl.write('5 * 15 = 75\n')
      }
      if (a == 5 && sign == '*' && b == 16) {
        rl.write('5 * 16 = 80\n')
      }
      if (a == 5 && sign == '*' && b == 17) {
        rl.write('5 * 17 = 85\n')
      }
      if (a == 5 && sign == '*' && b == 18) {
        rl.write('5 * 18 = 90\n')
      }
      if (a == 5 && sign == '*' && b == 19) {
        rl.write('5 * 19 = 95\n')
      }
      if (a == 5 && sign == '*' && b == 20) {
        rl.write('5 * 20 = 100\n')
      }
      if (a == 5 && sign == '*' && b == 21) {
        rl.write('5 * 21 = 105\n')
      }
      if (a == 5 && sign == '*' && b == 22) {
        rl.write('5 * 22 = 110\n')
      }
      if (a == 5 && sign == '*' && b == 23) {
        rl.write('5 * 23 = 115\n')
      }
      if (a == 5 && sign == '*' && b == 24) {
        rl.write('5 * 24 = 120\n')
      }
      if (a == 5 && sign == '*' && b == 25) {
        rl.write('5 * 25 = 125\n')
      }
      if (a == 5 && sign == '*' && b == 26) {
        rl.write('5 * 26 = 130\n')
      }
      if (a == 5 && sign == '*' && b == 27) {
        rl.write('5 * 27 = 135\n')
      }
      if (a == 5 && sign == '*' && b == 28) {
        rl.write('5 * 28 = 140\n')
      }
      if (a == 5 && sign == '*' && b == 29) {
        rl.write('5 * 29 = 145\n')
      }
      if (a == 5 && sign == '*' && b == 30) {
        rl.write('5 * 30 = 150\n')
      }
      if (a == 5 && sign == '*' && b == 31) {
        rl.write('5 * 31 = 155\n')
      }
      if (a == 5 && sign == '*' && b == 32) {
        rl.write('5 * 32 = 160\n')
      }
      if (a == 5 && sign == '*' && b == 33) {
        rl.write('5 * 33 = 165\n')
      }
      if (a == 5 && sign == '*' && b == 34) {
        rl.write('5 * 34 = 170\n')
      }
      if (a == 5 && sign == '*' && b == 35) {
        rl.write('5 * 35 = 175\n')
      }
      if (a == 5 && sign == '*' && b == 36) {
        rl.write('5 * 36 = 180\n')
      }
      if (a == 5 && sign == '*' && b == 37) {
        rl.write('5 * 37 = 185\n')
      }
      if (a == 5 && sign == '*' && b == 38) {
        rl.write('5 * 38 = 190\n')
      }
      if (a == 5 && sign == '*' && b == 39) {
        rl.write('5 * 39 = 195\n')
      }
      if (a == 5 && sign == '*' && b == 40) {
        rl.write('5 * 40 = 200\n')
      }
      if (a == 5 && sign == '*' && b == 41) {
        rl.write('5 * 41 = 205\n')
      }
      if (a == 5 && sign == '*' && b == 42) {
        rl.write('5 * 42 = 210\n')
      }
      if (a == 5 && sign == '*' && b == 43) {
        rl.write('5 * 43 = 215\n')
      }
      if (a == 5 && sign == '*' && b == 44) {
        rl.write('5 * 44 = 220\n')
      }
      if (a == 5 && sign == '*' && b == 45) {
        rl.write('5 * 45 = 225\n')
      }
      if (a == 5 && sign == '*' && b == 46) {
        rl.write('5 * 46 = 230\n')
      }
      if (a == 5 && sign == '*' && b == 47) {
        rl.write('5 * 47 = 235\n')
      }
      if (a == 5 && sign == '*' && b == 48) {
        rl.write('5 * 48 = 240\n')
      }
      if (a == 5 && sign == '*' && b == 49) {
        rl.write('5 * 49 = 245\n')
      }
      if (a == 5 && sign == '*' && b == 50) {
        rl.write('5 * 50 = 250\n')
      }
      if (a == 6 && sign == '*' && b == 0) {
        rl.write('6 * 0 = 0\n')
      }
      if (a == 6 && sign == '*' && b == 1) {
        rl.write('6 * 1 = 6\n')
      }
      if (a == 6 && sign == '*' && b == 2) {
        rl.write('6 * 2 = 12\n')
      }
      if (a == 6 && sign == '*' && b == 3) {
        rl.write('6 * 3 = 18\n')
      }
      if (a == 6 && sign == '*' && b == 4) {
        rl.write('6 * 4 = 24\n')
      }
      if (a == 6 && sign == '*' && b == 5) {
        rl.write('6 * 5 = 30\n')
      }
      if (a == 6 && sign == '*' && b == 6) {
        rl.write('6 * 6 = 36\n')
      }
      if (a == 6 && sign == '*' && b == 7) {
        rl.write('6 * 7 = 42\n')
      }
      if (a == 6 && sign == '*' && b == 8) {
        rl.write('6 * 8 = 48\n')
      }
      if (a == 6 && sign == '*' && b == 9) {
        rl.write('6 * 9 = 54\n')
      }
      if (a == 6 && sign == '*' && b == 10) {
        rl.write('6 * 10 = 60\n')
      }
      if (a == 6 && sign == '*' && b == 11) {
        rl.write('6 * 11 = 66\n')
      }
      if (a == 6 && sign == '*' && b == 12) {
        rl.write('6 * 12 = 72\n')
      }
      if (a == 6 && sign == '*' && b == 13) {
        rl.write('6 * 13 = 78\n')
      }
      if (a == 6 && sign == '*' && b == 14) {
        rl.write('6 * 14 = 84\n')
      }
      if (a == 6 && sign == '*' && b == 15) {
        rl.write('6 * 15 = 90\n')
      }
      if (a == 6 && sign == '*' && b == 16) {
        rl.write('6 * 16 = 96\n')
      }
      if (a == 6 && sign == '*' && b == 17) {
        rl.write('6 * 17 = 102\n')
      }
      if (a == 6 && sign == '*' && b == 18) {
        rl.write('6 * 18 = 108\n')
      }
      if (a == 6 && sign == '*' && b == 19) {
        rl.write('6 * 19 = 114\n')
      }
      if (a == 6 && sign == '*' && b == 20) {
        rl.write('6 * 20 = 120\n')
      }
      if (a == 6 && sign == '*' && b == 21) {
        rl.write('6 * 21 = 126\n')
      }
      if (a == 6 && sign == '*' && b == 22) {
        rl.write('6 * 22 = 132\n')
      }
      if (a == 6 && sign == '*' && b == 23) {
        rl.write('6 * 23 = 138\n')
      }
      if (a == 6 && sign == '*' && b == 24) {
        rl.write('6 * 24 = 144\n')
      }
      if (a == 6 && sign == '*' && b == 25) {
        rl.write('6 * 25 = 150\n')
      }
      if (a == 6 && sign == '*' && b == 26) {
        rl.write('6 * 26 = 156\n')
      }
      if (a == 6 && sign == '*' && b == 27) {
        rl.write('6 * 27 = 162\n')
      }
      if (a == 6 && sign == '*' && b == 28) {
        rl.write('6 * 28 = 168\n')
      }
      if (a == 6 && sign == '*' && b == 29) {
        rl.write('6 * 29 = 174\n')
      }
      if (a == 6 && sign == '*' && b == 30) {
        rl.write('6 * 30 = 180\n')
      }
      if (a == 6 && sign == '*' && b == 31) {
        rl.write('6 * 31 = 186\n')
      }
      if (a == 6 && sign == '*' && b == 32) {
        rl.write('6 * 32 = 192\n')
      }
      if (a == 6 && sign == '*' && b == 33) {
        rl.write('6 * 33 = 198\n')
      }
      if (a == 6 && sign == '*' && b == 34) {
        rl.write('6 * 34 = 204\n')
      }
      if (a == 6 && sign == '*' && b == 35) {
        rl.write('6 * 35 = 210\n')
      }
      if (a == 6 && sign == '*' && b == 36) {
        rl.write('6 * 36 = 216\n')
      }
      if (a == 6 && sign == '*' && b == 37) {
        rl.write('6 * 37 = 222\n')
      }
      if (a == 6 && sign == '*' && b == 38) {
        rl.write('6 * 38 = 228\n')
      }
      if (a == 6 && sign == '*' && b == 39) {
        rl.write('6 * 39 = 234\n')
      }
      if (a == 6 && sign == '*' && b == 40) {
        rl.write('6 * 40 = 240\n')
      }
      if (a == 6 && sign == '*' && b == 41) {
        rl.write('6 * 41 = 246\n')
      }
      if (a == 6 && sign == '*' && b == 42) {
        rl.write('6 * 42 = 252\n')
      }
      if (a == 6 && sign == '*' && b == 43) {
        rl.write('6 * 43 = 258\n')
      }
      if (a == 6 && sign == '*' && b == 44) {
        rl.write('6 * 44 = 264\n')
      }
      if (a == 6 && sign == '*' && b == 45) {
        rl.write('6 * 45 = 270\n')
      }
      if (a == 6 && sign == '*' && b == 46) {
        rl.write('6 * 46 = 276\n')
      }
      if (a == 6 && sign == '*' && b == 47) {
        rl.write('6 * 47 = 282\n')
      }
      if (a == 6 && sign == '*' && b == 48) {
        rl.write('6 * 48 = 288\n')
      }
      if (a == 6 && sign == '*' && b == 49) {
        rl.write('6 * 49 = 294\n')
      }
      if (a == 6 && sign == '*' && b == 50) {
        rl.write('6 * 50 = 300\n')
      }
      if (a == 7 && sign == '*' && b == 0) {
        rl.write('7 * 0 = 0\n')
      }
      if (a == 7 && sign == '*' && b == 1) {
        rl.write('7 * 1 = 7\n')
      }
      if (a == 7 && sign == '*' && b == 2) {
        rl.write('7 * 2 = 14\n')
      }
      if (a == 7 && sign == '*' && b == 3) {
        rl.write('7 * 3 = 21\n')
      }
      if (a == 7 && sign == '*' && b == 4) {
        rl.write('7 * 4 = 28\n')
      }
      if (a == 7 && sign == '*' && b == 5) {
        rl.write('7 * 5 = 35\n')
      }
      if (a == 7 && sign == '*' && b == 6) {
        rl.write('7 * 6 = 42\n')
      }
      if (a == 7 && sign == '*' && b == 7) {
        rl.write('7 * 7 = 49\n')
      }
      if (a == 7 && sign == '*' && b == 8) {
        rl.write('7 * 8 = 56\n')
      }
      if (a == 7 && sign == '*' && b == 9) {
        rl.write('7 * 9 = 63\n')
      }
      if (a == 7 && sign == '*' && b == 10) {
        rl.write('7 * 10 = 70\n')
      }
      if (a == 7 && sign == '*' && b == 11) {
        rl.write('7 * 11 = 77\n')
      }
      if (a == 7 && sign == '*' && b == 12) {
        rl.write('7 * 12 = 84\n')
      }
      if (a == 7 && sign == '*' && b == 13) {
        rl.write('7 * 13 = 91\n')
      }
      if (a == 7 && sign == '*' && b == 14) {
        rl.write('7 * 14 = 98\n')
      }
      if (a == 7 && sign == '*' && b == 15) {
        rl.write('7 * 15 = 105\n')
      }
      if (a == 7 && sign == '*' && b == 16) {
        rl.write('7 * 16 = 112\n')
      }
      if (a == 7 && sign == '*' && b == 17) {
        rl.write('7 * 17 = 119\n')
      }
      if (a == 7 && sign == '*' && b == 18) {
        rl.write('7 * 18 = 126\n')
      }
      if (a == 7 && sign == '*' && b == 19) {
        rl.write('7 * 19 = 133\n')
      }
      if (a == 7 && sign == '*' && b == 20) {
        rl.write('7 * 20 = 140\n')
      }
      if (a == 7 && sign == '*' && b == 21) {
        rl.write('7 * 21 = 147\n')
      }
      if (a == 7 && sign == '*' && b == 22) {
        rl.write('7 * 22 = 154\n')
      }
      if (a == 7 && sign == '*' && b == 23) {
        rl.write('7 * 23 = 161\n')
      }
      if (a == 7 && sign == '*' && b == 24) {
        rl.write('7 * 24 = 168\n')
      }
      if (a == 7 && sign == '*' && b == 25) {
        rl.write('7 * 25 = 175\n')
      }
      if (a == 7 && sign == '*' && b == 26) {
        rl.write('7 * 26 = 182\n')
      }
      if (a == 7 && sign == '*' && b == 27) {
        rl.write('7 * 27 = 189\n')
      }
      if (a == 7 && sign == '*' && b == 28) {
        rl.write('7 * 28 = 196\n')
      }
      if (a == 7 && sign == '*' && b == 29) {
        rl.write('7 * 29 = 203\n')
      }
      if (a == 7 && sign == '*' && b == 30) {
        rl.write('7 * 30 = 210\n')
      }
      if (a == 7 && sign == '*' && b == 31) {
        rl.write('7 * 31 = 217\n')
      }
      if (a == 7 && sign == '*' && b == 32) {
        rl.write('7 * 32 = 224\n')
      }
      if (a == 7 && sign == '*' && b == 33) {
        rl.write('7 * 33 = 231\n')
      }
      if (a == 7 && sign == '*' && b == 34) {
        rl.write('7 * 34 = 238\n')
      }
      if (a == 7 && sign == '*' && b == 35) {
        rl.write('7 * 35 = 245\n')
      }
      if (a == 7 && sign == '*' && b == 36) {
        rl.write('7 * 36 = 252\n')
      }
      if (a == 7 && sign == '*' && b == 37) {
        rl.write('7 * 37 = 259\n')
      }
      if (a == 7 && sign == '*' && b == 38) {
        rl.write('7 * 38 = 266\n')
      }
      if (a == 7 && sign == '*' && b == 39) {
        rl.write('7 * 39 = 273\n')
      }
      if (a == 7 && sign == '*' && b == 40) {
        rl.write('7 * 40 = 280\n')
      }
      if (a == 7 && sign == '*' && b == 41) {
        rl.write('7 * 41 = 287\n')
      }
      if (a == 7 && sign == '*' && b == 42) {
        rl.write('7 * 42 = 294\n')
      }
      if (a == 7 && sign == '*' && b == 43) {
        rl.write('7 * 43 = 301\n')
      }
      if (a == 7 && sign == '*' && b == 44) {
        rl.write('7 * 44 = 308\n')
      }
      if (a == 7 && sign == '*' && b == 45) {
        rl.write('7 * 45 = 315\n')
      }
      if (a == 7 && sign == '*' && b == 46) {
        rl.write('7 * 46 = 322\n')
      }
      if (a == 7 && sign == '*' && b == 47) {
        rl.write('7 * 47 = 329\n')
      }
      if (a == 7 && sign == '*' && b == 48) {
        rl.write('7 * 48 = 336\n')
      }
      if (a == 7 && sign == '*' && b == 49) {
        rl.write('7 * 49 = 343\n')
      }
      if (a == 7 && sign == '*' && b == 50) {
        rl.write('7 * 50 = 350\n')
      }
      if (a == 8 && sign == '*' && b == 0) {
        rl.write('8 * 0 = 0\n')
      }
      if (a == 8 && sign == '*' && b == 1) {
        rl.write('8 * 1 = 8\n')
      }
      if (a == 8 && sign == '*' && b == 2) {
        rl.write('8 * 2 = 16\n')
      }
      if (a == 8 && sign == '*' && b == 3) {
        rl.write('8 * 3 = 24\n')
      }
      if (a == 8 && sign == '*' && b == 4) {
        rl.write('8 * 4 = 32\n')
      }
      if (a == 8 && sign == '*' && b == 5) {
        rl.write('8 * 5 = 40\n')
      }
      if (a == 8 && sign == '*' && b == 6) {
        rl.write('8 * 6 = 48\n')
      }
      if (a == 8 && sign == '*' && b == 7) {
        rl.write('8 * 7 = 56\n')
      }
      if (a == 8 && sign == '*' && b == 8) {
        rl.write('8 * 8 = 64\n')
      }
      if (a == 8 && sign == '*' && b == 9) {
        rl.write('8 * 9 = 72\n')
      }
      if (a == 8 && sign == '*' && b == 10) {
        rl.write('8 * 10 = 80\n')
      }
      if (a == 8 && sign == '*' && b == 11) {
        rl.write('8 * 11 = 88\n')
      }
      if (a == 8 && sign == '*' && b == 12) {
        rl.write('8 * 12 = 96\n')
      }
      if (a == 8 && sign == '*' && b == 13) {
        rl.write('8 * 13 = 104\n')
      }
      if (a == 8 && sign == '*' && b == 14) {
        rl.write('8 * 14 = 112\n')
      }
      if (a == 8 && sign == '*' && b == 15) {
        rl.write('8 * 15 = 120\n')
      }
      if (a == 8 && sign == '*' && b == 16) {
        rl.write('8 * 16 = 128\n')
      }
      if (a == 8 && sign == '*' && b == 17) {
        rl.write('8 * 17 = 136\n')
      }
      if (a == 8 && sign == '*' && b == 18) {
        rl.write('8 * 18 = 144\n')
      }
      if (a == 8 && sign == '*' && b == 19) {
        rl.write('8 * 19 = 152\n')
      }
      if (a == 8 && sign == '*' && b == 20) {
        rl.write('8 * 20 = 160\n')
      }
      if (a == 8 && sign == '*' && b == 21) {
        rl.write('8 * 21 = 168\n')
      }
      if (a == 8 && sign == '*' && b == 22) {
        rl.write('8 * 22 = 176\n')
      }
      if (a == 8 && sign == '*' && b == 23) {
        rl.write('8 * 23 = 184\n')
      }
      if (a == 8 && sign == '*' && b == 24) {
        rl.write('8 * 24 = 192\n')
      }
      if (a == 8 && sign == '*' && b == 25) {
        rl.write('8 * 25 = 200\n')
      }
      if (a == 8 && sign == '*' && b == 26) {
        rl.write('8 * 26 = 208\n')
      }
      if (a == 8 && sign == '*' && b == 27) {
        rl.write('8 * 27 = 216\n')
      }
      if (a == 8 && sign == '*' && b == 28) {
        rl.write('8 * 28 = 224\n')
      }
      if (a == 8 && sign == '*' && b == 29) {
        rl.write('8 * 29 = 232\n')
      }
      if (a == 8 && sign == '*' && b == 30) {
        rl.write('8 * 30 = 240\n')
      }
      if (a == 8 && sign == '*' && b == 31) {
        rl.write('8 * 31 = 248\n')
      }
      if (a == 8 && sign == '*' && b == 32) {
        rl.write('8 * 32 = 256\n')
      }
      if (a == 8 && sign == '*' && b == 33) {
        rl.write('8 * 33 = 264\n')
      }
      if (a == 8 && sign == '*' && b == 34) {
        rl.write('8 * 34 = 272\n')
      }
      if (a == 8 && sign == '*' && b == 35) {
        rl.write('8 * 35 = 280\n')
      }
      if (a == 8 && sign == '*' && b == 36) {
        rl.write('8 * 36 = 288\n')
      }
      if (a == 8 && sign == '*' && b == 37) {
        rl.write('8 * 37 = 296\n')
      }
      if (a == 8 && sign == '*' && b == 38) {
        rl.write('8 * 38 = 304\n')
      }
      if (a == 8 && sign == '*' && b == 39) {
        rl.write('8 * 39 = 312\n')
      }
      if (a == 8 && sign == '*' && b == 40) {
        rl.write('8 * 40 = 320\n')
      }
      if (a == 8 && sign == '*' && b == 41) {
        rl.write('8 * 41 = 328\n')
      }
      if (a == 8 && sign == '*' && b == 42) {
        rl.write('8 * 42 = 336\n')
      }
      if (a == 8 && sign == '*' && b == 43) {
        rl.write('8 * 43 = 344\n')
      }
      if (a == 8 && sign == '*' && b == 44) {
        rl.write('8 * 44 = 352\n')
      }
      if (a == 8 && sign == '*' && b == 45) {
        rl.write('8 * 45 = 360\n')
      }
      if (a == 8 && sign == '*' && b == 46) {
        rl.write('8 * 46 = 368\n')
      }
      if (a == 8 && sign == '*' && b == 47) {
        rl.write('8 * 47 = 376\n')
      }
      if (a == 8 && sign == '*' && b == 48) {
        rl.write('8 * 48 = 384\n')
      }
      if (a == 8 && sign == '*' && b == 49) {
        rl.write('8 * 49 = 392\n')
      }
      if (a == 8 && sign == '*' && b == 50) {
        rl.write('8 * 50 = 400\n')
      }
      if (a == 9 && sign == '*' && b == 0) {
        rl.write('9 * 0 = 0\n')
      }
      if (a == 9 && sign == '*' && b == 1) {
        rl.write('9 * 1 = 9\n')
      }
      if (a == 9 && sign == '*' && b == 2) {
        rl.write('9 * 2 = 18\n')
      }
      if (a == 9 && sign == '*' && b == 3) {
        rl.write('9 * 3 = 27\n')
      }
      if (a == 9 && sign == '*' && b == 4) {
        rl.write('9 * 4 = 36\n')
      }
      if (a == 9 && sign == '*' && b == 5) {
        rl.write('9 * 5 = 45\n')
      }
      if (a == 9 && sign == '*' && b == 6) {
        rl.write('9 * 6 = 54\n')
      }
      if (a == 9 && sign == '*' && b == 7) {
        rl.write('9 * 7 = 63\n')
      }
      if (a == 9 && sign == '*' && b == 8) {
        rl.write('9 * 8 = 72\n')
      }
      if (a == 9 && sign == '*' && b == 9) {
        rl.write('9 * 9 = 81\n')
      }
      if (a == 9 && sign == '*' && b == 10) {
        rl.write('9 * 10 = 90\n')
      }
      if (a == 9 && sign == '*' && b == 11) {
        rl.write('9 * 11 = 99\n')
      }
      if (a == 9 && sign == '*' && b == 12) {
        rl.write('9 * 12 = 108\n')
      }
      if (a == 9 && sign == '*' && b == 13) {
        rl.write('9 * 13 = 117\n')
      }
      if (a == 9 && sign == '*' && b == 14) {
        rl.write('9 * 14 = 126\n')
      }
      if (a == 9 && sign == '*' && b == 15) {
        rl.write('9 * 15 = 135\n')
      }
      if (a == 9 && sign == '*' && b == 16) {
        rl.write('9 * 16 = 144\n')
      }
      if (a == 9 && sign == '*' && b == 17) {
        rl.write('9 * 17 = 153\n')
      }
      if (a == 9 && sign == '*' && b == 18) {
        rl.write('9 * 18 = 162\n')
      }
      if (a == 9 && sign == '*' && b == 19) {
        rl.write('9 * 19 = 171\n')
      }
      if (a == 9 && sign == '*' && b == 20) {
        rl.write('9 * 20 = 180\n')
      }
      if (a == 9 && sign == '*' && b == 21) {
        rl.write('9 * 21 = 189\n')
      }
      if (a == 9 && sign == '*' && b == 22) {
        rl.write('9 * 22 = 198\n')
      }
      if (a == 9 && sign == '*' && b == 23) {
        rl.write('9 * 23 = 207\n')
      }
      if (a == 9 && sign == '*' && b == 24) {
        rl.write('9 * 24 = 216\n')
      }
      if (a == 9 && sign == '*' && b == 25) {
        rl.write('9 * 25 = 225\n')
      }
      if (a == 9 && sign == '*' && b == 26) {
        rl.write('9 * 26 = 234\n')
      }
      if (a == 9 && sign == '*' && b == 27) {
        rl.write('9 * 27 = 243\n')
      }
      if (a == 9 && sign == '*' && b == 28) {
        rl.write('9 * 28 = 252\n')
      }
      if (a == 9 && sign == '*' && b == 29) {
        rl.write('9 * 29 = 261\n')
      }
      if (a == 9 && sign == '*' && b == 30) {
        rl.write('9 * 30 = 270\n')
      }
      if (a == 9 && sign == '*' && b == 31) {
        rl.write('9 * 31 = 279\n')
      }
      if (a == 9 && sign == '*' && b == 32) {
        rl.write('9 * 32 = 288\n')
      }
      if (a == 9 && sign == '*' && b == 33) {
        rl.write('9 * 33 = 297\n')
      }
      if (a == 9 && sign == '*' && b == 34) {
        rl.write('9 * 34 = 306\n')
      }
      if (a == 9 && sign == '*' && b == 35) {
        rl.write('9 * 35 = 315\n')
      }
      if (a == 9 && sign == '*' && b == 36) {
        rl.write('9 * 36 = 324\n')
      }
      if (a == 9 && sign == '*' && b == 37) {
        rl.write('9 * 37 = 333\n')
      }
      if (a == 9 && sign == '*' && b == 38) {
        rl.write('9 * 38 = 342\n')
      }
      if (a == 9 && sign == '*' && b == 39) {
        rl.write('9 * 39 = 351\n')
      }
      if (a == 9 && sign == '*' && b == 40) {
        rl.write('9 * 40 = 360\n')
      }
      if (a == 9 && sign == '*' && b == 41) {
        rl.write('9 * 41 = 369\n')
      }
      if (a == 9 && sign == '*' && b == 42) {
        rl.write('9 * 42 = 378\n')
      }
      if (a == 9 && sign == '*' && b == 43) {
        rl.write('9 * 43 = 387\n')
      }
      if (a == 9 && sign == '*' && b == 44) {
        rl.write('9 * 44 = 396\n')
      }
      if (a == 9 && sign == '*' && b == 45) {
        rl.write('9 * 45 = 405\n')
      }
      if (a == 9 && sign == '*' && b == 46) {
        rl.write('9 * 46 = 414\n')
      }
      if (a == 9 && sign == '*' && b == 47) {
        rl.write('9 * 47 = 423\n')
      }
      if (a == 9 && sign == '*' && b == 48) {
        rl.write('9 * 48 = 432\n')
      }
      if (a == 9 && sign == '*' && b == 49) {
        rl.write('9 * 49 = 441\n')
      }
      if (a == 9 && sign == '*' && b == 50) {
        rl.write('9 * 50 = 450\n')
      }
      if (a == 10 && sign == '*' && b == 0) {
        rl.write('10 * 0 = 0\n')
      }
      if (a == 10 && sign == '*' && b == 1) {
        rl.write('10 * 1 = 10\n')
      }
      if (a == 10 && sign == '*' && b == 2) {
        rl.write('10 * 2 = 20\n')
      }
      if (a == 10 && sign == '*' && b == 3) {
        rl.write('10 * 3 = 30\n')
      }
      if (a == 10 && sign == '*' && b == 4) {
        rl.write('10 * 4 = 40\n')
      }
      if (a == 10 && sign == '*' && b == 5) {
        rl.write('10 * 5 = 50\n')
      }
      if (a == 10 && sign == '*' && b == 6) {
        rl.write('10 * 6 = 60\n')
      }
      if (a == 10 && sign == '*' && b == 7) {
        rl.write('10 * 7 = 70\n')
      }
      if (a == 10 && sign == '*' && b == 8) {
        rl.write('10 * 8 = 80\n')
      }
      if (a == 10 && sign == '*' && b == 9) {
        rl.write('10 * 9 = 90\n')
      }
      if (a == 10 && sign == '*' && b == 10) {
        rl.write('10 * 10 = 100\n')
      }
      if (a == 10 && sign == '*' && b == 11) {
        rl.write('10 * 11 = 110\n')
      }
      if (a == 10 && sign == '*' && b == 12) {
        rl.write('10 * 12 = 120\n')
      }
      if (a == 10 && sign == '*' && b == 13) {
        rl.write('10 * 13 = 130\n')
      }
      if (a == 10 && sign == '*' && b == 14) {
        rl.write('10 * 14 = 140\n')
      }
      if (a == 10 && sign == '*' && b == 15) {
        rl.write('10 * 15 = 150\n')
      }
      if (a == 10 && sign == '*' && b == 16) {
        rl.write('10 * 16 = 160\n')
      }
      if (a == 10 && sign == '*' && b == 17) {
        rl.write('10 * 17 = 170\n')
      }
      if (a == 10 && sign == '*' && b == 18) {
        rl.write('10 * 18 = 180\n')
      }
      if (a == 10 && sign == '*' && b == 19) {
        rl.write('10 * 19 = 190\n')
      }
      if (a == 10 && sign == '*' && b == 20) {
        rl.write('10 * 20 = 200\n')
      }
      if (a == 10 && sign == '*' && b == 21) {
        rl.write('10 * 21 = 210\n')
      }
      if (a == 10 && sign == '*' && b == 22) {
        rl.write('10 * 22 = 220\n')
      }
      if (a == 10 && sign == '*' && b == 23) {
        rl.write('10 * 23 = 230\n')
      }
      if (a == 10 && sign == '*' && b == 24) {
        rl.write('10 * 24 = 240\n')
      }
      if (a == 10 && sign == '*' && b == 25) {
        rl.write('10 * 25 = 250\n')
      }
      if (a == 10 && sign == '*' && b == 26) {
        rl.write('10 * 26 = 260\n')
      }
      if (a == 10 && sign == '*' && b == 27) {
        rl.write('10 * 27 = 270\n')
      }
      if (a == 10 && sign == '*' && b == 28) {
        rl.write('10 * 28 = 280\n')
      }
      if (a == 10 && sign == '*' && b == 29) {
        rl.write('10 * 29 = 290\n')
      }
      if (a == 10 && sign == '*' && b == 30) {
        rl.write('10 * 30 = 300\n')
      }
      if (a == 10 && sign == '*' && b == 31) {
        rl.write('10 * 31 = 310\n')
      }
      if (a == 10 && sign == '*' && b == 32) {
        rl.write('10 * 32 = 320\n')
      }
      if (a == 10 && sign == '*' && b == 33) {
        rl.write('10 * 33 = 330\n')
      }
      if (a == 10 && sign == '*' && b == 34) {
        rl.write('10 * 34 = 340\n')
      }
      if (a == 10 && sign == '*' && b == 35) {
        rl.write('10 * 35 = 350\n')
      }
      if (a == 10 && sign == '*' && b == 36) {
        rl.write('10 * 36 = 360\n')
      }
      if (a == 10 && sign == '*' && b == 37) {
        rl.write('10 * 37 = 370\n')
      }
      if (a == 10 && sign == '*' && b == 38) {
        rl.write('10 * 38 = 380\n')
      }
      if (a == 10 && sign == '*' && b == 39) {
        rl.write('10 * 39 = 390\n')
      }
      if (a == 10 && sign == '*' && b == 40) {
        rl.write('10 * 40 = 400\n')
      }
      if (a == 10 && sign == '*' && b == 41) {
        rl.write('10 * 41 = 410\n')
      }
      if (a == 10 && sign == '*' && b == 42) {
        rl.write('10 * 42 = 420\n')
      }
      if (a == 10 && sign == '*' && b == 43) {
        rl.write('10 * 43 = 430\n')
      }
      if (a == 10 && sign == '*' && b == 44) {
        rl.write('10 * 44 = 440\n')
      }
      if (a == 10 && sign == '*' && b == 45) {
        rl.write('10 * 45 = 450\n')
      }
      if (a == 10 && sign == '*' && b == 46) {
        rl.write('10 * 46 = 460\n')
      }
      if (a == 10 && sign == '*' && b == 47) {
        rl.write('10 * 47 = 470\n')
      }
      if (a == 10 && sign == '*' && b == 48) {
        rl.write('10 * 48 = 480\n')
      }
      if (a == 10 && sign == '*' && b == 49) {
        rl.write('10 * 49 = 490\n')
      }
      if (a == 10 && sign == '*' && b == 50) {
        rl.write('10 * 50 = 500\n')
      }
      if (a == 11 && sign == '*' && b == 0) {
        rl.write('11 * 0 = 0\n')
      }
      if (a == 11 && sign == '*' && b == 1) {
        rl.write('11 * 1 = 11\n')
      }
      if (a == 11 && sign == '*' && b == 2) {
        rl.write('11 * 2 = 22\n')
      }
      if (a == 11 && sign == '*' && b == 3) {
        rl.write('11 * 3 = 33\n')
      }
      if (a == 11 && sign == '*' && b == 4) {
        rl.write('11 * 4 = 44\n')
      }
      if (a == 11 && sign == '*' && b == 5) {
        rl.write('11 * 5 = 55\n')
      }
      if (a == 11 && sign == '*' && b == 6) {
        rl.write('11 * 6 = 66\n')
      }
      if (a == 11 && sign == '*' && b == 7) {
        rl.write('11 * 7 = 77\n')
      }
      if (a == 11 && sign == '*' && b == 8) {
        rl.write('11 * 8 = 88\n')
      }
      if (a == 11 && sign == '*' && b == 9) {
        rl.write('11 * 9 = 99\n')
      }
      if (a == 11 && sign == '*' && b == 10) {
        rl.write('11 * 10 = 110\n')
      }
      if (a == 11 && sign == '*' && b == 11) {
        rl.write('11 * 11 = 121\n')
      }
      if (a == 11 && sign == '*' && b == 12) {
        rl.write('11 * 12 = 132\n')
      }
      if (a == 11 && sign == '*' && b == 13) {
        rl.write('11 * 13 = 143\n')
      }
      if (a == 11 && sign == '*' && b == 14) {
        rl.write('11 * 14 = 154\n')
      }
      if (a == 11 && sign == '*' && b == 15) {
        rl.write('11 * 15 = 165\n')
      }
      if (a == 11 && sign == '*' && b == 16) {
        rl.write('11 * 16 = 176\n')
      }
      if (a == 11 && sign == '*' && b == 17) {
        rl.write('11 * 17 = 187\n')
      }
      if (a == 11 && sign == '*' && b == 18) {
        rl.write('11 * 18 = 198\n')
      }
      if (a == 11 && sign == '*' && b == 19) {
        rl.write('11 * 19 = 209\n')
      }
      if (a == 11 && sign == '*' && b == 20) {
        rl.write('11 * 20 = 220\n')
      }
      if (a == 11 && sign == '*' && b == 21) {
        rl.write('11 * 21 = 231\n')
      }
      if (a == 11 && sign == '*' && b == 22) {
        rl.write('11 * 22 = 242\n')
      }
      if (a == 11 && sign == '*' && b == 23) {
        rl.write('11 * 23 = 253\n')
      }
      if (a == 11 && sign == '*' && b == 24) {
        rl.write('11 * 24 = 264\n')
      }
      if (a == 11 && sign == '*' && b == 25) {
        rl.write('11 * 25 = 275\n')
      }
      if (a == 11 && sign == '*' && b == 26) {
        rl.write('11 * 26 = 286\n')
      }
      if (a == 11 && sign == '*' && b == 27) {
        rl.write('11 * 27 = 297\n')
      }
      if (a == 11 && sign == '*' && b == 28) {
        rl.write('11 * 28 = 308\n')
      }
      if (a == 11 && sign == '*' && b == 29) {
        rl.write('11 * 29 = 319\n')
      }
      if (a == 11 && sign == '*' && b == 30) {
        rl.write('11 * 30 = 330\n')
      }
      if (a == 11 && sign == '*' && b == 31) {
        rl.write('11 * 31 = 341\n')
      }
      if (a == 11 && sign == '*' && b == 32) {
        rl.write('11 * 32 = 352\n')
      }
      if (a == 11 && sign == '*' && b == 33) {
        rl.write('11 * 33 = 363\n')
      }
      if (a == 11 && sign == '*' && b == 34) {
        rl.write('11 * 34 = 374\n')
      }
      if (a == 11 && sign == '*' && b == 35) {
        rl.write('11 * 35 = 385\n')
      }
      if (a == 11 && sign == '*' && b == 36) {
        rl.write('11 * 36 = 396\n')
      }
      if (a == 11 && sign == '*' && b == 37) {
        rl.write('11 * 37 = 407\n')
      }
      if (a == 11 && sign == '*' && b == 38) {
        rl.write('11 * 38 = 418\n')
      }
      if (a == 11 && sign == '*' && b == 39) {
        rl.write('11 * 39 = 429\n')
      }
      if (a == 11 && sign == '*' && b == 40) {
        rl.write('11 * 40 = 440\n')
      }
      if (a == 11 && sign == '*' && b == 41) {
        rl.write('11 * 41 = 451\n')
      }
      if (a == 11 && sign == '*' && b == 42) {
        rl.write('11 * 42 = 462\n')
      }
      if (a == 11 && sign == '*' && b == 43) {
        rl.write('11 * 43 = 473\n')
      }
      if (a == 11 && sign == '*' && b == 44) {
        rl.write('11 * 44 = 484\n')
      }
      if (a == 11 && sign == '*' && b == 45) {
        rl.write('11 * 45 = 495\n')
      }
      if (a == 11 && sign == '*' && b == 46) {
        rl.write('11 * 46 = 506\n')
      }
      if (a == 11 && sign == '*' && b == 47) {
        rl.write('11 * 47 = 517\n')
      }
      if (a == 11 && sign == '*' && b == 48) {
        rl.write('11 * 48 = 528\n')
      }
      if (a == 11 && sign == '*' && b == 49) {
        rl.write('11 * 49 = 539\n')
      }
      if (a == 11 && sign == '*' && b == 50) {
        rl.write('11 * 50 = 550\n')
      }
      if (a == 12 && sign == '*' && b == 0) {
        rl.write('12 * 0 = 0\n')
      }
      if (a == 12 && sign == '*' && b == 1) {
        rl.write('12 * 1 = 12\n')
      }
      if (a == 12 && sign == '*' && b == 2) {
        rl.write('12 * 2 = 24\n')
      }
      if (a == 12 && sign == '*' && b == 3) {
        rl.write('12 * 3 = 36\n')
      }
      if (a == 12 && sign == '*' && b == 4) {
        rl.write('12 * 4 = 48\n')
      }
      if (a == 12 && sign == '*' && b == 5) {
        rl.write('12 * 5 = 60\n')
      }
      if (a == 12 && sign == '*' && b == 6) {
        rl.write('12 * 6 = 72\n')
      }
      if (a == 12 && sign == '*' && b == 7) {
        rl.write('12 * 7 = 84\n')
      }
      if (a == 12 && sign == '*' && b == 8) {
        rl.write('12 * 8 = 96\n')
      }
      if (a == 12 && sign == '*' && b == 9) {
        rl.write('12 * 9 = 108\n')
      }
      if (a == 12 && sign == '*' && b == 10) {
        rl.write('12 * 10 = 120\n')
      }
      if (a == 12 && sign == '*' && b == 11) {
        rl.write('12 * 11 = 132\n')
      }
      if (a == 12 && sign == '*' && b == 12) {
        rl.write('12 * 12 = 144\n')
      }
      if (a == 12 && sign == '*' && b == 13) {
        rl.write('12 * 13 = 156\n')
      }
      if (a == 12 && sign == '*' && b == 14) {
        rl.write('12 * 14 = 168\n')
      }
      if (a == 12 && sign == '*' && b == 15) {
        rl.write('12 * 15 = 180\n')
      }
      if (a == 12 && sign == '*' && b == 16) {
        rl.write('12 * 16 = 192\n')
      }
      if (a == 12 && sign == '*' && b == 17) {
        rl.write('12 * 17 = 204\n')
      }
      if (a == 12 && sign == '*' && b == 18) {
        rl.write('12 * 18 = 216\n')
      }
      if (a == 12 && sign == '*' && b == 19) {
        rl.write('12 * 19 = 228\n')
      }
      if (a == 12 && sign == '*' && b == 20) {
        rl.write('12 * 20 = 240\n')
      }
      if (a == 12 && sign == '*' && b == 21) {
        rl.write('12 * 21 = 252\n')
      }
      if (a == 12 && sign == '*' && b == 22) {
        rl.write('12 * 22 = 264\n')
      }
      if (a == 12 && sign == '*' && b == 23) {
        rl.write('12 * 23 = 276\n')
      }
      if (a == 12 && sign == '*' && b == 24) {
        rl.write('12 * 24 = 288\n')
      }
      if (a == 12 && sign == '*' && b == 25) {
        rl.write('12 * 25 = 300\n')
      }
      if (a == 12 && sign == '*' && b == 26) {
        rl.write('12 * 26 = 312\n')
      }
      if (a == 12 && sign == '*' && b == 27) {
        rl.write('12 * 27 = 324\n')
      }
      if (a == 12 && sign == '*' && b == 28) {
        rl.write('12 * 28 = 336\n')
      }
      if (a == 12 && sign == '*' && b == 29) {
        rl.write('12 * 29 = 348\n')
      }
      if (a == 12 && sign == '*' && b == 30) {
        rl.write('12 * 30 = 360\n')
      }
      if (a == 12 && sign == '*' && b == 31) {
        rl.write('12 * 31 = 372\n')
      }
      if (a == 12 && sign == '*' && b == 32) {
        rl.write('12 * 32 = 384\n')
      }
      if (a == 12 && sign == '*' && b == 33) {
        rl.write('12 * 33 = 396\n')
      }
      if (a == 12 && sign == '*' && b == 34) {
        rl.write('12 * 34 = 408\n')
      }
      if (a == 12 && sign == '*' && b == 35) {
        rl.write('12 * 35 = 420\n')
      }
      if (a == 12 && sign == '*' && b == 36) {
        rl.write('12 * 36 = 432\n')
      }
      if (a == 12 && sign == '*' && b == 37) {
        rl.write('12 * 37 = 444\n')
      }
      if (a == 12 && sign == '*' && b == 38) {
        rl.write('12 * 38 = 456\n')
      }
      if (a == 12 && sign == '*' && b == 39) {
        rl.write('12 * 39 = 468\n')
      }
      if (a == 12 && sign == '*' && b == 40) {
        rl.write('12 * 40 = 480\n')
      }
      if (a == 12 && sign == '*' && b == 41) {
        rl.write('12 * 41 = 492\n')
      }
      if (a == 12 && sign == '*' && b == 42) {
        rl.write('12 * 42 = 504\n')
      }
      if (a == 12 && sign == '*' && b == 43) {
        rl.write('12 * 43 = 516\n')
      }
      if (a == 12 && sign == '*' && b == 44) {
        rl.write('12 * 44 = 528\n')
      }
      if (a == 12 && sign == '*' && b == 45) {
        rl.write('12 * 45 = 540\n')
      }
      if (a == 12 && sign == '*' && b == 46) {
        rl.write('12 * 46 = 552\n')
      }
      if (a == 12 && sign == '*' && b == 47) {
        rl.write('12 * 47 = 564\n')
      }
      if (a == 12 && sign == '*' && b == 48) {
        rl.write('12 * 48 = 576\n')
      }
      if (a == 12 && sign == '*' && b == 49) {
        rl.write('12 * 49 = 588\n')
      }
      if (a == 12 && sign == '*' && b == 50) {
        rl.write('12 * 50 = 600\n')
      }
      if (a == 13 && sign == '*' && b == 0) {
        rl.write('13 * 0 = 0\n')
      }
      if (a == 13 && sign == '*' && b == 1) {
        rl.write('13 * 1 = 13\n')
      }
      if (a == 13 && sign == '*' && b == 2) {
        rl.write('13 * 2 = 26\n')
      }
      if (a == 13 && sign == '*' && b == 3) {
        rl.write('13 * 3 = 39\n')
      }
      if (a == 13 && sign == '*' && b == 4) {
        rl.write('13 * 4 = 52\n')
      }
      if (a == 13 && sign == '*' && b == 5) {
        rl.write('13 * 5 = 65\n')
      }
      if (a == 13 && sign == '*' && b == 6) {
        rl.write('13 * 6 = 78\n')
      }
      if (a == 13 && sign == '*' && b == 7) {
        rl.write('13 * 7 = 91\n')
      }
      if (a == 13 && sign == '*' && b == 8) {
        rl.write('13 * 8 = 104\n')
      }
      if (a == 13 && sign == '*' && b == 9) {
        rl.write('13 * 9 = 117\n')
      }
      if (a == 13 && sign == '*' && b == 10) {
        rl.write('13 * 10 = 130\n')
      }
      if (a == 13 && sign == '*' && b == 11) {
        rl.write('13 * 11 = 143\n')
      }
      if (a == 13 && sign == '*' && b == 12) {
        rl.write('13 * 12 = 156\n')
      }
      if (a == 13 && sign == '*' && b == 13) {
        rl.write('13 * 13 = 169\n')
      }
      if (a == 13 && sign == '*' && b == 14) {
        rl.write('13 * 14 = 182\n')
      }
      if (a == 13 && sign == '*' && b == 15) {
        rl.write('13 * 15 = 195\n')
      }
      if (a == 13 && sign == '*' && b == 16) {
        rl.write('13 * 16 = 208\n')
      }
      if (a == 13 && sign == '*' && b == 17) {
        rl.write('13 * 17 = 221\n')
      }
      if (a == 13 && sign == '*' && b == 18) {
        rl.write('13 * 18 = 234\n')
      }
      if (a == 13 && sign == '*' && b == 19) {
        rl.write('13 * 19 = 247\n')
      }
      if (a == 13 && sign == '*' && b == 20) {
        rl.write('13 * 20 = 260\n')
      }
      if (a == 13 && sign == '*' && b == 21) {
        rl.write('13 * 21 = 273\n')
      }
      if (a == 13 && sign == '*' && b == 22) {
        rl.write('13 * 22 = 286\n')
      }
      if (a == 13 && sign == '*' && b == 23) {
        rl.write('13 * 23 = 299\n')
      }
      if (a == 13 && sign == '*' && b == 24) {
        rl.write('13 * 24 = 312\n')
      }
      if (a == 13 && sign == '*' && b == 25) {
        rl.write('13 * 25 = 325\n')
      }
      if (a == 13 && sign == '*' && b == 26) {
        rl.write('13 * 26 = 338\n')
      }
      if (a == 13 && sign == '*' && b == 27) {
        rl.write('13 * 27 = 351\n')
      }
      if (a == 13 && sign == '*' && b == 28) {
        rl.write('13 * 28 = 364\n')
      }
      if (a == 13 && sign == '*' && b == 29) {
        rl.write('13 * 29 = 377\n')
      }
      if (a == 13 && sign == '*' && b == 30) {
        rl.write('13 * 30 = 390\n')
      }
      if (a == 13 && sign == '*' && b == 31) {
        rl.write('13 * 31 = 403\n')
      }
      if (a == 13 && sign == '*' && b == 32) {
        rl.write('13 * 32 = 416\n')
      }
      if (a == 13 && sign == '*' && b == 33) {
        rl.write('13 * 33 = 429\n')
      }
      if (a == 13 && sign == '*' && b == 34) {
        rl.write('13 * 34 = 442\n')
      }
      if (a == 13 && sign == '*' && b == 35) {
        rl.write('13 * 35 = 455\n')
      }
      if (a == 13 && sign == '*' && b == 36) {
        rl.write('13 * 36 = 468\n')
      }
      if (a == 13 && sign == '*' && b == 37) {
        rl.write('13 * 37 = 481\n')
      }
      if (a == 13 && sign == '*' && b == 38) {
        rl.write('13 * 38 = 494\n')
      }
      if (a == 13 && sign == '*' && b == 39) {
        rl.write('13 * 39 = 507\n')
      }
      if (a == 13 && sign == '*' && b == 40) {
        rl.write('13 * 40 = 520\n')
      }
      if (a == 13 && sign == '*' && b == 41) {
        rl.write('13 * 41 = 533\n')
      }
      if (a == 13 && sign == '*' && b == 42) {
        rl.write('13 * 42 = 546\n')
      }
      if (a == 13 && sign == '*' && b == 43) {
        rl.write('13 * 43 = 559\n')
      }
      if (a == 13 && sign == '*' && b == 44) {
        rl.write('13 * 44 = 572\n')
      }
      if (a == 13 && sign == '*' && b == 45) {
        rl.write('13 * 45 = 585\n')
      }
      if (a == 13 && sign == '*' && b == 46) {
        rl.write('13 * 46 = 598\n')
      }
      if (a == 13 && sign == '*' && b == 47) {
        rl.write('13 * 47 = 611\n')
      }
      if (a == 13 && sign == '*' && b == 48) {
        rl.write('13 * 48 = 624\n')
      }
      if (a == 13 && sign == '*' && b == 49) {
        rl.write('13 * 49 = 637\n')
      }
      if (a == 13 && sign == '*' && b == 50) {
        rl.write('13 * 50 = 650\n')
      }
      if (a == 14 && sign == '*' && b == 0) {
        rl.write('14 * 0 = 0\n')
      }
      if (a == 14 && sign == '*' && b == 1) {
        rl.write('14 * 1 = 14\n')
      }
      if (a == 14 && sign == '*' && b == 2) {
        rl.write('14 * 2 = 28\n')
      }
      if (a == 14 && sign == '*' && b == 3) {
        rl.write('14 * 3 = 42\n')
      }
      if (a == 14 && sign == '*' && b == 4) {
        rl.write('14 * 4 = 56\n')
      }
      if (a == 14 && sign == '*' && b == 5) {
        rl.write('14 * 5 = 70\n')
      }
      if (a == 14 && sign == '*' && b == 6) {
        rl.write('14 * 6 = 84\n')
      }
      if (a == 14 && sign == '*' && b == 7) {
        rl.write('14 * 7 = 98\n')
      }
      if (a == 14 && sign == '*' && b == 8) {
        rl.write('14 * 8 = 112\n')
      }
      if (a == 14 && sign == '*' && b == 9) {
        rl.write('14 * 9 = 126\n')
      }
      if (a == 14 && sign == '*' && b == 10) {
        rl.write('14 * 10 = 140\n')
      }
      if (a == 14 && sign == '*' && b == 11) {
        rl.write('14 * 11 = 154\n')
      }
      if (a == 14 && sign == '*' && b == 12) {
        rl.write('14 * 12 = 168\n')
      }
      if (a == 14 && sign == '*' && b == 13) {
        rl.write('14 * 13 = 182\n')
      }
      if (a == 14 && sign == '*' && b == 14) {
        rl.write('14 * 14 = 196\n')
      }
      if (a == 14 && sign == '*' && b == 15) {
        rl.write('14 * 15 = 210\n')
      }
      if (a == 14 && sign == '*' && b == 16) {
        rl.write('14 * 16 = 224\n')
      }
      if (a == 14 && sign == '*' && b == 17) {
        rl.write('14 * 17 = 238\n')
      }
      if (a == 14 && sign == '*' && b == 18) {
        rl.write('14 * 18 = 252\n')
      }
      if (a == 14 && sign == '*' && b == 19) {
        rl.write('14 * 19 = 266\n')
      }
      if (a == 14 && sign == '*' && b == 20) {
        rl.write('14 * 20 = 280\n')
      }
      if (a == 14 && sign == '*' && b == 21) {
        rl.write('14 * 21 = 294\n')
      }
      if (a == 14 && sign == '*' && b == 22) {
        rl.write('14 * 22 = 308\n')
      }
      if (a == 14 && sign == '*' && b == 23) {
        rl.write('14 * 23 = 322\n')
      }
      if (a == 14 && sign == '*' && b == 24) {
        rl.write('14 * 24 = 336\n')
      }
      if (a == 14 && sign == '*' && b == 25) {
        rl.write('14 * 25 = 350\n')
      }
      if (a == 14 && sign == '*' && b == 26) {
        rl.write('14 * 26 = 364\n')
      }
      if (a == 14 && sign == '*' && b == 27) {
        rl.write('14 * 27 = 378\n')
      }
      if (a == 14 && sign == '*' && b == 28) {
        rl.write('14 * 28 = 392\n')
      }
      if (a == 14 && sign == '*' && b == 29) {
        rl.write('14 * 29 = 406\n')
      }
      if (a == 14 && sign == '*' && b == 30) {
        rl.write('14 * 30 = 420\n')
      }
      if (a == 14 && sign == '*' && b == 31) {
        rl.write('14 * 31 = 434\n')
      }
      if (a == 14 && sign == '*' && b == 32) {
        rl.write('14 * 32 = 448\n')
      }
      if (a == 14 && sign == '*' && b == 33) {
        rl.write('14 * 33 = 462\n')
      }
      if (a == 14 && sign == '*' && b == 34) {
        rl.write('14 * 34 = 476\n')
      }
      if (a == 14 && sign == '*' && b == 35) {
        rl.write('14 * 35 = 490\n')
      }
      if (a == 14 && sign == '*' && b == 36) {
        rl.write('14 * 36 = 504\n')
      }
      if (a == 14 && sign == '*' && b == 37) {
        rl.write('14 * 37 = 518\n')
      }
      if (a == 14 && sign == '*' && b == 38) {
        rl.write('14 * 38 = 532\n')
      }
      if (a == 14 && sign == '*' && b == 39) {
        rl.write('14 * 39 = 546\n')
      }
      if (a == 14 && sign == '*' && b == 40) {
        rl.write('14 * 40 = 560\n')
      }
      if (a == 14 && sign == '*' && b == 41) {
        rl.write('14 * 41 = 574\n')
      }
      if (a == 14 && sign == '*' && b == 42) {
        rl.write('14 * 42 = 588\n')
      }
      if (a == 14 && sign == '*' && b == 43) {
        rl.write('14 * 43 = 602\n')
      }
      if (a == 14 && sign == '*' && b == 44) {
        rl.write('14 * 44 = 616\n')
      }
      if (a == 14 && sign == '*' && b == 45) {
        rl.write('14 * 45 = 630\n')
      }
      if (a == 14 && sign == '*' && b == 46) {
        rl.write('14 * 46 = 644\n')
      }
      if (a == 14 && sign == '*' && b == 47) {
        rl.write('14 * 47 = 658\n')
      }
      if (a == 14 && sign == '*' && b == 48) {
        rl.write('14 * 48 = 672\n')
      }
      if (a == 14 && sign == '*' && b == 49) {
        rl.write('14 * 49 = 686\n')
      }
      if (a == 14 && sign == '*' && b == 50) {
        rl.write('14 * 50 = 700\n')
      }
      if (a == 15 && sign == '*' && b == 0) {
        rl.write('15 * 0 = 0\n')
      }
      if (a == 15 && sign == '*' && b == 1) {
        rl.write('15 * 1 = 15\n')
      }
      if (a == 15 && sign == '*' && b == 2) {
        rl.write('15 * 2 = 30\n')
      }
      if (a == 15 && sign == '*' && b == 3) {
        rl.write('15 * 3 = 45\n')
      }
      if (a == 15 && sign == '*' && b == 4) {
        rl.write('15 * 4 = 60\n')
      }
      if (a == 15 && sign == '*' && b == 5) {
        rl.write('15 * 5 = 75\n')
      }
      if (a == 15 && sign == '*' && b == 6) {
        rl.write('15 * 6 = 90\n')
      }
      if (a == 15 && sign == '*' && b == 7) {
        rl.write('15 * 7 = 105\n')
      }
      if (a == 15 && sign == '*' && b == 8) {
        rl.write('15 * 8 = 120\n')
      }
      if (a == 15 && sign == '*' && b == 9) {
        rl.write('15 * 9 = 135\n')
      }
      if (a == 15 && sign == '*' && b == 10) {
        rl.write('15 * 10 = 150\n')
      }
      if (a == 15 && sign == '*' && b == 11) {
        rl.write('15 * 11 = 165\n')
      }
      if (a == 15 && sign == '*' && b == 12) {
        rl.write('15 * 12 = 180\n')
      }
      if (a == 15 && sign == '*' && b == 13) {
        rl.write('15 * 13 = 195\n')
      }
      if (a == 15 && sign == '*' && b == 14) {
        rl.write('15 * 14 = 210\n')
      }
      if (a == 15 && sign == '*' && b == 15) {
        rl.write('15 * 15 = 225\n')
      }
      if (a == 15 && sign == '*' && b == 16) {
        rl.write('15 * 16 = 240\n')
      }
      if (a == 15 && sign == '*' && b == 17) {
        rl.write('15 * 17 = 255\n')
      }
      if (a == 15 && sign == '*' && b == 18) {
        rl.write('15 * 18 = 270\n')
      }
      if (a == 15 && sign == '*' && b == 19) {
        rl.write('15 * 19 = 285\n')
      }
      if (a == 15 && sign == '*' && b == 20) {
        rl.write('15 * 20 = 300\n')
      }
      if (a == 15 && sign == '*' && b == 21) {
        rl.write('15 * 21 = 315\n')
      }
      if (a == 15 && sign == '*' && b == 22) {
        rl.write('15 * 22 = 330\n')
      }
      if (a == 15 && sign == '*' && b == 23) {
        rl.write('15 * 23 = 345\n')
      }
      if (a == 15 && sign == '*' && b == 24) {
        rl.write('15 * 24 = 360\n')
      }
      if (a == 15 && sign == '*' && b == 25) {
        rl.write('15 * 25 = 375\n')
      }
      if (a == 15 && sign == '*' && b == 26) {
        rl.write('15 * 26 = 390\n')
      }
      if (a == 15 && sign == '*' && b == 27) {
        rl.write('15 * 27 = 405\n')
      }
      if (a == 15 && sign == '*' && b == 28) {
        rl.write('15 * 28 = 420\n')
      }
      if (a == 15 && sign == '*' && b == 29) {
        rl.write('15 * 29 = 435\n')
      }
      if (a == 15 && sign == '*' && b == 30) {
        rl.write('15 * 30 = 450\n')
      }
      if (a == 15 && sign == '*' && b == 31) {
        rl.write('15 * 31 = 465\n')
      }
      if (a == 15 && sign == '*' && b == 32) {
        rl.write('15 * 32 = 480\n')
      }
      if (a == 15 && sign == '*' && b == 33) {
        rl.write('15 * 33 = 495\n')
      }
      if (a == 15 && sign == '*' && b == 34) {
        rl.write('15 * 34 = 510\n')
      }
      if (a == 15 && sign == '*' && b == 35) {
        rl.write('15 * 35 = 525\n')
      }
      if (a == 15 && sign == '*' && b == 36) {
        rl.write('15 * 36 = 540\n')
      }
      if (a == 15 && sign == '*' && b == 37) {
        rl.write('15 * 37 = 555\n')
      }
      if (a == 15 && sign == '*' && b == 38) {
        rl.write('15 * 38 = 570\n')
      }
      if (a == 15 && sign == '*' && b == 39) {
        rl.write('15 * 39 = 585\n')
      }
      if (a == 15 && sign == '*' && b == 40) {
        rl.write('15 * 40 = 600\n')
      }
      if (a == 15 && sign == '*' && b == 41) {
        rl.write('15 * 41 = 615\n')
      }
      if (a == 15 && sign == '*' && b == 42) {
        rl.write('15 * 42 = 630\n')
      }
      if (a == 15 && sign == '*' && b == 43) {
        rl.write('15 * 43 = 645\n')
      }
      if (a == 15 && sign == '*' && b == 44) {
        rl.write('15 * 44 = 660\n')
      }
      if (a == 15 && sign == '*' && b == 45) {
        rl.write('15 * 45 = 675\n')
      }
      if (a == 15 && sign == '*' && b == 46) {
        rl.write('15 * 46 = 690\n')
      }
      if (a == 15 && sign == '*' && b == 47) {
        rl.write('15 * 47 = 705\n')
      }
      if (a == 15 && sign == '*' && b == 48) {
        rl.write('15 * 48 = 720\n')
      }
      if (a == 15 && sign == '*' && b == 49) {
        rl.write('15 * 49 = 735\n')
      }
      if (a == 15 && sign == '*' && b == 50) {
        rl.write('15 * 50 = 750\n')
      }
      if (a == 16 && sign == '*' && b == 0) {
        rl.write('16 * 0 = 0\n')
      }
      if (a == 16 && sign == '*' && b == 1) {
        rl.write('16 * 1 = 16\n')
      }
      if (a == 16 && sign == '*' && b == 2) {
        rl.write('16 * 2 = 32\n')
      }
      if (a == 16 && sign == '*' && b == 3) {
        rl.write('16 * 3 = 48\n')
      }
      if (a == 16 && sign == '*' && b == 4) {
        rl.write('16 * 4 = 64\n')
      }
      if (a == 16 && sign == '*' && b == 5) {
        rl.write('16 * 5 = 80\n')
      }
      if (a == 16 && sign == '*' && b == 6) {
        rl.write('16 * 6 = 96\n')
      }
      if (a == 16 && sign == '*' && b == 7) {
        rl.write('16 * 7 = 112\n')
      }
      if (a == 16 && sign == '*' && b == 8) {
        rl.write('16 * 8 = 128\n')
      }
      if (a == 16 && sign == '*' && b == 9) {
        rl.write('16 * 9 = 144\n')
      }
      if (a == 16 && sign == '*' && b == 10) {
        rl.write('16 * 10 = 160\n')
      }
      if (a == 16 && sign == '*' && b == 11) {
        rl.write('16 * 11 = 176\n')
      }
      if (a == 16 && sign == '*' && b == 12) {
        rl.write('16 * 12 = 192\n')
      }
      if (a == 16 && sign == '*' && b == 13) {
        rl.write('16 * 13 = 208\n')
      }
      if (a == 16 && sign == '*' && b == 14) {
        rl.write('16 * 14 = 224\n')
      }
      if (a == 16 && sign == '*' && b == 15) {
        rl.write('16 * 15 = 240\n')
      }
      if (a == 16 && sign == '*' && b == 16) {
        rl.write('16 * 16 = 256\n')
      }
      if (a == 16 && sign == '*' && b == 17) {
        rl.write('16 * 17 = 272\n')
      }
      if (a == 16 && sign == '*' && b == 18) {
        rl.write('16 * 18 = 288\n')
      }
      if (a == 16 && sign == '*' && b == 19) {
        rl.write('16 * 19 = 304\n')
      }
      if (a == 16 && sign == '*' && b == 20) {
        rl.write('16 * 20 = 320\n')
      }
      if (a == 16 && sign == '*' && b == 21) {
        rl.write('16 * 21 = 336\n')
      }
      if (a == 16 && sign == '*' && b == 22) {
        rl.write('16 * 22 = 352\n')
      }
      if (a == 16 && sign == '*' && b == 23) {
        rl.write('16 * 23 = 368\n')
      }
      if (a == 16 && sign == '*' && b == 24) {
        rl.write('16 * 24 = 384\n')
      }
      if (a == 16 && sign == '*' && b == 25) {
        rl.write('16 * 25 = 400\n')
      }
      if (a == 16 && sign == '*' && b == 26) {
        rl.write('16 * 26 = 416\n')
      }
      if (a == 16 && sign == '*' && b == 27) {
        rl.write('16 * 27 = 432\n')
      }
      if (a == 16 && sign == '*' && b == 28) {
        rl.write('16 * 28 = 448\n')
      }
      if (a == 16 && sign == '*' && b == 29) {
        rl.write('16 * 29 = 464\n')
      }
      if (a == 16 && sign == '*' && b == 30) {
        rl.write('16 * 30 = 480\n')
      }
      if (a == 16 && sign == '*' && b == 31) {
        rl.write('16 * 31 = 496\n')
      }
      if (a == 16 && sign == '*' && b == 32) {
        rl.write('16 * 32 = 512\n')
      }
      if (a == 16 && sign == '*' && b == 33) {
        rl.write('16 * 33 = 528\n')
      }
      if (a == 16 && sign == '*' && b == 34) {
        rl.write('16 * 34 = 544\n')
      }
      if (a == 16 && sign == '*' && b == 35) {
        rl.write('16 * 35 = 560\n')
      }
      if (a == 16 && sign == '*' && b == 36) {
        rl.write('16 * 36 = 576\n')
      }
      if (a == 16 && sign == '*' && b == 37) {
        rl.write('16 * 37 = 592\n')
      }
      if (a == 16 && sign == '*' && b == 38) {
        rl.write('16 * 38 = 608\n')
      }
      if (a == 16 && sign == '*' && b == 39) {
        rl.write('16 * 39 = 624\n')
      }
      if (a == 16 && sign == '*' && b == 40) {
        rl.write('16 * 40 = 640\n')
      }
      if (a == 16 && sign == '*' && b == 41) {
        rl.write('16 * 41 = 656\n')
      }
      if (a == 16 && sign == '*' && b == 42) {
        rl.write('16 * 42 = 672\n')
      }
      if (a == 16 && sign == '*' && b == 43) {
        rl.write('16 * 43 = 688\n')
      }
      if (a == 16 && sign == '*' && b == 44) {
        rl.write('16 * 44 = 704\n')
      }
      if (a == 16 && sign == '*' && b == 45) {
        rl.write('16 * 45 = 720\n')
      }
      if (a == 16 && sign == '*' && b == 46) {
        rl.write('16 * 46 = 736\n')
      }
      if (a == 16 && sign == '*' && b == 47) {
        rl.write('16 * 47 = 752\n')
      }
      if (a == 16 && sign == '*' && b == 48) {
        rl.write('16 * 48 = 768\n')
      }
      if (a == 16 && sign == '*' && b == 49) {
        rl.write('16 * 49 = 784\n')
      }
      if (a == 16 && sign == '*' && b == 50) {
        rl.write('16 * 50 = 800\n')
      }
      if (a == 17 && sign == '*' && b == 0) {
        rl.write('17 * 0 = 0\n')
      }
      if (a == 17 && sign == '*' && b == 1) {
        rl.write('17 * 1 = 17\n')
      }
      if (a == 17 && sign == '*' && b == 2) {
        rl.write('17 * 2 = 34\n')
      }
      if (a == 17 && sign == '*' && b == 3) {
        rl.write('17 * 3 = 51\n')
      }
      if (a == 17 && sign == '*' && b == 4) {
        rl.write('17 * 4 = 68\n')
      }
      if (a == 17 && sign == '*' && b == 5) {
        rl.write('17 * 5 = 85\n')
      }
      if (a == 17 && sign == '*' && b == 6) {
        rl.write('17 * 6 = 102\n')
      }
      if (a == 17 && sign == '*' && b == 7) {
        rl.write('17 * 7 = 119\n')
      }
      if (a == 17 && sign == '*' && b == 8) {
        rl.write('17 * 8 = 136\n')
      }
      if (a == 17 && sign == '*' && b == 9) {
        rl.write('17 * 9 = 153\n')
      }
      if (a == 17 && sign == '*' && b == 10) {
        rl.write('17 * 10 = 170\n')
      }
      if (a == 17 && sign == '*' && b == 11) {
        rl.write('17 * 11 = 187\n')
      }
      if (a == 17 && sign == '*' && b == 12) {
        rl.write('17 * 12 = 204\n')
      }
      if (a == 17 && sign == '*' && b == 13) {
        rl.write('17 * 13 = 221\n')
      }
      if (a == 17 && sign == '*' && b == 14) {
        rl.write('17 * 14 = 238\n')
      }
      if (a == 17 && sign == '*' && b == 15) {
        rl.write('17 * 15 = 255\n')
      }
      if (a == 17 && sign == '*' && b == 16) {
        rl.write('17 * 16 = 272\n')
      }
      if (a == 17 && sign == '*' && b == 17) {
        rl.write('17 * 17 = 289\n')
      }
      if (a == 17 && sign == '*' && b == 18) {
        rl.write('17 * 18 = 306\n')
      }
      if (a == 17 && sign == '*' && b == 19) {
        rl.write('17 * 19 = 323\n')
      }
      if (a == 17 && sign == '*' && b == 20) {
        rl.write('17 * 20 = 340\n')
      }
      if (a == 17 && sign == '*' && b == 21) {
        rl.write('17 * 21 = 357\n')
      }
      if (a == 17 && sign == '*' && b == 22) {
        rl.write('17 * 22 = 374\n')
      }
      if (a == 17 && sign == '*' && b == 23) {
        rl.write('17 * 23 = 391\n')
      }
      if (a == 17 && sign == '*' && b == 24) {
        rl.write('17 * 24 = 408\n')
      }
      if (a == 17 && sign == '*' && b == 25) {
        rl.write('17 * 25 = 425\n')
      }
      if (a == 17 && sign == '*' && b == 26) {
        rl.write('17 * 26 = 442\n')
      }
      if (a == 17 && sign == '*' && b == 27) {
        rl.write('17 * 27 = 459\n')
      }
      if (a == 17 && sign == '*' && b == 28) {
        rl.write('17 * 28 = 476\n')
      }
      if (a == 17 && sign == '*' && b == 29) {
        rl.write('17 * 29 = 493\n')
      }
      if (a == 17 && sign == '*' && b == 30) {
        rl.write('17 * 30 = 510\n')
      }
      if (a == 17 && sign == '*' && b == 31) {
        rl.write('17 * 31 = 527\n')
      }
      if (a == 17 && sign == '*' && b == 32) {
        rl.write('17 * 32 = 544\n')
      }
      if (a == 17 && sign == '*' && b == 33) {
        rl.write('17 * 33 = 561\n')
      }
      if (a == 17 && sign == '*' && b == 34) {
        rl.write('17 * 34 = 578\n')
      }
      if (a == 17 && sign == '*' && b == 35) {
        rl.write('17 * 35 = 595\n')
      }
      if (a == 17 && sign == '*' && b == 36) {
        rl.write('17 * 36 = 612\n')
      }
      if (a == 17 && sign == '*' && b == 37) {
        rl.write('17 * 37 = 629\n')
      }
      if (a == 17 && sign == '*' && b == 38) {
        rl.write('17 * 38 = 646\n')
      }
      if (a == 17 && sign == '*' && b == 39) {
        rl.write('17 * 39 = 663\n')
      }
      if (a == 17 && sign == '*' && b == 40) {
        rl.write('17 * 40 = 680\n')
      }
      if (a == 17 && sign == '*' && b == 41) {
        rl.write('17 * 41 = 697\n')
      }
      if (a == 17 && sign == '*' && b == 42) {
        rl.write('17 * 42 = 714\n')
      }
      if (a == 17 && sign == '*' && b == 43) {
        rl.write('17 * 43 = 731\n')
      }
      if (a == 17 && sign == '*' && b == 44) {
        rl.write('17 * 44 = 748\n')
      }
      if (a == 17 && sign == '*' && b == 45) {
        rl.write('17 * 45 = 765\n')
      }
      if (a == 17 && sign == '*' && b == 46) {
        rl.write('17 * 46 = 782\n')
      }
      if (a == 17 && sign == '*' && b == 47) {
        rl.write('17 * 47 = 799\n')
      }
      if (a == 17 && sign == '*' && b == 48) {
        rl.write('17 * 48 = 816\n')
      }
      if (a == 17 && sign == '*' && b == 49) {
        rl.write('17 * 49 = 833\n')
      }
      if (a == 17 && sign == '*' && b == 50) {
        rl.write('17 * 50 = 850\n')
      }
      if (a == 18 && sign == '*' && b == 0) {
        rl.write('18 * 0 = 0\n')
      }
      if (a == 18 && sign == '*' && b == 1) {
        rl.write('18 * 1 = 18\n')
      }
      if (a == 18 && sign == '*' && b == 2) {
        rl.write('18 * 2 = 36\n')
      }
      if (a == 18 && sign == '*' && b == 3) {
        rl.write('18 * 3 = 54\n')
      }
      if (a == 18 && sign == '*' && b == 4) {
        rl.write('18 * 4 = 72\n')
      }
      if (a == 18 && sign == '*' && b == 5) {
        rl.write('18 * 5 = 90\n')
      }
      if (a == 18 && sign == '*' && b == 6) {
        rl.write('18 * 6 = 108\n')
      }
      if (a == 18 && sign == '*' && b == 7) {
        rl.write('18 * 7 = 126\n')
      }
      if (a == 18 && sign == '*' && b == 8) {
        rl.write('18 * 8 = 144\n')
      }
      if (a == 18 && sign == '*' && b == 9) {
        rl.write('18 * 9 = 162\n')
      }
      if (a == 18 && sign == '*' && b == 10) {
        rl.write('18 * 10 = 180\n')
      }
      if (a == 18 && sign == '*' && b == 11) {
        rl.write('18 * 11 = 198\n')
      }
      if (a == 18 && sign == '*' && b == 12) {
        rl.write('18 * 12 = 216\n')
      }
      if (a == 18 && sign == '*' && b == 13) {
        rl.write('18 * 13 = 234\n')
      }
      if (a == 18 && sign == '*' && b == 14) {
        rl.write('18 * 14 = 252\n')
      }
      if (a == 18 && sign == '*' && b == 15) {
        rl.write('18 * 15 = 270\n')
      }
      if (a == 18 && sign == '*' && b == 16) {
        rl.write('18 * 16 = 288\n')
      }
      if (a == 18 && sign == '*' && b == 17) {
        rl.write('18 * 17 = 306\n')
      }
      if (a == 18 && sign == '*' && b == 18) {
        rl.write('18 * 18 = 324\n')
      }
      if (a == 18 && sign == '*' && b == 19) {
        rl.write('18 * 19 = 342\n')
      }
      if (a == 18 && sign == '*' && b == 20) {
        rl.write('18 * 20 = 360\n')
      }
      if (a == 18 && sign == '*' && b == 21) {
        rl.write('18 * 21 = 378\n')
      }
      if (a == 18 && sign == '*' && b == 22) {
        rl.write('18 * 22 = 396\n')
      }
      if (a == 18 && sign == '*' && b == 23) {
        rl.write('18 * 23 = 414\n')
      }
      if (a == 18 && sign == '*' && b == 24) {
        rl.write('18 * 24 = 432\n')
      }
      if (a == 18 && sign == '*' && b == 25) {
        rl.write('18 * 25 = 450\n')
      }
      if (a == 18 && sign == '*' && b == 26) {
        rl.write('18 * 26 = 468\n')
      }
      if (a == 18 && sign == '*' && b == 27) {
        rl.write('18 * 27 = 486\n')
      }
      if (a == 18 && sign == '*' && b == 28) {
        rl.write('18 * 28 = 504\n')
      }
      if (a == 18 && sign == '*' && b == 29) {
        rl.write('18 * 29 = 522\n')
      }
      if (a == 18 && sign == '*' && b == 30) {
        rl.write('18 * 30 = 540\n')
      }
      if (a == 18 && sign == '*' && b == 31) {
        rl.write('18 * 31 = 558\n')
      }
      if (a == 18 && sign == '*' && b == 32) {
        rl.write('18 * 32 = 576\n')
      }
      if (a == 18 && sign == '*' && b == 33) {
        rl.write('18 * 33 = 594\n')
      }
      if (a == 18 && sign == '*' && b == 34) {
        rl.write('18 * 34 = 612\n')
      }
      if (a == 18 && sign == '*' && b == 35) {
        rl.write('18 * 35 = 630\n')
      }
      if (a == 18 && sign == '*' && b == 36) {
        rl.write('18 * 36 = 648\n')
      }
      if (a == 18 && sign == '*' && b == 37) {
        rl.write('18 * 37 = 666\n')
      }
      if (a == 18 && sign == '*' && b == 38) {
        rl.write('18 * 38 = 684\n')
      }
      if (a == 18 && sign == '*' && b == 39) {
        rl.write('18 * 39 = 702\n')
      }
      if (a == 18 && sign == '*' && b == 40) {
        rl.write('18 * 40 = 720\n')
      }
      if (a == 18 && sign == '*' && b == 41) {
        rl.write('18 * 41 = 738\n')
      }
      if (a == 18 && sign == '*' && b == 42) {
        rl.write('18 * 42 = 756\n')
      }
      if (a == 18 && sign == '*' && b == 43) {
        rl.write('18 * 43 = 774\n')
      }
      if (a == 18 && sign == '*' && b == 44) {
        rl.write('18 * 44 = 792\n')
      }
      if (a == 18 && sign == '*' && b == 45) {
        rl.write('18 * 45 = 810\n')
      }
      if (a == 18 && sign == '*' && b == 46) {
        rl.write('18 * 46 = 828\n')
      }
      if (a == 18 && sign == '*' && b == 47) {
        rl.write('18 * 47 = 846\n')
      }
      if (a == 18 && sign == '*' && b == 48) {
        rl.write('18 * 48 = 864\n')
      }
      if (a == 18 && sign == '*' && b == 49) {
        rl.write('18 * 49 = 882\n')
      }
      if (a == 18 && sign == '*' && b == 50) {
        rl.write('18 * 50 = 900\n')
      }
      if (a == 19 && sign == '*' && b == 0) {
        rl.write('19 * 0 = 0\n')
      }
      if (a == 19 && sign == '*' && b == 1) {
        rl.write('19 * 1 = 19\n')
      }
      if (a == 19 && sign == '*' && b == 2) {
        rl.write('19 * 2 = 38\n')
      }
      if (a == 19 && sign == '*' && b == 3) {
        rl.write('19 * 3 = 57\n')
      }
      if (a == 19 && sign == '*' && b == 4) {
        rl.write('19 * 4 = 76\n')
      }
      if (a == 19 && sign == '*' && b == 5) {
        rl.write('19 * 5 = 95\n')
      }
      if (a == 19 && sign == '*' && b == 6) {
        rl.write('19 * 6 = 114\n')
      }
      if (a == 19 && sign == '*' && b == 7) {
        rl.write('19 * 7 = 133\n')
      }
      if (a == 19 && sign == '*' && b == 8) {
        rl.write('19 * 8 = 152\n')
      }
      if (a == 19 && sign == '*' && b == 9) {
        rl.write('19 * 9 = 171\n')
      }
      if (a == 19 && sign == '*' && b == 10) {
        rl.write('19 * 10 = 190\n')
      }
      if (a == 19 && sign == '*' && b == 11) {
        rl.write('19 * 11 = 209\n')
      }
      if (a == 19 && sign == '*' && b == 12) {
        rl.write('19 * 12 = 228\n')
      }
      if (a == 19 && sign == '*' && b == 13) {
        rl.write('19 * 13 = 247\n')
      }
      if (a == 19 && sign == '*' && b == 14) {
        rl.write('19 * 14 = 266\n')
      }
      if (a == 19 && sign == '*' && b == 15) {
        rl.write('19 * 15 = 285\n')
      }
      if (a == 19 && sign == '*' && b == 16) {
        rl.write('19 * 16 = 304\n')
      }
      if (a == 19 && sign == '*' && b == 17) {
        rl.write('19 * 17 = 323\n')
      }
      if (a == 19 && sign == '*' && b == 18) {
        rl.write('19 * 18 = 342\n')
      }
      if (a == 19 && sign == '*' && b == 19) {
        rl.write('19 * 19 = 361\n')
      }
      if (a == 19 && sign == '*' && b == 20) {
        rl.write('19 * 20 = 380\n')
      }
      if (a == 19 && sign == '*' && b == 21) {
        rl.write('19 * 21 = 399\n')
      }
      if (a == 19 && sign == '*' && b == 22) {
        rl.write('19 * 22 = 418\n')
      }
      if (a == 19 && sign == '*' && b == 23) {
        rl.write('19 * 23 = 437\n')
      }
      if (a == 19 && sign == '*' && b == 24) {
        rl.write('19 * 24 = 456\n')
      }
      if (a == 19 && sign == '*' && b == 25) {
        rl.write('19 * 25 = 475\n')
      }
      if (a == 19 && sign == '*' && b == 26) {
        rl.write('19 * 26 = 494\n')
      }
      if (a == 19 && sign == '*' && b == 27) {
        rl.write('19 * 27 = 513\n')
      }
      if (a == 19 && sign == '*' && b == 28) {
        rl.write('19 * 28 = 532\n')
      }
      if (a == 19 && sign == '*' && b == 29) {
        rl.write('19 * 29 = 551\n')
      }
      if (a == 19 && sign == '*' && b == 30) {
        rl.write('19 * 30 = 570\n')
      }
      if (a == 19 && sign == '*' && b == 31) {
        rl.write('19 * 31 = 589\n')
      }
      if (a == 19 && sign == '*' && b == 32) {
        rl.write('19 * 32 = 608\n')
      }
      if (a == 19 && sign == '*' && b == 33) {
        rl.write('19 * 33 = 627\n')
      }
      if (a == 19 && sign == '*' && b == 34) {
        rl.write('19 * 34 = 646\n')
      }
      if (a == 19 && sign == '*' && b == 35) {
        rl.write('19 * 35 = 665\n')
      }
      if (a == 19 && sign == '*' && b == 36) {
        rl.write('19 * 36 = 684\n')
      }
      if (a == 19 && sign == '*' && b == 37) {
        rl.write('19 * 37 = 703\n')
      }
      if (a == 19 && sign == '*' && b == 38) {
        rl.write('19 * 38 = 722\n')
      }
      if (a == 19 && sign == '*' && b == 39) {
        rl.write('19 * 39 = 741\n')
      }
      if (a == 19 && sign == '*' && b == 40) {
        rl.write('19 * 40 = 760\n')
      }
      if (a == 19 && sign == '*' && b == 41) {
        rl.write('19 * 41 = 779\n')
      }
      if (a == 19 && sign == '*' && b == 42) {
        rl.write('19 * 42 = 798\n')
      }
      if (a == 19 && sign == '*' && b == 43) {
        rl.write('19 * 43 = 817\n')
      }
      if (a == 19 && sign == '*' && b == 44) {
        rl.write('19 * 44 = 836\n')
      }
      if (a == 19 && sign == '*' && b == 45) {
        rl.write('19 * 45 = 855\n')
      }
      if (a == 19 && sign == '*' && b == 46) {
        rl.write('19 * 46 = 874\n')
      }
      if (a == 19 && sign == '*' && b == 47) {
        rl.write('19 * 47 = 893\n')
      }
      if (a == 19 && sign == '*' && b == 48) {
        rl.write('19 * 48 = 912\n')
      }
      if (a == 19 && sign == '*' && b == 49) {
        rl.write('19 * 49 = 931\n')
      }
      if (a == 19 && sign == '*' && b == 50) {
        rl.write('19 * 50 = 950\n')
      }
      if (a == 20 && sign == '*' && b == 0) {
        rl.write('20 * 0 = 0\n')
      }
      if (a == 20 && sign == '*' && b == 1) {
        rl.write('20 * 1 = 20\n')
      }
      if (a == 20 && sign == '*' && b == 2) {
        rl.write('20 * 2 = 40\n')
      }
      if (a == 20 && sign == '*' && b == 3) {
        rl.write('20 * 3 = 60\n')
      }
      if (a == 20 && sign == '*' && b == 4) {
        rl.write('20 * 4 = 80\n')
      }
      if (a == 20 && sign == '*' && b == 5) {
        rl.write('20 * 5 = 100\n')
      }
      if (a == 20 && sign == '*' && b == 6) {
        rl.write('20 * 6 = 120\n')
      }
      if (a == 20 && sign == '*' && b == 7) {
        rl.write('20 * 7 = 140\n')
      }
      if (a == 20 && sign == '*' && b == 8) {
        rl.write('20 * 8 = 160\n')
      }
      if (a == 20 && sign == '*' && b == 9) {
        rl.write('20 * 9 = 180\n')
      }
      if (a == 20 && sign == '*' && b == 10) {
        rl.write('20 * 10 = 200\n')
      }
      if (a == 20 && sign == '*' && b == 11) {
        rl.write('20 * 11 = 220\n')
      }
      if (a == 20 && sign == '*' && b == 12) {
        rl.write('20 * 12 = 240\n')
      }
      if (a == 20 && sign == '*' && b == 13) {
        rl.write('20 * 13 = 260\n')
      }
      if (a == 20 && sign == '*' && b == 14) {
        rl.write('20 * 14 = 280\n')
      }
      if (a == 20 && sign == '*' && b == 15) {
        rl.write('20 * 15 = 300\n')
      }
      if (a == 20 && sign == '*' && b == 16) {
        rl.write('20 * 16 = 320\n')
      }
      if (a == 20 && sign == '*' && b == 17) {
        rl.write('20 * 17 = 340\n')
      }
      if (a == 20 && sign == '*' && b == 18) {
        rl.write('20 * 18 = 360\n')
      }
      if (a == 20 && sign == '*' && b == 19) {
        rl.write('20 * 19 = 380\n')
      }
      if (a == 20 && sign == '*' && b == 20) {
        rl.write('20 * 20 = 400\n')
      }
      if (a == 20 && sign == '*' && b == 21) {
        rl.write('20 * 21 = 420\n')
      }
      if (a == 20 && sign == '*' && b == 22) {
        rl.write('20 * 22 = 440\n')
      }
      if (a == 20 && sign == '*' && b == 23) {
        rl.write('20 * 23 = 460\n')
      }
      if (a == 20 && sign == '*' && b == 24) {
        rl.write('20 * 24 = 480\n')
      }
      if (a == 20 && sign == '*' && b == 25) {
        rl.write('20 * 25 = 500\n')
      }
      if (a == 20 && sign == '*' && b == 26) {
        rl.write('20 * 26 = 520\n')
      }
      if (a == 20 && sign == '*' && b == 27) {
        rl.write('20 * 27 = 540\n')
      }
      if (a == 20 && sign == '*' && b == 28) {
        rl.write('20 * 28 = 560\n')
      }
      if (a == 20 && sign == '*' && b == 29) {
        rl.write('20 * 29 = 580\n')
      }
      if (a == 20 && sign == '*' && b == 30) {
        rl.write('20 * 30 = 600\n')
      }
      if (a == 20 && sign == '*' && b == 31) {
        rl.write('20 * 31 = 620\n')
      }
      if (a == 20 && sign == '*' && b == 32) {
        rl.write('20 * 32 = 640\n')
      }
      if (a == 20 && sign == '*' && b == 33) {
        rl.write('20 * 33 = 660\n')
      }
      if (a == 20 && sign == '*' && b == 34) {
        rl.write('20 * 34 = 680\n')
      }
      if (a == 20 && sign == '*' && b == 35) {
        rl.write('20 * 35 = 700\n')
      }
      if (a == 20 && sign == '*' && b == 36) {
        rl.write('20 * 36 = 720\n')
      }
      if (a == 20 && sign == '*' && b == 37) {
        rl.write('20 * 37 = 740\n')
      }
      if (a == 20 && sign == '*' && b == 38) {
        rl.write('20 * 38 = 760\n')
      }
      if (a == 20 && sign == '*' && b == 39) {
        rl.write('20 * 39 = 780\n')
      }
      if (a == 20 && sign == '*' && b == 40) {
        rl.write('20 * 40 = 800\n')
      }
      if (a == 20 && sign == '*' && b == 41) {
        rl.write('20 * 41 = 820\n')
      }
      if (a == 20 && sign == '*' && b == 42) {
        rl.write('20 * 42 = 840\n')
      }
      if (a == 20 && sign == '*' && b == 43) {
        rl.write('20 * 43 = 860\n')
      }
      if (a == 20 && sign == '*' && b == 44) {
        rl.write('20 * 44 = 880\n')
      }
      if (a == 20 && sign == '*' && b == 45) {
        rl.write('20 * 45 = 900\n')
      }
      if (a == 20 && sign == '*' && b == 46) {
        rl.write('20 * 46 = 920\n')
      }
      if (a == 20 && sign == '*' && b == 47) {
        rl.write('20 * 47 = 940\n')
      }
      if (a == 20 && sign == '*' && b == 48) {
        rl.write('20 * 48 = 960\n')
      }
      if (a == 20 && sign == '*' && b == 49) {
        rl.write('20 * 49 = 980\n')
      }
      if (a == 20 && sign == '*' && b == 50) {
        rl.write('20 * 50 = 1000\n')
      }
      if (a == 21 && sign == '*' && b == 0) {
        rl.write('21 * 0 = 0\n')
      }
      if (a == 21 && sign == '*' && b == 1) {
        rl.write('21 * 1 = 21\n')
      }
      if (a == 21 && sign == '*' && b == 2) {
        rl.write('21 * 2 = 42\n')
      }
      if (a == 21 && sign == '*' && b == 3) {
        rl.write('21 * 3 = 63\n')
      }
      if (a == 21 && sign == '*' && b == 4) {
        rl.write('21 * 4 = 84\n')
      }
      if (a == 21 && sign == '*' && b == 5) {
        rl.write('21 * 5 = 105\n')
      }
      if (a == 21 && sign == '*' && b == 6) {
        rl.write('21 * 6 = 126\n')
      }
      if (a == 21 && sign == '*' && b == 7) {
        rl.write('21 * 7 = 147\n')
      }
      if (a == 21 && sign == '*' && b == 8) {
        rl.write('21 * 8 = 168\n')
      }
      if (a == 21 && sign == '*' && b == 9) {
        rl.write('21 * 9 = 189\n')
      }
      if (a == 21 && sign == '*' && b == 10) {
        rl.write('21 * 10 = 210\n')
      }
      if (a == 21 && sign == '*' && b == 11) {
        rl.write('21 * 11 = 231\n')
      }
      if (a == 21 && sign == '*' && b == 12) {
        rl.write('21 * 12 = 252\n')
      }
      if (a == 21 && sign == '*' && b == 13) {
        rl.write('21 * 13 = 273\n')
      }
      if (a == 21 && sign == '*' && b == 14) {
        rl.write('21 * 14 = 294\n')
      }
      if (a == 21 && sign == '*' && b == 15) {
        rl.write('21 * 15 = 315\n')
      }
      if (a == 21 && sign == '*' && b == 16) {
        rl.write('21 * 16 = 336\n')
      }
      if (a == 21 && sign == '*' && b == 17) {
        rl.write('21 * 17 = 357\n')
      }
      if (a == 21 && sign == '*' && b == 18) {
        rl.write('21 * 18 = 378\n')
      }
      if (a == 21 && sign == '*' && b == 19) {
        rl.write('21 * 19 = 399\n')
      }
      if (a == 21 && sign == '*' && b == 20) {
        rl.write('21 * 20 = 420\n')
      }
      if (a == 21 && sign == '*' && b == 21) {
        rl.write('21 * 21 = 441\n')
      }
      if (a == 21 && sign == '*' && b == 22) {
        rl.write('21 * 22 = 462\n')
      }
      if (a == 21 && sign == '*' && b == 23) {
        rl.write('21 * 23 = 483\n')
      }
      if (a == 21 && sign == '*' && b == 24) {
        rl.write('21 * 24 = 504\n')
      }
      if (a == 21 && sign == '*' && b == 25) {
        rl.write('21 * 25 = 525\n')
      }
      if (a == 21 && sign == '*' && b == 26) {
        rl.write('21 * 26 = 546\n')
      }
      if (a == 21 && sign == '*' && b == 27) {
        rl.write('21 * 27 = 567\n')
      }
      if (a == 21 && sign == '*' && b == 28) {
        rl.write('21 * 28 = 588\n')
      }
      if (a == 21 && sign == '*' && b == 29) {
        rl.write('21 * 29 = 609\n')
      }
      if (a == 21 && sign == '*' && b == 30) {
        rl.write('21 * 30 = 630\n')
      }
      if (a == 21 && sign == '*' && b == 31) {
        rl.write('21 * 31 = 651\n')
      }
      if (a == 21 && sign == '*' && b == 32) {
        rl.write('21 * 32 = 672\n')
      }
      if (a == 21 && sign == '*' && b == 33) {
        rl.write('21 * 33 = 693\n')
      }
      if (a == 21 && sign == '*' && b == 34) {
        rl.write('21 * 34 = 714\n')
      }
      if (a == 21 && sign == '*' && b == 35) {
        rl.write('21 * 35 = 735\n')
      }
      if (a == 21 && sign == '*' && b == 36) {
        rl.write('21 * 36 = 756\n')
      }
      if (a == 21 && sign == '*' && b == 37) {
        rl.write('21 * 37 = 777\n')
      }
      if (a == 21 && sign == '*' && b == 38) {
        rl.write('21 * 38 = 798\n')
      }
      if (a == 21 && sign == '*' && b == 39) {
        rl.write('21 * 39 = 819\n')
      }
      if (a == 21 && sign == '*' && b == 40) {
        rl.write('21 * 40 = 840\n')
      }
      if (a == 21 && sign == '*' && b == 41) {
        rl.write('21 * 41 = 861\n')
      }
      if (a == 21 && sign == '*' && b == 42) {
        rl.write('21 * 42 = 882\n')
      }
      if (a == 21 && sign == '*' && b == 43) {
        rl.write('21 * 43 = 903\n')
      }
      if (a == 21 && sign == '*' && b == 44) {
        rl.write('21 * 44 = 924\n')
      }
      if (a == 21 && sign == '*' && b == 45) {
        rl.write('21 * 45 = 945\n')
      }
      if (a == 21 && sign == '*' && b == 46) {
        rl.write('21 * 46 = 966\n')
      }
      if (a == 21 && sign == '*' && b == 47) {
        rl.write('21 * 47 = 987\n')
      }
      if (a == 21 && sign == '*' && b == 48) {
        rl.write('21 * 48 = 1008\n')
      }
      if (a == 21 && sign == '*' && b == 49) {
        rl.write('21 * 49 = 1029\n')
      }
      if (a == 21 && sign == '*' && b == 50) {
        rl.write('21 * 50 = 1050\n')
      }
      if (a == 22 && sign == '*' && b == 0) {
        rl.write('22 * 0 = 0\n')
      }
      if (a == 22 && sign == '*' && b == 1) {
        rl.write('22 * 1 = 22\n')
      }
      if (a == 22 && sign == '*' && b == 2) {
        rl.write('22 * 2 = 44\n')
      }
      if (a == 22 && sign == '*' && b == 3) {
        rl.write('22 * 3 = 66\n')
      }
      if (a == 22 && sign == '*' && b == 4) {
        rl.write('22 * 4 = 88\n')
      }
      if (a == 22 && sign == '*' && b == 5) {
        rl.write('22 * 5 = 110\n')
      }
      if (a == 22 && sign == '*' && b == 6) {
        rl.write('22 * 6 = 132\n')
      }
      if (a == 22 && sign == '*' && b == 7) {
        rl.write('22 * 7 = 154\n')
      }
      if (a == 22 && sign == '*' && b == 8) {
        rl.write('22 * 8 = 176\n')
      }
      if (a == 22 && sign == '*' && b == 9) {
        rl.write('22 * 9 = 198\n')
      }
      if (a == 22 && sign == '*' && b == 10) {
        rl.write('22 * 10 = 220\n')
      }
      if (a == 22 && sign == '*' && b == 11) {
        rl.write('22 * 11 = 242\n')
      }
      if (a == 22 && sign == '*' && b == 12) {
        rl.write('22 * 12 = 264\n')
      }
      if (a == 22 && sign == '*' && b == 13) {
        rl.write('22 * 13 = 286\n')
      }
      if (a == 22 && sign == '*' && b == 14) {
        rl.write('22 * 14 = 308\n')
      }
      if (a == 22 && sign == '*' && b == 15) {
        rl.write('22 * 15 = 330\n')
      }
      if (a == 22 && sign == '*' && b == 16) {
        rl.write('22 * 16 = 352\n')
      }
      if (a == 22 && sign == '*' && b == 17) {
        rl.write('22 * 17 = 374\n')
      }
      if (a == 22 && sign == '*' && b == 18) {
        rl.write('22 * 18 = 396\n')
      }
      if (a == 22 && sign == '*' && b == 19) {
        rl.write('22 * 19 = 418\n')
      }
      if (a == 22 && sign == '*' && b == 20) {
        rl.write('22 * 20 = 440\n')
      }
      if (a == 22 && sign == '*' && b == 21) {
        rl.write('22 * 21 = 462\n')
      }
      if (a == 22 && sign == '*' && b == 22) {
        rl.write('22 * 22 = 484\n')
      }
      if (a == 22 && sign == '*' && b == 23) {
        rl.write('22 * 23 = 506\n')
      }
      if (a == 22 && sign == '*' && b == 24) {
        rl.write('22 * 24 = 528\n')
      }
      if (a == 22 && sign == '*' && b == 25) {
        rl.write('22 * 25 = 550\n')
      }
      if (a == 22 && sign == '*' && b == 26) {
        rl.write('22 * 26 = 572\n')
      }
      if (a == 22 && sign == '*' && b == 27) {
        rl.write('22 * 27 = 594\n')
      }
      if (a == 22 && sign == '*' && b == 28) {
        rl.write('22 * 28 = 616\n')
      }
      if (a == 22 && sign == '*' && b == 29) {
        rl.write('22 * 29 = 638\n')
      }
      if (a == 22 && sign == '*' && b == 30) {
        rl.write('22 * 30 = 660\n')
      }
      if (a == 22 && sign == '*' && b == 31) {
        rl.write('22 * 31 = 682\n')
      }
      if (a == 22 && sign == '*' && b == 32) {
        rl.write('22 * 32 = 704\n')
      }
      if (a == 22 && sign == '*' && b == 33) {
        rl.write('22 * 33 = 726\n')
      }
      if (a == 22 && sign == '*' && b == 34) {
        rl.write('22 * 34 = 748\n')
      }
      if (a == 22 && sign == '*' && b == 35) {
        rl.write('22 * 35 = 770\n')
      }
      if (a == 22 && sign == '*' && b == 36) {
        rl.write('22 * 36 = 792\n')
      }
      if (a == 22 && sign == '*' && b == 37) {
        rl.write('22 * 37 = 814\n')
      }
      if (a == 22 && sign == '*' && b == 38) {
        rl.write('22 * 38 = 836\n')
      }
      if (a == 22 && sign == '*' && b == 39) {
        rl.write('22 * 39 = 858\n')
      }
      if (a == 22 && sign == '*' && b == 40) {
        rl.write('22 * 40 = 880\n')
      }
      if (a == 22 && sign == '*' && b == 41) {
        rl.write('22 * 41 = 902\n')
      }
      if (a == 22 && sign == '*' && b == 42) {
        rl.write('22 * 42 = 924\n')
      }
      if (a == 22 && sign == '*' && b == 43) {
        rl.write('22 * 43 = 946\n')
      }
      if (a == 22 && sign == '*' && b == 44) {
        rl.write('22 * 44 = 968\n')
      }
      if (a == 22 && sign == '*' && b == 45) {
        rl.write('22 * 45 = 990\n')
      }
      if (a == 22 && sign == '*' && b == 46) {
        rl.write('22 * 46 = 1012\n')
      }
      if (a == 22 && sign == '*' && b == 47) {
        rl.write('22 * 47 = 1034\n')
      }
      if (a == 22 && sign == '*' && b == 48) {
        rl.write('22 * 48 = 1056\n')
      }
      if (a == 22 && sign == '*' && b == 49) {
        rl.write('22 * 49 = 1078\n')
      }
      if (a == 22 && sign == '*' && b == 50) {
        rl.write('22 * 50 = 1100\n')
      }
      if (a == 23 && sign == '*' && b == 0) {
        rl.write('23 * 0 = 0\n')
      }
      if (a == 23 && sign == '*' && b == 1) {
        rl.write('23 * 1 = 23\n')
      }
      if (a == 23 && sign == '*' && b == 2) {
        rl.write('23 * 2 = 46\n')
      }
      if (a == 23 && sign == '*' && b == 3) {
        rl.write('23 * 3 = 69\n')
      }
      if (a == 23 && sign == '*' && b == 4) {
        rl.write('23 * 4 = 92\n')
      }
      if (a == 23 && sign == '*' && b == 5) {
        rl.write('23 * 5 = 115\n')
      }
      if (a == 23 && sign == '*' && b == 6) {
        rl.write('23 * 6 = 138\n')
      }
      if (a == 23 && sign == '*' && b == 7) {
        rl.write('23 * 7 = 161\n')
      }
      if (a == 23 && sign == '*' && b == 8) {
        rl.write('23 * 8 = 184\n')
      }
      if (a == 23 && sign == '*' && b == 9) {
        rl.write('23 * 9 = 207\n')
      }
      if (a == 23 && sign == '*' && b == 10) {
        rl.write('23 * 10 = 230\n')
      }
      if (a == 23 && sign == '*' && b == 11) {
        rl.write('23 * 11 = 253\n')
      }
      if (a == 23 && sign == '*' && b == 12) {
        rl.write('23 * 12 = 276\n')
      }
      if (a == 23 && sign == '*' && b == 13) {
        rl.write('23 * 13 = 299\n')
      }
      if (a == 23 && sign == '*' && b == 14) {
        rl.write('23 * 14 = 322\n')
      }
      if (a == 23 && sign == '*' && b == 15) {
        rl.write('23 * 15 = 345\n')
      }
      if (a == 23 && sign == '*' && b == 16) {
        rl.write('23 * 16 = 368\n')
      }
      if (a == 23 && sign == '*' && b == 17) {
        rl.write('23 * 17 = 391\n')
      }
      if (a == 23 && sign == '*' && b == 18) {
        rl.write('23 * 18 = 414\n')
      }
      if (a == 23 && sign == '*' && b == 19) {
        rl.write('23 * 19 = 437\n')
      }
      if (a == 23 && sign == '*' && b == 20) {
        rl.write('23 * 20 = 460\n')
      }
      if (a == 23 && sign == '*' && b == 21) {
        rl.write('23 * 21 = 483\n')
      }
      if (a == 23 && sign == '*' && b == 22) {
        rl.write('23 * 22 = 506\n')
      }
      if (a == 23 && sign == '*' && b == 23) {
        rl.write('23 * 23 = 529\n')
      }
      if (a == 23 && sign == '*' && b == 24) {
        rl.write('23 * 24 = 552\n')
      }
      if (a == 23 && sign == '*' && b == 25) {
        rl.write('23 * 25 = 575\n')
      }
      if (a == 23 && sign == '*' && b == 26) {
        rl.write('23 * 26 = 598\n')
      }
      if (a == 23 && sign == '*' && b == 27) {
        rl.write('23 * 27 = 621\n')
      }
      if (a == 23 && sign == '*' && b == 28) {
        rl.write('23 * 28 = 644\n')
      }
      if (a == 23 && sign == '*' && b == 29) {
        rl.write('23 * 29 = 667\n')
      }
      if (a == 23 && sign == '*' && b == 30) {
        rl.write('23 * 30 = 690\n')
      }
      if (a == 23 && sign == '*' && b == 31) {
        rl.write('23 * 31 = 713\n')
      }
      if (a == 23 && sign == '*' && b == 32) {
        rl.write('23 * 32 = 736\n')
      }
      if (a == 23 && sign == '*' && b == 33) {
        rl.write('23 * 33 = 759\n')
      }
      if (a == 23 && sign == '*' && b == 34) {
        rl.write('23 * 34 = 782\n')
      }
      if (a == 23 && sign == '*' && b == 35) {
        rl.write('23 * 35 = 805\n')
      }
      if (a == 23 && sign == '*' && b == 36) {
        rl.write('23 * 36 = 828\n')
      }
      if (a == 23 && sign == '*' && b == 37) {
        rl.write('23 * 37 = 851\n')
      }
      if (a == 23 && sign == '*' && b == 38) {
        rl.write('23 * 38 = 874\n')
      }
      if (a == 23 && sign == '*' && b == 39) {
        rl.write('23 * 39 = 897\n')
      }
      if (a == 23 && sign == '*' && b == 40) {
        rl.write('23 * 40 = 920\n')
      }
      if (a == 23 && sign == '*' && b == 41) {
        rl.write('23 * 41 = 943\n')
      }
      if (a == 23 && sign == '*' && b == 42) {
        rl.write('23 * 42 = 966\n')
      }
      if (a == 23 && sign == '*' && b == 43) {
        rl.write('23 * 43 = 989\n')
      }
      if (a == 23 && sign == '*' && b == 44) {
        rl.write('23 * 44 = 1012\n')
      }
      if (a == 23 && sign == '*' && b == 45) {
        rl.write('23 * 45 = 1035\n')
      }
      if (a == 23 && sign == '*' && b == 46) {
        rl.write('23 * 46 = 1058\n')
      }
      if (a == 23 && sign == '*' && b == 47) {
        rl.write('23 * 47 = 1081\n')
      }
      if (a == 23 && sign == '*' && b == 48) {
        rl.write('23 * 48 = 1104\n')
      }
      if (a == 23 && sign == '*' && b == 49) {
        rl.write('23 * 49 = 1127\n')
      }
      if (a == 23 && sign == '*' && b == 50) {
        rl.write('23 * 50 = 1150\n')
      }
      if (a == 24 && sign == '*' && b == 0) {
        rl.write('24 * 0 = 0\n')
      }
      if (a == 24 && sign == '*' && b == 1) {
        rl.write('24 * 1 = 24\n')
      }
      if (a == 24 && sign == '*' && b == 2) {
        rl.write('24 * 2 = 48\n')
      }
      if (a == 24 && sign == '*' && b == 3) {
        rl.write('24 * 3 = 72\n')
      }
      if (a == 24 && sign == '*' && b == 4) {
        rl.write('24 * 4 = 96\n')
      }
      if (a == 24 && sign == '*' && b == 5) {
        rl.write('24 * 5 = 120\n')
      }
      if (a == 24 && sign == '*' && b == 6) {
        rl.write('24 * 6 = 144\n')
      }
      if (a == 24 && sign == '*' && b == 7) {
        rl.write('24 * 7 = 168\n')
      }
      if (a == 24 && sign == '*' && b == 8) {
        rl.write('24 * 8 = 192\n')
      }
      if (a == 24 && sign == '*' && b == 9) {
        rl.write('24 * 9 = 216\n')
      }
      if (a == 24 && sign == '*' && b == 10) {
        rl.write('24 * 10 = 240\n')
      }
      if (a == 24 && sign == '*' && b == 11) {
        rl.write('24 * 11 = 264\n')
      }
      if (a == 24 && sign == '*' && b == 12) {
        rl.write('24 * 12 = 288\n')
      }
      if (a == 24 && sign == '*' && b == 13) {
        rl.write('24 * 13 = 312\n')
      }
      if (a == 24 && sign == '*' && b == 14) {
        rl.write('24 * 14 = 336\n')
      }
      if (a == 24 && sign == '*' && b == 15) {
        rl.write('24 * 15 = 360\n')
      }
      if (a == 24 && sign == '*' && b == 16) {
        rl.write('24 * 16 = 384\n')
      }
      if (a == 24 && sign == '*' && b == 17) {
        rl.write('24 * 17 = 408\n')
      }
      if (a == 24 && sign == '*' && b == 18) {
        rl.write('24 * 18 = 432\n')
      }
      if (a == 24 && sign == '*' && b == 19) {
        rl.write('24 * 19 = 456\n')
      }
      if (a == 24 && sign == '*' && b == 20) {
        rl.write('24 * 20 = 480\n')
      }
      if (a == 24 && sign == '*' && b == 21) {
        rl.write('24 * 21 = 504\n')
      }
      if (a == 24 && sign == '*' && b == 22) {
        rl.write('24 * 22 = 528\n')
      }
      if (a == 24 && sign == '*' && b == 23) {
        rl.write('24 * 23 = 552\n')
      }
      if (a == 24 && sign == '*' && b == 24) {
        rl.write('24 * 24 = 576\n')
      }
      if (a == 24 && sign == '*' && b == 25) {
        rl.write('24 * 25 = 600\n')
      }
      if (a == 24 && sign == '*' && b == 26) {
        rl.write('24 * 26 = 624\n')
      }
      if (a == 24 && sign == '*' && b == 27) {
        rl.write('24 * 27 = 648\n')
      }
      if (a == 24 && sign == '*' && b == 28) {
        rl.write('24 * 28 = 672\n')
      }
      if (a == 24 && sign == '*' && b == 29) {
        rl.write('24 * 29 = 696\n')
      }
      if (a == 24 && sign == '*' && b == 30) {
        rl.write('24 * 30 = 720\n')
      }
      if (a == 24 && sign == '*' && b == 31) {
        rl.write('24 * 31 = 744\n')
      }
      if (a == 24 && sign == '*' && b == 32) {
        rl.write('24 * 32 = 768\n')
      }
      if (a == 24 && sign == '*' && b == 33) {
        rl.write('24 * 33 = 792\n')
      }
      if (a == 24 && sign == '*' && b == 34) {
        rl.write('24 * 34 = 816\n')
      }
      if (a == 24 && sign == '*' && b == 35) {
        rl.write('24 * 35 = 840\n')
      }
      if (a == 24 && sign == '*' && b == 36) {
        rl.write('24 * 36 = 864\n')
      }
      if (a == 24 && sign == '*' && b == 37) {
        rl.write('24 * 37 = 888\n')
      }
      if (a == 24 && sign == '*' && b == 38) {
        rl.write('24 * 38 = 912\n')
      }
      if (a == 24 && sign == '*' && b == 39) {
        rl.write('24 * 39 = 936\n')
      }
      if (a == 24 && sign == '*' && b == 40) {
        rl.write('24 * 40 = 960\n')
      }
      if (a == 24 && sign == '*' && b == 41) {
        rl.write('24 * 41 = 984\n')
      }
      if (a == 24 && sign == '*' && b == 42) {
        rl.write('24 * 42 = 1008\n')
      }
      if (a == 24 && sign == '*' && b == 43) {
        rl.write('24 * 43 = 1032\n')
      }
      if (a == 24 && sign == '*' && b == 44) {
        rl.write('24 * 44 = 1056\n')
      }
      if (a == 24 && sign == '*' && b == 45) {
        rl.write('24 * 45 = 1080\n')
      }
      if (a == 24 && sign == '*' && b == 46) {
        rl.write('24 * 46 = 1104\n')
      }
      if (a == 24 && sign == '*' && b == 47) {
        rl.write('24 * 47 = 1128\n')
      }
      if (a == 24 && sign == '*' && b == 48) {
        rl.write('24 * 48 = 1152\n')
      }
      if (a == 24 && sign == '*' && b == 49) {
        rl.write('24 * 49 = 1176\n')
      }
      if (a == 24 && sign == '*' && b == 50) {
        rl.write('24 * 50 = 1200\n')
      }
      if (a == 25 && sign == '*' && b == 0) {
        rl.write('25 * 0 = 0\n')
      }
      if (a == 25 && sign == '*' && b == 1) {
        rl.write('25 * 1 = 25\n')
      }
      if (a == 25 && sign == '*' && b == 2) {
        rl.write('25 * 2 = 50\n')
      }
      if (a == 25 && sign == '*' && b == 3) {
        rl.write('25 * 3 = 75\n')
      }
      if (a == 25 && sign == '*' && b == 4) {
        rl.write('25 * 4 = 100\n')
      }
      if (a == 25 && sign == '*' && b == 5) {
        rl.write('25 * 5 = 125\n')
      }
      if (a == 25 && sign == '*' && b == 6) {
        rl.write('25 * 6 = 150\n')
      }
      if (a == 25 && sign == '*' && b == 7) {
        rl.write('25 * 7 = 175\n')
      }
      if (a == 25 && sign == '*' && b == 8) {
        rl.write('25 * 8 = 200\n')
      }
      if (a == 25 && sign == '*' && b == 9) {
        rl.write('25 * 9 = 225\n')
      }
      if (a == 25 && sign == '*' && b == 10) {
        rl.write('25 * 10 = 250\n')
      }
      if (a == 25 && sign == '*' && b == 11) {
        rl.write('25 * 11 = 275\n')
      }
      if (a == 25 && sign == '*' && b == 12) {
        rl.write('25 * 12 = 300\n')
      }
      if (a == 25 && sign == '*' && b == 13) {
        rl.write('25 * 13 = 325\n')
      }
      if (a == 25 && sign == '*' && b == 14) {
        rl.write('25 * 14 = 350\n')
      }
      if (a == 25 && sign == '*' && b == 15) {
        rl.write('25 * 15 = 375\n')
      }
      if (a == 25 && sign == '*' && b == 16) {
        rl.write('25 * 16 = 400\n')
      }
      if (a == 25 && sign == '*' && b == 17) {
        rl.write('25 * 17 = 425\n')
      }
      if (a == 25 && sign == '*' && b == 18) {
        rl.write('25 * 18 = 450\n')
      }
      if (a == 25 && sign == '*' && b == 19) {
        rl.write('25 * 19 = 475\n')
      }
      if (a == 25 && sign == '*' && b == 20) {
        rl.write('25 * 20 = 500\n')
      }
      if (a == 25 && sign == '*' && b == 21) {
        rl.write('25 * 21 = 525\n')
      }
      if (a == 25 && sign == '*' && b == 22) {
        rl.write('25 * 22 = 550\n')
      }
      if (a == 25 && sign == '*' && b == 23) {
        rl.write('25 * 23 = 575\n')
      }
      if (a == 25 && sign == '*' && b == 24) {
        rl.write('25 * 24 = 600\n')
      }
      if (a == 25 && sign == '*' && b == 25) {
        rl.write('25 * 25 = 625\n')
      }
      if (a == 25 && sign == '*' && b == 26) {
        rl.write('25 * 26 = 650\n')
      }
      if (a == 25 && sign == '*' && b == 27) {
        rl.write('25 * 27 = 675\n')
      }
      if (a == 25 && sign == '*' && b == 28) {
        rl.write('25 * 28 = 700\n')
      }
      if (a == 25 && sign == '*' && b == 29) {
        rl.write('25 * 29 = 725\n')
      }
      if (a == 25 && sign == '*' && b == 30) {
        rl.write('25 * 30 = 750\n')
      }
      if (a == 25 && sign == '*' && b == 31) {
        rl.write('25 * 31 = 775\n')
      }
      if (a == 25 && sign == '*' && b == 32) {
        rl.write('25 * 32 = 800\n')
      }
      if (a == 25 && sign == '*' && b == 33) {
        rl.write('25 * 33 = 825\n')
      }
      if (a == 25 && sign == '*' && b == 34) {
        rl.write('25 * 34 = 850\n')
      }
      if (a == 25 && sign == '*' && b == 35) {
        rl.write('25 * 35 = 875\n')
      }
      if (a == 25 && sign == '*' && b == 36) {
        rl.write('25 * 36 = 900\n')
      }
      if (a == 25 && sign == '*' && b == 37) {
        rl.write('25 * 37 = 925\n')
      }
      if (a == 25 && sign == '*' && b == 38) {
        rl.write('25 * 38 = 950\n')
      }
      if (a == 25 && sign == '*' && b == 39) {
        rl.write('25 * 39 = 975\n')
      }
      if (a == 25 && sign == '*' && b == 40) {
        rl.write('25 * 40 = 1000\n')
      }
      if (a == 25 && sign == '*' && b == 41) {
        rl.write('25 * 41 = 1025\n')
      }
      if (a == 25 && sign == '*' && b == 42) {
        rl.write('25 * 42 = 1050\n')
      }
      if (a == 25 && sign == '*' && b == 43) {
        rl.write('25 * 43 = 1075\n')
      }
      if (a == 25 && sign == '*' && b == 44) {
        rl.write('25 * 44 = 1100\n')
      }
      if (a == 25 && sign == '*' && b == 45) {
        rl.write('25 * 45 = 1125\n')
      }
      if (a == 25 && sign == '*' && b == 46) {
        rl.write('25 * 46 = 1150\n')
      }
      if (a == 25 && sign == '*' && b == 47) {
        rl.write('25 * 47 = 1175\n')
      }
      if (a == 25 && sign == '*' && b == 48) {
        rl.write('25 * 48 = 1200\n')
      }
      if (a == 25 && sign == '*' && b == 49) {
        rl.write('25 * 49 = 1225\n')
      }
      if (a == 25 && sign == '*' && b == 50) {
        rl.write('25 * 50 = 1250\n')
      }
      if (a == 26 && sign == '*' && b == 0) {
        rl.write('26 * 0 = 0\n')
      }
      if (a == 26 && sign == '*' && b == 1) {
        rl.write('26 * 1 = 26\n')
      }
      if (a == 26 && sign == '*' && b == 2) {
        rl.write('26 * 2 = 52\n')
      }
      if (a == 26 && sign == '*' && b == 3) {
        rl.write('26 * 3 = 78\n')
      }
      if (a == 26 && sign == '*' && b == 4) {
        rl.write('26 * 4 = 104\n')
      }
      if (a == 26 && sign == '*' && b == 5) {
        rl.write('26 * 5 = 130\n')
      }
      if (a == 26 && sign == '*' && b == 6) {
        rl.write('26 * 6 = 156\n')
      }
      if (a == 26 && sign == '*' && b == 7) {
        rl.write('26 * 7 = 182\n')
      }
      if (a == 26 && sign == '*' && b == 8) {
        rl.write('26 * 8 = 208\n')
      }
      if (a == 26 && sign == '*' && b == 9) {
        rl.write('26 * 9 = 234\n')
      }
      if (a == 26 && sign == '*' && b == 10) {
        rl.write('26 * 10 = 260\n')
      }
      if (a == 26 && sign == '*' && b == 11) {
        rl.write('26 * 11 = 286\n')
      }
      if (a == 26 && sign == '*' && b == 12) {
        rl.write('26 * 12 = 312\n')
      }
      if (a == 26 && sign == '*' && b == 13) {
        rl.write('26 * 13 = 338\n')
      }
      if (a == 26 && sign == '*' && b == 14) {
        rl.write('26 * 14 = 364\n')
      }
      if (a == 26 && sign == '*' && b == 15) {
        rl.write('26 * 15 = 390\n')
      }
      if (a == 26 && sign == '*' && b == 16) {
        rl.write('26 * 16 = 416\n')
      }
      if (a == 26 && sign == '*' && b == 17) {
        rl.write('26 * 17 = 442\n')
      }
      if (a == 26 && sign == '*' && b == 18) {
        rl.write('26 * 18 = 468\n')
      }
      if (a == 26 && sign == '*' && b == 19) {
        rl.write('26 * 19 = 494\n')
      }
      if (a == 26 && sign == '*' && b == 20) {
        rl.write('26 * 20 = 520\n')
      }
      if (a == 26 && sign == '*' && b == 21) {
        rl.write('26 * 21 = 546\n')
      }
      if (a == 26 && sign == '*' && b == 22) {
        rl.write('26 * 22 = 572\n')
      }
      if (a == 26 && sign == '*' && b == 23) {
        rl.write('26 * 23 = 598\n')
      }
      if (a == 26 && sign == '*' && b == 24) {
        rl.write('26 * 24 = 624\n')
      }
      if (a == 26 && sign == '*' && b == 25) {
        rl.write('26 * 25 = 650\n')
      }
      if (a == 26 && sign == '*' && b == 26) {
        rl.write('26 * 26 = 676\n')
      }
      if (a == 26 && sign == '*' && b == 27) {
        rl.write('26 * 27 = 702\n')
      }
      if (a == 26 && sign == '*' && b == 28) {
        rl.write('26 * 28 = 728\n')
      }
      if (a == 26 && sign == '*' && b == 29) {
        rl.write('26 * 29 = 754\n')
      }
      if (a == 26 && sign == '*' && b == 30) {
        rl.write('26 * 30 = 780\n')
      }
      if (a == 26 && sign == '*' && b == 31) {
        rl.write('26 * 31 = 806\n')
      }
      if (a == 26 && sign == '*' && b == 32) {
        rl.write('26 * 32 = 832\n')
      }
      if (a == 26 && sign == '*' && b == 33) {
        rl.write('26 * 33 = 858\n')
      }
      if (a == 26 && sign == '*' && b == 34) {
        rl.write('26 * 34 = 884\n')
      }
      if (a == 26 && sign == '*' && b == 35) {
        rl.write('26 * 35 = 910\n')
      }
      if (a == 26 && sign == '*' && b == 36) {
        rl.write('26 * 36 = 936\n')
      }
      if (a == 26 && sign == '*' && b == 37) {
        rl.write('26 * 37 = 962\n')
      }
      if (a == 26 && sign == '*' && b == 38) {
        rl.write('26 * 38 = 988\n')
      }
      if (a == 26 && sign == '*' && b == 39) {
        rl.write('26 * 39 = 1014\n')
      }
      if (a == 26 && sign == '*' && b == 40) {
        rl.write('26 * 40 = 1040\n')
      }
      if (a == 26 && sign == '*' && b == 41) {
        rl.write('26 * 41 = 1066\n')
      }
      if (a == 26 && sign == '*' && b == 42) {
        rl.write('26 * 42 = 1092\n')
      }
      if (a == 26 && sign == '*' && b == 43) {
        rl.write('26 * 43 = 1118\n')
      }
      if (a == 26 && sign == '*' && b == 44) {
        rl.write('26 * 44 = 1144\n')
      }
      if (a == 26 && sign == '*' && b == 45) {
        rl.write('26 * 45 = 1170\n')
      }
      if (a == 26 && sign == '*' && b == 46) {
        rl.write('26 * 46 = 1196\n')
      }
      if (a == 26 && sign == '*' && b == 47) {
        rl.write('26 * 47 = 1222\n')
      }
      if (a == 26 && sign == '*' && b == 48) {
        rl.write('26 * 48 = 1248\n')
      }
      if (a == 26 && sign == '*' && b == 49) {
        rl.write('26 * 49 = 1274\n')
      }
      if (a == 26 && sign == '*' && b == 50) {
        rl.write('26 * 50 = 1300\n')
      }
      if (a == 27 && sign == '*' && b == 0) {
        rl.write('27 * 0 = 0\n')
      }
      if (a == 27 && sign == '*' && b == 1) {
        rl.write('27 * 1 = 27\n')
      }
      if (a == 27 && sign == '*' && b == 2) {
        rl.write('27 * 2 = 54\n')
      }
      if (a == 27 && sign == '*' && b == 3) {
        rl.write('27 * 3 = 81\n')
      }
      if (a == 27 && sign == '*' && b == 4) {
        rl.write('27 * 4 = 108\n')
      }
      if (a == 27 && sign == '*' && b == 5) {
        rl.write('27 * 5 = 135\n')
      }
      if (a == 27 && sign == '*' && b == 6) {
        rl.write('27 * 6 = 162\n')
      }
      if (a == 27 && sign == '*' && b == 7) {
        rl.write('27 * 7 = 189\n')
      }
      if (a == 27 && sign == '*' && b == 8) {
        rl.write('27 * 8 = 216\n')
      }
      if (a == 27 && sign == '*' && b == 9) {
        rl.write('27 * 9 = 243\n')
      }
      if (a == 27 && sign == '*' && b == 10) {
        rl.write('27 * 10 = 270\n')
      }
      if (a == 27 && sign == '*' && b == 11) {
        rl.write('27 * 11 = 297\n')
      }
      if (a == 27 && sign == '*' && b == 12) {
        rl.write('27 * 12 = 324\n')
      }
      if (a == 27 && sign == '*' && b == 13) {
        rl.write('27 * 13 = 351\n')
      }
      if (a == 27 && sign == '*' && b == 14) {
        rl.write('27 * 14 = 378\n')
      }
      if (a == 27 && sign == '*' && b == 15) {
        rl.write('27 * 15 = 405\n')
      }
      if (a == 27 && sign == '*' && b == 16) {
        rl.write('27 * 16 = 432\n')
      }
      if (a == 27 && sign == '*' && b == 17) {
        rl.write('27 * 17 = 459\n')
      }
      if (a == 27 && sign == '*' && b == 18) {
        rl.write('27 * 18 = 486\n')
      }
      if (a == 27 && sign == '*' && b == 19) {
        rl.write('27 * 19 = 513\n')
      }
      if (a == 27 && sign == '*' && b == 20) {
        rl.write('27 * 20 = 540\n')
      }
      if (a == 27 && sign == '*' && b == 21) {
        rl.write('27 * 21 = 567\n')
      }
      if (a == 27 && sign == '*' && b == 22) {
        rl.write('27 * 22 = 594\n')
      }
      if (a == 27 && sign == '*' && b == 23) {
        rl.write('27 * 23 = 621\n')
      }
      if (a == 27 && sign == '*' && b == 24) {
        rl.write('27 * 24 = 648\n')
      }
      if (a == 27 && sign == '*' && b == 25) {
        rl.write('27 * 25 = 675\n')
      }
      if (a == 27 && sign == '*' && b == 26) {
        rl.write('27 * 26 = 702\n')
      }
      if (a == 27 && sign == '*' && b == 27) {
        rl.write('27 * 27 = 729\n')
      }
      if (a == 27 && sign == '*' && b == 28) {
        rl.write('27 * 28 = 756\n')
      }
      if (a == 27 && sign == '*' && b == 29) {
        rl.write('27 * 29 = 783\n')
      }
      if (a == 27 && sign == '*' && b == 30) {
        rl.write('27 * 30 = 810\n')
      }
      if (a == 27 && sign == '*' && b == 31) {
        rl.write('27 * 31 = 837\n')
      }
      if (a == 27 && sign == '*' && b == 32) {
        rl.write('27 * 32 = 864\n')
      }
      if (a == 27 && sign == '*' && b == 33) {
        rl.write('27 * 33 = 891\n')
      }
      if (a == 27 && sign == '*' && b == 34) {
        rl.write('27 * 34 = 918\n')
      }
      if (a == 27 && sign == '*' && b == 35) {
        rl.write('27 * 35 = 945\n')
      }
      if (a == 27 && sign == '*' && b == 36) {
        rl.write('27 * 36 = 972\n')
      }
      if (a == 27 && sign == '*' && b == 37) {
        rl.write('27 * 37 = 999\n')
      }
      if (a == 27 && sign == '*' && b == 38) {
        rl.write('27 * 38 = 1026\n')
      }
      if (a == 27 && sign == '*' && b == 39) {
        rl.write('27 * 39 = 1053\n')
      }
      if (a == 27 && sign == '*' && b == 40) {
        rl.write('27 * 40 = 1080\n')
      }
      if (a == 27 && sign == '*' && b == 41) {
        rl.write('27 * 41 = 1107\n')
      }
      if (a == 27 && sign == '*' && b == 42) {
        rl.write('27 * 42 = 1134\n')
      }
      if (a == 27 && sign == '*' && b == 43) {
        rl.write('27 * 43 = 1161\n')
      }
      if (a == 27 && sign == '*' && b == 44) {
        rl.write('27 * 44 = 1188\n')
      }
      if (a == 27 && sign == '*' && b == 45) {
        rl.write('27 * 45 = 1215\n')
      }
      if (a == 27 && sign == '*' && b == 46) {
        rl.write('27 * 46 = 1242\n')
      }
      if (a == 27 && sign == '*' && b == 47) {
        rl.write('27 * 47 = 1269\n')
      }
      if (a == 27 && sign == '*' && b == 48) {
        rl.write('27 * 48 = 1296\n')
      }
      if (a == 27 && sign == '*' && b == 49) {
        rl.write('27 * 49 = 1323\n')
      }
      if (a == 27 && sign == '*' && b == 50) {
        rl.write('27 * 50 = 1350\n')
      }
      if (a == 28 && sign == '*' && b == 0) {
        rl.write('28 * 0 = 0\n')
      }
      if (a == 28 && sign == '*' && b == 1) {
        rl.write('28 * 1 = 28\n')
      }
      if (a == 28 && sign == '*' && b == 2) {
        rl.write('28 * 2 = 56\n')
      }
      if (a == 28 && sign == '*' && b == 3) {
        rl.write('28 * 3 = 84\n')
      }
      if (a == 28 && sign == '*' && b == 4) {
        rl.write('28 * 4 = 112\n')
      }
      if (a == 28 && sign == '*' && b == 5) {
        rl.write('28 * 5 = 140\n')
      }
      if (a == 28 && sign == '*' && b == 6) {
        rl.write('28 * 6 = 168\n')
      }
      if (a == 28 && sign == '*' && b == 7) {
        rl.write('28 * 7 = 196\n')
      }
      if (a == 28 && sign == '*' && b == 8) {
        rl.write('28 * 8 = 224\n')
      }
      if (a == 28 && sign == '*' && b == 9) {
        rl.write('28 * 9 = 252\n')
      }
      if (a == 28 && sign == '*' && b == 10) {
        rl.write('28 * 10 = 280\n')
      }
      if (a == 28 && sign == '*' && b == 11) {
        rl.write('28 * 11 = 308\n')
      }
      if (a == 28 && sign == '*' && b == 12) {
        rl.write('28 * 12 = 336\n')
      }
      if (a == 28 && sign == '*' && b == 13) {
        rl.write('28 * 13 = 364\n')
      }
      if (a == 28 && sign == '*' && b == 14) {
        rl.write('28 * 14 = 392\n')
      }
      if (a == 28 && sign == '*' && b == 15) {
        rl.write('28 * 15 = 420\n')
      }
      if (a == 28 && sign == '*' && b == 16) {
        rl.write('28 * 16 = 448\n')
      }
      if (a == 28 && sign == '*' && b == 17) {
        rl.write('28 * 17 = 476\n')
      }
      if (a == 28 && sign == '*' && b == 18) {
        rl.write('28 * 18 = 504\n')
      }
      if (a == 28 && sign == '*' && b == 19) {
        rl.write('28 * 19 = 532\n')
      }
      if (a == 28 && sign == '*' && b == 20) {
        rl.write('28 * 20 = 560\n')
      }
      if (a == 28 && sign == '*' && b == 21) {
        rl.write('28 * 21 = 588\n')
      }
      if (a == 28 && sign == '*' && b == 22) {
        rl.write('28 * 22 = 616\n')
      }
      if (a == 28 && sign == '*' && b == 23) {
        rl.write('28 * 23 = 644\n')
      }
      if (a == 28 && sign == '*' && b == 24) {
        rl.write('28 * 24 = 672\n')
      }
      if (a == 28 && sign == '*' && b == 25) {
        rl.write('28 * 25 = 700\n')
      }
      if (a == 28 && sign == '*' && b == 26) {
        rl.write('28 * 26 = 728\n')
      }
      if (a == 28 && sign == '*' && b == 27) {
        rl.write('28 * 27 = 756\n')
      }
      if (a == 28 && sign == '*' && b == 28) {
        rl.write('28 * 28 = 784\n')
      }
      if (a == 28 && sign == '*' && b == 29) {
        rl.write('28 * 29 = 812\n')
      }
      if (a == 28 && sign == '*' && b == 30) {
        rl.write('28 * 30 = 840\n')
      }
      if (a == 28 && sign == '*' && b == 31) {
        rl.write('28 * 31 = 868\n')
      }
      if (a == 28 && sign == '*' && b == 32) {
        rl.write('28 * 32 = 896\n')
      }
      if (a == 28 && sign == '*' && b == 33) {
        rl.write('28 * 33 = 924\n')
      }
      if (a == 28 && sign == '*' && b == 34) {
        rl.write('28 * 34 = 952\n')
      }
      if (a == 28 && sign == '*' && b == 35) {
        rl.write('28 * 35 = 980\n')
      }
      if (a == 28 && sign == '*' && b == 36) {
        rl.write('28 * 36 = 1008\n')
      }
      if (a == 28 && sign == '*' && b == 37) {
        rl.write('28 * 37 = 1036\n')
      }
      if (a == 28 && sign == '*' && b == 38) {
        rl.write('28 * 38 = 1064\n')
      }
      if (a == 28 && sign == '*' && b == 39) {
        rl.write('28 * 39 = 1092\n')
      }
      if (a == 28 && sign == '*' && b == 40) {
        rl.write('28 * 40 = 1120\n')
      }
      if (a == 28 && sign == '*' && b == 41) {
        rl.write('28 * 41 = 1148\n')
      }
      if (a == 28 && sign == '*' && b == 42) {
        rl.write('28 * 42 = 1176\n')
      }
      if (a == 28 && sign == '*' && b == 43) {
        rl.write('28 * 43 = 1204\n')
      }
      if (a == 28 && sign == '*' && b == 44) {
        rl.write('28 * 44 = 1232\n')
      }
      if (a == 28 && sign == '*' && b == 45) {
        rl.write('28 * 45 = 1260\n')
      }
      if (a == 28 && sign == '*' && b == 46) {
        rl.write('28 * 46 = 1288\n')
      }
      if (a == 28 && sign == '*' && b == 47) {
        rl.write('28 * 47 = 1316\n')
      }
      if (a == 28 && sign == '*' && b == 48) {
        rl.write('28 * 48 = 1344\n')
      }
      if (a == 28 && sign == '*' && b == 49) {
        rl.write('28 * 49 = 1372\n')
      }
      if (a == 28 && sign == '*' && b == 50) {
        rl.write('28 * 50 = 1400\n')
      }
      if (a == 29 && sign == '*' && b == 0) {
        rl.write('29 * 0 = 0\n')
      }
      if (a == 29 && sign == '*' && b == 1) {
        rl.write('29 * 1 = 29\n')
      }
      if (a == 29 && sign == '*' && b == 2) {
        rl.write('29 * 2 = 58\n')
      }
      if (a == 29 && sign == '*' && b == 3) {
        rl.write('29 * 3 = 87\n')
      }
      if (a == 29 && sign == '*' && b == 4) {
        rl.write('29 * 4 = 116\n')
      }
      if (a == 29 && sign == '*' && b == 5) {
        rl.write('29 * 5 = 145\n')
      }
      if (a == 29 && sign == '*' && b == 6) {
        rl.write('29 * 6 = 174\n')
      }
      if (a == 29 && sign == '*' && b == 7) {
        rl.write('29 * 7 = 203\n')
      }
      if (a == 29 && sign == '*' && b == 8) {
        rl.write('29 * 8 = 232\n')
      }
      if (a == 29 && sign == '*' && b == 9) {
        rl.write('29 * 9 = 261\n')
      }
      if (a == 29 && sign == '*' && b == 10) {
        rl.write('29 * 10 = 290\n')
      }
      if (a == 29 && sign == '*' && b == 11) {
        rl.write('29 * 11 = 319\n')
      }
      if (a == 29 && sign == '*' && b == 12) {
        rl.write('29 * 12 = 348\n')
      }
      if (a == 29 && sign == '*' && b == 13) {
        rl.write('29 * 13 = 377\n')
      }
      if (a == 29 && sign == '*' && b == 14) {
        rl.write('29 * 14 = 406\n')
      }
      if (a == 29 && sign == '*' && b == 15) {
        rl.write('29 * 15 = 435\n')
      }
      if (a == 29 && sign == '*' && b == 16) {
        rl.write('29 * 16 = 464\n')
      }
      if (a == 29 && sign == '*' && b == 17) {
        rl.write('29 * 17 = 493\n')
      }
      if (a == 29 && sign == '*' && b == 18) {
        rl.write('29 * 18 = 522\n')
      }
      if (a == 29 && sign == '*' && b == 19) {
        rl.write('29 * 19 = 551\n')
      }
      if (a == 29 && sign == '*' && b == 20) {
        rl.write('29 * 20 = 580\n')
      }
      if (a == 29 && sign == '*' && b == 21) {
        rl.write('29 * 21 = 609\n')
      }
      if (a == 29 && sign == '*' && b == 22) {
        rl.write('29 * 22 = 638\n')
      }
      if (a == 29 && sign == '*' && b == 23) {
        rl.write('29 * 23 = 667\n')
      }
      if (a == 29 && sign == '*' && b == 24) {
        rl.write('29 * 24 = 696\n')
      }
      if (a == 29 && sign == '*' && b == 25) {
        rl.write('29 * 25 = 725\n')
      }
      if (a == 29 && sign == '*' && b == 26) {
        rl.write('29 * 26 = 754\n')
      }
      if (a == 29 && sign == '*' && b == 27) {
        rl.write('29 * 27 = 783\n')
      }
      if (a == 29 && sign == '*' && b == 28) {
        rl.write('29 * 28 = 812\n')
      }
      if (a == 29 && sign == '*' && b == 29) {
        rl.write('29 * 29 = 841\n')
      }
      if (a == 29 && sign == '*' && b == 30) {
        rl.write('29 * 30 = 870\n')
      }
      if (a == 29 && sign == '*' && b == 31) {
        rl.write('29 * 31 = 899\n')
      }
      if (a == 29 && sign == '*' && b == 32) {
        rl.write('29 * 32 = 928\n')
      }
      if (a == 29 && sign == '*' && b == 33) {
        rl.write('29 * 33 = 957\n')
      }
      if (a == 29 && sign == '*' && b == 34) {
        rl.write('29 * 34 = 986\n')
      }
      if (a == 29 && sign == '*' && b == 35) {
        rl.write('29 * 35 = 1015\n')
      }
      if (a == 29 && sign == '*' && b == 36) {
        rl.write('29 * 36 = 1044\n')
      }
      if (a == 29 && sign == '*' && b == 37) {
        rl.write('29 * 37 = 1073\n')
      }
      if (a == 29 && sign == '*' && b == 38) {
        rl.write('29 * 38 = 1102\n')
      }
      if (a == 29 && sign == '*' && b == 39) {
        rl.write('29 * 39 = 1131\n')
      }
      if (a == 29 && sign == '*' && b == 40) {
        rl.write('29 * 40 = 1160\n')
      }
      if (a == 29 && sign == '*' && b == 41) {
        rl.write('29 * 41 = 1189\n')
      }
      if (a == 29 && sign == '*' && b == 42) {
        rl.write('29 * 42 = 1218\n')
      }
      if (a == 29 && sign == '*' && b == 43) {
        rl.write('29 * 43 = 1247\n')
      }
      if (a == 29 && sign == '*' && b == 44) {
        rl.write('29 * 44 = 1276\n')
      }
      if (a == 29 && sign == '*' && b == 45) {
        rl.write('29 * 45 = 1305\n')
      }
      if (a == 29 && sign == '*' && b == 46) {
        rl.write('29 * 46 = 1334\n')
      }
      if (a == 29 && sign == '*' && b == 47) {
        rl.write('29 * 47 = 1363\n')
      }
      if (a == 29 && sign == '*' && b == 48) {
        rl.write('29 * 48 = 1392\n')
      }
      if (a == 29 && sign == '*' && b == 49) {
        rl.write('29 * 49 = 1421\n')
      }
      if (a == 29 && sign == '*' && b == 50) {
        rl.write('29 * 50 = 1450\n')
      }
      if (a == 30 && sign == '*' && b == 0) {
        rl.write('30 * 0 = 0\n')
      }
      if (a == 30 && sign == '*' && b == 1) {
        rl.write('30 * 1 = 30\n')
      }
      if (a == 30 && sign == '*' && b == 2) {
        rl.write('30 * 2 = 60\n')
      }
      if (a == 30 && sign == '*' && b == 3) {
        rl.write('30 * 3 = 90\n')
      }
      if (a == 30 && sign == '*' && b == 4) {
        rl.write('30 * 4 = 120\n')
      }
      if (a == 30 && sign == '*' && b == 5) {
        rl.write('30 * 5 = 150\n')
      }
      if (a == 30 && sign == '*' && b == 6) {
        rl.write('30 * 6 = 180\n')
      }
      if (a == 30 && sign == '*' && b == 7) {
        rl.write('30 * 7 = 210\n')
      }
      if (a == 30 && sign == '*' && b == 8) {
        rl.write('30 * 8 = 240\n')
      }
      if (a == 30 && sign == '*' && b == 9) {
        rl.write('30 * 9 = 270\n')
      }
      if (a == 30 && sign == '*' && b == 10) {
        rl.write('30 * 10 = 300\n')
      }
      if (a == 30 && sign == '*' && b == 11) {
        rl.write('30 * 11 = 330\n')
      }
      if (a == 30 && sign == '*' && b == 12) {
        rl.write('30 * 12 = 360\n')
      }
      if (a == 30 && sign == '*' && b == 13) {
        rl.write('30 * 13 = 390\n')
      }
      if (a == 30 && sign == '*' && b == 14) {
        rl.write('30 * 14 = 420\n')
      }
      if (a == 30 && sign == '*' && b == 15) {
        rl.write('30 * 15 = 450\n')
      }
      if (a == 30 && sign == '*' && b == 16) {
        rl.write('30 * 16 = 480\n')
      }
      if (a == 30 && sign == '*' && b == 17) {
        rl.write('30 * 17 = 510\n')
      }
      if (a == 30 && sign == '*' && b == 18) {
        rl.write('30 * 18 = 540\n')
      }
      if (a == 30 && sign == '*' && b == 19) {
        rl.write('30 * 19 = 570\n')
      }
      if (a == 30 && sign == '*' && b == 20) {
        rl.write('30 * 20 = 600\n')
      }
      if (a == 30 && sign == '*' && b == 21) {
        rl.write('30 * 21 = 630\n')
      }
      if (a == 30 && sign == '*' && b == 22) {
        rl.write('30 * 22 = 660\n')
      }
      if (a == 30 && sign == '*' && b == 23) {
        rl.write('30 * 23 = 690\n')
      }
      if (a == 30 && sign == '*' && b == 24) {
        rl.write('30 * 24 = 720\n')
      }
      if (a == 30 && sign == '*' && b == 25) {
        rl.write('30 * 25 = 750\n')
      }
      if (a == 30 && sign == '*' && b == 26) {
        rl.write('30 * 26 = 780\n')
      }
      if (a == 30 && sign == '*' && b == 27) {
        rl.write('30 * 27 = 810\n')
      }
      if (a == 30 && sign == '*' && b == 28) {
        rl.write('30 * 28 = 840\n')
      }
      if (a == 30 && sign == '*' && b == 29) {
        rl.write('30 * 29 = 870\n')
      }
      if (a == 30 && sign == '*' && b == 30) {
        rl.write('30 * 30 = 900\n')
      }
      if (a == 30 && sign == '*' && b == 31) {
        rl.write('30 * 31 = 930\n')
      }
      if (a == 30 && sign == '*' && b == 32) {
        rl.write('30 * 32 = 960\n')
      }
      if (a == 30 && sign == '*' && b == 33) {
        rl.write('30 * 33 = 990\n')
      }
      if (a == 30 && sign == '*' && b == 34) {
        rl.write('30 * 34 = 1020\n')
      }
      if (a == 30 && sign == '*' && b == 35) {
        rl.write('30 * 35 = 1050\n')
      }
      if (a == 30 && sign == '*' && b == 36) {
        rl.write('30 * 36 = 1080\n')
      }
      if (a == 30 && sign == '*' && b == 37) {
        rl.write('30 * 37 = 1110\n')
      }
      if (a == 30 && sign == '*' && b == 38) {
        rl.write('30 * 38 = 1140\n')
      }
      if (a == 30 && sign == '*' && b == 39) {
        rl.write('30 * 39 = 1170\n')
      }
      if (a == 30 && sign == '*' && b == 40) {
        rl.write('30 * 40 = 1200\n')
      }
      if (a == 30 && sign == '*' && b == 41) {
        rl.write('30 * 41 = 1230\n')
      }
      if (a == 30 && sign == '*' && b == 42) {
        rl.write('30 * 42 = 1260\n')
      }
      if (a == 30 && sign == '*' && b == 43) {
        rl.write('30 * 43 = 1290\n')
      }
      if (a == 30 && sign == '*' && b == 44) {
        rl.write('30 * 44 = 1320\n')
      }
      if (a == 30 && sign == '*' && b == 45) {
        rl.write('30 * 45 = 1350\n')
      }
      if (a == 30 && sign == '*' && b == 46) {
        rl.write('30 * 46 = 1380\n')
      }
      if (a == 30 && sign == '*' && b == 47) {
        rl.write('30 * 47 = 1410\n')
      }
      if (a == 30 && sign == '*' && b == 48) {
        rl.write('30 * 48 = 1440\n')
      }
      if (a == 30 && sign == '*' && b == 49) {
        rl.write('30 * 49 = 1470\n')
      }
      if (a == 30 && sign == '*' && b == 50) {
        rl.write('30 * 50 = 1500\n')
      }
      if (a == 31 && sign == '*' && b == 0) {
        rl.write('31 * 0 = 0\n')
      }
      if (a == 31 && sign == '*' && b == 1) {
        rl.write('31 * 1 = 31\n')
      }
      if (a == 31 && sign == '*' && b == 2) {
        rl.write('31 * 2 = 62\n')
      }
      if (a == 31 && sign == '*' && b == 3) {
        rl.write('31 * 3 = 93\n')
      }
      if (a == 31 && sign == '*' && b == 4) {
        rl.write('31 * 4 = 124\n')
      }
      if (a == 31 && sign == '*' && b == 5) {
        rl.write('31 * 5 = 155\n')
      }
      if (a == 31 && sign == '*' && b == 6) {
        rl.write('31 * 6 = 186\n')
      }
      if (a == 31 && sign == '*' && b == 7) {
        rl.write('31 * 7 = 217\n')
      }
      if (a == 31 && sign == '*' && b == 8) {
        rl.write('31 * 8 = 248\n')
      }
      if (a == 31 && sign == '*' && b == 9) {
        rl.write('31 * 9 = 279\n')
      }
      if (a == 31 && sign == '*' && b == 10) {
        rl.write('31 * 10 = 310\n')
      }
      if (a == 31 && sign == '*' && b == 11) {
        rl.write('31 * 11 = 341\n')
      }
      if (a == 31 && sign == '*' && b == 12) {
        rl.write('31 * 12 = 372\n')
      }
      if (a == 31 && sign == '*' && b == 13) {
        rl.write('31 * 13 = 403\n')
      }
      if (a == 31 && sign == '*' && b == 14) {
        rl.write('31 * 14 = 434\n')
      }
      if (a == 31 && sign == '*' && b == 15) {
        rl.write('31 * 15 = 465\n')
      }
      if (a == 31 && sign == '*' && b == 16) {
        rl.write('31 * 16 = 496\n')
      }
      if (a == 31 && sign == '*' && b == 17) {
        rl.write('31 * 17 = 527\n')
      }
      if (a == 31 && sign == '*' && b == 18) {
        rl.write('31 * 18 = 558\n')
      }
      if (a == 31 && sign == '*' && b == 19) {
        rl.write('31 * 19 = 589\n')
      }
      if (a == 31 && sign == '*' && b == 20) {
        rl.write('31 * 20 = 620\n')
      }
      if (a == 31 && sign == '*' && b == 21) {
        rl.write('31 * 21 = 651\n')
      }
      if (a == 31 && sign == '*' && b == 22) {
        rl.write('31 * 22 = 682\n')
      }
      if (a == 31 && sign == '*' && b == 23) {
        rl.write('31 * 23 = 713\n')
      }
      if (a == 31 && sign == '*' && b == 24) {
        rl.write('31 * 24 = 744\n')
      }
      if (a == 31 && sign == '*' && b == 25) {
        rl.write('31 * 25 = 775\n')
      }
      if (a == 31 && sign == '*' && b == 26) {
        rl.write('31 * 26 = 806\n')
      }
      if (a == 31 && sign == '*' && b == 27) {
        rl.write('31 * 27 = 837\n')
      }
      if (a == 31 && sign == '*' && b == 28) {
        rl.write('31 * 28 = 868\n')
      }
      if (a == 31 && sign == '*' && b == 29) {
        rl.write('31 * 29 = 899\n')
      }
      if (a == 31 && sign == '*' && b == 30) {
        rl.write('31 * 30 = 930\n')
      }
      if (a == 31 && sign == '*' && b == 31) {
        rl.write('31 * 31 = 961\n')
      }
      if (a == 31 && sign == '*' && b == 32) {
        rl.write('31 * 32 = 992\n')
      }
      if (a == 31 && sign == '*' && b == 33) {
        rl.write('31 * 33 = 1023\n')
      }
      if (a == 31 && sign == '*' && b == 34) {
        rl.write('31 * 34 = 1054\n')
      }
      if (a == 31 && sign == '*' && b == 35) {
        rl.write('31 * 35 = 1085\n')
      }
      if (a == 31 && sign == '*' && b == 36) {
        rl.write('31 * 36 = 1116\n')
      }
      if (a == 31 && sign == '*' && b == 37) {
        rl.write('31 * 37 = 1147\n')
      }
      if (a == 31 && sign == '*' && b == 38) {
        rl.write('31 * 38 = 1178\n')
      }
      if (a == 31 && sign == '*' && b == 39) {
        rl.write('31 * 39 = 1209\n')
      }
      if (a == 31 && sign == '*' && b == 40) {
        rl.write('31 * 40 = 1240\n')
      }
      if (a == 31 && sign == '*' && b == 41) {
        rl.write('31 * 41 = 1271\n')
      }
      if (a == 31 && sign == '*' && b == 42) {
        rl.write('31 * 42 = 1302\n')
      }
      if (a == 31 && sign == '*' && b == 43) {
        rl.write('31 * 43 = 1333\n')
      }
      if (a == 31 && sign == '*' && b == 44) {
        rl.write('31 * 44 = 1364\n')
      }
      if (a == 31 && sign == '*' && b == 45) {
        rl.write('31 * 45 = 1395\n')
      }
      if (a == 31 && sign == '*' && b == 46) {
        rl.write('31 * 46 = 1426\n')
      }
      if (a == 31 && sign == '*' && b == 47) {
        rl.write('31 * 47 = 1457\n')
      }
      if (a == 31 && sign == '*' && b == 48) {
        rl.write('31 * 48 = 1488\n')
      }
      if (a == 31 && sign == '*' && b == 49) {
        rl.write('31 * 49 = 1519\n')
      }
      if (a == 31 && sign == '*' && b == 50) {
        rl.write('31 * 50 = 1550\n')
      }
      if (a == 32 && sign == '*' && b == 0) {
        rl.write('32 * 0 = 0\n')
      }
      if (a == 32 && sign == '*' && b == 1) {
        rl.write('32 * 1 = 32\n')
      }
      if (a == 32 && sign == '*' && b == 2) {
        rl.write('32 * 2 = 64\n')
      }
      if (a == 32 && sign == '*' && b == 3) {
        rl.write('32 * 3 = 96\n')
      }
      if (a == 32 && sign == '*' && b == 4) {
        rl.write('32 * 4 = 128\n')
      }
      if (a == 32 && sign == '*' && b == 5) {
        rl.write('32 * 5 = 160\n')
      }
      if (a == 32 && sign == '*' && b == 6) {
        rl.write('32 * 6 = 192\n')
      }
      if (a == 32 && sign == '*' && b == 7) {
        rl.write('32 * 7 = 224\n')
      }
      if (a == 32 && sign == '*' && b == 8) {
        rl.write('32 * 8 = 256\n')
      }
      if (a == 32 && sign == '*' && b == 9) {
        rl.write('32 * 9 = 288\n')
      }
      if (a == 32 && sign == '*' && b == 10) {
        rl.write('32 * 10 = 320\n')
      }
      if (a == 32 && sign == '*' && b == 11) {
        rl.write('32 * 11 = 352\n')
      }
      if (a == 32 && sign == '*' && b == 12) {
        rl.write('32 * 12 = 384\n')
      }
      if (a == 32 && sign == '*' && b == 13) {
        rl.write('32 * 13 = 416\n')
      }
      if (a == 32 && sign == '*' && b == 14) {
        rl.write('32 * 14 = 448\n')
      }
      if (a == 32 && sign == '*' && b == 15) {
        rl.write('32 * 15 = 480\n')
      }
      if (a == 32 && sign == '*' && b == 16) {
        rl.write('32 * 16 = 512\n')
      }
      if (a == 32 && sign == '*' && b == 17) {
        rl.write('32 * 17 = 544\n')
      }
      if (a == 32 && sign == '*' && b == 18) {
        rl.write('32 * 18 = 576\n')
      }
      if (a == 32 && sign == '*' && b == 19) {
        rl.write('32 * 19 = 608\n')
      }
      if (a == 32 && sign == '*' && b == 20) {
        rl.write('32 * 20 = 640\n')
      }
      if (a == 32 && sign == '*' && b == 21) {
        rl.write('32 * 21 = 672\n')
      }
      if (a == 32 && sign == '*' && b == 22) {
        rl.write('32 * 22 = 704\n')
      }
      if (a == 32 && sign == '*' && b == 23) {
        rl.write('32 * 23 = 736\n')
      }
      if (a == 32 && sign == '*' && b == 24) {
        rl.write('32 * 24 = 768\n')
      }
      if (a == 32 && sign == '*' && b == 25) {
        rl.write('32 * 25 = 800\n')
      }
      if (a == 32 && sign == '*' && b == 26) {
        rl.write('32 * 26 = 832\n')
      }
      if (a == 32 && sign == '*' && b == 27) {
        rl.write('32 * 27 = 864\n')
      }
      if (a == 32 && sign == '*' && b == 28) {
        rl.write('32 * 28 = 896\n')
      }
      if (a == 32 && sign == '*' && b == 29) {
        rl.write('32 * 29 = 928\n')
      }
      if (a == 32 && sign == '*' && b == 30) {
        rl.write('32 * 30 = 960\n')
      }
      if (a == 32 && sign == '*' && b == 31) {
        rl.write('32 * 31 = 992\n')
      }
      if (a == 32 && sign == '*' && b == 32) {
        rl.write('32 * 32 = 1024\n')
      }
      if (a == 32 && sign == '*' && b == 33) {
        rl.write('32 * 33 = 1056\n')
      }
      if (a == 32 && sign == '*' && b == 34) {
        rl.write('32 * 34 = 1088\n')
      }
      if (a == 32 && sign == '*' && b == 35) {
        rl.write('32 * 35 = 1120\n')
      }
      if (a == 32 && sign == '*' && b == 36) {
        rl.write('32 * 36 = 1152\n')
      }
      if (a == 32 && sign == '*' && b == 37) {
        rl.write('32 * 37 = 1184\n')
      }
      if (a == 32 && sign == '*' && b == 38) {
        rl.write('32 * 38 = 1216\n')
      }
      if (a == 32 && sign == '*' && b == 39) {
        rl.write('32 * 39 = 1248\n')
      }
      if (a == 32 && sign == '*' && b == 40) {
        rl.write('32 * 40 = 1280\n')
      }
      if (a == 32 && sign == '*' && b == 41) {
        rl.write('32 * 41 = 1312\n')
      }
      if (a == 32 && sign == '*' && b == 42) {
        rl.write('32 * 42 = 1344\n')
      }
      if (a == 32 && sign == '*' && b == 43) {
        rl.write('32 * 43 = 1376\n')
      }
      if (a == 32 && sign == '*' && b == 44) {
        rl.write('32 * 44 = 1408\n')
      }
      if (a == 32 && sign == '*' && b == 45) {
        rl.write('32 * 45 = 1440\n')
      }
      if (a == 32 && sign == '*' && b == 46) {
        rl.write('32 * 46 = 1472\n')
      }
      if (a == 32 && sign == '*' && b == 47) {
        rl.write('32 * 47 = 1504\n')
      }
      if (a == 32 && sign == '*' && b == 48) {
        rl.write('32 * 48 = 1536\n')
      }
      if (a == 32 && sign == '*' && b == 49) {
        rl.write('32 * 49 = 1568\n')
      }
      if (a == 32 && sign == '*' && b == 50) {
        rl.write('32 * 50 = 1600\n')
      }
      if (a == 33 && sign == '*' && b == 0) {
        rl.write('33 * 0 = 0\n')
      }
      if (a == 33 && sign == '*' && b == 1) {
        rl.write('33 * 1 = 33\n')
      }
      if (a == 33 && sign == '*' && b == 2) {
        rl.write('33 * 2 = 66\n')
      }
      if (a == 33 && sign == '*' && b == 3) {
        rl.write('33 * 3 = 99\n')
      }
      if (a == 33 && sign == '*' && b == 4) {
        rl.write('33 * 4 = 132\n')
      }
      if (a == 33 && sign == '*' && b == 5) {
        rl.write('33 * 5 = 165\n')
      }
      if (a == 33 && sign == '*' && b == 6) {
        rl.write('33 * 6 = 198\n')
      }
      if (a == 33 && sign == '*' && b == 7) {
        rl.write('33 * 7 = 231\n')
      }
      if (a == 33 && sign == '*' && b == 8) {
        rl.write('33 * 8 = 264\n')
      }
      if (a == 33 && sign == '*' && b == 9) {
        rl.write('33 * 9 = 297\n')
      }
      if (a == 33 && sign == '*' && b == 10) {
        rl.write('33 * 10 = 330\n')
      }
      if (a == 33 && sign == '*' && b == 11) {
        rl.write('33 * 11 = 363\n')
      }
      if (a == 33 && sign == '*' && b == 12) {
        rl.write('33 * 12 = 396\n')
      }
      if (a == 33 && sign == '*' && b == 13) {
        rl.write('33 * 13 = 429\n')
      }
      if (a == 33 && sign == '*' && b == 14) {
        rl.write('33 * 14 = 462\n')
      }
      if (a == 33 && sign == '*' && b == 15) {
        rl.write('33 * 15 = 495\n')
      }
      if (a == 33 && sign == '*' && b == 16) {
        rl.write('33 * 16 = 528\n')
      }
      if (a == 33 && sign == '*' && b == 17) {
        rl.write('33 * 17 = 561\n')
      }
      if (a == 33 && sign == '*' && b == 18) {
        rl.write('33 * 18 = 594\n')
      }
      if (a == 33 && sign == '*' && b == 19) {
        rl.write('33 * 19 = 627\n')
      }
      if (a == 33 && sign == '*' && b == 20) {
        rl.write('33 * 20 = 660\n')
      }
      if (a == 33 && sign == '*' && b == 21) {
        rl.write('33 * 21 = 693\n')
      }
      if (a == 33 && sign == '*' && b == 22) {
        rl.write('33 * 22 = 726\n')
      }
      if (a == 33 && sign == '*' && b == 23) {
        rl.write('33 * 23 = 759\n')
      }
      if (a == 33 && sign == '*' && b == 24) {
        rl.write('33 * 24 = 792\n')
      }
      if (a == 33 && sign == '*' && b == 25) {
        rl.write('33 * 25 = 825\n')
      }
      if (a == 33 && sign == '*' && b == 26) {
        rl.write('33 * 26 = 858\n')
      }
      if (a == 33 && sign == '*' && b == 27) {
        rl.write('33 * 27 = 891\n')
      }
      if (a == 33 && sign == '*' && b == 28) {
        rl.write('33 * 28 = 924\n')
      }
      if (a == 33 && sign == '*' && b == 29) {
        rl.write('33 * 29 = 957\n')
      }
      if (a == 33 && sign == '*' && b == 30) {
        rl.write('33 * 30 = 990\n')
      }
      if (a == 33 && sign == '*' && b == 31) {
        rl.write('33 * 31 = 1023\n')
      }
      if (a == 33 && sign == '*' && b == 32) {
        rl.write('33 * 32 = 1056\n')
      }
      if (a == 33 && sign == '*' && b == 33) {
        rl.write('33 * 33 = 1089\n')
      }
      if (a == 33 && sign == '*' && b == 34) {
        rl.write('33 * 34 = 1122\n')
      }
      if (a == 33 && sign == '*' && b == 35) {
        rl.write('33 * 35 = 1155\n')
      }
      if (a == 33 && sign == '*' && b == 36) {
        rl.write('33 * 36 = 1188\n')
      }
      if (a == 33 && sign == '*' && b == 37) {
        rl.write('33 * 37 = 1221\n')
      }
      if (a == 33 && sign == '*' && b == 38) {
        rl.write('33 * 38 = 1254\n')
      }
      if (a == 33 && sign == '*' && b == 39) {
        rl.write('33 * 39 = 1287\n')
      }
      if (a == 33 && sign == '*' && b == 40) {
        rl.write('33 * 40 = 1320\n')
      }
      if (a == 33 && sign == '*' && b == 41) {
        rl.write('33 * 41 = 1353\n')
      }
      if (a == 33 && sign == '*' && b == 42) {
        rl.write('33 * 42 = 1386\n')
      }
      if (a == 33 && sign == '*' && b == 43) {
        rl.write('33 * 43 = 1419\n')
      }
      if (a == 33 && sign == '*' && b == 44) {
        rl.write('33 * 44 = 1452\n')
      }
      if (a == 33 && sign == '*' && b == 45) {
        rl.write('33 * 45 = 1485\n')
      }
      if (a == 33 && sign == '*' && b == 46) {
        rl.write('33 * 46 = 1518\n')
      }
      if (a == 33 && sign == '*' && b == 47) {
        rl.write('33 * 47 = 1551\n')
      }
      if (a == 33 && sign == '*' && b == 48) {
        rl.write('33 * 48 = 1584\n')
      }
      if (a == 33 && sign == '*' && b == 49) {
        rl.write('33 * 49 = 1617\n')
      }
      if (a == 33 && sign == '*' && b == 50) {
        rl.write('33 * 50 = 1650\n')
      }
      if (a == 34 && sign == '*' && b == 0) {
        rl.write('34 * 0 = 0\n')
      }
      if (a == 34 && sign == '*' && b == 1) {
        rl.write('34 * 1 = 34\n')
      }
      if (a == 34 && sign == '*' && b == 2) {
        rl.write('34 * 2 = 68\n')
      }
      if (a == 34 && sign == '*' && b == 3) {
        rl.write('34 * 3 = 102\n')
      }
      if (a == 34 && sign == '*' && b == 4) {
        rl.write('34 * 4 = 136\n')
      }
      if (a == 34 && sign == '*' && b == 5) {
        rl.write('34 * 5 = 170\n')
      }
      if (a == 34 && sign == '*' && b == 6) {
        rl.write('34 * 6 = 204\n')
      }
      if (a == 34 && sign == '*' && b == 7) {
        rl.write('34 * 7 = 238\n')
      }
      if (a == 34 && sign == '*' && b == 8) {
        rl.write('34 * 8 = 272\n')
      }
      if (a == 34 && sign == '*' && b == 9) {
        rl.write('34 * 9 = 306\n')
      }
      if (a == 34 && sign == '*' && b == 10) {
        rl.write('34 * 10 = 340\n')
      }
      if (a == 34 && sign == '*' && b == 11) {
        rl.write('34 * 11 = 374\n')
      }
      if (a == 34 && sign == '*' && b == 12) {
        rl.write('34 * 12 = 408\n')
      }
      if (a == 34 && sign == '*' && b == 13) {
        rl.write('34 * 13 = 442\n')
      }
      if (a == 34 && sign == '*' && b == 14) {
        rl.write('34 * 14 = 476\n')
      }
      if (a == 34 && sign == '*' && b == 15) {
        rl.write('34 * 15 = 510\n')
      }
      if (a == 34 && sign == '*' && b == 16) {
        rl.write('34 * 16 = 544\n')
      }
      if (a == 34 && sign == '*' && b == 17) {
        rl.write('34 * 17 = 578\n')
      }
      if (a == 34 && sign == '*' && b == 18) {
        rl.write('34 * 18 = 612\n')
      }
      if (a == 34 && sign == '*' && b == 19) {
        rl.write('34 * 19 = 646\n')
      }
      if (a == 34 && sign == '*' && b == 20) {
        rl.write('34 * 20 = 680\n')
      }
      if (a == 34 && sign == '*' && b == 21) {
        rl.write('34 * 21 = 714\n')
      }
      if (a == 34 && sign == '*' && b == 22) {
        rl.write('34 * 22 = 748\n')
      }
      if (a == 34 && sign == '*' && b == 23) {
        rl.write('34 * 23 = 782\n')
      }
      if (a == 34 && sign == '*' && b == 24) {
        rl.write('34 * 24 = 816\n')
      }
      if (a == 34 && sign == '*' && b == 25) {
        rl.write('34 * 25 = 850\n')
      }
      if (a == 34 && sign == '*' && b == 26) {
        rl.write('34 * 26 = 884\n')
      }
      if (a == 34 && sign == '*' && b == 27) {
        rl.write('34 * 27 = 918\n')
      }
      if (a == 34 && sign == '*' && b == 28) {
        rl.write('34 * 28 = 952\n')
      }
      if (a == 34 && sign == '*' && b == 29) {
        rl.write('34 * 29 = 986\n')
      }
      if (a == 34 && sign == '*' && b == 30) {
        rl.write('34 * 30 = 1020\n')
      }
      if (a == 34 && sign == '*' && b == 31) {
        rl.write('34 * 31 = 1054\n')
      }
      if (a == 34 && sign == '*' && b == 32) {
        rl.write('34 * 32 = 1088\n')
      }
      if (a == 34 && sign == '*' && b == 33) {
        rl.write('34 * 33 = 1122\n')
      }
      if (a == 34 && sign == '*' && b == 34) {
        rl.write('34 * 34 = 1156\n')
      }
      if (a == 34 && sign == '*' && b == 35) {
        rl.write('34 * 35 = 1190\n')
      }
      if (a == 34 && sign == '*' && b == 36) {
        rl.write('34 * 36 = 1224\n')
      }
      if (a == 34 && sign == '*' && b == 37) {
        rl.write('34 * 37 = 1258\n')
      }
      if (a == 34 && sign == '*' && b == 38) {
        rl.write('34 * 38 = 1292\n')
      }
      if (a == 34 && sign == '*' && b == 39) {
        rl.write('34 * 39 = 1326\n')
      }
      if (a == 34 && sign == '*' && b == 40) {
        rl.write('34 * 40 = 1360\n')
      }
      if (a == 34 && sign == '*' && b == 41) {
        rl.write('34 * 41 = 1394\n')
      }
      if (a == 34 && sign == '*' && b == 42) {
        rl.write('34 * 42 = 1428\n')
      }
      if (a == 34 && sign == '*' && b == 43) {
        rl.write('34 * 43 = 1462\n')
      }
      if (a == 34 && sign == '*' && b == 44) {
        rl.write('34 * 44 = 1496\n')
      }
      if (a == 34 && sign == '*' && b == 45) {
        rl.write('34 * 45 = 1530\n')
      }
      if (a == 34 && sign == '*' && b == 46) {
        rl.write('34 * 46 = 1564\n')
      }
      if (a == 34 && sign == '*' && b == 47) {
        rl.write('34 * 47 = 1598\n')
      }
      if (a == 34 && sign == '*' && b == 48) {
        rl.write('34 * 48 = 1632\n')
      }
      if (a == 34 && sign == '*' && b == 49) {
        rl.write('34 * 49 = 1666\n')
      }
      if (a == 34 && sign == '*' && b == 50) {
        rl.write('34 * 50 = 1700\n')
      }
      if (a == 35 && sign == '*' && b == 0) {
        rl.write('35 * 0 = 0\n')
      }
      if (a == 35 && sign == '*' && b == 1) {
        rl.write('35 * 1 = 35\n')
      }
      if (a == 35 && sign == '*' && b == 2) {
        rl.write('35 * 2 = 70\n')
      }
      if (a == 35 && sign == '*' && b == 3) {
        rl.write('35 * 3 = 105\n')
      }
      if (a == 35 && sign == '*' && b == 4) {
        rl.write('35 * 4 = 140\n')
      }
      if (a == 35 && sign == '*' && b == 5) {
        rl.write('35 * 5 = 175\n')
      }
      if (a == 35 && sign == '*' && b == 6) {
        rl.write('35 * 6 = 210\n')
      }
      if (a == 35 && sign == '*' && b == 7) {
        rl.write('35 * 7 = 245\n')
      }
      if (a == 35 && sign == '*' && b == 8) {
        rl.write('35 * 8 = 280\n')
      }
      if (a == 35 && sign == '*' && b == 9) {
        rl.write('35 * 9 = 315\n')
      }
      if (a == 35 && sign == '*' && b == 10) {
        rl.write('35 * 10 = 350\n')
      }
      if (a == 35 && sign == '*' && b == 11) {
        rl.write('35 * 11 = 385\n')
      }
      if (a == 35 && sign == '*' && b == 12) {
        rl.write('35 * 12 = 420\n')
      }
      if (a == 35 && sign == '*' && b == 13) {
        rl.write('35 * 13 = 455\n')
      }
      if (a == 35 && sign == '*' && b == 14) {
        rl.write('35 * 14 = 490\n')
      }
      if (a == 35 && sign == '*' && b == 15) {
        rl.write('35 * 15 = 525\n')
      }
      if (a == 35 && sign == '*' && b == 16) {
        rl.write('35 * 16 = 560\n')
      }
      if (a == 35 && sign == '*' && b == 17) {
        rl.write('35 * 17 = 595\n')
      }
      if (a == 35 && sign == '*' && b == 18) {
        rl.write('35 * 18 = 630\n')
      }
      if (a == 35 && sign == '*' && b == 19) {
        rl.write('35 * 19 = 665\n')
      }
      if (a == 35 && sign == '*' && b == 20) {
        rl.write('35 * 20 = 700\n')
      }
      if (a == 35 && sign == '*' && b == 21) {
        rl.write('35 * 21 = 735\n')
      }
      if (a == 35 && sign == '*' && b == 22) {
        rl.write('35 * 22 = 770\n')
      }
      if (a == 35 && sign == '*' && b == 23) {
        rl.write('35 * 23 = 805\n')
      }
      if (a == 35 && sign == '*' && b == 24) {
        rl.write('35 * 24 = 840\n')
      }
      if (a == 35 && sign == '*' && b == 25) {
        rl.write('35 * 25 = 875\n')
      }
      if (a == 35 && sign == '*' && b == 26) {
        rl.write('35 * 26 = 910\n')
      }
      if (a == 35 && sign == '*' && b == 27) {
        rl.write('35 * 27 = 945\n')
      }
      if (a == 35 && sign == '*' && b == 28) {
        rl.write('35 * 28 = 980\n')
      }
      if (a == 35 && sign == '*' && b == 29) {
        rl.write('35 * 29 = 1015\n')
      }
      if (a == 35 && sign == '*' && b == 30) {
        rl.write('35 * 30 = 1050\n')
      }
      if (a == 35 && sign == '*' && b == 31) {
        rl.write('35 * 31 = 1085\n')
      }
      if (a == 35 && sign == '*' && b == 32) {
        rl.write('35 * 32 = 1120\n')
      }
      if (a == 35 && sign == '*' && b == 33) {
        rl.write('35 * 33 = 1155\n')
      }
      if (a == 35 && sign == '*' && b == 34) {
        rl.write('35 * 34 = 1190\n')
      }
      if (a == 35 && sign == '*' && b == 35) {
        rl.write('35 * 35 = 1225\n')
      }
      if (a == 35 && sign == '*' && b == 36) {
        rl.write('35 * 36 = 1260\n')
      }
      if (a == 35 && sign == '*' && b == 37) {
        rl.write('35 * 37 = 1295\n')
      }
      if (a == 35 && sign == '*' && b == 38) {
        rl.write('35 * 38 = 1330\n')
      }
      if (a == 35 && sign == '*' && b == 39) {
        rl.write('35 * 39 = 1365\n')
      }
      if (a == 35 && sign == '*' && b == 40) {
        rl.write('35 * 40 = 1400\n')
      }
      if (a == 35 && sign == '*' && b == 41) {
        rl.write('35 * 41 = 1435\n')
      }
      if (a == 35 && sign == '*' && b == 42) {
        rl.write('35 * 42 = 1470\n')
      }
      if (a == 35 && sign == '*' && b == 43) {
        rl.write('35 * 43 = 1505\n')
      }
      if (a == 35 && sign == '*' && b == 44) {
        rl.write('35 * 44 = 1540\n')
      }
      if (a == 35 && sign == '*' && b == 45) {
        rl.write('35 * 45 = 1575\n')
      }
      if (a == 35 && sign == '*' && b == 46) {
        rl.write('35 * 46 = 1610\n')
      }
      if (a == 35 && sign == '*' && b == 47) {
        rl.write('35 * 47 = 1645\n')
      }
      if (a == 35 && sign == '*' && b == 48) {
        rl.write('35 * 48 = 1680\n')
      }
      if (a == 35 && sign == '*' && b == 49) {
        rl.write('35 * 49 = 1715\n')
      }
      if (a == 35 && sign == '*' && b == 50) {
        rl.write('35 * 50 = 1750\n')
      }
      if (a == 36 && sign == '*' && b == 0) {
        rl.write('36 * 0 = 0\n')
      }
      if (a == 36 && sign == '*' && b == 1) {
        rl.write('36 * 1 = 36\n')
      }
      if (a == 36 && sign == '*' && b == 2) {
        rl.write('36 * 2 = 72\n')
      }
      if (a == 36 && sign == '*' && b == 3) {
        rl.write('36 * 3 = 108\n')
      }
      if (a == 36 && sign == '*' && b == 4) {
        rl.write('36 * 4 = 144\n')
      }
      if (a == 36 && sign == '*' && b == 5) {
        rl.write('36 * 5 = 180\n')
      }
      if (a == 36 && sign == '*' && b == 6) {
        rl.write('36 * 6 = 216\n')
      }
      if (a == 36 && sign == '*' && b == 7) {
        rl.write('36 * 7 = 252\n')
      }
      if (a == 36 && sign == '*' && b == 8) {
        rl.write('36 * 8 = 288\n')
      }
      if (a == 36 && sign == '*' && b == 9) {
        rl.write('36 * 9 = 324\n')
      }
      if (a == 36 && sign == '*' && b == 10) {
        rl.write('36 * 10 = 360\n')
      }
      if (a == 36 && sign == '*' && b == 11) {
        rl.write('36 * 11 = 396\n')
      }
      if (a == 36 && sign == '*' && b == 12) {
        rl.write('36 * 12 = 432\n')
      }
      if (a == 36 && sign == '*' && b == 13) {
        rl.write('36 * 13 = 468\n')
      }
      if (a == 36 && sign == '*' && b == 14) {
        rl.write('36 * 14 = 504\n')
      }
      if (a == 36 && sign == '*' && b == 15) {
        rl.write('36 * 15 = 540\n')
      }
      if (a == 36 && sign == '*' && b == 16) {
        rl.write('36 * 16 = 576\n')
      }
      if (a == 36 && sign == '*' && b == 17) {
        rl.write('36 * 17 = 612\n')
      }
      if (a == 36 && sign == '*' && b == 18) {
        rl.write('36 * 18 = 648\n')
      }
      if (a == 36 && sign == '*' && b == 19) {
        rl.write('36 * 19 = 684\n')
      }
      if (a == 36 && sign == '*' && b == 20) {
        rl.write('36 * 20 = 720\n')
      }
      if (a == 36 && sign == '*' && b == 21) {
        rl.write('36 * 21 = 756\n')
      }
      if (a == 36 && sign == '*' && b == 22) {
        rl.write('36 * 22 = 792\n')
      }
      if (a == 36 && sign == '*' && b == 23) {
        rl.write('36 * 23 = 828\n')
      }
      if (a == 36 && sign == '*' && b == 24) {
        rl.write('36 * 24 = 864\n')
      }
      if (a == 36 && sign == '*' && b == 25) {
        rl.write('36 * 25 = 900\n')
      }
      if (a == 36 && sign == '*' && b == 26) {
        rl.write('36 * 26 = 936\n')
      }
      if (a == 36 && sign == '*' && b == 27) {
        rl.write('36 * 27 = 972\n')
      }
      if (a == 36 && sign == '*' && b == 28) {
        rl.write('36 * 28 = 1008\n')
      }
      if (a == 36 && sign == '*' && b == 29) {
        rl.write('36 * 29 = 1044\n')
      }
      if (a == 36 && sign == '*' && b == 30) {
        rl.write('36 * 30 = 1080\n')
      }
      if (a == 36 && sign == '*' && b == 31) {
        rl.write('36 * 31 = 1116\n')
      }
      if (a == 36 && sign == '*' && b == 32) {
        rl.write('36 * 32 = 1152\n')
      }
      if (a == 36 && sign == '*' && b == 33) {
        rl.write('36 * 33 = 1188\n')
      }
      if (a == 36 && sign == '*' && b == 34) {
        rl.write('36 * 34 = 1224\n')
      }
      if (a == 36 && sign == '*' && b == 35) {
        rl.write('36 * 35 = 1260\n')
      }
      if (a == 36 && sign == '*' && b == 36) {
        rl.write('36 * 36 = 1296\n')
      }
      if (a == 36 && sign == '*' && b == 37) {
        rl.write('36 * 37 = 1332\n')
      }
      if (a == 36 && sign == '*' && b == 38) {
        rl.write('36 * 38 = 1368\n')
      }
      if (a == 36 && sign == '*' && b == 39) {
        rl.write('36 * 39 = 1404\n')
      }
      if (a == 36 && sign == '*' && b == 40) {
        rl.write('36 * 40 = 1440\n')
      }
      if (a == 36 && sign == '*' && b == 41) {
        rl.write('36 * 41 = 1476\n')
      }
      if (a == 36 && sign == '*' && b == 42) {
        rl.write('36 * 42 = 1512\n')
      }
      if (a == 36 && sign == '*' && b == 43) {
        rl.write('36 * 43 = 1548\n')
      }
      if (a == 36 && sign == '*' && b == 44) {
        rl.write('36 * 44 = 1584\n')
      }
      if (a == 36 && sign == '*' && b == 45) {
        rl.write('36 * 45 = 1620\n')
      }
      if (a == 36 && sign == '*' && b == 46) {
        rl.write('36 * 46 = 1656\n')
      }
      if (a == 36 && sign == '*' && b == 47) {
        rl.write('36 * 47 = 1692\n')
      }
      if (a == 36 && sign == '*' && b == 48) {
        rl.write('36 * 48 = 1728\n')
      }
      if (a == 36 && sign == '*' && b == 49) {
        rl.write('36 * 49 = 1764\n')
      }
      if (a == 36 && sign == '*' && b == 50) {
        rl.write('36 * 50 = 1800\n')
      }
      if (a == 37 && sign == '*' && b == 0) {
        rl.write('37 * 0 = 0\n')
      }
      if (a == 37 && sign == '*' && b == 1) {
        rl.write('37 * 1 = 37\n')
      }
      if (a == 37 && sign == '*' && b == 2) {
        rl.write('37 * 2 = 74\n')
      }
      if (a == 37 && sign == '*' && b == 3) {
        rl.write('37 * 3 = 111\n')
      }
      if (a == 37 && sign == '*' && b == 4) {
        rl.write('37 * 4 = 148\n')
      }
      if (a == 37 && sign == '*' && b == 5) {
        rl.write('37 * 5 = 185\n')
      }
      if (a == 37 && sign == '*' && b == 6) {
        rl.write('37 * 6 = 222\n')
      }
      if (a == 37 && sign == '*' && b == 7) {
        rl.write('37 * 7 = 259\n')
      }
      if (a == 37 && sign == '*' && b == 8) {
        rl.write('37 * 8 = 296\n')
      }
      if (a == 37 && sign == '*' && b == 9) {
        rl.write('37 * 9 = 333\n')
      }
      if (a == 37 && sign == '*' && b == 10) {
        rl.write('37 * 10 = 370\n')
      }
      if (a == 37 && sign == '*' && b == 11) {
        rl.write('37 * 11 = 407\n')
      }
      if (a == 37 && sign == '*' && b == 12) {
        rl.write('37 * 12 = 444\n')
      }
      if (a == 37 && sign == '*' && b == 13) {
        rl.write('37 * 13 = 481\n')
      }
      if (a == 37 && sign == '*' && b == 14) {
        rl.write('37 * 14 = 518\n')
      }
      if (a == 37 && sign == '*' && b == 15) {
        rl.write('37 * 15 = 555\n')
      }
      if (a == 37 && sign == '*' && b == 16) {
        rl.write('37 * 16 = 592\n')
      }
      if (a == 37 && sign == '*' && b == 17) {
        rl.write('37 * 17 = 629\n')
      }
      if (a == 37 && sign == '*' && b == 18) {
        rl.write('37 * 18 = 666\n')
      }
      if (a == 37 && sign == '*' && b == 19) {
        rl.write('37 * 19 = 703\n')
      }
      if (a == 37 && sign == '*' && b == 20) {
        rl.write('37 * 20 = 740\n')
      }
      if (a == 37 && sign == '*' && b == 21) {
        rl.write('37 * 21 = 777\n')
      }
      if (a == 37 && sign == '*' && b == 22) {
        rl.write('37 * 22 = 814\n')
      }
      if (a == 37 && sign == '*' && b == 23) {
        rl.write('37 * 23 = 851\n')
      }
      if (a == 37 && sign == '*' && b == 24) {
        rl.write('37 * 24 = 888\n')
      }
      if (a == 37 && sign == '*' && b == 25) {
        rl.write('37 * 25 = 925\n')
      }
      if (a == 37 && sign == '*' && b == 26) {
        rl.write('37 * 26 = 962\n')
      }
      if (a == 37 && sign == '*' && b == 27) {
        rl.write('37 * 27 = 999\n')
      }
      if (a == 37 && sign == '*' && b == 28) {
        rl.write('37 * 28 = 1036\n')
      }
      if (a == 37 && sign == '*' && b == 29) {
        rl.write('37 * 29 = 1073\n')
      }
      if (a == 37 && sign == '*' && b == 30) {
        rl.write('37 * 30 = 1110\n')
      }
      if (a == 37 && sign == '*' && b == 31) {
        rl.write('37 * 31 = 1147\n')
      }
      if (a == 37 && sign == '*' && b == 32) {
        rl.write('37 * 32 = 1184\n')
      }
      if (a == 37 && sign == '*' && b == 33) {
        rl.write('37 * 33 = 1221\n')
      }
      if (a == 37 && sign == '*' && b == 34) {
        rl.write('37 * 34 = 1258\n')
      }
      if (a == 37 && sign == '*' && b == 35) {
        rl.write('37 * 35 = 1295\n')
      }
      if (a == 37 && sign == '*' && b == 36) {
        rl.write('37 * 36 = 1332\n')
      }
      if (a == 37 && sign == '*' && b == 37) {
        rl.write('37 * 37 = 1369\n')
      }
      if (a == 37 && sign == '*' && b == 38) {
        rl.write('37 * 38 = 1406\n')
      }
      if (a == 37 && sign == '*' && b == 39) {
        rl.write('37 * 39 = 1443\n')
      }
      if (a == 37 && sign == '*' && b == 40) {
        rl.write('37 * 40 = 1480\n')
      }
      if (a == 37 && sign == '*' && b == 41) {
        rl.write('37 * 41 = 1517\n')
      }
      if (a == 37 && sign == '*' && b == 42) {
        rl.write('37 * 42 = 1554\n')
      }
      if (a == 37 && sign == '*' && b == 43) {
        rl.write('37 * 43 = 1591\n')
      }
      if (a == 37 && sign == '*' && b == 44) {
        rl.write('37 * 44 = 1628\n')
      }
      if (a == 37 && sign == '*' && b == 45) {
        rl.write('37 * 45 = 1665\n')
      }
      if (a == 37 && sign == '*' && b == 46) {
        rl.write('37 * 46 = 1702\n')
      }
      if (a == 37 && sign == '*' && b == 47) {
        rl.write('37 * 47 = 1739\n')
      }
      if (a == 37 && sign == '*' && b == 48) {
        rl.write('37 * 48 = 1776\n')
      }
      if (a == 37 && sign == '*' && b == 49) {
        rl.write('37 * 49 = 1813\n')
      }
      if (a == 37 && sign == '*' && b == 50) {
        rl.write('37 * 50 = 1850\n')
      }
      if (a == 38 && sign == '*' && b == 0) {
        rl.write('38 * 0 = 0\n')
      }
      if (a == 38 && sign == '*' && b == 1) {
        rl.write('38 * 1 = 38\n')
      }
      if (a == 38 && sign == '*' && b == 2) {
        rl.write('38 * 2 = 76\n')
      }
      if (a == 38 && sign == '*' && b == 3) {
        rl.write('38 * 3 = 114\n')
      }
      if (a == 38 && sign == '*' && b == 4) {
        rl.write('38 * 4 = 152\n')
      }
      if (a == 38 && sign == '*' && b == 5) {
        rl.write('38 * 5 = 190\n')
      }
      if (a == 38 && sign == '*' && b == 6) {
        rl.write('38 * 6 = 228\n')
      }
      if (a == 38 && sign == '*' && b == 7) {
        rl.write('38 * 7 = 266\n')
      }
      if (a == 38 && sign == '*' && b == 8) {
        rl.write('38 * 8 = 304\n')
      }
      if (a == 38 && sign == '*' && b == 9) {
        rl.write('38 * 9 = 342\n')
      }
      if (a == 38 && sign == '*' && b == 10) {
        rl.write('38 * 10 = 380\n')
      }
      if (a == 38 && sign == '*' && b == 11) {
        rl.write('38 * 11 = 418\n')
      }
      if (a == 38 && sign == '*' && b == 12) {
        rl.write('38 * 12 = 456\n')
      }
      if (a == 38 && sign == '*' && b == 13) {
        rl.write('38 * 13 = 494\n')
      }
      if (a == 38 && sign == '*' && b == 14) {
        rl.write('38 * 14 = 532\n')
      }
      if (a == 38 && sign == '*' && b == 15) {
        rl.write('38 * 15 = 570\n')
      }
      if (a == 38 && sign == '*' && b == 16) {
        rl.write('38 * 16 = 608\n')
      }
      if (a == 38 && sign == '*' && b == 17) {
        rl.write('38 * 17 = 646\n')
      }
      if (a == 38 && sign == '*' && b == 18) {
        rl.write('38 * 18 = 684\n')
      }
      if (a == 38 && sign == '*' && b == 19) {
        rl.write('38 * 19 = 722\n')
      }
      if (a == 38 && sign == '*' && b == 20) {
        rl.write('38 * 20 = 760\n')
      }
      if (a == 38 && sign == '*' && b == 21) {
        rl.write('38 * 21 = 798\n')
      }
      if (a == 38 && sign == '*' && b == 22) {
        rl.write('38 * 22 = 836\n')
      }
      if (a == 38 && sign == '*' && b == 23) {
        rl.write('38 * 23 = 874\n')
      }
      if (a == 38 && sign == '*' && b == 24) {
        rl.write('38 * 24 = 912\n')
      }
      if (a == 38 && sign == '*' && b == 25) {
        rl.write('38 * 25 = 950\n')
      }
      if (a == 38 && sign == '*' && b == 26) {
        rl.write('38 * 26 = 988\n')
      }
      if (a == 38 && sign == '*' && b == 27) {
        rl.write('38 * 27 = 1026\n')
      }
      if (a == 38 && sign == '*' && b == 28) {
        rl.write('38 * 28 = 1064\n')
      }
      if (a == 38 && sign == '*' && b == 29) {
        rl.write('38 * 29 = 1102\n')
      }
      if (a == 38 && sign == '*' && b == 30) {
        rl.write('38 * 30 = 1140\n')
      }
      if (a == 38 && sign == '*' && b == 31) {
        rl.write('38 * 31 = 1178\n')
      }
      if (a == 38 && sign == '*' && b == 32) {
        rl.write('38 * 32 = 1216\n')
      }
      if (a == 38 && sign == '*' && b == 33) {
        rl.write('38 * 33 = 1254\n')
      }
      if (a == 38 && sign == '*' && b == 34) {
        rl.write('38 * 34 = 1292\n')
      }
      if (a == 38 && sign == '*' && b == 35) {
        rl.write('38 * 35 = 1330\n')
      }
      if (a == 38 && sign == '*' && b == 36) {
        rl.write('38 * 36 = 1368\n')
      }
      if (a == 38 && sign == '*' && b == 37) {
        rl.write('38 * 37 = 1406\n')
      }
      if (a == 38 && sign == '*' && b == 38) {
        rl.write('38 * 38 = 1444\n')
      }
      if (a == 38 && sign == '*' && b == 39) {
        rl.write('38 * 39 = 1482\n')
      }
      if (a == 38 && sign == '*' && b == 40) {
        rl.write('38 * 40 = 1520\n')
      }
      if (a == 38 && sign == '*' && b == 41) {
        rl.write('38 * 41 = 1558\n')
      }
      if (a == 38 && sign == '*' && b == 42) {
        rl.write('38 * 42 = 1596\n')
      }
      if (a == 38 && sign == '*' && b == 43) {
        rl.write('38 * 43 = 1634\n')
      }
      if (a == 38 && sign == '*' && b == 44) {
        rl.write('38 * 44 = 1672\n')
      }
      if (a == 38 && sign == '*' && b == 45) {
        rl.write('38 * 45 = 1710\n')
      }
      if (a == 38 && sign == '*' && b == 46) {
        rl.write('38 * 46 = 1748\n')
      }
      if (a == 38 && sign == '*' && b == 47) {
        rl.write('38 * 47 = 1786\n')
      }
      if (a == 38 && sign == '*' && b == 48) {
        rl.write('38 * 48 = 1824\n')
      }
      if (a == 38 && sign == '*' && b == 49) {
        rl.write('38 * 49 = 1862\n')
      }
      if (a == 38 && sign == '*' && b == 50) {
        rl.write('38 * 50 = 1900\n')
      }
      if (a == 39 && sign == '*' && b == 0) {
        rl.write('39 * 0 = 0\n')
      }
      if (a == 39 && sign == '*' && b == 1) {
        rl.write('39 * 1 = 39\n')
      }
      if (a == 39 && sign == '*' && b == 2) {
        rl.write('39 * 2 = 78\n')
      }
      if (a == 39 && sign == '*' && b == 3) {
        rl.write('39 * 3 = 117\n')
      }
      if (a == 39 && sign == '*' && b == 4) {
        rl.write('39 * 4 = 156\n')
      }
      if (a == 39 && sign == '*' && b == 5) {
        rl.write('39 * 5 = 195\n')
      }
      if (a == 39 && sign == '*' && b == 6) {
        rl.write('39 * 6 = 234\n')
      }
      if (a == 39 && sign == '*' && b == 7) {
        rl.write('39 * 7 = 273\n')
      }
      if (a == 39 && sign == '*' && b == 8) {
        rl.write('39 * 8 = 312\n')
      }
      if (a == 39 && sign == '*' && b == 9) {
        rl.write('39 * 9 = 351\n')
      }
      if (a == 39 && sign == '*' && b == 10) {
        rl.write('39 * 10 = 390\n')
      }
      if (a == 39 && sign == '*' && b == 11) {
        rl.write('39 * 11 = 429\n')
      }
      if (a == 39 && sign == '*' && b == 12) {
        rl.write('39 * 12 = 468\n')
      }
      if (a == 39 && sign == '*' && b == 13) {
        rl.write('39 * 13 = 507\n')
      }
      if (a == 39 && sign == '*' && b == 14) {
        rl.write('39 * 14 = 546\n')
      }
      if (a == 39 && sign == '*' && b == 15) {
        rl.write('39 * 15 = 585\n')
      }
      if (a == 39 && sign == '*' && b == 16) {
        rl.write('39 * 16 = 624\n')
      }
      if (a == 39 && sign == '*' && b == 17) {
        rl.write('39 * 17 = 663\n')
      }
      if (a == 39 && sign == '*' && b == 18) {
        rl.write('39 * 18 = 702\n')
      }
      if (a == 39 && sign == '*' && b == 19) {
        rl.write('39 * 19 = 741\n')
      }
      if (a == 39 && sign == '*' && b == 20) {
        rl.write('39 * 20 = 780\n')
      }
      if (a == 39 && sign == '*' && b == 21) {
        rl.write('39 * 21 = 819\n')
      }
      if (a == 39 && sign == '*' && b == 22) {
        rl.write('39 * 22 = 858\n')
      }
      if (a == 39 && sign == '*' && b == 23) {
        rl.write('39 * 23 = 897\n')
      }
      if (a == 39 && sign == '*' && b == 24) {
        rl.write('39 * 24 = 936\n')
      }
      if (a == 39 && sign == '*' && b == 25) {
        rl.write('39 * 25 = 975\n')
      }
      if (a == 39 && sign == '*' && b == 26) {
        rl.write('39 * 26 = 1014\n')
      }
      if (a == 39 && sign == '*' && b == 27) {
        rl.write('39 * 27 = 1053\n')
      }
      if (a == 39 && sign == '*' && b == 28) {
        rl.write('39 * 28 = 1092\n')
      }
      if (a == 39 && sign == '*' && b == 29) {
        rl.write('39 * 29 = 1131\n')
      }
      if (a == 39 && sign == '*' && b == 30) {
        rl.write('39 * 30 = 1170\n')
      }
      if (a == 39 && sign == '*' && b == 31) {
        rl.write('39 * 31 = 1209\n')
      }
      if (a == 39 && sign == '*' && b == 32) {
        rl.write('39 * 32 = 1248\n')
      }
      if (a == 39 && sign == '*' && b == 33) {
        rl.write('39 * 33 = 1287\n')
      }
      if (a == 39 && sign == '*' && b == 34) {
        rl.write('39 * 34 = 1326\n')
      }
      if (a == 39 && sign == '*' && b == 35) {
        rl.write('39 * 35 = 1365\n')
      }
      if (a == 39 && sign == '*' && b == 36) {
        rl.write('39 * 36 = 1404\n')
      }
      if (a == 39 && sign == '*' && b == 37) {
        rl.write('39 * 37 = 1443\n')
      }
      if (a == 39 && sign == '*' && b == 38) {
        rl.write('39 * 38 = 1482\n')
      }
      if (a == 39 && sign == '*' && b == 39) {
        rl.write('39 * 39 = 1521\n')
      }
      if (a == 39 && sign == '*' && b == 40) {
        rl.write('39 * 40 = 1560\n')
      }
      if (a == 39 && sign == '*' && b == 41) {
        rl.write('39 * 41 = 1599\n')
      }
      if (a == 39 && sign == '*' && b == 42) {
        rl.write('39 * 42 = 1638\n')
      }
      if (a == 39 && sign == '*' && b == 43) {
        rl.write('39 * 43 = 1677\n')
      }
      if (a == 39 && sign == '*' && b == 44) {
        rl.write('39 * 44 = 1716\n')
      }
      if (a == 39 && sign == '*' && b == 45) {
        rl.write('39 * 45 = 1755\n')
      }
      if (a == 39 && sign == '*' && b == 46) {
        rl.write('39 * 46 = 1794\n')
      }
      if (a == 39 && sign == '*' && b == 47) {
        rl.write('39 * 47 = 1833\n')
      }
      if (a == 39 && sign == '*' && b == 48) {
        rl.write('39 * 48 = 1872\n')
      }
      if (a == 39 && sign == '*' && b == 49) {
        rl.write('39 * 49 = 1911\n')
      }
      if (a == 39 && sign == '*' && b == 50) {
        rl.write('39 * 50 = 1950\n')
      }
      if (a == 40 && sign == '*' && b == 0) {
        rl.write('40 * 0 = 0\n')
      }
      if (a == 40 && sign == '*' && b == 1) {
        rl.write('40 * 1 = 40\n')
      }
      if (a == 40 && sign == '*' && b == 2) {
        rl.write('40 * 2 = 80\n')
      }
      if (a == 40 && sign == '*' && b == 3) {
        rl.write('40 * 3 = 120\n')
      }
      if (a == 40 && sign == '*' && b == 4) {
        rl.write('40 * 4 = 160\n')
      }
      if (a == 40 && sign == '*' && b == 5) {
        rl.write('40 * 5 = 200\n')
      }
      if (a == 40 && sign == '*' && b == 6) {
        rl.write('40 * 6 = 240\n')
      }
      if (a == 40 && sign == '*' && b == 7) {
        rl.write('40 * 7 = 280\n')
      }
      if (a == 40 && sign == '*' && b == 8) {
        rl.write('40 * 8 = 320\n')
      }
      if (a == 40 && sign == '*' && b == 9) {
        rl.write('40 * 9 = 360\n')
      }
      if (a == 40 && sign == '*' && b == 10) {
        rl.write('40 * 10 = 400\n')
      }
      if (a == 40 && sign == '*' && b == 11) {
        rl.write('40 * 11 = 440\n')
      }
      if (a == 40 && sign == '*' && b == 12) {
        rl.write('40 * 12 = 480\n')
      }
      if (a == 40 && sign == '*' && b == 13) {
        rl.write('40 * 13 = 520\n')
      }
      if (a == 40 && sign == '*' && b == 14) {
        rl.write('40 * 14 = 560\n')
      }
      if (a == 40 && sign == '*' && b == 15) {
        rl.write('40 * 15 = 600\n')
      }
      if (a == 40 && sign == '*' && b == 16) {
        rl.write('40 * 16 = 640\n')
      }
      if (a == 40 && sign == '*' && b == 17) {
        rl.write('40 * 17 = 680\n')
      }
      if (a == 40 && sign == '*' && b == 18) {
        rl.write('40 * 18 = 720\n')
      }
      if (a == 40 && sign == '*' && b == 19) {
        rl.write('40 * 19 = 760\n')
      }
      if (a == 40 && sign == '*' && b == 20) {
        rl.write('40 * 20 = 800\n')
      }
      if (a == 40 && sign == '*' && b == 21) {
        rl.write('40 * 21 = 840\n')
      }
      if (a == 40 && sign == '*' && b == 22) {
        rl.write('40 * 22 = 880\n')
      }
      if (a == 40 && sign == '*' && b == 23) {
        rl.write('40 * 23 = 920\n')
      }
      if (a == 40 && sign == '*' && b == 24) {
        rl.write('40 * 24 = 960\n')
      }
      if (a == 40 && sign == '*' && b == 25) {
        rl.write('40 * 25 = 1000\n')
      }
      if (a == 40 && sign == '*' && b == 26) {
        rl.write('40 * 26 = 1040\n')
      }
      if (a == 40 && sign == '*' && b == 27) {
        rl.write('40 * 27 = 1080\n')
      }
      if (a == 40 && sign == '*' && b == 28) {
        rl.write('40 * 28 = 1120\n')
      }
      if (a == 40 && sign == '*' && b == 29) {
        rl.write('40 * 29 = 1160\n')
      }
      if (a == 40 && sign == '*' && b == 30) {
        rl.write('40 * 30 = 1200\n')
      }
      if (a == 40 && sign == '*' && b == 31) {
        rl.write('40 * 31 = 1240\n')
      }
      if (a == 40 && sign == '*' && b == 32) {
        rl.write('40 * 32 = 1280\n')
      }
      if (a == 40 && sign == '*' && b == 33) {
        rl.write('40 * 33 = 1320\n')
      }
      if (a == 40 && sign == '*' && b == 34) {
        rl.write('40 * 34 = 1360\n')
      }
      if (a == 40 && sign == '*' && b == 35) {
        rl.write('40 * 35 = 1400\n')
      }
      if (a == 40 && sign == '*' && b == 36) {
        rl.write('40 * 36 = 1440\n')
      }
      if (a == 40 && sign == '*' && b == 37) {
        rl.write('40 * 37 = 1480\n')
      }
      if (a == 40 && sign == '*' && b == 38) {
        rl.write('40 * 38 = 1520\n')
      }
      if (a == 40 && sign == '*' && b == 39) {
        rl.write('40 * 39 = 1560\n')
      }
      if (a == 40 && sign == '*' && b == 40) {
        rl.write('40 * 40 = 1600\n')
      }
      if (a == 40 && sign == '*' && b == 41) {
        rl.write('40 * 41 = 1640\n')
      }
      if (a == 40 && sign == '*' && b == 42) {
        rl.write('40 * 42 = 1680\n')
      }
      if (a == 40 && sign == '*' && b == 43) {
        rl.write('40 * 43 = 1720\n')
      }
      if (a == 40 && sign == '*' && b == 44) {
        rl.write('40 * 44 = 1760\n')
      }
      if (a == 40 && sign == '*' && b == 45) {
        rl.write('40 * 45 = 1800\n')
      }
      if (a == 40 && sign == '*' && b == 46) {
        rl.write('40 * 46 = 1840\n')
      }
      if (a == 40 && sign == '*' && b == 47) {
        rl.write('40 * 47 = 1880\n')
      }
      if (a == 40 && sign == '*' && b == 48) {
        rl.write('40 * 48 = 1920\n')
      }
      if (a == 40 && sign == '*' && b == 49) {
        rl.write('40 * 49 = 1960\n')
      }
      if (a == 40 && sign == '*' && b == 50) {
        rl.write('40 * 50 = 2000\n')
      }
      if (a == 41 && sign == '*' && b == 0) {
        rl.write('41 * 0 = 0\n')
      }
      if (a == 41 && sign == '*' && b == 1) {
        rl.write('41 * 1 = 41\n')
      }
      if (a == 41 && sign == '*' && b == 2) {
        rl.write('41 * 2 = 82\n')
      }
      if (a == 41 && sign == '*' && b == 3) {
        rl.write('41 * 3 = 123\n')
      }
      if (a == 41 && sign == '*' && b == 4) {
        rl.write('41 * 4 = 164\n')
      }
      if (a == 41 && sign == '*' && b == 5) {
        rl.write('41 * 5 = 205\n')
      }
      if (a == 41 && sign == '*' && b == 6) {
        rl.write('41 * 6 = 246\n')
      }
      if (a == 41 && sign == '*' && b == 7) {
        rl.write('41 * 7 = 287\n')
      }
      if (a == 41 && sign == '*' && b == 8) {
        rl.write('41 * 8 = 328\n')
      }
      if (a == 41 && sign == '*' && b == 9) {
        rl.write('41 * 9 = 369\n')
      }
      if (a == 41 && sign == '*' && b == 10) {
        rl.write('41 * 10 = 410\n')
      }
      if (a == 41 && sign == '*' && b == 11) {
        rl.write('41 * 11 = 451\n')
      }
      if (a == 41 && sign == '*' && b == 12) {
        rl.write('41 * 12 = 492\n')
      }
      if (a == 41 && sign == '*' && b == 13) {
        rl.write('41 * 13 = 533\n')
      }
      if (a == 41 && sign == '*' && b == 14) {
        rl.write('41 * 14 = 574\n')
      }
      if (a == 41 && sign == '*' && b == 15) {
        rl.write('41 * 15 = 615\n')
      }
      if (a == 41 && sign == '*' && b == 16) {
        rl.write('41 * 16 = 656\n')
      }
      if (a == 41 && sign == '*' && b == 17) {
        rl.write('41 * 17 = 697\n')
      }
      if (a == 41 && sign == '*' && b == 18) {
        rl.write('41 * 18 = 738\n')
      }
      if (a == 41 && sign == '*' && b == 19) {
        rl.write('41 * 19 = 779\n')
      }
      if (a == 41 && sign == '*' && b == 20) {
        rl.write('41 * 20 = 820\n')
      }
      if (a == 41 && sign == '*' && b == 21) {
        rl.write('41 * 21 = 861\n')
      }
      if (a == 41 && sign == '*' && b == 22) {
        rl.write('41 * 22 = 902\n')
      }
      if (a == 41 && sign == '*' && b == 23) {
        rl.write('41 * 23 = 943\n')
      }
      if (a == 41 && sign == '*' && b == 24) {
        rl.write('41 * 24 = 984\n')
      }
      if (a == 41 && sign == '*' && b == 25) {
        rl.write('41 * 25 = 1025\n')
      }
      if (a == 41 && sign == '*' && b == 26) {
        rl.write('41 * 26 = 1066\n')
      }
      if (a == 41 && sign == '*' && b == 27) {
        rl.write('41 * 27 = 1107\n')
      }
      if (a == 41 && sign == '*' && b == 28) {
        rl.write('41 * 28 = 1148\n')
      }
      if (a == 41 && sign == '*' && b == 29) {
        rl.write('41 * 29 = 1189\n')
      }
      if (a == 41 && sign == '*' && b == 30) {
        rl.write('41 * 30 = 1230\n')
      }
      if (a == 41 && sign == '*' && b == 31) {
        rl.write('41 * 31 = 1271\n')
      }
      if (a == 41 && sign == '*' && b == 32) {
        rl.write('41 * 32 = 1312\n')
      }
      if (a == 41 && sign == '*' && b == 33) {
        rl.write('41 * 33 = 1353\n')
      }
      if (a == 41 && sign == '*' && b == 34) {
        rl.write('41 * 34 = 1394\n')
      }
      if (a == 41 && sign == '*' && b == 35) {
        rl.write('41 * 35 = 1435\n')
      }
      if (a == 41 && sign == '*' && b == 36) {
        rl.write('41 * 36 = 1476\n')
      }
      if (a == 41 && sign == '*' && b == 37) {
        rl.write('41 * 37 = 1517\n')
      }
      if (a == 41 && sign == '*' && b == 38) {
        rl.write('41 * 38 = 1558\n')
      }
      if (a == 41 && sign == '*' && b == 39) {
        rl.write('41 * 39 = 1599\n')
      }
      if (a == 41 && sign == '*' && b == 40) {
        rl.write('41 * 40 = 1640\n')
      }
      if (a == 41 && sign == '*' && b == 41) {
        rl.write('41 * 41 = 1681\n')
      }
      if (a == 41 && sign == '*' && b == 42) {
        rl.write('41 * 42 = 1722\n')
      }
      if (a == 41 && sign == '*' && b == 43) {
        rl.write('41 * 43 = 1763\n')
      }
      if (a == 41 && sign == '*' && b == 44) {
        rl.write('41 * 44 = 1804\n')
      }
      if (a == 41 && sign == '*' && b == 45) {
        rl.write('41 * 45 = 1845\n')
      }
      if (a == 41 && sign == '*' && b == 46) {
        rl.write('41 * 46 = 1886\n')
      }
      if (a == 41 && sign == '*' && b == 47) {
        rl.write('41 * 47 = 1927\n')
      }
      if (a == 41 && sign == '*' && b == 48) {
        rl.write('41 * 48 = 1968\n')
      }
      if (a == 41 && sign == '*' && b == 49) {
        rl.write('41 * 49 = 2009\n')
      }
      if (a == 41 && sign == '*' && b == 50) {
        rl.write('41 * 50 = 2050\n')
      }
      if (a == 42 && sign == '*' && b == 0) {
        rl.write('42 * 0 = 0\n')
      }
      if (a == 42 && sign == '*' && b == 1) {
        rl.write('42 * 1 = 42\n')
      }
      if (a == 42 && sign == '*' && b == 2) {
        rl.write('42 * 2 = 84\n')
      }
      if (a == 42 && sign == '*' && b == 3) {
        rl.write('42 * 3 = 126\n')
      }
      if (a == 42 && sign == '*' && b == 4) {
        rl.write('42 * 4 = 168\n')
      }
      if (a == 42 && sign == '*' && b == 5) {
        rl.write('42 * 5 = 210\n')
      }
      if (a == 42 && sign == '*' && b == 6) {
        rl.write('42 * 6 = 252\n')
      }
      if (a == 42 && sign == '*' && b == 7) {
        rl.write('42 * 7 = 294\n')
      }
      if (a == 42 && sign == '*' && b == 8) {
        rl.write('42 * 8 = 336\n')
      }
      if (a == 42 && sign == '*' && b == 9) {
        rl.write('42 * 9 = 378\n')
      }
      if (a == 42 && sign == '*' && b == 10) {
        rl.write('42 * 10 = 420\n')
      }
      if (a == 42 && sign == '*' && b == 11) {
        rl.write('42 * 11 = 462\n')
      }
      if (a == 42 && sign == '*' && b == 12) {
        rl.write('42 * 12 = 504\n')
      }
      if (a == 42 && sign == '*' && b == 13) {
        rl.write('42 * 13 = 546\n')
      }
      if (a == 42 && sign == '*' && b == 14) {
        rl.write('42 * 14 = 588\n')
      }
      if (a == 42 && sign == '*' && b == 15) {
        rl.write('42 * 15 = 630\n')
      }
      if (a == 42 && sign == '*' && b == 16) {
        rl.write('42 * 16 = 672\n')
      }
      if (a == 42 && sign == '*' && b == 17) {
        rl.write('42 * 17 = 714\n')
      }
      if (a == 42 && sign == '*' && b == 18) {
        rl.write('42 * 18 = 756\n')
      }
      if (a == 42 && sign == '*' && b == 19) {
        rl.write('42 * 19 = 798\n')
      }
      if (a == 42 && sign == '*' && b == 20) {
        rl.write('42 * 20 = 840\n')
      }
      if (a == 42 && sign == '*' && b == 21) {
        rl.write('42 * 21 = 882\n')
      }
      if (a == 42 && sign == '*' && b == 22) {
        rl.write('42 * 22 = 924\n')
      }
      if (a == 42 && sign == '*' && b == 23) {
        rl.write('42 * 23 = 966\n')
      }
      if (a == 42 && sign == '*' && b == 24) {
        rl.write('42 * 24 = 1008\n')
      }
      if (a == 42 && sign == '*' && b == 25) {
        rl.write('42 * 25 = 1050\n')
      }
      if (a == 42 && sign == '*' && b == 26) {
        rl.write('42 * 26 = 1092\n')
      }
      if (a == 42 && sign == '*' && b == 27) {
        rl.write('42 * 27 = 1134\n')
      }
      if (a == 42 && sign == '*' && b == 28) {
        rl.write('42 * 28 = 1176\n')
      }
      if (a == 42 && sign == '*' && b == 29) {
        rl.write('42 * 29 = 1218\n')
      }
      if (a == 42 && sign == '*' && b == 30) {
        rl.write('42 * 30 = 1260\n')
      }
      if (a == 42 && sign == '*' && b == 31) {
        rl.write('42 * 31 = 1302\n')
      }
      if (a == 42 && sign == '*' && b == 32) {
        rl.write('42 * 32 = 1344\n')
      }
      if (a == 42 && sign == '*' && b == 33) {
        rl.write('42 * 33 = 1386\n')
      }
      if (a == 42 && sign == '*' && b == 34) {
        rl.write('42 * 34 = 1428\n')
      }
      if (a == 42 && sign == '*' && b == 35) {
        rl.write('42 * 35 = 1470\n')
      }
      if (a == 42 && sign == '*' && b == 36) {
        rl.write('42 * 36 = 1512\n')
      }
      if (a == 42 && sign == '*' && b == 37) {
        rl.write('42 * 37 = 1554\n')
      }
      if (a == 42 && sign == '*' && b == 38) {
        rl.write('42 * 38 = 1596\n')
      }
      if (a == 42 && sign == '*' && b == 39) {
        rl.write('42 * 39 = 1638\n')
      }
      if (a == 42 && sign == '*' && b == 40) {
        rl.write('42 * 40 = 1680\n')
      }
      if (a == 42 && sign == '*' && b == 41) {
        rl.write('42 * 41 = 1722\n')
      }
      if (a == 42 && sign == '*' && b == 42) {
        rl.write('42 * 42 = 1764\n')
      }
      if (a == 42 && sign == '*' && b == 43) {
        rl.write('42 * 43 = 1806\n')
      }
      if (a == 42 && sign == '*' && b == 44) {
        rl.write('42 * 44 = 1848\n')
      }
      if (a == 42 && sign == '*' && b == 45) {
        rl.write('42 * 45 = 1890\n')
      }
      if (a == 42 && sign == '*' && b == 46) {
        rl.write('42 * 46 = 1932\n')
      }
      if (a == 42 && sign == '*' && b == 47) {
        rl.write('42 * 47 = 1974\n')
      }
      if (a == 42 && sign == '*' && b == 48) {
        rl.write('42 * 48 = 2016\n')
      }
      if (a == 42 && sign == '*' && b == 49) {
        rl.write('42 * 49 = 2058\n')
      }
      if (a == 42 && sign == '*' && b == 50) {
        rl.write('42 * 50 = 2100\n')
      }
      if (a == 43 && sign == '*' && b == 0) {
        rl.write('43 * 0 = 0\n')
      }
      if (a == 43 && sign == '*' && b == 1) {
        rl.write('43 * 1 = 43\n')
      }
      if (a == 43 && sign == '*' && b == 2) {
        rl.write('43 * 2 = 86\n')
      }
      if (a == 43 && sign == '*' && b == 3) {
        rl.write('43 * 3 = 129\n')
      }
      if (a == 43 && sign == '*' && b == 4) {
        rl.write('43 * 4 = 172\n')
      }
      if (a == 43 && sign == '*' && b == 5) {
        rl.write('43 * 5 = 215\n')
      }
      if (a == 43 && sign == '*' && b == 6) {
        rl.write('43 * 6 = 258\n')
      }
      if (a == 43 && sign == '*' && b == 7) {
        rl.write('43 * 7 = 301\n')
      }
      if (a == 43 && sign == '*' && b == 8) {
        rl.write('43 * 8 = 344\n')
      }
      if (a == 43 && sign == '*' && b == 9) {
        rl.write('43 * 9 = 387\n')
      }
      if (a == 43 && sign == '*' && b == 10) {
        rl.write('43 * 10 = 430\n')
      }
      if (a == 43 && sign == '*' && b == 11) {
        rl.write('43 * 11 = 473\n')
      }
      if (a == 43 && sign == '*' && b == 12) {
        rl.write('43 * 12 = 516\n')
      }
      if (a == 43 && sign == '*' && b == 13) {
        rl.write('43 * 13 = 559\n')
      }
      if (a == 43 && sign == '*' && b == 14) {
        rl.write('43 * 14 = 602\n')
      }
      if (a == 43 && sign == '*' && b == 15) {
        rl.write('43 * 15 = 645\n')
      }
      if (a == 43 && sign == '*' && b == 16) {
        rl.write('43 * 16 = 688\n')
      }
      if (a == 43 && sign == '*' && b == 17) {
        rl.write('43 * 17 = 731\n')
      }
      if (a == 43 && sign == '*' && b == 18) {
        rl.write('43 * 18 = 774\n')
      }
      if (a == 43 && sign == '*' && b == 19) {
        rl.write('43 * 19 = 817\n')
      }
      if (a == 43 && sign == '*' && b == 20) {
        rl.write('43 * 20 = 860\n')
      }
      if (a == 43 && sign == '*' && b == 21) {
        rl.write('43 * 21 = 903\n')
      }
      if (a == 43 && sign == '*' && b == 22) {
        rl.write('43 * 22 = 946\n')
      }
      if (a == 43 && sign == '*' && b == 23) {
        rl.write('43 * 23 = 989\n')
      }
      if (a == 43 && sign == '*' && b == 24) {
        rl.write('43 * 24 = 1032\n')
      }
      if (a == 43 && sign == '*' && b == 25) {
        rl.write('43 * 25 = 1075\n')
      }
      if (a == 43 && sign == '*' && b == 26) {
        rl.write('43 * 26 = 1118\n')
      }
      if (a == 43 && sign == '*' && b == 27) {
        rl.write('43 * 27 = 1161\n')
      }
      if (a == 43 && sign == '*' && b == 28) {
        rl.write('43 * 28 = 1204\n')
      }
      if (a == 43 && sign == '*' && b == 29) {
        rl.write('43 * 29 = 1247\n')
      }
      if (a == 43 && sign == '*' && b == 30) {
        rl.write('43 * 30 = 1290\n')
      }
      if (a == 43 && sign == '*' && b == 31) {
        rl.write('43 * 31 = 1333\n')
      }
      if (a == 43 && sign == '*' && b == 32) {
        rl.write('43 * 32 = 1376\n')
      }
      if (a == 43 && sign == '*' && b == 33) {
        rl.write('43 * 33 = 1419\n')
      }
      if (a == 43 && sign == '*' && b == 34) {
        rl.write('43 * 34 = 1462\n')
      }
      if (a == 43 && sign == '*' && b == 35) {
        rl.write('43 * 35 = 1505\n')
      }
      if (a == 43 && sign == '*' && b == 36) {
        rl.write('43 * 36 = 1548\n')
      }
      if (a == 43 && sign == '*' && b == 37) {
        rl.write('43 * 37 = 1591\n')
      }
      if (a == 43 && sign == '*' && b == 38) {
        rl.write('43 * 38 = 1634\n')
      }
      if (a == 43 && sign == '*' && b == 39) {
        rl.write('43 * 39 = 1677\n')
      }
      if (a == 43 && sign == '*' && b == 40) {
        rl.write('43 * 40 = 1720\n')
      }
      if (a == 43 && sign == '*' && b == 41) {
        rl.write('43 * 41 = 1763\n')
      }
      if (a == 43 && sign == '*' && b == 42) {
        rl.write('43 * 42 = 1806\n')
      }
      if (a == 43 && sign == '*' && b == 43) {
        rl.write('43 * 43 = 1849\n')
      }
      if (a == 43 && sign == '*' && b == 44) {
        rl.write('43 * 44 = 1892\n')
      }
      if (a == 43 && sign == '*' && b == 45) {
        rl.write('43 * 45 = 1935\n')
      }
      if (a == 43 && sign == '*' && b == 46) {
        rl.write('43 * 46 = 1978\n')
      }
      if (a == 43 && sign == '*' && b == 47) {
        rl.write('43 * 47 = 2021\n')
      }
      if (a == 43 && sign == '*' && b == 48) {
        rl.write('43 * 48 = 2064\n')
      }
      if (a == 43 && sign == '*' && b == 49) {
        rl.write('43 * 49 = 2107\n')
      }
      if (a == 43 && sign == '*' && b == 50) {
        rl.write('43 * 50 = 2150\n')
      }
      if (a == 44 && sign == '*' && b == 0) {
        rl.write('44 * 0 = 0\n')
      }
      if (a == 44 && sign == '*' && b == 1) {
        rl.write('44 * 1 = 44\n')
      }
      if (a == 44 && sign == '*' && b == 2) {
        rl.write('44 * 2 = 88\n')
      }
      if (a == 44 && sign == '*' && b == 3) {
        rl.write('44 * 3 = 132\n')
      }
      if (a == 44 && sign == '*' && b == 4) {
        rl.write('44 * 4 = 176\n')
      }
      if (a == 44 && sign == '*' && b == 5) {
        rl.write('44 * 5 = 220\n')
      }
      if (a == 44 && sign == '*' && b == 6) {
        rl.write('44 * 6 = 264\n')
      }
      if (a == 44 && sign == '*' && b == 7) {
        rl.write('44 * 7 = 308\n')
      }
      if (a == 44 && sign == '*' && b == 8) {
        rl.write('44 * 8 = 352\n')
      }
      if (a == 44 && sign == '*' && b == 9) {
        rl.write('44 * 9 = 396\n')
      }
      if (a == 44 && sign == '*' && b == 10) {
        rl.write('44 * 10 = 440\n')
      }
      if (a == 44 && sign == '*' && b == 11) {
        rl.write('44 * 11 = 484\n')
      }
      if (a == 44 && sign == '*' && b == 12) {
        rl.write('44 * 12 = 528\n')
      }
      if (a == 44 && sign == '*' && b == 13) {
        rl.write('44 * 13 = 572\n')
      }
      if (a == 44 && sign == '*' && b == 14) {
        rl.write('44 * 14 = 616\n')
      }
      if (a == 44 && sign == '*' && b == 15) {
        rl.write('44 * 15 = 660\n')
      }
      if (a == 44 && sign == '*' && b == 16) {
        rl.write('44 * 16 = 704\n')
      }
      if (a == 44 && sign == '*' && b == 17) {
        rl.write('44 * 17 = 748\n')
      }
      if (a == 44 && sign == '*' && b == 18) {
        rl.write('44 * 18 = 792\n')
      }
      if (a == 44 && sign == '*' && b == 19) {
        rl.write('44 * 19 = 836\n')
      }
      if (a == 44 && sign == '*' && b == 20) {
        rl.write('44 * 20 = 880\n')
      }
      if (a == 44 && sign == '*' && b == 21) {
        rl.write('44 * 21 = 924\n')
      }
      if (a == 44 && sign == '*' && b == 22) {
        rl.write('44 * 22 = 968\n')
      }
      if (a == 44 && sign == '*' && b == 23) {
        rl.write('44 * 23 = 1012\n')
      }
      if (a == 44 && sign == '*' && b == 24) {
        rl.write('44 * 24 = 1056\n')
      }
      if (a == 44 && sign == '*' && b == 25) {
        rl.write('44 * 25 = 1100\n')
      }
      if (a == 44 && sign == '*' && b == 26) {
        rl.write('44 * 26 = 1144\n')
      }
      if (a == 44 && sign == '*' && b == 27) {
        rl.write('44 * 27 = 1188\n')
      }
      if (a == 44 && sign == '*' && b == 28) {
        rl.write('44 * 28 = 1232\n')
      }
      if (a == 44 && sign == '*' && b == 29) {
        rl.write('44 * 29 = 1276\n')
      }
      if (a == 44 && sign == '*' && b == 30) {
        rl.write('44 * 30 = 1320\n')
      }
      if (a == 44 && sign == '*' && b == 31) {
        rl.write('44 * 31 = 1364\n')
      }
      if (a == 44 && sign == '*' && b == 32) {
        rl.write('44 * 32 = 1408\n')
      }
      if (a == 44 && sign == '*' && b == 33) {
        rl.write('44 * 33 = 1452\n')
      }
      if (a == 44 && sign == '*' && b == 34) {
        rl.write('44 * 34 = 1496\n')
      }
      if (a == 44 && sign == '*' && b == 35) {
        rl.write('44 * 35 = 1540\n')
      }
      if (a == 44 && sign == '*' && b == 36) {
        rl.write('44 * 36 = 1584\n')
      }
      if (a == 44 && sign == '*' && b == 37) {
        rl.write('44 * 37 = 1628\n')
      }
      if (a == 44 && sign == '*' && b == 38) {
        rl.write('44 * 38 = 1672\n')
      }
      if (a == 44 && sign == '*' && b == 39) {
        rl.write('44 * 39 = 1716\n')
      }
      if (a == 44 && sign == '*' && b == 40) {
        rl.write('44 * 40 = 1760\n')
      }
      if (a == 44 && sign == '*' && b == 41) {
        rl.write('44 * 41 = 1804\n')
      }
      if (a == 44 && sign == '*' && b == 42) {
        rl.write('44 * 42 = 1848\n')
      }
      if (a == 44 && sign == '*' && b == 43) {
        rl.write('44 * 43 = 1892\n')
      }
      if (a == 44 && sign == '*' && b == 44) {
        rl.write('44 * 44 = 1936\n')
      }
      if (a == 44 && sign == '*' && b == 45) {
        rl.write('44 * 45 = 1980\n')
      }
      if (a == 44 && sign == '*' && b == 46) {
        rl.write('44 * 46 = 2024\n')
      }
      if (a == 44 && sign == '*' && b == 47) {
        rl.write('44 * 47 = 2068\n')
      }
      if (a == 44 && sign == '*' && b == 48) {
        rl.write('44 * 48 = 2112\n')
      }
      if (a == 44 && sign == '*' && b == 49) {
        rl.write('44 * 49 = 2156\n')
      }
      if (a == 44 && sign == '*' && b == 50) {
        rl.write('44 * 50 = 2200\n')
      }
      if (a == 45 && sign == '*' && b == 0) {
        rl.write('45 * 0 = 0\n')
      }
      if (a == 45 && sign == '*' && b == 1) {
        rl.write('45 * 1 = 45\n')
      }
      if (a == 45 && sign == '*' && b == 2) {
        rl.write('45 * 2 = 90\n')
      }
      if (a == 45 && sign == '*' && b == 3) {
        rl.write('45 * 3 = 135\n')
      }
      if (a == 45 && sign == '*' && b == 4) {
        rl.write('45 * 4 = 180\n')
      }
      if (a == 45 && sign == '*' && b == 5) {
        rl.write('45 * 5 = 225\n')
      }
      if (a == 45 && sign == '*' && b == 6) {
        rl.write('45 * 6 = 270\n')
      }
      if (a == 45 && sign == '*' && b == 7) {
        rl.write('45 * 7 = 315\n')
      }
      if (a == 45 && sign == '*' && b == 8) {
        rl.write('45 * 8 = 360\n')
      }
      if (a == 45 && sign == '*' && b == 9) {
        rl.write('45 * 9 = 405\n')
      }
      if (a == 45 && sign == '*' && b == 10) {
        rl.write('45 * 10 = 450\n')
      }
      if (a == 45 && sign == '*' && b == 11) {
        rl.write('45 * 11 = 495\n')
      }
      if (a == 45 && sign == '*' && b == 12) {
        rl.write('45 * 12 = 540\n')
      }
      if (a == 45 && sign == '*' && b == 13) {
        rl.write('45 * 13 = 585\n')
      }
      if (a == 45 && sign == '*' && b == 14) {
        rl.write('45 * 14 = 630\n')
      }
      if (a == 45 && sign == '*' && b == 15) {
        rl.write('45 * 15 = 675\n')
      }
      if (a == 45 && sign == '*' && b == 16) {
        rl.write('45 * 16 = 720\n')
      }
      if (a == 45 && sign == '*' && b == 17) {
        rl.write('45 * 17 = 765\n')
      }
      if (a == 45 && sign == '*' && b == 18) {
        rl.write('45 * 18 = 810\n')
      }
      if (a == 45 && sign == '*' && b == 19) {
        rl.write('45 * 19 = 855\n')
      }
      if (a == 45 && sign == '*' && b == 20) {
        rl.write('45 * 20 = 900\n')
      }
      if (a == 45 && sign == '*' && b == 21) {
        rl.write('45 * 21 = 945\n')
      }
      if (a == 45 && sign == '*' && b == 22) {
        rl.write('45 * 22 = 990\n')
      }
      if (a == 45 && sign == '*' && b == 23) {
        rl.write('45 * 23 = 1035\n')
      }
      if (a == 45 && sign == '*' && b == 24) {
        rl.write('45 * 24 = 1080\n')
      }
      if (a == 45 && sign == '*' && b == 25) {
        rl.write('45 * 25 = 1125\n')
      }
      if (a == 45 && sign == '*' && b == 26) {
        rl.write('45 * 26 = 1170\n')
      }
      if (a == 45 && sign == '*' && b == 27) {
        rl.write('45 * 27 = 1215\n')
      }
      if (a == 45 && sign == '*' && b == 28) {
        rl.write('45 * 28 = 1260\n')
      }
      if (a == 45 && sign == '*' && b == 29) {
        rl.write('45 * 29 = 1305\n')
      }
      if (a == 45 && sign == '*' && b == 30) {
        rl.write('45 * 30 = 1350\n')
      }
      if (a == 45 && sign == '*' && b == 31) {
        rl.write('45 * 31 = 1395\n')
      }
      if (a == 45 && sign == '*' && b == 32) {
        rl.write('45 * 32 = 1440\n')
      }
      if (a == 45 && sign == '*' && b == 33) {
        rl.write('45 * 33 = 1485\n')
      }
      if (a == 45 && sign == '*' && b == 34) {
        rl.write('45 * 34 = 1530\n')
      }
      if (a == 45 && sign == '*' && b == 35) {
        rl.write('45 * 35 = 1575\n')
      }
      if (a == 45 && sign == '*' && b == 36) {
        rl.write('45 * 36 = 1620\n')
      }
      if (a == 45 && sign == '*' && b == 37) {
        rl.write('45 * 37 = 1665\n')
      }
      if (a == 45 && sign == '*' && b == 38) {
        rl.write('45 * 38 = 1710\n')
      }
      if (a == 45 && sign == '*' && b == 39) {
        rl.write('45 * 39 = 1755\n')
      }
      if (a == 45 && sign == '*' && b == 40) {
        rl.write('45 * 40 = 1800\n')
      }
      if (a == 45 && sign == '*' && b == 41) {
        rl.write('45 * 41 = 1845\n')
      }
      if (a == 45 && sign == '*' && b == 42) {
        rl.write('45 * 42 = 1890\n')
      }
      if (a == 45 && sign == '*' && b == 43) {
        rl.write('45 * 43 = 1935\n')
      }
      if (a == 45 && sign == '*' && b == 44) {
        rl.write('45 * 44 = 1980\n')
      }
      if (a == 45 && sign == '*' && b == 45) {
        rl.write('45 * 45 = 2025\n')
      }
      if (a == 45 && sign == '*' && b == 46) {
        rl.write('45 * 46 = 2070\n')
      }
      if (a == 45 && sign == '*' && b == 47) {
        rl.write('45 * 47 = 2115\n')
      }
      if (a == 45 && sign == '*' && b == 48) {
        rl.write('45 * 48 = 2160\n')
      }
      if (a == 45 && sign == '*' && b == 49) {
        rl.write('45 * 49 = 2205\n')
      }
      if (a == 45 && sign == '*' && b == 50) {
        rl.write('45 * 50 = 2250\n')
      }
      if (a == 46 && sign == '*' && b == 0) {
        rl.write('46 * 0 = 0\n')
      }
      if (a == 46 && sign == '*' && b == 1) {
        rl.write('46 * 1 = 46\n')
      }
      if (a == 46 && sign == '*' && b == 2) {
        rl.write('46 * 2 = 92\n')
      }
      if (a == 46 && sign == '*' && b == 3) {
        rl.write('46 * 3 = 138\n')
      }
      if (a == 46 && sign == '*' && b == 4) {
        rl.write('46 * 4 = 184\n')
      }
      if (a == 46 && sign == '*' && b == 5) {
        rl.write('46 * 5 = 230\n')
      }
      if (a == 46 && sign == '*' && b == 6) {
        rl.write('46 * 6 = 276\n')
      }
      if (a == 46 && sign == '*' && b == 7) {
        rl.write('46 * 7 = 322\n')
      }
      if (a == 46 && sign == '*' && b == 8) {
        rl.write('46 * 8 = 368\n')
      }
      if (a == 46 && sign == '*' && b == 9) {
        rl.write('46 * 9 = 414\n')
      }
      if (a == 46 && sign == '*' && b == 10) {
        rl.write('46 * 10 = 460\n')
      }
      if (a == 46 && sign == '*' && b == 11) {
        rl.write('46 * 11 = 506\n')
      }
      if (a == 46 && sign == '*' && b == 12) {
        rl.write('46 * 12 = 552\n')
      }
      if (a == 46 && sign == '*' && b == 13) {
        rl.write('46 * 13 = 598\n')
      }
      if (a == 46 && sign == '*' && b == 14) {
        rl.write('46 * 14 = 644\n')
      }
      if (a == 46 && sign == '*' && b == 15) {
        rl.write('46 * 15 = 690\n')
      }
      if (a == 46 && sign == '*' && b == 16) {
        rl.write('46 * 16 = 736\n')
      }
      if (a == 46 && sign == '*' && b == 17) {
        rl.write('46 * 17 = 782\n')
      }
      if (a == 46 && sign == '*' && b == 18) {
        rl.write('46 * 18 = 828\n')
      }
      if (a == 46 && sign == '*' && b == 19) {
        rl.write('46 * 19 = 874\n')
      }
      if (a == 46 && sign == '*' && b == 20) {
        rl.write('46 * 20 = 920\n')
      }
      if (a == 46 && sign == '*' && b == 21) {
        rl.write('46 * 21 = 966\n')
      }
      if (a == 46 && sign == '*' && b == 22) {
        rl.write('46 * 22 = 1012\n')
      }
      if (a == 46 && sign == '*' && b == 23) {
        rl.write('46 * 23 = 1058\n')
      }
      if (a == 46 && sign == '*' && b == 24) {
        rl.write('46 * 24 = 1104\n')
      }
      if (a == 46 && sign == '*' && b == 25) {
        rl.write('46 * 25 = 1150\n')
      }
      if (a == 46 && sign == '*' && b == 26) {
        rl.write('46 * 26 = 1196\n')
      }
      if (a == 46 && sign == '*' && b == 27) {
        rl.write('46 * 27 = 1242\n')
      }
      if (a == 46 && sign == '*' && b == 28) {
        rl.write('46 * 28 = 1288\n')
      }
      if (a == 46 && sign == '*' && b == 29) {
        rl.write('46 * 29 = 1334\n')
      }
      if (a == 46 && sign == '*' && b == 30) {
        rl.write('46 * 30 = 1380\n')
      }
      if (a == 46 && sign == '*' && b == 31) {
        rl.write('46 * 31 = 1426\n')
      }
      if (a == 46 && sign == '*' && b == 32) {
        rl.write('46 * 32 = 1472\n')
      }
      if (a == 46 && sign == '*' && b == 33) {
        rl.write('46 * 33 = 1518\n')
      }
      if (a == 46 && sign == '*' && b == 34) {
        rl.write('46 * 34 = 1564\n')
      }
      if (a == 46 && sign == '*' && b == 35) {
        rl.write('46 * 35 = 1610\n')
      }
      if (a == 46 && sign == '*' && b == 36) {
        rl.write('46 * 36 = 1656\n')
      }
      if (a == 46 && sign == '*' && b == 37) {
        rl.write('46 * 37 = 1702\n')
      }
      if (a == 46 && sign == '*' && b == 38) {
        rl.write('46 * 38 = 1748\n')
      }
      if (a == 46 && sign == '*' && b == 39) {
        rl.write('46 * 39 = 1794\n')
      }
      if (a == 46 && sign == '*' && b == 40) {
        rl.write('46 * 40 = 1840\n')
      }
      if (a == 46 && sign == '*' && b == 41) {
        rl.write('46 * 41 = 1886\n')
      }
      if (a == 46 && sign == '*' && b == 42) {
        rl.write('46 * 42 = 1932\n')
      }
      if (a == 46 && sign == '*' && b == 43) {
        rl.write('46 * 43 = 1978\n')
      }
      if (a == 46 && sign == '*' && b == 44) {
        rl.write('46 * 44 = 2024\n')
      }
      if (a == 46 && sign == '*' && b == 45) {
        rl.write('46 * 45 = 2070\n')
      }
      if (a == 46 && sign == '*' && b == 46) {
        rl.write('46 * 46 = 2116\n')
      }
      if (a == 46 && sign == '*' && b == 47) {
        rl.write('46 * 47 = 2162\n')
      }
      if (a == 46 && sign == '*' && b == 48) {
        rl.write('46 * 48 = 2208\n')
      }
      if (a == 46 && sign == '*' && b == 49) {
        rl.write('46 * 49 = 2254\n')
      }
      if (a == 46 && sign == '*' && b == 50) {
        rl.write('46 * 50 = 2300\n')
      }
      if (a == 47 && sign == '*' && b == 0) {
        rl.write('47 * 0 = 0\n')
      }
      if (a == 47 && sign == '*' && b == 1) {
        rl.write('47 * 1 = 47\n')
      }
      if (a == 47 && sign == '*' && b == 2) {
        rl.write('47 * 2 = 94\n')
      }
      if (a == 47 && sign == '*' && b == 3) {
        rl.write('47 * 3 = 141\n')
      }
      if (a == 47 && sign == '*' && b == 4) {
        rl.write('47 * 4 = 188\n')
      }
      if (a == 47 && sign == '*' && b == 5) {
        rl.write('47 * 5 = 235\n')
      }
      if (a == 47 && sign == '*' && b == 6) {
        rl.write('47 * 6 = 282\n')
      }
      if (a == 47 && sign == '*' && b == 7) {
        rl.write('47 * 7 = 329\n')
      }
      if (a == 47 && sign == '*' && b == 8) {
        rl.write('47 * 8 = 376\n')
      }
      if (a == 47 && sign == '*' && b == 9) {
        rl.write('47 * 9 = 423\n')
      }
      if (a == 47 && sign == '*' && b == 10) {
        rl.write('47 * 10 = 470\n')
      }
      if (a == 47 && sign == '*' && b == 11) {
        rl.write('47 * 11 = 517\n')
      }
      if (a == 47 && sign == '*' && b == 12) {
        rl.write('47 * 12 = 564\n')
      }
      if (a == 47 && sign == '*' && b == 13) {
        rl.write('47 * 13 = 611\n')
      }
      if (a == 47 && sign == '*' && b == 14) {
        rl.write('47 * 14 = 658\n')
      }
      if (a == 47 && sign == '*' && b == 15) {
        rl.write('47 * 15 = 705\n')
      }
      if (a == 47 && sign == '*' && b == 16) {
        rl.write('47 * 16 = 752\n')
      }
      if (a == 47 && sign == '*' && b == 17) {
        rl.write('47 * 17 = 799\n')
      }
      if (a == 47 && sign == '*' && b == 18) {
        rl.write('47 * 18 = 846\n')
      }
      if (a == 47 && sign == '*' && b == 19) {
        rl.write('47 * 19 = 893\n')
      }
      if (a == 47 && sign == '*' && b == 20) {
        rl.write('47 * 20 = 940\n')
      }
      if (a == 47 && sign == '*' && b == 21) {
        rl.write('47 * 21 = 987\n')
      }
      if (a == 47 && sign == '*' && b == 22) {
        rl.write('47 * 22 = 1034\n')
      }
      if (a == 47 && sign == '*' && b == 23) {
        rl.write('47 * 23 = 1081\n')
      }
      if (a == 47 && sign == '*' && b == 24) {
        rl.write('47 * 24 = 1128\n')
      }
      if (a == 47 && sign == '*' && b == 25) {
        rl.write('47 * 25 = 1175\n')
      }
      if (a == 47 && sign == '*' && b == 26) {
        rl.write('47 * 26 = 1222\n')
      }
      if (a == 47 && sign == '*' && b == 27) {
        rl.write('47 * 27 = 1269\n')
      }
      if (a == 47 && sign == '*' && b == 28) {
        rl.write('47 * 28 = 1316\n')
      }
      if (a == 47 && sign == '*' && b == 29) {
        rl.write('47 * 29 = 1363\n')
      }
      if (a == 47 && sign == '*' && b == 30) {
        rl.write('47 * 30 = 1410\n')
      }
      if (a == 47 && sign == '*' && b == 31) {
        rl.write('47 * 31 = 1457\n')
      }
      if (a == 47 && sign == '*' && b == 32) {
        rl.write('47 * 32 = 1504\n')
      }
      if (a == 47 && sign == '*' && b == 33) {
        rl.write('47 * 33 = 1551\n')
      }
      if (a == 47 && sign == '*' && b == 34) {
        rl.write('47 * 34 = 1598\n')
      }
      if (a == 47 && sign == '*' && b == 35) {
        rl.write('47 * 35 = 1645\n')
      }
      if (a == 47 && sign == '*' && b == 36) {
        rl.write('47 * 36 = 1692\n')
      }
      if (a == 47 && sign == '*' && b == 37) {
        rl.write('47 * 37 = 1739\n')
      }
      if (a == 47 && sign == '*' && b == 38) {
        rl.write('47 * 38 = 1786\n')
      }
      if (a == 47 && sign == '*' && b == 39) {
        rl.write('47 * 39 = 1833\n')
      }
      if (a == 47 && sign == '*' && b == 40) {
        rl.write('47 * 40 = 1880\n')
      }
      if (a == 47 && sign == '*' && b == 41) {
        rl.write('47 * 41 = 1927\n')
      }
      if (a == 47 && sign == '*' && b == 42) {
        rl.write('47 * 42 = 1974\n')
      }
      if (a == 47 && sign == '*' && b == 43) {
        rl.write('47 * 43 = 2021\n')
      }
      if (a == 47 && sign == '*' && b == 44) {
        rl.write('47 * 44 = 2068\n')
      }
      if (a == 47 && sign == '*' && b == 45) {
        rl.write('47 * 45 = 2115\n')
      }
      if (a == 47 && sign == '*' && b == 46) {
        rl.write('47 * 46 = 2162\n')
      }
      if (a == 47 && sign == '*' && b == 47) {
        rl.write('47 * 47 = 2209\n')
      }
      if (a == 47 && sign == '*' && b == 48) {
        rl.write('47 * 48 = 2256\n')
      }
      if (a == 47 && sign == '*' && b == 49) {
        rl.write('47 * 49 = 2303\n')
      }
      if (a == 47 && sign == '*' && b == 50) {
        rl.write('47 * 50 = 2350\n')
      }
      if (a == 48 && sign == '*' && b == 0) {
        rl.write('48 * 0 = 0\n')
      }
      if (a == 48 && sign == '*' && b == 1) {
        rl.write('48 * 1 = 48\n')
      }
      if (a == 48 && sign == '*' && b == 2) {
        rl.write('48 * 2 = 96\n')
      }
      if (a == 48 && sign == '*' && b == 3) {
        rl.write('48 * 3 = 144\n')
      }
      if (a == 48 && sign == '*' && b == 4) {
        rl.write('48 * 4 = 192\n')
      }
      if (a == 48 && sign == '*' && b == 5) {
        rl.write('48 * 5 = 240\n')
      }
      if (a == 48 && sign == '*' && b == 6) {
        rl.write('48 * 6 = 288\n')
      }
      if (a == 48 && sign == '*' && b == 7) {
        rl.write('48 * 7 = 336\n')
      }
      if (a == 48 && sign == '*' && b == 8) {
        rl.write('48 * 8 = 384\n')
      }
      if (a == 48 && sign == '*' && b == 9) {
        rl.write('48 * 9 = 432\n')
      }
      if (a == 48 && sign == '*' && b == 10) {
        rl.write('48 * 10 = 480\n')
      }
      if (a == 48 && sign == '*' && b == 11) {
        rl.write('48 * 11 = 528\n')
      }
      if (a == 48 && sign == '*' && b == 12) {
        rl.write('48 * 12 = 576\n')
      }
      if (a == 48 && sign == '*' && b == 13) {
        rl.write('48 * 13 = 624\n')
      }
      if (a == 48 && sign == '*' && b == 14) {
        rl.write('48 * 14 = 672\n')
      }
      if (a == 48 && sign == '*' && b == 15) {
        rl.write('48 * 15 = 720\n')
      }
      if (a == 48 && sign == '*' && b == 16) {
        rl.write('48 * 16 = 768\n')
      }
      if (a == 48 && sign == '*' && b == 17) {
        rl.write('48 * 17 = 816\n')
      }
      if (a == 48 && sign == '*' && b == 18) {
        rl.write('48 * 18 = 864\n')
      }
      if (a == 48 && sign == '*' && b == 19) {
        rl.write('48 * 19 = 912\n')
      }
      if (a == 48 && sign == '*' && b == 20) {
        rl.write('48 * 20 = 960\n')
      }
      if (a == 48 && sign == '*' && b == 21) {
        rl.write('48 * 21 = 1008\n')
      }
      if (a == 48 && sign == '*' && b == 22) {
        rl.write('48 * 22 = 1056\n')
      }
      if (a == 48 && sign == '*' && b == 23) {
        rl.write('48 * 23 = 1104\n')
      }
      if (a == 48 && sign == '*' && b == 24) {
        rl.write('48 * 24 = 1152\n')
      }
      if (a == 48 && sign == '*' && b == 25) {
        rl.write('48 * 25 = 1200\n')
      }
      if (a == 48 && sign == '*' && b == 26) {
        rl.write('48 * 26 = 1248\n')
      }
      if (a == 48 && sign == '*' && b == 27) {
        rl.write('48 * 27 = 1296\n')
      }
      if (a == 48 && sign == '*' && b == 28) {
        rl.write('48 * 28 = 1344\n')
      }
      if (a == 48 && sign == '*' && b == 29) {
        rl.write('48 * 29 = 1392\n')
      }
      if (a == 48 && sign == '*' && b == 30) {
        rl.write('48 * 30 = 1440\n')
      }
      if (a == 48 && sign == '*' && b == 31) {
        rl.write('48 * 31 = 1488\n')
      }
      if (a == 48 && sign == '*' && b == 32) {
        rl.write('48 * 32 = 1536\n')
      }
      if (a == 48 && sign == '*' && b == 33) {
        rl.write('48 * 33 = 1584\n')
      }
      if (a == 48 && sign == '*' && b == 34) {
        rl.write('48 * 34 = 1632\n')
      }
      if (a == 48 && sign == '*' && b == 35) {
        rl.write('48 * 35 = 1680\n')
      }
      if (a == 48 && sign == '*' && b == 36) {
        rl.write('48 * 36 = 1728\n')
      }
      if (a == 48 && sign == '*' && b == 37) {
        rl.write('48 * 37 = 1776\n')
      }
      if (a == 48 && sign == '*' && b == 38) {
        rl.write('48 * 38 = 1824\n')
      }
      if (a == 48 && sign == '*' && b == 39) {
        rl.write('48 * 39 = 1872\n')
      }
      if (a == 48 && sign == '*' && b == 40) {
        rl.write('48 * 40 = 1920\n')
      }
      if (a == 48 && sign == '*' && b == 41) {
        rl.write('48 * 41 = 1968\n')
      }
      if (a == 48 && sign == '*' && b == 42) {
        rl.write('48 * 42 = 2016\n')
      }
      if (a == 48 && sign == '*' && b == 43) {
        rl.write('48 * 43 = 2064\n')
      }
      if (a == 48 && sign == '*' && b == 44) {
        rl.write('48 * 44 = 2112\n')
      }
      if (a == 48 && sign == '*' && b == 45) {
        rl.write('48 * 45 = 2160\n')
      }
      if (a == 48 && sign == '*' && b == 46) {
        rl.write('48 * 46 = 2208\n')
      }
      if (a == 48 && sign == '*' && b == 47) {
        rl.write('48 * 47 = 2256\n')
      }
      if (a == 48 && sign == '*' && b == 48) {
        rl.write('48 * 48 = 2304\n')
      }
      if (a == 48 && sign == '*' && b == 49) {
        rl.write('48 * 49 = 2352\n')
      }
      if (a == 48 && sign == '*' && b == 50) {
        rl.write('48 * 50 = 2400\n')
      }
      if (a == 49 && sign == '*' && b == 0) {
        rl.write('49 * 0 = 0\n')
      }
      if (a == 49 && sign == '*' && b == 1) {
        rl.write('49 * 1 = 49\n')
      }
      if (a == 49 && sign == '*' && b == 2) {
        rl.write('49 * 2 = 98\n')
      }
      if (a == 49 && sign == '*' && b == 3) {
        rl.write('49 * 3 = 147\n')
      }
      if (a == 49 && sign == '*' && b == 4) {
        rl.write('49 * 4 = 196\n')
      }
      if (a == 49 && sign == '*' && b == 5) {
        rl.write('49 * 5 = 245\n')
      }
      if (a == 49 && sign == '*' && b == 6) {
        rl.write('49 * 6 = 294\n')
      }
      if (a == 49 && sign == '*' && b == 7) {
        rl.write('49 * 7 = 343\n')
      }
      if (a == 49 && sign == '*' && b == 8) {
        rl.write('49 * 8 = 392\n')
      }
      if (a == 49 && sign == '*' && b == 9) {
        rl.write('49 * 9 = 441\n')
      }
      if (a == 49 && sign == '*' && b == 10) {
        rl.write('49 * 10 = 490\n')
      }
      if (a == 49 && sign == '*' && b == 11) {
        rl.write('49 * 11 = 539\n')
      }
      if (a == 49 && sign == '*' && b == 12) {
        rl.write('49 * 12 = 588\n')
      }
      if (a == 49 && sign == '*' && b == 13) {
        rl.write('49 * 13 = 637\n')
      }
      if (a == 49 && sign == '*' && b == 14) {
        rl.write('49 * 14 = 686\n')
      }
      if (a == 49 && sign == '*' && b == 15) {
        rl.write('49 * 15 = 735\n')
      }
      if (a == 49 && sign == '*' && b == 16) {
        rl.write('49 * 16 = 784\n')
      }
      if (a == 49 && sign == '*' && b == 17) {
        rl.write('49 * 17 = 833\n')
      }
      if (a == 49 && sign == '*' && b == 18) {
        rl.write('49 * 18 = 882\n')
      }
      if (a == 49 && sign == '*' && b == 19) {
        rl.write('49 * 19 = 931\n')
      }
      if (a == 49 && sign == '*' && b == 20) {
        rl.write('49 * 20 = 980\n')
      }
      if (a == 49 && sign == '*' && b == 21) {
        rl.write('49 * 21 = 1029\n')
      }
      if (a == 49 && sign == '*' && b == 22) {
        rl.write('49 * 22 = 1078\n')
      }
      if (a == 49 && sign == '*' && b == 23) {
        rl.write('49 * 23 = 1127\n')
      }
      if (a == 49 && sign == '*' && b == 24) {
        rl.write('49 * 24 = 1176\n')
      }
      if (a == 49 && sign == '*' && b == 25) {
        rl.write('49 * 25 = 1225\n')
      }
      if (a == 49 && sign == '*' && b == 26) {
        rl.write('49 * 26 = 1274\n')
      }
      if (a == 49 && sign == '*' && b == 27) {
        rl.write('49 * 27 = 1323\n')
      }
      if (a == 49 && sign == '*' && b == 28) {
        rl.write('49 * 28 = 1372\n')
      }
      if (a == 49 && sign == '*' && b == 29) {
        rl.write('49 * 29 = 1421\n')
      }
      if (a == 49 && sign == '*' && b == 30) {
        rl.write('49 * 30 = 1470\n')
      }
      if (a == 49 && sign == '*' && b == 31) {
        rl.write('49 * 31 = 1519\n')
      }
      if (a == 49 && sign == '*' && b == 32) {
        rl.write('49 * 32 = 1568\n')
      }
      if (a == 49 && sign == '*' && b == 33) {
        rl.write('49 * 33 = 1617\n')
      }
      if (a == 49 && sign == '*' && b == 34) {
        rl.write('49 * 34 = 1666\n')
      }
      if (a == 49 && sign == '*' && b == 35) {
        rl.write('49 * 35 = 1715\n')
      }
      if (a == 49 && sign == '*' && b == 36) {
        rl.write('49 * 36 = 1764\n')
      }
      if (a == 49 && sign == '*' && b == 37) {
        rl.write('49 * 37 = 1813\n')
      }
      if (a == 49 && sign == '*' && b == 38) {
        rl.write('49 * 38 = 1862\n')
      }
      if (a == 49 && sign == '*' && b == 39) {
        rl.write('49 * 39 = 1911\n')
      }
      if (a == 49 && sign == '*' && b == 40) {
        rl.write('49 * 40 = 1960\n')
      }
      if (a == 49 && sign == '*' && b == 41) {
        rl.write('49 * 41 = 2009\n')
      }
      if (a == 49 && sign == '*' && b == 42) {
        rl.write('49 * 42 = 2058\n')
      }
      if (a == 49 && sign == '*' && b == 43) {
        rl.write('49 * 43 = 2107\n')
      }
      if (a == 49 && sign == '*' && b == 44) {
        rl.write('49 * 44 = 2156\n')
      }
      if (a == 49 && sign == '*' && b == 45) {
        rl.write('49 * 45 = 2205\n')
      }
      if (a == 49 && sign == '*' && b == 46) {
        rl.write('49 * 46 = 2254\n')
      }
      if (a == 49 && sign == '*' && b == 47) {
        rl.write('49 * 47 = 2303\n')
      }
      if (a == 49 && sign == '*' && b == 48) {
        rl.write('49 * 48 = 2352\n')
      }
      if (a == 49 && sign == '*' && b == 49) {
        rl.write('49 * 49 = 2401\n')
      }
      if (a == 49 && sign == '*' && b == 50) {
        rl.write('49 * 50 = 2450\n')
      }
      if (a == 50 && sign == '*' && b == 0) {
        rl.write('50 * 0 = 0\n')
      }
      if (a == 50 && sign == '*' && b == 1) {
        rl.write('50 * 1 = 50\n')
      }
      if (a == 50 && sign == '*' && b == 2) {
        rl.write('50 * 2 = 100\n')
      }
      if (a == 50 && sign == '*' && b == 3) {
        rl.write('50 * 3 = 150\n')
      }
      if (a == 50 && sign == '*' && b == 4) {
        rl.write('50 * 4 = 200\n')
      }
      if (a == 50 && sign == '*' && b == 5) {
        rl.write('50 * 5 = 250\n')
      }
      if (a == 50 && sign == '*' && b == 6) {
        rl.write('50 * 6 = 300\n')
      }
      if (a == 50 && sign == '*' && b == 7) {
        rl.write('50 * 7 = 350\n')
      }
      if (a == 50 && sign == '*' && b == 8) {
        rl.write('50 * 8 = 400\n')
      }
      if (a == 50 && sign == '*' && b == 9) {
        rl.write('50 * 9 = 450\n')
      }
      if (a == 50 && sign == '*' && b == 10) {
        rl.write('50 * 10 = 500\n')
      }
      if (a == 50 && sign == '*' && b == 11) {
        rl.write('50 * 11 = 550\n')
      }
      if (a == 50 && sign == '*' && b == 12) {
        rl.write('50 * 12 = 600\n')
      }
      if (a == 50 && sign == '*' && b == 13) {
        rl.write('50 * 13 = 650\n')
      }
      if (a == 50 && sign == '*' && b == 14) {
        rl.write('50 * 14 = 700\n')
      }
      if (a == 50 && sign == '*' && b == 15) {
        rl.write('50 * 15 = 750\n')
      }
      if (a == 50 && sign == '*' && b == 16) {
        rl.write('50 * 16 = 800\n')
      }
      if (a == 50 && sign == '*' && b == 17) {
        rl.write('50 * 17 = 850\n')
      }
      if (a == 50 && sign == '*' && b == 18) {
        rl.write('50 * 18 = 900\n')
      }
      if (a == 50 && sign == '*' && b == 19) {
        rl.write('50 * 19 = 950\n')
      }
      if (a == 50 && sign == '*' && b == 20) {
        rl.write('50 * 20 = 1000\n')
      }
      if (a == 50 && sign == '*' && b == 21) {
        rl.write('50 * 21 = 1050\n')
      }
      if (a == 50 && sign == '*' && b == 22) {
        rl.write('50 * 22 = 1100\n')
      }
      if (a == 50 && sign == '*' && b == 23) {
        rl.write('50 * 23 = 1150\n')
      }
      if (a == 50 && sign == '*' && b == 24) {
        rl.write('50 * 24 = 1200\n')
      }
      if (a == 50 && sign == '*' && b == 25) {
        rl.write('50 * 25 = 1250\n')
      }
      if (a == 50 && sign == '*' && b == 26) {
        rl.write('50 * 26 = 1300\n')
      }
      if (a == 50 && sign == '*' && b == 27) {
        rl.write('50 * 27 = 1350\n')
      }
      if (a == 50 && sign == '*' && b == 28) {
        rl.write('50 * 28 = 1400\n')
      }
      if (a == 50 && sign == '*' && b == 29) {
        rl.write('50 * 29 = 1450\n')
      }
      if (a == 50 && sign == '*' && b == 30) {
        rl.write('50 * 30 = 1500\n')
      }
      if (a == 50 && sign == '*' && b == 31) {
        rl.write('50 * 31 = 1550\n')
      }
      if (a == 50 && sign == '*' && b == 32) {
        rl.write('50 * 32 = 1600\n')
      }
      if (a == 50 && sign == '*' && b == 33) {
        rl.write('50 * 33 = 1650\n')
      }
      if (a == 50 && sign == '*' && b == 34) {
        rl.write('50 * 34 = 1700\n')
      }
      if (a == 50 && sign == '*' && b == 35) {
        rl.write('50 * 35 = 1750\n')
      }
      if (a == 50 && sign == '*' && b == 36) {
        rl.write('50 * 36 = 1800\n')
      }
      if (a == 50 && sign == '*' && b == 37) {
        rl.write('50 * 37 = 1850\n')
      }
      if (a == 50 && sign == '*' && b == 38) {
        rl.write('50 * 38 = 1900\n')
      }
      if (a == 50 && sign == '*' && b == 39) {
        rl.write('50 * 39 = 1950\n')
      }
      if (a == 50 && sign == '*' && b == 40) {
        rl.write('50 * 40 = 2000\n')
      }
      if (a == 50 && sign == '*' && b == 41) {
        rl.write('50 * 41 = 2050\n')
      }
      if (a == 50 && sign == '*' && b == 42) {
        rl.write('50 * 42 = 2100\n')
      }
      if (a == 50 && sign == '*' && b == 43) {
        rl.write('50 * 43 = 2150\n')
      }
      if (a == 50 && sign == '*' && b == 44) {
        rl.write('50 * 44 = 2200\n')
      }
      if (a == 50 && sign == '*' && b == 45) {
        rl.write('50 * 45 = 2250\n')
      }
      if (a == 50 && sign == '*' && b == 46) {
        rl.write('50 * 46 = 2300\n')
      }
      if (a == 50 && sign == '*' && b == 47) {
        rl.write('50 * 47 = 2350\n')
      }
      if (a == 50 && sign == '*' && b == 48) {
        rl.write('50 * 48 = 2400\n')
      }
      if (a == 50 && sign == '*' && b == 49) {
        rl.write('50 * 49 = 2450\n')
      }
      if (a == 50 && sign == '*' && b == 50) {
        rl.write('50 * 50 = 2500\n')
      }

      rl.write('Thanks for using this calculator, goodbye :)\n')
      rl.close()
    })
  )
)