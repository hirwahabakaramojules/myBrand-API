import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.use(chaiHttp);
chai.should();

describe("test home route ", () => {
  it("should display a welcome message on home route", (done) => {
    chai
      .request(app)
      .get("/")
      .then((res) => {
        res.status.should.be.equal(200);
        res.should.have.status(200);
        res.body.msg.should.be.equal("welcome to hirwa personal blog");
        done();
      })
      .catch((err) => console.log(err));
  });
});