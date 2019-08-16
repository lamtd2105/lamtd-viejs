#!/usr/bin/env sh

# abort on errors
set -e

rimraf dist

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lamtd2105/lamtd-vuejs.git master:gh-pages

cd -