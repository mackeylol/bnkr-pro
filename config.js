module.exports = {
    "forceTitle": "",
    "forceFavicon": {
        "type": "remote",
        "path": ""
    },
    "3rdPartyResources": {
        "css": true,
        "js": true
    },
    "minifyJS": true,
    "minifyCSS": true,
    "htmlOptions": {
        "collapseWhitespace": true,
        "removeComments": true,
        "sortClassName": true,
        "useShortDoctype": true
    },
    "user": {
        "forceTitle": "",
        "forceFavicon": {
            "type": "remote",
            "path": ""
        },    
        "panic": [
            "Control",
            "Shift",
            "Q"
        ],
        "panicAction": "location.href = 'https://classroom.google.com/u/2/';",
        "frameMode": "iframe" //iframe, embed, object
    }
}