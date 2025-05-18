import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './schemas/place.schema';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get(':tagId')
    async getPlaceByTag(@Param('tagId') tagId: string): Promise<any> {
        console.log('📍 Recibida solicitud con tagId:', tagId);
        const place = await this.placesService.findByTagId(tagId);
        return place || { message: 'No encontrado' };
    }

    @Get()
    async getAll(): Promise<Place[]> {
        return this.placesService.findAll();
    }

    @Post()
    async create(@Body() place: Partial<Place>): Promise<Place> {
        return this.placesService.create(place);

    }
}
