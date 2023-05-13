# Use the official Cypress Docker image as a base.
FROM cypress/browsers:latest

# Set the working directory to /cypress/e2e.
WORKDIR /cypress/e2e

# Copy the project files into the container.
COPY . .

# Install project dependencies.
RUN npm install

# Run the Cypress tests.
CMD ["npm", "run", "cypress:run"]