var DataTypes = require("sequelize").DataTypes;
var _administrator = require("./administrator");
var _comment = require("./comment");
var _donation = require("./donation");
var _educationalvideo = require("./educationalvideo");
var _event = require("./event");
var _healthprofinfo = require("./healthprofinfo");
var _post = require("./post");
var _professionaluser = require("./professionaluser");
var _simpleuser = require("./simpleuser");
var _user = require("./user");
var _usercomments = require("./usercomments");
var _userposts = require("./userposts");

function initModels(sequelize) {
  var administrator = _administrator(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var donation = _donation(sequelize, DataTypes);
  var educationalvideo = _educationalvideo(sequelize, DataTypes);
  var event = _event(sequelize, DataTypes);
  var healthprofinfo = _healthprofinfo(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var professionaluser = _professionaluser(sequelize, DataTypes);
  var simpleuser = _simpleuser(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var usercomments = _usercomments(sequelize, DataTypes);
  var userposts = _userposts(sequelize, DataTypes);

  usercomments.belongsTo(comment, { as: "comment", foreignKey: "commentID"});
  comment.hasMany(usercomments, { as: "usercomments", foreignKey: "commentID"});
  comment.belongsTo(post, { as: "post", foreignKey: "postID"});
  post.hasMany(comment, { as: "comments", foreignKey: "postID"});
  healthprofinfo.belongsTo(post, { as: "post", foreignKey: "postID"});
  post.hasMany(healthprofinfo, { as: "healthprofinfos", foreignKey: "postID"});
  userposts.belongsTo(post, { as: "post", foreignKey: "postID"});
  post.hasMany(userposts, { as: "userposts", foreignKey: "postID"});
  comment.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(comment, { as: "comments", foreignKey: "userid"});
  donation.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(donation, { as: "donations", foreignKey: "userId"});
  educationalvideo.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(educationalvideo, { as: "educationalvideos", foreignKey: "userid"});
  healthprofinfo.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(healthprofinfo, { as: "healthprofinfos", foreignKey: "userid"});
  post.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(post, { as: "posts", foreignKey: "userid"});
  professionaluser.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasOne(professionaluser, { as: "professionaluser", foreignKey: "userid"});
  simpleuser.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasOne(simpleuser, { as: "simpleuser", foreignKey: "userid"});
  usercomments.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(usercomments, { as: "usercomments", foreignKey: "userid"});
  userposts.belongsTo(user, { as: "user", foreignKey: "userid"});
  user.hasMany(userposts, { as: "userposts", foreignKey: "userid"});

  return {
    administrator,
    comment,
    donation,
    educationalvideo,
    event,
    healthprofinfo,
    post,
    professionaluser,
    simpleuser,
    user,
    usercomments,
    userposts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
