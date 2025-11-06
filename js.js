//  offcanvas1_Open('.error','top')


let z=document.getElementById('ul')
let li=document.createElement('li')
function abc(){
  z=document.getElementById('ul')
 li=document.createElement('li')
// li.appendChild(document.createTextNode('four'))
z.appendChild(li)
li.innerHTML='50'
  }

function offcanvas1_Open(e,f)
{ let elements=document.querySelectorAll(e);
  if(f=="top")
  { elements.forEach(element => {
    element.classList.remove("slide-out-top");
    element.classList.add("slide-in-top");
    });
    offcanvas1_Close('.menu','menu')
  }
  else if(f=="left")
  { elements.forEach(element => {
    element.classList.remove("slide-out-left");
    element.classList.add("slide-in-left");
    });
    let backdrop=document.querySelectorAll('.edit_inventory-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=='bottom')
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
  });
  let backdrop=document.querySelectorAll('.edit_inventory-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=='login')
  { elements.forEach(element => {
    element.classList.remove("slide-out-top");
    element.classList.add("slide-in-top");
    });
  }
  else if(f=="menu")
  { elements.forEach(element => {
    element.classList.remove("slide-out-right");
    element.classList.add("slide-in-right");
    });
  
    let backdrop=document.querySelectorAll('.menu-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=="inventory-search")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
    });
    let backdrop=document.querySelectorAll('.inventory-search-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=="sell-order-details")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-order-details-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
    else if(f=="sell")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=="sell-confirm")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }
  else if(f=="add_inventory")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
  });
  let backdrop=document.querySelectorAll('.add_inventory-backdrop')
  backdrop.forEach(element => {
    element.classList.add("show");
  });
}
else if(f=="add_inventory-confirm")
  { elements.forEach(element => {
    element.classList.remove("slide-out-bottom");
    element.classList.add("slide-in-bottom");
    });
    let backdrop=document.querySelectorAll('.add_inventory-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.add("show");
    });
  }

}



function offcanvas1_Close(e,f)
{
  let elements=document.querySelectorAll(e);
  if(f=="top")
  { elements.forEach(element => {
    element.classList.add("slide-out-top");
    });
  }
  else if(f=="left")
  { elements.forEach(element => {
    element.classList.add("slide-out-left");
    });
    let backdrop=document.querySelectorAll('.edit_inventory-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=='bottom')
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.edit_inventory-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=='login')
  { elements.forEach(element => {
    element.classList.add("slide-out-top");
    });
  }
  else if(f=="menu")
  { elements.forEach(element => {
    element.classList.add("slide-out-right");
    });
    let backdrop=document.querySelectorAll('.menu-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=="inventory-search")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.inventory-search-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=="sell-order-details")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-order-details-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
    else if(f=="sell")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=="sell-confirm")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.sell-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=="add_inventory")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.add_inventory-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
  else if(f=="add_inventory-confirm")
  { elements.forEach(element => {
    element.classList.add("slide-out-bottom");
    });
    let backdrop=document.querySelectorAll('.add_inventory-confirm-backdrop')
    backdrop.forEach(element => {
    element.classList.remove("show");
    });
  }
}


offcanvas1_Open('.login','login')


// JS
let response

function sendPHP(e) {
  let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      response=this.responseText;
   /*document.getElementById("demo").innerHTML =*/
   console.log(this.responseText);
   return(this.responseText)
  }
 xhttp.open("POST","server.php?q="+e,false);
 xhttp.send();
}









let a,b,c,profit_daily,profit_monthly
let d=new Date();
const days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
const months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const weeks=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THUSDAY","FRIDAY","SATURDAY"]
let date= d.getDate()+"/"+months[d.getMonth()].toUpperCase()+"/"+ d.getFullYear();

// document.getElementById('pic').style.background='url(pic/profile/pic1.jpg) no-repeat left/contain'



let login={user_id:"",user:"",password:"",pic:"",do:"login"}
let login_pic=[]
sendPHP('{"do":"pic"}');
login_pic=response.split(",")
login_pic.splice(0,2)
function Login_Pic()
{
  login.user_id=document.getElementById('login_User_id').value
  login.password=document.getElementById('login_Password').value
  user_reg=login.user_id.match(/^[a-zA-Z]\w{0,15}/)
  password_reg=login.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}/)
  if(user_reg!=null && login.user_id==user_reg)
  {
    login.user_id=user_reg.toString()
    // console.log("valid");
    let elements=document.querySelectorAll("#login_User_id");
    elements.forEach(element => {
    element.classList.remove("red");
    element.classList.add("green");
    });
    for(i=2;i<login_pic.length;i++)
    {
      if(login.user_id==login_pic[i].match(/^[a-zA-Z]\w{0,15}/).toString())
      {
        document.getElementById('login-pic').style.background='url(pic/profile/'+login_pic[i]+') no-repeat left/contain';
        break;
      }
      else{
        document.getElementById('login-pic').style.background='url(pic/profile/default.jpg) no-repeat center/contain';
      }
    }
  }
  else{
    // console.log("User ID cannot contain '!@#$%^&*'")
    login.user_id=null
    let elements=document.querySelectorAll("#login_User_id");
    elements.forEach(element => {
    element.classList.remove("green");
    element.classList.add("red");
    });
  }
  if(password_reg!=null && login.password==password_reg)
  {
    login.password=password_reg.toString()
    // console.log("valid");
    let elements=document.querySelectorAll("#login_Password");
    elements.forEach(element => {
    element.classList.remove("red");
    element.classList.add("green");
    });
  }
  else{
    // console.log("pass  cannot contain '!@#$%^&*'")
    login.password=null;
    let elements=document.querySelectorAll("#login_Password");
    elements.forEach(element => {
    element.classList.remove("green");
    element.classList.add("red");
    });   
  }
}




function Login()
{ 
  Login_Pic() //delete this laTER WITH INPUT VALUE
  login.do="login"
  if(login.user_id=="")
  {
    alert("Please Enter User ID");
  }
  else if(login.user_id==null)
  {
    alert("Please Enter Valid User ID");
  }
  else if(login.password=="")
  {
    alert("Please Enter Password");
  }
  else if(login.password==null)
  {
    alert("Please Enter Valid Password");
  }
  else{

  console.log(login);
  sendPHP(JSON.stringify(login));
  // console.log(response)
  login=JSON.parse(response);
  if(login.login=="valid")
  {
    sessionStorage.setItem("login","valid")
    offcanvas1_Close('.login','login')
    document.getElementById('Login-Menu_pic').style.background='url(pic/profile/pic1.jpg) no-repeat left/contain';
    document.getElementById('Login-Menu_Name').innerHTML=login.user
  }
  else
  {
    alert("user_id & password mismatched")
  }
}
}

function Logout(){
  sessionStorage.removeItem("login");
  offcanvas1_Open('.login','login');
  // location.reload()
  setTimeout(Logout_Delay,1000)
}
function Logout_Delay(){
  location.reload()
}


function LoadAllArray()
{ 
  sendPHP('{"do":"a_read"}');
  a=JSON.parse(response);

  sendPHP('{"do":"b_read"}');
  b=JSON.parse(response);

  sendPHP('{"do":"c_read"}');
  c=JSON.parse(response);

  sendPHP('{"do":"profit_cal_daily"}')
  profit_daily=JSON.parse(response);
  // console.log(response);

  sendPHP('{"do":"profit_cal_monthly"}')
  profit_monthly=JSON.parse(response);

  sendPHP('{"do":"profit_cal_monthly"}')
  profit_monthly=JSON.parse(response);



autocomplete(document.getElementById("Product_Search_Input"),a.product);
  Inventory_Table()
  Sell_Table()
  Update_Table()
  Today_Table()
}



