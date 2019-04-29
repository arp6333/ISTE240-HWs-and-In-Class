<?php
  	include "../dbConn.php";
    error_reporting(0);
	if($conn){
	  if(($_GET['name']!='') && ($_GET['comment']!='')){
		$stmt = $conn->prepare("INSERT INTO comments (name, comment) VALUES (?, ?)");
		$stmt->bind_param("ss", $_GET['name'], $_GET['comment']);
		$stmt->execute();
		$stmt->close();
	  }
	  $result = $conn->query('SELECT name, comment FROM comments');
	  if($result){
          echo("<h2>Comments</h2>");
          echo("<table>");
          while($row = $result->fetch_assoc()){
              echo("<tr><td>" . $row["name"] . " says</td><td>&quot;" . $row["comment"] . "&quot;</tr></td>");
          }
          echo("</table>");
      }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Comments</title>
</head>
<body>
<h2>Submit a comment</h2>
<form action="EX08.php" method="get">		
	Name: <input type="text" id="Name" name="name" />
	Comment: <input type="text" id="Comment" name="comment"/>
	<input type="submit" value="Submit a Comment"/>
</form>
</body>
</html>