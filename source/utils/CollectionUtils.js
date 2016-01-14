/**
 * Created by vladimir on 14/01/16.
 */
function getNumberOfTweetsinCollection(collection) {
    var TweetUtils = require('./TweetUtils');
    var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
    return listOfCollectionTweetIds.length;
}
function isEmptyCollection(collection) {
    return (getNumberOfTweetsinCollection(collection) === 0);
}
module.exports = {
    getNumberOfTweetsInCollection: getNumberOfTweetsinCollection,
    isEmptyCollecion: isEmptyCollection
};