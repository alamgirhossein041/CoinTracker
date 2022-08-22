module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'This name is already taken'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email already exists'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        exchanges: {
            type: DataTypes.JSON,
            allowNull: true
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        roles: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {"admin":false,"user":true}
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}