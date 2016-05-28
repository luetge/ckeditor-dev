#!/bin/bash

set -e

# Build the files
./build.sh

# Now copy a stripped down version to /dist
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TARGET_DIR=$BASE_DIR/../../dist
RELEASE_DIR=$BASE_DIR/release/ckeditor
mkdir -p $TARGET_DIR
rm -rf $TARGET_DIR/*

FILES=( "/ckeditor.js" "/styles.js" "/contents.css" "/skins/mathhire/skin.js" "/skins/mathhire/dialog.css" "/skins/mathhire/editor.css" "/lang/en.js" )
for FILE in "${FILES[@]}"
do
    mkdir -p `dirname $TARGET_DIR$FILE`
    cp $RELEASE_DIR$FILE $TARGET_DIR$FILE
done

cp $BASE_DIR/dist-config.js $TARGET_DIR/config.js

echo ""
echo "Built the stripped down version in /dist"
