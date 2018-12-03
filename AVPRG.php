<!doctype html>
<html lang="de">
    <head>
      <meta charset="utf-8">
      <title>Datenklang</title>
  		<meta name="description" content="Datenklang AVPRG 2018" />
  		<meta name="author" content="Flony" />
  		<link rel="stylesheet" type="text/css" href="css/master.css" />
    </head>
    <body>
      <img id="logo" src="img/logo.png"></img>
<!-- ############################################### -->
    <?php
    // define variables and set to empty values
    $name = $geburtsort = $geschlecht = $geburtsjahr = $augenfarbe = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = test_input($_POST["name"]);
      $geburtsort = test_input($_POST["geburtsort"]);
      $augenfarbe = test_input($_POST["augenfarbe"]);
      $geschlecht = test_input($_POST["geschlecht"]);
      $geburtsjahr = test_input($_POST["geburtsjahr"]);
    }
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    ?>
<!-- ############################################### -->

    <div class="mainArea">
        <div class="embed-container_1">
        </div>
        <div class="embed-container_2">
          <form action="data.php" method="post">
            <div class="questionBox">
              Vorname: <input type="text" name="name">
            </div>

            <div class="questionBox">
              Augenfarbe:
              <input type="radio" name="augenfarbe" value="blau">blau
              <input type="radio" name="augenfarbe" value="grün">Grün
              <input type="radio" name="augenfarbe" value="braun">Braun
              <input type="radio" name="augenfarbe" value="gemischt">Gemischt
            </div>

            <div class="questionBox">
              Geburtsort: <input type="text" name="geburtsort">
            </div>

            <div class="questionBox">
              Du bist:
              <input type="radio" name="geschlecht" value="eine Frau">eine Frau
              <input type="radio" name="geschlecht" value="ein Mann">ein Mann
              <input type="radio" name="geschlecht" value="weder noch">weder noch
            </div>

            <div class="questionBox">
              Geburtsjahr: <input type="text" name="geburtsjahr">
            </div>

            <div class="questionBox">
              <input type="submit" name="submit" value="Submit" id="sub_button1">
            </div>

          </form>
        </div>
      </div>
    </body>
</html>
