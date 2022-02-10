const request = require("supertest");
const app = require("../server/app");
const db = require("../server/db");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("====Test====", () => {
  test("Post expect success", async () => {
    const UserEvent = {
      firstName: "Karol",
      lastName: "Maj",
      email: "test@test.com",
      eventDate: "2022-03-20",
    };

    const response = await request(app).post("/event").send(UserEvent);
    
    const jsonResponse = JSON.parse(response.text);
    expect(response.statusCode).toBe(201);
    expect(jsonResponse.firstName).toBe("Karol");
    expect(jsonResponse.lastName).toBe("Maj");
    expect(jsonResponse.email).toBe("test@test.com");
    expect(jsonResponse.eventDate).toBe("2022-03-20T00:00:00.000Z");
  });

  test("Post expect 401", async () => {
    const UserEvent = {
      firstName: "Karol",
      email: "test@test.com",
      eventDate: "2022-03-20",
    };

    const response = await request(app).post("/event").send(UserEvent);
    expect(response.statusCode).toBe(401);  
  });
  
  test("Get test expect success", async () => {
    const response = await request(app).get("/event");
    expect(response.statusCode).toBe(200);
  })

});
