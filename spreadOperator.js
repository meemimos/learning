window.onload = function(){

/*
     var meats = ["ham", "salami", "bacon"];
     console.log(...meats);
*/

/*
    var nums1 = [1,2,3];
    var nums2 = [...nums1,4,5,6];
    console.log(nums2);
*/


    var nums = [2,4];
    function addNums(a, b){
        console.log(a+b);
    }
    addNums(...nums);

}
