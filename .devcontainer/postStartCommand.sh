#!/bin/bash

sudo chown -R node:node node_modules \
    && npm install

sudo chown -R node:node tests/bin \
    && npx tsc --build tsconfig.test.json

