$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
    //   items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });

//   const myList = [
//     {name: "Item 1", lowprice: "100", highprice: "200", img: "../", content: "Item 5"},
//     {name: "Item 2", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 3", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 4", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 5", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 6", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 7", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//     {name: "Item 8", lowprice: "100", highprice: "200", img: "Item 4", content: "Item 5"},
//   ];

// Get the button element by its ID
// const myButton = document.getElementById('myButton');

// Add a click event listener to the button
// myButton.addEventListener('click', function() {
  function myFunction() {
  var phoneNumber = '8508977068';
  var message = 'Welcome to premium quality products. here you can find all the products you need.';

  // Create the WhatsApp link
  var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;

  // Open the link in a new tab or window
  window.open(whatsappLink, '_blank');
// });
  }


function goToWhatsApp() {
  // Replace '1234567890' with the recipient's phone number
  // and 'Hello%20World!' with the desired pre-filled message
  var phoneNumber = '1234567890';
  var message = 'Hello%20World!';

  // Create the WhatsApp link
  var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;

  // Open the link in a new tab or window
  window.open(whatsappLink, '_blank');
}

function scrollToDiv() {
  
  // Get a reference to the target div
  var nutsDiv = document.getElementById('nutsDiv');
  console.log('Scrolling to div', nutsDiv);
  // Check if the target div exists
  if (nutsDiv) {
    console.log('Scrolling to div', nutsDiv);
    // Scroll to the target div
    nutsDiv.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToDivDry() {
  
  // Get a reference to the target div
  var DryDiv = document.getElementById('DryDiv');
  console.log('Scrolling to div', DryDiv);
  // Check if the target div exists
  if (DryDiv) {
    console.log('Scrolling to div', DryDiv);
    // Scroll to the target div
    DryDiv.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToDivSpices() {
  
  // Get a reference to the target div
  var SpicesDiv = document.getElementById('SpicesDiv');
  console.log('Scrolling to div', SpicesDiv);
  // Check if the target div exists
  if (SpicesDiv) {
    console.log('Scrolling to div', SpicesDiv);
    // Scroll to the target div
    SpicesDiv.scrollIntoView({ behavior: 'smooth' });
  }
}