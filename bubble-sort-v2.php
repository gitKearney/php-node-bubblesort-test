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

$myArray = [];

// add numbers divisible by 2
for ($x = 1024; $x >= 0; $x--) {
  if ($x % 2 === 0) {
    $myArray[] = $x;
  }
}

// add numbers divisible by 3
for ($x = 1024; $x >= 0; $x--) {
  if ($x % 3 === 0) {
    $myArray[] = $x;
  }
}

// add numbers divisible by 7
for ($x = 1024; $x >= 0; $x--) {
  if ($x % 7 === 0) {
    $myArray[] = $x;
  }
}

echo 'array contains ', count($myArray), ' elements', PHP_EOL;

$startTime = hrtime(true);
bubbleSort($myArray);
$endTime   = hrtime(true);

echo ($endTime - $startTime) / 1000000, ' ms', PHP_EOL;

// echo print_r($myArray, true), PHP_EOL;
