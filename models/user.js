module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    return User
}

/*
{
	"user":{
	"userName": "misterEd",
	"firstName": "mister",
	"lastName": "Ed",
	"email": "horse@wildthing.com",
	"password": "aeiou"
	
	}
}
*/