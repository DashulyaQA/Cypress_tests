/// <reference types="cypress" />

describe('API tests with plugin', () => {

it("GET users", () => {
    cy.api("GET", "https://jsonplaceholder.typicode.com/users").should((response) => {
      expect(response.status).to.eq(200);
    });
   });

   it('POST create one post', () => {
    const newPost = {
        title: 'Hello world',
        body: 'This is my second post here',
        userId: 1
    }
    cy.api('Post', 'https://jsonplaceholder.typicode.com/posts', newPost).should((response) => {
        expect(response.status).to.eq(201);
})})


    it("DELETE post", () => {
    cy.api("DELETE", "https://jsonplaceholder.typicode.com/posts/8").should((response) => {
      expect(response.status).to.eq(200);
    });
   });
})