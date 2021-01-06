import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../../models/User';
import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<Movie> {
        try {
            const { user_id } = request.params;
            const { name, description } = request.body;

            const movieRepository = getRepository(Movie);

            // Verifica se o filme já existe baseado no nome.
            const checkMovie = await movieRepository.findOne({
                where: { name },
            });

            if (checkMovie) {
                throw new Error('Movie already registered.');
            }

            // Todos os dados para o cadastro
            const data = {
                name,
                description,
                user_id,
                favorite: false,
            };

            // Faz a validação dos dados
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                description: Yup.string().required(),
            });

            await schema.validate(data, { abortEarly: false });

            // Verifica se existe um usuário com aquele ID
            const userRepository = getRepository(User).findOne({
                where: { id: user_id },
            });

            const userNotFound = !userRepository;

            if (userNotFound) {
                throw new Error('User not found');
            }

            const movie = movieRepository.create(data);

            await movieRepository.save(movie);

            return response.status(201).json(movie) && movie;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};
