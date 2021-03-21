var course = [
    {
        id:1,
        name:'Java',
        coin:0

    },
    {
        id:2,
        name:'js',
        coin:0

    },
    {
        id:3,
        name:'Php',
        coin:0

    },
    {
        id:4,
        name:'Php',
        coin:40

    },
    {
        id:5,
        name:'C++',
        coin:90

    },
    {
        id:6,
        name:'Pascal',
        coin:100

    },
]

course.forEach(function(courses){
    console.log(courses);
})

var ischeck=
course.every(function(courses){
    return courses.coin==0;
})

console.log(ischeck);

var ischeck1 = course.find(function(courses,index){
    return courses.name=='Php';
})

console.log(ischeck1);

var ischeck1 = course.filter(function(courses,index){
    return courses.name=='Php';
})

console.log(ischeck1);

var isreduce=course.reduce(function(value,courses){
    return value.concat(courses.name);

},[]);

console.log(isreduce.join(''));