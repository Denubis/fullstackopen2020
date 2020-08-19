#!/bin/bash

set -euo pipefail

if [[ -z "$1" ]]; then
	echo "./createExercise <name>"
	exit 1
fi


npx create-react-app "$1"

cd "$1"
#rm -rf .git
subl -n src/index.js &

npm start

