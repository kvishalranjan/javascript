
function student(name,age,std)
{
    this.name=name;
    this.age=age;
    this.std=std;
    const stu1=new student("ABC",12,"VII")
    document.getElementById("stu").innerHTML+=stu1.name
}

var stu1=new student("ABC",12,"VII");
