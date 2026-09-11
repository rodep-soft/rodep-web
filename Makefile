.PHONY: dev build

dev:
	DOCKER_BUILDKIT=1 docker compose up -d --build

build:
	DOCKER_BUILDKIT=1 docker compose build