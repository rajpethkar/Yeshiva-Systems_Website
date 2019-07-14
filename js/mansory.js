<!-- function myzoom(){ -->
<!-- <!-- alert(this.src); --> -->
 <!-- modal.style.display = "block"; -->
 <!-- <!-- var modalImg = document.getElementsByClassName("clsimg")[0]; --> -->
 <!-- <!-- modalImg.src = this.src; --> -->
<!-- } -->
// Get the modal
var modal = document.getElementById("myModal");
<!-- alert(modal); -->
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("item");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


for (var i=0; i < img.length; i++) {
	
    img[i].onclick = function(){
	<!-- alert(this.getElementsByClassName('clsimg')[0].src); -->
	var thum_img=this.getElementsByClassName('clsimg')[0].src;
	var high_img=thum_img.replace("/thumbnail","");
	<!-- alert(high_img); -->
	 modal.style.display = "block";  
	modalImg.src = high_img;<!-- this.getElementsByClassName('clsimg')[0].src; -->
	<!-- alert(this.getElementsByClassName('clsimg')[0].naturalHeight); -->
	
    }
	
	
	<!-- var w = img1.naturalWidth || img1.width, -->
        <!-- h = img1.naturalHeight || img1.height; -->
};

<!-- img.onclick = function(){ -->
<!-- alert('Hi'); -->
  <!-- modal.style.display = "block"; -->
  <!-- modalImg.src = this.src; -->
  <!-- captionText.innerHTML = this.alt; -->
<!-- } -->

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("img01")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() { 
  modal.style.display = "none";
}