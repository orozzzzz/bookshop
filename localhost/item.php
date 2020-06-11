<?header ("Content-Type: text/html; charset=utf-8");?>
<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
header('Content-type: text/html; charset=utf-8');
header("Cache-Control: no-store, no-cache, must-revalidate");
$id = $_GET['id'];
$func = $_GET['func'];
switch ($func) {
	case 1:
		additem($id);
		break;
	case 2:
		plusitem($id);
		break;
	case 3:
		minusitem($id);
		break;
	case 4:
		delitem($id);
		break;
	default:
		echo "0";
		break;
}

function additem($id){
	$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
	$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
	$query = "SELECT count FROM basket WHERE book_id = '$id'";
	$result=mysql_query($query);
	if($result)
	{
	  $rows = mysql_num_rows($result);
	  if($rows>0){
	  	echo "1";
	  }
	  else{
	  	$strSQL1="INSERT INTO `basket` (`book_id`, `count`) VALUES ('$id', '1')";
	  	$result=mysql_query($strSQL1);
	  	echo "2";
	  }
	}
	mysql_close($link);
}
function plusitem($id){
	$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
	$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
	$query = "UPDATE basket SET count = count +1 WHERE book_id = '$id'";
	$result=mysql_query($query);
	mysql_close($link);
}
function minusitem($id){
	$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
	$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
	$query = "UPDATE basket SET count = count -1 WHERE book_id = '$id'";
	$result=mysql_query($query);
	mysql_close($link);
}
function delitem($id){
	$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
	$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
	$query = "DELETE FROM basket WHERE book_id = '$id'";
	$result=mysql_query($query);
	mysql_close($link);
}




?>
