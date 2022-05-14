import { IGenericRepository } from '../generic/IGenericRepository';
import { User } from './User';
import { UserId } from './UserId';

export const UserRepositoryKey = 'UserRepository';

export interface IUserRepository extends IGenericRepository<User, UserId> {}
