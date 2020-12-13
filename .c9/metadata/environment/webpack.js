{"filter":false,"title":"webpack.js","tooltip":"/webpack.js","undoManager":{"mark":20,"position":20,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["module.exports = {","    mode: \"development\",","    entry: \"./static/app.jsx\", ","    output: {","        path: path.resolve(__dirname, \"public\")","    }","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["const path = require('path');"],"id":3}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"remove","lines":[" "],"id":4},{"start":{"row":7,"column":1},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":[";"],"id":5}],[{"start":{"row":7,"column":2},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":17,"column":5},"action":"insert","lines":["plugins: [","        new CleanWebpackPlugin([\"public\"]),","        new CopyWebpackPlugin([","            {","                from: \"static\",","                to: \"\"","            }","        ]),","    ]"],"id":7}],[{"start":{"row":9,"column":0},"end":{"row":17,"column":5},"action":"remove","lines":["plugins: [","        new CleanWebpackPlugin([\"public\"]),","        new CopyWebpackPlugin([","            {","                from: \"static\",","                to: \"\"","            }","        ]),","    ]"],"id":8}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":9}],[{"start":{"row":6,"column":5},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["plugins: [","        new CleanWebpackPlugin([\"public\"]),","        new CopyWebpackPlugin([","            {","                from: \"static\",","                to: \"\"","            }","        ]),","    ]"],"id":11}],[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":[","],"id":12}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"remove","lines":[" "],"id":13},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"remove","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "]},{"start":{"row":6,"column":6},"end":{"row":7,"column":1},"action":"remove","lines":[""," "]}],[{"start":{"row":6,"column":6},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "],"id":15},{"start":{"row":10,"column":31},"end":{"row":11,"column":12},"action":"remove","lines":["","            "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":12},"end":{"row":12,"column":16},"action":"remove","lines":["    "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":12},"action":"remove","lines":["    "]},{"start":{"row":13,"column":9},"end":{"row":14,"column":8},"action":"remove","lines":["","        "]},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":29},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":16}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":60},"action":"insert","lines":["const CleanWebpackPlugin = require(\"clean-webpack-plugin\"); "],"id":17}],[{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"remove","lines":[" "],"id":18}],[{"start":{"row":1,"column":59},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":19}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":58},"action":"insert","lines":[" const CopyWebpackPlugin = require(\"copy-webpack-plugin\");"],"id":20}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" "],"id":21}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":6},"end":{"row":8,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1607861542498,"hash":"0819a76f716ea0483b3451a385428cf688d5ac84"}