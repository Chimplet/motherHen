const { MessageEmbed, Client } = require('discord.js');

var charEmojis = {
    a0:  '🇦',  a1:  '<:a1:883186296183476225>',  a2:  '<:a2:883186147948380220>',  a3:  '<:a3:883186363510444072>',  a4:  '<:a4:883186496759300156>',  a5:  '<:a5:883186450680655882>',
    b0:  '🇧',  b1:  '<:b1:883186286444310549>',  b2:  '<:b2:883186148774662195>',  b3:  '<:b3:883186376126918696>',  b4:  '<:b4:883186471408898058>',  b5:  '<:b5:883186435866361878>',
    c0:  '🇨',  c1:  '<:c1:883186289472569364>',  c2:  '<:c2:883186152604045332>',  c3:  '<:c3:883186371664150559>',  c4:  '<:c4:883186474097455164>',  c5:  '<:c5:883186442212356127>',
    d0:  '🇩',  d1:  '<:d1:883186275492986991>',  d2:  '<:d2:883186155137417216>',  d3:  '<:d3:883186364366086155>',  d4:  '<:d4:883186483656265749>',  d5:  '<:d5:883186440534638623>',
    e0:  '🇪',  e1:  '<:e1:883186314776817744>',  e2:  '<:e2:883186146316795934>',  e3:  '<:e3:883186358473072660>',  e4:  '<:e4:883186463985000468>',  e5:  '<:e5:883186417591803924>',
    f0:  '🇫',  f1:  '<:f1:883186307445166120>',  f2:  '<:f2:883186150049730570>',  f3:  '<:f3:883186356707291157>',  f4:  '<:f4:883186462118535229>',  f5:  '<:f5:883186444162719764>',
    g0:  '🇬',  g1:  '<:g1:883186315196239874>',  g2:  '<:g2:883186147109502986>',  g3:  '<:g3:883186366878470214>',  g4:  '<:g4:883186500127293482>',  g5:  '<:g5:883186451980894208>',
    h0:  '🇭',  h1:  '<:h1:883186282686206012>', h2:  '<:h2:883186160158015528>',  h3:  '<:h3:883186370821120030>',  h4:  '<:h4:883186494934749235>',  h5:  '<:h5:883186449778884608>',
    i0:  '🇮',  i1:  '<:i1:883186301967433778>',  i2:  '<:i2:883186169288990761>',  i3:  '<:i3:883186365376917534>',  i4:  '<:i4:883186472532992050>',  i5:  '<:i5:883186422813712395>',
    j0:  '🇯',  j1:  '<:j1:883186292979027978>',  j2:  '<:j2:883186157079367681>',  j3:  '<:j3:883186354337509456>',  j4:  '<:j4:883186468212842567>',  j5:  '<:j5:883186434956201994>',
    k0:  '🇰',  k1:  '<:k1:883186308112064562>',  k2:  '<:k2:883186155770740807>',  k3:  '<:k3:883186359131570207>',  k4:  '<:k4:883186504371953664>',  k5:  '<:k5:883186453994151987>',
    l0:  '🇱',  l1:  '<:l1:883186304056164402>',  l2:  '<:l2:883186171717509191>',  l3:  '<:l3:883186355537076254>',  l4:  '<:l4:883186488089641020>',  l5:  '<:l5:883186446872248392>',
    m0:  '🇲',  m1:  '<:m1:883186297404030976>',  m2:  '<:m2:883186161407897621>',  m3:  '<:m3:883186365804712038>',  m4:  '<:m4:883186464991625266>',  m5:  '<:m5:883186424906666045>',
    n0:  '🇳',  n1:  '<:n1:883186308653154375>',  n2:  '<:n2:883186156865458296>',  n3:  '<:n3:883186349883138058>',  n4:  '<:n4:883186499531722805>',  n5:  '<:n5:883186427318386718>',
    o0:  '🇴',  o1:  '<:o1:883186309500379219>',  o2:  '<:o2:883186164981432350>',  o3:  '<:o3:883186369860608000>',  o4:  '<:o4:883186489872236604>',  o5:  '<:o5:883186431340736562>',
    p0:  '🇵',  p1:  '<:p1:883186288461754409>',  p2:  '<:p2:883186166571090000>',  p3:  '<:p3:883186367801204767>',  p4:  '<:p4:883186485057187870>',  p5:  '<:p5:883186439901286401>',
    q0:  '🇶',  q1:  '<:q1:883186302655266848>',  q2:  '<:q2:883186150850834513>',  q3:  '<:q3:883186373648072735>',  q4:  '<:q4:883186470242893854>',  q5:  '<:q5:883186423891632158>',
    r0:  '🇷',  r1:  '<:r1:883186287614492713>',  r2:  '<:r2:883186153304502303>',  r3:  '<:r3:883186351170781184>',  r4:  '<:r4:883186479386492983>',  r5:  '<:r5:883186438080954368>',
    s0:  '🇸',  s1:  '<:s1:883186299979325540>',  s2:  '<:s2:883186160954933288>',  s3:  '<:s3:883186374839246849>',  s4:  '<:s4:883186476219764816>',  s5:  '<:s5:883186445001560086>',
    t0:  '🇹',  t1:  '<:t1:883186306782494730>',  t2:  '<:t2:883186170794754068>',  t3:  '<:t3:883186357390946355>',  t4:  '<:t4:883186498827075604>',  t5:  '<:t5:883186425745510430>',
    u0:  '🇺',  u1:  '<:u1:883186281809588275>',  u2:  '<:u2:883186154223067206>',  u3:  '<:u3:883186377200648272>',  u4:  '<:u4:883186478887350272>',  u5:  '<:u5:883186439192453120>',
    v0:  '🇻',  v1:  '<:v1:883186300621037602>',  v2:  '<:v2:883186167539961856>',  v3:  '<:v3:883186378022744074>',  v4:  '<:v4:883186477947830292>',  v5:  '<:v5:883186452714897408>',
    w0:  '🇼',  w1:  '<:w1:883186295390732360>',  w2:  '<:w2:883186169859412020>',  w3:  '<:w3:883186348910080000>',  w4:  '<:w4:883186505483452426>', w5:  '<:w5:883186429902065724>',
    x0:  '🇽',  x1:  '<:x1:883186304916021319>',  x2:  '<:x2:883186159327510528>',  x3:  '<:x3:883186368510054491>',  x4:  '<:x4:883186501972815874>',  x5:  '<:x5:883186428706689085>',
    y0:  '🇾',  y1:  '<:y1:883186276520579072>',  y2:  '<:y2:883186168550789190>',  y3:  '<:y3:883186378857381938>',  y4:  '<:y4:883186501410766869>',  y5:  '<:y5:883186422138404884>',
    z0:  '🇿',  z1:  '<:z1:883186291238404156>',  z2:  '<:z2:883186164054499368>',  z3:  '<:z3:883186372574343169>',  z4:  '<:z4:883186473397022750>',  z5:  '<:z5:883186418757824512>',
    ' 0':  '<:blank0:883186162058035244>',  ' 1':  '<:blank1:883186172153712713>',  ' 2':  '<:blank2:883186163219832843>',  ' 3':  '<:blank3:883186151660335134>',  ' 4':  '<:blank4:883186165828694116>',  ' 5':  '<:blank5:883186158333476984>',
    '00': '0\ufe0f\u20e3',    '01': '<:01:883186466916806666>',    '02': '<:02:883186495828131860>',    '03': '<:03:883186458402377738>',    '04': '<:04:883186455093055499>',    '05': '<:05:883186278273794068>',    '06': '<:06:883186295030026260>',
    '10': '1\ufe0f\u20e3',    '11': '<:11:883186492812427324>',    '12': '<:12:883186503449210890>',    '13': '<:13:883186420070641704>',    '14': '<:14:883186441499340801>',    '15': '<:15:883186273685221376>',    '16': '<:16:883186313778581576>',
    '20': '2\ufe0f\u20e3',    '21': '<:21:883186465893404752>',    '22': '<:22:883186493726789713>',    '23': '<:23:883186430581547048>',    '24': '<:24:883186428203384852>',    '25': '<:25:883186285743845416>',    '26': '<:26:883186298167382056>',
    '30': '3\ufe0f\u20e3',    '31': '<:31:883186483031326790>',    '32': '<:32:883186482179874906>',    '33': '<:33:883186459090243635>',    '34': '<:34:883186446301802526>',    '35': '<:35:883186291477454879>',    '36': '<:36:883186278852620299>',
    '40': '4\ufe0f\u20e3',    '41': '<:41:883186477008310272>',    '42': '<:42:883186490354581526>',    '43': '<:43:883186433035214868>',    '44': '<:44:883186457345396777>',    '45': '<:45:883186293952106517>',    '46': '<:46:883186283638292481>',
    '50': '5\ufe0f\u20e3',    '51': '<:51:883186491638054962>',    '52': '<:52:883186497627512883>',    '53': '<:53:883186421115027476>',    '54': '<:54:883186437149822997>',    '55': '<:55:883186290365968484>',    '56': '<:56:883186305964576768>',
    '60': '6\ufe0f\u20e3',    '61': '<:61:883186481445879878>',    '62': '<:62:883186463259369512>',    '63': '<:63:883186448927449128>',    '64': '<:64:883186456460419142>',    '65': '<:65:883186277254569985>',    '66': '<:66:883186310976786472>',
    '70': '7\ufe0f\u20e3',    '71': '<:71:883186487116587069>',    '72': '<:72:883186489108865025>',    '73': '<:73:883186448252141568>',    '74': '<:74:883186434092199956>',    '75': '<:75:883186274712842260>',    '76': '<:76:883186298737786922>',
    '80': '8\ufe0f\u20e3',    '81': '<:81:883186469471125544>',    '82': '<:82:883186475250909244>',    '83': '<:83:883186426571792384>',    '84': '<:84:883186432141824010>',    '85': '<:85:883186284762374164>',    '86': '<:86:883186311832436777>',
    '90': '9\ufe0f\u20e3',    '91': '<:91:883186480607035422>',    '92': '<:92:883186486260944916>',    '93': '<:93:883186443298676736>',    '94': '<:94:883186453188866049>',    '95': '<:95:883186313229119499>',    '96': '<:96:883186280966541342>',
}



