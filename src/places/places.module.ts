import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from './schemas/place.schema';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }])],
  providers: [PlacesService],
  controllers: [PlacesController],
})
export class PlacesModule {}
