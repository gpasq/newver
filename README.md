# NewVer Semantic Versioning Script
This will allow you to easily script semantic version updates for your apps.  I made this to have a platform agnostic `newver` command to run on Mac, Linux, and Windows.  Install it with 

``` npm install -g git+https://github.com/gpasq/newver.git```

After completion, you can run `newver`.  If `newver` finds a CURRENT_VERSION file containing
a semantic versioning string (like "1.0.0") it will update the version.  If no `CURRENT_VERSION`
file is found, it will create one and set the version string to "1.0.0".

Note that this currently only updates the patch version, but I'll add major and minor
version updates in a new build.