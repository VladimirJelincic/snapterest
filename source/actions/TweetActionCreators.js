/**
 * Created by vladimir on 14/01/16.
 */
var AppDispatcher=require('../dispatcher/AppDispatcher');

function receiveTweet(tweet){

    console.log("I've received a new tweet and will dispatch it together with a new action");
    var action={
        type: 'receive_tweet',
        tweet: tweet
    };
    AppDispatcher.dispatch(action);
}
module.exports={
    receiveTweet: receiveTweet
};