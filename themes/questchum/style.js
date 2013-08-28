{"main":
 {"style": "background-color:rgba(213,170,94,0); background-repeat: no-repeat;",
  "background-image": "$path/bedlight.png",
  "size": [650, 650],
  "icon": "$path/questlight.png",
  "newmsgicon": "$path/questtime.png",
  "windowtitle": "Questchum",
  "close": { "image": "$path/x.png",
             "loc": [416, 134]},
  "minimize": { "image": "$path/m.png",
                "loc": [400, 140]},
  "menubar": { "style": "font-family: 'Arial'; font-size: 11px; font: bold; color: black;" },
  "menu" : { "style": "font-family: 'Arial'; font-size: 11px; font: bold; color: black; background-color: #fffa49; border:3px solid #FDFFAE;",
             "selected": "background-color: #f98300",
             "menuitem": "margin-right:14px;",
             "loc": [225,133]
           },
  "sounds": { "alertsound": "$path/alarm.wav",
	      "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Client",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Gospels",
                       "userlist": "Godlings",
                       "import": "Import",
					   "reconnect": "Reconnect",
	     "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "Title",
                        "switch": "Chumhandle",
                        "theme": "Theme",
                        "color": "Colour",
                        "block": "Trollslum",
                        "quirks": "Quirks" },
            "help": { "_name": "Help",
                      "help": "Help",
                      "calsprite": "Calsprite",				
                      "about": "About" },
            "rclickchumlist": {"pester": "Pester",
                               "removechum": "Remove",
                               "report": "Report",
                               "blockchum": "Block",
							   "report": "Report",
                               "addchum": "Add Chum",
                               "viewlog": "View Pesterlog",
                               "unblockchum": "Unblock",
                               "banuser": "Ban",
                               "opuser": "Promote",
                               "quirksoff": "Quirks Off" }
           },
  "chums": { "style": "font-size: 12px; background: rgb(0,0,0,0); border: 3px solid rgb(0,0,0,0); font:bold; font-family: 'Arial';selection-background-color:rgb(100,100,100); color: #000000;",
             "loc": [225, 150],
             "size": [202, 294],
             "userlistcolor": "#FDFFAE",
             "moods": {
                 
                 "chummy": { "icon": "$path/chummy.png", "color": "#f98300" },
                 
                 "rancorous": { "icon": "$path/rancorous.png", "color": "#ca6800" },
                 
                 "offline": { "icon": "$path/offline.png", "color": "#FDFFAE"},
                 
                 
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#f98300" },
                 
                 "distraught": { "icon": "$path/distraught.png", "color": "#f98300" },
                 
                 "pranky": { "icon": "$path/pranky.png", "color": "#f98300" },
                 
                 "smooth": { "icon": "$path/smooth.png", "color": "#f98300" },
				 
                 
                 "mystified": { "icon": "$path/mystified.png", "color": "#f98300" },
                 
                 "amazed": { "icon": "$path/amazed.png", "color": "#f98300" },
                 
                 "insolent": { "icon": "$path/insolent.png", "color": "#f98300" },
				 
		 "bemused": { "icon": "$path/bemused.png", "color": "#f98300" },
                 
                 
                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#ca6800" },
                 
                 "relaxed": { "icon": "$path/relaxed.png", "color": "#ca6800" },
                 
                 "discontent": { "icon": "$path/discontent.png", "color": "#ca6800" },
                 
                 "devious": { "icon": "$path/devious.png", "color": "#ca6800" },
                 
                 "sleek": { "icon": "$path/sleek.png", "color": "#ca6800" },
                 
                 "detestful": { "icon": "$path/detestful.png", "color": "#ca6800" },
                 
                 "mirthful": { "icon": "$path/mirthful.png", "color": "#ca6800" },
                 
                 "manipulative": { "icon": "$path/manipulative.png", "color": "#ca6800" },
                 
                 "vigorous": { "icon": "$path/vigorous.png", "color": "#ca6800" },
                 
                 "perky": { "icon": "$path/perky.png", "color": "#ca6800" },
                 
                 "acceptant": { "icon": "$path/acceptant.png", "color": "#a10000" },
                 
                 "protective": { "icon": "$path/protective.png", "color": "#796100" },
                 
                 "blocked": { "icon": "$path/blocked.png", "color": "#FDFFAE" }
                 
             }
           },
  "trollslum": {
      "style": "background: #004a6a; font-family: 'Courier'; color: black;",
      "size": [200, 450],
      "label": { "text": "The Silent",
                 "style": "color: black ; font: bold; font-family: 'Courier'; border: 0px;" },
      "chumroll": {"style": "border: 3px solid #102039; background-color: #005A83; color: #081018; padding: 5px; font: bold; font-family: 'Courier'; selection-background-color: #003152;" }
  },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(213,170,94,0);" },
                    "handle": { "style": "background: rgb(0,0,0,0); padding: 3px; padding-left: 26px; color: black; font-family:'Arial'; font: bold; text-align:left; font-size: 12px; border: 3px solid rgb(0,0,0,0);",
                                "loc": [225,450],
                                "size": [202, 27] },
                    "colorswatch": { "loc": [402,453],
                                     "size": [22,21],
                                     "text": "" },
                    "currentMood": [231, 455]
                  },
  "defaultwindow": { "style": "color: #fffa49; background: #fcb00d; font-family: 'Arial'; font: bold; selection-background-color: rgb(100,100,100);"
                   },
  "addchum": 
      { "style": "background-image:url($path/addchum1.png); border:0px;",
        "pressed": "background-image:url($path/addchum2.png); border:0px;",
        "loc": [225, 564],
        "size": [50, 50],
               "text": ""
             },
  "pester": 
      { "style": "background-image:url($path/pester1.png); border:0px;",
        "pressed": "background-image:url($path/pester2.png); border:0px;",
        "loc": [367, 564],
        "size": [50, 50],
              "text": ""
            },
  "block": { "style": "background: rgba(213,170,94,0); border:0px; color: rgba(213,170,94,0);",
             "loc": [0, 0],
             "size": [0, 0],
             "text": ""
           },
  "defaultmood": 14,
  "moodlabel": { "style": "",
                 "loc": [0, 0],
                 "text": ""
               },
  "moods": [
      { "style": "background-image:url($path/questtime.png); border:0px;",
        "selected": "background-image:url($path/aries2.png); border:0px;",
        "background-image": "$path/lightbed.png",
        "loc": [56, 433],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 17
      },
      { "style": "background-image:url($path/questbreath.png); border:0px;",
        "selected": "background-image:url($path/tauros2.png); border:0px;",
        "loc": [157, 534],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 9
      },
      { "style": "background-image:url($path/questdoom.png); border:0px;",
        "selected": "background-image:url($path/gemini2.png); border:0px;",
        "loc": [295, 574],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 11
      },
      { "style": "background-image:url($path/questblood.png); border:0px;",
        "selected": "background-image:url($path/cancer2.png); border:0px;",
        "loc": [432, 534],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 1
      },
      { "style": "background-image:url($path/questheart.png); border:0px;",
        "selected": "background-image:url($path/leo2.png); border:0px;",
        "loc": [533, 433],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 16
      },
      { "style": "background-image:url($path/questspace.png); border:0px;",
        "selected": "background-image:url($path/virgo2.png); border:0px;",
        "loc": [574, 295],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 8
      },
      { "style": "background-image:url($path/questmind.png); border:0px;",
        "selected": "background-image:url($path/libra2.png); border:0px;",
        "loc": [533, 157],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 10
      },
      { "style": "background-image:url($path/questlight.png); border:0px;",
        "selected": "background-image:url($path/scorpio2.png); border:0px;",
        "loc": [432, 56],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 14
      },
      { "style": "background-image:url($path/questvoid.png); border:0px;",
        "selected": "background-image:url($path/sagittarius2.png); border:0px;",
        "loc": [295, 16],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 15
      },
      { "style": "background-image:url($path/questrage.png); border:0px;",
        "selected": "background-image:url($path/capricorn2.png); border:0px;",
        "loc": [157, 56],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 13
      },
      { "style": "background-image:url($path/questhope.png); border:0px;",
        "selected": "background-image:url($path/aquarius2.png); border:0px;",
        "loc": [56, 157],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 12
      },
      { "style": "background-image:url($path/questlife.png); border:0px;",
        "selected": "background-image:url($path/pisces2.png); border:0px;",
        "loc": [16, 295],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 7
      },
	  
	        { "style": "background-image:url($path/john1.png); border:0px;",
        "selected": "background-image:url($path/john2.png); border:0px;",
        "loc": [367, 27],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 5
      },
	        { "style": "background-image:url($path/rose1.png); border:0px;",
        "selected": "background-image:url($path/rose2.png); border:0px;",
        "loc": [30, 369],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 3
      },
	        { "style": "background-image:url($path/dave1.png); border:0px;",
        "selected": "background-image:url($path/dave2.png); border:0px;",
        "loc": [99, 494],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 6
      },
	        { "style": "background-image:url($path/jade1.png); border:0px;",
        "selected": "background-image:url($path/jade2.png); border:0px;",
        "loc": [566, 369],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 0
      },
	  	        { "style": "background-image:url($path/bec1.png); border:0px;",
        "selected": "background-image:url($path/bec2.png); border:0px;",
        "loc": [492, 494],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 18
      },
      
	  	        { "style": "background-image:url($path/hearts1.png); border:0px;",
        "selected": "background-image:url($path/hearts2.png); border:0px;",
        "loc": [492, 101],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 20
      },
	        { "style": "background-image:url($path/spades1.png); border:0px;",
        "selected": "background-image:url($path/spades2.png); border:0px;",
        "loc": [99, 101],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 21
      },
	        { "style": "background-image:url($path/diamonds1.png); border:0px;",
        "selected": "background-image:url($path/diamonds2.png); border:0px;",
        "loc": [30, 225],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 19
      },
	  	        { "style": "background-image:url($path/clubs1.png); border:0px;",
        "selected": "background-image:url($path/clubs2.png); border:0px;",
        "loc": [566, 225],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 22
      },
	  
      { "style": "background-image:url($path/questfedora.png); border:0px;",
        "selected": "background-image:url($path/offline2.png); border:0px;",
        "loc": [223, 27],
        "size": [50, 50],
        "text": "",
        "icon": "",
        "mood": 2
      }
  ]
 },
 "convo":
 {"style": "background: #fcb500; font-family: 'Arial';",
  "scrollbar": { "style" : "", "handle": "" },
  "margins": {"top": 10, "bottom": 10, "left": 10, "right": 10 },
  "size": [450, 350],
  "size": [450, 350],
  "chumlabel": { "style": "background-image:url($path/chumlabelbg.png);background-color: #c66700; background-repeat: no-repeat; color: #FDFFAE; fond: bold; padding: 2px; border:1px solid #FFF118; margin-bottom: 4px;",
                 "align": { "h": "left", "v": "center" },
                 "minheight": 22,
                 "maxheight": 36,
                 "text" : "Advising: $handle"
               },
  "textarea": {
      "style": "background: #F98300; border:2px solid #FFF118; font-size: 14px;"
  },
  "input": {
      "style": "background: #fcb500;margin-top:5px; border:1px solid #FFF118; font-size: 12px;"
  },
  "tabwindow" : {
	  "style": "background: #fcb500; font-family: 'Arial'"
  },
  "tabs": {
      "style": "border: 2px solid #FDFFAE; background: #F98300; color: #fcb500;",
      "selectedstyle": "border: 3px solid #FDFFAE; background: #fcb500; color: #FFFEBD;",
      "newmsgcolor": "black",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began advising",
      "ceasepester": "ceased advising",
      "blocked": "commited heresy against",
      "unblocked": "forgave",
      "openmemo": "entered your temple",
      "joinmemo": "began worship",
      "closememo": "ceased worshipping",
      "kickedmemo": "Your worshippers have turned against you!"
  },
  "systemMsgColor": "#646464"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background: #fffa49; font-family: 'Arial';",
  "size": [500,350],
  "tabs": {
      "style": "border: 2px solid #FDFFAE; background: #fffa49; color: #FDFFAE;",
      "selectedstyle": "border: 3px solid #FDFFAE; background: #FDFFAE; color: #fffa49;",
      "newmsgcolor": "black",
      "tabstyle": 0
  },
  "label": { "text": "Discussion: $channel",
             "style": "background-image:url($path/chumlabelbg.png);background-color: #e2a000; background-repeat: no-repeat; color: #FDFFAE; padding: 2px; border:1px solid #FFF118; margin-bottom: 4px;",
             "align": { "h": "left", "v": "center" },
             "minheight": 18,
             "maxheight": 18
           },
  "textarea": {
      "style": "background: #FFF69E; border:2px solid #FFF118; font-size: 12px;"
  },
  "input": {
      "style": "background: #FDFFAE;margin-top:5px; border:1px solid #FFF118; font-size: 12px; margin-bottom: 5px; "
  },
  "margins": {"top": 10, "bottom": 10, "left": 9, "right": 4 },
  "userlist": { "width": 125,
                "style": "font-size: 12px; background: #FFF69E; margin-left: 5px; margin-bottom: 5px; border:2px solid #FFF118; padding: 5px; font-family: 'Arial';selection-background-color:rgb(200,200,200);"
              },
  "time": { "text": { "width": 75, 
                      "style": "color: black; font:bold;  border:1px solid #FFF118; background: #FDFFAE; height: 19px;" 
                    },
            "slider": { "style": " border:1px solid #FFF118;",
                        "groove": "border-image:url($path/timeslider.png);",
                        "handle": "image:url($path/timeicon.png);"
                      },
            "buttons": { "style": "border:1px solid black; height: 17px; width: 50px; color: black; font-family: 'Arial'; background: #fffa49; margin-left: 2px;" }, 
            "arrows": { "left": "$path/leftarrow.png", 
                        "right": "$path/rightarrow.png",
                        "style": "width: 19px; height: 19px; border:0px; margin-left: 2px;"
                      }
          },
  "systemMsgColor": "#646464",
  "op": { "icon": "$path/smooth.png" }
 }
}