/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<Movie> {
        try {
            const { id } = request.params;

            const movie = await getRepository(Movie).findOne(id);

            if (!movie) {
                throw new Error('Movie not found.');
            }

            return response.status(200).json(movie) && movie;
        } catch (error) {
            response.status(400).json({ message: error.message });
            throw new Error(error.message);
        }
    },
};
