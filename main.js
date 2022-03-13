function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hKXoV5Bk9/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
 if (error)
 {
     console.error(error);
 }
 else
 {
     console.log(results);

     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;

     document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
     document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
     document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

     img = document.getElementById('animal-1');
     img1 = document.getElementById('animal-2');
     img2 = document.getElementById('animal-3');
     img3 = document.getElementById('icon-1');

     if (results[0].label == "Mooing")
     {
         img.src = 'animated-cow-image-0104.gif';
         img1.src = 'Dog.jpg';
         img2.src = 'Tiger.jpg';
         img3.src = 'ear.jpg';         
     }
     else if (results[0].label == "Barking")
     {
        img.src = 'cow.jpg';
         img1.src = 'animated-dog-image-0175.gif';
         img2.src = 'Tiger.jpg';
         img3.src = 'ear.jpg';  
     }
     else if (results[0].label == "Roaring")
     {
        img.src = 'cow.jpg';
         img1.src = 'Dog.jpg';
         img2.src = 'animated-tiger-image-0046.gif';
         img3.src = 'ear.jpg';  
     }
     else 
     {
        img.src = 'cow.jpg';
         img1.src = 'Dog.jpg';
         img2.src = 'Tiger.jpg';
         img3.src = 'earr.gif';  
     }
 }
}