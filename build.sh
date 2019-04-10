#!/bin/sh
cd $TRAVIS_BUILD_DIR/backend && npm test && cd .. && yarn test
