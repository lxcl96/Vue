let persons=[
    {id:001,name:'马冬梅',age:19,sex:'女'},
    {id:002,name:'周冬雨',age:20,sex:'女'},
    {id:003,name:'周杰伦',age:18,sex:'男'},
    {id:004,name:'温兆伦',age:21,sex:'男'}      
]

let arr = persons.sort((x,y)=>{
    return x.age - y.age;
})

console.log(arr);
console.log(persons);