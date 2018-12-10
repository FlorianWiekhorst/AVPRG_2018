<!doctype html>
<html lang="de">
    <head>
      <meta charset="utf-8">
      <title>Datenklang</title>
  		<meta name="description" content="Datenklang AVPRG 2018" />
  		<meta name="author" content="Flony" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  		<link rel="stylesheet" type="text/css" href="css/data.css" />
    </head>
    <body>
    <!-- Anlegen des UserInputs aus dem Formular der vorherigen Seite -->
      <?php
         $javaName = $_POST["name"];
         $javaAugenfarbe = $_POST["augenfarbe"];
         $javaGeburtsmonat = $_POST["geburtsmonat"];
         $javaGeburtsort = $_POST["geburtsort"];
         $javaGeschlecht = $_POST["geschlecht"];
         $javaGeburtsjahr = $_POST["geburtsjahr"];
         $javaGeburtstag = $_POST["geburtstag"];

      ?>
      <!-- UserInput an die JavaScript-Datei weitergeben -->
      <script type="text/javascript">
        var javaName = "<?php echo $javaName ?>";
        var javaAugenfarbe = "<?php echo $javaAugenfarbe ?>";
        var javaGeburtsmonat = "<?php echo $javaGeburtsmonat ?>";
        var javaGeburtsort = "<?php echo $javaGeburtsort ?>";
        var javaGeschlecht = "<?php echo $javaGeschlecht ?>";
        var javaGeburtsjahr = "<?php echo $javaGeburtsjahr ?>";
        var javaGeburtstag = "<?php echo $javaGeburtstag ?>";
      </script>

      <img id="logo" src="img/logo_alpha.png"></img>

      <div class="mainArea">
          <div class="visualisierungsBox">
               <!-- visualisierungsCode hier -->
               <!-- visualisierungsCode hier -->
               <!-- visualisierungsCode hier -->
          </div>

          <div class="bedienelemente">
                <button id="spielmeinsound"></button>
                <input type="range" min="0" max="100" value="100" id="schieberegler">
          </div>

          <div class="zusatzfragen">
            <div id="anwortstext">
              Individualisiere deinen Song jetzt live noch weiter, <?php echo $_POST["name"];?>,<br>
              indem du ein paar Fragen beantwortest.
            </div>
            <form action="" method="post" class="radio_zusatzfragen">
              <label>Meinen Urlaub verbringe ich am Liebsten:</label> <!-- hier die vers. Fragen per echo einbinden! -->
              <div>
                <label class="custom-control custom-radio">
                  <input name="zusatzfragen_1" type="radio" class="custom-control-input" value="a" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Ruhig am Pool.</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="zusatzfragen_1" type="radio" class="custom-control-input" value="b" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">auf der Couch vorm TV.</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="zusatzfragen_1" type="radio" class="custom-control-input" value="c" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Halbnackt im Wald.</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="zusatzfragen_1" type="radio" class="custom-control-input" value="d" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Urlaub?</span>
                </label>
              </div>
            </form>
          </div>
      </div>
      <script src="js/keyboardTest.js"></script>
      <script src="js/musik.js"></script>
      <script type="text/javascript" src="jquery-3.3.1.js"></script>
    </body>
</html>
