const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usercomments', {
    UserCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Time: {
      type: DataTypes.DATE,
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
    commentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comment',
        key: 'commentID'
      }
    }
  }, {
    sequelize,
    tableName: 'usercomments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserCommentID" },
        ]
      },
      {
        name: "userid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "commentID" },
        ]
      },
      {
        name: "commentID",
        using: "BTREE",
        fields: [
          { name: "commentID" },
        ]
      },
    ]
  });
};
