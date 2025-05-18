import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
    @Prop({ required: true })
    tagId: string; // ID del tag NFC escaneado

    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    latitude: number;

    @Prop()
    longitude: number;

    @Prop()
    imageUrl: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
