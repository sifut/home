FROM alpine
MAINTAINER Steve Vega "steve.vega@hulilabs.com"

RUN apk add --update \
    ruby-dev \
    make \
  && rm -rf /var/cache/apk/*

RUN gem install listen --source http://rubygems.org
RUN gem install sass -v 3.4.13 --source http://rubygems.org
RUN gem install compass -v 1.0.3 --source http://rubygems.org

VOLUME /input
VOLUME /output

WORKDIR /input

COPY config.rb /input/config.rb

ENTRYPOINT [ "compass" ]