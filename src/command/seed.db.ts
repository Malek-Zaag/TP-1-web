import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SkillService } from '../skill/skill.service';
import { Skill } from '../skill/entities/skill.entity';
import {
  randEmail,
  randFilePath,
  randFirstName,
  randJobTitle,
  randLastName,
  randNumber,
  randPassword,
  randSkill,
  randUserName,
} from '@ngneat/falso';
import { Cv } from '../cv/entities/cv.entity';
import { CvService } from '../cv/cv.service';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Todo :  Do What you want
  const skillService = app.get(SkillService);
  const cvService = app.get(CvService);
  const userService = app.get(UserService);
  for (let i = 0; i < 10; i++) {
    const skill = new Skill();
    skill.designation = randSkill();
    await skillService.create(skill);
  }
  for (let i = 0; i < 10; i++) {
    const user = new User();
    user.username = randUserName();
    user.email = randEmail();
    user.password = randPassword();
    await userService.create(user);
  }
  for (let i = 0; i < 10; i++) {
    const cv = new Cv();
    cv.age = randNumber({ min: 18, max: 100 });
    cv.cin = randNumber({ min: 1000, max: 9999 });
    cv.job = randJobTitle();
    cv.firstname = randFirstName();
    cv.name = randLastName();
    cv.path = randFilePath();
    await cvService.create(cv);
  }
  await app.close();
}

bootstrap();
