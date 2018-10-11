// var body = document.body;
// var mainHeader = document.createElement('header');
// var mainHeadAttrId = document.createAttribute('id');
// mainHeadAttrId.value = 'header'
// mainHeader.setAttributeNode(mainHeadAttrId);
// body.appendChild(mainHeader)
// var p = document.createElement('p')
// var headerText = document.createTextNode('Name')
// p.appendChild(headerText)
// mainHeader.appendChild(p)

// var value = document.getElementById('myform');
//   e.target.value;
  

  // e.preventDefault()
  // alert('Hello!');
// });

var button = document.getElementById('button');
button.addEventListener('click', function(e) {
  console.log(e)
  e.preventDefault()
  swal({
    text: 'Search movie. e.g. "Avengers: infinity war".',
    content: "input",
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  .then(name => {
    if (!name) throw null;
   
    return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  })
  .then(results => {
    return results.json();
  })
  .then(json => {
    const movie = json.results[0];
   
    if (!movie) {
      return swal("No movie was found!");
    }
   
    const name = movie.trackName;
    const imageURL = movie.artworkUrl100;
   
    swal({
      title: "search result for:",
      text: name,
      icon: imageURL,
    });
  })
  .catch(err => {
    if (err) {
      swal("Oh noes!", "request failed!", "error");
    } else {
      swal.stopLoading();
      swal.close();
    }
  });
});