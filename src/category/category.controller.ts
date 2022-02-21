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
import { CategoryService } from './category.service';
import { CategoryCreateDto } from 'src/dtos/category.dto';
import { CategoryModel } from 'src/models/category.model';
import { FilterModel } from 'src/models/filter.model';
  
  @Controller('category')
  export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
  
    @Post()
    async CreateCategory(@Body() body: CategoryCreateDto): Promise<CategoryModel> {
      return this.categoryService.create(body);
    }
    @Get()
    async getAllCategories(@Query() query:FilterModel): Promise<CategoryModel[]> {
      return await this.categoryService.findAll(query);
    }
  
    @Get(':id')
    async GetCategory(@Param() params): Promise<CategoryModel[]> {
      return this.categoryService.findOne(params.id);
    }
  
    @Put(':id')
    async updateCategory(
      @Param('id') id: string,
      @Body() categoryDto: CategoryCreateDto,
    ): Promise<CategoryModel> {
      return this.categoryService.update(id, categoryDto);
    }
  
    @Delete(':id')
    async removeCategory(@Param('id') id: string): Promise<CategoryModel> {
      return this.categoryService.delete(id);
    }
  }