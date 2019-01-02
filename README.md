# AVPRG_2018
Repository for AV-PRG

See Live Project here:
[Datenklang!](https://www.weakhost.de/)


Code-Test:
```html
 <select id="birthYear_select" name="birthYear" class="custom-select" required="required">
    <?php
        for ($i=1; $i<=100; $i++){
            ?> <option value="<?php echo (2018-$i);?>"><?php echo (2018-$i);?></option> <?php
        }
    ?>
 </select>
```
