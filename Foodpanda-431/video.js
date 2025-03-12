let isStarted = false;

 const extendedVideo = async (video) => {
    video.play()
    video.pause()
  video.addEventListener("progress", () => {
    console.log('progress')
    if (!isStarted) {
      isStarted = true;
      video.dispatchEvent(new CustomEvent("start"));
    }
  });
  video.addEventListener("start", () => {
    console.log("video start");
  });
  video.play()
};
