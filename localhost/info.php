<?header ("Content-Type: text/html; charset=utf-8");?>
<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
$strSQL1="SELECT SUM(items.price*basket.count) AS final_price, SUM(basket.count) AS final_count FROM basket,items WHERE items.id = basket.book_id";
$result=mysql_query($strSQL1) or die("Запрос2 не выполнен!");
if ($result){
	$row = mysql_fetch_row($result);
	$object = array();
	$object[0]['total_price'] = $row[0];
	$object[0]['total_count'] = $row[1];
	echo json_encode($object);
  	mysql_free_result($result);
}

mysql_close($link);
?>
