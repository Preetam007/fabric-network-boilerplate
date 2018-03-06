
import { Logger, LoggerInstance, transports } from 'winston';

export class Winston {

    public static log(name: string, level?: string): LoggerInstance {
        return new Logger({
            transports: [new transports.Console({
                level: level || 'debug',
                prettyPrint: true,
                handleExceptions: true,
                json: false,
                label: name,
                colorize: true,
            })],
            exitOnError: false,
        });
    };

}