module.exports = {
    name: 'reactmessage',
    description: 'reacts with emojis to input message',
    options: [
        {
            name: "rmessage",
            description: "Message that will be reacted.",
            type: "STRING",
            required: true

        }
    ],
    async execute(client, interaction, arguments) {
        var sendError = false;
        interaction.reply('Reaction being sent.')
        var reactTarget = await interaction.fetchReply();
        var message = interaction.options.getString('rmessage')
        var charLenght = message.length;
        var reactChars = message.split('');
        var numVars = [
            'aNum', 0,
            'bNum', 0,
            'cNum', 0,
            'dNum', 0,
            'eNum', 0,
            'fNum', 0,
            'gNum', 0,
            'hNum', 0,
            'iNum', 0,
            'jNum', 0,
            'kNum', 0,
            'lNum', 0,
            'mNum', 0,
            'nNum', 0,
            'oNum', 0,
            'pNum', 0,
            'qNum', 0,
            'rNum', 0,
            'sNum', 0,
            'tNum', 0,
            'uNum', 0,
            'vNum', 0,
            'wNum', 0,
            'xNum', 0,
            'yNum', 0,
            'zNum', 0,
            ' Num', 0,
            '!Num', 0,
            '.Num', 0,
            '/Num', 0,
            '?Num', 0,
            '1Num', 0,
            '2Num', 0,
            '3Num', 0,
            '4Num', 0,
            '5Num', 0,
            '6Num', 0,
            '7Num', 0,
            '8Num', 0,
            '9Num', 0,
            '0Num', 0,
        ]


        if (charLenght > 20) {    

        } else {
            for (var i = 0; i < charLenght; i++) {
                var currentChar = reactChars[i].toLowerCase() + "Num";
                
                if (numVars.includes(currentChar) === true) {
                    var charPos = numVars.indexOf(currentChar) + 1;
                    var reactCharPos = numVars.indexOf(currentChar);
                    var reactCharName = numVars[reactCharPos].slice(0, 1) + numVars[charPos];
                    reactTarget.react(charEmojis[reactCharName])
                    numVars[charPos]++;

                } else if (numVars.includes(currentChar) === false) {
                    sendError = true;
                }
            }
            
        }
    
    }
}