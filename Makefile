all: build-docker

build-docker:
	docker build -t bags .
