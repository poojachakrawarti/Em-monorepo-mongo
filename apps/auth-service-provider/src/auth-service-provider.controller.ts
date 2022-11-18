import { Controller, Get } from '@nestjs/common';
import { AuthServiceProviderService } from './auth-service-provider.service';

@Controller()
export class AuthServiceProviderController {
  constructor(private readonly authServiceProviderService: AuthServiceProviderService) {}

  @Get()
  getHello(): string {
    return this.authServiceProviderService.getHello();
  }
}
