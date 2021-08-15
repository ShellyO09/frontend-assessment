

document.addEventListener('DOMContentLoaded', function(){

    /* =================================================== */
    // Tab
    /* =================================================== */
            let req = new XMLHttpRequest(); // XMLHttpRequest-- create object
            req.onreadystatechange = function() { // XMLHttpRequest--Event handler called when the state of an object changes
            if(req.readyState == 4 && req.status == 200){ // When the response from the server is completed or successed
            let data = JSON.parse(req.responseText); // Put JSON file data into letiable 
            let len = data.length; // Get JSON data length
            let window_size=window.innerWidth;
            
            for(let i=0; i<len; i=(i+1)|0) {
                let title=(data[i].title);
                let content=(data[i].content);
                let li = document.createElement('li');
                let div = document.createElement('div');
                li.textContent = title;                
                div.textContent = content;
                li.classList.add("tab");
                div.classList.add("panel");
                document.getElementById('list').appendChild(li);
                if(window_size<=600){
                    document.getElementById('list2').appendChild(li);
                }
                    document.getElementById('list2').appendChild(div);
                
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
            for(let i = 0; i < tabs.length; i=(i+1)|0) {
                tabs[i].addEventListener('click', tabSwitch);
            }
    
            // when the tab clicked
            function tabSwitch(){
                // change class value
                const arrayTabs = Array.prototype.slice.call(tabs);
                const index = arrayTabs.indexOf(this);
                if(this.classList.contains('is-active') == true){
                    this.classList.remove('is-active');
                    document.getElementsByClassName('panel')[index].classList.remove('is-show');
                }
                else{
                    this.classList.add('is-active');
                    document.getElementsByClassName('panel')[index].classList.add('is-show');
                }
                
                //Check if there is any other tab is open
                for(let i = 0; i < tabs.length; i=(i+1)|0) {
                    let tabActive=(tabs[i].classList.contains('is-active')) == true;
                        if(tabActive && i!=index){
                         tabs[i].classList.remove('is-active');
                         document.getElementsByClassName('panel')[i].classList.remove('is-show');
                        }
                        else{
                            console.log("not open")
                        }
                    }

            };
            
        });
       
