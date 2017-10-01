# SIFUT Home Page

## Getting started

Make sure you have your [Github](https://github.com/) and [DockerHub](https://hub.docker.com/) accounts ready with permission granted for Sifut. Then clone this repo in any location then follow the instructions below.

### Setup docker host
- [Install docker](http://docs.docker.com/installation)

### Add required env variables
In your the host set the following env variables:
- SIFUT_MAIL_USER
- SIFUT_MAIL_PASS

### Setup docker app
- In your docker host, go to the app root path and run ```docker login``` then enter your DockerHub username and password as requested.
- Run ```docker-compose up -d```.
- Make sure all the services are running ```docker-compose ps```.

### Accessing the app
- Home: http://localhost
- API: http://localhost/api/

## Contributors
- @jimmfallas
- @pablonavarro2017
