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
      <link rel="stylesheet" type="text/css" href="css/index.css" />
    </head>
    <body>
      <img id="logo" src="img/logo_alpha.png"></img>

    <?php
    $name = $birthPlace = $gender = $eyeColor = $birthYear = $birthMonth = $birthDay = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = user_input($_POST["name"]);
      $birthPlace = user_input($_POST["geburtsort"]);
      $eyeColor = user_input($_POST["augenfarbe"]);
      $gender = user_input($_POST["geschlecht"]);
      $birthYear = user_input($_POST["geburtsjahr"]);
      $birthMonth = user_input($_POST["geburtsmonat"]);
      $birthDay = user_input($_POST["geburtstag"]);
    }
    function user_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    ?>

    <div class="mainArea">
        <div class="container">
          <form action="data.php" method="post">
            <div class="form-group">
              <label></label>
              <div class="input-group">
                <input id="vorname_text" name="name" value="Peter" placeholder="Vorname" type="text" class="form-control here" required="required">
              </div>
            </div>
            <div class="form-group">
              <label></label>
              <div class="input-group">
                <input id="geburtsort_text" name="geburtsort" value="berlin" placeholder="Geburtsort" type="text" class="form-control here" required="required">
              </div>
            </div>
            <div class="form-group">
              <label>Ich sehe mich als...</label>
              <div>
                <label class="custom-control custom-radio">
                  <input name="geschlecht" type="radio" class="custom-control-input" value="12" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">eine Lady</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="geschlecht" type="radio" class="custom-control-input" value="23" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">ein Gentlemen</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="geschlecht" type="radio" class="custom-control-input" value="34" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Beides / Nix</span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label>Meine Augenfarbe ist...</label>
              <div>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" class="custom-control-input" value="1" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Grün</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" class="custom-control-input" value="2" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Blau</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" class="custom-control-input" value="3" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Grau</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" class="custom-control-input" value="4" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Braun</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" class="custom-control-input" value="5" required="required">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Gemischt</span>
                </label>
              </div>
            </div>
            <div class="dreier_bday_box">
            <div class="form-group">
              <label for="geburtsjahr_select">Geburtsjahr</label>
              <div>
                <select id="geburtsjahr_select" name="geburtsjahr" class="custom-select" required="required">
                  <?php
                      for ($i=1; $i<=100; $i++){
                          ?> <option value="<?php echo (2018-$i);?>"><?php echo (2018-$i);?></option> <?php
                      }
                  ?>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="geburtsmonat_select">Geburtsmonat</label>
              <div>
                <select id="geburtsmonat_select" name="geburtsmonat" class="custom-select" required="required">
                  <option value="1">Januar</option>
                  <option value="2">Februar</option>
                  <option value="3">März</option>
                  <option value="4">April</option>
                  <option value="5">Mai</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Dezember</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="geburtstag_select">Geburtstag</label>
              <div>
                <select id="geburtstag_select" name="geburtstag" class="custom-select" required="required">
                  <?php
                      for ($i=1; $i<=31; $i++){
                          ?> <option value="<?php echo $i;?>"><?php echo $i;?></option> <?php
                      }
                  ?>
                </select>
                  <?php
                    if(checkdate($geburtsmonat, $geburtstag, $geburtsjahr)){
                        ?>
                        <script type='text/javascript'>
                          $(document).ready(function(){
                            document.getElementById("sub_button").style.display = "inline-block";
                          });
                          </script>
                          <?php
                          }
                    ?>
              </div>
            </div>
          </div>
            <div class="form-group">
              <button name="submit" type="submit" class="sub_button" id="sub_button">Daten abschicken</button>
            </div>
          </form>
        </div>
      </div>
    </body>
</html>
