Answers = new Meteor.Collection('answers');

Template.addAnswer.events({
	'click button.add-Answer': function(e){
		e.preventDefault();
		var answer = document.getElementById('add-Answer').value;
		Meteor.call('addAnswer', answer, function(error, answerId){
			if (error) {
				throw new Error(error);
			}
			console.log('answerId: ', answerId)
		});
		document.getElementById('add-Answer').value = "";
	}
});

Template.answer.events({
	'click': function () {
    	Session.set("selected_answer", this._id);
  	},
	'click a.yes' : function(e) {
		e.preventDefault();
		var answerId = Session.get('selected_answer');
		console.log('updating yes count for answerId '+answerId);
		Meteor.call("incrementYesVotes",answerId);
	},
	'click a.no': function(e) {
		e.preventDefault();
		var answerId = Session.get('selected_answer');
		console.log('updating no count for answerId '+answerId);
		Meteor.call("incrementNoVotes",answerId);
	}
})

Template.answers.items = function(){
	return Answers.find().fetch();
}