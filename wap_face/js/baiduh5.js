(function (e) {
    let photo = document.getElementById('photo'),
        loading = document.getElementById('loading'),
        img = document.getElementById('img');

    photo.addEventListener("click", function () {
        Webcam.snap(function (data_uri) {
            img.innerHTML = '<img src="' + data_uri + '"/>';
        });

        loading.style.display = 'block';
    }, false);
})(window);
