
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliverySchema } from 'src/models/delivery.model';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';




@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Delivery', schema: DeliverySchema }]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [DeliveryService],
})
export class DeliveryModule {}