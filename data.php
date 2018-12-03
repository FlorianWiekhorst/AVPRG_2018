<!doctype html>
<html lang="de">
    <head>
      <meta charset="utf-8">
      <title>Datenklang</title>
  		<meta name="description" content="Datenklang AVPRG 2018" />
  		<meta name="author" content="Flony" />
  		<link rel="stylesheet" type="text/css" href="css/master.css" />
      <script src="js/script.js"></script>
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


      <img id="logo" src="img/logo.png"></img>

      <div class="mainArea">
          <div class="embed-container_1">
            <button id="spielmeinsound">Starte mein Sound</button>
            <script src="js/script.js"></script>
          </div>
          <div class="embed-container_2">
            <div id="anwortstext">
              Willkommen <?php echo $_POST["name"];  ?>,<br>
              aus der schönen Stadt <?php echo $_POST["geburtsort"]; ?>.<br>
              Geboren am <?php echo $_POST["geburtstag"]; echo $_POST["geburtsmonat"]; echo $_POST["geburtsjahr"]; ?>.<br>              

              </div>
          </div>
      </div>
    </body>
</html>