function Inventory_Table(){
let table=document.getElementById("Inventory_Table")
for(i=0;i<a.product_id.length;i++)
{ var row = table.insertRow();
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
  row.insertCell(3);
  row.insertCell(4);
  row.insertCell(5);
  row.insertCell(6);
  row.insertCell(7);
  row.insertCell(8);
  row.insertCell(9);
  row.insertCell(10);
  row.cells[0].innerHTML=document.getElementById("Inventory_Table").rows.length-1;
  row.cells[1].innerHTML=a.product_id[i];
  row.cells[2].innerHTML=a.product[i];
  for(j=0;j<a.size[i].length;j++){
  if(a.size[i].length==1){
  row.cells[3].innerHTML=a.size[i][j];
  row.cells[4].innerHTML=a.quantity[i][j];
  row.cells[5].innerHTML=a.price[i][j];
  row.cells[8].innerHTML=a.buy_price[i][j];
  }
  else{
  row.cells[3].innerHTML=row.cells[3].innerHTML+a.size[i][j]+'<br>';
  row.cells[4].innerHTML=row.cells[4].innerHTML+a.quantity[i][j]+'<br>';
  row.cells[5].innerHTML=row.cells[5].innerHTML+a.price[i][j]+'<br>';
  row.cells[8].innerHTML=row.cells[8].innerHTML+a.buy_price[i][j]+'<br>';
  }
  }
  row.cells[6].innerHTML=a.discount[i];
  row.cells[7].innerHTML=a.gst[i];
  row.cells[9].innerHTML=a.barcode[i];
  row.cells[10].innerHTML='<span onclick="Inventory_Edit('+i+')"><i class="bi bi-pencil-square"></i></span>';
  }
}
// LoadAllTable();

function Sell_Table(){
  let table=document.getElementById("Sell_Table")

for(i=b.bill_id.length-1;i>=0;i--)
{ var row = table.insertRow(1);
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
  row.insertCell(3);
  row.insertCell(4);
  row.insertCell(5);
  row.insertCell(6);
  row.insertCell(7);
  row.insertCell(8);
  row.insertCell(9);
  row.insertCell(10);
  row.insertCell(11);
  row.insertCell(12);
  row.insertCell(13);
  row.insertCell(14);
  row.insertCell(15);
  row.insertCell(16);
  row.insertCell(17);
  row.cells[0].innerHTML=document.getElementById("Sell_Table").rows.length-1;
  row.cells[1].innerHTML=b.bill_id[i];
  row.cells[2].innerHTML=b.date[i];
  row.cells[3].innerHTML=b.name[i];
  row.cells[4].innerHTML=b.mobile[i];
  row.cells[5].innerHTML=b.delivery[i];
  row.cells[6].innerHTML=b.delivery_address[i];
  row.cells[7].innerHTML=b.payment[i];
  row.cells[8].innerHTML=b.total[i];
  row.cells[9].innerHTML=b.profit[i];
  row.cells[10].innerHTML=b.product[i];
  row.cells[11].innerHTML=b.price[i];
  row.cells[12].innerHTML=b.quantity[i];
  row.cells[13].innerHTML=b.total_item[i];
  row.cells[14].innerHTML=b.discount[i];
  row.cells[15].innerHTML=b.gst[i];
  row.cells[16].innerHTML=b.profit_item[i];
  row.cells[17].innerHTML='<span style="display:flex;justify-content:center" onclick="Sell_Order('+i+')"><i class="bi bi-fullscreen"></i></span>';
  }
}

function Update_Table(){
let table=document.getElementById("Update_Table")
for(i=c.product.length-1;i>=0;i--)
{ 
  var row = table.insertRow();
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
  row.insertCell(3);
  row.insertCell(4);
  row.insertCell(5);
  row.insertCell(6);
  row.insertCell(7);
  row.insertCell(8);
  row.insertCell(9);
  row.insertCell(10);
  row.insertCell(11);
  row.insertCell(12);

  row.cells[0].innerHTML=document.getElementById("Update_Table").rows.length-1;
  row.cells[1].innerHTML=c.date[i];
  row.cells[2].innerHTML=c.product_id[i];
  row.cells[3].innerHTML=c.product[i];
  row.cells[4].innerHTML=c.size[i];
  row.cells[5].innerHTML=c.new_price[i];
  row.cells[6].innerHTML=c.new_quantity[i];
  row.cells[7].innerHTML=c.new_gst[i];
  row.cells[8].innerHTML=c.new_buy_price[i];
  row.cells[9].innerHTML=c.old_price[i];
  row.cells[10].innerHTML=c.old_quantity[i];
  row.cells[11].innerHTML=c.old_gst[i];
  row.cells[12].innerHTML=c.old_buy_price[i];
  }
}

function Today_Table(){

let table=document.getElementById("Today_Table");

for(i=b.date.length-1;i>=0;i--)
{ 
  if(b.date[i] != date)
  {
    break;
  }
  var row = table.insertRow(1);
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
  row.insertCell(3);
  row.insertCell(4);
  row.insertCell(5);
  row.insertCell(6);
  row.insertCell(7);
  row.insertCell(8);
  row.insertCell(9);

  row.cells[0].innerHTML=document.getElementById("Today_Table").rows.length-1;
  row.cells[1].innerHTML=b.bill_id[i];
  row.cells[2].innerHTML=b.date[i];
  row.cells[3].innerHTML=b.name[i];
  row.cells[4].innerHTML=b.mobile[i];
  row.cells[5].innerHTML=b.delivery[i];
  row.cells[6].innerHTML=b.delivery_address[i];
  row.cells[7].innerHTML=b.total[i];
  row.cells[8].innerHTML=b.payment[i];
  row.cells[9].innerHTML=b.profit[i];
}
if(document.getElementById("Today_Table").rows.length==1)
{
  document.getElementById("Today_Table").style.display="none";
  document.getElementById("Today_Table_No_product").style.display="block";
}
}





function Sell_Order(e){
  offcanvas1_Open('.sell-order-details','sell-order-details')
  console.log(e)
  document.getElementById("sell-order-Bill_id").innerHTML=b.bill_id[e];
  document.getElementById("sell-order-Date").innerHTML=b.date[e];
  document.getElementById("sell-order-Name").innerHTML=b.name[e];
  document.getElementById("sell-order-Phone").innerHTML=b.mobile[e];
  document.getElementById("sell-order-Payment").innerHTML=b.payment[e];
  document.getElementById("sell-order-Shipping").innerHTML=b.delivery[e];
  document.getElementById("sell-order-Shipping_address").innerHTML=b.delivery_address[e];
  document.getElementById("sell-order-Total").innerHTML=b.total[e];
  document.getElementById("sell-order-Profit").innerHTML=b.profit[e];
  let temp="";
  for(i=0;i<b.product[e].length;i++)
  { console.log(b.product[e][i])
    console.log('e:'+e+'i:'+i)
    temp+=  
 '    <div class="div">'
+'        <div>'
+'          <div class="heading6">Product ID</div>'
+'          <div id="sell-order-Product_id">#'+a.product_id[a.product.indexOf(b.product[e][i])]+'</div>'
+'        </div>'
+'          <div class="flex">'
+'            <div class="flex-div">'
+'              <div class="heading6">Product</div>'
+'              <div id="sell-order-Product">'+b.product[e][i]+'</div>'
+'            </div>'
+'            <div class="flex-div">'
+'              <div class="heading6 right">Size</div>'
+'              <div id="sell-order-Size" class="right">'+b.size[e][i]+'</div>'
+'            </div>'
+'          </div>'
+'        <div class="flex">'
+'          <div class="flex-div">'
+'            <div class="heading6">Price</div>'
+'            <div  id="sell-order-Price">'+b.price[e][i]+'</div>'
+'          </div>'
+'          <div class="flex-div">'
+'            <div class="flex-div">'
+'              <div class="heading6 right">Quantity</div>'
+'              <div id="sell-order-Quantity" class="right">'+b.quantity[e][i]+'</div>'
+'            </div>'
+'          </div>'
+'        </div>'
+'        <div class="flex">'
+'          <div class="flex-div">'
+'            <div class="flex-div">'
+'          <div class="heading6">Discount</div>'
+'          <div id="sell-order-Discount">'+b.discount[e][i]+'</div>'
+'        </div>'
+'          </div>'
+'          <div class="flex-div">'
+'            <div class="flex-div">'
+'          <div class="heading6 right">GST</div>'
+'          <div id="sell-order-GST" class="right">'+b.gst[e][i]+'</div>'
+'        </div>'
+'          </div>'
+'        </div>'
+'        <div class="flex">'
+'          <div class="flex-div">'
+'            <div class="flex-div">'
+'          <div class="heading6">Total Item</div>'
+'          <div id="sell-order-Total_items">'+b.total_item[e][i]+'</div>'
+'        </div>'
+'          </div>'
+'          <div class="flex-div">'
+'            <div class="flex-div">'
+'          <div class="heading6 right">Profit Item</div>'
+'          <div id="sell-order-Profit_item" class="right">'+b.profit_item[e][i]+'</div>'
+'        </div>'
+'          </div>'
+'        </div>'
+'      </div>'
}
  document.getElementById("sell-order-Sell_Deatils").innerHTML=temp;
  // document.getElementById("").innerHTML=;
}

