import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place, PlaceDocument } from './schemas/place.schema';

@Injectable()
export class PlacesService {
    constructor(
        @InjectModel(Place.name) private placeModel: Model<PlaceDocument>
    ) {}

    async findByTagId(tagId: string): Promise<Place | null> {
        return this.placeModel.findOne({ tagId }).exec();
    }

    async create(data: Partial<Place>): Promise<Place> {
        const place = new this.placeModel(data);
        return place.save();
    }

    async findAll(): Promise<Place[]> {
        return this.placeModel.find().exec();
    }
}
