import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ParticipantesModule } from './participantes/participantes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilmesModule, UsuariosModule, ParticipantesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
