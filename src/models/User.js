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
        id_coinbase: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wallets: {
            type: DataTypes.JSON,
            allowNull: true
        },
        api_key: {
            type: DataTypes.STRING,
            allowNull: true
        },
        api_secret: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}