#!/usr/bin/env node

const fs = require('node:fs');
try {
    const v = fs.readFileSync('CURRENT_VERSION', 'utf8');
    const vals = v.split(".")

    if (vals.length !== 3) {
        console.log("Version not structured correctly")
    }

    const major = vals[0]
    const minor = vals[1]
    const patch = vals[2]

    console.log("Current version: " + major + "." + minor + "." + patch)
    console.log("New version: " + major + "." + minor + "." + (Number(patch) + 1))

    fs.writeFileSync("CURRENT_VERSION", major + "." + minor + "." + (Number(patch) + 1))

} catch (err) {
    console.error(err);
}

