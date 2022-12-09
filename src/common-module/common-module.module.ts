import { Module } from '@nestjs/common';
import { v4 as Id } from 'uuid';

const UUID = {
  useValue: Id(),
  provide: 'uuid_provider',
};

@Module({
  imports: [],
  providers: [UUID],
  controllers: [],
  exports: [UUID],
})
export class CommonModuleModule {}
