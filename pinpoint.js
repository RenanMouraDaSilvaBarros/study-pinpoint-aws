const AwsService = require("./services/aws-service");
const AWS = require("aws-sdk");

AwsService.profile("renan");
//AwsService.config();

const pinpoint = new AWS.Pinpoint();

async function main() {
  const applicationId = "e6cee5fafb9a4ccf9dc5237e80d7d49a";
  const {
    CampaignsResponse: { Item: campaigns },
  } = await pinpoint
    .getCampaigns({
      ApplicationId: applicationId,
      PageSize: "1000",
    })
    .promise();

  const campaign = campaigns.find((c) => c.Name === "flutter");
  console.log(campaign);

  const result = await pinpoint
    .deleteCampaign({
      CampaignId: campaign.Id,
      ApplicationId: applicationId,
    })
    .promise();

  console.log(result);

  setInterval(function () {
    console.log(".");
  }, 1000);
}

main();
