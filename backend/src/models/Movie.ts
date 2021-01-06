import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('movies')
class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    favorite: boolean;

    @Column()
    user_id: string;

    @ManyToOne(() => User, {
        cascade: ['insert', 'update'],
    })
    @JoinColumn({ name: 'user_id' })
    contact: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Movie;
