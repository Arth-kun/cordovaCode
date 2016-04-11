// //Gvar
var distanceManager = {};//obj
var compt = 0;//int
var firstDetection = true;//bool
var exeption = true;//bool

var store = false;//bool

var beaconApp = (function()
{
    // Application object.
    var beaconApp = {};//obj

    /* beaconApp.initialize
    Permet d'initialiser l'obj */
    beaconApp.initialize = function()
    {
        document.addEventListener(
            'deviceready',
            function() { evothings.scriptsLoaded(onDeviceReady) },
            false);//Fint
    }

    /* onDeviceReady
    Lance le Scan quand le device est ready */
    function onDeviceReady()
    {
        startScan();//Fint
    }

    /* startScan
    Scan les beacons et execute une série d'action en conséquence */
    function startScan()
    {   
        /* onBeaconsRanged
        S'execute lorsque un beacon est trouvé, retourne les info relatif à celui-ci */
        function onBeaconsRanged(beaconInfo)
        {
            // On vérifie si le beacons est trouvé
            //$('#content').append(JSON.stringify(beaconInfo.beacons[0])+'<br>');
            if (beaconInfo.beacons[0] != undefined) {


                var minorChoosen = distanceCalculator(beaconInfo);//Fext distanceBeacon.js
                if (minorChoosen) {
                    var idChoosen = productChooser(minorChoosen);//Fext productBeacon.js
                    angular.element($("#header")).scope().productPromo(idChoosen);//Fext angularAccess headerCtrl.add.js
                }

                if (!store) {//store init tout en haut pour re-use dans noLayout.add
                    if (!checkHash()) {//Fext noLayout.add.js
                        hideShow_HeadFoot(false);//Fext hider.add.js
                    }
                    //Ddom
                    navigator.vibrate(1000);
                    $('#left-panel').css('padding-top', '49px');
                    store = true;
                }
            }
            else if (store) {
                alert('out');
                if (!checkHash()) {//Fext noLayout.add.js
                    hideShow_HeadFoot(true);//Fext hider.add.js
                }
                //Ddom
                $('#left-panel').css('padding-top', '0px');
                store = false;
            }
        }

        /* onError
        Est censé se lancer en cas d'erreur (jamais arrivé) */
        function onError(errorMessage)
        {
            alert('Ranging beacons did fail: ' + errorMessage);
        }

        // Request permission from user to access location info.
        // This is needed on iOS 8.
        estimote.beacons.requestAlwaysAuthorization();

        // Start ranging beacons.
        // Le scan se fait systématiquement et renvoie toujours true
        // Même si il ne trouve pas le bon Beacon
        estimote.beacons.startRangingBeaconsInRegion(
            {
                identifier: 'Store',
                uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                major: 200
            }, 
            onBeaconsRanged,
            onError);
    }

    return beaconApp;
})();

beaconApp.initialize();//Fint