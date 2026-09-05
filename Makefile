.PHONY: dev build

dev:
	docker compose up -d --build

build:
	docker compose build