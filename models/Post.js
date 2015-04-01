module.exports = {
    tableName: 'posts',

    author: function() {
        return this.belongsTo(User);
    }
};