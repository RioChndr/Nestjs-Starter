import { Module } from '@nestjs/common';
import { KelasService } from './kelas.service';
import { KelasController } from './kelas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [KelasController],
  providers: [KelasService],
})
export class KelasModule {}
