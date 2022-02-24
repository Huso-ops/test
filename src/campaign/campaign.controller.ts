import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    Query,
  } from '@nestjs/common';
import { CampaignCreateDto } from 'src/dtos/campaign.dto';
import { CampaignModel } from 'src/models/campaign.model';
import { FilterModel } from 'src/models/filter.model';
import { CampaignService } from './campaign.service';

  
  @Controller('campaign')
  export class CampaignController {
    constructor(private readonly campaignService: CampaignService) {}
  
    @Post()
    async CreateCampaign(@Body() body: CampaignCreateDto): Promise<CampaignModel> {
      return this.campaignService.create(body);
    }
    @Get()
    async getAllCampanies(@Query() query:FilterModel): Promise<CampaignModel[]> {
      return await this.campaignService.findAll(query);
    }
  
    @Get(':id')
    async GetCampaign(@Param() params): Promise<CampaignModel[]> {
      return this.campaignService.findOne(params.id);
    }
  
    @Put(':id')
    async updateCampaign(
      @Param('id') id: string,
      @Body() campaignDto: CampaignCreateDto,
    ): Promise<CampaignModel> {
      return this.campaignService.update(id, campaignDto);
    }
  
    @Delete(':id')
    async removeCampaign(@Param('id') id: string): Promise<CampaignModel> {
      return this.campaignService.delete(id);
    }
  }