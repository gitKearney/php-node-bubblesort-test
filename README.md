# Bubblesort Speed Comparison
There's a article detailing that PHP is slower than NodeJS where the author
attempts to use bubble-sort as the base comparison.

However, I feel his implementation is flawed, thus, I'm using one from an
algorithms and datastructures paper on bubblesort. I've adapted the psuedocode
to PHP and NodeJS and have found PHP to be *much* faster than Node when the
array contains less than 200 elements.

    [PHP] array contains 197 elements, execution time: 2.32089 ms
    [V8] array contains 197 elements, execution time: 2.520061 ms

After about 220 elements, PHP becomes increasingly slower

    [PHP] array contains 226 elements, execution time: 3.03365 ms
    [V8] array contains 226 elements, execution time: 2.40477 ms

At 1,000 elements PHP is 5 times slower than Node

    php bubble-sort-v2.php; node bubble-sort-v2.js; # run tests back to back
    [PHP] array contains 1002 elements, execution time: 223.782218 ms

    [V8] array contains 1002 elements, execution time: 4.937916 ms

If I've made a mistake in time calculations, please let me know, and I'll
correct the issue.

Thanks!