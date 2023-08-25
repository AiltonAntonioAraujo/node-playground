import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";
import { Fibonnaci } from "./Fibonacci.js";

const rl = readline.createInterface({input, output});

const answer = await rl.question("Favor informar um Nro para sequência de Fibonnaci");

console.log(`O valor da soma de Fibonacci para a Sequência: ${answer} é: ${Array.from({ length: answer }, (v,k) => (Fibonnaci.getSum(k)))}`);

rl.close();
