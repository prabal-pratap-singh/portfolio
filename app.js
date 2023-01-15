const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
});

var button = document.querySelector('.see_more_button');
button.addEventListener('click', ShowAndHide);

function ShowAndHide() {
  var x = document.getElementById('about_me_para2');
  var y = document.getElementById('curve_line');
  console.log(y)
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}


button.addEventListener('click', function handleClick() {
  const initialText = 'see more';
  var y = document.getElementById('curve_line');
  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    button.textContent = 'see less';
    y.style.top = '134%';
  } else {
    button.textContent = initialText;
    y.style.top = '100%';
  }
});

window.addEventListener("keydown", event => {  //  call a 3s setTimeout when the loop is called
  var dog =  document.getElementById('running_dog');
  var array = []
  if (event.key.toUpperCase() == "R") {
    console.log("dog started")
    for(var i=8 ; i<100;i=i+0.1){
      task(i,dog)
      // dog.style.left = `${i}%`;
    }
  }
});


// window.addEventListener("keydown", event => {
//   if (event.key.toUpperCase() == "R") {
//   for (let i=8; i<=100; i++) {
//   task(i);
//   }
//   }
// });

function task(i,dog) {
  var dog =  document.getElementById('running_dog');
   setTimeout(function() {
       // Add tasks to do
       console.log(i);
       dog.style.display = 'block';
       dog.style.left = `${i}%`;
   }, 80 * i);
  }

window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
});






