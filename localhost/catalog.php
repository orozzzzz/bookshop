<?header ("Content-Type: text/html; charset=utf-8");?>
<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
header('Content-type: text/html; charset=utf-8');
header("Cache-Control: no-store, no-cache, must-revalidate");
$link = mysql_connect ("localhost","root","") or die ("Нет подключения к серверу");
$link2 = mysql_select_db ("books") or die ("Нет подключения к базе данных");
$strSQL1="select * from genres";
$result=mysql_query($strSQL1) or die("Запрос2 не выполнен!");
if($result)
{
  if (is_numeric($_GET['id'])){
    echo "kek";
  }
  else{
    $rows = mysql_num_rows($result);
    $object1 =array();
    for ($i = 0 ; $i < $rows ; ++$i)
    {
      $row = mysql_fetch_row($result);
      $object1[$i]["id_genre"]=$row[0];
      $object1[$i]["name_genre"]=$row[1];

    }
  }
  echo json_encode($object1);
  mysql_free_result($result);
}
mysql_close($link);
?>
