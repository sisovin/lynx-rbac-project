import { Controller, Get, Param } from '@nestjs/common';
import { LoggingService } from './logging.service';
import * as fs from 'fs';
import * as path from 'path';

@Controller('logs')
export class LoggingController {
  constructor(private readonly loggingService: LoggingService) {}

  @Get('access')
  getAccessLogs(): string {
    return this.readLogFile(this.loggingService.accessLogPath);
  }

  @Get('errors')
  getErrorLogs(): string {
    return this.readLogFile(this.loggingService.errorLogPath);
  }

  @Get('audit')
  getAuditLogs(): string {
    return this.readLogFile(this.loggingService.auditLogPath);
  }

  private readLogFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      console.error(`Failed to read log file: ${filePath}`, err);
      return 'Failed to read log file';
    }
  }
}
