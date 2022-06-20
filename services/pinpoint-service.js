class PinpointService {


  static async get(applicationId) {
    const {
      CampaignsResponse: { Item: campaign },
    } = await pinpoint
      .getCampaigns({
        ApplicationId: applicationId,
        PageSize: "1000",
      })
      .promise();

    return campaign;
  }

  static delete(){
    const deleted = await pinpoint
    .deleteCampaign({
      CampaignId: campaign.Id,
      ApplicationId: applicationId,
    })
    .promise();

    return deleted
  }
}
