#!/usr/bin/env node
import process from "node:process";

const name = process.argv[2] ?? "mundo";
console.log(`Olá, ${name}! — API com cache, fila assíncrona e limitação`);
