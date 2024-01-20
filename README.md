# NewVer Semantic Versioning Script
This will allow you to easily script semantic version updates for your apps.  I made this to have a platform agnostic `newver` command to run on Mac, Linux, and Windows.  Install it with 

``` npm install -g git+https://github.com/gpasq/newver.git```

After completion, you can run `newver` in any folder with a `CURRENT_VERSION` file.

Note that this currently only updates the patch version, but I'll add major and minor
version updates in a new build.