import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/users.dto';

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user@user1.com',
      password: 'password1'
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user@user2.com',
      password: 'password2'
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user@user3.com',
      password: 'password3'
    }
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  create(payload: CreateUserDTO) {
    const newUser = {
      id: this.users.length + 1,
      ...payload
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDTO) {
    const user = this.findOne(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    this.users.splice(index, 1);
    return {
      message: `User #${id} has been removed`
    };
  }
}
