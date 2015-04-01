module.exports = {
    tableName: 'users',

    posts: function() {
        return this.hasMany(Post);
    }
};