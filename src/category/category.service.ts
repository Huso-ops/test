
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { CategoryModel } from 'src/models/category.model';
import { CategoryCreateDto } from 'src/dtos/category.dto';


@Injectable()
export class CategoryService extends ResourceService<
  CategoryModel,
  CategoryCreateDto,
  CategoryCreateDto
> {
  constructor(
    @InjectModel('Category')
    categoryMongo: Model<CategoryModel>,
  ) {
    super(categoryMongo);
  }
}