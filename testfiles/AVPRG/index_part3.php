<?php /*Title: AVPRG Part 3 */ ?>
<?php
include('/../save/data.php');
?>

<!doctype html>

<html lang="de">
  <head>
    <meta charset="utf-8">
    <link media="all" type="text/css" rel="stylesheet" href="css/userinput.css"/>
	  <script src="jquery-3.3.1.min.js"></script>
    <title>Datenklang-Ausgabe</title>
  </head>

  <body>
    <img id="logo" src="../logo2Dark.png"></img>

    <div class="mainArea">
      <h1>Dein vorläufiger Soundtrack!</h1>
      <h4>Beantworte nun noch die Fragen<br>um den Soundtrack deinem Gemüt anzupassen:</h4>

        <div class="embed-container">

          <div id="box_frage1">
    		    <form action="" method="post" id="psycho_fragen1">
              <h3>Frage 1 der PsychoFragen:?!</h3>
              <div class="input radio">
                  <input type="radio" name="psychofrage1" value="psy1_antw1" id="psycho1_1" onclick="displayPsycho1(this);" <?php if (!empty($psychofrage1) && $psychofrag1 == "psy1_antw1") { echo "checked"; } ?> />
                  <label for="psy1_antw1">Antwort 1 der Frage 1</label>
                  <input type="radio" name="psychofrage1" value="psy1_antw2" id="psycho1_2" onclick="displayPsycho1(this);" <?php if (!empty($$psychofrag1) && $$psychofrag1 == "psy1_antw2") { echo "checked"; } ?> />
                  <label for="psy1_antw2" >Antwort 2 von die Frage nr.1</label>
                  <input type="radio" name="psychofrage1" value="psy1_antw3" id="psycho1_3" onclick="displayPsycho1(this);" <?php if (!empty($$psychofrag1) && $$psychofrag1 == "psy1_antw3") { echo "checked"; } ?> />
                  <label for="psy1_antw3" >Antwort 3 von die Frage nr.1</label>
                  <input type="radio" name="psychofrage1" value="psy1_antw4" id="psycho1_4" onclick="displayPsycho1(this);" <?php if (!empty($$psychofrag1) && $$psychofrag1 == "psy1_antw4") { echo "checked"; } ?> />
                  <label for="psy1_antw4" >Antwort 4 von die Frage nr.1</label>
              </div>
          </div>

            <!-- Frage 2: Zuerst hidden - einblenden wenn Frage 1 Beantwortet und ausgeblendet ist -->
            <div id="box_frage2">
      		    <form action="" method="post" id="psycho_fragen2">
                <h3>Frage 2 der PsychoFragen:?!</h3>
                <div class="input radio">
                    <input type="radio" name="psychofrage2" value="psy2_antw1" id="psycho2_1" onclick="displayPsycho2(this);" <?php if (!empty($psychofrage2) && $psychofrag2 == "psy2_antw1") { echo "checked"; } ?> />
                    <label for="psy2_antw1">Antwort 1 der Frage 2</label>
                    <input type="radio" name="psychofrage2" value="psy2_antw2" id="psycho2_2" onclick="displayPsycho2(this);" <?php if (!empty($$psychofrag2) && $$psychofrag2 == "psy2_antw2") { echo "checked"; } ?> />
                    <label for="psy2_antw2" >Antwort 2 von die Frage nr.2</label>
                    <input type="radio" name="psychofrage2" value="psy2_antw3" id="psycho2_3" onclick="displayPsycho2(this);" <?php if (!empty($$psychofrag2) && $$psychofrag2 == "psy2_antw3") { echo "checked"; } ?> />
                    <label for="psy2_antw3" >Antwort 3 von die Frage nr.2</label>
                    <input type="radio" name="psychofrage2" value="psy2_antw4" id="psycho2_4" onclick="displayPsycho2(this);" <?php if (!empty($$psychofrag2) && $$psychofrag2 == "psy2_antw4") { echo "checked"; } ?> />
                    <label for="psy2_antw4" >Antwort 4 von die Frage nr.2</label>
                </div>
            </div>




  			      <input type="submit" value="SubmitWerte" class="button-primary" name="submitpsycho" id="psycho_fragen" disabled="disabled"/>
  		    </form>
        </div>
    </div>
  </body>
</html>
