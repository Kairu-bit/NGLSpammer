const a0_0x9198f1 = a0_0x339f;
(function (_0x5b7e44, _0x212734) {
    const _0x2331dc = a0_0x339f, _0x61cd1e = _0x5b7e44();
    while (!![]) {
        try {
            const _0x41c059 = -parseInt(_0x2331dc(0x126)) / 0x1 * (-parseInt(_0x2331dc(0x159)) / 0x2) + -parseInt(_0x2331dc(0x155)) / 0x3 * (-parseInt(_0x2331dc(0x13f)) / 0x4) + parseInt(_0x2331dc(0x143)) / 0x5 + -parseInt(_0x2331dc(0x137)) / 0x6 * (parseInt(_0x2331dc(0x125)) / 0x7) + -parseInt(_0x2331dc(0x118)) / 0x8 + parseInt(_0x2331dc(0x119)) / 0x9 * (parseInt(_0x2331dc(0x149)) / 0xa) + -parseInt(_0x2331dc(0x11d)) / 0xb * (parseInt(_0x2331dc(0x151)) / 0xc);
            if (_0x41c059 === _0x212734)
                break;
            else
                _0x61cd1e['push'](_0x61cd1e['shift']());
        } catch (_0x18cdf9) {
            _0x61cd1e['push'](_0x61cd1e['shift']());
        }
    }
}(a0_0x5d30, 0xad712));
function a0_0x339f(_0x593554, _0x30da91) {
    const _0x5d3057 = a0_0x5d30();
    return a0_0x339f = function (_0x339ff0, _0x491789) {
        _0x339ff0 = _0x339ff0 - 0x113;
        let _0x1735af = _0x5d3057[_0x339ff0];
        return _0x1735af;
    }, a0_0x339f(_0x593554, _0x30da91);
}
import a0_0x5ac033 from 'axios';
import a0_0x430150 from 'inquirer';
import { getRandom } from 'random-useragent';
import { v4 } from 'uuid';
import { inspect } from 'util';
const yellow = a0_0x9198f1(0x115), green = '\x1b[1;32m', red = '\x1b[1;31m', white = '\x1b[1;37m', blue = a0_0x9198f1(0x15f), underline = a0_0x9198f1(0x156), reset = a0_0x9198f1(0x13b), gameSlugs = [
        '',
        a0_0x9198f1(0x15d),
        a0_0x9198f1(0x132)
    ];
