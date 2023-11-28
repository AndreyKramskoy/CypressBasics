describe('posts', ()=>{
    it('should return 10 records', ()=>{
        cy.request('https://jsonplaceholder.typicode.com/users').then(response=>{
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(10)
        })
    })

it('should create user', ()=>{
    const userData = {
        "name": "Artur Bond",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
      cy.request('POST', 'https://jsonplaceholder.typicode.com/users', userData).then(response => {
        expect(response.status).to.equal(201)
        expect(response.body).to.eql({
            id:11,
            ...userData
        })
      })
})
})