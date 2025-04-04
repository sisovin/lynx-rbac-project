import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggingService {
  private accessLogPath = path.join(__dirname, '../../../logs/access.log');
  private errorLogPath = path.join(__dirname, '../../../logs/errors.log');
  private auditLogPath = path.join(__dirname, '../../../logs/audit.log');

  logAccess(message: string) {
    this.logMessage(this.accessLogPath, message);
  }

  logError(message: string) {
    this.logMessage(this.errorLogPath, message);
  }

  logAudit(message: string) {
    this.logMessage(this.auditLogPath, message);
  }

  private logMessage(filePath: string, message: string) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile(filePath, logMessage, (err) => {
      if (err) {
        console.error(`Failed to write to log file: ${filePath}`, err);
      }
    });
  }
}
