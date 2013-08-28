{"main":
 {"style": "",
  "background-image": "$path/pcbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "sounds": { "alertsound": "$path/se1E.wav",
              "memosound": "$path/se1E.wav"},
  "newmsgicon": "$path/trayicon.png",
  "windowtitle": "La-Chumlana",
  "menu" : { "style": "font-family: 'arial'; font-size: 12px; color: white; background-color: black;border:1px solid white",
             "menuitem": "margin-right:10px;",
             "selected": "background-color: grey",
             "disabled": "color: grey",
             "loc": [9,10]
           },
	"menubar": { "style": "font-family: 'arial';  font-size: 14px; color: #000000;" },
   "menus": {"client": {"_name": "            ",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Logs",
                       "randen": "Random Encounter",
                       "userlist": "Userlist",
                       "addgroup": "Add Group",
                       "import": "Import",
                       "reconnect": "Reconnect",
                       "idle": "Idle",
                       "exit": "Exit"},
            "profile": {"_name": "           ",
                        "switch": "Switch",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Block List",
                        "quirks": "Quirks"},
            "help": { "_name": "            ",
                      "about": "About",
                      "help": "Help",
                      "calsprite": "Calsprite",
                      "nickserv": "Nickserv" },
            "rclickchumlist": {"pester": "Pester",
                               "removechum": "Remove",
                               "report": "Report",
                               "blockchum": "Block",
                               "addchum": "Add",
                               "viewlog": "View Log",
                               "notes": "Edit Tags",
                               "unblockchum": "Unblock",
                               "removegroup": "Remove Group",
                               "renamegroup": "Rename Group",
                               "movechum": "Move",
                               "banuser": "Ban",
                               "opuser": "Give OP",
                               "voiceuser": "Give Voice",
                               "quirkkill": "Kill Quirk",
                               "quirksoff": "Quirks Off",
							   "ooc": "OOC",
                               "invitechum": "Invite",
                               "memosetting": "Memo Settings",
                               "memonoquirk": "Disable Quirks",
                               "memohidden": "Hidden",
                               "memoinvite": "Invite Only",
                               "memomute": "Mute Memo"
                              }
           },
  "close": { "image": "$path/m.png",
             "loc": [278, 9]},
  "minimize": { "image": "$path/m.png",
                "loc": [262, 9]},
  "chums": { "style": "background: transparent; background-attachment: fixed;border:0px solid dicks;font-size:14px;font-family: 'arial'; color: white",
				
				
				"loc": [12, 110],
				"size": [278, 200],
				
				

				"moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "white" },

                 "offline": { "icon": "$path/offline.png", "color": "white"},


                 "pleasant": { "icon": "$path/pleasant.png", "color": "white" },

                 "distraught": { "icon": "$path/distraught.png", "color": "white" },

                 "pranky": { "icon": "$path/pranky.png", "color": "white" },


                 "smooth": { "icon": "$path/smooth.png", "color": "white" },

                 "mystified": { "icon": "$path/mystified.png", "color": "white" },

                 "amazed": { "icon": "$path/amazed.png", "color": "white" },

                 "insolent": { "icon": "$path/distraught.png", "color": "white" },

                 "bemused": { "icon": "$path/bemused.png", "color": "white" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "white" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "white" },

                 "discontent": { "icon": "$path/discontent.png", "color": "white" },

                 "devious": { "icon": "$path/devious.png", "color": "white" },

                 "sleek": { "icon": "$path/sleek.png", "color": "white" },

                 "detestful": { "icon": "$path/detestful.png", "color": "white" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "white" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "white" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "white" },

                 "perky": { "icon": "$path/perky.png", "color": "white" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "white" },

                 "protective": { "icon": "$path/protective.png", "color": "white" },

                 "blocked": { "icon": "$path/blocked.png", "color": "white" }
                         }
						 
           },
		   
  "trollslum": {
      "style": "background: #363636; border:1px solid #4d4b48; font-family: 'Arial'",
      "size": [195, 200],
      "label": { "text": "Block List",
                 "style": "color: #bebdb7; font-family: 'Arial';border:0px;" },
      "chumroll": {"style": "border:1px solid #4d4b48; background-color: #363636;color: bebdb7; font-family: 'Arial';selection-background-color:#314159; " }
  },
		   
	"mychumhandle": { 
            "handle": { "loc": [40,511],
                    "size": [233, 18],
                    "style": "background: transparent; color: white; font-family:'arial'; text-align:left;"
                                                        },
                    "colorswatch": { "loc": [137,508],
                                     "size": [25,20],
                                     "text": "C" },
                    "currentMood": [21, 511]
                  },
	"defaultwindow": { "style": "background: #363636; color: white; font-family:arial;selection-background-color:#314159; "
                   },
				  
  "addchum":  { "style": "background: transparent; color: white;",
                "loc": [19,438],
                "size": [102, 17]
              },
  "pester": { "style": "background:  red; color: white;",
              "loc": [0,0],
              "size": [0, 0]
            },
  "block": { "style": "background: transparent;color: white;",
             "loc": [172,438],
             "size": [105, 17]
           },
  "defaultmood": 1,
  "moodlabel": { "style": "",
                                 "loc": [20, 430],
                                 "text": ""
                           },   
  "moods": [
      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background: transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [17, 537],
                "size": [80, 18],
            "text": "Chummy",
                "icon": "$path/chummy.png",
                "mood": 0
          },

      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [17, 562],
                "size": [80, 18],
            "text": "Pleasant",
                "icon": "$path/pleasant.png",
                "mood": 3
          },

      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [190, 562],
                "size": [80, 18],
            "text": "Rancorous",
                "icon": "$path/rancorous.png",
                "mood": 1
          },

      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [110, 537],
                "size": [90, 18],
            "text": "Pranky",
                "icon": "$path/pranky.png",
                "mood": 5
          },

      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [110, 562],
                "size": [90, 18],
            "text": "Smooth",
                "icon": "$path/smooth.png",
                "mood": 6
          },

      { "style": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [190, 537],
                "size": [90, 18],
				"text": "Distraught",
                "icon": "$path/distraught.png",
                "mood": 21
          },
		  
      { "style": "text-align:left; background:transparent;color: white; font-family:'arial'; padding-left:3px;",
                "selected": "text-align:left; background:transparent; color: white; font-family:'arial';  padding-left:3px;",
                "loc": [110, 588],
                "size": [90, 18],
                "text": "Away",
                "icon": "$path/offline.png",
                "mood": 2
          }
  ]
 },
  "convo":
 {"style": "background-image:url($path/windowbg.png); font-family: 'Small Fonts'; font-size: 14px; ",
  "scrollbar": { "style" : "", "handle": "" },
  "margins": {"top": 5, "bottom": 9, "left": 10, "right": 10 },
  "size": [500,425],
  "chumlabel": { "style": "font-size: 12px;background-color: #383635; color: #86b5d9; padding-left: 3px;",
                 "align": { "h": "left", "v": "center" },
                 "minheight": 0,
                 "maxheight": 0,
                 "text" : ""
               },
  
  "tabwindow" : {
      "style": "background-image:url($path/tabsbg.png) repeat-x top left; font-family: Arial;"
  },
  "textarea": {
      "style": "background: black; background-attachment: fixed; border:1px solid #4d4b48; font-size: 14px; color: white; margin-top: 10px;"
  },
  "input": {
      "style": "background: black; margin-top:5px; border:1px solid #4d4b48; font-size: 12px; color: white; "
  },
  
  "tabs": {
      "style": "background-image:url($path/tabbg.png); color: white; height: 21px; margin: 3px 1px 0px 1px; padding-top: 5px;",
      "selectedstyle": "background-image:url($path/tabbg.png); color: white; padding-top: 5px",
       "newmsgcolor": "#FF724C",
       "tabstyle": 0
	   
  },
  "text": {
      "beganpester": "began pestering",
      "ceasepester": "stopped pestering",
      "blocked": "blocked",
      "unblocked": "mercifully forgave",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!"
  },
  "systemMsgColor": "white"
 },
 "memos":
 {"size": [500,325],
 "memoicon": "$path/memo.png",
  "style": "background: blue; border:1px solid black; font-family: 'arial';",
  "tabs": {
      "style": "",
      "selectedstyle": "",
       "newmsgcolor": "#FF724C",
       "tabstyle": 0
	   
  },
    "tabwindow" : {
      "style": "background: #efefef; font-family: Arial;"
  },

  "scrollbar": { "style" : "background: black; padding-top:17px; padding-bottom:17px;width: 13px; border:0px;",
                 "handle": "background:#cc3333 url($path/scrollhandle.png) no-repeat center center;min-height:24px;padding-top:1px;padding-bottom:1px;",
                 "downarrow": "background: #1b1a19;height:17px;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "background: #1b1a19;height:17px;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 21px;background: black; color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: black; color: white; border:1px solid white;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: black; font-size: 14px; border:1px solid white;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "background: black; border:1px solid white; font-size: 14px; color: white; selection-background-color:#646464; margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": "color: white; border: 1px solid white; background: black; font-size: 12px; margin-top: 5px; margin-right: 18px; font-family:'arial';"
                    },
            "slider": { "style": " border:0px solid #c2c2c2;margin-top:3px;",
                        "groove": "border-image:url($path/timeslider.png);",
                        "handle": "image:url($path/handle.png);"
                      },
            "buttons": { "style": "color: white;  border: 1px solid white;  font-size: 12px; background: black; margin-top: 5px; margin-right: 5px; margin-left: 0px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;background: black;"
                      }
          },
  "systemMsgColor": "#efefef",
  "op": { "icon": "$path/op.png" },
  "halfop": { "icon": "$path/halfop.png" },
  "voice": { "icon": "$path/voice.png" },
  "founder": { "icon": "$path/founder.png" },
  "admin": { "icon": "$path/admin.png" }

 },
 "toasts":
 {
   "width": 210,
   "height": 100,
   "style": "background: white;",
   "icon": { "signin": "$path/../enamel/chummy2.gif",
             "signout": "$path/../enamel/distraught2.gif",
             "style": "border: 2px solid black; border-width: 2px 0px 0px 2px;" },
   "title": { "minimumheight": 50,
              "style": "border: 2px solid black; border-width: 2px 2px 0px 0px; padding: 5px; font-weight:bold;"
            },
   "content": { "style": "background: black; color: white; padding: 5px;" }
 }
}