FROM openjdk:8-jre-alpine
ENV SERVICE_HOST localhost
ENV SERVICE_PORT 9000
COPY target/mams-hello-service-0.1.0-jar-with-dependencies.jar /mams-hello-service-0.1.0.jar
CMD /usr/bin/java -jar /mams-hello-service-0.1.0.jar