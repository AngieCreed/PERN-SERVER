module.exports = (sequelize, DataTypes) => {
    const Chem = sequelize.define('chem', {
        fcLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        taLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        cyaLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        owner: {
            type: DataTypes.INTEGER,
        }
    
    })

    return Chem
}

/*
{
	"chem":{
	"fcLevel": 7,
	"phLevel": 7.5,
	"taLevel": 120,
	"cyaLevel": 70,
    "chLevel": 250,
    "volume": 20000,
    "pooltype": "vinyl"
	
	}
}
*/