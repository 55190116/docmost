import { Module } from '@nestjs/common';
import { WorkspaceService } from './services/workspace.service';
import { WorkspaceController } from './controllers/workspace.controller';
import { WorkspaceRepository } from './repositories/workspace.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceUser } from './entities/workspace-user.entity';
import { WorkspaceInvitation } from './entities/workspace-invitation.entity';
import { WorkspaceUserRepository } from './repositories/workspace-user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workspace, WorkspaceUser, WorkspaceInvitation]),
  ],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceRepository, WorkspaceUserRepository],
  exports: [WorkspaceService, WorkspaceRepository, WorkspaceUserRepository],
})
export class WorkspaceModule {}
