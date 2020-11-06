const envType = process.env.REACT_APP_ENV || "development";

const types = {
  development: {},
  staging: {},
  production: {}
};

export const config = types[envType];
