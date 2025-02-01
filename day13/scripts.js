const button = document.getElementsByClassName("button");
const backgroundImage = document.querySelector(".background_image");
const photo = document.querySelector(".photo");
const profilePhoto = document.querySelector(".photo img");
const profileName = document.querySelector(".profile-name");
const actionButtons = document.querySelector(".action-buttons");
const closeButton = document.querySelector(".close");


document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        console.log('Close button is present');
        // 確保這裡沒有隱藏 .close 元素的腳本
    }
});

let photos = [
  "https://shyhyus.weebly.com/uploads/4/4/0/0/44009273/p66_orig.png",
  "https://shyhyus.weebly.com/uploads/4/4/0/0/44009273/p64_orig.png",
  "https://shyhyus.weebly.com/uploads/4/4/0/0/44009273/p69_orig.png",
  "https://shyhyus.weebly.com/uploads/4/4/0/0/44009273/p72_orig.png",
];

let names = ["jade-1", "jade-2", "jade-3", "jade-4"];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    backgroundImage.style.marginTop = "180px";
    photo.style.marginTop = "135px";
    profilePhoto.src = photos[i];
    profileName.innerHTML = `${names[i]}`;
    actionButtons.style.marginBottom = "220px";
    closeButton.style.marginTop = "60px";
    for (let j = 0; j < button.length; j++) {
      button[j].style.zIndex = "0";
    }
  });
}

closeButton.addEventListener("click", function () {
  backgroundImage.style.marginTop = "0px";
  photo.style.marginTop = "0px";
  actionButtons.style.marginBottom = "0px";
  closeButton.style.marginTop = "0px";
  for (let i = 0; i < button.length; i++) {
    button[i].style.zIndex = "1";
  }
});
