import { SetMetadata } from '@nestjs/common';

export const LogRequest = () => SetMetadata('logRequest', true);
