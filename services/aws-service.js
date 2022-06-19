const AWS = require("aws-sdk");

class AwsService {
  static config() {
    const myConfig = new AWS.Config();
    myConfig.update({ region: "us-east-1" });

    AWS.config.getCredentials(function (err) {
      if (err) console.log(err.stack);
      else {
        console.log("succsess");
      }
    });
  }

  static profile(profile) {
    const credentials = new AWS.SharedIniFileCredentials({profile: profile});
    AWS.config.credentials = credentials
    AWS.config.update({region:'us-east-1'});

  }
}

module.exports = AwsService;
