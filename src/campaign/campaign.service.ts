
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { CampaignCreateDto } from 'src/dtos/campaign.dto';
import { CampaignModel } from 'src/models/campaign.model';


@Injectable()
export class CampaignService extends ResourceService<
  CampaignModel,
  CampaignCreateDto,
 CampaignCreateDto
> {
  constructor(
    @InjectModel('Campaign')
    campaignMongo: Model<CampaignModel>,
  ) {
    super(campaignMongo);
  }
}