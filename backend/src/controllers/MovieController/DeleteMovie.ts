/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Movie from '../../models/Movie';

export default {
    async execute(request: Request, response: Response): Promise<any> {
        try {
            const { id } = request.params;

            await getRepository(Movie).delete(id);

            return response.status(200).json();
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    },
};
