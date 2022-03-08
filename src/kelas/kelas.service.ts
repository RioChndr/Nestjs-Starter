import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KelasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.KelasCreateInput) {
    return await this.prisma.kelas.create({ data });
  }

  findAll() {
    return this.prisma.kelas.findMany({
      include: {
        Siswa: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.kelas.findUnique({
      where: {
        id: +id,
      },
    });
  }

  update(id: number, data: Prisma.KelasUpdateInput) {
    return this.prisma.kelas.update({
      where: {
        id: +id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.kelas.delete({
      where: {
        id: +id,
      },
    });
  }
}
