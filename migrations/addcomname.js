module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'employees',
            'Company_Name',
            {
                type: Sequelize.STRING,
                // references: {
                //     model: 'companies',
                //     key: 'name',
                // },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        );
    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'employees',
            'Company_Name'
        );
    }
};