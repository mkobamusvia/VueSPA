#!/bin/sh


DOCBIN=`which yuidoc`
if [ "x" = "x$DOCBIN" ]; then
	echo "===== Info : not found yuidocjs ====";
	echo "npm -g install yuidocjs";
	echo "refer to https://yui.github.io/yuidoc/"
	echo ""
	exit;
fi

VERSION=`cat package.json | jq .version | sed -e 's/"//g' `

mkdir -p build
if [ -d build/jsdoc ]; then
	rm -rf build/jsdoc
fi
( cd src; $DOCBIN . -c yuidoc.json )

rm -rf jsdoc/$VERSION
mv build/html jsdoc/$VERSION