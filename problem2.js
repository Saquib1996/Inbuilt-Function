//write a function to multiply elements of two arrays and store a product in different array
function multiply(a,b)
  {   
     let arr3=[];
for(let i=0;i<a.length;i++)
  {
      let product=a[i]*b[i];
      arr3.push(product);
  }
console.log(arr3);
}
     let arr1=[20,40,60,80];
     let arr2=[3,7,9,4];
    multiply(arr1,arr2);