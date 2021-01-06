import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<Movie> {
        try {
            const { id } = request.params;

            const movieRepository = getRepository(Movie);

            // Verificar se o filme existe
            const foundMovie = await movieRepository.findOne(id);

            if (!foundMovie) {
                throw new Error('Movie not found.');
            }

            // Verifica se o filme já está em sua lista de favoritos.
            if (foundMovie.favorite === true) {
                // Caso esteja, remove dos favoritos
                await movieRepository.update(id, {
                    favorite: false,
                });

                const updatedMovie = movieRepository.findOneOrFail(id);

                return response.status(200).json() && updatedMovie;
            }

            // Adiciona aos favoritos
            const update = await movieRepository.update(id, {
                favorite: true,
            });

            if (update.affected !== 1) {
                throw new Error('Unable to perform the update.');
            }

            const updatedMovie = movieRepository.findOneOrFail(id);

            return response.status(200).json() && updatedMovie;
        } catch (error) {
            response.status(400).json(error.message);
            throw new Error(error);
        }
    },
};
