window.onload = function() {
    let recognition; 
    let isRecording = false;

    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please use Chrome or another supported browser.');
    } else {
        
        recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US'; 
        recognition.interimResults = false; 
        recognition.continuous = true; 

        recognition.onresult = function(event) {
        
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
        
            document.getElementById('result').value = transcript;
            document.getElementById('download').disabled = false; 
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
        };

        // Start recording button
        document.getElementById("start").addEventListener("click", function() {
            recognition.start();
            isRecording = true;
            document.getElementById('start').disabled = true;
            document.getElementById('stop').disabled = false;
            document.getElementById('result').placeholder = "Listening...";
            console.log("Recognition started...");
        });

        // Stop recording button
        document.getElementById("stop").addEventListener("click", function() {
            recognition.stop(); 
            isRecording = false;
            document.getElementById('start').disabled = false;
            document.getElementById('stop').disabled = true;
            document.getElementById('result').placeholder = "Text will be displayed here...";
            console.log("Recognition stopped...");
        });

        // Download text button
        document.getElementById("download").addEventListener("click", function() {
            const text = document.getElementById('result').value; 
            const blob = new Blob([text], { type: 'text/plain' }); 
            const link = document.createElement('a'); 
            link.href = URL.createObjectURL(blob);
            link.download = 'transcribed_text.txt'; 
            link.click(); 
        });
    }
};

