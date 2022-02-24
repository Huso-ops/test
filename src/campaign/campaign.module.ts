
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema } from 'src/models/campaign.model';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';





@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Campaign', schema: CampaignSchema }]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
  exports: [CampaignService],
})
export class CampaignModule {}