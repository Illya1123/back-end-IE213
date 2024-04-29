import { OnApplicationBootstrap } from '@nestjs/common';
import { SeedService } from './modules/seeder/seed.service';
export declare class AppService implements OnApplicationBootstrap {
    private readonly seedService;
    constructor(seedService: SeedService);
    onApplicationBootstrap(): Promise<any>;
}