let inventory_search_size=0;
function Inventory_Search(){
if(document.getElementById("Product_Search_Input").value=="")
{
  alert("Please Add Product Name")
}
else{

for(i=0;i<a.product.length;i++)
{ if(a.product[i]==document.getElementById("Product_Search_Input").value)
  { document.getElementById("inventory-search-Product_id").innerHTML=a.product_id[i];
    document.getElementById("inventory-search-Product").innerHTML=a.product[i];
    console.log(a.product[i])
    console.log(i)
    inventory_search_size=i;
    Inventory_Search_Size()
    break;
  }
}
  offcanvas1_Open('.inventory-search','inventory-search')
}
}

function Inventory_Search_Size(){
 let temp="";
for(i=0;i<a.size[inventory_search_size].length;i++)
{ temp+=
'  <div class="flex-div" >'+
'    <input type="radio" class="btn-check" name="size" id="size'+i+'" autocomplete="off" value="'+a.size[inventory_search_size][i]+'" onclick="Inventory_Search_Size_Toggle('+i+')"';
if(i==0){
  temp+='checked>'
}
else{
  temp+='>'
}
temp+=
'    <label class="btn btn-outline-light" for="size'+i+'">'+a.size[inventory_search_size][i]+'</label>'+
'  </div>';
}
document.getElementById("inventory-search-Size").innerHTML=temp;
Inventory_Search_Size_Toggle('0')
}

function Inventory_Search_Size_Toggle(e){
  document.getElementById("inventory-search-Price").innerHTML=a.price[inventory_search_size][e];
  document.getElementById("inventory-search-Quantity_inv").innerHTML=a.quantity[inventory_search_size][e];
  Inventory_Search_Size_Input()
}

function Inventory_Search_Size_Input(){
  let price_x_quantity;
  price_x_quantity= Number(document.getElementById("inventory-search-Price").innerHTML) * document.getElementById("inventory-search-Quantity").value
//discount
  let discount= price_x_quantity - Math.floor(price_x_quantity * ((document.getElementById("inventory-search-Discount").value) / 100))
  document.getElementById("inventory-search-Discount_cal").innerHTML = Math.floor( price_x_quantity * (document.getElementById("inventory-search-Discount").value / 100))
//gst
  let total= discount + Math.floor((discount * (document.getElementById("inventory-search-Gst").value) / 100))
  document.getElementById("inventory-search-Gst_cal").innerHTML= Math.floor( discount * (document.getElementById("inventory-search-Gst").value / 100))
//total 
  document.getElementById("inventory-search-Total").innerHTML = total;
}




function Inventory_Edit(e){
let temp=""
  document.getElementById("edit_inventory_Product_id").innerHTML=a.product_id[e];
  document.getElementById("edit_inventory_product").innerHTML=a.product[e];
  for(i=0;i<a.size[e].length;i++)
  {   temp+=
'    <div class="big-card">'+
'      <div style="padding: 5px 20px; font-size: 20px;margin:5px 0px 0px 10px;background-color:var(--bs-red);width: fit-content;border-radius: 50px;" id="edit_inventory_size'+i+'">'+a.size[e][i]+'</div>'+
'      <div class="card">'+
'        <div class="middle" style="background:#d633844d;border-radius: 20px;padding: 5px;">Quantity</div><hr>'+
'        <div class="flex">'+
'          <div class="flex-div"><input class="input" type="number" placeholder="New Quantity" id="edit_inventory_Quantity'+i+'" style="background: #d6338400;border:1px solid #ffffff99""></div>'+
'          <div class="flex-div middle" id="edit_inventory_Quantity_cal">'+a.quantity[e][i]+'</div> '+
'        </div>'+
'      </div>'+

'      <div class="card">'+
'        <div class="middle">PRICE</div><hr>'+
'        <div class="flex">'+
'          <div class="flex-div"><input class="input" type="number" placeholder="New price" id="edit_inventory_Price'+i+'" style="background: #d6338400;border:1px solid #ffffff99""></div>'+
'          <div class="flex-div middle" id="edit_inventory_Price_cal">'+a.price[e][i]+'</div> '+
'        </div>'+
'      </div>'+

'      <div class="card">'+
'        <div class="middle"> BUY PRICE</div><hr>'+
'        <div class="flex">'+
'          <div class="flex-div"><input class="input" type="number" placeholder="New Price" id="edit_inventory_Buy_price'+i+'" style="background: #d6338400;border:1px solid #ffffff99""></div>'+
'          <div class="flex-div middle" id="edit_inventory_Buy_price_cal">'+a.buy_price[e][i]+'</div> '+
'        </div>'+
'      </div>'+

'      <div class="card">'+
'        <div class="middle">GST </div><hr>'+
'        <div class="flex">'+
'          <div class="flex-div"><input class="input" type="number" placeholder="New GST" id="edit_inventory_Gst'+i+'" style="background: #d6338400;border:1px solid #ffffff99"></div>'+
'          <div class="flex-div middle" id="edit_inventory_Gst_cal">'+a.gst[e]+'</div> '+
'        </div>'+
'      </div>'+
'    </div>';
  }
document.getElementById("edit_inventory_Size_div").innerHTML=temp;
offcanvas1_Open('.edit_inventory','left');
}

/*
let inventory_edit={  
    inventory:{product_id:0,product:"",size:"",quantity:0,price:0,buy_price:0,gst:0},
    update:{slno:0,date:date,product_id:0,product:"",size:"",
            new_price:"null",new_quantity:"null",new_gst:"null",new_buy_price:"null",
            old_price:"null",old_quantity:"null",old_gst:"null",old_buy_price:"null"},
    do:"edit_inventory"
}
*/
let inventory_edit={  
    inventory:{product_id:0,product:"",size:""},
    update:{slno:0,date:date,product_id:0,product:"",size:"",
            new_price:"null",new_quantity:"null",new_gst:"null",new_buy_price:"null",
            old_price:"null",old_quantity:"null",old_gst:"null",old_buy_price:"null"},
    do:"edit_inventory"
}

function Inventory_Edit_Confirm()
{
if(document.getElementById("Inventory_Edit_Confirm").value==101)
{
  let temp=a.product_id.indexOf(document.getElementById("edit_inventory_Product_id").innerHTML)
  for(i=0;i<a.size[temp].length;i++)
  {
    inventory_edit.inventory.product_id=a.product_id[temp];
    inventory_edit.inventory.product=a.product[temp];
    inventory_edit.update.product=inventory_edit.inventory.product;
    inventory_edit.update.product_id=inventory_edit.inventory.product_id;
    inventory_edit.inventory.size="'"+document.getElementById("edit_inventory_size"+i).innerHTML+"'";
    inventory_edit.update.size=a.size[temp][i];
    inventory_edit.update.slno=c.date.length+1+i;
    if(document.getElementById("edit_inventory_Quantity"+i).value!="")
    {
      inventory_edit.inventory.quantity=document.getElementById("edit_inventory_Quantity"+i).value;
      inventory_edit.update.new_quantity=inventory_edit.inventory.quantity
      inventory_edit.update.old_quantity=a.quantity[temp][i];
    }
    if(document.getElementById("edit_inventory_Price"+i).value!="")
    {
      inventory_edit.inventory.price=document.getElementById("edit_inventory_Price"+i).value;
      inventory_edit.update.new_price=inventory_edit.inventory.price
      inventory_edit.update.old_price=a.price[temp][i];
    }
    if(document.getElementById("edit_inventory_Buy_price"+i).value!="")
    {
      inventory_edit.inventory.buy_price= document.getElementById("edit_inventory_Buy_price"+i).value;
      inventory_edit.update.new_buy_price=inventory_edit.inventory.buy_price
      inventory_edit.update.old_buy_price=a.buy_price[temp][i];
    }
    if(document.getElementById("edit_inventory_Gst"+i).value!="")
    {
      inventory_edit.inventory.gst= document.getElementById("edit_inventory_Gst"+i).value;
      inventory_edit.update.new_gst=inventory_edit.inventory.gst
      inventory_edit.update.old_gst=a.gst[temp];
    }
  
    if(Object.keys(inventory_edit.inventory).length>3)
    {
    console.log(inventory_edit)          
    inventory_edit=JSON.stringify(inventory_edit)
    sendPHP(inventory_edit);
    console.log(response) 
    }
  
    inventory_edit={
      inventory:{product_id:0,product:"",size:""},
      update:{slno:0,date:date,product_id:0,product:"",size:"",
                new_price:"null",new_quantity:"null",new_gst:"null",new_buy_price:"null",
                old_price:"null",old_quantity:"null",old_gst:"null",old_buy_price:"null"},
      do:"edit_inventory"
      };
  }
}
else{
  alert("wrong password")
}
}














