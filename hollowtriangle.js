let ptr = "";

for (let i = 1; i <= 6; i++) {

    for (let j = 5; j >= i; j--) {
        ptr += " ";
    }

    for (let k = 1; k <= i; k++) {
       
        if (k === 1 || k === i || i === 6) {
            ptr += "* ";
        } else {
            ptr += "  "; 
        }
    }

    ptr += "\n";
}

console.log(ptr);