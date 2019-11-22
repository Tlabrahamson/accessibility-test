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
                <p>    
                    Cursor
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-font" class="toggle-buttons">
                <p>
                    Font Size
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                    <div class="status-mark-two"></div>
                </div>
            </button>
            <button id="toggle-space" class="toggle-buttons">
                <p>
                    Letter Spacing
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                    <div class="status-mark-two"></div>
                </div>
            </button>
            <button id="toggle-weight" class="toggle-buttons">
                <p>
                    Readable Font
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-highlight" class="toggle-buttons">
                <p>
                    Highlight Links
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-reader" class="toggle-buttons">
                <p>
                    Reader Guide
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-keyboard" class="toggle-buttons">
                <p>
                    Keyboard Control
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
            <button id="toggle-speech" class="toggle-buttons">
                <p>
                    Text to Speech
                </p>
                <div class="status">
                    <div class="status-mark-one"></div>
                </div>
            </button>
        </div>
        <div id="googleTranslateElement"></div>
        `);
    $("body").append(`
        <script type="text/javascript">
            function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'googleTranslateElement');
            }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> 
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
});