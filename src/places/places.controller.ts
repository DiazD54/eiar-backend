import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './place.schema';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get(':tagId')
        async findByTagId(@Param('tagId') tagId: string): Promise<Place> {
            return this.placesService.findByTagId(tagId);
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
