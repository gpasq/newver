#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const filename = "CURRENT_VERSION"

if (!existsSync(filename)) {
    console.log("New version: 1.0.0");
    writeFileSync(filename, "1.0.0");
}
else {
    const v = readFileSync(filename, 'utf8');
    const vals = v.split(".")

    if (vals.length !== 3) {
        console.log("Version not structured correctly")
    }

    const major = vals[0]
    const minor = vals[1]
    const patch = vals[2]

    console.log("Current version: " + major + "." + minor + "." + patch)
    console.log("New version: " + major + "." + minor + "." + (Number(patch) + 1))

    writeFileSync(filename, major + "." + minor + "." + (Number(patch) + 1))
}