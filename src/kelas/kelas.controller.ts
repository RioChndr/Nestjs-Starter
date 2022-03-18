import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { KelasService } from './kelas.service';

@UseGuards(AuthGuard)
@Controller('kelas')
export class KelasController {
  constructor(private readonly kelasService: KelasService) {}

  @Post()
  create(@Body() body: { nama: string; wali: string }) {
    return this.kelasService.create(body);
  }

  @Get()
  findAll() {
    return this.kelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kelasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateKelaDto: { nama: string; wali: string },
  ) {
    return this.kelasService.update(+id, updateKelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.kelasService.remove(+id);
  }
}
