module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define('survey', {
        easeofuse: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quality: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        meetsneed: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        satisfaction: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        feedback: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Survey
}

/*
{
	"survey":{
	"easeofuse": 5,
	"quality": 5,
	"meetsneed": 5,
	"satisfaction": 5,
	"feedback": "Awesome! This app rocks!"
	
	}
}
*/