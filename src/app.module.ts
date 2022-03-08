import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KelasModule } from './kelas/kelas.module';
import { PrismaModule } from './prisma/prisma.module';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [SiswaModule, PrismaModule, KelasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
