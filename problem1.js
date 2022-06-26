function rev_string(str)
  {
    let bag="";
    for(let i=str.length;i>=0;i--)
      {
        bag=bag+str[i];
      }
    return bag;
  }
let name="Saquib";
let  reversed_name=rev_string(name);
function check(a,b)
  {
    if(a==b)
      console.log("Palindrome");
    else
      console.log("Not a Palindrome);
  }