var sampleCode = 
`
EV.show({
	buttons: [
		{
			text: "Disagree",
			class: "MyCustomClass",
			data: "'Disagree'",
			bgColor: "#bbb",
			onClick: function (data) {
				console.log("User said he want's to: " + data)
			}
		}, {
			text: "Agree",
			class: "MyCustomClass2",
			data: "'Agree'",
			bgColor: "#fcd83f",
			onClick: function (data) {
				console.log("User said he want's to: " + data)
			}
		}
	],
	eventType: "Success",
	heading: "Terms & Conditions",
	eventDescription: "Do you <b>Agree</b> witht the terms & conditions?",
	banner: { hide: true }
})

`

var sampleBasicCode = 
`
EV.show({
	eventType: "Success",
	heading: "Great !",
	eventDescription: "<b>EV</b> successfully initialized."
})
`
var samples = {
	simpleSuccess :
	`
EV.show({
	eventType: "Success",
	heading: "Great !",
	eventDescription: "<b>EV</b> successfully initialized."
})
	`,
	simpleError :
	`
EV.show({
	eventType: "Error",
	heading: "Uh-Oh !",
	eventDescription: "It's not <b>Friday</b> yet."
})
	`,
	simpleInfo :
	`
EV.show({
	eventType: "Info",
	heading: "Information",
	eventDescription: "The object you're lookin for is no longer available, Please try again next time"
})
	`,

}