let total = {
    'successes': 0x0,
    'failures': 0x0
};
const banner = green + a0_0x9198f1(0x157) + yellow + a0_0x9198f1(0x14d) + green + '\x0a|\x20\x5c\x20|/\x20\x20_>\x20|\x20|\x20\x20/\x20__>\x20___\x20\x20___\x20._\x20_\x20_\x20\x0a|\x20\x20\x20||\x20<_/\x5c|\x20|_\x20\x5c__\x20\x5c|\x20.\x20\x5c<_>\x20||\x20\x27\x20\x27\x20|\x0a|_\x5c_|`____/|___|<___/|\x20\x20_/<___||_|_|_|\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|_|\x0a';
class prompts {
    static [a0_0x9198f1(0x122)] = {
        'type': a0_0x9198f1(0x141),
        'name': a0_0x9198f1(0x129),
        'prefix': '',
        'message': green + 'Target\x20Username\x20or\x20URL~$',
        'validate': username => {
            const _0x200c46 = a0_0x9198f1;
            return !username ? _0x200c46(0x120) : !![];
        },
        'filter': username => {
            const _0x581615 = a0_0x9198f1;
            try {
                const url = new URL(username);
                if (url[_0x581615(0x128)] !== _0x581615(0x130))
                    return;
                return url[_0x581615(0x14e)][_0x581615(0x127)]('/')[_0x581615(0x14a)](Boolean)[0x0];
            } catch (e) {
                return username;
            }
        }
    };
    static [a0_0x9198f1(0x11f)] = {
        'type': a0_0x9198f1(0x141),
        'name': a0_0x9198f1(0x124),
        'prefix': '',
        'message': green + a0_0x9198f1(0x147),
        'validate': message => {
            const _0x54cb9f = a0_0x9198f1;
            return !message ? _0x54cb9f(0x14c) : !![];
        },
        'filter': message => {
            const _0x361a24 = a0_0x9198f1;
            if (message[_0x361a24(0x138)]('|')) {
                const messages = message['split']('|')[_0x361a24(0x14a)](Boolean)[_0x361a24(0x135)](value => value['trim']());
                return messages;
            }
            return message;
        }
    };
    static [a0_0x9198f1(0x15e)] = {
        'type': 'input',
        'name': a0_0x9198f1(0x121),
        'prefix': '',
        'message': green + a0_0x9198f1(0x158),
        'validate': amount => {
            return isNaN(amount) ? 'Number\x20only.' : !![];
        },
        'filter': amount => {
            const _0x100e70 = a0_0x9198f1;
            if (!/^\d+$/[_0x100e70(0x13a)](amount))
                return;
            return amount = parseInt(amount, 0xa), amount < 0x1 ? undefined : amount;
        }
    };
}
function a0_0x5d30() {
    const _0x12ed87 = [
        'origin',
        'same-origin',
        '5977888eAUtmy',
        '153PEOsHz',
        'https://ngl.link/',
        'No\x20Status',
        'random',
        '340912nienIq',
        '*/*',
        'getMessage',
        'Username\x20not\x20found.',
        'amount',
        'getUsername',
        'toFixed',
        'message',
        '7hQjJxs',
        '2498TZEJPj',
        'split',
        'host',
        'username',
        'Starting\x20NGLSpammer',
        'User-Agent',
        '(Failures\x20:\x20',
        'X-Forwarded-For',
        'Kneega',
        'join',
        'ngl.link',
        '\x22Google\x20Chrome\x22;v=\x22113\x22,\x20\x22Chromium\x22;v=\x22113\x22,\x20\x22Not-A.Brand\x22;v=\x2224\x22',
        'confessions',
        'push',
        '\x20wait...',
        'map',
        'XMLHttpRequest',
        '5951256KZjqYo',
        'includes',
        'floor',
        'test',
        '\x1b[0m',
        'prompt',
        'length',
        'Failures:\x20',
        '107324gyCDyo',
        'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'input',
        'Username:\x20',
        '5875465akrjEn',
        'Successes:\x20',
        'response',
        'empty',
        'Message\x20(use\x20\x27|\x27\x20to\x20seperate)~$',
        'log',
        '699970hDMjhN',
        'filter',
        'failures',
        'Message\x20cannot\x20be\x20empty.',
        '(Developer:\x20Kairu)',
        'pathname',
        '=================\x20',
        'userRegion',
        '552EAxwpp',
        'statusText',
        'successes',
        'data',
        '156ylbUCE',
        '\x1b[1;4m',
        '\x20_\x20_\x20\x20___\x20\x20\x20_\x20\x20\x20\x20___\x20',
        'Message\x20Amount~$',
        '92JwYOND',
        'Message',
        'padEnd',
        'Amount',
        '3words',
        'getAmount',
        '\x1b[1;34m',
        'Target\x20Username',
        '\x22Windows\x22',
        'cors',
        'Final\x20Results',
        '\x1b[1;33m'
    ];
    a0_0x5d30 = function () {
        return _0x12ed87;
    };
    return a0_0x5d30();
}
function randIP() {
    const _0x44f4ad = a0_0x9198f1, _0x1e4d85 = () => Math[_0x44f4ad(0x139)](Math['random']() * 0x100);
    return _0x1e4d85() + '.' + _0x1e4d85() + '.' + _0x1e4d85() + '.' + _0x1e4d85();
}
function randXFFHead(_0x562f8c = 0x1) {
    const _0x3abe6f = a0_0x9198f1;
    let _0x54f4e9 = [];
    for (let _0x311114 = 0x0; _0x311114 < _0x562f8c; _0x311114++) {
        _0x54f4e9[_0x3abe6f(0x133)](randIP());
    }
    return _0x54f4e9[_0x3abe6f(0x12f)](',\x20');
}
function delay(_0x186f63) {
    return new Promise(_0x3f0ec7 => setTimeout(_0x3f0ec7, _0x186f63));
}
async function sendMessage(_0x1f8595, _0x4b70d5, _0x5291c6) {
    const _0x5527ca = a0_0x9198f1, _0xb98c37 = {
            'Host': _0x5527ca(0x130),
            'sec-ch-ua': _0x5527ca(0x131),
            'accept': _0x5527ca(0x11e),
            'content-type': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
            'x-requested-with': _0x5527ca(0x136),
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': _0x5527ca(0x161),
            'origin': 'https://ngl.link',
            'sec-fetch-site': _0x5527ca(0x117),
            'sec-fetch-mode': _0x5527ca(0x113),
            'sec-fetch-dest': _0x5527ca(0x146),
            'referer': _0x5527ca(0x11a) + _0x1f8595,
            'accept-language': _0x5527ca(0x140)
        };
    let _0x167148 = 0x0;
    while (total['successes'] < _0x5291c6) {
        const _0x131050 = gameSlugs[Math[_0x5527ca(0x139)](Math[_0x5527ca(0x11c)]() * gameSlugs[_0x5527ca(0x13d)])];
        _0xb98c37[_0x5527ca(0x12b)] = getRandom(), _0xb98c37[_0x5527ca(0x12d)] = randXFFHead(Math[_0x5527ca(0x139)](Math['random']() * 0x6));
        const _0x352fb6 = {
            'username': _0x1f8595,
            'question': Array['isArray'](_0x4b70d5) ? _0x4b70d5[Math[_0x5527ca(0x139)](Math[_0x5527ca(0x11c)]() * _0x4b70d5[_0x5527ca(0x13d)])] : _0x4b70d5,
            'deviceId': v4(),
            'gameSlug': _0x131050,
            'referrer': ''
        };
        try {
            const _0x5c67ee = await a0_0x5ac033['post'](_0xb98c37[_0x5527ca(0x116)] + '/api/submit', _0x352fb6, { 'headers': _0xb98c37 }), _0x27bc8b = _0x5c67ee?.[_0x5527ca(0x154)];
            total[_0x5527ca(0x153)] += 0x1, console[_0x5527ca(0x148)](green + '(Successes:\x20' + total[_0x5527ca(0x153)] + ')\x20' + white + '>\x20' + (green + underline) + _0x27bc8b?.['questionId'] + reset + '\x20' + white + '/\x20' + yellow + _0x27bc8b?.[_0x5527ca(0x150)]);
        } catch (_0x59f22e) {
            total[_0x5527ca(0x14b)] += 0x1, _0x167148 += 0x1, console[_0x5527ca(0x148)](red + _0x5527ca(0x12c) + total['failures'] + ')\x20' + white + '>\x20' + (red + underline) + _0x59f22e[_0x5527ca(0x124)] + reset + '\x20' + white + '/\x20' + red + (_0x59f22e?.[_0x5527ca(0x145)]?.['statusText'] ? _0x59f22e?.['response']?.[_0x5527ca(0x152)] : _0x5527ca(0x11b)));
            if (_0x167148 >= 0x5) {
                const _0x568b38 = [
                    _0x5527ca(0x12e),
                    'Shlawg',
                    'Please'
                ];
                console[_0x5527ca(0x148)]('' + green + _0x568b38[Math[_0x5527ca(0x139)](Math[_0x5527ca(0x11c)]() * _0x568b38[_0x5527ca(0x13d)])] + _0x5527ca(0x134)), await delay(0x3e8 * Math[_0x5527ca(0x139)](Math[_0x5527ca(0x11c)]() * 0x3)), _0x167148 = 0x0;
            }
            continue;
        }
    }
    const _0x56fdb5 = total['successes'] + total[_0x5527ca(0x14b)], _0x3dbae8 = (total['successes'] / _0x56fdb5 * 0x64)[_0x5527ca(0x123)](0x2), _0x228950 = (total[_0x5527ca(0x14b)] / _0x56fdb5 * 0x64)[_0x5527ca(0x123)](0x2);
    head(_0x5527ca(0x114)), console[_0x5527ca(0x148)](blue + _0x5527ca(0x142) + yellow + _0x1f8595), console['log'](blue + 'Total\x20Attempts:\x20' + yellow + _0x56fdb5), console[_0x5527ca(0x148)](blue + _0x5527ca(0x144) + green + total[_0x5527ca(0x153)] + '\x20(' + _0x3dbae8 + '%)'), console['log'](blue + _0x5527ca(0x13e) + red + total[_0x5527ca(0x14b)] + '\x20(' + _0x228950 + '%)' + reset);
}
function head(_0x5ed748) {
    const _0x3906dc = a0_0x9198f1;
    console[_0x3906dc(0x148)](yellow + _0x3906dc(0x14f) + green + _0x5ed748 + '\x20' + yellow + '=================');
}
function keyValuePairs(_0x5295a7, _0x102cbe) {
    const _0x258a6c = a0_0x9198f1;
    console[_0x258a6c(0x148)](white + '-\x20' + green + _0x5295a7[_0x258a6c(0x15b)](0x5) + '\x20' + white + ':\x20' + inspect(_0x102cbe, {
        'showHidden': !![],
        'depth': null,
        'colors': !![]
    }) + '\x20' + white + '>\x20' + blue + typeof _0x102cbe);
}
async function main() {
    const _0x4749d6 = a0_0x9198f1;
    console['log'](banner);
    const {username: _0x21e794} = await a0_0x430150[_0x4749d6(0x13c)](prompts[_0x4749d6(0x122)]), {message: _0x41261e} = await a0_0x430150[_0x4749d6(0x13c)](prompts[_0x4749d6(0x11f)]), {amount: _0x1ad5e6} = await a0_0x430150[_0x4749d6(0x13c)](prompts['getAmount']);
    head(_0x4749d6(0x12a)), keyValuePairs(_0x4749d6(0x160), _0x21e794), keyValuePairs(_0x4749d6(0x15a), _0x41261e), keyValuePairs(_0x4749d6(0x15c), _0x1ad5e6), head(_0x4749d6(0x12a)), sendMessage(_0x21e794, _0x41261e, _0x1ad5e6);
}
main();