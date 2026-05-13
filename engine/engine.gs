//Coding by Emad Adel
//https://github.com/emadadeldev/

/**
    * @private
    * @type {number}
    */
var NIL = 0x0000;

/**
    * @TODO replace with charsMap.length
    * @private
    * @type {number}
    */
var MAP_LENGTH = 75;

/**
    * @TODO replace with combCharsMap.length
    * @private
    * @type {number}
    */
var COMB_MAP_LENGTH = 4;

/**
    * @TODO replace with transChars.length
    * @private
    * @type {number}
    */
var TRANS_CHARS_LENGTH = 39;


/**
    * TODO refactor charsMap for the following structure
    * @private
    * @type {{code: number, mIsolated: number, mInitial: number, mMedial: number, mFinal: number}}
    */
//var CharRep = {
//    code: 0,
//    mIsolated: 0,
//    mInitial: 0,
//    mMedial: 0,
//    mFinal: 0
//};

/**
    * TODO refactor combCharsMap for the following structure
    * @private
    * @type {{code: number, mIsolated: number, mInitial: number, mMedial: number, mFinal: number}}
    */
//var CombCharRep = {
//    code: 0,
//    mIsolated: 0,
//    mInitial: 0,
//    mMedial: 0,
//    mFinal: 0
//};

/**
    * @private
    * @type {*[]}
    */
