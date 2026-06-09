
var  ptr =""
          

for (i = 1; i <= 6; i++) {

    //space
    for (j = 5; j >= i; j--)

        ptr += " "

    //star

    for (k = 1; k <= i; k++) {

       
        ptr += "* "
       
    }

    ptr += "\n"

}

console.log(ptr);