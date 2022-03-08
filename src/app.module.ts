import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KelasModule } from './kelas/kelas.module';
import { PrismaModule } from './prisma/prisma.module';
import { SiswaModule } from './siswa/siswa.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SiswaModule, PrismaModule, KelasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
