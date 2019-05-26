<?php

function bubbleSort(array &$a)
{
  $len = count($a) - 1;
  $sorted = false;

  while (!$sorted) {
    $sorted = true;
    for ($i = 0; $i < $len; $i++) {
      $current = $a[$i];
      $next = $a[$i + 1];

      if ( $next < $current ) {
        $a[$i] = $next;
        $a[$i + 1] = $current;
        $sorted = false;
      }
    }
  }
}

// $myArray = [3, 4, 1, 3, 5, 1, 92, 2, 4124, 424, 52, 12];
$myArray = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

list($startMicro, $startTime) = explode(' ', microtime());
bubbleSort($myArray);
list($endMicro, $endTime) = explode(' ', microtime());

$elapsedMicroTime = $endMicro - $startMicro;

echo 'execution time: ', ($endTime - $startTime), ' seconds ',
  sprintf("%.6f microseconds", $elapsedMicroTime),
  PHP_EOL;

# print_r($array->toArray());
