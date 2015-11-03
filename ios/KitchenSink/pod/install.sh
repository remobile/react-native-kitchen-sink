#!/bin/bash

proj=KitchenSink

if [ -a ${proj}.xcworkspace ];then
    pod update --no-repo-update
else
    pod install --no-repo-update
    cd ../..
    ln -s ${proj}/pod/${proj}.xcworkspace ${proj}.xcworkspace
fi
chmod -R 755 Pods

