import { Injectable } from '@nestjs/common';

@Injectable()
export class EmApiLayerService {
  getHello(): string {
    return 'Hello World!';
  }
}
