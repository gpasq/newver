#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const filename = "CURRENT_VERSION"

if (!existsSync(filename)) {
    console.log("1.0.0");
}
else {
    const v = readFileSync(filename, 'utf8');
    console.log(v)
}