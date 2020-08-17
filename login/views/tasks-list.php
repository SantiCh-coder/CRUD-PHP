<?php

  include('database.php');

  $query = "SELECT * from task";
  $result = mysqli_query($connection, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'name' => $row['name'],
      'description' => $row['description'],
      'id' => $row['id']
    );
  }
  mysqli_free_result($result);
  $jsonstring = json_encode($json);
  echo $jsonstring;
  mysqli_close($connection);
?>
