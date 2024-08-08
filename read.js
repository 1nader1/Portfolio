document.addEventListener('DOMContentLoaded', function() {
    function showTheRest (paragraghId, readMoreId ){
        console.log(paragraghId)
        console.log(readMoreId)
        var element = document.getElementById(paragraghId);
        var readMoreElement = document.getElementById(readMoreId);
        
    
        element.classList.toggle('read-more-txt--show');

        readMoreElement.textContent=readMoreElement.textContent.includes('Read More') ?
         "Read Less..." : "Read More ...";
    }

   // const parentContainer = document.getElementById('read-more-1');
    var readMe = document.getElementsByClassName("read-more-btn");

    for (let i = 0; i < readMe.length; i++) {
        readMe[i].addEventListener('click', function(event) {
            const current =event.target;
            console.log(current)
            switch(current.id){
                case "read-more-1":
                    showTheRest("par-1", "read-more-1");
                    break;
                case "read-more-2":
                    showTheRest("par-2", "read-more-2");
                    break;
                case "read-more-3":
                    showTheRest("par-3", "read-more-3");
                    break;
                 }
        });
    }

});