function Sell_Checkbox()
{
  if(document.getElementById('checkbox').checked==true)
  {
    document.getElementById('Name').disabled=true
    document.getElementById('Phone').disabled=true
    document.getElementById('Name').value="NONE";
  }
  else{
    document.getElementById('Name').disabled=false
    document.getElementById('Phone').disabled=false;
    document.getElementById('Name').value="";
  }

}



function Sell_Next(){
  Sell_Checkbox()
  if(document.getElementById('Name').value=="")
  {
    alert("Please Enter Name");
  }
  else if(document.getElementById('Name').value=="NONE")
  {
    sell.sells.name="NONE"
  }
  else{
    sell.sells.name=document.getElementById('Name').value
  }

  if(document.getElementById('Phone').value=="")
  {
    sell.sells.mobile="'NONE'"
  }
  else{
    sell.sells.mobile=document.getElementById('Phone').value
  }

  if(document.getElementById('Name').value !="")
  {
    offcanvas1_Open('.sell-confirm','sell-confirm');
    offcanvas1_Close('.sell','sell');
  }
  console.log(sell.sells)
}

function Sell_Next1(){
document.getElementById('Sell-confirm-Verify').style.display="none"
}

function Sell_Loading()
{
  document.getElementById("Sell-confirm-Loading").style.display="none";
  document.getElementById("Sell-confirm-Sold").style.display="block";
  document.getElementById("sell-confirm-close").style.display="none";
}
















let add_product={'slno':0,'product_id':0,'product':"",'size':"",'quantity':0,'price':0,'buy_price':0,
                  'barcode':0,'discount':0,'gst':0,'do':"add_product",'date':date
                }
function Inventory_Add_Confirm(){
  if(document.getElementById('Add_Product_Confirm').value==101)
  {
    if(document.getElementById('Add_Product_Name').value=="" || document.getElementById('Add_Size').value=="")
    {
      alert('Please Fill All details')
    }
    else{
      add_product.slno=a.product.length+1;
      add_product.product_id=Number(a.product_id[a.product_id.length-1])+1
      add_product.slno_inventory_price=a.product.length+1;
      add_product.product=document.getElementById('Add_Product_Name').value.trim().toUpperCase();
      add_product.size=document.getElementById('Add_Size').value.trim().toUpperCase();
      add_product.quantity=document.getElementById('Add_Quantity').value.trim();
      add_product.price=document.getElementById('Add_Price').value.trim();
      add_product.buy_price=document.getElementById('Add_Buy_Price').value.trim();
      add_product.discount=document.getElementById('Add_Discount').value.trim();
      add_product.gst=document.getElementById('Add_GST').value.trim();
      add_product=JSON.stringify(add_product)
      sendPHP(add_product)
    }
  }
  else{
    alert('wrong password')
  }
  console.log(add_product)
  console.log(response)
}






let sell={
    // sells:{name:"",phone:"",payment:"",shipping:"",shipping_address:""},
    sells:{slno:0,bill_id:0,date:date,name:"",mobile:0,payment:"",delivery:"",delivery_address:"",total:0,profit:0,
           product_id:[],product:[],size:[],price:[],quantity:[],total_item:[],discount:[],gst:[],profit_item:[]
          },
    inventory:{product_id:[],size:[],quantity:[]},
    profit_cal:{date:date,month:"",daily:{sells:0,profit:0},monthly:{sells:0,profit:0}},
    do:'sells'
}
function Add_to_Cart(){
let table=document.getElementById("Cart")
 var row = table.insertRow();
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
  row.insertCell(3);
  row.insertCell(4);
  row.insertCell(5);
  row.insertCell(6);
  row.insertCell(7);
  row.insertCell(8);

  row.cells[0].innerHTML=document.getElementById("Cart").rows.length - 1 ;
  row.cells[1].innerHTML=document.getElementById("inventory-search-Product").innerHTML;

  let temp=document.getElementsByName('size')
  for(i=0;i<temp.length;i++)
  { if(temp[i].checked == true)
    {
      row.cells[2].innerHTML= temp[i].value;
      temp=i;
      break;
    }
  }
  row.cells[3].innerHTML=document.getElementById("inventory-search-Price").innerHTML;
  row.cells[4].innerHTML=document.getElementById("inventory-search-Quantity").value;
  row.cells[5].innerHTML=document.getElementById("inventory-search-Discount_cal").innerHTML;
  row.cells[6].innerHTML=document.getElementById('inventory-search-Gst_cal').innerHTML;
  row.cells[7].innerHTML=document.getElementById('inventory-search-Total').innerHTML;
  row.cells[8].innerHTML='<span onclick="deleteRow(this)"><i class="bi bi-trash3"></i></span>';

  sell.sells.product.push(row.cells[1].innerHTML);
  sell.sells.size.push(row.cells[2].innerHTML);
  sell.sells.price.push(row.cells[3].innerHTML);
  sell.sells.quantity.push(row.cells[4].innerHTML);
  sell.sells.discount.push(row.cells[5].innerHTML);
  sell.sells.gst.push(row.cells[6].innerHTML);
  sell.sells.total_item.push(row.cells[7].innerHTML);
  // temp=a.buy_price[a.product.indexOf('BACK BELT')][temp]
  temp=Number(row.cells[7].innerHTML)-Number(a.buy_price[a.product.indexOf(row.cells[1].innerHTML)][temp])
  sell.sells.profit_item.push(temp);
  sell.sells.product_id.push(a.product_id[a.product.indexOf(row.cells[1].innerHTML)])
  console.log(sell);

  offcanvas1_Close('.inventory-search','inventory-search');

  document.getElementById("inventory-search-Quantity").value= 1;
  document.getElementById("inventory-search-Discount").value=0;
  document.getElementById('inventory-search-Gst').value=0;
  document.getElementById("Product_Search_Input").value="";

  Add_to_Cart_Cal();
}


function Confirm(){
sell.sells.slno=b.bill_id.length;
sell.sells.bill_id=Number(b.bill_id[b.bill_id.length-1])+1;
sell.sells.name=document.getElementById('Name').value;
if(sell.sells.name=="")
{
  sell.sells.name="NONE"
}

sell.sells.mobile=document.getElementById('Phone').value;
if(sell.sells.mobile=="")
{
  sell.sells.mobile="NONE"
}

if(document.getElementById('Payment_mode_Cash').checked)
{
  sell.sells.payment="CASH";
}
else if(document.getElementById('Payment_mode_UPI').checked){
  sell.sells.payment="UPI";
}
if(document.getElementById('Shipping_mode_Store').checked)
{
  sell.sells.delivery="STORE";
}
else if(document.getElementById('Shipping_mode_Delivery').checked){
  sell.sells.delivery="DELIVERY";
  sell.sells.delivery_address=document.getElementById('Shipping_Address').value;
}
for(i=0;i<sell.sells.total_item.length;i++)
{
  sell.sells.total+=Number(sell.sells.total_item[i])
  sell.sells.profit+=Number(sell.sells.profit_item[i])
}
sell.inventory.product_id=sell.sells.product_id;
sell.inventory.product=sell.sells.product;
sell.inventory.size=sell.sells.size;
sell.inventory.quantity=sell.sells.quantity;
sell.profit_cal.month=months[d.getMonth()]
sell.profit_cal.daily.sells=Number(profit_daily.sells[today_ptr])+ Number(sell.sells.total);
sell.profit_cal.daily.profit=Number(profit_daily.profit[today_ptr]) + Number(sell.sells.profit);
sell.profit_cal.monthly.sells=Number(profit_monthly.sells[months_ptr]) + Number(sell.sells.total);
sell.profit_cal.monthly.profit=Number(profit_monthly.profit[months_ptr]) + Number(sell.sells.profit);
sell=JSON.stringify(sell)
sendPHP(sell)
console.log(response)
}












