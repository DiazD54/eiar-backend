import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://<user>:<pass>@cluster.mongodb.net/eiar-db'),
    AuthModule,
    UsersModule,
    PlacesModule,
  ],
})
export class AppModule {}
