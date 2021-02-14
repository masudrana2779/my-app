//function gmapAPI(){
    function myMap() {
        var mapCanvas = document.getElementById("contact_map");
        var myCenter = new google.maps.LatLng(23.837129,90.375008);
        var mapOptions = {
            center: myCenter
            , zoom: 19
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myCenter
            , animation: google.maps.Animation.BOUNCE
            , icon: '../images/location.png'
        });
        marker.setMap(map);
    }
}
//gmapAPI();