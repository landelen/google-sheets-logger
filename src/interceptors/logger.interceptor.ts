import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Row } from 'src/rows/entities/row.entity';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<Row> {
    const request = context.switchToHttp().getRequest();
    const logRequest = this.reflector.get<boolean>(
      'logRequest',
      context.getHandler(),
    );

    if (!logRequest) {
      return next.handle();
    }

    const { method, url } = request;
    const now = Date.now();

    console.log(`[Request] ${method} ${url}`);

    return next.handle().pipe(
      tap((response) => {
        console.log(
          `[Response] ${method} ${url} - ${Date.now() - now}ms \n`,
          response,
        );
      }),
    );
  }
}
