let block = document.querySelector(".block");

let btnSettings = document.querySelector("#settings");
let btnAggregator = document.querySelector("#aggregator");
let btnBlog = document.querySelector("#blog");
let container = document.querySelector(".Container");

let settings = `
    <ul>
        <li><button id="theme">Change Theme</button></li>
    </ul>
`;

let aggregator = `
    <p>Your aggregator: Name</p>
`;

let blog = `
    <h1>My company</h1>
    <p>
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized on the other hand, we denounce with righteous
        indignation and dislike men who are so beguiled and demoralized
    </p>
`;

container.innerHTML = settings;
btnBlog.classList.add("noFocusLight");
btnAggregator.classList.add("noFocusLight");
btnSettings.classList.remove("noFocusLight");
btnAggregator.classList.remove("focusLight");
btnBlog.classList.remove("focusLight");
btnSettings.classList.add("focusLight");

let body = document.querySelector("body");
body.classList.toggle("Light");
let theme = true;

let btnTheme = document.querySelector("#theme");
btnTheme.classList.toggle("Light");
btnTheme.addEventListener("click", function() {
    if (theme) 
        theme = false;
    else
        theme = true;
    block.classList.toggle("Dark");
    block.classList.toggle("Light");
    btnSettings.classList.toggle("focusLight");
    btnSettings.classList.toggle("focusDark");
    btnAggregator.classList.toggle("noFocusLight");
    btnAggregator.classList.toggle("noFocusDark");
    btnBlog.classList.toggle("noFocusLight");
    btnBlog.classList.toggle("noFocusDark");
    btnTheme.classList.toggle("Dark");
    btnTheme.classList.toggle("Light");

    body.classList.toggle("Dark");
    body.classList.toggle("Light");
});


btnSettings.addEventListener("click", function() {
    container.innerHTML = settings;
    btnTheme = document.querySelector("#theme");
    if (theme) {
        btnBlog.classList.add("noFocusLight");
        btnAggregator.classList.add("noFocusLight");
        btnSettings.classList.remove("noFocusLight");
        btnAggregator.classList.remove("focusLight");
        btnBlog.classList.remove("focusLight");
        btnSettings.classList.add("focusLight");
        btnTheme.classList.add("Light");
        btnTheme.classList.remove("Dark");
    }
    else {
        btnBlog.classList.add("noFocusDark");
        btnAggregator.classList.add("noFocusDark");
        btnSettings.classList.remove("noFocusDark");
        btnAggregator.classList.remove("focusDark");
        btnBlog.classList.remove("focusDark");
        btnSettings.classList.add("focusDark");
        btnTheme.classList.add("Dark");
        btnTheme.classList.remove("Light");
    }

    
    
    btnTheme.addEventListener("click", function() {
        if (theme) 
            theme = false;
        else
            theme = true;
        btnTheme.classList.toggle("Dark");
        btnTheme.classList.toggle("Light");
        block.classList.toggle("Dark");
        block.classList.toggle("Light");
        btnSettings.classList.toggle("focusLight");
        btnSettings.classList.toggle("focusDark");
        btnAggregator.classList.toggle("noFocusLight");
        btnAggregator.classList.toggle("noFocusDark");
        btnBlog.classList.toggle("noFocusLight");
        btnBlog.classList.toggle("noFocusDark");
        
        body.classList.toggle("Dark");
        body.classList.toggle("Light");
    });
});

btnAggregator.addEventListener("click", function() {
    container.innerHTML = aggregator;
    if (theme) {
        btnBlog.classList.add("noFocusLight");
        btnSettings.classList.add("noFocusLight");
        btnAggregator.classList.remove("noFocusLight");
        btnSettings.classList.remove("focusLight");
        btnBlog.classList.remove("focusLight");
        btnAggregator.classList.add("focusLight");
    }
    else {
        btnBlog.classList.add("noFocusDark");
        btnSettings.classList.add("noFocusDark");
        btnAggregator.classList.remove("noFocusDark");
        btnSettings.classList.remove("focusDark");
        btnBlog.classList.remove("focusDark");
        btnAggregator.classList.add("focusDark");
    }
});

btnBlog.addEventListener("click", function() {
    container.innerHTML = blog;
    if (theme) {
        btnAggregator.classList.add("noFocusLight");
        btnSettings.classList.add("noFocusLight");
        btnBlog.classList.remove("noFocusLight");
        btnSettings.classList.remove("focusLight");
        btnAggregator.classList.remove("focusLight");
        btnBlog.classList.add("focusLight");
    }
    else {
        btnAggregator.classList.add("noFocusDark");
        btnSettings.classList.add("noFocusDark");
        btnBlog.classList.remove("noFocusDark");
        btnSettings.classList.remove("focusDark");
        btnAggregator.classList.remove("focusDark");
        btnBlog.classList.add("focusDark");
    }
});