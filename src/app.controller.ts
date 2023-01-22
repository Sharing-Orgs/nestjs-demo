import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getWelcome(): string {
    return `<h1>${this.appService.getWelcome()}<h1>`;
  }

  @Get(':name')
  getRespect(@Param('name') name): string {
    return `<h1>${this.appService.getWelcome()}<h1><br/>Hi, ${name}`;
  }
}
