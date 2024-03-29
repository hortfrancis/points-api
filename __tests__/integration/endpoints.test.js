const request = require('supertest')
const app = require('../../app')

describe("Integration tests: API endpoints",
    () => {

        // This will hold the live `http.Server` object returned by Express
        let server;

        beforeAll(() => {
            server = app.listen(4000,
                () => console.log("Test server running on PORT 4000")
            )
        })

        afterAll(async () => {
            console.log("Gracefully closing server.")
            await server.close()
        })

        describe(
            "AS A user, I WANT to get information about the API, SO THAT I know it is available and how I can use it.",
            () => {

                it("responds to GET at `/` with a status code of 200",
                    async () => {
                        // Act
                        const response = await request(server).get('/')

                        // Assert
                        expect(response.statusCode).toBe(200)
                    }
                )

                it("responds to GET at `/` with a welcome message and a description",
                    async () => {
                        // Act
                        const response = await request(server).get('/')

                        // Assert
                        expect(response.body.message).toBe("Welcome to the Points API!")
                        expect(response.body.description).toBe("An API that stores information on points awarded to (or deducted from!) Fossians.")
                    }
                )

                it("returns a list of the available endpoints",
                    async () => {
                        // Act
                        const response = await request(server).get('/')

                        // Assert
                        expect(response.body.endpoints).toBeInstanceOf(Array);  // is an array
                        expect(response.body.endpoints).toContainEqual({ method: 'GET', path: '/', success_status: '200' })
                    }
                )
            }
        )


    }
)