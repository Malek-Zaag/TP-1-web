import {Module} from '@nestjs/common';
import {v4 as Id} from 'uuid';

@Module({
    providers: [{
        useValue: Id(),
        provide: 'uuid_provider'
    }]
})
export class CommonModuleModule {
}
