# Bubblesort Speed Comparison
There's a article detailing that PHP is slower than NodeJS where the author
attempts to use bubble-sort as the base comparison.

However, I feel his implementation is flawed, thus, I'm using one from an
algorithms and datastructures paper on bubblesort. I've adapted the psuedocode
to PHP and NodeJS and have found PHP to be *much* faster than Node.

    2019-05-26 18:50:56 $ php bubble-sort-v2.php
    execution time: 0 seconds 0.000087 microseconds

    2019-05-26 18:51:01 $ node bubble-sort-v2.js
    0 seconds 0.409986 milliseconds


If I've made a mistake in time calculations, please let me know, and I'll
correct the issue.

Thanks!