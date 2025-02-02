var droppedFiles = false;
var fileName = '';
var dropzone = document.querySelector('.dropzone');
var button = document.querySelector('.upload-btn');
var uploading = false;
var syncing = document.querySelector('.syncing');
var done = document.querySelector('.done');
var bar = document.querySelector('.bar');
var timeoutID;

dropzone.addEventListener('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
}, false);

dropzone.addEventListener('dragover', function() {
    dropzone.classList.add('is-dragover');
}, false);

dropzone.addEventListener('dragenter', function() {
    dropzone.classList.add('is-dragover');
}, false);

dropzone.addEventListener('dragleave', function() {
    dropzone.classList.remove('is-dragover');
}, false);

dropzone.addEventListener('dragend', function() {
    dropzone.classList.remove('is-dragover');
}, false);

dropzone.addEventListener('drop', function(e) {
    dropzone.classList.remove('is-dragover');
    droppedFiles = e.dataTransfer.files;
    fileName = droppedFiles[0].name;
    document.querySelector('.filename').innerHTML = fileName;
    document.querySelector('.dropzone .upload').style.display = 'none';
}, false);

button.addEventListener('click', function() {
    startUpload();
}, false);

document.querySelector("input[type=file]").addEventListener('change', function() {
    fileName = this.files[0].name;
    document.querySelector('.filename').innerHTML = fileName;
    document.querySelector('.dropzone .upload').style.display = 'none';
}, false);

function startUpload() {
    if (!uploading && fileName != '') {
        uploading = true;
        button.innerHTML = 'Uploading...';
        dropzone.style.display = 'none';
        syncing.classList.add('active');
        // done.classList.add('active');
        bar.classList.add('active');
        timeoutID = window.setTimeout(showDone, 3200);
    }
}

function showDone() {
    button.innerHTML = 'Done';
}
