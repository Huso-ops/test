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

import { DeliveryCreateDto } from 'src/dtos/delivery.dto';
import { DeliveryModel } from 'src/models/delivery.model';
import { FilterModel } from 'src/models/filter.model';
import { DeliveryService } from './delivery.service';

  
  @Controller('delivery')
  export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}
  
    @Post()
    async CreateCategory(@Body() body: DeliveryCreateDto): Promise<DeliveryModel> {
      return this.deliveryService.create(body);
    }
    @Get()
    async getAllDeliveries(@Query() query:FilterModel): Promise<DeliveryModel[]> {
      return await this.deliveryService.findAll(query);
    }
  
    @Get(':id')
    async GetDelivery(@Param() params): Promise<DeliveryModel[]> {
      return this.deliveryService.findOne(params.id);
    }
  
    @Put(':id')
    async updateDelivery(
      @Param('id') id: string,
      @Body() deliveryDto: DeliveryCreateDto,
    ): Promise<DeliveryModel> {
      return this.deliveryService.update(id, deliveryDto);
    }
  
    @Delete(':id')
    async removeDelivery(@Param('id') id: string): Promise<DeliveryModel> {
      return this.deliveryService.delete(id);
    }
  }