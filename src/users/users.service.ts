import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { "id": "1", "name": "John Doe", "role": "Admin", "email": "john.doe@example.com" },
        { "id": "2", "name": "Jane Smith", "role": "User", "email": "jane.smith@example.com" },
        { "id": "3", "name": "Bob Johnson", "role": "User", "email": "bob.johnson@example.com" },
        { "id": "4", "name": "Alice Williams", "role": "User", "email": "alice.williams@example.com" },
        { "id": "5", "name": "Charlie Brown", "role": "User", "email": "charlie.brown@example.com" }
    ];

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id.toString());
        return user;
    }

    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const userByHighestId = [...this.users].sort((a, b) => parseInt(b.id) - parseInt(a.id));
        const newUser = {
            id: (parseInt(userByHighestId[0].id) + 1).toString(),
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (user.id === id.toString()) {
                return { ...user, ...updatedUser };
            }
            return user;
        });

        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id.toString());
        return removedUser;
    }
}
