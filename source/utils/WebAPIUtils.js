/**
 * Created by vladimir on 15/01/16.
 */
var SnapkiteStreamClient=require('snapkite-stream-client');
var TweetActionCreators=require('../actions/TweetActionCreators');

function initializeStreamOfTweets(){
    SnapkiteStreamClient.initialiseStream(TweetActionCreators.receiveTweet);
}
module.exports={
    initializeStreamOfTweets: initializeStreamOfTweets
};