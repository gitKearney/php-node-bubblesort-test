<?php
require_once './bubble-sort-core.php';

$myArray = [];
$numberPool = 4096;

$myArray = buildArray($numberPool);

$startTime = hrtime(true);
bubbleSort($myArray);
$endTime   = hrtime(true);

echo '[PHP] array contains ', count($myArray), ' elements, execution time: ',
  ($endTime - $startTime) / 1000000, ' ms', PHP_EOL;

// echo print_r($myArray, true), PHP_EOL;
