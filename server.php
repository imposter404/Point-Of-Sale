<?php

    // database
$db_username = ''; //username
$db_password = ''; //password
//path to database file
// $database_path =$_SERVER["DOCUMENT_ROOT"] ."/demo/project/database1.accdb";
$database_path =$_SERVER["DOCUMENT_ROOT"] ."/POS/database1.accdb";
// print $database_path;
//check file exist before we proceed
if (!file_exists($database_path)) {
    die("Access database file not found !");
}
// phpinfo();
//create a new PDO object
$database = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb, *.accdb)}; DBQ=$database_path; Uid=; Pwd=;");




$q=$_REQUEST['q'];
$r=json_decode($q);
$fn=$r->do;

if($fn=="a_read"){
    a_read();
 }
else if($fn=="b_read"){
    b_read();
}
else if($fn=="c_read"){
    c_read();
}
else if($fn=="profit_cal_daily"){
    profit_cal_daily();
}
else if($fn=="profit_cal_monthly"){
    profit_cal_monthly();
}
else if($fn=="add_product"){
    add_product();
}
else if($fn=="edit_inventory"){
    edit_inventory();
}
else if($fn=="sells"){
    sells();
}
else if($fn=="login"){
    login();
}
else if($fn=="pic"){
    pic();
}
else if($fn=="zero"){
    zero();
}


// $r=json_decode($q,true);
// unset($r["do"]);
// $keys=array_keys($r);
// $str_key="";
// for($i=0;$i<count($keys);$i++){
//  $str_key=$str_key.$keys[$i].',';
// }
// $str_key=rtrim("$str_key",',');



function pic()
{
    $dir="pic/profile/";
    $pic=scandir($dir);
    print_r(implode(",",$pic));
}





function a_read(){
    global $database;
$sql="SELECT Inventory.PRODUCT_ID, Inventory.PRODUCT, Inventory.BARCODE,Inventory.DISCOUNT, Inventory.GST
 FROM Inventory;";
$result = $database->query($sql);
class arr
{
    public $product_id = array();
    public $product = array();
    public $size = array();
    public $quantity = array();
    public $price = array();
    public $buy_price = array();
    public $discount = array();
    public $gst = array();
    public $barcode = array();
}
class temp
{
    public $size = array();
    public $quantity = array();
    public $price = array();
    public $buy_price = array();
}
$a_read=new arr();
while ($row = $result->fetch()) {
    array_push($a_read->product_id,$row["PRODUCT_ID"]);
    array_push($a_read->product,$row["PRODUCT"]);
    array_push($a_read->discount,$row["DISCOUNT"]);
    array_push($a_read->gst,$row["GST"]);
    array_push($a_read->barcode,$row["BARCODE"]);

$sqlp='SELECT Inventory.PRODUCT_ID, Inventory.PRODUCT, Inventory_Price.SIZE, Inventory_Price.QUANTITY, Inventory_Price.PRICE, Inventory_Price.BUY_PRICE
 FROM Inventory INNER JOIN Inventory_Price ON Inventory.PRODUCT_ID = Inventory_Price.PRODUCT_ID
 WHERE Inventory.PRODUCT_ID='.$row["PRODUCT_ID"].";";

$temp_arr=new temp();
$result1 = $database->query($sqlp);
    while ($row = $result1->fetch()) {
    
        array_push($temp_arr->size,$row["SIZE"]);
        array_push($temp_arr->quantity,$row["QUANTITY"]);
        array_push($temp_arr->price,$row["PRICE"]);
        array_push($temp_arr->buy_price,$row["BUY_PRICE"]);
    }
    array_push($a_read->size,$temp_arr->size);
    array_push($a_read->quantity,$temp_arr->quantity);
    array_push($a_read->price,$temp_arr->price);
    array_push($a_read->buy_price,$temp_arr->buy_price);
}
print_r(json_encode($a_read));
}






