# arango-migrate-example

A minimal example of how to use the [arango-migrate](https://github.com/TimMikeladze/arango-migrate) cli tool.

## How to use

```console
docker compose up -d

cp .env.example .env

yarn install

yarn arango-migrate --up

yarn arango-migrate --list

yarn arango-migrate --init my_new_migration

yarn arango-migrate --up
```

Read the full documentation [here](https://github.com/TimMikeladze/arango-migrate)
