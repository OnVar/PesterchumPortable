{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/commoback.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Commodore",
  "menu" : { "style": "font-family: 'Georgia'; font: bold; font-size: 14px; background-color: #D0DB31;border:2px solid #F8FF99" },
  "menubar": { "style": "font-family: 'Georgia'; font:bold; font-size: 14px; color:#000000; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [282, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [264, 10]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #D0DB31; font-family:'Georgia';font:bold;selection-background-color:black; " },
  "chums": { "style": "border:2px solid #F8FF99; background-color: #D0DB31;color: #000000;font: bold;font-size:14px;font-family: 'Georgia';selection-background-color:black; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#F1FC62" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#F8FF99" },

                 "offline": { "icon": "$path/offline.png", "color": "#F8FCBD"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#F1FC62" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#F1FC62" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#F1FC62" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#F1FC62" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#F1FC62" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#F1FC62" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#F1FC62" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#F1FC62" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#F8FF99" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#F8FF99" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#F8FF99" },

                 "devious": { "icon": "$path/devious.png", "color": "#F8FF99" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#F8FF99" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#F8FF99" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#F8FF99" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#F8FF99" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#F8FF99" },

                 "perky": { "icon": "$path/perky.png", "color": "#F8FF99" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#F8FF99" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
                      "style": "color: gray ;font:bold; font-family: 'Georgia';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#F8FF99; font-family:'Georgia'; font:bold; text-align:left; border:2px solid #D0DB31;" }
                  },
  "addchum":  { "style": "background: black; border:2px solid #F8FF99; font: bold; color: #D0DB31; font-family:'Georgia';"
              },
  "pester": { "style": "background: black; border:2px solid #F8FF99; font: bold; color: #D0DB31; font-family:'Georgia';"
            },
  "block": { "style": "background: black; border:2px solid #F8FF99; font: bold; color: #D0DB31; font-family:'Georgia';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Georgia';color:#F1FC62;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [165, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [195, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [45, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [75, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [165, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [195, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [225, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [255, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [15, 515],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [255, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [225, 485],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:#D0DB31;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F8FF99; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [105, 545],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:#E90A0A;border:2px solid black;color: black; font-family:'Georgia'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:#F1FC62; border:2px solid #E9F544; color: black; font-family:'Georgia'; font:bold; padding-left:3px;",
		"loc": [135, 545],
		"size": [150, 30],
		"text": "INVISIBLE / OFFLINE",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #716E62;border:2px solid black; font-family: 'Georgia';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #D0DB31; color: black; border:0px; font-size: 14px;",
					"text" : ":: contacting: $handle ::" },
	 "textarea": {
		 "style": "background: #EDF39D;  font-size: 14px;font:bold; border:2px solid #F8FF99;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Georgia'"
 	 },
  "input": { "style": "background: #F1FC62; border:2px solid #D0DB31;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#A4AE1A"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #A6A65D;border:2px solid black; font-family: 'Georgia';",
   "label": { "style": "margin-bottom: 21px;background: #919556; color: #F1FC62; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: #EAF729;  font-size: 14px;font:bold; border:2px solid #F8FF99;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Georgia'"
   },
   "userlist": { "style": "border:2px solid #82873E; background: #F1FC62;font: bold;font-family: 'Georgia';selection-background-color:#F8FCBD; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #F1FC62; border:2px solid #F8FF99;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #F8FF99; background: #F1FC62; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Georgia';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #F8FF99; font: bold; font-size: 12px; background: #F8FF99; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "#F8FF99",
       "newmsgcolor": "#A4AE1A",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}