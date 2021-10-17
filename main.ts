let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,3,2,2,2,22,2];

//Parent class
class Count {
    Count() {
        console.log(array.filter(x => x === 2).length)
    }
}

//Child class
class Sum extends Count{
    sum(){
        let sum = 0
        for(var i=0;i<array.length;i++){
            sum+=array[i];
        }
        console.log("Sum "+sum);
    }
}

let obj = new Sum();
obj.sum();
obj.Count();//accessing parent class method using child class object