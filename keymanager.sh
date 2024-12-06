#!/bin/bash
if [ $# -ne 2 ]; then
  exit 1
fi

#echo "security find-generic-password -w -a ${1} -s ${2}"
security find-generic-password -w -a ${1} -s ${2}