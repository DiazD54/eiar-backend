import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { ConfigModule } from '@nestjs/config';
import { MongoConnectionService } from './mongo-connection.service';
import * as dotenv from 'dotenv';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/default-db'),
    AuthModule,
    UsersModule,
    PlacesModule,
  ],
  providers: [MongoConnectionService],
})
export class AppModule {}