function b_read(){
global $database;

$sql="SELECT Sell_Records.BILL_ID, Sell_Records.DATE, Sell_Records.NAME, Sell_Records.MOBILE, Sell_Records.DELIVERY, Sell_Records.DELIVERY_ADDRESS, Sell_Records.PAYMENT, Sell_Records.TOTAL, Sell_Records.PROFIT
FROM Sell_Records;";
$result = $database->query($sql);

class arr
{
    public $bill_id=array();
    public $date=array();
    public $name=array();
    public $mobile=array();
    public $delivery=array();
    public $delivery_address=array();
    public $total=array();
    public $payment=array();
    public $profit=array();

    public $product=array();
    public $size=array();
    public $price=array();
    public $quantity=array();
    public $total_item=array();
    public $discount=array();
    public $gst=array();
    public $profit_item=array();
}
class temp
{
    public $product=array();
    public $size=array();
    public $price=array();
    public $quantity=array();
    public $total_item=array();
    public $discount=array();
    public $gst=array();
    public $profit_item=array();
}
$b_read=new arr();

while ($row = $result->fetch()) {
    array_push($b_read->bill_id,$row["BILL_ID"]);
    array_push($b_read->date,$row["DATE"]);
    array_push($b_read->name,$row["NAME"]);
    array_push($b_read->mobile,$row["MOBILE"]);
    array_push($b_read->delivery,$row["DELIVERY"]);
    array_push($b_read->delivery_address,$row["DELIVERY_ADDRESS"]);
    array_push($b_read->total,$row["TOTAL"]);
    array_push($b_read->payment,$row["PAYMENT"]);
    array_push($b_read->profit,$row["PROFIT"]);

$sql1='SELECT Sell_Bills.BILL_ID, Sell_Bills.PRODUCT,Sell_Bills.SIZE, Sell_Bills.PRICE, Sell_Bills.QUANTITY, Sell_Bills.TOTAL_ITEM, Sell_Bills.DISCOUNT, Sell_Bills.GST, Sell_Bills.PROFIT_ITEM
FROM Sell_Records INNER JOIN Sell_Bills ON Sell_Records.BILL_ID = Sell_Bills.BILL_ID
WHERE Sell_Records.BILL_ID='.$row["BILL_ID"].';';

$temp_arr=new temp();
$result1 = $database->query($sql1);
    while ($row = $result1->fetch()) { 
        array_push($temp_arr->product,$row["PRODUCT"]);
        array_push($temp_arr->size,$row["SIZE"]);
        array_push($temp_arr->price,$row["PRICE"]);
        array_push($temp_arr->quantity,$row["QUANTITY"]);
        array_push($temp_arr->total_item,$row["TOTAL_ITEM"]);
        array_push($temp_arr->discount,$row["DISCOUNT"]);
        array_push($temp_arr->gst,$row["GST"]);
        array_push($temp_arr->profit_item,$row["PROFIT_ITEM"]);
    }
    array_push($b_read->product,$temp_arr->product);
    array_push($b_read->size,$temp_arr->size);
    array_push($b_read->price,$temp_arr->price);
    array_push($b_read->quantity,$temp_arr->quantity);
    array_push($b_read->total_item,$temp_arr->total_item);
    array_push($b_read->discount,$temp_arr->discount);
    array_push($b_read->gst,$temp_arr->gst);
    array_push($b_read->profit_item,$temp_arr->profit_item);
}
print_r(json_encode($b_read));
}




function c_read(){
global $database; 
$sql='SELECT update_record.* FROM update_record;';
$result = $database->query($sql);

class arr
{
    public $product_id=array();
    public $product=array();
    public $size=array();
    public $new_price=array();
    public $new_quantity=array();
    public $new_gst=array();
    public $new_buy_price=array();
    public $old_price=array();
    public $old_quantity=array();
    public $old_gst=array();
    public $old_buy_price=array();
    public $date=array();
}
$c_read=new arr();

while ($row = $result->fetch()) {
    array_push($c_read->product_id,$row["PRODUCT_ID"]);
    array_push($c_read->product,$row["PRODUCT"]);
    array_push($c_read->size,$row["SIZE"]);
    array_push($c_read->new_price,$row["NEW_PRICE"]);
    array_push($c_read->new_quantity,$row["NEW_QUANTITY"]);
    array_push($c_read->new_gst,$row["NEW_GST"]);
    array_push($c_read->new_buy_price,$row["NEW_BUY_PRICE"]);
    array_push($c_read->old_price,$row["OLD_PRICE"]);
    array_push($c_read->old_quantity,$row["OLD_QUANTITY"]);
    array_push($c_read->old_gst,$row["OLD_GST"]);
    array_push($c_read->old_buy_price,$row["OLD_BUY_PRICE"]);
    array_push($c_read->date,$row["DATE"]);
}
print_r(json_encode($c_read));
}


