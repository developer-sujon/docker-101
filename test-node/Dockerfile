FROM ubuntu:latest

WORKDIR /app

COPY index.js .

RUN apt-get update

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs

CMD ["node", "index.js"]