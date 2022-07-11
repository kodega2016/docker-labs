Here we are using docker-compose to create multi-container app

to run the container

Start container

```
docker-compose up
docker-compose up -d //detach mode
docker-compose up --build //re-build if exists
```

Stop container

```
docker-compose down
```

Docker Compose Re-start policies

- no
- always
- on-failure
- unless-stopped

Docker Container status with Docker Compose

```
docker-compose ps
```
