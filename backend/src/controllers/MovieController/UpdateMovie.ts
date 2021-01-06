import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<Movie> {
        try {
            const { id } = request.params;
            const { name, description } = request.body;

            const movieRepository = getRepository(Movie);

            // Verificar se o filme existe
            const foundMovie = await movieRepository.findOne(id);

            if (!foundMovie) {
                throw new Error('Movie not found.');
            }

            // Caso exista, vai realizar a validação dos novos dados
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                description: Yup.string().required(),
            });

            await schema.validate(request.body, { abortEarly: false });

            const data = {
                name,
                description,
            };

            // Realizar a atualização
            const update = await movieRepository.update(id, data);

            if (update.affected !== 1) {
                throw new Error('Impossível realizar a atualização.');
            }

            const updatedMovie = movieRepository.findOneOrFail(id);

            return response.status(200).json(data) && updatedMovie;
        } catch (error) {
            response.status(400).json(error.message);
            throw new Error(error);
        }
    },
};