var charsMap = [
    [0x0621, 0xFE80, NIL, NIL, NIL], /* HAMZA */
    [0x0622, 0xFE81, NIL, NIL, 0xFE82], /* ALEF_MADDA */
    [0x0623, 0xFE83, NIL, NIL, 0xFE84], /* ALEF_HAMZA_ABOVE */
    [0x0624, 0xFE85, NIL, NIL, 0xFE86], /* WAW_HAMZA */
    [0x0625, 0xFE87, NIL, NIL, 0xFE88], /* ALEF_HAMZA_BELOW */
    [0x0626, 0xFE89, 0xFE8B, 0xFE8C, 0xFE8A], /* YEH_HAMZA */
    [0x0627, 0xFE8D, NIL, NIL, 0xFE8E], /* ALEF */
    [0x0628, 0xFE8F, 0xFE91, 0xFE92, 0xFE90], /* BEH */
    [0x0629, 0xFE93, NIL, NIL, 0xFE94], /* TEH_MARBUTA */
    [0x062A, 0xFE95, 0xFE97, 0xFE98, 0xFE96], /* TEH */
    [0x062B, 0xFE99, 0xFE9B, 0xFE9C, 0xFE9A], /* THEH */
    [0x062C, 0xFE9D, 0xFE9F, 0xFEA0, 0xFE9E], /* JEEM */
    [0x062D, 0xFEA1, 0xFEA3, 0xFEA4, 0xFEA2], /* HAH */
    [0x062E, 0xFEA5, 0xFEA7, 0xFEA8, 0xFEA6], /* KHAH */
    [0x062F, 0xFEA9, NIL, NIL, 0xFEAA], /* DAL */
    [0x0630, 0xFEAB, NIL, NIL, 0xFEAC], /* THAL */
    [0x0631, 0xFEAD, NIL, NIL, 0xFEAE], /* REH */
    [0x0632, 0xFEAF, NIL, NIL, 0xFEB0], /* ZAIN */
    [0x0633, 0xFEB1, 0xFEB3, 0xFEB4, 0xFEB2], /* SEEN */
    [0x0634, 0xFEB5, 0xFEB7, 0xFEB8, 0xFEB6], /* SHEEN */
    [0x0635, 0xFEB9, 0xFEBB, 0xFEBC, 0xFEBA], /* SAD */
    [0x0636, 0xFEBD, 0xFEBF, 0xFEC0, 0xFEBE], /* DAD */
    [0x0637, 0xFEC1, 0xFEC3, 0xFEC4, 0xFEC2], /* TAH */
    [0x0638, 0xFEC5, 0xFEC7, 0xFEC8, 0xFEC6], /* ZAH */
    [0x0639, 0xFEC9, 0xFECB, 0xFECC, 0xFECA], /* AIN */
    [0x063A, 0xFECD, 0xFECF, 0xFED0, 0xFECE], /* GHAIN */
    [0x0640, 0x0640, 0x0640, 0x0640, 0x0640], /* TATWEEL */
    [0x0641, 0xFED1, 0xFED3, 0xFED4, 0xFED2], /* FEH */
    [0x0642, 0xFED5, 0xFED7, 0xFED8, 0xFED6], /* QAF */
    [0x0643, 0xFED9, 0xFEDB, 0xFEDC, 0xFEDA], /* KAF */
    [0x0644, 0xFEDD, 0xFEDF, 0xFEE0, 0xFEDE], /* LAM */
    [0x0645, 0xFEE1, 0xFEE3, 0xFEE4, 0xFEE2], /* MEEM */
    [0x0646, 0xFEE5, 0xFEE7, 0xFEE8, 0xFEE6], /* NOON */
    [0x0647, 0xFEE9, 0xFEEB, 0xFEEC, 0xFEEA], /* HEH */
    [0x0648, 0xFEED, NIL, NIL, 0xFEEE], /* WAW */
//[ 0x0649, 0xFEEF, 0xFBE8, 0xFBE9, 0xFEF0 ],    /* ALEF_MAKSURA */
    [0x0649, 0xFEEF, NIL, NIL, 0xFEF0], /* ALEF_MAKSURA */
    [0x064A, 0xFEF1, 0xFEF3, 0xFEF4, 0xFEF2], /* YEH */
    //new
    [0x0671, 0xFB50, NIL, NIL,    0xFB51], /* ALEF WASLA */
    [0x0679, 0xFB66, 0xFB68, 0xFB69, 0xFB67], /* TTEH */
    [0x067A, 0xFB5E, 0xFB60, 0xFB61, 0xFB5F], /* TTEHEH */
    [0x067B ,0xFB52, 0xFB54, 0xFB55, 0xFB53], /* BEEH */
    [0x067E, 0xFB56, 0xFB58, 0xFB59, 0xFB57], /* PEH */
        [0x067F, 0xFB62, 0xFB64, 0xFB65, 0xFB63], /* TEHEH */
        [0x0680, 0xFB5A, 0xFB5C, 0xFB5D, 0xFB5B], /* BEHEH */
        [0x0683, 0xFB76, 0xFB78, 0xFB79, 0xFB77], /* NYEH */
        [0x0684, 0xFB72, 0xFB74, 0xFB75, 0xFB73], /* DYEH */
        [0x0686, 0xFB7A, 0xFB7C, 0xFB7D, 0xFB7B], /* TCHEH */
        [0x0687, 0xFB7E, 0xFB80, 0xFB81, 0xFB7F], /* TCHEHEH */
        [0x0688, 0xFB88, NIL,NIL, 0xFB89], /* DDAL */
        [0x068C, 0xFB84, NIL,NIL, 0xFB85], /* DAHAL */
        [0x068D, 0xFB82, NIL,NIL, 0xFB83], /* DDAHAL */
        [0x068E, 0xFB86, NIL,NIL, 0xFB87], /* DUL */
        [0x0691, 0xFB8C, NIL,NIL, 0xFB8D], /* RREH */
        [0x0698, 0xFB8A, NIL,NIL, 0xFB8B], /* JEH */
        [0x06A4, 0xFB6A, 0xFB6C, 0xFB6D, 0xFB6B], /* VEH */
        [0x06A6, 0xFB6E, 0xFB70, 0xFB71, 0xFB6F], /* PEHEH */
        [0x06A9, 0xFB8E, 0xFB90, 0xFB91, 0xFB8F], /* KEHEH */
        [0x06AD, 0xFBD3, 0xFBD5, 0xFBD6, 0xFBD4], /* NG */
        [0x06AF, 0xFB92, 0xFB94, 0xFB95, 0xFB93], /* GAF */
        [0x06B1, 0xFB9A, 0xFB9C, 0xFB9D, 0xFB9B], /* NGOEH */
        [0x06B3, 0xFB96, 0xFB98, 0xFB99, 0xFB97], /* GUEH */
        [0x06BB, 0xFBA0, 0xFBA2, 0xFBA3, 0xFBA1], /* RNOON */
        [0x06BE, 0xFBAA, 0xFBAC, 0xFBAD, 0xFBAB], /* HEH DOACHASHMEE */
        [0x06C0, 0xFBA4, NIL, NIL, 0xFBA5], /* HEH WITH YEH ABOVE */
        [0x06C1, 0xFBA6, 0xFBA8, 0xFBA9, 0xFBA7], /* HEH GOAL */
        [0x06C5, 0xFBE0, NIL, NIL, 0xFBE1], /* KIRGHIZ OE */
        [0x06C6, 0xFBD9, NIL, NIL, 0xFBDA], /* OE */
        [0x06C7, 0xFBD7, NIL, NIL, 0xFBD8], /* U */
        [0x06C8, 0xFBDB, NIL, NIL, 0xFBDC], /* YU */
        [0x06C9, 0xFBE2, NIL, NIL, 0xFBE3], /* KIRGHIZ YU */
        [0x06CB, 0xFBDE, NIL, NIL, 0xFBDF], /* VE */
        [0x06CC, 0xFBFC, 0xFBFE, 0xFBFF, 0xFBFD], /* FARSI YEH */
        [0x06D0, 0xFBE4, 0xFBE6, 0xFBE7, 0xFBE5], /* E */
        [0x06D2, 0xFBAE, NIL, NIL, 0xFBAF], /* YEH BARREE */
        [0x06D3, 0xFBB0, NIL, NIL, 0xFBB1]  /* YEH BARREE WITH HAMZA ABOVE */
];

