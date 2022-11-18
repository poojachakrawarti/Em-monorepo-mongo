#!/bin/bash

# enable buildkit for parallel builds
export DOCKER_BUILDKIT=1
# use docker cli for building
export COMPOSE_DOCKER_CLI_BUILD=1
# build and make the containers ready
docker compose -p "" up --build --wait
