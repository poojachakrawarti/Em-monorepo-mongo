import { Controller, Get } from '@nestjs/common';
import { EmApiLayerService } from './em-api-layer.service';

@Controller()
export class EmApiLayerController {
  constructor(private readonly emApiLayerService: EmApiLayerService) {}

  @Get()
  getHello(): string {
    return this.emApiLayerService.getHello();
  }
}
