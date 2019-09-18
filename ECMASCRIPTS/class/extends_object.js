//1. Class by default is not extending object -so,we get error
/*class A
{
    constructor()
    {
        super();
    }
}
new A();*/
//2.To check object is there r not
class A extends Object
{
  constructor()
  {
      console.log("hi");
      super();
  }
}

/*conclusion:->1.Object is there but not given by compiler*/