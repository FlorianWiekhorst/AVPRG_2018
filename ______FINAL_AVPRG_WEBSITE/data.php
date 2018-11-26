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

      <div class="mainArea">
          <div class="embed-container_1">

          </div>
          <div class="embed-container_2">
            Willkommen <?php echo $_POST["name"];  ?><br>

            Dein Geburtsort ist <?php echo $_POST["geburtsort"]; ?>, und deine Augen sind <?php echo $_POST["augenfarbe"]; ?>. <br>

            Du bist <?php echo $_POST["geschlecht"]; ?>, und im Jahre <?php echo $_POST["geburtsjahr"]; ?> wurdest du geboren. <br>

            <button value="Stimmt! Erstelle mir nun meinen Soundtrack!" />
          </div>
      </div>
    </body>
</html>
