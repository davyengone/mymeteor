Answers = new Meteor.Collection('answers');


Meteor.methods({
	'addAnswer': function(answerText){
		var answerId = Answers.insert({
			'answerText': answerText,
			'submittedOn': new Date(),
			'submittedBy' : Meteor.userId()
		});

		return	answerId;
	},
	'incrementYesVotes': function(answerId){
		Answers.update(answerId, {$inc: {'yes':1}});
	},
	'incrementNoVotes': function(answerId){
		Answers.update(answerId, {$inc: {'no':1}});
	}

})