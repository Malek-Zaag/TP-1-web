import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
    private cvRepository: Repository<Cv>,
  ) {}

  create(createCvDto: CreateCvDto): Promise<Cv> {
    return this.cvRepository.save(createCvDto);
    //return 'This action adds a new cv';
  }

  findAll(): Promise<Cv[]> {
    return this.cvRepository.find();
    //return `This action returns all cv`;
  }

  async findOne(id: number): Promise<Cv> {
    const cv = await this.cvRepository.findOneBy({ id: id });
    if (!cv) {
      throw new NotFoundException();
    }
    return cv;
    //return  `This action returns a #${id} cv`;
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const newCv = await this.cvRepository.preload({ id, ...updateCvDto });
    if (!newCv) throw new NotFoundException();
    return await this.cvRepository.save(newCv);
    //return `This action updates a #${id} cv`;
  }

  async remove(id: number) {
    const result = await this.cvRepository.softDelete(id);
    if (!result.affected) {
      throw new NotFoundException();
    }
    return result;
    //  return `This action removes a #${id} cv`;
  }
}
