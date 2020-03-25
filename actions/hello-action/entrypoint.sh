#!/bin/sh -l

echo "Howzit $1"
time=$(date)
echo "::set-output name=time::$time"