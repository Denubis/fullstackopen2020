#!/bin/bash

set -euo pipefail

if [[ -z "$1" ]]; then
	echo "./createExercise <exerciseNum> <name>"
	exit 1
fi

if [[ -z "$2" ]]; then
	echo "./createExercise <exerciseNum> <name>"
	exit 1
fi

npx create-react-app "exercise-$1_$2"

cd "exercise-$1_$2"
#rm -rf .git
subl -n src/index.js &

npm start

