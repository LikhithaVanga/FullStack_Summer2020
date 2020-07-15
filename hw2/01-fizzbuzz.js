// Enter your code here
for (var i = 1; i < 100; i++) {
    FizzBuzz("\n"+i)
}

    function FizzBuzz(i) {
        if (i % 15 == 0) {
            document.write("FizzBuzz "+"<br>");
        } else if (i % 3 == 0) {
            document.write("Fizz "+"<br>");
        } else if (i % 5 == 0) {
            document.write("Buzz "+"<br>");
        } else {
            document.write(+i + "<br>");
        }
    }