function Add_to_Cart_Cal()
{
  let table=document.getElementById("Cart")
  let temp_subtotal=0;
  let temp_discount=0;
  let temp_gst=0;
  let temp_total=0;

  for(i=1;i<table.rows.length;i++)
  { table.rows[i].cells[0].innerHTML=i;
    temp_subtotal += Number(table.rows[i].cells[3].innerHTML) * Number(table.rows[i].cells[4].innerHTML);
    temp_discount += Number(table.rows[i].cells[5].innerHTML);
    temp_gst += Number(table.rows[i].cells[6].innerHTML);
    temp_total += Number(table.rows[i].cells[7].innerHTML);
  }

document.getElementById("cart-order-Subtotal").innerHTML=temp_subtotal;
document.getElementById("cart-order-Discount").innerHTML=temp_discount;
document.getElementById("cart-order-gst").innerHTML=temp_gst;
document.getElementById("cart-order-Total").innerHTML=temp_total;

}



function deleteRow(e){
  // alert("row="+e.parentNode.parentNode.rowIndex+"cells="+e.parentNode.cellIndex);

if(confirm("Are you Sure?\nYou want to delete this Row")==true)
{
  document.getElementById("Cart").deleteRow(e.parentNode.parentNode.rowIndex)
  sell.sells.product_id.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.product.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.size.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.price.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.quantity.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.total_item.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.discount.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.gst.splice((e.parentNode.parentNode.rowIndex)-1,1)
  sell.sells.profit_item.splice((e.parentNode.parentNode.rowIndex)-1,1)
  Add_to_Cart_Cal()
}
}




function Today()
{
 today_ptr=profit_daily.date.indexOf(date);
 months_ptr=profit_monthly.months.indexOf(months[d.getMonth()]);
}




















// overview
// let profit_daily
// let profit_monthly

let week={date:[],sells:[],profit:[]}
let month={date:[],sells:[],profit:[]}
let year={months:[],sells:[],profit:[]}
let top_Sold_Products={product:[0],amount:[0],quantity:[0],frequency:[0]}
let bar_chart={date:[],quantity:[],item:[]}


let regDate=/[0-9]+[/][A-Z]{3}/g  // 8/FEB
let regMonth=/[A-Z]+/g            //FEBRUARY
let regYear=/[A-Z]{3}/           // FEB 

let today_ptr=d.getDate();
let months_ptr=4;
// Chart_Line_Value('WEEK')
let x_line,y_line,z_line,x_pie,y_pie,x_bar,y_bar,z_bar;

function Chart_Line(e)
{
  if(e=='WEEK')
  {
    x_line= week.date;
    y_line= week.sells;
    z_line= week.profit; 
  }
  else if(e=='MONTH')
  {
    x_line= month.date;
    y_line= month.sells;
    z_line= month.profit;
  }
  else if(e=='YEAR')
  {
    x_line= year.months;
    y_line= year.sells;
    z_line= year.profit;
  }
  chart1();
}


function Chart_Line_Value(){
 for(i=today_ptr-8;i<today_ptr && i>=0;i++)
  {
    week.date.push(profit_daily.date[i].match(regDate).toString())
    week.sells.push(profit_daily.sells[i])
    week.profit.push(profit_daily.profit[i])
  }

  for(i=today_ptr-d.getDate();i<=today_ptr;i++)
  {
    month.date.push(profit_daily.date[i].match(regDate).toString())
    month.sells.push(profit_daily.sells[i])
    month.profit.push(profit_daily.profit[i])
  }

 for(i=0;i<=months_ptr;i++)
  {
    year.months.push(profit_monthly.months[i].match(regYear).toString());
    year.sells.push(profit_monthly.sells[i]);
    year.profit.push(profit_monthly.profit[i]);
  }
  Chart_Line('WEEK');
}


function Top_Sold_Products(){
for(i=b.bill_id.length-1;i>=b.bill_id.length-21 && i>=0;i--)
{
  for(j=0;j<b.product[i].length;j++)
  { for(k=0;k<top_Sold_Products.product.length;k++)
    { if(top_Sold_Products.product[k]==b.product[i][j])
      {
        top_Sold_Products.amount[k] += Number(b.total_item[i][j])
        top_Sold_Products.quantity[k] += Number(b.quantity[i][j])
        top_Sold_Products.frequency[k] += 1;
        break;
      }
      else if(k==top_Sold_Products.product.length-1){
        top_Sold_Products.product.push(b.product[i][j])
        top_Sold_Products.amount.push(Number(b.total_item[i][j]));
        top_Sold_Products.quantity.push(Number(b.quantity[i][j]));
        top_Sold_Products.frequency.push(1);
        break;
      }
    }
  }
}
top_Sold_Products.product.splice(0,1)
top_Sold_Products.amount.splice(0,1)
top_Sold_Products.quantity.splice(0,1)
top_Sold_Products.frequency.splice(0,1)

//sort frequency decending order
for(i=0;i<top_Sold_Products.product.length;i++)
{
  for(j=0;j<top_Sold_Products.product.length-1;j++)
  {
    if(top_Sold_Products.frequency[j]<top_Sold_Products.frequency[j+1])
    { 
      [top_Sold_Products.product[j],top_Sold_Products.product[j+1]] = [top_Sold_Products.product[j+1],top_Sold_Products.product[j]];
      [top_Sold_Products.amount[j],top_Sold_Products.amount[j+1]] = [top_Sold_Products.amount[j+1],top_Sold_Products.amount[j]];
      [top_Sold_Products.quantity[j],top_Sold_Products.quantity[j+1]] = [top_Sold_Products.quantity[j+1],top_Sold_Products.quantity[j]];
      [top_Sold_Products.frequency[j],top_Sold_Products.frequency[j+1]] = [top_Sold_Products.frequency[j+1],top_Sold_Products.frequency[j]];
    }
  }
}

x_pie=top_Sold_Products.product;
y_pie=top_Sold_Products.amount;
chart2();
Top_Sold_Products_value(); // Top_Sold_Products_value chart
}


function Chart_Bar(){
for(i=today_ptr-d.getDate();i<=today_ptr;i++)
{ 
  bar_chart.date.push(profit_daily.date[i].match(regDate).toString());
  bar_chart.quantity.push(0);
  bar_chart.item.push(0);
}
for(i=b.date.length-1;i>=0;i--)
{
  for(j=0;j<bar_chart.date.length;j++)
  {
    if(b.date[i].match(regDate).toString()==bar_chart.date[j])
    { 
      for(k=0;k<b.quantity[i].length;k++)
      {
        bar_chart.quantity[j]+=Number(b.quantity[i][k])
      }
      bar_chart.item[j]+=b.product[i].length;
    }
  }
}

x_bar=bar_chart.date;
y_bar=bar_chart.quantity;
z_bar=bar_chart.item;
chart3();
}

function Load_All_Chart()
{ Today()
  Overview_values()
  Chart_Line_Value()
  Top_Sold_Products()
  Chart_Bar()
  Apriori()
  K_means_value()
}





// apriori

let apriori={table1:{itemset:[],count:[]},table2:{itemset:[],count:[]},table3:{itemset:[],count:[]},
confidence:{item_2:{rule:[],item:[],con:[]},item_3:{rule:[],item:[],con:[]},}, 
min:{min_supp:0,min_con:50},
}

