function exFirst(){
  var res = 0.0, vec = [], a;
  a = prompt("Введіть числа через space: ");
  vec = a.split(" ");
      for(var i = 0; i < vec.length; i++){
              res = res + parseFloat(vec[i]);
          }
      res = res / parseFloat(vec.length);
      document.write("<table border=\"5\" cellspacing=\"0\" cellpadding=\"5\">");
      document.write("<tr>");
      for(var i=0;i<vec.length;i++){
              document.write("<td align=\"center\">");
              document.write(vec[i]);
              document.write("</td>");
          }
      document.write("</tr>");
      document.write("<tr>");
      document.write("<td colspan=\""+vec.length+"\" align=\"center\">");
      document.write(res);
      document.write("</td")
      document.write("</tr>")
      document.write("<table>");
  }


  function exSecond(){
    var num1, num2, arr=[], res;
    num1 = document.getElementById('n1').value;
    parseInt(num1);
    num2 = document.getElementById('n2').value;
    parseInt(num2);
      for(var i;i<num1;i++)
      {
          arr[i]=[];
          document.write("| ");
          for(var j;j<num2;j++)
              {
                  res = Math.cos(i-j);
                  if(res>0){
                    document.write("+"+ res.toFixed(3) + " ");
                  }else document.write(res.toFixed(3) + " ");
                  arr[i][j]=res.toFixed(3);
              }
          document.write(" |<BR>");
      }



  function exSecond2(){
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(a);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(a);
      for(var i=0;i<num1;i++)
      {
          document.write("| ");
          for(var j=0;j<num2;j++)
              {
                  document.write("<input type=\"text\" id=\""+ i +"_"+j+"\" >");
              }
          document.write(" |<BR>");
      }
      document.write("<button onclick=\"exSecond3("+num1+","+num2+")\">Введіть</button>");

  function exSecond3(num1,num2)
      {
          console.log(num1+" "+num2);
          var arr=[], n;
          document.write("<BR>");
          for(var i=0;i<num1;i++)
          {
              arr[i]=[];
              document.write("| ");
              for(var j=0;j<num2;j++)
                  {
                  var n = document.getElementById(i+"_"+j);
                  arr[i][j]=n.value;
                  document.write(n.value + " ");
                  }
              document.write(" |<BR>");
          }
      }
}

function exThird1(){
  function exThird1() {
    var num1;
    num1 = document.getElementById('n11').value;
    parseInt(num1);
          for(var i=0;i<num1;i++)
          {
              document.write("| ");
              for(var j=0;j<num1;j++)
                  {
                      document.write("<input type=\"text\" id=\""+ i +"_"+j+"\" >");
                  }
              document.write(" |<BR>");
          }
          document.write("<button onclick=\"Start3("+num1+")\">Показати результат</button>");
      }

  function exThird2(num1)
      {
          var res = 1, a, n, arr=[];
          document.write("<BR>");
          for(var i=0;i<num1;i++)
          {
              arr[i]=[];
              for(var j=0;j<num1;j++)
                  {
                     n = document.getElementById(i+"_"+j);
                      if(n.value < 0 && i % 2 != 0 && j % 2 != 0)
                          {
                              res *= n.value;
                              a++;
                          }
                      arr[i][j] = n.value;
                  }
          }
          document.write(res);

          }
      }
    }
