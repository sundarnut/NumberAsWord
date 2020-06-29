function generateWord() {
  
    var strNumber = $("#txtNumber").val();
    var flag = false;

     // Weird hack to avoid for spaces derailing isNaN
    for (var i = 0; i < strNumber.length; i++) {
        var c = strNumber.charAt(i);
        if ((c < '0') || (c > '9')) {
            flag = true;
            break;
        }
    }

    if ((strNumber == "") || (flag)) {
        $("#spanAnswer").html("Invalid number entered!");
        return;
    }

    var strNumber1 = strNumber;
    strNumber = removeLeadingZeros(strNumber);

    if (strNumber1 != strNumber) {
        $("#txtNumber").val(strNumber);
    }

    var answer = "";
    var strLength = strNumber.length;

    if (strNumber == "0") {
        answer = "zero";
    } else {
        var index = 1;

        do {
            var initialPos = strLength - 3 * index;
            var blockLength = 3;

            if (initialPos < 0) {
                initialPos = 0;
                blockLength = strLength % 3;
            }

            var strThreeDigits = strNumber.substring(initialPos, initialPos + blockLength);
            var threeDigits = parseInt(strThreeDigits);
            var thisAnswer = getFullWord(threeDigits);

            if (thisAnswer != "") {
                var suffix = getSuffix(index);
                answer = thisAnswer + suffix + answer;
            }
            index++;
          
        } while (initialPos > 0);
    }

    $("#spanAnswer").html(answer);
}

function removeLeadingZeros(number) {

  var next = 0;

    while ((number.charAt(next) == '0') &&
           (next < number.length - 1)) {
        next++;
    }

    if (next > 0) {
        return number.substring(next);
    }
  
    return number;
}

function getFullWord(number) {
 
    var answer = "";
    var strHundreds = "";
    var strTens = "";
    var strUnits = "";

    if (number > 99) {
        var hundreds = parseInt(number / 100);
        strHundreds = getWord(hundreds);
        answer = strHundreds + " hundred ";
        number %= 100;
    }

    if (number < 20) {
        strUnits = getWord(number);
    } else {
        var tens = parseInt(number / 10) * 10;
        var ones = number % 10;

        strTens = getWord(tens);

        if (ones > 0) {
            strUnits = getWord(ones);
        }
    }

    if (strHundreds != "") {
        if ((strTens != "") || (strUnits != "")) {
            answer += "and ";
        }
    }

    if (strTens != "") {
        answer += strTens;
        if (strUnits != "") {
            answer += " ";
        }
    }

    if (strUnits != "") {
        answer += strUnits;
    }

    return answer;
}

function getWord(number) {

    var answer = "";

    switch (number) {
        case 1:
            answer = "one";
            break;
        case 2:
            answer = "two";
            break;
        case 3:
            answer = "three";
            break;
        case 4:
            answer = "four";
            break;
        case 5:
            answer = "five";
            break;
        case 6:
            answer = "six";
            break;
        case 7:
            answer = "seven";
            break;
        case 8:
            answer = "eight";
            break;
        case 9:
            answer = "nine";
            break;
        case 10:
            answer = "ten";
            break;
        case 11:
            answer = "eleven";
            break;
        case 12:
            answer = "twelve";
            break;
        case 13:
            answer = "thirteen";
            break;
        case 14:
            answer = "fourteen";
            break;
        case 15:
            answer = "fifteen";
            break;
        case 16:
            answer = "sixteen";
            break;
        case 17:
            answer = "seventeen";
            break;
        case 18:
            answer = "eighteen";
            break;
        case 19:
            answer = "nineteen";
            break;
        case 20:
            answer = "twenty";
            break;
        case 30:
            answer = "thirty";
            break;
        case 40:
            answer = "forty";
            break;
        case 50:
            answer = "fifty";
            break;
        case 60:
            answer = "sixty";
            break;
        case 70:
            answer = "seventy";
            break;
        case 80:
            answer = "eighty";
            break;
        case 90:
            answer = "ninety";
            break;
    }
    return answer;
}

function getSuffix(index) {
    var suffix = "";

    switch (index) {
        case 2:
            suffix = " thousand ";
            break;
        case 3:
            suffix = " million ";
            break;
        case 4:
            suffix = " billion ";
            break;
        case 5:
            suffix = " trillion ";
            break;
        case 6:
            suffix = " quadrillion ";
            break;
        case 7:
            suffix = " quintillion ";
            break;
        case 8:
            suffix = " sextillion ";
            break;
        case 9:
            suffix = " septillion ";
            break;
        case 10:
            suffix = " octillion ";
            break;
        case 11:
            suffix = " nonillion ";
            break; 
        case 12:
            suffix = " decillion ";
            break;
        case 13:
            suffix = " undecillion ";
            break;
        case 14:
            suffix = " duodecillion ";
            break;
        case 15:
            suffix = " tredecillion ";
            break;
        case 16:
            suffix = " quattor-decillion ";
            break;
        case 17:
            suffix = " quindecillion ";
            break;
        case 18:
            suffix = " sexdecillion ";
            break;
        case 19:
            suffix = " septen-decillion ";
            break;
        case 20:
            suffix = " octodecillion ";
            break;
        case 21:
            suffix = " novemdecillion ";
            break;
        case 22:
            suffix = " vigintillion ";
            break;
    }

    return suffix;
}
