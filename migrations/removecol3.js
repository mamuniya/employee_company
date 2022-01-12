module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('employees', 'jobtittle');

    }
}
