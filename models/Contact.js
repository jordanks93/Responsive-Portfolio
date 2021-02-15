module.exports = function (sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },

        message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },

        }
    });

    return Contacts;

};