var ptr = ""

for (i = 1; i <= 4; i++) {
    for (j = 1; j <= 4; j++) {

        ptr += "*"; 


    }
    ptr = ptr + "\n"


}
console.log(ptr);

var ptr1 = ""
for (i = 1; i <= 4; i++) {
    for (j = 1; j <= i; j++) {

        ptr1 = ptr1 + "&";


    }
    ptr1 = ptr1 + "\n"


}
console.log(ptr1);

var ptr2 = ""
for (i = 1; i <= 4; i++) {
    for (j = i; j <= 4; j++) {

        ptr2 = ptr2 + "#";


    }
    ptr2 = ptr2 + "\n"


}
console.log(ptr2);
