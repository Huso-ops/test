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
import { CardCreateDto } from 'src/dtos/card.dto';
import { CardModel } from 'src/models/card.model';

import { FilterModel } from 'src/models/filter.model';
import { CardService } from './card.service';
  
  @Controller('card')
  export class CardController {
    constructor(private readonly cardService: CardService) {}
  
    @Post()
    async CreateCard(@Body() body: CardCreateDto): Promise<CardModel> {
      return this.cardService.create(body);
    }
    @Get()
    async getAllCards(@Query() query:FilterModel): Promise<CardModel[]> {
      return await this.cardService.findAll(query);
    }
  
    @Get(':id')
    async GetCard(@Param() params): Promise<CardModel[]> {
      return this.cardService.findOne(params.id);
    }
  
    @Put(':id')
    async updateCard(
      @Param('id') id: string,
      @Body() cardDto: CardCreateDto,
    ): Promise<CardModel> {
      return this.cardService.update(id, cardDto);
    }
  
    @Delete(':id')
    async removeCard(@Param('id') id: string): Promise<CardModel> {
      return this.cardService.delete(id);
    }
  }