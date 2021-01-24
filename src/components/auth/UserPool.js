import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolId = {
  UserPoolId: "us-east-2_AeUbo8PS4",
  ClientId: "1l6e3jdljmv4h67bkn6dcfe1cn",
};

export default new CognitoUserPool(poolId);
