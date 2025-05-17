import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
    @Prop({ required: true, unique: true })
    tagId: string;
    
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    imageUrl: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
