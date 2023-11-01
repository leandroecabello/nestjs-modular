import { Global, Module } from '@nestjs/common';

const API_KEY = '1324567890';
const API_KEY_PROD = 'PROD1324567890SA';
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
