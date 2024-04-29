import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { ConfigType } from '@nestjs/config';
import { BcryptConfig } from '../../config/bcrypt.config';
export declare class UserService {
    private userModel;
    private bcryptConfig;
    constructor(userModel: Model<UserDocument>, bcryptConfig: ConfigType<typeof BcryptConfig>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByUsername(username: string): Promise<User | null>;
    existByUsername(username: string): Promise<boolean>;
}
