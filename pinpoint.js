const AwsService = require("./services/aws-service")
const AWS = require('aws-sdk')

AwsService.profile("renan")

const pinpoint = new AWS.Pinpoint();
