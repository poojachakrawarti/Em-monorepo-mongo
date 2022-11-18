import { MongooseModule } from '@nestjs/mongoose';

// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   inject: [ConfigService],
//   useFactory: async (
//     configService: ConfigService
//   ): Promise<TypeOrmModuleOptions> => ({
//     ssl: configService.get<string>('NODE_ENV') == 'production',
//     extra: {
//       ssl:
//         configService.get<string>('NODE_ENV') == 'production'
//           ? { rejectUnauthorized: false }
//           : null
//     },
//     type: 'mysql',
//     host: configService.get<string>('DB_HOST'),
//     port: configService.get<number>('DB_PORT'),
//     username: configService.get<string>('DB_USERNAME'),
//     password: configService.get<string>('DB_PASSWORD'),
//     database: configService.get<string>('DB_SCHEMA'),
//     entities: [
//       User,
//       Company,
//       Domain,
//       PasswordReset,
//       CompanyPermissionMapping,
//       Permission,
//       Role
//     ],
//     synchronize: false,
//     logging: 'all'
//   })
// };

export default MongooseModule.forRoot('mongodb://localhost:27017/equipMe');
