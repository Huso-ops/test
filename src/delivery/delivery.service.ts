
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { DeliveryModel } from 'src/models/delivery.model';
import { DeliveryCreateDto } from 'src/dtos/delivery.dto';


@Injectable()
export class DeliveryService extends ResourceService<
  DeliveryModel,
  DeliveryCreateDto,
 DeliveryCreateDto
> {
  constructor(
    @InjectModel('Delivery')
    deliveryMongo: Model<DeliveryModel>,
  ) {
    super(deliveryMongo);
  }
}