import loginReducer, { initialState} from "src/reducers/login";

import { expect } from "chai";

import { saveLogin, SAVE_LOGIN } from "src/actions/login";

describe("reducer login", () => {
  describe("stucture", () => {
    it("should be a function", () => {
      expect(loginReducer).to.be.a("function");
    });

    it("check initial State", () => {
      expect(initialState).to.be.an("object");
      expect(loginReducer()).to.be.equal(initialState);
    });
  });
describe('with action', () => {
  it(SAVE_LOGIN, () => {
    const login = { id: "", email:"test@gmail.com", password:"", user:{}, error:false };
    const action = saveLogin("test@gmail.com", "email");
    const state = loginReducer(initialState, action);
    expect(state).to.be.an('object').to.be.eql(login);
  })
});
});
