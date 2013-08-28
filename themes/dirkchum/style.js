{"main":
 {"style": "background-color:rgba(0,0,0,0); background-repeat: no-repeat;",
  "background-image": "$path/tnbg.png",
  "size": [650, 450],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "PESTERCHUM 6.0",
  "close": { "image": "$path/x.png",
             "loc": [639, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [625, 10]},
 "menubar": { "style": "font-family: 'Courier'; font:bold; font-size: 12px; color: black;" },
  "menu" : { "style": "font-family: 'Courier'; font: bold; font-size: 12px; color: black; background-color: #fdb302;border:2px solid #ffff00",
             "menuitem": "margin-right:10px;",
             "selected": "background-color: #ffff00",
             "disabled": "color: grey",
             "loc": [14,90]
           },
  "sounds": { "alertsound": "$path/alarm.wav",
              "memosound": "$path/alarm2.wav",
			  "ceasesound": "$path/cease.wav"},
"menus": {"client": {"_name": "CLIENT",
                       "options": "OPTIONS",
                       "memos": "MEMOS",
                       "logviewer": "PESTERLOGS",
                       "randen": "RANDOM ENCOUNTER",
                       "userlist": "USERLIST",
                       "addgroup": "ADD GROUP",
                       "import": "IMPORT",
                       "reconnect": "RECONNECT",
                                           "idle": "IDLE",
                       "exit": "EXIT"},
            "profile": {"_name": "PROFILE",
                        "switch": "SWITCH",
                        "color": "COLOR",
                        "theme": "THEME",
                        "block": "TROLLSLUM",
                        "quirks": "QUIRKS"},
            "help": { "_name": "HELP",
                      "about": "ABOUT",
                      "help": "HELP",
                      "calsprite": "CALSPRITE",
                      "nickserv": "NICKSERV" },
            "rclickchumlist": {"pester": "PESTER",
                               "removechum": "REMOVE CHUM",
                               "report": "REPORT",
                               "blockchum": "BLOCK",
                               "addchum": "ADD CHUM",
                               "viewlog": "VIEW PESTERLOG",
                               "notes": "EDIT NOTES...",
                               "unblockchum": "UNBLOCK",
                               "removegroup": "REMOVE GROUP",
                               "renamegroup": "RENAME GROUP",
                               "movechum": "MOVE TO",
                               "banuser": "BAN USER",
                               "opuser": "MAKE OP",
                               "voiceuser": "GIVE VOICE",
                               "quirkkill": "KILL QUIRK",
                               "quirksoff": "QUIRKS OFF",
			       "ooc": "OOC",
                               "invitechum": "INVITE CHUM",
                               "memosetting": "MEMO SETTINGS",
                               "memonoquirk": "DISABLE QUIRKS",
                               "memohidden": "HIDDEN",
                               "memoinvite": "INVITE-ONLY",
                               "memomute": "MUTE"
                              }
           },
  "chums": { "style": "border:2px solid yellow; background-color: black;color: white;font: bold;font-family: 'Courier';selection-background-color:#646464; ",
             "scrollbar": { "style" : "background-color:#c2c2c2;",
                            "handle": "background-color:#e02413;height:20px;border:2px solid #ff2612;",
                            "downarrow": "",
                            "darrowstyle": "",
                            "uparrow": "",
                            "uarrowstyle": ""
                          },
             "loc": [477, 91],
             "size": [171, 357],
             "userlistcolor": "white",
             "moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},


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

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }

             }
           },
"trollslum": {
      "style": "background: #fdb302; border:2px solid yellow; font-family: 'Courier'",
      "size": [195, 200],
      "label": { "text": "TROLLSLUM",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Courier';border:0px;" },
      "chumroll": {"style": "border:2px solid yellow; background-color: black;color: white;font: bold;font-family: 'Courier';selection-background-color:#646464; " }
  },
  "mychumhandle": { "label": { "text": "",
                               "loc": [0,0],
                               "style": "color:rgba(0,0,0,0);" },
                    "handle": { "style": "background: rgba(0,0,0,0); color:rgba(0,0,0,0);",
                                "loc": [0,0],
                                "size": [0,0] },
                    "colorswatch": { "loc": [0,0],
                                     "size": [0,0],
                                     "text": "" }
                  },
  "defaultwindow": { "style": "background: #fdb302; font-family:'Courier';font:bold;selection-background-color:#919191; "
                   },
  "addchum": { "style": "background: rgba(255, 255, 0, 0%); border:2px solid #c48a00; font: bold; color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "pressed" : "background: rgb(255, 255, 255, 30%);",
               "loc": [475, 67],
               "size": [175, 18],
               "text": ""
             },
  "pester": { "style": "background:  rgba(255, 255, 0, 0%); border:2px solid #c48a00; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Courier';",
              "pressed" : "background: rgb(255, 255, 255, 30%);",
              "loc": [0,0],
              "size": [0, 0],
              "text": ""
            },
  "block": { "style": "background:  rgba(255, 255, 0, 0%); border:2px solid #c48a00; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Courier';",
             "pressed" : "background: rgb(255, 255, 255, 30%);",
             "loc": [1500,202],
             "size": [71, 22],
             "text": ""
           },
  "defaultmood": 0,
  "moodlabel": { "style": "",
                 "loc": [0, 0],
                 "text": ""
               },
  "moods": [
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck1.png); border:0px;",
        "loc": [16, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 0
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck2.png); border:0px;",
        "loc": [51, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 1
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck3.png); border:0px;",
        "loc": [86, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 11
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck4.png); border:0px;",
        "loc": [121, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 3
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck5.png); border:0px;",
        "loc": [156, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 4
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck6.png); border:0px;",
        "loc": [191, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 5
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck7.png); border:0px;",
        "loc": [226, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 6
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck8.png); border:0px;",
        "loc": [261, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 19
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck9.png); border:0px;",
        "loc": [296, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 20
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck10.png); border:0px;",
        "loc": [331, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 21
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck11.png); border:0px;",
        "loc": [366, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 22
      },
      { "style": "border:0px;",
        "selected": "background-image:url($path/moodcheck12.png); border:0px;",
        "loc": [401, 141],
        "size": [38, 270],
        "text": "",
        "icon": "",
        "mood": 18
      },

      { "style": "border:0px;color: rgba(0, 0, 0, 0%);",
        "selected": "border:0px; color: rgba(0, 0, 0, 0%);",
        "loc": [12, 117],
        "size": [435, 18],
        "text": "",
        "icon": "",
        "mood": 2
      }
  ]
 },
 "convo":
 {"style": "background-color: #fdb302;background-image:url($path/convobg.png);background-repeat: no-repeat; border:2px solid yellow; font-family: 'Courier'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: white; border:2px solid #c48a00;",
                 "handle": "background-color:#c48a00;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #c48a00;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #c48a00;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 22, "bottom": 9, "left": 10, "right": 4 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 21px;background: rgb(196, 138, 0); color: white; border:0px; font-size: 14px;font-family: 'Courier'",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : ":: $handle ::"
               },
  "textarea": {
      "style": "background: white;  font-size: 14px;font:bold; border:2px solid #c48a00;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
  },
  "input": {
      "style": "background: white;margin-top:5px; border:1px solid #c2c2c2; margin-right: 54px; font-size: 12px;"
  },
  "tabwindow" : {
          "style": "background-color:#fdb302;border:0px"
  },
  "tabs": {
      "style": "background-color: #7f7f7f; font-family: 'Courier';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#fdb302;border-top:2px solid yellow; border-left:2px solid yellow;border-right:2px solid yellow; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#fdb302",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began pestering",
      "ceasepester": "ceased pestering",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not receive message from",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!",
          "idle": "is now an idle chum!"
  },
  "systemMsgColor": "#646464"
 },
"memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: #fdb302; background-image:url($path/convobg.png); background-repeat: no-repeat; border:2px solid yellow; font-family: 'Courier'; font: bold; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#fdb302",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(255, 255, 0, 0%); border:0px;",
                 "handle": "background-color:#c48a00;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #c48a00;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #c48a00;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 21px;background: rgb(196, 138, 0); color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #c48a00;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: white;  font-size: 14px;font:bold; border:2px solid #c48a00;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #c48a00; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid yellow; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;"
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #c48a00; font: bold; font-size: 12px; background: yellow; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;"
                      }
          },
  "systemMsgColor": "#646464",
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
