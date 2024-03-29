//COPY TO ACCESS-FOR-ALL WHEN CODE IS COMPLETE

$(document).ready(function(){
    //String literal that creates the Access for All Menu
    $("body").addClass("small-font small-space");
    $("body").prepend(`
        <div id='reader-container'></div>
        <button id="toggle-accessibility" class="main-toggle"><img src="./images/menu-logo.png"></button>
        <div class="accessibility-container">
        <h1 class="accessibility-header">Accessibility Options</h1>
        <div class="button-grid">
            <button id="toggle-cursor" class="toggle-buttons">
                <img class="button-img" src="./images/cursor.png" alt="">
                <p>
                    Cursor
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-font" class="toggle-buttons">
                <img class="button-img" src="./images/font-size.png" alt="">
                <p>
                    Font Size
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                    <div class="status-mark-two"></div>
                </div>
            </button>
            <button id="toggle-space" class="toggle-buttons">
                <img class="button-img" src="./images/letter-spacing.png" alt="">
                <p>
                    Letter Spacing
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                    <div class="status-mark-two"></div>
                </div>
            </button>
            <button id="toggle-weight" class="toggle-buttons">
                <img class="button-img" src="./images/readable-font.png" alt="">  
                <p>
                    Readable Font
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-contrast" class="toggle-buttons">
                <img class="button-img" src="./images/invert.png" alt="">
                <p>
                    Invert
                </p>
                <div class="status">
                    <div class="contrast-mark-one"></div>
                    <div class="contrast-mark-two"></div>
                    <div class="contrast-mark-three"></div>
                </div>
            </button>
            <button id="toggle-highlight" class="toggle-buttons">
                <img class="button-img" src="./images/highlight.png" alt="">
                <p>
                    Highlight Links
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-reader" class="toggle-buttons">
                <img class="button-img" src="./images/reading-guide.png" alt="">
                <p>
                    Reader Guide
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-keyboard" class="toggle-buttons">
                <img class="button-img" src="./images/keyboard-control.png" alt="">
                <p>
                    Keyboard Control
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-speech" class="toggle-buttons">
                <img class="button-img" src="./images/text-to-speech.png" alt="">
                <p>
                    Text to Speech
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-animation" class="toggle-buttons">
                <img class="button-img" src="./images/disable-animation.png" alt="">
                <p>
                    Disable Animations
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
        </div>
        `);
    
    //Toggle the Accessibility Menu
    $("#toggle-accessibility").click(function(){
        $(".accessibility-container").toggleClass("show");
    });

    //Tracking the cursor
    $("#toggle-cursor").click(function(){
        $("body").toggleClass("big-cursor");
        $("#toggle-cursor .status-mark-one").toggleClass("status-mark-active");
    });

    //Toggle the font size
    $("#toggle-font").click(function(){
        if($("body").hasClass("small-font")){
            $("body").addClass("medium-font").removeClass("small-font");
            $("#toggle-font .status-mark-one").addClass("status-mark-active");
        }
        else if($("body").hasClass("medium-font")){
            $("body").addClass("large-font").removeClass("medium-font");
            $("#toggle-font .status-mark-two").addClass("status-mark-active");
        }
        else if($("body").hasClass("large-font")){
            $("body").addClass("small-font").removeClass("large-font");
            $("#toggle-font .status-mark-one").removeClass("status-mark-active");
            $("#toggle-font .status-mark-two").removeClass("status-mark-active");
        }
    });

    //Toggle the line spacing
    $("#toggle-space").click(function(){
        if($("body").hasClass("small-space")){
            $("body").addClass("medium-space").removeClass("small-space");
            $("#toggle-space .status-mark-one").addClass("status-mark-active");
        }
        else if($("body").hasClass("medium-space")){
            $("body").addClass("large-space").removeClass("medium-space");
            $("#toggle-space .status-mark-two").addClass("status-mark-active");
        }
        else if($("body").hasClass("large-space")){
            $("body").addClass("small-space").removeClass("large-space");
            $("#toggle-space .status-mark-one").removeClass("status-mark-active");
            $("#toggle-space .status-mark-two").removeClass("status-mark-active");
        }
    });

    //Toggle Font Weight
    $("#toggle-weight").click(function(){
        $("body").toggleClass("increase-weight");
        $("#toggle-weight .status-mark-one").toggleClass("status-mark-active");
    });

    //Toggle the Contrast
    $("#toggle-contrast").click(function(){
        if($("html").hasClass("")){
            $("html").addClass("invert");
            $("#toggle-contrast p").text("Grayscale");
            $("#toggle-contrast .contrast-mark-one").addClass("status-mark-active");
        }
        else if($("html").hasClass("invert")){
            $("html").addClass("grayscale").removeClass("invert");
            $("#toggle-contrast p").text("Hue");
            $("#toggle-contrast .contrast-mark-two").addClass("status-mark-active");
        }
        else if($("html").hasClass("grayscale")){
            $("html").addClass("hue").removeClass("grayscale");
            $("#toggle-contrast p").text("Default");
            $("#toggle-contrast .contrast-mark-three").addClass("status-mark-active");
        }
        else{
            $("html").removeClass("hue");
            $("#toggle-contrast p").text("Invert");
            $("#toggle-contrast .contrast-mark-one").removeClass("status-mark-active");
            $("#toggle-contrast .contrast-mark-two").removeClass("status-mark-active");
            $("#toggle-contrast .contrast-mark-three").removeClass("status-mark-active");
        }
    });

    //Toggle Highlight Links
    $("#toggle-highlight").click(function(){
        link = $("[href]");
        link.toggleClass("highlight");
        $("#toggle-highlight .status-mark-one").toggleClass("status-mark-active");
    });

    //Toggle Reading Guide
    $("#toggle-reader").click(function(){
        $("#reader-container").toggleClass("reader");
        $("#toggle-reader .status-mark-one").toggleClass("status-mark-active");
        $(document).mousemove(function(e) {
            $(".reader").css({top:e.pageY});
        });
    });

    //Toggle Keyboard Control NEEDS TO ACTUALLY TOGGLE
    $("#toggle-keyboard").click(function(){
        $("#toggle-keyboard .status-mark-one").toggleClass("status-mark-active");
        $(this).toggleClass("key-control-outline");
        $(document).keydown(function(e) {
            switch(e.which) {
                case 37: //left
                console.log("<");
                break;
        
                case 38: //up
                console.log("^");
                break;
        
                case 39: //right
                console.log(">");
                break;
        
                case 40: //down
                console.log("v");
                break;
        
                default: return;
            }
            e.preventDefault();
        });
    });

    //Toggle Text to Speech THIS ALSO DOESN'T TOGGLE AND SHOWS NO RESTRAINT. VERY TALKATIVE
    $("#toggle-speech").click(function(){
        $("#toggle-speech .status-mark-one").toggleClass("status-mark-active");
        function toggleSpeech(){
            $("h1, h2, h3, h4, h5, h6, a, img, button, ul, li, p").mouseover(function(){
            var utterThis = new SpeechSynthesisUtterance(this.textContent);
            speechSynthesis.speak(utterThis);
            });
        }
    });

    //Disable animations
    $("#toggle-animation").click(function(){
        $("body").toggleClass("disable-animation");
        $("#toggle-animation .status-mark-one").toggleClass("status-mark-active");
    });
});