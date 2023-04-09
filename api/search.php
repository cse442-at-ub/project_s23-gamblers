<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Search.php</title>
</head>
<body>
	  <h1 align="center">Search</h1>
	  <form action="" method="post" name="indexf">
		    <p align="center"><input type="text" name="sel"/><input type ="submit" value="search" name="selsub" /></p>
            <table align="center" border="1px" cellspacing="0px" width="800px">
                <tr><th>item_id</th><th>poster_id</th><th>date_posted</th><th>item_state</th><th>	last_modify</th><th>item_name</th><th>item_image_dir</th><th>item_description</th><th>item_price</th><th>item_contact</th></tr>
<?php
    $link=mysqli_connect('db','root','Password123#@!','cse442_2023_spring_team_m_db');
    if(!$link){
      exit('gg!');
    }
    if(empty($_POST["selsub"])){
      $res=mysqli_query($link,"select * from items order by item_id");
    }
    else{
      $sel= $_POST["sel"];
      $res=mysqli_query($link,"select * from items where item_id like '%$sel%' or item_name like '%$sel%' or item_description like '%$sel%'");
    }
    while($row=mysqli_fetch_array($res)){
      echo '<tr>';
      echo "<td>$row[0]</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td><td>$row[5]</td><td>$row[6]</td><td>$row[7]</td><td>$row[8]</td><td>$row[9]</td>";
      echo '</tr>';
    }
?>
        </table>
    </form>
  </body>
</html>


