import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }
  @Get('/color-picker')
  @Render('color-picker')
  colorPicker(@Query('color') textColor: string) {
    return {
      textColor
    }
  }
}
