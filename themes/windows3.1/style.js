{"inherits": "trollian2.5",
 "main":
 {"background-image": "$path/gameMaster.png",
  "size": [640,480],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Win 3.1",
  "menu" : { "loc": [4, 20], "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: white;border:2px solid black" },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px; color:black; allign:center;" },
  "close": { "image": "$path/x.png",
             "loc": [615, 0]},
  "minimize": { "image": "$path/m.png",
                "loc": [585, 0]},
  "defaultwindow": { "style": "background: blue; font-family:'Arial';font:bold;selection-background-color:black; " },
  "chums": { "loc": [7, 45], "style": "border:2px solid black; background-color: gray;color: white;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:navy; ",
             "moods": {  "loc": [280, 56], 

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },
                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },
                 "offline": { "icon": "$path/offline.png", "color": "blue"},
                 "pleasant": { "icon": "$path/pleasant.png", "color": "white" },
                 "distraught": { "icon": "$path/distraught.png", "color": "white" },
                 "pranky": { "icon": "$path/pranky.png", "color": "white" },
                 "smooth": { "icon": "$path/smooth.png", "color": "white" },
                 "mystified": { "icon": "$path/mystified.png", "color": "white" },
                 "amazed": { "icon": "$path/amazed.png", "color": "white" },
                 "insolent": { "icon": "$path/insolent.png", "color": "white" },
                 "bemused": { "icon": "$path/bemused.png", "color": "white" },
                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "red" },
                 "relaxed": { "icon": "$path/relaxed.png", "color": "red" },
                 "discontent": { "icon": "$path/discontent.png", "color": "red" },
                 "devious": { "icon": "$path/devious.png", "color": "red" },
                 "sleek": { "icon": "$path/sleek.png", "color": "red" },
                 "detestful": { "icon": "$path/detestful.png", "color": "red" },
                 "mirthful": { "icon": "$path/mirthful.png", "color": "red" },
                 "manipulative": { "icon": "$path/manipulative.png", "color": "red" },
                 "vigorous": { "icon": "$path/vigorous.png", "color": "red" },
                 "perky": { "icon": "$path/perky.png", "color": "red" },
                 "acceptant": { "icon": "$path/acceptant.png", "color": "red" },
                 "protective": { "icon": "$path/protective.png", "color": "purple" },
                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "Alias:",
    "style": "color: black ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: navy; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid blue;" }
                  },
  "addchum":  { "loc": [280, 86], "style": "background: gray; border:2px solid black; font: bold; color: white; font-family:'Arial';"
              },
  "pester": { "loc": [280, 116], "style": "background: gray; border:2px solid black; font: bold; color: white; font-family:'Arial';"
            },
  "block": { "loc": [280, 146], "style": "background: red; border:2px solid black; font: bold; color: white; font-family:'Arial';"
           },
  "moodlabel": { "loc": [280, 56], "style": "font:bold;font-family:'Arial';color:white;"
			   },
  "defaultmood": 18,
  "moods": [
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/bemused.png",
		"mood": 22
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mystified.png",
		"mood": 19
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid navy; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/amazed.png",
		"mood": 20
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid navy; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid navy; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid navy; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid navy; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/mirthful.png",
		"mood": 13
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/manipulative.png",
		"mood": 14
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [465, 86],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/vigorous.png",
		"mood": 15
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [465, 116],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/perky.png",
		"mood": 16
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [465, 146],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/acceptant.png",
		"mood": 17
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [465, 176],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [465, 206],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/estatic.png",
		"mood": 7
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [375, 236],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/insolent.png",
		"mood": 21
	  },
      { "style": "text-align:left; background:gray;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [405, 236],
		"size": [30, 30],
	    "text": "",
		"icon": "$path/protective.png",
		"mood": 18
	  },
      { "style": "text-align:left; background:red;border:2px solid black;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid black; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [435, 236],
		"size": [60, 30],
		"text": "INVIS",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: gray;border:2px solid black; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: white; color: black; border:0px; font-size: 14px;",
					"text" : ":: Chatting with: $handle ::" },
	 "textarea": {
		 "style": "background: #00F0FF;  font-size: 14px;font:bold; border:2px solid black;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: white; border:2px solid black;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
	 },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#ff0000"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: gray;border:2px solid black; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: white; color: black; border:0px; font-size: 14px;"
				},
   "textarea": {
	   "style": "background: #00F0FF;  font-size: 14px;font:bold; border:2px solid black;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #780000; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid black;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid navy; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid black; font: bold; font-size: 12px; background: gray; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },

   "tabs": {
       "style": "",
       "selectedstyle": "navy",
       "newmsgcolor": "blue",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}