/**
    * @private
    * @type {*[]}
    */
var combCharsMap = [
    [[0x0644, 0x0622], 0xFEF5, NIL, NIL, 0xFEF6], /* LAM_ALEF_MADDA */
    [[0x0644, 0x0623], 0xFEF7, NIL, NIL, 0xFEF8], /* LAM_ALEF_HAMZA_ABOVE */
    [[0x0644, 0x0625], 0xFEF9, NIL, NIL, 0xFEFA], /* LAM_ALEF_HAMZA_BELOW */
    [[0x0644, 0x0627], 0xFEFB, NIL, NIL, 0xFEFC] /* LAM_ALEF */
];

var transChars = [
    0x0610, /* ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM */
    0x0612, /* ARABIC SIGN ALAYHE ASSALLAM */
    0x0613, /* ARABIC SIGN RADI ALLAHOU ANHU */
    0x0614, /* ARABIC SIGN TAKHALLUS */
    0x0615, /* ARABIC SMALL HIGH TAH */
    0x064B, /* ARABIC FATHATAN */
    0x064C, /* ARABIC DAMMATAN */
    0x064D, /* ARABIC KASRATAN */
    0x064E, /* ARABIC FATHA */
    0x064F, /* ARABIC DAMMA */
    0x0650, /* ARABIC KASRA */
    0x0651, /* ARABIC SHADDA */
    0x0652, /* ARABIC SUKUN */
    0x0653, /* ARABIC MADDAH ABOVE */
    0x0654, /* ARABIC HAMZA ABOVE */
    0x0655, /* ARABIC HAMZA BELOW */
    0x0656, /* ARABIC SUBSCRIPT ALEF */
    0x0657, /* ARABIC INVERTED DAMMA */
    0x0658, /* ARABIC MARK NOON GHUNNA */
    0x0670, /* ARABIC LETTER SUPERSCRIPT ALEF */
    0x06D6, /* ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA */
    0x06D7, /* ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA */
    0x06D8, /* ARABIC SMALL HIGH MEEM INITIAL FORM */
    0x06D9, /* ARABIC SMALL HIGH LAM ALEF */
    0x06DA, /* ARABIC SMALL HIGH JEEM */
    0x06DB, /* ARABIC SMALL HIGH THREE DOTS */
    0x06DC, /* ARABIC SMALL HIGH SEEN */
    0x06DF, /* ARABIC SMALL HIGH ROUNDED ZERO */
    0x06E0, /* ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO */
    0x06E1, /* ARABIC SMALL HIGH DOTLESS HEAD OF KHAH */
    0x06E2, /* ARABIC SMALL HIGH MEEM ISOLATED FORM */
    0x06E3, /* ARABIC SMALL LOW SEEN */
    0x06E4, /* ARABIC SMALL HIGH MADDA */
    0x06E7, /* ARABIC SMALL HIGH YEH */
    0x06E8, /* ARABIC SMALL HIGH NOON */
    0x06EA, /* ARABIC EMPTY CENTRE LOW STOP */
    0x06EB, /* ARABIC EMPTY CENTRE HIGH STOP */
    0x06EC, /* ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE */
    0x06ED  /* ARABIC SMALL LOW MEEM */
];


