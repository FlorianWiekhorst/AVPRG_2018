<?php

  $psychofrage1 = (isset($_REQUEST['psychofrage1']) && in_array($_REQUEST['psychofrage1'], array('psy1_antw1', 'psy1_antw2', 'psy1_antw3', 'psy1_antw4'))) ? $_REQUEST['psychofrage1'] : '';
  $psychofrage2 = (isset($_REQUEST['psychofrage2']) && in_array($_REQUEST['psychofrage2'], array('psy2_antw1', 'psy2_antw2', 'psy2_antw3', 'psy2_antw4'))) ? $_REQUEST['psychofrage2'] : '';

 ?>