function Apriori(){
// table1
if(b.bill_id.length<20)
{
  apriori.min.min_supp=b.bill_id.length * 10/100 //10% min support
}
else{
  priori.min.min_supp= 20* 10/100 //10% min support
}

// table 1
for(i=b.bill_id.length-1;i>=b.bill_id.length-21 && i>=0;i--)
{
  for(j=0;j<b.product[i].length;j++)
  {
    if(apriori.table1.itemset.includes(b.product[i][j]))
    {
      let temp=apriori.table1.itemset.indexOf((b.product[i][j]));
      apriori.table1.count[temp]+=1;
    }
    else{
      apriori.table1.itemset.push(b.product[i][j])
      apriori.table1.count.push(1)
    }
  }
}

//prune
for(i=0;i<apriori.table1.count.length;)
{
  if(apriori.table1.count[i]<apriori.min.min_supp)
  {
    apriori.table1.itemset.splice(i,1)
    apriori.table1.count.splice(i,1)
  }
  else{
    i++;
  }
}

// table2
let temp=[];
for(i=0;i<apriori.table1.itemset.length-1;i++)
{
  for(j=i+1;j<apriori.table1.itemset.length;j++)
  {
    temp.push(apriori.table1.itemset[i]);
    temp.push(apriori.table1.itemset[j]);
    apriori.table2.itemset.push(temp);
    apriori.table2.count.push(0)
    temp=[];
  }
}

for(i=0;i<apriori.table2.itemset.length;i++)
{
  for(j=b.product.length-1;j>=0;j--)
  {
    if(b.product[j].includes(apriori.table2.itemset[i][0]) && b.product[j].includes(apriori.table2.itemset[i][1]))
    {
      apriori.table2.count[i]+=1;
    }
  }  
}

//prune
for(i=0;i<apriori.table2.count.length;)
{
  if(apriori.table2.count[i]<apriori.min.min_supp)
  {
    apriori.table2.itemset.splice(i,1)
    apriori.table2.count.splice(i,1)
  }
  else{
    i++;
  }
}


// table3
temp=[];
for(i=0;i<apriori.table2.itemset.length-1;i++)
{
  for(j=1+i;j<apriori.table2.itemset.length;j++)
  {
    if(apriori.table2.itemset[i][0] == apriori.table2.itemset[j][0])
    {
      temp=apriori.table2.itemset[i].concat(apriori.table2.itemset[j])
      temp=[...new Set(temp)];
      apriori.table3.itemset.push(temp);
      apriori.table3.count.push(0);
    }
  }
}

for(i=0;i<apriori.table3.itemset.length;i++)
{
  for(j=0;j<b.bill_id.length;j++)
  {
    if(b.product[j].includes(apriori.table3.itemset[i][0]) && b.product[j].includes(apriori.table3.itemset[i][1]) && b.product[j].includes(apriori.table3.itemset[i][2]))
    {
      apriori.table3.count[i]+=1;
    }
  }
}

//prune
for(i=0;i<apriori.table3.count.length;)
{
  if(apriori.table3.count[i]<apriori.min.min_supp)
  {
    apriori.table3.itemset.splice(i,1)
    apriori.table3.count.splice(i,1)
  }
  else{
    i++;
  }
}


// confidence 3 itemset
let temp_con={rule:[],item:"",con:0};
for(i=0;i<apriori.table3.itemset.length;i++)
{ 
  temp_con={rule:[],item:"",con:0};
  temp_con.rule.push(apriori.table3.itemset[i][0])
  temp_con.rule.push(apriori.table3.itemset[i][1])
  temp_con.item=  apriori.table3.itemset[i][2];
  for(j=0;j<apriori.table2.itemset.length;j++)
  {
    if(apriori.table2.itemset[j].includes(temp_con.rule[0]) && apriori.table2.itemset[j].includes(temp_con.rule[1]))
    {
      temp_con.con= apriori.table3.count[i] / apriori.table2.count[j] * 100;
    }
  }
  if(temp_con.con >= apriori.min.min_con)
  {
    apriori.confidence.item_3.rule.push(temp_con.rule);
    apriori.confidence.item_3.item=temp_con.item;
    apriori.confidence.item_3.con=temp_con.con;
  }


  temp_con={rule:[],item:"",con:0};
  temp_con.rule.push(apriori.table3.itemset[i][0])
  temp_con.rule.push(apriori.table3.itemset[i][2])
  temp_con.item=  apriori.table3.itemset[i][1];
  for(j=0;j<apriori.table2.itemset.length;j++)
  {
    if(apriori.table2.itemset[j].includes(temp_con.rule[0]) && apriori.table2.itemset[j].includes(temp_con.rule[1]))
    {
      temp_con.con= apriori.table3.count[i] / apriori.table2.count[j] * 100;
    }
  }
  if(temp_con.con >= apriori.min.min_con)
  {
    apriori.confidence.item_3.rule.push(temp_con.rule);
    apriori.confidence.item_3.item.push(temp_con.item);
    apriori.confidence.item_3.con.push(temp_con.con);
  }

  temp_con={rule:[],item:"",con:0};
  temp_con.rule.push(apriori.table3.itemset[i][1])
  temp_con.rule.push(apriori.table3.itemset[i][2])
  temp_con.item=  apriori.table3.itemset[i][0];
  for(j=0;j<apriori.table2.itemset.length;j++)
  {
    if(apriori.table2.itemset[j].includes(temp_con.rule[0]) && apriori.table2.itemset[j].includes(temp_con.rule[1]))
    {
      temp_con.con= apriori.table3.count[i] / apriori.table2.count[j] * 100;
    }
  }
  if(temp_con.con >= apriori.min.min_con)
  {
    apriori.confidence.item_3.rule.push(temp_con.rule);
    apriori.confidence.item_3.item.push(temp_con.item);
    apriori.confidence.item_3.con.push(temp_con.con);
  }
}

// // min confidence 
// for(i=0;i<apriori.confidence.item_3.con.length;)
// {
//   if(apriori.confidence.item_3.con[i]<apriori.min.min_con)
//   {
//     apriori.confidence.item_3.con.splice(i,1)
//     apriori.confidence.item_3.item.splice(i,1)
//     apriori.confidence.item_3.rule.splice(i,1)
//   }
//   else{
//     i++;
//   }
// }

//sort the array
for(i=0;i<apriori.confidence.item_3.con.length;i++)
{
  for(j=0;j<apriori.confidence.item_3.con.length-1;j++)
  {
    if(apriori.confidence.item_3.con[j]<apriori.confidence.item_3.con[j+1])
    { 
      [apriori.confidence.item_3.rule[j],apriori.confidence.item_3.rule[j+1]] = [apriori.confidence.item_3.rule[j+1],apriori.confidence.item_3.rule[j]];
      [apriori.confidence.item_3.item[j],apriori.confidence.item_3.item[j+1]] = [apriori.confidence.item_3.item[j+1],apriori.confidence.item_3.item[j]];
      [apriori.confidence.item_3.con[j],apriori.confidence.item_3.con[j+1]] = [apriori.confidence.item_3.con[j+1],apriori.confidence.item_3.con[j]];
    }
  }
}

// confidence 2 itemset
// let temp_con={rule:"",item:"",con:0};
for(i=0;i<apriori.table2.itemset.length;i++)
{
  temp_con={rule:"",item:"",con:0};
  temp_con.rule=apriori.table2.itemset[i][0];
  temp_con.item=apriori.table2.itemset[i][1];
  j=apriori.table1.itemset.indexOf(apriori.table2.itemset[i][0])
  temp_con.con=Math.ceil(apriori.table2.count[i] / apriori.table1.count[j] * 100)
  if(apriori.min.min_con<temp_con.con)
  {
    apriori.confidence.item_2.rule.push(temp_con.rule);
    apriori.confidence.item_2.item.push(temp_con.item);
    apriori.confidence.item_2.con .push(temp_con.con);
  }

  temp_con={rule:"",item:"",con:0};
  temp_con.rule=apriori.table2.itemset[i][1];
  temp_con.item=apriori.table2.itemset[i][0];
  j=apriori.table1.itemset.indexOf(apriori.table2.itemset[i][1])
  temp_con.con=Math.ceil(apriori.table2.count[i] / apriori.table1.count[j] * 100)
  if(temp_con.con >= apriori.min.min_con)
  {
    apriori.confidence.item_2.rule.push(temp_con.rule);
    apriori.confidence.item_2.item.push(temp_con.item);
    apriori.confidence.item_2.con .push(temp_con.con);
  }
}


Confidence_Value()
console.log(apriori);
}

function Confidence_Value()
{ 
  let temp='<div class="center heading2" style="margin-bottom:10px"> 3 itemsets </div>';
for(i=0;i<apriori.confidence.item_3.rule.length;i++)
{ temp+=
'<div class="flex" style="flex-wrap: nowrap;width: max-content;min-width:100%;">'+
' <div class="flex-div middle"><div class="middle item">'+apriori.confidence.item_3.rule[i][0]+'</div></div>'+
' <div class="flex-div middle"><div class="middle circle">+</div></div>'+
' <div class="flex-div middle"><div class="middle item">'+apriori.confidence.item_3.rule[i][1]+'</div></div>'+
' <div class="flex-div middle"><div class="middle circle">=></div></div>'+
' <div class="flex-div middle"><div class="middle item">'+apriori.confidence.item_3.item[i]+'</div></div>'+
' <div class="flex-div middle"><div class="middle circle">=</div></div>'+
' <div class="flex-div middle"><div class="middle item conn">'+apriori.confidence.item_3.con[i]+'%</div></div>'+
'</div>'
}
document.getElementById("Confidence_itemset3").innerHTML=temp;

temp='<div class="center heading2" style="margin-bottom:10px"> 2 itemsets </div>';
for(i=0;i<apriori.confidence.item_2.rule.length;i++)
{ temp+=
'<div class="flex" style="flex-wrap: nowrap;width: max-content;min-width:100%;">'+
' <div class="flex-div middle"><div class="middle item">'+apriori.confidence.item_2.rule[i]+'</div></div>'+
' <div class="flex-div middle"><div class="middle circle">=></div></div>'+
' <div class="flex-div middle"><div class="middle item">'+apriori.confidence.item_2.item[i]+'</div></div>'+
' <div class="flex-div middle"><div class="middle circle">=</div></div>'+
' <div class="flex-div middle"><div class="middle item conn">'+apriori.confidence.item_2.con[i]+'%</div></div>'+
'</div>'
}
document.getElementById("Confidence_itemset2").innerHTML=temp;
}


