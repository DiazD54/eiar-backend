import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log('✅ NestJS está corriendo en http://localhost:3000');
  console.log('✅ NestJS conectado a MongoDB:', process.env.MONGODB_URI);
}

bootstrap();