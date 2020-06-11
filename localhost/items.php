<?header ("Content-Type: text/html; charset=utf-8");?>
<?php
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
$gid = $_GET['gid'];
$strSQL1 = "";
if ( $gid== 0){
	$strSQL1="select * from items";
}
else{
	$strSQL1="select * from items where gid = $gid";
}
$result=mysql_query($strSQL1) or die("Запрос2 не выполнен!");
if($result)
{
    $rows = mysql_num_rows($result);
    $object1 =array();
    for ($i = 0 ; $i < $rows ; ++$i)
    {
      $row = mysql_fetch_row($result);
      $object1[$i]["id"]=$row[0];
      $object1[$i]["name"]=$row[1];
      $object1[$i]["author"]=$row[2];
      $object1[$i]["pic"]=$row[3];
      $object1[$i]["ph"]=$row[4];
      $object1[$i]["year"]=$row[5];
      $object1[$i]["annotation"]=$row[7];
      $object1[$i]["price"]=$row[8];
    }

  echo json_encode($object1);
  mysql_free_result($result);
}
mysql_close($link);
?>