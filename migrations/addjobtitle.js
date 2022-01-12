module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'employees', // name of Source model
            'jobtitle', // name of the key we're adding 
            {
                type: Sequelize.STRING,
                // references: {
                //     model: 'companies', // name of Target model
                //     key: 'id', // key in Target model that we're referencing
                // // },
                // onUpdate: 'CASCADE',
                // onDelete: 'SET NULL',
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'employees', // name of Source model
            'jobtitle' // key we want to remove
        );
    }
};