

document.addEventListener('DOMContentLoaded', function(){

    /* =================================================== */
    // Tab
    /* =================================================== */
            var req = new XMLHttpRequest(); // XMLHttpRequest-- create object
            req.onreadystatechange = function() { // XMLHttpRequest--Event handler called when the state of an object changes
            if(req.readyState == 4 && req.status == 200){ // When the response from the server is completed or successed
    
            var data = JSON.parse(req.responseText); // Put JSON file data into variable 
            var len = data.length; // Get JSON data length
    
            for(var i=0; i<len; i++) {
                var li = document.createElement('li');
                li.textContent = data[i].title;
                document.getElementById('list').appendChild(li);
                li.classList.add("tab");
    
                var div = document.createElement('div');
                div.textContent = data[i].content;
                document.getElementById('list2').appendChild(div);
                div.classList.add("panel");
                if(i==0){
                    li.classList.add("is-active");
                    div.classList.add("is-show");
                }
            }
            }
            };
            req.open("GET", "data.json", false); // HTTP method and specify the URL of the server to access
            req.send(null); // Send request to server
    
    
            // add click event 
            const tabs = document.getElementsByClassName('tab');
            for(let i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click', tabSwitch);
            }
    
            // when the tab clicked
            function tabSwitch(){
                // change class value
                document.getElementsByClassName('is-active')[0].classList.remove('is-active');
                this.classList.add('is-active');
                // change class value
                document.getElementsByClassName('is-show')[0].classList.remove('is-show');
                const arrayTabs = Array.prototype.slice.call(tabs);
                const index = arrayTabs.indexOf(this);
                document.getElementsByClassName('panel')[index].classList.add('is-show');
            };
        });