console.log("<<<<<<<< Welcome To KBC Game >>>>>>>>>")
var question_list = [
    "How many continents are there?",                // first question
    "What is the capital of india?",                 // second question
    "NG mai kaun sa course padhaya jaata hai?"       // third question
]
// console.log(question_list)

var options_list = [

    // first question ke liye options
    ["1 Four","2 Nine","3 Seven","4 Eight"],
    // second question ke liye options
    ["1 Chandigarh","2 Bhopal","3 Chennai","4 Delhi"],
    // third question ke liye options
    ["1 Software Enginearing","2 Counseling","3 Tourism","4 Agriculture"]
]
// console.log(question_list)

// har ek question ke liye, uski solution key (yeh index nahi hai)

// solution_list = [3,4,1]
// 50_50 = [["(1).Four","(2).Seven"],
//         ["(1).Bhopal","(2).Delhi"]
//         ["(1).Tourism","(2).Software Enginearing"]
// ]

var solution_list = [3,4,1]
var anslist = [["1 Four","3 Seven"],["2  Bhopal","4 Delhi"],["1 Software Enginearing","2Counseling"]]
var i = 0
var count = 0
var price = 0
while (i<question_list.length){
    console.log(question_list[i]);
    // var j = i
    var serialno = 0
    while (serialno<(options_list[i]).length){
        var k = options_list[serialno]
        console.log(options_list[i][serialno]);
        serialno+=1
    }
    var newinput = require('readline-sync')
    var life_line = newinput.question("do you want to use life line 50-50 yes/no:-")
    if (life_line=="yes"){
        console.log("you use 50-50 life line");
        if (count<1){
            var serial = 0
            // var a = i
            while (serial<(anslist[i]).length){
                var s = anslist[i][serial]
                console.log(s);
                serial+=1
            }
            var num = newinput.questionInt("enter your ans:");
            if (num==solution_list[i]){
                price+=10000
                console.log("right ans and your wining price is:",price);
            }
            else{
                console.log("wrong ans");
                break
            }
            count+=1
              
        }else{
            console.log("you have already used life line:");
            var num1 = newinput.questionInt("enter the number:")
            if (num1 ==solution_list[i]){
                price+=10000
                console.log("your ans is correct and your wining price is:",price);
            }else{
                console.log("your ans is wrong game is over");
                break
            }
            
        }
    }else{
        var num2 = newinput.question("enter your ans:");
        if (num2==solution_list[i]){
            price+=10000
            console.log("right ans and your wining price is:",price)
            console.log("Congratulation's !")
        }else{
        console.log("wrong ans")
        break
        }
    }

    i+=1 
}


    
    