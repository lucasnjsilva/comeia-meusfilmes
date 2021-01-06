import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFavoriteFieldToMovie1609873334067
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'movies',
            new TableColumn({
                name: 'favorite',
                type: 'boolean',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('movies', 'favorite');
    }
}
