Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpg',
    jpg_quality: 90,
    dest_width: 360,
    dest_height: 250
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri + ">";
    })
}