const request = require('supertest')
const app = require('../../app')

describe("API endpoints",
    () => {

        // This will hold the live `http.Server` object returned by Express
        let api;

        beforeAll(() => {
            api = app.listen(4000,
                () => console.log("Test server running on PORT 4000")
            )
        })

        afterAll(async () => {
            console.log("Gracefully closing server.")
            await api.close()
        })

        it("responds to GET at `/` with a status code of 200",
            async () => {
                // Act
                const response = await request(api).get('/')

                // Assert
                expect(response.statusCode).toBe(200);
            }
        )

    }
)