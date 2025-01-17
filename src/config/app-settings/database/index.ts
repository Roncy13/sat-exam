import { Question } from '@base/api/questions/questions.model';
import { ConnectionOptions, createConnection, EntitySchema, getConnection, ObjectType } from 'typeorm';

const options: ConnectionOptions = {
    type: "sqlite",
    database: `:memory:`,
    entities: [ Question ],
    logging: true,
    synchronize: true,
}

export default async function Database(app: any) {
    await createConnection(options)
}

export const GetConnection = (target: string | ObjectType<unknown> | EntitySchema<unknown>) => {
    return getConnection().getRepository(target)
}