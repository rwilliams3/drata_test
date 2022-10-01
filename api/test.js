import request from "supertest";

const baseUrl = 'https://api.github.com';

describe('Todos endpoint', () => {

	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get("/user");

		expect(response.statusCode).toBe(200);
	});
});