module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CoinbaseWallet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_coinbase: {
            type: DataTypes.STRING,
            allowNull: false
        },
        primary: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}