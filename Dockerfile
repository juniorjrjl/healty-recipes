FROM node:16.16.0

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /healty-recipes

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm i -g @angular/cli@14.1.0

RUN npm i --save -g @angular-devkit/build-angular@14.1.0

RUN npm i

COPY . .