{"main":
 {"style": "background-repeat: no-repeat; font-family: 'Courier'; font-size: 14px;",
  "background-image": "$path/walkietalkie.png",
  "size": [298, 744],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "10-4 Chum",
  "close": { "image": "$path/x.png",
             "loc": [430, 36]},
  "minimize": { "image": "$path/m.png",
                "loc": [440, 40]},
  "menubar": { "style": "font-family: 'Courier'; font: bold; font-size: 14px; color:#000000" },
  "menu" : { "style": "font-family: 'Courier'; font-size: 14px; font: bold; background-color: #BC000D;border:2px solid #000000",
             "menuitem": "margin-right:25px;",
             "selected": "background-color: #000000",
             "loc": [72,222]
           },
  "menus": {"client": {"_name": "Call",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Memories",
                       "userlist": "Users",
                       "import": "Import",
                       "reconnect": "Reconnect",
					   "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "#",
                        "switch": "SWAP",
                        "color": "COLOUR",
                        "theme": "THEME",
                        "block": "ENEMIES",
                        "quirks": "FRILLS"},
            "help": { "_name": "SOS",
                      "about": "ABOUT" },
            "rclickchumlist": {"pester": "RADIO",
                               "removechum": "GET THEM OUT",
                               "blockchum": "EAT",
                               "report": "Report",
                               "addchum": "Add Chum",
                               "viewlog": "View Chitty",
                               "unblockchum": "Unblock",
                               "banuser": "Slay User",
                               "opuser": "Make Sidekick",
                               "quirksoff": "No Frills"
                              }
           },
  "chums": { "style": "text-align: center; border:0px; background-image:url(); background-color: rgb(0,0,0,0); background-repeat: no-repeat; color: #D7D7D7; font-family: 'Courier';selection-background-color:#393939; font-size:14px; ",
             "loc": [48, 493],
             "size": [180, 215],
             "userlistcolor": "#000000",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.gif", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.gif", "color": "black" },

                 "offline": { "icon": "$path/offline.gif", "color": "#4a4a4a"},

			     
                 "pleasant": { "icon": "$path/pleasant.gif", "color": "white" },

                 "distraught": { "icon": "$path/distraught.gif", "color": "white" },

                 "pranky": { "icon": "$path/pranky.gif", "color": "white" },


                 "smooth": { "icon": "$path/smooth.gif", "color": "white" },

                 "mystified": { "icon": "$path/mystified.gif", "color": "white" },

                 "amazed": { "icon": "$path/amazed.gif", "color": "white" },

                 "insolent": { "icon": "$path/insolent.gif", "color": "white" },

                 "bemused": { "icon": "$path/bemused.gif", "color": "white" },


                 "ecstatic": { "icon": "$path/ecstatic.gif", "color": "black" },

                 "relaxed": { "icon": "$path/relaxed.gif", "color": "black" },

                 "discontent": { "icon": "$path/discontent.gif", "color": "black" },

                 "devious": { "icon": "$path/devious.gif", "color": "black" },

                 "sleek": { "icon": "$path/sleek.gif", "color": "black" },
			     
                 "detestful": { "icon": "$path/detestful.gif", "color": "black" },

                 "mirthful": { "icon": "$path/mirthful.gif", "color": "black" },

                 "manipulative": { "icon": "$path/manipulative.gif", "color": "black" },

                 "vigorous": { "icon": "$path/vigorous.gif", "color": "black" },

                 "perky": { "icon": "$path/perky.gif", "color": "black" },

                 "acceptant": { "icon": "$path/acceptant.gif", "color": "black" },

                 "protective": { "icon": "$path/protective.png", "color": "#000000" },

                 "blocked": { "icon": "$path/blocked.gif", "color": "black" }

             }
           },
  "trollslum": { 
      "style": "background: #BC000D; border:2px solid #DC0000; font-family: 'Courier'",
      "size": [195, 200],
      "label": { "text": "THUGS",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Courier';border:0px;" },
      "chumroll": {"style": "border:2px solid black; background-color: black;color: #D7D7D7;font: bold;font-family: 'Courier';selection-background-color:#393939; " }
  },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color: rgba(130, 230, 80, 0%) ;font:bold; font-family: 'Courier';" },
                    "handle": { "style": "background: rgba(130, 230, 80, 0%); color:#FFFFFF; font-family:'Courier'; font-size:14px; text-align:left;",
                                "loc": [62,258],
                                "size": [149, 11] },
                    "colorswatch": { "loc": [0,0],
                                     "size": [0,0],
                                     "text": "" },
                    "currentMood": [1500, 1500]
                  },
  "defaultwindow": { "style": "background: #A9A9A9; font-family:'Courier';font:bold;selection-background-color:#919191; " 
                   },
  "addchum":  { "style": "background: rgba(0, 0, 0, 0%); border:0px; color: #FFFFFF; font-family:'Courier';",
              "loc": [62,300],
              "size": [149, 11],
                "text": "ADD ALLY"
              },
  "pester": { "style": "background:  rgba(0, 0, 0, 0%); border:0px; font: bold; color:  #FFFFFF; font-family:'Courier';",
              "pressed" : "background-image:url($path/pesterhold.png);",
                "loc": [62,341],
                "size": [149, 11],
              "text": "CONTACT"
            },
  "block": { "style": "background:  rgba(0, 0, 0, 0%); border:0px; font: bold; color:  #FFFFFF; font-family:'Courier';",
             "loc": [62,383],
             "size": [149, 11],
             "text": "BLOCK"
           },
  "defaultmood": 6,
  "moodlabel": { "style": "",
				 "loc": [20, 430],
				 "text": ""
			   },
  "moods": [
      { "style": "background-image:url($path/fourhearts.png); border:0px;", 
		"selected": "background-image:url($path/walkietalkie.png); border:0px;",
		"loc": [0, 0],
		"size": [0,0],
	   	 "text": "",
		"icon": "",
		"mood": 0}
  ]
 },
 "convo":
 {"style": "background-color: #5A6060;border-width: 5px; border-image:url($path/convobg.png) 5px; font-family: 'Courier'",
  "tabstyle": "background-color: #383B3F; font-family: 'Courier'",
  "margins": {"top": 35, "bottom": 35, "left": 32, "right": 20 },
  "size": [480, 348],
  "chumlabel": { "style": " background:  rgba(199, 0, 0, 0%); color: #000000; border:0px; font-size: 16px;",
                 "loc": [88,51],
                 "text" : "~ $handle ~"
               },
  "textarea": {
      "style": "background-color: #D7D7D7;  background-image: url(); font: bold; font-size: 14px; font-family: 'Courier'; border:2px solid #DC0000;text-align:center;"
  },
  "input": { "style": "background: #CC040B; border:2px solid #DC0000;margin-top:10px; font: bold; font-size: 14px; font-family: 'Courier'" },
  "tabs": {
      "style": "border: 2px solid #DC0000; background: black; color: white;",
      "selectedstyle": "border: 3px solid #DC0000; background: #CC040B; color: black;",
      "newmsgcolor": "#BC000D",
      "tabstyle": 0
  },
  "tabwindow" : {
	  "style": "background: #5A6060; font-family: 'Courier'"
  },
  "text": {
      "beganpester": "radioed",
      "ceasepester": "stopped radioing",
      "blocked": "blocked",
      "unblocked": "unblocked",
	  "blockedmsg": "did not listen to",
      "openmemo": "looked at",
      "joinmemo": "chipped in",
      "closememo": "left the memo",
      "kickedmemo": "You have been banned from this memo",
	  "idle": "is now an idle chum"
  },
  "systemMsgColor": "#393939"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: rgba(0,0,0,0); border-width: 5px; border-image:url($path/convobg.png) 5px; font-family: 'Courier'; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "border: 2px solid #DC0000; background: black; color: white;",
      "selectedstyle": "border: 3px solid #DC0000; background: #CC040B; color: black;",
      "newmsgcolor": "#BC000D",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  #000000; border:0px;"},
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 7px; margin-top: 10px; background-color: #C70000 ; background-image:url($path/nothing.png); color: #000000; border:0px; font-size: 16px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: #CC040B; border:2px solid #C70000;margin-top:5px; margin-right:10px; margin-left:10px; font: bold; font-size: 14px; font-family: 'Courier'" },
  "textarea": { "style": " background-color: #D7D7D7; background-image:url();  font: bold; font-size: 14px; font-family: 'Courier'; border:2px solid #C70000;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #B73A3E; background: #D7D7D7; font-family: 'Courier';selection-background-color:#393939; font-size: 14px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75, 
                      "style": " border: 2px solid #DC0000; background: #CC040B; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;" 
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #DC0000; font-size: 12px; background: #CC040B; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }, 
            "arrows": { "left": "$path/leftarrow.png", 
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;" 
                      }
          },
  "systemMsgColor": "#393939",
  "op": { "icon": "$path/smooth.png" }
 }
}