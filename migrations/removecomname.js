module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('employees', 'Company_Name');

    }
}