// function abc(){
// global $database;
// // $sql='UPDATE Inventory SET Inventory.GST = 12 WHERE (((Inventory.[PRODUCT_ID])=100));';
// $sql="INSERT INTO Inventory ( [Sl no],PRODUCT_ID, PRODUCT ) VALUES (14,1011,'HI')";
// $result = $database->query($sql);
// echo 'done';
// }


function profit_cal_daily()
{
    global $database;

$sql='SELECT * FROM Profit_calculation_dates;';
$result = $database->query($sql);

class arr
{
    public $date=array();
    public $sells=array();
    public $profit=array();
}
$profit_cal_daily=new arr();
while ($row = $result->fetch()) {
    array_push($profit_cal_daily->date,$row["DATES"]);
    array_push($profit_cal_daily->sells,$row["SELLS"]);
    array_push($profit_cal_daily->profit,$row["PROFIT"]);
}
print_r(json_encode($profit_cal_daily));
}



function profit_cal_monthly()
{
    global $database;

$sql='SELECT MONTHS,SELLS,PROFIT FROM Profit_calculation_months;';
$result = $database->query($sql);
class arr
{
    public $months=array();
    public $sells=array();
    public $profit=array();
}
$profit_cal_monthly=new arr();

while ($row = $result->fetch()) {
    array_push($profit_cal_monthly->months,$row["MONTHS"]);
    array_push($profit_cal_monthly->sells,$row["SELLS"]);
    array_push($profit_cal_monthly->profit,$row["PROFIT"]);
}
print_r(json_encode($profit_cal_monthly));
}


