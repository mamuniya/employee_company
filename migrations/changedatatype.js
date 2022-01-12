module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
            'employees', // name of Source model
            'jobtittle', // name of the key we're adding 
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
        return queryInterface.removeColumn();
    }
};


// this is how we change datatype