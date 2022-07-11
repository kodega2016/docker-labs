Docker Volume

We can use Docker Volume(-v) to reflect the changes without re-building the docker images

```
docker run -p 3000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app kodega/frontend
```

We can shorten this run command using docker-compose

```
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /usr/app/node_modules
      - .:/usr/app
```

Then we can run another command

```
docker run -it containerID npm run test
```
