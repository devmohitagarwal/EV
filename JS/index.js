require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function () {
	sampleButtons = monaco.editor.create(document.getElementById('sample-buttons'), {
		value: [sampleCode].join('\n'),
		language: 'javascript',
		theme: 'vs-dark' 
    });
    sampleBasics = monaco.editor.create(document.getElementById('sample-basic'), {
		value: [sampleBasicCode].join('\n'),
		language: 'html',
		theme: 'vs-dark' 
	});
	
	sampleButtons.addListener('didType', () => {
		// console.log(editor.getValue());
	});
  
});

console.devLog = function(data){
    console.log(data);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    commonFunctions();
    InitClickEvents();
  });

var commonFunctions = function(){

    copyCode = function(editor){
        var response = "";
        switch(editor){
            case 'sample-buttons':
                response = sampleButtons.getValue();
                break;
            case 'sample-basic':
                response = sampleBasics.getValue()
                break; 
        }
        return response;
    }

}

var InitClickEvents = function(){
    $('.sample-container .body-description .actions .action-button').on('click',function(){
        var $this = $(this);
        var codeFor = $this.data('codefor') || "";
        if(codeFor){
            var codeReceived = copyCode(codeFor);
            eval(codeReceived);
            // console.devLog(codeFor);
        }
    });
    $('.sample-container .body-description .content .samples .samples-list .sample-item').on('click',function(){
        var $this = $(this);
        var editor = $this.data('editor');
        var codeToReplace = $this.data('searchinrepo');
        if(codeToReplace && editor){
            var code = samples[codeToReplace];
            window[editor].setValue(code)
        }
    })
}