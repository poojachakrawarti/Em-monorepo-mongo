import { envConfig } from '@app/common';
import { EquipmentsModule } from '@app/equipments';
import { OrdersModule } from '@app/orders';
import { RolesModule } from '@app/roles';
import { UsersModule } from '@app/users';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthServiceProviderController } from './auth-service-provider.controller';
import { AuthServiceProviderService } from './auth-service-provider.service';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    MongooseModule.forRoot('mongodb://mongodb:27017/EquipMe'),
    UsersModule,
    RolesModule,
    EquipmentsModule,
    OrdersModule
  ],
  controllers: [AuthServiceProviderController],
  providers: [AuthServiceProviderService]
})
export class AuthServiceProviderModule {}
