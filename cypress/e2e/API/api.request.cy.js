/// <reference types="cypress" />

describe('API tests', () => {

    it('Request - GET users, and specific username', () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const body = response.body;
                expect(body.length).to.be.eq(10);
                expect(body[6].username).to.eq('Elwyn.Skiles');
            })
    })

    it('Request - GET 100 posts', () => {
        cy.request('Get', 'https://jsonplaceholder.typicode.com/posts').its('body').should('have.length', 100)
    })

    it('Request - POST create one post', () => {
        const newPost = {
            title: 'Hello world',
            body: 'This is my first post here',
            userId: 8
        }
        cy.request('Post', 'https://jsonplaceholder.typicode.com/posts', newPost).its('body.title').should('eq', 'Hello world')
    })

    it('Request - DELETE post', () => {
        cy.request('Delete', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('eq', 200)
    })

})