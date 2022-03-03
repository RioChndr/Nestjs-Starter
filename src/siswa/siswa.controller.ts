import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';

@Controller('siswa')
export class SiswaController {
  constructor(private siswaService: SiswaService) {}

  @Get()
  getAllSiswa() {
    return this.siswaService.all();
  }

  @Get(':id')
  getSiswa(@Param('id') id: number) {
    return this.siswaService.get(+id);
  }

  @Post()
  async addSiswa(
    @Body() body: { nama: string; alamat: string; kelas?: number },
  ) {
    return await this.siswaService.create({
      nama: body.nama,
      alamat: body.alamat,
    });
  }

  @Delete(':id')
  async removeSiswa(@Param('id') id: number) {
    return await this.siswaService.remove(+id);
  }

  @Patch(':id')
  async updateSiswa(
    @Param('id') id: number,
    @Body() body: { nama?: string; alamat?: string; kelas?: number },
  ) {
    return await this.siswaService.update(+id, {
      nama: body.nama,
      alamat: body.alamat,
    });
  }

  @Patch('update/assign-kelas')
  async assignKelas(@Body() body: { siswaId: number; kelasId: number }) {
    return await this.siswaService.assignKelas(body.siswaId, body.kelasId);
  }
}
