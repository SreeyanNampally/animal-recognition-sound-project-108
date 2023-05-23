function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aQTQRBTG8/model.json", modelReady)
}

function modelReady(){
    console.log("model is loaded")
    classifier.classify(gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        randomnumberR = Math.floor(Math.random()*255)
        randomnumberG = Math.floor(Math.random()*255)
        randomnumberB = Math.floor(Math.random()*255)
        document.getElementById("result-label").innerHTML="I can hear: "+results[0].label;
        document.getElementById("result-accuracy").innerHTML="Accuracy: "+Math.floor((results[0].confidence)*100)+"%";
        document.getElementById("result-label").style.color= "rgb("+randomnumberR+", "+randomnumberG+", "+randomnumberB+")";
        document.getElementById("result-accuracy").style.color= "rgb("+randomnumberR+", "+randomnumberG+", "+randomnumberB+")";
        img = document.getElementById("ear");
        if(results[0].label=="cow"){
            img.src = "cow.png";
        } else if(results[0].label=="goat"){
            img.src = "goat.webp";
        } else if(results[0].label=="bird"){
            img.src = "bird.png";
        } else{
            img.src = "listening.png";
        }
    }
}




    


