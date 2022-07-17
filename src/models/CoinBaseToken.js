module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CoinBaseToken', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_wallet: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        id_token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_transaction: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}