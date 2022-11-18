import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceProviderService {
  getHello(): string {
    return 'Hello World!';
  }
}
