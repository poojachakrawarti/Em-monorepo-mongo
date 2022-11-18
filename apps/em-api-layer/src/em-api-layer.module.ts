import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { envConfig } from 'libs/common/src/config/env.config';
import { throttleAsyncConfig } from 'libs/common/src/config/throttler.config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@app/users';
import { RolesModule } from '@app/roles';
import { EquipmentsModule } from '@app/equipments';
import { OrdersModule } from '@app/orders';
import { BrandsModule } from '@app/brands';
import { CategoriesModule } from '@app/categories';
import { DoctorsModule } from '@app/doctors';
import { CitiesModule } from '@app/cities';
import { ConditionsModule } from '@app/conditions';
import { EquipmentCategoryMappingModule } from '@app/equipment-category-mapping';
import { EquipmentFaqMappingModule } from '@app/equipment-faq-mapping';
import { EquipmentMediaMappingModule } from '@app/equipment-media-mapping';
import { OrderItemsModule } from '@app/order-items';
import { OrderItemChecklistMappingModule } from '@app/order-item-checklist-mapping';
import { OrderItemMediaModule } from '@app/order-item-media';
import { OrdersAuditModule } from '@app/orders-audit';
import { MediasModule } from '@app/medias';
import { FaqsModule } from '@app/faqs';
import { PartnerBankDetailsModule } from '@app/partner-bank-details';
import { PartnerDocumentsModule } from 'n/partner-documents';
import { PartnerEquipmentMappingModule } from '@app/partner-equipment-mapping';
import { PartnerWeeklyEarningsModule } from '@app/partner-weekly-earning';
import { PartnersModule } from '@app/partners';
import { PromoCodesModule } from '@app/promo-codes';
import { StatesModule } from '@app/states';
import { TestimoniesModule } from '@app/testimonies';
import { TransferHistoryModule } from '@app/transfer-history';
import { UsersFeedbackModule } from '@app/users-feedback';
import { ChecklistModule } from '@app/checklist';
import { EmApiLayerService } from './em-api-layer.service';
import { EmApiLayerController } from './em-api-layer.controller';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb://mongodb:27017/EquipMe'),
    UsersModule,
    RolesModule,
    EquipmentsModule,
    OrdersModule,
    BrandsModule,
    CategoriesModule,
    DoctorsModule,
    ChecklistModule,
    CitiesModule,
    ConditionsModule,
    EquipmentCategoryMappingModule,
    EquipmentFaqMappingModule,
    EquipmentMediaMappingModule,
    OrderItemsModule,
    OrderItemChecklistMappingModule,
    OrderItemMediaModule,
    OrdersAuditModule,
    MediasModule,
    FaqsModule,
    PartnerBankDetailsModule,
    PartnerDocumentsModule,
    PartnerEquipmentMappingModule,
    PartnerWeeklyEarningsModule,
    PartnersModule,
    PromoCodesModule,
    StatesModule,
    TestimoniesModule,
    TransferHistoryModule,
    UsersFeedbackModule,
    ThrottlerModule.forRootAsync(throttleAsyncConfig)
  ],
  controllers: [EmApiLayerController],
  providers: [EmApiLayerService]
})
export class EmApiLayerModule {}
