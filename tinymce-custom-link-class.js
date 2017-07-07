(function() {
	tinymce.PluginManager.add( 'custom_question_class', function( editor, url ) {
		// Add Button to Visual Editor Toolbar
		editor.addButton('custom_question_class', {
			title: 'Apply question style',
			image: url + '/question.svg',
			cmd: 'custom_question_class',
		});

		// Add Command when Button Clicked
		editor.addCommand('custom_question_class', function() {
			// Check we have selected some text that we want to question
			var text = editor.selection.getContent({
				'format': 'html'
			});
			if ( text.length === 0 ) {
				alert( 'Please select the question.' );
				return;
			}

			// Insert selected text back into editor, wrapping it in an anchor tag
			editor.execCommand('mceReplaceContent', false, '<h2 class="question">' + text + '</h2>');
		});

		// Add Button to Visual Editor Toolbar
		editor.addButton('custom_answer_class', {
			title: 'Apply answer style',
			image: url + '/answer.png',
			cmd: 'custom_answer_class',
		});

		// Add Command when Button Clicked
		editor.addCommand('custom_answer_class', function() {
			// Check we have selected some text that we want to answer
			var text = editor.selection.getContent({
				'format': 'html'
			});
			if ( text.length === 0 ) {
				alert( 'Please select the answer.' );
				return;
			}

			// Insert selected text back into editor, wrapping it in an anchor tag
			editor.execCommand('mceReplaceContent', false, '<div class="answer">' + text + '</div>');
		});

	});
})();
