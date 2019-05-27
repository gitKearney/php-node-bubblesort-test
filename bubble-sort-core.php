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

/**
 * Builds an array to be used in sort.
 *
 * @param int $numberPool
 * @return array
 */
function buildArray(int $numberPool)
{
    // add numbers divisible by 2
    for ($x = $numberPool; $x >= 0; $x--) {
        if ($x % 2 === 0) {
            $myArray[] = $x;
        }
    }

    // add numbers divisible by 3
    for ($x = $numberPool; $x >= 0; $x--) {
        if ($x % 3 === 0) {
            $myArray[] = $x;
        }
    }

    // add numbers divisible by 7
    for ($x = $numberPool; $x >= 0; $x--) {
        if ($x % 7 === 0) {
            $myArray[] = $x;
        }
    }

    return $myArray;
}