# Use the official Cypress Docker image as a base.
ARG NODE_VERSION='18.16.0'
ARG CHROME_VERSION='113.0.5672.92-1'
ARG EDGE_VERSION='100.0.1185.29-1'
ARG FIREFOX_VERSION='107.0'
FROM cypress/factory

# Set the working directory to /cypress/e2e.  
WORKDIR /cypress/e2e

# Copy the project files into the container.
COPY . /cypress/e2e

# Install project dependencies.
RUN npm install

# Run the Cypress tests.
CMD ["npm", "run", "test:e2e:headless"]