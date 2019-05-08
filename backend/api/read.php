<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT * FROM `usuario`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['USU_ID'] = $row['USU_ID'];
    $policies[$i]['USU_NOME'] = $row['USU_NOME'];
    $policies[$i]['USU_EMAIL'] = $row['USU_EMAIL'];
    $policies[$i]['USU_USERNAME'] = $row['USU_USERNAME'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}