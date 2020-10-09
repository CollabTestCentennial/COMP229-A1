/*
File: about.js
Name: Stephen Kamino
StudentID: 822600292
Date: Oct 09 2020
*/
"use strict";

(function() {
    function Start()
    {
        console.log("About Started...");
        load_header('about');
        loadAbout();
    }
    function load_header(title){
        document.title = title;
        //let title = document.title;
        //we need to get the location of the specific page
        //console.log(title);

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/twitHead.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("header")[0];
            html.innerHTML = XHR.responseText;
            let t1 = document.getElementById("title").innerHTML = title;

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
    
    function navigate(goto){
        //window.history.pushState("", "", "");
        switch(goto)
        {
            case "intro":
                window.location = "/";
                break;
            case "about":
                window.location.reload();
                break;
            case "projects":
                window.history.pushState("", "", "");
                loadProjects(goto);
                loadFooter();
                break;
            case "services":
                window.history.pushState("", "", "");
                loadServices(goto);
                break;
            case "contact":
                window.history.pushState("", "", "");
                loadContact(goto);
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

        //window.location.replace("/about");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/about.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
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