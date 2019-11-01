
var EV = (function () {
    "use strict"
    var isHTMLInitialized = document.querySelector("#ev1") != null;
    var primaryHtml = ` <div id="ev1" class="event-visualizer-wrapper" style="display: none"> <div class="event-visualizer"> <div class="banner"> <div class="image"> <img src=""></div></div><div class="event-visualizer-body"> <div class="event-head"></div><div class="event-body"> </div><div class="event-button"> </div></div></div></div>`;
    var minifiedCSS = `<style>.event-visualizer-wrapper{height: 100vh; width: 100vw; position: absolute; background: rgb(0, 0, 0, .4); z-index: 9999999; top: 0; display: flex; justify-content: center; align-items: center}.event-visualizer-wrapper .event-visualizer{background: #fff; border-radius: 10px; overflow: hidden; cursor: default; transition: all cubic-bezier(.18, .89, .32, 1.28) .4s; transform: scale(0);}.event-visualizer-wrapper .event-visualizer .banner{background: #f65656; display: flex; justify-content: center; align-items: center; height: 60px}.event-visualizer-wrapper .event-visualizer .banner .image img,.event-visualizer-wrapper .event-visualizer .banner .image svg{height: 45px}.event-visualizer-wrapper .event-visualizer-body{display: flex; flex-flow: column; min-width: 300px;}.event-visualizer-wrapper .event-visualizer-body .event-head{letter-spacing: .35px; text-align: center; line-height: 2.5; padding: 0px 10px; overflow-x: auto; height: auto; font-size: 18px;}.event-visualizer-wrapper .event-visualizer-body .event-body{margin: auto; font-size: 15px; max-width: 300px; letter-spacing: .35px; text-align: center; line-height: 1.5; padding: 0px 10px; max-height: 60vh; overflow-x: auto;}.event-visualizer-wrapper .event-visualizer-body .event-button{/* height: 40px; */ padding-top: 15px; text-align: center; display: flex; justify-content: center; align-items: center}.event-visualizer-wrapper .event-visualizer-body .event-button .event-button-click{width: 100px; background: #26bc6a; color: #fff; border-radius: 10px; padding: 8px 7px; cursor: pointer; margin: 10px;}.scale-1{transform: scale(1) !important}</style>`
    var infoSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 488.9 488.9" style="enable-background:new 0 0 488.9 488.9;height: 45px;" xml:space="preserve"> <g> <g> <path d="M239.15,0c31.9,0,57.7,25.8,57.7,57.7s-25.8,57.7-57.7,57.7s-57.7-25.8-57.7-57.7S207.25,0,239.15,0z M291.65,151.6h-1.5 h-92.8h-3.4c-19,0-34.3,15.4-34.3,34.3l0,0c0,19,15.4,34.3,34.3,34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z" style=" fill: white; "></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`
    var errorSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 486.463 486.463" style="enable-background:new 0 0 486.463 486.463;height: 45px;" xml:space="preserve"> <g> <g> <path d="M243.225,333.382c-13.6,0-25,11.4-25,25s11.4,25,25,25c13.1,0,25-11.4,24.4-24.4 C268.225,344.682,256.925,333.382,243.225,333.382z" style="&#10; fill: #fff;&#10;"/> <path d="M474.625,421.982c15.7-27.1,15.8-59.4,0.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4,16.3-74.9,43.4 l-156.8,271.5c-15.6,27.3-15.5,59.8,0.3,86.9c15.6,26.8,43.5,42.9,74.7,42.9h312.8 C430.725,465.582,458.825,449.282,474.625,421.982z M440.625,402.382c-8.7,15-24.1,23.9-41.3,23.9h-312.8 c-17,0-32.3-8.7-40.8-23.4c-8.6-14.9-8.7-32.7-0.1-47.7l156.8-271.4c8.5-14.9,23.7-23.7,40.9-23.7c17.1,0,32.4,8.9,40.9,23.8 l156.7,271.4C449.325,369.882,449.225,387.482,440.625,402.382z" style="&#10; fill: #fff;&#10;"/> <path d="M237.025,157.882c-11.9,3.4-19.3,14.2-19.3,27.3c0.6,7.9,1.1,15.9,1.7,23.8c1.7,30.1,3.4,59.6,5.1,89.7 c0.6,10.2,8.5,17.6,18.7,17.6c10.2,0,18.2-7.9,18.7-18.2c0-6.2,0-11.9,0.6-18.2c1.1-19.3,2.3-38.6,3.4-57.9 c0.6-12.5,1.7-25,2.3-37.5c0-4.5-0.6-8.5-2.3-12.5C260.825,160.782,248.925,155.082,237.025,157.882z" style="&#10; fill: #fff;&#10;"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`;
    var successSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;height: 45px;" xml:space="preserve"> <g> <g> <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z" style="&#10; fill: white;&#10;"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`;
    var bodyOverflowvalue = "";
    class buttonObj {
        constructor(object = {}) {
            this.buttonText = object.text || "";
            this.buttonClass = object.class || "";
            this.buttonFunction = object.onClick || function () { };
            this.buttonData = object.data || "";
            this.buttonBgColor = object.bgColor || "";
        }
    }
    class EVObj {
        constructor(options = {}) {
            this.themeColor = options.themeColor;
            this.heading = options.heading || "";
            this.eventDescription = options.eventDescription || "";
            this.banner = options.banner || {};
            this.hideBanner = this.banner.hide || false;
            this.icon = "";
            this.onCloseText = options["onCloseText"] || "CLOSE";
            this.onClose = options.onClose || {};
            this.onClose.event = this.onClose.event;
            this.onClose.closeData = this.onClose.dataToPassToFunction;
            this.buttons = options.buttons || [];
            this.eventType = options.eventType || "success";
            switch (options.eventType.toLowerCase()) {
                case "success":
                    this.themeColor = this.themeColor || "#20d472";
                    this.icon = successSVG;
                    break;
                case "error":
                    this.themeColor = this.themeColor || "#f65656";
                    this.icon = errorSVG;
                    break;
                case "warning":
                    this.themeColor = this.themeColor || "#fdc702";
                    this.icon = errorSVG;
                    break;
                case "info":
                    this.themeColor = this.themeColor || "#fdc702";
                    this.icon = infoSVG;
                    break;
            }
        }
    }
    if (!isHTMLInitialized) {
        const placeholder = document.createElement('div');
        placeholder.innerHTML = primaryHtml;
        const node = placeholder.firstElementChild;
        const cssHolder = document.createElement('div');
        cssHolder.innerHTML = minifiedCSS;
        document.querySelector('body').appendChild(cssHolder);
        document.querySelector('body').appendChild(node)
    }
    function OpenEVPopup(options) {
        var $element = document.querySelector('body #ev1');
        this.data = new EVObj(options);
        populateEV(this.data);
        bindButtons(this.data.buttons)
        setTimeout(() => {
            $element.querySelector('.event-visualizer').classList.add('scale-1');
        }, 100);
    }
    function populateEV(data) {
        var bodyScroll = document.body.scrollTop;
        var $element = document.querySelector('body #ev1');
        $element.classList.contains('isEVOpen') ? closeEV() : false;
        bodyOverflowvalue = document.querySelector('body').style.overflow;
        document.querySelector('body').style.overflow = 'hidden';
        $element.querySelector('.banner').style.background = data.themeColor;
        $element.querySelector('.banner').style.display = data.hideBanner ? 'none' : '';
        $element.querySelector('.banner .image').innerHTML = data.icon;
        $element.querySelector('.event-head').textContent = data.heading;
        $element.querySelector('.event-body').innerHTML = data.eventDescription;
        $element.style.top = bodyScroll;
        $element.classList.add('isEVOpen');
        $element.style.display = 'flex';
    }
    function bindButtons(buttons) {
        document.querySelectorAll(".event-button-click").forEach(e => e.parentNode.removeChild(e));
        var buttonContainer = document.querySelector('.event-button');
        var original = document.createElement('div');
        original.innerHTML = `<div class="event-button-click"></div>`;
        original = original.firstElementChild;

        if (buttons.length) {
            buttons.forEach(element => {
                let clone = original.cloneNode(true);
                let button = new buttonObj(element);
                clone.textContent = button.buttonText;
                clone.classList.add(button.buttonClass);
                clone.style.background = button.buttonBgColor || "";
                clone.addEventListener('click', function () {
                    button.buttonFunction(button.buttonData), EV.close()
                })
                buttonContainer.appendChild(clone);

            });
        } else {
            let clone = original.cloneNode(true);
            clone.textContent = "CLOSE";
            clone.addEventListener('click', EV.close);
            clone.style.background = EV.data.themeColor
            EV.data.onClose.event && clone.addEventListener('click', function(){ EV.data.onClose.event(EV.data.onClose.data)});
            buttonContainer.appendChild(clone);
        }
    }
    function closeEV() {
        var $element = document.querySelector('body #ev1');
        $element.querySelector('.event-visualizer').classList.remove('scale-1');
        document.querySelector('body').style.overflow = bodyOverflowvalue;
        bodyOverflowvalue = "";
        $element.classList.remove('isEVOpen');
        $element.style.display = 'none';

    }
    return {
        show: OpenEVPopup,
        close: closeEV
    }
})();

$( document ).ready(function() {
	$("[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']").hide()
});
//Samples 
// EV.show({
//     eventType: "Info",
//     heading: "Information",
//     eventDescription: "<b>Private App :</b> You can generate a key which can be used to access this template by other users who dont have access to your market place. </br> </br>" +
//         "<b>Save: </b> Updates only the meta data such as Template name, description and group. Any changes made in sheets, workflows or app will take effect when template is published. </br></br>" +
//         " <b>Publish</b> Updates only the meta data such as Template name, description and group. Any changes made in sheets, workflows or app will take effect when template is published."
// })

// EV.show({
//     eventType: "Success",
//     heading: "Great !",
//     eventDescription: "Success ! your <b>Ready app :</b> has been created, it'll be opened in a new tab."
// })

// EV.show({
//     eventType: "Error",
//     heading: "Uh-OH !",
//     eventDescription: "We seem to be facing as issue creating your app, please try again later or contact admin if issue persists."
// })

// EV.show({
//     eventType: "Success",
//     heading: "Great !",
//     eventDescription: "Your <b>Ready App </b> has been created. It'll be opened in a new tab",
//     onClose: {
//         event : function (dataToPassToFunction) {console.log(dataToPassToFunction);},
//         data: dataToPassToFunction
//     }
// })

// EV.show({
//     buttons: [{
//         text: "Ok",
//         class: "green",
//         data: "asdasd",
//         bgColor: "red",
//         onClick: function () {
//             console.log('OK Clicked')
//         }
//     }
//     ],
//     eventType: "Success",
//     heading: "Great !",
//     banner: { hide: false },
//     eventDescription: "Your <b>Ready App </b> has been created. It'll be opened in a new tab",
//     onClose: {
//         event: function (dataToPassToFunction) {
//             console.log("tmkx");
//         },
//         dataToPassToFunction: "sadasda"

//     }
// })

// EV.show({
//     buttons: [
//         {
//             text: "Yes",
//             class: "MyCustomClass",
//             data: "'I wanna quit'",
//             bgColor: "#bbb",
//             onClick: function () {
//                 console.log("User said he want's to: " + data)
//             }
//         }, {
//             text: "Yes",
//             class: "MyCustomClass",
//             data: "'I wanna quit'",
//             bgColor: "#bbb",
//             onClick: function () {
//                 console.log("User said he want's to: " + data)
//             }
//         }
//     ],
//     eventType: "Success",
//     heading: "Great !",
//     eventDescription: "Are you sure you want to <b>quit</b>?"
// })