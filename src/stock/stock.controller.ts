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

import { CategoryCreateDto } from 'src/dtos/category.dto';
import { StockCreateDto } from 'src/dtos/stock.dto';
import { CategoryModel } from 'src/models/category.model';
import { FilterModel } from 'src/models/filter.model';
import { StockModel } from 'src/models/stock.model';
import { StockService } from './stock.service';
  
  @Controller('stock')
  export class StockController {
    constructor(private readonly stockService: StockService) {}
  
    @Post()
    async CreateCategory(@Body() body: StockCreateDto): Promise<StockModel> {
      return this.stockService.create(body);
    }
    @Get()
    async getAllStocks(@Query() query:FilterModel): Promise<StockModel[]> {
      return await this.stockService.findAll(query);
    }
  
    @Get(':id')
    async GetCategory(@Param() params): Promise<StockModel[]> {
      return this.stockService.findOne(params.id);
    }
  
    @Put(':id')
    async updateStock(
      @Param('id') id: string,
      @Body() stockDto: StockCreateDto,
    ): Promise<StockModel> {
      return this.stockService.update(id, stockDto);
    }
  
    @Delete(':id')
    async removeStock(@Param('id') id: string): Promise<StockModel> {
      return this.stockService.delete(id);
    }
  }