
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { CategoryModel } from 'src/models/category.model';
import { CategoryCreateDto } from 'src/dtos/category.dto';
import { CardModel } from 'src/models/card.model';
import { CardCreateDto } from 'src/dtos/card.dto';


@Injectable()
export class CardService extends ResourceService<
  CardModel,
  CardCreateDto,
  CardCreateDto
> {
  constructor(
    @InjectModel('Card')
    cardMongo: Model<CardModel>,
  ) {
    super(cardMongo);
  }
}