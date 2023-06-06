FROM denoland/deno:1.32.0

LABEL org.opencontainers.image.source https://github.com/hox/eli.tf

WORKDIR /opt/app

COPY . .

RUN deno cache main.ts

CMD ["run", "-A", "--allow-net", "--allow-run", "main.ts"]
