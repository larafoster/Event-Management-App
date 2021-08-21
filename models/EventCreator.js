const {Model, DataTypes, TEXT} = require ('sequelize');
const sequelize = require ('../config/connection');
class EventCreator extends Model{};

EventCreator.init ({ 
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
    }
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'eventcreator',
}


);

