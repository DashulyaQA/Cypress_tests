FROM cypress/included:latest

WORKDIR /cypress-test

COPY . .

RUN npm install

CMD ["npx", "cypress", "run"]