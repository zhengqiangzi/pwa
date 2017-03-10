<?php
 class RandChar{

	  function getRandChar($length){
	  		$str = null;
	   		$strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
	   		$max = strlen($strPol)-1;

		    for($i=0;$i<$length;$i++){
		    	$str.=$strPol[rand(0,$max)];//rand($min,$max)生成介于min和max两个数之间的一个随机整数
		    }

	   	return $str;
	  }
	 }

 $randCharObj = new RandChar();

		function getUserPtye(){
			$typeAll=array();
			$typeAll[0]=array("typeId"=>1,"typeName"=>"在校生");
			$typeAll[1]=array("typeId"=>2,"typeName"=>"未婚男女");
			$typeAll[2]=array("typeId"=>3,"typeName"=>"政府机关");
			$typeAll[3]=array("typeId"=>4,"typeName"=>"体育");
			$rand=rand(0,3);
			return $typeAll[$rand];
		}

		$person=array();

		for($i=0;$i<=100;$i++){
			$person[$i]=array("name"=>$randCharObj->getRandChar(10),"age"=>rand(20,70),"type"=>getUserPtye());
		}
		echo json_encode($person);

?>