# App for CI/CD solutions

## GitHub Actions - Notes

> reet!

---

## Travis CI - Notes

### View [official docs][travis-docs] or checkout this [cheat-sheet][travis-cheat]

### Build Life Cycle

- before_install
- install
- before_script
- script
- after_success OR after_failure
- after_script
- **OPTIONAL** before_deploy
- **OPTIONAL** deploy
- **OPTIONAL** after_deploy

### Getting setup:

1. Add app thru [website][travis] from `Settings > GitHub App Integration`
2. Create `.travis.yml` file in root of project dir
3.

<!-- Travis CI Links -->

[travis]: https://travis-ci.com
[travis-docs]: https://docs.travis-ci.com
[travis-cheat]: https://devhints.io/travis

---

## Jenkins - Notes

### View [official doc][jdocs] or refer to the [tutorial][jtut]

### Running Jenkins on Docker with Blue Ocean

```
docker network create jenkins
docker volume create jenkins-docker-certs
docker volume create jenkins-data
```

```
docker container run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --volume "$HOME":/home \
  --publish 3000:3000 docker:dind
```

```
docker container run --name jenkins-tutorial --rm --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --volume "$HOME":/home --publish 8080:8080 jenkinsci/blueocean
```

#### Starting and restarting Jenkins

```
docker container stop jenkins jenkins-docker # stop obviously
docker run ... # see command above for jenkins-docker
```

<!-- Jenkins Links -->

[jenkins]: https://jenkins.io
[jdocs]: https://jenkins.io/doc/
[jtut]: https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/
