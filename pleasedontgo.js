var PDG = PDG || {
	isOriginalTitle: true,
	originalTitle: '',
	leaveMessage: 'ðŸ˜¥ Please dont go!',
	init: function() {
		PDG.originalTitle = document.title;
		PDG.listeners();
	},
	listeners: function() {
		document.addEventListener('mouseout', function(e) {
			if(PDG.isOriginalTitle)
			{
				PDG.updateTitle();
			}
		}, false);

		document.addEventListener('mousemove', function(e) {
			if(!PDG.isOriginalTitle)
			{
				PDG.resetTitle();
			}
		}, false);
	},
	resetTitle: function() {
		document.title = PDG.originalTitle;
		PDG.isOriginalTitle = true;
	},
	updateTitle: function() {
		document.title = PDG.leaveMessage + ' | ' + PDG.originalTitle;
		PDG.isOriginalTitle = false;
	}
};

//If you want to set the leave message you can set it from the page you are using it on and then call the init method
//PDG.leaveMessage = 'Come back, we miss you!';
PDG.init();
