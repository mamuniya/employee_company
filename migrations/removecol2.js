module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('employees', 'jobtitle');

    }
}




// this is how we delete a col