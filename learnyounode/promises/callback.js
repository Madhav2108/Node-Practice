loadScript('/my/script.js', function(script) {

    alert(`Cool, the ${script.src} is loaded, let's load one more`);
  
    loadScript('/my/script2.js', function(script) {
      alert(`Cool, the second script is loaded`);
    });
  
  });