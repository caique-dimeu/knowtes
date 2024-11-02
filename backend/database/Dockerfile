# Dockerfile for MongoDB
FROM mongo:latest

# Copy the custom MongoDB configuration file
COPY mongod.conf /etc/mongod.conf

# Copy init.js for initial database setup
COPY mongo-init /docker-entrypoint-initdb.d/

# Run MongoDB with the custom configuration file
CMD ["mongod", "--config", "/etc/mongod.conf"]
