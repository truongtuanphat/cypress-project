# Use the official Cypress Docker image as a base.
ARG NODE_VERSION='18.18.2'
ARG CHROME_VERSION='118.0.5993.117-1'
ARG CYPRESS_VERSION='13.3.3'
FROM cypress/factory:3.2.0

# Set the working directory to /cypress/e2e.
WORKDIR /cypress/e2e

# Copy the project files into the container.
COPY . /cypress/e2e

# Install project dependencies.
RUN npm install

# Run the Cypress tests.
CMD ["npm", "run", "test"]