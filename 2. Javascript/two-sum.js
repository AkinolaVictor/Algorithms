// console.log('testing');

const input = [ 3, 4, 5, 4, 3, 6, 7, 8, 9];

function TwoSums (data, target) {

    function finder (arr, element){
        let check=null;
        arr.includes(element) ? check = true : check = false;
        // console.log('checking');
        return check
    }
    let j=0

    while (j<data.length) {
        let val = target-data[j];
        if (finder(data, val)){
            console.log(data[j], val);
            // return [data[j], val]
        }
        j++
    }
    
}

let runner = TwoSums(input, 8)



// let runner = finder(input, 4);

console.log(runner);