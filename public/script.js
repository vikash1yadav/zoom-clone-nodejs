
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted= true;
myVideo.play();

let myVideoStream
navigator.mediaDevices.getUserMedia({
    video:true,
    audio: true
}).then(stream =>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

const addVideoStream = (myVideo, stream) => {
    myVideo.srcObject =stream;
    myVideo.onloademetadata =function(e) {
        myVideo.play();
    }
    videoGrid.append(myVideo);
}