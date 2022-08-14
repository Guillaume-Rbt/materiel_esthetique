<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title ?></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $description ?>">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="icon" href="visuels/favicon.png" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<script type="text/javascript" src="tarteaucitron/tarteaucitron.js"></script>
	<script type="text/javascript">
		tarteaucitron.init({
			"hashtag": "#tarteaucitron", /* Ouverture automatique du panel avec le hashtag */
			"highPrivacy": false, /* désactiver le consentement implicite (en naviguant) ? */
			"orientation": "bottom", /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
			"adblocker": false, /* Afficher un message si un adblocker est détecté */
			"showAlertSmall": true, /* afficher le petit bandeau en bas à droite ? */
			"cookieslist": true, /* Afficher la liste des cookies installés ? */
			"removeCredit": false /* supprimer le lien vers la source ? */
		});
	</script>
	<script type="text/javascript">
		tarteaucitron.user.gajsUa = 'UA-29248748-30';
	tarteaucitron.user.gajsMore = function () { /* add here your optionnal _ga.push() */ };
	(tarteaucitron.job = tarteaucitron.job || []).push('gajs');
</script>
<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<body  id="accueil">
    <nav class="header">
        <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <a href="/"><img class="img-fluid" src="visuels/logo.png" alt="Materiel Esthétique"/></a>
                    </div>
                    <div class="col-lg-8 d-flex align-items-center">
                        <nav class="d-none d-lg-block d-xl-block">
                            <ul>
                                <li><a href="index.php#accueil">Accueil</a></li>
                                <li><a href="index.php#nosproduit">Nos Appareils</a></li>
                                <li><a href="index.php#quisommenous">Qui sommes nous</a></li>
                                <li><a href="index.php#contact">Contact</a></li>
                            </ul>
                        </nav>
                        <button class="c-button js-offcanvas-trigger" data-offcanvas-trigger="off-canvas-right"><i class="fas fa-bars"></i></button>
                    </div>
                </div>
            </div>
    </nav>
    <header>
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="text-uppercase text-center text-white">équipez votre<br>centre esthétique</h1>
                            <div class="sous-titre">
                                <p>avec <img class="img-fluid" src="visuels/logo-esthetiquepro.png" alt="" srcset=""></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <img class="img-fluid wave" src="visuels/vagues-top.png" alt="" srcset="">
        
    </header>