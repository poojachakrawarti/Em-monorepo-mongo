#!/bin/bash
docker volume rm -f $(docker volume ls -q)
