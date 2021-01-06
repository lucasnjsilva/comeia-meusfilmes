import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<Movie[]> {
        try {
            const movies = await getRepository(Movie).find({
                where: {
                    favorite: true,
                },
            });

            return response.json(movies) && movies;
        } catch (error) {
            response.json({ msg: error.message });
            throw new Error(error.message);
        }
    },
};