/**
    * TODO rename into camelCase
    * @private
    *
    * @param code
    * @returns {boolean}
    */
function characterMapContains(code)
{
    for (var i = 0; i < MAP_LENGTH; i++)
    {
        //[0] == .code
        if (charsMap[i][0] === code) {
            return true;
        }
    }

    return false;
}

/**
    * TODO rename into camelCase
    * @private
    *
    * @param code
    * @returns {CharRep}
    */
function getCharRep(code)
{
    for (var i = 0; i < MAP_LENGTH; i++)
    {
        //[0] == .code
        if (charsMap[i][0] === code) {
            return charsMap[i];
        }
    }

    //FIXME CharRep object
    return [ NIL, NIL, NIL, NIL ];
}


/**
    * @TODO rename into camelCase
    * @private
    *
    * @param code1
    * @param code2
    * @returns {CombCharRep}
    */
function  getCombCharRep( code1, code2)
{
    for (var i = 0; i < COMB_MAP_LENGTH; i++)
    {
        //[0] == .code
        if (combCharsMap[i][0][0] === code1 && combCharsMap[i][0][1] === code2) {
            return combCharsMap[i];
        }
    }

    //FIXME CombCharRep object
    return [[ NIL, NIL ], NIL, NIL, NIL ];
}

/**
    * @TODO rename into camelCase
    * @private
    *
    * @param code
    * @returns {boolean}
    */
function isTransparent(code)
{
    for (var i = 0; i < TRANS_CHARS_LENGTH; i++)
    {
        if (transChars[i] === code) {
            return true;
        }
    }
    return false;
}

/**
    * convert to Arabic Presentation Forms B
    * @param normal
    * @returns {string}
    */
