FROM alpine:3.19

# Install necessary packages
RUN apk add --no-cache ca-certificates

# Set the working directory
WORKDIR /app

# Copy PocketBase binary and other necessary files
COPY amd64/pocketbase .
COPY pb_migrations pb_migrations/
COPY pb_data pb_data/

# Expose PocketBase default port
EXPOSE 8090

# Run PocketBase
CMD ["./pocketbase", "serve", "--http", "0.0.0.0:8090"]
