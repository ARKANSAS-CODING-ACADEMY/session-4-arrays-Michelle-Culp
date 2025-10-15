#!/usr/bin/env bash

set -e
shopt -s globstar

a_test_has_failed=false

for test_file in ./**/*.test.js; do
  test_suite=$(dirname "$test_file")
  pushd "$test_suite" >/dev/null
  if ! node --test --test-reporter=junit >junit-report.xml; then
    a_test_has_failed=true
    echo "Tests for $(basename "$test_suite") failed."
  fi
  popd >/dev/null
done

if $a_test_has_failed; then
  echo "One or more test suites failed."
  exit 1
fi
