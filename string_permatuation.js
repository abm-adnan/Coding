Heap's algorithm generates all possible permutations of N objects. It was first proposed by B. R. Heap in 1963.[1] The algorithm minimizes movement: it generates each permutation from the previous one by interchanging a single pair of elements; the other N−2 elements are not disturbed. In a 1977 review of permutation-generating algorithms, Robert Sedgewick concluded that it was at that time the most effective algorithm for generating permutations by computer.

Suppose we have a permutation containing N different elements. Heap found a systematic method for choosing at each step a pair of elements to switch, in order to produce every possible permutation of these elements exactly once. Let us describe Heap's method in a recursive way. First we set a counter i  to 0. Now we perform the following steps repeatedly, until i  is equal to N. We use the algorithm to generate the (N − 1)! permutations of the first N − 1 elements, adjoining the last element to each of these. This generates all of the permutations that end with the last element. Then if N is odd, we switch the first element and the last one, while if N is even we can switch the i th element and the last one (there is no difference between N even and odd in the first iteration). We add one to the counter i and repeat. In each iteration, the algorithm will produce all of the permutations that end with the element that has just been moved to the "last" position. The following pseudocode outputs all permutations of a data array of length N.

function permutation(n, A) {
    if (n === 1) {
        console.log(A.join(''));
        return;
    }
    for (var i = 0; i < n; i++) {
        permutation(n - 1, A);
        if (n % 2 === 0) { // n even
            var tmp = A[i];
            A[i] = A[n - 1];
            A[n - 1] = tmp;
        } else { // n odd
            var tmp = A[0];
            A[0] = A[n - 1];
            A[n - 1] = tmp;
        }
    }
}

var str = 'ABCDE';
permutation(str.length, str.split(''));