import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FusionPipe implements PipeTransform {
  transform(value: { skills: string[] }, metadata: ArgumentMetadata): any {
    console.log(value);
    if (!value) throw new BadRequestException();
    if (metadata.type === 'body') {
      return value.skills.map((val) => val.toUpperCase()).join('-');
    }
    return value.skills;
  }
}
