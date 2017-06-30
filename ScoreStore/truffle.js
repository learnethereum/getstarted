module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }

    production: {
          host: "localhost", //this is where we put in our actual geth/infura address

          port: 8545,
          network_id: "*" // Match any network id
        }
  }
};
