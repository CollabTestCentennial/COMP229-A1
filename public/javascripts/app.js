//to reference in the client
"use strict";

(function() {
    function Start()
    {
        console.log("App Started...");
        load_header();
        loadHome();
        laodFooter();
    }

    function load_header(){
        document.title = 'Landing';
        let title = document.title;
        //we need to get the location of the specific page
        console.log(title);

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/twitHead.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("header")[0];
            html.innerHTML = XHR.responseText;
            let t1 = document.getElementById("title").innerHTML = title;
            console.log(title);

            let navLinks = document.getElementsByTagName("a");
            for(const link of navLinks){
                link.addEventListener("click", (event)=>{
                    event.preventDefault();
                    //when you click it needs to find the next title
                    let id = link.getAttribute("id");
                    navigate(id);
                })
            }
        });

    }

    function loadFooter()
    {
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/footer.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("footer")[0];
            html.innerHTML = XHR.responseText;
        });
    }

    function navigate(goto){
        window.history.pushState("", "", goto);
        switch(goto)
        {
            case "Intro":
                window.location = './index';
                break;
            case "about":
                loadAbout(goto);
                loadFooter();
                break;
            case "projects":
                loadProjects(goto);
                loadFooter();
                break;
            case "services":
                loadServices(goto);
                loadFooter();
                break;
            case "contact":
                //window.location = "./contact";
                loadContact(goto);
                loadFooter();
                break;
        }
    }
    function loadHome(goto)
    {
        console.log("loading home");
        document.title = goto;
        
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/intro.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadAbout(goto)
    {
        console.log("loading about");

        window.location.replace("/about");
      /*  let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/about.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });*/
    }
    function loadProjects(goto)
    {
        console.log("loading projects");
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/projects.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadServices(goto)
    {
        console.log("loading services");
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/services.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadContact(goto)
    {
        console.log("running the contact");
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/contact.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
        
    }
    window.addEventListener("load", Start, false);
})();