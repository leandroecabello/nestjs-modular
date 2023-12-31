import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config'

@Injectable()
export class AppService {
  // constructor(@Inject('API_KEY') private apiKey: string) {}
  // constructor(private config: ConfigService) {}
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {}
  getHello(): string {
    //const apiKey = this.config.get<string>('API_KEY');
    //const dbName = this.config.get('DATABASE_NAME');
    const apiKey = this.configService.apiKey
    const dbName = this.configService.database.name
    return `Hello World! ${apiKey} ${dbName}`;
  }
}