function Top_Sold_Products_value()
{ let temp=document.getElementById("Top_Sold_Products_value").innerHTML;
for(i=0;i<top_Sold_Products.product.length;i++)
{temp+=
'<div style="width: 80%; padding: 0 5vw;"><hr></div>'+
'<div class="flex" style="flex-wrap: nowrap;width: max-content;min-width:100%;">'+
'  <div class="flex-div middle"><div class="product">'+top_Sold_Products.product[i]+'</div></div>'+
'  <div class="flex-div middle"><div class="middle quantity">'+top_Sold_Products.quantity[i]+'</div></div>'+
'  <div class="flex-div middle"><div class="middle frequency">'+top_Sold_Products.frequency[i]+'</div></div>'+
'</div>'
}
document.getElementById("Top_Sold_Products_value").innerHTML=temp;
}

let overview_values={ 
  today:{sells:{amount:0,percentage:0},profit:{amount:0,percentage:0} },
  week: {sells:{amount:0,percentage:0},profit:{amount:0,percentage:0} },
  month:{sells:{amount:0,percentage:0},profit:{amount:0,percentage:0} } }

function Overview_values()
{ //today
  overview_values.today.sells.amount= profit_daily.sells[today_ptr];
  overview_values.today.sells.percentage= Math.ceil(profit_daily.sells[today_ptr] /profit_daily.sells[today_ptr-1] *100);
  overview_values.today.profit.amount= profit_daily.profit[today_ptr];
  overview_values.today.profit.percentage= Math.ceil(profit_daily.profit[today_ptr] /profit_daily.profit[today_ptr-1] *100);
  if(Number(overview_values.today.sells.amount)==0)
  {
    overview_values.today.sells.percentage=profit_daily.sells[today_ptr]
  }
  if(profit_daily.sells[today_ptr]>=profit_daily.sells[today_ptr-1]){
    document.getElementById('Overview_today_Sells_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+ overview_values.today.sells.percentage+'%';
  }
  else{
    document.getElementById('Overview_today_Sells_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+ overview_values.today.sells.percentage+'%';
  }

  if(Number(overview_values.today.profit.amount)==0)
  {
    overview_values.today.profit.percentage=profit_daily.profit[today_ptr]
  }
  if(profit_daily.profit[today_ptr]>=profit_daily.profit[today_ptr-1]){
    document.getElementById('Overview_today_Profit_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+ overview_values.today.profit.percentage+'%';
  }
  else{
    document.getElementById('Overview_today_Profit_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+ overview_values.today.profit.percentage+'%';
  }



  document.getElementById('Overview_today_Sells').innerHTML= overview_values.today.sells.amount;
  document.getElementById('Overview_today_Profit').innerHTML=overview_values.today.profit.amount;


//week
  let temp={sells:0,profit:0}
  for(i=today_ptr;i>today_ptr-8 && i>=0;i--)
  { 
    overview_values.week.sells.amount+= Number(profit_daily.sells[i])
    overview_values.week.profit.amount+= Number(profit_daily.profit[i])
  }
  for(i=today_ptr-8;i>today_ptr-8-8 && i>=0;i--)
  { 
    temp.sells+= Number(profit_daily.sells[i])
    temp.profit+= Number(profit_daily.profit[i])
  }

  overview_values.week.sells.percentage=Math.ceil(overview_values.week.sells.amount / temp.sells *100) ;
  overview_values.week.profit.percentage=Math.ceil(overview_values.week.profit.amount / temp.profit *100) ;
  document.getElementById('Overview_week_Sells').innerHTML= overview_values.week.sells.amount;
  document.getElementById('Overview_week_Profit').innerHTML=overview_values.week.profit.amount;
  if(Number(temp.sells)==0)
  {
    overview_values.week.sells.percentage=overview_values.week.sells.amount;
  }
  if(overview_values.week.sells.amount>=temp.sells){
    document.getElementById('Overview_week_Sells_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+overview_values.week.sells.percentage+'%';
  }
  else{
    document.getElementById('Overview_week_Sells_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+overview_values.week.sells.percentage+'%';
  }

  if(Number(temp.profit)==0)
  {
    overview_values.week.profit.percentage=overview_values.week.profit.amount;
  }
  if(overview_values.week.profit.amount>=temp.profit){
    document.getElementById('Overview_week_Profit_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+overview_values.week.profit.percentage+'%';
  }
  else{
    document.getElementById('Overview_week_Profit_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+overview_values.week.profit.percentage+'%';
  }

//month
  overview_values.month.sells.amount=profit_monthly.sells[months_ptr];
  overview_values.month.profit.amount=profit_monthly.profit[months_ptr];
  document.getElementById('Overview_month_Sells').innerHTML= overview_values.month.sells.amount;
  document.getElementById('Overview_month_Profit').innerHTML=overview_values.month.profit.amount;
    overview_values.month.sells.percentage=Math.ceil((profit_monthly.sells[months_ptr] - profit_monthly.sells[months_ptr-1]) / profit_monthly.sells[months_ptr-1] * 100);
if(Number(profit_monthly.sells[months_ptr-1])==0)
{
  overview_values.month.sells.percentage=profit_monthly.sells[months_ptr];
}
if(Number(profit_monthly.sells[months_ptr])>=Number(profit_monthly.sells[months_ptr-1])){
  document.getElementById('Overview_month_Sells_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+overview_values.month.sells.percentage+'%';
}
else{
  document.getElementById('Overview_month_Sells_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+overview_values.month.sells.percentage+'%';
} 

    overview_values.month.profit.percentage=Math.ceil((profit_monthly.profit[months_ptr] - profit_monthly.profit[months_ptr-1]) / profit_monthly.profit[months_ptr-1] * 100);
if(Number(profit_monthly.profit[months_ptr-1])==0){
  overview_values.month.profit.percentage=profit_monthly.profit[months_ptr];
}
if(Number(profit_monthly.profit[months_ptr])>=Number(profit_monthly.profit[months_ptr-1])){
  document.getElementById('Overview_month_Profit_per').innerHTML='<i class="bi bi-caret-up-fill" style="margin-right:10px;color:#00ff00"></i>'+overview_values.month.profit.percentage+'%';
}
else{
  document.getElementById('Overview_month_Profit_per').innerHTML='<i class="bi bi-caret-down-fill" style="margin-right:10px;color:#ff0000"></i>'+overview_values.month.profit.percentage+'%';
} 
  document.getElementById('Overview-Detail-Week').innerHTML=weeks[d.getMonth()];
}
















function chart1()
{
var options = {
chart: { type: 'area', zoom: { enabled: false },toolbar:{show:false},height:250,width:'100%',foreColor:'#ffffff', },
grid:{show:false,  },
series: [{name: 'sales',data: y_line,colors:'red'},{name: 'profit',data: z_line,},],
xaxis: {categories: x_line,},
colors:['#ff0000','#007086'],
dataLabels: { enabled: false },
stroke: { curve: 'straight' },
legend: { position: 'top', horizontalAlign: 'right',},
tooltip:{enabled:true,z:{show:false,} }
}
var chart1 = new ApexCharts(document.getElementById("Chart1"), options);
chart1.render();
chart1.update();
}


function chart2()
{
var options = {
chart: { type: 'donut',height:'100%',width:'100%',foreColor:'#ffffff', },
series:y_pie,
labels:x_pie,
stroke:{colors:undefined},
responsive:[{breakpoint:480,options:{chart:{width:'100%',height:300,},legend:{show:true,position:'bottom',height:50,}}}]
}
var chart2 = new ApexCharts(document.getElementById("Chart2"), options);
chart2.render(); 
chart2.update();
}


function chart3()
{
var options = {
chart: { type: 'bar', zoom: { enabled: false },toolbar:{show:false},height:'100%',width:'100%',foreColor:'#ffffff', },
grid:{show:false,  },
series: [{name: 'quantity ',data: y_bar,colors:'red'},{name: 'items ',data: z_bar,},],
xaxis: {categories: x_bar,},
colors:['#ff0000','#007086'],
dataLabels: { enabled: false },
stroke: { curve: 'straight' },
legend: { position: 'top', horizontalAlign: 'right' },
tooltip:{enabled:true,z:{show:false,} }
}
var chart3 = new ApexCharts(document.getElementById("Chart3"), options);
chart3.render();  
chart3.update();
}

function chart4(){
{
var options = {
chart: { type: 'scatter', zoom: { enabled: false },toolbar:{show:false},height:300,width:'100%',foreColor:'#ffffff', },
grid:{show:false,},
series: [{name: 'cluster 1',data: scatter_chart.chart_cluster1,},{name: 'cluster 2',data: scatter_chart.chart_cluster2,},],
// xaxis:{tickAmount:scatter_chart.chart_cluster_x,},
colors:["#ff0000",'#0d6efd',"#ffffff"],
dataLabels: { enabled: false },
stroke: { curve: 'straight' },
markers:{size:10,strokeWidth:0},
legend: { position: 'top', horizontalAlign: 'right',},
tooltip:{enabled:true,z:{show:false,} }
}
var chart4 = new ApexCharts(document.getElementById("Chart4"), options);
chart4.render();
chart4.update();
}
}


let scatter_chart={chart_cluster1:[],chart_cluster2:[],chart_cluster_x:0}
let kmeans_arr={
  total:[],
  item:[],
  // item:[1,2,3,4,5,6,7,8,9,10,11,12,13,50,51,52,53,54,55],
  // total:[15,15,16,19,19,20,20,21,22,28,35,40,41,42,43,44,60,61,65],
  k:2,c1:40,c2:41,
iteration1:{distance1:[],distance2:[],nearest_cluster:[]},
centroid1:0,centroid2:0,
avg:{avg_c1:{amount:0,item:0},avg_c2:{amount:0,item:0}}
}

function K_means_value()
{
for(i=b.total.length-1;i>=0 && i>=b.total.length-21;i--)
{
  kmeans_arr.total.push(Number(b.total[i]))
  kmeans_arr.item.push(b.product[i].length)
}

temp_arr=Math.floor(Math.random()*kmeans_arr.total.length);
kmeans_arr.c1=Number(kmeans_arr.total[temp_arr]);
temp_arr=Math.floor(Math.random()*kmeans_arr.total.length);
kmeans_arr.c2=Number(kmeans_arr.total[temp_arr]);
while(kmeans_arr.c1==kmeans_arr.c2)
{
  temp_arr=Math.floor(Math.random()*kmeans_arr.total.length);
  kmeans_arr.c2=Number(kmeans_arr.total[temp_arr]);
}
kmeans_arr.c2=Number(kmeans_arr.total[temp_arr]);
console.log()
console.log(kmeans_arr.c1,kmeans_arr.c2);
K_means()
}

function K_means(){
for(i=0;i<kmeans_arr.total.length;i++)
{ 
  kmeans_arr.iteration1.distance1.push(Math.abs(kmeans_arr.total[i]-kmeans_arr.c1));
  kmeans_arr.iteration1.distance2.push(Math.abs(kmeans_arr.total[i]-kmeans_arr.c2));
  if(kmeans_arr.iteration1.distance1[i]<=kmeans_arr.iteration1.distance2[i])
  {
    kmeans_arr.iteration1.nearest_cluster.push(1)
  }
  else{
    kmeans_arr.iteration1.nearest_cluster.push(2)
  }
}

let temp={count1:0,count2:0,sum1:0,sum2:0}
for(i=0;i<kmeans_arr.total.length;i++)
{
  if(kmeans_arr.iteration1.nearest_cluster[i]==1)
  {
    temp.count1++;
    temp.sum1+=Number(kmeans_arr.total[i])
  }
  else{
    temp.count2++;
    temp.sum2+=Number(kmeans_arr.total[i])
  }
}

if(kmeans_arr.centroid1 !=(temp.sum1/temp.count1).toFixed(2))
{
  kmeans_arr.centroid1=(temp.sum1/temp.count1).toFixed(2);
  kmeans_arr.centroid2=(temp.sum2/temp.count2).toFixed(2);
  kmeans_arr.c1=kmeans_arr.centroid1;
  kmeans_arr.c2=kmeans_arr.centroid2;
  kmeans_arr.iteration1.distance1=[]
  kmeans_arr.iteration1.distance2=[]
  kmeans_arr.iteration1.nearest_cluster=[]
  K_means();
}
else{
  for(i=0;i<kmeans_arr.iteration1.nearest_cluster.length;i++)
  {  
    temp=[]
    if(kmeans_arr.iteration1.nearest_cluster[i]==1)
    {
      temp.push(Number(kmeans_arr.total[i]));
      temp.push(Number(kmeans_arr.item[i]));
      scatter_chart.chart_cluster1.push(temp);
      kmeans_arr.avg.avg_c1.amount+=Number(kmeans_arr.total[i]);
      kmeans_arr.avg.avg_c1.item+=Number(kmeans_arr.item[i]);
    }
    else
    {
      temp.push(Number(kmeans_arr.total[i]));
      temp.push(Number(kmeans_arr.item[i]));
      scatter_chart.chart_cluster2.push(temp);
      kmeans_arr.avg.avg_c2.amount+=Number(kmeans_arr.total[i]);
      kmeans_arr.avg.avg_c2.item+=Number(kmeans_arr.item[i]);
    }
  }

  scatter_chart.chart_cluster_x=kmeans_arr.total.length
  console.log(scatter_chart) 
  chart4();
  temp="";
  temp+='<div>'+scatter_chart.chart_cluster1.length/scatter_chart.chart_cluster_x *100+'% people spend average of '+
        'RS '+(kmeans_arr.avg.avg_c1.amount/scatter_chart.chart_cluster1.length).toFixed(2)+' on Average of '+
        (kmeans_arr.avg.avg_c1.item/scatter_chart.chart_cluster1.length).toFixed(2)+' items </div>'+
        '<hr>'+
        '<div>'+scatter_chart.chart_cluster2.length/scatter_chart.chart_cluster_x *100+'% people spend average of '+
        'RS '+(kmeans_arr.avg.avg_c2.amount/scatter_chart.chart_cluster2.length).toFixed(2)+' on Average of '+
        (kmeans_arr.avg.avg_c2.item/scatter_chart.chart_cluster2.length).toFixed(2)+' items </div>';

  document.getElementById("Cluster_details").innerHTML=temp;
}
console.log(kmeans_arr.c1,kmeans_arr.c2)
console.log(scatter_chart.chart_cluster1.length,scatter_chart.chart_cluster2.length)
}
// window.onload=K_means()








function onStartUp()
{ 
  try {
    LoadAllArray();
  } catch (error) {
    setTimeout(()=>{offcanvas1_Open('.error','top')},100)
  }
  Load_All_Chart(); 
}
window.onload= onStartUp();



// <!-- home/ product/ autocomplete -->

    // <!-- auto complete -->
    function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
/*An array containing all the country names in the world:*/
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
// autocomplete(document.getElementById("Product_Search_Input"),a.product);




// <!-- filter table-->
function filter_search(e,f) {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
      table = document.getElementById("Inventory_Table");
      tr = table.getElementsByTagName("tr");
  if(f==2)
  { filter = e.toUpperCase();
    document.getElementById("Filter_Search").value=filter
    for (i = 1; i < tr.length; i++) 
    { td = tr[i].getElementsByTagName("td")[f];
      if(td) 
      { txtValue = td.textContent || td.innerText;
        if(txtValue.indexOf(filter) > -1)
        { tr[i].style.display = "";
        } 
        else {
         tr[i].style.display = "none";
        }
      }
    }
  } 
  else{
    for(i = 1; i < tr.length; i++) 
      { td = tr[i].getElementsByTagName("td")[f];
      if(td) 
        { txtValue = td.textContent || td.innerText;
          if(Number(txtValue)==e) 
          { tr[i].style.display = "";
          } 
          else{
           tr[i].style.display = "none";
          }
        }
      }
   }
}