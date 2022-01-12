module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'employees', // name of Source model
            'jobtitle', // name of the key we're adding 
            {
                type: Sequelize.STRING,

                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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