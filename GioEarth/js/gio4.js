var GIO = (function (exports) {
'use strict';

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * The StyleFactory will persist all pre-defined style, and return style object to ConfigureHandler by a given name
 */

var StyleFactory = ( function () {

    var styleMap = {};

    // get style API for ConfigureHandler to get a specific style object by name

    function getStyle ( styleName ) {

        return styleMap[ styleName ];

    }

    //register API for style creator

    function register( styleName, style ) {

        styleMap[ styleName ] = style;

    }

    return {

        getStyle: getStyle,

        register: register

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var BlueInkStyle = ( function () {

    return {

        color: {

            surface: 0x008DD4,

            selected: 0x608BF0,

            in: 0xFFFFFF,

            out: 0x0202EE,

            halo: 0x0E6FEE,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var EarlySpringStyle = ( function () {

    return {

        color: {

            surface: 0xB04ED4,

            selected: 0xF082EC,

            in: 0xFBC2EB,

            out: 0x7CEEB1,

            halo: 0x7CEEB1,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var FrozenBerryStyle = ( function () {

    return {

        color: {

            surface: 0xE8198B,

            selected: 0x81F5FD,

            in: 0xE8198B,

            out: 0x81F5FD,

            halo: 0x81F5FD,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var GorgeousDreamStyle = ( function () {

    return {

        color: {

            surface: 0x7828D4,

            selected: 0x527CF0,

            in: 0xCC208E,

            out: 0x3126D2,

            halo: 0x7A6BFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var JuicyCakeStyle = ( function () {

    return {

        color: {

            surface: 0xCE26D4,

            selected: 0xE8F000,

            in: 0xF7BB2F,

            out: 0xE155AB,

            halo: 0xF9A6FF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var LemonGateStyle = ( function () {

    return {

        color: {

            surface: 0x9C63D4,

            selected: 0x913DFF,

            in: 0x8A6AD4,

            out: 0x3486E4,

            halo: 0x3BCBFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

// Developer can adjust and define their own style like this, and contribute to our repository

var MagicStyle = ( function () {

    return {

        color: {

            surface: 0xff0000,

            selected: 0x0000ff,

            in: 0x154492,

            out: 0xdd380c,

            halo: 0x00ff00,

            background: 0x222222
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var MintStyle = ( function () {

    return {

        color: {

            surface: 0x4BB007,

            selected: 0x59E37D,

            in: 0x7CFC56,

            out: 0x2E92AB,

            halo: 0xBDFFC8,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var NearMoonStyle = ( function () {

    return {

        color: {

            surface: 0x9C63D4,

            selected: 0x913DFF,

            in: 0x8A6AD4,

            out: 0x3486E4,

            halo: 0x3BCBFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var OctoberPartyStyle = ( function () {

    return {

        color: {

            surface: 0x1724D4,

            selected: 0x8D4AF0,

            in: 0xDCE31E,

            out: 0x3B1BDE,

            halo: 0xEEEE7E,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var RedBlueStyle = ( function () {

    return {

        color: {

            surface: 0x7E0BB0,

            selected: 0xFF8000,

            in: 0xFF0000,

            out: 0x0A85CC,

            halo: 0x0883FF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var StrawberryStyle = ( function () {

    return {

        color: {

            surface: 0xB066A6,

            selected: 0xE2717C,

            in: 0xFFFFFF,

            out: 0xE20000,

            halo: 0xFF5E5E,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var SunsetStyle = ( function () {

    return {

        color: {

            surface: 0x9F04B0,

            selected: 0xE3DF62,

            in: 0xFF7803,

            out: 0xE20000,

            halo: 0xFFB60A,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

// developer need to register their new style to StyleFactory here

StyleFactory.register( "blueInk", BlueInkStyle );

StyleFactory.register( "earlySpring", EarlySpringStyle );

StyleFactory.register( "frozenBerry", FrozenBerryStyle );

StyleFactory.register( "gorgeousDream", GorgeousDreamStyle );

StyleFactory.register( "juicyCake", JuicyCakeStyle );

StyleFactory.register( "lemonGate", LemonGateStyle );

StyleFactory.register( "magic", MagicStyle );

StyleFactory.register( "mint", MintStyle );

StyleFactory.register( "nearMoon", NearMoonStyle );

StyleFactory.register( "octoberParty", OctoberPartyStyle );

StyleFactory.register( "redBlue", RedBlueStyle );

StyleFactory.register( "strawberry", StrawberryStyle );

StyleFactory.register( "sunset", SunsetStyle );

/**
 * @author syt123450 / https://github.com/syt123450
 * @author Botime / https://github.com/BoTime
 */

/**
 * This is a singleton object.
 * When getting picked clicked color, the surfaceHandler will lookup the clicked country through this map.
 */

var CountryColorMap = ( function () {

    return {

        '1': 'PE',
        '2': 'BF',
        '3': 'FR',
        '4': 'LY',
        '5': 'BY',
        '6': 'PK',
        '7': 'ID',
        '8': 'YE',
        '9': 'MG',
        '10': 'BO',
        '11': 'CI',
        '12': 'DZ',
        '13': 'CH',
        '14': 'CM',
        '15': 'MK',
        '16': 'BW',
        '17': 'UA',
        '18': 'KE',
        '19': 'TW',
        '20': 'JO',
        '21': 'MX',
        '22': 'AE',
        '23': 'BZ',
        '24': 'BR',
        '25': 'SL',
        '26': 'ML',
        '27': 'CD',
        '28': 'IT',
        '29': 'SO',
        '30': 'AF',
        '31': 'BD',
        '32': 'DO',
        '33': 'GW',
        '34': 'GH',
        '35': 'AT',
        '36': 'SE',
        '37': 'TR',
        '38': 'UG',
        '39': 'MZ',
        '40': 'JP',
        '41': 'NZ',
        '42': 'CU',
        '43': 'VE',
        '44': 'PT',
        '45': 'CO',
        '46': 'MR',
        '47': 'AO',
        '48': 'DE',
        '49': 'SD',
        '50': 'TH',
        '51': 'AU',
        '52': 'PG',
        '53': 'IQ',
        '54': 'HR',
        '55': 'GL',
        '56': 'NE',
        '57': 'DK',
        '58': 'LV',
        '59': 'RO',
        '60': 'ZM',
        '61': 'IR',
        '62': 'MM',
        '63': 'ET',
        '64': 'GT',
        '65': 'SR',
        '66': 'EH',
        '67': 'CZ',
        '68': 'TD',
        '69': 'AL',
        '70': 'FI',
        '71': 'SY',
        '72': 'KG',
        '73': 'SB',
        '74': 'OM',
        '75': 'PA',
        '76': 'AR',
        '77': 'GB',
        '78': 'CR',
        '79': 'PY',
        '80': 'GN',
        '81': 'IE',
        '82': 'NG',
        '83': 'TN',
        '84': 'PL',
        '85': 'NA',
        '86': 'ZA',
        '87': 'EG',
        '88': 'TZ',
        '89': 'GE',
        '90': 'SA',
        '91': 'VN',
        '92': 'RU',
        '93': 'HT',
        '94': 'BA',
        '95': 'IN',
        '96': 'CN',
        '97': 'CA',
        '98': 'SV',
        '99': 'GY',
        '100': 'BE',
        '101': 'GQ',
        '102': 'LS',
        '103': 'BG',
        '104': 'BI',
        '105': 'DJ',
        '106': 'AZ',
        '107': 'MY',
        '108': 'PH',
        '109': 'UY',
        '110': 'CG',
        '111': 'RS',
        '112': 'ME',
        '113': 'EE',
        '114': 'RW',
        '115': 'AM',
        '116': 'SN',
        '117': 'TG',
        '118': 'ES',
        '119': 'GA',
        '120': 'HU',
        '121': 'MW',
        '122': 'TJ',
        '123': 'KH',
        '124': 'KR',
        '125': 'HN',
        '126': 'IS',
        '127': 'NI',
        '128': 'CL',
        '129': 'MA',
        '130': 'LR',
        '131': 'NL',
        '132': 'CF',
        '133': 'SK',
        '134': 'LT',
        '135': 'ZW',
        '136': 'LK',
        '137': 'IL',
        '138': 'LA',
        '139': 'KP',
        '140': 'GR',
        '141': 'TM',
        '142': 'EC',
        '143': 'BJ',
        '144': 'SI',
        '145': 'NO',
        '146': 'MD',
        '147': 'LB',
        '148': 'NP',
        '149': 'ER',
        '150': 'US',
        '151': 'KZ',
        '152': 'AQ',
        '153': 'SZ',
        '154': 'UZ',
        '155': 'MN',
        '156': 'BT',
        '157': 'NC',
        '158': 'FJ',
        '159': 'KW',
        '160': 'TL',
        '161': 'BS',
        '162': 'VU',
        '163': 'FK',
        '164': 'GM',
        '165': 'QA',
        '166': 'JM',
        '167': 'CY',
        '168': 'PR',
        '169': 'PS',
        '170': 'BN',
        '171': 'TT',
        '172': 'CV',
        '173': 'PF',
        '174': 'WS',
        '175': 'LU',
        '176': 'KM',
        '177': 'MU',
        '178': 'FO',
        '179': 'ST',
        '181': 'DM',
        '182': 'TO',
        '183': 'KI',
        '184': 'FM',
        '185': 'BH',
        '186': 'AD',
        '187': 'MP',
        '188': 'PW',
        '189': 'SC',
        '190': 'AG',
        '191': 'BB',
        '192': 'TC',
        '193': 'VC',
        '194': 'LC',
        '195': 'YT',
        '196': 'VI',
        '197': 'GD',
        '198': 'MT',
        '199': 'MV',
        '200': 'KY',
        '201': 'KN',
        '202': 'MS',
        '203': 'BL',
        '204': 'NU',
        '205': 'PM',
        '206': 'CK',
        '207': 'WF',
        '208': 'AS',
        '209': 'MH',
        '210': 'AW',
        '211': 'LI',
        '212': 'VG',
        '213': 'SH',
        '214': 'JE',
        '215': 'AI',
        '217': 'GG',
        '218': 'SM',
        '219': 'BM',
        '220': 'TV',
        '221': 'NR',
        '222': 'GI',
        '223': 'PN',
        '224': 'MC',
        '225': 'VA',
        '226': 'IM',
        '227': 'GU',
        '228': 'SG'

    };

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 * @author mokuteno / https://github.com/manymeeting
 */

/**
 * it contains static function, the functions will be called by other component in whole project.
 * The stateless function can be added here.
 */

var Utils = ( function () {

    function isString( str ) {

        return ( typeof str === 'string' ) && str.constructor === String;

    }

    function transformStringToHex( str ) {

        if ( str.charAt( 0 ) !== "#" ) {

            return null;

        }

        return parseInt( str.substring( 1 ), 16 );

    }

    function formatHexColor( color ) {

        if ( color < 0 || color > 16777215 ) {

            return null;

        }

        return color;

    }

    function getElementViewTop ( element ){

        var actualTop = element.offsetTop;
        var current = element.offsetParent;
    
        while ( current !== null ) {

            actualTop += current.offsetTop;
            current = current.offsetParent;

        }

        var elementScrollTop;

        if ( document.compatMode === "BackCompat" ) {

            elementScrollTop = document.body.scrollTop;

	    } else {

            if ( document.documentElement.scrollTop === 0 ) {

                elementScrollTop = document.body.scrollTop;

	        } else {

                elementScrollTop = document.documentElement.scrollTop;

            }

        }

        return actualTop - elementScrollTop;

    }

    function getElementViewLeft ( element ) {

        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        
        while ( current !== null ) {

            actualLeft += current.offsetLeft;
            current = current.offsetParent;

        }

        var elementScrollLeft;

	    if ( document.compatMode === "BackCompat" ) {

	        elementScrollLeft = document.body.scrollLeft;

        } else {

            if ( document.documentElement.scrollTop === 0 ) {

                elementScrollLeft = document.body.scrollLeft;

            } else {

                elementScrollLeft = document.documentElement.scrollLeft;

            }

        }

        return actualLeft - elementScrollLeft;

    }

    function isArray( value ) {

        return Array.isArray( value );

    }


    return {

        // temporarily constrain value to ( -Math.PI, Math.PI )

        wrap: function ( value, min, range ) {

            range -= min;

            while ( value < min ) {

                value += range;

            }

            return value % range;

        },

        // constrain the value in a range

        constrain: function ( v, min, max ) {

            if ( v < min ) {

                v = min;

            } else if ( v > max ) {

                v = max;

            }

            return v;

        },

        // format code to hex type (the input may "#000000" or 0x000000)

        formatColor: function ( color ) {

            if ( isString( color ) ) {

                return transformStringToHex( color );

            } else {

                return formatHexColor( color );

            }

        },

        // transform brightness from user's input (0 - 1) to (min - max)

        transformBrightness: function ( brightness, min, max ) {

            if ( brightness > 1 ) {

                return max;

            }

            if ( brightness < 0 ) {

                return min;

            }

            return Math.floor( min + ( max - min ) * brightness );

        },

        // deep clone an object from a country data, add more information for user's callback

        transformCountryData: function ( countryData ) {

            var outputData = {};

            outputData.name = countryData.name;
            outputData.lat = countryData.lat;
            outputData.lon = countryData.lon;
            outputData.center = countryData.center.clone();
            outputData.ISOCode = CountryColorMap[ countryData.colorCode ];

            return outputData;

        },

        /**
        * Flatten country data based on given min and max value.
        *
        * @param {Array} data
        *   An array of data to be processed.
        *   Example: [
        *      {
        *        "e": "CN",
        *        "i": "US",
        *        "v": 3300000
        *      },
        *      {
        *        "e": "CN",
        *        "i": "RU",
        *        "v": 10000
        *      }
        *    ]
        * @param {string} valueKey
        * @param {number} definedMin
        * @param {number} definedMax
        */

        flattenCountryData: function ( data, valueKey, definedMin, definedMax ) {
            if ( data.length === 0 )
                return;
    
            var values = data.map( function ( countryData ) {
                return countryData[ valueKey ];
            });
            var min = Math.min.apply( null, values );
            var max = Math.max.apply( null, values );
            
            data.forEach( function ( country ) {

                var v = country[ valueKey ];

                if (( max - min ) !== 0) {
                    country[ valueKey ] = ( v - min ) * ( definedMax - definedMin ) / ( max - min ) + definedMin;
                }

            } );

        },

        getElementViewTop: getElementViewTop,

        getElementViewLeft: getElementViewLeft,

		isArray: isArray

    };

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all task related to the earth surface.
 */

function SurfaceHandler ( controller ) {

    var highlightColor = 255;

    var oceanMin = 0, oceanMax = 20;
    var mentionedMin = 50, mentionedMax = 100;
    var relatedMin = 100, relatedMax = 150;

    // this function return a color code range in (0 - 255) from a clicked area on the screen

    function getPickColor ( mouseX, mouseY ) {

        // first need to hide above layer and shows the map_index image

        var ctx = controller.earthSurfaceShader.lookupCanvas.getContext( '2d' );
        ctx.clearRect( 0, 0, 256, 1 );

        var oceanFill = 0;
        ctx.fillStyle = 'rgb(' + oceanFill + ',' + oceanFill + ',' + oceanFill +')';
        ctx.fillRect( 0, 0, 1, 1 );

        controller.earthSurfaceShader.uniforms[ 'outlineLevel' ].value = 0;
        controller.earthSurfaceShader.uniforms[ 'flag' ].value = 0;

        controller.rotating.remove( controller.visualizationMesh );

        controller.earthSurfaceShader.lookupTexture.needsUpdate = true;

        controller.renderer.autoClear = false;
        controller.renderer.autoClearColor = false;
        controller.renderer.autoClearDepth = false;
        controller.renderer.autoClearStencil = false;

        controller.renderer.clear();
        controller.renderer.render( controller.scene, controller.camera );

        var gl = controller.renderer.context;
        gl.preserveDrawingBuffer = true;

        var mx = ( mouseX + controller.renderer.context.canvas.width / 2 );
        var my = ( -mouseY + controller.renderer.context.canvas.height / 2 );
        mx = Math.floor( mx );
        my = Math.floor( my );

        // picked color from map_index image

        var buf = new Uint8Array( 4 );
        gl.readPixels( mx, my, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, buf );

        // restore the above layer

        controller.renderer.autoClear = true;
        controller.renderer.autoClearColor = true;
        controller.renderer.autoClearDepth = true;
        controller.renderer.autoClearStencil = true;

        gl.preserveDrawingBuffer = false;

        controller.earthSurfaceShader.uniforms[ 'outlineLevel' ].value = 1;
        controller.earthSurfaceShader.uniforms[ 'flag' ].value = 1;

        controller.rotating.add( controller.visualizationMesh );

        highlightCountry( controller.selectedCountry.colorCode );

        return buf[ 0 ];

    }

    // this function highlight the surface

    function highlightCountry ( code ) {

        var i;

        // clear the surface

        var ctx = controller.earthSurfaceShader.lookupCanvas.getContext( '2d' );
        ctx.clearRect( 0, 0, 256, 1 );

        // highlight ocean

        //ctx.fillStyle = generateFillStyle( Utils.transformBrightness( controller.configure.brightness.ocean, oceanMin, oceanMax ) );
        /*
         *2019-10-10
         * Ljf
         * 更改海洋颜色
         * */
        ctx.fillStyle = '#656565';
        ctx.fillRect( 0, 0, 1, 1 );

        // highlight mentioned countries

        if ( controller.configure.control.lightenMentioned ) {

            ctx.fillStyle = generateFillStyle(
                Utils.transformBrightness( controller.configure.brightness.mentioned, mentionedMin, mentionedMax )
            );

            for ( i in controller.mentionedCountryCodes ) {

                ctx.fillRect( controller.mentionedCountryCodes[ i ], 0, 1, 1 );

            }

        }

        // highlight related countries

        ctx.fillStyle = generateFillStyle(
            Utils.transformBrightness( controller.configure.brightness.related, relatedMin, relatedMax )
        );

        for ( i in controller.relatedCountries ) {

            ctx.fillRect( controller.relatedCountries[ i ].colorCode, 0, 1, 1 );

        }

        // highlight clicked country

        ctx.fillStyle = generateFillStyle( highlightColor );
        ctx.fillRect( code, 0, 1, 1 );

        controller.earthSurfaceShader.lookupTexture.needsUpdate = true;

    }

    function generateFillStyle ( color ) {

        return 'rgb(' + color + ',' + color + ',' + color +')';

    }

    function update () {

        controller.earthSurfaceShader.update();

        highlightCountry( controller.selectedCountry.colorCode );

    }

    return {

        getPickColor: getPickColor,

        highlightCountry: highlightCountry,

        update: update

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle rotation of the globe.
 */

function RotationHandler ( controller ) {

    var rotateX = 0, rotateY = 0;
    var rotateVX = 0, rotateVY = 0;
    var rotateTargetX = undefined;
    var rotateTargetY = undefined;
    var rotateXMax = 90 * Math.PI / 180;

    var dragging = false;
    
    var basicRotationSpeed = 0.005;
    
    var autoRotation = undefined;
    var rotationRatio = undefined;
	
    function update () {

        if ( rotateTargetX !== undefined && rotateTargetY !== undefined ) {

            rotateVX += ( rotateTargetX - rotateX ) * 0.012;
            rotateVY += ( rotateTargetY - rotateY ) * 0.012;

            if ( Math.abs( rotateTargetX - rotateX ) < 0.1 && Math.abs( rotateTargetY - rotateY ) < 0.1 ) {

                rotateTargetX = undefined;
                rotateTargetY = undefined;

            }

        } else {
	
            if ( autoRotation ) {
             
	            rotateVY = basicRotationSpeed * rotationRatio;
             
            }
         
        }

        rotateX += rotateVX;
        rotateY += rotateVY;

        rotateVX *= 0.98;
        rotateVY *= 0.98;

        if ( dragging || rotateTargetX !== undefined ) {

            rotateVX *= 0.6;
            rotateVY *= 0.6;

        }

        if ( rotateX < -rotateXMax ) {

            rotateX = -rotateXMax;
            rotateVX *= -0.95;

        }

        if ( rotateX > rotateXMax ) {

            rotateX = rotateXMax;
            rotateVX *= -0.95;

        }

        controller.rotating.rotation.x = rotateX;
        controller.rotating.rotation.y = rotateY;

    }

    function rotateToTargetCountry () {

        var selectedCountry = controller.selectedCountry;

        rotateTargetX = selectedCountry.lat * Math.PI / 180;
        var targetY0 = -( selectedCountry.lon - 9 ) * Math.PI / 180;
        var piCounter = 0;

        while( true ) {

            var targetY0Neg = targetY0 - Math.PI * 2 * piCounter;
            var targetY0Pos = targetY0 + Math.PI * 2 * piCounter;

            if ( Math.abs( targetY0Neg - controller.rotating.rotation.y ) < Math.PI ) {

                rotateTargetY = targetY0Neg;
                break;

            } else if ( Math.abs( targetY0Pos - controller.rotating.rotation.y ) < Math.PI ) {

                rotateTargetY = targetY0Pos;
                break;

            }

            piCounter++;
            rotateTargetY = Utils.wrap(targetY0, -Math.PI, Math.PI);

        }

        rotateVX *= 0.6;
        rotateVY *= 0.6;

    }
    
    function updateRotationConfig() {
        
	    autoRotation = controller.configure.control.autoRotation;
	    rotationRatio = controller.configure.control.rotationRatio;
	    
    }

    return {

        rotateToTargetCountry: rotateToTargetCountry,

        update: update,
	
	    updateRotationConfig: updateRotationConfig,

        addRotateVY: function ( VYValue ) {

            rotateVY += VYValue;

        },

        addRotateVX: function ( VXValue ) {

            rotateVX += VXValue;

        },

        setDragging: function( isDragging ) {

            dragging = isDragging;

        },

        isDragging: function () {

            return dragging;

        },

        clearRotateTargetX: function () {

            rotateTargetX = undefined;

        }

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the mouse wheel task.
 */

/*
 * 可以设置摄像机景深
 * */
function WheelHandler ( controller ) {

    var nearPoint = 800;
    var farPoint = 2000;

    function handleMWheel ( delta ) {

        if ( controller.camera.position.z + delta * 100 <= nearPoint || controller.camera.position.z + delta * 100 >= farPoint) {

            // if no zoom in or zoom out wheel page

            // document.body.scrollTop += delta * 5;
            // document.documentElement.scrollTop += delta * 5;

        } else {

            // zoom in or zoom out the camera, its just like magnify or minify the globe
            // constrain camera to 1000 - 2000

            var positionZ = Utils.constrain( controller.camera.position.z + delta * 100, nearPoint, farPoint );
            /*
             
             * 后期可抽离为单独的 设置景深的功能
             * controller.camera.position.set( 0, 0, positionZ );
             * */
            controller.camera.position.set( 0, 0, positionZ );
			console.log(' set camera position ', positionZ);
        }

    }

    return {

        handleMWheel: handleMWheel

    }

}

/**
 * @author botime / https://github.com/botime
 * @author syt123450 / https://github.com/syt123450
 */

function HaloShader ( controller ) {

    var colorVector = new THREE.Vector3();

    update();

    function update () {

        var color = new THREE.Color( controller.configure.color.halo );

        colorVector.x = color.r;
        colorVector.y = color.g;
        colorVector.z = color.b;
    }

    return {

        uniforms: {

            "haloColor": { type: 'v3', value: colorVector }

        },

        vertexShader: [

            'varying vec3 vNormal;',

            'void main() {',

                'vNormal = normalize( normalMatrix * normal );',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

            '}'

        ].join( '\n' ),

        fragmentShader: [

            'varying vec3 vNormal;',
            "uniform vec3 haloColor;",

            'void main() {',

                'float intensity = pow( 0.5 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 16.0 );',
                'gl_FragColor = vec4( haloColor, 1.0 ) * intensity;',

            '}'

        ].join( '\n' ),

        update: update

    }
}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/map_indexed.png", encoded in based64
 */

var MapIndexBase64 = ( function () {

    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEAAAAAgACAIAAAAp8GHpAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4LGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wMS0yNlQxNDo1Mzo1My0wODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTAyLTA5VDE2OjI1OjQwLTA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wMi0wOVQxNjoyNTo0MC0wODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpmZTY5MzA0My1jYWQxLTQ5ZWEtOTQ0Ny1iZmUwNDRjYTY2MTA8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6ZmU2OTMwNDMtY2FkMS00OWVhLTk0NDctYmZlMDQ0Y2E2NjEwPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6ZmU2OTMwNDMtY2FkMS00OWVhLTk0NDctYmZlMDQ0Y2E2NjEwPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmZlNjkzMDQzLWNhZDEtNDllYS05NDQ3LWJmZTA0NGNhNjYxMDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wMS0yNlQxNDo1Mzo1My0wODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQwOTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjA0ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+0dAlPQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAG0a0lEQVR42uzdO6t12Xkm7AmFQ2Eqr0wleAMFFZUpCUdGwskbFCgRFI0LBAInlmgQwoETYSWWoKuDErR+hMHh9x++qMHgjtz6JR1s19KqdZhrHsbhGc+4rkCU9rv3WnONOcZcp/uec1kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID0/uobhgIAAAAAAAAAAAAAALb6qyvH/iolEwMAAAAAAAAAAAAAgHb+iiZVAZUDAAAAAAAAAAAAAAC+5VlYvGowHdcfAAAAAAAAAAAAAADIo3aq+3CIXJheGQAAAAAAAAAAAAAAYHgRgt2j3wWaAAAAAAAAAAAAAAA7fHkl7IZtsf2mtt+16QErKWqZcpQBAAAAAAAAAAAAAEpaD75/2cTe7RydWUcCMuIoAwAAAAAAAAAAAAA81iWY3jcf/yV7rkWgV8Axe2PQ4uCgHgAAAAAAAAAAAADcWsmCi8Xj+gNcnEkkS29DgwKAngAAAAAAAAAAAAAktz3JLc6OMsDMzkSTt/+tkDe4bgAAAAAAAAAAAAAgvo8aACEIZINKAAAAAAAAAAAAAPCC6DnKAIQihw36AAAAAAAAAAAAABBUl4S0iDkKA7xUKUm8MWosfg06AAAAAAAAAAAAABBFxyS0vDjKAGwRIWfc4E6FvEHuHwAAAAAAAAAAAB7onoSWDkcHILKyId29J9ovtVWVYscy2SD3DwAAAAAAAAAAAO10j0TLhaMAUE+02O7GvzpZJ+iVSBbUBkF/AAAAAAAAAAAAqEgmG0aM/g8a6q2XCY6fXd51O4Lg5A70l839H7gdfQMAAAAAAAAAAACaKhhBlsyGyLn/lFHgCCH7aAFoyHeS/maXAiiy+ry2BAAAAAAAAAAAoDxxahg68b8r8DpDbvj8DT688RHz02LlDHEo2PhyJVrZYPufeKkJAAAAAAAAAADACwLTMMMJ/mWaa8Sa0wysqUKm0/93udrA+v2+/KvIB3MvlQEARvTFHWMCAAAAAAAAoxKYhtxB/4eEhiXdmTYQP8+DDRJ/P1NaGPGQ7qU1AEBjXxzVazvtMgAAAAAAANhHbBpmy/o/JCR9E1Q1FKRJwHv4QQLuxUsLOY7qXooDABQUM/c/RBsBAAAAAAAAopOfhnmS/dtJThsEoPE1Ft7+9fAxOfeR3Ct2AIAtAsbrvyjEzgUAAAAAAIA/E7OGXuH+yB0AKV6Alun/ZzeypZuU/hju5ToAwBbr0fmBzvcv+g8AAAAAAAAlyW3DVBcEEOcFQkXAc4TU7U3pfwCAM4aL1K/fqdA/AAAAAAAAs+iSG5bAhnk6ACKnAC1P/I/oPwCQRtks+xc92IkAAAAAAABQUoQMsRw2OPc/AA6hov8AAM/sStV/MT57HCY/xDkOAAAAAADAU6GCxWLZEDP0fz5SKXsKsPdYalgk/gEA7m1Jx3aJ6cv9AwcOYmEPC45aAAAAAAAMoHvaWDgbusf9nwUoSyUvpVEB1o+WRkPQHwAYRaj050omtWruv2OFoOUwivlC44XWa+npLwEAAAAAENrDfHCcCLLcNrQ5qf+F8ChAx9i6oRD6BwDGEif6+UVIKxtZcPs7jqQlAO0PXGMdPO1lAAAAAADKGDemLN7dZTcZhxly/8KjAB3D6wZB0B8AGFScoOcXUdXe/u5DZxXMsK7t+iCHr6EPlXY0AAAAAAD7JA4ui3232SkGROgfAKT/AYDRHc5ijpXvHK4GcP07xe9FqJeqy8eI1dsFiY+HJg8AAAAAADvkSzPLfzfYBcZE6B8ApP8Brn311VcGAQIqFcQcK9b5xVBabn/L8bH6Zj6MGLTEzwv6AAAAAAAARJQp3ywUXnDYDYXQPwAESfnL/QPxfbWZsYIzWoYvB0p2yv337QBYmJMfZAya5w7HFgAAAAAAyps59FxwA1o+UqF/DiyBZ7lJEVIAWob1ndofQAEAzosWu4wQ63z5t6L/Ve/XqsRM8LSiBgAAAAAAQDuy0WeGov1IttyDE06V3L0X8VMA4p/IH2AGJ3P/GgIwbqa/aqbz5Z8fu/HaD23j1orMAuM+uTh8AQAAAABQl/D0mesJ9N1m5P7XCZgCoCoA0EzV8/rf35qrBzChsjHKNJnOZzdYahue3fLJ/dJgL8vOAm2eUxyyAAAAAADoYOYgdaXUdakBtweF/g8QFQVAAQCgi69WFbz99buzI5jTnDnOLafYP7ORe0/nX3CI5GiBGZ4dHLUAAAAAANhEovo6V107h21v0jL3/0ZOFAC5f4DinsXr139YI6D/1Tbrf2uHMpsiYfeOkc29Fy64/9u9D/DA71dNvorPAieP+TnYuQAAAAAA8xKtPlYA2JLJbpkFtwcF/R+SFgVA6B+grPV4/VcnrNzRgU169ofnN2zavWyUMmmfxSwY06y6qWXP7r84bT+Q9Ggv+g8AAAAAwGP1YsEy1i+z15HT/0U2nknS/4sCAABy/wDnHIiAf1XT3i08/FhqbOr6xg+0o9UA0qidxawR3OyS/j+8Acc2+NhQmM9Ay2O+DgAAAAAAAH/WOCssb101rh1hq+yjydP/iwIAAFL+AEd9FdUo23mgtDDQLrZAZnAmiNksuFkjJ3rs+gAnOwC7HuNSp1wBJD6GlzrUD9oNcIQEAAAAAKioZWhY2Lp2dDvghtlNkyT+V0iaAnA4qa8JAKRxMsMdLVj/1SDWB7D7TJDv596ZzPrGP6xUD6id7zwcQi1yLQJZf6DSwSpT7t81BAAAAAAAmuqVIZbDrhTsjpw1t4/mLAC8FCEDCkDM8/S7GgCQxslTvH+F8+XDqjNnwR8onVl2m8ue6BqgyLFl3FP+O4oCAAAAADTVMUYsil0p2O1iBQyU/t9IEBbAuf/l/oEtDsS+qybIRfB1AKC9euHOyQfK1GLjvDIIVI3aJ64QAAAAAABwRJcYsUD2nCfat+ul//eShQVA7h8mtxLsXkl+V0qQtz9tf43bVACACYlgQpuFZhAcaRUA1AAAAAAAAHpqEyOWzE587n/6diQyHY7kVgEQ+oc5rQe7WybI92bNG6TY5ftF/wEISKbZBEArAAAAAABgFjLfh+PdxsGezRr6vyHGCoBkP9A4Pn4yd15qSw5E2yX+AaAXEWeeTYMDk0TuHwAAAACAYch/owDAPWlXADwbwszaJ8gbXDSgduRd3B8AepF7pt5skfsHAAAAACAc4e8uQXNDoQAQnMwrAAoAMKfR4+kRovAKAADQlxg0y+o1AST+D4/ny9E28QAAAACATQR/44zkygjLl2sCCPrHJ+QKwMMCgFYATG7EkHqvKLzcPwBAHMXD8dMWAEr1KMxJAAAAAGARDh5ieBvsshx5dOMg99+FVCsA9a4JoC0AmbgOQJzcvMQ/AEBHs6X/g1x8AAAAAADIQ1x4tj3i3P9YzhtJpgJQ7zoAx56JvFSGBFwHIFSMXtwfAKCjGQoAZe9XPQAAAAAAWJaGsemXd238OTOjDIjo/0sipwCMcsr/9Wcub2Egh68ImbwX8QcAaC/xpQBK3ZELBQAAAAAAj7UJEDvveOMxhwkLANKlAAyd+3/4jObdCqQkuO/s+x2nkAUIAIxluBpAkRtvfLECAAAAAGBss+WPu0echcuR/j9PuhSAgLn/Y5UAoX/I5GHeWl5fMaDIpDIgAAA3gnQARr9wAQAAAABMJ8FJ6ydJJAdMP0uZownwjAgpAIOe9f/AlQGc+B+SWQ9hC+hL/+/aYIl/AIAD2iTpvxiHKQEAAADA1HKfS7vg4w2YSA6YgU6WEReUl/UvSIQUgOAp/5unrV1PZyu/5g0XpLGezI6Qkpf+DzUxpPYBALrblZj/YkB2MQAAAABTSJ+v7TsO7Uc1+E4UPSd9AUBgFICU6f+Cz4/egkEyL3PeztY/bSVAAQAAYGhfDMu+AwAAACCPyU+z3XEQGg/pQLtSDJ0EBQAJUQAUAHY9XXpfBln1PQ3/ru3RBOg1NywTAICBfDEyuw8AAACA4eU+0/ZYQzHW6f+b7dz4w/7yscvTz5n+lw0FQPT//gnx2e94XwaT2JhNj1MDWNpWBQ4MWpqrAQAAMBYFAAAAAADoIOWZtpONTL2RHHRfRx729YcpUu+s/wAw+Vn/21xJABhLnFPgj3JWfgUAAACCyBT91wcAAAAAYAyJQ7dxBqrvUA8xE9JM4/vtib/oUAAAgIIFgO1pfjUA4KE5Q/8nE/lBNgMAgNnkO83/rj93GQEAAAAAQniZf92Ylx066L93lEY56X7Mjak0Kypt3sa/fflwZOvnSf/LhgIwVQ3gQI5f9B9Y9zCSXiTO/lVgpYZLHwAAgEpyZP1rPDpzAwAAAIBw5jzxf6YBD7Kv13P2fYdx442s/LDU9rTcEdQ7BEmFAjBn9H9Xpl8BACjrqxQiP3ZzDABgZpmC/jUeoxkCAAAAQFNZ07d20IFx7rjTh5gMLbdQKyDHIUhCFIB80f/znYHF6f+B0qbN/TcYB7MLAICZM/HS/wAAAACEkz56O+KY19tZcSaGPR68niH9X4/YKABzpv+LZP21BYB104b+uw+FuQcAMCcJeAAAAADoYPLcf5fNKHWa/JYDrhnSZdwiL94Ikf2H/z3uXBInBWCI6H/x56zDT5TeygEPif53HxCTEAAAAAAAAKCumVPdvbaw+Lg1G/b121QMqLq+4qzfyU/eX5toKQDB0/81nq2OPT96Kwc8owMQYSjMQwAAmvniOYMDAAAAQFoKAO03NWXcecQpVHuEaz9w6f95DtRSpwDMUzDY+CTofRzw0rTp/3mubwAAwGy+OMcAAgAAAJDKtJndCBucI+I83PxpcF9VH77o/2wFgBtCogAMGus/eSkAgAOmSv/L/QMA6wSgGXTeVmWEAQAAADgoSNp1zsyuqPFwU6jLpoYakyVGASDCZoy7WLYkHRtkMc+cklmkFYBS5/gHqGeqE/93ebzmGAAMROKZQadre5YPAAAAwIwOhFOjxV5nC+w64/goE6nvhkVeVg+307n/w6oRpiySvzz/ywCgDACEMknuv+XjNakAYGhCzMSfmXE827xnG2w/AgAAAIwncQp2nqiuGkCz4R13zQ56lBD6D6VLelLMFAA9AWBaM+T+a4+PWQQAjEhEe+g9FaoDsP4TcwwAAABgJEKxk+/Z6980aPMs3sSHEVn/XirFHAVGAdABALiQ/j8wSqYNADCi9RO0zxDUHuihBQ/9H954yxAAAAAgIhnZGXbx4moAVnGFvSzTb1kdI/cJAGoAQBHS/wAAid0ksB/GspPFtQetN3wxiGMTDwAAAIBYhGLt+men/0+/U9YfqUm7SPY71lUj6wkAOgBADdL/APDG6atJOZ8Pz/zgk79Sfj3+A0lTFQAAAACgnQQBWYFays7/BqvDkYH7+TBnSUDQEwAUAIAGXub4pf8BGJpgK1PNc2s57Dh8kZo1CAAAABBCgpNkj5u3djrw4Iui4xrpNQPHPT64VsDoBD0ByBHZVwAAhuP0/wAkIN4KWZf2y8U+yUFJ+h8AAACAZRkn1Fvj4YyyC8zPlyPTbKzGDXy//POXdy1wrwDQS5tsJQC0jOlL/wPRfFWCYQSgFyFXmHz5bz845DtARSsAaCAAdHyWMSAAADCLfGnX4eKzYr4n9+P672+52eGWTNnN2P7QFgUABYAYbnKQwqYA1MjxNz5Dv+g/EI30PwBDkDGFGVb3riW/5SgxwyGr71HR1QkA+j6hGCIAAEiucTK1Utr1TFJ5uL0Qf4MDzs/tNxht+XTJkcvTKwAMSlAVgOJn8T8Q/T8T2VcAAMKS/gcgFKFSmHalbz8CbLnZaQ9fk0T/HbqBmV8PGyIAAMipYzK1Y0Y5044Ya7NHmajnNztZoDzZ6f+XvMWGyZ/RzpykGQBq9weOPanJ/QORif4D0IUIKXB/THh2lNh+PDl2FBr62FXwAJi1vQAw6MtjYwIAAEnEjKWWyrMOnZdNEPatuvEFZ1GvdPU8p5kfK5E/6GaL/r/0LHMpeApAg4h/wT6AE/8Dg5L7B6AqgVHA4YiWh3SHegAAAKCbmHHhqgHx2QoAER5IpY2vdPEHNYCwefr1W6i6Xg7fY8cFcn3LnuzuyaEC0OUE/wUvCKAAAABAZOdz8M4SDbQ8ZN0ffwoeBknZAXD8BwAAAPqIf77wLdvZ5mFm2kdDP5YDN7gMUgCIvzzrpeo3PvbuU+7APbbZWk9npQinAhCzM7D9ycuzOQAA3YmEAh0PO8/+deMBailRXnJInOGA73kB4PyTo6EAAICDgof+X2552AcYf2cNPesO31SXWVFp6HYNacyFf9kYB+HDNRXPYg0IngIQvwygAAAAQGPrGUeJf6DBYWfXUq20zOXgFQA8KUDLg3+lGzfO3Xeu0QAAgH26R34PxFiP/fJw3YaWe/DAPYaae2duttk8qbfrhz4IsOy5fsWBGzS8ldQOdB6Oge6Kfm6MhwraAgzaAfB8DQBAcbtOeCz0DxQ55vRa4/fr3QEQzxEQ5+Bf9R7thS573FAAAMBWNeK854PXe7ez8WOMfz74ehtW49INxbe55QTum3d/ttlxDggS/4f3Qtk9aFSrqpfg3B70PP8QIgwCAKUKANdHZs/UAACcNO0Z/QU6WV8XpkffoW6c/gfPFzDcAb/UPdo1LSeAcQAAgE3KxqbPnEz95RY2uIVxKwE5HsuXc6i9lkvdlxrA6Ed1Ax7NDCFOGVyAILn/+4OzJ2IAAI4R3BT84sxaMG5FRt6xCM8j4Nm20tKzigEAgJy2R0iLnIh9y13vDRPPExPXZ1AAqHdfQw/LEAfVls0NT20BTRLKlNMF6FgDUAAAAOAYGU3YuBwWVwNw/AFPLvDNATz4kb/UnR57FGYIAAAQ1LE4/pbfUQDYO/6ZUu+XW1AA2Lv3q974nE2AgbpAnpIITmYXoMsFAQAAYJ0sJqysjvVVs/KvRs9hBxwKmO2QHvkpIMhzkAkDAAAEcjJ4Wiog62zxAceh1NRyNYBdQ1T79quOSYQg+2w1EuhFbBdABwAAgF7ELgFHGPBMBJWO+Z4jHCUAAIApTH7K/zZZ6hlOez9o+r/GbB9xqNfv7uG/Pvz9qeaSSgApCfICSP8DAFCb1BTgGAKeoaDqM0LKJ5EG2799tE0/AACgv+I5VwWA9OnkqeoZJx/vnIM8w3VC1ABIT6gXQAcAAIBSJCnh8Nq5XkGOHoDnLNjyHJHsaaX9lm8cPZMQAAAI53CeVeB+rFDymRBzwbPLNxiH7QWASttpHVl3EJ8IL0DxDsD9v+oMAABMQoYSKq0jBxDAMxesP18ke5ZpttnnR9vRCQAAGI/I74hB5L7x5QjjEDYXbuoqAEBjkrsAxQsALh0AADAtKUmovZQcOgBPbTDJuf+vH1HHY0Wb+3UQAwAAmhL2TZb+z9oEiDOBLSsFABiFOC9A1fS/DgAAQEqSkdBgNTliAJ7mYLYnnUoPZLihM5MBAIACIkRsRY0PRJAD5pjjJLN1AJD+h2tCvQBbDonHjp8P/8RTDwDAEAQiocuic3AAPNPB5M9TZR9IpnEzvQEAgIO65Gt1Bqqm//NdBKDG+IxeRUDiH7YQ/wV4i+YXP/2/CwIAAIxIDhJ6rTvHB8CzHniq6nKgcPQDAADmcjKvvz1uK/d/IIgcLdlc+0oRfTfj5PAK2esDQEcivwB7M/rS/wAAiUlAAgkODiDRC562HCWSDZ1ZDQAAtPMyO9sg4C5w/Gy4Qk2MGn8SYc6YzNYmjEXkF6BqAcATDQDAECQggbGOBiDRC8z5jDbbuJnJAADAkNJnfwWLU86oBJMcHQAmJwQMaAIAADAhaSeYbTkPtPxB7h8Y8SVukY2ZcADNWwAAYBjCvmSaePnmPw4FzEwOGJi5A6APAAAwCVFImHaBj3IQAEF/oNcr3u3Pp8e2xNsHx0MAAGBUYr5kmoHxF0LkdRdksy0KuCYEDOASAQAA6clHwsYFkm+xD3EQANF/oMtLX2MFAADwmEDqmQGR9OXhzCky68Ku01IzfOjz7jsmQAOivQAKAAAA85CJhF1rZNyNX54UAESxocvzmidBCP5K2OAAAACzE1ENNW7SvennSamZZn3tXVYt16yDA9Qj1AugAwBw46tHDAuQibg/7Fomg67rCOsdhP7PPP86FAMAAABnBT89ttGW6M03BzbODWNVcIm9/J3Lz5/d4MmlXekQYY/DM7K8AKL/AA8pAAApOdM/WONA/NB/m6dOT8oAAAAwhS8HdPjhDDf45mfWtWY0ACrZHmkV+QXwrAHMTAEASEPoH2Ze7IuLA0Dp57Vm6f9KT6Oeown7FDbo8ywAAEBcXw7r/KOw92m/0EY8Jth9QDIiv0D8XL7cPwAALznrPwy0SFd+odKhYNEBgKNPahvXZtjT/3uOZqCXrEO8qLYTAQCAoL5ExJlgC3CUxV51WMwNoCBhYmC4s/KL+wMAsC5aVhJ4uVRfLt6CB4S3HwY/gEDA6P/1Mqn3dOzYiBeuoRaFZQsAAIxK9F8NgGjLbdAFvv1Ot2yw2QIUIUkMTFUAcNgHAJiE6D+MuGaXPQnIAyvuWYj55SUIQOh/2VbO2fVPnj1h+zPOEC+t7UQAACAiuX9NAM6voIJLabbV/XBrzSugPbFjIE1/AACAfJzyH1Iu6o1LvtRBI+BRBSKc7L/BM6Mn01CvpgxFtNe0Q7zMtrQBAICgJP7VAIi2OiZc1wPtfesCRiciDCgAAAAQn9A/MNwRA4YI/RdcNYcXqaNW3+Ok0YizR7I+jdq/AABAO+L+mgBB5lWCRVFjQc2wnAc9uNXe5sN/6/gDDwkHAwoAAACENVx0EpjtaACjh/5rr7Jdd+FYV+8QerMXnu0RY0WbA4WRBAAAGhH31wcINYsshL1DYVk1HoQuW9j+ITuskYyIMCD9DwBAEAkylGD9ApGfuR4+l437JOuFwcbx2TtWKzfo+c6zvNfVAADAAIT7ZWF3zZBms8gS2DgIMy+lgA+h5f06BsJ2IsJAvdi99D8AAOfJ/TPznA++MXLVMG5pbawN1g+M8CJq+fYFBM5sied6r8ZNBgAAoBaBfuHXY1Ol5VyyBPIt59H3XfftibPfPY0yKKlloGzy3un/AQCoR6SPIpNk0FndcasWoX9IFDo3gLlfLfQaAS+xvMb2ehsAAOhDlF/adZQZNe0qmPzhBHykobYn2k53DCQBUWYgwYUIAADIQSCJGjMk5mZveVAzrD6g0vI3hgoAxo1QU8VeAAAAjpPgF4QtMmdazrHJ18VsjyLgYww7zjF3uudZBnUTpZUnBkT8AQDoQhSJSpMk4Gbv/cPcaxDYdYgwPl4tjDsfvJKJPFXazCs7AgAAOEg6XxC22YQpMuXmXCMPN2nc1T3ofnEIVQNgHg+DtgLHIHMv7g8AQG1SaLSfNoM+qBkWI0COwHqXpxvlCo5NlV5zzI4AAAB2k0mVgh1o2kw4Ai/vd8QFPugMdPB0AGQ2rgAAHEvhv/z9Z/8k9A8AgJAZvWZOsw07/4hmW5sAg4bUux/JXWaBsV6YGTcAAGA3aVT51yGmTdWHEHAcdt3dcAs8wfQb8ZjjGAi7OP0/cKYP4GT/AAAcI1hGm2nTcZOO3dTMyxNmS5MbBM0Bx22v0wAAAHhNFj9I+LV7VDr4tGk87WOOw7K/AOD0/9L/Nw9BAQBOEncGXib1+158AACA0YmUcWaqbPz9jtN43AHsu04B0JSg+8sG4wAAAEQhf993EE5uQ6W9HHPy9Jr2oyyigZb5cIevTMfPmBvvuZixrERyxaBBE6D20cBBGAAgMXky4kyY9hsZcADDrlkAlAGI8+rLsAAAAH0I/SfbmOL7Os4U6j7tQ62d+214+79DrPSxjl1ZD56hHoLnYkYh2QxsTOdL/wMAsIsMGUPMmTbbHGoM4y9eABQAiPYyzBABAACNyP0n3qSyO73XLDLtkwXWh9uD6WfRsYdTcCg8ETMEmWYgyOn/dQAAAJKRIWO4adPmIQQZyVGWMAA6AMzwYszIAwAAtyaJ/s98rYNSO73XFDLtQ1U1ztz4oPsu3xQKvgs8LxONTDOwN6DfrGkAAMC45MYYd+Y0qAFUuv1dgznQ7gBA+p85X5KZLQAAMK9JMtBfzqreILSfS5bAEB2A3EetHPNnZWADjr+naYKQZgYOpPPl/gEA2E4GiJhTpcEsKnv7cbYfALyK80LLXAIAAGqZIff8JYmS0FZEwYEaN5k94cxv9hBWxrz74/WUTRBizcDepL4OAAAALwn6EHCqNJtORW4/7EMAAK/ovMoylwAAgMJE0tEByLo6GjzMaQ9cCSbMyy1/+OjCDj50IdkMHMvrKwAAALBCvocIk2S4AkCQByiKCoDctpdYmWaU2QgAABFNkkSf4VErAFgmJ4doxBx22OEda3qcvxEFAFjUAIDTIX7pfwAA3siKEW2ejFIACPjYxQcB0ATwEsucBAAAypsz/b8oAOS65IIlU2pwRgxhS/93T/8H2X5P6HQnvgwUP5G/AgAAwJzEcYg5VRrMpSK3P8RQCAIC4GWel1hmJgAAcIpT/uMiAOmXUtVHMfPIO9rk6L1AWRLMQPEawMqxxVEXAGBo8jfkmEJF5lK92x9lQGQBAfDSzqusZpPEpAUAgOGJ/tNmp8yW9x00DC39jyYAnCe7DFRtAlwfZxxyAQDGJW1Dpll0bC6Vvf31v8o6JgBMlen3Wm6el1WKKwAAwGszJDvlX10HwPqqtM1GGB0AuJBUBroXAwAAGIW0DTPPovO3X2oLw64yEUAA9j6ReWmU+FWWAgAAALCbAgDDXQQgZtI35WIxtg/HxKoX/Wda4siAGgAAANsJ3JBsCtXe5iEWUYSaBACzhaTbv5yb7WWkKefNCAAAjG30ZKcIbJB9JPKbI/3/8DcdoG6GwtpXCWBCsshAl+i/JgAAwIjEbkgzf9ps8EDrqMjQSQECEPPl3JwvI9PMiiAb450IAAD0NGKOU+ZVzHe2FdR4SxyR1ACGPlCoB3BejXSviDPgUgAAAFk59SY5Jk+zDR5uKQFAvpdzve660l3s3X5Ty3sQoO+bXwMCACUNF++Wc9UBmGERdV8REx6LDlwwgcg75eW/wj3hY0ABAACAvYRvGH3CNN7mgdYRAHR5Rm6Wwm/wYvLMfb38k8MPwWTzNgQI8ibX6AFAMaNnu2VhdQCGWz43fxtz2qc/BB3eaw47Di9kVTbFK9AMyP0DAOQmfEPiedL4HmXmAOD6OTHIC5KWr3nKvirwMsMbE2CUN7nGkxl9/fXXBgEobsTApfSqhO6gy6fU3dVeBckOPmXHxNp0hCGrsnFe+WZg5XChGAAAMDpRG4abG12i/xunpZAcANLSb0+I87wsQQcA8CbXcYOJfP1tBgQoa+hg5flNFYQVz20zA0MtUh0ARwzUAHjmZKL3/j8AXCIAAGAqojZ2+lhhrGjTUmAOAGnp2V6fPByQh/+N2Q4kfpNr2Mnm6z0MF3BS4gClkKtgbseZNvQEtkhxnIEtHiZ3JZhhxMy96D8AAGfsSjL5ynyGPT5c9CrUJonHASAbPeerFEx4YM73uQafPL4+6uZGjCSw16DRSTFWqVxLMt+OsBBoc0kHxxlOipwkBk4m70X/2eurK0YD6HgIKnIgciiDvbZ/me1b80l2txrA+TP+6gYAIBg98wsVzPZQL/W9CcL7XB9lwAtfl7ByO0YY2GiIfLboqvS/xZj4IgCOBjj4MITDQV5hawge/W+/bB1Rx/XVE0YGKHVUOXYUOnAsckCDIo6Fm319nmwvqwE021qBOQAEoz0zogPQfXV4i4T3udYRU/u6LQMO5CCrKolrkqfZESY8Dj4kcCzFK3sNoxQA2qxZx9KBfPWKIQLOH1tWjjl7D0Qrh6avNrODYC9n1rRnE4SuxNEAYJQXckYJBYB878K8j2OG97kGn0C2J+y/7qfg9tjjQC8iqpK45nnKXWDO47DDbGSvYawygAIAy7akrFECHh499h5hth92Vg5EGxsFh2/TcQ9euvk+Wx8gxw6dKnQlkQYAwZ+yDQtTdQDmebDeu5Hvfa6hJqKvJ2bvAx1JqQrjmuT5doEJT/DDkUMTxRO98tZwYEH1zd+L/iPzCpQ6gDzL1r/85Y1J/WPXDVi/Wd0nOCP9uTbtx9whJKE0AABo+SLcezeivdU1SqTyNQoAQAACqWoAprcOADhM0Ua9sO/NDyW8YcvaydcBUAMYgpwrcOCI8fLU+/eHl0ox/Webd6xOoAwAGz37plwHIMduneqUqxJaAADQ8qW4N250fJ9rQMhM9F8NAAhF8HTm83AXT99Gy/XOmXI2ydEEIBqpa4iT/m9ZM+h1THDUBRhLpXPqF3dya0/eL/CSAoB9F78HIp4FAADelwEMRsq/cStAzYDEBATbDG/jcKfAa6bcbcwsr6sBQLM2kSYAK8SvIXH6P8IB4f72HXgBhvBVAFs2I8jWmjCw13oiRMok1D6aJGwkngUAADoAAANYz7gL+m9J/7vmAFxIB9rjxA+pB1ynk5/j3HzG1QDoaCWVCzRO/wc8xb4T/wNwI2z0PyYTBtooGDSRSjk8wpmSRoJZAACgAAAQnRz/JFcbgMMOBPtkBNk+Jeibvo2zSIOPbZvBMZOHOOE9ntzzWU/lCmTD0FcSWFnIJw8Xh69g4KgLkEP7AP1XgzNnIDIJlSKjlClpJJUFAAAKAACdNTtXPYoBJHYs2CcpmGPXtznxPFK5xtNiYfTDi2f50YlKg6pAkePG+i872AI0UzZ6fn0Lzv2vAAD5CKmUHSjpfwAAwHsrgFPE4lEeYLuVrN6ZJJ9zBsfZv0ye0I2/1nQqyg6Ohf9srxmKGgvBU3wmYtCAmD7A6NZD8+t/UjBtv6SI7CsAwCREVYqP0tABI3ksAABQAADoQ6Kdxn0A1YLR7U2L7r3ZZCcpH2VvwnArzhha+O3PVW8AS/WLPL+nUSQ0LDkNaBEANHYsdn//t+s/VwAQ/YfcBFaKD9GgASNhLAAAUADI937NEMEY5NdxwQG2q5d5bZmmlTs8M+YIQ5vGCUbSpQDO7yyDU68AoAYwnLKpXwFoQBMAoIGwkXeJf2AgYitlR2bQjJEkFgAAKABEe+fV/R2cvQMtSJajD8AW5094/OwGr3/SLEora3h+zBGGNpMTXKtk75nvzXkH0iLjmWYFca1S9lcAGnQAAKjnWDDdWflLpfzPJ/59qwpByEMUH5axYkZiWAAAIP0f/D1XqPdx9h0UI0eOPgAv1Tvdb8G7KPug7F/oskBO3l38sRrrKgorG7++gwaNmCsAKNJwRuMQsEg0yP0DUMSZ9P/eWxjdj+9EOPG/b1IhlOLph9EX9SRJIzEsAAAQGR/lPVfW93EmA5OSGkcTYAYbw4v3f5I4F9i4ThA/vChUSvcYbql7jDw+CULMLefS+ZT/+S3f+KzqgKAAwNIwkd/lTgG5f4B8DsTT50z5v1S8BnDzk2ffYvoqFMJ6W27HFmmmuMM8YSNJLAAAEPge5T2Xt3KQh6Q46ZsAl/8uFexuv0633OnLsOOWP4x2ruWq6cBQJ36O86QgVypN23Hqdun5KAAMfdCotD27Hq/jpwIAFx3DwdLSIPcPwF5V0+qThP4bNAHuOwC+8oRxzRmAUAAAAACivcfxJmvy9zU+oCAP6XCmMmLm7FgYcVcCteCwjBUQjJY3DRVtlC6Vpt0yMYJPvCVqHylZrDl48rtGc6PgtQvYuCOE/ofQNyUsNg0S/wCsuE7q3/ykSNB/Gb8A8OM6AhYALAfobrb0gwIAAADQ69V7mjdcZR+yNzU+LiMJcXAUAE6eJLtlpPJwurFBxDZ40rFILrNv+HWGUC9jdWZGn2/PDrNObR5/97XZyDNPsg6nVge9QsOC1CD0D8CbrwgQ/a9RBvB1Ji3z2YblwDAWHP9k0Yd5ciEiVgAAQKl3HEXesOx6U2P8fTbCMATBUQAolRxtlqRcSpzGuFmONnh8sFTicJIQpMipoO39TBh9jg034SO/qhxxNEo15Y7dkcOLGsBsGqeHRatB9B9gWqL8OQoA198yFj/9v+8vOfzVvrHaPp7J8vH15tugEZOh9yYAACCznuO9qnoA8xIBRwFglCBa4jw9I6YhDfKczZmHc2CU2XV948v+AoPcc+RRCvJIT/6JI6E+wCTap4dlrEHoH2BOovyjp/99i0nM6L+JcXhgU0YrigzR0IMgJQMAAEyVSjekPiRB9B+SFwDK5s8k+QiehjS8NSL1c8ZqG2//3sc1xK4Jm4xPNnULXkrCQVUHQA2gdnpY2BqE/gFmiPjrAAxUABgu9+/LTul/O73GCKfMVcScnBEeshAMAACQ6S2bwfRRCXL/kL8AUCqFJsaHPoDof5wNLjuLBpr/QYZ95SGEikQnPugdvpdSf4IOwIQdgLJ3oRUAOgAAaUL/14aL/m88Bf5U6X/fejJu+t8uPjbUiXMV11ueOFYiHAMAAEz7WY3R84EJcv8wSwFg3NQpUpK9TD7smabNy7Pv6wAU2eCA6z3ZUa7GPtryT14GvBwr6X+KdAwAcX+AyFn/lOn/7afDn6EA4ItPFADmHPAJcxXJYiW1H4WoDQAAEPn9mkHz+Qmy/jBXAeBkfBaiJWXrRTCNcPCRObaRcR7FiMNefPOqhv7HmrEnJ0CmpoTSGgoAgOg/QMACwCXivyX9v9IK6F4POHZe/PQFAF95Iv3f4CHc/HL3Ley+v0Zc+DMfxLZvgyQNAABQ9Q2OUfLhGCL+oAAAGTKXei/NzuAeZGTO77v4uzj+VCy+XqrWANK3blKOlRoACgDAmdC/AgBA8ej/S+t/1Tfx//HHH588NX6O9L8vMn3ZmbgD8PbnYTdy/UaCdBImLAAcHoEZDl8FN8MzCwAAUPzdjVHy4RgS/6AAABw8hXyyQGqN5HepMdxyF9sf1Lgx8fVf7ruFwYPUuQsAjQdKYUDuH+l/cMp/ALn/tzT/s/R/wOj/jeA1AOl/33cqAATcU5VmUZFH0X7CW/Lxh6LLVN+yAZ5WAAAAEr9NRvofFACAcFHOfIHUInd0IAJ7Jt9/7PGezOyOcnL9XltbY6Cy5v7jB8d7tT50AEgT4pf+B7l/gBly/8d0TP8/LABsbwLkyP1rAvi+M3EBINMmHbuR2lPdkk/QB+i48WoAAAAAM79NRvofFACAEGlOBYa+4dcihYchMuVjhd1r3HXu6H/tkkO9QRu3FqUAQO3c/64sspQ2SPwDzFkAiJn+31gDOBPlDxj9l/6f9stO3902C3M3vrtK09tiP7ZDh34sLe/XvAIAAJjhbTLS/6AAAKgBhL5qQY0g8saH0/d1UagYcfcZGC1UPUNkvGMk3XOEGoD0PyD3D6AGkCP6v+tqAOuB/gN//uNOfE8525edvuhtPFAj5sUls8/v2dEfQvt7N6MAAADGfYP8hSaA9D+gAAADBToHypWGOgd81tdFZQfw8EBlXSMpE+oNpmKcJaAkoB6gBgCI+wMoAIzYAdjeBBiXbyibpWlnaAIMNAJnvs8+MywrQxR8JlvdWcdKAQAAAIA27zSR+wcFACBuavNwylPoecKUf5pT/q88CgWApfJ1MNYfY4QFstJM8ISiDKAAAIj4A4yS9Q9SAFgJ6DfoAOQuA/hW0jedxaO3EzYfXg7I+uBYMpmWfI4jVZcNMJEAAACyvllGAQAUAIBUSc3zt7n+56KuQ3QAbm42R82j/cx5+cvp53+9+ypVeFiZ9nM+ldz8t7eZov8wQ7Jf0B9goNB/KQVvfHtGv0buP3cZwJeRvu+sFMCV+384JvfjY4FkWulpjku9tsEsAgAASPyuGR0AUAAA8qT/iwS+a8Sda8Rz07wQijPNLL1ngxBqrGqUf9oUAIrvsvtf8MzycEq4PoDoPzivPwBj5f7Xb619AaALHQCOfdMZ9uvPTF/umnVwYGG23ww7BQAAwLtRlAFAAQCIHlU/fEfPTrl9JsjbMSS9fqdzdgDk/ou0IIKPWLQDS6UG0fZ6hn7Lw0Oid5pC/9A+oC/xDyD9vxLuf/jnxbsE4xYA1ADI9A1ogkdnOsH5xdhsY+wUAAAA71JRBgAFAGCMk9OfT8HW6BJMvlMijNvMMehju/5YAN2sbjDDj93U5DP/ugNw+CkDZQA4H9mX+wcQ/a/RJTjZEPh4KGoAjP6V56AP0PyBGsuw9sbYIwAAABx7x4omACgAAOGClS/js88ysg8rAfbOuAUA6/FMAcBM7ju3FQDqjaE3mwoAUC/6D8DM6f8aof9j+f7R0/9pagCaADN/2Rn5oZke0HgZ1t4SewQAAIDz717RBAAFAKBnvPLMdmaK+9feNefvQvp/iA6Aw0vHAsDh27QEMlVKUqb/dQBQAAAgWfr/7f/2Cv2Pnu+foQCgCTDt15yRH5eJAe3XYNWNsUcAAAAo+zYWTQBQAAAKBC57ZbuvKwFi5R1niOhzg7Umuh0t/V9qFVgIz47tmgBdov8g/Q8ANToAH+f144x83TjJN53BH4vJAO0XYNXtsVMAAACo95YWZQBQAADyZIsNTvu9oACgBhC/BlD7oTlqNTvaeLMp/Q8S/wAM0QH4OLsfp+brxtxfc4baZjsd+h5J2myMnQIAAEDxt7RoAoACADBwGPTmpNGitGMFwY3JsZS8DkCE9H/xx2UVjNst0QEAoX8ApP8nTP8rADDu15wRNslehggHEMMFAADA0G9sUQMABQAgSRLUIAwa1TU4uwLNstpxEvZDtBQsGRQAEP0HgMbp/4+nIf3PoF9z9t0e+xciHDoMFwAAAGHf3h54n4saACgAAIoBdMjsGpCXgWZZ7UkKAJaD6L/0P4j+AyD9rwMg+k/VLzhH3Ayg4FI1XAAAAKR8w4saACgAAAoAtN4j9tF6uFliO2a8fqCiwoQHdm85FQBQAACA9tH/OQsAyWoAvlNM/+1mkG9Y7V/odawwYgAAAOR+54sOACgAAKkCx8ZBT2PcrLz0f7R4/VgtBQd/rQAFAET/AaBl+n/aDoDoP6N8uxlkk+xc6HKUMGIAAACkf/OLAgAoAACS5UDOAsCukP1w/QRGmYEKAKAAAEDK6P+cBQDpfwb6jjPC9tin0GUlGjQAAAC8WUYHABQAgOHPAw3IXgdkqpiBov+gAADA6Ol/BQDpf+J/c9l3k+xT6HJwMGIAAABw7D01agCgAACEyIAaBBC8Fv2fcxKalkL/KAAAwFdNfDwf6f9j37H5rrH795FdNsk+hSLHhO2L0aABAACQ5r1wmzuibitAcwAFAABA9F/0HxNVGQCJfwAQ/dcBGPH0/2Kpcb53PL9VdhPEPBQYNwAAAPK9KY75HpwdZYCNPQFQAAAAxKmzFgAUCcxbfQAUAAAgSPr/Y8bsAAT56s63mCe/azz5DaWhhgTHAYsaAACAqd4gB3w/zr4OgOA4OgAAgBS1AoAagAmsA4AOAABI/ysADFcAuPk6zReZx75lPP/1pNGGfIcCAAAAyP0GOcj78XnT/CdrAAoAKAAAAMLTs4X+1wfcPDSHpf9JnPvXAQBA9F8BIGsHoNc3eQN9o7kl9Xv4WOErZBj3aGCIAAAAmOoNcrQ35vmD/s9UullQAAAABKbzJf63j/zDXzNdTWkdAJzyHy7+6RHDAok7ADXKAOL+OdL/ATsAz75Xm+27zDbpf18ew9DHBOMDAADAbO+Rw75JTx73L1UAOHl3guYoAAAActKD5v6P7QLT1cSW/kcHgFJB+cTp/5OPUYsAwkb/nfhf+n/QDsDKN2q5v8Ism9pXAICAK739oQAAAADSvK2O8I540sR/3wIAKAAAwDwZ5TM3LiEdPPqvBiD6L/2P3D99I/Kjx9wPPLrcAwJqANL/CgADXQcgZRa2zcOUHoZMxwcjAwAAANHerc8S/S9bAFAJQAEAAESW26S95Yei5ewf3nX7LczUMZD+B7l/tuTdh86+73pQcv8g+q8AME8BIOZ1AA5/r5bvy8Lid+fLWhgxWGA0AAAAIOZ79rRZ/7Lp/2YbCQoAADBuXrnUDcpGh03/h0redx+KvVtrSisAIPrPs1j8gSZAm21byfHvelz/dIJ5AkMk/qum/xUAchcAgncAznypNu5DqLcBvqAFAAAAgJP2xdwHTfw/qwGcrAoIjqMAAABsjDKfrBNIFAUsAOTrn/RdI8ig8yyaL+ufO/R/MhN/IB+//vtb7uXlvf9THeYMDFEAkP7XAUjfAdjx1VqkVkCobVMAAAAAAIDzdufy0xQAAAUAAGgWxX6Zz5YZUgDoWD5RA5D+Z54CgA5AtALAgaj9mYj8+u8XCej/U30mD0xYABDx1wEY8tu1TvWAUToJAAAAAPCFs0WcHr3OBQAJbFAAAIDE6f+bXxOPVgNon6rXAVAAQJGAETsAxcPx63/yT+MweSBxB0CUXwcgz7drg/AtKQAAAAAt+ZyqwWA+iOkL/YMCAABwE2XeHvTfksm+/icpIh2AUnl6oX9lAKY9/b81NVX6/1gBoOXJ+xUAQPpfAUAHQAdA7h8AAACAmfnMqsFIFiZmDQoAAJAvcn0yCS02rQbQJVWvAyD9zyjn7D9QGLCOJgz9ny8AjMukgjjp/8VFAHQApuwAyP0DAAAAwF4+v6oxdKL/oAAAAHMl8hvflwKAJsDJuTdoAcB8VgCg9un/LR8FgGeB+LcfXv5XAQAoFfe/+YmLAJS1LMvK/13/Q4n/5F+5if4DAAAAkIXPsooMl9w/KAAAQKomQI2gc5Eb3x7Ili7SAagUqVcA0AQg0+n/rZexov9VU/iXoH+zvoEaAExbALjuACgA1OsAnCf9n+crN9F/AAAAAJLyodaZgVIGAAUAAEibiu5eLbj5fZkhcf9Q2fpSG2CGKwCw8Vz+63v52TR4NkkslrHS/y0D8f80N7MOxi0AyP2XLQAso10QwPdt0v8AAAAAzMbnWseGSA0AFAAAQA3gSLT6cAFgwpx02cz6+UqGAkDZcRODq10AUAnIcTr/LTvdzJf+f3b+foF+BQAIXgZQAIhcABioEuBbNwUAAAAAAGZT6nOtgT4Ze7htN9sc+jNHqWtQAACALgnpUrHm7rntodP/hwfETA5YAFADqF0DkP6fqgbAtH2ASnUCBQBgrPT/5AWAxntQAaDGt5LS/wAAAACw0bGPuRJ8SpbzOwNRbFAAAIBR4tRB0tuZ0v90nEXn71oHoEEZQBNAB4DZqgLS/2oAMFsBQO5f+j/fd5M6AAAAAADw0JyfleVP/ysDgAIAAEQOVcfPcysATDhXezUBpN8a1wCQ/mfOMgAKABAn9F+pAODE/woACb6evP+dl39V+1tAXyQDAAAAENC058vIXwAAFAAAIHIHoG/9QOifqtNGAUABgLKhfx0ApP+l/yFN9L+ejyfWLPEfOf2fpgOw90+afR3oG2UAAAAA4uj7cffkD18HABQAAEABQAdA9D/idC0+bRQAohUANAGc8p/cWX+JfwUASJ/1l/5vnP6/CdmH7QDk+J5y11d6Rb4R3PV9oa+WAQAAAOiu+2fgRkANABQAAEABoPNmSP+za/4cm0vS/2GbAHTP90v/cyboj/Q/iP5L/7fZrfdRewWABl/UPfydCN8U+oIZAAAAgC5CfRhuHNQAQAEAAKT/o2yV9D8tp5D0vwIAEv9I/6sBgOi/9H/w6P9KByCmGb627P5loW+aAQAAAGgp7KfixkQBABQAAGC6kHSyJLf0v3l+eL+Lyon+owOAAoD0P2SK/jfuAzj3v+h/jg7A3m/v+n5x6CtnAAAAgMnF+ahKB0ABIAQdBhQAAGCSSHSyDLcCAEJv0zYB1AkUAAjYAdAZKBX31wSAIn0A6f/RmwA/HtnQ35tG+HJR4h8AAACAFSsfHJ35TCnNR+X1hn0WI4b+Rf9RAACA3GFoSW41ADUAchQA0AEgTW1A4h9QABD9l/7v/nVpnC8RAQAAAOCkXZ9fJf7AvMaozihy3F/uHwUAAJgkAC3JHXxw9BAUABQAUANA+l8BAAge/VcDqF0D+HEKg34nqgYAAAAAwOh8Wl7vQzwj2bpXIPqPAgAASD8rAPQanzO3rA+gBqAAgAIAagAKAEDM6L8OQI0OwI8Tme27Ut8rAwAAABDE+qdYagCVxpazZYD7QH/BIgEoAABAgtCzDHev8Vm5ly33rgygA6ADgOg/agCi/0C09P/kHQDRfzUATQAAAAAAAlr/2Mrn6vcDsnEYid4iAAUAAMgdd5bhrjpE67cTtp+gAIACgNw/iP4Xj/hL/0P66P+0BYCyu/LH2WX90lQlAAAAAIBB+YD95Yd4xkQHABQAACBc1nncx9Ul3h0wbm7mP9sLOgDS/+gAEDP0P08NwO6G2aL/E6b/Rf9nrgHoAAAAAACQiQ/b0QEABQAAiB79NwjHxiryi3ar4Nme0gFQBkD6n1Dp/6lO+Q9MFf2fsAAg9+86AMe+FvVdMgAAAADR+LwdBQCQ/geAuKn3vhs5YgGgTcdAB2DQcgiaAAoAIP0v+g/zFACug+/S/2X3o+j/DF+R+goZAAAAgPh86o4OACgAAMDxpPL2xPwQ0fBm21M7TD/E63YrSAdAAQDpfxQARP9B+v/e4bbAxxRK//+YvNF/AAAAAEjDZ+9I/4MCAACUTCefCTHHf1yi3goA+gBI/+sAoAAg9w/cxPTP5/7PpP8F/Wuc+1/uHwAAAACIzKf059PmxkH6HxQAABBHHjsU3nHzWg6mMoBFhwKADgBM0h+wF6BZ9P++A/BVQ1L+NaL/0xYAfGMKAAAAAAPxWX2pwHnZXzas+wZLmhwFAACQ/m/zoBIMZvwCgGKA6L8OADoAKANI/MNwBYD7SwFI/4v+awIAAAAAAJX4rL5gUn0vA7i1ALAyWHLkKAAAQL788a5t6Pjo2t/p3tscJVx+2ZheNYAIRRRNAB0AjoX+dQCYvAZgbKFl6L9NrF/6/3Duv0gHQPpfDQAAAAAARuGj+14FgNcdgMkbAzLiKAAAgLRxwBT+sU1q9nh3/UmOvZm4BuBdtwIATvyPGoACAESI/gck9H+/p04WACT+1QAAAAAAYDg+w++VTi92B8YXFAAAYM7w8YSJ6mMPc5RxiDbnr/+p2TboAGgCIPSPYoDoP0j/S/+/TPw/7ABszPoL/asBAAAAAEAaPsxvn1EvdtNjjY7oP0iUAqAA0D4vnuzdSO7HG3DmX37e5t6l/3UAkP4HIFoTIE4lQPp/r0uQXehfDQAAAAAAsvJJfsswfM4CwJkNlgtHAQAAFACKJ8Wzvs3I/ajjr4IaJ/735lkBAAUAAILE/UMl/qftABTZm9cRdgUANQAAAAAASMzH+83i8Wdj9AELAILdoAAAgAJAkLD4JG8wEj/24Gth2uWGDoD0PwAzpP+Dk/s/1gFQAFADAAAAAIDEfMLfLCd/JEw/RLMBUAAAQAGALnH5SRoOQRbFw7P4W3GoAcj9AyDxrwAQJPr/rAmAGgAAAAAAJOPT/paB+X3B+iE6DYACAADS/7MFzb23ma0MsL5hh7fT/k3cAdAEUAAAQOJfAaB7AUBeXw0AAAAAAHLz+X/ceL0CACgAAID0f7RkuXcrsxUAXtYALv93+2bbuZM0AZD+B0ANQAFA+l/6HwAAAACox+f/OgDS/yD9D0CqTL/wsfR/g3GbpwCw/njX/8kUUgDgZehfAQAAof9J0v8N9ruYvvQ/AAAAAEzF1wERc/bB+wmAAgAAzu4v/d/9IaRM/2/ZZX1rA5H3FwoAzv0PgOh/JnL/0v/S/wAAAAAwumVZ6t0yiP6DAgAACgDS/yOl/1tucK8BGboAsGWTrE01AIl/AFAAUAAQ/Zf+BwAAAAAO8KUAov+gAACAAoD0f6MxPHPjc86E+0e08rjG6gBYntL/CgAAUDD0rwAw8xUANAGk/wEAAADyWfk0zOCYGyD6DwoAAAj6S/9XH9jz9xJhwuS7YEKb8bR4dQBQAACG8G//9m//9m//9uz/Er8AkM+gif/20X8FAOl/AAAAgHxE/2fYmwf2rC8FEP0HBQAAFAB0ABoNaaUEeZvpNO60tAbRAVADANib/n/I4Aj9KwCEPeu/DoDoPwAAAEBWov/59uABxW8Q6X9AAQAABYBsHYAu9x4qy36zYWlmppWIJoDQP8Dh9L8OQMDQ/zwFgHEvAqAAIPoPAAAAwDFbguAMt/tA+h90AABA7LhKBLxj9Dxg+j/xLLUSUQDQAQDYWwAwPqHS/7NRAFAAkP4HAAAAmIf0f6a9BgoAoAAAAHLGUxcPTNrgZQDzHOl/BQAga/rf4Ej/KwAMlP5XABD9BwAAABjaygdfBmegnQUKAKAAAACixgoACgBjtALWb8pCmDz9rw9w0wHQBwAUAFAAcPp/BQDRfwAAAABuKAAMundA9B8UAABAAUD6P2cHIMEc3vK4bh6dlSv9v9IKUAMAGKIPYDSk/xUABkr/6wBI/wMAAAAMTQFgoD0C0v+gAAAACgAKAHN1AHLv6JVdZkWgA2DXA8N1AAyF6L8CgA6A6D8AAABAbhsT9m1S+AoAoWYFSP+DAgAACEyrARTYrclmdY4ZvjH9by2jAGC/AwNF/6//A00ABYDhCgA6AKL/AAAAwJxeZuXXP1M6fLM1HoX0f6/RBtF/QAEAAOl/nmbBi9cJTPUhWh8WNXPWAOxrYLgCgPS/DoAagAKA9D8AAADAKAp+rLRyyx0fjl0cf+aAAgAoAACAiHD+GkDtfLlpHzn9b3UzW/pfAQDQAUABYIYywNtuClIAkPUX/QcAAAAm0ebjptrbvP5w7OXhJgzoAIACAACi/yD9n3AfmcNMVQawf4GhOwCGQvRfDWCsE/8rAEj/AwAAAJNo9llTm21e+QX7erg5A2oAoAAAgA4AzFIAmGdnmcAoAAAM1AEwDjoACgAKAKL/AAAAAKGMFfovss12evw5AzoAoAAAAFLCTFoAMO2R/pf+BwDRfwUABQDRfwAAAIAVbT5iCrK1dnfweQI6AMRiSigAACD3jwKA5QDt0//5+gB2MQAKAAoACgCi/wAAAACltPyUqfum2t3xJwmoARAr9H+ZA6aEAgAAEs9I/1sm0CD3v/4LCgAAKAAg/S/6L/oPAAAAzKz9Z019t9Yejz9DYIAOgPz35Kf8NwEUAAAQa0b0P/h6sYjI2g0Q/QcANYD4BYA4HQDpfwAAAIB8en3W1Hdr7fchJgkM1gdgktx/3w1TAABA+h8UADauGksJ0X9NAAAUAOT+dQDm7AD4chcAAABIrO8HTR231q4fa6qAAgBy/9lmnUweANL/yP1bTTBtJcAeBEDcf5Lof6gOgOg/AAAAQA5xPrGsvbX2dY55AqN2AJQEhkv/BznNf+7mifgdACLLCP1bTVAp+h+/MGA/AvTy/v379+/fX/+HJoAOwDwdANF/AAAAgASifVZZaVPt6EyTBMaL/iP9f2wDZph44ncAiCxzPvqvGGApoQywMVUv/Q/A+yd0AHQAunQAurQCRP8BAAAARjdK9P/MptrLCeYGSP/TNHnffbdONQ8l8AAQWaZBQ4CT68gaZJQawMtfuEne6wMATB76z1ED+Oqrr9QARuwAdLwmgPQ/AAAAwLgCfkS5snl7N9j+zTQx6BhoNw4KAHNF/+/nfcftWaklPJt+g05LOTwApP9RA4i5lNqvREueXg0BuX8AHYDRH53c/+gFgLcOQJs+wH1oPkcl4Nm3nr76BQAAADJJ+eHtDDvLrKBjoN0QrI2IAH2a9H/APbteAHjZH9ABAED0HwUADqypLuvREYBobQFZf4BJOgAJHprcf4ICwIHLAtyE+Ev1AeJbLzPM8xUyAAAAMJWsH9vaTWYCzQLw8z7yLWMhTD9oASDUSfS3bM/6Fi7f7gmM0hD48ssv11sB+gMAkspwJkpO/ALAogNAMG+RfTUAgAQSn/t/kf7PWwBY7wC8DMdvFzDff/5Bpf8uGQAAAJjBDB/exhz2Xb/ZbBx81E+RPHzyh3e4ALDoAAx77v8gu/Lmrp9tz8pGNpj5LiAAgA4AQ7B8yhYAuu8yU5ou/qoOAwvQWO4CwBvR/3zp/5UCwMYT5B/78zgn+J/kG2UAAACAe1N9fhtwzHvtGrOCBoH5VA+meAdgUQMYJPq/fPtM+XH24M1KW9/+k2tSAQAABQBys4gOrKkua9ChgJik/wHSyJ3+X74pAFz/twJA4g5AkfT8+p/niPsf+yYVAAAAoKN5PrMNO+B99465AVvV6wCUun2qhuxj7rL1LYm8HHQAAFAAICDraIg15VBATJe8vg4AQBpZCwD3FACmug7Awx+eCdmnyfqvu3x1KlsAAAAABJH+E9rg4xxhv8w5MeCgegWAIndB1YsABNxNDzcm5hIINXryfACSynDPOhpiWTkaMArpf4AEpP+l/zN1AJZXSf1j8yd97n+R+AcAAABCyv2h5RDjHGS/zDMroIyqBYDldDx60SKonP6vNMJbbvbllrSc/FXXVINpLNUHIKnMoGrs9MttWk0B19SBvWOZEJPcP8BAJjn9v/T/bB2AN1Wj9kNn/e8JEwAAAAAB5f5stsG4PRzGXeMcaqfMMCugiuLp/2V/7rnIjbBrZ1UtANzf0fYtaTPb46ysyDUAZQMABQBqqLfTraPgBQCHBdJYCf1L/wPQjNz/zAWASkZM+T/86hcAAAAgssQfWjYbt4cjuWuc59kpMIuWJ2Lfuz0ELwBc32zYKddlYje4CEal0L/LDgBI/1ND2f1u+cRfWY4MJCb9D0BH9xH5JWkr4OMpNZ5OY53U/0JcAAAAABhO1o8rRxy0L+T+IaU4NQBp/r158WZju+yP+7My7Od3TdXcvw4AgA4AYVk+AZfV9b07LAAAFOfc/3L/w/nlBntvU2IAAAAAGE6+j30MGhCRDkCOk/3XGNvrW7BSQs352ul/BQAABQCisXxiLivHBwCAeqT/Rf9DuY7vP8z0/3K/jXctNAAAAAAk+ABh3M+FDA4QWveEt5R/8eh/39YBtSd81fS/DgCAAgChWDth15TjAwBAVdL/OgAd/TISKQcAAACY3PbPNJ797ViPIgjDAvCCoP9KCv9AIv/MfZmNY818BQAAeWVmYOFEXlylNv7yEBwoAGBa79+/v//Jm2nHZNBM/94tF/2P6ZfxyDoAAADAbN4+pviidEa8+yMagmEBeEHKf/0E/G0KAOZh91VweC3cBP1Lpf/VAACk/4nAqgm+xBwoAIBSrrP+779t5mEZtwCwa+Od/j+aX0Yl9AAAAADdw9b1tmf9n4p/ADLo+LcRdkxGGUBgFrL+NYL4Qv9TrYj7uP/53L8mAIBcL91ZMvFXmQMFAFDKwwKAYbk/rf7l50vgesDD7VcAiF8A+GVswhkAAAAQIV9+Pr298ifNHkv63TTW4NSbcgB1Cf3XS+qL+8+zLkqd718HAED6nyAsmWkLAI4eADCV+6y/9P+Nm0j99Q/jFwA2bq3ofxu//OUvn/1c9B8AAABG1/JDhvP3vvFPDj+um63quDuGC6wHmb3R5jzAUyL+pWoAsv7TLo3a0X8dAAApXlqyWIZYZY4bAMBJ71cZnzdfDejhA/n444+nLQA0njNbIvW7fln0HwAAAMKK8PlVtCj2/fg0TquP+1FknGk8xMwH+DMR/5MdACf7tzSaES4EEOSlEstklLXmoAEAnCT9v0vMlP994v9Z+n9Zlksa3un/G9gYr7/85hKyCSDDAQAAANLPBzwbJcO+cdwaz+QvFACABHbl4G/+QwFA+t8C0QEAGDGaLOPLDQtk+zpqnKG/vindIQDgPOn/vYKf4P+ykc/+6ToQnz79//Z4I0ybLQWARfofAAAAhuKDsjP2Duw8Yx4k+r9I/wPD2Zv+P/znQ9cGzBMazDE1AAAXDaAXEz7sOnIcAABquE78S/+/lKkA4Ez/7T0rAKz/gvQ/AAAASP8zgyBz2OQHBrM3i3zyNi+3sDFtHz/9ryFg1ZSN+B+4fbFCANlfijDbY64jBwEA4KW9wX2n/z8gePT/JaH/7h6e/j8mYQ4AAAAQgKaNOHPYtAcGUyP9v/HGV35hyy0EOeu/SwRYO90vAqAJACD7Sylme4OltHdZOQgAAC+9L8RIbjFuAWBJ1wEYZc78ckwiHQAAACAGTW1xJrAJD4znYdr45hdORtsPpOqXANH/Yw/t4S+YZrlXUKgOgGQhgPgv55nw9dbR9pXlaAAAk9seyn9fjmHfaMTo/xu5/9p+mYhUBwAAAEhCU0+oOWzCAzxVJFsfP/1/+KZINsNLzUAdAACRX/oy8xuvLIcCAGC5C/Tv+mUFgGbGyv1fOPd/G4cz90ukCoFsBwAAAPgQjBpizmQTHqCYsOn/vSdxtyvN24In+FcDABD8pT2Tv8HKchwAAJYnaf69vy/939JY6f9l/ALAQHNjb+7/8icH/lwBAAAAAOT+GYL5DDCFsOf+r3ExAdJP4Jczp/iclyYEEPylLEsABwQAqOdYLl/0P4740f/lm/T/MngNYKBZsSv9f+YWpP8BAABAVJrITGmAuQQpAFz/sFKjgPTTuNd8lswDEPmlOKsAhwIAKOtMOl/0P6Zouf97CgBtrJ/pfz36v/EG1QAAAABAWprITGmA6YQ6/f+ZP1cAoON81gEAkPqlEmuBt2lgLQDASaL/+UTO/d9QAKht42n+D9yaAgAAAACIShPQ2ywyqwGm1j30f2xj7Dj6TmYdAAAdAJqxFnBMAIBjzgf0Rf/je5jvjxP9fzNh+r9xqaBNAeAHP/jBD37wAx0AAAAAkJOmo1HmtmkPUN1AoX8FAOpN5pd/vvH2JfMAhH2pxIrAkQEATjqQ0VcAYJfPPvvs/oeznf6/y4UFSkX/lyfp/x88oQkAAAAA0v9U8nDCjDLJLQGA6vpG/89sg31HlymtAwAg6UtHVgSODwBwWOPovwLAPD67svJrMxQAVm6q3rn/b9wE9A/cwsbof70agCAIAAAACgBgFQDwwqDpfwUAukzs7bcskAcg4EsNVgSODwCw15Zc/soPz6f/9QdS+uyR9T+ZNv3fJvq/ks4veFO1awAiIAAAAEj/wxsLAYDXWib++5YNMLF1AABkfKmt9l6zInBkAIBdtkTqH/7r+zDsxFAORP8vEhcAOqb/t0Tza9xm2RqA/AcAAADiznDNigDgqfYRfOl/Rp/nOgAAYr681GCvWRQ4PgDARjXOyq8AMK3Pntt+IykLAL3S/3uj+fVu+UwNQAQEAAAAQWd4yKIA4FaX8P3X1dihNJ57u25WLA9AxncqzXaZRYGDAwBsd5+kVwBgr89Wbb+d2QoA9ZoAx3L5tW//ZQ3g/ueCIAAAAEj/w0MWBQB/1jFwL/3PKDN/5fcvt7brNiXzAGR8Kc6iwCoAgC1WkvTrgXsFAK59tsH9nzy8qeEKAC8T/AOl/3d1AH7QlkQIAAAAUs5ww7oAYFk6nfU/1AZgCRRJ/x+bzCJ6AA2SvpLBs7EuHBMAgJdehumd/p+XdqX/t18WYIgCwJYEf+Po/1Iimt/gLnQAAAAAEP2HM6wLAJal9Nn3u2+GHUq9uffwl29u6sB8ltIDqBT2lRuemXWBRQ0AW7xM0kv/8+azE+7//OXdDZT+f5njb5n+Xwql82vfvgIAAAAAov9wmNUB1CCJPfw+G7QAYD/ScRXc3M6B25TMAzgf8JUb5p6lgbUMAC9tDNMrAMzpsxIO33vkAsCuHH+z6P9SNJ1f75YVAAAAABD9h8OsEaAGqewM+6zv2fel/4mwEJad1wQouJTk8wBkiCdUb2xNWqxfANhi0CsA2HG19U3/v0lw+v9jv3/YD5KSFAEAAECsGawUAP4sTvT/fpOebeH970DBWbf3fP/bF4gCAIA8MfdDV3UkzVIsWAA46VnmXvo/t5eB/jbp/yVqAUD6XwEAAAAApJlpyZIBYFlChv63b6rdR4QVsVS4eoYCAIBUcXoPx632GJqiWKcAUIP0f25F0v8pOwDLifR/7b0m+g8AAAByzORj7QCwLKcjyze30GVr7UQirJelWgFABwBAvDixxqf/v75TsAAB4LBL5v59DPZIbZ8VVWSTPo4qzl5LnP7XBAAAAECCmWlZRwAso5zy/21TrzfYviPgwllqFgA0AQAkjBO7Ofe/0/9jeQJAZO/jsVNq+6yCIhsm/b/uB9MQJQEAAEBqmUlYSgCzKxhHvrnBlttpPxJqBRVfXMoAAHLGE7oerkpDZzZiVQLAAQ9j99L/k/isjlKbpwDwzA9mIlACAACAvDLpWVMAU6txyv9KofyX51a3NxllKW3//WOLVIAPQOY4gZtRuh+0UgNoEmJJAsABAdP/dkozn9V3eNu6x/2l/3UAAAAAQFiZNiwrcwCYUfFT/jfeZnuQIZbVys8PXE9DEwBA5ngSLYfO3MN6BIBjnmXun0Xzpf8zUQDYkv4fpQDw23K234UCAAAAAPLKcJLVZEEB0xkr9P9wy+1EhlhcK4tuKVrCUQMAkDlOo/24mXjczyVLEgDOcAWAGcQsADxL4Tv9/5t6uf+ybQEdAAAAAMSUYQvLysoCJlI8VWxIYWWVPVt6ldajGgCAGkACCgB0X4CWIQCc8SyUrwOQTOQCQMf0//U2BNxrcaL/LfsAvgUHAABAOpmsrC9LDJiF9D+0XGsrq299PS5NugHifQAKADG1Hy5Tjpv0v/UIAMVJ/+cTKv1//Sd90//x/TY8BQAAAABEk2EL68sSA7J5eHLx+59I/0Pjhbl+TQBXAwBAGeBC+h8LEADSaJb7VwNorHvuf/12Zov1b/TbcSgAAAAAIJoM66ZaQZYYkNmWpP4o6X/tAhIvz+KLUQEAQBY5H9F/rDgAyOF9V8a/quK5/5cFgL23qQPw0FQdgL94RPoEAAAA0X8SmHAFWWJAKrvC+gOd8t8VBki8VI8txqVCZ0CqD0A0OawGI2AKsWut6QMAwC7vg7FHaih+1v+X1wHYdYNy/8/8djRl0//rxFMAAACQ/mcUFhHAqGqfGjzCo7OXybdgn/13yyaPAgCAMsAQqj5qcwbLDQBqeB+bHVRW2fR/jduU+3/ot2OS/gcAAEBqGa5ZRwDj+bq+II/RvsZyrkd6D0A6ObL7hyP9jyUGAPGtxO51APIpm/6/+WGpG5f+f+i3w3qW8j+f/l8vACgJAAAAIKxMNBYUwGCqZv3jFADeNsbuxqJWAABg2pjyzUO4PCjpf6wsAIhpPW2vAJBP2XP/X99mkdu/3KYOwL3fjuxwvn9vB8DlAgAAAJBUJjJrCmAk9c7xH+r0/zDbuj68us8fFmT4ACSVY7pP/y+i/1hcABDYJV5/IP2/5Xd0AGL6rJrzt/92Cx/vN8m+G7cA8BfBCLsAAACI/kN7VhbASDZm+k82AYC+i3ppeE0A0T0ASeWYim+zOYBlBQB93eTvH8bxXQdgRJ/VdOAuLn/y9h8fHzLJvlMAUAAAKOgPf/jDH/7wB+MAAIj+QzMWF8Awtkf59+aJjS0EWdHbF3vBnoD0HoC88iiOPQT7nXoL6jIn9QEA4KVnBYCHv6ADMKJQFwG4bJUCwIrfjk/6HyBI7n+d2gAAIKAMNVhiLcfWfAN225XxvfzJw2S/6D+EXeZ9Se8BsJ5vHrdCYA/SpWNzvVIUAwDI4fMNXt7IevL+fQ/2bA3FCwBnmgO7TBX9f/va8rcpKAAAxC8APGsCbO8JAACIJsOzT3issjZja74B+xwI8i7fdAY23trNPz38v0CDlb70awLI6gFwvh4Q7enV3iFaKwAABvL5fidD9u/7sbsLinkFgLIPKseeunxtKfqvAADQIPS/l+EFADKFkoWGafMhj+XWYHjNN2CHY0He7Tf48OfPfgIEXO8rzYFdtymWB0CmxLPBx7oAgDPKpv+3hOzfd2WPF1Qj/X+duW8c/X92p0Pvo5vvLH/7298uw14N4C8iEYIBFAAUAACAyVPI978fM9BMMlZf4xE25YCnjiV3txcAXt7vw7u2X6Dj0WDXqn/5QwUAABKnnA07KdeF2gAAjRWP/r/M2b/vzU4v6JNPPime/l8J3LdpAoxeAHj5Ber9Pwn9KwAANE786wAAAEMnjx/+beRAM5lYie0H2ayD2X192vLttsDb/7387+GNefhP9hcEP0o8+6uNNyWNB8DoBQADzuir4+af+nZpAJhZpej/StT+fQD2eymfXKlxHYD7/H3LSwGMmP6v8Z2r6L/0PyD0rwAAAAgcn3z37UMkgn/+owOwZZDXf9/MhITKxv1XUvsFt9Zeg1CHi4f/9OwPNx555PAAGLEAYJCxiACghnrp/+IdgKVcf8B+P+OTR85H/IvUBgb1k5/85Cc/+cnJG6n3navovwIAIO6vAwAASBsvzzPBCgC0ZEl2HOeNv2mWwvBOnux/5TYf/tyAQ8rjxvrPnx0HpP8BSJNdNrBYPgBQT9Vz/6+k7bun/xUAinjL/S/brgNw+afLr11u52QBYKxB+8kee288TQHgL0YgHANI+asBAACzxY6f/YLoP40pAHQc7e07xUSFVCneUh0AYLajx7KtAPDyECRaB8BwCWajikUEAPU0S/+/rAFc/99n/7oUTf/rAJRyHf1fnlwZ4Jn7W7sJ9JctADy8xwZ+ctrGO6r6nav0vw4AIOivAwAAsFIAePb23GdH1CD933HYd+0XcxWS5He3J/4VAID148OWW3jLkL2F/t/+rwIAAMNllw0pVhMA1PP5HvUy99uz+O/rMysOuM79L6cLAMuy3Af6z6T/d911WT8pZOPdSf/rAACi/6L/MXeKyQkAE2aUZX9pQPp/lP1irkKG8O7KebtX4rwuCAAse3L/FzfpMSk6AAbNKxtYLCsAqKpl9P9ZyD5OAUAZ4ID7MP0nOy1Pzs3/MK9/4Nz/7QsAPylqy33V/tpVAUAHAJD+VwA4sCPMTACYtgNw+SfxX+oR/R9oB5muMGpg92X6f/uNGFJwSNn4y/ehMfk5AMaNKRterCwA2OXzzz8/8Cd7o/+HuwEPN+Dtn/70pz/96U9/eraR75szl/b6pJCHt3Z/dzcFgPMXHzjvJz00+PJV+l8HAJD1j1MACBWsn+E6BgDA4QJAtPjv+gb7XGs4Qy+ZxLl/6wuGTOU+C+aeTPBL/wMHPIyLidABMGhG2QhjNQHALtcFgOtA/8rv7yoAnLxEwLPN+NOVZ7+jAxDZJ5UVv/eCj/0n/TT7dlYHQAcAkPiPUACIE6/PehEDAKBZ+n9L+rl4PPrAwyGyoVcKQB/XoXwBfWAgQnUADBpZNshYUwCw0eelraf/9zYBnm32n75t5QHqAMTUK/pftVSw4ifhDd0E0AEARPxntn2IIu8psxoAJuwAbIk+B0lRy2qnIfoPsM/XT9z/grECjtmVANsVEROnA2C4vLKxxZoCgF0+7+RMjH57+n/pUQDQBNilQfq/8bUFlhHi/qWqAtv/qmzWP00BQAcAkPgPe/WAw6H8slcwAACyFgAORJ/7JqoltnMQ/Qd46ibWf/mPjQwgcMCWKNjefJgIHQA58soGGWsKANZ9Hsn23Pz29P+FGkBk9QL6ja8z8BMq1wAuoflMBQA1AJg50L8eHxf979UEOJnLl/4HAF6mnI+lnyPkquW2E5D+B/iW9Uz/+k+MHnBGjXCY8BwAmcLKxhnLCgAe+jykXen/vQ/5EscX+o/mkwGJ8rfsAPzFNORgIHfcn0zXByi4oy0QAJiwALDsP6F+nHS16PbopP8B/syp/YGOiifDxOYA0AGATMtKKwCAewFz/80eu7P+h/LJyOT4mxUA/mImcjCgA8CI6f/2TQMAYPT0//IqhH39+UnAjLXo9tCk/wH+y9fbGCigkhpRS7E5ABQAoMtaqLGyFAAAWPcWvp+nA/C+IbPrpU8GJ8pfpAPwFygAgA4AYxYAul9wAADI3RBYKgS1S32kI8A9OgUAgP+iAAD0VSNn+fabongAKABA7ZmfZqEBMDoXAdABKOVhVn7jr+kAzEbiXwEAhP6Jn/5/mMuPcOUBAED0v0vkWoA7Ael/IL+V4P7XexhJoJ4a8a8z2TJ5PgAUAODlnK90y8oAABz2eQxtHuz7tuaZRRsT87t+WfpfAQCtAFADoEvu/2UloPv1BwAAugSvxbjT0AEA0tqY4xf9ByKoEbKU/gcgRwHACBNtwgfcDC+nAWb2eTBtHrUCwC6/uXP54fWvfTIl8X0dAAUAQBMgZQEg5oUIAJjW3z1ncGiQvb75ZTHuNBQAgJxepvmd9R8IqHjIUkQPgKELACpqEKGEA0B8o3cA9ubs3/cw1pT4zX6LAgAKAGoAgAIAOgAA1En5b2EAqRS/fvibYtw5KAAAOX19jgEEOiqb7hKJA2CI8PHLmzLOIP0PwEOfx7Nr+19G7d+HMcR8+M05OgDoACgAAAoA6AAAUDXorwZAyxy2JHduo7RQALaS+weGVinjJRsHQIP88ZnnrC1/ZahBBwCAdUOf/j++sPv97fz9y7fT//c/0QFQAFAAEP0HFABQAwAgTtZfDYAGOWxJ7twUAIBUXsb65f6BaJrFvGTjAKgXPj7/zKUAAAoAAJQyVgFg0QE45ybxf/9zHQAFAB0A4X5ADQAdAABGif4/awKoB3Asii3JnZ4CAJCEcD+QRqWY196wJgC0zCgrAIACAADF6QBMmP7/zWnS/ygASP8DygDoAADI/cdnf7EexZbknkGckol9ARwn+g9k0ibpJS0HQKnkcZGY8vrvGGqQ/gfggCEKACOe/r97MeA3NUn/owOgAAAcC/orA6ADACD6rwNAkPT/ogAwh16zi2SJa6NBlLloOgJpNAh7ycwBUCR/XCqvrAAACgAAFPR5J7s2crj0f4QLBVzO+q8AoACgAKADAIQqAIAOAIDovwIAQdL/b+S80xP950zQWu6aWJPSaADJtAl7Sc4BMERe2dCBAgAAu8QvALzPq95ufYv+X/5bAUD6X/pfBwCQ/kcHAIDZcv9qAGyMaEt7pyf6z4GU9UuGi9ZT0zgAWa2ca7nqXQDAsSCyDgAoAAAQwef9bNzCh4l5HYDtpP91ABQAdAAA6X90AABQANABYCWrLfOdntw/B/LVmgAA0E7tyJfkHACVssg1nr8MMigAALBuJZcf6vT/zygAbKQAoAagAKAAAEj/owMAgA6AAgAKAJNTAOAAQX8OTxijAbCbAgAA4sietkABAICXPu/t/ENQANhC+l8NQPpfAQDQAUAHAAAFADUAVkLbwt+TUAAAqlIXASigdt7r+mZl6QAIm0g2vKADAMC9z2Mo8lgUALaQ/tcBkP7XAQB0ANABAEAlQAcABQDO724TgGtC3jycEiYGQAH3ea/r/y1y44tsJQDhE8lGGHQAALj4PIwiD0cB4KXfVCP9j9y/AgCgA4ACAIACgA4ACdL/iwLAZGpPJ9L7+o4xibynTu5iwwjQTYPU103BAAAUAEABAICARP+l/xUAFABE/xUAAOl/dAAAUADQAeAmun3yb33uOhwFAA77+hHDMsSeavO3AJTXoADw8I4AQAEAoi03HQCAOX0eyZkH8j6jSjv9N5V9Mjexfh2AqgWADz/88Ob/rhNYAdF/dAAA0AFQAKB9c4BxmQyQ1ddPHLsF4wkQRYOopVAdAL2aAM9uxKhC48oNADGNnv5/n1qNPf6b+j6Znli/GsAxL4P7Hx4iegJy/+gAQDR//OMf//jHPxoHFADUAFAAICCTgWSk1a/H4QxjCBBUg+yXRB0A7dPJ639uPEEHAIARz/R/8T67Sjtd+l8BQAcgYNx/S3D/wxOkT0DuHx0ACFgAuDAgKAAoAKAAQBxmApmUCq8PFH//ujKTCiCct7BXg+CXUB0AzQLKK39oDEH0H4Ab8eP+195PoNKOlv5XABixALA37J4j/V+W9AmI/qMDAGHT/5oASP8rAKAAQCimAQlsjK3v/Z2WW37/870PeUuCX9wfYHiN817SdQC0SSqv/L4BBLl/AK5J/88Q/V/qp/8VAKT/ixcAKqXhZ0v/6wCAAgAKADBE+l8TAOl/BQAUAAjCHGB0G3PwW5LuxdPwGxP5Gx+LfQ1AU2J2APQNLhs3EP0H4MYQuf837+dwcpTaBP2l/xUABk3/dy8DfNiVGAp7U+xt/koBAHQAEP3XCkD0XweAmCF++e85Sf8zupXz6O8N0JdK278M8a/3ExQAAAjhEjiTugOgWYLZQIHoPwDr4kf/L0T/t3OafwWAcQsALTPxkxQAhFc4n2I//5vGEHQAEP0vyMAi/a8AQNXo/xsR8DlJ/zODjgH6AxcoePYL9iMATYncAdAyx3z/ywYNS+ZmjSxXFU0AJhc29H9N7n+7qlcAQAegoA9j2JLRf/gL8QsA8isUTK4f+DWDCToASP9XZZAR/dcBoFL6/40g+ITsdObR5Zz6W87ov/F8/zoAADQleAdAsw7As983aFgsZ3o1AKQU+ZT/zzwM0Ev/X/ymMil/HYCUHYDilxHYXi3QASBrYP3mNg0p6AAg/d+YvYD0vwIA56Pb4uCzsa+ZysaofY073bJVdhAAsYjfAdCgALD+J8aNCVfK+VINADOIn/t/6T5bP1sB4Gc/+9lv6hPxVwBQACh+eQEFAGaLqhtkUABA9F8HAOl/HQCGKAAsRzsAPmsdlB3NhLrUAABgSPKXANSuARgT5lwC9Uo1AMzgLdYfPN9/2AzXBPjZN7bn+A+3BUT8dQB0AIYjzkLMVLoBh1ArTlWAfOl/HQCk/3UA6NgB8HHroOxiZqYGAABbiesBEDYGDSNWX06+3PLqFIB5ZOoA/Ozbtkf/H1IA0AFQAJD+RwxdDUAZgDkLAJYnCgCgAKAAIPe/TgdgEnYu6AAAwGtyewAA9dL5ov8ATOv94DY+zGMh/p9tIP2vAKADIPqPxLkagJ3CVB0Aa5PE6X8dAKT/FQAoleFucBdEYJ8CAPCCGB8AQNV0vgIAAHPKmv7/4MrPWpH+VwDQAVAGQMR8xA7A9a1tvKOO0WeRdBQAUABQAED6XwEABQBCsTcBAHhBng8AoHv6XwEAgATep/DwoX1w52dtSf+/9DffJv2vA6AbgPT/+Wjyyfzx3hh030sTiKTTvQNQtZyjUaAAoACAAoAOAAoADMp+BADgBcE+AICOBQAvRwEY3Qyn/O/YAXAFgL0FgLcOgBy/JoAaAAoAva4P0P3SBN23FrZM6e5r0GH5ZYZeAUAHANF/HQBCFQCa1Qyo6uVOufyr3QcAwLc8S5vJ9gEAlM3lKwAAMI/Z0v8tCwC/uSPuv5L7v7hE2G/+LwoACgCI/tcO4ndvIBz7ZRjxGh3n57Pj85YM/YitAAUAFAB0AMiX/l8UAFJ4uV/sOAAAHtsYO7v8ROwPAFAAKPJaa8u9KAMAMKhkuf83H2zgCgDRQv/rpPlF/xUAEP2vncWPUEXYnm8WJQcdgGOJeQUABQCk/3UA6FIAaNk0oKr7nWKXAQDwwq4U2sP/BgCQ+y/ycuv+jqT/ARhX8Cj/MR/s0bIAcPmh6L8OgAKADgAS/w1iwRujw3Hiy8LcoAPQLCuvA6AAgPS/AgCjnP5foDwsOwsAgE3OZOAEAQEA0f/iL7e8QAVgdAWD+y9/rWX6f9lZAOhyWYB5OgB/U5OgvwKAAgAKAAAzdwASJ90VAFAAUAAgU/p/UQDIyM4CAGArkT4AAOl/ACii0gn7t2T6G6T/lxMFgJY1ALn/IgUATQAFAAUAFAAAhP51AIauAagfSP8rAKAAoAAwHPsIAIDdZPsAAGrE8RUAAJhHpfT/5cYjPMYPStABiBb3dxEA6X8dAEol+3UAAB0AuX8dgL7j44oE0v8oAMxWAFh0ALKwdwAAOEvODwCg1ysrr0UBGNH7EkZ5sAoA6XP/mgCi/1k7AFoELc/rrwAA6ACI/gePmP9xEH0fzsyvcEYZB0F/BQAFgDcKAEOzawAAKEbgDwCQ/u/yysoLUQCGcyDiL/1fowDwr//6r5k6AH8Tj+g/Q3cDXEagcfp/JSwrQwyoAYj+B8lV/3E0Hbd82tz/QKMh7q8DkLsAsCUCrgAwNPsFAICSxP4AgC65+V13kTX9rwkAwCjOnNd/5vT/WwGgYCXgX7+R5vT/A3UAcrcF5OkTdACKX0aAXYF+HQBAE0DoP2ac+o/oAJybFdL/OgBEuxpArysPUIQ9AgBASfKLAEDLoHyz1zBhX1M9/P2b2/EaFYBQDkf/B/VBZefT/28+SeRvQlqP/mcqAEjSz3mtAAqm/59lZOWGATUAefcDiepS8WtRfk2AUrNC+l8BgDjp/0UBYHB2BAAAFdXICwpNAsDQif9QkfSYnYST6f8hGhcATE70XwFgzg7A4csFiP6jAzBhAeA+ICsxDOgAiPt3SaLL7qsE1JgV229W7l8BgKpZfAWA0dkFAADUVSNBKEkJAMNF/1u+rpjhhdP23/dyFACa+aC5m1j/xmLAvz6hAKAAIPrPgSaAVkDx6D+ADoACQIQ8uoy+DkCclSL0rwNApSB+x7sGAACGoQMAAAoAXV5LTPuS6djDVxgAgL0+COlA+j9ZDeBvcpH+x/UBpP8BZu4AtGkOyKNfYtbGQQcg2ho5FkwX4lcAUAB4SQEAAADYqmCUTaQSAOZJ/5d6OTHJK6Vjj3fc1gQArPiP//iPy3+/DM3vvfEPYjt2EYAEBYC/SUr6H9cHUAAAmLMA0PK6AfLoKADEXB17E+ri+woAOgAbKQAMx2gDANBTwTSbYCUAzJb+L/K6IvfLpJcPc+MrK69aAcjhugDwpkgH4IOh7O0AuALAcDWAf/6G9D8uDiD9D6AzIO6PDkCylSKLrwlA/AKAVHobRhsAgM7KxtrEKwFg5gLAyVcX0V4jLXUuAnAd8d9yF16vApDGf/zHf9wXAJbV+P7GW/5gQLMVABJ3AK6z/v98R/ofTQAFAAAdgJvsstA/OgBDV2JE8NUDUADgZmcZDQAAOpOMBADp/wgvLWZ4UXS5l+136sUqAAkcLgC8LAN8MKz16H+m9H++GsA/b/Yssv/sd46VB6TY0QeQ/gcI3gEQK0cNIMHqkLDXBEABgEX6HwCAUGpnDSUvIZOvv/7aIID0f+0XGMleFxV8veSFKwCDepb+X07E90/+eUzpCwAJOgD/vN9K9P9MhUABAAUAHQCAUWoA0uQoBuRYFIL1KgHUS+F3rx9wbGcZDQAAYqkRa3v4c6FMGDH9f82AQPr0//mbGq4D0H4fDdeRAIAi/v3f//3f//3f3/77A56UAT744INPkpok+n8T4v/nc3QAUABQAAAYtAMgNY7OQIIHIkOvA8Aop/8XTK/KIAMAEFe9ZNv17S/S/zB++l8BAHIk/tvc0UAZ90mqHQDQ179/4/ITcf8Vn+Q1Sfq/OAUApP8VAAAi1wCuw6bC35CD9LwaADELACt/7uPHSgwyAADR1Yupfen0/5CoAKADAONmwXvde/CY++V+pf8BoKr7AsCiA6ADoABwugkgv47ovw4AQASXmKnMNCgAoAOgALBRkVvWAajNwAIAMIyqkbUtwWIgPtlrGCgRPlYJIcHLHul/ANhFyn9XEyBTN0D0v1QHQIod6X8FAIBQBQAdAJD+RwdA+n+LsresBlCPIQUAYDC9TisOKAAA21Pgz6LhsulxXvBI/wMwj0s2/dhfMeGFAkT/D/vwww8VAFAAkP4HiJD1v7j8XGwaFABQDFAA2KLGzeoAlHUZRuMJAMB4akfZpKhBDQAokgIXTw/1OsfwAjCPh3n087eAGsBL3/3udyfJ+j9M/18oAKAAIP0PEKQAIP0P0v8oACgA7FL7Zn1ueYZhBAAgm4IJNslpUAMYK3gtfU60CLiE+pnXMwMtaq8/AYhmYxi9+A2SNf1/rAbw3SdmSP/fFABAAUD6HyBUAUAHAKT/UQCQ/t+owS37JPMYF1IAACAnZ/0HdpUBRikMrB/fih8PIUf0f6x4+tCtnocPxOtSANo4HEkvciNMkv7fVQP47gbS/yD9rwAA0CX9rwYACgAoACgAbFTpZm9u3Gebhg4AAL7lcHZNPBrmqQEMffWA+yNepQMj7MrWOz9945cuoQbZxQEAaEyqXvq/i5fZ/e+WIP0P0v8AKAAA0v8oAHRM/y+VCwCL09gDAAArDiTYBKOBIa4G0PLACFvm4VjXKMjxomXQC0QAQBFS9QoAHQsAKx2A7xaiANDG//w2mXsdAOl/gHnS/zoAoACADoACwBZVCwA3d+EDTwAA4FveIrxv/+0iAMDQZYBSB0bJdWpcg0IA3apUAACgJal66f/2of+W+ob4f71q/Q9Hyfo/I3OvBqAAADBJ9F8NAKT/0QF4KVP94PBHcLXT//f35WNPAABgOZbivbmFRR8AaF4DeDsEVU3Qyq9TJNUtfV6J6D8ArJOqVwBQAOiV/l+pAVz/64jRfx0A6X/Rf4DZcv9qACD9jwLAeu4/zbUITn4Q16wAAAAA8F/2hnrP3wKgBvDmTFVg+Xb29/pYVPAIKcJOqYKK9Hlx0v8AsJFsvfR/yuh/3w7Arw95+IcRsuM//OEP/+c58vc6AMoAAIkT/2oAoACA9P/G0P/M6f830v9dGGQAAOZ1Mt27KAAA/S4j8PAQVPAIKcVO1vT/0C9dsk4SL0oBqErIXgEgX/S/VwHg19V0if5fO9kB0ARQANABAJinAKADANL/TFIACH4VglDp/0UBoBPjDADA1ISMgbEqASvHruJHSFl2Rkn/b7zfm+n98L/DmmGGeF0KQHHi9QoAKXP/DToAv27uPpF/0SD9X6QG4IIACgDNOgCaAADdCwBqAJC+AKBXMG36P/6FCAJG/98oAHRhqAEAmJpIMTCQZweuegdJiXbin/h/y7x9+AvX/xFcpkly/3C8HAWgEtl6BQAdgCGi/xc/POpY1r9eB0ATQPrfdQAAJikAqAFAyvS/KwxM2wGIeRWCUdL/y6MCgA8n2zDaAABMTaQYGCL3//CQ1exQKeBOzPT/xhz5s+0c5bVK4nnihSgAtUnYS//nLgC8RedHj/6fSf8/7ACcvDUdABF/NQAA6X+VAMjRAdj1+10uNUCQAkC0CxEMl/5fFAAAAIAuZIuBIaL/N4eslsfJ9Zyu+Lv0f5xpsGtytlk7pRZg1nlScKAA4Bk5ewWANAWAS1z+5v+e7AD8urcfFnI++q8DIPqvAACgAKAGAOgApKkBbAnlR7sQwYjR/+VR+l8BoDaDDAAA/0XIGAie++9oPS0t/s6ghYSWa+f83SXeWS4FAEAzl9D5ohKgADBsB+A6NH/zfw/UAH4dwA+jUgAQ/dcBAFAAUAYA1ABIVgCo9Jlb+3vECAMAwJ9JGwOi/w+9zOaKmzNoQ6DNwil1j8my/h13DQDck8KPXwD4zne+853vfEcH4GHif1A/HIEOgOj/KAUA3QCA+AUANQDQAUABIGv6f1EA6MQIAwDAn4kdA8mi/21KBdLkSP+vL4pmC63Zai11U5XGCgBOEsqv5ztXLv93Y/r/Rq+If7SLAIj+6wCI/vOsAKAGAOgA6AAAOgAoAPQ9/b+EOgAA0I78MZAp99/sqgIy5XPG6Ff+9TL3JiwA1L6vBg9nywBW6gl4LQpAd5eo+qIJUDP9v5Lm/85OG0P8BU/q7woA86T/C3YAJPsVALpfJQBAAUAHAFADQPq/hr73DgAA8F8EkYFk0f82BYBFB0D6/1H6/1kHYP1f05z+f9yXQ/cbvz3Tf/mFYwcHr0UB6O46sH7/EyoVAE5aOUP/fUz/QOL/WQ3A6f9nSP+7DoD0vxoAgAKAAgCgA8DQ6f/aH6YF2QwAAAAdACBV9L9N+v+NWPwk0f9lT/p/I+n/+Dam/5dv9wdcAQCAEd0UAO5/TrQCwP/+3/871En6pf/zFQBcB0AHQAcAQAFABwDQAUD6/xkdAAAAIAS5ZCBN9L9l+n9RAJD+P5r+b9MB2D6NSy2BZC+Qtp/y/8wxwQtRAIK4T/9ffk7A9P+b+wLAd9OR/h+9AyDfrwCgAwCgAKAAADoAyP0nS/8vCgCtxtZoAADAC9LJQI7of+P0/6IAMEH6/+XvnFwj3S8CMHkA/f//xvZ1vT5u0v8AjOtZAeDyr0RL/99fBCAl6f/ROwDy/WcKAMvmTAk6AADxCwA6AKADgAJAmvT/ogDQZFQNCAAAvCajDDSL/h+O6XfpG7wkIj+zIiul5XUMns3eLqsmyEug+wLAyTaFAgAAKb0l2hc1gADp/+sOwHfnIP2vAzCDh8deqX0FACB9Un+q6L8OAOgAoACQKf2/KABUHlKjAQAAOwgrA1Wj/4eT+kGuPPCMELz0/xAFgPugea8MesDs+3UB4GRYXwEAgKwE+kOl/2+kDP3/j29I/6fpAKgBrAT9bwjrj9IBeNtfQsxAkbD+DLl/HQDQAUABYM4CgCz7gZE0JgAAsI/IMlAj/X/s+gC1r0JQ5IB5/RNpeOn/4B2AmzncK4MeMwG/sQBw4NEtpxsFABCHWH/M9P/DDsB6K+CjVaHS/+N2AH6YlA5A1ei/gP5AHYCHe1CgGWgQ2R89968DAAoASP9PmP6XaN81mEYDAACOkFoGAvYEunQADtyyQLwCQPyLADybrs1eaYQNwV8XAAo+wC1HBq8/ARiOfH/A9P+9lTT/RxtEKwAM1wH4YWoKAMXP938hnR8297/3uXLL3wpAgwIAEtKgAIACwLjp/5Pv4HzA+GwwDQUAABwkjgzM0zcochi8/KE0vPT/0AWAXTH0w5n14CH4IgWAXY9a+h+AcUn5x4/+X3cADmsT8X8Y939IAcBFANJE/8Xxc6f/NxKABul/dABAAQDp/3HT/4sCAAAAEIp8MDBzDeDkrcnEKwDELwCsn5P+8k8ryyRr+n8pdxGA++GS/gcgH1n/mOn/j+rYm+bfe2r/7aT/FQAGivsrAORI/9d+PhWDBgUAhKRh0By/9L/0vwLAogAAAACEIhkMMFCSmzTp/8YFgGsHfnn9Fh6+wBjlLPiVLgIAAClJ/FctALydwv/lOf7bFABelgGe5fULRv9H6QD8cA4NCgCXQ82IZ/ffSC4/eAegzZOpGDRI/yNdDc7fjwLAoAWAlxujAAAAALQmuQugA0DiAsBN4L52wWDLXcR5FaQAAAC7CP3XS/8/i/jfpPxvygAf9fA/mlMASFAAWOkAPDzaJIv+X8jlh6oBdHkmlYQGBQDErEHWHwWAZKf/3/hXPlcEAADKE9sF0AGgcfq/YwFgKdQBePa64szfAgBDkP5/WAA4UAy4z9Zv/LX7PkDKAsCnn3766aef/vrXvw7bAZD+vw73P/zvlx2AlwecTOn/C7n87k2A5ZsgfpenUWFokP5XAACk/1EAGC79vygAAAAAMYntAugA0DL932u23LwAKJj7P3aDXoMBwKAUAO6j/10KAMmi/58+If0/RAHgLfd/k54/cO7/G/nS/xdC+X3LAB2fQ+WhQQFAAQAQ90f6f7j0/7M3cdv/aoYPDLUdAACgA5ldgOKp7rej69thVoxeASBsXWTX/Fx/OVHjegIAQFjS//fp/70dgJXz+gdM/1dtAny6gdx/8PR/1Wx9vvT/ogAwZWDojTw0SP8rAACi/ygADPp6/sDGTJKJD/jOCwAAZiGwC1DW9aF17zFZ5n6G9H+oAsCueVhp6noxBgAjmjz9v6UecCD9f90B+Ciq9un/CDWAH06pUgHg/PFH9B/pf0ABQAEAEP1H+r+xwwWAxB8Piv4DAEBnoroAba4J8DDuLGevABCwA9Ay/a8AAAAjegu7L3NfCmClA3A+ZO/0/206AP+wwQ8nFrYA8FLMrVqk/3skhC4BlO5JFGFokP5HAQCk/5H+Hzf9f/OGbtefpPxsMOxuAgCAuYjnAtyfwv/l0fLZP938XzF6BYDgBYBnKfwtJYGHv6wGAAAzkPJf8VF2fQsAJzsA/3CIAsBY6f8L5/4nTgBlqtzzhA8ZFABE/0EBAAWAGV7VX7+t2/77KT8YFP0HAIAoJH0B7kP/z5oA6yWBG+3P0c4Q6f8hmiEbJ/b6bHw5V70MA4BxCfrPmf6PUADYWwP49NNP/+E0HYCB0v8fHlVvk6TwJ48KzZZ7nvaBg/S/9D8oACD6nzv9v6Q+o/+Zt7c+JgUAgG6kfgG5/2cHxo0HzI3H2xqnRZfUHzH9P9zVIVbm2+Gp6AUYACQg7j9h+r9gB+DTEl5G/98oABQvAERL/39YSPENk7+fORt0kS/ff/MfD/8VFABQAADpfxQAUr7Cn/z0/6L/AAAQi/gvMFXcf0tw/+EvHK4TPFMkJC2sP2j6f9AmQIPLCwAAA5H4n6oDsCxL8RrAp638QwkKAIfT/1UPRB+WVnbzJPKnDf1fZE3/35/vP+XjBel/6X+Q/kcBwEt9nr3DNSAAABCCTDAwzzn+t4T1j6X/j9UA3pwJSYvsKwDI/QMAHQn95+4AXO/rjz766C1PvyXZHyH3rwBQowOQOPpfY7Ol84WBRo8y/69vXP7vw1ZAmscLCgAKACD6j/S/F/wPvXv37t27dzN80Pds/EX/AQAgIuFgYKoCQMtD5bH7OpaWFtwfNP2frwBwZhoDAMMR989dA7jf43vP6x+kAFCkA6AA8KwAcP8nQ6f/H278209Wfu1ZDEJMv1ISKE7i5CYBP3Qm/n/tsV4DeDZQoAagAADI/SP9Hzb6/yzi/+5Ogg/0trx79bEnAAAMQDgYkP6vd5xsdjCX3R8u91+pABBnMniJBQAzEPTPWgBY2ek34f4t4fvu6f9SFwGYswbwlvu/xPofJv4bdwA+bGL73T2Mp1O7ANA3j5Imo/y/ztneARAHRwdABwAQ+kf0P/hZ/x/m+989MfSneTcDPvpV1wAAYGrywcAMBYBjcfwuPYTDWWo5/rFy/2ULAC8nQ/up4iUWAKQn5Z8s/b9xv386rH8obaoOwN4/qXoFgA8jEcfvFQnqlUeZNvS/LMvLGkDiQQMFAB0AEPRH+j93+v/Nfb7/3XPjfqA3yu4AAABekw8Gcqf/j6Xwu1+I4ECiWqB/uOh/kSbA9inReJJ4iQUA6Qn6Jzvx/8b9XjCR/9+urPzTjTgFgGmvCbBF48OR9L8CQBvTnul/vQBwqQHkGzdYSfYrAOgAgOg/CgCZov8XN/n+d6tG/DRP7h8AAFIREQZmSP9vT+HXvhbBdgcS1ZL9QxcA1jsA97s48hzw+goAZiDunyb636sD8Czc/98KUQCYpwDwRgFgnvR/FxOG/q/T/8urAkCacYPtaX4FAE0AkP4neKZ/iAJAtA+7dhUAxuoAyP0DAEBCUsJA1gLA0On/N+k7ACbq/VQ5lqeX+AcAGpP4T1kA2NgBqJT+r6dqB0DWP04B4E2z9P/lHuXyJwkGTZj7L1IAWHQASJT4f0n0XxkApP+JeTr/sAWAmB95Xcf6320wxOd4ov8AAJCTtCWQPv2/JYLf4HIExxwIW4v+J7h4xckZIvcPANQm8Z+1ALClAzBcAeBCAWCGAsBSrgOwfpsP71pM3+n/50z/KwAwZ9wflQBE9kvNWAufqun/9T6A9P9Lo3cARP8BACAzUUtAojpgqvva3uC13P88BQC5fwCgF4n/rB2AjRPgJs1/85NlW0kgQfpfASBg+n8pUQA4c++S+k7/n7IAsKx2ANIMINL/aAvA4bC+3D/xc/9e5B/zbrOAGy/3DwAAyYlaAolP/P8yTh32tO43tiewpf8TTOONIXuhfwCgI3H/rB2AjRNgxIsA/EM1Ev9xov9vekX/r4nsJwsGKQCcSf+PNYYoA6AMAGci+3L/iP4nS/+/GbQDIP0PAAD5iVoCzv0/4hUAniWzpf9zpP+DXOTByyQA4BlZ/3w1gL1z4HKy/+XVBQHiFACq1gDu+wBTlQRCHaA65v6vCe4PnQ26yQQvg+TXKxUAzqf/LzciX44OAGoAJE7/b5mNFik6ALkLAKE6ANL/AACQnKglMHMBIFQVYcXerLbo/9ATtfsVHrw6AgC2kPLPdxGAk1PipgCwbL5KQI6LANx3ACa5VkC0Q1P30P898f2xUkErmeCXvzDnFQC2j+31X4mYI/2PJgAzFABAASBB9P/Nu/26b3OawQcAAJ6SuQSc/j9NAcCJ//NN0WYzwSsiAGAvQf/JT///0E0BYNncAWhWA/iHABQAqgoV/b8n0D/WWf9HFLYAcP+HguYoAKAJgAIATNgBGPRDsHdHtX+DuTjxPwAAzEP4ElAACF4AEP2X+689E7wcAgAOEPRPdvr/sh2A+59E6ACI/ueO/l/EjP5fSPaHzQaliS9XKgAsTzoAG4f32Y2LmyP9jxoA0v8wTwFg3A/B3p3Q8q3l/T/5ABMAADKTwgRmzljPnPmW/p8w/e9lDwBQkKx/vg5Aqblxnem//8m0BQDp/5ZiRv8vJPvD5oSk//cWAzYWANZvR+gcBQDUAFAAgBkKAEN/CPbutDN3vfFN5f2/+vQSAAAyk8IEFACk/6X/i+/rspeAKDgTvPIBAAoS9K9RALgZ5HE7AMueE/83KwB07wD8/Oc/l/7nQqxfB2D0AsDGKwBsuRG5cxQAUANABwASFwASvH17V8ixO335XtL7awAAmJF8MDBtASD+Gd+XMQsAnlyKp//fZsL5+XC5HQCAIgT9i9cAVkY7wXUA4nQAOtYAfv6NvvH9nz+hANCRfH/A5JACQJECwPbbET1HBwBlAHQAIGUBIMdbtnel7b27Z28evZsGAIB5SWQC0+atu2zJri0cLvfvmeXZNDv5ZH0Z3tzn/neNAgAYjoh/2RrAxmEfugYQ6iIAXWoAHQsAPz9EAaA9Ef9o+SEFgC0FgFI3JXqOAgAKAKgBQLICQI63ae8qe3lfD98wevsMAACzExEGnP6/ffR/40YOF/2f/Mml9lN2vvT/iC0FAOCacH/BJsDewdcBGPr0/40LAD8/RwegCyl/HYCBCgBlSZ+jA4AOADoAkKYAkOYN2rve7t8qetcMAACzkw8GZo5id0//D1EA2LI9nmLaPGvnO/G/6D8ADE2gv2P6/6JG6P///J//U6MG8Ol+yToAzyL19VoBPy9KAaA9Kf9QiSIFAB0AFADQAQAFABQApP87pv/3jq2SAAAAJCciDCgAdEz/v9zU7ify37Jhkz/FNH7izpT+v344XpIBkN6vfvWrfA9Kpn+7//zP//zP//zPSqfYL57+f1PpUgDLziZAmgJAqZPut8/9r2yeY3sbIv5xQkUKADoA6ACgAwA6ACgAzFYAGC79n7KDAQAAPCAiDCgAVN2GM1sbJ+7/cNsmf365PMz2z91p0v8AkNuvVuV4jGL9u9L/9wWAgvuiePr/vgBQcLPjXAcgeAdgbxz/5205zrck5a8AMGEBoE0HQOUABQB0AFAAQAFAAWBdtALA9jeP3koDAEByIsLAzCdlD77BMaP/kz+/XB5ax+du6X8AiO9Xm+39/TjlAbH+varujuJXANjym+c3u3sHIE0BoAuH+sYE/YMkihQA4nQAXHYAHQAUAJD+h8gFgBxvxN5FsuvNozfRAACQnIgwoAAwWwHAk0uDedWG0D8AhPWrtvZuUpHHKM0fKv3/5qMezm92y0sB/OIXv/jFL37RPveftQPgaN+FxH/3RJECQHoi7+gAoAOA6D8KANL/F8Ol/wEAgFmICAMKAJG3uXH6/3zq3bxqTPofAAL61YButvzlY5Tmjxb9f/NRJwUfQu0OwC+u6AAoAIzrJljz028oADSjAKAGgAIACgCI/oMOQPro/5sRrwAAAADkJx8MSGlH3uxm6f8io2pSdacAAAAd/Wo+CRL5maL/F0MXANpcB0AHQAEgjZv0/w01gNoUAHQAUABABwDpf1AAyJH+fxmsD1UAUAYAAACWRQEAkNUOXAD4soKHN262JIj+X+9WL28AoLFfMVQZYNfOHSv6/2aSiwAc6wD84hEdAKH/of10AwWAShQAdADQAUAHANF/kP7Pkf5fP8v+u6i8IwYAgHkJdALi2tEOiW8b82VDZkua9P9l8niFAwDNyP2PVQA4vKPHKgAsg18E4FrZDsAvVqkBiP6P66ebif6XpQCgA4ACADoAyP2DAsDQ0f8lcLhf+h8AAFgj0wlIbAc8JH7ZltmiAAAAHCP0P0oHoOBOjx/9fzPPRQC21wB+sY0CgOj/oH5ajgLALgoAOgC8+du//VvpfxQAEP2HOQsAo7+Zkv4HAACGJNMJSGwHPCRK/0v/AwDxifsPUQZoMBN63ePLX0tzEYA3bdL/XZoAzv1PQT+tRgFgCwUAfYBpo//XFADQAUD6Hwr6l2+USv8vyyL6f0/iHwAAGIxMJyC3HfOo+GVzZov0PwCwl4h/jSZA8eZAvom35aF91FW9x364A/CLcxQAFABGpAPQiwKAAsCcof97ov+oASD9D2ULABtrAOtx/7eXrKL/D0n/AwAAIxHrBES3Yx4VFQAUAACAIQj3l+0D1LiGQLIpt/LQngXxcxQAPt1gxALAz4fimD+oeWoAQQZcAUABQAGgeBMgQqlA/BQdAOl/CFIAWO8AbHyFLPd/Q+4fAAAYj1gnILod86hYI+J/82BF/xUAAIAiBPpDXUAgdwFg/dGtB/HTXATg3sYmQMACwM9H44A/rkmuBhBqzP/whz9c/kMBQAFg5vT/ehPgbysT/UcHAOl/JikAnH95LPofNuivAwAAADwl2QmIbgc8JFYK/XsW0AEAAGqQ0W/g//vGnB2A7Q9tJYWfrAOw92oAoQoAPx+QQ30CM9QAgu8CBQAFgGip/cYFgO7k/qlaAFAPkP6HNun/6w5A8RfG8+T+lxGi/wAAAC+IdQJy29EOiV9W4ylABwAAqEE6v1n6/1gNYOjZVfChJb4IwL37GoACgAIAb9oUAO5/p1lnIPLgZyoA/P73v//9738v/Z/shP3pCwC7HqbIKcGvHqBsIPrP5AWASw2g+Evi9Ln/N6L/AABABjKdgNB2qEPisSj/gRqA6SH6DwCUIqDfvgDwq1/96hKCf/udm2T89Z8P2gGo0W2YqgOwXNUAQqX/R+wAOM4n89M6bnL/K/80bQcgTQHg91cUANKk/3dl5f92fAoADNcKaFwwkPuHyLn/a5Pk9YuT/gcAADKQ7AREtyMcEo/l/h32pf8BgCBk9FsWAA7cwogdgAQFgAgdgGVZdsX9f/SNy/+V/neEz+enza10Ayr1AWKOfL4rAMxcA5gh/b+emP/bFHQAUDCQ+4dxo/83HQBvc7bbksjfntqX/gcAALoR7gSkt7sfD9uk/80H0X8AoCox/eDGmk4fbLP3Zj/qpMsYXsf6H/5wJf1/bfL0vw5AVj+NZJLrAHQJf1c95f/v7ygAzFADyEoBAB2A3PF9iX8Sp/8vHQDvcbbbGMrfFdmX/gcAADoQ8QTEuPseD2tH/80BTQAAoAHxegWAsmoUAO6z+LNdCuDN3gJAwRrAz0fmOJ9M+vR/wA5AmgKADsAoBYCbDRbx39sEEEJFDcA5+2GU9P+//Mu/eIOzxSV8Xy+drwAAAAA0JdkJSG8vgdP/jvAqAQDAKCTsFQDKKlsAWIngqwFsKQAcqAH85Z2fD85xPpkZCgBxOgAbE9u/f6JvAeDZVq3/a/pKQNjE/8p+F+7f1QGQQ0UHQOgfgqf/Ly81nf5/i5vwfccOgH0BAACUJMoJiGtHKwA4sAecQjoAAMAK8Xrp/xrKXgFgxUfNRRjeAwWAlx2Av9xAB2AI37uT7zFOchGAIHGoY7n/8zWAStH/vXQAul/qQaZ/o0sKUwEANQChf3DK/2Tu8/dVk/oKAAAAQDvCncDMHYA06X87usEUUgMAAB6SsFcAKK7sFQBe+iiYNoN8pgDwl+fEzPe/Jd1HLwB8r7Ssz1w/jSR9B+BM7v9MDaBX4n+SAkCQJoDof6nQP9C3FWDwkfUX/W/v3TZlb9ywAwAAhUl2AtMWAIJs0uH0v53bZZcpAAAAN66z5t+/InmvAHBGs/T/m4/iaTPOXQoA0ToAN5H3ld+JvGS+V0fWZ66fRnUd3P/7b5xJ/7/dQt/RLhL9P1ADiJD+1wHoVQCQ7Bf9hyHKAMYZBQDp/76qdgBubt9oAwAAVYh1AnN2AKIVEnYVAOzT4FeWAACm8v0nNsbTD/8hCgBl3eTv/+///b8zFAB+9KMf7S0A/GUhjVP+v/vd7373u9+t5P4HjcJ/r7Ksz1w/je3vHzlTAOjbASib/t/eAQiS/p+hAxDqxP+S/XL/EL8PYDxJluxvUwDw4VsNtQsAAAAALchxAlMltocOjtuPCgAAQDTfL01kf/L0/wevVL336wJA3w5AyzF/qwFs6QD8ZTnt0//XEqThv9fbuE9bI6b/D3QAHt5ClwEvnv7f2AFQAMjXAXi5GS/j7zOXBKRUoXs9wECR+KT+tTsAPnmr4d1mxgoAAAhNjhMgfoLciCkAAAAxKQCI/lfSpQCw3F0KIH36f1mWH232l0V1LAAc7gB0D75/L5JBjy2Dpv93dQBWbqH9gBeP/m/sACgAZCoAnI/+z1wAkFKFjh0AI0P66P/GDoD0f0Di/gAAQB6inAAB0+RGptn4i/4DAGd8vw4h/mmj/296FQCW3h2A9kMdvABwn93veBGAXsH374U04oHlp+H9/QaH0//tCwB/+MMflmVRAFAAqBf93xXoP/Anov8AsDHKX6MD4AO3SkT/AQCAVKQ/AeAm37/lJwAAS50CgBz/zNH/iy7p/wtXAKhaADh85v5jHYCyFwFoGX//XmwDHU/eNjhOvr9SB2DL33YZ//YdAAWA0TsAh7dEAUD0H4D26f9KfOBWycvT/9//XE8AAACIS+ITgMlP/7/ynHjzT142AAA3pP/l/uvpWABYel8KoE0T4Ed7FCwA/K6clbj/epEgfgj+eyO42eCAh5GbDb6O2j/74eWfap/Xv2wH4O+36bIX6mXrdQBSFgBObszLAkDuDoB8KgA50v86AFWtnP7/3XPGDQAAiEgAFICZT/a/8mz48J+8cgAAbkj/S/9X9cEHH3Q5Nf6bjwKo9+jaFwB+F0a9KHyRYsD3Bhfh0FHqsRzO/f/3byteAziQ/p+qAxAn/e8iAI0LADf5/gPXCpD+B4AI6X8FgDZWzv2vAAAAAAxADBSAqXL/u0L80v8AwEui/3L/VTU+Kf7LbUhWA6haAPhdVMEj8t9LpMuCLf4oNkb8X9qSzt9+EYDDeh1IqybsbxLkG2P3v29uYychUw1gb0mg8QYrAACAAsDMbvL9CgAAAMB45EEBSJnyv/mhED8AUIn0v8R/Pe1Pin9+28aqAVS6CIDoP+dbAaG6E4dD/wc6AA30Omz+ng19gBkuGhAh+j96B+A6lyn6D0C+6L8CQBv3EX8FAAAAYDCiogCkDP2v/CYAQFnS/3L/hz0LtXc8Kf7e7R+6CfCjnYZO/ysAxK8BHLiFltv83wuZtgMg8V/8cgEpLxTQkdP5A0Cc9L8CQAPPCgD3/2qsAACAoMRGAZiqJwAAUJwCgOj/Yfdx9l7nwj/5EEasAfzoqIdZ/+DR/5Pp/7cRk9onTQegy9FSpl8H4GEBINrmSf8DIPcfhE/batt+BQBjBQAABCUPCoD0PwDAYd8/R9x/2uj/m+6nwO/7KPrWAI6l/383rJMnp18hFq8A4DoAWwj06wDcFwBO3tQ//uM//uM//mOyMoDsKQDS/9L/tb3byYgBAAARyYMCIPoPAHCGAoD0/xk5CgBL7w7AsQEZqwCwLMvN/73RK/1/IRyvA6AAsEKUXwfgYQfgfPo/WQFA9hRgBtevka5/Ivov/d/Au6MMHQAAEI5UKABC/wAAZ3z/NNF/BYAcHYDzj6hxDWCgAsByl+/f8gD3pv8P73SZeB2AEdP/jWsAcvwKAAX9451RCgB/93d/pwAAwH0N4EL0X/q/qncnGD0AACAW8VAAJP4BAE5SAFAAOEMBoFcN4EcntEn839tVAHDifxQAQtUA5Ph1AA4H/dfT/0Oc9f8main9DyD3v8JZ/6lHAQAAAMhDWhQAQX8AgDO+X4Lo/8xTKFkB4Gbz8nUA2p/4/9p69P/ZHx6I/m+vB4jCS/9n6gDUKwNI8OsAFDnNf+0T/xdP/D/L9Ev/A4j+vyT9T3HvTjOGAABAIFKkAIj+AwCcoQAg+n9emgLAs60KWAMIe+L/jZcCeGj9r3ZdCkDGnQYFgKk6AOL7CgA1CgBhz/r/MnMp9A8g+r9unty/9H9jOgAAAEAesqQAKAAAAJyhACD9X0SCAsDK9hQP9BcZoi4FgLe7btABuPm5zDoxCwCRawAFD4+y+zoAUxUAhFwBOJn+X+oUAP4lKp+HNKYDAAAAJCFLCoACAADAGaL/CgCljH76/4IPbcvjbd8BKH46/5e/eawDcHPjb/9XZp3IBYD0HQDBfQWAeh2AkzWAxif+B0D6fwvRf6p6V4JhBAAAQhAnBUABAADgMOl/6f9Ssqb/Dzy6vQ/5zFi1TP8/zPEX7wA8vEeZdVwEYFfQXwFAB2CsDsBDl1x+7Q6AbCsA0v+i/wNRAAAAAFKRKAVAAQAA4ACn/x+uABC5hJC7ALCc6wCcuf0tf9sm/f+yA7A8iu/v7Q/c/4m0OsFP/9+3APDssKADoAAQMPF/ydxvjP5XJdUKQPz0f8wCgA/T2ruk9t8VYkgBAIBAhEoBUAAAANjr+6eJ/lfy8F4iX4igUiY+oHoFgGc3vn3bakf/j10EYMXG35dZJ3gZIGD6f1EA0AGIVABYSeFL/wOQI/q/SP9T07sKjCoAABCIXCkACgAAALsoAARM/6/fUdgOwDwFgAMP/OSt7dqeBgWALR2AjVurAECCPsDfd7W+xAoWAJZvOgCLMoAOwM5z/29M//9tQ4KtABTM/S91ov8BCwA+Q+tLAQAAAEhOtBQA0X8AgI2+X4ICQEHb71QBII7ij/TY314C9L0KAMdI/6MGUC/9/6ZsB+CeKL8CwJkCQC8SrgDEj/5HKAD43CwUBQAAACA/GVMApP8BALaQ9Y+T/u9+2YHzpi0AvHzsbbbhOkZfL/dfowPwkjw6jf31X//1KB2ALStIAUANoGP0P2b6XwEAgCLR/zcNtk3unxsKAAAAQFpipgAoAAAAvORk/0HS/90vO1DKtOn/LY+9zWY0LgA06wDIo9M4/X/x30+IUwCoR3xfDWB7AWDL/32Y1K9UJJB2BaBI+n85XQDYfkfS/1woAAAAAGmJmQKgAAAA8NL3D1EAKKv7lQcKmrkAsP3hV92Gm1x+mg6ASDq9CgB//dd/fYnaV+0A3N9d/AKA1L4awMYCwC4Po/81OgACrwB0P/f/3ru7CejrAMxMAQAAAEhLzBQA6X8AgHXfP0H6v6A06f9FASDGA/9dD1UfkTw6HdP/16H8S6D/JuJ/sgDw7O4UANQAwkb8K0X/j5UEdrncgsArACcLAF3udCWXrwAwGwUAAAAgM2FTAET/AQDufb8QBYAahk7/L9MXABYdgJqP6Cal/fZzaXWq5v43JvIPFwCO3Z0CgBrAoKf2r10A2HULAq8A/4+9+3u17S7svT9aQ7eg5KJPjLY2tidwZJOYiEGhN27rJlCIEEp7YUgokUcClWy88EkVjpGwJRdqJb2wzZUggWNbf9yptKW/y2n7nHrVQ6GFcp6bnj/kuZju6dzzx5jfMcb39/f1upBk7bXmnGvMseZehs97Dra//f+0PANI94uZ9f9oBAAAAEDPTE4BEAAAAJwSANQcAEznGoCGzi4BQIXffusBwMx92ayTZ/1/dZT//8xaNP1fuv4XAGgABlz/n+0Bln6JzSsAsX4j2t9aNwGA/27WBAEAAADQM5NTAAQAAABnaQAqbwB22pr+7wgA6vz2k47+TwOAuEnApbu2WSd/AzCzzg9vADbGBvWs/6eDAGASA8gAWmP2CmD6H5crAJDTzXgcTAAAoEYmpwDkXPlb/wMADflAPAKAqxp9L/8VrP+XHofMD6yzAEADQBMNQPgb/69oAGp4xdut//f/jAZAAwDAgOv/6XIAkOdXst9Lw389q5b1PwAA0DlrVAAyv82/9T8A0IQPxKYBmFHq6gFFjDn3X3ocyh6Tr6d0ekeXHkPER26zTv4A4NJAf/7t/zfeeLUBwBFL/REygJ5iACtYgC7H/fW863+238F+LyX/Ga02N6NyPAEAgBpZowKQ6H39w5MAAIAKCQCyNQDbrx7QHAHA1eNQ/IB8Pb2Qe4/44M3WKRIAhDcA46z/d8z0ZQAaAAB6emv/GZU8mN9Lz39Jq4rpPwAAMATTVQBKXQ0AADb6wAc+4CCQ7uyy/s/TAIy2/j808vr/7BEYKgCY2fcHdgKLvhezdUoFAKd7/UsXAYi7/q//BdBGf5wMwPQfAOv/00eS4fEcjvJ/Lxf/Pa0G1v8AAMBA7FABMP0HoDa72fTVT9hzxEhxBgoA8l8EwLk3jjqvhPD17OYfRsTvy3Kdsg3A4Xz/dPS/qAHoIwCYNADDZAACAACGDQCmcw1AznvfL/J/LyP/Z784638AAGAg1qgACAAAKO5oxH913C8AIPUJaf2fLQCYNACDqXD3v/f1os4+jHXfiJE61QYARzv+7ZcUaHT9PwkAxmgA/lv7dmNNYQCA9f9qBR/A4SI/ZwPw6quv+j/+pVj/AwAAI7JJBUAAAEApR1P+/f/Or/wFAOQ5JwUA2a4A4MQbQZ1v/L93OLsv2wCse9i7W7BQp4kAIFZC4O3/qTkD+G+9M6gFEABU7vdKePXVVzUARdyMxJEEAADaY5YKwLpNvwAAgI0Ch9QOFHWemdb/G9/+n6EIAKIHAKe3cDTXniQBdBoAXMoAmngxNMcfJAP4bwOwqQXQANRMADAUAQAAADA0M1YAXAQAgCJM/2nutBQAmP6zQisBQMEMIMrDNlJn5AagiRdDQ/xxMgABAAAagIIKBgAagPwEAAAAwOgsUwGw/gegLBkAlZ+KGgDTf8L9UpgaHuqlIX7mHmD7IzdPZ+QA4KMf/WgTr40m+ENlAClm9++7RwAAgAbgkrLrfw1AdPPT/JvxONQAAECrjFMBWLrpFwAAAP05zU4EANb/XPVLq9TwyGeG+Jd6gEtfkr8BEACgAThS/6ul8f1oGUCi9X8NDYApLYAGoFplp/8CgIiuTvNvxuaYAwAArTJmBWDppt/6HwDonusAWP937GiFv3Sd/0sbVHIEQob44fP9zA3A0RfapjP4+l8AQIUlQLr1f/EGwI4WoN0M4PSfe/o/uXn2/SH8B4eNQnb5Ebf+AgAAAKBhlqwArAgAQv4G8ZcsANA063/r/179UlGVHIT5Ff7GBf+6bGD/teGPf/+vFuoIACqXdMh+6bCY+BeMAZKu/10EAABXCThSz/pfALBRyBvzR3+zfw0AAADQNntWAJYGADN/ffiLFYBKfOADH3AQWH3yWP8LAPrzS6XVf4i+nsvp3R3+68bvwmCdodb/3QcAqw+LWX/BEqDj9b8AAEADULPi638NwHYhY/24AQAAAEAPrFoBiHURAH+rAlDczETbwWHL+WP97/RoV86VfyvT/5lFfoYAYOZOY32D9uuMEABU3gDkn/5rAMqWAOmm/wIAADQA82pY/wsANro01r8Zg8MLAAD0zKoVgPAGwPQfgJoJAEh3CgkAaFH+9/hv8S3/p3gNwPxNXX0w27+XHft1XASguCLTfxlAu+v/kAageAZgIwsgANipsBy4tOyfwvKAVyPxnyBWS7f+1wAAAABDMGwFIPDd/a3/AaiZAIAU54/1P43KHwC04nR2Hz0AuHRHuw+efTDrHr/1PxqAChWc/ksCMgcAERf27wugAQAgcwDQ1jUEjtb/Zz/46quvplj/awBWO53p34zNQQYAAHpm2ArAuvW/AACAOln/E+XMEQBoAFpn/T/j7Ob+6/Fcuq+r9zv/gK9ecMBsHQ1AJapa/8sA6n/7//oDABtZAAHAzI1UEgOcrv9P//TVxPyHiI1uJuCoAgAAnTNvBSAkA7D+BwA6Zv0vAOiSAGCR6Ov//c1Os2/2f/VGLv3p0Qdt1hmwAaizB6hw/a8HaP3t/10BAIDM6/8pLACYuc3MVcCl6f+hV9PzXyH2lq7wbybjuQAAAHpm2ArA1QDA+h8A6JsAwO6/e9b/IRI1ANOFt/+/dL+Bf3TEYJ3BA4B6eoD61/96gI0NQOqtf23rfw0AwGgBQMHqYLWQAGBHAJDaihX+zZQ8IwAAQM8MWwFYFAD4qxMA6I8AwDmQ32/dk/NOBQBXJQoAwu96y4O3WefQRy47+5mdBQAFG4Dm1v+DZADve9/7CgYA79tGAABAni1+PdcfiOtwmu8iAOmsnuBb/wMAAKxn2wrAzPp/EgAAAF37wEJ2/2z0W+fkfAAagBlLt/7RM4CNrN4H9Ov3u7r+n6cB2O7Skr6JI9bx+n9vYwOQ+b3/owcAM7c2f3fGsgACgHYbgKNdvgYghXUT/JuJ+Q9QAABA/8xbARAAAADDGjYA8NTn91uzMj8YAcBZ2d7v/+xdHz6GwMd59k9t4seZ+5/6yDZHVwbQAKyzH9M3d7i6X/+HiL7+Lx4AzN/O0X3tp5nW/wB08N7/O6ejfAFAdEv39zez8J+hAACAIVi4AhASAPgbEwDozAdWsf7vzzvvufo5627/t8LMfG2ib1wDcKRIAHD2kgKLvmrHOH6EfX+eAGD/rx/tQv5XkqYP15ij/yhD/JnPTH3XEcMD41QAugwADnf5r6Y34H9UCdzf38zLf+wCAABGYeQKwKUAAABatN9qOxSEnCeBZm5KANCud564+glXg4H9av+3Fjp7O3kuESAAmJYHAOsagKMvXH2zR59vPT/y7j9WAHDkox3J+UrSweEy+l80xL/6yUUCAOt/AKz/d06n+QKA6K6O72+W4L93AQAAA7FzBUAJAEA3AkfbOE/iniTW/zktHeUvupEtfmuDo4cXcomA6AQAeQKA/deevv3/0c3O3OPZqwf81//6X/efYFufbb5fcPSfLgDorAFIlwF8tF8CgPkh/vtyST391wAAMEgAkMeA/3ltZnx/sxz/2RMAABiOkSsAGgAAuiEAID8BQEQbh/gpbjPp+v9w5X+1DdhJt8gfcP0/nZvaxwoAjub+Z7920fT/0uecfuauBzDTjzvlv7S/L7X7T7T+7y8AiFICfHQ8AoDTLf778kq9+9/7uXsOJ5tH/woADQUAr5Yw4H8KO7u8v1ma/0QJAAAMys4VAA0AAMA61v+rJRrlJ73x6AFA4MUB9vIHAH3//J7O6GMFAPuiYOZPzz6S8Ad8+MnW/JdcOj4hU/7wLX6exX/q9X/HAcDSEuCjwxMA1GDj7v/n7nf6kUO73f/RRwAgZOi/n/uP+fb/YzYANyvjv0wCAADjsnAFQAAAALCauX+4d/Yl//p/J90uf/AG4OhftwcApxcWOHuPU/D6//Qzw0fwEcf0h+qf/p99nL/euI+kZPtO/Q3A+4Yxs/v/ufSsWgG4+h7/Zef+ZwkAMhAAAAAAVMG8FQANAADAFkMt+K965zBKrf/J4NJ8P7wBmIkKDj+y+rHt/nnFZH9jDzDzwCpZ9p/9tC1v7T/U9F8AQCsNwPsG9nOF2LkCUOHW/xIBQDo36+O/YAAAAOOybQVAAAAAsNHg0/93jsf6v29nt/4rrgNw9mYzPP7dxv3S3cW9AsDMA0g9/Z+506uPxO5fAEDTbYD1vwYAALv/Gdb/idyskv+CAQAAjMu2FQABAADAdqOt/985MOv/EZxdz28MAPLYT/+vPtR0AcDq24947/MPwO5fAEC7AYDpvwYAAAHAPAFACtb/AAAA1bFtBUAAAAAQxSDv+v9O0mQAfoJq1sT0f7r/MgXFA4DV95Lhrq3/NQA0GgDY/QsAALD+DzFOAJBnB3+zVv5jBQAAMDrzVgA0AAAA2/W9+59M/1MGAH58KtdEAPD1c+a/JPUEf8W9RLzrdt/4v3gAIANAAGD6LwAAoN31/84IAUCeKfzNivmPFQAAABoAAAQAAAARnF38/3/3eON/63/r/0b1GgDspBj9h99FzvBAAKABoN0AwBv/CwAAsP5fpO+LAGSbwt+sm/9YAQAAME0aAAA0AAAA8VwKABr9diz+kwYAGoD6zezpK6kCVq//9xJN/2fuItHuf+YeBQACAFoMAN43GOt/AIps/Ttb/+/0GgBkm7/frJ7/WAEAAPBTRq4A7Bf/AgAAgC1OG4BGvxFz/9Tr/xoagH/8x3/0M7tOqQDg9H63rP871m4AUEMDYOZO2QDgfUMSAADgvf9j6TsAyHZHGgAAAIBmmL0C4AoAAACx3L179+7du6082sOZ++lH6DUA+Md7/MCuUGEA4EnZ+/XGFV//KwEoEgC8b3gaAACM/qPoNQDIRgAAAADQHlNXAAQAAACr3b2gwodqzV9PAFCwAfjHA35+lyqyuTf0D/Hr7ftITUzeSRoAGP230gDIAAAEAG0RAMybn9HfbIT/8wsAAPBTpq4AaAAAANa5O6uqh2rKX2EDUCoDsP5fLXyLH3GyP3gA8McHZj5NAKAHoIkAwNa/uQDgMAPQAwCY/tfMFQDOCtzQ32yK/zQBAADwU6auAOx2/wIAAIBF7l5TyeM04q82ACh4KQBW+Po9R/96KNGdjnao//h+Vz9fAGD9TytXADD3b7QBcEEAAOv/mr2aUeWHYumA3vQfAACgbTavABwGABoAAIBAdwPEuqPVX2vBX3kAoAFowtevSX3XgxznPz4R+IUCAOt/6g8ArPw7CAA0AADW/xV6Na/M393pAn77hv5wSW/6DwAA0DyzVwDr/6N/BQBg3t1gUe5r9dda8AsA2C5k+p8iDMgQGNRj9fp/RwAgAKDmDMDEv6cGQAYAYPdfm87W/zdHdfbb958jAAAAgti/Agy7/j/6i8DfiQAAV91dYvu9rPty830BAFF8Paql99vHMfzjJVbcvvW/BoDU3ve+91n/CwCUAAACgNr0997/1v8CAAAAgDWsYAHGXP97+38AgKXurrX6RsIfm9V+Ww2An6b6fT22o1vu4yjNDPeTTv/3BAACAJKu/88y/Y8bADRaArx4wuIWwPo/naM5fmfr/2ngAGAmDAAAACCILSzACG/2P/Oa769CAICr7tbh8CGZ6QsASOfr6fVxoI4W/Knf9f+IAEADQP4A4GwDYM0/znUAXrzM7hbA+j+dw12+t/8f4coAAAAAhDKQBRgkAAAAYJ271bDOFwCQkwBg3n7K/8erbLx3AYDpP/nX/0cNgAX/ONP/+fW/BgDA+j+1V3PJ9h2Nuen39v8AAADx2cgC6AEAADjrbmUM9AUAlGX9v/fHm62+a+t/63+KBwBG/AIADQCAACAn6/9u3tTf+h8AACAmo1gA638AAM66WytL/RYDAD9QnRl5/T/FCABWNwACAAEABQMARlv/vxjMBhfA+j+ddKP/nNP/abD1f0gA4D8sAAAAbGIXC2D9DwDAqbt1M9b39v+UNeDo/0j+9/7fEQBY/yMAEADUtv4XAABY/yfljf+b2PovCgD8JwUAAIAITGMBrP8BADglABAAWP/DvJy7/z0BgPU/AgDT//mZfubpvwYAQAOQWqyhv/V/0nf6n/+4//sMAAAQn3UsgOk/AACn7lbPZL+VAMBPEx3LvP7f+cYJ63/Tf6z/Tf/PSjf3FwAAKAFyihUAhNxXxLV662/hH77+P/1+jz7i/zsDAADEZyML0OXcXwYAALDF3RaY7Fv/Qw2y7f73BAACAAQA1v8vVskGF0ADkMLqxf/p7czfUdy1era33p8uvPv+6h1/+NcmPYAAAABcZzgL4J3+AQA4dLcRhvvW/1CP1Lv/vW+cIwAQAGD6P04A8GLFbHABZABxbXnL/0Vmdu0bby1DADCdG9+vvsGlpQEAAAAlWdACmP4DALBztynm+3VO/63/GVnSBuAbl1n/CwAQAAzSALxYPRtcABlALCFb/9Pp/4oGYMuo/WYhlx78xttcdAQ0AAAAAPUysQUw/QcAGIf1v/W/6T9U6xvXWP8LABAACAA0AAD0VAKkeLP/U3Wu/6/eS6IH4P94AgAA9MbiFsD6HwCgb9b/1v/W/1CtbwQw/dcAYP0/QgDQSgOgBADQAMQVffe/t3r+nm76f7Mc/98TAACgN7vVqektgAAAAKBXAgDTf+t/qNM3wlj/W/9j+j9IAOA6AACM2QAksnoBn3R5v+7L7f4BAABGdDQwPVyaHq1ODXABrP8BADpztzWm/N77H8bRUADwkeoZvmP9b/1v/Q8gAODI6h38lnf3P72Fdbe85cEAAADQg7MBwKXVqRkugAAAAKAPd9tkyl/b2/9rACAd038BAAIA638BAAAagNqsfqP9KO/ZLwAAAADgpy4FAIFfBYD1PwBAW+42y5q/wgbg9ATTBsB29a//P9IU23cEAFHG/aWm/w3FABa3AAKAjsVa7d+MZMUD8yQCAAAwTRoAAAEAAEBr7jbOlL/+iwC4PgBE8Y0A1v8aAAQAPb3Bfx+XArC4BRAAtGtmJb90Tz/z+TfjuXp3AgAAAAAuss0FSLTyt/4HAIjrbhdM+esMABZdHwC4KmT0X6oB+EjLLOCx4O+gAXixeka3ABqARm0MAAJ39tHX/+E36ykGAADgmPEuQPT3+BcAAABEcbc71vxtNQB+BmEF7/qvAUAAoAFodP0vAAAQADRt3bA+fG2faP0fcuOeXAAAAH7i7DLVkBdg+/R/5mUWAIBAd/tlyu8iANC3b1xj+q8BQAkw8kUABAAADBsAvPrqq6+++mqGO9ov5jO/Q/+W9f/Ve/H/NAEAAPiJSwNWi16A7et/AADWuTsAU34BAPTN9F8DgAZAA6ABAEADMN1b/J9Kfb9xZ/p5pv/zd+f/ZgIAAPBT80tW014AAQAAQE53h2HK31wAoAGAcKb/GgAEAAIAAQAAAoBXZ6W4x5tRbbnNmYe07tvxfzMBAAA4QwMAYP0PAFDc3ZGY8gsAoGM1rP8/MhIjeOt/BAAaAAANQIVyrv9vxrblNucfnv/DCAAAQCY2vgDW/wAAqd0djCl/iwGAEgBCFF//f2Q8dvCm/zQXALzYDqNbAA3Aau2+9/+lsf669f/h1/o/jAAAAGRl6QsgAAAASOTuqKz5220AHnjggQceeMAPL5x1uv7/6le/mmf6/9BDD1n/Y/2Pt/+XAQAIAKqS7V3/p2QZwJb3/j96wP4PIwAAABEs2rAa+wJY/wMApCAAoMUS4IEDfoph76tf/erp+j9DAPDQPdb/CACof/2vAQBgtAYgkbOz+9TL/tXrfwAAAIhm6ZjV5BfA+h8AIK67YzPib7QBeOCCmVM9/DOH9cBlDk5DvnrP4fo/aQDw0P0+MiqbeAEAlc/9O2gA7G4BBAC1ubS8v7TOt/4HAACgHwIAANN/ACC1D5xwTHbuDs+Cv9EG4IGoBn8dcKx68tXLMkz/NQBKAAEAzQUAbTUAdrcAAoDizs7xz35O3AYg5PY9OwAAAOQmAACw/gcA0vnAOQ7LZP2vARAAjD1wd5S6lC0AeGjWR5ABaABoZP3vIgAACAAWCRnc30wg5F48OwAAABSgAQCw/gcA0hEAnLL71wA03QA8kFjHP/uOUse+OivP9F8AoAEQANBcAOA6AAAIAMIFbu7jXgEg/F48QQAAANQr4pr2Xe9617ve9S6rYsD0HwAYgQDgkMW/DEADMNrA3VEaweHc/zvf+c53vvOduAHAQ0tY/2sANAA0tP6vJwM4mpma/gNoAGqzdJp/9qu2T/8v3aP/VwgAAEC9Amf9gQyLAet/AIAB2foLAAQA42zcHZxxHE7/D+0+vp/mp57+CwBkAAIAGl3/Fw8ATjem1v8AYoDaBK7zD//05gYrHpv/YwgAAEC93hWPbTFg/Q8AMBpDfwFABw3AA0U19PPuaAzlUgDwne9853Sgn276b/0vA9AA0G4AUG0DYGILIACoRMjCPtb6f92aXwMAAABAvd4Vm5ExYPRPnf7jP/7DQQCA6Az9BQAdZAAPlNbED7tDMZSZ9f/ZACAkA3hoLVt/GYAAgHYDgLIlgCktgAagM5nX/wAAAFC1dyVjeQwIAKjHf/zHfwgAACAFQ3/r/6YbgAfqUP9PuiMzmnUBwNkM4KEYDP01AAIAWg8ASsUAprQAAoCeHA36BQAAAACM7l3pWSEDdv8AAF2y9RcANNoAPFCZmn/MHaLRzK//QxqARHZ79+eff/7555+3+9cACAAEAKb/AgAAGcBo1k3/BQAAAAD07F252CUD1v8AAN0w9FcCNNoAPFCfan/MH6iSl9+kagsAnr9GAGA3LwAQANj9awAANAAj2O/4BQAAAADwE+8qwUwZsP4HAGiaBT/NNQAP1KrOn/EHmuI1OYqv3lM8AHh+FQ0AAgABgOm/BgBABtA3638AAAC4z7vKMVkGBAAAAM0x/ae5BsB+fakHWuOVebuQAKC20b8YQAMgABAAWP8LAAAEAOMQAAAAAMCxd1XAfBkw/QcAqJ/1P20FAMbr6zzQIK/PW3z1QM4A4PmUNAAIAKz/B1//CwAANAAdOBzxCwAAAADgjHdVw5oZ0AAAANTJ+p+2AgDj9dVaDAA++clPepVe7av3SxoAPJ+XAAABQCsrf+t/AQAA1v9Hjkb8AgAAAAA4Y/twP9bt1FwC6BnA9B8AYFjW/7TVAHgD+42aW/93EAB88kDmu/7Od76TNAB4vjQBAAKAJt7av/X1vwAAAAFAXKcjfut/AAAAOBYrAIh1a3Vu6F3WAAQAAADDMvenlQDggTbV9iPf1vR/heJHeOmDTPfId+P+6AHA85URAKABqHn6f9oA/FyzBAAACADSEQAAAADAsbgBwOltRrmLRtf/GgCw/gcAaJ33+0cAMFoD0H0AULwHqOQB78f90d/+//kqCQAQA1Q7/e+GAAAADUAKNxdyxAAAABhI9AAg+l2UHdP3dCkDEAAAALDI3R6Z1HcZADzQhUp+8IcKALLFALvbr+RxHu77ZwKA3ccfWu75WgkA0ANoAAQAANj9t0UAAAAAAHNSBwBTvAYg87C+rUcLAgAAAOKy/qeVBuCBjhT/wR9z/Z+uAYj4wDY+yN2Xn13/HzYARx98aJXnK2b9jwZAA9B9AKABABAA9MT6HwAAAOakDgA23ktqqdf/GgAQAAAANMfb/+MiAGOGASMHANF7gOiPZ/7hHX3w7I2cXfnPeGit5+smAEAAkGLfP+Z7/9cZAOgBADQAPbH+BwAAgIsyXAQg1t21znobrP8BAJpwt18m9QIAPcCMJr79T5aw9Eh+skpfXajXAKCDDMA4XgDgrf0FABoAAA3AUEz/AQAA4IzMAcCkAQCs/wEA6iYAQAAwZgkgANheAnyybnkCAA2AAIBBAgDT/1YCAA0AgACgD9b/AAAAcCxnA/Cu4VlygwAAAKByAgDaagAeGF6sn30BwJYS4JMtyBYAtNIAtJsB2McLAKz/rf81AAACgNGY/gMAAMAxAYAMAAQAAADsWf8jABgwA2jl2/wkuRqAhzbTACgB6DUAsPtva/ovBgAQAHTA9B8AAADOEwBoAEAAAADAjsU/DQUAdv9RMoCGvkEL/jwBwEORPN8OAQDW/9b/g6z/ZQAA1v8d0AMAAADAT2kANAAgAAAAYOolADCdH6QBsPjf3gC09d1Z8OdpAB6KRwNg/Y/1v+m/DAAA0/+Ibt7jUAAAAMA0CQA0ACAAAABgmqb2AwCLeQEA4RlAc9+X+X6GAOChBGQAAgAEANb/1v8A2P1HIQAAAACA+2QLACYNgAYANAAAAHWz+6eJAMDKf0sD0OJ3ZLufIQB4KBkNgAaA1tf/gwcAL/bIBhfA7r8V+7n/zQMOCwAAAPyEAEADAAIAAAB27P6pPACw719XAjT9jdjuZ2gARt79t9gAWMxb/wsABAB5GoA/OMeWF8D0P4Ojxb/1PwAAAJyRLQCYNAAaAGIv48M/WQAAAEAg63+qbQBs+gdktd9iAPB84zQAWP8LAPpe/4fHAH9wmV0vQGAAMN8DSAUuOX3LfwEAAAAAXKQBEACQZ9G+YuV/9qdp/i4u/QxqAAAAmGf9T4UBgB28AIB0AYC3/9cAYP0vABi8AbhUAvzBLNNegI3XBHC5gHne9R8AAABCCQA0AAw1dndMAAA4SwBAbQGAEbwAgKQNgPV/uxnAzLh8miYLe+t/AYAGINzpuP8PAtjyAmxpAAQA8wQAAAAAECpPADBpADQAXN64ywAEAAAAZVn/U1UA8M53vtMCXgCAAGDkBuBb51xtAPZ/rcsDrP+t/+3+V6z/F7HlBVgXAFy9PgAAAABAqBXL9Wx3JACg7/V/DZP31dN8AQAAQE+s/6mK+Tsm+5UHAM+PoZ7p/2kDMB8A7CzNA7D+H7wBeHEwfxCDRS/A0gxAAAAAAABEs268nvO+BAAMdTWAIlY/SAEAAEAHrP/RAKABGLABMP2vrQH41hJHDcDM3/JXwwCs/wUA1v8yAICylwUAAAAAWClbA2D0rwGg3QBg45cLAAAAqmX3jwAAAcBoAYDpf4UZwLcW2vJXv0W+9b8AwPo/OkNeAAEAAAAAUECeBsDiXwBAnWP37Q9PAwAA0CgrfzQACACqtXuhFgCM0AB8a7mNvwDY5csATP/HXP+nCwBkAAACAAAAAKAMDUDrDYDeYMWyfPWX97dx3/4IBQAAAM2x/kcAgABgkADgqAGw/q8tAxAAaADs/gUAfQQAMgAAAQAAAABQwMYGICQJsPiPvst3zYHwRf7VH4HMAcDudip8KVg3wXcRAACAtlj/owFAA9BEADDFvgiA9X9tDcC3Vtn+m4BFfn67xbmtv/V/9wGABgDA9B8AAAAoYHUDEHhZAIv/iLv8stccaO79/jc6vTUD97OHSAAAAFC/IkN/038EAAgAigcAn/zkJwUAtWUA2Rb/pyzyiwQAe+b+AoBe1/8aAADrfwAAAKCYFQ3A2csCbL9lDUDcAGCcBiDPT0rEKxX08dKhAQAAqJ/3+EcDgACgrQYg4g0eDfqt/4tnAJnf9f+UUX7ZBmBFCRDyhZb91v/F1/8aAAABAAAAAFDMxkV7uluWAWxZ/3ffAGT+MVnx2DQAAgAAgIKs/xEAIAAYuQGYmbNb/+dvAL61XPRfDCzyK2kAEAB0GQBIApqwOz0cB9AAAAAAAAnNr+oT3aMAoNoMoMg1B0z/j6x+hBoADQAAwM7nP//5z3/+83nuy/QfAQACgJEDgGmaTParCgO+tUrc3w3M8TUA1v8CABnA4NP/PQcEBAAAAABAEldX9anvOnD0f7UBsO+PMtDPf8EB6/8Q8+/3f/VLOhu7CwAAAOZ9/n6p7870HwEAAoDBGwC7/Kp8a624vx7Y4gsArP+t/zUAvc76w6f/1v8gAAAAAAASCnln/Qz3vqgB2HI7zA/0M19twPp/tasPsu+xuwYAAGBGHwGAhToaAAQAeQKAaXMDYHPfwfpfA6ABwPRfAED4rP/ssj/w0wCjfwAAACCOsgHAtGq7H+VGSDT976MBaP3neoSZu+caAOCsnOt/b/yPAAABgAZgmiaz+27CgOi/KpjjCwCs/63/NQBdrv8P9/1XPwHQAAAAAACplA0ApoXz/e23QA2XGhAAJHX4XfQ6c/dcAwC1yfN2+yGPIcP6/25KhukIABAACAAoVQJE/53BIl8DYPovANAA9Lr+X8rxBAEAAAAAEF/ZAGDa1gCc/qnlvQBg5Dn46TciANAAAABJ5XzT/fAHk+4urP+x/kcA0F8DsPrLTeo7awBS/OZgka8BsP7XAMgABp/+CwBAAAAAAAB0K+JFAFbcIBqAnobggyzaPe8AQD3qCQBSPwbTfwQACAB6bQAEAAIADYAMAAGABoB0638BAFj/AwAAAN3a3gBsuUEGDwC6+TkaZ87uBAAAqrJleR9rtZ86QrD+RwCAAMBFAAQAAoDVzPE1ANb/GgBJwLDTf+t/sP4HAAAAOhc3AJg0AAIAy+9+OQ0AgKosXd5//kSsB5AoALibmD06AgAEAC1eBMCYXgAQzhZfDCAA0ABUGABIApKO/q3/QQCQ2c2bNx0EAAAASCJkuL90Xx79BhmkAfDz2DrnAwBQlauz+89fE+UBpFj/303PGB0BAAKARhsAY/puMoCjP03xy5L9vQbA+l8PIACw/gc0AIncPOBoAAAAQGSJ9vrhd40GwM67G04MAKA52db/EQOAu7kYoyMAQADQYgMwTZMZfa8S/Tpkf68BEADIAKrKAM4mATX45je/+c1vfrOP9f9RABCSBNy6dcukG6z/w9084ZgAAABAZAUDgHW3TGcBgJ/Bnjg9AICG7Bf51v8CAAQACAB6agCs5DUASxnfywCs/zUArgkwP/o/1fr6f+mVAW7dY9gNAoAQpv8AAACQXPhkP10AMGkABm4A/Ax2xkkCADThaJcfHgAETvmjtwRT3t2/AAANAAKAdhuAydv/awBWsbzXAFj/ywBqbgCO1v/ZLhHwzcu6nP5figFunTDvBuv/Gdb/AAAAkEOi9b8AQANg2D0m5wkA0ITTaf7Vyf6iTX+U9f/dCliiIwBAAFBbADBdawAmAYAGYBWzewFAbWt+638ZwH7lfxoDXLpKQLb1/0wSsK4QqPwMuXWOkTdY/8+w/gcAAIAcaggAJg3AMA2An7i+OWcAgCacneaHvPd/+Kx/xfr/bn0s0REAIABorgGY7gUAh3/FmMsLAEJY3gsAansjf9N/DcDZCwLMXCig4Pp/47UCBADQ9OLf+n+GBgAAAADSml/tr96Ub3kk9NoA+HHrmHMGAGja/F5/aQCwyN1aWaIjAEAAUG0DMJ3LAPZ/dDoQt5jXAIQwvtcA1LP+Pw0AbPRlAFH6gaPBfdLpf2ADUP+JIQAA7/cPAAAAVCrRoLy2x4MAgNScMwBAhaKM9dMFAHcrZomOAAABQM0BwHTSAMz/jWMxLwAIYXxv/V9PALBvAOzyZQCxAoDTbzbD+r/1AODWZcbf4L+5Hbp586b3+wcAAIACKmwAJiVAdw2AH7TuOXMAgKrEHesLAEAAgACgtgBgOmgAQv7SMZoXAAT66Ec/evjPCACKrP9RAkQ3HwB8M5nO3vtfAAACgLNu3uNQAAAAQG5VNQACgC4bAD9l3XPmAABViT7Wj3trU93rfwEAAgAEAG01ACF/7xjNywBWs8sXAFj/ywD6DgC+mVKLz/utAMbfWP9zRAAAAAAAxdTTAAgA+msA/Hz1zeUjAIAKRd/rR3d7oWzT/93dWaJj/Y8AoIkAYNIAkKUEMM0XAFj/D54BdBADFFn/dxwAaAAQAAAAAADUpZ7rAEwagF4aAD9WgxAAAACEu109Y3QEAAgA2moAAv8CspUXAGxhoC8AsP5XAnT29v/fzKXjAEAMgABgZDfvcSgAAACgCvU0ALb4AgCaowEAAAghAAABAAKAiAFAOFv5XgOAbDGAjb4AwPofAUD3GcCt5czBkQEMyPofAAAAalRJA2CLLwCgRQIAAICrBAAgAEAAoAEgRQCQrgGwztcDWP9zqQQ4/WBtwcDZxy8AiNgAGIJj9z8g638AAACoVKJxeQ2PgZwNgB+lAQkAAADm3W7Bk08++eSTT5qkIwBAANBfADBpADptALKxy9cAWP8T0gbUc+mASw/ym9nVvPXXAID1PwAAANAPDYAAwG6bdQQAAAAzGgoANAAIABAAuAgAMoCzTPMFANb/bLlogACgwrf5FwCAAAAAAADoTdkGYJIBtNwA+PEZU86LALz11lsOOADQkNuNePJ+tuloABAAuAgAGoBTmdfwpe5XACAAoOkA4FIDMHIAcGnELwAA638AAACgN2UDgHSPhHQBgJ+akeUMAKaFDcBbBzxTAEB+jQYAMgAEAAgANABoAC4p0gAUuXcBgACARjMAFwFYPesXAMDh9F8DAAAAALSqkgzAOr+JBsDPC9kCgCmsAXjrAs8UAJDN7XY8eYGFOgIABADdBACTBkAGEEP+TXzxB2D9b/1PcxnAzMMYZ/1/KzEDcbzx/zhu3rzpIAAAAEB7amgATPNdBID65bwCwHQw7j/9yKXFvwYAAMjsdlOenGWnjgAAAYAAAA3AlH18X8nDEABoAGiuAZh/GN2v/29lYSOO9X/Hbt68uRv937zHMQEAAIAmaQA0AAIAApVqAN6adfolGgAAILXbrXkygLU6AgAEAK0HAJMGQAOQRs71/9RpAPBznTJ5p0gDEP54Qhb8lb/Tf5H1vwAAAUDfbp5wTAAAAKAfmQOAjXeKAIA8cgYA07Xd/9mtvwYAAMjgdoOeDGOwjgAAAYAGAA1AiKvj/nXT/5Abt/7XACAJGPNI3srLTJxu5v4CgCPW/wAAANC5IgHAxrtGA0BSb8YWcqfh0/+zX+JZAwDiut2sJ5cwW0cAgABAAIAG4NTZBf/Mvn9+9//MM8+E3Je5vxgAPYAA4FYJhuN4+/9eWf8DAABA/zQAGgABAEfyBwDTSQOw9Es8awBALLdb9uRyxutY/yMA0ABg/b+z9C38Az3zzDOXMgC7fw0ASgDrfwEAmP5HZ/0PAAAAAxEAyAAEAJyVLQBYQQAAAER3u3FPrmXFjvU/AoAWA4BJAyAAqN4zB07/VAAgAEAVYP1fcP0vAEAA0KKQWb/1PwAAAIwlfwNgnV9tBuDHgb1q1//TQQDgaQIAorjdBQ0A1v8IAFwEgG4CgD//8z//8z//80Z/s3rmxOnntLj71wAIACjil3/5lwUAAgAQAEwB437rfwAAABiUAEAGoAHgkLf/BwAGcbsXT25j1I71PwIAFwGgkgDgzw8cPenf/va3m/j9qo8AwNZfAEAN6/89DYDpP4y8/g8hAAAAAIChhQcAqzMAc/zKM4BpmmQATAIAAGAMtzvyZAzW7Vj/IwDQAFBnAPDt+9X8+1XIFQCmFhoAW3/rf+pZ//ddAggAwPQ/Cut/AAAAGF3qSwEY4jdRAvhBYNrWAKR4PG+d8BwBAFtY/2sA0AAgANAA0GgAUHMD8PDDDwsABACQaP3fZQNwKzurcQQAXbL+BwAAgNEJAMQAAgD2ar4CgGcHANiorV1+ZmbuaAAQAAgAqCcA+PZltf1+9fDDDwcGAFPdDYCtvwaAmgOAowyg6SrA+h80AAAAAADRpFv/TwKAFjKA1U8uXaotAJjuNQCeGgBgI9N/GQAaAAQAHTQAFvMdNwD7Z7mVAODhe0LW/5MAQAAAmxuA3e6/3QDA+h+s/wEAAAAiEwAMzo8Ah2oLAAAAtvPe/xoANAAIAFwEAAFALA/fLzAA2BEACABgYwMgALD+RwAAAAAAwE8k2ogb1lv/0y7rfwCgJwIAGQAaAAQALgJAEwHAt2fV8GvVwycWBQA7AgAZAGxsAAQApv/IAAAAAACYUo/FjewFADSn2gDgrbfeeuuttzxBAEC42+k92SN7dwQACABcBIBsDcDOt68p/mvVw+fs1/8PP/xw+E0JAJQAsCUDsP63/kcAAAAAAMCUZyxuai8AoC01BwAyAAAgnABAA4AGAAGABoD6A4BG1/9Hwm/tox/96NVPsP4XACAD6CMAuJWRdTgaAAAAAICB5AwAlt4j1v8UVNv6f+et+3maAIB5AgAZAAIABAD9BQCTBqC7BqDyAODhMIG3dnX9f/iZAgABAAKAphsA638ovv4XDwAAAAB9KrUXN74XAFC/OgOAHQ0AABBIACADQAOAAEADgABgi4eDZX5gnQUAZ79HDQAygKYDALt/2D73X73ddw0BAAAAoHMFJ+P29wIAKpcnANiy4JcBAADzbmfx5DDM37GGFwAgACCRbwco8tvUw0tU9XtgngDg7F2v+JJ5AgAEAK4AIABg5Pf7X7HaT3QxAQAAAICKrJiMRx+OG+Jb/1OtDOv/Swv+8HG/AAAAuEQAoAFAAIAAQAOAiwCs9vBCtf0qmOHt/+cfwMbd/9nb0QBg/d9WCSAAgI3r/2maUqz/BQAAAABA8ypZkJvjCwBoQtz1/3T/yv9oxD/zR5duxBMEABwRAMgA0AAgABAA0M1FADL/HvXwcjX/Wng0/d99cPv79G9c9offiwYAi/9EWg8AbMTpfv2/VIa7AAAAAKhCJSNyc3wBAK2IuP6fLq/8w9/+fxIAAACXCQBkAAgAEABoABAArHB16//MM88888wzR//a6G+MeUb8Gx+hAAABQKMZgAAAcgYAeRoDAAAAgPKqWpBb5Fv/M6C3Tmy5kcOPOLYAwO1cGp3v/+JmpvACAAQAlA0ALOaHCgCy/QYV8k7/z1zmV9AUfq4+pur0tP4XAEAfAUC2iwycdfPmzZk/2vErDQAAABBNDfPx/a0Z5QsAGM1bF6y7naOPOLwAMLjbGbX7Fv6/GINBvAYAAQClGgCL+aEagDy/QT0c5plZfhFNQQCA9X+LAYD1P6wY5ed5+/8iAYASAAAAAIipkvn47jbt8gUADCVpAKABAIDBCQCyBQAyAAEAAgA0AKQOALL9BiUAqJwAANP/hgIA63/IGQAUX//Pz/qt/wEAAID46pmPG+Vb/zOUty5bd1Nnb9xxBoAx3c5LAKABGLYB0AMIACgeAEwagAECgOeffz7Pb1BR1v8agDwEAAgAvP2/pThdrv+nVQHA6vuKxawfAAAAKKOqBbl1vgCAEURc/x/e4PxHAIBxCACKBAAyAMQAAgA0AMRtAPYfzPMblACgIQIABACDv/2/AIBe1/8rZL67I97XHwAAAChv9Yg8xaDcRl8AwCBiBQAzt+wgA8BQbpcgANAAIAMQAFC2ATCa716GX6IeXkIDUFyprb8AgA5KgKP7anT9rwGgA//XPRv/TswfAOwX/zcP+OUEAAAAKGzLpjzuuNxMXwDAIE7X/7FW+xoAABjN7UIEADIANAACADQApLZb3kf8xWm/5p8Wrv8FADXYsuO/NOIPfJt/AQCtlwCHd5HoWxAAwKIAYEsDkP+CA0ejf+t/AAAAoEY17MuN9QUAjODqdQDWjfgFAAAwlNvlCAA0AMgABABoACgeAATmAQ/H8EwYv6AmteWN/GHkBiD1g7+VlxE5jYr1t2HB9b/dPwAAAFA1DYD1P+QxEwCsXvAHBgAKAQDowO2iBAAyAGQAAgAqaQAmGcCQDcDD2T2zhN9UExEAIACoavcvAIBW1v8RHwAAAABA7WpYmRvuCwDo29mLAGx8//7A9b8AAABad7s0AYAGAAGAAAAZAKUCgIcL0QAU93PLmZUjAOhs/S8AYOT1/yQAAAAAAAhUfGVuuy8AoG9vnZPnHh18AGjX7Qo82bJfzMgOXgOAAICcDcAkA+i3AWhi9C8DyMPoHwHAyAGAKTnW/9b/AAAAAEGKr8zN9wUAdMz6HwBY6nYdBAAaADQAAgA0AHTfADwTld9jIzL9RwBQZP1/69atCgMAnQCDrP8nAQAAAADAUhoA63+I4q1rMjwAzwIANO12NQQAMgAEAAIA6ln8n7KY1wDU2QCIASISAGD9nzMAOJrXl1r/Hy37XSUA638BAAAAAMAVxbfmdvwCAPoTJQC49FWHH/eu/wDQh9s1EQBoANAACACoOQDYMZrXAFQbACgBttuP/vf/bESOACDd2/+f3dkXCQDWXSUAmp7+7wgAAAAAAFbSAAgAIJEt6/+zX3v4wWyXFwAAMhAANB0AyAAEAAgAyBwATBoADUD1AYASYLXd9P/wXzUACAAyBwA1M0BHACAAAAAAAPgpDYAAAGpw+u7+IQ2A4wYAHRAAdBAAyAA0AAgAyBkATBoADUAL638ZQBRG5GgAwgOApZHArQbZoGP9LwAAAAAAuE/ZxblBvwAA9t465/CPHCIA6MntmggANAAE+tUT+efsTx8w7hcAuAgAGoCaAwAZQBSm5GgA5vf9Ky4UYP0PZbf11v8AAAAAcWgABAAM5bHHHqv8EZ42AJeuDAAAtMv6v7MAQAYw2u7/rJzTfxmAAMBFABAACAAGYUeOAEAAoAGgp/X/JAAAAAAAiKjs6NysXwBAao/d0+KDP2wAPJUA0Afrfw0AnU3/U8cAT19j5S8AGCoAmDQAGoB21v8agChMydEAhNxF3wGABgABgAAAAAAA4Izio3PLfgEASz12waVPaPqbdQUAAOiM6X/HAYAMwPQ/bgnw9BK2/gKA4j70oQ/l+ZvUYl4D0FYAoAHYzpQcDYAAwDwdAYDfBwAAAACO1bA4N+4XAHDVY5E0942/dcBpAACts/sfIQDQAJj+b88Anl7L4l8AUDYAyNMAmMtrANpa/2sAojAlRwAgAOjPC/cY3wsABAAAAAAAK9UwN7fvFwBw6LGU9rffytHQAABAN0z/BwkAZACm/6szgKdjsPsXAAgA0ADUFgBoADYyJWfk9X9IABDYANxqWZfT/0Mm+AWn/wIAAAAAgFZVsjU38RcAjOyxcpo4PgIAAOiD9f9QAYAGwPR/UQPwq7/6q09HZf0vAMi//tcAUGEJIADoiU05wwYAp/v+wEigj+l/fz3AC5eZ4/f6xv971v8AAAAAkdUwNDfxFwAM6LGaVH6szgYAqgAAaIjp/4ABgAzA9D8kA9j/0dMJCADIvP7P0wCYyAsDmlv/awAisixn2AZgxVUCBABtrf8PMwA9QK8BwLS8AfBXPwAAAEADrPwFAON4rEqVH7RLAYAGAADq573/Rw4ANACm/5cagKOPP52MAICc638NAPWEAbtP0AB0aWboHPI50F8AMN8AWP83tP53fYCkc/8a9vQCAAAAAIA+GfoLAEbwWMWaO5iHDYAYAACqJQAYPACQAVj/nzYApx98OjEBAKlH/5kzAMN3wmkAOnZ2+n/6RyAAEAA0Pf3XAGxZ/Fe4obf+BwAAAOiQob/1f/ceq17gt1DJ8XzrhHMMAGpj/S8A0ACY/gd6Oj0BADkDgKQNgFE7jQYASoAMTM8RAAgAuln8m/6H7PtPh/KVr+et/wEAAAD6ZO4vAOhY3FF+5gyg8ssFzAQAwgAAKEsAoAGQAZj+1xMADJUBWOoXX/8nbQCM2tEADOv0zf4P/wj6CwCmaRIAJF3/f+1rX/va1742P+K/9Kf7f066/hcAzOzjW9zKCwAAAAAAumXxLwDoUsQ342/rigF5zFwEwCUCAKCg24UIAGQANLf+zxkADJIBGOvXsP5PlwFYtNNBA+BX5aUOB82HH5lM/+kuAJjujf53p7oAIF0A8LX7zYz4Z9qAo08QAER/g//+JvLW/wAAAAB9svjXAPQn4qr+sfoUP7xX9/0aAAAo4nZRAgANAL/amqdLEACQJwCI3gCYs6MBGJBNOQMGAFEaAOv/8ABg54X6eL///sbxAgAAABr25ptvvvnmm44DAJxl8S8A6Ez0PX3xxX89DcCiWb8AAACyuV2aAEAGYPovAJABmOxXFQDEbQBs2ekgAPAL81I25YzTAEwnAcDeyBcByLP+r7MBcAWALsfxAgAAANrz5gnHBACOWPwLADqT7q30i7/xf9kMwJv6A0CdbldAAKABsP7XAMgATPbrmf5HbwBs2emgAfA78wpFZtyT9oDGAwBXAFgRAGgAKnmb/6MYYPcPPf29Zv0PAEAD9iv/N89xfADgiMW/AKAzcUf/S+8icxIAAAzudh0EADIA038BwOAZwIc+9CHD/UpG/wIABAACgFhsyhkhAJgur/+n5QHArY5kDgBqywBGe9f/cf5qEwAAAFC1w5W/AAAAQlj8awA6sH0uv25VrwEI9Ld/+7fOUgBIQQAgANAAWP83HQB0kwEIACpc/0dsAAzZaT0A8Dvzat7+n3He/v/sj8CiAOBWvwZsAIYKAIb6e00AAABAvU5X/tb/ABDC4l8D0K7tQ/mIq/qjW9AA7P3tPc5YAIjodjUEADIA038BwOAZwIcal26dX3b9HyUAsGKn9QDA78wbCQDoMgAI/xGYDwB2+/i+1/8Re4CvhREAZJj+D8vRAACgXmeH/tb/AHCVub8AoF2x3vs/0are1QD2/vbA2Y87mQFgKQGABkADYPrfUwDQdAbwIQoFBgIABAACgAxyBgCTBoDlWcj8yj/F+v+Xf/mXbw0s9UUAasgAPvWpT/VaAvhLzdEAAKBScYf+mgEA+hA4Z7f41wA0bT+C37L7TzemlwHsnG79//Z+zmQAWEQAIACQAVj/9xcANJoBmPivKwEy3GOUv3AN2Wk3APALcywuAkCp9X/gKXE47j9a+R9+cNH6fxIAFA0AKrkUQE8NgL/LAACgf2/ezwEBoGmL5uwW/xqADiwawWde0gsAZggAAGCp2zURAGgATP81AINnAJb91Yryd64hO40GAH5hjivb2nvSALDwfAh8d/+l6/9pNgDQAARu/bcEAPU0AK1kALvz9vSfBQAAADCEN89xWABo2qItu8W/BmDLORZyJKs6vAWX9H03AG/d46cDANIRAAgAZACm/90HAA1lAHb2GgCw/h9BtsH3pAEw/Z8993Yf2f/pirf2DycAWNcA3Lp1az/i7yMAWNoA7M6fsu/x7woAAAAwljcvcGQAGIS5vwAg/6lS9hspO6M/e7+tlwDW/wCQhwBAAKABsP4fJABoIgMwsu++ATBnRwDAjisAkHn6f3hKHP7DoXTr/+lcALCbvwsAZqb/h+v/zgKAq23ApRPp7Fg/1ujfvh8AAPgJAQAAg7P4HzkAmPl+Oz7CFb6D/hQpAyjyyAUAAJDB7coIAGQApv8agMEzAAv77hsAc3as/9kTAJBz+n94Vhz9Q07e8n8mADj6+OmIv5sA4NQ0TYcNwMwpNP9O/Nvf7B8AAOAnBAAADM7oXwDgIBcXKwAoUgIIAAAgNet/AYAGwPR/2AagzgzAvN5FAKCeAMCvyhlY/5Nt93/29Mt/zgsAQnwttobW/6tPrUVbf9N/AABggbMBgEsEANA3i/9ht+mOc20ei+3oliM+1LfO8QwCQDrD7u8FADIA638BQJ0ZgHm9iwBAJQGA35OzEQBQZP1fivW/AOB0/R+Fd/oHAACyEgAA0DeL/2G36Y5wbR5Lb/uDfOsyzyAApGP9LwAQAJj+awCqygBs6wUAYP0/oHRDcMt4AUBtBAD51/+VNwBRzqtFb/8PAACw1ZuzHB8AWmfrP+w83RGuU+UNwFuzPH0AkI71vwZAA2D9rwGoKgOwre9+/T8JAKg+APAbchGJJuCW8QKACmkABAACAAAAoBOHc38xAADdsPUfdqHu8Nap3QDAcwcASQkABAACANN/AUBVGYB5/QgBwKQBQADAOdHH3/s/tY8XAFRFAJB//X81A8ifCkzTlDMA8FcMAACQxJthHCgAGmLlLwBweCv0WBbrHpv1PwCUIgAQAAgArP8FAFVlAOb1LgIA1v8ji7v83v+pfbwAoDYagFIBwOnEv8gVA6Z7638BAAAA0LzDlb8AAIDWmfgPPlJ3YCv3WEaONgDUbxcA7P7ZIl8AoAGw/hcAFM8AbOtdBAAEAETZfB9+gn28AKA2AoBS0/+jif+6ywVEWf/HPaPmp/8CAAAAIKGjib8AAICm2fcLAMoeVSVAiMfycsABoFqHAcCkARAAiAFM/wUApTMA2/pxAoBJA4AAgFkRp9728RqACmkAyq7/V1wroKq3/D/l7f8BAIBaCAAAaJqJ/8gNQNlD6lIApxat8DUAADA4o3wBgAbA+l8DUDYDsK0XAEDB9b8GoFfG8RqACgkA6l//xw0AUvvULH8RAAAA+Zj+A9Aoy/7BAwDHtk6LhvguBQAAg7PLFwAIAKz/NQAFMwDb+qECgEkDgACALCzjTf+rZf3ffQCQ7VwSANTvzp07d+7ccRwAAAAAamTWb6de5DAKAEJUEgDIAACgCU8++eSkBBAACACs/zUAJTIA2/rRAoBJA0D2AGB34gkAhmIfb/pfM+v/vt/+P+e5JAComfU/AAAAQNVs+jUAxQMAP4bbPZaLQw0AlTPQ1wBoAEz/NQD5MwDb+gEDgEkDQIkAYDpoAI7+mc6YyAsA6icA0ABEYf1fMwEAAABMb97jUABQIYN+AUCRA2j9H8tj2TnmAFA5A30BgCTA+l8AkDkDsK0fMwDYsXon5/r/iACgYybyAoD6Dbj7f+qe/dT+8J97ygBynkgCgGpZ/wMAwE/X/zIAAOpk0K8BcPQa9VghjjwAVM5AXwCgAbD+t/7PnAHY1o8cAOxZwAsAMgcA1v8ds483/W/CrVu3pmEygKdm9dcA5DyRZnb/SgAAAKC8N89xWACoh0G/Fbvj1pwm1v+/fY/nCwByMtAXAGgAjPgFAHEzANN5AUAgI3gBQP4AwK++XbKSt/5viPV/zQHAigYg/yl0dvTvggAAAEAt3rzMwQGgEgb9Iw/ZHbcWVTv9/+0LPGUAkI2BvgBg5BjAfF8AkCIDMJ0XAISzg7f+zxYA0DFDeev/tow5+u8yAMhwtuzX/Kf7/k9d428HAAAgqzcDOEoA1MCgf9gtu+PWojrf8v+3L5v/wl+5xjMOAOGs8wUAI5cAtvsCgEQNgOm8AGARa3jrf+t/NrKV1wA0RwDQ9Po/23nyqW387QAAAOTzZhgHCoBKGPQLABy3Vmxc8G/f+p/67WBHX/grC3n2AWCGab4AYOQGwHDf+j9dBmA6LwBYyibe+l8AwBaG8qb/zbH+bzcAyHaSfGozfzsAAAD5vBnMsQKgEjb9o23ZHTGi+O0NfmUVxxwATtnlCwBGDgAM9wUASTMA03kBwDrG8Xb/AgDWMZc3+m/RrVu3pl5KAAFACgIAAACgJW8u4XABUAOD/qHm7A4XEeVvAJQAAHDELl8AMGYAYLIvAMiQAZjOCwBWM5S3+xcAsILpvN1/iw4H9FObJcBTqzS9/s8WAHwqBn87AAAAWWkAAGiOTf84o3aHi7g0AABQll2+BmC0AMBY3/o/J+t5AcA6FvN2/wIA1jGjt/tvzuH0//Tjra/8a24AXnjhhXXT/zzr/0/F46cMAADISgAAQIts+gUADhcb5QwANAAAMFn/CwAGCwAs9QUAAgBaCQAmDYDdvwCAVezprf9bdBQA9PQ2/4sCgMxhwAsbpD4lrP8BAIC2Wf8D0Byb/hFG7Q7Xdv/vCa8eRzIHAKoAAEZmkS8A6DgAsMsXAGgAcBEABtz9CwAGZ1Jv/d+iyqf/idb/RyVA/isDVBsAWP+35c49DgUAAPyU9T8ALbLp73vU7kBtZ/0fIlsA4LIAADBpAAQAHQUAhvgCAAEALgKA3b8AYHBW9ab/TRs2AJi/MkBt6/+kAYD1f1vuHHA0AADgp0z/AWiXWX+v03ZHaTvT/xACAADIyShfANB0ALD7HBN8AYAAAAEAdv8CAHbM663/myYAyHYFgNUZQNITwPq/OQIAAAA4w/QfgNZZ9ve0bnd8yKlgAODgAzAmu3wBQFsBwNEn2N8LAAQA9BoATBoAo38BAMtZ2AsAWnTr1q39PwgAvpaXAAAAACA+038AOmDc3/rA3fEhtd2U/+wH87/9vx4AgGGZ5gsAGmV8b/0vAMBFADD6FwBwyMLe+r91AoCvZVfJ+n8SAPTCBQEAAGCa7m8AHA0A2mXi3+jG3cEhg9Nl/1RNACADAGAo1vkCAAEAAgABAC4CQAfTfwHA4Izsrf87MHgAUKQBCMwAUj/1AoAO3LlzRwAAAAAA0Bsr/7aW7o4JeZwd908BDcCvZORpAmAE1vkaAAEAAgABAC4CMLi3v/3tb3/7243+aZqdvfV/07z9f8EAIKQBSH0CWP8353TuLwAAAAAA6JaVf1Wr90t3Koogs9MAYLrWAPxKXpUcqH+9xzkDQHSm+QIAAQACAAEAdWYAdvnptv5nGf3TNFN76/923arSOOv/wB4g6TkgAGjLnftN1v8AAAAAIzDxL7uA10KQzemsP+STz3552QCghgbgXw84tQCIzjRfACAAQAAgAKDODMBYP9HQv/UGwK+vnGVtb/3ftMPl/dkPjtAAfK0mmRsA6//KGfcDAAAAME0agHIjeOt/8ph///6NX/4rJaw4CH/yJ3/yJ3/yJ04GAFphnS8AEAAgABAAUGEDYMSfYuLfegDgF1cuMbi3/u+SAKCqAKDaBsBPSjp3LnBkAAAAAEZk1p9hDb/uXvJ/a+9+97vf/e53n961H5ON/uiapPf+28n8SiEh3/WfLOEUBaA21vkCAAEAAgABABqAAef+zTUAfmtlntm9AKA/1v+1BQDpGgDr/wrdCXDpqxw9AAAAgD7Z9EdvANr6dt594PTx+wHZ6I+WSPEAfjulPgKA+RLgX+/Z+ET827/927/927/5iQAghHW+AEAAgABAAECdDYDdf87pf+UBgF9ZmWdzb/3fK+v/qtb/VQUAfjpSuxPm0pc4gAAAAAAdMuiP2AA09428+xwBQCx/tFbEx/DbiaXY9xdZ/59tAP71wJZnwfofgEWs8wUAAgAEAAIAqs0ATP/zEwDQKMt76/8ujXAFgK9VKX8DMAVnAH4u8rizjQMIAAAA0CeD/i0NQLvfwrsv2H9TfjQ2+qNtYj2MsgHAdHnQH/LgF33yXqwAYGdjAGD9D8AKBvoCAAEAAgABAHU2AKb/AgABAIGM763/e9X9FQBSNACxbjN/AzBdywD8RGQjAAAAAADgIpv+0bz7MgFAFH8UQ6wHkz8A2N/1uun/6deGf9WWAOB/3BPlsP/bPX4cAFjEQF8AIABAACAAQANg+l9tA+CXVULY35v+90oAsHT6H/fGi1wKYM/6v5Q7mzmGAAAAAP0zi7f+318EwI9DLDU3ABtvZ8u7+4fIGQDsvjZWAPDDH/5wN/3/93//93//93/3UwDAIgb6GgABAAIAAQCr/eEf/mHqv6mt/wUAcJUVvvV/r26V0GgAkOIuXpjl/OyVAAAAAACABUzkO57+zwcATv4UKmkAppMMYOPtJF3/r7YlAFhkvhP48Y9//OMf/3gXAPz4xz/2UwBAOOt8AYAAAAGAAIDV6/8MAcA0QAPw9spY/9MiW3zT/14JAAI/M0VmIAAYkPU/AAAAACtZzI/zxv8CgKTqaQBi6SYAWHr7iy4R8OMDfgoACGSdLwAQACAAEACwev2vAehv/V9PAODXVBaxyLf+71XfAcCKTf+K9b8GgHDW/wAAAADEZ0+f369tJgAoKHDoX//0f6fO9X8K/+OEkxmApKzzBQACAAQAAgC2rP/zBABTpw3A22tl+k9zjPKt/3s1bAAQ/lURrzawtAFwfnbG2/8DAAAAkIpFflvrfwFAbepf+c+w/o/or+/xQwHAJAAQAAgAEAAIANi2/tcA9Lf+zxkA+F2UiEzzrf+7dKuEmtf/+69Ncc2BRQ2Ak7M/AgAAAAAAErLL7ykAcD7n11MD0OUTlOeN/wUAAByyzhcACAAQAAgA2Lj+zxYATB01AG+vnvU/zbHON/3v1WgBQMHwQAMwOAEAAAAAAGmZ5ncZAOgBCNTx+j8bAQAAe6b5AgABANb/AgA2Tv8zBwBTLw2AAMAvoqRgpi8A6NKtQooM8YtffEADMLI7MTiMAAAAAFxhoN9TAOCCACwiANhOAADAjmm+AEAAgABAAMDG6b8GoMv1f+oGwG+hJGKmb/3fpVvlZF7hP5VRrABAA9ATAQAAAAAAmdjo9xEAnL0gALDa/7zHoQDgKtN8AYAAAAGAAIDt0//KA4Ddlt36XwDACCz1Tf+7dKuoPEP8p7KLeBEADUA37kTiSAIAAABwnZl+VXP/1VcAACL6nwccDQBm2OULAAQACAAEAESZ/udvAFav7UM+TQCQdPovACApe33T/y7dKu2pTn1tLQ1Ar+7E42ACAAAAEMR8v9oGwPofSrkaAPz1X/+1owR05vsHHI0QdvkCAAEAAgABABHX/3VeBCDuLH6ot/93BQAaZbhv+t+ZWxUQAGgABnEnKscTAAAAgFAW/BU2AAIAKGX+IgB/fY8DBXTj+/dzQELY5QsABAAIAAQARNn9jxMAbIwE3t4g63+aY75v+t+ZFIP+FTerAdAAjEAAAAAAAEBhdvz1NADvnuVchaQuBQB/fcBRArohAFjKKF8DIADA+l8AQNz1f4YA4Pnnnz/61zrfbr+nACB6A+C3UFIz4rf+70yiAGDFjVv/hwQAGoCmCQAAAAAAqIU1f/EGQAAAdbL+B/rz/ROOyTyLfAGAAAABgACAuOv/1A3AfkZ/9oMVDu47mP5HDwD8CkoGdvzW/525lca6GxcAuAhA3wQAAAAAAFTHpr9UBiAAgEr88z//s4MA9C1FANB3RWCRLwAQAGD9LwAg+vo/UQBwuuyf/9NulvctBgB+Lac4U34BQE+Srv8nAUAMrgPQE+t/AAAAACpl05+/ARAAQCX++Z//WQMADCJWAND3ZQRW7NdfeeUVI34BgABAAIAAQABQSQAQ3gCY72doAPwGTlVM+QUAPREAtBsAyABaJAAAAAAAoGpm/TkbAAEAVEIAAAxuxZUBIl5JoEJLp/+XmPULAAQA1v8IAAQAGQKA6dpFAKbLDYDtfqIGwC/Y1MyaXwDQjdQBwDR2A5AhANAAtEUAAAAAAEADLPvzNAACAKiEAAAY3PdPBH5Jrwdk+/RfBqABEABY/yMAEABkbgCm+1f+M39k/Z+O36tpgjW/AKAPGdb/k4sApA8ANAANsf4HAAAAoD1W/okaAOt/qMdMAPC2t73N8QG6JwDYOzvxX7T4lwEIAKz/rf8RAAgAigQAO4EBgLG+9T/Dsua3/u9DzQFANyXA1+LRAHRAAAAAAABAw2z94zYAKdb/X7rA2QvrvO0ehwLo237Q3/H7+gda+gb/GgANgADA+h8BgACgqgDgLOt/03/YM+i3/u9Ahun/xrtzEQANQAeOxvoCAAAAAACaZ+4fqwHIs/53xsIKb7vAkQHoXqL1vwZAACAAEAAgABAA1BAAGOvb/YNNv/V/BzKM/jfelwBgRQMgA6jK6Vjf+h8AAACATlj8pwgAtjwjRv8Q0dtmOT4A+ysG9Cfd+l8DIACw/rf+RwAgACgVABjr2/3DIct+Q//WZVv/b7kvAYAMoF1nJ/sCAAAAAAC6MsisP08A4HSCetj9A8z7/oHOvrXUAYASQAMgALD+FwAw8vq/VANgtW/9D4cs/gUArcsz/d9yj091RAMwoLOrfet/AAAAADpUZJqf4X5/LbHd7n/3D1GeiC9d4BSFRez+Aa7qNQDItv7XAAgABADW/wIABAA5Ge5b/8MRo3/r/3Zlnv6vuNOnepQ/A3CqF3QnAUcVAAAAgHrlGf1newB51v/7BmAn4tMhBoDVTtf/SgCAIwIAGYAAwPrf+h8BgABAACAAgHbZ/QsAmpZ5/b/oHp/qWrYAwEleXMTdv/U/AAAAAG3Iv/tP9DB+LaNpmi41AKvn+19ayzkM00EDcPTPAOwIAAQAAgABgPU/AgDr/7gNQNI2wHZfAABH7P6t/zuQbf0ffnfW/97+vxux3vLf+h8AAACA9pSa/sd6AL9W1O5b+FIFnMkwuQIAwDBeKcTu3/rf+t/6XwDA4AFA6usD2O4LAOCU9b9zoHX7Zb8AoLkG4IUAzvCyYgUAAAAAANC2nLv/LfdbTwDwpZo4gQGAQQgABAACAKz/BQDkCQCOhv5JAwDDfQEAnGX9T08EAK00AC8s4cQuyPofAAAAAM5IvfsPua9q1/9fqpXzljH96Ec/+tGPfuQ4AIzglaKs/wUApv/W/wIAhlr/zwQA0UsAw30BAFxi7k/H4q7/JwGABmA8AgAAAAAAKKyhAOBLdXMuMaAf3eNQAHTvldIEAAb91v/W//b9DBUAXG0AYv0Vb7gvAIBLrP8hnAAgYgOwKANw7pUiAAAAAACA8uoPAL7UCOcSo/nRAUcDoGOv1GHpVt76f8C5vwDA+t/6n54CgP3KP+Lc/yzbfdN/uMT6H8IJAGKt/xc1AE68Uqz/AQAAAKAW1v8yAFjqR/dzQIChfP/73//+978/yDf7SjWWbuVjLe9t9L15PwIADQD51/+73X+Kd/0/YsFv+g+XWP9DOAFAxPW/6wDUTwAAAAAAABWpLQD4UsucTgzC+h8Y1vfv6f47faUmK4b4S/f6Bv12/1j/CwCoZP1/6YIAcRnxm/7DPAEABLL+LxgAaADyEwBATn/xF3/hIAAAAABX1BMAfKl9TidGIAAAhvX9A0cf6enbfKU+K96J37v1W/9j/S8AQABwlh2/3T9cJQCAQNb/0QMAFwGonAAA8viLv/gLAQAAAAAQqngA8KVenB7b11577bXXXnOO0Q3rf2BYAoBqM4D59/W3/rf+RwBg/U+j638XATD9h1Ks/yHEpd2/AMAVAHolAIAM/uIehwIAAAAIVTAA6GD3/9oFzisAaM6lWf/377f/SE/f+yt1WxQA7BsAa3v7fqz/rf8RAJyy77f7hxkCAAgx88b/GgABQJfurHX05Y4kzLD+BwAAANYoEgD0Ov2/dEEA6Mbb3vY2BwHo0uk7/Z9+vLPd/94r1VsUAOwaAHN8AQACAOt/mg4AEiUBhv52/zBPAABXzQQAQ4m1/v/iF78oAKjclgDAZQEAAAAAICFv/3806/eu/3DJ2w44GkBnZib+va7/X2nKogCAFH52lgBAAIDRvAZAA2D3Dx0QAMBVt84RAOR5+38NQCkRGwAZAAAAAADEJAA4WvYHjv5N/xnN2+7ngAA96fgN/k+90ibr/zqn/3sW8wIAAQACAAGA3T+07sUeeVqJ69YFAgABQMfuROV4AgAAAEBMmQOA2hqA17Zx/jAOAQBAB15plul/tet/AYD1v/U/AoCPfexjTWQAFv/ADAEAXCUAiLj+FwC0ZfvuXwkAAAAAAKmMeQWA1zZz5jAOFwEAaN0rLTPHr3P6LwCw/rf+RwCwCwCyNQBbSgCjf+AqAQDM0wDEWv9/8YtffGEVJ2ERZ+f7IW/2H/j5jjAAAAAAbCIAEADADAEAQOteeeWVw38WALB9+i8AsP63/kcA8LEDGgDrf+iAAADmDdsAfPGLX4y4/hcAtOXSXt+mHwAAAABqkW73/3/f09P6XwPAUAQAAJ0RABBl/S8AsP4XACAAODLzOcUbAOt/4CoBAMy7dVnl8/1TM3909DlL3/v/Ui1weMsCgLYcjfvvXOOIAQAAAEBuSdf/AgBomgAAoDMaADZO/wUA1v8aAMYJAC7N9z8WQ7YGwPQfCCEAgBm3ZjW0/l9k0Vv7n/2qoz96YS1nYA3uhLn6tY4kAAAAAMSXLgCoIQN4LSpnCwDQLgGA6X8UNvQaAAEAIwQAp2P9j8WWugGw/gdCCABgXkMNwBcjWbH+n/HCNs7Asu4sdPULHVIAAAAAiCxpAFAwA3gtNqcKANAuAYAAQAOAAEADwFEAEL7R/1gaAgDrfyhLAADzbl3T2fq/tgBAA1DWnTQcWAAAAACIKd30v1QD8FoCzhOG8vd///cOAkBPXmmKvX4NQ38BgAAADUDfwgf6H0ssYgOwX8xb/wOBNAAw41aAntb/0RsAAUDT0gUAV0sAnQAAAAAALJZi+p8hA9hv9BNN/63/Gc3f//3fCwAA+iMAEAAIANAAmP4Tvv7fr/M/lsvGBuBwNG/3DwQSAMCMW2F6Wv8HxgACgBHcyWL+fj0LAAAAALBMovV/ogbgtSycFYzj7w84GgA9EQBY/4/WAPzmAbt/AYD1P+sCgPy2NwCH/2zrD1wlAIBLBABnM4BFXysAaMjR4P5OXmfv15MCAAAAADFtWf8fBQArkoDXSvCkMxQBAEDHlg7x//s5AoDB1//VNgC/GcD6XwNg+k/9AcDGBuCQ3T8QQgAAl9wK1vH6/6gEWPFVAoAmnM7uw4f7cTOAq5cIAAAAAAA2WR0AbLk4wGuFeLoZigAAoGPb1/95YgBr/voDgHoagN9cTgBg2S8A4GPV+8MAV//et/4HQggAYEa1AcAX2yEAaMXZAGC6vO+/9OUR8wBPCgAAAACkMkIA4FlmQNb/AB1btO8v0gCY8gsA0k3/R44BTr93+34BgPV/9w2A6T8QQgBAkbOulYda50UAvtgaAUArLs3uA6f5AgCYpuk///M/HQQAAACgDQIAAIC2RFz/p0sCDPrrX/+XzQB+M6rRpv8aAAGAAGCQBsD6HwghAKDIKdfKo60qAPhiswQADQkJAOa/fEUDcPbLPRc05z/vcSgAAACAZuRZ/wsAAAC2++9ZaAA6nv7XcDWA30xgtOm/BkAAIAAYoQEw/QcCCQDIf7K18oB34/4poAQQAKQIADQA+a14S/47m53emieC5vznAUcDAAAAaJsAABr1d3/3d4s+/2/+5m/+5m/+xnEDaMLGQX/mAEAG0Mr6P38D8JtpLLr3gt9X9KNk6C8AEAC03gBc+nvf7h8I5CIA5D/ZWnnAu/X/FCkAOLzl3b8KADQAVVm911/6lv+BaQE0xPofAAAA6E3EDOC1QjyJDOXv7gn/kr854AAC1Czi2/nnDAAGbwB22/r6A4AO1v9Xt/XpLh0Q/dEuvR1DfwGA9b8GwLgfBicAIP+Z1sQD3q//p20BwMxdCABM/2uzvQE4/eDqW4aGCAAAAACAPoUHALvPr2f9LwBgNCsCgEkDANCIjaP/wAzglQS8wf+lBkAAkK0BiPKW/Im+kSg3a+tv/S8A6KABOJsBmP4DIQQA5D/TGnrYu33/dK0BWBEAPLWcAIA8Fi31AwOA3QcnJQCdsv4HAAAAOrdf+c+s/3ebewEAFLFi/T8JAADaEWv6n58A4CgD+NnK9BQA7Cf1cS8gkP+7EAAIAOgsAFjXAFj/A4EEAGQ+zRp62NsDgEsNgABAA1CzdRcBOP1g+A0KAAAAAACgYYez++LTf+t/CCcAAGhCzRN/AUC17+5fVQPwm9Vr97uw+Df9FwBoAEz/YWQuAkDmE6yhB7+f+E+XG4Crw/2zt/zUKkOt/wUABUXf6Jv+AwAAAEDPXquMZwQA6Mkrr7zSaACgARAAtBIAXM0Aqn3MDz744IMPPmj9bx8vAOggANg1AIclgPU/cJUAgJwnWFsPfr/+nwQAJQIADUBB0Zf6GgAAAAAA6JYAAAAgnXYDgF8ckosANLr+b5QAQAAgAOisAYgYAPgNCgZh+k+es6v172VdA3D2pp5aSwBAHilm+odfKwAAAAAAgK4IAAAAUnilZb84qp9tkACg6QZAALCfiYsBrP97agBM/xM5OkqOGK0TAJDt7Gr6e1kRAFy6qUECgO0NgJ+gglK8T//plwsAAAAAAKAHAgAAgEQEANb/7WYA1vkuAuCaANj9L20APvOZz3zmM5+Z1gYAfnGa4QDSJQEA2c6u5h7/fuU/XQ4AZhqASzf71AYCAPJYFACEb/cPP9P6HwAAAAD6IQAgov91j0MBAC4CYPdfMAPYEgaY5ucMAGQAAgDT//4CgCOm6hvpKOiVAIBsZ1dzj/9WsIgBwPwnCADIZmkAML/gP/qc/T+H3KxIAAAAAAAaIAAglv91wNEAYHBb9vf/ZYnfOKd4ALB/JAKAtq4MYJdfJADQAAgArP9bbwA+c8CvQHEJAOiY9T95Tq3mHn+iACBEHw3AC5v5ISpraQAwM9Ofuamz/xyeHwAAAAAAFREAsPfE/RZ97UwA8MMf/vCHP/yhwwvACFKP/q8GABsbgFjr//obAOt/AUA9JYD1vwDA+r/FBuAz5/hFKCLrfzomACDP2dXKY95t+qclAcDZBmDjwxAAaACKC5ngBy71Qz7tTjBPDQAAAADUy/qf6WT9vyIDmA8AzmYA2gAAOpNi6L9o/b8xBogbANTcAIwTAPz+Cev/2hoA638BgPV/5fb7/vn1vwAgBet/emX9T+pTq5UHvB/0T6UDgKnxBsDuv34hY/rwt/8/+/kzt7O0ExAAAAAAAEAzBABjeiJMyE09/vjjjz/++DRNixqAmTagJ//wD//wD//wD843gEGkG/0vXf/PZACXPvNozb9l+i8AqCEA+P3LBAD1NADW/xoAAUAT6/9AfhGat264b/dPlwQAJD2v9v9a7UM9Hf1PSxqAFAHAdK4BGOft//34JBW+p18UABx+cOZGNgYAMgAAAAAAqJ0AYEBPBJu5kcfvd/Zzfni/s3/U60H+h3ucbwBD+S/J/EYyZ9f8l1b+Iev/agOAn+1ayPr/qAGwwhcACACw/o+y/hcAzDDihyPW/yQ9qfb/Wv/DPh33T2ElQIoAYDppAOof/Xv7/yYs3dNf+oTALX74lF8DAAAAAACdEAAMKHoAoAE4IgAAGFxDAcD8iH97VyAAyNwACABaCQA0ABoA639v/z8aAQDsWP+T6IyaTi4FUKfd1v/oI6svAhDrUbUSALwQj5+dDGLt6aMEAKsbAM8jAAAAAFRNADCU7VcAePycmXucCQB6PcgCAIDBtXURgNTXFrD+z9kA/H4AAUAlAYAGQABg/e/t/xv1yAG/9cEKAgBSn0uVP+yjBuDWQtHX/1MLAcALUfnZyaZIABBy19b/AAAAANAPAcAgtq//pwsBwHwDAABD+S9pCACs/6/6/TACAAGAAAABgPX/Co9c5tc/CGf9T4pz6fRfq7Xb8Z9+ZFEAkO7hVdUAvJCGn50Mjmb0G9f/4QHApcewrgHwPAIAAABAGwQAfXtiibO3sJ/4CwAAYJ4AoGwA8LOj+v0lrPAFABoArP+3BABj/obzyCy/AUI4AQDRT6SzH6/zYd/aZpAA4IWU/OxkEGVPv+hGzv7R1S+0/gcAAACATmgAurRo+j+/4398lkMNAEeGXf8XbAB+dmC/v5AhvgDA+h8BwIr1/7C/1TxyjV/8IJwAgOgnUluPvNoAYH/jxRsAAUAH4l4BYHtIMP+vAgAAAAAAaJ4AoCeLdv/hI34NAACEOxzxn36ks8V/DQ2AAEAAIAAQAGD9nygAmKZpzAzgkTB+64NFBADEPYvaeuQbA4B0D+ywLuj4IgB+drKJsqSfmeaH3/j+My9N/DUAAAAAANAD6/8+RHnL/7NOR/+SAAA4dDr3P/3T7qf/pRoA038BgABAAIAAIOkVAAZpAB5Zzm+AsIgAgLhnUYuP/2jZPwWEAUnf/n+6PwCYMjYAL2TkByenWBv6O7O23Fr0GwcAAAAACrP+b9qiN/5fdxePL+d5AWAQh+/3f/Te/0ef0P30XwNQydBfACAA0AAgAIi+/u8yAHhkG78EwlLW/8Q9kdp62It2/3ne/n8nfwBg/d+Tozfaj3izIVbc1CQAAAAAAID+CABa9MQS63b5j2/jOTr0ve9973vf+57jANCxowDg6LIAg6z/8zcA1v8CgCbW/wIAGYAAoPUAoKfJ+yMx+MUPlhIAMLLDAODoI6Xe/v9Uf1cAcOJFdziRP53Ux7qLdAFArJsFAAAAAOpi/V+nJ2JYsch/PBLP4HRv+i8AABjK6WUBxln/CwAqXP9rAMpO/63/NQACgD4CgIZW74+k55c9WEEAAHu1rf+n7gIA51giR+/6f9gAxLr9KEv9kPf7t/4HAAAAgH4IAGoTd/0fssh/PI06D2+2ByYAABiQAEAAcOR3f/d3y67/NQClpv8CAAGAAKCnAKCG7fsjdfDLHqyjAYCdq+v//AHA1EsD4OxKKvVofvVY/+wVCVwBAAAAAAAGogEoYj/Wv/TxWOv/S3P8x9Or4TgfPpJsj8r0H2AEh+P+6WD9P50LAKz/R1v/P/roo48++ujv3k8AMM70XwMgABAAdBAAVDJ/f6QafveD1QQAsFPh+n/KGACkywCcWqnVGQCcHf1PqwIADQAAAAAANGw/33/22WcFABmcHe5Pydb/R8P3x3PJcCTn76WtqxMA0Jajif/M5/zGGBpd/z8a1ekN/u41v5+FmX7+6b8A4Omnn3799ddff/11AYAAoMUAoJIF/CM18bsfbCEAYEy3bt06+lcBgPV/i1Jv5dct9Wf+VAMAAAAAAAN59sTZcX9gHuB4zpjZ7k+bA4DHK5P6YF69IwEAAOnMT//3fmMkLb73/6OJWf+PvP4fNgB4/RwBgACg2gDg9BNqGME/Uh+/+8EWAgBWnzntPvj9vv/oXy+t/+sJAKaUVYAAoEWVvP3/pdX+ogBg/jF4rgEAAACgMc+uIgBY4YmUHq9P0oMZeC85H9X3vve9733ve85zAA4JAEYOALz9/+Dr/wEDgNdnmdrXtvgfZ/1/NgOY+bR0O/iQG3ykVn6pg40EAKw7Zxp98IcT/9OPnF3/VxIAnP1g+Lj/dOufKADwA5JT2QBgmn2z/+lcADBzs/OPxHMNAAAAAI15dq1LAcCzzz7rqJ4abf1f1Rvtb39gM9/d90442wHYEwAIAIoHABoAAUDx6b8GwPv9NyTRFP6R9vmlDjYSALDuhGn08e92//MBQA3r/yleAHBpqR83APCjkd/ZCX7c218XAAQ+sKT1AgAAAABQ3rMbCABCPJGYAOCSpN/a9y5zzgOwJwCoNgB4NL0a1v8CgFLr/3EagNeXMMEXAHQQACxawz/SC7/RwUYCANadME1/F/sA4Or6v2AAMB3M/ae17/0f8a39BQC1KRsAzH/CdPL2/6cPb9FFAAAAAACAJj0bm0O6N+b6PzwASBoSWP8DUA8BgABAACAAGHz9rwGw/u9j/R+4iX+kL36Rg40EAKw7W/r4jioPAKZ7u/9pbQBg99+xkBX+xtuPZTrpASYBAAAAAAB079kEHNW9YQOASq4nkPQxCAAACOciAFWt/wUAZFj/dx8AvL6WLb4AoI8A4HAZ/8gw/EYHqwkAWHq2dPPtXA0A6nmo1v8cCnwb/o23H/6W//OfefSYL93F6SUCPNEAAAAA0LBn03Bgp/Tr/3ECgHUNQOo7FQAAEO43hrFo2f+OA/0FAJU0AIb7AgABAMb96QKA0fiNDlYTADCsyt/+/1Tx0b/pfyVCVvixbj/8Thc9mJnPdE0AAAAAAGjesyk5vFPiBmDRkH20DCDDHX3vAqc9AJeM1gDMz/oDA4B33K+bBsD6f4QAoO8G4PUNLPIFABoAAQCMRgDAsFp5+/9DR4v/3QdTz/1N/6uSaPQfeL/TqhIg8Ls4+iPPNQAAAAA0TAOQSD1v/79/SIM0ANnuSAAAwFJDBQBX39d/PgB4x2VtBQCXGgDr/xHW/x03AK9vZpQvABAAWPzDaAQAjKmtt//fOw0AppQNgPOkKqXW/4EPwxUAAAAAAICfEAAkUkkAcPiQHu/O0THP0xt87xqvKgDMGyEAOJrsX31f/6NPe8es5gKAUg2A1X4lAUB/DcDrkdjlCwA0ANb/MJSCc38BAAX1FABMCRoAZ0htapj+T6vW/6ePduYbsf4HAAAAgB48m9jIx7a2AGDqsQHIHBtY/wMQxVDr/xT6uAhA6gzAaj9bAPD000+PEwC8HpVpvgBAACAAgHF4v3+Gslv8TwcBwFPn1PwtnK7/9wQAvWrrvf9nPn/+jy59phMAAAAAANqjAUikeABw9lGZ8q9m9A9ARF2u/9+Ry5bR/+GX1xAApGsArPZTr/+fHs/rsZnmCwA0AAIAGIr1P4PYj/6nTgOAHev//pRd/99ZaP6rLt3s0cePPsc5AAAAAADt0QCkUOH6fxIAxLgUwPwRBoAQu8X8FLsE+IVf+IURAoCrDUDgl1cSACRqAAz3rf8rX/9rAKz/NQACABiNAIBBnAYAT11Q+TeStAFwntTj9H3xi0zhI67/zz5+AQAAAAAA9Gxmvq8BWKrOt//fMeKPGAMAwDq79f/hv26f/p/qOAA4mwEs/cKOAwDDfQFAE+t/AYAAQAAgAIChFF//f+V+nhES2U3/D/91aQBQTxswEwB4+/+elJ3+T6ve/j+kEDi9l+lk7l/8ewcAAAAA4kgXAIzWAAgANAAAEC7K3P+SjgOAwzX/iq+qJwCI2ACY7GcIAKz/BQDW/xoAAQCwTsEA4CvneEZI7alZ819V+bcmAOhG4Ho+/8OIHgBM1v8AAAAA0Lezq/1n4/nEJz6R4bv4xCc+keeOLim7/hcAyAAAaFGiACBbA/CO1ggAEACUXf8LAAQAGgABAIymnrf/1wCQx5YAoOYGwPq/G4vW8/kfyaXF/7Q5ADh7NQAAAAAAoHln37O/iQbgE9fkPIxlA4CZVbq9vhIAgDolWv9nawD2w/pWYoB61v+xAgB7/QzrfwGAAEAAIACw/gdWKxgATJcbABkA6awIALz9P9nUs/6feTxL3/5/f1OL7sLJAAAAAAA9i7j+LxgA5GkAir/9//we3UxfAwBAnVoPAJq7FEBnAYC9fp71/zgNwOtZ2OgLADQAAgAYSsH1/44AgJyeCjDzVdV+X9b/fahwCh+4/j/7me1+1wAAAABAVqt3/+mG+J9YK+7DeCK9xx9/fFEGcPogbfQ1AABUK9H6P3MDIABYuv6P0gCY7Gdb/48QALyei42+AEAGIACA0eQJAC7FAC4CQE4r1v9TC1cAWL37FwDUo9odfMj6v8tvHAAAAADIp54A4BMxRHkkT2S0eoxunS8AAKByidb/ORsAAcC6GEAA0Mr6v+8G4PW8bPQFADIAAQCM5sWMTu/9K9d4gojoqVXq/76863/Tks7rsz3CLY+2/iMAAAAAAOSwev0fZXb/idi2PJgn8hIAKAEA6Fii9b8AoOMAwGo/fwDQXwPwenYG+gIADYD1P4ypYAPwlQCeoNpOlXYf/1NrVf59Wf+3q6Ht+6UHGfiYZ5qB1BcZAAAAAACasT0AWDe+/0Qa6w7CE4UsmqGb41v/A9CKptf/DTUAtQUAWxoAq/0iAUAHDcDrRRnoCwA0AAIAGFPqrf/pR76yhCeotvOk0cf/1AaVf2um/+1qa/W+OgA4/ZzTfxYAAAAAAAA/sToDmO6f8ofc1ycSW/HtVx4AYP0PQFtSrP81AB0HACb7BQOAJhqA12tloC8AkAFY/8OYkr7H/6mvLOQJIoqRAwDPfp2am7yffZyBD/tSMxDCqQIAAAAAw1l9HYDw/f0nslj0XT9Rmqm99T8A/Um0/s8WALyjHU0HAJb6Naz/K28AXq+bgb4AQAlg/Q/DyjP939MAkN+wAYCnvk7tLt23PM47qzhbAAAAAGA4qy8CcHWCv33Kn6IBeKIO1vbW/wD0J/ruP2cD8I6mCACIEgDU2QC8Xj0DfQGAEsD6H0aWbf2/pwEgm6e2qfy7s/5vzpgz9ztrOWEAAAAAYDix1v/p3sI/YgPwRDUM7gUAAHTpF1ISAGQOAH43mACg3QCgwgbg9UaY6QsAZAACABhT5gDARQDI6anNav7uBABt6WbjvvSRCwAAAAAAgCD1r//3Nt7mE/WxudcAANCfdgOA5jIAAQBR1v8VNgCvt8lqXwCgBLD+h3FU+/b/GgA2GjMA8LxXqKeB+9LHb/0PAAAAAAR5NkAlAcC0sAF44okn9l/4RJUM7mvOAIQBAKxTJAD48pe//OUvf1kAULABEAA0vf6XAWgABAC0WwL41QtKEQDQpSgBQLUZgPV/Kzp77/+Q7+XOZk4bAAAAABhOJQFA+ANeFADsG4AnamVt34RPf/rTn/70p71cABAi2/r/yxeM0wA8mosAYITpf4UNgABgwK2/6b8SQAAADcmz/p9WBQAagPrPnGofXt8BwJ7pf826X/+ffjt3InHyAAAAAMBwKl//H33O0gBg1wAIANgeAMgAAAhRdv0fpQFwEYAVDYAAoI/1fz0NwOttsub3Nv8yAOt/GEqdb/8vAGCLpyJxJFmtj1F7+Fj/TlTOHwAAAAAYTrUBwNnP0QBQtgGQAQAwo/j6f1EAcDimdwWALQ2AAKCb9X8NAcDrzbLpt/5XAggAYDR1vv2/BoDVnorHwWSdPubsAgAAAAAAoIBsAUDIgzn7mSsCgMqZ1zcXAGgAALgkaQCw+9eIAcDZuX8rDYAAQADQZQPwehfs+wUASgDrfxhHnet/AUDNJ0zND+9owS8AIL8R1v8CAAAAAAAglaMAYPfBzNP/eT01ALb1zU3/ZQAAXJUiAAhc/y8NANp61/9SAcDvBhAAdLP+L9gAvN4dQ3/rfyWAAABGkGL9PwkA+j1Van6Epwt+AQCZdT/9T80pBAAAAACjOw0ADu0+WCQAWHpfAgDSrf9lAADMSHEpgC8HG6EBEAAIALoJAF7vmrm/AEAG8Mgjj0TPBvyiBRWKOP3f+cpmnpQ6T5LKH+RTkXi6WaHF/fqdyjiLAAAAAIApcKyfuQEQAFDb+l8DAMBZBdf/6wKAthqAR/MSAAwYAERvAF4fmMW/9T9xrxjgtywYhACgM7HKkNSeiseTziIt7tet/wEAAACAGoXP9GtuAAQAZFj/awAAOKuhAOAd73hHQwHAo9kJAAQAV8f9dv8yAOt/Mqz//XIFQ/lKDA5jPSJeHSKpsyN+AQAZNLdiv1MfZxEAAAAAsFjOBkAAQG3Tfw0AAGeVWv8vDQDe0ZRHSxAAjBkAhDQA+3W76b8GQACA9/4H4vpKJI4kixzO9w9H/AIAUmtrxX6nVk4kAAAAAGCZT6yV9L6eaIHBfU8BgAYAgEMVBgBn/8j6XwBg/b8iADhdt9v9CwA0AAgAgLgEAOR39Mb/Rx8XAJCOt//XACTyl3/5lw4CAAAAAMyp8CIAAgAyr/81AAAcyT/9nwkALv2pAEAAIABY1ABcWrdb/wsAJAFY/wNxCQAoa2MAoAGgY5eW9/O7fAFAfn/5l38pAAAAAACAM452/FUFAE80wua+s/W/BgCAvVLr/7MBwMwnWP9vX/8LAHpd/5vsW//LAKhk/S8AgDF9JRJHku32g34BAMzM7kNG+QKAbP7yHocCAAAAAO5zdsp/+K/pAoD5G3+iNZb3/QUAGgAACq7/QwKAdzRIAID1vwZAA8Cw638BAIzpK/E4mGy3aPevAaBjM5v78F2+ACC1vzzgaAAAAADAfa5O+dOt/y/d/hPNMr4XAADQpSLr/9MM4PSPBADRGwABgPU/GgANANb/QFwCgC69+OKLL774YouP/KlVPOMEevnll19++eUmHmrgu/vPf+aUrAFwLu1Y/wMAAADAnPlBf9L1/+ldPNE4+/vOGgCvDwCcyrn+3wcAl/7U+l8AIACw/pcBaACw/gcqJwDoz4v3NPr4BQCksF//158BzA/uFw3xBQBJWf8DAAAAwHpJp/9H9/JEF+zvBQAAjCDP+v8qAYAAwPpfACAD0ABQ//pfAACDcxGA/rx4oNFvQQBAXC+fqPnRBgYA625KAAAAAAAAjKW/AOBqEqAZEAAA0LTi638BgABAAGD9LwMQAGD9D9RPANCfDgKAHQ0AsRy9/X/NAUDEtf2dZJxRAAAAAEBLnkAMUFkJ4KcSgBACgPrX/wIAb/+PBkADQKn1vwAAEAD0p5sAYEcGwHaHi/+jAGA+Bsi/d68/AHA6AQAAAADtEQDIAAQAADQq//pfAFBq/S8A8Pb/aAAEANb/1v9AOAFAl3pqAJ5ay2nAzuHi//QKADMBQKnJe5TB/ZZ9v/U/EMWf/dmf/dmf/ZnjAAAAANTC+l8DUHDxrwQAYIsvZycAEABkHvGf3fR7+380ABoA63/rf2CGAKBLAgAlADsvX7b/hOnksgDFFXz7/+ngugcCAGCLPzvgaAAAAADlmf5rAOrZ/csAAFhKACAAGPMt/K3/0QAoAaz/BQDAJdb/vepj/b+jAWC1l8PU9rC3r+23BAAzN+KMAhYRAAAAAAB1Mf0XANQ2/VcCABBOANBoALCoAbD+D28ABAAyAAQA1v/A4AQAver47f93i20NAFc1t/4P3OVvv7XAe4n1SIBhCQAAAACA6lj/awAEAAC0y/q/qvW/ACDD+r+SAMDsXgCgAaCe9b8AANgTAHSsmwBgOigBDnfbAgDmdRMAxL211VcA2H3EeQUAAAAANMz0XwNQcwCgAQDgKhcBaLEBEABsXPBb/yMA0ABY/wsAgFPW/9Rsv93fz/0vbbg1AJx6OVg9jzniO+6nCAAAAAAAAJpn+q8BqDkA0AAAEML6v54AIG4DYP0fEgA8mJfNvQBAAID1P1At63+qdTTRngkANADMnDzFG4BF6/lYm/s7a6V4MAAAAAAAtbD739gAjBAPfLoOfloBmOc6AJUEACEZgPX/9gW/9T8aAA2A9b8AADhi/U+1lm64NQCsO3OSBgAF1/PbA4Cyjx8AAAAAIDKL/xUNwIBXEvh0NfzMAjDvy1kIADY2AFen/xtPgxHW/0WY2msABADUtv4XAACnTP+pVvgVAAIbgDzv+E4lp009AUCRDX2UiwAAAAAAAPTD3L+eKwkIADQAAEQxeAPwaH1Cpv/RTwPrf+t/AYAAAOt/YEzW/zQhJAC42gBkm31TxMtrpXtIZSf1AgAAAAAAgJ+y1BcAtLX+FwAAEMhFACoMAFIM/edZ/1v/awA0AHS8/hcAAJdY/9OKLQFAztk3FZ4bM+v/nKfEzMg+xf5eAAAAAAAA8BOW+gKA5gKAfQPw8QOXzvCP3+/Sx2duAYCmuQhAJQHAo48+WuocMP23/pcBCADodf0vAAAusfunFXEDAA3AUOdG8asBTOfm+Gf/KMP9CgAAAAAAgBEZ6wsA2lr/f/rTn/54gOncyj+QlwWAzgyYAVQVABQ/Aaz/NQAyAAEA1v/AgOz+x3Tjxo0bN2409IDDA4DDjxRZe1PJWVFJAFB2bS8AAAAAAAAQAFj/t9cAfDwLLw4APRmtARAAHLL+1wBoADQA9Lf+FwAAcNaNA0084KsBQFXv+E7qkyHkrBAAzD8G638AAAAAYBT2+gKA5hqAj+fytnu8UAB0YKgGwPr/iPW/BkADIADA+h+AQfQUANS2+Sb1mZDolBjkxBAAAAAAAACjsNS3/hcABAYAMgCAPggARtj6X6IBEABoADQAWP8DMI5WLgVg6s3+TJhSrv8HOSus/wEAAACAIRjrCwAabQBKBQBiAIAOCABG2/0fEgAIAAQAAgCs/wEYwY0T1T5Ug29SnwZDnRjW/wAAAADAEIz1BQAtNgAfz+htYbyYALRlhAAgTwnQ3FMvABAACAA0ALS+/hcAAHDVjctqe6im3kzZ1/9ODAAAAACAHtjrW/831wDUtv7XAAC0SAAw2vR/RwBg/S8AEABg/Q9A925cU8njtPMe2f7ZebkCnR1bVwAAhvUv//IvDgIAAAAMxGRfANBcA1BnAKABAGiOAGCo6f8h638BgAZAA4D1PwAdu7FNtsdp3j2ylytz9kHeOdDKgW3xMQNE8S//8i8CAAAAABiLyb71f3MNQJ3rfw0AQIu6X/9HDwD6eN4FABqAVrz3ve9973vfKwCQBFj/CwAAWORGAokeqgZgZDVfBODOCc8XQM3+5R6HAgAAAAZitS8A2OI99+smAHjbBl5VANrSXABw+OAvfcKjCfT0pAsABABtBQBnaQAEANb/AHDJjWQSPWABALU1ANb/AAAAAAANMNwXADQUAFS+/tcAALSotgBg96iOtv6LGP1fZf3fdwAQ5Y3za17/X80Ajv7I1l8AYP0PwGjaagBcBGAo3/3ud7/73e/mPwHmz41LAYDnCwAAAACgXob71v+uABA3AFACALSoVACQ6Nsx+p9n/d9rALDxnfKrqhTeu9zpVwkABAB9rP8FAAAsdSOl6I9WADCI797v5TocnoSeIwAAAACAltjuCwBiNQBNv/F/9ADAawtAi/Ks/0t9d3b/ewKALhuAFe+UX1uo8N4EBAACAOt/AMakAdAA1OO752R+g//5k8EZAgAAAADQHtt9AUCdVwD4eAlvi80rDEBzkgYANXyDAoAd6//OAoCQHXwTjzMRc38BQIWzfut/AFJrqAEQAHTsu5dlfpv/q2egJwsAAAAAoCW2+wKAKOv/uAHAxwt5WwJeZABaFD0AqOq7G3z6v2P931MAsOjt8Ifa/WsANACNjv6t/wGIwkUANABlffeal0uYOf08ZQAAAAAALbHdFwDUtv7vLABQAgC0a3sA4BjWLPX0f5qmB3vUdACQrgG4dPvvrYnFvwCgrfW/AACA7VwEQACQ0/44fzdYJQHA7sF7BgEAAAAAWmK7LwDYvv4XAAgAADq2LgBw3OqXev0/CQCqfHP9Lt/dP0MA0ERC8PPLWf9b/wPQvVYaAAFAB0LW/0efUE8AMPhLhOMAAAAAALTHdl8DsHH6n6IB+Hg5GgAALgkMAByohkTc+p+1H81PfcUA7a7/ozcA723NlvV/zQHAz29g/W/9D0D36m8AjL/7cHioBQDNvTg4GgAAAABAYwz3BQAbd/8pYoCOA4D3vOc9XnYAWncpAHBkWpRo+n+WBqC2t94fMACYGfFf+pxY1xCoc/0/YAzwSCP89QRAXAIA4+8MAgOAwz8VANTzyuBoAAAAAACNMdwXAMSd/ke5FECvAcD+EHnlAeiG3X8H4q78ZzzYl6an/1FigPe273Tin+gaAk2s/7uvAh5ph7+YAEhBAGD8ndTRoZ4PAPafMPNk7U4wJ0C2lwVHAwAAAABojOG+ACDi9F8AEBgAaAAAoH5x1/+TAKDuAGBFFfDeUY0WAJTNALbc+yNt8rcPAOlUGwBMuRqA+p+ads+u06M9HwDMj/7Dz0CL/8FPPAAAAABgXIb7bTUA73nPe2qe/sdqAD5eVIb1vwYAAAYkAGixAbhUArx3bJWs/9///ve///3v//mMiqz/F931I43zNwUAqQ1+HYAmnpcWz6tLB3xdALDO0Y34YV904jkUAAAAAEBjTPZbvAjA0Yi87NDfRQBWr/8FAAAwIAFAowEAFTYA77/n5/PKP/1fdNcCAAC46kYy2x+bAKDFKfbVwx64/t8YACS6NsUgLwWOBgAAAADQHqv95gKA7Q3Ae7JwEYD59b8GAACGJQAQAMgAYq3/O2sANt679T8ABKq2ARhz/T+1PMWO+ASZ/pc66xwKAAAAAKBVhvsdNACLSgABQM4GYP4oef0BgEG89NJLL7300uFHdjP6qeUeQABAqQbg/ee0ngGsfiSPdMFfEwBkJgCo9rlo60QSAHTwOuA4AAAAAAANM9zvpgEIqQKaCAD6aACuHiUvPgDQvZcOnP6piwAIADQAMxP/8PV/6w2A9T8AFFHhpQDGvALA1OZFAOI+QfWEKKO9AjgOAAAAAEDDrPaHagCaWP/X0ACkXv9rAACgey/d7/QTHmycAID5AOB0x79u2R/o57MrGwBY/wNALBqA2o5//edM9GdHABD9dPLKBgAAAAB0zl5/qACgofV/6w2AAAAABvfSidPPebB9sTb9n/3sZz/72c8KALoJAK6O9eNO/0sFAFFKgJHf/t/fFABUpfsGoK0nouZHmOLZqeTc6+yn2MsaAAAAANAtY/1BGoCcugkAMqz/BQAA0KuXzjn7mYM3AJ8952ohYHNf1fr/NAYI3OvHXf+XDQBWVwHW/wBQj+6vA9Dc01HnA0uUZwgAUvwge1kDAAAAAPpkpi8AqHz9XzYGEAAAAOuEr/93RgsAPruNAKD+qwEsWu33cQWAFVXAlhux/geAROppAAQAdXo5mVgnm+H74Q+yMxYAAAAA6JOZvgBAAJAiAFh0xLwQAUB/Fq3/d8ZpAD4bgwagWu8v7ecbMXgA4K8JAKp1I411D0YDUKHK3/7fE3T0s+w4AAAAAAAdstHvYP1fYQPw6cQ6e/t/DQAA9GppADCN0QB8NhIBgACg9QDA+h8AqnUjmRUPxvq/Hi+nJAAAAAAAACCUmb4AQABQw/pfAAAAHQtf/0/tBwAhDUCsAMDOXgAwbANg/Q8Aqd1IaemDEQDU4OX0BAAAAAAAAMwxze9s+l9bA/Dp9AQAAECvHuxF6gDAyF4AMGwAYP0PAHncSGzRg6mtAcjcEpTqFl7OqOxVJgAAAAAAaIONfn/rfwFAPQHA6kPnpQkAeLAvAgDrfw2A9b/1PwCVWLGNrqcBqDMAyLPLL3JfmRW/ygQAAAAAAM2w1O8vAKikAfh0FgIAAKBLAgABgABAA9BrAOAVnkb90z/90z/90z85DtC61dvoGgKA6HPzs7e/9JDm3+Wnvv0+pv8yAAAAAACAzlnqd5kBCACKBwBbDp3XJQAY3IM9ShEAGNkLAMZsAKz/Ib9/up8DAu3aso1Ous8OeSQpdudnb3/RIc22/k9h/+BfLs30P+mPvOMAAAAAAPTGQL/XBmCcACBDA5A/ANAAAMDgBAACAAGAAKDLAMDLO60TAEAHNi6kbyQW8hjSNQA538u/Ei9Xw9v/J/15z3Z3XmMBAAAAgLSM8rtvAIYKAJI2AEXW/wIAABjcCAGA9b8AQAMwWgDgtZ0+CACgddtH0sUDgJ101wEYyss10QAk+nnP+cLiNRYAAAAAiM8Kf6gGQABQcP0fJQDQAADAyF566SUBgABAACAA6CkA8MIOQFW2jKRruAjAngBgo0ECgMEbgNS37DgDAAAAAAnZ3495HYDiSUDrDUCp6b8AAAAG12UAcNQAWP8LAAQA4wQAXtUBqNO6kfSN9BZ9FxqA1V6ujwag6RcQxxkAAAAAiMzyXgBQqgGoJADYP57Dfz4Ssv6/9LUp1v8CAAAY1ksvvbQ6APjCNZUEAN7+XwCgARgkAPCSDkD9BADDNgDjTP8N01O/dDjOAAAAAEB8ZvcCAAFA+AM++pJEy34lAAAw46V7oq//y+YBn/3sZ739/5gNQFUxgADA+h8Azlq03M221Q5cFQsA1hln+n90CpmqR3zREAAAAAAAAKmY3QsASq3/G20AKuR1DACG8tL9HnzwwZcCfCGSpVv8FQGAt/93TQABQPcBgFdyALoxs+u9kd3M49QA7J6RpV8yyPT/9PyxVo/ysnD6OuDgAAAM4U//9E//9E//1HEAACA1s3sBwDgBwHwGoAEAAJrw0nJfiGfjNH8+ANg1AAIAAYAAoO8AwMs4AJ25Ou3Nv+G+9HhGDgCWPvih3vv/7NlisL7l1eBsAOD4AIzsT+9xKMDPPAAARGN2X9B73vOeGgKAssv1T5cgAAAA2tV0AHCpB4h4m2b01v8CAOt/AMgsZN17o5DTRzJaA3Djxo11j3ycAGD+6PkBX/pScFrjOIxAf/73PQ5FiD894GjAQD/wfuwBAEjNCr/g+n+nYANQw3L904UIAACAFr20Sp3r/8MMQACAAKD7AMALOABUEgDsDBIA7A7CugcvAGD1D7ijAfTtfx9wNMJZAsNYP+0CAAAA0rG/r2T9f9QAjLP7z9AAnL39/Qd7Wv/LAABgHF0GAHEbAEt66//B1/91BgBevQFgRwBQ5GivePwvV6CG84TVP90OCNA363+AORoAAACSMsHPv/i/tP7PfxGA7gOA9wzMixsAVOgHP/hBrJvqNQBwBQDrfwFArwGAvwIA4EglAcDUewNweBAufRcz39FQ6/+hNuuJvl9ZBQAAxzQAAACkYI6//Z37t7zf/1kjBwARM4D3oAEAgMr84Ac/iBUAvLSWAADTfwGA9T8A1KDIpDv6pQBaPNRLv6MxA4DuN+vpvtPAg6kKAAAAAADWM+KPEgBEly0AqHm5bvevAQCA/tQQAMRqAAQAdLz+FwCY/gNAUjcqc/oIe2oATr/fpd/amOv/vhuAdN/p/JF0WQAAAAAAIKbd1vyNN96w6a8tAEjdAFS+XDf9FwAAQGdiBQAvbZMiAKizCjCst/4ffP1fQwDglR+AQazeE9cZAEznVu//5//8nw7W/4sCgFjD/UbX/72O1JN+p1evvyEAAAAAAABieuMes/4aGoA8AUD9y3W7fwEAAHDqpc1iBQD1XyLAtt76f/D1f9kAwMs1AENZvSeufOF9uP4/1HQAkLoBiHin1V4jIsqT0taP6sZTbqgLLAAAAAAA+bxxwKx/hACglfG66b/1PwBw6KUYvpCF9T8trv8FANb/ALBauw3AzGO7FADs/qjRJyVpCbDu7m5Ur/iPSdLzIecpJwAAAAAAAKJ54xzj/v4CgN2NtxUAzMQAxv0aAAAYUCvr/xoaAPN6638BQJEAwAs1AMNaPfNtZdu9X/+3Ml8O+d5zrv8v3emNdpT6GUl6SmQ+5QQAAAAAAMAmbwSw7y8YA8Rd/x/ecqPrfwQAAMAkABAAWP9b/9cdAHiVBmBw65a+1S68Lz3yw0+uec2cOQC4MYbUz0iiEynP3V26fQEAAAAAALDVG8tZ9pe9IEDE6T/W/wBAB4pM+ZsLACzsrf9N//MHAF6fAaDdiwCcfbSnD76hdzQP/2at/xM1AEtPnnSnU84z1vofAAAAAIjpjc2M+wtmANb/CAAAgCNfaIQAAG/8P0gA4GUZAHY6uAjA6XB5Kvre7Smei6UZwPzn3BhMiuO/4k7LXs0g5Lue8rYHAAAAAEBX3ojNvr/IdQCuZgCnn2D7jhdAAOiYAMD63/pfAFBPAOA1GQAO9REAnH3Y851Ao1cAmM8AbrBqud5NxrDlrJu8/T8AAAAAsM4byVj55w8AzjYAl/7U9h0BAAD0TQAgALD+t/6vJADwggwAp1bsfduaSh/9Uetv/09I7FHw7f+bCABavEoGAAAAAFCpN1Iy9M8fAATmAYbvCAAAoFe7Vf0kABAACAAEAHUEAF6WAeCSpgOA3eOZZpf9AoAB39e/m4Nf8JTz2ggAAAAAXPdGYrb+h4t/AQCVjP4FAADQqy+05rOFWNsLAKz/8wQAXpYBYN7S1e9Qa+mcBx/r/zznc/c/VgAAAABAJgKALt/pH1wBAACGZf0vABAAWP/XEAB4NQaAFAQAIxxMAUDfJ7MGAAAAAICBvPHGGw5CumObx6WJfMe1gHE5AgAA4JIf/OAHiW7Z9F8AIAAQABQPALzIA0Aigy+nhzqY1v+9rv8nDQAAAAAA3TuchjsaGQ5yZkfr/84aAMtyxAAAwFk/OJDoLqz/BQACAOt/AQAAdGmopbjj2d/TGnL7ER9Ane/9X+EDAwAAAIDIrP9zHuR6CABAAwAAHUsdAHj7fwGA9b8AoGwA4HUeAJJqdCxe54jZsr+GAKCG5zrnYzh9MFU9SAAAAACgDW9USQAAAgAA6FXSAOALLRAA4O3/Ow4AvMgDQEQrJsJ1jsVrXjAb95cNAAb8oZ756Q45el4YAQAAACjvcPDtaBR/CmQAGgDQAABABoO//X8NAYC1vfW/ACBRAOAVHgBiWbSqr3wsXvng27g/w/p/y+p92B/wqwcTAAAAAMo4XXs7JjU8CzIAAQB4bQSApNKt/ycBgABAACAAKBcAeHkHgFgON8FXx77NBQAagDEDAO/9H+WHYv7zz/70eUUFAAAAIL5LAYAeoMjxlwEIABhk2X/4D5IAAOiMAEAAIAAQABQJALz8AkBci2bB9Y/Fa15+2/dnCACmFjqQsmfduq89/XjIKe0FFgAAAIAIThsAlwUocuRlABoAEAMAQAcEAAIAAYAAIH8A4LUXAKJrLgBY+gjrPNok3YuboUf8iZhpAHI+pwAAAACM6NLC++iPHKicB79CP3NCAAAyAADgki80QgCAAKCbAMALLwAksmin29YVAKqaINv3CwCK/FBHORpHX1vkaQUAAABgOIH7bweq4MGvtgFoKwOwFEcAsKccAIDUvtAOAQACgA4CAK+6AJDI0pFutWPx04/XNkG27882Fo91m82t2DMf5JB7XPGYvSwDAAAA8BNXR/9H/+yI5Tn4DTUAMgCoKgAw7geAGnyhQQIABACNBgBecgEgnRWj2wqX4k0MiI37s2UAEd/zXgCw7n63P1ovzgAAAABM08HEf+Zd/10QINFh7yMAaKgBsBdnhABg/3GFAABk84UvfOHwfwUAAgDrfwFAngDAyy8ApLN6blvbOlwAYP0/f6hT/2hUcvrNHNJ0PyPrbrZUqwAAAABAw7YHAPKAdUdbA6ABgIgBwMxnCgAAIIWmp/+lGgCbewGAAGBjAOC1FwBSi7KQrmEdLgAQAMwc5/zPadkzLeR8a+WnIO5hAQAAAKBVZwffp3909csdydVHWwAgAIAV6//wz7+UDQAAW3yhFwIAAYAAoKEAwGsvAFSuqml4Q+8abuKfPwBIdGGBagOAgo/w0i3HOjGiXLTEqzcAAABAS2YG30efEHILjufGY95oA/BEOwzH6SkAiHj1gMn1AQBgFQGA9b8AwPpfAAAAHKltHb5/43MHzfp/4y2ffn6p961Peo4lurvMp/q6x+kFHAAAAKAZVwOARV/ueK471C4CIACAbOv/SxnATACgDQCAGQIA638BgAAgZwPgVRcAilg6ja1qI97EqNfEP+kwPeJSfONTVudpdvqnKe4o/6m+4tF6tQcAAABoRsQAwMFcd5wFAAIAWDrcj9sS7G/w0iuYAAAAZlj/W/+PHAA8l5IAwPofACqx+r3SKxmLCwC8/f/2e6nhG2n0dePoCBTPgc7+qfU/AAAAQJNWr/8Pv9ZhXHGQewoAWmkAbMcRAFy6wZlXMAEAAMwTAFj/9xoAfO5zn/vc5z73XGkCAOt/AChoy4K5mwV5wQNu95/tkEZ/Uo6+1gtI8fPHO/0DAAAAwGId7/7bagBsx7H+X1ECzF8fAAAG5woA1v9drv8/d+C5OgzeAHixBYAitmyye12TZz7g1v85D2msJ+XoC6cqL0MR6ziHvOO+AAAAAACAArzHf/Qj2XEAUH8GYD6OAGBFBnD4RwDAKQ2A6X9nAcDn7vdcTcZsALzMAkApW5bZAoDtx3waNQlIfQ6H3/X29X+FJ2GsR5Uon8jQAHhtBwAAABiCACD6kex7/V95A2A+jvV/+H2d3t3+g17SAeCIAMD6v/UAYLf1P13/awBqaAC8xgJAKRv32QKALce8wmPY4hO05ZFs+UbqPA8TPZ6GLgIAAAAAwECs/+MeyUECgGozAAtyml7/TxkDgKuPBAA4JACw/m83APhcgOfqM1QD4DUWAErZPqvVAAQepSYOYHPPTqnvovKTMP8Dq/CkkgeM48Mf/vCHP/xhxwEAAABgpQHX/xoAaPS9/63/AWAdAYD1f3M+t8RzVRohAPDqCgBl9dQA1HyEmziAI7z9f5TvouaTsOBjq+e8SvftuwRBbT58wNEAAAAAWEMAIACA/i5HAAAcEgAIADpe/2sACjYAXl0BoLjtY9n6V+aHn5P/bdGbOHoCgPDHH/10iniIqopkqgoAtj9HLV5+ZAQCAAAAAIBNxlz/VxgA2G2DDAAA0rH+t/7veP1fcwPQXwZg/Q8AtenjIgDrHl6G49nE0WvxygylHv/ZCwIsfcBHH89zTCLeeA1PU4oHEPFryUYAAAAAALCJAEAAAEvn9db/ANAWAYD1vwBABhAxAPCiCgBV2bhkbeUKABk2u9b/+a+xUPzB53yutxyZzl4i0t3v9q8FAAAAgGYMuP6vsAGwKQcBAACk84VmCQAEAN00AH1kANb/AFCtpgOAmTdrL3IRgFYOmgBg48MO/JL6j+fSh138yar5BcrfJgAAAAA0Y9gAoKoMwGgbBAAAkJT1P32v/5sIADpoAAQAANClChfnpaa64bepAajwlFv3MDI82tp+ros/XylOm7iP1t8L0zR9+ICjAQAAAFCjkdf/lWQAFtsgAACADIrM963/EQB0kwF4FQWAtrS4ZV/6eIofYev/Sg5d0p+R0/sKP2nrPEUrOdXrP8GG/evjw9f4GxYAAACgCoNP/wUAIAAAgHEUef/+sgGAVf0g6/+2AoDmMgAvngDQnKUb1kYbgKqOswCg7EFr96evyCna61PW96mVx4eD+asWAAAAoCTrfwEAyAAAYBxFAoAVDYC3/7f+HyEAaKIB8LIJAI1qPQCYGmkAbvSurYPW6E9fqQdZ/Flr62dwnL8+jP4BAAAAGmD9LwCAoQIAeQAATBkbgBoCAMN6AYAMQAMAAMNaNF1tYnEuABAANNcAdPyqsvFp2n5werosRlUOt/5Xp/+SAAAAAIBirP/XBQBxswFbbcjQABx9XAwAwMgGCQCs6q3/NQDW/wAwuEYvAtDQJFcAUOERa+5Hr4NXmNPjv1/5J3qOvBbVIO5lAc7GBgIDAAAAgDnW/4um/CmKAkNtSLH+v7T4X3TRAADoVfSh//x8P/xrBQDW/wOu/6vNALxUAkAHwvepTYzRa9vdCgDqPGL1/Nx5wZl/jlYfIlVSJRIFAIc3qwEAAAAAuGLk9X/4cD9FV2CoDUnX/6f/KgMAgCleABAyxA/5zLjTfwFAlwHA75zzXI9M/wGA6EKWqe0GAOHr2+jzXAFAnceqnh+6AV9kVvw49/pz56+eRWYCAA0AAAAAwBVHE/ypUBXwM50SAECR9f/qGwGA7mULAEqxre+sAfidCzQApv8AwFWL9vGtBwCXvs0UC13r/2oPVCU/d72+mMR9frv8uTtasXPVpQBg0gAAAAAAhBj2jf8LNgDm2lB5TjDdKwr8HQFAfwQAtB4APNc1638AIJbwrW3Hm/UUS3EBQLUHyk990peRdVlOlCerrfX/2Tk7M46OmMMIAAAAsIDdf+YGwMAaWkwCrnJJAQAaIgCgkgbgd37nd7z9f6kMwCshAPQtylC+/osArP6mIh5Y6/90R2npTY3zE336R6lfQEqdbK38+Hz4Mn8fLeUYAgAAAIQy/XcFAGBRCRA9HgCA/AQA1NAA7Db94ev/sw1Ar1WAAAAA2G7YBiDpUlwAkPQQbby1Dn5mtx/G4k9irEfY0I/Ph6/x99FSjiEAAADAdYfr/ClZD/Az43niAitqcBkBAKhBfw2ASX1bficGlwIQAAAA88JHt92M11MvpK3/0x2l7TfVzU9r8Se3hlOupwDAhH0RxxAAAAAg1H79P8UOAH5mVE9cZgkNMgAAqIQAgKYbgOcGIAAAADbqKQCYllwKIEMAEHIv1v+ZA4DiDcDqB1bts1zkITWX0Hx4CX8xzTt7oAKPoSMMAAAAjMv039v/AzIAAIYiAKDdBuC5MQgAAIAtFi2AW9mpb9wQFznUEVMHAUC1DcCW7zH1z2CRJ3TdQ2rxGhofXs5fT0uFHEOHFwAAABiU9b+3/wc0AAAMqJvrABjTDxUAPDcM638AYKPw+W9/b1Tf1jS84KUDCn6zVx9JJVVDxO+61M9dqec0w9PdYgBgqr7C1aPnqAIAAABjeSM2638BACADAKAtAgCs/wUAAECvFs1/OwsAKnwW1l3oYJArAEQZxzf0FF/6qkTPfsGntXsfjsRfWFddPW6OJAAAADAK6/+c638BAKABAKBaAgAEACMEAF7rAGBMi+a/1v/pnoLV32bqY1vPRQCi3E7lz/Lhg1z6R11eB0AAoAdYxLECAAAAmKZp2s3WBQDW/4AMAACaDgCM6ccJAJ4bjAAAAChCAJD0eMb68mqPcJSH0dw5s/Hhza//A08nlwLoKQAwbb/EsQIAAABGt1+uCwAEAIAGAAC8/T/1BwDPDcn6HwAowvo/0cHcciPpnqzU58+0fJu+5RspdfJsDwC2P0cCgM4CANP2SxwoAAAAYESn43Xr/9TrfwEAIAMAoH6X5v6uAEDxAOC5sQkAAIAirP+jH89qn6l0D2nRg9z+fTXxU7Pua2M9jNZfE8YMAEzbZzhKAAAAwCjO7tet/wUAgAYAAKZzDcB+ZF9tAGBJP8gVADQA1v8AQH4agP6eprOfX8mDjHIGVv50BH5hukeS+vsSAGTjpW/PYQEAAAD6d2m/bv2fOgAwawZkAAA0ofJ3+rf+FwBoAAQAAEBmAoBunqNLn1/Pg4x7+lX4jIR8SeoHk+gZrOpFY5AAwN79kMMCAAAA9CzRe/8LAEIyAINmQAMAQCsaCgBs6IdqAAQAWzIAr2wAwGoCgA6eo/kvqflxrj4Jj7687PNSyUly6RFGeQbrfPUQAAzFwQEAAAD6lG79LwAIiQGsmQEBAAANsf6ntgDA7n9LA+A1DQDYSADQ7hN09UuqOpGin4RTodShrTNn+zNY4evGOAGApfuOIwMAAAB0y/o/tcPl7mkDYM0MaAAAaEvlAYDp/FABgMX/xgzACxoAsJEAoMUnKORLajuRUp+KTpWzB3P7M3j1k6eue4APV2PMM/nw23dMAAAAgN5c2qwLAFKs//es/wENAACts/6neANg6L+xAfA6BgBEIQBo6NkJ/6raTqTUp6JT5dLB3P4MhpxpAgANwBan3+PMRzQAAAAAQA9mZusCgHTr/8MGwIgZ0AAA0C7TfwoGACb+2zMAL2IAQCzW//U/O62fQklPQifJ/IGN8rTW+TIyVADQ8d495LsWAAAAAABdsf7Ps/WfaQAsmAEZAABNs/6nSABg2R+lAfAKBgBEJAAg6fmT4gycCl3rYMBnttqXkdECgC5X74HfsgAAAAAA6Mf8nP1oxy8AiDX6B9AAANCZ1Mt+638BgPV/igbAaxcAkIIAgERnTrpzz8Ef+WVkzACgv+27AAAAAAAYy9KxuwDA9B/QAADAWYFr/g9+8INL39Hf+n9kzz33nN1/ogzAqxYAkI4AgBSnTdxbcC55PREAHM3fm17DCwAAAACAsWyZv4+8/rczBjQAAHAkcP2/s2jNb/0/eACAAICc/uqv/spBACAKAQDRz5nVt3D6OWc/2VPgFWbAAGC/gO9gEL/o27T+BwAAANq2cQdv/Q8gAwCAvcD1/3wGsCgAsI8XALCuAfB6xVl/dcDRAGA7AQBxz5bVNxJ4F54FLzJjBgBlN/ER71cAAAAAAIwlRQBg+g+gAQBgTIHT/w9+8INnx/1nJ+DW/wIAIpqmSQDAPAEAAHEJAIh1nqy+kVi3z4AvMoMEAFOJKwBE3+IHhg3W/wAAAEAnUlwEQAAAoAQAYEyL1v+n+/7wAMAyXgDA6gBg7/QjMAkAAEhAAMD2k2TL7UwCAKeQAKCyN/5PYVEA4EcGAAAA6EHcBsDuH0AGAMCwFk3/j/b9lybg1v8CAJIGABoAACAPAQBbzo10d7H/U0+E1xkBQHPyf3fiAQAAAKAi2yfy1v8A2gAA2Fm0/t/t++cn4Bb/AgAEAABAHwQArD4x0t2F4+81RwBQ26g98FEVWf8LAAAAAIBa/AzW/wB6AACiCl//hxAAaACIvv6fDwMAAJISALDilFh9myF34SnwgiMACDyeGebvgQ+sSNXQ+gUTAAAAgN4Y+lv/A2gAAIgobgCAAICkb/8vAAAA8hMAsPRkSH2OeSKcbAKAq/LM3yO+/X+pxwYAAACQia2/AABAAwBAXAIABACVBwDTQQPgJQsAWGfLeFoAwKIzIfUJFuWs5ugpaPd8Gy0ACDx6Sbf1i+4i+rdWybcPAAAAsIytvwAAQAAAQFwuAoAAQAAAAPRt+xZfAMCiMyHp2XX2az01G5/Tps83VwA4K38AcPbuigQAkysAAAAAABUy9xcAAGgAAIjI+h8NQOXr/+leAOD1CgBYTQBA9BMp+kUAQu5l5iF5drY8oaufrEpOuaECgMBp+6VPm/9g4L0UDBsCJb1xAAAAgJUs/q3/ATQAAMQiAEAAUH8AAACw3cadtACAKVkAEHhfic5tz2P4oSvyQy0ASHFZgMMvaejxL6UBAAAAAKpj9y8AABAAABCF9T8CAAEAAEAgAYAT4OqzHPHpdgrleQZXP+/1v/KMEwAEbtzPfknBB5l6l5+tNAAAAAAIZfcvAADQAAAQi/U/AoAK1/9iAACgQuFD/wEDgBG+0903mPPJtf7P8CO8+ge/nlceAUD4xv30Mzt4p/+r36kGAAAAAKiC0b/1P4AAAIBYQlbdH8zLjF4AYP0/CQAAgFotWgCPtv43VU/xpDuqBX+EL31VkbNdABBran/6OQIAAAAAgLQs/gUAABoAAKKrZPcvAxAAsP+pPJsEAABUYvV6OOQ2mz4mzo2Cz6MGY8XP79WfyktfVfxZFgBsXN6ffrC/AGDSAAAAAACVMPcXAAAIAABIpIbFvwZAAMDu53HmsgAAAPUIXwBf3d1O1cyLiXJWFJ+GeyJiHairP7kFH7wAINH4vo/p/9XvxUsBAAAAkI+5vwAAQAAAQDofrI89vQBAACAAAAA6sGWS6+i1+1w7GpU/Tdt/ftt6MREALFq9d7D+v/qNeCkAAAAA8rH4t/4HEAAAkMIHa2VSLwD4/9m7fx05rnPdwyXsgBhHO/QdEBM5GIa6AQIEHImXcDJdgLLOfAs6AQlhFHPDTvYNODVkJ84MnFs5wZjjZnd1df1Zq+pb33qewLCkYc9MdVUzeX9VHQYAgwYAAEik4DzXwWzr7XY00l/CTX+e9BkArHsUwLC2B4hwAsf/CQEAAIBe2P1rAAA0AAAUJwBAAxA5ANAAAADtqjrYdXjDvuOOQyeXcKaPlHc9WXfw25r+z/yxXeMAAADArkz/BQAAAgAACvpDYCb1AoAOGwABAACQxpvKHOGY77jj0M8lnOYjRQAwR1vT/5k/ucscAAAA2JsAwNgXQAAAQCkCAAQAYRsAH1AAQIve7KLGT+u9234kHYdOLuQ0ny3vOtPnyeyAAAAAALFY/wOgAQBgOwEAAoCwDYAPKACgCRdr4Dd7KfKTe7BAwdPAAUz2bgZ8BIcAQAOwwvTRkAEAAAAAx7D+B0AAAMBGAgA0ANEaAACAVlwPgpsOAEZ/Ee/y/OPpICS7rs+vgiCpjADA+n+pRYfl/fv3PgEAAACA/Zj+AwgAZAAArOYhAAgANAAAAKu9Oc5uP7Z3eeYhdRCyXtRDpIc8WP8LAJaaeWTen/E5AAAAAOzE9B8AfxsCsJoAAA2ADAAAYIU3RxvW3qr/qMcOLP0J2zoZXBFZr+s4J6Tb/1v/r7AiAJABAAAAAPux/gew/geA1TQALxQIGgABAADAOm+6tOjXX30wnV0cdS3n/pwx9O/K6LG6OGjvxzh0AAAAQHUCAAABAACs1kMA4BEEGgANAABAPRdz4U4CgBqPEWg3AJArUPXsKk4A0Lnrg6YBAAAAAI5h/Q8gAACAdQQAAgANgAAAAKCSN6wKAF7/sa132Qm/82EfukkvBAACgO0mngDwQgMAAAAAHEAAACAAAIDVBADW/xoA638AgEpM/6cPxfXhavctdrbvdjTWFSY+TAQA3Zp5rDQAAAAAwAE0AAACAABYJ/1DAOInChoABAAAQFbW/xMNQKa3eJhXOPRzwu9/Tfkw6TkA0ACUMtEAiAEAAACAWgQAABoAAFjhDyFFDgBkABoAAQAAwBxdrfx7Xr07Asce5x6OedlrVgDAtPe3OTgAAABAeab/ANb/ALCCAEAAIACw/gcAqCT99J+L99px2PM6Ov8Cnx6dBwAagLLmNwDCAAAAAKAAAQCAAAAAVsjdAAgANAACAACAAwkAoNLl43NDAKABqG06APBwAAAAAKAY638AAQAALJU1AGjlGQUCAK4DAEkAAJCPBoDg5+fdszfaJeOzQgCgAShlxYJ/zvMBAAAAABbQAAAIAABgqZQNgPW/BqDRAMAzAQCAruTLANQCTZ91E198yM956wf2gSAA0AAUsXrB//42RxUAAABY47uWmfMCCAAAOIQAQAAgAAjSANx6JgAAQHpv+uCNbuJMG/36gj/A9h/YJ0CLAcDLbyoDCGX7dl8DAAAAABSjAQAQAADAUvkaAOt/DUBzAcCtZwIAAHRlepOtAaDG2TXxNpV9y1acBp2cQokDgOHr6P/1l9UAxDE63F+x4JcBAAAAAAUIAAAEAACw1B+iOuQe/wIAAcCxAYBPJACA1QQAbDk9dv4BVv/MLtv4AcDF73hrlK8BONb720q9lIMMAAAALGD9DyAAAICl/oAGQAMQowQAAGAjAQArzoqdf4bVP7YLtsUAYBiGiUW+BwIc5WKpf73dXzTi1wAAAAAABWgAAKz/AWARy34BgADA7h8AIJn4AUCNbXeL7cHqn/DiT916nVLHYfsh3RIAuEhbCQCGybn/HAKA3Vxs9DeO+As+UgAAAADo1HfNsusFEAAAcBTjfg1AEd9///33339v0y8AAACI4007pn+Ljb/s3T9y+LtT6j2t8dst7TrKfjvXZisBQKkjIwDYx/U6f/uCXwMAAAAAbKIBABAAAMAilv0CgHVb/1vM+gUAAADRNJoBLO0EJl72+kUWTcxrPFvg7qHYeAxr/5wTX1bke7keb72tK16wien/OQ1AbaPTfA0AAAAAcCQBAIAAAAAWsewXAGyZ+2sArP8BANrSSgOw+nb+K77d6+B+3cvGeReuX3/mz/PLldGfebh3m/9SAYBrcOkJJgA4KgDIlBmUmu/PfxGRALX961//chAAAABaogEAEAAAwHyW/QKAjXN/AYD1PwBAJotWyAcGANOD/vnf7uJ2+1t+tbs/WKWDNvM+8b8sMXF61D7x+ry+pk+/ja/8rrIaByp+AJDyIQOvW/ziDcCcL/P3LwX96yuHAgAAoDEaAADrfwCYz7hfAFA2ANAACAAAALoyc2e/6E7nq19q/k916zWHGM9JWPRbXLwjv2zmrK53sex/JbYYAAyFGoAdfrY0J+fFEL/sowDmfI0GgIIEAAAAAK36rmVmvgACAAB2ZtwvAKjRAMgANAAAAF3ZOGef/1LbHyOwrk/Yee5/fUDuvgW/FOJkTnYZ9hwA7PCMgjQnz/UKf/s6XwDAUaz/AUL78uXLly9fHAcA4BYBAIAAAABmMu4XAFQKAGQAAgAAgA4t2vef/+PEH6+61B8OCgBef9/RY7j0sJv+c+sKajQAGGI3ALkDgIv/s3GdLwAAAL7x5YyjAQBc8xAAAOt/AJjDsl8AUHX9LwPQAAAA9Gw0ABhuRwJbniGwz+MCCn7Hgqz/mbi+6u3+BQCZAoDhxhy/6jpfAAAAnRptAFQBAMArDQCAAAAAppn1CwB2CwA0AAIAAABe3BrfD3UCgIk/dfcnDLv4v2D6z8Q53NyN/89F/mnzBQCv9pzjv7/i+gWA/KYDAA0AAPBd40x+Aaz/AajKpl8AsNv0XwMgAAAAYL4VU/51y/vpBmDFDzn/j5di+s/dU1QAcP4DH/JbXP86KU+5u/P90S94P8b1CwAAAL0TAAAIAABglEG/AGD/9b8YQAMAAMBqcwKADo/JK7t/bp0kTQcAQ9EGINovkulMm7Pdv7XyFwAAAAAAlwQAANb/ADDKoF8AcOz6XwagAQAAYJ3Od/+//PLLaPxg988t7S7mq/4Wh/w6AoDRob+HAAAAAACXrP8BBAAAMMqg3/o/SACgBNAAAADAXec7/qXrf0evc61P/2v8IjN/qRq/deIGYI7Rfb8AAAB69OUrhwIAuEUAAGD9DwDXbPoFAKHW/z03AD6OAACI4M0NEX62603/nAbAe8qr0bn59L8MOFLfOQCodxw6Wf8vWvMLAACgOwIAAOAu638A638AGGXWrwEI2AC8ZgA//fTTTz/9JAAAAIBK3sx27M85elP/6QDAm0tWuwUAYR+D0Ir398z5Iw4jAGRm/Q8AzOEhAADW/wBwzaZfABA5A/hpzPV6fuI/CQAAAOCWNwsd9XP+csPoD2n6T3rHPgFAAzDf+3nu/ilHEgAAALr2XRY2wYAAAAAKsukXAEQOAG41AOeL/7t5gAYAAACuvVnu2J9zzvr/8CcVwD7e1XfxvUa/qTdi2vvZ7v5BBxMAuvblWw4IAHTou0QsgwHrfwAowqZfA9B0ADDzEQECAAAAuBa/AWjlGQVwlN0ygEEAsEqpBsCRBIB+Wf8DAEOuAGBdAyAeAKz/AeCaTb8GIHIAsK4EEAAAAMAcb9aK+eN5Q+nQbgHAxfdy5Ofb3gA4hgDQKet/AOBVtwGApwcAAgAAuMWgXwPQRACwqAHwEAAAAJgvZgNg/Q9z7BkAnH87R36ppQHA+Z9y9ACgX6b/AMCLPgOAJtb/v7vNGBpM/wGgNoN+AUCyAMBDAAAAYJ1GAwBvHD3bYfc//e28BfMtDQAAAAAA/q2rAGDjcwOO3f1rAMD6HwD2ZNOvAfg+vPQBgAYAAIAgIszurf9hvmMbAMd/Net/AAAAYK7vMpoe/YcNAH43m2E0WP8DQG0G/QKAZAGABgAAADaKHwB4jyjr6asWf/h3Nd39dk4eAAAAgLq+61tz03/rf7D+B4B9GPRrAL5vQQ8BgAwAAIBQdt7fv76y9T87ezrT7m/xbhcX38vJAwAAALAHAUAr038BAAgAAGA31vwCgO8b0UkAoAQAACCU3fb3Fv8cJUcAcGG3BwJQ1vtvOSAAAADAMAgAmlr/CwDA+h8AdmPQ33kAkK8BEAAAAEBZtYf41v8cLlkAMEEAENb72xwcAAAA6J0AIP7u3/ofrP8BYGcG/QKA79shAAAAgPhWzPft/uFApv9xyAAAAACAEQKA+NN/AQBY/wPA/mz6BQCeABDN27dv375969MJAICGrLt/v9E/EXRy+/9ppR4FIBjYTgYAAAAAXBIAxF//CwDA+h8A9mfWLwAQAERb/wsAAABoyJsxS/+Iw8ghnp6eBAAv3i205aUc7WlhAwAdAgAAABxDABB//S8AANN/ANifWX/tACByOSAAiLn+FwAAANCodet/DQBHefrq4v9369Zef8Vw3/p/i2gNgAcRAAAAwMEEAMUX/2XX/wIAMP0HgENY9tcLAII/OiDH7j9HAPD2Wz6XAABIyfSfUK7X/x4IUHyjb/q/TpwGINqDCAAAAKBHAoBo9/vXAIAAAAAisOyvd/v/lyG79f8O6/+mG4C3V3wuAQCQkuk/AT1dcUyI49gGwPQfAAAAohAACAAA038AuGDcX3D9f/EHX+fsAoAdAoAc038BAAAAiZn+F2SnXuQYjnJkCMsQHwAAADolAHh1/mWLlve/q8xyGqz/AWBn9v2LAoBFf/Bi1G79LwC4O/0XAAAAAOcuJukv/z/UTr3d0fzTbU48AAAAAALpMACY82Xz5/i/q894Gqz/AWBn9v0zG4B1fzBmA5AyAGiiAXg7gw8lAADg1eg2XQBQ6dgKAGp79+7du3fvHAcAAACAZb5jYQOw2+7f+h80AABwIPv+emYGAHtGAt83Ik0A8HYhn0gAAJDYrX356Pr8adLw9YEAMX+jVt4LAcCe3n3lUAAAAAAsYOi/4iEAe7KcBut/ADiEmf7OAcDE6t3t/9M8BODtKjtc73/+85996AEAwCGeZpvzR86/4PDfKNnb4Vyt5zoAeHebwwUAAADwb7b+GgBAAAAAF8z0dwsA7hIAbFn/79wAvH37tuD0f4cG4M9f+dADAICdPS035w8OR0/wU67/NQC1jU78NQAAAAAA95n7CwAA638AeGWmLwDIFADs0wCcT/YLrv8FAAAAkNK69f/SP37IL5X1HXHSVjI99Lf7BwAAALjD4l8DAFj/A8ALM/04AcAODUDnAcCt2/ZvCQDKqnelCwAAAOAQq2//P/oKEy94/vX7/EaJ3xTnbT2d3Oz//ZnE72b6XxAAAAAisvgXAAACAAAYBADtBwCL/mwPAcD1jflHJ/sB1//1AoA/n/GhBwAAeyoSACx9wYsv3v4rXH/36R+y9TfFeVtV7un/8O36P3EG0EnkAAAAAOFY/MdsAAypwfofAPZkox8tAFgaA2z/IzkCgNWD+4lx//7rfwEAAAAks339v+41r79s+28x3Fj/t7iYFwCwGw0AAAAAUJ7FvwYAEAAA0Dkb/bDr/5mb/hXZgAAgskpX+p+/5aMPAAD2UXb6v+5lt4/aJ/54yvW/BoCyTOQBAACAwsz9YwYAMgCw/geA3Zjpxw8Abk38tzw6QADQWwAweAgAAAAcodLW/Gmt0deZ+S2m/32+N0UJQEECAAAAAKAkc//IDYBdNQgAAKA2G/1GA4Dtzw0I3gB0u/6vGgC8SBAAPHzlMxwAgG49lXb3W0x83x4OnVMOAAAAgFjM/QUAgPU/AN2y0e85AIjcAAgAdtNcDPBwxmc4AAA5rFiZP1Uw/eLT37S5Q239DwAAAEDbzP0jNwAyABAAAEBVNvqdBwBpGgABwCIXDwH485iwn1oP3/IxDgBA61ZszZ+OMzSeAVj/AwAAAJCErX/wAEAJANb/AFCJgX76BmBmDNB6APA2lx2u/dGhfysNwMMVH+YAADTtqTUTP3PKo+0UBQAAACAoc38NACAAAKBD1vmdrP/nlAATXxy/ARAArHBr6B88AHgY48McAIDmvM7Kn3KJf9hT/l4AAAAA9Mvcv4kAQAMA1v8AUIp1fp8BwKIMQACQOAAYzrb+t/7T4R9TD7P5SAcAoCFPeSU+7M5bAAAAAIKy+G8iAJABgPU/AGxhlC8AmG4AXhb/dx8OEGT6n7IB8DF1QQAAAEAyAoAWD7vzFoC4fvvKoQAAgD5Z/DcUAEgCQAAAAEuZ4wsA5jcAxwYAPy3nIQDpCQAAAMjB+r/dI+/sBSAoAQAAAGD03+j6XwYA1v8AcJc5vvV/EwHAT6sIAHbw17/+9dgfwHMAAABo3VNq6d8CJzAAcQkAAAAA0/+mAwAxABRc+Vv/A5CJOb4GYHUD0EQAkKwBCPgZ8tevDvwZBAAAALTO+r/p4+8EBgAAACAu0/8c638ZALj9PwCcs8W3/l/dADSx/hcA1PbXM0f9DA8z+LQHACAs6/8Eb4HTGAAAAIC4BAC/y8ViG0z/AeicLX76EX/VBsATAAQAL+I/AUAAAABATE8d6OddcD4DAAAAEJQA4HcZWW+D6T8A3bLjN/0XAAgAtot/+38NAAAAMT31oZN3wfkMAAAAQFwCgKwsucHuH4DemPILADY2AE2s/wUA6QkAAABoWu7dvwAAAAAAAEIQAORm2A3W/wB0wo5fALAuADjqxxAACABeXO/4BQAAADSthxv/Bx/HCwAAAAAA6IIAoAdG3mD6D0BiRvwCgBUNwLE/gwBAADCcbf2v/40GAACAdrnrf47j70wG2Mff//53BwEAAGAlAYAGAAQAANAuI34BQFt+2sb6P42HzRxDAACiyXfX/+am8AIAgFb8/SuHAgAAYCUBgAAANAAA0CgLfgFAbwFAmgyg20+t8+2+BgAAgASekur87XBiA9RWNQD4nxscdgAAIBUBgAYABAAA0CgLfgFAh+t/DUC7Lrb7AgAAAFqXePrf6A5eAADQiqq3/xcAAAAAXRAAIA/A+h8AGmXBLwDoNgBIkAF0+JH1UJq/BQAAONZTXp2/Hc5tmOP5+dlBICwNAAAAkJ8AABkAAgAAaJQFvwCg5/V/6w1An59aAgAAAPZUe8wtAAj4dgsAYB/Pz88CAIITAAAAAJl91zFzfxkAAgAAaJr5vgBAA9B0A9DnB5cAAACAfeyz57b+j/ymCwCgquevHAoiu17/SwIAAIAMvuubob8MAAEAADTNfF8AoAFougHo84ProTR/FwAA9Ol1pX0x177491VX3W7/H/Os0ADAPgQAtOh/bnBkAACAJgkA0AAgAACAFpnvCwA0AE03AH1+cAkAAAAoZXq3XXXY/ZRavlNCAAA1WP/TLg0AAACQhIcAYP2PAAAAmmO7LwCQAbTeAHT4wfVQgb8OAAB6dmu3XXXb/ZRdsvOhyKHQAwDkIwAAAACaZ/2PAAABAAA0x3ZfAKAB0AA0RwAAAMBG17Ps/WfuAoDgp0elAOCiLXExwuAhAPThH//4xz/+8Q/HAQAAiEgAgAAAAQAANMd2XwDQrvMFfOcNQFefWg91+OsAAKArF/Pr/Zfu1v9NnB6VAoBMxwq2e/7KoSAx638AACA66380AAgAAKAttvsCgKZ3/xqA3gKAh2r8dQAA0JXz7fUhe3cBQBOnR9mjkfJYwXbW/6T3j68cCgAAIDTrfwQACAAAoBWG+wKABLv/qg2AhwBEIwAAAGCL0Sn2cEQDYP0f/DxxxAAoxfofAABohgAADQACAABoguG+ACDH7l8D0E8DIAAAAGCLUDNu6/9uzxMNAAAAAAARWf8jAMD6HwCaYLgvAEiz+79uAErlAQKAaAQAAACsFm3Gbf3f7XmiAQAAAAAgIgEAAgAEAAAQnNW+ACDZ7v9i6F/wEQECgAheNvoPNfl7AQAgt4Azbuv/zk8VDQA9eP7KoQAAAIA2WP8jAEAAAACRWe0LAFJO/2c+H0AA0JCHvfh7AQAgt5033LeG3aP/aP3f56kiA6AHz2ccDQAAAGiDAAANAAIAAAjLal8A0NXuP30AkPjDSgAAAEARe663Z/6nIddDAJwqjidcGw0A7vYAagEAAAA4mAAAAQACAAAIyGRfANDV6H9LAOD2/8d62JG/GgAAcnvCZr2pU8U1SxoXDcCcpwF4YgAAAACEIACw+wcNAACEYrIvAOht958+AEiZATzszt8OAAAp2eVbrrd4wrhySeN5zJw/4tABAADA8TQAAgAQAABAHCb7AoAOp/+JA4BhGFJmAAIAAAC2M8c3Xm/xnHHlksnqAEADAAAAACEIADQAIAAAgCBM9gUAAoBkAcCFpjOAlyH+w0H8BQEA0LrzCbUhvhX7llPI0YMinm+Y88WOHgAAAIQgABAAgAAAACIw2RcAdNsAdBIANOpiiC8AAABgHct7GUCC88eFTBrzA4ClDwoAAAAAdiIA0ACAAAAADmevLwAQAAgAAnqIwd8RAAAJ2NxrABKcPy5k0pgZAMx/SgAAAABwAOt/AQBoAADgWPb6AoBuG4CflrP+38FDJP6OAABonbW9BiDH+eNaJpN1AYDjBgAAALEIADQAIAAAgAPZ6wsA6vnTbS2u/+MHAAk+kR6C8XcEAEDT7Ow1AGlOIZczyczZ97/+ewEAAAAAxGX9LwAAAQAAHMJeXwCw5+5fACAAmHbUyt/6HwAgHwt7DUCms8gVTTLnu/859/jXAAAAAEBoAgABAAgAAGA3lvoCgEOm/xECgJ/Wsv4v6O7+XgAAAMAW5vUagExnkSuarKYfAnD9ZY4YAAAAhCYAEACAAAAAarPUFwAcMv0XAFj/D0cv/keH/gIAAIB8zOsbagBibtzFErAPAQAAAACkogEQAIAAAAAqMdMXABw1/Y8QAyQLAFr52Dmf1McPAPw1AQCQgG29BwJkOoVc0SR29zkAAgAAAABojwBAAAACAACowVJfABBh/X9IDJApAGji0+Yhtuuf018QAAA52NPLADKdQq5oEnv+1q0vcKAAAACgMQIAAQAIAACgOEt9AUDAAGC3GMDt/3fzEJ6/DgAAsrKkVwJkOn9c0ST2fGX0CxyoOD5//vz582fHAQAAgFk0ABoAEAAAQEGW+gKAyOv/2hmA9X8lD83ylwIAQKMmFtIG9BqAUqeWAACqeh4zzHgyAHv6fMUxAQAAYAEBgAAArP8BoAhLfQ1AEwHA4Q3A26gCfqo8tMxfCgAALbpeSJ9Ppa3nZQAFzy4BANT2PI8DtbPPNzgyAAAArOFRADIAEAAAwEZm+gKAVgKAShlAu9N/AYAAAACgT6MbaON4DUC9800AAHt6ns2x2sfn2xwcAAAANhEAyAZAAAAAq5npawAaWv9X6gHaDQBifqoIAAAAqGR0A20TrwHY4ZQTAMBubm39Tf/393nSyxc4StCLL185FAAAFGf9LwAA638AWMFGXwPQ6PS/bAng9v+lPDTOXwoAAJGNzqAN4jUA+5xyGgDYjZv9R/B5HgcKeiEAAACgNgGAAAAEAACwiIG+ACDB+r9eA2D6v1SCAEAGAAAQ08QS2iBeBrDbKacBgB3cWv+LAYq4O9z/vITjCR0RAAAAsAPrf+t/EAAAwEwG+hqABNP/UiVAKwFA5I8UAQAAAJVMbKBN4WUA+5xyGgA4lmcCbHR3tf95OUcVOuIhAAAA7Mb6XwAA1v8AcJd1vgYg0/R/+6MAIjcATXykJFj/CwAAAKKZM4C2g6f4Jr6J31cJQFduPRmAOaz/ga0EAAAA7Mz6XwAAAgAAmGCaLwPINP3fHgBcNwCm/4s8pOCvBgCAUGauvc3fKVgCeAYCxCQAWGfOZP/uyt/oH3pn/Q8AwCGs/wUAIAAAmvDPf/7TQWBnK1bsP/zwww8//GDN30kD0Nv6/7oBsP6fz/ofAICyFk2fX2+IDttn8QIAoE/u8Q8AAEBEAgABAFj/A5H985//FACwv0Wj/2sG/bkbgD81qOz6//AGoKEPk9ZH/9b/AADRLFo/27tTcBbf4RMPgMQWTflN/wEAAAjK9F8AAAIAICwBAPsbnfjPnP7LANI3AH9qU/EAwO5/jhy3/BcAAADEsXT6bO9OwVm8AADIwZofAACAVAQAAgAQAAAxCQDY38x9vwagwwbgT80qsr8/avrf7odJjgAAAIA4lq6fjd0pNYvv7XEHQG7W/wAAAGRj/a8BAAEAAPxQzfynB1SlAeht/V+wAbD+n++hcf4uAACIxnKdA5fxAgCgB5/POBoAAAA0RgOgAQABAACd+6EbGgABgN1/PQIAAADKMlvnkJV8b886ADr0+TYHB6jiy5cvX758ufg3DgsAANsVaQBOp5MhvgYAfKIC0KIfetJcAzDz97L+bzcAyPEx8tA+fxcAAERjqs7+Q/kOn3UAjXr+yqFY6vM9DhFQ2Jcz1/8IAADbbVz/CwBkACAAAKBRP3TmD4HNX/xXbQD+lILp/54EAAAAFGenzs6L+R6ebwA5PJ9xNBb5PI8DBRR2PvcXAAAAUNyW6f8rE3wZAAIAAGjOD12KM/ov+3tZ/zcRAOT7GBEAAABQnG06CABg1PO3HJCZPs92/sWOG1DSlyuOCQAARWxc/2sANADggxSAFv3A7mFAvZ9/dAovADD9r00AAABAccbcIACAa89XHJM5Pq/l0AGFaQAAAKhkewCgAdAAIAAAgObY/dduA/b5CSfW8L2t/2MGALk/RgQAAAAUZ88NAgC4IABYx/ofiEgAAABAWQIAAQBY/wPQG+P+BP77v/97/jg+9/Q/YADQw8eIAAAAgOLsuUEAAKOs/5fauP7XAwAAANCGjQGAEkADgPU/ALTFer7p3f+rPxEvAOjnY0QAAABAcfbcIAAAitj4BACPBWCx33777bfffnMcAACAQ2xc/wsABABY/wNAK8zoW5z7j7L7DxUAdPUxYv0PAEANJt0gAAC22/gEgPNXcDC577czjgYAAHAI638BAAgAAOiBYX2ETf/G6b8GQABwLAEAAADF2XPDovW/BgCYtnr9f/7HHUZmsf4HAAAOt2j0LwAQAGD9DwCNMsQ/8Lb957a/gul/kAagt88QAQAAAGXZc4PnAAA1LN39AwAAQKtWrP8FAAIABAAA0BYz/UPm/nMCgBUvYvovANif9T8AAAXZcIMAAAAAAAAK0AAIAMD6H4DEDPePWvxPNwCrX8T63/p/fwIAAAA2Mt0GDQAAAAAAlCQAsP4HAQAAuZnyRwsAtryIAMD6f38CAAAANrLbBut/oC2fv0rzG/3tb3/ztgIAAKQiABAAgAAAgPSs+SMEAKUIAEz/d2b9DwDAFnbbIACA7Z6fnx2E3SRb///tK+8sAABAKqdVDPEFAAgAAKAtBv1pAoDOGwABwCEEAAAArGO0DQIA2O75jKOxg3z3/hcAAAAAJCQAsP4H638AOmHTLwCw/rf+X0cAAADAOkbbIACAjZ6/5YCwlPU/AABATgIAAQAIAADoh1l/jgCgzwbg7UF8bgwCAAAA1jLaBgEAbCQAAAAAAMZpAAQAIAAAoBNm/QIAAYAAYB3rfwAAVjDahqoNgDCATmgA1vn8LQcEAACAbAQAAgAQAADQD8v+HAFAhw2Auf+xBAAAAKxgsQ1VGwABAP2w/l/k8xiHBQAAgGxOa1nkW/8jAACAFhn3CwAEANb/KwgAAABYxFYbqmYAtx4LQHyfPn1yEKjK6B8AAIAunDawy1/qj18JABAAAMBRjPtzBAC9NQDW/4ez/gcAYBErbdj/mQDE9+nTJwEAVVn/AwAA0BENQKWV/xzW/2gAAGB/9v0CAAGA9f9SAgAAAGayyQYNAKM+feVQrPb8/OwgAAAAAP922sbi/48lWP8jAACAPZn4CwAEANb/SwkAAAC4yxobDmkAxABNsP7f4vkrhwIAAAD4NwHAUaP/OSWAMTrW/wBQg4l/ggCgnwbA+j8I638AAKbZYYOnAUAlz2ccDQAAAGAYtgUARv+1MwB7dAQAAFCJlb8AoK0GoHgJ4ENgKQEAAAC3GF6DBgCqEgAAAAAAlwQAcXb/Fw2AMTrW/wBQj5V/ggCgqwagbADgE2Cph/C8RwAAh7C3hmgBgBKArAQAAAAAwDcEADEDAA0A1v8AUJWVf44AoKsMwPr/QNb/AACcM7MGjwKA/QkAAAAAgP8QAMRc/7+wSsf6HwDqMfRPEwB00gBY/x9IAAAAwGD3DxoAAAAAAIhDAxA2APAQAKz/AaAeQ/9MAUAPGYDd/7Gs/wEAcrvYDRtPgxKAZD59+uQgAAAAAKkIAGKu/z0EAAEAANRm658sAMidAQgAjiUAaN1f/vIXBwEAGGUeDT00ABclgDCgT58+fZIBAAAAAHkIAAQACAAAoE+2/ikDgKwlwNttXO8bWf837S9nHA0A4JVVNHT7QAAPB+jWp68S/C7Pz8/Pz8/eUwAAAOiX6b8AAOt/AOiWuX/iACBTA2D9fyy3/2/aX77lgAAAryyhoecHAggAupWjAXj+yhsKAAAA/RIAhF3/CwAQAABAbeb+uQOANA2AAOBAD4F5d+76yxXHBAB6ZvcMjD4QgN58GtPWr2D9DwAAAAgA4q7/BQBY/wPADiz+BQDW/0wQADTN+h8AGOz+Aet/riRoAAAAAIDeCQDCrv8FAAgAAGAHFv8CgNwBgAZgi4fYvEHT3P4fABKbudy1bwas/7nl0w2ODAAAANCG0wYCAA0AAgAASMDoXwCQdfovANhIANA6638AyGrOeNe+GdAAMOHTbVte0IEFAAAAdiIAEABg/Q8AnTP6TxwAtNsDvC3KZb6C9T8AQEAXy93RFa9ZMzC9+7f+58WnSetezVEFAAAAdiIAiLz+1wBg/Q8A+7D7FwAkXv9rANYRAAAAhGK1DLj3P2V9umfFq936RwAAAIDCrP8FAFj/AwB2/wKA9AGABmCRh/C8RwBAP4yVAQEAlZRqAK6/eMvDBAAAAADu8wQAAQDW/wDAoAEQAHQQAGgA5rP+P9x/nXFCAkC3zJQBAQC1lX0OwK1XdpwBAACAwgQA8QMADQDW/wCwA9P/HgKAVhoAAcCx3P7/cP91xWkJAB2yUQaUAOyjRgNQMCQAAAAAGHHaRgAgAMD6HwDSsP4XAAgAGAQAAfzXGGcmAPTGNBnQALCbHRoAB5mN/vcrhwIAAIBh2BwApGkA/hib/ToCAADYhwBAACAAwPr/WP91gzMTAPphkQxoANhf7QbAEWaj/73imAAAAHTtVIIAQACAAAAAchAACAAEAD17aEEPb4QAAAB6ZosMCAA4So0G4PVlHV62EwAAAADwHwIAAQDW/wDAOQGABqCHAEAMcOGhEf28IwIAAOiTITKgAeBAn2Yo+L0ccNax/gcAAGAYBAACAAQAAMAVAYAAIH0DIAA499COrt4XAQAAdMX+GBAAEMGneQp+C8ec1WQAAAAAXRMAxF//CwAQAADAzgQAGoADd/+1G4CXk1wAcE4AAABwIMtjQAlANLUzAAEA23kOAAAAQO9OhQgArP8RAABAJhoAAcCxd/2v1wAMw3BeAjC0EwB4pwCAZEyNAet/wvo028YXd6gBAACANQQAAgCs/wGAawIADcCB6//zDOBtNS7zVwIAAIA9GRkDAgCa8GmJ1S/uOAMAAABrRAgAPnz48OHDB+t/AQACAAAIRQAgAzh2/V+7AXCNv3hohzcLAGjL9ZrWvBgQANCcpQ3AzE2/AAAAAADY5FTOxgDgqAxAAIAAAAAYJQDoWZD1f1Wu8RfW/wAANVyvaW2LAQEATav0KAAAAACANaIFAPs3AAIABAAAwC3W/xqAlOt/l/Yrt/8HAKhhdE1rWwwIAGidAAAAAACI4vAA4MNtpYqCide3/kcAAABMEwBoAFLe+18GMDS1/hcAAAANGR3UGhYDAgAykQEAAAAARzqVVmOmv6gKWPpqf2zEzKm3ZgDrfwCoIevK3/r/2ADg7XEGAcAwDG7/DwBQgfU/kKYBkAQwTQMAAAAAHObAAODDZttf9o8Nurv+9+gArP8BoAY3+O/Tx48fP378mGz9f54BdE4AAABQnAAAyBEAeCwAcwgAAAAAgGOcKthh+n+rAch6+//azw3A9B8AuMv6v9v1/6tk638NwAsBAABAQaNTWntioMUG4NZjAeCchwAAAAAAx2g9ALhoAFb88T/2wSDe9B8A2E4A0PP6f0K7638BwNBIAOBtAgBaYTcMpAwALv6lT3suCAAAAACAve0fAHyoYPsrywAw/QcA7hIAmP4vFXz9LwAYBAAAAEXZDQNdRQLw6mXrb/0PAAAA7OFUx87r/yIBQCcNgIm86T8AsIUAwO5/OwFANAIAAIBSDIIBAQDdmjn3VwUAAAAABZyq2XP9/xIAFHkdAQDW/wDANAGA6X+mBsAVPbQQAHiPAIBWGAQDAgC4xWMBAAAAgGL2DAA+NEIDgAAAAJggADD9FwAkIwAAACjFIBjQAMAt1v8AAABAMad9aQAEAAgAACABAYD1f5oAQAPwQgAAAFCKQTAgAAAAAACAuk67EwAIABAAAEDrPATA+t9DAJIRAAAAlGIQDAgAAAAAAKCK06E0AAIABAAA0K4f2mf6LwAQAFyw/gcAKMUgGBAAAAAAAEAVAgANABFW+4v+6/WFbP0PAIcQAJj+CwBSEgAAABRhEAwIAAAAAACgCgGAAICjbtJf9kb+GgAA2J8AwPpfAJCSAAAAoAiDYEAAAAAAAABVWP9rACzyI9z1v8jlLAAAgJ0JAKz/BQBZWf8DAGxnEAwIAAAAAACgPLf/1wAIAOI8EKAIDQAA7EkAYP2fKQBwRZ8TAAAAbGQNDAgAAAAAAKAKAYAMQACQYPQPABxFAGD3LwDISgAAALCRNTDQYQOgBAAAAABgDwIAGYAAwO4fAFhNAGD9n6kBcEVfEAAAAGxhCgx4GgAAAAAA1GL9rwGwyzf9BwDWEQBY/wsAcrP+BwBYzQIY0AAAAAAAQEUCABmAgb7pPwCwggDA+j9TA+CKvuD2/wAAq9n+AgIAAAAAAKhLACAAMNOvNP3XAABAbgIAAUCmBsAVfUEAAACwmu0vIAAAAAAAgIqs/zUAtwIAbYAnAAAA0wQA1v8CgKys/wEAtrD9BfB3AQAAAAAVCQA0ANdDf08J2DjxFwAAQCcEAAIADUBWAgAAgNWsfgHEAAAAAADUZf2vBNj+rADr/3OeAAAA/RAACAAEAFkJAAAAVrP0BdAAAAAAAFCX9b8YQANQNgAAALoiABAApGkAXM7nrP8BANax8QUQAAAAAABQnfW/EsD03+IfAFhNAGD9LwDISgAAALCCjS+ABgAAAACA6uz+lQACANN/AGA1AYAAQACQlfU/AMAKBr4AGgAAAAAAqjP91wAIAKz/AYDVBADW/zkCANfyNQEAAMAK1r0AAgAAAAAAqjP9lwEIAKz/AYDVBADW/wkaABfyKOt/AIAVrHsBBAAAAAAAVGf9LwOw/rf+BwC2EABY/zcdALiEJwgAAACWsu4F0AAAAAAAUJ3pvwZAAGD9DwBs0ej0/+PHj/kCgI9ZWP/HIQAAAFjKuhdABgAAAABAXdb/MgABgOk/ALBFuwHAx48fjf67DQBcuTMJAAAAlrLrBZABAAAAAFCX9b8GQABg+g8AbNRuANB6A/AxKev/UKz/AQCWMuoF0AAAAAAAUJcGQAYgADD9BwC2aDoAaLoBEACY/u9AAAAAsJRFL4AAAAAAAIC6BABiAAGAAAAA2KjpAKDdBkAAYPe/DwEAAMAiFr0AAgAAAAAA6hIAyACs/30OAAAbtR4ANNoACADs/ndj/Q8AsIhRL4AAAAAAAICKTuXY62eNAdz+HwBgWoIAoLkG4GNedv8BWf8DACxi1AugAQAAAACgIgGADKDzAMCHAACwnQBAABAhAHAlVmX6DwCwiFEvgAwAAAAAgFqs/zUA1v8AABvlCACKNwBVv4UAwPT/ELb+AADzWfQCaAAAAAAAKM/6XwPQWwDwcuZb/wMAZQkAlg70rf+LBAAuvQOZ/gMA3GXOC6ABAAAAAKCwU1FG+SkDAOt/AIA50gQApRqAOTN3AcCWAMBFF4fpPwDAuYsBqzkvgAAAAAAAgJIEANb/d3348OFlLn/+A2SKAQAAShEArB7oW/8vCgBcawGZ/gMAPTtfrI5uWC16AQQAAAAAAJRxKs0uP2sAMMr6HwDgQpoAoEgDsHr7bv1/d/2vAYjM9B8A6NBoAPDyL1//k1EvgAAAAAAAgAIEANb/WwKAdhsA1z4AUIkAoOBGv5+5/6IA4OVMEwAAABDNxND/1r8HQAMAAAAAwGKnCqzzuwoAGm0AXPsAQCWZAoCNDcBHZvi/35ofAAAAQDTnt/zXAABoAAAAAACoRQBg/d9hAODCBwDqEQAIAFav/88bALf/BwCgRQIAAA0AAAAAANUJAAQAAgAAgIIEAAKALev/VwIAAABaNPEQgIuvAUAAAAAAAMBKAgDrfwEAAEBBAgDT/+3r/4kGYBiG8xIAAABCOR+teggAgAAAAAAAgCoEANb/AgAAgIIyBQDW/weu/yceAiAAAAAgrDlLVoteAAEAAAAw5f995VAAcIsAwPq/wwBAAwAAVNVzAGDcXzAAmG4AXGgAAAR0d8lqzgtg/Q8AANwhAADgLut/638BAABAWd0GAJb9Zdf/AgAAAJpjsAsgAAAAALay/gfgLut/AUCHAYALHwCoKkcAYP0fPADQAAAAEJO7/gMIAAAAAACoyxMABAACAACA4noLAMz6a6z/BQAAALTIZhdAAwAAAABARacKLPUFANb/AACdBAAG/QIAAAAYZbYLIAAAAAAAoIpTHcb6mdb/c348AQAAwIUeAgBr/h0CgOkGwIUGAEBklrsAAgAAAAAAyjtVY7KfIwCY+eP9vjWufQCgthwBwHQMYM1fe/ovAAAAoGmWuwACAAAAAAAKO9Vkst/P+l8AAABwLUEAQJAMYPR1BAAAAMT3Ml213wXQAAAAAABQjADA+r/I+l8AAAAwSgDAxgxg4hVcXwAAxCcAABAAAAAAAFCYAMD6v8j6XwAAAHCLAIAtDYAAAACAHOx3Aaz/AQAAACjD+t/6f+PuXwAAADBNAMDqBmD6z7q4AABoixUvgAAAAAAAgAIs/gUAfa7/BQAAwG4EAAgAAABgEAAACAAAAAAAKML6XwOwZf3/+5a5/AGA3QgAWJEBWP8DAJCPIS+AAAAAAACATdz+XxKwJQD4fft8CAAA+xAAMD8DmPnFLisAAFpkyAugAQAAAABgE+t/PcC69f/vs/AhAADsQwBAcS4rAAAaZcgLIAAAAAAAYD0BQO4YYCISWPfiv0/HhwAAsBsBAAIAAAAYBAAAGgAAAAAAtrD+77ANsPvXAAAARxEAIAAAAAArXgANAAAAAAArWf9j/e9zAADYkwAA638AADDhBRAAAAAAALCSAIDOAwAfAgDA/gQACAAAAOicCS+AAAAAAACAlaz/6fne/wIAAOAoAgAEAAAA9MyEF0AAAAAAAMAabv9Pz9N/AQAAcKB163wBAAIAAAByMOEFEAAAAAAAsIb1P52v/wUAAMCB1u3yBQBY/wMAkIAJL4AGAAAAAIA1rP/pfP0vAAAAjrVulC8AQAAAAEACJrwAAgAAAAAAFhMAYP0PAHC4FaN8AQAuHAAAErDiBdAAAAAAALCA9T+dr/8FAABAHAIABAAAAPTJihdAAAAAAADAXAIABAA+BwCAOBYt8u3+rf8BACANQ14AAQAAAAAA91n/c7377y0A8DkAAEQzf5Rv+i8AAACATGx5AQQAAAAAANwhAKDbu/4LAACA4OavwAUAe/o/ZwQAAABQli0vgAAAAAAAgCmnzYzmrf+t/wEA6lm0BTf93233f8H6HwAACjLnBRAAAAAAAHCT9T89r/99AgAA8W3fiF+s/K3/C+7+j20AXB0AAGRlzgsgAAAAAABgnNv/0+363+UPADTEBD/49P+QDMB1AQBAYua8ANb/AAAAAIwTANDh+t+FDwA0xxC/lfX/Pg2AKwIAgB4Y9QIIAAAAAAAYIQDA+h8AID5b/IbW//UCABcCAABdMeoFEAAAAAAAMML6HwEAAEATLPJbWf/XaACc/wAA9MmuF8D6HwAAAIAR1v/W/9b/AABNsMtvKAAo2AA48wEA6JZpL4AAAAAAAIAR1v/W/9b/AABNsMtvKwAo1QA48wEA6JZpL4D1PwAAAADjBAACAAEAAEATTPNbmf6XCgCc8wAAdM7AF0AAAAAAAMAIDwGw/rf+BwBogoF+Q+v/7QGAEx4AAAx8AQQAAAAAAIwQAAgABAAAAE2w0W9l+m/9DwAARRj4AggAAAAAABgnALD+t/4HAGiCsb71PwAA9MPAF8D6HwAAAIBxAgDrfwEAAEAT7PXjNwDbfx7nOQAAvLDxBRAAAAAAADBOAGD9b/0PANAKe/3gDYD1PwAAlGLjCyAAAAAAAGDEaRVjetN/638AgEMY60cOANz+HwAACrLxBRAAAAAAADBCANDP+v/HH38UAAAAtM5YP2wDYP0PAABl2fgCWP8DAAAAcOm0gWF9TD/++ON1APDjt6z/AQCaZqwfMAAo8jM4twEA4JyZL4AAAAAAAIBLAoCUAcB5A/DjDQIAAIB2GeuHagBKfXcnNgAAXDDzBRAAAAAAAPAfp81M7SMHAHNY/wMAtMtY//AGoOz3dUoDAMA1M18AAQAAAAAA/2b9LwDI3QC4xgGA9Cz1DwwAanxfpzQAAIyy9AWw/gcAAABgGDYHAEb2Odb/WRsAFzgA0Alj/aMaAOt/AADYjbEvgAAAAAAAgGHYEABY2Cdb/7eYAbycwy//x/ofAOiZpf4hDYDb/wMAwM7sfQEEAAAAAAAIAKz/W20ALs5kAQAA0DlL/Z0bAOt/AADYn70vgAAAAAAAgMH6XwPQaANwcSZb/wMAnTPT3zMDsP4HAIBD2PsCCAAAAAAAGIZVDYCFffoA4LUBCNsDXJzG1v8AADb6TXMCAwDAHCa/AAIAAAAAAAbrfwHA3QAgYAPwegK79z8AwAsbeut/AADogdUvgAAAAAAAoHcCAOv/OQFAtAbg5ey1/gcAOGdJb/0PAADpWf0CCAAAAAAAeicAEAAsrQIEAAAAYdnTW/8DAEB6hr8A/i4AAAAA6Jr1vwCgoQBgGIbX/7X+BwAYZVVv/Q8AAOnZ/gLW/wAAAAD0y/pfANBQAzDcCABcyAAArwzrrf8BACA9819AAAAAAABAv6z/BQBNlAAX5631PwDABPN6638AAEjPAhgQAAAAAADQKQGAACB+BnBx0rr9PwDAXUb21v8AAJCbBTAgAAAAAACgUwIA6//IGcD1GXvxXwUAAACj7OxN/wEAID0jYMD6HwAAAIAeCQAEAJEzgPNz1Y3/AQAWMbi3/gcAgNzsgAEBAAAAAAA9Os1mXi8A2LkBOD9Rrf8BAJayubf+BwCA9EyBuV5FOxQIAAAAAABITgBg/R88ADD9BwBYzfLe9B8AAHIzBbZ7dm7gKgAAAACgO6cljOwFADs3ANb/AAAbmeALAAAAIDeDYMtmZwguEwAAAAD6clrO1N76/5ASwNUKALCCCb71PwAA5GYQbM3sPMH1AgAAAEBfBAACgPgZgOsUAGA1K3zrfwAAyM0m2I7Z2YKrBgAAAIC+CAAEAMEbABcpAMBGtvjW/wAAkJhZsAXzlnPGWYRrBwAAAID2WP9rACI3AK5QAIDtzPGt/wEAIDHLYMNl5xKuIwAAAAC6IwAQAAQMAFyYAAClWORb/wMAQGKWwfbKVU8q5xguKAAAAAAi8hAAAUC0BsBVCQBQkFG+9T8AACRmGWyd7DTDJQYAAABAdwQA1v/RMgBXJQBAQXb51v8AAJCYZbD9sdMMFyAAAAAA3TktZ3AvAKjXALgkAQDKMs23/gcAgMQsgw2OnWa4GAEAAADojgBAABCqAXBJAgCUZZ1v/Q8AAFlZBlsbO/FwPQIAAADQIwGAACBOA+B6BADYziLf9B8AADphHGxq7KzDJQkAAABAj06r2NwLAAQAAAAx2eVb/wMAQA+Mg+2MnXW4MAEAAADo1Gkts3sNgPU/AEBApvnW/wAA0An7YPNipxwuTwAAAAC6c9rA5l4AIAAAAAjIOt/0HwAAOmEibFvsrMOFCQAAAEBfrP+t/4NM/63/AQAKstG3/gcAgE6YC1sY93bWOe1dmwAAAAD0TgBg/e/e/wAAKVnqm/4DAEAPLIYNi7s68ZzzLlIAAAAAencqwfje+t/t/wEAYjLZt/4HAID0jIYNizs58ZzwrlMAAAAAGIZCAYAGwPrf7f8BAGKy2rf+BwCA9IyGrYo7OQ+d8K5TAAAAAPg3AYAA4PAAwGUIAFCP7b7pPwAA5GY3bFjcw6nonHeRAgAAAMB/CAAEAMcGAK5BAIDajPit/wEAICu7YcPiTs5Gp73rFAAAAAD+QwAgADgwAHABAgDsw5Tf9B8AAPIxGrYq7uSEdOa7TgEAAADgGwIAAcBRDYCrDwBgNwb91v8AAJCGubBhcW8np0vARQoAAAAA/3EqxApfALA0AHD1AQDszKzf7h8AAFpnK2xY3OEp6ipwnQIAAADAf5zKscIXAMzn0gMAOIRx/63j4NwAAIAmGApbFfdzoroKXKoAAAAAMOJUlBW+AEAAAAAQnPU/AADQtB7mv1bFztUOLwEBAAAAAADMJQDQAFj/AwB0RQAAAAA0rcOZ7/SfNSlOdrqmvwRwtQIAAACwyak0E3wNgAAAACCy3lb+GgAAAMjHqHf6sDhDmj5jk53/mP4DAAAAUJ4AQANg/Q8A0JXzHXzk+/FPfIEb/AMAQOfMecl6xuY4//GJAQAAAEBdAoCUhmGw/gcAYNTFVj7a7h8AAOAuW15SnrE5zn98YgAAAABQnQAg5fr/hfU/AADXDg8AvAUAAMB25rzkO10TnPz4uIALj185FAAAAFCS3X/iAGCI1wC44gAAIjgqAHDkAQCAUox6SXaubnnBJi4KfFDQlccrjgkAAAAU48b/PTQAQ6QMwEUHABCfcT8AANCEi/lsnDmvXS8rTsvVrxntKkAAAIMAAAAAAKqy/u+nAbhg/Q8AwC1G/wAAQLuMd2nrhHz9stWvedT5jw8QmCYAAAAAgFqs/zvPAF5Y/wMAcM36HwAAaJTlLqHOxjmn5ZYzfP/zHx8jMJMGAAAAAKoQAMgAXtn9AwBwwfofAABolM0uDZ2TG19qt5MfHyaw1OMNjgwAAABsIgCQAVyz/gcAYJTpPwAA0BCbXVo5J7e8zm5nPj5MYJ3HexwiAAAAWMb6XwMwYdGU3+gfAAAAAICYDHYJfjZuOYGrnvAIAKAI638AAAAoSQAgAwAAAAAAgPSsdQl1Kl7//9WnbqWzHQEAlOU5AAAAAFCG9b8GAAAAAAAAemOhS6izceO5uvEMRwAAtT3O5lgBAADAHdb/aAAAAAAAAADCmpiMT8zHDeut/yGax4UcMQAAABhxKseGXgMAAAAAAABAcevG4rb1pv8QkAYAAAAAthIAIAAAAAAAAADIxLbe+h8iEwAAAADAeqeiDOgFAAAAAAAAABzLtl4AAPFpAAAAAGAlAQACAAAAAAAAgExs663/IT4BAAAAAKwkAEAAAAAAAAAAENmiKfn0V1reCwAgDg0AAAAArCEAwPofAAAAAAAgrHXj8nWFAAIA2JkAAAAAABYTACAAAAAAAAAAiKnevtwE3/ofgtAAAAAAwAKn0mzoBQAAAAAAAACUUnVibogvAIAgBAAAAAAwy6kCG3oBAAAAAAAAAKXUnpXb4lv/QxBz1v8aAAAAAHonAEAAAAAAAAAAEFztTblFvgAAglj3BAAPBwAAAKAjAgA0AAAAAAAAAK2otx03yhcAQBArGoDpPAAAAADyMP1HDAAAAAAAAMALu3wBAASxtAEQAAAAANAF6380AAAAAAAAALyyyxcAQBCPM4z+EYcOAACAtKz/0QAAAAAAAABwwTRfAABBLAoArP8BAADIz/QfAQAAAAAAAADXrPOt/yGORbf/1wAAAACQlvU/AgAAAAAAAABGGegLACCOpQGABgAAAICcBAAIAAAAAAAAABhloC8AgFDmBADD7VRAEgAAAEDzrP8RAAAAAAAAAHCLgb4AAEKZ2PRf/3/TfwAAABISACAAAAAAAAAA4BYDfQEARPM4afRrHDQAAADysP5HAAAAAAAAAMAo63zrf4hJAwAAAEC/PAEA638AAAAAAABGGegLACAmAQAAAAB9OZ1OQ9HpvwBAAAAAAAAAAEA+BvoCAAjrcTkHDQAAgCadqrGMt/4HAAAAAAAgEwN9AQCEJQAAAACgFwIArP8BAAAAAACYw0BfAACRCQAAAADoggAA638AAAAAAABmstEXAEBkAgAAAADyEwBg/Q8AAAAAAMB8ZvoCAAjrqIcAKAoAAADYjwAA638AAAAAAACWMtYXAEBAOwcAnioAAADA3qz/sf4HAAAAAABgHXt9o3+I5nGVst/LuwAAAEBFAgAEAAAAAAAAAKxmvm/9D6E8blPku3gXAAAAqEsDgPU/AAAAAAAAqxnxm/5DHI+FbPkW3gUAAADqOtVkMW/9DwAAAAAAQG6m/Eb/EMdjAN4FAAAAqhMAYP0PAAAAAADAapb9Jv4Qh/U/AAAAXdAAIAAAAAAAAABgi5hDfLt/6Irb/wMAANALAQDW/wAAAAAAABQRqgGw+4d+PAbgXQAAAGAPp5qs563/AQAAAAAA6FPiAMCbCwFZ/wMAANALAQDW/wAAAAAAAFTylI73FGISAAAAANALAQCm/wAAAAAAAFSy2435J77p6xdY/0NiAgAAAAA6ogHA6B8AAAAAAICjVNrlzwwDrP8hBwEAAAAAHREA2P0DAAAAAABABFV3+ab/kJj1PwAAAB0RANj9AwAAAAAAQBz1dvnW/5CS9T8AAAB9sf63+wcAAAAAAIBoqu7y7f4hE+t/AAAAumP6b/QPAAAAAAAAMVWa5pv+QxrW/wAAAHTH9N/WHwAAAAAAALoiAIDWPR7NWwAAAMCRrP9t/QEAAAAAAKBPAgBoyGMY3gsAAACOJAAw6wcAAAAAAIBuCQAgvsdgvCMAAAAcSQCgAQAAAAAAAIBuWf9DcEFW/gIAAAAAorD+P3z3LwAAAAAAAAAAgGuhbvBv/Q8AAEAIAgA3/gcAAAAAAACAgOKs/wEAACAKAYAGAAAAAAAAAAACEgAAAADAJQGAAAAAAAAAAAAAYno8iCMPAABAUKcSjPgFAAAAAAAAAFDb01cOBfTG+h8AAACGYfP633ZfAAAAAAAAAAD7eDoT4YfxjsAhBAAAAAB0TQBg/Q8AAAAAAABNiBMAhEoRoE/W/wAAAHTnVIgFvwAAAAAAAAAAdhAzAFACwIEEAAAAAPTiVI4Fv+k/AAAAAAAA7CDO4N76H6IRAAAAAJCcAEAAAAAAAAAAAG0JNbgXAEBA1v8AAADkdCrKjl8AAAAAAAAAADsINbUXAEBA1v8AAADkZP0vAAAAAAAAAAC2eLrimEAEAgAAAAASEgBY/wMAAAAAAAAbaQAgINN/AAAAEhIAaAAAAAAAAACAjQQAEJAAAAAAgGys/wUAAAAAAAAAwHbW/1BE2Qm+9T8AAADZWP/LAAAAAAAAACCfQ1b41v+wTr0VvvU/AAAA2QgArP8BAAAAAAAgn+ub8ZvmQ0y39vcTW/z5S33rfwAAALIRAFj/AwAAAAAAQD5Pt1X9do48LLJijj/6X0e/2PofAACAbE7lmO8LAAAAAAAAACCOpxkqfQsHH2ZaN8oXAAAAANAvAcC6jb71PwAAAAAAAAT3NFvZV9MAwHwrRvkX/2nmV1r/AwAAkIQAYONG3/QfAAAAAAAAYnpaZfsraABgvpm7/HULfut/AAAAEhIAFFzqm/4DAAAAAABAHE9H8xbAtEXT/EUjfvf+BwAAIC0BQL29vtE/AAAAAAAAHEgAAME9lrb6lb0XAAAANEMA4Ib9AAAAAAAAkJUAACKz/gcAAIDFBAAaAAAAAAAAAMhKAABh1Zj+r3hlbwQAAACNEQAIAAAAAAAAACArAQCEVen2/4u+hXcBAACA9lj/CwAAAAAAAAAgMQEARPNYwYrv6I0AAACgYRPL/mFeJCAAAAAAAAAAAGISAEAEj5U5wgAAAGR2vu8f7gUAd79GAAAAAAAAAACEJQCAwz3W5yADAACQ3Gme+V8sAAAAAAAAAABiEgDAgR534TgDAACQ3Mxb/g+zUwEBAAAAAAAAABCWAACOIgAAAACAAu4GAHe/ss8GwJkDAAAAAAAAjRIAwP6s/wEAAKCAiRH/0q/3EIBrUgEAAAAAAAAIyEMAYH/W/wAAAFDA9I5/0Rd3GAB4YgAAAAAAAAA0SgAAO7P+BwAAgK3u7viXfr3pvwAAAAAAAAAA4ttt9C8AgBdu/w8AAAAFzBn0z/8jJv4vh0gAAAAAAAAAAMHtHAA44GD9DwAAAAUsmv7f/SMCAE8AAAAAAAAAgCbss/5/+UaONgw1AwDHFgAAgI4UvP2/AEAAAAAAAAAAAK3YLQAABut/AAAAKEUAoAEAAAAAAACAPgkAYB+m/wAAAFDM/On/3a/vOQA4P0QCAAAAAAAAAGiFAABqc+9/AAAAKEkAUOOm/gIAAAAAAAAAaIL1P9QmAAAAAICSpgf9S7/eEwBeWP8DAAAAAABAKzQAUMljTQ4vAAAAnTrds+jrP+De/wAAAAAAANAaAQCU9ViZIwwAAEC/FgUAd7/Yyt/WHwAAAAAAAFokAIAiHutzkAEAAOhXwXv/iwGs/wEAAAAAAKBp27f+AgB6ZvoPAAAAdS269/8gALD+BwAAAAAAgNSK3OxfAECfrP8BAABgDzOn/9NfLACw+wcAAAAAAIAcNq7/L17E8aQHpv8AAACwq0oBgOk/AAAAAAAA0Kh1u3/ozeNeHGoAAAAYMR0AuP2/9T8AAAAAAAB0QgAAdz3uywEHAACgR3fv8T//j2sArP8BAAAAAAAgKwEATHg8gsMOAABAjy4G+hv/eOcBgNMJAAAAAAAAemD9D68ej+YtOOpNdxwAAACCmg4DBADW/wAAAAAAANA503/69BiG92Ln99fBAQAAiGjmkwEEAAIAAAAAAAAAAPrxGI83Zc932cEBAAAI59Z2f87XaAAAAAAAAAAAIJ8IK3+T9GPfbocFAAAgtOkGQAAgAAAAAAAAAAAgPff49+57FwAAAEK7nvu//B8BgAAAAAAAAAAAgH6Y/jsBvCMAAADhLN3ur/6D6af/AgAAAAAAAAAAcrD75+JMeP1HxwQAACCcOev/u1/p9v8AAAAAAAAA0CLTf6ZPDIcCAADgeLfm/hPr/4k/2G0P4EQCAAAAAAAAoGmm/0yfG44DAABALNNj/UVf3GEG4PwBAAAAAAAAoGmm/wAAABDd+bhfACAAAAAAAAAAAKBP1v8AAADQgEVL/aHo7j9TAOBEAgAAAAAAAKBRj4dy/AEAAGCZ09FM/wEAAAAAAADgKAIAAAAAiO78pv7X/3LPhwBY/wMAAAAAAADAIR4D8C4AAADAfaMBwDBj3D8UCgA+ZOFcAgAAAAAAAKA5jzF4IwAAAGCW0fX/xX+teu9/AQAAAAAAAAAAHOIxDO8FAAAAFHArABg0AAIAAAAAAAAAAFpm/Q8AAACpTEz2h44DgJeDY/0PAAAAAAAAQLus/wEAACCV6cn+0F8A4JQAAAAAAAAAIAfrfwAAAEjl7mR/6CYAeD0mGgAAAAAAAAAAEniMxNsBAAAAW93d+r/8m6FcA+CW/wAAAAAAAACwA+t/AAAAyOm0F+t/AAAAAAAAANiHAAAAAAAa9npH/9F/b/0PAAAAAAAAAGk8BuMdAQAAgDVOB/kQlVMCAAAAAAAAgGSs/wEAACAV63/rfwAAAAAAAACSeYzKWwMAAABrnI5j/Q8AAAAAAAAAtQkAAAAAII/Toaz/AQAAAAAAAKAqAQAAAACkIgAQAAAAAAAAAACQlfU/AAAApCIAsP4HAAAAAAAAICu7fwAAAEjF+l8AAAAAAAAAAEAPrP8BAACgbdb/AgAAAAAAAAAAemD9DwAAAA07HU0AAAAAAAAAAACHGB3om/4DAABARKcYPAQAAAAAAAAAAEKx/gcAAIBwBAAyAAAAAAAAAACYw/ofAAAAjnQK40NUThIAAAAAAAAAenY+37f+BwAAgMNcr/CH45KAD4E5VQAAAAAAAADo05wdv90/AAAA7OFi+j/6763/NQAAAAAAAAAA9MmmHwAAAKIYvf3/9Bd0u/7XAAAAAAAAAADQIQEAAAAARDG9/r/+sqFOEvChQU4eAAAAAAAAAHrwOMZhAQAAgL29Lv7vBgAXXyYAkAQAAAAAAAAA0IPH2xwcAAAACO1U04dEnCoAAAAAAAAAtO7xHocIAAAA4jpVJgAAAAAAAAAAgCCs/wEAAKB5pv8aAAAAAAAAAAB6Y+4PAAAA7bH+1wAAAAAAAAAAAAAAABCd9b/1PwAAAAAAAAAAAAAADbD+FwAAAAAAAAAAAAAAABDO60Z/cO9/AQAAAAAAAAAAAAAAADGddmH9DwAAAAAAAAAAAAAA613M9Ic6PYD1PwAAAAAAAAAAAAAAbDU62R+KlgAfsnMWAQAAAAAAAAAAAABQ19Ip/7A2DNAAAAAAAAAAAAAAAADAMpVu899tA+CMAgAAAAAAAAAAAACgitNBBAAAAAAAAAAAAAAAALCMAMD0HwAAAAAAAAAAAACABggATP8BAAAAAAAAAAAAAIjO+t/0HwAAAAAAAAAAAACABsxf7Q8lagHTfwAAAAAAAAAAAAAAWGzRrH8QAFj/AwAAAPTk559/dhAAAAAAAACAQE77Mv0HAAAAoAk///zzSwAgAwAAAAAAAACiEABY/wMAAABw4edvOSAAAAAAAABACNb/pv8AAAAAvPp5kuMDAAAAAAAAHMz63/ofAAAAgHMaAAAAAAAAACAi03/TfwAAAADO/XzPxB909AAAAAAAAIBarP+t/wEAAAC4MD8A8IgAAAAAAAAAYFfW/wIAAAAAAC78vI0DCAAAAAAAAFRh/W/9DwAAAMC5nzdzDAEAAAAAAIDCXmb6F/9o+i8AAAAAAOicAAAAAAAAAACIyI3/BQAAAAAAXFg69Lf+BwAAAAAAAPZj/S8AAAAAAOCVG/8DAAAAAAAAcQkArP8BAAAAeCUAAAAAAAAAAOISAAgAAAAAAHg1Pes3/QcAAAAAAACOtGjif/frBQAAAAAAJGDWDwAAAAAAAIS2dOs/uv5vPQNwGgAAAAAAAAAAAAAAENepELf/BwAAAAAAAAAAAACAugQA1v8AAAAAAAAAAAAAADTg1qZ/WNgGmP4DAAAAAAAAAAAAAEBFp3Is/gEAAAAAAAAAAAAAoJZbt/8fVrUB1v8AAAAAAAAAAAAAAFBFwfV/5ADAGw0AAAAAAAAAAAAAQMPKrv9jBgDeZQAAAAAAAAB69viVQwEAAAANG13wv/77YVUG8Dq7D5IHeJcBAAAAAAAA6NbjtxwQAAAAaNXpINb/AAAAAAAAALAPAQAAAABks+V+/5EDAO8sAAAAAAAAAJ0TAAAAAEA2rwHAsEsDIAAAAAAAAAAAgH0IAAAAACCzNAGAtxIAAAAAAAAAAAAAgMw8AQAAAAAAAAAAAAAAAKJ7Geif//921/8aAAAAAAAAAAAAAAAA0qq9/hcAtOLXbzkgAAAAAAAAAAAAAACBnPaiATjcxbL//B9/ve3ii0UCAAAAAAAAAAAAAAAHmJ7sD0XzAAFABL8ut+gPOsIAAAAAAAAAAAAAAFVM7/4nvib4+l8AMOHX+hxkAAAAAAAAAAAAAICSbq3/X//r9FcKANqlAQAAAAAAAAAAAAAAaMn1Lf9vNQDNPQTAm3vXohG/9T8AAAAAAAAAAAAAQAjXDwG4iAFOhXgIwCHOd/lLR/xu/w8AAAAAAAAAAAAAEMj1Un8oN/rXABzrYpdv/Q8AAAAAAAAAAAAA0LDiAcDLH7/1IhqAPY1O8+fM943+AQAAAAAAAAAAAAAiOgWmAdhi3Y5/zlea/gMAAAAAAAAAAAAA7OT1bv3DjQBgiB0GLIoE+nyLV9y8/9dVXE0AAAAAAAAAAAAAANW1Pv2fmQR0/i7PGe6vm/trAAAAAAAAAAAAAAAAdnUrAxjaLwFeewDv8sZ7/895cQcZAAAAAAAAAAAAAGAP1+v/oakAYP7P7L0e9Trin7/7BwAAAAAAAAAAAAAgkNEBfdj1/7UPHz54AgAAAAAAAAAAAAAAAL1o6AkAFwQAAAAAAAAAAAAAAAB05NSsYRgEAAAAAAAAAAAAAAAApDJxK/0Vs/va9/if+ac8AQAAAAAAAAAAAAAAgFQm1vanxgkAAAAAAAAAAAAAAADIZvsd9wve7L9gAOA5AAAAAAAAAAAAAAAAJLTb0wB2+I4fznhnAQAAAIjv5zOOBgAAAAAAAHDfxGS/4Pp/aRiwMQDQAAAAAADQip+/5YAAAAAAAAAAd5zquPvKBb+76T8AAAAAjfp5jMMCAAAAAAAATCk1+n95qTkvWPD7uv0/AAAAAE0TAAAAAAAAAABzbRnlD6tG/NffulQAoAEAAAAAoFGm/wAAAAAAAMAdlUb5BwYAGgAAAAAAAAAAAAAAALK5mOMPu6z/53/HmT/VhzHeXAAAAAAAAAAAAAAAMtszABjtAVb8MAIAAAAAAAAAAAAAAAD6cr7Irx0ArHggwKIAQAMAAAAAAAAAAAAAAEBy+zwBYPqZAEUCACUAAAAAAAAAAAAAAABp7fMEgDlJQMEAQAMAAAAAAAAAAAAAAEBO9TKAW685VA4ANAAAAAAAAAAAAAAAAORUY/o//eKrv+mHJbyzkNWvtzk4AAAAAAAAAAAAAORU/A79258PUDAAkAFAVr8u4XABAAAAAAAAAAAA0LbRG/bvHACs+EYfVvF2Q0q/LuSIAQAAAAAAAAAAAJBfjXv5r/NhG28lJDYnAFACAAAAAAAAAAAAAJBcjXv5HxIAKAEgNw8EAAAAAAAAAAAAAKBTcxb5w463/y8YAMgAIDcNAAAAAAAAAAAAAACdOoXxoRrvMqTxuuzXAAAAAAAAAAAAAADAkC8A0AZAYgIAAAAAAAAAAAAAAPrVVQBwqwFQC0BbNAAAAAAAAAAAAAAAdOplkX/9b17+ZdYAwEMDoGkaAAAAAAAAAAAAAAAYhn0fC/Cys9+nFjj/HS3+IQENAAAAAAAAAAAAAAC9mz/fX/r1Bz464OJ3NPqHHKz/AQAAAAAAAAAAAOAbp2DcvB8AAAAAAAAAAAAAAG6qMeXf/rLeFwAAAAAAAAAAAAAAGFdqu79l8S8AAAAAAAAAAAAAAACABXa4x//0a3oLAAAAAAAAAAAAAADgvjlD/4uvnPia0Ve+fnGHHQAAAAAAAAAAAAAA1tvyHIDr13E8AQAAAAAAAAAAAADgYPMfFOBYAQAAAAAAAAAAAADA8W4FAOf/yVECAAAAAAAAAAAAAIAQRof+ngMAAAAAAAAAAAAAAABBnW5zcAAAAAAAAAAAAAAA4GCneRwoAAAAAAAAAAAAAAA4wK19//XcXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8f/buJDtuHAkAaN7/BLmvi/bC71W5pRRFYowI/L/strNSIAnGBBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyOGfn1kcAAAAAAAAAAAAAACI4p9L1gcAAAAAAAAAAAAAAKL4ZxArCQAAAAAAAAAAAAAAi/w01m/oHwAAAAAAAAAAAAAAcjD3DwAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ2vseCwUAAAAAAAAAAAAAADs9Gv13GAAAAAAAAAAAAAAAAPa4/yv//WsAAAAAAAAAAAAAAACw0/Xc//c/ZsUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLLeP7AyAAAAAAAAAAAAAACw2fseCwUAAAAAAAAAAAAAAHu8n7BcAAAAAAAAAAAAAACwgel/AAAAAAAAAAAAAAAI6s6gv7l/AAAAAAAAAAAAAABYza/5BwAAAAAAAAAAAACAne6M7Jv4BwAAAAAAAAAAAACAzX6d7Df3DwAAAAAAAAAAAAAAe7xbWToAAAAAAAAAAAAAAJjr3c0aAgAAAAAAAAAAAADAFF+m9m8O9Jv7BwAAAAAAAAAAAACA6X4a2b8Y6zfxDwAAAAAAAAAAAAAA6zRP8L+/ifPjuKwAAAAAAAAAAAAAANTRP77/99/dfgwg5oEEAAAAAAAAAAAAAADoUmxQ/t3EbQAAAAAAAAAAAAAAQDLBJ+Nvju87AwAAAAAAAAAAAAAAQHEBJ+MbJvgdAAAAAAAAAAAAAAAAoLggM/GdE/wOAAAAAAAAAAAAAAAAwCzvbjc/ylIDAAAAAAAAAAAAAECL9zh3PtaCAwAAAAAAAAAAAABwnOap+iGD/nfm+03/AwAAAAAAAAAAAADAq2G2fshv9+/5AgAAAAAAAAAAAAAAcJz78/fvmVwIAAAAAAAAAAAAAABOdz1hfzGC3z/Q7wwAAAAAAAAAAAAAAAB89vck/aPZ+rG/zt/cPwAAAAAAAAAAAAAAfPZ0yP49R9snu3wAAAAAwCTKkgAAAAAAAMTSMFsfZ/pfsw0AAAAAmEdxEgAAAAAAgNWuO1Jtjavh0/9tn+/iAgAAAACT+B0lAAAAAAAALHWnIzV8KH/ZAQDXFwAAAACYyhkAAAAAAAAAVrjZiLrZrBo46H+/N6a1BgAAAABs1/m7TgAAAAAAAODKqF/GP2ni/+Mnd/50LjoAAAAAMJUDAAAAAAAAAIwXZPr/6Vft+QFddAAAAABgNgcAAAAAAAAAGKxtTP89lKsAAAAAAFSlOgoAAAAAAMAwW37Zv84WAAAAAAAAAAAAAAA8dmdS36/8BwAAAAAA4A/tHgAAAACA/RZM/1tkAAAAAACApLSBAAAAAABCeE/W85VcHQAAAAAAgAj8KigAAAAAgP3Cjv4rFgMAAAAALKMwCzzaJRwAAAAAAADYI9T0/0/fx2UCAAAAAJhKYRZ4tEU4AwAAAAAAsEeo6X8AAAAAAJ4aUphV7AUatgj7BgAAAADAaob+AQAAAADSmVStVfsFGvYcmwYAAAAAwDOdRVX/CAAAAAAAQCKzK7TqvUDbzmPTAAAAAAD4XU9F9T2TSwMAAAAAMJwKLRB587EFAQAAAABcaauoGvoHAAAAABJRgfy4Gqq1QMDNxxYEAAAAAPCjR+XU92QuBwAAAAAwg4Lko5WxOJGvkQWh5J5jFwIAAAAAuOVpLdXoPwAAAORK9iXjABc7pDX5uD6WIvLr223MOfe8VQIAAAAA+ODp6P9rwhmAm9/w+xdw+QAAADgwhfev8wEw9S0z9q1kbZe91q0qxR4E6wMAAAAA0Gj7eIH6LwAAABLz9aw8MHw3swiRXzSvT794xRsn6TvdXU2Bh8LiAAAAAAC8Xk2/OP8dnssKAABA4RRe3g3U29MsyMVWv+trvP6/euw1VOPN7ikjzs0/5OmwmAAAAADAiW7WSd95uKYAAABUzdzl4EDVzc2CXOz5W75D/HdQ9pvHilF+c+65P93ekHT3sA4AAAAAi/xaFX2n4oICAABQKVuXjAPn7HKWJcLKjJrB9WIK/qL3rMW8E0SeC+5zTwHM3kasBgAAAMB066f/73/sxZ/8+PVcTQAAAGok6fUGrQBu7nhW5uPieCvVe1slWgcP6Zar70kXx0Lqzc1qAAAAAGyzoH56v8yqZgQAAIAE3BwVcMLWZ3G8lU54hVkiz5eb0B0OhXc5SwEAAAAwwNM6y8pqacMfdkEBAACoka2boALsgTO2iyD7T5zf4X3nG5r0XfYKs0Qx958FD3uotfVci2kBAAAAgKD6/zHfNVVRJVQAAAAOz9nNSwG2wbbtIshvMOn/zzX/3c5/mvVlDnjhW8z65Aq9mj9q7NUXiHoooEzUZykAAAAAftFWbdxY5VQbBQAAQOZuBAqwB84Yn6X5zABDDop41x8Ybg38GqJQTwqUifqsBgAAAMCPfiomDvm9NZ0tpTtf3hUEAADg2PzdnBNg94N0LziLsPelbz2tmHsAssR+VgMAAADgg18rg7N/D40yJQAAAPT8U3hmlYDy2yNgdtmOsTHEsnpVL70IHAAAAABSulMNvPNL+vX+AQAAYEhi3pzL155VUh+AM7dEACI0XCyaOwQAAAAAiOJmjU95EQAAAJbl4z/9mUcZvfkkIOMGCEComMqycDPwFpkDAAAAwCI3a3la9QAAALAyGUdtAXLtV3Y/ADgt6hafAwAAAMAGmvQAAABweD7uPAAcuAXZnQAAMTkAAAAA5KMCCAAAAGMT6oz5uKkjOHnvsjUBAEJxake/lgIAAAAo4mlVTh0QAAAAGnLkUZ+DcgSs2bUAAETaFIuBrQYAAABQQUNJTu0PAAAAmhPkGZ9J6uklVREib1kAADqAVIqErQYAAABQwfYDANffygUCAACgQFo9KjenzISTkSkC7lQAAEb/OSEkthoAAABAbtun/z/WWRQHAQAAyJ5Hb0muMVYFk7YvAABxLDXiYUsBAAAAVPCo4nb9J4dU99T7AAAAyJI1g4mr60fGHmIfAwBwEgAAAAAAxntUZVPOAwAA4LQEGWj7ZRB2FVsZAMDYvqFQEwAAAAAe62n6OgwAAABAljwXUOexdwEARAgjhZ0AAAAAMJJ+MAAAAOdkr4CCj+0LAGBNJCnyBAAAAIApBnaC1ekAAAAIkqsCDgDYygAARJ4AAAAAUJM6HQAAAIXzU0CFx1YGACDsBAAAAIBSFOkAAACokZAC6jw2NACAemGn0BQAAAAA/rOlJazHDAAAIBUFnAGwpwEAkCg6FSEDAAAAsM3GipsGMwAAgFQUMGVlZwMAIF0EK1QGAAAAIIRlpTRNZQAAQMJ1TtZj1gSMT9nlAAAoFsQKmwEAAAAIYUH5TP0LAACQZJVPi0yWgNkp+zwAACfEsYJnAAAAAPYrXHRzcQEAgMi5lVwSMP1v6wMAoNgBACE0AAAAwEG2VIUqFeDU1wAAgAgJXeGxWrMjYF7Kbg8AQKVotiH6FUUDAAAAHCdOn1VrGQAAIEKGVf4HBEz/2/ABAAgS0LZ9jhAaAAAA4DjRGq56yQAAAAHzrNo/HeAAgN0eAICjouifDhI0RKFCcQAAAIB1gjdctZMBAAACJlYn/IyAAwD2fAAAasfS/SG3EB0AAABgtXQN18hNZVUtAACgcNIXefTW3AYY/bfJAwDAjCMBbYGoWB0AAABgliBt1/ufELm7rLAFAAAUzvimJobNf9dwBmBvBwAAETsAAADAQbaXcioVqpS0AACA8rnewKxwVAJllgKME9nbAQBAJA8AAABwkJVVG9UrAACAjPndwGxoRvZkbAKMDdnSAQBASA8AAABQzUUlZU295oTilKIVAACwN9eL3MJva/nfzKoMTICRoKS7tw0NAAB0VAEAAAA+uFNMWVasqV2WUqsCAAA2pngxm/edyWON1QAMBtm1AADgnMgfAAAAoNfNAsrK0kzVIpSyFAAAsD6nq9fXv86tjEGAMaCM27gdDAAADkkBAAAAgNONqmvcKZ2sL8qUrD0pRQEAAPNytxP6+r8mXIDRH9s4AABIBwAAAABCeF8O4vd/+PVnrq/FnFZyUpkCAIAzEz36sy3rANjhAQAAhSYAAAAgkO0VjfWFmNPqTcpSAAD0hOgWpFhyB0DSQR8XAgAAJAgAAAAArwjljPUlmNOKTapRAABVQ/fFkfnwCN9ljZxJARw1uxP2beUCAQBAzCQCAAAAYI84dY3FVZijSk6qUQAAk8LUIN9kZUy+Jq52463PmABM7dj8AQCAqTnFW9ULAAAAGCJaW3Rl/UWxCQCoFM5ZilHBZ3PQuDF6b/jCWwJyIe6uVAiAjG8WFwgAAColHW8lXAAAAGCB9a3QLZ1dbWwAIG+o5tU/KfLsDBoLhM3iXhcOwBvEiwMAAJiag7wVdQEAAICMgjR3da8BgBRhUpmfK0sI2h801oifhccuEMBRL4hQJReXCQAA6mUiQdINAAAAgGdidnlPa2yrJQHAkBhmZbBUbPWOikLLRNGnzYC6BACHbP5f/pdQwZgrBQAAZ+YpFwmCWj0AAACwVPACygnVojgNbACoEcZk/29tXL0zo9DsITQAHDJqEyEYc0UAAEB6Mio7UOEHAACAc32pDrQVC2qXToJXiBR9AODv12JzODT1BZr9fT1khO7AHt6x6wAAYV/Qe4Mx1wIAANiS/ugdAAAAQG7fSwD3awT3PzZOXSPg15vxA75UcAAQ5Aya5Zr0Mm1+xUdb3l9jy5LRFwBwyHzM4vAPAABgfe4zNRUCAAAAQjQdk7Y2I3+3zp9rTZcaAAqEOqNimF3BWMDlDR4BAgBECLosKQAAcHhaBAAAAGzuMiZtfJ7WfP3yY3oKACgTyQQJmbaEQ+XjTACAepMu1hMAAJAcAQAAADt7inm//4Et2Jd/HACAWjFMqAhk8X93wfpvjzMBAOoNuFhPAABAfgQAAADs6Smu/MLzfhBdWGUaAAqEMRHCp2VfYOXKHx4jAQC8Tf8DAADMz5UAAACAKW3Fqn1NvVjVGQAqBTOLA6fFP/7rh9H8eav9MqMGAJhoCVmpAwAAKJw6AQAAwOm25OQFihEKMQCQLp7pecdFe41uf4lrWQEA5leEWAAAAPPyqXnJFwAAAFC8f3lmO9YdC0CQyGFejDE1jNkeI938Tx8V1AEAxK+ZWF4AAECG9TFF0jcBAACA1erVHVRbAGBBqDA1xigfxjz6iWrHcgAAKeokFhkAAJB2XSdK+ikAAACwokNZo395WkfW/QxAhCji+pW05pWnuaLnBACwrFRinQEAAL4kYrsSNAAAACjoTuL99x+o1+XV0gaA4UHFlrdw59crHAZoLwEArK+TWHAAAIAvSdn2TA0AAADqT+kd0uvV3gaAGtGF4AcAgCDlEQsOAAAQM18DAAAAw3l1ygcqJgBQIMwQBQEAsL08YrUBAADCpmwAAECCeaMv/0tzY8bCYiavJ1FPVDtQLgGAjCEHAAAEKY9YagAAgLApGwAAMLEj8mqdxe/JH6QcmMmbnaInqh0olABAoqgDAAAiVEisMwAAQOSsDQAA2NkF+ftDHn3y69O/D/D0W7mCeBI7n5EUVYMC9RH7FQDnhB8AALC3omuRAQAAImdtAABA1v7Hxy/T8PVcTTybAx+HsFUDFRMAqJoXAABgiERMCwAAUDJlAwAANEL+SznkJHhm++/5XOUD1RMAkCMAAKAeIogFAACIlqYBAAAme2QpxH18oj3IqXcDm5htCgA5AgAApkxEsAAAABvzsuYEDQAAMPcTpYGEZ6HS3VXs2dTzBgApAAAAxxZGLBEAAMDGpAwAADAtJD+hzo3tOV22VgooAHBOJA8AAAAAACyjgQIAAMaJgqYlibIX+VWuO9nDOHt9FFAAwMsUAAAAAACYRCcFAACMEA1IKsZmI505TGfO05NESb0i3+p//wFDfpPuVZUUAPAOBQAAAAAAptJYAQCA0KM/e0eIbn7m0//0qK998xPGrtvYxXfDL3iUfvp/jf2NvQ9VUgDAexMAAAAAAJhNnwUAABLMAG2cKJr3DZ9+54aP2v5N5Gae2bEfbn5RPQWAjIEBAAAAAADAEDoyAACQbFRo8SjSnc8MuHoLLs2MBfcgVB3vsw6HVFU8ywBoOQAAAAAAAFNpxwAAwJSJn6lzQmvGku78ycjzVQv+QzNGvjxB5cf7zDUquAAgTgAAAAAAAGijCwMAACsGfQ4ZEjr8sgZcw6TXJdEddc7DooBiVwTAaxQAAAAAANhO5wUAAJbO95wwHnTOZZ104T5+Wv/XrvEQVRrjC3uZ1ErshwB4sQIAAAAAADFpvgAAUGqkJsuUz2lDQvMmpfYu4Mbr1byA9Ubl+j9z1yTfTx9l+tAGCECZQAUAAAAAAGAI3RkAIN+chHWj53YK+A3NFSEzvLjnmx+B5gdq8djf9ecYSfS4AVAmkwUAAAAAAOj3sWGhfQMA5JiZsIB03kuGjSDy47DgZxy7GkO+WM+XcRtHqKd8/zOCFgDZBwAAAAAAwCj90wUAAJtnJiwj7qLvi2BWiRoPwoIfc8ZSjE3RPc556yxe0ACyDwAAAAAAgOEmTTsAAESZ7Jz3rVy+endR3h/cYBNVH4S9P+Caz/n4sRfpOp4jACpFJgAAAAAAwLEOn30CAIxQDAtuBFJuoXo/uFEntm+tVW8/jxIiBABJBwAAAAAAwFP3+xFf/sD1X9HTAQDKzlJs/DI9y+I+WXzVTvupjToR8AlK/TO6B/AGB5BuAAAAAAAAvHWNAQCTFrODqqPCwUpR5pnxtwSJYmmtxUEFBwBRNwAAAAAAUIlWCwBg6mJRdFU4Ihz7yXEC1jNjcTkSgPINAEJuAAAAAABgO10VAIBF4xfpZj7mLdquT0s6nWMsCQCVHQDpZ/OrwbsSAAAAAACK0VgBAFg0ipFrtHreEk1d86oD8efMKgGgoAMQIbjNnm96UQIAAAAAQG16OgAAK4YzsgxSz1uTOOv89L+1fQ7+hAcEANUcgDhxbPCgWigOAAAAAACF3Sn+a+4AAEunFrZPHu+adQ47PL1mHZYNkS8YWF98KWs8+ACc/GoAyBi7CrwBAAAAAID1tG8AgNVjB5PGwScNQJwwwDHvy9z5k+vXIeZ/68CAXjIGoNADkDpYFW8DAAAAAABbaOUAAKFnDrZ/qxqruvGbvJ7/Iw8xY+KV9/AhQbxkDEB9ByBvmCrMBgAAAAAANtLTAQBmDRxffE6EYEWoZLjk/iUWbbt/ABR3AESnMfde70EAAAAAADiQ5g4AGGvYEzpsD1MESSfPlKz58d05zWtrmAnAiwYgfgYkNQMAAAAAAHbR0AEAg9pzo4e9IchRkZzQdtL9LM422wSgoAMgOt24G3vrAQAAAAAA/9K7AQAjsyAmnvJA2ZFsZQBqOgDlw1SxMQAAAAAA0O9jd0B3BgCMzAI7Q3PsZgBP3yBeMQDxI1WBMQAAAAAA0E8XBgCMyQKC8m27jc0NYODrQ+kHQL4PAAAAAACUpzMCAJr6gEA80C5k5wTo3DOVewBUCQAAAAAAgKo0RwBALx+IGItvjN3r5SpuNkBlBwDlAgAAAAAAIAtNEADQywcSxOhbQv9KGY77CvAqAUC5AAAAAAAAyEjvAwA08gEAUPQBQMUAAAAAAADIRCsEADTyAQBQ9wFAxQAAAAAAAMhBTwQABvfXRzXdNe8BAFD0AcABAAAAAAAA4AttEQBOb4RrrgMAoNwDgAMAAAAAAABAFjojAJzeBdc7BwBAfQcAZwAAAAAAAIAsdEYA0Ah/65oDAKCmA4ApfwAAAAAAID5NEwB0zQEAQPkGAEUJAAAAAAAgAa0WAPTUAQBAsQYAdQYAAAAAACAB/RoANOMBAEB1BkAxAQAAAAAAIAFtHQAi9tqfNuN16wEA7iT/lkItBkDNAQAAAAAAIC9NHwBytOHv/DHtfACA5szfQqm8ABj0BwAAAAAAiE8zCIA6LXltfgCA/oTf0qmwAJj1BwAAAAAAiEyTCIAiLXntfwAAw5TKKABKCgAAAAAAALXpHwGgVQ8AIM8Xv6mVAKgqAAAAAAAA5KCFBIBWPQCAVP+gKE6IDqBuAAAAAAAAkJcGEwAa+QAAcv4jAjnBOYDiAAAAAAAAQGoaTwBMbOE/+ivNMwGGCQAAFiT/FgEAE/8AAAAAAAARaEUBMLGL3/C3Lv7kx//r3w83ZwAAEDP/V/gAUCsAAAAAAABgFJ0pAEY28ocfGzBSAACgCnAzIBS0A5j4BwAAAAAAKE+jCoAoDX4TBgAAygEAmPgHAAAAAADgJ5pWAERv+Zs5AABQFwDAxD8AAAAAAABf6GcBDOuLT2qiHzsHYDQBAEBFAAAT/wAAAAAAAHynyQUwuEcepKE+9efd8kOZVwAAUBEAwNA/AAAAAAAAW5pKGm1A8X55hIb6ne/fPw2weIbA1AIAQMa6AADG/QEAAAAAABhrS4+p7e9q2wE66L07+/Xfmvd9hv9c3t8AAPHrAgCoUQAAAAAAADBD0g6UBh+guR709fDxo7xuAQDyRoAycwAVCQAAAAAAAKJJ3Y3S/gO02/dstV6fAABI2gEUIgAAAAAAAFjPAQAAHff2DdfKAAAgdQdQhQAAAAAAAGCXRP0p3UBA333DS8IiAAAgewdQfwAAAAAAACCU4B0rDUFA6x0AAE4pMQAoPgAAAAAAAMCvpnavtPYADXgAAI7OsVUWAJQdAAAAAAAAYKzhzSytPUAnHgAA2XX90FRCASnyVmuo2gAAAAAAAEBJHxtVunWArjwAAIxPufPGsTIIKJmiWnkVBgAAAAAAADL62K76qZP1tM+lAwjo0AMAwN20PFSsK2WAo7JR10VVAQAAAAAAgFy+NK3uz/f/+rEAjY3zkj17QwMAAHRGj52hr9QDjIkr5xn9BwAAAAAAoJ5R/SwNQWBAszzsdzNAAADA4iwdMCNu23FZAQAAAAAAoFmQX94N1G+TWxMAABqCxto/Hf2Bt5VBlmfbkb8DAAAAAABwGu0/YFGb3IgAAACj4kbptwTEwiL72/50ZNkSvVgBAAAAAAAoSZMXWNEmN+oBAMDw6FHifXjSYQGREs54Osr8UF6mAAAAAAAA1KbbC0xvkxv1AABgagAp33bMGOSD/U9HjR/KOxQAAAAAAIDIRnW+tH0BBwAAAEic9EYL86QV1hbT/3aeUWvu4gIAAAAAAJDR1L6bti+wqFNu5gMAgPVhZN68XR5hhZEJehZk+gAAAAAAAASnSQcY3DErAADAijBSDu9YBW7dLLufp0ZeDwAAAAAAQBD6ccDRnXJLAQCAXFq+4PoixfMcudYAAAAAAACs96jHpAcH6JRn3RC98AAAUqTlmPsHBwCQxQMAAAAAAPCFDhqgTW4nNVUAAJAsXVdBCBXoSruQsnmy3AnzbgAhAQAAAAAAcBrtMIC53WILCwDA+txe0SFC1CrPQgpmh3FjzLig3vsAAAAAAABaYACzusjWU8MeAGBXeq8GsSsuFeojz1LZdKsMv17e8gAAAAAAAF/oeQGM7CtbQAMrAAAR0ns1iMXxp2Ae+ZS9xc3jfgYAAAAAAFhDhwugq9lsoQyyAACQtwyhqrJrza2DvEmJE/cwAAAAAABAG60lAMwHAABwbhlCMcXJagmRvQW3MQAAAAAAQBYaTAAYIAAAQBnipYASISC3bvIdVU63MQAAAAAAAB9pMAFgwgAAAMUIwgXelk4u485xkwMAAAAAAPCHFhIAGDIAAFCSwAEAqYpNBk8EAAAAAABAPhpGAGCqAABA3SFTgHpCLO1ay0fcM3hYAAAAAAAAPtIeAgAjBQAAV1UDtYZE4WiZsNmFxt2CxwcAAAAAAOAjXSEAMFUAAKAAUS0EzR4bu7i4Q/AoAQAAAAAAfKQrBABmCwAAlCREnu4NF9F9gucLAAAAAABgM30fADBnAACgiiHsdDO4cO4Q7IoAAAAAAACBDGmOaBgBgMkDAIB8NQ4xp3vAxbI/4BkBAAAAAABIYUbfROMJAAwuAABELHlwQvDp6mBPsH0BAAAAAADwlD4UAJhdAABQpDgiHA0V37ocePxtUAAAAAAAALTRnwIAcwwAAGoWvFxZCYLrjrsdAAAAAAAgPp0sADDlAACgisGKeNjieAxxMwMAAAAAANBJqwsAjD4AAChtMDFUthoeItyrAAAAAAAADKERBoB5CAAAVD0YHEJbBDc/klkAAAAAAAAW0DsDMBxQ/5XgfQ8AoPYB6ZILq+3WAgAAAAAAgD801ACMCBzx8vDKBwBAfYRQeYflcp8AAAAAAADAfRptACYGjnjHeOUDAKCeAkhCAQAAAAAAOI3mHYBhgmSvEy9vAACUUQCZJgAAAAAAAMfS4AMwapDjreOdDQCAwgognQQAAAAAAOBwOoAAZhEAAADVFpBWAwAAAAAAQAL6gwCGFQAAACUYkEoDAAAAAABAXPqDAIYYAAAABRqQMgMAAAAAAEBQmoMAZiAAAABFHJDzAgAAAAAAQFZahwDGIwAAAHUckNgCAAAAAABAJpqJAGYjAAAAZR3kj5vvOk80AAAAAAAAtNEDBXAAAAAAUNxBlgcAAAAAAAAkoLsKYDQEAABQ9EHiBgAAAAAAAGSiJwtglAQAAFAAQiIGAAAAAAAAJKOZC2D6BAAAUAySWAEAAAAAAABkYrAWwLQKAACgKiR7AgAAAAAAAMjBVC2AiRYAAIB8dSLXCwAAAAAAADiZeVoA5wEAAACCFoxcCwAAAAAAAICnDNkCOA8AAADwlt0AAAAAAAAApGCwFsB5AAAAgInVIksKAAAAAAAAMI/ZWgAnAQAAALUhCQsAAAAAAABAMsZrARwAAAAA1IMkKQAAAAAAAABFGMEFMPoPAACcWOixXAAAAAAAAADpGMQFMPcPAADUr/JYHwAAAAAAAIACTOQCGP0HAAAAAAAAAAAAoA7juwBG/wEAAAAAAAAAAABIwygvgOl/AAAAAAAAAAAAAHIw0AvgAAAAAAAAAAAAAAAAKRnxBXAAAAAAAAAAAAAAAIA6TAIDzgAAAAAAAAAAAAAAQEHGhgEHAAAAAAAAAAAAAAAgE/PDgOl/AAAAAAAAAAAAAMjBFDFg+h8AAAAAAAAAAAAAcjBLDJj+BwAAAAAAAAAAAIDEmgdxzScDDgAAAAAAAAAAAAAAwBFMOAOOAQAAAAAAAAAAAABAZYaiwUkAAAAAAAAAAAAAAKAUU9PgJAAAAAAAAAAAAAAAkIBhaXASAAAAAAAAAAAAAACowyg1OAwAAAAAAAAAAAAAABQ3Y1DZODc4FQAAAAAAAAAAAAAA8N48im0wHUcCAAAAAAAAAAAAAABWmjV4bU4dhwQAAAAAAAAAAAAAAAaKNVRtch3nBwAAAAAAAAAAAAAAPoo4FW0AHWcPAAAAAAAAAAAAAAC+SzyabF6cCMP3lgsAAAAAAAAAAAAAWOPQeV/z7sS5q60kAAAAAAAAAAAAAHCH6d6OdcGo+vE3pD0UAAAAAAAAAAAAAJYx4ztt1TCkXvS2tAMAAAAAAAAAAAAAwBbmffctK+bUw9yuFgEAAAAAAAAAAAAA4jNIHX716w7fG/0HAAAAAAAAAAAAAHjEODUAAAAAAAAAAAAAACTgAAAAAAAAAAAAAAAAACRg+h8AAAAAAAAAAAAAABJwAAAAAAAAAAAAAAAAABJwAAAAAAAAAAAAAAAAABJwAAAAAAAAAAAAAAAAAHJwAAAAAAAAAAAAAAAAABJwAAAAAAAAAAAAAAAAABJwAAAAAAAAAAAAAAAAABIw/Q8AAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAADk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAADk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAmY/gcAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgARe31kUAAAAAAAAAAAAAAAI5fWRdQEAAAAAAAAAAAAAgFAcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgAQcAAAAAAAAAAAAAAAAgOheF6wOAAAAAAAAAAAAAAAE4QAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAABE97pmgQAAAAAAAAAAAAAAIAIHAAAAAAAAAAAAAAAAIIHXr6wRAAAAAAAAAAAAAABs5wAAAAAAAAAAAAAAAAAk4AAAAAAAAAAAAAAAAAAk8LrDMgEAAAAAAAAAAAAAwF4OAAAAAAAAAAAAAAAAQHSvR6wXAAAAAAAAAAAAAABs8XHO/38DAJnMA+BHfaGdAAAAAElFTkSuQmCC"

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/map_outline.png", encoded in based64
 */

var MapOutlineBase64 = ( function () {


}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * shader material's parameter for earth surface
 */

function EarthSurfaceShader ( controller ) {

    var helperColor = new THREE.Color();

    // cache color object for surface color

    var surfaceColor = new THREE.Vector3();

    //cache color object for selected Color

    var selectedColor = new THREE.Vector3();

    var lookupCanvas, lookupTexture;

    // the uniforms object will be created when the EarthSurfaceShader object is created

    var uniforms = createUniforms();

    // this function create the uniform for shader

    function createUniforms () {

        loadSurfaceColor();

        var uniforms = {};

        var mapIndexedTexture = ( new THREE.TextureLoader() ).load( MapIndexBase64 );

        // the mapIndex is used for getting the color when click on the earth

        uniforms.mapIndex = { type: 't', value: mapIndexedTexture };
        uniforms.mapIndex.value.magFilter = THREE.NearestFilter;
        uniforms.mapIndex.value.minFilter = THREE.NearestFilter;

        lookupCanvas = document.createElement( 'canvas' );
        lookupCanvas.width = 256;
        lookupCanvas.height = 1;

        lookupTexture = new THREE.Texture( lookupCanvas );
        lookupTexture.magFilter = THREE.NearestFilter;
        lookupTexture.minFilter = THREE.NearestFilter;
        lookupTexture.needsUpdate = true;

        // the lookup is used for

        uniforms.lookup = { type: 't', value: lookupTexture };

        var mapOutlineTexture = ( new THREE.TextureLoader() ).load( MapOutlineBase64 );

        // the outline is what the user see in browser

        uniforms.outline = { type: 't', value: mapOutlineTexture };

        // the outlineLevel is used by webgl to judge whether to show outline

        uniforms.outlineLevel = { type: 'f', value: 1 };

        // the surfaceColor is passed into webgl to render the surface color

        uniforms.surfaceColor = { type: 'v3', value: surfaceColor };

        // the flag is passed into webgl to judge whether to show surface color

        uniforms.flag = { type: 'f', value: 1 };

        // the selectedColor is passed into webgl to render the selected country on the surface

        uniforms.selectedColor = { type: 'v3', value: selectedColor };

        return uniforms;

    }

    // this function will set selectedColor and surfaceColor based on the configure

    function loadSurfaceColor () {

        setShaderColor( controller.configure.color.surface );

        if ( controller.configure.color.selected === null ) {

            setHighlightColor( controller.configure.color.surface );

        } else {

            setHighlightColor( controller.configure.color.selected );

        }

    }

    function setShaderColor( color ) {

        if (color === null) {

            return;

        }

        color = Utils.formatColor( color );

        helperColor.setHex( color );

        surfaceColor.x = helperColor.r;
        surfaceColor.y = helperColor.g;
        surfaceColor.z = helperColor.b;

    }

    function setHighlightColor(color) {

        if (color === null) {

            return;

        }

        color = Utils.formatColor( color );

        helperColor.setHex( color );

        selectedColor.x = helperColor.r;
        selectedColor.y = helperColor.g;
        selectedColor.z = helperColor.b;

    }

    // this function used to update the shader material when user change the surface color at run time

    function update () {

        loadSurfaceColor();

    }

    return {

        uniforms: uniforms,

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);",
                "vUv = uv;",
            "}"

        ].join( "\n" ),

        fragmentShader: [

            "uniform sampler2D mapIndex;",
            "uniform sampler2D lookup;",
            "uniform sampler2D outline;",
            "uniform float outlineLevel;",
            "varying vec2 vUv;",

            "uniform vec3 surfaceColor;",
            "uniform float flag;",
            "uniform vec3 selectedColor;",

            "void main() {",
                "vec4 mapColor = texture2D( mapIndex, vUv );",
                "float indexedColor = mapColor.x;",
                "vec2 lookupUV = vec2( indexedColor, 0. );",
                "vec4 lookupColor = texture2D( lookup, lookupUV );",
                "float mask = lookupColor.x + (1.-outlineLevel) * indexedColor;",
                "mask = clamp(mask,0.,1.);",
                "float outlineColor = texture2D( outline, vUv ).x * outlineLevel;",
                "float diffuse = mask + outlineColor;",

                "vec3 earthColor = vec3(0.0, 0.0, 0.0);",
                "earthColor.x = flag * surfaceColor.x * diffuse + (1.0 - flag) * diffuse;",
                "earthColor.y = flag * surfaceColor.y * diffuse + (1.0 - flag) * diffuse;",
                "earthColor.z = flag * surfaceColor.z * diffuse + (1.0 - flag) * diffuse;",

                "if (lookupColor.x > 0.9) {",
                    "earthColor = selectedColor * diffuse;",
                "}",

                "gl_FragColor = vec4( earthColor, 1.  );",

            "}"

        ].join( "\n" ),

        lookupCanvas: lookupCanvas,

        lookupTexture: lookupTexture,

        update: update

    }
}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/particle.png", encoded in based64
 */

var ParticleBase64 = ( function () {

    return "data:image/png;base64,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";

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * Shader material's parameter for moving sprite on spline
 */

function MovingSpriteShader () {

    var particleTexture = ( new THREE.TextureLoader() ).load( ParticleBase64 );

    var uniform = {

        amplitude: { type: "f", value: 1.0 },
        color: { type: "c", value: new THREE.Color( 0xffffff ) },
        texture: { type: "t", value: particleTexture }

    };

    return {

        uniforms: uniform,
		/*
		 * 可控制缩小点的大小
		 * "gl_PointSize = size * 0.4;",
		 * 
		 * */
        vertexShader: [

            "uniform float amplitude;",

            "attribute float size;",
            "attribute vec3 customColor;",

            "varying vec3 vColor;",

            "void main() {",

                "vColor = customColor;",

                "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

                "gl_PointSize = size * 0.4;",

                "gl_Position = projectionMatrix * mvPosition;",

            "}"

        ].join( "\n" ),

        fragmentShader: [

            "uniform vec3 color;",
            "uniform sampler2D texture;",

            "varying vec3 vColor;",

            "void main() {",

                "gl_FragColor = vec4( color * vColor, 1.0 );",
                "gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );",

            "}"

        ].join( "\n" )

    };
}

/**
 * @author syt123450 / https://github.com/syt123450
 * @author Botime / https://github.com/BoTime
 */

/**
 * This is a singleton object.
 * This object contains all country information in detail.
 */

var CountryData = ( function () {

    var basicCountryData = {

        AD: { colorCode: 186, name: 'ANDORRA', lat: 42.5, lon: 1.6 },
        AE: { colorCode: 22, name: 'UNITED ARAB EMIRATES', lat: 24, lon: 54 },
        AF: { colorCode: 30, name: 'AFGHANISTAN', lat: 33, lon: 65 },
        AG: { colorCode: 190, name: 'ANTIGUA AND BARBUDA', lat: 17.05, lon: -61.8 },
        AI: { colorCode: 215, name: 'ANGUILLA', lat: 18.25, lon: -63.1667 },
        AL: { colorCode: 69, name: 'ALBANIA', lat: 41, lon: 20 },
        AM: { colorCode: 115, name: 'ARMENIA', lat: 40, lon: 45 },
        AO: { colorCode: 47, name: 'ANGOLA', lat: -12.5, lon: 18.5 },
        AQ: { colorCode: 152, name: 'ANTARCTICA', lat: -90, lon: 0 },
        AR: { colorCode: 76, name: 'ARGENTINA', lat: -34, lon: -64 },
        AS: { colorCode: 208, name: 'AMERICAN SAMOA', lat: -14.3333, lon: -170 },
        AT: { colorCode: 35, name: 'AUSTRIA', lat: 47.3333, lon: 13.3333 },
        AU: { colorCode: 51, name: 'AUSTRALIA', lat: -27, lon: 133 },
        AW: { colorCode: 210, name: 'ARUBA', lat: 12.5, lon: -69.9667 },
        AZ: { colorCode: 106, name: 'AZERBAIJAN', lat: 40.5, lon: 47.5 },
        BA: { colorCode: 94, name: 'BOSNIA AND HERZEGOVINA', lat: 44, lon: 18 },
        BB: { colorCode: 191, name: 'BARBADOS', lat: 13.1667, lon: -59.5333 },
        BD: { colorCode: 31, name: 'BANGLADESH', lat: 24, lon: 90 },
        BE: { colorCode: 100, name: 'BELGIUM', lat: 50.8333, lon: 4 },
        BF: { colorCode: 2, name: 'BURKINA FASO', lat: 13, lon: -2 },
        BG: { colorCode: 103, name: 'BULGARIA', lat: 43, lon: 25 },
        BH: { colorCode: 185, name: 'BAHRAIN', lat: 26, lon: 50.55 },
        BI: { colorCode: 104, name: 'BURUNDI', lat: -3.5, lon: 30 },
        BJ: { colorCode: 143, name: 'BENIN', lat: 9.5, lon: 2.25 },
        BL: { colorCode: 203, name: 'SAINT BARTHÉLEMY' },
        BM: { colorCode: 219, name: 'BERMUDA', lat: 32.3333, lon: -64.75 },
        BN: { colorCode: 170, name: 'BRUNEI DARUSSALAM', lat: 4.5, lon: 114.6667 },
        BO: { colorCode: 10, name: 'BOLIVIA, PLURINATIONAL STATE OF', lat: -17, lon: -65 },
        BR: { colorCode: 24, name: 'BRAZIL', lat: -10, lon: -55 },
        BS: { colorCode: 161, name: 'BAHAMAS', lat: 24.25, lon: -76 },
        BT: { colorCode: 156, name: 'BHUTAN', lat: 27.5, lon: 90.5 },
        BW: { colorCode: 16, name: 'BOTSWANA', lat: -22, lon: 24 },
        BY: { colorCode: 5, name: 'BELARUS', lat: 53, lon: 28 },
        BZ: { colorCode: 23, name: 'BELIZE', lat: 17.25, lon: -88.75 },
        CA: { colorCode: 97, name: 'CANADA', lat: 60, lon: -95 },
        CD: { colorCode: 27, name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', lat: 0, lon: 25 },
        CF: { colorCode: 132, name: 'CENTRAL AFRICAN REPUBLIC', lat: 7, lon: 21 },
        CG: { colorCode: 110, name: 'CONGO', lat: -1, lon: 15 },
        CH: { colorCode: 13, name: 'SWITZERLAND', lat: 47, lon: 8 },
        CI: { colorCode: 11, name: 'CÔTE D\'IVOIRE', lat: 8, lon: -5 },
        CK: { colorCode: 206, name: 'COOK ISLANDS', lat: -21.2333, lon: -159.7667 },
        CL: { colorCode: 128, name: 'CHILE', lat: -30, lon: -71 },
        CM: { colorCode: 14, name: 'CAMEROON', lat: 6, lon: 12 },
        CN: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 },
        CO: { colorCode: 45, name: 'COLOMBIA', lat: 4, lon: -72 },
        CR: { colorCode: 78, name: 'COSTA RICA', lat: 10, lon: -84 },
        CU: { colorCode: 42, name: 'CUBA', lat: 21.5, lon: -80 },
        CV: { colorCode: 172, name: 'CAPE VERDE', lat: 16, lon: -24 },
        CY: { colorCode: 167, name: 'CYPRUS', lat: 35, lon: 33 },
        CZ: { colorCode: 67, name: 'CZECH REPUBLIC', lat: 49.75, lon: 15.5 },
        DE: { colorCode: 48, name: 'GERMANY', lat: 51, lon: 9 },
        DJ: { colorCode: 105, name: 'DJIBOUTI', lat: 11.5, lon: 43 },
        DK: { colorCode: 57, name: 'DENMARK', lat: 56, lon: 10 },
        DM: { colorCode: 181, name: 'DOMINICA', lat: 15.4167, lon: -61.3333 },
        DO: { colorCode: 32, name: 'DOMINICAN REPUBLIC', lat: 19, lon: -70.6667 },
        DZ: { colorCode: 12, name: 'ALGERIA', lat: 28, lon: 3 },
        EC: { colorCode: 142, name: 'ECUADOR', lat: -2, lon: -77.5 },
        EE: { colorCode: 113, name: 'ESTONIA', lat: 59, lon: 26 },
        EG: { colorCode: 87, name: 'EGYPT', lat: 27, lon: 30 },
        EH: { colorCode: 66, name: 'WESTERN SAHARA', lat: 24.5, lon: -13 },
        ER: { colorCode: 149, name: 'ERITREA', lat: 15, lon: 39 },
        ES: { colorCode: 118, name: 'SPAIN', lat: 40, lon: -4 },
        ET: { colorCode: 63, name: 'ETHIOPIA', lat: 8, lon: 38 },
        FI: { colorCode: 70, name: 'FINLAND', lat: 64, lon: 26 },
        FJ: { colorCode: 158, name: 'FIJI', lat: -18, lon: 175 },
        FK: { colorCode: 163, name: 'FALKLAND ISLANDS (MALVINAS)', lat: -51.75, lon: -59 },
        FM: { colorCode: 184, name: 'MICRONESIA, FEDERATED STATES OF', lat: 6.9167, lon: 158.25 },
        FO: { colorCode: 178, name: 'FAROE ISLANDS', lat: 62, lon: -7 },
        FR: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        GA: { colorCode: 119, name: 'GABON', lat: -1, lon: 11.75 },
        GB: { colorCode: 77, name: 'UNITED KINGDOM', lat: 54, lon: -2 },
        GD: { colorCode: 197, name: 'GRENADA', lat: 12.1167, lon: -61.6667 },
        GE: { colorCode: 89, name: 'GEORGIA', lat: 42, lon: 43.5 },
        GG: { colorCode: 217, name: 'GUERNSEY', lat: 49.5, lon: -2.56 },
        GH: { colorCode: 34, name: 'GHANA', lat: 8, lon: -2 },
        GI: { colorCode: 222, name: 'GIBRALTAR', lat: 36.1833, lon: -5.3667 },
        GL: { colorCode: 55, name: 'GREENLAND', lat: 72, lon: -40 },
        GM: { colorCode: 164, name: 'GAMBIA', lat: 13.4667, lon: -16.5667 },
        GN: { colorCode: 80, name: 'GUINEA', lat: 11, lon: -10 },
		GP: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        GQ: { colorCode: 101, name: 'EQUATORIAL GUINEA', lat: 2, lon: 10 },
        GR: { colorCode: 140, name: 'GREECE', lat: 39, lon: 22 },
        GT: { colorCode: 64, name: 'GUATEMALA', lat: 15.5, lon: -90.25 },
        GU: { colorCode: 227, name: 'GUAM', lat: 13.4667, lon: 144.7833 },
        GW: { colorCode: 33, name: 'GUINEA-BISSAU', lat: 12, lon: -15 },
        GY: { colorCode: 99, name: 'GUYANA', lat: 5, lon: -59 },
        HK: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 },
        HN: { colorCode: 125, name: 'HONDURAS', lat: 15, lon: -86.5 },
        HR: { colorCode: 54, name: 'CROATIA', lat: 45.1667, lon: 15.5 },
        HT: { colorCode: 93, name: 'HAITI', lat: 19, lon: -72.4167 },
        HU: { colorCode: 120, name: 'HUNGARY', lat: 47, lon: 20 },
        ID: { colorCode: 7, name: 'INDONESIA', lat: -5, lon: 120 },
        IE: { colorCode: 81, name: 'IRELAND', lat: 53, lon: -8 },
        IL: { colorCode: 137, name: 'ISRAEL', lat: 31.5, lon: 34.75 },
        IM: { colorCode: 226, name: 'ISLE OF MAN', lat: 54.23, lon: -4.55 },
        IN: { colorCode: 95, name: 'INDIA', lat: 20, lon: 77 },
        IQ: { colorCode: 53, name: 'IRAQ', lat: 33, lon: 44 },
        IR: { colorCode: 61, name: 'IRAN, ISLAMIC REPUBLIC OF', lat: 32, lon: 53 },
        IS: { colorCode: 126, name: 'ICELAND', lat: 65, lon: -18 },
        IT: { colorCode: 28, name: 'ITALY', lat: 42.8333, lon: 12.8333 },
        JE: { colorCode: 214, name: 'JERSEY', lat: 49.21, lon: -2.13 },
        JM: { colorCode: 166, name: 'JAMAICA', lat: 18.25, lon: -77.5 },
        JO: { colorCode: 20, name: 'JORDAN', lat: 31, lon: 36 },
        JP: { colorCode: 40, name: 'JAPAN', lat: 36, lon: 138 },
        KE: { colorCode: 18, name: 'KENYA', lat: 1, lon: 38 },
        KG: { colorCode: 72, name: 'KYRGYZSTAN', lat: 41, lon: 75 },
        KH: { colorCode: 123, name: 'CAMBODIA', lat: 13, lon: 105 },
        KI: { colorCode: 183, name: 'KIRIBATI', lat: 1.4167, lon: 173 },
        KM: { colorCode: 176, name: 'COMOROS', lat: -12.1667, lon: 44.25 },
        KN: { colorCode: 201, name: 'SAINT KITTS AND NEVIS', lat: 17.3333, lon: -62.75 },
        KP: { colorCode: 139, name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', lat: 40, lon: 127 },
        KR: { colorCode: 124, name: 'KOREA, REPUBLIC OF', lat: 37, lon: 127.5 },
        KW: { colorCode: 159, name: 'KUWAIT', lat: 29.3375, lon: 47.6581 },
        KY: { colorCode: 200, name: 'CAYMAN ISLANDS', lat: 19.5, lon: -80.5 },
        KZ: { colorCode: 151, name: 'KAZAKHSTAN', lat: 48, lon: 68 },
        LA: { colorCode: 138, name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', lat: 18, lon: 105 },
        LB: { colorCode: 147, name: 'LEBANON', lat: 33.8333, lon: 35.8333 },
        LC: { colorCode: 194, name: 'SAINT LUCIA', lat: 13.8833, lon: -61.1333 },
        LI: { colorCode: 211, name: 'LIECHTENSTEIN', lat: 47.1667, lon: 9.5333 },
        LK: { colorCode: 136, name: 'SRI LANKA', lat: 7, lon: 81 },
        LR: { colorCode: 130, name: 'LIBERIA', lat: 6.5, lon: -9.5 },
        LS: { colorCode: 102, name: 'LESOTHO', lat: -29.5, lon: 28.5 },
        LT: { colorCode: 134, name: 'LITHUANIA', lat: 56, lon: 24 },
        LU: { colorCode: 175, name: 'LUXEMBOURG', lat: 49.75, lon: 6.1667 },
        LV: { colorCode: 58, name: 'LATVIA', lat: 57, lon: 25 },
        LY: { colorCode: 4, name: 'LIBYA', lat: 25, lon: 17 },
        MA: { colorCode: 129, name: 'MOROCCO', lat: 32, lon: -5 },
        MC: { colorCode: 224, name: 'MONACO', lat: 43.7333, lon: 7.4 },
        MD: { colorCode: 146, name: 'MOLDOVA, REPUBLIC OF', lat: 47, lon: 29 },
        ME: { colorCode: 112, name: 'MONTENEGRO', lat: 42, lon: 19 },
        MG: { colorCode: 9, name: 'MADAGASCAR', lat: -20, lon: 47 },
        MH: { colorCode: 209, name: 'MARSHALL ISLANDS', lat: 9, lon: 168 },
        MK: { colorCode: 15, name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', lat: 41.8333, lon: 22 },
        ML: { colorCode: 26, name: 'MALI', lat: 17, lon: -4 },
        MM: { colorCode: 62, name: 'MYANMAR', lat: 22, lon: 98 },
        MN: { colorCode: 155, name: 'MONGOLIA', lat: 46, lon: 105 },
        MP: { colorCode: 187, name: 'NORTHERN MARIANA ISLANDS', lat: 15.2, lon: 145.75 },
        MR: { colorCode: 46, name: 'MAURITANIA', lat: 20, lon: -12 },
        MS: { colorCode: 202, name: 'MONTSERRAT', lat: 16.75, lon: -62.2 },
        MT: { colorCode: 198, name: 'MALTA', lat: 35.8333, lon: 14.5833 },
        MU: { colorCode: 177, name: 'MAURITIUS', lat: -20.2833, lon: 57.55 },
        MV: { colorCode: 199, name: 'MALDIVES', lat: 3.25, lon: 73 },
        MW: { colorCode: 121, name: 'MALAWI', lat: -13.5, lon: 34 },
        MX: { colorCode: 21, name: 'MEXICO', lat: 23, lon: -102 },
        MY: { colorCode: 107, name: 'MALAYSIA', lat: 2.5, lon: 112.5 },
        MZ: { colorCode: 39, name: 'MOZAMBIQUE', lat: -18.25, lon: 35 },
        NA: { colorCode: 85, name: 'NAMIBIA', lat: -22, lon: 17 },
        NC: { colorCode: 157, name: 'NEW CALEDONIA', lat: -21.5, lon: 165.5 },
        NE: { colorCode: 56, name: 'NIGER', lat: 16, lon: 8 },
        NG: { colorCode: 82, name: 'NIGERIA', lat: 10, lon: 8 },
        NI: { colorCode: 127, name: 'NICARAGUA', lat: 13, lon: -85 },
        NL: { colorCode: 131, name: 'NETHERLANDS', lat: 52.5, lon: 5.75 },
        NO: { colorCode: 145, name: 'NORWAY', lat: 62, lon: 10 },
        NP: { colorCode: 148, name: 'NEPAL', lat: 28, lon: 84 },
        NR: { colorCode: 221, name: 'NAURU', lat: -0.5333, lon: 166.9167 },
        NU: { colorCode: 204, name: 'NIUE', lat: -19.0333, lon: -169.8667 },
        NZ: { colorCode: 41, name: 'NEW ZEALAND', lat: -41, lon: 174 },
        OM: { colorCode: 74, name: 'OMAN', lat: 21, lon: 57 },
        PA: { colorCode: 75, name: 'PANAMA', lat: 9, lon: -80 },
        PE: { colorCode: 1, name: 'PERU', lat: -10, lon: -76 },
        PF: { colorCode: 173, name: 'FRENCH POLYNESIA', lat: -15, lon: -140 },
        PG: { colorCode: 52, name: 'PAPUA NEW GUINEA', lat: -6, lon: 147 },
        PH: { colorCode: 108, name: 'PHILIPPINES', lat: 13, lon: 122 },
        PK: { colorCode: 6, name: 'PAKISTAN', lat: 30, lon: 70 },
        PL: { colorCode: 84, name: 'POLAND', lat: 52, lon: 20 },
        PM: { colorCode: 205, name: 'SAINT PIERRE AND MIQUELON', lat: 46.8333, lon: -56.3333 },
        PN: { colorCode: 223, name: 'PITCAIRN', lat: -24.7, lon: -127.4 },
        PR: { colorCode: 168, name: 'PUERTO RICO', lat: 18.25, lon: -66.5 },
        PS: { colorCode: 169, name: 'PALESTINIAN TERRITORY, OCCUPIED', lat: 32, lon: 35.25 },
        PT: { colorCode: 44, name: 'PORTUGAL', lat: 39.5, lon: -8 },
        PW: { colorCode: 188, name: 'PALAU', lat: 7.5, lon: 134.5 },
        PY: { colorCode: 79, name: 'PARAGUAY', lat: -23, lon: -58 },
        QA: { colorCode: 165, name: 'QATAR', lat: 25.5, lon: 51.25 },
		RE: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        RO: { colorCode: 59, name: 'ROMANIA', lat: 46, lon: 25 },
        RS: { colorCode: 111, name: 'SERBIA', lat: 44, lon: 21 },
        RU: { colorCode: 92, name: 'RUSSIAN FEDERATION', lat: 60, lon: 100 },
        RW: { colorCode: 114, name: 'RWANDA', lat: -2, lon: 30 },
        SA: { colorCode: 90, name: 'SAUDI ARABIA', lat: 25, lon: 45 },
        SB: { colorCode: 73, name: 'SOLOMON ISLANDS', lat: -8, lon: 159 },
        SC: { colorCode: 189, name: 'SEYCHELLES', lat: -4.5833, lon: 55.6667 },
        SD: { colorCode: 49, name: 'SUDAN', lat: 15, lon: 30 },
        SE: { colorCode: 36, name: 'SWEDEN', lat: 62, lon: 15 },
        SG: { colorCode: 228, name: 'SINGAPORE', lat: 1.3667, lon: 103.8 },
        SH: { colorCode: 213, name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', lat: -15.9333, lon: -5.7 },
        SI: { colorCode: 144, name: 'SLOVENIA', lat: 46, lon: 15 },
        SK: { colorCode: 133, name: 'SLOVAKIA', lat: 48.6667, lon: 19.5 },
        SL: { colorCode: 25, name: 'SIERRA LEONE', lat: 8.5, lon: -11.5 },
        SM: { colorCode: 218, name: 'SAN MARINO', lat: 43.7667, lon: 12.4167 },
        SN: { colorCode: 116, name: 'SENEGAL', lat: 14, lon: -14 },
        SO: { colorCode: 29, name: 'SOMALIA', lat: 10, lon: 49 },
        SR: { colorCode: 65, name: 'SURINAME', lat: 4, lon: -56 },
        ST: { colorCode: 179, name: 'SAO TOME AND PRINCIPE', lat: 1, lon: 7 },
        SV: { colorCode: 98, name: 'EL SALVADOR', lat: 13.8333, lon: -88.9167 },
        SY: { colorCode: 71, name: 'SYRIAN ARAB REPUBLIC', lat: 35, lon: 38 },
        SZ: { colorCode: 153, name: 'SWAZILAND', lat: -26.5, lon: 31.5 },
        TC: { colorCode: 192, name: 'TURKS AND CAICOS ISLANDS', lat: 21.75, lon: -71.5833 },
        TD: { colorCode: 68, name: 'CHAD', lat: 15, lon: 19 },
        TG: { colorCode: 117, name: 'TOGO', lat: 8, lon: 1.1667 },
        TH: { colorCode: 50, name: 'THAILAND', lat: 15, lon: 100 },
        TJ: { colorCode: 122, name: 'TAJIKISTAN', lat: 39, lon: 71 },
        TL: { colorCode: 160, name: 'TIMOR-LESTE', lat: -8.55, lon: 125.5167 },
        TM: { colorCode: 141, name: 'TURKMENISTAN', lat: 40, lon: 60 },
        TN: { colorCode: 83, name: 'TUNISIA', lat: 34, lon: 9 },
        TO: { colorCode: 182, name: 'TONGA', lat: -20, lon: -175 },
        TR: { colorCode: 37, name: 'TURKEY', lat: 39, lon: 35 },
        TT: { colorCode: 171, name: 'TRINIDAD AND TOBAGO', lat: 11, lon: -61 },
        TV: { colorCode: 220, name: 'TUVALU', lat: -8, lon: 178 },
        TW: { colorCode: 19, name: 'TAIWAN', lat: 23.5, lon: 121 },
        TZ: { colorCode: 88, name: 'TANZANIA, UNITED REPUBLIC OF', lat: -6, lon: 35 },
        UA: { colorCode: 17, name: 'UKRAINE', lat: 49, lon: 32 },
        UG: { colorCode: 38, name: 'UGANDA', lat: 1, lon: 32 },
        US: { colorCode: 150, name: 'UNITED STATES', lat: 38, lon: -97 },
        UY: { colorCode: 109, name: 'URUGUAY', lat: -33, lon: -56 },
        UZ: { colorCode: 154, name: 'UZBEKISTAN', lat: 41, lon: 64 },
        VA: { colorCode: 225, name: 'HOLY SEE (VATICAN CITY STATE)', lat: 41.9, lon: 12.45 },
        VC: { colorCode: 193, name: 'SAINT VINCENT AND THE GRENADINES', lat: 13.25, lon: -61.2 },
        VE: { colorCode: 43, name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF', lat: 8, lon: -66 },
        VG: { colorCode: 212, name: 'VIRGIN ISLANDS, BRITISH', lat: 18.5, lon: -64.5 },
        VI: { colorCode: 196, name: 'VIRGIN ISLANDS, U.S.', lat: 18.3333, lon: -64.8333 },
        VN: { colorCode: 91, name: 'VIET NAM', lat: 16, lon: 106 },
        VU: { colorCode: 162, name: 'VANUATU', lat: -16, lon: 167 },
        WF: { colorCode: 207, name: 'WALLIS AND FUTUNA', lat: -13.3, lon: -176.2 },
        WS: { colorCode: 174, name: 'SAMOA', lat: -13.5833, lon: -172.3333 },
        YE: { colorCode: 8, name: 'YEMEN', lat: 15, lon: 48 },
        YT: { colorCode: 195, name: 'MAYOTTE', lat: -12.8333, lon: 45.1667 },
        ZA: { colorCode: 86, name: 'SOUTH AFRICA', lat: -29, lon: 24 },
        ZM: { colorCode: 60, name: 'ZAMBIA', lat: -15, lon: 30 },
        ZW: { colorCode: 135, name: 'ZIMBABWE', lat: -20, lon: 30 }

    };

    // This function create the center ( Three.js vector3 ) of all country, and add the center to "basicCountryData" object

    function createCountryCenter () {

        var rad = 100;

        for ( var s in basicCountryData ) {

            var country = basicCountryData[ s ];

            var lon = country.lon - 90;
            var lat = country.lat;

            var phi = Math.PI / 2 - lat * Math.PI / 180 - Math.PI * 0.01;
            var theta = 2 * Math.PI - lon * Math.PI / 180 + Math.PI * 0.06;

            var center = new THREE.Vector3();
            center.x = Math.sin( phi ) * Math.cos( theta ) * rad;
            center.y = Math.cos( phi ) * rad;
            center.z = Math.sin( phi ) * Math.sin( theta ) * rad;

            country.center = center;

        }

    }

    // when CountryData is initialized, it will automatically create the center ( Three.js vector3) for all country

    createCountryCenter();

    return basicCountryData;

}() );

var Continent = (function() {

	var continentList = {
		"names": ["OCEANIA", "NORTH AMERICA", "SOUTH AMERICA", "AFRICA", "EUROPE", "ASIA"],
		"OCEANIA": {
			"countries": ["AU", "CK", "FJ", "GU", "NZ", "PG"],
			"lat": -27,
			"lon": 133
		},
		"NORTH AMERICA": {
			"countries": ["BM", "BS", "CA", "CR", "CU", "GD", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "US", "VE"],
			"lat": 39.5,
			"lon": -95
		},
		"SOUTH AMERICA": {
			"countries": ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PE", "PY", "UY"],
			"lat": -21,
			"lon": -58.5
		},
		"AFRICA": {
			"countries": ["AO", "BI", "BJ", "BW", "CF", "CG", "CM", "CV", "DZ", "EG", "ET", "GA", "GH", "GM", "GN", "GQ", "KE", "LY", "MA", "MG", "ML", "MR", "MU", "MZ", "NA", "NE", "NG", "RW", "SD", "SN", "SO", "TZ", "UG", "ZA", "ZM", "ZW", "TN"],
			"lat": 1,
			"lon": 17
		},
		"EUROPE": {
			"countries": ["AT", "BE", "BG", "CH", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SK", "SM", "UA", "VA"],
			"lat": 53.5,
			"lon": 28
		},
		"ASIA": {
			"countries": ["AE", "AF", "AL", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "ID", "IL", "IN", "IQ", "JO", "JP", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LU", "MN", "MV", "MY", "NP", "OM", "PH", "PK", "QA", "SA", "SG", "SY", "TH", "TJ", "TM", "UZ", "VN", "YE"],
			"lat": 35,
			"lon": 108.5
		}
	};

	function createContinentCenter () {

		var rad = 100;

		for ( var i = 0; i < continentList.names.length; i++ ) {

			var continentName = continentList.names[i];
			var continentInfo = continentList[continentName];

			var lon = continentInfo.lon - 90;
			var lat = continentInfo.lat;

			var phi = Math.PI / 2 - lat * Math.PI / 180 - Math.PI * 0.01;
			var theta = 2 * Math.PI - lon * Math.PI / 180 + Math.PI * 0.06;

			var center = new THREE.Vector3();
			center.x = Math.sin( phi ) * Math.cos( theta ) * rad;
			center.y = Math.cos( phi ) * rad;
			center.z = Math.sin( phi ) * Math.sin( theta ) * rad;

			continentInfo.center = center;

		}

	}

	createContinentCenter();

	return continentList;

}());

/**
 * @author syt123450 / https://github.com/syt123450
 * @author botime / https://github.com/botime
 */

/**
 * This utils create objects in for the scene
 */

var ObjectUtils = ( function () {

    function createScene ( controller ) {

        var scene = new THREE.Scene();
        if ( controller.configure.color.background !== null ) {

            scene.background = new THREE.Color( controller.configure.color.background );

        }

        return scene;
    }

    //create Three.js camera

    function createCamera ( container ) {
		/*
		 * 可设置  初始 摄像机景深默认为 1400
		 * 
		 * camera.position.z = 1400;
		 * 
		 * 
		 * 可设置 观察角度
		 * 默认观察角度 0, 0, 0
		 * camera.lookAt( 0, 0, 0 );
		 * */
        var camera = new THREE.PerspectiveCamera( 12, container.clientWidth / container.clientHeight, 1, 20000 );
        camera.position.z = 1600;
        camera.position.y = 0;
        camera.lookAt( 0, 20, 0 );

        return camera;

    }

    //create Three.js lights

    function createLights () {

        var lights = [];

        var light1 = new THREE.AmbientLight( 0x505050 );

        var light2 = new THREE.SpotLight( 0xeeeeee, 3 );
        light2.position.x = 730;
        light2.position.y = 520;
        light2.position.z = 626;
        light2.castShadow = true;

        var light3 = new THREE.PointLight( 0x222222, 14.8 );
        light3.position.x = -640;
        light3.position.y = -500;
        light3.position.z = -1000;

        lights.push( light1 );
        lights.push( light2 );
        lights.push( light3 );

        return lights;

    }

    //create Three.js renderer, using webgl renderer to render canvas

    function createRenderer ( container, alpha ) {

        var sceneArea = document.createElement( "canvas" );

        // the scene's height and width only fit the div's actual height and width

        var cs = getComputedStyle( container );

        var paddingX = parseFloat( cs.paddingLeft ) + parseFloat( cs.paddingRight );
        var paddingY = parseFloat( cs.paddingTop ) + parseFloat( cs.paddingBottom );

        var borderX = parseFloat( cs.borderLeftWidth ) + parseFloat( cs.borderRightWidth );
        var borderY = parseFloat( cs.borderTopWidth ) + parseFloat( cs.borderBottomWidth );

        sceneArea.width = container.clientWidth - paddingX - borderX;
        sceneArea.height = container.clientHeight - paddingY - borderY;

        var renderer = new THREE.WebGLRenderer( { canvas: sceneArea, antialias: true, alpha: alpha } );
        renderer.setSize( sceneArea.width, sceneArea.height );
        renderer.autoClear = false;
        renderer.sortObjects = false;
        renderer.generateMipmaps = false;
        
        return renderer;

    }

    //create stats to monitor performance, for development, the detailed introduce about stats: https://github.com/mrdoob/stats.js

    function createStats () {

        var stats = new Stats();
        stats.showPanel( 1 );
        stats.dom.style.position = "absolute";

        return stats;

    }

    // The Sphere object is the earth object (without spineline visual system)

    function createSphere ( controller ) {

        // create EarthSurfaceShader object when initialized

        var earthSurfaceShader = new EarthSurfaceShader( controller );

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: earthSurfaceShader.uniforms,
            vertexShader: earthSurfaceShader.vertexShader,
            fragmentShader: earthSurfaceShader.fragmentShader

        } );

        var sphere = new THREE.Mesh( new THREE.SphereGeometry( 100, 40, 40 ), shaderMaterial );
        sphere.doubleSided = false;
        sphere.rotation.x = Math.PI;
        sphere.rotation.y = -Math.PI / 2;
        sphere.rotation.z = Math.PI;

        sphere.name = "sphere";

        // hold the pointer for EarthSurfaceShader, the controller will use this pointer to hold the pointer of the EarthSurfaceShader

        sphere.earthSurfaceShader = earthSurfaceShader;

        return sphere;

    }

    function createHalo ( controller ) {

        var radius = 100;
        var geometry = new THREE.SphereBufferGeometry( radius, 32, 32 );

        var haloShader = new HaloShader( controller );
        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: haloShader.uniforms,
            vertexShader: haloShader.vertexShader,
            fragmentShader: haloShader.fragmentShader,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true

        } );

        var mesh = new THREE.Mesh( geometry, shaderMaterial );
        mesh.scale.set( 1.2, 1.2, 1.2 );

        mesh.haloShader = haloShader;

        return mesh;

    }

    /**
     * The SplineSystem contains the mesh of spine lines and the moving object on the globe.
     * The mesh will be created each time the clicked country changes.
     */

    function createSplineSystem ( controller ) {

        var geometries = createGeometries( controller );

        var splineOutline = createSplineOutline( geometries.linesGeo );
        var pSystem = createParticleSystem( geometries.particlesGeo, geometries.movingPoints );

        splineOutline.add( pSystem );

        return splineOutline;

    }

    function createGeometries ( controller ) {

        var inputData = controller.globalData;
        controller.relatedCountries = [];
        var selectedCountry = controller.selectedCountry;

        var linesGeo = new THREE.Geometry();
        var lineColors = [];

        var particlesGeo = new THREE.BufferGeometry();

        var movingPoints = [];

        var positions = [];
        var sizes = [];
        var customColors = [];

        for (var i in inputData) {

            var set = inputData[ i ];

            if ( ( controller.configure.control.inOnly && set.i !== CountryColorMap[ selectedCountry.colorCode ] ) ||
                ( controller.configure.control.outOnly && set.e !== CountryColorMap[ selectedCountry.colorCode ] ) ) {

                continue;

            }

            if ( set.i === CountryColorMap[ selectedCountry.colorCode ] ||
                set.e === CountryColorMap[ selectedCountry.colorCode ] ) {

                var lineColor;

                if ( set.e === CountryColorMap[ selectedCountry.colorCode ] ) {

                    if ( Continent.names.indexOf( set.i.toUpperCase() ) !== -1 ) {

                        var continentCountries = Continent[ set.i.toUpperCase() ].countries;

                        for ( var j = 0; j < continentCountries.length; j++ ) {

                            var countryCode = continentCountries[ j ];

                            if ( CountryData[ countryCode ] !== undefined ) {

								controller.relatedCountries.push(CountryData[continentCountries[j]]);

                            }

                        }

                    } else {

						controller.relatedCountries.push( CountryData[ set.i ] );

                    }

					if ( set.outColor === undefined ) {

						lineColor = new THREE.Color( controller.configure.color.out );

					} else {

						lineColor = new THREE.Color( set.outColor );

					}

                } else {

                    controller.relatedCountries.push( CountryData[ set.e ] );

                    if ( set.inColor === undefined ) {

                        lineColor = new THREE.Color( controller.configure.color.in );

                    } else {

                        lineColor = new THREE.Color( set.inColor );

                    }

                }

                var lastColor;

                for ( var s in set.lineGeometry.vertices ) {

                    lineColors.push( lineColor );
                    lastColor = lineColor;

                }

                linesGeo.merge( set.lineGeometry );

                var particleColor = lastColor.clone();
                var points = set.lineGeometry.vertices;
                var particleCount = Math.floor( set.v / 8000 / set.lineGeometry.vertices.length ) + 1;
                particleCount = Utils.constrain( particleCount, 1, 100 );
                var particleSize = set.lineGeometry.size * controller.container.clientHeight / 1000;

                for ( s = 0; s < particleCount; s++ ) {

                    var desiredIndex = s / particleCount * points.length;

                    var rIndex = Utils.constrain( Math.floor( desiredIndex ), 0, points.length - 1 );
                    var point = points[ rIndex ];
                    var particle = point.clone();
                    particle.moveIndex = rIndex;
                    particle.nextIndex = rIndex + 1;

                    if ( particle.nextIndex >= points.length ) {

                        particle.nextIndex = 0;

                    }

                    particle.lerpN = 0;
                    particle.path = points;

                    movingPoints.push( particle );

                    particle.size = particleSize;

                    positions.push( particle.x );
                    positions.push( particle.y );
                    positions.push( particle.z );

                    sizes.push( particleSize );

                    customColors.push( particleColor.r );
                    customColors.push( particleColor.g );
                    customColors.push( particleColor.b );

                }

            }

        }

        linesGeo.colors = lineColors;

        particlesGeo.addAttribute( "position", new THREE.Float32BufferAttribute( positions, 3 ) );
        particlesGeo.addAttribute( "size", new THREE.Float32BufferAttribute( sizes, 1 ) );
        particlesGeo.addAttribute( "customColor", new THREE.Float32BufferAttribute( customColors, 3 ) );

        particlesGeo.attributes.position.needsUpdate = true;

        return {

            linesGeo: linesGeo,
            particlesGeo: particlesGeo,
            movingPoints: movingPoints

        }

    }

    function createSplineOutline ( linesGeo ) {

        var splineOutline = new THREE.Line( linesGeo, new THREE.LineBasicMaterial( {

            color: 0xffffff,
            opacity: 1.0,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
            vertexColors: true,
            linewidth: 1

        } ) );

        splineOutline.renderDepth = false;

        return splineOutline;

    }

    function createParticleSystem ( particlesGeo, movingPoints ) {

        var movingSpriteShader = new MovingSpriteShader();

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: movingSpriteShader.uniforms,
            vertexShader: movingSpriteShader.vertexShader,
            fragmentShader: movingSpriteShader.fragmentShader,

            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: false,
            transparent: true

        } );

        var pSystem = new THREE.Points( particlesGeo, shaderMaterial );

        pSystem.dynamic = true;

        pSystem.movingPoints = movingPoints;


        pSystem.update = function () {

            for ( var i in this.movingPoints ) {

                var particle = this.movingPoints[ i ];

                var path = particle.path;

                particle.lerpN += 0.05;

                if (particle.lerpN > 1) {

                    particle.lerpN = 0;
                    particle.moveIndex = particle.nextIndex;
                    particle.nextIndex++;

                    if (particle.nextIndex >= path.length) {

                        particle.moveIndex = 0;
                        particle.nextIndex = 1;

                    }

                }

                var currentPoint = path[ particle.moveIndex ];
                var nextPoint = path[ particle.nextIndex ];

                particle.copy( currentPoint );
                if ( nextPoint !== undefined && particle !== undefined ) {

                    particle.lerp( nextPoint, particle.lerpN );

                }

                this.geometry.attributes.position.array[ 3 * i ] = particle.x;
                this.geometry.attributes.position.array[ 3 * i + 1 ] = particle.y;
                this.geometry.attributes.position.array[ 3 * i + 2 ] = particle.z;

            }

            this.geometry.attributes.position.needsUpdate = true;

        };

        return pSystem;
    }

    return {

        createScene: createScene,

        createCamera: createCamera,

        createLights: createLights,

        createRenderer: createRenderer,

        createStats: createStats,

        createSphere: createSphere,

        createHalo: createHalo,

        createSplineSystem: createSplineSystem

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the update of VisSystem ( The system will be updated when clicked country changed ).
 */

function VisSystemHandler ( controller ) {

    function update () {

        // first remove the old object from rotating ( contains splines and moving sprites )

        controller.rotating.remove( controller.visualizationMesh );

        // create a new visualization mesh

        controller.visualizationMesh = new THREE.Object3D();
        var lines = ObjectUtils.createSplineSystem( controller );
        controller.visualizationMesh.add( lines );

        // add the new visualization mesh to rotating

        controller.rotating.add( controller.visualizationMesh );

    }

    return {

        update: update

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the switch of the clicked country.
 */

function SwitchCountryHandler ( controller ) {

    var pickedCallBack = null;

    function execute( pickColorIndex ) {

        executeSwitch( pickColorIndex );
        executeCallback();

    }

    function executeSwitch ( pickColorIndex ) {

        // first change the selectedCountry

        controller.selectedCountry = CountryData[ CountryColorMap[ pickColorIndex ] ];

        // then create a new visSystem

        controller.visSystemHandler.update();

        // change the highlight country on the earth surface

        controller.surfaceHandler.highlightCountry( pickColorIndex );

        // at last rotate the earth

        controller.rotationHandler.rotateToTargetCountry();

    }

    function executeCallback () {

        if ( pickedCallBack !== null ) {

            // protected clone, return new object for user

            var selectedCountry = Utils.transformCountryData( controller.selectedCountry );

            var relatedCountries = [];

            for ( var i in controller.relatedCountries ) {

                relatedCountries.push(
                    Utils.transformCountryData( controller.relatedCountries[ i ] )
                );

            }

            pickedCallBack( selectedCountry, relatedCountries );

        }

    }

    function switchFromAPI ( ISOAbbr, direction ) {

        // using the snapshot, so the function just change the controller.configure for a short time

        var snapshot = {};

        if ( direction === "in" || direction === "out" ) {

            snapshot.inOnly = controller.configure.control.inOnly;
            snapshot.outOnly = controller.configure.control.outOnly;

            if ( direction === "in" ) {

                controller.configure.control.inOnly = true;
                controller.configure.control.outOnly = false;

            } else {

                controller.configure.control.inOnly = false;
                controller.configure.control.outOnly = true;

            }

        }

        if ( CountryData[ ISOAbbr ] !== undefined ) {

            executeSwitch( CountryData[ ISOAbbr ].colorCode );

        }

        // restore the controller.configure

        if ( direction === "in" || direction === "out" ) {

            controller.configure.control.inOnly = snapshot.inOnly;
            controller.configure.control.outOnly = snapshot.outOnly;

        }

    }

    return {

        executeSwitch: execute,

        switchFromAPI: switchFromAPI,

        setCountryPickCallBack: function ( callBack ) {

            pickedCallBack = callBack;

        }

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle resize of the window event.
 */

function ResizeHandler ( controller ) {

    function resizeScene () {

        controller.camera.aspect = controller.container.clientWidth / controller.container.clientHeight;
        controller.camera.updateProjectionMatrix();
        controller.renderer.setSize( controller.container.clientWidth, controller.container.clientHeight );
        controller.visSystemHandler.update();

    }

    return {

        resizeScene: resizeScene

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This Manager manage all mouse event for the scene.
 * This Manager will be created when InitHandler's init() function is called.
 */

function SceneEventManager () {

    var mouseX = 0, mouseY = 0, pmouseX = 0, pmouseY = 0;
    var pressX = 0, pressY = 0;

    var controller;

    // the mouse and raycaster is used to judge whether the mouse is clicked on the globe

    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();

    function onDocumentMouseMove ( event ) {

        pmouseX = mouseX;
        pmouseY = mouseY;

        mouseX = event.clientX - controller.container.clientWidth * 0.5 - Utils.getElementViewLeft( controller.container );
        mouseY = event.clientY - controller.container.clientHeight * 0.5 - Utils.getElementViewTop( controller.container );

        // if it is in a dragging state, let the RotationHandler to handlers the rotation of the globe

        if ( controller.rotationHandler.isDragging() ) {

            controller.rotationHandler.addRotateVY( ( mouseX - pmouseX ) / 2 * Math.PI / 180 * 0.3 );
            controller.rotationHandler.addRotateVX( ( mouseY - pmouseY ) / 2 * Math.PI / 180 * 0.3 );

        }

    }

    function onDocumentMouseDown ( event ) {

        if ( event.target.className.indexOf( 'noMapDrag' ) !== -1 ) {

            return;

        }

        // set the state to the dragging state

        controller.rotationHandler.setDragging( true );
        pressX = mouseX;
        pressY = mouseY;
        controller.rotationHandler.clearRotateTargetX();

    }

    function onDocumentMouseUp ( event ) {

        // When mouse up, the notify the RotatingHandler to set drag false

        controller.rotationHandler.setDragging( false );

    }

    function onMouseWheel ( event ) {

        var delta = 0;

        // calculate the mouse wheel delta in IE or Opera

        if ( event.wheelDelta ) {

            delta = event.wheelDelta / 120;

        }

        //	calculate the mouse wheel delta in firefox

        else if ( event.detail ) {

            delta = -event.detail / 3;

        }

        if ( delta ) {

            // use the WheelHandler to handle actual mouse wheel event, if we would like to do something
			console.log('delta', delta)
            controller.wheelHandler.handleMWheel(delta);

        }
        event.returnValue = false;
		console.log('mose wheel', delta)
    }

    function onResize ( event ) {

        // use the ResizeHandler to handle the actual window resize event, if we would like to do something

        controller.resizeHandler.resizeScene();

    }

    function onClick ( event ) {

        //	if the click is drag, do nothing

        if ( Math.abs( pressX - mouseX ) > 3 || Math.abs( pressY - mouseY ) > 3 ) {

            return;

        }

        // let the mouse and raycaster to judge whether the click is on the earth, if not do noting

        mouse.x = ( ( event.clientX - Utils.getElementViewLeft( controller.container ) ) / controller.container.clientWidth ) * 2 - 1;
        mouse.y = -( ( event.clientY - Utils.getElementViewTop( controller.container ) ) / controller.container.clientHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, controller.camera );

        var intersects = raycaster.intersectObjects( controller.scene.children, true );

        // intersects.length === 0 means that the mouse click is not on the globe

        if ( intersects.length === 0 ) {

            return;

        }

        // to get the color of clicked area on the globe's surface

        var pickColorIndex = controller.surfaceHandler.getPickColor( mouseX, mouseY );

        // for debug

        // console.log( pickColorIndex );

        /**
         * on a specific condition will let the SwitchCountryHandler to execute switch
         * condition:
         * 1. the picked color is actually a color to represent a country
         * 2. the picked color is not 0 (0 represents ocean)
         * 3. if the user want only the mentioned countries can be clicked, it will judge whether the picked country is mentioned
         */

        if ( CountryColorMap[ pickColorIndex ] !== undefined &&
             pickColorIndex !== 0 &&
             ( ( controller.configure.control.disableUnmentioned &&
                 controller.mentionedCountryCodes.indexOf( pickColorIndex ) !== -1 ) ||
                 !controller.configure.control.disableUnmentioned ) ) {

            controller.switchCountryHandler.executeSwitch( pickColorIndex );

        }

    }

    function onTouchStart ( event ) {

		if ( event.target.className.indexOf( 'noMapDrag' ) !== -1 ) {

			return;

		}

		// set the state to the dragging state

		controller.rotationHandler.setDragging( true );
		pressX = mouseX;
		pressY = mouseY;
		controller.rotationHandler.clearRotateTargetX();

    }

    function onTouchEnd ( event ) {

		// When touch up, the notify the RotatingHandler to set drag false

		controller.rotationHandler.setDragging( false );

    }

    function onTouchMove ( event ) {

		pmouseX = mouseX;
		pmouseY = mouseY;

		// get clientX and clientY from "event.touches[0]", different with onmousemove event

		mouseX = event.touches[0].clientX - controller.container.clientWidth * 0.5 - Utils.getElementViewLeft( controller.container );
		mouseY = event.touches[0].clientY - controller.container.clientHeight * 0.5 - Utils.getElementViewTop( controller.container );

		// if it is in a dragging state, let the RotationHandler to handlers the rotation of the globe

		if ( controller.rotationHandler.isDragging() ) {

			controller.rotationHandler.addRotateVY( ( mouseX - pmouseX ) / 2 * Math.PI / 180 * 0.3 );
			controller.rotationHandler.addRotateVX( ( mouseY - pmouseY ) / 2 * Math.PI / 180 * 0.3 );

		}

    }

    /**
     * bind all event handlers to the dom of the scene, the resize event will be bind to window.
     * This function will be called when InitHandler's init() function be called
     */

    function bindEvent ( controllerPara ) {

        controller = controllerPara;

        controller.renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, true );
        controller.renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, true );
        controller.renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
        controller.renderer.domElement.addEventListener( 'click', onClick, true );
        controller.renderer.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
        controller.renderer.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false );

		controller.renderer.domElement.ontouchstart = onTouchStart;
		controller.renderer.domElement.ontouchend = onTouchEnd;
		controller.renderer.domElement.ontouchmove = onTouchMove;

        window.addEventListener( 'resize', onResize, false );

    }

    return {

        bindEvent: bindEvent

    }

}

/**
 * @author mokuteno / https://github.com/manymeeting
 */

function AbstractDataProcessor () {

	this.successor = null;

}

AbstractDataProcessor.prototype.setSuccessor = function ( dp ) {

	this.successor = dp;

};

AbstractDataProcessor.prototype.process = function ( controller ) {

	if ( this.isMatched( controller ) ) {

		this.processDetail( controller );

	}

	if ( this.successor !== null ) {

		this.successor.process( controller );

	}

};

AbstractDataProcessor.prototype.processDetail = function ( controller ) {
};

AbstractDataProcessor.prototype.isMatched = function ( controller ) {

	return true;

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * Judge input data is an single data array or data group
 */

function DataTypeProcessor () {}

DataTypeProcessor.prototype = new AbstractDataProcessor();

DataTypeProcessor.prototype.constructor = DataTypeProcessor;

DataTypeProcessor.prototype.processDetail = function ( controller ) {

	var inputData = controller.inputData;
	controller.dataGroup = !Utils.isArray( inputData );

};

/**
 * @author mokuteno / https://github.com/manymeeting
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This data processor set a new fake data from user's input value, this fake data used for later geometry creation
 */

function TransformProcessor () {}

TransformProcessor.prototype = new AbstractDataProcessor();

TransformProcessor.prototype.constructor = TransformProcessor;

TransformProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createFakeData();

    } else {

		controller.singleDataHandler.createFakeData();

    }

};

/**
 * @author mokuteno / https://github.com/manymeeting
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This default data preprocessor is used to create mentionedCountries for controller.
 * The process() function will be called when InitHandler's init() function is called.
 */

function DefaultDataPreprocessor () {}

DefaultDataPreprocessor.prototype = new AbstractDataProcessor();

DefaultDataPreprocessor.prototype.constructor = DefaultDataPreprocessor;

DefaultDataPreprocessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createMentionedCountries();

    } else {

		controller.singleDataHandler.createMentionedCountries();

    }

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This object build the basic geometry to be used by creation spline geometry and pSystem geometry.
 * The build function will build for all input data
 * The buildDataVizGeometries will be executed when InitHandler's init() function is called
 */

function GeometryDataProcessor () {}

GeometryDataProcessor.prototype = new AbstractDataProcessor();

GeometryDataProcessor.prototype.constructor = GeometryDataProcessor;

GeometryDataProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createGeometry();

    } else {

        controller.singleDataHandler.createGeometry();

    }

};

/**
 * @author mokuteno / https://github.com/manymeeting
 */

/**
 * This data processor flattens input data so that even a small number can be properly displayed on the screen.
 */

function FlattenDataProcessor () {}

FlattenDataProcessor.prototype = new AbstractDataProcessor();

FlattenDataProcessor.prototype.constructor = FlattenDataProcessor;

FlattenDataProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.flattenData();

    } else {

        controller.singleDataHandler.flattenData();

    }
    
};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This dumper preprocessor is used to dump processed data into globe.
 */

function DumperProcessor () {}

DumperProcessor.prototype = new AbstractDataProcessor();

DumperProcessor.prototype.constructor = DumperProcessor;

DumperProcessor.prototype.processDetail = function ( controller ) {

	if ( controller.dataGroup ) {

		controller.dataGroupHandler.dumpData();

	} else {

		controller.singleDataHandler.dumpData();

	}

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

var ProcessorManager = ( function () {

    function getProcessorChain () {

        // register data processors here

        var dataTypeProcessor = new DataTypeProcessor();
        var transformDataProcessor = new TransformProcessor();
        var defaultDataPreprocessor = new DefaultDataPreprocessor();
        var dumpProcessor = new DumperProcessor();

        // a processor used to create basic geometry for splines and moving sprites

        var geometryDataProcessor = new GeometryDataProcessor();

        // a processor used to flatten country data

        var flattenDataProcessor = new FlattenDataProcessor();

        // set order of processors

		dataTypeProcessor.setSuccessor(defaultDataPreprocessor);
        defaultDataPreprocessor.setSuccessor( transformDataProcessor );
        transformDataProcessor.setSuccessor( flattenDataProcessor );
        flattenDataProcessor.setSuccessor( geometryDataProcessor );
        geometryDataProcessor.setSuccessor( dumpProcessor );

        return dataTypeProcessor;
    }

    return {

        getProcessorChain: getProcessorChain

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle initialization task for controller.
 */

function InitHandler ( controller ) {

    function init () {

        initScene();
        animate();

    }

    // this function is used to initialize the data, object and status of the controller

    function initScene () {

        // init all scene objects

        initObjects();

        // init user's input data

        initData();
        
        // bind events to the dom

        ( new SceneEventManager() ).bindEvent( controller );

        // now the creation is finished, append the 3D object to the dom

        controller.container.appendChild( controller.renderer.domElement );

        // init object and action related to selected country

        initSelected();
        
        // init rotationHandler parameters
        
	    controller.rotationHandler.updateRotationConfig();

        // set finishing initialization sign

        controller.initialized = true;

    }

    // the animate function will be execute periodically

    function animate () {

        if ( controller.configure.control.stats ) {

            controller.stats.update();

        }

        controller.rotationHandler.update();

        controller.renderer.clear();
        controller.renderer.render( controller.scene, controller.camera );

        // update the moving sprite on the spline

        controller.rotating.traverse(

            function ( mesh ) {

                if ( mesh.update !== undefined ) {

                    mesh.update();

                }

            }

        );

        requestAnimationFrame( animate );

    }

    // create objects and add them to the scene

    function initObjects () {

        // create all the objects for the scene

        controller.renderer = ObjectUtils.createRenderer( controller.container, controller.configure.control.transparentBackground );
        controller.camera = ObjectUtils.createCamera( controller.container );
        controller.lights = ObjectUtils.createLights();

        controller.sphere = ObjectUtils.createSphere( controller );
        controller.halo = ObjectUtils.createHalo( controller );
        controller.haloShader = controller.halo.haloShader;
        controller.earthSurfaceShader = controller.sphere.earthSurfaceShader;

        controller.scene = ObjectUtils.createScene( controller );
        controller.rotating = new THREE.Object3D();

        // the stats object will only be created when "isStatsEnabled" in the configure is set to be true

        if ( controller.configure.control.stats ) {

            controller.stats = ObjectUtils.createStats( controller.container );
            controller.container.appendChild( controller.stats.dom );

        }

        // add objects to the scene

        for ( var i in controller.lights ) {

            controller.scene.add( controller.lights[ i ] );

        }

        controller.scene.add( controller.rotating );
        controller.rotating.add( controller.sphere );
        controller.scene.add( controller.camera );

        // halo must be add after adding the rotating object

        if ( controller.configure.control.halo === true ) {

            controller.scene.add( controller.halo );

        }

    }

    // pre-process the data

    function initData () {

        // set the first data processor on the "chain"

        controller.dataProcessor = ProcessorManager.getProcessorChain();

        // pre-processor the user's input data

        controller.dataProcessor.process(controller);
    }

    // init object and action related to selected country

    function initSelected () {

        // defined the initial country

        controller.selectedCountry = CountryData[ controller.configure.control.initCountry ];

        // create the visSystem based on the previous creation and settings

        controller.visSystemHandler.update();

        // rotate to the init country and highlight the init country

        controller.rotationHandler.rotateToTargetCountry();
        controller.surfaceHandler.highlightCountry( controller.selectedCountry[ "colorCode" ] );
    }

    return {

        init: init

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a Configure object, the controller will create a "configure object" and hold the object.
 * When user using the API to do some configuration, they are actually setting the configure object.
 * When IO Globe is running, other component in controller will read this configure object through controller
 */

function Configure () {

    this.control =  {

        // use to control whether show stats panel

        stats: false,

        // used to control whether to let unrelated countries ( unmentioned countries in input data ) unclickable

        disableUnmentioned: false,

        // use to control whether to lighten mentioned countries ( mentioned in input data )

        lightenMentioned: false,

        // control whether only show "in" lines for clicked country

        inOnly: false,

        // control whether only show "out" lines for clicked country

        outOnly: false,

        // setting for the initial country when globe is initialized

        initCountry: "CN",

        // control whether show halo

        halo: true,
        
        // Control whether to have a transparent background.
        
        transparentBackground: false,
	
	    // Control whether globe will rotate automatically.
        
        autoRotation: false,
        
        // Control globe auto-rotation speed, for example, 2 means two time of normal speed.
        
        rotationRatio: 1

    };

    this.color = {

        // used to set the surface color

        surface: 0xffffff,

        // used to set the color of selected country

        selected: null,

        // use to set the "in" spline line color

        in: 0x154492,

        // use to set the "out" spline line color

        out: 0xdd380c,

        // use to set halo color

        halo: 0xffffff,

        // use to set the background color of the scene

        background: null

    };

    this.brightness = {

        // use to set the ocean brightness ( range is 0 - 1 )

        ocean: 0.5,

        // use to set the mentioned countries brightness ( range is 0 - 1 ), only the attribute isLightenMentioned == true, this attribute will take effect

        mentioned: 0.5,

        // use to set brightness of countries related to selected country

        related: 0.5

    };


    return this;

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all configure related task for controller.
 */

function ConfigureHandler ( controller ) {

    function configureJSON ( configure ) {

        // the configure process in nature is set the controller.configure with a given JSON

        var attribute;

        if ( configure instanceof Object ) {

            if ( configure.control !== undefined ) {

                for ( attribute in configure.control ) {

                    controller.configure.control[ attribute ] = configure.control[ attribute ];

                }

            }

            if ( configure.color !== undefined ) {

                for ( attribute in configure.color ) {

                    controller.configure.color[ attribute ] = configure.color[ attribute ];

                }

            }

            if ( configure.brightness !== undefined ) {

                for ( attribute in configure.brightness ) {

                    controller.configure.brightness[ attribute ] = configure.brightness[ attribute ];

                }

            }

            if (configure.resource !== undefined ) {

                for ( attribute in configure.resource ) {

                    controller.configure.resource[ attribute ] = configure.resource[ attribute ];

                }

            }

        }

    }

    function configureStyle ( styleName ) {

        // get style from StyleFactory with a given style name

        var style = StyleFactory.getStyle( styleName );

        configureJSON( style );

    }

    function configureConstructor () {

        configureJSON( controller.constructorConfigure );

    }

    return {

        configureJSON: configureJSON,

        configureStyle: configureStyle,

        configureConstructor: configureConstructor

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a JSON loader which can load JSON data into the controller
 */

function JSONLoader () {

    function load ( controller, data ) {

        if ( data === undefined || data === null ) {

            data = [];

        }

        controller.inputData = JSON.parse( JSON.stringify( data ) );

    }

    return {

        load: load

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the asynchronous loader, which can be used to load data asynchronous from a given url
 */

function AsyncLoader () {

    this.callback = null;

    var asyncLoader = this;

    function load( controller, url, callback ) {

        asyncLoader.callback = callback;

        var request = new XMLHttpRequest();
        request.open( 'GET', url, true );

        request.onreadystatechange = function () {

            if ( request.readyState === 4 && request.status === 200 ) {

                var data = JSON.parse( request.responseText );

                controller.inputData = JSON.parse( JSON.stringify( data ) );

                asyncLoader.callback( data );

            }

        };

        request.send( null );

    }

    return {

        load: load

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a live loader, which can be used to load data from a url and refresh the data in the controller
 */

// still in develop

function LiveLoader () {

    this.callback = null;
    this.milliseconds = 5000;

    this.url = null;

    this.intervalHandle = null;
    this.controller = null;

    this.controller = null;

    this.asyncLoader = new AsyncLoader();

    var liveLoader = this;

    function load ( controller, url, callback, milliseconds ) {

        liveLoader.controller = controller;
        liveLoader.url = url;
        liveLoader.callback = callback;
        liveLoader.milliseconds = milliseconds;

        liveLoader.intervalHandle = setInterval( function () {

            loopCall();

        }, liveLoader.milliseconds );

    }

    function loopCall () {

        liveLoader.asyncLoader.load( liveLoader.controller, liveLoader.url, updateSystem );

        if ( liveLoader.callback !== null ) {

            liveLoader.callback();

        }

    }

    function updateSystem () {

        if ( liveLoader.controller.initialized === true ) {

            liveLoader.controller.dataProcessor.process();
            liveLoader.controller.visSystemHandler.update();
            liveLoader.controller.surfaceHandler.update();

        }

    }

    function stop () {

        window.clearInterval( liveLoader.intervalHandle );

    }

    return {

        load: load,

        stop: stop

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all data load related task for controller.
 */

function DataHandler ( controller ) {

    // the dataHandler will initialize all loader's instance

    var jsonLoader = new JSONLoader();
    var liveLoader = new LiveLoader();
    var asyncLoader = new AsyncLoader();

    function loadJSON ( data ) {

        // jsonLoader is the proxy of loadJSON task

        jsonLoader.load( controller, data );

    }

    function loadAsync ( url, callback ) {

        // asyncLoader is the proxy of loadAsync task

        asyncLoader.load( controller, url, callback );

    }

    function liveLoad( url, callback, milliseconds ) {

        // liveLoader is the proxy of liveLoad task

        liveLoader.load( controller, url, callback, milliseconds );

    }

    // as liveLoader will load data periodically, this API is used to stop the liveLoader

    function stopLiveLoader () {

        liveLoader.stop();

    }

    return {

        loadJSON: loadJSON,

        loadAsync: loadAsync,

        liveLoad: liveLoad,

        stopLiveLoader: stopLiveLoader

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

function HaloHandler ( controller ) {

    function create () {

        controller.halo = ObjectUtils.createHalo( controller );
        controller.haloShader = controller.halo.haloShader;
        controller.scene.add( controller.halo );

    }

    function remove () {

        controller.scene.remove( controller.halo );
        controller.halo =  null;

    }

    function update () {

        controller.haloShader.update();

    }

    return {

        create: create,

        remove: remove,

        update: update

    }

}

function DataGroupHandler ( controller ) {

	var mentionedCache = {};

	function createMentionedCountries () {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;
		var initDataSet = inputData.initDataSet;

		for (var i = 0; i < dataSetKeys.length; i++) {

			var key = dataSetKeys[ i ];
			mentionedCache[ key ] = [];
			var data = inputData[ key ];

			for ( var j in data ) {

				var set = data[ j ];

				if ( CountryData[ set.e ] === undefined ) {

					continue;

				}

				var importerName = set.i.toUpperCase();

				if ( Continent.names.indexOf( importerName ) !== -1 ) {

					addMentionedContinent( set, key );

					continue;

				}

				if ( CountryData[ set.i ] === undefined ) {

					continue;

				}

				addMentionedCountryPair( set, key );

			}


		}

		controller.mentionedCountryCodes = mentionedCache[ initDataSet ];

	}

	function addMentionedContinent( set, key ) {

		var exportCountryCode = CountryData[ set.e ].colorCode;

		if ( mentionedCache[key].indexOf( exportCountryCode ) === - 1 ) {

			mentionedCache[key].push( exportCountryCode );

		}

		var importerName = set.i.toUpperCase();

		var continentCountries = Continent[ importerName ].countries;

		for ( var i = 0; i < continentCountries.length; i++ ) {

			var tempImportCountry = continentCountries[ i ];
			var tempCountryData = CountryData[ tempImportCountry ];

			if ( tempCountryData === undefined ) {

				continue;

			}

			var tempImportCountryCode = tempCountryData.colorCode;

			if ( mentionedCache[key].indexOf( tempImportCountryCode ) === - 1 ) {

				mentionedCache[key].push( tempImportCountryCode );

			}

		}

	}

	function addMentionedCountryPair( set, key ) {

		var importCountryCode = CountryData[ set.i.toUpperCase() ].colorCode;
		var exportCountryCode = CountryData[ set.e.toUpperCase() ].colorCode;

		// add mentioned color to controller's mentionedCountryCodes ( an array to store the code )

		if ( mentionedCache[key].indexOf( importCountryCode ) === - 1 ) {

			mentionedCache[key].push( importCountryCode );

		}

		if ( mentionedCache[key].indexOf( exportCountryCode ) === - 1 ) {

			mentionedCache[key].push( exportCountryCode );

		}

	}

	function flattenData () {

		var minDataValue = 800000, maxDataValue = 5000000;

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[key];

			Utils.flattenCountryData( data, controller.inputValueKey, minDataValue, maxDataValue );

		}

	}

	function createFakeData() {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[ key ];

			for ( var j in data ) {

				var set = data[ j ];
				set.fakeData = set.v;

			}

		}

		controller.inputValueKey = "fakeData";

	}

	function createGeometry () {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[key];

			var vec3_origin = new THREE.Vector3( 0, 0, 0 );

			if ( data === null ) {

				return;

			}

			for ( var s in data ) {

				var set = data[ s ];

				var importerName = set.i.toUpperCase();

				if ( Continent.names.indexOf( importerName ) !== -1 ) {

					makeContinentConnection( set );

					continue;

				}

				makeCountriesConnection( set, data, s );

			}

			function makeCountriesConnection( set, data, s ) {

				var exporterName = set.e.toUpperCase();
				var importerName = set.i.toUpperCase();

				if ( exporterName === "ZZ" || importerName === "ZZ" ) {

					console.group( "ZZ unknown country" );
					console.log( "ZZ country code detected for current ;countries this will not be print on the globe" );
					console.log( exporterName + ", " + importerName );
					console.groupEnd();

					delete data[ s ];

					return;

				}

				var exporter = CountryData[ exporterName ];
				var importer = CountryData[ importerName ];

				if ( exporter === null ) throw exporterName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";
				if ( importer === null ) throw importerName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";

				set.lineGeometry = makeConnectionLineGeometry( exporter, importer, set.fakeData );

			}

			function makeContinentConnection( dataSet ) {

				var exporterName = dataSet.e.toUpperCase();
				var importerName = dataSet.i.toUpperCase();

				var exporter = CountryData[ exporterName ];
				var importer = Continent[ importerName ];

				dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

			}

			function makeConnectionLineGeometry ( exporter, importer, value ) {

				var exporterCenter = exporter.center.clone();
				var distanceBetweenCountryCenter = exporterCenter.subVectors( exporterCenter, importer.center ).length();

				var start = exporter.center;
				var end = importer.center;

				var mid = start.clone().lerp( end, 0.5 );
				var midLength = mid.length();
				mid.normalize();
				mid.multiplyScalar( midLength + distanceBetweenCountryCenter * 0.7 );

				var normal = ( new THREE.Vector3() ).subVectors( start, end );
				normal.normalize();

				var distanceHalf = distanceBetweenCountryCenter * 0.5;

				var startAnchor = start;

				var midStartAnchor = mid.clone().add( normal.clone().multiplyScalar( distanceHalf ) );
				var midEndAnchor = mid.clone().add( normal.clone().multiplyScalar( -distanceHalf ) );

				var endAnchor = end;

				var splineCurveA = new THREE.CubicBezierCurve3( start, startAnchor, midStartAnchor, mid );
				var splineCurveB = new THREE.CubicBezierCurve3( mid, midEndAnchor, endAnchor, end );

				var vertexCountDesired = Math.floor( distanceBetweenCountryCenter * 0.02 + 6 ) * 2;

				var points = splineCurveA.getPoints( vertexCountDesired );

				points = points.splice( 0, points.length - 1 );
				points = points.concat( splineCurveB.getPoints( vertexCountDesired ) );
				points.push( vec3_origin );

				var val = value * 0.0003;

				var size = ( 10 + Math.sqrt( val ) );


				size = Utils.constrain( size, 0.1, 60 );

				var curveGeometry = new THREE.Geometry();

				for ( var i = 0; i < points.length; i++ ) {

					curveGeometry.vertices.push( points[ i ] );

				}

				curveGeometry.size = size;

				return curveGeometry;

			}

		}


	}

	function dumpData () {

		var initDataSet = controller.inputData.initDataSet;
		controller.globalData = controller.inputData[ initDataSet ];

	}

	function switchDataSet ( dataSetName ) {

		var dataSetKeys = controller.inputData.dataSetKeys;

		if ( dataSetKeys.indexOf( dataSetName ) !== - 1 ) {

			controller.mentionedCountryCodes = mentionedCache[ dataSetName ];
			controller.globalData = controller.inputData[ dataSetName ];
			controller.visSystemHandler.update();
			controller.surfaceHandler.update();

		}

	}

	return {

		createMentionedCountries: createMentionedCountries,

		flattenData: flattenData,

		createFakeData: createFakeData,

		createGeometry: createGeometry,

		dumpData: dumpData,

		switchDataSet: switchDataSet

	}

}

function SingleDataHandler(controller) {

	function createMentionedCountries() {

		var inputData = controller.inputData;

		for ( var i in inputData ) {

			var dataSet = inputData[ i ];

			if (CountryData[ dataSet.e ] === undefined) {
				continue;
			}

			var importerName = dataSet.i.toUpperCase();

			if ( Continent.names.indexOf( importerName ) !== -1 ) {

				addMentionedContinent( dataSet );

				continue;

			}

			if (CountryData[ dataSet.i ] === undefined) {
				continue;
			}

			addMentionedCountryPair( dataSet );

		}


	}

	function addMentionedContinent( dataSet ) {

		var exportCountryCode = CountryData[ dataSet.e ].colorCode;

		if ( controller.mentionedCountryCodes.indexOf( exportCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( exportCountryCode );

		}

		var importerName = dataSet.i.toUpperCase();

		var continentCountries = Continent[ importerName ].countries;

		for ( var i = 0; i < continentCountries.length; i++ ) {

			var tempImportCountry = continentCountries[ i ];
			var tempCountryData = CountryData[ tempImportCountry ];

			if ( tempCountryData === undefined ) {

				continue;

			}

			var tempImportCountryCode = tempCountryData.colorCode;

			if ( controller.mentionedCountryCodes.indexOf( tempImportCountryCode ) === - 1 ) {

				controller.mentionedCountryCodes.push( tempImportCountryCode );

			}

		}

	}

	function addMentionedCountryPair(dataSet) {

		var importCountryCode = CountryData[ dataSet.i ].colorCode;
		var exportCountryCode = CountryData[ dataSet.e ].colorCode;

		// add mentioned color to controller's mentionedCountryCodes ( an array to store the code )

		if ( controller.mentionedCountryCodes.indexOf( importCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( importCountryCode );

		}

		if ( controller.mentionedCountryCodes.indexOf( exportCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( exportCountryCode );

		}

	}

	function flattenData() {

		var minDataValue = 800000, maxDataValue = 5000000;

		var inputData = controller.inputData;

		Utils.flattenCountryData(inputData, controller.inputValueKey, minDataValue, maxDataValue);

	}

	function createFakeData() {

		var inputData = controller.inputData;

		for ( var i in inputData ) {

			var set = inputData[ i ];
			set.fakeData = set.v;

		}

		// update input value key

		controller.inputValueKey = "fakeData";

	}

	function createGeometry() {

		var vec3_origin = new THREE.Vector3( 0, 0, 0 );

		if ( controller.inputData === null ) {

			return;

		}

		for ( var s in controller.inputData ) {

			var set = controller.inputData[ s ];

			var importerName = set.i.toUpperCase();

			if ( Continent.names.indexOf( importerName ) !== -1 ) {

				makeContinentConnection( set );

				continue;

			}

			makeCountriesConnection( set );

		}

		function makeCountriesConnection( dataSet ) {

			var exporterName = dataSet.e.toUpperCase();
			var importerName = dataSet.i.toUpperCase();

			if ( exporterName === "ZZ" || importerName === "ZZ" ) {

				console.group( "ZZ unknown country" );
				console.log( "ZZ country code detected for current ;countries this will not be print on the globe" );
				console.log( exporterName + ", " + importerName );
				console.groupEnd();

				delete controller.inputData[ s ];

				return;

			}

			var exporter = CountryData[ exporterName ];
			var importer = CountryData[ importerName ];

			if ( exporter === null ) throw exporterName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";
			if ( importer === null ) throw importerName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";

			dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

		}

		function makeContinentConnection( dataSet ) {

			var exporterName = dataSet.e.toUpperCase();
			var importerName = dataSet.i.toUpperCase();

			var exporter = CountryData[ exporterName ];
			var importer = Continent[ importerName ];

			dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

		}

		function makeConnectionLineGeometry ( exporter, importer, value ) {

			var exporterCenter = exporter.center.clone();
			var distanceBetweenCountryCenter = exporterCenter.subVectors( exporterCenter, importer.center ).length();

			var start = exporter.center;
			var end = importer.center;

			var mid = start.clone().lerp( end, 0.5 );
			var midLength = mid.length();
			mid.normalize();
			mid.multiplyScalar( midLength + distanceBetweenCountryCenter * 0.7 );

			var normal = ( new THREE.Vector3() ).subVectors( start, end );
			normal.normalize();

			var distanceHalf = distanceBetweenCountryCenter * 0.5;

			var startAnchor = start;

			var midStartAnchor = mid.clone().add( normal.clone().multiplyScalar( distanceHalf ) );
			var midEndAnchor = mid.clone().add( normal.clone().multiplyScalar( -distanceHalf ) );

			var endAnchor = end;

			var splineCurveA = new THREE.CubicBezierCurve3( start, startAnchor, midStartAnchor, mid );
			var splineCurveB = new THREE.CubicBezierCurve3( mid, midEndAnchor, endAnchor, end );

			var vertexCountDesired = Math.floor( distanceBetweenCountryCenter * 0.02 + 6 ) * 2;

			var points = splineCurveA.getPoints( vertexCountDesired );

			points = points.splice( 0, points.length - 1 );
			points = points.concat( splineCurveB.getPoints( vertexCountDesired ) );
			points.push( vec3_origin );

			var val = value * 0.0003;

			var size = ( 10 + Math.sqrt( val ) );


			size = Utils.constrain( size, 0.1, 60 );

			var curveGeometry = new THREE.Geometry();

			for ( var i = 0; i < points.length; i++ ) {

				curveGeometry.vertices.push( points[ i ] );

			}

			curveGeometry.size = size;

			return curveGeometry;

		}

	}

	function dumpData() {
		controller.globalData = controller.inputData;
	}

	return {

		createMentionedCountries: createMentionedCountries,

		flattenData: flattenData,

		createFakeData: createFakeData,

		createGeometry: createGeometry,

		dumpData: dumpData

	}

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the controller object when IO Globe is running,
 * When developer want to create a new IO globe, they first need to create a controller instance and then init this controller.
 * How to create and use this controller is introduce in API document and shown in demos.
 */

function Controller ( container, configureObject ) {

    // constructor parameters

    this.container = container;
    this.constructorConfigure = configureObject;

    // configure object

    this.configure = new Configure();

    // handlers used to handle tasks in controller

    this.dataGroupHandler = new DataGroupHandler( this );
    this.singleDataHandler = new SingleDataHandler( this );
    this.configureHandler = new ConfigureHandler( this );
    this.rotationHandler = new RotationHandler( this );
    this.surfaceHandler = new SurfaceHandler( this );
    this.wheelHandler = new WheelHandler( this );
    this.visSystemHandler = new VisSystemHandler( this );
    this.switchCountryHandler = new SwitchCountryHandler( this );
    this.resizeHandler = new ResizeHandler( this );
    this.initHandler = new InitHandler( this );
    this.dataHandler = new DataHandler( this );
    this.haloHandler = new HaloHandler( this );
    
    // define a data processor to pre-processor the data, will be initialized in InitHandler

    this.dataProcessor = null;

    // configure "configure object" through constructor configure

    this.configureHandler.configureConstructor();

    // important components, they will be initialized when initHandler is called

    this.visualizationMesh = null;
    this.renderer = null;
    this.camera = null;
    this.lights = null;

    this.scene = null;
    this.rotating = null;
    this.sphere = null;
    this.earthSurfaceShader = null;
    this.halo = null;
    this.haloShader = null;

	this.inputData = [];
	this.globalData = [];

    this.dataGroup = false;
    // this.inputValueKey = "v";

    this.mentionedCountryCodes = [];
    this.relatedCountries = [];

    this.selectedCountry = null;

    this.stats = null;

    this.initialized = false;

    // hold controller itself

    var controller = this;

    // API is defined in return object

    return {

        init: function () {

            controller.initHandler.init();

            return this;

        },

        addData: function ( data ) {

            controller.dataHandler.loadJSON( data );

            if ( controller.initialized === true ) {

                controller.dataProcessor.process( controller );
                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        clearData: function () {

            controller.inputData = [];
            controller.globalData = [];

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        addDataAsync: function ( url, callback ) {

            controller.dataHandler.loadAsync( url, callback );

            return this;

        },

        addLiveData: function ( url, callback, milliseconds ) {

            controller.dataHandler.liveLoad( url, callback, milliseconds );

            return this;

        },

        setSurfaceColor: function ( color ) {

            controller.configure.color.surface = color;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setSelectedColor: function ( color ) {

            controller.configure.color.selected = color;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        getScene: function () {

            return controller.scene;

        },

        setInitCountry: function ( ISOAbbr ) {

            controller.configure.control.initCountry = ISOAbbr;

            return this;

        },

        disableUnmentioned: function ( flag ) {

            controller.configure.control.disableUnmentioned = flag;

            return this;

        },

        lightenMentioned: function ( flag ) {

            controller.configure.control.lightenMentioned = flag;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setExportColor: function ( color ) {

            controller.configure.color.out = color;

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        setImportColor: function ( color ) {

            controller.configure.color.in = color;

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        getSelectedCountry: function () {

            return controller.selectedCountry;

        },

        getRelatedCountries: function () {

            return controller.relatedCountries;

        },

        onCountryPicked: function ( callBack ) {

            controller.switchCountryHandler.setCountryPickCallBack( callBack );

        },

        enableStats: function () {

            if ( controller.configure.control.stats === false && controller.initialized ) {

                if ( controller.stats === null ) {

                    controller.stats = ObjectUtils.createStats(controller.container);

                }

                controller.container.appendChild( controller.stats.dom );

            }

            controller.configure.control.stats = true;

            return this;

        },

        disableStats: function () {

            if ( controller.configure.control.stats === true && controller.stats !== null ) {

                controller.container.removeChild( controller.stats.dom );

            }

            controller.configure.control.stats = false;

            return this;

        },

        getStatsObject: function () {

            return controller.stats;

        },

        getConfig: function () {

            return controller.configure;
        },

        adjustRelatedBrightness: function ( brightness ) {

            controller.configure.brightness.related = brightness;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        adjustOceanBrightness: function ( brightness ) {

            controller.configure.brightness.ocean = brightness;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        adjustMentionedBrightness: function ( brightness ) {

            controller.configure.brightness.mentioned = brightness;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setStyle: function ( style ) {

            controller.configureHandler.configureStyle( style );

            return this;

        },

        configure: function ( configure ) {

            controller.configureHandler.configureJSON( configure );

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();
                controller.visSystemHandler.update();

            }

            return this;

        },

        switchCountry: function ( ISOAbbr, direction ) {

            controller.switchCountryHandler.switchFromAPI( ISOAbbr, direction );

            return this;

        },

        showInOnly: function ( flag ) {

            if ( flag === true ) {

                controller.configure.control.inOnly = true;
                controller.configure.control.outOnly = false;

            } else {

                controller.configure.control.inOnly = false;
            }

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        showOutOnly: function ( flag ) {

            if ( flag === true ) {

                controller.configure.control.outOnly = true;
                controller.configure.control.inOnly = false;

            } else {

                controller.configure.control.outOnly = false;

            }

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        closeLiveLoader: function () {

            controller.dataHandler.stopLiveLoader();

            return this;

        },

        // to be used to force update the whole system after init(), may not be used by user

        update: function () {

            if ( controller.initialized === true ) {

                controller.dataProcessor.process( controller );
                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        setHaloColor: function ( color ) {

            controller.configure.color.halo = color;

            if ( controller.initialized === true ) {

                controller.haloHandler.update();

            }

            return this;

        },

        removeHalo: function () {

            controller.configure.control.halo = false;


            if ( controller.initialized === true ) {

                controller.haloHandler.remove();

            }

            return this;

        },

        addHalo: function ( color ) {

            controller.configure.control.halo = true;

            if ( color !== undefined ) {

                controller.configure.color.halo = color;

            }

            if ( controller.initialized === true ) {

                if ( controller.halo !== null ) {

                    controller.haloHandler.update();

                } else {

                    controller.haloHandler.create();

                }

            }

            return this;

        },

        setBackgroundColor: function ( color ) {

            controller.configure.color.background = color;

            if ( controller.initialized === true ) {

                controller.scene.background = new THREE.Color( color );

            }

            return this;

        },

        resizeUpdate: function () {

            controller.resizeHandler.resizeScene();

            return this;

        },

        switchDataSet: function ( dataSetName ) {

            if ( controller.dataGroup ) {

                controller.dataGroupHandler.switchDataSet( dataSetName );

            }

            return this;

        },
        
        setTransparentBackground: function( isTransparent ) {
	
	        controller.configure.control.transparentBackground = isTransparent;
	        
	        return this;
         
        },
        
        setAutoRotation: function( isAutoRotation, rotationRatio ) {
        
            controller.configure.control.autoRotation = isAutoRotation;
            
            if ( rotationRatio !== undefined && rotationRatio >= 0 ) {
	
	            controller.configure.control.rotationRatio = rotationRatio;
             
            }
            
            if ( controller.initialized ) {
                
                controller.rotationHandler.updateRotationConfig();
                
            }
            
        }

    }

}

exports.Controller = Controller;

return exports;

}({}));