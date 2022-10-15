import { Module } from '@nestjs/common';
import { v4 as Id } from 'uuid';

const UUID = {
  useValue: Id(),
  provide: 'uuid_provider',
};

@Module({
  providers: [UUID],
  exports: [UUID],
})
export class CommonModuleModule {}
