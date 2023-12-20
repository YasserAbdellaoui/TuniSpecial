const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthprofinfo', {
    HealthproInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'userid'
      }
    },
    postID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'post',
        key: 'postID'
      }
    }
  }, {
    sequelize,
    tableName: 'healthprofinfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HealthproInfoID" },
        ]
      },
      {
        name: "userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "postID",
        using: "BTREE",
        fields: [
          { name: "postID" },
        ]
      },
    ]
  });
};
