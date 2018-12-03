<!doctype html>
<html lang="de">
    <head>
      <meta charset="utf-8">
      <title>Datenklang</title>
  		<meta name="description" content="Datenklang AVPRG 2018" />
  		<meta name="author" content="Flony" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  		<link rel="stylesheet" type="text/css" href="css/datenklang.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
      <img id="logo" src="img/logo_gif.gif"></img>

    <?php
    // Leere Variablen anlegen:
    $name = $geburtsort = $geschlecht = $augenfarbe = $geburtsjahr = $geburtsmonat = $geburtstag = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = user_input($_POST["name"]);
      $geburtsort = user_input($_POST["geburtsort"]);
      $augenfarbe = user_input($_POST["augenfarbe"]);
      $geschlecht = user_input($_POST["geschlecht"]);
      $geburtsjahr = user_input($_POST["geburtsjahr"]);
      $geburtsmonat = user_input($_POST["geburtsmonat"]);
      $geburtstag = user_input($_POST["geburtstag"]);
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
                <div class="input-group-addon">
                  <i class="fa fa-chevron-right"></i>
                </div>
                <input id="vorname_text" name="name" placeholder="Vorname" type="text" class="form-control here" required="required">
              </div>
            </div>
            <div class="form-group">
              <label></label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-chevron-right"></i>
                </div>
                <input id="geburtsort_text" name="geburtsort" placeholder="Geburtsort" type="text" class="form-control here" required="required">
              </div>
            </div>
            <div class="form-group">
              <label>Ich bin ...</label>
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
              <label>Meine Augenfarbe ist ...</label>
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
                  <input name="augenfarbe" type="radio" required="required" class="custom-control-input" value="4">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Braun</span>
                </label>
                <label class="custom-control custom-radio">
                  <input name="augenfarbe" type="radio" required="required" class="custom-control-input" value="5">
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
                  <option value="20">1920</option>
                  <option value="21">1921</option>
                  <option value="22">1922</option>
                  <option value="23">1923</option>
                  <option value="24">1924</option>
                  <option value="25">1925</option>
                  <option value="26">1926</option>
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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
            </div>
          </div>

            <div class="form-group">
              <button name="submit" type="submit" class="myButton" id="myButton">Daten abschicken</button>
            </div>
          </form>
        </div>
      </div>
    </body>
</html>
