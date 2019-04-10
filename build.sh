#!/bin/sh
cd $TRAVIS_BUILD_DIR/backend && npm test && cd $TRAVIS_BUILD_DIR/client && yarn test
