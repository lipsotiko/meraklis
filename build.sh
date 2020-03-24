#!/usr/bin/env bash
npm ci
rm -rf dist
npm run build
