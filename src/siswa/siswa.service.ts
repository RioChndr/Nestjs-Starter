import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SiswaService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.siswa.findMany({
      include: {
        kelas: true,
      },
    });
  }

  get(id?: number) {
    return this.prisma.siswa.findFirst({
      where: {
        id: id,
      },
    });
  }

  async create(data: Prisma.SiswaCreateInput) {
    return await this.prisma.siswa.create({
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.siswa.delete({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: Prisma.SiswaUpdateInput) {
    return await this.prisma.siswa.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async assignKelas(siswaId: number, kelasId: number) {
    return await this.prisma.siswa.update({
      where: {
        id: +siswaId,
      },
      data: {
        kelas: {
          connect: {
            id: +kelasId,
          },
        },
      },
    });
  }
}
