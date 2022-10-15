import { Body, Controller, Post } from '@nestjs/common';
import { FusionPipe } from './FusionPipe';

@Controller('custom-pipe')
export class CustomPipeController {
  @Post()
  PipeBody(@Body(FusionPipe) body): string {
    return body;
  }
}
