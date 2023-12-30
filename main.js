var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();



function start_button() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Get the canvas context
    const ctx = canvas.getContext('2d');

    // Load the image
    const image = new Image();
    image.src = 'apple.png';

    // Listen for voice command "set"

    document.getElementById("status").innerHTML= "System is listening please speak"; 
    // Start speech recognition
    recognition.start();
}


recognition.onresult = function(event) {
    console.log(event);
    canvas= createCanvas (900, 600);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "Result received: " + content;
    if (command === 'set') {
        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0);
    }

}




function stop_button() {
    // Stop speech recognition
    recognition.stop();
}
