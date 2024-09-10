import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3800);
  const logger = new Logger('Main');
  logger.log('🚀🚀🚀 Server is listening on port:3800 🚀');
}
bootstrap();
