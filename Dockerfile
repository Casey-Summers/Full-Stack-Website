# Future instructions for starting a Docker container

# Select the runtime interpreter (Linux image) for the container
FROM node:26-bookworm-slim

# Set the working directory name (this is what the container sees)
WORKDIR /Casey_Full_Stack_Website

# Copy the app requirements into the container's root
COPY npm install

# Copy from the root of the build directory to the working diredtory
COPY . .

# Expose a localhost port that the app will use
ENV PORT=8080
EXPOSE 8080

# Executable to run by default when the container is provisioned
CMD [ "executable" ]