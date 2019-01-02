<!doctype html>
<html lang="de">
    <head>
      <meta charset="utf-8">
      <title>Datenklang</title>
  	  <meta name="description" content="Datenklang AVPRG 2018" />
  	  <meta name="author" content="Florian and Tony" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  	  <link rel="stylesheet" type="text/css" href="css/data.css" />
    </head>
    <body>
    <!-- Anlegen des UserInputs aus dem Formular der vorherigen Seite -->
      <?php
         $javaName = $_POST["name"];
         $javaEyeColor = $_POST["eyeColor"];
         $javaBirthMonth = $_POST["birthMonth"];
         $javaBirthPlace = $_POST["birthPlace"];
         $javaGender = $_POST["gender"];
         $javaBirthYear = $_POST["birthYear"];
         $javaBirthDay = $_POST["birthDay"];

      ?>
      <!-- UserInput an die JavaScript-Datei weitergeben -->
      <script type="text/javascript">
        var javaName = "<?php echo $javaName ?>";
        var javaEyeColor = "<?php echo $javaEyeColor ?>";
        var javaBirthMonth = "<?php echo $javaBirthMonth ?>";
        var javaBirthPlace = "<?php echo $javaBirthPlace ?>";
        var javaGender = "<?php echo $javaGender ?>";
        var javaBirthYear = "<?php echo $javaBirthYear ?>";
        var javaBirthDay = "<?php echo $javaBirthDay ?>";
      </script>

      <img id="logo" src="img/logo_alpha.png"></img>

      <div class="mainArea">
          <canvas class="visualisierungsBox" id="visu"></canvas>

          <div class="bedienelemente">
            <button id="playMySong"></button>
          </div>

          <div class="bonusQuestions">
            <div id="bonus_question_1" class="bonus1">
              <div id="answerText" class="answerText">
                Individualisiere deinen Song noch weiter, <?php echo $_POST["name"];?>!
              </div>
              <span>Dein Lieblingsfach in der Grundschule war:</span>
              <ul>
                <li onclick="BonusAnswer1_A();" id="Bonus1_math"><label>Mathe</label></li>
                <li onclick="BonusAnswer1_B();" id="Bonus1_sport"><label>Sport</label></li>
                <li onclick="BonusAnswer1_C();" id="Bonus1_art"><label>Kunst</label></li>
                <li onclick="BonusAnswer1_D();" id="Bonus1_german"><label>Deutsch</label></li>
              </ul>
            </div>
            <div id="bonus_question_2" class="bonus2">
              <span>Das besten Haustiere sind natürlich:</span>
              <ul>
                <li onclick="BonusAnswer2_A();" id="Bonus2_dog"><label>Hunde</label></li>
                <li onclick="BonusAnswer2_B();" id="Bonus2_cat"><label>Katzen</label></li>
                <li onclick="BonusAnswer2_C();" id="Bonus2_horse"><label>Pferde</label></li>
                <li onclick="BonusAnswer2_D();" id="Bonus2_fish"><label>Fische</label></li>
              </ul>
            </div>
            <div id="download_Area" style="display:none;" class="download_Area">
              <span id="end_text">Danke für deine Teilnahme.</span><br>
              <span>Was du hörst, ist DEIN persönlicher Sound!</span><br>

              <form action="https://www.weakhost.de/">
                  <input type="submit" class="back2Start" id="back2Start" value="Zurück zum Start!" />
              </form>
            </div>
          </div>
      </div>
      <script src="js/musik.js"></script>
      <script type="text/javascript" src="jquery-3.3.1.js"></script>
    </body>
</html>