function add_product(){
    global $database;
    global $r;
    $sql="INSERT INTO Inventory (SL_NO,PRODUCT_ID,PRODUCT,BARCODE,DISCOUNT,GST) 
    VALUES (".$r->slno.",".$r->product_id.",'".$r->product_name."',".$r->barcode.",".$r->discount.",".$r->gst.")";
    $result = $database->query($sql);
    print_r($sql);

    $sql="INSERT INTO Inventory_Price (PRODUCT_ID,SIZE,QUANTITY,PRICE,BUY_PRICE )
    VALUES (".$r->product_id.",'".$r->size."','".$r->quantity."',".$r->price.",".$r->buy_price.")";
    $result = $database->query($sql);
    echo 'done';

//new records to the update_records
$sql="INSERT INTO update_record ( SLNO, [DATE], PRODUCT_ID, PRODUCT, [SIZE], NEW_PRICE, NEW_QUANTITY, NEW_GST, NEW_BUY_PRICE, OLD_PRICE, OLD_QUANTITY, OLD_GST, OLD_BUY_PRICE )
VALUES (".$r->slno.",'".$r->date."',".$r->product_id.",'".$r->product."','".$r->size."',"
         .$r->price.",".$r->quantity.",".$r->gst.",".$r->buy_price.","
         ."0,0,0,0"
         .")";
// $result = $database->query($sql);
echo "done";
}


function edit_inventory()
{
// update the inventory and inventory price
    global $database;
    global $r;
    global $q;

    $r1=json_decode($q,true);
    unset($r1["do"]);
$sql="UPDATE Inventory_Price SET ";
if(array_key_exists('quantity',$r1['inventory']))
{
    $sql.="quantity=".$r->inventory->quantity." ,";

}
if(array_key_exists('price',$r1['inventory']))
{
    $sql.="price=".$r->inventory->price." ,";
}
if(array_key_exists('buy_price',$r1['inventory']))
{
    $sql.="buy_price=".$r->inventory->buy_price." ,";

}
$sql=rtrim($sql,",");
$sql.="WHERE (PRODUCT_ID=".$r->inventory->product_id." AND SIZE=".$r->inventory->size.");";
$result = $database->query($sql);
// print_r($sql);


if(array_key_exists('gst',$r1['inventory']))
{
$sql="UPDATE Inventory ";
$sql.="SET gst=".$r->inventory->gst." ";
$sql.="WHERE (PRODUCT_ID=".$r->inventory->product_id.")";
$result = $database->query($sql);
// print_r($sql);
}

//new records to the update_records
$sql="INSERT INTO update_record ( SLNO, [DATE], PRODUCT_ID, PRODUCT, [SIZE], NEW_PRICE, NEW_QUANTITY, NEW_GST, NEW_BUY_PRICE, OLD_PRICE, OLD_QUANTITY, OLD_GST, OLD_BUY_PRICE )
VALUES (".$r->update->slno.",'".$r->update->date."',".$r->update->product_id.",'".$r->update->product."','".$r->update->size."',"
         .$r->update->new_price.",".$r->update->new_quantity.",".$r->update->new_gst.",".$r->update->new_buy_price.","
         .$r->update->old_price.",".$r->update->old_quantity.",".$r->update->old_gst.",".$r->update->old_buy_price
         .")";

$result = $database->query($sql);
echo "done";
}


function sells()
{
    global $database;
    global $r;
    global $q;

$sql="INSERT INTO Sell_Records ( SLNO, BILL_ID, [DATE], NAME, MOBILE, DELIVERY, DELIVERY_ADDRESS, PAYMENT, TOTAL, PROFIT )
VALUES(".$r->sells->slno.",".$r->sells->bill_id.",'".$r->sells->date."','".$r->sells->name."',".$r->sells->mobile.",'".$r->sells->delivery."','".$r->sells->delivery_address."','".$r->sells->payment."',".$r->sells->total.",".$r->sells->profit.")";
// $result = $database->query($sql);
// print_r($sql);

for($i=0;$i<count($r->inventory->product);$i++)
{
    $sql="INSERT INTO Sell_Bills ( BILL_ID, PRODUCT, [SIZE], PRICE, QUANTITY, TOTAL_ITEM, DISCOUNT, GST, PROFIT_ITEM )
    VALUES(".$r->sells->bill_id.",'".$r->sells->product[$i]."','".$r->sells->size[$i]."',".$r->sells->price[$i].",".$r->sells->quantity[$i].",".$r->sells->total_item[$i].",".
    $r->sells->discount[$i].",".$r->sells->gst[$i].",".$r->sells->profit_item[$i].")";
// $result = $database->query($sql);

$sql="UPDATE Inventory_Price ";
$sql.="SET quantity=".$r->inventory->quantity[$i]." ";
$sql.="WHERE PRODUCT_ID=".$r->inventory->product_id[$i]."AND size='".$r->inventory->size[$i]."'";
// $result = $database->query($sql);
print_r($sql);
}


//update the Profit_calculation_dates
$sql="UPDATE Profit_calculation_dates ";
$sql.="SET SELLS=".$r->profit_cal->daily->sells.",PROFIT=".$r->profit_cal->daily->sells." ";
$sql.="WHERE [DATES]='".$r->profit_cal->date."'";
// $result = $database->query($sql);
// print_r($sql);

//update the Profit_calculation_months
$sql="UPDATE Profit_calculation_months ";
$sql.="SET SELLS=".$r->profit_cal->monthly->sells.",PROFIT=".$r->profit_cal->monthly->sells." ";
$sql.="WHERE MONTHS='".$r->profit_cal->date."'";
// $result = $database->query($sql);
// print_r($sql);
echo "done";

}

function login()
{
    global $database;
    global $r;
$sql="SELECT USER_ID,USER,[PASSWORD],PICTURE
      FROM Login
      WHERE USER_ID='".$r->user_id."'";
$result = $database->query($sql);

class arr
{
    public $user_id;
    public $user;
    public $password;
    public $picture;
    public $login;
}  
$login=new arr();
while ($row = $result->fetch()){
    $login->user_id=$row['USER_ID'];
    $login->user=$row['USER'];
    $login->password=$row['PASSWORD'];
    $login->picture=$row['PICTURE'];
}
if($login->user_id==null || $login->password ==null || $r->password != $login->password )
{
    $login->login="invalid";
}
else{
    $login->login="valid";
}
print_r(json_encode($login));
}






function zero()
{


}










// print_r ('{' . 
// ('"product_id":['.$a_product_id.']') .',<br>'.  ('"product":['.$a_product.']').',<br>'.
// ('"gst":['.$a_gst.']') .',<br>'.  ('"size":['.$a_size.']') .','.
// ('"quantity":['.$a_quantity.']') .',<br>'.  ('"price":['.$a_price.']') .',<br>'.
// ('"buy_price":['.$a_buy_price.']') .',<br>'.  ('"barcode":['.$a_barcode.']') .',<br>'.
// '}');

?>