function convertArabic(normal) {
    if (!normal){
        return '';
    }

    var len = normal.length;
    /* typeof CharRep*/
    var crep;

    /* typeof CombCharRep*/
    var combcrep;

    var shaped = [];

    var writeCount = 0;
    for (var i = 0; i < len; i++) {
        var current = normal.charCodeAt(i);
        if (characterMapContains(current)) {
            var prev = NIL;
            var next = NIL;
            var prevID = i - 1;
            var nextID = i + 1;

            /*
                Transparent characters have no effect in the shaping process.
                So, ignore all the transparent characters that are BEFORE the
                current character.
                */
            for (; prevID >= 0; prevID--) {
                if (!isTransparent(normal.charCodeAt(prevID))) {
                    break;
                }
            }


            //[2] == .mInitial
            //[3] == .mMedial
            if ((prevID < 0) || !characterMapContains(prev = normal.charCodeAt(prevID)) ||
                (((crep = getCharRep(prev))[2] === NIL) && (crep[3] === NIL))) {
                prev = NIL;
            }

            /*
                Transparent characters have no effect in the shaping process.
                So, ignore all the transparent characters that are AFTER the
                current character.
                */
            for (; nextID < len; nextID++) {
                if (!isTransparent(normal.charCodeAt(nextID))) {
                    break;
                }
            }

            //[3] == .mMedial
            //[4] == .mFinal
            if ((nextID >= len) || !characterMapContains(next = normal.charCodeAt(nextID)) ||
                (((crep = getCharRep(next))[3] === NIL) &&
                ((crep = getCharRep(next))[4] === NIL) && (next !== 0x0640))) {
                next = NIL;
            }

            /* Combinations */
            if (current === 0x0644 && next !== NIL && (next === 0x0622 || next === 0x0623 ||
                next === 0x0625 || next === 0x0627)) {
                combcrep = getCombCharRep(current, next);
                if (prev !== NIL) {
                    //[4] == .mFinal
                    shaped[writeCount++] = combcrep[4];
                }
                else {
                    //[1] == .mIsolated
                    shaped[writeCount++] = combcrep[1];
                }
                i++;
                continue;
            }

            crep = getCharRep(current);

            /* Medial */
            //[3] == .mMedial
            if (prev !== NIL && next !== NIL && crep[3] !== NIL) {
                shaped[writeCount++] = crep[3];
                continue;
                /* Final */
            }
            //[4] == .mFinal
            else if (prev !== NIL && crep[4] !== NIL) {
                //[4] == .mFinal
                shaped[writeCount++] = crep[4];
                continue;
                /* Initial */
            }

            //[2] == .mInitial
            else if (next !== NIL && crep[2] !== NIL) {
                shaped[writeCount++] = crep[2];
                continue;
            }
            /* Isolated */
            //[1] == .mIsolated
            shaped[writeCount++] = crep[1];
        }
        else {
            shaped[writeCount++] = current;
        }
    }
    shaped[writeCount] = NIL;
    var toReturn = '';
    for (var d = 0; d < writeCount; d++) {

        if (typeof shaped[d] !== 'undefined') {
            //toReturn += shaped[d] +' ';
            toReturn += String.fromCharCode(shaped[d]);
        } else {
            console.error('Undefined symbol # ', d);
        }
    }

    return toReturn;
}

function ReverseSymbol(ch)
{
switch (ch)
{
    case '(':
        return ')';
    case ')':
        return '(';
    case '{':
        return '}';
    case '}':
        return '{';
    case '[':
        return ']';
    case ']':
        return '[';
    case '<':
        return '>';
    case '>':
        return '<';
    case '»':
        return '»';
    case '»':
        return '«';
}
return ch;
}
function ReplaceSymbol(text)
{

var TextArray=text.split('');
for(i=0;i<TextArray.length;i++)
{
TextArray[i]=ReverseSymbol(TextArray[i]);

}
return TextArray.join('');
}

function wordsReverserE(str){
return str.replace(/[\~](.*?)[\~]|[\<](.*?)[\>]|[\{](.*?)[\}]|[\[](.*?)[\]]|[\(](.*?)[\)]|[\«](.*)[\»]|%*.?%%|%\w+|\w%|{\d|[A-z0-9٠-٩?](.*?)[ A-z0-9٠-٩?\>\}\]\»!\-]*|[\(\{\[\]\}\)\<\>]*/gm, 
function(item) {   

if (item.endsWith(' ')){
item=" " +item.replace(/\s+$/, '')
}

item=ReverseSymbol(item);

    return item.split('').reverse().join('');
}
);
}

function wordsReverser(str){
str=str+"";
return str.replace(/[^ٮ-ۯ؀-ٟﭐ-ﻼ؟]*/gm, 
function(item) {    


    return wordsReverserE(item+"");
    } 
        ).split('').reverse().join('');
}