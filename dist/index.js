var __require = /* @__PURE__ */ ((x5) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x5, {
  get: (a, b3) => (typeof require !== "undefined" ? require : a)[b3]
}) : x5)(function(x5) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x5 + '" is not supported');
});

// node_modules/@srclaunch/data-client/dist/index.js
import { DataTypes, Sequelize } from "sequelize";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x5) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x5, {
  get: (a, b3) => (typeof __require !== "undefined" ? __require : a)[b3]
}) : x5)(function(x5) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x5 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_pluralize = __commonJS({
  "node_modules/pluralize/pluralize.js"(exports, module) {
    (function(root, pluralize) {
      if (typeof __require2 === "function" && typeof exports === "object" && typeof module === "object") {
        module.exports = pluralize();
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return pluralize();
        });
      } else {
        root.pluralize = pluralize();
      }
    })(exports, function() {
      var pluralRules = [];
      var singularRules = [];
      var uncountables = {};
      var irregularPlurals = {};
      var irregularSingles = {};
      function sanitizeRule(rule) {
        if (typeof rule === "string") {
          return new RegExp("^" + rule + "$", "i");
        }
        return rule;
      }
      function restoreCase(word, token) {
        if (word === token)
          return token;
        if (word === word.toLowerCase())
          return token.toLowerCase();
        if (word === word.toUpperCase())
          return token.toUpperCase();
        if (word[0] === word[0].toUpperCase()) {
          return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        return token.toLowerCase();
      }
      function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
          return args[index] || "";
        });
      }
      function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
          var result = interpolate(rule[1], arguments);
          if (match === "") {
            return restoreCase(word[index - 1], result);
          }
          return restoreCase(match, result);
        });
      }
      function sanitizeWord(token, word, rules) {
        if (!token.length || uncountables.hasOwnProperty(token)) {
          return word;
        }
        var len = rules.length;
        while (len--) {
          var rule = rules[len];
          if (rule[0].test(word))
            return replace(word, rule);
        }
        return word;
      }
      function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token)) {
            return restoreCase(word, token);
          }
          if (replaceMap.hasOwnProperty(token)) {
            return restoreCase(word, replaceMap[token]);
          }
          return sanitizeWord(token, word, rules);
        };
      }
      function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token))
            return true;
          if (replaceMap.hasOwnProperty(token))
            return false;
          return sanitizeWord(token, token, rules) === token;
        };
      }
      function pluralize(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
        return (inclusive ? count + " " : "") + pluralized;
      }
      pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
      pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
      pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
      pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
      pluralize.addPluralRule = function(rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize.addSingularRule = function(rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize.addUncountableRule = function(word) {
        if (typeof word === "string") {
          uncountables[word.toLowerCase()] = true;
          return;
        }
        pluralize.addPluralRule(word, "$0");
        pluralize.addSingularRule(word, "$0");
      };
      pluralize.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
      };
      [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"]
      ].forEach(function(rule) {
        return pluralize.addIrregularRule(rule[0], rule[1]);
      });
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"]
      ].forEach(function(rule) {
        return pluralize.addPluralRule(rule[0], rule[1]);
      });
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
        [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"]
      ].forEach(function(rule) {
        return pluralize.addSingularRule(rule[0], rule[1]);
      });
      [
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i
      ].forEach(pluralize.addUncountableRule);
      return pluralize;
    });
  }
});
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v3) {
          return exports2[id] = previous ? previous(id, v3) : v3;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
        d2.__proto__ = b3;
      } || function(d2, b3) {
        for (var p4 in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p4))
            d2[p4] = b3[p4];
      };
      __extends = function(d2, b3) {
        if (typeof b3 !== "function" && b3 !== null)
          throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
        extendStatics(d2, b3);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
      };
      __assign = Object.assign || function(t3) {
        for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
          s3 = arguments[i3];
          for (var p4 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p4))
              t3[p4] = s3[p4];
        }
        return t3;
      };
      __rest = function(s3, e4) {
        var t3 = {};
        for (var p4 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p4) && e4.indexOf(p4) < 0)
            t3[p4] = s3[p4];
        if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i3 = 0, p4 = Object.getOwnPropertySymbols(s3); i3 < p4.length; i3++) {
            if (e4.indexOf(p4[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i3]))
              t3[p4[i3]] = s3[p4[i3]];
          }
        return t3;
      };
      __decorate = function(decorators, target, key, desc) {
        var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r4 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i3 = decorators.length - 1; i3 >= 0; i3--)
            if (d2 = decorators[i3])
              r4 = (c3 < 3 ? d2(r4) : c3 > 3 ? d2(target, key, r4) : d2(target, key)) || r4;
        return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P3, generator) {
        function adopt(value) {
          return value instanceof P3 ? value : new P3(function(resolve) {
            resolve(value);
          });
        }
        return new (P3 || (P3 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e4) {
              reject(e4);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e4) {
              reject(e4);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _3 = { label: 0, sent: function() {
          if (t3[0] & 1)
            throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g3;
        return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
          return this;
        }), g3;
        function verb(n2) {
          return function(v3) {
            return step([n2, v3]);
          };
        }
        function step(op) {
          if (f3)
            throw new TypeError("Generator is already executing.");
          while (_3)
            try {
              if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done)
                return t3;
              if (y3 = 0, t3)
                op = [op[0] & 2, t3.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t3 = op;
                  break;
                case 4:
                  _3.label++;
                  return { value: op[1], done: false };
                case 5:
                  _3.label++;
                  y3 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _3.ops.pop();
                  _3.trys.pop();
                  continue;
                default:
                  if (!(t3 = _3.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _3 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                    _3.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _3.label < t3[1]) {
                    _3.label = t3[1];
                    t3 = op;
                    break;
                  }
                  if (t3 && _3.label < t3[2]) {
                    _3.label = t3[2];
                    _3.ops.push(op);
                    break;
                  }
                  if (t3[2])
                    _3.ops.pop();
                  _3.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _3);
            } catch (e4) {
              op = [6, e4];
              y3 = 0;
            } finally {
              f3 = t3 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar = function(m3, o2) {
        for (var p4 in m3)
          if (p4 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p4))
            __createBinding(o2, m3, p4);
      };
      __createBinding = Object.create ? function(o2, m3, k5, k23) {
        if (k23 === void 0)
          k23 = k5;
        Object.defineProperty(o2, k23, { enumerable: true, get: function() {
          return m3[k5];
        } });
      } : function(o2, m3, k5, k23) {
        if (k23 === void 0)
          k23 = k5;
        o2[k23] = m3[k5];
      };
      __values = function(o2) {
        var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o2[s3], i3 = 0;
        if (m3)
          return m3.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i3 >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i3++], done: !o2 };
            }
          };
        throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o2, n2) {
        var m3 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m3)
          return o2;
        var i3 = m3.call(o2), r4, ar = [], e4;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r4 = i3.next()).done)
            ar.push(r4.value);
        } catch (error) {
          e4 = { error };
        } finally {
          try {
            if (r4 && !r4.done && (m3 = i3["return"]))
              m3.call(i3);
          } finally {
            if (e4)
              throw e4.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
          ar = ar.concat(__read(arguments[i3]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
          s3 += arguments[i3].length;
        for (var r4 = Array(s3), k5 = 0, i3 = 0; i3 < il; i3++)
          for (var a = arguments[i3], j5 = 0, jl = a.length; j5 < jl; j5++, k5++)
            r4[k5] = a[j5];
        return r4;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i3 = 0, l2 = from.length, ar; i3 < l2; i3++) {
            if (ar || !(i3 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i3);
              ar[i3] = from[i3];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await = function(v3) {
        return this instanceof __await ? (this.v = v3, this) : new __await(v3);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g3 = generator.apply(thisArg, _arguments || []), i3, q5 = [];
        return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
          return this;
        }, i3;
        function verb(n2) {
          if (g3[n2])
            i3[n2] = function(v3) {
              return new Promise(function(a, b3) {
                q5.push([n2, v3, a, b3]) > 1 || resume(n2, v3);
              });
            };
        }
        function resume(n2, v3) {
          try {
            step(g3[n2](v3));
          } catch (e4) {
            settle(q5[0][3], e4);
          }
        }
        function step(r4) {
          r4.value instanceof __await ? Promise.resolve(r4.value.v).then(fulfill, reject) : settle(q5[0][2], r4);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f3, v3) {
          if (f3(v3), q5.shift(), q5.length)
            resume(q5[0][0], q5[0][1]);
        }
      };
      __asyncDelegator = function(o2) {
        var i3, p4;
        return i3 = {}, verb("next"), verb("throw", function(e4) {
          throw e4;
        }), verb("return"), i3[Symbol.iterator] = function() {
          return this;
        }, i3;
        function verb(n2, f3) {
          i3[n2] = o2[n2] ? function(v3) {
            return (p4 = !p4) ? { value: __await(o2[n2](v3)), done: n2 === "return" } : f3 ? f3(v3) : v3;
          } : f3;
        }
      };
      __asyncValues = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m3 = o2[Symbol.asyncIterator], i3;
        return m3 ? m3.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
          return this;
        }, i3);
        function verb(n2) {
          i3[n2] = o2[n2] && function(v3) {
            return new Promise(function(resolve, reject) {
              v3 = o2[n2](v3), settle(resolve, reject, v3.done, v3.value);
            });
          };
        }
        function settle(resolve, reject, d2, v3) {
          Promise.resolve(v3).then(function(v23) {
            resolve({ value: v23, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o2, v3) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v3 });
      } : function(o2, v3) {
        o2["default"] = v3;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k5 in mod)
            if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
              __createBinding(result, mod, k5);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, state, kind, f3) {
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, state, value, kind, f3) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});
var require_dist = __commonJS({
  "node_modules/lower-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lowerCase = exports.localeLowerCase = void 0;
    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
          \u0130: "i",
          I: "\u0131",
          I\u0307: "i"
        }
      },
      az: {
        regexp: /\u0130/g,
        map: {
          \u0130: "i",
          I: "\u0131",
          I\u0307: "i"
        }
      },
      lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
          I: "i\u0307",
          J: "j\u0307",
          \u012E: "\u012F\u0307",
          \u00CC: "i\u0307\u0300",
          \u00CD: "i\u0307\u0301",
          \u0128: "i\u0307\u0303"
        }
      }
    };
    function localeLowerCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang)
        return lowerCase(str.replace(lang.regexp, function(m3) {
          return lang.map[m3];
        }));
      return lowerCase(str);
    }
    exports.localeLowerCase = localeLowerCase;
    function lowerCase(str) {
      return str.toLowerCase();
    }
    exports.lowerCase = lowerCase;
  }
});
var require_dist2 = __commonJS({
  "node_modules/no-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noCase = void 0;
    var lower_case_1 = require_dist();
    var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
    var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
    function noCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      var _a5 = options.splitRegexp, splitRegexp = _a5 === void 0 ? DEFAULT_SPLIT_REGEXP : _a5, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
      var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
      var start = 0;
      var end = result.length;
      while (result.charAt(start) === "\0")
        start++;
      while (result.charAt(end - 1) === "\0")
        end--;
      return result.slice(start, end).split("\0").map(transform).join(delimiter);
    }
    exports.noCase = noCase;
    function replace(input, re5, value) {
      if (re5 instanceof RegExp)
        return input.replace(re5, value);
      return re5.reduce(function(input2, re23) {
        return input2.replace(re23, value);
      }, input);
    }
  }
});
var require_dist3 = __commonJS({
  "node_modules/pascal-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    function pascalCaseTransform(input, index) {
      var firstChar = input.charAt(0);
      var lowerChars = input.substr(1).toLowerCase();
      if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
      }
      return "" + firstChar.toUpperCase() + lowerChars;
    }
    exports.pascalCaseTransform = pascalCaseTransform;
    function pascalCaseTransformMerge(input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    exports.pascalCaseTransformMerge = pascalCaseTransformMerge;
    function pascalCase2(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "", transform: pascalCaseTransform }, options));
    }
    exports.pascalCase = pascalCase2;
  }
});
var require_dist4 = __commonJS({
  "node_modules/camel-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var pascal_case_1 = require_dist3();
    function camelCaseTransform(input, index) {
      if (index === 0)
        return input.toLowerCase();
      return pascal_case_1.pascalCaseTransform(input, index);
    }
    exports.camelCaseTransform = camelCaseTransform;
    function camelCaseTransformMerge(input, index) {
      if (index === 0)
        return input.toLowerCase();
      return pascal_case_1.pascalCaseTransformMerge(input);
    }
    exports.camelCaseTransformMerge = camelCaseTransformMerge;
    function camelCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));
    }
    exports.camelCase = camelCase;
  }
});
var require_dist5 = __commonJS({
  "node_modules/upper-case-first/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upperCaseFirst = void 0;
    function upperCaseFirst(input) {
      return input.charAt(0).toUpperCase() + input.substr(1);
    }
    exports.upperCaseFirst = upperCaseFirst;
  }
});
var require_dist6 = __commonJS({
  "node_modules/capital-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.capitalCase = exports.capitalCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_first_1 = require_dist5();
    function capitalCaseTransform(input) {
      return upper_case_first_1.upperCaseFirst(input.toLowerCase());
    }
    exports.capitalCaseTransform = capitalCaseTransform;
    function capitalCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: capitalCaseTransform }, options));
    }
    exports.capitalCase = capitalCase;
  }
});
var require_dist7 = __commonJS({
  "node_modules/upper-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upperCase = exports.localeUpperCase = void 0;
    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      az: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
          i\u0307: "I",
          j\u0307: "J",
          \u012F\u0307: "\u012E",
          i\u0307\u0300: "\xCC",
          i\u0307\u0301: "\xCD",
          i\u0307\u0303: "\u0128"
        }
      }
    };
    function localeUpperCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang)
        return upperCase(str.replace(lang.regexp, function(m3) {
          return lang.map[m3];
        }));
      return upperCase(str);
    }
    exports.localeUpperCase = localeUpperCase;
    function upperCase(str) {
      return str.toUpperCase();
    }
    exports.upperCase = upperCase;
  }
});
var require_dist8 = __commonJS({
  "node_modules/constant-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constantCase = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_1 = require_dist7();
    function constantCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "_", transform: upper_case_1.upperCase }, options));
    }
    exports.constantCase = constantCase;
  }
});
var require_dist9 = __commonJS({
  "node_modules/dot-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dotCase = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    function dotCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "." }, options));
    }
    exports.dotCase = dotCase;
  }
});
var require_dist10 = __commonJS({
  "node_modules/header-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headerCase = void 0;
    var tslib_1 = require_tslib();
    var capital_case_1 = require_dist6();
    function headerCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return capital_case_1.capitalCase(input, tslib_1.__assign({ delimiter: "-" }, options));
    }
    exports.headerCase = headerCase;
  }
});
var require_dist11 = __commonJS({
  "node_modules/param-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paramCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function paramCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "-" }, options));
    }
    exports.paramCase = paramCase;
  }
});
var require_dist12 = __commonJS({
  "node_modules/path-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function pathCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "/" }, options));
    }
    exports.pathCase = pathCase;
  }
});
var require_dist13 = __commonJS({
  "node_modules/sentence-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sentenceCase = exports.sentenceCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_first_1 = require_dist5();
    function sentenceCaseTransform(input, index) {
      var result = input.toLowerCase();
      if (index === 0)
        return upper_case_first_1.upperCaseFirst(result);
      return result;
    }
    exports.sentenceCaseTransform = sentenceCaseTransform;
    function sentenceCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: sentenceCaseTransform }, options));
    }
    exports.sentenceCase = sentenceCase;
  }
});
var require_dist14 = __commonJS({
  "node_modules/snake-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.snakeCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function snakeCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "_" }, options));
    }
    exports.snakeCase = snakeCase;
  }
});
var require_dist15 = __commonJS({
  "node_modules/change-case/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    tslib_1.__exportStar(require_dist4(), exports);
    tslib_1.__exportStar(require_dist6(), exports);
    tslib_1.__exportStar(require_dist8(), exports);
    tslib_1.__exportStar(require_dist9(), exports);
    tslib_1.__exportStar(require_dist10(), exports);
    tslib_1.__exportStar(require_dist2(), exports);
    tslib_1.__exportStar(require_dist11(), exports);
    tslib_1.__exportStar(require_dist3(), exports);
    tslib_1.__exportStar(require_dist12(), exports);
    tslib_1.__exportStar(require_dist13(), exports);
    tslib_1.__exportStar(require_dist14(), exports);
  }
});
var import_pluralize = __toESM(require_pluralize(), 1);
var import_change_case = __toESM(require_dist15(), 1);
var DataClient = class {
  db = {};
  cluster;
  connection;
  models;
  client;
  constructor(config) {
    this.connection = config.connection;
    this.models = config.models;
  }
  async getClient() {
    if (!this.connection?.database || !this.connection?.username || !this.connection?.password || !this.connection?.host || !this.connection?.port) {
      return;
    }
    this.client = new Sequelize(this.connection.database, this.connection.username, this.connection.password, {
      dialect: "postgres",
      host: this.connection.host,
      port: this.connection.port,
      ssl: true
    });
    for (const [modelName, model] of Object.entries(this.models)) {
      const cModel = model(this.client, DataTypes);
      this.db[modelName] = cModel;
    }
    for (const [modelName, model] of Object.entries(this.db)) {
      this.db[modelName]?.associate?.(this.db);
    }
    return this.client;
  }
  async connect({
    alter = false,
    force = false
  }) {
    await this.getClient();
    if (this.cluster) {
      if (!this.connection?.bastion?.host) {
        try {
          if (this.client)
            return this.client.sync({ alter, force });
        } catch (err) {
          console.error(err);
        }
      } else {
      }
    }
  }
  async create(model, data) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName) {
      return;
    }
    if (Array.isArray(data)) {
      return this.db[modelName]?.bulkCreate(data);
    } else {
      return this.db[modelName]?.create(data);
    }
  }
  async deleteMany(model, ids) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName) {
      return;
    }
    const result = await this.db?.[modelName]?.destroy({ where: { id: ids } });
    return result;
  }
  async deleteOne(model, id) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName) {
      return;
    }
    if (!id)
      return;
    const result = await this.db?.[modelName]?.destroy({ where: { id } });
    return result;
  }
  async getOne(model, id) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName) {
      return;
    }
    return this.db?.[modelName]?.findOne({ where: { id } });
  }
  async getMany(model, props) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName) {
      return;
    }
    console.log("filters", props?.filters);
    console.log("limit", props?.limit);
    if (props?.filters) {
      return this.db?.[modelName]?.findAll({ where: props.filters });
    }
    console.log("asdf");
    return this.db?.[modelName]?.findAll();
  }
  async updateMany(model, data) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName)
      return;
    const result = await this.db?.[modelName]?.upsert(data);
    return result;
  }
  async updateOne(model, id, data) {
    let modelName = "";
    Object.entries(this.db).forEach(([name, m3]) => {
      if (name === (0, import_pluralize.singular)((0, import_change_case.pascalCase)(model)))
        modelName = name;
    });
    if (!modelName)
      return;
    const entity = await this.db?.[modelName]?.findOne({ where: { id } });
    if (!entity)
      return;
    await entity.update(data);
    return entity;
  }
};

// node_modules/@srclaunch/exceptions/dist/index.js
var aa = class {
  analytics(e4) {
  }
  critical(e4) {
  }
  debug(e4) {
  }
  async exception(e4) {
    console.log(e4);
  }
  http(e4) {
  }
  async info(e4) {
    console.log(e4);
  }
  warning(e4) {
  }
  constructor(e4) {
  }
};
var Re = aa;
var ia = ((e4) => (e4.Comment = "comment", e4.Create = "create", e4.Delete = "delete", e4.Edit = "edit", e4.Invoice = "invoice", e4.Message = "message", e4.PageView = "pageView", e4.Paid = "paid", e4.Payment = "payment", e4.Purchase = "purchase", e4.Referral = "referral", e4.Renewal = "renewal", e4.Signup = "signup", e4.Subscription = "subscription", e4.Upgrade = "upgrade", e4))(ia || {});
var na = ((e4) => (e4.Business = "business", e4.Engineering = "engineering", e4.Exception = "exception", e4.LogMessage = "log-message", e4.Marketing = "marketing", e4.PageLeave = "page-leave", e4.PageView = "page-view", e4.Product = "product", e4.QualityManagement = "quality-management", e4.UserAccess = "user-access", e4.UserLogin = "user-login", e4.UserLogout = "user-logout", e4.UserSignup = "user-signup", e4.UserPreferencesChanged = "user-preferences-changed", e4.WebsiteVisit = "website-visit", e4))(na || {});
var sa = ((e4) => (e4.CloseTab = "close-tab", e4.ExternalLink = "external-link", e4.NavigateAway = "navigate-away", e4.Unknown = "unknown", e4))(sa || {});
var ta = ((e4) => (e4.Ecs = "Ecs", e4))(ta || {});
var oa = ((e4) => (e4.Finished = "Finished", e4.Queued = "Queued", e4.Running = "Running", e4.Started = "Started", e4))(oa || {});
var ua = ((e4) => (e4.Mobile = "mobile", e4.TV = "tv", e4.Watch = "watch", e4.Web = "web", e4))(ua || {});
var ra = ((e4) => (e4.Development = "Development", e4.NonProduction = "NonProduction", e4.Production = "Production", e4))(ra || {});
var ma = ((e4) => (e4.Completed = "completed", e4.Started = "started", e4.Uncompleted = "uncompleted", e4))(ma || {});
var la = ((e4) => (e4.Build = "Build", e4.Deployment = "Deployment", e4.Test = "Test", e4))(la || {});
var da = ((e4) => (e4.Canceled = "Canceled", e4.Completed = "Completed", e4.Failed = "Failed", e4.Running = "Running", e4.Queued = "Queued", e4.Waiting = "Waiting", e4))(da || {});
var ca = ((e4) => (e4.Canceled = "Canceled", e4.Completed = "Completed", e4.Failed = "Failed", e4.Running = "Running", e4.Queued = "Queued", e4.Waiting = "Waiting", e4))(ca || {});
var Aa = ((e4) => (e4.ForgotPassword = "forgot_password", e4.Index = "index", e4.Login = "login", e4.PageNotFound = "404", e4.Signup = "signup", e4.VerifyCode = "verify_code", e4))(Aa || {});
var ga = ((e4) => (e4.Info = "info", e4.Warning = "warning", e4.Error = "error", e4.Success = "success", e4))(ga || {});
var Ta = ((e4) => (e4.Details = "details", e4.Dialog = "dialog", e4))(Ta || {});
var pa = ((e4) => (e4.Info = "info", e4.Warning = "warning", e4.Error = "error", e4.Success = "success", e4))(pa || {});
var Ea = ((e4) => (e4.AccountBalance = "AccountBalance", e4.UserAssets = "UserAssets", e4.UserCreditCardDebt = "UserCreditCardDebt", e4.UserCreditLimit = "UserCreditLimit", e4.UserCreditUtilization = "UserCreditUtilization", e4.UserDebt = "UserDebt", e4.UserInvestments = "UserInvestments", e4.UserRetirement = "UserRetirement", e4.UserSavings = "UserSavings", e4))(Ea || {});
var fa = ((e4) => (e4.DateTime = "date_time", e4.True = "true", e4.False = "false", e4.UniqueId = "unique_id", e4))(fa || {});
var ha = ((e4) => (e4.DomainModel = "domain_entity", e4.GenericModel = "generic_entity", e4))(ha || {});
var Ca = ((e4) => (e4.AirportCode = "airport-code", e4.BankIDCode = "bank-id-code", e4.BitcoinAddress = "bitcoin-address", e4.Boolean = "boolean", e4.City = "city", e4.Color = "color", e4.CountryCode = "country-code", e4.CreditCard = "credit-card", e4.CurrencyAmount = "currency-amount", e4.CurrencyCode = "currency-code", e4.DataURI = "data-uri", e4.Date = "date", e4.DateRange = "date-range", e4.DateTime = "date-time", e4.DayOfMonth = "day-of-month", e4.DomainName = "domain-name", e4.EmailAddress = "email-address", e4.EthereumAddress = "ethereum-address", e4.EAN = "european-article-number", e4.EIN = "employer-identification-number", e4.Float = "float", e4.GeographicCoordinate = "geographic-coordinate", e4.GeographicCoordinates = "geographic-coordinates", e4.GitRepositoryURL = "git-repository-url", e4.HSLColor = "hsl-color", e4.HexColor = "hex-color", e4.Hexadecimal = "hexadecimal", e4.IBAN = "international-bank-account-number", e4.IMEI = "international-mobile-equipment-identifier", e4.IPAddress = "ip-address", e4.IPAddressRange = "ip-address-range", e4.ISBN = "international-standard-book-number", e4.ISIN = "international-stock-number", e4.ISMN = "international-standard-music-number", e4.ISSN = "international-standard-serial-number", e4.ISO8601 = "iso-8601", e4.ISO31661Alpha2 = "iso-31661-alpha-2", e4.ISO31661Alpha3 = "iso-31661-alpha-3", e4.ISO4217 = "iso-4217", e4.Image = "image", e4.Integer = "integer", e4.JSON = "json", e4.LanguageCode = "language-code", e4.LicensePlateNumber = "license-plate-number", e4.LongText = "long-text", e4.MD5 = "md5", e4.Markdown = "markdown", e4.Menu = "menu", e4.Number = "number", e4.MACAddress = "mac-address", e4.MagnetURI = "magnet-uri", e4.MimeType = "mime-type", e4.Month = "month", e4.Password = "password", e4.PassportNumber = "passport-number", e4.Percent = "percent", e4.PhoneNumber = "phone-number", e4.Port = "port", e4.PostalCode = "postal-code", e4.Province = "province", e4.RFC3339 = "rfc-3339", e4.RGBColor = "rgb-color", e4.SemanticVersion = "semantic-version", e4.SSN = "social-security-number", e4.State = "state", e4.StreetAddress = "street-address", e4.String = "string", e4.Tags = "tags", e4.TaxIDNumber = "tax-id-number", e4.Time = "time", e4.TimeOfDay = "time-of-day", e4.TimeRange = "time-range", e4.TimezoneRegion = "timezone-region", e4.URL = "url", e4.URLPath = "url-path", e4.UUID = "uuid", e4.VATIDNumber = "value-added-tax-id-number", e4.VerificationCode = "verification-code", e4.Video = "video", e4.Weekday = "weekday", e4.Year = "year", e4))(Ca || {});
var Ia = ((e4) => (e4.Critical = "Critical", e4.Error = "Error", e4.Fatal = "Fatal", e4.Warning = "Warning", e4))(Ia || {});
var va = ((e4) => (e4.Contains = "contains", e4.HasCharacterCount = "has-character-count", e4.HasNumberCount = "has-number-count", e4.HasLetterCount = "has-letter-count", e4.HasLowercaseCount = "has-lowercase-count", e4.HasSpacesCount = "has-spaces-count", e4.HasSymbolCount = "has-symbol-count", e4.HasUppercaseCount = "has-uppercase-count", e4.IsAfter = "is-after", e4.IsAfterOrEqual = "is-after-or-equal", e4.IsAirport = "is-airport", e4.IsAlpha = "is-alpha", e4.IsAlphanumeric = "is-alphanumeric", e4.IsAlgorithmHash = "is-algorithm-hash", e4.IsAscii = "is-ascii", e4.IsBase64 = "is-base-64", e4.IsBefore = "is-before", e4.IsBeforeOrAfter = "is-before-or-after", e4.IsBeforeOrEqual = "is-before-or-equal", e4.IsBetween = "is-between", e4.IsBIC = "is-bic", e4.IsBitcoinAddress = "is-bitcoin-address", e4.IsBoolean = "is-boolean", e4.IsColor = "is-color", e4.IsComplexEnough = "is-complex-enough", e4.IsCountry = "is-country", e4.IsCreditCard = "is-credit-card", e4.IsCurrency = "is-currency", e4.IsDataURI = "is-data-uri", e4.IsDate = "is-date", e4.IsDateRange = "is-date-range", e4.IsDateTime = "is-date-time", e4.IsDayOfMonth = "is-day-of-month", e4.IsDecimal = "is-decimal", e4.IsDivisibleBy = "is-divisible-by", e4.IsDomainName = "is-domain-name", e4.IsEmailAddress = "is-email-address", e4.IsEthereumAddress = "is-ethereum-address", e4.IsEAN = "is-ean", e4.IsEIN = "is-ein", e4.IsEqual = "is-equal", e4.IsEvenNumber = "is-even-number", e4.IsFloat = "is-float", e4.IsIBAN = "is-iban", e4.IsGreaterThan = "greater-than", e4.IsGreaterThanOrEqual = "greater-than-or-equal", e4.IsHSLColor = "is-hsl-color", e4.IsHexColor = "is-hex-color", e4.IsHexadecimal = "is-hexadecimal", e4.IsIdentityCardCode = "is-identity-card-code", e4.IsIMEI = "is-imei", e4.IsInIPAddressRange = "is-in-ip-address-range", e4.IsInList = "is-in-list", e4.IsInTheLast = "is-in-the-last", e4.IsInteger = "is-integer", e4.IsIPAddress = "is-ip-address", e4.IsIPAddressRange = "is-ip-address-range", e4.IsISBN = "is-isbn", e4.IsISIN = "is-isin", e4.IsISMN = "is-ismn", e4.IsISRC = "is-isrc", e4.IsISSN = "is-issn", e4.IsISO4217 = "is-iso-4217", e4.IsISO8601 = "is-iso-8601", e4.IsISO31661Alpha2 = "is-iso-31661-alpha-2", e4.IsISO31661Alpha3 = "is-iso-31661-alpha-3", e4.IsJSON = "is-json", e4.IsLanguage = "is-language", e4.IsLatitude = "is-latitude", e4.IsLongitude = "is-longitude", e4.IsLengthEqual = "is-length-equal", e4.IsLengthGreaterThan = "is-length-greater-than", e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", e4.IsLengthLessThan = "is-length-less-than", e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", e4.IsLessThan = "less-than", e4.IsLessThanOrEqual = "less-than-or-equal", e4.IsLicensePlateNumber = "is-license-plate-number", e4.IsLowercase = "is-lowercase", e4.IsOctal = "is-octal", e4.IsMACAddress = "is-mac-address", e4.IsMD5 = "is-md5", e4.IsMagnetURI = "is-magnet-uri", e4.IsMarkdown = "is-markdown", e4.IsMimeType = "is-mime-type", e4.IsMonth = "is-month", e4.IsNegativeNumber = "is-negative-number", e4.IsNotDate = "is-not-date", e4.IsNotEqual = "is-not-equal", e4.IsNotInIPAddressRange = "is-not-in-ip-address-range", e4.IsNotInList = "is-not-in-list", e4.IsNotNull = "is-not-null", e4.IsNotRegexMatch = "is-not-regex-match", e4.IsNotToday = "is-not-today", e4.IsNumber = "is-number", e4.IsNumeric = "is-numeric", e4.IsOddNumber = "is-odd-number", e4.IsPassportNumber = "is-passport-number", e4.IsPhoneNumber = "is-phone-number", e4.IsPort = "is-port", e4.IsPositiveNumber = "is-positive-number", e4.IsPostalCode = "is-postal-code", e4.IsProvince = "is-province", e4.IsRGBColor = "is-rgb-color", e4.IsRegexMatch = "is-regex-match", e4.IsRequired = "is-required", e4.IsSemanticVersion = "is-semantic-version", e4.IsSlug = "is-slug", e4.IsSSN = "is-ssn", e4.IsState = "is-state", e4.IsStreetAddress = "is-street-address", e4.IsString = "is-string", e4.IsStrongPassword = "is-strong-password", e4.IsTags = "is-tags", e4.IsTaxIDNumber = "is-tax-id-number", e4.IsThisMonth = "is-this-month", e4.IsThisQuarter = "is-this-quarter", e4.IsThisWeek = "is-this-week", e4.IsThisWeekend = "is-this-weekend", e4.IsThisYear = "is-this-year", e4.IsTime = "is-time", e4.IsTimeOfDay = "is-time-of-day", e4.IsTimeRange = "is-time-range", e4.IsToday = "is-today", e4.IsURL = "is-url", e4.IsUUID = "is-uuid", e4.IsUppercase = "is-uppercase", e4.IsUsernameAvailable = "is-username-available", e4.IsValidStreetAddress = "is-valid-street-address", e4.IsVATIDNumber = "is-vat-id-number", e4.IsWeekday = "is-weekday", e4.IsWeekend = "is-weekend", e4.IsYear = "is-year", e4))(va || {});
var Sa = ((e4) => (e4.IsAuthenticated = "is-authenticated", e4.IsNotAuthenticated = "is-not-authenticated", e4.IsUsernameAvailable = "is-username-available", e4.PasswordMismatch = "password-mismatch", e4))(Sa || {});
var ba = ((e4) => (e4[e4.IsHSLColor = "is-hsl-color"] = "IsHSLColor", e4[e4.IsHexColor = "is-hex-color"] = "IsHexColor", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsRGBColor = "is-rgb-color"] = "IsRGBColor", e4[e4.IsString = "is-string"] = "IsString", e4))(ba || {});
var ya = ((e4) => (e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsCurrency = "is-currency"] = "IsCurrency", e4[e4.IsDecimal = "is-decimal"] = "IsDecimal", e4[e4.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsFloat = "is-float"] = "IsFloat", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsISO8601 = "is-iso-8601"] = "IsISO8601", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", e4))(ya || {});
var _a = ((e4) => (e4[e4.IsBitcoinAddress = "is-bitcoin-address"] = "IsBitcoinAddress", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(_a || {});
var Ba = ((e4) => (e4[e4.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(Ba || {});
var Da = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsJSON = "is-json"] = "IsJSON", e4[e4.IsLanguage = "is-language"] = "IsLanguage", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(Da || {});
var Na = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Na || {});
var Ua = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsCountry = "is-country"] = "IsCountry", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ua || {});
var ka = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsFloat = "is-float"] = "IsFloat", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4))(ka || {});
var xa = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsFloat = "is-float"] = "IsFloat", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4))(xa || {});
var Fa = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsPostalCode = "is-postal-code"] = "IsPostalCode", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(Fa || {});
var Ma = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsProvince = "is-province"] = "IsProvince", e4[e4.IsString = "is-string"] = "IsString", e4))(Ma || {});
var La = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsState = "is-state"] = "IsState", e4[e4.IsString = "is-string"] = "IsString", e4))(La || {});
var Pa = ((e4) => (e4[e4.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsStreetAddress = "is-street-address"] = "IsStreetAddress", e4))(Pa || {});
var Ra = ((e4) => (e4[e4.IsAirport = "is-airport"] = "IsAirport", e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ra || {});
var za = ((e4) => (e4[e4.IsAlgorithmHash = "is-algorithm-hash"] = "IsAlgorithmHash", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(za || {});
var qa = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e4[e4.IsString = "is-string"] = "IsString", e4))(qa || {});
var Ga = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsUUID = "is-uuid"] = "IsUUID", e4))(Ga || {});
var Ka = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMD5 = "is-md5"] = "IsMD5", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ka || {});
var wa = ((e4) => (e4[e4.IsBoolean = "is-boolean"] = "IsBoolean", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(wa || {});
var Oa = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsDate = "is-date"] = "IsDate", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotDate = "is-not-date"] = "IsNotDate", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotToday = "is-not-today"] = "IsNotToday", e4[e4.IsThisWeek = "is-this-week"] = "IsThisWeek", e4[e4.IsThisMonth = "is-this-month"] = "IsThisMonth", e4[e4.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", e4[e4.IsThisYear = "is-this-year"] = "IsThisYear", e4[e4.IsToday = "is-today"] = "IsToday", e4[e4.IsWeekend = "is-weekend"] = "IsWeekend", e4))(Oa || {});
var Ha = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsDate = "is-date"] = "IsDate", e4[e4.IsDateRange = "is-date-range"] = "IsDateRange", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(Ha || {});
var Wa = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsDate = "is-date"] = "IsDate", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotDate = "is-not-date"] = "IsNotDate", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotToday = "is-not-today"] = "IsNotToday", e4[e4.IsThisWeek = "is-this-week"] = "IsThisWeek", e4[e4.IsThisMonth = "is-this-month"] = "IsThisMonth", e4[e4.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", e4[e4.IsThisYear = "is-this-year"] = "IsThisYear", e4[e4.IsToday = "is-today"] = "IsToday", e4[e4.IsWeekend = "is-weekend"] = "IsWeekend", e4))(Wa || {});
var Va = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsDayOfMonth = "is-day-of-month"] = "IsDayOfMonth", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsToday = "is-today"] = "IsToday", e4[e4.IsWeekday = "is-weekday"] = "IsWeekday", e4[e4.IsWeekend = "is-weekend"] = "IsWeekend", e4))(Va || {});
var ja = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsMonth = "is-month"] = "IsMonth", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsThisMonth = "is-this-month"] = "IsThisMonth", e4))(ja || {});
var Ya = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsTime = "is-time"] = "IsTime", e4))(Ya || {});
var Za = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsTime = "is-time"] = "IsTime", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsTimeRange = "is-time-range"] = "IsTimeRange", e4))(Za || {});
var Ja = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsTimeOfDay = "is-time-of-day"] = "IsTimeOfDay", e4[e4.IsTimeRange = "is-time-range"] = "IsTimeRange", e4))(Ja || {});
var Qa = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsWeekday = "is-weekday"] = "IsWeekday", e4[e4.IsWeekend = "is-weekend"] = "IsWeekend", e4))(Qa || {});
var $a = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsThisYear = "is-this-year"] = "IsThisYear", e4[e4.IsYear = "is-year"] = "IsYear", e4))($a || {});
var Xa = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", e4[e4.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e4[e4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e4[e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e4[e4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e4[e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Xa || {});
var ei = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsJSON = "is-json"] = "IsJSON", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(ei || {});
var ai = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsMarkdown = "is-markdown"] = "IsMarkdown", e4[e4.IsString = "is-string"] = "IsString", e4))(ai || {});
var ii = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(ii || {});
var ni = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(ni || {});
var si = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsDataURI = "is-data-uri"] = "IsDataURI", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(si || {});
var ti = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsDomainName = "is-domain-name"] = "IsDomainName", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ti || {});
var oi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(oi || {});
var ui = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIPAddress = "is-ip-address"] = "IsIPAddress", e4[e4.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ui || {});
var ri = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIPAddressRange = "is-ip-address-range"] = "IsIPAddressRange", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ri || {});
var mi = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(mi || {});
var li = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMACAddress = "is-mac-address"] = "IsMACAddress", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(li || {});
var di = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(di || {});
var ci = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMimeType = "is-mime-type"] = "IsMimeType", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ci || {});
var Ai = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsSlug = "is-slug"] = "IsSlug", e4))(Ai || {});
var gi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsURL = "is-url"] = "IsURL", e4))(gi || {});
var Ti = ((e4) => (e4[e4.IsAfter = "is-after"] = "IsAfter", e4[e4.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e4[e4.IsBefore = "is-before"] = "IsBefore", e4[e4.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e4[e4.IsBetween = "is-between"] = "IsBetween", e4[e4.IsDecimal = "is-decimal"] = "IsDecimal", e4[e4.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", e4[e4.IsEAN = "is-ean"] = "IsEAN", e4[e4.IsEIN = "is-ein"] = "IsEIN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e4[e4.IsFloat = "is-float"] = "IsFloat", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInt = "is-integer"] = "IsInt", e4[e4.IsISBN = "is-isbn"] = "IsISBN", e4[e4.IsISMN = "is-ismn"] = "IsISMN", e4[e4.IsISSN = "is-issn"] = "IsISSN", e4[e4.IsLatitude = "is-latitude"] = "IsLatitude", e4[e4.IsLongitude = "is-longitude"] = "IsLongitude", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsMACAddress = "is-mac-address"] = "IsMACAddress", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsOddNumber = "is-odd-number"] = "IsOddNumber", e4[e4.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e4[e4.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e4[e4.IsPort = "is-port"] = "IsPort", e4[e4.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", e4[e4.IsPostalCode = "is-postal-code"] = "IsPostalCode", e4[e4.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e4[e4.IsSSN = "is-ssn"] = "IsSSN", e4[e4.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e4[e4.IsUUID = "is-uuid"] = "IsUUID", e4[e4.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e4))(Ti || {});
var pi = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsFloat = "is-float"] = "IsFloat", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4))(pi || {});
var Ei = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4))(Ei || {});
var fi = ((e4) => (e4[e4.IsCreditCard = "is-credit-card"] = "IsCreditCard", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e4[e4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e4[e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e4[e4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e4[e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4))(fi || {});
var hi = ((e4) => (e4[e4.isEmailAddress = "is-email-address"] = "isEmailAddress", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e4[e4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e4[e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e4[e4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e4[e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4))(hi || {});
var Ci = ((e4) => (e4[e4.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4))(Ci || {});
var Ii = ((e4) => (e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4))(Ii || {});
var vi = ((e4) => (e4[e4.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4[e4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e4[e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e4[e4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e4[e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e4[e4.IsStrongPassword = "is-strong-password"] = "IsStrongPassword", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4))(vi || {});
var Si = ((e4) => (e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4))(Si || {});
var bi = ((e4) => (e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsSSN = "is-ssn"] = "IsSSN", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4))(bi || {});
var yi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsBIC = "is-bic"] = "IsBIC", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(yi || {});
var _i = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEAN = "is-ean"] = "IsEAN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(_i || {});
var Bi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEIN = "is-ein"] = "IsEIN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Bi || {});
var Di = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIBAN = "is-iban"] = "IsIBAN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Di || {});
var Ni = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISBN = "is-isbn"] = "IsISBN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ni || {});
var Ui = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISIN = "is-isin"] = "IsISIN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ui || {});
var ki = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISMN = "is-ismn"] = "IsISMN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ki || {});
var xi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISSN = "is-issn"] = "IsISSN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(xi || {});
var Fi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e4))(Fi || {});
var Mi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e4))(Mi || {});
var Li = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.HasNumberCount = "has-number-count"] = "HasNumberCount", e4[e4.HasLowercaseCount = "has-lowercase-count"] = "HasLowercaseCount", e4[e4.HasLetterCount = "has-letter-count"] = "HasLetterCount", e4[e4.HasSpacesCount = "has-spaces-count"] = "HasSpacesCount", e4[e4.HasSymbolCount = "has-symbol-count"] = "HasSymbolCount", e4[e4.HasUppercaseCount = "has-uppercase-count"] = "HasUppercaseCount", e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e4[e4.IsAscii = "is-ascii"] = "IsAscii", e4[e4.IsBase64 = "is-base-64"] = "IsBase64", e4[e4.IsColor = "is-color"] = "IsColor", e4[e4.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", e4[e4.IsCreditCard = "is-credit-card"] = "IsCreditCard", e4[e4.IsDataURI = "is-data-uri"] = "IsDataURI", e4[e4.IsDomainName = "is-domain-name"] = "IsDomainName", e4[e4.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e4[e4.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", e4[e4.IsEAN = "is-ean"] = "IsEAN", e4[e4.IsEIN = "is-ein"] = "IsEIN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIBAN = "is-iban"] = "IsIBAN", e4[e4.IsHSLColor = "is-hsl-color"] = "IsHSLColor", e4[e4.IsHexColor = "is-hex-color"] = "IsHexColor", e4[e4.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", e4[e4.IsIdentityCardCode = "is-identity-card-code"] = "IsIdentityCardCode", e4[e4.IsIMEI = "is-imei"] = "IsIMEI", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsIPAddress = "is-ip-address"] = "IsIPAddress", e4[e4.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", e4[e4.IsISBN = "is-isbn"] = "IsISBN", e4[e4.IsISIN = "is-isin"] = "IsISIN", e4[e4.IsISMN = "is-ismn"] = "IsISMN", e4[e4.IsISRC = "is-isrc"] = "IsISRC", e4[e4.IsISSN = "is-issn"] = "IsISSN", e4[e4.IsLanguage = "is-language"] = "IsLanguage", e4[e4.IsLatitude = "is-latitude"] = "IsLatitude", e4[e4.IsLongitude = "is-longitude"] = "IsLongitude", e4[e4.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e4[e4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e4[e4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e4[e4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e4[e4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e4[e4.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", e4[e4.IsLowercase = "is-lowercase"] = "IsLowercase", e4[e4.IsOctal = "is-octal"] = "IsOctal", e4[e4.IsMACAddress = "is-mac-address"] = "IsMACAddress", e4[e4.IsMD5 = "is-md5"] = "IsMD5", e4[e4.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e4[e4.IsMarkdown = "is-markdown"] = "IsMarkdown", e4[e4.IsMimeType = "is-mime-type"] = "IsMimeType", e4[e4.IsMonth = "is-month"] = "IsMonth", e4[e4.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e4[e4.IsNumber = "is-number"] = "IsNumber", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4[e4.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e4[e4.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e4[e4.IsPort = "is-port"] = "IsPort", e4[e4.IsPostalCode = "is-postal-code"] = "IsPostalCode", e4[e4.IsProvince = "is-province"] = "IsProvince", e4[e4.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e4[e4.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e4[e4.IsSlug = "is-slug"] = "IsSlug", e4[e4.IsSSN = "is-ssn"] = "IsSSN", e4[e4.IsState = "is-state"] = "IsState", e4[e4.IsStreetAddress = "is-street-address"] = "IsStreetAddress", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e4[e4.IsURL = "is-url"] = "IsURL", e4[e4.IsUUID = "is-uuid"] = "IsUUID", e4[e4.IsUppercase = "is-uppercase"] = "IsUppercase", e4[e4.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e4[e4.IsWeekday = "is-weekday"] = "IsWeekday", e4[e4.IsWeekend = "is-weekend"] = "IsWeekend", e4[e4.IsYear = "is-year"] = "IsYear", e4))(Li || {});
var Pi = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMarkdown = "is-markdown"] = "IsMarkdown", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNumeric = "is-numeric"] = "IsNumeric", e4[e4.IsLowercase = "is-lowercase"] = "IsLowercase", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsUppercase = "is-uppercase"] = "IsUppercase", e4))(Pi || {});
var Ri = ((e4) => (e4.InvalidCharacters = "invalid-characters", e4.InvalidPattern = "invalid-pattern", e4.NotComplexEnough = "not-complex-enough", e4.NotUnique = "not-unique", e4.NotValidEmail = "not-valid-email", e4.TooLong = "too-long", e4.TooShort = "too-short", e4.Required = "required", e4))(Ri || {});
var zi = ((e4) => (e4[e4.Allowed = 0] = "Allowed", e4[e4.Blocked = 1] = "Blocked", e4))(zi || {});
var qi = ((e4) => (e4.Canceled = "Canceled", e4.Completed = "Completed", e4.Created = "Created", e4.Faulted = "Faulted", e4.Queued = "Queued", e4.Running = "Running", e4.Waiting = "Waiting", e4))(qi || {});
var Gi = ((e4) => (e4.Archived = "ARCHIVED", e4.Compromised = "COMPROMISED", e4.Confirmed = "CONFIRMED", e4.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", e4.ResetRequired = "RESET_REQUIRED", e4.Unconfirmed = "UNCONFIRMED", e4.Unknown = "UNKNOWN", e4))(Gi || {});
var Ki = ((e4) => (e4.Owner = "Owner", e4.Admin = "Admin", e4.User = "User", e4.Visitor = "Visitor", e4))(Ki || {});
var wi = ((e4) => (e4.RequiresPaymentMethod = "requires_payment_method", e4.RequiresConfirmation = "requires_confirmation", e4.RequiresAction = "requires_action", e4.Processing = "processing", e4.RequiresCapture = "requires_capture", e4.Canceled = "canceled", e4.Succeeded = "succeeded", e4))(wi || {});
var Oi = ((e4) => (e4.Incomplete = "incomplete", e4.IncompleteExpired = "incomplete_expired", e4.Trialing = "trialing", e4.Active = "active", e4.PastDue = "past_due", e4.Canceled = "canceled", e4.Unpaid = "unpaid", e4))(Oi || {});
var Hi = ((e4) => (e4.Monthly = "monthly", e4.Quarterly = "quarterly", e4.Yearly = "yearly", e4.Lifetime = "lifetime", e4))(Hi || {});
var Wi = ((e4) => (e4.Delivered = "delivered", e4.Read = "read", e4.Sending = "sending", e4.Sent = "sent", e4))(Wi || {});
var Vi = ((e4) => (e4.Audio = "audio", e4.File = "file", e4.Image = "image", e4.Text = "text", e4.Video = "video", e4))(Vi || {});
var ji = ((e4) => (e4.Audio = "audio", e4.File = "file", e4.Image = "image", e4.Video = "video", e4))(ji || {});
var Yi = ((e4) => (e4.Angry = "angry", e4.Laugh = "laugh", e4.Like = "like", e4.Love = "love", e4.Sad = "sad", e4.Wow = "wow", e4.Wink = "wink", e4.Yay = "yay", e4))(Yi || {});
var Zi = ((e4) => (e4.Email = "email", e4.PhoneNumber = "phone_number", e4))(Zi || {});
var i = ((e4) => (e4.Analytics = "analytics", e4.Critical = "critical", e4.Debug = "debug", e4.Exception = "exception", e4.Http = "http", e4.Info = "info", e4.Warning = "warning", e4))(i || {});
var Ji = ((e4) => (e4.Delete = "delete", e4.Get = "get", e4.Head = "head", e4.Patch = "patch", e4.Post = "post", e4.Put = "put", e4))(Ji || {});
var Qi = ((e4) => (e4[e4.CONTINUE = 100] = "CONTINUE", e4[e4.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e4[e4.PROCESSING = 102] = "PROCESSING", e4[e4.OK = 200] = "OK", e4[e4.CREATED = 201] = "CREATED", e4[e4.ACCEPTED = 202] = "ACCEPTED", e4[e4.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e4[e4.NO_CONTENT = 204] = "NO_CONTENT", e4[e4.RESET_CONTENT = 205] = "RESET_CONTENT", e4[e4.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e4[e4.MULTI_STATUS = 207] = "MULTI_STATUS", e4[e4.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", e4[e4.IM_USED = 226] = "IM_USED", e4[e4.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e4[e4.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e4[e4.FOUND = 302] = "FOUND", e4[e4.SEE_OTHER = 303] = "SEE_OTHER", e4[e4.NOT_MODIFIED = 304] = "NOT_MODIFIED", e4[e4.USE_PROXY = 305] = "USE_PROXY", e4[e4.SWITCH_PROXY = 306] = "SWITCH_PROXY", e4[e4.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e4[e4.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e4[e4.BAD_REQUEST = 400] = "BAD_REQUEST", e4[e4.UNAUTHORIZED = 401] = "UNAUTHORIZED", e4[e4.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e4[e4.FORBIDDEN = 403] = "FORBIDDEN", e4[e4.NOT_FOUND = 404] = "NOT_FOUND", e4[e4.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e4[e4.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e4[e4.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e4[e4.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e4[e4.CONFLICT = 409] = "CONFLICT", e4[e4.GONE = 410] = "GONE", e4[e4.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e4[e4.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e4[e4.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", e4[e4.URI_TOO_LONG = 414] = "URI_TOO_LONG", e4[e4.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e4[e4.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", e4[e4.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e4[e4.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", e4[e4.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", e4[e4.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e4[e4.LOCKED = 423] = "LOCKED", e4[e4.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e4[e4.TOO_EARLY = 425] = "TOO_EARLY", e4[e4.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", e4[e4.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e4[e4.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e4[e4.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e4[e4.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e4[e4.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e4[e4.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e4[e4.BAD_GATEWAY = 502] = "BAD_GATEWAY", e4[e4.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e4[e4.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e4[e4.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e4[e4.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", e4[e4.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e4[e4.LOOP_DETECTED = 508] = "LOOP_DETECTED", e4[e4.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", e4[e4.NOT_EXTENDED = 510] = "NOT_EXTENDED", e4[e4.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", e4))(Qi || {});
var $i = ((e4) => (e4.Afghanistan = "AF", e4.Albania = "AL", e4.Algeria = "DZ", e4.AmericanSamoa = "AS", e4.Andorra = "AD", e4.Angola = "AO", e4.Anguilla = "AI", e4.Antarctica = "AQ", e4.AntiguaAndBarbuda = "AG", e4.Argentina = "AR", e4.Armenia = "AM", e4.Aruba = "AW", e4.Australia = "AU", e4.Austria = "AT", e4.Azerbaijan = "AZ", e4.Bahamas = "BS", e4.Bahrain = "BH", e4.Bangladesh = "BD", e4.Barbados = "BB", e4.Belarus = "BY", e4.Belgium = "BE", e4.Belize = "BZ", e4.Benin = "BJ", e4.Bermuda = "BM", e4.Bhutan = "BT", e4.Bolivia = "BO", e4.BosniaAndHerzegovina = "BA", e4.Botswana = "BW", e4.BouvetIsland = "BV", e4.Brazil = "BR", e4.BritishIndianOceanTerritory = "IO", e4.Brunei = "BN", e4.Bulgaria = "BG", e4.BurkinaFaso = "BF", e4.Burundi = "BI", e4.Cambodia = "KH", e4.Cameroon = "CM", e4.Canada = "CA", e4.CapeVerde = "CV", e4.CaymanIslands = "KY", e4.CentralAfricanRepublic = "CF", e4.Chad = "TD", e4.Chile = "CL", e4.China = "CN", e4.ChristmasIsland = "CX", e4.CocosKeelingIslands = "CC", e4.Colombia = "CO", e4.Comoros = "KM", e4.Congo = "CG", e4.CongoTheDemocraticRepublicOfThe = "CD", e4.CookIslands = "CK", e4.CostaRica = "CR", e4.CoteDIvoire = "CI", e4.Croatia = "HR", e4.Cuba = "CU", e4.Cyprus = "CY", e4.CzechRepublic = "CZ", e4.Denmark = "DK", e4.Djibouti = "DJ", e4.Dominica = "DM", e4.DominicanRepublic = "DO", e4.Ecuador = "EC", e4.Egypt = "EG", e4.ElSalvador = "SV", e4.EquatorialGuinea = "GQ", e4.Eritrea = "ER", e4.Estonia = "EE", e4.Ethiopia = "ET", e4.FalklandIslands = "FK", e4.FaroeIslands = "FO", e4.Fiji = "FJ", e4.Finland = "FI", e4.France = "FR", e4.FrenchGuiana = "GF", e4.FrenchPolynesia = "PF", e4.FrenchSouthernTerritories = "TF", e4.Gabon = "GA", e4.Gambia = "GM", e4.Georgia = "GE", e4.Germany = "DE", e4.Ghana = "GH", e4.Gibraltar = "GI", e4.Greece = "GR", e4.Greenland = "GL", e4.Grenada = "GD", e4.Guadeloupe = "GP", e4.Guam = "GU", e4.Guatemala = "GT", e4.Guernsey = "GG", e4.Guinea = "GN", e4.GuineaBissau = "GW", e4.Guyana = "GY", e4.Haiti = "HT", e4.HeardIslandMcdonaldIslands = "HM", e4.HolySeeVaticanCityState = "VA", e4.Honduras = "HN", e4.HongKong = "HK", e4.Hungary = "HU", e4.Iceland = "IS", e4.India = "IN", e4.Indonesia = "ID", e4.Iran = "IR", e4.Iraq = "IQ", e4.Ireland = "IE", e4.IsleOfMan = "IM", e4.Israel = "IL", e4.Italy = "IT", e4.Jamaica = "JM", e4.Japan = "JP", e4.Jersey = "JE", e4.Jordan = "JO", e4.Kazakhstan = "KZ", e4.Kenya = "KE", e4.Kiribati = "KI", e4.Kuwait = "KW", e4.Kyrgyzstan = "KG", e4.Laos = "LA", e4.Latvia = "LV", e4.Lebanon = "LB", e4.Lesotho = "LS", e4.Liberia = "LR", e4.Libya = "LY", e4.Liechtenstein = "LI", e4.Lithuania = "LT", e4.Luxembourg = "LU", e4.Macau = "MO", e4.Madagascar = "MG", e4.Malawi = "MW", e4.Malaysia = "MY", e4.Maldives = "MV", e4.Mali = "ML", e4.Malta = "MT", e4.MarshallIslands = "MH", e4.Martinique = "MQ", e4.Mauritania = "MR", e4.Mauritius = "MU", e4.Mayotte = "YT", e4.Mexico = "MX", e4.MicronesiaFederatedStatesOf = "FM", e4.Moldova = "MD", e4.Monaco = "MC", e4.Mongolia = "MN", e4.Montenegro = "ME", e4.Montserrat = "MS", e4.Morocco = "MA", e4.Mozambique = "MZ", e4.Myanmar = "MM", e4.Namibia = "NA", e4.Nauru = "NR", e4.Nepal = "NP", e4.Netherlands = "NL", e4.NetherlandsAntilles = "AN", e4.NewCaledonia = "NC", e4.NewZealand = "NZ", e4.NorthKorea = "KP", e4.Nicaragua = "NI", e4.Niger = "NE", e4.Nigeria = "NG", e4.Niue = "NU", e4.NorfolkIsland = "NF", e4.NorthMacedonia = "MK", e4.NorthernMarianaIslands = "MP", e4.Norway = "NO", e4.Oman = "OM", e4.Pakistan = "PK", e4.Palau = "PW", e4.PalestinianTerritoryOccupied = "PS", e4.Panama = "PA", e4.PapuaNewGuinea = "PG", e4.Paraguay = "PY", e4.Peru = "PE", e4.Philippines = "PH", e4.Pitcairn = "PN", e4.Poland = "PL", e4.Portugal = "PT", e4.PuertoRico = "PR", e4.Qatar = "QA", e4.Reunion = "RE", e4.Romania = "RO", e4.RussianFederation = "RU", e4.Rwanda = "RW", e4.SaintBarthelemy = "BL", e4.SaintHelena = "SH", e4.SaintKittsAndNevis = "KN", e4.SaintLucia = "LC", e4.SaintMartin = "MF", e4.SaintPierreAndMiquelon = "PM", e4.SaintVincentAndTheGrenadines = "VC", e4.Samoa = "WS", e4.SanMarino = "SM", e4.SaoTomeAndPrincipe = "ST", e4.SaudiArabia = "SA", e4.Senegal = "SN", e4.Serbia = "RS", e4.SerbiaAndMontenegro = "CS", e4.Seychelles = "SC", e4.SierraLeone = "SL", e4.Singapore = "SG", e4.Slovakia = "SK", e4.Slovenia = "SI", e4.SolomonIslands = "SB", e4.Somalia = "SO", e4.SouthAfrica = "ZA", e4.SouthGeorgiaAndTheSouthSandwichIslands = "GS", e4.SouthKorea = "KR", e4.Spain = "ES", e4.SriLanka = "LK", e4.Sudan = "SD", e4.Suriname = "SR", e4.SvalbardAndJanMayen = "SJ", e4.Swaziland = "SZ", e4.Sweden = "SE", e4.Switzerland = "CH", e4.Syria = "SY", e4.Taiwan = "TW", e4.Tajikistan = "TJ", e4.Tanzania = "TZ", e4.Thailand = "TH", e4.TimorLeste = "TL", e4.Togo = "TG", e4.Tokelau = "TK", e4.Tonga = "TO", e4.TrinidadAndTobago = "TT", e4.Tunisia = "TN", e4.Turkey = "TR", e4.Turkmenistan = "TM", e4.TurksAndCaicosIslands = "TC", e4.Tuvalu = "TV", e4.Uganda = "UG", e4.Ukraine = "UA", e4.UnitedArabEmirates = "AE", e4.UnitedKingdom = "GB", e4.UnitedStates = "US", e4.UnitedStatesMinorOutlyingIslands = "UM", e4.Uruguay = "UY", e4.Uzbekistan = "UZ", e4.Vanuatu = "VU", e4.Venezuela = "VE", e4.Vietnam = "VN", e4.VirginIslandsBritish = "VG", e4.VirginIslandsUS = "VI", e4.WallisAndFutuna = "WF", e4.WesternSahara = "EH", e4.Yemen = "YE", e4.Zambia = "ZM", e4.Zimbabwe = "ZW", e4))($i || {});
var Xi = ((e4) => (e4.AfghanistanAfghani = "AFN", e4.AlbaniaLek = "ALL", e4.ArmeniaDram = "AMD", e4.AlgeriaDinar = "DZD", e4.AmericanSamoaTala = "WST", e4.AngolaKwanza = "AOA", e4.ArgentinaPeso = "ARS", e4.AustraliaDollar = "AUD", e4.ArubaFlorin = "AWG", e4.AzerbaijanNewManat = "AZN", e4.BosniaAndHerzegovinaConvertibleMark = "BAM", e4.BahrainDinar = "BHD", e4.BarbadosDollar = "BBD", e4.BangladeshTaka = "BDT", e4.BelgiumFranc = "BGN", e4.BermudaDollar = "BMD", e4.BruneiDollar = "BND", e4.BoliviaBoliviano = "BOB", e4.BrazilReal = "BRL", e4.BahamasDollar = "BSD", e4.BhutanNgultrum = "BTN", e4.BotswanaPula = "BWP", e4.BelarusRuble = "BYN", e4.BelizeDollar = "BZD", e4.BulgariaLev = "BGN", e4.BurundiFranc = "BIF", e4.BritishPound = "GBP", e4.CanadaDollar = "CAD", e4.CambodiaRiel = "KHR", e4.ComorosFranc = "KMF", e4.CaymanIslandsDollar = "KYD", e4.ChilePeso = "CLP", e4.ChinaYuan = "CNY", e4.ColombiaPeso = "COP", e4.CostaRicaColon = "CRC", e4.CroatiaKuna = "HRK", e4.CubaConvertiblePeso = "CUC", e4.CubaPeso = "CUP", e4.CapeVerdeEscudo = "CVE", e4.CyprusPound = "CYP", e4.CzechRepublicKoruna = "CZK", e4.DjiboutiFranc = "DJF", e4.DenmarkKrone = "DKK", e4.DominicaDollar = "XCD", e4.DominicanRepublicPeso = "DOP", e4.EastCaribbeanDollar = "XCD", e4.EgyptPound = "EGP", e4.ElSalvadorColon = "SVC", e4.EquatorialGuineaEkwele = "GQE", e4.EritreaNakfa = "ERN", e4.EstoniaKroon = "EEK", e4.EthiopiaBirr = "ETB", e4.Euro = "EUR", e4.FijiDollar = "FJD", e4.FalklandIslandsPound = "FKP", e4.GambiaDalasi = "GMD", e4.GabonFranc = "GMD", e4.GeorgiaLari = "GEL", e4.GhanaCedi = "GHS", e4.GibraltarPound = "GIP", e4.GuatemalaQuetzal = "GTQ", e4.GuernseyPound = "GGP", e4.GuineaBissauPeso = "GWP", e4.GuyanaDollar = "GYD", e4.HongKongDollar = "HKD", e4.HondurasLempira = "HNL", e4.HaitiGourde = "HTG", e4.HungaryForint = "HUF", e4.IndonesiaRupiah = "IDR", e4.IsleOfManPound = "IMP", e4.IsraelNewShekel = "ILS", e4.IndiaRupee = "INR", e4.IraqDinar = "IQD", e4.IranRial = "IRR", e4.IcelandKrona = "ISK", e4.JamaicaDollar = "JMD", e4.JapanYen = "JPY", e4.JerseyPound = "JEP", e4.JordanDinar = "JOD", e4.KazakhstanTenge = "KZT", e4.KenyaShilling = "KES", e4.KyrgyzstanSom = "KGS", e4.NorthKoreaWon = "KPW", e4.SouthKoreaWon = "KRW", e4.KuwaitDinar = "KWD", e4.LaosKip = "LAK", e4.LebanonPound = "LBP", e4.LiberiaDollar = "LRD", e4.LesothoLoti = "LSL", e4.LibyanDinar = "LYD", e4.LithuaniaLitas = "LTL", e4.LatviaLats = "LVL", e4.LibyaDinar = "LYD", e4.MacauPataca = "MOP", e4.MaldivesRufiyaa = "MVR", e4.MalawiKwacha = "MWK", e4.MaltaLira = "MTL", e4.MauritiusRupee = "MUR", e4.MongoliaTughrik = "MNT", e4.MoroccoDirham = "MAD", e4.MoldovaLeu = "MDL", e4.MozambiqueMetical = "MZN", e4.MadagascarAriary = "MGA", e4.MacedoniaDenar = "MKD", e4.MexicoPeso = "MXN", e4.MalaysiaRinggit = "MYR", e4.MyanmarKyat = "MMK", e4.MicronesiaFederatedStatesDollar = "USD", e4.NicaraguaCordoba = "NIO", e4.NamibiaDollar = "NAD", e4.NetherlandsAntillesGuilder = "ANG", e4.NewCaledoniaFranc = "XPF", e4.NigeriaNaira = "NGN", e4.NicaraguaCordobaOro = "NIO", e4.NigerCFAFranc = "XOF", e4.NorwayKrone = "NOK", e4.NepalRupee = "NPR", e4.NewZealandDollar = "NZD", e4.OmanRial = "OMR", e4.PanamaBalboa = "PAB", e4.PeruNuevoSol = "PEN", e4.PapuaNewGuineaKina = "PGK", e4.PhilippinesPeso = "PHP", e4.PakistanRupee = "PKR", e4.PeruNuevo = "PEN", e4.PolandZloty = "PLN", e4.ParaguayGuarani = "PYG", e4.QatarRial = "QAR", e4.RomaniaNewLeu = "RON", e4.SerbiaDinar = "RSD", e4.SriLankaRupee = "LKR", e4.RussiaRuble = "RUB", e4.RwandaFranc = "RWF", e4.SaudiArabiaRiyal = "SAR", e4.SlovakiaKoruna = "SKK", e4.SloveniaTolar = "SIT", e4.SolomonIslandsDollar = "SBD", e4.SeychellesRupee = "SCR", e4.SudanPound = "SDG", e4.SwedenKrona = "SEK", e4.SingaporeDollar = "SGD", e4.SaintHelenaPound = "SHP", e4.SierraLeoneLeone = "SLL", e4.SomaliaShilling = "SOS", e4.SurinameDollar = "SRD", e4.SintMaartenPound = "SXD", e4.SyriaPound = "SYP", e4.SwazilandLilangeni = "SZL", e4.SwitzerlandFranc = "CHF", e4.ThailandBaht = "THB", e4.TajikistanSomoni = "TJS", e4.TurkmenistanManat = "TMT", e4.TunisiaDinar = "TND", e4.TongaPaanga = "TOP", e4.TurkeyLira = "TRY", e4.TrinidadAndTobagoDollar = "TTD", e4.TaiwanNewDollar = "TWD", e4.TanzaniaShilling = "TZS", e4.UnitedArabEmiratesDirham = "AED", e4.UkraineHryvnia = "UAH", e4.UgandaShilling = "UGX", e4.UnitedKingdomPound = "GBP", e4.UnitedStatesDollar = "USD", e4.UruguayPeso = "UYU", e4.UzbekistanSom = "UZS", e4.VenezuelaBolivar = "VEF", e4.VietnamDong = "VND", e4.VanuatuVatu = "VUV", e4.SamoaTala = "WST", e4.YemenRial = "YER", e4.SouthAfricaRand = "ZAR", e4.ZambiaKwacha = "ZMW", e4.ZimbabweDollar = "ZWL", e4))(Xi || {});
var en = ((e4) => (e4.Bitcoin = "BTC", e4.Ethereum = "ETH", e4.Litecoin = "LTC", e4.Ripple = "XRP", e4.Dash = "DASH", e4.Zcash = "ZEC", e4.Dogecoin = "DOGE", e4.Monero = "XMR", e4.BitcoinCash = "BCH", e4.EOS = "EOS", e4.Binance = "BNB", e4.Stellar = "XLM", e4.Cardano = "ADA", e4.IOTA = "IOTA", e4.Tezos = "XTZ", e4.NEO = "NEO", e4.TRON = "TRX", e4.EOSClassic = "EOSC", e4.Ontology = "ONT", e4.VeChain = "VEN", e4.QTUM = "QTUM", e4.Lisk = "LSK", e4.Waves = "WAVES", e4.OmiseGO = "OMG", e4.Zilliqa = "ZIL", e4.BitcoinGold = "BTG", e4.Decred = "DCR", e4.Stratis = "STRAT", e4.Populous = "PPT", e4.Augur = "REP", e4.Golem = "GNT", e4.Siacoin = "SC", e4.BasicAttentionToken = "BAT", e4.ZCoin = "XZC", e4.StratisHedged = "SNT", e4.VeChainHedged = "VEN", e4.PowerLedger = "POWR", e4.WavesHedged = "WAVE", e4.ZilliqaHedged = "ZRX", e4.BitcoinDiamond = "BCD", e4.DigiByte = "DGB", e4.DigiByteHedged = "DGB", e4.Bytecoin = "BCN", e4.BytecoinHedged = "BCN", e4))(en || {});
var an = ((e4) => (e4.Afrikaans = "af", e4.Albanian = "sq", e4.Amharic = "am", e4.Arabic = "ar", e4.Armenian = "hy", e4.Azerbaijani = "az", e4.Bashkir = "ba", e4.Basque = "eu", e4.Belarusian = "be", e4.Bengali = "bn", e4.Berber = "ber", e4.Bhutani = "dz", e4.Bihari = "bh", e4.Bislama = "bi", e4.Bosnian = "bs", e4.Breten = "br", e4.Bulgarian = "bg", e4.Burmese = "my", e4.Cantonese = "yue", e4.Catalan = "ca", e4.Chinese = "zh", e4.Chuvash = "cv", e4.Corsican = "co", e4.Croatian = "hr", e4.Czech = "cs", e4.Danish = "da", e4.Dari = "prs", e4.Divehi = "dv", e4.Dutch = "nl", e4.English = "en", e4.Esperanto = "eo", e4.Estonian = "et", e4.Faroese = "fo", e4.Farsi = "fa", e4.Filipino = "fil", e4.Finnish = "fi", e4.French = "fr", e4.Frisian = "fy", e4.Galician = "gl", e4.Georgian = "ka", e4.German = "de", e4.Greek = "el", e4.Greenlandic = "kl", e4.Gujarati = "gu", e4.Haitian = "ht", e4.Hausa = "ha", e4.Hebrew = "he", e4.Hindi = "hi", e4.Hungarian = "hu", e4.Icelandic = "is", e4.Igbo = "ig", e4.Indonesian = "id", e4.Irish = "ga", e4.Italian = "it", e4.Japanese = "ja", e4.Javanese = "jv", e4.Kannada = "kn", e4.Karelian = "krl", e4.Kazakh = "kk", e4.Khmer = "km", e4.Komi = "kv", e4.Konkani = "kok", e4.Korean = "ko", e4.Kurdish = "ku", e4.Kyrgyz = "ky", e4.Lao = "lo", e4.Latin = "la", e4.Latvian = "lv", e4.Lithuanian = "lt", e4.Luxembourgish = "lb", e4.Ossetian = "os", e4.Macedonian = "mk", e4.Malagasy = "mg", e4.Malay = "ms", e4.Malayalam = "ml", e4.Maltese = "mt", e4.Maori = "mi", e4.Marathi = "mr", e4.Mari = "mhr", e4.Mongolian = "mn", e4.Montenegrin = "me", e4.Nepali = "ne", e4.NorthernSotho = "nso", e4.Norwegian = "no", e4.NorwegianBokmal = "nb", e4.NorwegianNynorsk = "nn", e4.Oriya = "or", e4.Pashto = "ps", e4.Persian = "fa", e4.Polish = "pl", e4.Portuguese = "pt", e4.Punjabi = "pa", e4.Quechua = "qu", e4.Romanian = "ro", e4.Russian = "ru", e4.Sakha = "sah", e4.Sami = "se", e4.Samoan = "sm", e4.Sanskrit = "sa", e4.Scots = "gd", e4.Serbian = "sr", e4.SerbianCyrillic = "sr-Cyrl", e4.Sesotho = "st", e4.Shona = "sn", e4.Sindhi = "sd", e4.Sinhala = "si", e4.Slovak = "sk", e4.Slovenian = "sl", e4.Somali = "so", e4.Spanish = "es", e4.Sudanese = "su", e4.Sutu = "sx", e4.Swahili = "sw", e4.Swedish = "sv", e4.Syriac = "syr", e4.Tagalog = "tl", e4.Tajik = "tg", e4.Tamazight = "tmh", e4.Tamil = "ta", e4.Tatar = "tt", e4.Telugu = "te", e4.Thai = "th", e4.Tibetan = "bo", e4.Tsonga = "ts", e4.Tswana = "tn", e4.Turkish = "tr", e4.Turkmen = "tk", e4.Ukrainian = "uk", e4.Urdu = "ur", e4.Uzbek = "uz", e4.Vietnamese = "vi", e4.Welsh = "cy", e4.Xhosa = "xh", e4.Yiddish = "yi", e4.Yoruba = "yo", e4.Zulu = "zu", e4))(an || {});
var nn = ((e4) => (e4.Afrikaans = "af", e4.AfrikaansSouthAfrica = "af-ZA", e4.Albanian = "sq", e4.AlbanianAlbania = "sq-AL", e4.Amharic = "am", e4.AmharicEthiopia = "am-ET", e4.Arabic = "ar", e4.ArabicAlgeria = "ar-DZ", e4.ArabicBahrain = "ar-BH", e4.ArabicEgypt = "ar-EG", e4.ArabicIraq = "ar-IQ", e4.ArabicJordan = "ar-JO", e4.ArabicKuwait = "ar-KW", e4.ArabicLebanon = "ar-LB", e4.ArabicLibya = "ar-LY", e4.ArabicMorocco = "ar-MA", e4.ArabicOman = "ar-OM", e4.ArabicQatar = "ar-QA", e4.ArabicSaudiArabia = "ar-SA", e4.ArabicSyria = "ar-SY", e4.ArabicTunisia = "ar-TN", e4.ArabicUnitedArabEmirates = "ar-AE", e4.ArabicYemen = "ar-YE", e4.Armenian = "hy", e4.ArmenianArmenia = "hy-AM", e4.Azerbaijani = "az", e4.AzerbaijaniAzerbaijan = "az-AZ", e4.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", e4.Bashkir = "ba", e4.Basque = "eu", e4.BasqueSpain = "eu-ES", e4.Belarusian = "be", e4.BelarusianBelarus = "be-BY", e4.Bengali = "bn", e4.BengaliBangladesh = "bn-BD", e4.BengaliIndia = "bn-IN", e4.Berber = "ber", e4.Bhutani = "dz", e4.BhutaniBhutan = "dz-BT", e4.Bosnian = "bs", e4.BosnianBosniaAndHerzegovina = "bs-BA", e4.Breton = "br", e4.Bulgarian = "bg", e4.BulgarianBosniaAndHerzegovina = "bg-BG", e4.BulgarianBulgaria = "bg-BG", e4.Burmese = "my", e4.BurmeseMyanmar = "my-MM", e4.Cantonese = "yue", e4.CantoneseHongKong = "yue-HK", e4.Catalan = "ca", e4.CatalanSpain = "ca-ES", e4.Chechen = "ce", e4.Cherokee = "chr", e4.Chinese = "zh", e4.ChineseSimplified = "zh-Hans", e4.ChineseSimplifiedChina = "zh-Hans-CN", e4.ChineseSimplifiedHongKong = "zh-Hans-HK", e4.ChineseSimplifiedMacau = "zh-Hans-MO", e4.ChineseSimplifiedSingapore = "zh-Hans-SG", e4.ChineseTraditional = "zh-Hant", e4.ChineseTraditionalHongKong = "zh-Hant-HK", e4.ChineseTraditionalMacau = "zh-Hant-MO", e4.ChineseTraditionalSingapore = "zh-Hant-SG", e4.ChineseTraditionalTaiwan = "zh-Hant-TW", e4.Chuvash = "cv", e4.CorsicanFrance = "co-FR", e4.Croatian = "hr", e4.CroatianBosniaAndHerzegovina = "hr-BA", e4.CroatianCroatia = "hr-HR", e4.Czech = "cs", e4.CzechCzechRepublic = "cs-CZ", e4.Danish = "da", e4.DanishDenmark = "da-DK", e4.Dari = "prs", e4.DariAfghanistan = "prs-AF", e4.Divehi = "dv", e4.DivehiMaldives = "dv-MV", e4.Dutch = "nl", e4.DutchBelgium = "nl-BE", e4.DutchNetherlands = "nl-NL", e4.English = "en", e4.EnglishAustralia = "en-AU", e4.EnglishBelgium = "en-BE", e4.EnglishBelize = "en-BZ", e4.EnglishCanada = "en-CA", e4.EnglishCaribbean = "en-029", e4.EnglishIreland = "en-IE", e4.EnglishJamaica = "en-JM", e4.EnglishNewZealand = "en-NZ", e4.EnglishPhilippines = "en-PH", e4.EnglishSingapore = "en-SG", e4.EnglishSouthAfrica = "en-ZA", e4.EnglishTrinidadAndTobago = "en-TT", e4.EnglishUnitedKingdom = "en-GB", e4.EnglishUnitedStates = "en-US", e4.EnglishZimbabwe = "en-ZW", e4.Esperanto = "eo", e4.Estonian = "et", e4.EstonianEstonia = "et-EE", e4.Faroese = "fo", e4.FaroeseFaroeIslands = "fo-FO", e4.Farsi = "fa", e4.FarsiIran = "fa-IR", e4.Filipino = "fil", e4.FilipinoPhilippines = "fil-PH", e4.Finnish = "fi", e4.FinnishFinland = "fi-FI", e4.French = "fr", e4.FrenchBelgium = "fr-BE", e4.FrenchCanada = "fr-CA", e4.FrenchFrance = "fr-FR", e4.FrenchLuxembourg = "fr-LU", e4.FrenchMonaco = "fr-MC", e4.FrenchReunion = "fr-RE", e4.FrenchSwitzerland = "fr-CH", e4.Frisian = "fy", e4.FrisianNetherlands = "fy-NL", e4.Galician = "gl", e4.GalicianSpain = "gl-ES", e4.Georgian = "ka", e4.GeorgianGeorgia = "ka-GE", e4.German = "de", e4.GermanAustria = "de-AT", e4.GermanBelgium = "de-BE", e4.GermanGermany = "de-DE", e4.GermanLiechtenstein = "de-LI", e4.GermanLuxembourg = "de-LU", e4.GermanSwitzerland = "de-CH", e4.Greenlandic = "kl", e4.GreenlandicGreenland = "kl-GL", e4.Greek = "el", e4.GreekGreece = "el-GR", e4.Gujarati = "gu", e4.GujaratiIndia = "gu-IN", e4.Haitian = "ht", e4.Hausa = "ha", e4.HausaGhana = "ha-GH", e4.HausaNiger = "ha-NE", e4.HausaNigeria = "ha-NG", e4.Hebrew = "he", e4.HebrewIsrael = "he-IL", e4.Hindi = "hi", e4.HindiIndia = "hi-IN", e4.Hungarian = "hu", e4.HungarianHungary = "hu-HU", e4.Icelandic = "is", e4.IcelandicIceland = "is-IS", e4.Igbo = "ig", e4.IgboNigeria = "ig-NG", e4.Indonesian = "id", e4.IndonesianIndonesia = "id-ID", e4.Irish = "ga", e4.IrishIreland = "ga-IE", e4.Italian = "it", e4.ItalianItaly = "it-IT", e4.ItalianSwitzerland = "it-CH", e4.Japanese = "ja", e4.JapaneseJapan = "ja-JP", e4.Javanese = "jv", e4.Kannada = "kn", e4.KannadaIndia = "kn-IN", e4.Karelian = "krl", e4.Kazakh = "kk", e4.KazakhKazakhstan = "kk-KZ", e4.Khmer = "km", e4.KhmerCambodia = "km-KH", e4.KinyarwandaRwanda = "rw-RW", e4.Komi = "kv", e4.Konkani = "kok", e4.KonkaniIndia = "kok-IN", e4.Korean = "ko", e4.KoreanSouthKorea = "ko-KR", e4.Kurdish = "ku", e4.KurdishIraq = "ku-IQ", e4.KurdishTurkey = "ku-TR", e4.Kyrgyz = "ky", e4.KyrgyzKyrgyzstan = "ky-KG", e4.Lao = "lo", e4.LaoLaos = "lo-LA", e4.Latin = "la", e4.Latvian = "lv", e4.LatvianLatvia = "lv-LV", e4.Lithuanian = "lt", e4.LithuanianLithuania = "lt-LT", e4.Luxembourgish = "lb", e4.LuxembourgishBelgium = "lb-LU", e4.LuxembourgishLuxembourg = "lb-LU", e4.Macedonian = "mk", e4.MacedonianNorthMacedonia = "mk-MK", e4.Malagasy = "mg", e4.Malay = "ms", e4.MalayBrunei = "ms-BN", e4.MalayIndia = "ms-IN", e4.MalayMalaysia = "ms-MY", e4.MalaySingapore = "ms-SG", e4.Malayalam = "ml", e4.MalayalamIndia = "ml-IN", e4.Maltese = "mt", e4.MalteseMalta = "mt-MT", e4.Maori = "mi", e4.MaoriNewZealand = "mi-NZ", e4.Marathi = "mr", e4.MarathiIndia = "mr-IN", e4.Mari = "chm", e4.Mongolian = "mn", e4.MongolianMongolia = "mn-MN", e4.Montenegrin = "me", e4.MontenegrinMontenegro = "me-ME", e4.Nepali = "ne", e4.NepaliNepal = "ne-NP", e4.NorthernSotho = "ns", e4.NorthernSothoSouthAfrica = "ns-ZA", e4.Norwegian = "nb", e4.NorwegianBokmalNorway = "nb-NO", e4.NorwegianNynorskNorway = "nn-NO", e4.Oriya = "or", e4.OriyaIndia = "or-IN", e4.Ossetian = "os", e4.Pashto = "ps", e4.PashtoAfghanistan = "ps-AF", e4.Persian = "fa", e4.PersianIran = "fa-IR", e4.Polish = "pl", e4.PolishPoland = "pl-PL", e4.Portuguese = "pt", e4.PortugueseBrazil = "pt-BR", e4.PortuguesePortugal = "pt-PT", e4.Punjabi = "pa", e4.PunjabiIndia = "pa-IN", e4.PunjabiPakistan = "pa-PK", e4.Quechua = "qu", e4.QuechuaBolivia = "qu-BO", e4.QuechuaEcuador = "qu-EC", e4.QuechuaPeru = "qu-PE", e4.Romanian = "ro", e4.RomanianRomania = "ro-RO", e4.Russian = "ru", e4.RussianKazakhstan = "ru-KZ", e4.RussianKyrgyzstan = "ru-KG", e4.RussianRussia = "ru-RU", e4.RussianUkraine = "ru-UA", e4.Sakha = "sah", e4.Sanskrit = "sa", e4.SanskritIndia = "sa-IN", e4.Sami = "se", e4.SamiNorway = "se-NO", e4.SamiSweden = "se-SE", e4.SamiFinland = "se-FI", e4.Samoan = "sm", e4.SamoanSamoa = "sm-WS", e4.Scots = "gd", e4.Serbian = "sr", e4.SerbianBosniaAndHerzegovina = "sr-BA", e4.SerbianSerbiaAndMontenegro = "sr-SP", e4.SerbianCyrillic = "sr-SP-Cyrl", e4.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", e4.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", e4.Sesotho = "st", e4.SesothoSouthAfrica = "st-ZA", e4.Shona = "sn", e4.ShonaZimbabwe = "sn-ZW", e4.Sindhi = "sd", e4.SindhiPakistan = "sd-PK", e4.Sinhala = "si", e4.SinhalaSriLanka = "si-LK", e4.Slovak = "sk", e4.SlovakSlovakia = "sk-SK", e4.Slovenian = "sl", e4.SlovenianSlovenia = "sl-SI", e4.Somali = "so", e4.SomaliSomalia = "so-SO", e4.Spanish = "es", e4.SpanishArgentina = "es-AR", e4.SpanishBolivia = "es-BO", e4.SpanishChile = "es-CL", e4.SpanishColombia = "es-CO", e4.SpanishCostaRica = "es-CR", e4.SpanishCuba = "es-CU", e4.SpanishDominicanRepublic = "es-DO", e4.SpanishEcuador = "es-EC", e4.SpanishEquatorialGuinea = "es-GQ", e4.SpanishElSalvador = "es-SV", e4.SpanishGuatemala = "es-GT", e4.SpanishHonduras = "es-HN", e4.SpanishMexico = "es-MX", e4.SpanishNicaragua = "es-NI", e4.SpanishPanama = "es-PA", e4.SpanishParaguay = "es-PY", e4.SpanishPeru = "es-PE", e4.SpanishPuertoRico = "es-PR", e4.SpanishSpain = "es-ES", e4.SpanishUnitedStates = "es-US", e4.SpanishUruguay = "es-UY", e4.SpanishVenezuela = "es-VE", e4.Sudanese = "su", e4.Sutu = "st", e4.SutuSouthAfrica = "st-ZA", e4.Swahili = "sw", e4.SwahiliKenya = "sw-KE", e4.Swedish = "sv", e4.SwedishFinland = "sv-FI", e4.SwedishSweden = "sv-SE", e4.Syriac = "syr", e4.SyriacSyria = "syr-SY", e4.Tajik = "tg", e4.TajikTajikistan = "tg-TJ", e4.Tagalog = "tl", e4.TagalogPhilippines = "tl-PH", e4.Tamazight = "tmh", e4.Tamil = "ta", e4.TamilIndia = "ta-IN", e4.Tatar = "tt", e4.Telugu = "te", e4.TeluguIndia = "te-IN", e4.Thai = "th", e4.ThaiThailand = "th-TH", e4.Tibetan = "bo", e4.TibetanBhutan = "bo-BT", e4.TibetanChina = "bo-CN", e4.TibetanIndia = "bo-IN", e4.Tsonga = "ts", e4.Tswana = "tn", e4.TswanaSouthAfrica = "tn-ZA", e4.Turkish = "tr", e4.TurkishTurkey = "tr-TR", e4.Turkmen = "tk", e4.Ukrainian = "uk", e4.UkrainianUkraine = "uk-UA", e4.Urdu = "ur", e4.UrduAfghanistan = "ur-AF", e4.UrduIndia = "ur-IN", e4.UrduPakistan = "ur-PK", e4.Uzbek = "uz", e4.UzbekCyrillic = "uz-Cyrl-UZ", e4.UzbekLatin = "uz-Latn-UZ", e4.UzbekUzbekistan = "uz-UZ", e4.Vietnamese = "vi", e4.VietnameseVietnam = "vi-VN", e4.Welsh = "cy", e4.WelshUnitedKingdom = "cy-GB", e4.Xhosa = "xh", e4.XhosaSouthAfrica = "xh-ZA", e4.Yiddish = "yi", e4.Yoruba = "yo", e4.YorubaNigeria = "yo-NG", e4.ZhuyinMandarinChina = "yue-Hant-CN", e4.Zulu = "zu", e4.ZuluSouthAfrica = "zu-ZA", e4))(nn || {});
var sn = ((e4) => (e4.AfricaAbidjan = "Africa/Abidjan", e4.AfricaAccra = "Africa/Accra", e4.AfricaAddisAbaba = "Africa/Addis_Ababa", e4.AfricaAlgiers = "Africa/Algiers", e4.AfricaAsmara = "Africa/Asmara", e4.AfricaBamako = "Africa/Bamako", e4.AfricaBangui = "Africa/Bangui", e4.AfricaBanjul = "Africa/Banjul", e4.AfricaBissau = "Africa/Bissau", e4.AfricaBlantyre = "Africa/Blantyre", e4.AfricaBrazzaville = "Africa/Brazzaville", e4.AfricaBujumbura = "Africa/Bujumbura", e4.AfricaCairo = "Africa/Cairo", e4.AfricaCasablanca = "Africa/Casablanca", e4.AfricaCeuta = "Africa/Ceuta", e4.AfricaConakry = "Africa/Conakry", e4.AfricaDakar = "Africa/Dakar", e4.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", e4.AfricaDjibouti = "Africa/Djibouti", e4.AfricaDouala = "Africa/Douala", e4.AfricaElAaiun = "Africa/El_Aaiun", e4.AfricaFreetown = "Africa/Freetown", e4.AfricaGaborone = "Africa/Gaborone", e4.AfricaHarare = "Africa/Harare", e4.AfricaJohannesburg = "Africa/Johannesburg", e4.AfricaJuba = "Africa/Juba", e4.AfricaKampala = "Africa/Kampala", e4.AfricaKhartoum = "Africa/Khartoum", e4.AfricaKigali = "Africa/Kigali", e4.AfricaKinshasa = "Africa/Kinshasa", e4.AfricaLagos = "Africa/Lagos", e4.AfricaLibreville = "Africa/Libreville", e4.AfricaLome = "Africa/Lome", e4.AfricaLuanda = "Africa/Luanda", e4.AfricaLubumbashi = "Africa/Lubumbashi", e4.AfricaLusaka = "Africa/Lusaka", e4.AfricaMalabo = "Africa/Malabo", e4.AfricaMaputo = "Africa/Maputo", e4.AfricaMaseru = "Africa/Maseru", e4.AfricaMbabane = "Africa/Mbabane", e4.AfricaMogadishu = "Africa/Mogadishu", e4.AfricaMonrovia = "Africa/Monrovia", e4.AfricaNairobi = "Africa/Nairobi", e4.AfricaNdjamena = "Africa/Ndjamena", e4.AfricaNiamey = "Africa/Niamey", e4.AfricaNouakchott = "Africa/Nouakchott", e4.AfricaOuagadougou = "Africa/Ouagadougou", e4.AfricaPortoNovo = "Africa/Porto-Novo", e4.AfricaSaoTome = "Africa/Sao_Tome", e4.AfricaTripoli = "Africa/Tripoli", e4.AfricaTunis = "Africa/Tunis", e4.AfricaWindhoek = "Africa/Windhoek", e4.AmericaAdak = "America/Adak", e4.AmericaAnchorage = "America/Anchorage", e4.AmericaAnguilla = "America/Anguilla", e4.AmericaAntigua = "America/Antigua", e4.AmericaAraguaina = "America/Araguaina", e4.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", e4.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", e4.AmericaArgentinaCordoba = "America/Argentina/Cordoba", e4.AmericaArgentinaJujuy = "America/Argentina/Jujuy", e4.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", e4.AmericaArgentinaMendoza = "America/Argentina/Mendoza", e4.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", e4.AmericaArgentinaSalta = "America/Argentina/Salta", e4.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", e4.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", e4.AmericaArgentinaTucuman = "America/Argentina/Tucuman", e4.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", e4.AmericaAruba = "America/Aruba", e4.AmericaAsuncion = "America/Asuncion", e4.AmericaAtikokan = "America/Atikokan", e4.AmericaAtka = "America/Atka", e4.AmericaBahia = "America/Bahia", e4.AmericaBahiaBanderas = "America/Bahia_Banderas", e4.AmericaBarbados = "America/Barbados", e4.AmericaBelem = "America/Belem", e4.AmericaBelize = "America/Belize", e4.AmericaBlancSablon = "America/Blanc-Sablon", e4.AmericaBoaVista = "America/Boa_Vista", e4.AmericaBogota = "America/Bogota", e4.AmericaBoise = "America/Boise", e4.AmericaCambridgeBay = "America/Cambridge_Bay", e4.AmericaCampoGrande = "America/Campo_Grande", e4.AmericaCancun = "America/Cancun", e4.AmericaCaracas = "America/Caracas", e4.AmericaCayenne = "America/Cayenne", e4.AmericaCayman = "America/Cayman", e4.AmericaChicago = "America/Chicago", e4.AmericaChihuahua = "America/Chihuahua", e4.AmericaCoralHarbour = "America/Coral_Harbour", e4.AmericaCordoba = "America/Cordoba", e4.AmericaCostaRica = "America/Costa_Rica", e4.AmericaCreston = "America/Creston", e4.AmericaCuiaba = "America/Cuiaba", e4.AmericaCuracao = "America/Curacao", e4.AmericaDanmarkshavn = "America/Danmarkshavn", e4.AmericaDawson = "America/Dawson", e4.AmericaDawsonCreek = "America/Dawson_Creek", e4.AmericaDenver = "America/Denver", e4.AmericaDetroit = "America/Detroit", e4.AmericaDominica = "America/Dominica", e4.AmericaEdmonton = "America/Edmonton", e4.AmericaEirunepe = "America/Eirunepe", e4.AmericaElSalvador = "America/El_Salvador", e4.AmericaFortaleza = "America/Fortaleza", e4.AmericaGlaceBay = "America/Glace_Bay", e4.AmericaGodthab = "America/Godthab", e4.AmericaGooseBay = "America/Goose_Bay", e4.AmericaGrandTurk = "America/Grand_Turk", e4.AmericaGrenada = "America/Grenada", e4.AmericaGuadeloupe = "America/Guadeloupe", e4.AmericaGuatemala = "America/Guatemala", e4.AmericaGuayaquil = "America/Guayaquil", e4.AmericaGuyana = "America/Guyana", e4.AmericaHalifax = "America/Halifax", e4.AmericaHavana = "America/Havana", e4.AmericaHermosillo = "America/Hermosillo", e4.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", e4.AmericaIndianaKnox = "America/Indiana/Knox", e4.AmericaIndianaMarengo = "America/Indiana/Marengo", e4.AmericaIndianaPetersburg = "America/Indiana/Petersburg", e4.AmericaIndianaTellCity = "America/Indiana/Tell_City", e4.AmericaIndianaVevay = "America/Indiana/Vevay", e4.AmericaIndianaVincennes = "America/Indiana/Vincennes", e4.AmericaIndianaWinamac = "America/Indiana/Winamac", e4.AmericaInuvik = "America/Inuvik", e4.AmericaIqaluit = "America/Iqaluit", e4.AmericaJamaica = "America/Jamaica", e4.AmericaJuneau = "America/Juneau", e4.AmericaKentuckyLouisville = "America/Kentucky/Louisville", e4.AmericaKentuckyMonticello = "America/Kentucky/Monticello", e4.AmericaKralendijk = "America/Kralendijk", e4.AmericaLaPaz = "America/La_Paz", e4.AmericaLima = "America/Lima", e4.AmericaLosAngeles = "America/Los_Angeles", e4.AmericaLouisville = "America/Louisville", e4.AmericaLowerPrinces = "America/Lower_Princes", e4.AmericaMaceio = "America/Maceio", e4.AmericaManagua = "America/Managua", e4.AmericaManaus = "America/Manaus", e4.AmericaMarigot = "America/Marigot", e4.AmericaMartinique = "America/Martinique", e4.AmericaMatamoros = "America/Matamoros", e4.AmericaMazatlan = "America/Mazatlan", e4.AmericaMenominee = "America/Menominee", e4.AmericaMerida = "America/Merida", e4.AmericaMetlakatla = "America/Metlakatla", e4.AmericaMexicoCity = "America/Mexico_City", e4.AmericaMiquelon = "America/Miquelon", e4.AmericaMoncton = "America/Moncton", e4.AmericaMonterrey = "America/Monterrey", e4.AmericaMontevideo = "America/Montevideo", e4.AmericaMontserrat = "America/Montserrat", e4.AmericaMontreal = "America/Montreal", e4.AmericaNassau = "America/Nassau", e4.AmericaNewYork = "America/New_York", e4.AmericaNipigon = "America/Nipigon", e4.AmericaNome = "America/Nome", e4.AmericaNoronha = "America/Noronha", e4.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", e4.AmericaNorthDakotaCenter = "America/North_Dakota/Center", e4.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", e4.AmericaOjinaga = "America/Ojinaga", e4.AmericaPanama = "America/Panama", e4.AmericaPangnirtung = "America/Pangnirtung", e4.AmericaParamaribo = "America/Paramaribo", e4.AmericaPhoenix = "America/Phoenix", e4.AmericaPortAuPrince = "America/Port-au-Prince", e4.AmericaPortOfSpain = "America/Port_of_Spain", e4.AmericaPortoVelho = "America/Porto_Velho", e4.AmericaPuertoRico = "America/Puerto_Rico", e4.AmericaRainyRiver = "America/Rainy_River", e4.AmericaRankinInlet = "America/Rankin_Inlet", e4.AmericaRecife = "America/Recife", e4.AmericaRegina = "America/Regina", e4.AmericaResolute = "America/Resolute", e4.AmericaRioBranco = "America/Rio_Branco", e4.AmericaSantaIsabel = "America/Santa_Isabel", e4.AmericaSantarem = "America/Santarem", e4.AmericaSantiago = "America/Santiago", e4.AmericaSantoDomingo = "America/Santo_Domingo", e4.AmericaSaoPaulo = "America/Sao_Paulo", e4.AmericaScoresbysund = "America/Scoresbysund", e4.AmericaShiprock = "America/Shiprock", e4.AmericaSitka = "America/Sitka", e4.AmericaStBarthelemy = "America/St_Barthelemy", e4.AmericaStJohns = "America/St_Johns", e4.AmericaStKitts = "America/St_Kitts", e4.AmericaStLucia = "America/St_Lucia", e4.AmericaStThomas = "America/St_Thomas", e4.AmericaStVincent = "America/St_Vincent", e4.AmericaSwiftCurrent = "America/Swift_Current", e4.AmericaTegucigalpa = "America/Tegucigalpa", e4.AmericaThule = "America/Thule", e4.AmericaThunderBay = "America/Thunder_Bay", e4.AmericaTijuana = "America/Tijuana", e4.AmericaToronto = "America/Toronto", e4.AmericaTortola = "America/Tortola", e4.AmericaVancouver = "America/Vancouver", e4.AmericaWhitehorse = "America/Whitehorse", e4.AmericaWinnipeg = "America/Winnipeg", e4.AmericaYakutat = "America/Yakutat", e4.AmericaYellowknife = "America/Yellowknife", e4.AntarcticaCasey = "Antarctica/Casey", e4.AntarcticaDavis = "Antarctica/Davis", e4.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", e4.AntarcticaMacquarie = "Antarctica/Macquarie", e4.AntarcticaMawson = "Antarctica/Mawson", e4.AntarcticaMcMurdo = "Antarctica/McMurdo", e4.AntarcticaPalmer = "Antarctica/Palmer", e4.AntarcticaRothera = "Antarctica/Rothera", e4.AntarcticaSyowa = "Antarctica/Syowa", e4.AntarcticaTroll = "Antarctica/Troll", e4.AntarcticaVostok = "Antarctica/Vostok", e4.ArcticLongyearbyen = "Arctic/Longyearbyen", e4.AsiaAden = "Asia/Aden", e4.AsiaAlmaty = "Asia/Almaty", e4.AsiaAmman = "Asia/Amman", e4.AsiaAnadyr = "Asia/Anadyr", e4.AsiaAqtau = "Asia/Aqtau", e4.AsiaAqtobe = "Asia/Aqtobe", e4.AsiaAshgabat = "Asia/Ashgabat", e4.AsiaBaghdad = "Asia/Baghdad", e4.AsiaBahrain = "Asia/Bahrain", e4.AsiaBaku = "Asia/Baku", e4.AsiaBangkok = "Asia/Bangkok", e4.AsiaBarnaul = "Asia/Barnaul", e4.AsiaBeirut = "Asia/Beirut", e4.AsiaBishkek = "Asia/Bishkek", e4.AsiaBrunei = "Asia/Brunei", e4.AsiaChita = "Asia/Chita", e4.AsiaChoibalsan = "Asia/Choibalsan", e4.AsiaColombo = "Asia/Colombo", e4.AsiaDamascus = "Asia/Damascus", e4.AsiaDhaka = "Asia/Dhaka", e4.AsiaDili = "Asia/Dili", e4.AsiaDubai = "Asia/Dubai", e4.AsiaDushanbe = "Asia/Dushanbe", e4.AsiaFamagusta = "Asia/Famagusta", e4.AsiaGaza = "Asia/Gaza", e4.AsiaHebron = "Asia/Hebron", e4.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", e4.AsiaHongKong = "Asia/Hong_Kong", e4.AsiaHovd = "Asia/Hovd", e4.AsiaIrkutsk = "Asia/Irkutsk", e4.AsiaJakarta = "Asia/Jakarta", e4.AsiaJayapura = "Asia/Jayapura", e4.AsiaJerusalem = "Asia/Jerusalem", e4.AsiaKabul = "Asia/Kabul", e4.AsiaKamchatka = "Asia/Kamchatka", e4.AsiaKarachi = "Asia/Karachi", e4.AsiaKathmandu = "Asia/Kathmandu", e4.AsiaKhandyga = "Asia/Khandyga", e4.AsiaKolkata = "Asia/Kolkata", e4.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", e4.AsiaKualaLumpur = "Asia/Kuala_Lumpur", e4.AsiaKuching = "Asia/Kuching", e4.AsiaKuwait = "Asia/Kuwait", e4.AsiaMacau = "Asia/Macau", e4.AsiaMagadan = "Asia/Magadan", e4.AsiaMakassar = "Asia/Makassar", e4.AsiaManila = "Asia/Manila", e4.AsiaMuscat = "Asia/Muscat", e4.AsiaNicosia = "Asia/Nicosia", e4.AsiaNovokuznetsk = "Asia/Novokuznetsk", e4.AsiaNovosibirsk = "Asia/Novosibirsk", e4.AsiaOmsk = "Asia/Omsk", e4.AsiaOral = "Asia/Oral", e4.AsiaPhnomPenh = "Asia/Phnom_Penh", e4.AsiaPontianak = "Asia/Pontianak", e4.AsiaPyongyang = "Asia/Pyongyang", e4.AsiaQatar = "Asia/Qatar", e4.AsiaQyzylorda = "Asia/Qyzylorda", e4.AsiaRangoon = "Asia/Rangoon", e4.AsiaRiyadh = "Asia/Riyadh", e4.AsiaSakhalin = "Asia/Sakhalin", e4.AsiaSamarkand = "Asia/Samarkand", e4.AsiaSeoul = "Asia/Seoul", e4.AsiaShanghai = "Asia/Shanghai", e4.AsiaSingapore = "Asia/Singapore", e4.AsiaSrednekolymsk = "Asia/Srednekolymsk", e4.AsiaTaipei = "Asia/Taipei", e4.AsiaTashkent = "Asia/Tashkent", e4.AsiaTbilisi = "Asia/Tbilisi", e4.AsiaTehran = "Asia/Tehran", e4.AsiaThimphu = "Asia/Thimphu", e4.AsiaTokyo = "Asia/Tokyo", e4.AsiaTomsk = "Asia/Tomsk", e4.AsiaUlaanbaatar = "Asia/Ulaanbaatar", e4.AsiaUrumqi = "Asia/Urumqi", e4.AsiaUstNera = "Asia/Ust-Nera", e4.AsiaVientiane = "Asia/Vientiane", e4.AsiaVladivostok = "Asia/Vladivostok", e4.AsiaYakutsk = "Asia/Yakutsk", e4.AsiaYekaterinburg = "Asia/Yekaterinburg", e4.AsiaYerevan = "Asia/Yerevan", e4.AtlanticAzores = "Atlantic/Azores", e4.AtlanticBermuda = "Atlantic/Bermuda", e4.AtlanticCanary = "Atlantic/Canary", e4.AtlanticCapeVerde = "Atlantic/Cape_Verde", e4.AtlanticFaroe = "Atlantic/Faroe", e4.AtlanticMadeira = "Atlantic/Madeira", e4.AtlanticReykjavik = "Atlantic/Reykjavik", e4.AtlanticSouthGeorgia = "Atlantic/South_Georgia", e4.AtlanticStHelena = "Atlantic/St_Helena", e4.AtlanticStanley = "Atlantic/Stanley", e4.AustraliaAdelaide = "Australia/Adelaide", e4.AustraliaBrisbane = "Australia/Brisbane", e4.AustraliaBrokenHill = "Australia/Broken_Hill", e4.AustraliaCanberra = "Australia/Canberra", e4.AustraliaCurrie = "Australia/Currie", e4.AustraliaDarwin = "Australia/Darwin", e4.AustraliaEucla = "Australia/Eucla", e4.AustraliaHobart = "Australia/Hobart", e4.AustraliaLindeman = "Australia/Lindeman", e4.AustraliaLordHowe = "Australia/Lord_Howe", e4.AustraliaMelbourne = "Australia/Melbourne", e4.AustraliaPerth = "Australia/Perth", e4.AustraliaSydney = "Australia/Sydney", e4.EuropeAmsterdam = "Europe/Amsterdam", e4.EuropeAndorra = "Europe/Andorra", e4.EuropeAthens = "Europe/Athens", e4.EuropeBelgrade = "Europe/Belgrade", e4.EuropeBerlin = "Europe/Berlin", e4.EuropeBratislava = "Europe/Bratislava", e4.EuropeBrussels = "Europe/Brussels", e4.EuropeBucharest = "Europe/Bucharest", e4.EuropeBudapest = "Europe/Budapest", e4.EuropeBusingen = "Europe/Busingen", e4.EuropeChisinau = "Europe/Chisinau", e4.EuropeCopenhagen = "Europe/Copenhagen", e4.EuropeDublin = "Europe/Dublin", e4.EuropeGibraltar = "Europe/Gibraltar", e4.EuropeGuernsey = "Europe/Guernsey", e4.EuropeHelsinki = "Europe/Helsinki", e4.EuropeIsleOfMan = "Europe/Isle_of_Man", e4.EuropeIstanbul = "Europe/Istanbul", e4.EuropeJersey = "Europe/Jersey", e4.EuropeKaliningrad = "Europe/Kaliningrad", e4.EuropeKiev = "Europe/Kiev", e4.EuropeKirov = "Europe/Kirov", e4.EuropeLisbon = "Europe/Lisbon", e4.EuropeLjubljana = "Europe/Ljubljana", e4.EuropeLondon = "Europe/London", e4.EuropeLuxembourg = "Europe/Luxembourg", e4.EuropeMadrid = "Europe/Madrid", e4.EuropeMalta = "Europe/Malta", e4.EuropeMariehamn = "Europe/Mariehamn", e4.EuropeMinsk = "Europe/Minsk", e4.EuropeMonaco = "Europe/Monaco", e4.EuropeMoscow = "Europe/Moscow", e4.EuropeOslo = "Europe/Oslo", e4.EuropeParis = "Europe/Paris", e4.EuropePodgorica = "Europe/Podgorica", e4.EuropePrague = "Europe/Prague", e4.EuropeRiga = "Europe/Riga", e4.EuropeRome = "Europe/Rome", e4.EuropeSamara = "Europe/Samara", e4.EuropeSanMarino = "Europe/San_Marino", e4.EuropeSarajevo = "Europe/Sarajevo", e4.EuropeSimferopol = "Europe/Simferopol", e4.EuropeSkopje = "Europe/Skopje", e4.EuropeSofia = "Europe/Sofia", e4.EuropeStockholm = "Europe/Stockholm", e4.EuropeTallinn = "Europe/Tallinn", e4.EuropeTirane = "Europe/Tirane", e4.EuropeUzhgorod = "Europe/Uzhgorod", e4.EuropeVaduz = "Europe/Vaduz", e4.EuropeVatican = "Europe/Vatican", e4.EuropeVienna = "Europe/Vienna", e4.EuropeVilnius = "Europe/Vilnius", e4.EuropeVolgograd = "Europe/Volgograd", e4.EuropeWarsaw = "Europe/Warsaw", e4.EuropeZagreb = "Europe/Zagreb", e4.EuropeZaporozhye = "Europe/Zaporozhye", e4.EuropeZurich = "Europe/Zurich", e4.GMT = "GMT", e4.IndianAntananarivo = "Indian/Antananarivo", e4.IndianChagos = "Indian/Chagos", e4.IndianChristmas = "Indian/Christmas", e4.IndianCocos = "Indian/Cocos", e4.IndianComoro = "Indian/Comoro", e4.IndianKerguelen = "Indian/Kerguelen", e4.IndianMahe = "Indian/Mahe", e4.IndianMaldives = "Indian/Maldives", e4.IndianMauritius = "Indian/Mauritius", e4.IndianMayotte = "Indian/Mayotte", e4.IndianReunion = "Indian/Reunion", e4.PacificApia = "Pacific/Apia", e4.PacificAuckland = "Pacific/Auckland", e4.PacificBougainville = "Pacific/Bougainville", e4.PacificChatham = "Pacific/Chatham", e4.PacificChuuk = "Pacific/Chuuk", e4.PacificEaster = "Pacific/Easter", e4.PacificEfate = "Pacific/Efate", e4.PacificEnderbury = "Pacific/Enderbury", e4.PacificFakaofo = "Pacific/Fakaofo", e4.PacificFiji = "Pacific/Fiji", e4.PacificFunafuti = "Pacific/Funafuti", e4.PacificGalapagos = "Pacific/Galapagos", e4.PacificGambier = "Pacific/Gambier", e4.PacificGuadalcanal = "Pacific/Guadalcanal", e4.PacificGuam = "Pacific/Guam", e4.PacificHonolulu = "Pacific/Honolulu", e4.PacificJohnston = "Pacific/Johnston", e4.PacificKiritimati = "Pacific/Kiritimati", e4.PacificKosrae = "Pacific/Kosrae", e4.PacificKwajalein = "Pacific/Kwajalein", e4.PacificMajuro = "Pacific/Majuro", e4.PacificMarquesas = "Pacific/Marquesas", e4.PacificMidway = "Pacific/Midway", e4.PacificNauru = "Pacific/Nauru", e4.PacificNiue = "Pacific/Niue", e4.PacificNorfolk = "Pacific/Norfolk", e4.PacificNoumea = "Pacific/Noumea", e4.PacificPagoPago = "Pacific/Pago_Pago", e4.PacificPalau = "Pacific/Palau", e4.PacificPitcairn = "Pacific/Pitcairn", e4.PacificPohnpei = "Pacific/Pohnpei", e4.PacificPonape = "Pacific/Ponape", e4.PacificPortMoresby = "Pacific/Port_Moresby", e4.PacificRarotonga = "Pacific/Rarotonga", e4.PacificSaipan = "Pacific/Saipan", e4.PacificSamoa = "Pacific/Samoa", e4.PacificTahiti = "Pacific/Tahiti", e4.PacificTarawa = "Pacific/Tarawa", e4.PacificTongatapu = "Pacific/Tongatapu", e4.PacificTruk = "Pacific/Truk", e4.PacificWake = "Pacific/Wake", e4.PacificWallis = "Pacific/Wallis", e4.PacificYap = "Pacific/Yap", e4))(sn || {});
var tn = ((e4) => (e4.UTC_MINUS_12 = "UTC-12", e4.UTC_MINUS_11_30 = "UTC-11:30", e4.UTC_MINUS_11 = "UTC-11", e4.UTC_MINUS_10_30 = "UTC-10:30", e4.UTC_MINUS_10 = "UTC-10", e4.UTC_MINUS_9_30 = "UTC-9:30", e4.UTC_MINUS_9 = "UTC-09", e4.UTC_MINUS_8_45 = "UTC-8:45", e4.UTC_MINUS_8 = "UTC-08", e4.UTC_MINUS_7 = "UTC-07", e4.UTC_MINUS_6_30 = "UTC-6:30", e4.UTC_MINUS_6 = "UTC-06", e4.UTC_MINUS_5_45 = "UTC-5:45", e4.UTC_MINUS_5_30 = "UTC-5:30", e4.UTC_MINUS_5 = "UTC-05", e4.UTC_MINUS_4_30 = "UTC-4:30", e4.UTC_MINUS_4 = "UTC-04", e4.UTC_MINUS_3_30 = "UTC-3:30", e4.UTC_MINUS_3 = "UTC-03", e4.UTC_MINUS_2_30 = "UTC-2:30", e4.UTC_MINUS_2 = "UTC-02", e4.UTC_MINUS_1 = "UTC-01", e4.UTC_0 = "UTC+00", e4.UTC_PLUS_1 = "UTC+01", e4.UTC_PLUS_2 = "UTC+02", e4.UTC_PLUS_3 = "UTC+03", e4.UTC_PLUS_3_30 = "UTC+3:30", e4.UTC_PLUS_4 = "UTC+04", e4.UTC_PLUS_4_30 = "UTC+4:30", e4.UTC_PLUS_5 = "UTC+05", e4.UTC_PLUS_5_30 = "UTC+5:30", e4.UTC_PLUS_5_45 = "UTC+5:45", e4.UTC_PLUS_6 = "UTC+06", e4.UTC_PLUS_6_30 = "UTC+6:30", e4.UTC_PLUS_7 = "UTC+07", e4.UTC_PLUS_8 = "UTC+08", e4.UTC_PLUS_8_45 = "UTC+8:45", e4.UTC_PLUS_9 = "UTC+09", e4.UTC_PLUS_9_30 = "UTC+9:30", e4.UTC_PLUS_10 = "UTC+10", e4.UTC_PLUS_10_30 = "UTC+10:30", e4.UTC_PLUS_11 = "UTC+11", e4.UTC_PLUS_11_30 = "UTC+11:30", e4.UTC_PLUS_12 = "UTC+12", e4.UTC_PLUS_12_45 = "UTC+12:45", e4.UTC_PLUS_13 = "UTC+13", e4.UTC_PLUS_13_45 = "UTC+13:45", e4.UTC_PLUS_14 = "UTC+14", e4))(tn || {});
var on = ((e4) => (e4.AcreTime = "ACT", e4.AfghanistanTime = "AFT", e4.AIXCentralEuropeanTime = "DFT", e4.AlaskaDaylightTime = "AKDT", e4.AlaskaStandardTime = "AKST", e4.AlmaAtaTime = "ALMT", e4.AmazonSummerTime = "AMST", e4.AmazonTime = "AMT", e4.AnadyrTime = "ANAT", e4.AqtobeTime = "AQTT", e4.ArabiaStandardTime = "AST", e4.ArgentinaTime = "ART", e4.ArmeniaTime = "AMT", e4.ASEANCommonTime = "ASEAN", e4.AtlanticDaylightTime = "ADT", e4.AtlanticStandardTime = "AST", e4.AustralianCentralDaylightSavingTime = "ACDT", e4.AustralianCentralStandardTime = "ACST", e4.AustralianCentralWesternStandardTime = "ACWST", e4.AustralianEasternDaylightSavingTime = "AEDT", e4.AustralianEasternStandardTime = "AEST", e4.AustralianEasternTime = "AET", e4.AustralianWesternStandardTime = "AWST", e4.AzerbaijanTime = "AZT", e4.AzoresStandardTime = "AZOT", e4.AzoresSummerTime = "AZOST", e4.BakerIslandTime = "BIT", e4.BangladeshStandardTime = "BST", e4.BhutanTime = "BTT", e4.BoliviaTime = "BOT", e4.BougainvilleStandardTime = "BST", e4.BrasiliaSummerTime = "BRST", e4.BrasiliaTime = "BRT", e4.BritishIndianOceanTime = "BIOT", e4.BritishSummerTime = "BST", e4.BruneiTime = "BNT", e4.CapeVerdeTime = "CVT", e4.CentralAfricaTime = "CAT", e4.CentralDaylightTime = "CDT", e4.CentralEuropeanSummerTime = "CEST", e4.CentralEuropeanTime = "CET", e4.CentralIndonesiaTime = "WITA", e4.CentralStandardTime = "CST", e4.CentralTime = "CT", e4.CentralWesternStandardTime = "CWST", e4.ChamorroStandardTime = "CHST", e4.ChathamDaylightTime = "CHADT", e4.ChathamStandardTime = "CHAST", e4.ChileStandardTime = "CLT", e4.ChileSummerTime = "CLST", e4.ChinaStandardTime = "CST", e4.ChoibalsanStandardTime = "CHOT", e4.ChoibalsanSummerTime = "CHOST", e4.ChristmasIslandTime = "CXT", e4.ChuukTime = "CHUT", e4.ClipptertonIslandStandardTime = "CIST", e4.CocosIslandsTime = "CCT", e4.ColombiaSummerTime = "COST", e4.ColombiaTime = "COT", e4.CookIslandTime = "CKT", e4.CoordinatedUniversalTime = "UTC", e4.CubaDaylightTime = "CDT", e4.CubaStandardTime = "CST", e4.DavisTime = "DAVT", e4.DumontDUrvilleTime = "DDUT", e4.EastAfricaTime = "EAT", e4.EasterIslandStandardTime = "EAST", e4.EasterIslandSummerTime = "EASST", e4.EasternCaribbeanTime = "ECT", e4.EasternDaylightTime = "EDT", e4.EasternEuropeanSummerTime = "EEST", e4.EasternEuropeanTime = "EET", e4.EasternGreenlandSummerTime = "EGST", e4.EasternGreenlandTime = "EGT", e4.EasternIndonesianTime = "WIT", e4.EasternStandardTime = "EST", e4.EasternTime = "ET", e4.EcuadorTime = "ECT", e4.FalklandIslandsSummerTime = "FKST", e4.FalklandIslandsTime = "FKT", e4.FernandoDeNoronhaTime = "FNT", e4.FijiTime = "FJT", e4.FrenchGuianaTime = "GFT", e4.FrenchSouthernAndAntarcticTime = "TFT", e4.FurtherEasternEuropeanTime = "FET", e4.GalapagosTime = "GALT", e4.GambierIslandTime = "GIT", e4.GambierIslandsTime = "GAMT", e4.GeorgiaStandardTime = "GET", e4.GilbertIslandTime = "GILT", e4.GreenwichMeanTime = "GMT", e4.GulfStandardTime = "GST", e4.GuyanaTime = "GYT", e4.HawaiiAleutianDaylightTime = "HDT", e4.HawaiiAleutianStandardTime = "HST", e4.HeardAndMcDonaldIslandsTime = "HMT", e4.HeureAvanceeDEuropeCentraleTime = "HAEC", e4.HongKongTime = "HKT", e4.HovdSummerTime = "HOVST", e4.HovdTime = "HOVT", e4.IndianOceanTime = "IOT", e4.IndianStandardTime = "IST", e4.IndochinaTime = "ICT", e4.InternationalDayLineWestTime = "IDLW", e4.IranDaylightTime = "IRDT", e4.IranStandardTime = "IRST", e4.IrishStandardTime = "IST", e4.IrkutskSummerTime = "IRKST", e4.IrkutskTime = "IRKT", e4.IsraelDaylightTime = "IDT", e4.IsraelStandardTime = "IST", e4.JapanStandardTime = "JST", e4.KaliningradTime = "KALT", e4.KamchatkaTime = "KAMT", e4.KoreaStandardTime = "KST", e4.KosraeTime = "KOST", e4.KrasnoyarskSummerTime = "KRAST", e4.KrasnoyarskTime = "KRAT", e4.KyrgyzstanTime = "KGT", e4.LineIslandsTime = "LINT", e4.KazakhstanStandardTime = "KAST", e4.LordHoweStandardTime = "LHST", e4.LordHoweSummerTime = "LHST", e4.MacquarieIslandStationTime = "MIST", e4.MagadanTime = "MAGT", e4.MalaysiaStandardTime = "MST", e4.MalaysiaTime = "MYT", e4.MaldivesTime = "MVT", e4.MarquesasIslandsTime = "MART", e4.MarshallIslandsTime = "MHT", e4.MauritiusTime = "MUT", e4.MawsonStationTime = "MAWT", e4.MiddleEuropeanSummerTime = "MEDT", e4.MiddleEuropeanTime = "MET", e4.MoscowTime = "MSK", e4.MountainDaylightTime = "MDT", e4.MountainStandardTime = "MST", e4.MyanmarStandardTime = "MMT", e4.NepalTime = "NCT", e4.NauruTime = "NRT", e4.NewCaledoniaTime = "NCT", e4.NewZealandDaylightTime = "NZDT", e4.NewZealandStandardTime = "NZST", e4.NewfoundlandDaylightTime = "NDT", e4.NewfoundlandStandardTime = "NST", e4.NewfoundlandTime = "NT", e4.NiueTime = "NUT", e4.NorfolkIslandTime = "NFT", e4.NovosibirskTime = "NOVT", e4.OmskTime = "OMST", e4.OralTime = "ORAT", e4.PacificDaylightTime = "PDT", e4.PacificStandardTime = "PST", e4.PakistanStandardTime = "PKT", e4.PalauTime = "PWT", e4.PapuaNewGuineaTime = "PGT", e4.ParaguaySummerTime = "PYST", e4.ParaguayTime = "PYT", e4.PeruTime = "PET", e4.PhilippineStandardTime = "PHST", e4.PhilippineTime = "PHT", e4.PhoenixIslandTime = "PHOT", e4.PitcairnTime = "PST", e4.PohnpeiStandardTime = "PONT", e4.ReunionTime = "RET", e4.RotheraResearchStationTime = "ROTT", e4.SaintPierreAndMiquelonDaylightTime = "PMDT", e4.SaintPierreAndMiquelonStandardTime = "PMST", e4.SakhalinIslandTime = "SAKT", e4.SamaraTime = "SAMT", e4.SamoaDaylightTime = "SDT", e4.SamoaStandardTime = "SST", e4.SeychellesTime = "SCT", e4.ShowaStationTime = "SYOT", e4.SingaporeStandardTime = "SST", e4.SingaporeTime = "SGT", e4.SolomonIslandsTime = "SBT", e4.SouthAfricanStandardTime = "SAST", e4.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", e4.SrednekolymskTime = "SRET", e4.SriLankaStandardTime = "SLST", e4.SurinameTime = "SRT", e4.TahitiTime = "TAHT", e4.TajikistanTime = "TJT", e4.ThailandStandardTime = "THA", e4.TimorLesteTime = "TLT", e4.TokelauTime = "TKT", e4.TongaTime = "TOT", e4.TurkeyTime = "TRT", e4.TurkmenistanTime = "TMT", e4.TuvaluTime = "TVT", e4.UlaanbaatarStandardTime = "ULAT", e4.UlaanbaatarSummerTime = "ULAST", e4.UruguayStandardTime = "UYT", e4.UruguaySummerTime = "UYST", e4.UzbekistanTime = "UZT", e4.VanuatuTime = "VUT", e4.VenezuelaStandardTime = "VET", e4.VladivostokTime = "VLAT", e4.VolgogradTime = "VOLT", e4.VostokStationTime = "VOST", e4.WakeIslandTime = "WAKT", e4.WestAfricaSummerTime = "WAST", e4.WestAfricaTime = "WAT", e4.WestGreenlandSummerTime = "WGST", e4.WestGreenlandTime = "WGT", e4.WestKazakhstanTime = "WKT", e4.WesternEuropeanSummerTime = "WEDT", e4.WesternEuropeanTime = "WET", e4.WesternIndonesianTime = "WIT", e4.WesternStandardTime = "WST", e4.YakutskTime = "YAKT", e4.YekaterinburgTime = "YEKT", e4))(on || {});
var un = ((e4) => (e4.Africa = "Africa", e4.Americas = "Americas", e4.Asia = "Asia", e4.Europe = "Europe", e4.Oceania = "Oceania", e4.Polar = "Polar", e4))(un || {});
var rn = ((e4) => (e4.CentralAmerica = "Central America", e4.EasternAsia = "Eastern Asia", e4.EasternEurope = "Eastern Europe", e4.EasternAfrica = "Eastern Africa", e4.MiddleAfrica = "Middle Africa", e4.MiddleEast = "Middle East", e4.NorthernAfrica = "Northern Africa", e4.NorthernAmerica = "Northern America", e4.NorthernEurope = "Northern Europe", e4.Polynesia = "Polynesia", e4.SouthAmerica = "South America", e4.SouthernAfrica = "Southern Africa", e4.SouthernAsia = "Southern Asia", e4.SouthernEurope = "Southern Europe", e4.WesternAfrica = "Western Africa", e4.WesternAsia = "Western Asia", e4.WesternEurope = "Western Europe", e4.WesternAustralia = "Western Australia", e4))(rn || {});
var ze = (e4 = 21) => {
  let n2 = "", o2 = crypto.getRandomValues(new Uint8Array(e4));
  for (; e4--; ) {
    let r4 = o2[e4] & 63;
    r4 < 36 ? n2 += r4.toString(36) : r4 < 62 ? n2 += (r4 - 26).toString(36).toUpperCase() : r4 < 63 ? n2 += "_" : n2 += "-";
  }
  return n2;
};
var mn = [{ property: "name", enumerable: false }, { property: "message", enumerable: false }, { property: "stack", enumerable: false }, { property: "code", enumerable: true }];
var xe = Symbol(".toJSON was called");
var ln = (e4) => {
  e4[xe] = true;
  let n2 = e4.toJSON();
  return delete e4[xe], n2;
};
var qe = ({ from: e4, seen: n2, to_: o2, forceEnumerable: r4, maxDepth: p4, depth: T2 }) => {
  let A2 = o2 || (Array.isArray(e4) ? [] : {});
  if (n2.push(e4), T2 >= p4)
    return A2;
  if (typeof e4.toJSON == "function" && e4[xe] !== true)
    return ln(e4);
  for (let [l2, d2] of Object.entries(e4)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(d2)) {
      A2[l2] = "[object Buffer]";
      continue;
    }
    if (d2 !== null && typeof d2 == "object" && typeof d2.pipe == "function") {
      A2[l2] = "[object Stream]";
      continue;
    }
    if (typeof d2 != "function") {
      if (!d2 || typeof d2 != "object") {
        A2[l2] = d2;
        continue;
      }
      if (!n2.includes(e4[l2])) {
        T2++, A2[l2] = qe({ from: e4[l2], seen: [...n2], forceEnumerable: r4, maxDepth: p4, depth: T2 });
        continue;
      }
      A2[l2] = "[Circular]";
    }
  }
  for (let { property: l2, enumerable: d2 } of mn)
    typeof e4[l2] == "string" && Object.defineProperty(A2, l2, { value: e4[l2], enumerable: r4 ? true : d2, configurable: true, writable: true });
  return A2;
};
function Ge(e4, n2 = {}) {
  let { maxDepth: o2 = Number.POSITIVE_INFINITY } = n2;
  return typeof e4 == "object" && e4 !== null ? qe({ from: e4, seen: [], forceEnumerable: true, maxDepth: o2, depth: 0 }) : typeof e4 == "function" ? `[Function: ${e4.name || "anonymous"}]` : e4;
}
var u = ((a) => (a[a.Warning = 999] = "Warning", a[a.Exception = 1e3] = "Exception", a[a.UnmanagedException = 1001] = "UnmanagedException", a[a.CaughtException = 1002] = "CaughtException", a[a.UncaughtException = 1003] = "UncaughtException", a[a.UnhandledPromiseRejectionException = 1004] = "UnhandledPromiseRejectionException", a[a.AuthenticationException = 2e3] = "AuthenticationException", a[a.AuthenticationExpiredAccessTokenException = 2001] = "AuthenticationExpiredAccessTokenException", a[a.AuthenticationInvalidAccessTokenException = 2002] = "AuthenticationInvalidAccessTokenException", a[a.AuthenticationMissingAccessTokenException = 2003] = "AuthenticationMissingAccessTokenException", a[a.AuthenticationExpiredRefreshTokenException = 2004] = "AuthenticationExpiredRefreshTokenException", a[a.AuthenticationInvalidRefreshTokenException = 2005] = "AuthenticationInvalidRefreshTokenException", a[a.AuthenticationMissingRefreshTokenException = 2006] = "AuthenticationMissingRefreshTokenException", a[a.AuthenticationMissingDeviceKeyException = 2007] = "AuthenticationMissingDeviceKeyException", a[a.AuthenticationUnAuthorizedAccessException = 2008] = "AuthenticationUnAuthorizedAccessException", a[a.AuthenticationCodeMismatchException = 2009] = "AuthenticationCodeMismatchException", a[a.AuthenticationExpiredCodeException = 2010] = "AuthenticationExpiredCodeException", a[a.AuthenticationLoginException = 2011] = "AuthenticationLoginException", a[a.AuthenticationLoginInvalidCredentialsException = 2012] = "AuthenticationLoginInvalidCredentialsException", a[a.AuthenticationLoginTooManyFailedAttemptsException = 2013] = "AuthenticationLoginTooManyFailedAttemptsException", a[a.AuthenticationLimitExceededException = 2014] = "AuthenticationLimitExceededException", a[a.AuthenticationUnauthorizedAccessException = 2015] = "AuthenticationUnauthorizedAccessException", a[a.AuthenticationTooManyRequestsException = 2016] = "AuthenticationTooManyRequestsException", a[a.AuthenticationUserNotFoundException = 2017] = "AuthenticationUserNotFoundException", a[a.AuthenticationSignupException = 2018] = "AuthenticationSignupException", a[a.AuthenticationUsernameAvailabilityCheckException = 2019] = "AuthenticationUsernameAvailabilityCheckException", a[a.AuthenticationUsernameExistsException = 2020] = "AuthenticationUsernameExistsException", a[a.AuthenticationAliasExistException = 2021] = "AuthenticationAliasExistException", a[a.AuthenticationCodeDeliveryFailureException = 2022] = "AuthenticationCodeDeliveryFailureException", a[a.AuthenticationMFAMethodNotFoundException = 2023] = "AuthenticationMFAMethodNotFoundException", a[a.AuthenticationNotAuthorizedException = 2024] = "AuthenticationNotAuthorizedException", a[a.AuthenticationPasswordResetRequiredException = 2025] = "AuthenticationPasswordResetRequiredException", a[a.AuthenticationUserNotConfirmedException = 2026] = "AuthenticationUserNotConfirmedException", a[a.DatabaseException = 3e3] = "DatabaseException", a[a.SequelizeNotInitializedException = 3001] = "SequelizeNotInitializedException", a[a.ProcessException = 4e3] = "ProcessException", a[a.ProcessWarningException = 4001] = "ProcessWarningException", a[a.KillProcessException = 4002] = "KillProcessException", a[a.FatalException = 4003] = "FatalException", a[a.ProcessSigTermException = 4004] = "ProcessSigTermException", a[a.ProcessSigIntException = 4005] = "ProcessSigIntException", a[a.MissingEnvironmentVariable = 4006] = "MissingEnvironmentVariable", a[a.NetworkException = 5e3] = "NetworkException", a[a.HttpException = 5001] = "HttpException", a[a.HttpRequestException = 5002] = "HttpRequestException", a[a.HttpRequestResourceNotFoundException = 5003] = "HttpRequestResourceNotFoundException", a[a.HttpResponseException = 5004] = "HttpResponseException", a[a.ServiceProviderException = 6e3] = "ServiceProviderException", a[a.AWSException = 6001] = "AWSException", a[a.AWSMissingAccessKeyException = 6002] = "AWSMissingAccessKeyException", a[a.AWSMissingSecretKeyException = 6003] = "AWSMissingSecretKeyException", a[a.CognitoException = 6004] = "CognitoException", a[a.CognitoInternalErrorException = 6005] = "CognitoInternalErrorException", a[a.CognitoInvalidEmailRoleAccessPolicyException = 6006] = "CognitoInvalidEmailRoleAccessPolicyException", a[a.CognitoInvalidLambdaResponseException = 6007] = "CognitoInvalidLambdaResponseException", a[a.CognitoUserLambdaValidationException = 6008] = "CognitoUserLambdaValidationException", a[a.CognitoInvalidParameterException = 6009] = "CognitoInvalidParameterException", a[a.CognitoInvalidSmsRoleAccessPolicyException = 6010] = "CognitoInvalidSmsRoleAccessPolicyException", a[a.CognitoInvalidSmsRoleTrustRelationshipException = 6011] = "CognitoInvalidSmsRoleTrustRelationshipException", a[a.CognitoInvalidUserPoolConfigurationException = 6012] = "CognitoInvalidUserPoolConfigurationException", a[a.CognitoResourceNotFoundException = 6013] = "CognitoResourceNotFoundException", a[a.CognitoMissingUserPoolClientIdException = 6014] = "CognitoMissingUserPoolClientIdException", a[a.CognitoMissingUserPoolIdException = 6015] = "CognitoMissingUserPoolIdException", a[a.CognitoUnexpectedLambdaException = 6016] = "CognitoUnexpectedLambdaException", a[a.StripeException = 6017] = "StripeException", a[a.StripeMissingSecretKeyException = 6018] = "StripeMissingSecretKeyException", a[a.StripeSubscriptionCreationFailedException = 6019] = "StripeSubscriptionCreationFailedException", a[a.StripePaymentMethodRequiredException = 6020] = "StripePaymentMethodRequiredException", a[a.UserException = 7e3] = "UserException", a[a.NullUserException = 7001] = "NullUserException", a[a.UserStateConflictException = 7002] = "UserStateConflictException", a[a.NullAccountException = 7003] = "NullAccountException", a[a.ValidationException = 8e3] = "ValidationException", a[a.InvalidTypeException = 8001] = "InvalidTypeException", a[a.MissingArgumentException = 8002] = "MissingArgumentException", a[a.MissingPropertyException = 8003] = "MissingPropertyException", a[a.InvalidArgumentException = 8004] = "InvalidArgumentException", a[a.InvalidPropertyException = 8005] = "InvalidPropertyException", a[a.MissingRequestBodyPropertyException = 8006] = "MissingRequestBodyPropertyException", a[a.MissingRequestUrlParameterException = 8007] = "MissingRequestUrlParameterException", a[a.MissingCookieException = 8008] = "MissingCookieException", a))(u || {});
var s = class extends Error {
  cause;
  code = 1e3;
  context;
  created;
  data;
  description;
  model;
  form;
  friendlyMessage = "An unknown error has occurred. :(";
  id;
  logLevel = i.Exception;
  origin;
  pii;
  request;
  response;
  scope;
  remediation;
  tags;
  task;
  user;
  __proto__;
  constructor(n2, o2) {
    super(n2);
    let r4 = new.target.prototype;
    if (this.__proto__ = r4, Error.captureStackTrace && Error.captureStackTrace(o2?.cause ?? this, s), this.id = ze(), this.name = this.constructor.name, this.created = new Date().toString(), this.description = o2?.description ?? this.description, this.remediation = o2?.remediation ?? this.remediation, this.scope = o2?.scope ?? this.scope, o2) {
      let { cause: p4, context: T2, data: A2, model: l2, form: d2, origin: Ye, pii: Ze, request: Je, response: Qe, tags: $e, task: Xe, user: ea4 } = o2;
      this.cause = p4, this.context = T2, this.data = A2, this.model = l2, this.form = d2, this.origin = Ye, this.pii = Ze, this.request = Je, this.response = Qe, this.task = Xe, this.tags = $e, this.user = ea4;
    }
  }
  toJSON() {
    return Ge(this);
  }
};
var Fe = new Re();
var c = ((r4) => (r4.Simple = "simple", r4.ExponentialBackoff = "exponential", r4.CircuitBreaker = "circuit_breaker", r4))(c || {});
var v = class extends s {
  code = 1001;
  description = `An "Error" object that isn't managed by AppLab`;
  friendlyMessage = "An unknown error has occurred.";
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var F = class extends s {
  code = 1002;
  description = "An exception was caught within a try block.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var M = class extends s {
  code = 1003;
  description = "An uncaught exception bubbled up and was caught automatically.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var S = class extends s {
  code = 1004;
  description = "An unhandled promise rejection was caught automatically.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var g = class extends s {
  code = 4e3;
  description = "A exception was caught in a process.";
  logLevel = i.Exception;
};
var L = class extends g {
  code = 4001;
  description = "A warning was caught in a process.";
  logLevel = i.Warning;
};
var C = class extends g {
  code = 4002;
  description = 'Exception thrown to kill a Node.js "gracefully".';
  logLevel = i.Critical;
};
var b = class extends g {
  code = 4004;
  description = "Process received SIGTERM termination code.";
  logLevel = i.Critical;
};
var y = class extends g {
  code = 4005;
  description = "Process received SIGINT termination code.";
  logLevel = i.Critical;
};
var P = class extends g {
  code = 4003;
  description = "An fatal exception occurred which has crashed the server.";
  logLevel = i.Critical;
};
var R = class extends g {
  code = 4006;
  description = "An environment variable is not set or unavailable.";
  logLevel = i.Critical;
};
var t = class extends s {
  code = 2e3;
  description = "Generic or unknown exceptions associated with user authentication.";
  friendlyMessage = "An unknown error occurred.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var z = class extends t {
  code = 2015;
  description = "User lacks permissions to access the requested resource.";
  logLevel = i.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var q = class extends t {
  code = 2014;
  description = "This exception is thrown when a user exceeds the limit for a requested AWS resource";
  friendlyMessage = "You are trying to access this resource too often.";
  logLevel = i.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var G = class extends t {
  code = 2024;
  description = "The Auth user does not have permission to perform this action.";
  friendlyMessage = "You need to be logged in or have proper permissions to access this resource.";
  logLevel = i.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var K = class extends t {
  code = 2016;
  description = "This exception is thrown when the user has made too many requests for a given operation.";
  friendlyMessage = "You are trying to access this resource too often.";
  logLevel = i.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var w = class extends t {
  code = 2017;
  description = "This exception is thrown when the Auth service cannot find a user with the provided username.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var O = class extends t {
  code = 2025;
  description = "This exception is thrown when a password reset is required.";
  friendlyMessage = "A password reset is required in order to login.";
  logLevel = i.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var H = class extends t {
  code = 2011;
  description = "An exception occurred while logging a user in.";
  friendlyMessage = "An unknown error occurred.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var W = class extends t {
  code = 2012;
  description = "Incorrect username or password provided.";
  friendlyMessage = "Incorrect username or password.";
  logLevel = i.Info;
  remediation = { response: { code: 401 }, retry: false };
};
var V = class extends t {
  code = 2013;
  description = "This exception is thrown when the user has provided an incorrect username or password too many times.";
  friendlyMessage = "You've provided an incorrect username or password too many times.";
  logLevel = i.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var j = class extends t {
  code = 2023;
  description = "This exception is thrown when the Auth service cannot find a multi-factor authentication (MFA) method.";
  logLevel = i.Exception;
  remediation = { response: { code: 403 }, retry: { limit: 3, strategy: "simple" } };
};
var Y = class extends t {
  code = 2018;
  description = "An exception occurred while signing up a user.";
  friendlyMessage = "An error occurred while signing up.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var _ = class extends t {
  code = 2019;
  description = "An exception occurred while checking if a username is available.";
  friendlyMessage = "An error occurred while checking if a username is available.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var Z = class extends _ {
  code = 2020;
  description = "User with email or phone number already exists.";
  friendlyMessage = "A user with that email already exists.";
  logLevel = i.Warning;
  remediation = { response: { code: 400 }, retry: false };
};
var J = class extends _ {
  code = 2021;
  description = "This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Oe = class extends t {
  code = 2001;
  description = "The access token associated with a session has expired.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var He = class extends t {
  code = 2002;
  description = "The access token associated with a session is invalid.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var We = class extends t {
  code = 2003;
  description = "The access token associated with a session is missing.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var Q = class extends t {
  code = 2004;
  description = "The refresh token associated with a session has expired.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var $ = class extends t {
  code = 2005;
  description = "The refresh token associated with a session is invalid.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var k = class extends t {
  code = 2006;
  description = "The refresh token associated with a session is missing.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var X = class extends t {
  code = 2022;
  description = "This exception is thrown when a verification code fails to deliver successfully.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var ee = class extends t {
  code = 2009;
  description = "The verification code provided is incorrect";
  logLevel = i.Warning;
  remediation = { response: { code: 400 }, retry: false };
};
var ae = class extends t {
  code = 2010;
  description = "The verification code provided has expired";
  logLevel = i.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var ie = class extends t {
  code = 2026;
  description = "This exception is thrown when a user who is not confirmed attempts to login.";
  friendlyMessage = "You haven't verified your email address or telephone number yet";
  logLevel = i.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var B = class extends s {
  code = 3e3;
  description = "Generic or unknown database exceptions.";
  logLevel = i.Exception;
};
var ne = class extends B {
  code = 3001;
  description = "Generic or unknown database exceptions.";
  logLevel = i.Exception;
};
var D = class extends s {
  code = 5e3;
  description = "A network related issue has occurred.";
  logLevel = i.Exception;
};
var N = class extends D {
  code = 5001;
  description = "A generic or unknown exception occurred related to an HTTP request.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var E = class extends N {
  code = 5002;
  description = "Base class for generic or unknown exceptions occuring during an HTTP request.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var se = class extends E {
  code = 5003;
  description = "The requested HTTP resource could not be found.";
  logLevel = i.Exception;
  remediation = { response: { code: 404 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var te = class extends E {
  code = 8006;
  description = "HTTP request body is missing a required property.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var oe = class extends E {
  code = 8007;
  description = "HTTP request URL is missing a required parameter.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var ue = class extends E {
  code = 8008;
  description = "A required cookie is missing.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var re = class extends N {
  code = 5002;
  description = "Generic or unknown exceptions related to HTTP responses.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var f = class extends s {
  code = 6e3;
  description = "An error originating from a third-party or service provider occurred.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var h = class extends f {
  code = 6001;
  description = "An exception originating from the AWS integration occurred.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var x = class extends h {
  code = 6018;
  description = "Missing AWS access key token.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var cn = class extends h {
  code = 6018;
  description = "Missing AWS secret key token.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var m = class extends h {
  code = 6001;
  description = "An exception originating from the AWS Cognito integration occurred.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var me = class extends m {
  code = 6005;
  description = "An internal error occurred originating from AWS Cognito.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var le = class extends m {
  code = 6012;
  description = "This exception is thrown when the user pool configuration is invalid.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var de = class extends m {
  code = 6006;
  description = "There is an access policy exception for the role provided for email configuration.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ce = class extends m {
  code = 6010;
  description = "This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var Ae = class extends m {
  code = 6011;
  description = "This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust -idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ge = class extends m {
  code = 6014;
  description = "Cognito user pool client ID configuration is missing.";
  logLevel = i.Critical;
};
var Te = class extends m {
  code = 6015;
  description = "Cognito user pool ID configuration is missing.";
  logLevel = i.Critical;
};
var pe = class extends m {
  code = 6016;
  description = "This exception is thrown when the Auth service encounters an unexpected exception with the AWS Lambda service.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ee = class extends m {
  code = 6009;
  description = "This exception is thrown when the Cognito service encounters an invalid parameter.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var fe = class extends m {
  code = 6007;
  description = "This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var he = class extends m {
  code = 6013;
  description = "This exception is thrown when the Cognito service cannot find the requested resource.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ce = class extends m {
  code = 6008;
  description = "This exception is thrown when the Cognito service encounters a user validation exception with the AWS Lambda service.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var I = class extends f {
  code = 6017;
  description = "An exception occurred relating to Stripe.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ie = class extends I {
  code = 6018;
  description = "The Stripe secret key token is missing.";
  logLevel = i.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ve = class extends I {
  code = 6019;
  description = "Stripe subscription creation failed.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Se = class extends I {
  code = 6020;
  description = "An updated payment method is required.";
  logLevel = i.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var U = class extends s {
  code = 7e3;
  description = "Generic or unknown exceptions related to a user.";
  logLevel = i.Exception;
};
var be = class extends U {
  code = 7001;
  description = "An operation was performed on behalf a user that cannot be found in the database.";
  logLevel = i.Critical;
};
var ye = class extends U {
  code = 7002;
  description = "Exception used for user state that exists in one system or another and isn't being actively managed, or synced between all systems, or at least differences accounted for.";
  logLevel = i.Critical;
};
var _e = class extends s {
  code = 8e3;
  description = "Generic or otherwise unknown input validation exception.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Be = class extends s {
  code = 8001;
  description = "Instance type is invalid.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var De = class extends s {
  code = 8002;
  description = "A required argument is missing.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Ne = class extends s {
  code = 8003;
  description = "A required property is missing.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Ue = class extends s {
  code = 8004;
  description = "An argument is invalid.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var ke = class extends s {
  code = 8005;
  description = "An object property is invalid.";
  logLevel = i.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var An = { [1e3]: s, [1001]: v, [1002]: F, [1003]: M, [1004]: S, [2e3]: t, [2004]: Q, [2005]: $, [2011]: H, [2012]: W, [2013]: V, [2007]: k, [2006]: k, [2015]: z, [2009]: ee, [2010]: ae, [2014]: q, [2024]: G, [2016]: K, [2017]: w, [2018]: Y, [2019]: _, [2021]: J, [2020]: Z, [2022]: X, [2023]: j, [2025]: O, [2026]: ie, [3e3]: B, [3001]: ne, [6e3]: f, [6001]: h, [6002]: x, [6003]: x, [6004]: m, [6005]: me, [6006]: de, [6010]: ce, [6011]: Ae, [6016]: pe, [6012]: le, [6007]: fe, [6009]: Ee, [6015]: Te, [6014]: ge, [6013]: he, [6008]: Ce, [6017]: I, [6019]: ve, [6018]: Ie, [6020]: Se, [5e3]: D, [5001]: N, [5002]: E, [5003]: se, [5004]: re, [8006]: te, [8007]: oe, [8008]: ue, [8e3]: _e, [8004]: Ue, [8005]: ke, [8001]: Be, [8002]: De, [8003]: Ne, [4e3]: g, [4001]: L, [4004]: b, [4005]: y, [4003]: P, [4006]: R, [4002]: C, [7e3]: U, [7001]: be, [7002]: ye };
var Ve = class extends t {
  code = 2007;
  description = "The device key associated with the user's session is missing.";
  logLevel = i.Warning;
  remediation = { response: { code: 401 }, retry: false };
};

// node_modules/@srclaunch/http-server/dist/index.js
import compression from "compression";
import express from "express";
import multer from "multer";
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __require3 = /* @__PURE__ */ ((x42) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x42, {
  get: (a, b3) => (typeof __require !== "undefined" ? __require : a)[b3]
}) : x42)(function(x42) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x42 + '" is not supported');
});
var __commonJS2 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_object_assign = __commonJS2({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s3 = 1; s3 < arguments.length; s3++) {
        from = Object(arguments[s3]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
            }
          }
        }
      }
      return to;
    };
  }
});
var require_vary = __commonJS2({
  "node_modules/vary/index.js"(exports, module) {
    "use strict";
    module.exports = vary;
    module.exports.append = append;
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function append(header, field) {
      if (typeof header !== "string") {
        throw new TypeError("header argument is required");
      }
      if (!field) {
        throw new TypeError("field argument is required");
      }
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
      for (var j42 = 0; j42 < fields.length; j42++) {
        if (!FIELD_NAME_REGEXP.test(fields[j42])) {
          throw new TypeError("field argument contains an invalid header name");
        }
      }
      if (header === "*") {
        return header;
      }
      var val = header;
      var vals = parse(header.toLowerCase());
      if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
        return "*";
      }
      for (var i3 = 0; i3 < fields.length; i3++) {
        var fld = fields[i3].toLowerCase();
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ", " + fields[i3] : fields[i3];
        }
      }
      return val;
    }
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i3 = 0, len = header.length; i3 < len; i3++) {
        switch (header.charCodeAt(i3)) {
          case 32:
            if (start === end) {
              start = end = i3 + 1;
            }
            break;
          case 44:
            list.push(header.substring(start, end));
            start = end = i3 + 1;
            break;
          default:
            end = i3 + 1;
            break;
        }
      }
      list.push(header.substring(start, end));
      return list;
    }
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError("res argument is required");
      }
      var val = res.getHeader("Vary") || "";
      var header = Array.isArray(val) ? val.join(", ") : String(val);
      if (val = append(header, field)) {
        res.setHeader("Vary", val);
      }
    }
  }
});
var require_lib = __commonJS2({
  "node_modules/cors/lib/index.js"(exports, module) {
    (function() {
      "use strict";
      var assign = require_object_assign();
      var vary = require_vary();
      var defaults = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
      };
      function isString(s3) {
        return typeof s3 === "string" || s3 instanceof String;
      }
      function isOriginAllowed(origin, allowedOrigin) {
        if (Array.isArray(allowedOrigin)) {
          for (var i3 = 0; i3 < allowedOrigin.length; ++i3) {
            if (isOriginAllowed(origin, allowedOrigin[i3])) {
              return true;
            }
          }
          return false;
        } else if (isString(allowedOrigin)) {
          return origin === allowedOrigin;
        } else if (allowedOrigin instanceof RegExp) {
          return allowedOrigin.test(origin);
        } else {
          return !!allowedOrigin;
        }
      }
      function configureOrigin(options, req) {
        var requestOrigin = req.headers.origin, headers = [], isAllowed;
        if (!options.origin || options.origin === "*") {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: "*"
          }]);
        } else if (isString(options.origin)) {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: options.origin
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        } else {
          isAllowed = isOriginAllowed(requestOrigin, options.origin);
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: isAllowed ? requestOrigin : false
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        }
        return headers;
      }
      function configureMethods(options) {
        var methods = options.methods;
        if (methods.join) {
          methods = options.methods.join(",");
        }
        return {
          key: "Access-Control-Allow-Methods",
          value: methods
        };
      }
      function configureCredentials(options) {
        if (options.credentials === true) {
          return {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          };
        }
        return null;
      }
      function configureAllowedHeaders(options, req) {
        var allowedHeaders = options.allowedHeaders || options.headers;
        var headers = [];
        if (!allowedHeaders) {
          allowedHeaders = req.headers["access-control-request-headers"];
          headers.push([{
            key: "Vary",
            value: "Access-Control-Request-Headers"
          }]);
        } else if (allowedHeaders.join) {
          allowedHeaders = allowedHeaders.join(",");
        }
        if (allowedHeaders && allowedHeaders.length) {
          headers.push([{
            key: "Access-Control-Allow-Headers",
            value: allowedHeaders
          }]);
        }
        return headers;
      }
      function configureExposedHeaders(options) {
        var headers = options.exposedHeaders;
        if (!headers) {
          return null;
        } else if (headers.join) {
          headers = headers.join(",");
        }
        if (headers && headers.length) {
          return {
            key: "Access-Control-Expose-Headers",
            value: headers
          };
        }
        return null;
      }
      function configureMaxAge(options) {
        var maxAge = (typeof options.maxAge === "number" || options.maxAge) && options.maxAge.toString();
        if (maxAge && maxAge.length) {
          return {
            key: "Access-Control-Max-Age",
            value: maxAge
          };
        }
        return null;
      }
      function applyHeaders(headers, res) {
        for (var i3 = 0, n2 = headers.length; i3 < n2; i3++) {
          var header = headers[i3];
          if (header) {
            if (Array.isArray(header)) {
              applyHeaders(header, res);
            } else if (header.key === "Vary" && header.value) {
              vary(res, header.value);
            } else if (header.value) {
              res.setHeader(header.key, header.value);
            }
          }
        }
      }
      function cors2(options, req, res, next) {
        var headers = [], method = req.method && req.method.toUpperCase && req.method.toUpperCase();
        if (method === "OPTIONS") {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options, req));
          headers.push(configureMethods(options, req));
          headers.push(configureAllowedHeaders(options, req));
          headers.push(configureMaxAge(options, req));
          headers.push(configureExposedHeaders(options, req));
          applyHeaders(headers, res);
          if (options.preflightContinue) {
            next();
          } else {
            res.statusCode = options.optionsSuccessStatus;
            res.setHeader("Content-Length", "0");
            res.end();
          }
        } else {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options, req));
          headers.push(configureExposedHeaders(options, req));
          applyHeaders(headers, res);
          next();
        }
      }
      function middlewareWrapper(o2) {
        var optionsCallback = null;
        if (typeof o2 === "function") {
          optionsCallback = o2;
        } else {
          optionsCallback = function(req, cb) {
            cb(null, o2);
          };
        }
        return function corsMiddleware(req, res, next) {
          optionsCallback(req, function(err, options) {
            if (err) {
              next(err);
            } else {
              var corsOptions = assign({}, defaults, options);
              var originCallback = null;
              if (corsOptions.origin && typeof corsOptions.origin === "function") {
                originCallback = corsOptions.origin;
              } else if (corsOptions.origin) {
                originCallback = function(origin, cb) {
                  cb(null, corsOptions.origin);
                };
              }
              if (originCallback) {
                originCallback(req.headers.origin, function(err2, origin) {
                  if (err2 || !origin) {
                    next(err2);
                  } else {
                    corsOptions.origin = origin;
                    cors2(corsOptions, req, res, next);
                  }
                });
              } else {
                next();
              }
            }
          });
        };
      }
      module.exports = middlewareWrapper;
    })();
  }
});
var require_safe_buffer = __commonJS2({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = __require3("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});
var require_basic_auth = __commonJS2({
  "node_modules/basic-auth/index.js"(exports, module) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    module.exports = auth;
    module.exports.parse = parse;
    var CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/;
    var USER_PASS_REGEXP = /^([^:]*):(.*)$/;
    function auth(req) {
      if (!req) {
        throw new TypeError("argument req is required");
      }
      if (typeof req !== "object") {
        throw new TypeError("argument req is required to be an object");
      }
      var header = getAuthorization(req);
      return parse(header);
    }
    function decodeBase64(str) {
      return Buffer2.from(str, "base64").toString();
    }
    function getAuthorization(req) {
      if (!req.headers || typeof req.headers !== "object") {
        throw new TypeError("argument req is required to have headers property");
      }
      return req.headers.authorization;
    }
    function parse(string) {
      if (typeof string !== "string") {
        return void 0;
      }
      var match = CREDENTIALS_REGEXP.exec(string);
      if (!match) {
        return void 0;
      }
      var userPass = USER_PASS_REGEXP.exec(decodeBase64(match[1]));
      if (!userPass) {
        return void 0;
      }
      return new Credentials(userPass[1], userPass[2]);
    }
    function Credentials(name, pass) {
      this.name = name;
      this.pass = pass;
    }
  }
});
var require_ms = __commonJS2({
  "node_modules/morgan/node_modules/ms/index.js"(exports, module) {
    var s3 = 1e3;
    var m3 = s3 * 60;
    var h3 = m3 * 60;
    var d2 = h3 * 24;
    var y3 = d2 * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n2 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y3;
        case "days":
        case "day":
        case "d":
          return n2 * d2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h3;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m3;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s3;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d2) {
        return Math.round(ms / d2) + "d";
      }
      if (ms >= h3) {
        return Math.round(ms / h3) + "h";
      }
      if (ms >= m3) {
        return Math.round(ms / m3) + "m";
      }
      if (ms >= s3) {
        return Math.round(ms / s3) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d2, "day") || plural(ms, h3, "hour") || plural(ms, m3, "minute") || plural(ms, s3, "second") || ms + " ms";
    }
    function plural(ms, n2, name) {
      if (ms < n2) {
        return;
      }
      if (ms < n2 * 1.5) {
        return Math.floor(ms / n2) + " " + name;
      }
      return Math.ceil(ms / n2) + " " + name + "s";
    }
  }
});
var require_debug = __commonJS2({
  "node_modules/morgan/node_modules/debug/src/debug.js"(exports, module) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i3;
      for (i3 in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i3);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i3 = 0; i3 < args.length; i3++) {
          args[i3] = arguments[i3];
        }
        args[0] = exports.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%")
            return match;
          index++;
          var formatter = exports.formatters[format];
          if (typeof formatter === "function") {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports.init === "function") {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i3 = 0; i3 < len; i3++) {
        if (!split[i3])
          continue;
        namespaces = split[i3].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i3, len;
      for (i3 = 0, len = exports.skips.length; i3 < len; i3++) {
        if (exports.skips[i3].test(name)) {
          return false;
        }
      }
      for (i3 = 0, len = exports.names.length; i3 < len; i3++) {
        if (exports.names[i3].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});
var require_browser = __commonJS2({
  "node_modules/morgan/node_modules/debug/src/browser.js"(exports, module) {
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v3) {
      try {
        return JSON.stringify(v3);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c3 = "color: " + this.color;
      args.splice(1, 0, c3, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%")
          return;
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c3);
    }
    function log() {
      return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e32) {
      }
    }
    function load() {
      var r32;
      try {
        r32 = exports.storage.debug;
      } catch (e32) {
      }
      if (!r32 && typeof process !== "undefined" && "env" in process) {
        r32 = process.env.DEBUG;
      }
      return r32;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e32) {
      }
    }
  }
});
var require_node = __commonJS2({
  "node_modules/morgan/node_modules/debug/src/node.js"(exports, module) {
    var tty = __require3("tty");
    var util = __require3("util");
    exports = module.exports = require_debug();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_3, k42) {
        return k42.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (fd !== 1 && fd !== 2) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v3) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v3, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v3) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v3, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c3 = this.color;
        var prefix = "  \x1B[3" + c3 + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c3 + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (namespaces == null) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = __require3("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = __require3("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i3 = 0; i3 < keys.length; i3++) {
        debug.inspectOpts[keys[i3]] = exports.inspectOpts[keys[i3]];
      }
    }
    exports.enable(load());
  }
});
var require_src = __commonJS2({
  "node_modules/morgan/node_modules/debug/src/index.js"(exports, module) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});
var require_depd = __commonJS2({
  "node_modules/morgan/node_modules/depd/index.js"(exports, module) {
    var relative = __require3("path").relative;
    module.exports = depd;
    var basePath = process.cwd();
    function containsNamespace(str, namespace) {
      var vals = str.split(/[ ,]+/);
      var ns = String(namespace).toLowerCase();
      for (var i3 = 0; i3 < vals.length; i3++) {
        var val = vals[i3];
        if (val && (val === "*" || val.toLowerCase() === ns)) {
          return true;
        }
      }
      return false;
    }
    function convertDataDescriptorToAccessor(obj, prop, message) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      var value = descriptor.value;
      descriptor.get = function getter() {
        return value;
      };
      if (descriptor.writable) {
        descriptor.set = function setter(val) {
          return value = val;
        };
      }
      delete descriptor.value;
      delete descriptor.writable;
      Object.defineProperty(obj, prop, descriptor);
      return descriptor;
    }
    function createArgumentsString(arity) {
      var str = "";
      for (var i3 = 0; i3 < arity; i3++) {
        str += ", arg" + i3;
      }
      return str.substr(2);
    }
    function createStackString(stack) {
      var str = this.name + ": " + this.namespace;
      if (this.message) {
        str += " deprecated " + this.message;
      }
      for (var i3 = 0; i3 < stack.length; i3++) {
        str += "\n    at " + stack[i3].toString();
      }
      return str;
    }
    function depd(namespace) {
      if (!namespace) {
        throw new TypeError("argument namespace is required");
      }
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      var file = site[0];
      function deprecate(message) {
        log.call(deprecate, message);
      }
      deprecate._file = file;
      deprecate._ignored = isignored(namespace);
      deprecate._namespace = namespace;
      deprecate._traced = istraced(namespace);
      deprecate._warned = /* @__PURE__ */ Object.create(null);
      deprecate.function = wrapfunction;
      deprecate.property = wrapproperty;
      return deprecate;
    }
    function eehaslisteners(emitter, type) {
      var count = typeof emitter.listenerCount !== "function" ? emitter.listeners(type).length : emitter.listenerCount(type);
      return count > 0;
    }
    function isignored(namespace) {
      if (process.noDeprecation) {
        return true;
      }
      var str = process.env.NO_DEPRECATION || "";
      return containsNamespace(str, namespace);
    }
    function istraced(namespace) {
      if (process.traceDeprecation) {
        return true;
      }
      var str = process.env.TRACE_DEPRECATION || "";
      return containsNamespace(str, namespace);
    }
    function log(message, site) {
      var haslisteners = eehaslisteners(process, "deprecation");
      if (!haslisteners && this._ignored) {
        return;
      }
      var caller;
      var callFile;
      var callSite;
      var depSite;
      var i3 = 0;
      var seen = false;
      var stack = getStack();
      var file = this._file;
      if (site) {
        depSite = site;
        callSite = callSiteLocation(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
      } else {
        i3 = 2;
        depSite = callSiteLocation(stack[i3]);
        callSite = depSite;
      }
      for (; i3 < stack.length; i3++) {
        caller = callSiteLocation(stack[i3]);
        callFile = caller[0];
        if (callFile === file) {
          seen = true;
        } else if (callFile === this._file) {
          file = this._file;
        } else if (seen) {
          break;
        }
      }
      var key = caller ? depSite.join(":") + "__" + caller.join(":") : void 0;
      if (key !== void 0 && key in this._warned) {
        return;
      }
      this._warned[key] = true;
      var msg = message;
      if (!msg) {
        msg = callSite === depSite || !callSite.name ? defaultMessage(depSite) : defaultMessage(callSite);
      }
      if (haslisteners) {
        var err = DeprecationError(this._namespace, msg, stack.slice(i3));
        process.emit("deprecation", err);
        return;
      }
      var format = process.stderr.isTTY ? formatColor : formatPlain;
      var output = format.call(this, msg, caller, stack.slice(i3));
      process.stderr.write(output + "\n", "utf8");
    }
    function callSiteLocation(callSite) {
      var file = callSite.getFileName() || "<anonymous>";
      var line = callSite.getLineNumber();
      var colm = callSite.getColumnNumber();
      if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ", " + file;
      }
      var site = [file, line, colm];
      site.callSite = callSite;
      site.name = callSite.getFunctionName();
      return site;
    }
    function defaultMessage(site) {
      var callSite = site.callSite;
      var funcName = site.name;
      if (!funcName) {
        funcName = "<anonymous@" + formatLocation(site) + ">";
      }
      var context = callSite.getThis();
      var typeName = context && callSite.getTypeName();
      if (typeName === "Object") {
        typeName = void 0;
      }
      if (typeName === "Function") {
        typeName = context.name || typeName;
      }
      return typeName && callSite.getMethodName() ? typeName + "." + funcName : funcName;
    }
    function formatPlain(msg, caller, stack) {
      var timestamp = new Date().toUTCString();
      var formatted = timestamp + " " + this._namespace + " deprecated " + msg;
      if (this._traced) {
        for (var i3 = 0; i3 < stack.length; i3++) {
          formatted += "\n    at " + stack[i3].toString();
        }
        return formatted;
      }
      if (caller) {
        formatted += " at " + formatLocation(caller);
      }
      return formatted;
    }
    function formatColor(msg, caller, stack) {
      var formatted = "\x1B[36;1m" + this._namespace + "\x1B[22;39m \x1B[33;1mdeprecated\x1B[22;39m \x1B[0m" + msg + "\x1B[39m";
      if (this._traced) {
        for (var i3 = 0; i3 < stack.length; i3++) {
          formatted += "\n    \x1B[36mat " + stack[i3].toString() + "\x1B[39m";
        }
        return formatted;
      }
      if (caller) {
        formatted += " \x1B[36m" + formatLocation(caller) + "\x1B[39m";
      }
      return formatted;
    }
    function formatLocation(callSite) {
      return relative(basePath, callSite[0]) + ":" + callSite[1] + ":" + callSite[2];
    }
    function getStack() {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;
      Error.prepareStackTrace = prepareObjectStackTrace;
      Error.stackTraceLimit = Math.max(10, limit);
      Error.captureStackTrace(obj);
      var stack = obj.stack.slice(1);
      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;
      return stack;
    }
    function prepareObjectStackTrace(obj, stack) {
      return stack;
    }
    function wrapfunction(fn, message) {
      if (typeof fn !== "function") {
        throw new TypeError("argument fn must be a function");
      }
      var args = createArgumentsString(fn.length);
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      site.name = fn.name;
      var deprecatedfn = new Function("fn", "log", "deprecate", "message", "site", '"use strict"\nreturn function (' + args + ") {log.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n}")(fn, log, this, message, site);
      return deprecatedfn;
    }
    function wrapproperty(obj, prop, message) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new TypeError("argument obj must be object");
      }
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (!descriptor) {
        throw new TypeError("must call property on owner object");
      }
      if (!descriptor.configurable) {
        throw new TypeError("property must be configurable");
      }
      var deprecate = this;
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      site.name = prop;
      if ("value" in descriptor) {
        descriptor = convertDataDescriptorToAccessor(obj, prop, message);
      }
      var get = descriptor.get;
      var set = descriptor.set;
      if (typeof get === "function") {
        descriptor.get = function getter() {
          log.call(deprecate, message, site);
          return get.apply(this, arguments);
        };
      }
      if (typeof set === "function") {
        descriptor.set = function setter() {
          log.call(deprecate, message, site);
          return set.apply(this, arguments);
        };
      }
      Object.defineProperty(obj, prop, descriptor);
    }
    function DeprecationError(namespace, message, stack) {
      var error = new Error();
      var stackString;
      Object.defineProperty(error, "constructor", {
        value: DeprecationError
      });
      Object.defineProperty(error, "message", {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });
      Object.defineProperty(error, "name", {
        enumerable: false,
        configurable: true,
        value: "DeprecationError",
        writable: true
      });
      Object.defineProperty(error, "namespace", {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
      });
      Object.defineProperty(error, "stack", {
        configurable: true,
        enumerable: false,
        get: function() {
          if (stackString !== void 0) {
            return stackString;
          }
          return stackString = createStackString.call(this, stack);
        },
        set: function setter(val) {
          stackString = val;
        }
      });
      return error;
    }
  }
});
var require_ee_first = __commonJS2({
  "node_modules/ee-first/index.js"(exports, module) {
    "use strict";
    module.exports = first;
    function first(stuff, done) {
      if (!Array.isArray(stuff))
        throw new TypeError("arg must be an array of [ee, events...] arrays");
      var cleanups = [];
      for (var i3 = 0; i3 < stuff.length; i3++) {
        var arr = stuff[i3];
        if (!Array.isArray(arr) || arr.length < 2)
          throw new TypeError("each array member must be [ee, events...]");
        var ee42 = arr[0];
        for (var j42 = 1; j42 < arr.length; j42++) {
          var event = arr[j42];
          var fn = listener(event, callback);
          ee42.on(event, fn);
          cleanups.push({
            ee: ee42,
            event,
            fn
          });
        }
      }
      function callback() {
        cleanup();
        done.apply(null, arguments);
      }
      function cleanup() {
        var x42;
        for (var i4 = 0; i4 < cleanups.length; i4++) {
          x42 = cleanups[i4];
          x42.ee.removeListener(x42.event, x42.fn);
        }
      }
      function thunk(fn2) {
        done = fn2;
      }
      thunk.cancel = cleanup;
      return thunk;
    }
    function listener(event, done) {
      return function onevent(arg1) {
        var args = new Array(arguments.length);
        var ee42 = this;
        var err = event === "error" ? arg1 : null;
        for (var i3 = 0; i3 < args.length; i3++) {
          args[i3] = arguments[i3];
        }
        done(err, ee42, event, args);
      };
    }
  }
});
var require_on_finished = __commonJS2({
  "node_modules/on-finished/index.js"(exports, module) {
    "use strict";
    module.exports = onFinished;
    module.exports.isFinished = isFinished;
    var first = require_ee_first();
    var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
      process.nextTick(fn.bind.apply(fn, arguments));
    };
    function onFinished(msg, listener) {
      if (isFinished(msg) !== false) {
        defer(listener, null, msg);
        return msg;
      }
      attachListener(msg, listener);
      return msg;
    }
    function isFinished(msg) {
      var socket = msg.socket;
      if (typeof msg.finished === "boolean") {
        return Boolean(msg.finished || socket && !socket.writable);
      }
      if (typeof msg.complete === "boolean") {
        return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
      }
      return void 0;
    }
    function attachFinishedListener(msg, callback) {
      var eeMsg;
      var eeSocket;
      var finished = false;
      function onFinish(error) {
        eeMsg.cancel();
        eeSocket.cancel();
        finished = true;
        callback(error);
      }
      eeMsg = eeSocket = first([[msg, "end", "finish"]], onFinish);
      function onSocket(socket) {
        msg.removeListener("socket", onSocket);
        if (finished)
          return;
        if (eeMsg !== eeSocket)
          return;
        eeSocket = first([[socket, "error", "close"]], onFinish);
      }
      if (msg.socket) {
        onSocket(msg.socket);
        return;
      }
      msg.on("socket", onSocket);
      if (msg.socket === void 0) {
        patchAssignSocket(msg, onSocket);
      }
    }
    function attachListener(msg, listener) {
      var attached = msg.__onFinished;
      if (!attached || !attached.queue) {
        attached = msg.__onFinished = createListener(msg);
        attachFinishedListener(msg, attached);
      }
      attached.queue.push(listener);
    }
    function createListener(msg) {
      function listener(err) {
        if (msg.__onFinished === listener)
          msg.__onFinished = null;
        if (!listener.queue)
          return;
        var queue = listener.queue;
        listener.queue = null;
        for (var i3 = 0; i3 < queue.length; i3++) {
          queue[i3](err, msg);
        }
      }
      listener.queue = [];
      return listener;
    }
    function patchAssignSocket(res, callback) {
      var assignSocket = res.assignSocket;
      if (typeof assignSocket !== "function")
        return;
      res.assignSocket = function _assignSocket(socket) {
        assignSocket.call(this, socket);
        callback(socket);
      };
    }
  }
});
var require_on_headers = __commonJS2({
  "node_modules/on-headers/index.js"(exports, module) {
    "use strict";
    module.exports = onHeaders;
    function createWriteHead(prevWriteHead, listener) {
      var fired = false;
      return function writeHead(statusCode) {
        var args = setWriteHeadHeaders.apply(this, arguments);
        if (!fired) {
          fired = true;
          listener.call(this);
          if (typeof args[0] === "number" && this.statusCode !== args[0]) {
            args[0] = this.statusCode;
            args.length = 1;
          }
        }
        return prevWriteHead.apply(this, args);
      };
    }
    function onHeaders(res, listener) {
      if (!res) {
        throw new TypeError("argument res is required");
      }
      if (typeof listener !== "function") {
        throw new TypeError("argument listener must be a function");
      }
      res.writeHead = createWriteHead(res.writeHead, listener);
    }
    function setHeadersFromArray(res, headers) {
      for (var i3 = 0; i3 < headers.length; i3++) {
        res.setHeader(headers[i3][0], headers[i3][1]);
      }
    }
    function setHeadersFromObject(res, headers) {
      var keys = Object.keys(headers);
      for (var i3 = 0; i3 < keys.length; i3++) {
        var k42 = keys[i3];
        if (k42)
          res.setHeader(k42, headers[k42]);
      }
    }
    function setWriteHeadHeaders(statusCode) {
      var length = arguments.length;
      var headerIndex = length > 1 && typeof arguments[1] === "string" ? 2 : 1;
      var headers = length >= headerIndex + 1 ? arguments[headerIndex] : void 0;
      this.statusCode = statusCode;
      if (Array.isArray(headers)) {
        setHeadersFromArray(this, headers);
      } else if (headers) {
        setHeadersFromObject(this, headers);
      }
      var args = new Array(Math.min(length, headerIndex));
      for (var i3 = 0; i3 < args.length; i3++) {
        args[i3] = arguments[i3];
      }
      return args;
    }
  }
});
var require_morgan = __commonJS2({
  "node_modules/morgan/index.js"(exports, module) {
    "use strict";
    module.exports = morgan2;
    module.exports.compile = compile;
    module.exports.format = format;
    module.exports.token = token;
    var auth = require_basic_auth();
    var debug = require_src()("morgan");
    var deprecate = require_depd()("morgan");
    var onFinished = require_on_finished();
    var onHeaders = require_on_headers();
    var CLF_MONTH = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var DEFAULT_BUFFER_DURATION = 1e3;
    function morgan2(format2, options) {
      var fmt = format2;
      var opts = options || {};
      if (format2 && typeof format2 === "object") {
        opts = format2;
        fmt = opts.format || "default";
        deprecate("morgan(options): use morgan(" + (typeof fmt === "string" ? JSON.stringify(fmt) : "format") + ", options) instead");
      }
      if (fmt === void 0) {
        deprecate("undefined format: specify a format");
      }
      var immediate = opts.immediate;
      var skip = opts.skip || false;
      var formatLine = typeof fmt !== "function" ? getFormatFunction(fmt) : fmt;
      var buffer = opts.buffer;
      var stream = opts.stream || process.stdout;
      if (buffer) {
        deprecate("buffer option");
        var interval = typeof buffer !== "number" ? DEFAULT_BUFFER_DURATION : buffer;
        stream = createBufferStream(stream, interval);
      }
      return function logger42(req, res, next) {
        req._startAt = void 0;
        req._startTime = void 0;
        req._remoteAddress = getip(req);
        res._startAt = void 0;
        res._startTime = void 0;
        recordStartTime.call(req);
        function logRequest() {
          if (skip !== false && skip(req, res)) {
            debug("skip request");
            return;
          }
          var line = formatLine(morgan2, req, res);
          if (line == null) {
            debug("skip line");
            return;
          }
          debug("log request");
          stream.write(line + "\n");
        }
        ;
        if (immediate) {
          logRequest();
        } else {
          onHeaders(res, recordStartTime);
          onFinished(res, logRequest);
        }
        next();
      };
    }
    morgan2.format("combined", ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
    morgan2.format("common", ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]');
    morgan2.format("default", ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
    deprecate.property(morgan2, "default", "default format: use combined format");
    morgan2.format("short", ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms");
    morgan2.format("tiny", ":method :url :status :res[content-length] - :response-time ms");
    morgan2.format("dev", function developmentFormatLine(tokens, req, res) {
      var status = headersSent(res) ? res.statusCode : void 0;
      var color = status >= 500 ? 31 : status >= 400 ? 33 : status >= 300 ? 36 : status >= 200 ? 32 : 0;
      var fn = developmentFormatLine[color];
      if (!fn) {
        fn = developmentFormatLine[color] = compile("\x1B[0m:method :url \x1B[" + color + "m:status\x1B[0m :response-time ms - :res[content-length]\x1B[0m");
      }
      return fn(tokens, req, res);
    });
    morgan2.token("url", function getUrlToken(req) {
      return req.originalUrl || req.url;
    });
    morgan2.token("method", function getMethodToken(req) {
      return req.method;
    });
    morgan2.token("response-time", function getResponseTimeToken(req, res, digits) {
      if (!req._startAt || !res._startAt) {
        return;
      }
      var ms = (res._startAt[0] - req._startAt[0]) * 1e3 + (res._startAt[1] - req._startAt[1]) * 1e-6;
      return ms.toFixed(digits === void 0 ? 3 : digits);
    });
    morgan2.token("total-time", function getTotalTimeToken(req, res, digits) {
      if (!req._startAt || !res._startAt) {
        return;
      }
      var elapsed = process.hrtime(req._startAt);
      var ms = elapsed[0] * 1e3 + elapsed[1] * 1e-6;
      return ms.toFixed(digits === void 0 ? 3 : digits);
    });
    morgan2.token("date", function getDateToken(req, res, format2) {
      var date = new Date();
      switch (format2 || "web") {
        case "clf":
          return clfdate(date);
        case "iso":
          return date.toISOString();
        case "web":
          return date.toUTCString();
      }
    });
    morgan2.token("status", function getStatusToken(req, res) {
      return headersSent(res) ? String(res.statusCode) : void 0;
    });
    morgan2.token("referrer", function getReferrerToken(req) {
      return req.headers.referer || req.headers.referrer;
    });
    morgan2.token("remote-addr", getip);
    morgan2.token("remote-user", function getRemoteUserToken(req) {
      var credentials = auth(req);
      return credentials ? credentials.name : void 0;
    });
    morgan2.token("http-version", function getHttpVersionToken(req) {
      return req.httpVersionMajor + "." + req.httpVersionMinor;
    });
    morgan2.token("user-agent", function getUserAgentToken(req) {
      return req.headers["user-agent"];
    });
    morgan2.token("req", function getRequestToken(req, res, field) {
      var header = req.headers[field.toLowerCase()];
      return Array.isArray(header) ? header.join(", ") : header;
    });
    morgan2.token("res", function getResponseHeader(req, res, field) {
      if (!headersSent(res)) {
        return void 0;
      }
      var header = res.getHeader(field);
      return Array.isArray(header) ? header.join(", ") : header;
    });
    function clfdate(dateTime) {
      var date = dateTime.getUTCDate();
      var hour = dateTime.getUTCHours();
      var mins = dateTime.getUTCMinutes();
      var secs = dateTime.getUTCSeconds();
      var year = dateTime.getUTCFullYear();
      var month = CLF_MONTH[dateTime.getUTCMonth()];
      return pad2(date) + "/" + month + "/" + year + ":" + pad2(hour) + ":" + pad2(mins) + ":" + pad2(secs) + " +0000";
    }
    function compile(format2) {
      if (typeof format2 !== "string") {
        throw new TypeError("argument format must be a string");
      }
      var fmt = String(JSON.stringify(format2));
      var js = '  "use strict"\n  return ' + fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function(_3, name, arg) {
        var tokenArguments = "req, res";
        var tokenFunction = "tokens[" + String(JSON.stringify(name)) + "]";
        if (arg !== void 0) {
          tokenArguments += ", " + String(JSON.stringify(arg));
        }
        return '" +\n    (' + tokenFunction + "(" + tokenArguments + ') || "-") + "';
      });
      return new Function("tokens, req, res", js);
    }
    function createBufferStream(stream, interval) {
      var buf = [];
      var timer = null;
      function flush() {
        timer = null;
        stream.write(buf.join(""));
        buf.length = 0;
      }
      function write(str) {
        if (timer === null) {
          timer = setTimeout(flush, interval);
        }
        buf.push(str);
      }
      return { write };
    }
    function format(name, fmt) {
      morgan2[name] = fmt;
      return this;
    }
    function getFormatFunction(name) {
      var fmt = morgan2[name] || name || morgan2.default;
      return typeof fmt !== "function" ? compile(fmt) : fmt;
    }
    function getip(req) {
      return req.ip || req._remoteAddress || req.connection && req.connection.remoteAddress || void 0;
    }
    function headersSent(res) {
      return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
    }
    function pad2(num) {
      var str = String(num);
      return (str.length === 1 ? "0" : "") + str;
    }
    function recordStartTime() {
      this._startAt = process.hrtime();
      this._startTime = new Date();
    }
    function token(name, fn) {
      morgan2[name] = fn;
      return this;
    }
  }
});
var aa2 = class {
  analytics(e32) {
  }
  critical(e32) {
  }
  debug(e32) {
  }
  async exception(e32) {
    console.log(e32);
  }
  http(e32) {
  }
  async info(e32) {
    console.log(e32);
  }
  warning(e32) {
  }
  constructor(e32) {
  }
};
var Re2 = aa2;
var ia2 = ((e32) => (e32.Comment = "comment", e32.Create = "create", e32.Delete = "delete", e32.Edit = "edit", e32.Invoice = "invoice", e32.Message = "message", e32.PageView = "pageView", e32.Paid = "paid", e32.Payment = "payment", e32.Purchase = "purchase", e32.Referral = "referral", e32.Renewal = "renewal", e32.Signup = "signup", e32.Subscription = "subscription", e32.Upgrade = "upgrade", e32))(ia2 || {});
var na2 = ((e32) => (e32.Business = "business", e32.Engineering = "engineering", e32.Exception = "exception", e32.LogMessage = "log-message", e32.Marketing = "marketing", e32.PageLeave = "page-leave", e32.PageView = "page-view", e32.Product = "product", e32.QualityManagement = "quality-management", e32.UserAccess = "user-access", e32.UserLogin = "user-login", e32.UserLogout = "user-logout", e32.UserSignup = "user-signup", e32.UserPreferencesChanged = "user-preferences-changed", e32.WebsiteVisit = "website-visit", e32))(na2 || {});
var sa2 = ((e32) => (e32.CloseTab = "close-tab", e32.ExternalLink = "external-link", e32.NavigateAway = "navigate-away", e32.Unknown = "unknown", e32))(sa2 || {});
var ta2 = ((e32) => (e32.Ecs = "Ecs", e32))(ta2 || {});
var oa2 = ((e32) => (e32.Finished = "Finished", e32.Queued = "Queued", e32.Running = "Running", e32.Started = "Started", e32))(oa2 || {});
var ua2 = ((e32) => (e32.Mobile = "mobile", e32.TV = "tv", e32.Watch = "watch", e32.Web = "web", e32))(ua2 || {});
var ra2 = ((e32) => (e32.Development = "Development", e32.NonProduction = "NonProduction", e32.Production = "Production", e32))(ra2 || {});
var ma2 = ((e32) => (e32.Completed = "completed", e32.Started = "started", e32.Uncompleted = "uncompleted", e32))(ma2 || {});
var la2 = ((e32) => (e32.Build = "Build", e32.Deployment = "Deployment", e32.Test = "Test", e32))(la2 || {});
var da2 = ((e32) => (e32.Canceled = "Canceled", e32.Completed = "Completed", e32.Failed = "Failed", e32.Running = "Running", e32.Queued = "Queued", e32.Waiting = "Waiting", e32))(da2 || {});
var ca2 = ((e32) => (e32.Canceled = "Canceled", e32.Completed = "Completed", e32.Failed = "Failed", e32.Running = "Running", e32.Queued = "Queued", e32.Waiting = "Waiting", e32))(ca2 || {});
var Aa2 = ((e32) => (e32.ForgotPassword = "forgot_password", e32.Index = "index", e32.Login = "login", e32.PageNotFound = "404", e32.Signup = "signup", e32.VerifyCode = "verify_code", e32))(Aa2 || {});
var ga2 = ((e32) => (e32.Info = "info", e32.Warning = "warning", e32.Error = "error", e32.Success = "success", e32))(ga2 || {});
var Ta2 = ((e32) => (e32.Details = "details", e32.Dialog = "dialog", e32))(Ta2 || {});
var pa2 = ((e32) => (e32.Info = "info", e32.Warning = "warning", e32.Error = "error", e32.Success = "success", e32))(pa2 || {});
var Ea2 = ((e32) => (e32.AccountBalance = "AccountBalance", e32.UserAssets = "UserAssets", e32.UserCreditCardDebt = "UserCreditCardDebt", e32.UserCreditLimit = "UserCreditLimit", e32.UserCreditUtilization = "UserCreditUtilization", e32.UserDebt = "UserDebt", e32.UserInvestments = "UserInvestments", e32.UserRetirement = "UserRetirement", e32.UserSavings = "UserSavings", e32))(Ea2 || {});
var fa2 = ((e32) => (e32.DateTime = "date_time", e32.True = "true", e32.False = "false", e32.UniqueId = "unique_id", e32))(fa2 || {});
var ha2 = ((e32) => (e32.DomainModel = "domain_entity", e32.GenericModel = "generic_entity", e32))(ha2 || {});
var Ca2 = ((e32) => (e32.AirportCode = "airport-code", e32.BankIDCode = "bank-id-code", e32.BitcoinAddress = "bitcoin-address", e32.Boolean = "boolean", e32.City = "city", e32.Color = "color", e32.CountryCode = "country-code", e32.CreditCard = "credit-card", e32.CurrencyAmount = "currency-amount", e32.CurrencyCode = "currency-code", e32.DataURI = "data-uri", e32.Date = "date", e32.DateRange = "date-range", e32.DateTime = "date-time", e32.DayOfMonth = "day-of-month", e32.DomainName = "domain-name", e32.EmailAddress = "email-address", e32.EthereumAddress = "ethereum-address", e32.EAN = "european-article-number", e32.EIN = "employer-identification-number", e32.Float = "float", e32.GeographicCoordinate = "geographic-coordinate", e32.GeographicCoordinates = "geographic-coordinates", e32.GitRepositoryURL = "git-repository-url", e32.HSLColor = "hsl-color", e32.HexColor = "hex-color", e32.Hexadecimal = "hexadecimal", e32.IBAN = "international-bank-account-number", e32.IMEI = "international-mobile-equipment-identifier", e32.IPAddress = "ip-address", e32.IPAddressRange = "ip-address-range", e32.ISBN = "international-standard-book-number", e32.ISIN = "international-stock-number", e32.ISMN = "international-standard-music-number", e32.ISSN = "international-standard-serial-number", e32.ISO8601 = "iso-8601", e32.ISO31661Alpha2 = "iso-31661-alpha-2", e32.ISO31661Alpha3 = "iso-31661-alpha-3", e32.ISO4217 = "iso-4217", e32.Image = "image", e32.Integer = "integer", e32.JSON = "json", e32.LanguageCode = "language-code", e32.LicensePlateNumber = "license-plate-number", e32.LongText = "long-text", e32.MD5 = "md5", e32.Markdown = "markdown", e32.Menu = "menu", e32.Number = "number", e32.MACAddress = "mac-address", e32.MagnetURI = "magnet-uri", e32.MimeType = "mime-type", e32.Month = "month", e32.Password = "password", e32.PassportNumber = "passport-number", e32.Percent = "percent", e32.PhoneNumber = "phone-number", e32.Port = "port", e32.PostalCode = "postal-code", e32.Province = "province", e32.RFC3339 = "rfc-3339", e32.RGBColor = "rgb-color", e32.SemanticVersion = "semantic-version", e32.SSN = "social-security-number", e32.State = "state", e32.StreetAddress = "street-address", e32.String = "string", e32.Tags = "tags", e32.TaxIDNumber = "tax-id-number", e32.Time = "time", e32.TimeOfDay = "time-of-day", e32.TimeRange = "time-range", e32.TimezoneRegion = "timezone-region", e32.URL = "url", e32.URLPath = "url-path", e32.UUID = "uuid", e32.VATIDNumber = "value-added-tax-id-number", e32.VerificationCode = "verification-code", e32.Video = "video", e32.Weekday = "weekday", e32.Year = "year", e32))(Ca2 || {});
var Ia2 = ((e32) => (e32.Critical = "Critical", e32.Error = "Error", e32.Fatal = "Fatal", e32.Warning = "Warning", e32))(Ia2 || {});
var va2 = ((e32) => (e32.Contains = "contains", e32.HasCharacterCount = "has-character-count", e32.HasNumberCount = "has-number-count", e32.HasLetterCount = "has-letter-count", e32.HasLowercaseCount = "has-lowercase-count", e32.HasSpacesCount = "has-spaces-count", e32.HasSymbolCount = "has-symbol-count", e32.HasUppercaseCount = "has-uppercase-count", e32.IsAfter = "is-after", e32.IsAfterOrEqual = "is-after-or-equal", e32.IsAirport = "is-airport", e32.IsAlpha = "is-alpha", e32.IsAlphanumeric = "is-alphanumeric", e32.IsAlgorithmHash = "is-algorithm-hash", e32.IsAscii = "is-ascii", e32.IsBase64 = "is-base-64", e32.IsBefore = "is-before", e32.IsBeforeOrAfter = "is-before-or-after", e32.IsBeforeOrEqual = "is-before-or-equal", e32.IsBetween = "is-between", e32.IsBIC = "is-bic", e32.IsBitcoinAddress = "is-bitcoin-address", e32.IsBoolean = "is-boolean", e32.IsColor = "is-color", e32.IsComplexEnough = "is-complex-enough", e32.IsCountry = "is-country", e32.IsCreditCard = "is-credit-card", e32.IsCurrency = "is-currency", e32.IsDataURI = "is-data-uri", e32.IsDate = "is-date", e32.IsDateRange = "is-date-range", e32.IsDateTime = "is-date-time", e32.IsDayOfMonth = "is-day-of-month", e32.IsDecimal = "is-decimal", e32.IsDivisibleBy = "is-divisible-by", e32.IsDomainName = "is-domain-name", e32.IsEmailAddress = "is-email-address", e32.IsEthereumAddress = "is-ethereum-address", e32.IsEAN = "is-ean", e32.IsEIN = "is-ein", e32.IsEqual = "is-equal", e32.IsEvenNumber = "is-even-number", e32.IsFloat = "is-float", e32.IsIBAN = "is-iban", e32.IsGreaterThan = "greater-than", e32.IsGreaterThanOrEqual = "greater-than-or-equal", e32.IsHSLColor = "is-hsl-color", e32.IsHexColor = "is-hex-color", e32.IsHexadecimal = "is-hexadecimal", e32.IsIdentityCardCode = "is-identity-card-code", e32.IsIMEI = "is-imei", e32.IsInIPAddressRange = "is-in-ip-address-range", e32.IsInList = "is-in-list", e32.IsInTheLast = "is-in-the-last", e32.IsInteger = "is-integer", e32.IsIPAddress = "is-ip-address", e32.IsIPAddressRange = "is-ip-address-range", e32.IsISBN = "is-isbn", e32.IsISIN = "is-isin", e32.IsISMN = "is-ismn", e32.IsISRC = "is-isrc", e32.IsISSN = "is-issn", e32.IsISO4217 = "is-iso-4217", e32.IsISO8601 = "is-iso-8601", e32.IsISO31661Alpha2 = "is-iso-31661-alpha-2", e32.IsISO31661Alpha3 = "is-iso-31661-alpha-3", e32.IsJSON = "is-json", e32.IsLanguage = "is-language", e32.IsLatitude = "is-latitude", e32.IsLongitude = "is-longitude", e32.IsLengthEqual = "is-length-equal", e32.IsLengthGreaterThan = "is-length-greater-than", e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", e32.IsLengthLessThan = "is-length-less-than", e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", e32.IsLessThan = "less-than", e32.IsLessThanOrEqual = "less-than-or-equal", e32.IsLicensePlateNumber = "is-license-plate-number", e32.IsLowercase = "is-lowercase", e32.IsOctal = "is-octal", e32.IsMACAddress = "is-mac-address", e32.IsMD5 = "is-md5", e32.IsMagnetURI = "is-magnet-uri", e32.IsMarkdown = "is-markdown", e32.IsMimeType = "is-mime-type", e32.IsMonth = "is-month", e32.IsNegativeNumber = "is-negative-number", e32.IsNotDate = "is-not-date", e32.IsNotEqual = "is-not-equal", e32.IsNotInIPAddressRange = "is-not-in-ip-address-range", e32.IsNotInList = "is-not-in-list", e32.IsNotNull = "is-not-null", e32.IsNotRegexMatch = "is-not-regex-match", e32.IsNotToday = "is-not-today", e32.IsNumber = "is-number", e32.IsNumeric = "is-numeric", e32.IsOddNumber = "is-odd-number", e32.IsPassportNumber = "is-passport-number", e32.IsPhoneNumber = "is-phone-number", e32.IsPort = "is-port", e32.IsPositiveNumber = "is-positive-number", e32.IsPostalCode = "is-postal-code", e32.IsProvince = "is-province", e32.IsRGBColor = "is-rgb-color", e32.IsRegexMatch = "is-regex-match", e32.IsRequired = "is-required", e32.IsSemanticVersion = "is-semantic-version", e32.IsSlug = "is-slug", e32.IsSSN = "is-ssn", e32.IsState = "is-state", e32.IsStreetAddress = "is-street-address", e32.IsString = "is-string", e32.IsStrongPassword = "is-strong-password", e32.IsTags = "is-tags", e32.IsTaxIDNumber = "is-tax-id-number", e32.IsThisMonth = "is-this-month", e32.IsThisQuarter = "is-this-quarter", e32.IsThisWeek = "is-this-week", e32.IsThisWeekend = "is-this-weekend", e32.IsThisYear = "is-this-year", e32.IsTime = "is-time", e32.IsTimeOfDay = "is-time-of-day", e32.IsTimeRange = "is-time-range", e32.IsToday = "is-today", e32.IsURL = "is-url", e32.IsUUID = "is-uuid", e32.IsUppercase = "is-uppercase", e32.IsUsernameAvailable = "is-username-available", e32.IsValidStreetAddress = "is-valid-street-address", e32.IsVATIDNumber = "is-vat-id-number", e32.IsWeekday = "is-weekday", e32.IsWeekend = "is-weekend", e32.IsYear = "is-year", e32))(va2 || {});
var Sa2 = ((e32) => (e32.IsAuthenticated = "is-authenticated", e32.IsNotAuthenticated = "is-not-authenticated", e32.IsUsernameAvailable = "is-username-available", e32.PasswordMismatch = "password-mismatch", e32))(Sa2 || {});
var ba2 = ((e32) => (e32[e32.IsHSLColor = "is-hsl-color"] = "IsHSLColor", e32[e32.IsHexColor = "is-hex-color"] = "IsHexColor", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsRGBColor = "is-rgb-color"] = "IsRGBColor", e32[e32.IsString = "is-string"] = "IsString", e32))(ba2 || {});
var ya2 = ((e32) => (e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsCurrency = "is-currency"] = "IsCurrency", e32[e32.IsDecimal = "is-decimal"] = "IsDecimal", e32[e32.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsFloat = "is-float"] = "IsFloat", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsISO8601 = "is-iso-8601"] = "IsISO8601", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", e32))(ya2 || {});
var _a2 = ((e32) => (e32[e32.IsBitcoinAddress = "is-bitcoin-address"] = "IsBitcoinAddress", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(_a2 || {});
var Ba2 = ((e32) => (e32[e32.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(Ba2 || {});
var Da2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsJSON = "is-json"] = "IsJSON", e32[e32.IsLanguage = "is-language"] = "IsLanguage", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(Da2 || {});
var Na2 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Na2 || {});
var Ua2 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsCountry = "is-country"] = "IsCountry", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ua2 || {});
var ka2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsFloat = "is-float"] = "IsFloat", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32))(ka2 || {});
var xa2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsFloat = "is-float"] = "IsFloat", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32))(xa2 || {});
var Fa2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsPostalCode = "is-postal-code"] = "IsPostalCode", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(Fa2 || {});
var Ma2 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsProvince = "is-province"] = "IsProvince", e32[e32.IsString = "is-string"] = "IsString", e32))(Ma2 || {});
var La2 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsState = "is-state"] = "IsState", e32[e32.IsString = "is-string"] = "IsString", e32))(La2 || {});
var Pa2 = ((e32) => (e32[e32.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsStreetAddress = "is-street-address"] = "IsStreetAddress", e32))(Pa2 || {});
var Ra2 = ((e32) => (e32[e32.IsAirport = "is-airport"] = "IsAirport", e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ra2 || {});
var za2 = ((e32) => (e32[e32.IsAlgorithmHash = "is-algorithm-hash"] = "IsAlgorithmHash", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(za2 || {});
var qa2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e32[e32.IsString = "is-string"] = "IsString", e32))(qa2 || {});
var Ga2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsUUID = "is-uuid"] = "IsUUID", e32))(Ga2 || {});
var Ka2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMD5 = "is-md5"] = "IsMD5", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ka2 || {});
var wa2 = ((e32) => (e32[e32.IsBoolean = "is-boolean"] = "IsBoolean", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(wa2 || {});
var Oa2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsDate = "is-date"] = "IsDate", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotDate = "is-not-date"] = "IsNotDate", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotToday = "is-not-today"] = "IsNotToday", e32[e32.IsThisWeek = "is-this-week"] = "IsThisWeek", e32[e32.IsThisMonth = "is-this-month"] = "IsThisMonth", e32[e32.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", e32[e32.IsThisYear = "is-this-year"] = "IsThisYear", e32[e32.IsToday = "is-today"] = "IsToday", e32[e32.IsWeekend = "is-weekend"] = "IsWeekend", e32))(Oa2 || {});
var Ha2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsDate = "is-date"] = "IsDate", e32[e32.IsDateRange = "is-date-range"] = "IsDateRange", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(Ha2 || {});
var Wa2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsDate = "is-date"] = "IsDate", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotDate = "is-not-date"] = "IsNotDate", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotToday = "is-not-today"] = "IsNotToday", e32[e32.IsThisWeek = "is-this-week"] = "IsThisWeek", e32[e32.IsThisMonth = "is-this-month"] = "IsThisMonth", e32[e32.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", e32[e32.IsThisYear = "is-this-year"] = "IsThisYear", e32[e32.IsToday = "is-today"] = "IsToday", e32[e32.IsWeekend = "is-weekend"] = "IsWeekend", e32))(Wa2 || {});
var Va2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsDayOfMonth = "is-day-of-month"] = "IsDayOfMonth", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsToday = "is-today"] = "IsToday", e32[e32.IsWeekday = "is-weekday"] = "IsWeekday", e32[e32.IsWeekend = "is-weekend"] = "IsWeekend", e32))(Va2 || {});
var ja2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsMonth = "is-month"] = "IsMonth", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsThisMonth = "is-this-month"] = "IsThisMonth", e32))(ja2 || {});
var Ya2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsTime = "is-time"] = "IsTime", e32))(Ya2 || {});
var Za2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsTime = "is-time"] = "IsTime", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsTimeRange = "is-time-range"] = "IsTimeRange", e32))(Za2 || {});
var Ja2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsTimeOfDay = "is-time-of-day"] = "IsTimeOfDay", e32[e32.IsTimeRange = "is-time-range"] = "IsTimeRange", e32))(Ja2 || {});
var Qa2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsWeekday = "is-weekday"] = "IsWeekday", e32[e32.IsWeekend = "is-weekend"] = "IsWeekend", e32))(Qa2 || {});
var $a2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsThisYear = "is-this-year"] = "IsThisYear", e32[e32.IsYear = "is-year"] = "IsYear", e32))($a2 || {});
var Xa2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", e32[e32.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e32[e32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e32[e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e32[e32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e32[e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Xa2 || {});
var ei2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsJSON = "is-json"] = "IsJSON", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(ei2 || {});
var ai2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsMarkdown = "is-markdown"] = "IsMarkdown", e32[e32.IsString = "is-string"] = "IsString", e32))(ai2 || {});
var ii2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(ii2 || {});
var ni2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(ni2 || {});
var si2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsDataURI = "is-data-uri"] = "IsDataURI", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(si2 || {});
var ti2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsDomainName = "is-domain-name"] = "IsDomainName", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ti2 || {});
var oi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(oi2 || {});
var ui2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIPAddress = "is-ip-address"] = "IsIPAddress", e32[e32.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ui2 || {});
var ri2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIPAddressRange = "is-ip-address-range"] = "IsIPAddressRange", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ri2 || {});
var mi2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(mi2 || {});
var li2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMACAddress = "is-mac-address"] = "IsMACAddress", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(li2 || {});
var di2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(di2 || {});
var ci2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMimeType = "is-mime-type"] = "IsMimeType", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ci2 || {});
var Ai2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsSlug = "is-slug"] = "IsSlug", e32))(Ai2 || {});
var gi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsURL = "is-url"] = "IsURL", e32))(gi2 || {});
var Ti2 = ((e32) => (e32[e32.IsAfter = "is-after"] = "IsAfter", e32[e32.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", e32[e32.IsBefore = "is-before"] = "IsBefore", e32[e32.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", e32[e32.IsBetween = "is-between"] = "IsBetween", e32[e32.IsDecimal = "is-decimal"] = "IsDecimal", e32[e32.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", e32[e32.IsEAN = "is-ean"] = "IsEAN", e32[e32.IsEIN = "is-ein"] = "IsEIN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsEvenNumber = "is-even-number"] = "IsEvenNumber", e32[e32.IsFloat = "is-float"] = "IsFloat", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInt = "is-integer"] = "IsInt", e32[e32.IsISBN = "is-isbn"] = "IsISBN", e32[e32.IsISMN = "is-ismn"] = "IsISMN", e32[e32.IsISSN = "is-issn"] = "IsISSN", e32[e32.IsLatitude = "is-latitude"] = "IsLatitude", e32[e32.IsLongitude = "is-longitude"] = "IsLongitude", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsMACAddress = "is-mac-address"] = "IsMACAddress", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsOddNumber = "is-odd-number"] = "IsOddNumber", e32[e32.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e32[e32.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e32[e32.IsPort = "is-port"] = "IsPort", e32[e32.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", e32[e32.IsPostalCode = "is-postal-code"] = "IsPostalCode", e32[e32.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e32[e32.IsSSN = "is-ssn"] = "IsSSN", e32[e32.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e32[e32.IsUUID = "is-uuid"] = "IsUUID", e32[e32.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e32))(Ti2 || {});
var pi2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsFloat = "is-float"] = "IsFloat", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32))(pi2 || {});
var Ei2 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32))(Ei2 || {});
var fi2 = ((e32) => (e32[e32.IsCreditCard = "is-credit-card"] = "IsCreditCard", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e32[e32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e32[e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e32[e32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e32[e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32))(fi2 || {});
var hi2 = ((e32) => (e32[e32.isEmailAddress = "is-email-address"] = "isEmailAddress", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e32[e32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e32[e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e32[e32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e32[e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32))(hi2 || {});
var Ci2 = ((e32) => (e32[e32.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32))(Ci2 || {});
var Ii2 = ((e32) => (e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32))(Ii2 || {});
var vi2 = ((e32) => (e32[e32.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32[e32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e32[e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e32[e32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e32[e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e32[e32.IsStrongPassword = "is-strong-password"] = "IsStrongPassword", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32))(vi2 || {});
var Si2 = ((e32) => (e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32))(Si2 || {});
var bi2 = ((e32) => (e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsSSN = "is-ssn"] = "IsSSN", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32))(bi2 || {});
var yi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsBIC = "is-bic"] = "IsBIC", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(yi2 || {});
var _i2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEAN = "is-ean"] = "IsEAN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(_i2 || {});
var Bi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEIN = "is-ein"] = "IsEIN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Bi2 || {});
var Di2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIBAN = "is-iban"] = "IsIBAN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Di2 || {});
var Ni2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISBN = "is-isbn"] = "IsISBN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ni2 || {});
var Ui2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISIN = "is-isin"] = "IsISIN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ui2 || {});
var ki2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISMN = "is-ismn"] = "IsISMN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ki2 || {});
var xi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISSN = "is-issn"] = "IsISSN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(xi2 || {});
var Fi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e32))(Fi2 || {});
var Mi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e32))(Mi2 || {});
var Li2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.HasNumberCount = "has-number-count"] = "HasNumberCount", e32[e32.HasLowercaseCount = "has-lowercase-count"] = "HasLowercaseCount", e32[e32.HasLetterCount = "has-letter-count"] = "HasLetterCount", e32[e32.HasSpacesCount = "has-spaces-count"] = "HasSpacesCount", e32[e32.HasSymbolCount = "has-symbol-count"] = "HasSymbolCount", e32[e32.HasUppercaseCount = "has-uppercase-count"] = "HasUppercaseCount", e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e32[e32.IsAscii = "is-ascii"] = "IsAscii", e32[e32.IsBase64 = "is-base-64"] = "IsBase64", e32[e32.IsColor = "is-color"] = "IsColor", e32[e32.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", e32[e32.IsCreditCard = "is-credit-card"] = "IsCreditCard", e32[e32.IsDataURI = "is-data-uri"] = "IsDataURI", e32[e32.IsDomainName = "is-domain-name"] = "IsDomainName", e32[e32.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e32[e32.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", e32[e32.IsEAN = "is-ean"] = "IsEAN", e32[e32.IsEIN = "is-ein"] = "IsEIN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIBAN = "is-iban"] = "IsIBAN", e32[e32.IsHSLColor = "is-hsl-color"] = "IsHSLColor", e32[e32.IsHexColor = "is-hex-color"] = "IsHexColor", e32[e32.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", e32[e32.IsIdentityCardCode = "is-identity-card-code"] = "IsIdentityCardCode", e32[e32.IsIMEI = "is-imei"] = "IsIMEI", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsIPAddress = "is-ip-address"] = "IsIPAddress", e32[e32.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", e32[e32.IsISBN = "is-isbn"] = "IsISBN", e32[e32.IsISIN = "is-isin"] = "IsISIN", e32[e32.IsISMN = "is-ismn"] = "IsISMN", e32[e32.IsISRC = "is-isrc"] = "IsISRC", e32[e32.IsISSN = "is-issn"] = "IsISSN", e32[e32.IsLanguage = "is-language"] = "IsLanguage", e32[e32.IsLatitude = "is-latitude"] = "IsLatitude", e32[e32.IsLongitude = "is-longitude"] = "IsLongitude", e32[e32.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", e32[e32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", e32[e32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", e32[e32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", e32[e32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", e32[e32.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", e32[e32.IsLowercase = "is-lowercase"] = "IsLowercase", e32[e32.IsOctal = "is-octal"] = "IsOctal", e32[e32.IsMACAddress = "is-mac-address"] = "IsMACAddress", e32[e32.IsMD5 = "is-md5"] = "IsMD5", e32[e32.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e32[e32.IsMarkdown = "is-markdown"] = "IsMarkdown", e32[e32.IsMimeType = "is-mime-type"] = "IsMimeType", e32[e32.IsMonth = "is-month"] = "IsMonth", e32[e32.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", e32[e32.IsNumber = "is-number"] = "IsNumber", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32[e32.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", e32[e32.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", e32[e32.IsPort = "is-port"] = "IsPort", e32[e32.IsPostalCode = "is-postal-code"] = "IsPostalCode", e32[e32.IsProvince = "is-province"] = "IsProvince", e32[e32.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", e32[e32.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", e32[e32.IsSlug = "is-slug"] = "IsSlug", e32[e32.IsSSN = "is-ssn"] = "IsSSN", e32[e32.IsState = "is-state"] = "IsState", e32[e32.IsStreetAddress = "is-street-address"] = "IsStreetAddress", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e32[e32.IsURL = "is-url"] = "IsURL", e32[e32.IsUUID = "is-uuid"] = "IsUUID", e32[e32.IsUppercase = "is-uppercase"] = "IsUppercase", e32[e32.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e32[e32.IsWeekday = "is-weekday"] = "IsWeekday", e32[e32.IsWeekend = "is-weekend"] = "IsWeekend", e32[e32.IsYear = "is-year"] = "IsYear", e32))(Li2 || {});
var Pi2 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMarkdown = "is-markdown"] = "IsMarkdown", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNumeric = "is-numeric"] = "IsNumeric", e32[e32.IsLowercase = "is-lowercase"] = "IsLowercase", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsUppercase = "is-uppercase"] = "IsUppercase", e32))(Pi2 || {});
var Ri2 = ((e32) => (e32.InvalidCharacters = "invalid-characters", e32.InvalidPattern = "invalid-pattern", e32.NotComplexEnough = "not-complex-enough", e32.NotUnique = "not-unique", e32.NotValidEmail = "not-valid-email", e32.TooLong = "too-long", e32.TooShort = "too-short", e32.Required = "required", e32))(Ri2 || {});
var zi2 = ((e32) => (e32[e32.Allowed = 0] = "Allowed", e32[e32.Blocked = 1] = "Blocked", e32))(zi2 || {});
var qi2 = ((e32) => (e32.Canceled = "Canceled", e32.Completed = "Completed", e32.Created = "Created", e32.Faulted = "Faulted", e32.Queued = "Queued", e32.Running = "Running", e32.Waiting = "Waiting", e32))(qi2 || {});
var Gi2 = ((e32) => (e32.Archived = "ARCHIVED", e32.Compromised = "COMPROMISED", e32.Confirmed = "CONFIRMED", e32.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", e32.ResetRequired = "RESET_REQUIRED", e32.Unconfirmed = "UNCONFIRMED", e32.Unknown = "UNKNOWN", e32))(Gi2 || {});
var Ki2 = ((e32) => (e32.Owner = "Owner", e32.Admin = "Admin", e32.User = "User", e32.Visitor = "Visitor", e32))(Ki2 || {});
var wi2 = ((e32) => (e32.RequiresPaymentMethod = "requires_payment_method", e32.RequiresConfirmation = "requires_confirmation", e32.RequiresAction = "requires_action", e32.Processing = "processing", e32.RequiresCapture = "requires_capture", e32.Canceled = "canceled", e32.Succeeded = "succeeded", e32))(wi2 || {});
var Oi2 = ((e32) => (e32.Incomplete = "incomplete", e32.IncompleteExpired = "incomplete_expired", e32.Trialing = "trialing", e32.Active = "active", e32.PastDue = "past_due", e32.Canceled = "canceled", e32.Unpaid = "unpaid", e32))(Oi2 || {});
var Hi2 = ((e32) => (e32.Monthly = "monthly", e32.Quarterly = "quarterly", e32.Yearly = "yearly", e32.Lifetime = "lifetime", e32))(Hi2 || {});
var Wi2 = ((e32) => (e32.Delivered = "delivered", e32.Read = "read", e32.Sending = "sending", e32.Sent = "sent", e32))(Wi2 || {});
var Vi2 = ((e32) => (e32.Audio = "audio", e32.File = "file", e32.Image = "image", e32.Text = "text", e32.Video = "video", e32))(Vi2 || {});
var ji2 = ((e32) => (e32.Audio = "audio", e32.File = "file", e32.Image = "image", e32.Video = "video", e32))(ji2 || {});
var Yi2 = ((e32) => (e32.Angry = "angry", e32.Laugh = "laugh", e32.Like = "like", e32.Love = "love", e32.Sad = "sad", e32.Wow = "wow", e32.Wink = "wink", e32.Yay = "yay", e32))(Yi2 || {});
var Zi2 = ((e32) => (e32.Email = "email", e32.PhoneNumber = "phone_number", e32))(Zi2 || {});
var i2 = ((e32) => (e32.Analytics = "analytics", e32.Critical = "critical", e32.Debug = "debug", e32.Exception = "exception", e32.Http = "http", e32.Info = "info", e32.Warning = "warning", e32))(i2 || {});
var Ji2 = ((e32) => (e32.Delete = "delete", e32.Get = "get", e32.Head = "head", e32.Patch = "patch", e32.Post = "post", e32.Put = "put", e32))(Ji2 || {});
var Qi2 = ((e32) => (e32[e32.CONTINUE = 100] = "CONTINUE", e32[e32.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e32[e32.PROCESSING = 102] = "PROCESSING", e32[e32.OK = 200] = "OK", e32[e32.CREATED = 201] = "CREATED", e32[e32.ACCEPTED = 202] = "ACCEPTED", e32[e32.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e32[e32.NO_CONTENT = 204] = "NO_CONTENT", e32[e32.RESET_CONTENT = 205] = "RESET_CONTENT", e32[e32.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e32[e32.MULTI_STATUS = 207] = "MULTI_STATUS", e32[e32.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", e32[e32.IM_USED = 226] = "IM_USED", e32[e32.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e32[e32.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e32[e32.FOUND = 302] = "FOUND", e32[e32.SEE_OTHER = 303] = "SEE_OTHER", e32[e32.NOT_MODIFIED = 304] = "NOT_MODIFIED", e32[e32.USE_PROXY = 305] = "USE_PROXY", e32[e32.SWITCH_PROXY = 306] = "SWITCH_PROXY", e32[e32.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e32[e32.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e32[e32.BAD_REQUEST = 400] = "BAD_REQUEST", e32[e32.UNAUTHORIZED = 401] = "UNAUTHORIZED", e32[e32.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e32[e32.FORBIDDEN = 403] = "FORBIDDEN", e32[e32.NOT_FOUND = 404] = "NOT_FOUND", e32[e32.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e32[e32.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e32[e32.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e32[e32.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e32[e32.CONFLICT = 409] = "CONFLICT", e32[e32.GONE = 410] = "GONE", e32[e32.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e32[e32.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e32[e32.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", e32[e32.URI_TOO_LONG = 414] = "URI_TOO_LONG", e32[e32.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e32[e32.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", e32[e32.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e32[e32.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", e32[e32.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", e32[e32.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e32[e32.LOCKED = 423] = "LOCKED", e32[e32.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e32[e32.TOO_EARLY = 425] = "TOO_EARLY", e32[e32.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", e32[e32.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e32[e32.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e32[e32.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e32[e32.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e32[e32.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e32[e32.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e32[e32.BAD_GATEWAY = 502] = "BAD_GATEWAY", e32[e32.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e32[e32.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e32[e32.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e32[e32.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", e32[e32.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e32[e32.LOOP_DETECTED = 508] = "LOOP_DETECTED", e32[e32.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", e32[e32.NOT_EXTENDED = 510] = "NOT_EXTENDED", e32[e32.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", e32))(Qi2 || {});
var $i2 = ((e32) => (e32.Afghanistan = "AF", e32.Albania = "AL", e32.Algeria = "DZ", e32.AmericanSamoa = "AS", e32.Andorra = "AD", e32.Angola = "AO", e32.Anguilla = "AI", e32.Antarctica = "AQ", e32.AntiguaAndBarbuda = "AG", e32.Argentina = "AR", e32.Armenia = "AM", e32.Aruba = "AW", e32.Australia = "AU", e32.Austria = "AT", e32.Azerbaijan = "AZ", e32.Bahamas = "BS", e32.Bahrain = "BH", e32.Bangladesh = "BD", e32.Barbados = "BB", e32.Belarus = "BY", e32.Belgium = "BE", e32.Belize = "BZ", e32.Benin = "BJ", e32.Bermuda = "BM", e32.Bhutan = "BT", e32.Bolivia = "BO", e32.BosniaAndHerzegovina = "BA", e32.Botswana = "BW", e32.BouvetIsland = "BV", e32.Brazil = "BR", e32.BritishIndianOceanTerritory = "IO", e32.Brunei = "BN", e32.Bulgaria = "BG", e32.BurkinaFaso = "BF", e32.Burundi = "BI", e32.Cambodia = "KH", e32.Cameroon = "CM", e32.Canada = "CA", e32.CapeVerde = "CV", e32.CaymanIslands = "KY", e32.CentralAfricanRepublic = "CF", e32.Chad = "TD", e32.Chile = "CL", e32.China = "CN", e32.ChristmasIsland = "CX", e32.CocosKeelingIslands = "CC", e32.Colombia = "CO", e32.Comoros = "KM", e32.Congo = "CG", e32.CongoTheDemocraticRepublicOfThe = "CD", e32.CookIslands = "CK", e32.CostaRica = "CR", e32.CoteDIvoire = "CI", e32.Croatia = "HR", e32.Cuba = "CU", e32.Cyprus = "CY", e32.CzechRepublic = "CZ", e32.Denmark = "DK", e32.Djibouti = "DJ", e32.Dominica = "DM", e32.DominicanRepublic = "DO", e32.Ecuador = "EC", e32.Egypt = "EG", e32.ElSalvador = "SV", e32.EquatorialGuinea = "GQ", e32.Eritrea = "ER", e32.Estonia = "EE", e32.Ethiopia = "ET", e32.FalklandIslands = "FK", e32.FaroeIslands = "FO", e32.Fiji = "FJ", e32.Finland = "FI", e32.France = "FR", e32.FrenchGuiana = "GF", e32.FrenchPolynesia = "PF", e32.FrenchSouthernTerritories = "TF", e32.Gabon = "GA", e32.Gambia = "GM", e32.Georgia = "GE", e32.Germany = "DE", e32.Ghana = "GH", e32.Gibraltar = "GI", e32.Greece = "GR", e32.Greenland = "GL", e32.Grenada = "GD", e32.Guadeloupe = "GP", e32.Guam = "GU", e32.Guatemala = "GT", e32.Guernsey = "GG", e32.Guinea = "GN", e32.GuineaBissau = "GW", e32.Guyana = "GY", e32.Haiti = "HT", e32.HeardIslandMcdonaldIslands = "HM", e32.HolySeeVaticanCityState = "VA", e32.Honduras = "HN", e32.HongKong = "HK", e32.Hungary = "HU", e32.Iceland = "IS", e32.India = "IN", e32.Indonesia = "ID", e32.Iran = "IR", e32.Iraq = "IQ", e32.Ireland = "IE", e32.IsleOfMan = "IM", e32.Israel = "IL", e32.Italy = "IT", e32.Jamaica = "JM", e32.Japan = "JP", e32.Jersey = "JE", e32.Jordan = "JO", e32.Kazakhstan = "KZ", e32.Kenya = "KE", e32.Kiribati = "KI", e32.Kuwait = "KW", e32.Kyrgyzstan = "KG", e32.Laos = "LA", e32.Latvia = "LV", e32.Lebanon = "LB", e32.Lesotho = "LS", e32.Liberia = "LR", e32.Libya = "LY", e32.Liechtenstein = "LI", e32.Lithuania = "LT", e32.Luxembourg = "LU", e32.Macau = "MO", e32.Madagascar = "MG", e32.Malawi = "MW", e32.Malaysia = "MY", e32.Maldives = "MV", e32.Mali = "ML", e32.Malta = "MT", e32.MarshallIslands = "MH", e32.Martinique = "MQ", e32.Mauritania = "MR", e32.Mauritius = "MU", e32.Mayotte = "YT", e32.Mexico = "MX", e32.MicronesiaFederatedStatesOf = "FM", e32.Moldova = "MD", e32.Monaco = "MC", e32.Mongolia = "MN", e32.Montenegro = "ME", e32.Montserrat = "MS", e32.Morocco = "MA", e32.Mozambique = "MZ", e32.Myanmar = "MM", e32.Namibia = "NA", e32.Nauru = "NR", e32.Nepal = "NP", e32.Netherlands = "NL", e32.NetherlandsAntilles = "AN", e32.NewCaledonia = "NC", e32.NewZealand = "NZ", e32.NorthKorea = "KP", e32.Nicaragua = "NI", e32.Niger = "NE", e32.Nigeria = "NG", e32.Niue = "NU", e32.NorfolkIsland = "NF", e32.NorthMacedonia = "MK", e32.NorthernMarianaIslands = "MP", e32.Norway = "NO", e32.Oman = "OM", e32.Pakistan = "PK", e32.Palau = "PW", e32.PalestinianTerritoryOccupied = "PS", e32.Panama = "PA", e32.PapuaNewGuinea = "PG", e32.Paraguay = "PY", e32.Peru = "PE", e32.Philippines = "PH", e32.Pitcairn = "PN", e32.Poland = "PL", e32.Portugal = "PT", e32.PuertoRico = "PR", e32.Qatar = "QA", e32.Reunion = "RE", e32.Romania = "RO", e32.RussianFederation = "RU", e32.Rwanda = "RW", e32.SaintBarthelemy = "BL", e32.SaintHelena = "SH", e32.SaintKittsAndNevis = "KN", e32.SaintLucia = "LC", e32.SaintMartin = "MF", e32.SaintPierreAndMiquelon = "PM", e32.SaintVincentAndTheGrenadines = "VC", e32.Samoa = "WS", e32.SanMarino = "SM", e32.SaoTomeAndPrincipe = "ST", e32.SaudiArabia = "SA", e32.Senegal = "SN", e32.Serbia = "RS", e32.SerbiaAndMontenegro = "CS", e32.Seychelles = "SC", e32.SierraLeone = "SL", e32.Singapore = "SG", e32.Slovakia = "SK", e32.Slovenia = "SI", e32.SolomonIslands = "SB", e32.Somalia = "SO", e32.SouthAfrica = "ZA", e32.SouthGeorgiaAndTheSouthSandwichIslands = "GS", e32.SouthKorea = "KR", e32.Spain = "ES", e32.SriLanka = "LK", e32.Sudan = "SD", e32.Suriname = "SR", e32.SvalbardAndJanMayen = "SJ", e32.Swaziland = "SZ", e32.Sweden = "SE", e32.Switzerland = "CH", e32.Syria = "SY", e32.Taiwan = "TW", e32.Tajikistan = "TJ", e32.Tanzania = "TZ", e32.Thailand = "TH", e32.TimorLeste = "TL", e32.Togo = "TG", e32.Tokelau = "TK", e32.Tonga = "TO", e32.TrinidadAndTobago = "TT", e32.Tunisia = "TN", e32.Turkey = "TR", e32.Turkmenistan = "TM", e32.TurksAndCaicosIslands = "TC", e32.Tuvalu = "TV", e32.Uganda = "UG", e32.Ukraine = "UA", e32.UnitedArabEmirates = "AE", e32.UnitedKingdom = "GB", e32.UnitedStates = "US", e32.UnitedStatesMinorOutlyingIslands = "UM", e32.Uruguay = "UY", e32.Uzbekistan = "UZ", e32.Vanuatu = "VU", e32.Venezuela = "VE", e32.Vietnam = "VN", e32.VirginIslandsBritish = "VG", e32.VirginIslandsUS = "VI", e32.WallisAndFutuna = "WF", e32.WesternSahara = "EH", e32.Yemen = "YE", e32.Zambia = "ZM", e32.Zimbabwe = "ZW", e32))($i2 || {});
var Xi2 = ((e32) => (e32.AfghanistanAfghani = "AFN", e32.AlbaniaLek = "ALL", e32.ArmeniaDram = "AMD", e32.AlgeriaDinar = "DZD", e32.AmericanSamoaTala = "WST", e32.AngolaKwanza = "AOA", e32.ArgentinaPeso = "ARS", e32.AustraliaDollar = "AUD", e32.ArubaFlorin = "AWG", e32.AzerbaijanNewManat = "AZN", e32.BosniaAndHerzegovinaConvertibleMark = "BAM", e32.BahrainDinar = "BHD", e32.BarbadosDollar = "BBD", e32.BangladeshTaka = "BDT", e32.BelgiumFranc = "BGN", e32.BermudaDollar = "BMD", e32.BruneiDollar = "BND", e32.BoliviaBoliviano = "BOB", e32.BrazilReal = "BRL", e32.BahamasDollar = "BSD", e32.BhutanNgultrum = "BTN", e32.BotswanaPula = "BWP", e32.BelarusRuble = "BYN", e32.BelizeDollar = "BZD", e32.BulgariaLev = "BGN", e32.BurundiFranc = "BIF", e32.BritishPound = "GBP", e32.CanadaDollar = "CAD", e32.CambodiaRiel = "KHR", e32.ComorosFranc = "KMF", e32.CaymanIslandsDollar = "KYD", e32.ChilePeso = "CLP", e32.ChinaYuan = "CNY", e32.ColombiaPeso = "COP", e32.CostaRicaColon = "CRC", e32.CroatiaKuna = "HRK", e32.CubaConvertiblePeso = "CUC", e32.CubaPeso = "CUP", e32.CapeVerdeEscudo = "CVE", e32.CyprusPound = "CYP", e32.CzechRepublicKoruna = "CZK", e32.DjiboutiFranc = "DJF", e32.DenmarkKrone = "DKK", e32.DominicaDollar = "XCD", e32.DominicanRepublicPeso = "DOP", e32.EastCaribbeanDollar = "XCD", e32.EgyptPound = "EGP", e32.ElSalvadorColon = "SVC", e32.EquatorialGuineaEkwele = "GQE", e32.EritreaNakfa = "ERN", e32.EstoniaKroon = "EEK", e32.EthiopiaBirr = "ETB", e32.Euro = "EUR", e32.FijiDollar = "FJD", e32.FalklandIslandsPound = "FKP", e32.GambiaDalasi = "GMD", e32.GabonFranc = "GMD", e32.GeorgiaLari = "GEL", e32.GhanaCedi = "GHS", e32.GibraltarPound = "GIP", e32.GuatemalaQuetzal = "GTQ", e32.GuernseyPound = "GGP", e32.GuineaBissauPeso = "GWP", e32.GuyanaDollar = "GYD", e32.HongKongDollar = "HKD", e32.HondurasLempira = "HNL", e32.HaitiGourde = "HTG", e32.HungaryForint = "HUF", e32.IndonesiaRupiah = "IDR", e32.IsleOfManPound = "IMP", e32.IsraelNewShekel = "ILS", e32.IndiaRupee = "INR", e32.IraqDinar = "IQD", e32.IranRial = "IRR", e32.IcelandKrona = "ISK", e32.JamaicaDollar = "JMD", e32.JapanYen = "JPY", e32.JerseyPound = "JEP", e32.JordanDinar = "JOD", e32.KazakhstanTenge = "KZT", e32.KenyaShilling = "KES", e32.KyrgyzstanSom = "KGS", e32.NorthKoreaWon = "KPW", e32.SouthKoreaWon = "KRW", e32.KuwaitDinar = "KWD", e32.LaosKip = "LAK", e32.LebanonPound = "LBP", e32.LiberiaDollar = "LRD", e32.LesothoLoti = "LSL", e32.LibyanDinar = "LYD", e32.LithuaniaLitas = "LTL", e32.LatviaLats = "LVL", e32.LibyaDinar = "LYD", e32.MacauPataca = "MOP", e32.MaldivesRufiyaa = "MVR", e32.MalawiKwacha = "MWK", e32.MaltaLira = "MTL", e32.MauritiusRupee = "MUR", e32.MongoliaTughrik = "MNT", e32.MoroccoDirham = "MAD", e32.MoldovaLeu = "MDL", e32.MozambiqueMetical = "MZN", e32.MadagascarAriary = "MGA", e32.MacedoniaDenar = "MKD", e32.MexicoPeso = "MXN", e32.MalaysiaRinggit = "MYR", e32.MyanmarKyat = "MMK", e32.MicronesiaFederatedStatesDollar = "USD", e32.NicaraguaCordoba = "NIO", e32.NamibiaDollar = "NAD", e32.NetherlandsAntillesGuilder = "ANG", e32.NewCaledoniaFranc = "XPF", e32.NigeriaNaira = "NGN", e32.NicaraguaCordobaOro = "NIO", e32.NigerCFAFranc = "XOF", e32.NorwayKrone = "NOK", e32.NepalRupee = "NPR", e32.NewZealandDollar = "NZD", e32.OmanRial = "OMR", e32.PanamaBalboa = "PAB", e32.PeruNuevoSol = "PEN", e32.PapuaNewGuineaKina = "PGK", e32.PhilippinesPeso = "PHP", e32.PakistanRupee = "PKR", e32.PeruNuevo = "PEN", e32.PolandZloty = "PLN", e32.ParaguayGuarani = "PYG", e32.QatarRial = "QAR", e32.RomaniaNewLeu = "RON", e32.SerbiaDinar = "RSD", e32.SriLankaRupee = "LKR", e32.RussiaRuble = "RUB", e32.RwandaFranc = "RWF", e32.SaudiArabiaRiyal = "SAR", e32.SlovakiaKoruna = "SKK", e32.SloveniaTolar = "SIT", e32.SolomonIslandsDollar = "SBD", e32.SeychellesRupee = "SCR", e32.SudanPound = "SDG", e32.SwedenKrona = "SEK", e32.SingaporeDollar = "SGD", e32.SaintHelenaPound = "SHP", e32.SierraLeoneLeone = "SLL", e32.SomaliaShilling = "SOS", e32.SurinameDollar = "SRD", e32.SintMaartenPound = "SXD", e32.SyriaPound = "SYP", e32.SwazilandLilangeni = "SZL", e32.SwitzerlandFranc = "CHF", e32.ThailandBaht = "THB", e32.TajikistanSomoni = "TJS", e32.TurkmenistanManat = "TMT", e32.TunisiaDinar = "TND", e32.TongaPaanga = "TOP", e32.TurkeyLira = "TRY", e32.TrinidadAndTobagoDollar = "TTD", e32.TaiwanNewDollar = "TWD", e32.TanzaniaShilling = "TZS", e32.UnitedArabEmiratesDirham = "AED", e32.UkraineHryvnia = "UAH", e32.UgandaShilling = "UGX", e32.UnitedKingdomPound = "GBP", e32.UnitedStatesDollar = "USD", e32.UruguayPeso = "UYU", e32.UzbekistanSom = "UZS", e32.VenezuelaBolivar = "VEF", e32.VietnamDong = "VND", e32.VanuatuVatu = "VUV", e32.SamoaTala = "WST", e32.YemenRial = "YER", e32.SouthAfricaRand = "ZAR", e32.ZambiaKwacha = "ZMW", e32.ZimbabweDollar = "ZWL", e32))(Xi2 || {});
var en2 = ((e32) => (e32.Bitcoin = "BTC", e32.Ethereum = "ETH", e32.Litecoin = "LTC", e32.Ripple = "XRP", e32.Dash = "DASH", e32.Zcash = "ZEC", e32.Dogecoin = "DOGE", e32.Monero = "XMR", e32.BitcoinCash = "BCH", e32.EOS = "EOS", e32.Binance = "BNB", e32.Stellar = "XLM", e32.Cardano = "ADA", e32.IOTA = "IOTA", e32.Tezos = "XTZ", e32.NEO = "NEO", e32.TRON = "TRX", e32.EOSClassic = "EOSC", e32.Ontology = "ONT", e32.VeChain = "VEN", e32.QTUM = "QTUM", e32.Lisk = "LSK", e32.Waves = "WAVES", e32.OmiseGO = "OMG", e32.Zilliqa = "ZIL", e32.BitcoinGold = "BTG", e32.Decred = "DCR", e32.Stratis = "STRAT", e32.Populous = "PPT", e32.Augur = "REP", e32.Golem = "GNT", e32.Siacoin = "SC", e32.BasicAttentionToken = "BAT", e32.ZCoin = "XZC", e32.StratisHedged = "SNT", e32.VeChainHedged = "VEN", e32.PowerLedger = "POWR", e32.WavesHedged = "WAVE", e32.ZilliqaHedged = "ZRX", e32.BitcoinDiamond = "BCD", e32.DigiByte = "DGB", e32.DigiByteHedged = "DGB", e32.Bytecoin = "BCN", e32.BytecoinHedged = "BCN", e32))(en2 || {});
var an2 = ((e32) => (e32.Afrikaans = "af", e32.Albanian = "sq", e32.Amharic = "am", e32.Arabic = "ar", e32.Armenian = "hy", e32.Azerbaijani = "az", e32.Bashkir = "ba", e32.Basque = "eu", e32.Belarusian = "be", e32.Bengali = "bn", e32.Berber = "ber", e32.Bhutani = "dz", e32.Bihari = "bh", e32.Bislama = "bi", e32.Bosnian = "bs", e32.Breten = "br", e32.Bulgarian = "bg", e32.Burmese = "my", e32.Cantonese = "yue", e32.Catalan = "ca", e32.Chinese = "zh", e32.Chuvash = "cv", e32.Corsican = "co", e32.Croatian = "hr", e32.Czech = "cs", e32.Danish = "da", e32.Dari = "prs", e32.Divehi = "dv", e32.Dutch = "nl", e32.English = "en", e32.Esperanto = "eo", e32.Estonian = "et", e32.Faroese = "fo", e32.Farsi = "fa", e32.Filipino = "fil", e32.Finnish = "fi", e32.French = "fr", e32.Frisian = "fy", e32.Galician = "gl", e32.Georgian = "ka", e32.German = "de", e32.Greek = "el", e32.Greenlandic = "kl", e32.Gujarati = "gu", e32.Haitian = "ht", e32.Hausa = "ha", e32.Hebrew = "he", e32.Hindi = "hi", e32.Hungarian = "hu", e32.Icelandic = "is", e32.Igbo = "ig", e32.Indonesian = "id", e32.Irish = "ga", e32.Italian = "it", e32.Japanese = "ja", e32.Javanese = "jv", e32.Kannada = "kn", e32.Karelian = "krl", e32.Kazakh = "kk", e32.Khmer = "km", e32.Komi = "kv", e32.Konkani = "kok", e32.Korean = "ko", e32.Kurdish = "ku", e32.Kyrgyz = "ky", e32.Lao = "lo", e32.Latin = "la", e32.Latvian = "lv", e32.Lithuanian = "lt", e32.Luxembourgish = "lb", e32.Ossetian = "os", e32.Macedonian = "mk", e32.Malagasy = "mg", e32.Malay = "ms", e32.Malayalam = "ml", e32.Maltese = "mt", e32.Maori = "mi", e32.Marathi = "mr", e32.Mari = "mhr", e32.Mongolian = "mn", e32.Montenegrin = "me", e32.Nepali = "ne", e32.NorthernSotho = "nso", e32.Norwegian = "no", e32.NorwegianBokmal = "nb", e32.NorwegianNynorsk = "nn", e32.Oriya = "or", e32.Pashto = "ps", e32.Persian = "fa", e32.Polish = "pl", e32.Portuguese = "pt", e32.Punjabi = "pa", e32.Quechua = "qu", e32.Romanian = "ro", e32.Russian = "ru", e32.Sakha = "sah", e32.Sami = "se", e32.Samoan = "sm", e32.Sanskrit = "sa", e32.Scots = "gd", e32.Serbian = "sr", e32.SerbianCyrillic = "sr-Cyrl", e32.Sesotho = "st", e32.Shona = "sn", e32.Sindhi = "sd", e32.Sinhala = "si", e32.Slovak = "sk", e32.Slovenian = "sl", e32.Somali = "so", e32.Spanish = "es", e32.Sudanese = "su", e32.Sutu = "sx", e32.Swahili = "sw", e32.Swedish = "sv", e32.Syriac = "syr", e32.Tagalog = "tl", e32.Tajik = "tg", e32.Tamazight = "tmh", e32.Tamil = "ta", e32.Tatar = "tt", e32.Telugu = "te", e32.Thai = "th", e32.Tibetan = "bo", e32.Tsonga = "ts", e32.Tswana = "tn", e32.Turkish = "tr", e32.Turkmen = "tk", e32.Ukrainian = "uk", e32.Urdu = "ur", e32.Uzbek = "uz", e32.Vietnamese = "vi", e32.Welsh = "cy", e32.Xhosa = "xh", e32.Yiddish = "yi", e32.Yoruba = "yo", e32.Zulu = "zu", e32))(an2 || {});
var nn2 = ((e32) => (e32.Afrikaans = "af", e32.AfrikaansSouthAfrica = "af-ZA", e32.Albanian = "sq", e32.AlbanianAlbania = "sq-AL", e32.Amharic = "am", e32.AmharicEthiopia = "am-ET", e32.Arabic = "ar", e32.ArabicAlgeria = "ar-DZ", e32.ArabicBahrain = "ar-BH", e32.ArabicEgypt = "ar-EG", e32.ArabicIraq = "ar-IQ", e32.ArabicJordan = "ar-JO", e32.ArabicKuwait = "ar-KW", e32.ArabicLebanon = "ar-LB", e32.ArabicLibya = "ar-LY", e32.ArabicMorocco = "ar-MA", e32.ArabicOman = "ar-OM", e32.ArabicQatar = "ar-QA", e32.ArabicSaudiArabia = "ar-SA", e32.ArabicSyria = "ar-SY", e32.ArabicTunisia = "ar-TN", e32.ArabicUnitedArabEmirates = "ar-AE", e32.ArabicYemen = "ar-YE", e32.Armenian = "hy", e32.ArmenianArmenia = "hy-AM", e32.Azerbaijani = "az", e32.AzerbaijaniAzerbaijan = "az-AZ", e32.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", e32.Bashkir = "ba", e32.Basque = "eu", e32.BasqueSpain = "eu-ES", e32.Belarusian = "be", e32.BelarusianBelarus = "be-BY", e32.Bengali = "bn", e32.BengaliBangladesh = "bn-BD", e32.BengaliIndia = "bn-IN", e32.Berber = "ber", e32.Bhutani = "dz", e32.BhutaniBhutan = "dz-BT", e32.Bosnian = "bs", e32.BosnianBosniaAndHerzegovina = "bs-BA", e32.Breton = "br", e32.Bulgarian = "bg", e32.BulgarianBosniaAndHerzegovina = "bg-BG", e32.BulgarianBulgaria = "bg-BG", e32.Burmese = "my", e32.BurmeseMyanmar = "my-MM", e32.Cantonese = "yue", e32.CantoneseHongKong = "yue-HK", e32.Catalan = "ca", e32.CatalanSpain = "ca-ES", e32.Chechen = "ce", e32.Cherokee = "chr", e32.Chinese = "zh", e32.ChineseSimplified = "zh-Hans", e32.ChineseSimplifiedChina = "zh-Hans-CN", e32.ChineseSimplifiedHongKong = "zh-Hans-HK", e32.ChineseSimplifiedMacau = "zh-Hans-MO", e32.ChineseSimplifiedSingapore = "zh-Hans-SG", e32.ChineseTraditional = "zh-Hant", e32.ChineseTraditionalHongKong = "zh-Hant-HK", e32.ChineseTraditionalMacau = "zh-Hant-MO", e32.ChineseTraditionalSingapore = "zh-Hant-SG", e32.ChineseTraditionalTaiwan = "zh-Hant-TW", e32.Chuvash = "cv", e32.CorsicanFrance = "co-FR", e32.Croatian = "hr", e32.CroatianBosniaAndHerzegovina = "hr-BA", e32.CroatianCroatia = "hr-HR", e32.Czech = "cs", e32.CzechCzechRepublic = "cs-CZ", e32.Danish = "da", e32.DanishDenmark = "da-DK", e32.Dari = "prs", e32.DariAfghanistan = "prs-AF", e32.Divehi = "dv", e32.DivehiMaldives = "dv-MV", e32.Dutch = "nl", e32.DutchBelgium = "nl-BE", e32.DutchNetherlands = "nl-NL", e32.English = "en", e32.EnglishAustralia = "en-AU", e32.EnglishBelgium = "en-BE", e32.EnglishBelize = "en-BZ", e32.EnglishCanada = "en-CA", e32.EnglishCaribbean = "en-029", e32.EnglishIreland = "en-IE", e32.EnglishJamaica = "en-JM", e32.EnglishNewZealand = "en-NZ", e32.EnglishPhilippines = "en-PH", e32.EnglishSingapore = "en-SG", e32.EnglishSouthAfrica = "en-ZA", e32.EnglishTrinidadAndTobago = "en-TT", e32.EnglishUnitedKingdom = "en-GB", e32.EnglishUnitedStates = "en-US", e32.EnglishZimbabwe = "en-ZW", e32.Esperanto = "eo", e32.Estonian = "et", e32.EstonianEstonia = "et-EE", e32.Faroese = "fo", e32.FaroeseFaroeIslands = "fo-FO", e32.Farsi = "fa", e32.FarsiIran = "fa-IR", e32.Filipino = "fil", e32.FilipinoPhilippines = "fil-PH", e32.Finnish = "fi", e32.FinnishFinland = "fi-FI", e32.French = "fr", e32.FrenchBelgium = "fr-BE", e32.FrenchCanada = "fr-CA", e32.FrenchFrance = "fr-FR", e32.FrenchLuxembourg = "fr-LU", e32.FrenchMonaco = "fr-MC", e32.FrenchReunion = "fr-RE", e32.FrenchSwitzerland = "fr-CH", e32.Frisian = "fy", e32.FrisianNetherlands = "fy-NL", e32.Galician = "gl", e32.GalicianSpain = "gl-ES", e32.Georgian = "ka", e32.GeorgianGeorgia = "ka-GE", e32.German = "de", e32.GermanAustria = "de-AT", e32.GermanBelgium = "de-BE", e32.GermanGermany = "de-DE", e32.GermanLiechtenstein = "de-LI", e32.GermanLuxembourg = "de-LU", e32.GermanSwitzerland = "de-CH", e32.Greenlandic = "kl", e32.GreenlandicGreenland = "kl-GL", e32.Greek = "el", e32.GreekGreece = "el-GR", e32.Gujarati = "gu", e32.GujaratiIndia = "gu-IN", e32.Haitian = "ht", e32.Hausa = "ha", e32.HausaGhana = "ha-GH", e32.HausaNiger = "ha-NE", e32.HausaNigeria = "ha-NG", e32.Hebrew = "he", e32.HebrewIsrael = "he-IL", e32.Hindi = "hi", e32.HindiIndia = "hi-IN", e32.Hungarian = "hu", e32.HungarianHungary = "hu-HU", e32.Icelandic = "is", e32.IcelandicIceland = "is-IS", e32.Igbo = "ig", e32.IgboNigeria = "ig-NG", e32.Indonesian = "id", e32.IndonesianIndonesia = "id-ID", e32.Irish = "ga", e32.IrishIreland = "ga-IE", e32.Italian = "it", e32.ItalianItaly = "it-IT", e32.ItalianSwitzerland = "it-CH", e32.Japanese = "ja", e32.JapaneseJapan = "ja-JP", e32.Javanese = "jv", e32.Kannada = "kn", e32.KannadaIndia = "kn-IN", e32.Karelian = "krl", e32.Kazakh = "kk", e32.KazakhKazakhstan = "kk-KZ", e32.Khmer = "km", e32.KhmerCambodia = "km-KH", e32.KinyarwandaRwanda = "rw-RW", e32.Komi = "kv", e32.Konkani = "kok", e32.KonkaniIndia = "kok-IN", e32.Korean = "ko", e32.KoreanSouthKorea = "ko-KR", e32.Kurdish = "ku", e32.KurdishIraq = "ku-IQ", e32.KurdishTurkey = "ku-TR", e32.Kyrgyz = "ky", e32.KyrgyzKyrgyzstan = "ky-KG", e32.Lao = "lo", e32.LaoLaos = "lo-LA", e32.Latin = "la", e32.Latvian = "lv", e32.LatvianLatvia = "lv-LV", e32.Lithuanian = "lt", e32.LithuanianLithuania = "lt-LT", e32.Luxembourgish = "lb", e32.LuxembourgishBelgium = "lb-LU", e32.LuxembourgishLuxembourg = "lb-LU", e32.Macedonian = "mk", e32.MacedonianNorthMacedonia = "mk-MK", e32.Malagasy = "mg", e32.Malay = "ms", e32.MalayBrunei = "ms-BN", e32.MalayIndia = "ms-IN", e32.MalayMalaysia = "ms-MY", e32.MalaySingapore = "ms-SG", e32.Malayalam = "ml", e32.MalayalamIndia = "ml-IN", e32.Maltese = "mt", e32.MalteseMalta = "mt-MT", e32.Maori = "mi", e32.MaoriNewZealand = "mi-NZ", e32.Marathi = "mr", e32.MarathiIndia = "mr-IN", e32.Mari = "chm", e32.Mongolian = "mn", e32.MongolianMongolia = "mn-MN", e32.Montenegrin = "me", e32.MontenegrinMontenegro = "me-ME", e32.Nepali = "ne", e32.NepaliNepal = "ne-NP", e32.NorthernSotho = "ns", e32.NorthernSothoSouthAfrica = "ns-ZA", e32.Norwegian = "nb", e32.NorwegianBokmalNorway = "nb-NO", e32.NorwegianNynorskNorway = "nn-NO", e32.Oriya = "or", e32.OriyaIndia = "or-IN", e32.Ossetian = "os", e32.Pashto = "ps", e32.PashtoAfghanistan = "ps-AF", e32.Persian = "fa", e32.PersianIran = "fa-IR", e32.Polish = "pl", e32.PolishPoland = "pl-PL", e32.Portuguese = "pt", e32.PortugueseBrazil = "pt-BR", e32.PortuguesePortugal = "pt-PT", e32.Punjabi = "pa", e32.PunjabiIndia = "pa-IN", e32.PunjabiPakistan = "pa-PK", e32.Quechua = "qu", e32.QuechuaBolivia = "qu-BO", e32.QuechuaEcuador = "qu-EC", e32.QuechuaPeru = "qu-PE", e32.Romanian = "ro", e32.RomanianRomania = "ro-RO", e32.Russian = "ru", e32.RussianKazakhstan = "ru-KZ", e32.RussianKyrgyzstan = "ru-KG", e32.RussianRussia = "ru-RU", e32.RussianUkraine = "ru-UA", e32.Sakha = "sah", e32.Sanskrit = "sa", e32.SanskritIndia = "sa-IN", e32.Sami = "se", e32.SamiNorway = "se-NO", e32.SamiSweden = "se-SE", e32.SamiFinland = "se-FI", e32.Samoan = "sm", e32.SamoanSamoa = "sm-WS", e32.Scots = "gd", e32.Serbian = "sr", e32.SerbianBosniaAndHerzegovina = "sr-BA", e32.SerbianSerbiaAndMontenegro = "sr-SP", e32.SerbianCyrillic = "sr-SP-Cyrl", e32.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", e32.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", e32.Sesotho = "st", e32.SesothoSouthAfrica = "st-ZA", e32.Shona = "sn", e32.ShonaZimbabwe = "sn-ZW", e32.Sindhi = "sd", e32.SindhiPakistan = "sd-PK", e32.Sinhala = "si", e32.SinhalaSriLanka = "si-LK", e32.Slovak = "sk", e32.SlovakSlovakia = "sk-SK", e32.Slovenian = "sl", e32.SlovenianSlovenia = "sl-SI", e32.Somali = "so", e32.SomaliSomalia = "so-SO", e32.Spanish = "es", e32.SpanishArgentina = "es-AR", e32.SpanishBolivia = "es-BO", e32.SpanishChile = "es-CL", e32.SpanishColombia = "es-CO", e32.SpanishCostaRica = "es-CR", e32.SpanishCuba = "es-CU", e32.SpanishDominicanRepublic = "es-DO", e32.SpanishEcuador = "es-EC", e32.SpanishEquatorialGuinea = "es-GQ", e32.SpanishElSalvador = "es-SV", e32.SpanishGuatemala = "es-GT", e32.SpanishHonduras = "es-HN", e32.SpanishMexico = "es-MX", e32.SpanishNicaragua = "es-NI", e32.SpanishPanama = "es-PA", e32.SpanishParaguay = "es-PY", e32.SpanishPeru = "es-PE", e32.SpanishPuertoRico = "es-PR", e32.SpanishSpain = "es-ES", e32.SpanishUnitedStates = "es-US", e32.SpanishUruguay = "es-UY", e32.SpanishVenezuela = "es-VE", e32.Sudanese = "su", e32.Sutu = "st", e32.SutuSouthAfrica = "st-ZA", e32.Swahili = "sw", e32.SwahiliKenya = "sw-KE", e32.Swedish = "sv", e32.SwedishFinland = "sv-FI", e32.SwedishSweden = "sv-SE", e32.Syriac = "syr", e32.SyriacSyria = "syr-SY", e32.Tajik = "tg", e32.TajikTajikistan = "tg-TJ", e32.Tagalog = "tl", e32.TagalogPhilippines = "tl-PH", e32.Tamazight = "tmh", e32.Tamil = "ta", e32.TamilIndia = "ta-IN", e32.Tatar = "tt", e32.Telugu = "te", e32.TeluguIndia = "te-IN", e32.Thai = "th", e32.ThaiThailand = "th-TH", e32.Tibetan = "bo", e32.TibetanBhutan = "bo-BT", e32.TibetanChina = "bo-CN", e32.TibetanIndia = "bo-IN", e32.Tsonga = "ts", e32.Tswana = "tn", e32.TswanaSouthAfrica = "tn-ZA", e32.Turkish = "tr", e32.TurkishTurkey = "tr-TR", e32.Turkmen = "tk", e32.Ukrainian = "uk", e32.UkrainianUkraine = "uk-UA", e32.Urdu = "ur", e32.UrduAfghanistan = "ur-AF", e32.UrduIndia = "ur-IN", e32.UrduPakistan = "ur-PK", e32.Uzbek = "uz", e32.UzbekCyrillic = "uz-Cyrl-UZ", e32.UzbekLatin = "uz-Latn-UZ", e32.UzbekUzbekistan = "uz-UZ", e32.Vietnamese = "vi", e32.VietnameseVietnam = "vi-VN", e32.Welsh = "cy", e32.WelshUnitedKingdom = "cy-GB", e32.Xhosa = "xh", e32.XhosaSouthAfrica = "xh-ZA", e32.Yiddish = "yi", e32.Yoruba = "yo", e32.YorubaNigeria = "yo-NG", e32.ZhuyinMandarinChina = "yue-Hant-CN", e32.Zulu = "zu", e32.ZuluSouthAfrica = "zu-ZA", e32))(nn2 || {});
var sn2 = ((e32) => (e32.AfricaAbidjan = "Africa/Abidjan", e32.AfricaAccra = "Africa/Accra", e32.AfricaAddisAbaba = "Africa/Addis_Ababa", e32.AfricaAlgiers = "Africa/Algiers", e32.AfricaAsmara = "Africa/Asmara", e32.AfricaBamako = "Africa/Bamako", e32.AfricaBangui = "Africa/Bangui", e32.AfricaBanjul = "Africa/Banjul", e32.AfricaBissau = "Africa/Bissau", e32.AfricaBlantyre = "Africa/Blantyre", e32.AfricaBrazzaville = "Africa/Brazzaville", e32.AfricaBujumbura = "Africa/Bujumbura", e32.AfricaCairo = "Africa/Cairo", e32.AfricaCasablanca = "Africa/Casablanca", e32.AfricaCeuta = "Africa/Ceuta", e32.AfricaConakry = "Africa/Conakry", e32.AfricaDakar = "Africa/Dakar", e32.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", e32.AfricaDjibouti = "Africa/Djibouti", e32.AfricaDouala = "Africa/Douala", e32.AfricaElAaiun = "Africa/El_Aaiun", e32.AfricaFreetown = "Africa/Freetown", e32.AfricaGaborone = "Africa/Gaborone", e32.AfricaHarare = "Africa/Harare", e32.AfricaJohannesburg = "Africa/Johannesburg", e32.AfricaJuba = "Africa/Juba", e32.AfricaKampala = "Africa/Kampala", e32.AfricaKhartoum = "Africa/Khartoum", e32.AfricaKigali = "Africa/Kigali", e32.AfricaKinshasa = "Africa/Kinshasa", e32.AfricaLagos = "Africa/Lagos", e32.AfricaLibreville = "Africa/Libreville", e32.AfricaLome = "Africa/Lome", e32.AfricaLuanda = "Africa/Luanda", e32.AfricaLubumbashi = "Africa/Lubumbashi", e32.AfricaLusaka = "Africa/Lusaka", e32.AfricaMalabo = "Africa/Malabo", e32.AfricaMaputo = "Africa/Maputo", e32.AfricaMaseru = "Africa/Maseru", e32.AfricaMbabane = "Africa/Mbabane", e32.AfricaMogadishu = "Africa/Mogadishu", e32.AfricaMonrovia = "Africa/Monrovia", e32.AfricaNairobi = "Africa/Nairobi", e32.AfricaNdjamena = "Africa/Ndjamena", e32.AfricaNiamey = "Africa/Niamey", e32.AfricaNouakchott = "Africa/Nouakchott", e32.AfricaOuagadougou = "Africa/Ouagadougou", e32.AfricaPortoNovo = "Africa/Porto-Novo", e32.AfricaSaoTome = "Africa/Sao_Tome", e32.AfricaTripoli = "Africa/Tripoli", e32.AfricaTunis = "Africa/Tunis", e32.AfricaWindhoek = "Africa/Windhoek", e32.AmericaAdak = "America/Adak", e32.AmericaAnchorage = "America/Anchorage", e32.AmericaAnguilla = "America/Anguilla", e32.AmericaAntigua = "America/Antigua", e32.AmericaAraguaina = "America/Araguaina", e32.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", e32.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", e32.AmericaArgentinaCordoba = "America/Argentina/Cordoba", e32.AmericaArgentinaJujuy = "America/Argentina/Jujuy", e32.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", e32.AmericaArgentinaMendoza = "America/Argentina/Mendoza", e32.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", e32.AmericaArgentinaSalta = "America/Argentina/Salta", e32.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", e32.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", e32.AmericaArgentinaTucuman = "America/Argentina/Tucuman", e32.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", e32.AmericaAruba = "America/Aruba", e32.AmericaAsuncion = "America/Asuncion", e32.AmericaAtikokan = "America/Atikokan", e32.AmericaAtka = "America/Atka", e32.AmericaBahia = "America/Bahia", e32.AmericaBahiaBanderas = "America/Bahia_Banderas", e32.AmericaBarbados = "America/Barbados", e32.AmericaBelem = "America/Belem", e32.AmericaBelize = "America/Belize", e32.AmericaBlancSablon = "America/Blanc-Sablon", e32.AmericaBoaVista = "America/Boa_Vista", e32.AmericaBogota = "America/Bogota", e32.AmericaBoise = "America/Boise", e32.AmericaCambridgeBay = "America/Cambridge_Bay", e32.AmericaCampoGrande = "America/Campo_Grande", e32.AmericaCancun = "America/Cancun", e32.AmericaCaracas = "America/Caracas", e32.AmericaCayenne = "America/Cayenne", e32.AmericaCayman = "America/Cayman", e32.AmericaChicago = "America/Chicago", e32.AmericaChihuahua = "America/Chihuahua", e32.AmericaCoralHarbour = "America/Coral_Harbour", e32.AmericaCordoba = "America/Cordoba", e32.AmericaCostaRica = "America/Costa_Rica", e32.AmericaCreston = "America/Creston", e32.AmericaCuiaba = "America/Cuiaba", e32.AmericaCuracao = "America/Curacao", e32.AmericaDanmarkshavn = "America/Danmarkshavn", e32.AmericaDawson = "America/Dawson", e32.AmericaDawsonCreek = "America/Dawson_Creek", e32.AmericaDenver = "America/Denver", e32.AmericaDetroit = "America/Detroit", e32.AmericaDominica = "America/Dominica", e32.AmericaEdmonton = "America/Edmonton", e32.AmericaEirunepe = "America/Eirunepe", e32.AmericaElSalvador = "America/El_Salvador", e32.AmericaFortaleza = "America/Fortaleza", e32.AmericaGlaceBay = "America/Glace_Bay", e32.AmericaGodthab = "America/Godthab", e32.AmericaGooseBay = "America/Goose_Bay", e32.AmericaGrandTurk = "America/Grand_Turk", e32.AmericaGrenada = "America/Grenada", e32.AmericaGuadeloupe = "America/Guadeloupe", e32.AmericaGuatemala = "America/Guatemala", e32.AmericaGuayaquil = "America/Guayaquil", e32.AmericaGuyana = "America/Guyana", e32.AmericaHalifax = "America/Halifax", e32.AmericaHavana = "America/Havana", e32.AmericaHermosillo = "America/Hermosillo", e32.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", e32.AmericaIndianaKnox = "America/Indiana/Knox", e32.AmericaIndianaMarengo = "America/Indiana/Marengo", e32.AmericaIndianaPetersburg = "America/Indiana/Petersburg", e32.AmericaIndianaTellCity = "America/Indiana/Tell_City", e32.AmericaIndianaVevay = "America/Indiana/Vevay", e32.AmericaIndianaVincennes = "America/Indiana/Vincennes", e32.AmericaIndianaWinamac = "America/Indiana/Winamac", e32.AmericaInuvik = "America/Inuvik", e32.AmericaIqaluit = "America/Iqaluit", e32.AmericaJamaica = "America/Jamaica", e32.AmericaJuneau = "America/Juneau", e32.AmericaKentuckyLouisville = "America/Kentucky/Louisville", e32.AmericaKentuckyMonticello = "America/Kentucky/Monticello", e32.AmericaKralendijk = "America/Kralendijk", e32.AmericaLaPaz = "America/La_Paz", e32.AmericaLima = "America/Lima", e32.AmericaLosAngeles = "America/Los_Angeles", e32.AmericaLouisville = "America/Louisville", e32.AmericaLowerPrinces = "America/Lower_Princes", e32.AmericaMaceio = "America/Maceio", e32.AmericaManagua = "America/Managua", e32.AmericaManaus = "America/Manaus", e32.AmericaMarigot = "America/Marigot", e32.AmericaMartinique = "America/Martinique", e32.AmericaMatamoros = "America/Matamoros", e32.AmericaMazatlan = "America/Mazatlan", e32.AmericaMenominee = "America/Menominee", e32.AmericaMerida = "America/Merida", e32.AmericaMetlakatla = "America/Metlakatla", e32.AmericaMexicoCity = "America/Mexico_City", e32.AmericaMiquelon = "America/Miquelon", e32.AmericaMoncton = "America/Moncton", e32.AmericaMonterrey = "America/Monterrey", e32.AmericaMontevideo = "America/Montevideo", e32.AmericaMontserrat = "America/Montserrat", e32.AmericaMontreal = "America/Montreal", e32.AmericaNassau = "America/Nassau", e32.AmericaNewYork = "America/New_York", e32.AmericaNipigon = "America/Nipigon", e32.AmericaNome = "America/Nome", e32.AmericaNoronha = "America/Noronha", e32.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", e32.AmericaNorthDakotaCenter = "America/North_Dakota/Center", e32.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", e32.AmericaOjinaga = "America/Ojinaga", e32.AmericaPanama = "America/Panama", e32.AmericaPangnirtung = "America/Pangnirtung", e32.AmericaParamaribo = "America/Paramaribo", e32.AmericaPhoenix = "America/Phoenix", e32.AmericaPortAuPrince = "America/Port-au-Prince", e32.AmericaPortOfSpain = "America/Port_of_Spain", e32.AmericaPortoVelho = "America/Porto_Velho", e32.AmericaPuertoRico = "America/Puerto_Rico", e32.AmericaRainyRiver = "America/Rainy_River", e32.AmericaRankinInlet = "America/Rankin_Inlet", e32.AmericaRecife = "America/Recife", e32.AmericaRegina = "America/Regina", e32.AmericaResolute = "America/Resolute", e32.AmericaRioBranco = "America/Rio_Branco", e32.AmericaSantaIsabel = "America/Santa_Isabel", e32.AmericaSantarem = "America/Santarem", e32.AmericaSantiago = "America/Santiago", e32.AmericaSantoDomingo = "America/Santo_Domingo", e32.AmericaSaoPaulo = "America/Sao_Paulo", e32.AmericaScoresbysund = "America/Scoresbysund", e32.AmericaShiprock = "America/Shiprock", e32.AmericaSitka = "America/Sitka", e32.AmericaStBarthelemy = "America/St_Barthelemy", e32.AmericaStJohns = "America/St_Johns", e32.AmericaStKitts = "America/St_Kitts", e32.AmericaStLucia = "America/St_Lucia", e32.AmericaStThomas = "America/St_Thomas", e32.AmericaStVincent = "America/St_Vincent", e32.AmericaSwiftCurrent = "America/Swift_Current", e32.AmericaTegucigalpa = "America/Tegucigalpa", e32.AmericaThule = "America/Thule", e32.AmericaThunderBay = "America/Thunder_Bay", e32.AmericaTijuana = "America/Tijuana", e32.AmericaToronto = "America/Toronto", e32.AmericaTortola = "America/Tortola", e32.AmericaVancouver = "America/Vancouver", e32.AmericaWhitehorse = "America/Whitehorse", e32.AmericaWinnipeg = "America/Winnipeg", e32.AmericaYakutat = "America/Yakutat", e32.AmericaYellowknife = "America/Yellowknife", e32.AntarcticaCasey = "Antarctica/Casey", e32.AntarcticaDavis = "Antarctica/Davis", e32.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", e32.AntarcticaMacquarie = "Antarctica/Macquarie", e32.AntarcticaMawson = "Antarctica/Mawson", e32.AntarcticaMcMurdo = "Antarctica/McMurdo", e32.AntarcticaPalmer = "Antarctica/Palmer", e32.AntarcticaRothera = "Antarctica/Rothera", e32.AntarcticaSyowa = "Antarctica/Syowa", e32.AntarcticaTroll = "Antarctica/Troll", e32.AntarcticaVostok = "Antarctica/Vostok", e32.ArcticLongyearbyen = "Arctic/Longyearbyen", e32.AsiaAden = "Asia/Aden", e32.AsiaAlmaty = "Asia/Almaty", e32.AsiaAmman = "Asia/Amman", e32.AsiaAnadyr = "Asia/Anadyr", e32.AsiaAqtau = "Asia/Aqtau", e32.AsiaAqtobe = "Asia/Aqtobe", e32.AsiaAshgabat = "Asia/Ashgabat", e32.AsiaBaghdad = "Asia/Baghdad", e32.AsiaBahrain = "Asia/Bahrain", e32.AsiaBaku = "Asia/Baku", e32.AsiaBangkok = "Asia/Bangkok", e32.AsiaBarnaul = "Asia/Barnaul", e32.AsiaBeirut = "Asia/Beirut", e32.AsiaBishkek = "Asia/Bishkek", e32.AsiaBrunei = "Asia/Brunei", e32.AsiaChita = "Asia/Chita", e32.AsiaChoibalsan = "Asia/Choibalsan", e32.AsiaColombo = "Asia/Colombo", e32.AsiaDamascus = "Asia/Damascus", e32.AsiaDhaka = "Asia/Dhaka", e32.AsiaDili = "Asia/Dili", e32.AsiaDubai = "Asia/Dubai", e32.AsiaDushanbe = "Asia/Dushanbe", e32.AsiaFamagusta = "Asia/Famagusta", e32.AsiaGaza = "Asia/Gaza", e32.AsiaHebron = "Asia/Hebron", e32.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", e32.AsiaHongKong = "Asia/Hong_Kong", e32.AsiaHovd = "Asia/Hovd", e32.AsiaIrkutsk = "Asia/Irkutsk", e32.AsiaJakarta = "Asia/Jakarta", e32.AsiaJayapura = "Asia/Jayapura", e32.AsiaJerusalem = "Asia/Jerusalem", e32.AsiaKabul = "Asia/Kabul", e32.AsiaKamchatka = "Asia/Kamchatka", e32.AsiaKarachi = "Asia/Karachi", e32.AsiaKathmandu = "Asia/Kathmandu", e32.AsiaKhandyga = "Asia/Khandyga", e32.AsiaKolkata = "Asia/Kolkata", e32.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", e32.AsiaKualaLumpur = "Asia/Kuala_Lumpur", e32.AsiaKuching = "Asia/Kuching", e32.AsiaKuwait = "Asia/Kuwait", e32.AsiaMacau = "Asia/Macau", e32.AsiaMagadan = "Asia/Magadan", e32.AsiaMakassar = "Asia/Makassar", e32.AsiaManila = "Asia/Manila", e32.AsiaMuscat = "Asia/Muscat", e32.AsiaNicosia = "Asia/Nicosia", e32.AsiaNovokuznetsk = "Asia/Novokuznetsk", e32.AsiaNovosibirsk = "Asia/Novosibirsk", e32.AsiaOmsk = "Asia/Omsk", e32.AsiaOral = "Asia/Oral", e32.AsiaPhnomPenh = "Asia/Phnom_Penh", e32.AsiaPontianak = "Asia/Pontianak", e32.AsiaPyongyang = "Asia/Pyongyang", e32.AsiaQatar = "Asia/Qatar", e32.AsiaQyzylorda = "Asia/Qyzylorda", e32.AsiaRangoon = "Asia/Rangoon", e32.AsiaRiyadh = "Asia/Riyadh", e32.AsiaSakhalin = "Asia/Sakhalin", e32.AsiaSamarkand = "Asia/Samarkand", e32.AsiaSeoul = "Asia/Seoul", e32.AsiaShanghai = "Asia/Shanghai", e32.AsiaSingapore = "Asia/Singapore", e32.AsiaSrednekolymsk = "Asia/Srednekolymsk", e32.AsiaTaipei = "Asia/Taipei", e32.AsiaTashkent = "Asia/Tashkent", e32.AsiaTbilisi = "Asia/Tbilisi", e32.AsiaTehran = "Asia/Tehran", e32.AsiaThimphu = "Asia/Thimphu", e32.AsiaTokyo = "Asia/Tokyo", e32.AsiaTomsk = "Asia/Tomsk", e32.AsiaUlaanbaatar = "Asia/Ulaanbaatar", e32.AsiaUrumqi = "Asia/Urumqi", e32.AsiaUstNera = "Asia/Ust-Nera", e32.AsiaVientiane = "Asia/Vientiane", e32.AsiaVladivostok = "Asia/Vladivostok", e32.AsiaYakutsk = "Asia/Yakutsk", e32.AsiaYekaterinburg = "Asia/Yekaterinburg", e32.AsiaYerevan = "Asia/Yerevan", e32.AtlanticAzores = "Atlantic/Azores", e32.AtlanticBermuda = "Atlantic/Bermuda", e32.AtlanticCanary = "Atlantic/Canary", e32.AtlanticCapeVerde = "Atlantic/Cape_Verde", e32.AtlanticFaroe = "Atlantic/Faroe", e32.AtlanticMadeira = "Atlantic/Madeira", e32.AtlanticReykjavik = "Atlantic/Reykjavik", e32.AtlanticSouthGeorgia = "Atlantic/South_Georgia", e32.AtlanticStHelena = "Atlantic/St_Helena", e32.AtlanticStanley = "Atlantic/Stanley", e32.AustraliaAdelaide = "Australia/Adelaide", e32.AustraliaBrisbane = "Australia/Brisbane", e32.AustraliaBrokenHill = "Australia/Broken_Hill", e32.AustraliaCanberra = "Australia/Canberra", e32.AustraliaCurrie = "Australia/Currie", e32.AustraliaDarwin = "Australia/Darwin", e32.AustraliaEucla = "Australia/Eucla", e32.AustraliaHobart = "Australia/Hobart", e32.AustraliaLindeman = "Australia/Lindeman", e32.AustraliaLordHowe = "Australia/Lord_Howe", e32.AustraliaMelbourne = "Australia/Melbourne", e32.AustraliaPerth = "Australia/Perth", e32.AustraliaSydney = "Australia/Sydney", e32.EuropeAmsterdam = "Europe/Amsterdam", e32.EuropeAndorra = "Europe/Andorra", e32.EuropeAthens = "Europe/Athens", e32.EuropeBelgrade = "Europe/Belgrade", e32.EuropeBerlin = "Europe/Berlin", e32.EuropeBratislava = "Europe/Bratislava", e32.EuropeBrussels = "Europe/Brussels", e32.EuropeBucharest = "Europe/Bucharest", e32.EuropeBudapest = "Europe/Budapest", e32.EuropeBusingen = "Europe/Busingen", e32.EuropeChisinau = "Europe/Chisinau", e32.EuropeCopenhagen = "Europe/Copenhagen", e32.EuropeDublin = "Europe/Dublin", e32.EuropeGibraltar = "Europe/Gibraltar", e32.EuropeGuernsey = "Europe/Guernsey", e32.EuropeHelsinki = "Europe/Helsinki", e32.EuropeIsleOfMan = "Europe/Isle_of_Man", e32.EuropeIstanbul = "Europe/Istanbul", e32.EuropeJersey = "Europe/Jersey", e32.EuropeKaliningrad = "Europe/Kaliningrad", e32.EuropeKiev = "Europe/Kiev", e32.EuropeKirov = "Europe/Kirov", e32.EuropeLisbon = "Europe/Lisbon", e32.EuropeLjubljana = "Europe/Ljubljana", e32.EuropeLondon = "Europe/London", e32.EuropeLuxembourg = "Europe/Luxembourg", e32.EuropeMadrid = "Europe/Madrid", e32.EuropeMalta = "Europe/Malta", e32.EuropeMariehamn = "Europe/Mariehamn", e32.EuropeMinsk = "Europe/Minsk", e32.EuropeMonaco = "Europe/Monaco", e32.EuropeMoscow = "Europe/Moscow", e32.EuropeOslo = "Europe/Oslo", e32.EuropeParis = "Europe/Paris", e32.EuropePodgorica = "Europe/Podgorica", e32.EuropePrague = "Europe/Prague", e32.EuropeRiga = "Europe/Riga", e32.EuropeRome = "Europe/Rome", e32.EuropeSamara = "Europe/Samara", e32.EuropeSanMarino = "Europe/San_Marino", e32.EuropeSarajevo = "Europe/Sarajevo", e32.EuropeSimferopol = "Europe/Simferopol", e32.EuropeSkopje = "Europe/Skopje", e32.EuropeSofia = "Europe/Sofia", e32.EuropeStockholm = "Europe/Stockholm", e32.EuropeTallinn = "Europe/Tallinn", e32.EuropeTirane = "Europe/Tirane", e32.EuropeUzhgorod = "Europe/Uzhgorod", e32.EuropeVaduz = "Europe/Vaduz", e32.EuropeVatican = "Europe/Vatican", e32.EuropeVienna = "Europe/Vienna", e32.EuropeVilnius = "Europe/Vilnius", e32.EuropeVolgograd = "Europe/Volgograd", e32.EuropeWarsaw = "Europe/Warsaw", e32.EuropeZagreb = "Europe/Zagreb", e32.EuropeZaporozhye = "Europe/Zaporozhye", e32.EuropeZurich = "Europe/Zurich", e32.GMT = "GMT", e32.IndianAntananarivo = "Indian/Antananarivo", e32.IndianChagos = "Indian/Chagos", e32.IndianChristmas = "Indian/Christmas", e32.IndianCocos = "Indian/Cocos", e32.IndianComoro = "Indian/Comoro", e32.IndianKerguelen = "Indian/Kerguelen", e32.IndianMahe = "Indian/Mahe", e32.IndianMaldives = "Indian/Maldives", e32.IndianMauritius = "Indian/Mauritius", e32.IndianMayotte = "Indian/Mayotte", e32.IndianReunion = "Indian/Reunion", e32.PacificApia = "Pacific/Apia", e32.PacificAuckland = "Pacific/Auckland", e32.PacificBougainville = "Pacific/Bougainville", e32.PacificChatham = "Pacific/Chatham", e32.PacificChuuk = "Pacific/Chuuk", e32.PacificEaster = "Pacific/Easter", e32.PacificEfate = "Pacific/Efate", e32.PacificEnderbury = "Pacific/Enderbury", e32.PacificFakaofo = "Pacific/Fakaofo", e32.PacificFiji = "Pacific/Fiji", e32.PacificFunafuti = "Pacific/Funafuti", e32.PacificGalapagos = "Pacific/Galapagos", e32.PacificGambier = "Pacific/Gambier", e32.PacificGuadalcanal = "Pacific/Guadalcanal", e32.PacificGuam = "Pacific/Guam", e32.PacificHonolulu = "Pacific/Honolulu", e32.PacificJohnston = "Pacific/Johnston", e32.PacificKiritimati = "Pacific/Kiritimati", e32.PacificKosrae = "Pacific/Kosrae", e32.PacificKwajalein = "Pacific/Kwajalein", e32.PacificMajuro = "Pacific/Majuro", e32.PacificMarquesas = "Pacific/Marquesas", e32.PacificMidway = "Pacific/Midway", e32.PacificNauru = "Pacific/Nauru", e32.PacificNiue = "Pacific/Niue", e32.PacificNorfolk = "Pacific/Norfolk", e32.PacificNoumea = "Pacific/Noumea", e32.PacificPagoPago = "Pacific/Pago_Pago", e32.PacificPalau = "Pacific/Palau", e32.PacificPitcairn = "Pacific/Pitcairn", e32.PacificPohnpei = "Pacific/Pohnpei", e32.PacificPonape = "Pacific/Ponape", e32.PacificPortMoresby = "Pacific/Port_Moresby", e32.PacificRarotonga = "Pacific/Rarotonga", e32.PacificSaipan = "Pacific/Saipan", e32.PacificSamoa = "Pacific/Samoa", e32.PacificTahiti = "Pacific/Tahiti", e32.PacificTarawa = "Pacific/Tarawa", e32.PacificTongatapu = "Pacific/Tongatapu", e32.PacificTruk = "Pacific/Truk", e32.PacificWake = "Pacific/Wake", e32.PacificWallis = "Pacific/Wallis", e32.PacificYap = "Pacific/Yap", e32))(sn2 || {});
var tn2 = ((e32) => (e32.UTC_MINUS_12 = "UTC-12", e32.UTC_MINUS_11_30 = "UTC-11:30", e32.UTC_MINUS_11 = "UTC-11", e32.UTC_MINUS_10_30 = "UTC-10:30", e32.UTC_MINUS_10 = "UTC-10", e32.UTC_MINUS_9_30 = "UTC-9:30", e32.UTC_MINUS_9 = "UTC-09", e32.UTC_MINUS_8_45 = "UTC-8:45", e32.UTC_MINUS_8 = "UTC-08", e32.UTC_MINUS_7 = "UTC-07", e32.UTC_MINUS_6_30 = "UTC-6:30", e32.UTC_MINUS_6 = "UTC-06", e32.UTC_MINUS_5_45 = "UTC-5:45", e32.UTC_MINUS_5_30 = "UTC-5:30", e32.UTC_MINUS_5 = "UTC-05", e32.UTC_MINUS_4_30 = "UTC-4:30", e32.UTC_MINUS_4 = "UTC-04", e32.UTC_MINUS_3_30 = "UTC-3:30", e32.UTC_MINUS_3 = "UTC-03", e32.UTC_MINUS_2_30 = "UTC-2:30", e32.UTC_MINUS_2 = "UTC-02", e32.UTC_MINUS_1 = "UTC-01", e32.UTC_0 = "UTC+00", e32.UTC_PLUS_1 = "UTC+01", e32.UTC_PLUS_2 = "UTC+02", e32.UTC_PLUS_3 = "UTC+03", e32.UTC_PLUS_3_30 = "UTC+3:30", e32.UTC_PLUS_4 = "UTC+04", e32.UTC_PLUS_4_30 = "UTC+4:30", e32.UTC_PLUS_5 = "UTC+05", e32.UTC_PLUS_5_30 = "UTC+5:30", e32.UTC_PLUS_5_45 = "UTC+5:45", e32.UTC_PLUS_6 = "UTC+06", e32.UTC_PLUS_6_30 = "UTC+6:30", e32.UTC_PLUS_7 = "UTC+07", e32.UTC_PLUS_8 = "UTC+08", e32.UTC_PLUS_8_45 = "UTC+8:45", e32.UTC_PLUS_9 = "UTC+09", e32.UTC_PLUS_9_30 = "UTC+9:30", e32.UTC_PLUS_10 = "UTC+10", e32.UTC_PLUS_10_30 = "UTC+10:30", e32.UTC_PLUS_11 = "UTC+11", e32.UTC_PLUS_11_30 = "UTC+11:30", e32.UTC_PLUS_12 = "UTC+12", e32.UTC_PLUS_12_45 = "UTC+12:45", e32.UTC_PLUS_13 = "UTC+13", e32.UTC_PLUS_13_45 = "UTC+13:45", e32.UTC_PLUS_14 = "UTC+14", e32))(tn2 || {});
var on2 = ((e32) => (e32.AcreTime = "ACT", e32.AfghanistanTime = "AFT", e32.AIXCentralEuropeanTime = "DFT", e32.AlaskaDaylightTime = "AKDT", e32.AlaskaStandardTime = "AKST", e32.AlmaAtaTime = "ALMT", e32.AmazonSummerTime = "AMST", e32.AmazonTime = "AMT", e32.AnadyrTime = "ANAT", e32.AqtobeTime = "AQTT", e32.ArabiaStandardTime = "AST", e32.ArgentinaTime = "ART", e32.ArmeniaTime = "AMT", e32.ASEANCommonTime = "ASEAN", e32.AtlanticDaylightTime = "ADT", e32.AtlanticStandardTime = "AST", e32.AustralianCentralDaylightSavingTime = "ACDT", e32.AustralianCentralStandardTime = "ACST", e32.AustralianCentralWesternStandardTime = "ACWST", e32.AustralianEasternDaylightSavingTime = "AEDT", e32.AustralianEasternStandardTime = "AEST", e32.AustralianEasternTime = "AET", e32.AustralianWesternStandardTime = "AWST", e32.AzerbaijanTime = "AZT", e32.AzoresStandardTime = "AZOT", e32.AzoresSummerTime = "AZOST", e32.BakerIslandTime = "BIT", e32.BangladeshStandardTime = "BST", e32.BhutanTime = "BTT", e32.BoliviaTime = "BOT", e32.BougainvilleStandardTime = "BST", e32.BrasiliaSummerTime = "BRST", e32.BrasiliaTime = "BRT", e32.BritishIndianOceanTime = "BIOT", e32.BritishSummerTime = "BST", e32.BruneiTime = "BNT", e32.CapeVerdeTime = "CVT", e32.CentralAfricaTime = "CAT", e32.CentralDaylightTime = "CDT", e32.CentralEuropeanSummerTime = "CEST", e32.CentralEuropeanTime = "CET", e32.CentralIndonesiaTime = "WITA", e32.CentralStandardTime = "CST", e32.CentralTime = "CT", e32.CentralWesternStandardTime = "CWST", e32.ChamorroStandardTime = "CHST", e32.ChathamDaylightTime = "CHADT", e32.ChathamStandardTime = "CHAST", e32.ChileStandardTime = "CLT", e32.ChileSummerTime = "CLST", e32.ChinaStandardTime = "CST", e32.ChoibalsanStandardTime = "CHOT", e32.ChoibalsanSummerTime = "CHOST", e32.ChristmasIslandTime = "CXT", e32.ChuukTime = "CHUT", e32.ClipptertonIslandStandardTime = "CIST", e32.CocosIslandsTime = "CCT", e32.ColombiaSummerTime = "COST", e32.ColombiaTime = "COT", e32.CookIslandTime = "CKT", e32.CoordinatedUniversalTime = "UTC", e32.CubaDaylightTime = "CDT", e32.CubaStandardTime = "CST", e32.DavisTime = "DAVT", e32.DumontDUrvilleTime = "DDUT", e32.EastAfricaTime = "EAT", e32.EasterIslandStandardTime = "EAST", e32.EasterIslandSummerTime = "EASST", e32.EasternCaribbeanTime = "ECT", e32.EasternDaylightTime = "EDT", e32.EasternEuropeanSummerTime = "EEST", e32.EasternEuropeanTime = "EET", e32.EasternGreenlandSummerTime = "EGST", e32.EasternGreenlandTime = "EGT", e32.EasternIndonesianTime = "WIT", e32.EasternStandardTime = "EST", e32.EasternTime = "ET", e32.EcuadorTime = "ECT", e32.FalklandIslandsSummerTime = "FKST", e32.FalklandIslandsTime = "FKT", e32.FernandoDeNoronhaTime = "FNT", e32.FijiTime = "FJT", e32.FrenchGuianaTime = "GFT", e32.FrenchSouthernAndAntarcticTime = "TFT", e32.FurtherEasternEuropeanTime = "FET", e32.GalapagosTime = "GALT", e32.GambierIslandTime = "GIT", e32.GambierIslandsTime = "GAMT", e32.GeorgiaStandardTime = "GET", e32.GilbertIslandTime = "GILT", e32.GreenwichMeanTime = "GMT", e32.GulfStandardTime = "GST", e32.GuyanaTime = "GYT", e32.HawaiiAleutianDaylightTime = "HDT", e32.HawaiiAleutianStandardTime = "HST", e32.HeardAndMcDonaldIslandsTime = "HMT", e32.HeureAvanceeDEuropeCentraleTime = "HAEC", e32.HongKongTime = "HKT", e32.HovdSummerTime = "HOVST", e32.HovdTime = "HOVT", e32.IndianOceanTime = "IOT", e32.IndianStandardTime = "IST", e32.IndochinaTime = "ICT", e32.InternationalDayLineWestTime = "IDLW", e32.IranDaylightTime = "IRDT", e32.IranStandardTime = "IRST", e32.IrishStandardTime = "IST", e32.IrkutskSummerTime = "IRKST", e32.IrkutskTime = "IRKT", e32.IsraelDaylightTime = "IDT", e32.IsraelStandardTime = "IST", e32.JapanStandardTime = "JST", e32.KaliningradTime = "KALT", e32.KamchatkaTime = "KAMT", e32.KoreaStandardTime = "KST", e32.KosraeTime = "KOST", e32.KrasnoyarskSummerTime = "KRAST", e32.KrasnoyarskTime = "KRAT", e32.KyrgyzstanTime = "KGT", e32.LineIslandsTime = "LINT", e32.KazakhstanStandardTime = "KAST", e32.LordHoweStandardTime = "LHST", e32.LordHoweSummerTime = "LHST", e32.MacquarieIslandStationTime = "MIST", e32.MagadanTime = "MAGT", e32.MalaysiaStandardTime = "MST", e32.MalaysiaTime = "MYT", e32.MaldivesTime = "MVT", e32.MarquesasIslandsTime = "MART", e32.MarshallIslandsTime = "MHT", e32.MauritiusTime = "MUT", e32.MawsonStationTime = "MAWT", e32.MiddleEuropeanSummerTime = "MEDT", e32.MiddleEuropeanTime = "MET", e32.MoscowTime = "MSK", e32.MountainDaylightTime = "MDT", e32.MountainStandardTime = "MST", e32.MyanmarStandardTime = "MMT", e32.NepalTime = "NCT", e32.NauruTime = "NRT", e32.NewCaledoniaTime = "NCT", e32.NewZealandDaylightTime = "NZDT", e32.NewZealandStandardTime = "NZST", e32.NewfoundlandDaylightTime = "NDT", e32.NewfoundlandStandardTime = "NST", e32.NewfoundlandTime = "NT", e32.NiueTime = "NUT", e32.NorfolkIslandTime = "NFT", e32.NovosibirskTime = "NOVT", e32.OmskTime = "OMST", e32.OralTime = "ORAT", e32.PacificDaylightTime = "PDT", e32.PacificStandardTime = "PST", e32.PakistanStandardTime = "PKT", e32.PalauTime = "PWT", e32.PapuaNewGuineaTime = "PGT", e32.ParaguaySummerTime = "PYST", e32.ParaguayTime = "PYT", e32.PeruTime = "PET", e32.PhilippineStandardTime = "PHST", e32.PhilippineTime = "PHT", e32.PhoenixIslandTime = "PHOT", e32.PitcairnTime = "PST", e32.PohnpeiStandardTime = "PONT", e32.ReunionTime = "RET", e32.RotheraResearchStationTime = "ROTT", e32.SaintPierreAndMiquelonDaylightTime = "PMDT", e32.SaintPierreAndMiquelonStandardTime = "PMST", e32.SakhalinIslandTime = "SAKT", e32.SamaraTime = "SAMT", e32.SamoaDaylightTime = "SDT", e32.SamoaStandardTime = "SST", e32.SeychellesTime = "SCT", e32.ShowaStationTime = "SYOT", e32.SingaporeStandardTime = "SST", e32.SingaporeTime = "SGT", e32.SolomonIslandsTime = "SBT", e32.SouthAfricanStandardTime = "SAST", e32.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", e32.SrednekolymskTime = "SRET", e32.SriLankaStandardTime = "SLST", e32.SurinameTime = "SRT", e32.TahitiTime = "TAHT", e32.TajikistanTime = "TJT", e32.ThailandStandardTime = "THA", e32.TimorLesteTime = "TLT", e32.TokelauTime = "TKT", e32.TongaTime = "TOT", e32.TurkeyTime = "TRT", e32.TurkmenistanTime = "TMT", e32.TuvaluTime = "TVT", e32.UlaanbaatarStandardTime = "ULAT", e32.UlaanbaatarSummerTime = "ULAST", e32.UruguayStandardTime = "UYT", e32.UruguaySummerTime = "UYST", e32.UzbekistanTime = "UZT", e32.VanuatuTime = "VUT", e32.VenezuelaStandardTime = "VET", e32.VladivostokTime = "VLAT", e32.VolgogradTime = "VOLT", e32.VostokStationTime = "VOST", e32.WakeIslandTime = "WAKT", e32.WestAfricaSummerTime = "WAST", e32.WestAfricaTime = "WAT", e32.WestGreenlandSummerTime = "WGST", e32.WestGreenlandTime = "WGT", e32.WestKazakhstanTime = "WKT", e32.WesternEuropeanSummerTime = "WEDT", e32.WesternEuropeanTime = "WET", e32.WesternIndonesianTime = "WIT", e32.WesternStandardTime = "WST", e32.YakutskTime = "YAKT", e32.YekaterinburgTime = "YEKT", e32))(on2 || {});
var un2 = ((e32) => (e32.Africa = "Africa", e32.Americas = "Americas", e32.Asia = "Asia", e32.Europe = "Europe", e32.Oceania = "Oceania", e32.Polar = "Polar", e32))(un2 || {});
var rn2 = ((e32) => (e32.CentralAmerica = "Central America", e32.EasternAsia = "Eastern Asia", e32.EasternEurope = "Eastern Europe", e32.EasternAfrica = "Eastern Africa", e32.MiddleAfrica = "Middle Africa", e32.MiddleEast = "Middle East", e32.NorthernAfrica = "Northern Africa", e32.NorthernAmerica = "Northern America", e32.NorthernEurope = "Northern Europe", e32.Polynesia = "Polynesia", e32.SouthAmerica = "South America", e32.SouthernAfrica = "Southern Africa", e32.SouthernAsia = "Southern Asia", e32.SouthernEurope = "Southern Europe", e32.WesternAfrica = "Western Africa", e32.WesternAsia = "Western Asia", e32.WesternEurope = "Western Europe", e32.WesternAustralia = "Western Australia", e32))(rn2 || {});
var ze2 = (e32 = 21) => {
  let n2 = "", o2 = crypto.getRandomValues(new Uint8Array(e32));
  for (; e32--; ) {
    let r32 = o2[e32] & 63;
    r32 < 36 ? n2 += r32.toString(36) : r32 < 62 ? n2 += (r32 - 26).toString(36).toUpperCase() : r32 < 63 ? n2 += "_" : n2 += "-";
  }
  return n2;
};
var mn2 = [{ property: "name", enumerable: false }, { property: "message", enumerable: false }, { property: "stack", enumerable: false }, { property: "code", enumerable: true }];
var xe2 = Symbol(".toJSON was called");
var ln2 = (e32) => {
  e32[xe2] = true;
  let n2 = e32.toJSON();
  return delete e32[xe2], n2;
};
var qe2 = ({ from: e32, seen: n2, to_: o2, forceEnumerable: r32, maxDepth: p32, depth: T2 }) => {
  let A2 = o2 || (Array.isArray(e32) ? [] : {});
  if (n2.push(e32), T2 >= p32)
    return A2;
  if (typeof e32.toJSON == "function" && e32[xe2] !== true)
    return ln2(e32);
  for (let [l2, d2] of Object.entries(e32)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(d2)) {
      A2[l2] = "[object Buffer]";
      continue;
    }
    if (d2 !== null && typeof d2 == "object" && typeof d2.pipe == "function") {
      A2[l2] = "[object Stream]";
      continue;
    }
    if (typeof d2 != "function") {
      if (!d2 || typeof d2 != "object") {
        A2[l2] = d2;
        continue;
      }
      if (!n2.includes(e32[l2])) {
        T2++, A2[l2] = qe2({ from: e32[l2], seen: [...n2], forceEnumerable: r32, maxDepth: p32, depth: T2 });
        continue;
      }
      A2[l2] = "[Circular]";
    }
  }
  for (let { property: l2, enumerable: d2 } of mn2)
    typeof e32[l2] == "string" && Object.defineProperty(A2, l2, { value: e32[l2], enumerable: r32 ? true : d2, configurable: true, writable: true });
  return A2;
};
function Ge2(e32, n2 = {}) {
  let { maxDepth: o2 = Number.POSITIVE_INFINITY } = n2;
  return typeof e32 == "object" && e32 !== null ? qe2({ from: e32, seen: [], forceEnumerable: true, maxDepth: o2, depth: 0 }) : typeof e32 == "function" ? `[Function: ${e32.name || "anonymous"}]` : e32;
}
var u2 = ((a) => (a[a.Warning = 999] = "Warning", a[a.Exception = 1e3] = "Exception", a[a.UnmanagedException = 1001] = "UnmanagedException", a[a.CaughtException = 1002] = "CaughtException", a[a.UncaughtException = 1003] = "UncaughtException", a[a.UnhandledPromiseRejectionException = 1004] = "UnhandledPromiseRejectionException", a[a.AuthenticationException = 2e3] = "AuthenticationException", a[a.AuthenticationExpiredAccessTokenException = 2001] = "AuthenticationExpiredAccessTokenException", a[a.AuthenticationInvalidAccessTokenException = 2002] = "AuthenticationInvalidAccessTokenException", a[a.AuthenticationMissingAccessTokenException = 2003] = "AuthenticationMissingAccessTokenException", a[a.AuthenticationExpiredRefreshTokenException = 2004] = "AuthenticationExpiredRefreshTokenException", a[a.AuthenticationInvalidRefreshTokenException = 2005] = "AuthenticationInvalidRefreshTokenException", a[a.AuthenticationMissingRefreshTokenException = 2006] = "AuthenticationMissingRefreshTokenException", a[a.AuthenticationMissingDeviceKeyException = 2007] = "AuthenticationMissingDeviceKeyException", a[a.AuthenticationUnAuthorizedAccessException = 2008] = "AuthenticationUnAuthorizedAccessException", a[a.AuthenticationCodeMismatchException = 2009] = "AuthenticationCodeMismatchException", a[a.AuthenticationExpiredCodeException = 2010] = "AuthenticationExpiredCodeException", a[a.AuthenticationLoginException = 2011] = "AuthenticationLoginException", a[a.AuthenticationLoginInvalidCredentialsException = 2012] = "AuthenticationLoginInvalidCredentialsException", a[a.AuthenticationLoginTooManyFailedAttemptsException = 2013] = "AuthenticationLoginTooManyFailedAttemptsException", a[a.AuthenticationLimitExceededException = 2014] = "AuthenticationLimitExceededException", a[a.AuthenticationUnauthorizedAccessException = 2015] = "AuthenticationUnauthorizedAccessException", a[a.AuthenticationTooManyRequestsException = 2016] = "AuthenticationTooManyRequestsException", a[a.AuthenticationUserNotFoundException = 2017] = "AuthenticationUserNotFoundException", a[a.AuthenticationSignupException = 2018] = "AuthenticationSignupException", a[a.AuthenticationUsernameAvailabilityCheckException = 2019] = "AuthenticationUsernameAvailabilityCheckException", a[a.AuthenticationUsernameExistsException = 2020] = "AuthenticationUsernameExistsException", a[a.AuthenticationAliasExistException = 2021] = "AuthenticationAliasExistException", a[a.AuthenticationCodeDeliveryFailureException = 2022] = "AuthenticationCodeDeliveryFailureException", a[a.AuthenticationMFAMethodNotFoundException = 2023] = "AuthenticationMFAMethodNotFoundException", a[a.AuthenticationNotAuthorizedException = 2024] = "AuthenticationNotAuthorizedException", a[a.AuthenticationPasswordResetRequiredException = 2025] = "AuthenticationPasswordResetRequiredException", a[a.AuthenticationUserNotConfirmedException = 2026] = "AuthenticationUserNotConfirmedException", a[a.DatabaseException = 3e3] = "DatabaseException", a[a.SequelizeNotInitializedException = 3001] = "SequelizeNotInitializedException", a[a.ProcessException = 4e3] = "ProcessException", a[a.ProcessWarningException = 4001] = "ProcessWarningException", a[a.KillProcessException = 4002] = "KillProcessException", a[a.FatalException = 4003] = "FatalException", a[a.ProcessSigTermException = 4004] = "ProcessSigTermException", a[a.ProcessSigIntException = 4005] = "ProcessSigIntException", a[a.MissingEnvironmentVariable = 4006] = "MissingEnvironmentVariable", a[a.NetworkException = 5e3] = "NetworkException", a[a.HttpException = 5001] = "HttpException", a[a.HttpRequestException = 5002] = "HttpRequestException", a[a.HttpRequestResourceNotFoundException = 5003] = "HttpRequestResourceNotFoundException", a[a.HttpResponseException = 5004] = "HttpResponseException", a[a.ServiceProviderException = 6e3] = "ServiceProviderException", a[a.AWSException = 6001] = "AWSException", a[a.AWSMissingAccessKeyException = 6002] = "AWSMissingAccessKeyException", a[a.AWSMissingSecretKeyException = 6003] = "AWSMissingSecretKeyException", a[a.CognitoException = 6004] = "CognitoException", a[a.CognitoInternalErrorException = 6005] = "CognitoInternalErrorException", a[a.CognitoInvalidEmailRoleAccessPolicyException = 6006] = "CognitoInvalidEmailRoleAccessPolicyException", a[a.CognitoInvalidLambdaResponseException = 6007] = "CognitoInvalidLambdaResponseException", a[a.CognitoUserLambdaValidationException = 6008] = "CognitoUserLambdaValidationException", a[a.CognitoInvalidParameterException = 6009] = "CognitoInvalidParameterException", a[a.CognitoInvalidSmsRoleAccessPolicyException = 6010] = "CognitoInvalidSmsRoleAccessPolicyException", a[a.CognitoInvalidSmsRoleTrustRelationshipException = 6011] = "CognitoInvalidSmsRoleTrustRelationshipException", a[a.CognitoInvalidUserPoolConfigurationException = 6012] = "CognitoInvalidUserPoolConfigurationException", a[a.CognitoResourceNotFoundException = 6013] = "CognitoResourceNotFoundException", a[a.CognitoMissingUserPoolClientIdException = 6014] = "CognitoMissingUserPoolClientIdException", a[a.CognitoMissingUserPoolIdException = 6015] = "CognitoMissingUserPoolIdException", a[a.CognitoUnexpectedLambdaException = 6016] = "CognitoUnexpectedLambdaException", a[a.StripeException = 6017] = "StripeException", a[a.StripeMissingSecretKeyException = 6018] = "StripeMissingSecretKeyException", a[a.StripeSubscriptionCreationFailedException = 6019] = "StripeSubscriptionCreationFailedException", a[a.StripePaymentMethodRequiredException = 6020] = "StripePaymentMethodRequiredException", a[a.UserException = 7e3] = "UserException", a[a.NullUserException = 7001] = "NullUserException", a[a.UserStateConflictException = 7002] = "UserStateConflictException", a[a.NullAccountException = 7003] = "NullAccountException", a[a.ValidationException = 8e3] = "ValidationException", a[a.InvalidTypeException = 8001] = "InvalidTypeException", a[a.MissingArgumentException = 8002] = "MissingArgumentException", a[a.MissingPropertyException = 8003] = "MissingPropertyException", a[a.InvalidArgumentException = 8004] = "InvalidArgumentException", a[a.InvalidPropertyException = 8005] = "InvalidPropertyException", a[a.MissingRequestBodyPropertyException = 8006] = "MissingRequestBodyPropertyException", a[a.MissingRequestUrlParameterException = 8007] = "MissingRequestUrlParameterException", a[a.MissingCookieException = 8008] = "MissingCookieException", a))(u2 || {});
var s2 = class extends Error {
  cause;
  code = 1e3;
  context;
  created;
  data;
  description;
  model;
  form;
  friendlyMessage = "An unknown error has occurred. :(";
  id;
  logLevel = i2.Exception;
  origin;
  pii;
  request;
  response;
  scope;
  remediation;
  tags;
  task;
  user;
  __proto__;
  constructor(n2, o2) {
    super(n2);
    let r32 = new.target.prototype;
    if (this.__proto__ = r32, Error.captureStackTrace && Error.captureStackTrace(o2?.cause ?? this, s2), this.id = ze2(), this.name = this.constructor.name, this.created = new Date().toString(), this.description = o2?.description ?? this.description, this.remediation = o2?.remediation ?? this.remediation, this.scope = o2?.scope ?? this.scope, o2) {
      let { cause: p32, context: T2, data: A2, model: l2, form: d2, origin: Ye, pii: Ze, request: Je, response: Qe, tags: $e, task: Xe, user: ea32 } = o2;
      this.cause = p32, this.context = T2, this.data = A2, this.model = l2, this.form = d2, this.origin = Ye, this.pii = Ze, this.request = Je, this.response = Qe, this.task = Xe, this.tags = $e, this.user = ea32;
    }
  }
  toJSON() {
    return Ge2(this);
  }
};
var Fe2 = new Re2();
var c2 = ((r32) => (r32.Simple = "simple", r32.ExponentialBackoff = "exponential", r32.CircuitBreaker = "circuit_breaker", r32))(c2 || {});
var v2 = class extends s2 {
  code = 1001;
  description = `An "Error" object that isn't managed by AppLab`;
  friendlyMessage = "An unknown error has occurred.";
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var F2 = class extends s2 {
  code = 1002;
  description = "An exception was caught within a try block.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var M2 = class extends s2 {
  code = 1003;
  description = "An uncaught exception bubbled up and was caught automatically.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var S2 = class extends s2 {
  code = 1004;
  description = "An unhandled promise rejection was caught automatically.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3 } };
};
var g2 = class extends s2 {
  code = 4e3;
  description = "A exception was caught in a process.";
  logLevel = i2.Exception;
};
var L2 = class extends g2 {
  code = 4001;
  description = "A warning was caught in a process.";
  logLevel = i2.Warning;
};
var C2 = class extends g2 {
  code = 4002;
  description = 'Exception thrown to kill a Node.js "gracefully".';
  logLevel = i2.Critical;
};
var b2 = class extends g2 {
  code = 4004;
  description = "Process received SIGTERM termination code.";
  logLevel = i2.Critical;
};
var y2 = class extends g2 {
  code = 4005;
  description = "Process received SIGINT termination code.";
  logLevel = i2.Critical;
};
var P2 = class extends g2 {
  code = 4003;
  description = "An fatal exception occurred which has crashed the server.";
  logLevel = i2.Critical;
};
var R2 = class extends g2 {
  code = 4006;
  description = "An environment variable is not set or unavailable.";
  logLevel = i2.Critical;
};
function Me(e32) {
  process.on("SIGINT", () => {
    let n2 = new y2("SIGINT signal received.", {});
    e32 && e32(n2);
  });
}
function Le(e32) {
  process.on("SIGTERM", () => {
    let n2 = new b2("SIGTERM signal received", {});
    e32 && e32(n2);
  });
}
function Pe(e32) {
  process.on("uncaughtException", async (n2) => {
    n2.name !== C2.name && e32 && e32(n2);
  }), process.on("unhandledRejection", async (n2) => {
    if (n2.name !== C2.name) {
      let o2 = new S2(`Unhandled Rejection: ${n2.name}`, { cause: n2 });
      e32 && e32(o2);
    }
  }), process.on("warning", (n2) => {
    e32 && e32(n2);
  });
}
var we = class {
  browser = false;
  process = false;
  constructor({ browser: n2, process: o2, processExceptionsHandler: r32, processInteruptHandler: p32, processTerminationHandler: T2 }) {
    this.browser = n2, this.process = o2, o2 && (Pe(r32), Me(p32), Le(T2));
  }
};
var t2 = class extends s2 {
  code = 2e3;
  description = "Generic or unknown exceptions associated with user authentication.";
  friendlyMessage = "An unknown error occurred.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var z2 = class extends t2 {
  code = 2015;
  description = "User lacks permissions to access the requested resource.";
  logLevel = i2.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var q2 = class extends t2 {
  code = 2014;
  description = "This exception is thrown when a user exceeds the limit for a requested AWS resource";
  friendlyMessage = "You are trying to access this resource too often.";
  logLevel = i2.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var G2 = class extends t2 {
  code = 2024;
  description = "The Auth user does not have permission to perform this action.";
  friendlyMessage = "You need to be logged in or have proper permissions to access this resource.";
  logLevel = i2.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var K2 = class extends t2 {
  code = 2016;
  description = "This exception is thrown when the user has made too many requests for a given operation.";
  friendlyMessage = "You are trying to access this resource too often.";
  logLevel = i2.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var w2 = class extends t2 {
  code = 2017;
  description = "This exception is thrown when the Auth service cannot find a user with the provided username.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var O2 = class extends t2 {
  code = 2025;
  description = "This exception is thrown when a password reset is required.";
  friendlyMessage = "A password reset is required in order to login.";
  logLevel = i2.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var H2 = class extends t2 {
  code = 2011;
  description = "An exception occurred while logging a user in.";
  friendlyMessage = "An unknown error occurred.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var W2 = class extends t2 {
  code = 2012;
  description = "Incorrect username or password provided.";
  friendlyMessage = "Incorrect username or password.";
  logLevel = i2.Info;
  remediation = { response: { code: 401 }, retry: false };
};
var V2 = class extends t2 {
  code = 2013;
  description = "This exception is thrown when the user has provided an incorrect username or password too many times.";
  friendlyMessage = "You've provided an incorrect username or password too many times.";
  logLevel = i2.Warning;
  remediation = { response: { code: 429 }, retry: false };
};
var j2 = class extends t2 {
  code = 2023;
  description = "This exception is thrown when the Auth service cannot find a multi-factor authentication (MFA) method.";
  logLevel = i2.Exception;
  remediation = { response: { code: 403 }, retry: { limit: 3, strategy: "simple" } };
};
var Y2 = class extends t2 {
  code = 2018;
  description = "An exception occurred while signing up a user.";
  friendlyMessage = "An error occurred while signing up.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var _2 = class extends t2 {
  code = 2019;
  description = "An exception occurred while checking if a username is available.";
  friendlyMessage = "An error occurred while checking if a username is available.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: true };
};
var Z2 = class extends _2 {
  code = 2020;
  description = "User with email or phone number already exists.";
  friendlyMessage = "A user with that email already exists.";
  logLevel = i2.Warning;
  remediation = { response: { code: 400 }, retry: false };
};
var J2 = class extends _2 {
  code = 2021;
  description = "This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Oe2 = class extends t2 {
  code = 2001;
  description = "The access token associated with a session has expired.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var He2 = class extends t2 {
  code = 2002;
  description = "The access token associated with a session is invalid.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var We2 = class extends t2 {
  code = 2003;
  description = "The access token associated with a session is missing.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var Q2 = class extends t2 {
  code = 2004;
  description = "The refresh token associated with a session has expired.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var $2 = class extends t2 {
  code = 2005;
  description = "The refresh token associated with a session is invalid.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var k2 = class extends t2 {
  code = 2006;
  description = "The refresh token associated with a session is missing.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var X2 = class extends t2 {
  code = 2022;
  description = "This exception is thrown when a verification code fails to deliver successfully.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var ee2 = class extends t2 {
  code = 2009;
  description = "The verification code provided is incorrect";
  logLevel = i2.Warning;
  remediation = { response: { code: 400 }, retry: false };
};
var ae2 = class extends t2 {
  code = 2010;
  description = "The verification code provided has expired";
  logLevel = i2.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var ie2 = class extends t2 {
  code = 2026;
  description = "This exception is thrown when a user who is not confirmed attempts to login.";
  friendlyMessage = "You haven't verified your email address or telephone number yet";
  logLevel = i2.Warning;
  remediation = { response: { code: 403 }, retry: false };
};
var B2 = class extends s2 {
  code = 3e3;
  description = "Generic or unknown database exceptions.";
  logLevel = i2.Exception;
};
var ne2 = class extends B2 {
  code = 3001;
  description = "Generic or unknown database exceptions.";
  logLevel = i2.Exception;
};
var D2 = class extends s2 {
  code = 5e3;
  description = "A network related issue has occurred.";
  logLevel = i2.Exception;
};
var N2 = class extends D2 {
  code = 5001;
  description = "A generic or unknown exception occurred related to an HTTP request.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var E2 = class extends N2 {
  code = 5002;
  description = "Base class for generic or unknown exceptions occuring during an HTTP request.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var se2 = class extends E2 {
  code = 5003;
  description = "The requested HTTP resource could not be found.";
  logLevel = i2.Exception;
  remediation = { response: { code: 404 }, retry: { limit: 3, strategy: "circuit_breaker" } };
};
var te2 = class extends E2 {
  code = 8006;
  description = "HTTP request body is missing a required property.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var oe2 = class extends E2 {
  code = 8007;
  description = "HTTP request URL is missing a required parameter.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var ue2 = class extends E2 {
  code = 8008;
  description = "A required cookie is missing.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var re2 = class extends N2 {
  code = 5002;
  description = "Generic or unknown exceptions related to HTTP responses.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: false };
};
var f2 = class extends s2 {
  code = 6e3;
  description = "An error originating from a third-party or service provider occurred.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var h2 = class extends f2 {
  code = 6001;
  description = "An exception originating from the AWS integration occurred.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var x2 = class extends h2 {
  code = 6018;
  description = "Missing AWS access key token.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var cn2 = class extends h2 {
  code = 6018;
  description = "Missing AWS secret key token.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var m2 = class extends h2 {
  code = 6001;
  description = "An exception originating from the AWS Cognito integration occurred.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var me2 = class extends m2 {
  code = 6005;
  description = "An internal error occurred originating from AWS Cognito.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var le2 = class extends m2 {
  code = 6012;
  description = "This exception is thrown when the user pool configuration is invalid.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var de2 = class extends m2 {
  code = 6006;
  description = "There is an access policy exception for the role provided for email configuration.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ce2 = class extends m2 {
  code = 6010;
  description = "This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var Ae2 = class extends m2 {
  code = 6011;
  description = "This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust -idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ge2 = class extends m2 {
  code = 6014;
  description = "Cognito user pool client ID configuration is missing.";
  logLevel = i2.Critical;
};
var Te2 = class extends m2 {
  code = 6015;
  description = "Cognito user pool ID configuration is missing.";
  logLevel = i2.Critical;
};
var pe2 = class extends m2 {
  code = 6016;
  description = "This exception is thrown when the Auth service encounters an unexpected exception with the AWS Lambda service.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ee2 = class extends m2 {
  code = 6009;
  description = "This exception is thrown when the Cognito service encounters an invalid parameter.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var fe2 = class extends m2 {
  code = 6007;
  description = "This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var he2 = class extends m2 {
  code = 6013;
  description = "This exception is thrown when the Cognito service cannot find the requested resource.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ce2 = class extends m2 {
  code = 6008;
  description = "This exception is thrown when the Cognito service encounters a user validation exception with the AWS Lambda service.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var I2 = class extends f2 {
  code = 6017;
  description = "An exception occurred relating to Stripe.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Ie2 = class extends I2 {
  code = 6018;
  description = "The Stripe secret key token is missing.";
  logLevel = i2.Critical;
  remediation = { response: { code: 500 }, retry: false };
};
var ve2 = class extends I2 {
  code = 6019;
  description = "Stripe subscription creation failed.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var Se2 = class extends I2 {
  code = 6020;
  description = "An updated payment method is required.";
  logLevel = i2.Exception;
  remediation = { response: { code: 500 }, retry: { limit: 3, strategy: "simple" } };
};
var U2 = class extends s2 {
  code = 7e3;
  description = "Generic or unknown exceptions related to a user.";
  logLevel = i2.Exception;
};
var be2 = class extends U2 {
  code = 7001;
  description = "An operation was performed on behalf a user that cannot be found in the database.";
  logLevel = i2.Critical;
};
var ye2 = class extends U2 {
  code = 7002;
  description = "Exception used for user state that exists in one system or another and isn't being actively managed, or synced between all systems, or at least differences accounted for.";
  logLevel = i2.Critical;
};
var _e2 = class extends s2 {
  code = 8e3;
  description = "Generic or otherwise unknown input validation exception.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Be2 = class extends s2 {
  code = 8001;
  description = "Instance type is invalid.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var De2 = class extends s2 {
  code = 8002;
  description = "A required argument is missing.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Ne2 = class extends s2 {
  code = 8003;
  description = "A required property is missing.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var Ue2 = class extends s2 {
  code = 8004;
  description = "An argument is invalid.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var ke2 = class extends s2 {
  code = 8005;
  description = "An object property is invalid.";
  logLevel = i2.Exception;
  remediation = { response: { code: 400 }, retry: false };
};
var An2 = { [1e3]: s2, [1001]: v2, [1002]: F2, [1003]: M2, [1004]: S2, [2e3]: t2, [2004]: Q2, [2005]: $2, [2011]: H2, [2012]: W2, [2013]: V2, [2007]: k2, [2006]: k2, [2015]: z2, [2009]: ee2, [2010]: ae2, [2014]: q2, [2024]: G2, [2016]: K2, [2017]: w2, [2018]: Y2, [2019]: _2, [2021]: J2, [2020]: Z2, [2022]: X2, [2023]: j2, [2025]: O2, [2026]: ie2, [3e3]: B2, [3001]: ne2, [6e3]: f2, [6001]: h2, [6002]: x2, [6003]: x2, [6004]: m2, [6005]: me2, [6006]: de2, [6010]: ce2, [6011]: Ae2, [6016]: pe2, [6012]: le2, [6007]: fe2, [6009]: Ee2, [6015]: Te2, [6014]: ge2, [6013]: he2, [6008]: Ce2, [6017]: I2, [6019]: ve2, [6018]: Ie2, [6020]: Se2, [5e3]: D2, [5001]: N2, [5002]: E2, [5003]: se2, [5004]: re2, [8006]: te2, [8007]: oe2, [8008]: ue2, [8e3]: _e2, [8004]: Ue2, [8005]: ke2, [8001]: Be2, [8002]: De2, [8003]: Ne2, [4e3]: g2, [4001]: L2, [4004]: b2, [4005]: y2, [4003]: P2, [4006]: R2, [4002]: C2, [7e3]: U2, [7001]: be2, [7002]: ye2 };
var Ve2 = class extends t2 {
  code = 2007;
  description = "The device key associated with the user's session is missing.";
  logLevel = i2.Warning;
  remediation = { response: { code: 401 }, retry: false };
};
var je = class {
  exception = void 0;
  handleException(n2, { res: o2 }) {
    this.exception = n2 instanceof s2 ? n2 : new v2(n2.name, { cause: n2 });
    let r32 = this.getExceptionResponse();
    return r32 ? o2.status(r32.code).json(r32.body) : o2.status(500).json({ code: 99999, description: "An unknown error occurred.", friendlyMessage: "An unknown error occurred." });
  }
  getExceptionResponse() {
    if (this.exception) {
      let { code: n2, description: o2, friendlyMessage: r32, remediation: p32 } = this.exception, T2 = p32?.response?.code ?? 500;
      return { body: { code: n2, description: o2, friendlyMessage: r32 }, code: T2 };
    }
    return null;
  }
};
var r = class {
  analytics(o2) {
  }
  critical(o2) {
  }
  debug(o2) {
  }
  async exception(o2) {
    console.log(o2);
  }
  http(o2) {
  }
  async info(o2) {
    console.log(o2);
  }
  warning(o2) {
  }
  constructor(o2) {
  }
};
var p = r;
var e = p;
var i22 = ((a) => (a.Comment = "comment", a.Create = "create", a.Delete = "delete", a.Edit = "edit", a.Invoice = "invoice", a.Message = "message", a.PageView = "pageView", a.Paid = "paid", a.Payment = "payment", a.Purchase = "purchase", a.Referral = "referral", a.Renewal = "renewal", a.Signup = "signup", a.Subscription = "subscription", a.Upgrade = "upgrade", a))(i22 || {});
var n = ((a) => (a.Business = "business", a.Engineering = "engineering", a.Exception = "exception", a.LogMessage = "log-message", a.Marketing = "marketing", a.PageLeave = "page-leave", a.PageView = "page-view", a.Product = "product", a.QualityManagement = "quality-management", a.UserAccess = "user-access", a.UserLogin = "user-login", a.UserLogout = "user-logout", a.UserSignup = "user-signup", a.UserPreferencesChanged = "user-preferences-changed", a.WebsiteVisit = "website-visit", a))(n || {});
var u22 = ((a) => (a.CloseTab = "close-tab", a.ExternalLink = "external-link", a.NavigateAway = "navigate-away", a.Unknown = "unknown", a))(u22 || {});
var s22 = ((a) => (a.Ecs = "Ecs", a))(s22 || {});
var t22 = ((a) => (a.Finished = "Finished", a.Queued = "Queued", a.Running = "Running", a.Started = "Started", a))(t22 || {});
var o = ((a) => (a.Mobile = "mobile", a.TV = "tv", a.Watch = "watch", a.Web = "web", a))(o || {});
var e2 = ((a) => (a.Development = "Development", a.NonProduction = "NonProduction", a.Production = "Production", a))(e2 || {});
var r2 = ((a) => (a.Completed = "completed", a.Started = "started", a.Uncompleted = "uncompleted", a))(r2 || {});
var m22 = ((a) => (a.Build = "Build", a.Deployment = "Deployment", a.Test = "Test", a))(m22 || {});
var l = ((a) => (a.Canceled = "Canceled", a.Completed = "Completed", a.Failed = "Failed", a.Running = "Running", a.Queued = "Queued", a.Waiting = "Waiting", a))(l || {});
var d = ((a) => (a.Canceled = "Canceled", a.Completed = "Completed", a.Failed = "Failed", a.Running = "Running", a.Queued = "Queued", a.Waiting = "Waiting", a))(d || {});
var A = ((a) => (a.ForgotPassword = "forgot_password", a.Index = "index", a.Login = "login", a.PageNotFound = "404", a.Signup = "signup", a.VerifyCode = "verify_code", a))(A || {});
var c22 = ((a) => (a.Info = "info", a.Warning = "warning", a.Error = "error", a.Success = "success", a))(c22 || {});
var g22 = ((a) => (a.Details = "details", a.Dialog = "dialog", a))(g22 || {});
var T = ((a) => (a.Info = "info", a.Warning = "warning", a.Error = "error", a.Success = "success", a))(T || {});
var C22 = ((a) => (a.AccountBalance = "AccountBalance", a.UserAssets = "UserAssets", a.UserCreditCardDebt = "UserCreditCardDebt", a.UserCreditLimit = "UserCreditLimit", a.UserCreditUtilization = "UserCreditUtilization", a.UserDebt = "UserDebt", a.UserInvestments = "UserInvestments", a.UserRetirement = "UserRetirement", a.UserSavings = "UserSavings", a))(C22 || {});
var E22 = ((a) => (a.DateTime = "date_time", a.True = "true", a.False = "false", a.UniqueId = "unique_id", a))(E22 || {});
var f22 = ((a) => (a.DomainModel = "domain_entity", a.GenericModel = "generic_entity", a))(f22 || {});
var I22 = ((a) => (a.AirportCode = "airport-code", a.BankIDCode = "bank-id-code", a.BitcoinAddress = "bitcoin-address", a.Boolean = "boolean", a.City = "city", a.Color = "color", a.CountryCode = "country-code", a.CreditCard = "credit-card", a.CurrencyAmount = "currency-amount", a.CurrencyCode = "currency-code", a.DataURI = "data-uri", a.Date = "date", a.DateRange = "date-range", a.DateTime = "date-time", a.DayOfMonth = "day-of-month", a.DomainName = "domain-name", a.EmailAddress = "email-address", a.EthereumAddress = "ethereum-address", a.EAN = "european-article-number", a.EIN = "employer-identification-number", a.Float = "float", a.GeographicCoordinate = "geographic-coordinate", a.GeographicCoordinates = "geographic-coordinates", a.GitRepositoryURL = "git-repository-url", a.HSLColor = "hsl-color", a.HexColor = "hex-color", a.Hexadecimal = "hexadecimal", a.IBAN = "international-bank-account-number", a.IMEI = "international-mobile-equipment-identifier", a.IPAddress = "ip-address", a.IPAddressRange = "ip-address-range", a.ISBN = "international-standard-book-number", a.ISIN = "international-stock-number", a.ISMN = "international-standard-music-number", a.ISSN = "international-standard-serial-number", a.ISO8601 = "iso-8601", a.ISO31661Alpha2 = "iso-31661-alpha-2", a.ISO31661Alpha3 = "iso-31661-alpha-3", a.ISO4217 = "iso-4217", a.Image = "image", a.Integer = "integer", a.JSON = "json", a.LanguageCode = "language-code", a.LicensePlateNumber = "license-plate-number", a.LongText = "long-text", a.MD5 = "md5", a.Markdown = "markdown", a.Menu = "menu", a.Number = "number", a.MACAddress = "mac-address", a.MagnetURI = "magnet-uri", a.MimeType = "mime-type", a.Month = "month", a.Password = "password", a.PassportNumber = "passport-number", a.Percent = "percent", a.PhoneNumber = "phone-number", a.Port = "port", a.PostalCode = "postal-code", a.Province = "province", a.RFC3339 = "rfc-3339", a.RGBColor = "rgb-color", a.SemanticVersion = "semantic-version", a.SSN = "social-security-number", a.State = "state", a.StreetAddress = "street-address", a.String = "string", a.Tags = "tags", a.TaxIDNumber = "tax-id-number", a.Time = "time", a.TimeOfDay = "time-of-day", a.TimeRange = "time-range", a.TimezoneRegion = "timezone-region", a.URL = "url", a.URLPath = "url-path", a.UUID = "uuid", a.VATIDNumber = "value-added-tax-id-number", a.VerificationCode = "verification-code", a.Video = "video", a.Weekday = "weekday", a.Year = "year", a))(I22 || {});
var h22 = ((a) => (a.Critical = "Critical", a.Error = "Error", a.Fatal = "Fatal", a.Warning = "Warning", a))(h22 || {});
var S22 = ((a) => (a.Contains = "contains", a.HasCharacterCount = "has-character-count", a.HasNumberCount = "has-number-count", a.HasLetterCount = "has-letter-count", a.HasLowercaseCount = "has-lowercase-count", a.HasSpacesCount = "has-spaces-count", a.HasSymbolCount = "has-symbol-count", a.HasUppercaseCount = "has-uppercase-count", a.IsAfter = "is-after", a.IsAfterOrEqual = "is-after-or-equal", a.IsAirport = "is-airport", a.IsAlpha = "is-alpha", a.IsAlphanumeric = "is-alphanumeric", a.IsAlgorithmHash = "is-algorithm-hash", a.IsAscii = "is-ascii", a.IsBase64 = "is-base-64", a.IsBefore = "is-before", a.IsBeforeOrAfter = "is-before-or-after", a.IsBeforeOrEqual = "is-before-or-equal", a.IsBetween = "is-between", a.IsBIC = "is-bic", a.IsBitcoinAddress = "is-bitcoin-address", a.IsBoolean = "is-boolean", a.IsColor = "is-color", a.IsComplexEnough = "is-complex-enough", a.IsCountry = "is-country", a.IsCreditCard = "is-credit-card", a.IsCurrency = "is-currency", a.IsDataURI = "is-data-uri", a.IsDate = "is-date", a.IsDateRange = "is-date-range", a.IsDateTime = "is-date-time", a.IsDayOfMonth = "is-day-of-month", a.IsDecimal = "is-decimal", a.IsDivisibleBy = "is-divisible-by", a.IsDomainName = "is-domain-name", a.IsEmailAddress = "is-email-address", a.IsEthereumAddress = "is-ethereum-address", a.IsEAN = "is-ean", a.IsEIN = "is-ein", a.IsEqual = "is-equal", a.IsEvenNumber = "is-even-number", a.IsFloat = "is-float", a.IsIBAN = "is-iban", a.IsGreaterThan = "greater-than", a.IsGreaterThanOrEqual = "greater-than-or-equal", a.IsHSLColor = "is-hsl-color", a.IsHexColor = "is-hex-color", a.IsHexadecimal = "is-hexadecimal", a.IsIdentityCardCode = "is-identity-card-code", a.IsIMEI = "is-imei", a.IsInIPAddressRange = "is-in-ip-address-range", a.IsInList = "is-in-list", a.IsInTheLast = "is-in-the-last", a.IsInteger = "is-integer", a.IsIPAddress = "is-ip-address", a.IsIPAddressRange = "is-ip-address-range", a.IsISBN = "is-isbn", a.IsISIN = "is-isin", a.IsISMN = "is-ismn", a.IsISRC = "is-isrc", a.IsISSN = "is-issn", a.IsISO4217 = "is-iso-4217", a.IsISO8601 = "is-iso-8601", a.IsISO31661Alpha2 = "is-iso-31661-alpha-2", a.IsISO31661Alpha3 = "is-iso-31661-alpha-3", a.IsJSON = "is-json", a.IsLanguage = "is-language", a.IsLatitude = "is-latitude", a.IsLongitude = "is-longitude", a.IsLengthEqual = "is-length-equal", a.IsLengthGreaterThan = "is-length-greater-than", a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", a.IsLengthLessThan = "is-length-less-than", a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", a.IsLessThan = "less-than", a.IsLessThanOrEqual = "less-than-or-equal", a.IsLicensePlateNumber = "is-license-plate-number", a.IsLowercase = "is-lowercase", a.IsOctal = "is-octal", a.IsMACAddress = "is-mac-address", a.IsMD5 = "is-md5", a.IsMagnetURI = "is-magnet-uri", a.IsMarkdown = "is-markdown", a.IsMimeType = "is-mime-type", a.IsMonth = "is-month", a.IsNegativeNumber = "is-negative-number", a.IsNotDate = "is-not-date", a.IsNotEqual = "is-not-equal", a.IsNotInIPAddressRange = "is-not-in-ip-address-range", a.IsNotInList = "is-not-in-list", a.IsNotNull = "is-not-null", a.IsNotRegexMatch = "is-not-regex-match", a.IsNotToday = "is-not-today", a.IsNumber = "is-number", a.IsNumeric = "is-numeric", a.IsOddNumber = "is-odd-number", a.IsPassportNumber = "is-passport-number", a.IsPhoneNumber = "is-phone-number", a.IsPort = "is-port", a.IsPositiveNumber = "is-positive-number", a.IsPostalCode = "is-postal-code", a.IsProvince = "is-province", a.IsRGBColor = "is-rgb-color", a.IsRegexMatch = "is-regex-match", a.IsRequired = "is-required", a.IsSemanticVersion = "is-semantic-version", a.IsSlug = "is-slug", a.IsSSN = "is-ssn", a.IsState = "is-state", a.IsStreetAddress = "is-street-address", a.IsString = "is-string", a.IsStrongPassword = "is-strong-password", a.IsTags = "is-tags", a.IsTaxIDNumber = "is-tax-id-number", a.IsThisMonth = "is-this-month", a.IsThisQuarter = "is-this-quarter", a.IsThisWeek = "is-this-week", a.IsThisWeekend = "is-this-weekend", a.IsThisYear = "is-this-year", a.IsTime = "is-time", a.IsTimeOfDay = "is-time-of-day", a.IsTimeRange = "is-time-range", a.IsToday = "is-today", a.IsURL = "is-url", a.IsUUID = "is-uuid", a.IsUppercase = "is-uppercase", a.IsUsernameAvailable = "is-username-available", a.IsValidStreetAddress = "is-valid-street-address", a.IsVATIDNumber = "is-vat-id-number", a.IsWeekday = "is-weekday", a.IsWeekend = "is-weekend", a.IsYear = "is-year", a))(S22 || {});
var p2 = ((a) => (a.IsAuthenticated = "is-authenticated", a.IsNotAuthenticated = "is-not-authenticated", a.IsUsernameAvailable = "is-username-available", a.PasswordMismatch = "password-mismatch", a))(p2 || {});
var b22 = ((a) => (a[a.IsHSLColor = "is-hsl-color"] = "IsHSLColor", a[a.IsHexColor = "is-hex-color"] = "IsHexColor", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsRGBColor = "is-rgb-color"] = "IsRGBColor", a[a.IsString = "is-string"] = "IsString", a))(b22 || {});
var v22 = ((a) => (a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsCurrency = "is-currency"] = "IsCurrency", a[a.IsDecimal = "is-decimal"] = "IsDecimal", a[a.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsFloat = "is-float"] = "IsFloat", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsISO8601 = "is-iso-8601"] = "IsISO8601", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", a))(v22 || {});
var _22 = ((a) => (a[a.IsBitcoinAddress = "is-bitcoin-address"] = "IsBitcoinAddress", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(_22 || {});
var B22 = ((a) => (a[a.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(B22 || {});
var y22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsJSON = "is-json"] = "IsJSON", a[a.IsLanguage = "is-language"] = "IsLanguage", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(y22 || {});
var D22 = ((a) => (a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(D22 || {});
var N22 = ((a) => (a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsCountry = "is-country"] = "IsCountry", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(N22 || {});
var U22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsFloat = "is-float"] = "IsFloat", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a))(U22 || {});
var k22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsFloat = "is-float"] = "IsFloat", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a))(k22 || {});
var F22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsPostalCode = "is-postal-code"] = "IsPostalCode", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(F22 || {});
var M22 = ((a) => (a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsProvince = "is-province"] = "IsProvince", a[a.IsString = "is-string"] = "IsString", a))(M22 || {});
var P22 = ((a) => (a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsState = "is-state"] = "IsState", a[a.IsString = "is-string"] = "IsString", a))(P22 || {});
var L22 = ((a) => (a[a.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsStreetAddress = "is-street-address"] = "IsStreetAddress", a))(L22 || {});
var z22 = ((a) => (a[a.IsAirport = "is-airport"] = "IsAirport", a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(z22 || {});
var R22 = ((a) => (a[a.IsAlgorithmHash = "is-algorithm-hash"] = "IsAlgorithmHash", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(R22 || {});
var q22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", a[a.IsString = "is-string"] = "IsString", a))(q22 || {});
var G22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsUUID = "is-uuid"] = "IsUUID", a))(G22 || {});
var K22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsMD5 = "is-md5"] = "IsMD5", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(K22 || {});
var O22 = ((a) => (a[a.IsBoolean = "is-boolean"] = "IsBoolean", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(O22 || {});
var w22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsDate = "is-date"] = "IsDate", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotDate = "is-not-date"] = "IsNotDate", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotToday = "is-not-today"] = "IsNotToday", a[a.IsThisWeek = "is-this-week"] = "IsThisWeek", a[a.IsThisMonth = "is-this-month"] = "IsThisMonth", a[a.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", a[a.IsThisYear = "is-this-year"] = "IsThisYear", a[a.IsToday = "is-today"] = "IsToday", a[a.IsWeekend = "is-weekend"] = "IsWeekend", a))(w22 || {});
var H22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsDate = "is-date"] = "IsDate", a[a.IsDateRange = "is-date-range"] = "IsDateRange", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(H22 || {});
var x22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsDate = "is-date"] = "IsDate", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotDate = "is-not-date"] = "IsNotDate", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotToday = "is-not-today"] = "IsNotToday", a[a.IsThisWeek = "is-this-week"] = "IsThisWeek", a[a.IsThisMonth = "is-this-month"] = "IsThisMonth", a[a.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", a[a.IsThisYear = "is-this-year"] = "IsThisYear", a[a.IsToday = "is-today"] = "IsToday", a[a.IsWeekend = "is-weekend"] = "IsWeekend", a))(x22 || {});
var V22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsDayOfMonth = "is-day-of-month"] = "IsDayOfMonth", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsToday = "is-today"] = "IsToday", a[a.IsWeekday = "is-weekday"] = "IsWeekday", a[a.IsWeekend = "is-weekend"] = "IsWeekend", a))(V22 || {});
var W22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsMonth = "is-month"] = "IsMonth", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsThisMonth = "is-this-month"] = "IsThisMonth", a))(W22 || {});
var j22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsTime = "is-time"] = "IsTime", a))(j22 || {});
var Z22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsTime = "is-time"] = "IsTime", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsTimeRange = "is-time-range"] = "IsTimeRange", a))(Z22 || {});
var Y22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsTimeOfDay = "is-time-of-day"] = "IsTimeOfDay", a[a.IsTimeRange = "is-time-range"] = "IsTimeRange", a))(Y22 || {});
var J22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsWeekday = "is-weekday"] = "IsWeekday", a[a.IsWeekend = "is-weekend"] = "IsWeekend", a))(J22 || {});
var Q22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsThisYear = "is-this-year"] = "IsThisYear", a[a.IsYear = "is-year"] = "IsYear", a))(Q22 || {});
var $22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", a[a.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", a[a.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))($22 || {});
var X22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsJSON = "is-json"] = "IsJSON", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(X22 || {});
var aa22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsMarkdown = "is-markdown"] = "IsMarkdown", a[a.IsString = "is-string"] = "IsString", a))(aa22 || {});
var ea = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(ea || {});
var ia22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(ia22 || {});
var na22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsDataURI = "is-data-uri"] = "IsDataURI", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(na22 || {});
var ua22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsDomainName = "is-domain-name"] = "IsDomainName", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(ua22 || {});
var sa22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEmailAddress = "is-email-address"] = "IsEmailAddress", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(sa22 || {});
var ta22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsIPAddress = "is-ip-address"] = "IsIPAddress", a[a.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(ta22 || {});
var oa22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsIPAddressRange = "is-ip-address-range"] = "IsIPAddressRange", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(oa22 || {});
var ra22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a))(ra22 || {});
var ma22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsMACAddress = "is-mac-address"] = "IsMACAddress", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(ma22 || {});
var la22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(la22 || {});
var da22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsMimeType = "is-mime-type"] = "IsMimeType", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(da22 || {});
var Aa22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsSlug = "is-slug"] = "IsSlug", a))(Aa22 || {});
var ca22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsURL = "is-url"] = "IsURL", a))(ca22 || {});
var ga22 = ((a) => (a[a.IsAfter = "is-after"] = "IsAfter", a[a.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", a[a.IsBefore = "is-before"] = "IsBefore", a[a.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", a[a.IsBetween = "is-between"] = "IsBetween", a[a.IsDecimal = "is-decimal"] = "IsDecimal", a[a.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", a[a.IsEAN = "is-ean"] = "IsEAN", a[a.IsEIN = "is-ein"] = "IsEIN", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsEvenNumber = "is-even-number"] = "IsEvenNumber", a[a.IsFloat = "is-float"] = "IsFloat", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsInt = "is-integer"] = "IsInt", a[a.IsISBN = "is-isbn"] = "IsISBN", a[a.IsISMN = "is-ismn"] = "IsISMN", a[a.IsISSN = "is-issn"] = "IsISSN", a[a.IsLatitude = "is-latitude"] = "IsLatitude", a[a.IsLongitude = "is-longitude"] = "IsLongitude", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsMACAddress = "is-mac-address"] = "IsMACAddress", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsOddNumber = "is-odd-number"] = "IsOddNumber", a[a.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", a[a.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", a[a.IsPort = "is-port"] = "IsPort", a[a.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", a[a.IsPostalCode = "is-postal-code"] = "IsPostalCode", a[a.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", a[a.IsSSN = "is-ssn"] = "IsSSN", a[a.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", a[a.IsUUID = "is-uuid"] = "IsUUID", a[a.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", a))(ga22 || {});
var Ta22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsFloat = "is-float"] = "IsFloat", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a))(Ta22 || {});
var Ca22 = ((a) => (a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInteger = "is-integer"] = "IsInteger", a[a.IsGreaterThan = "greater-than"] = "IsGreaterThan", a[a.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", a[a.IsLessThan = "less-than"] = "IsLessThan", a[a.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a))(Ca22 || {});
var Ea22 = ((a) => (a[a.IsCreditCard = "is-credit-card"] = "IsCreditCard", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", a[a.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a))(Ea22 || {});
var fa22 = ((a) => (a[a.isEmailAddress = "is-email-address"] = "isEmailAddress", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", a[a.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a))(fa22 || {});
var Ia22 = ((a) => (a[a.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a[a.IsString = "is-string"] = "IsString", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a))(Ia22 || {});
var ha22 = ((a) => (a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", a[a.IsString = "is-string"] = "IsString", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a))(ha22 || {});
var Sa22 = ((a) => (a[a.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a[a.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", a[a.IsStrongPassword = "is-strong-password"] = "IsStrongPassword", a[a.IsString = "is-string"] = "IsString", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a))(Sa22 || {});
var pa22 = ((a) => (a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a))(pa22 || {});
var ba22 = ((a) => (a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsSSN = "is-ssn"] = "IsSSN", a[a.IsString = "is-string"] = "IsString", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a))(ba22 || {});
var va22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsBIC = "is-bic"] = "IsBIC", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(va22 || {});
var _a22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEAN = "is-ean"] = "IsEAN", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(_a22 || {});
var Ba22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEIN = "is-ein"] = "IsEIN", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(Ba22 || {});
var ya22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsIBAN = "is-iban"] = "IsIBAN", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(ya22 || {});
var Da22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsISBN = "is-isbn"] = "IsISBN", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(Da22 || {});
var Na22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsISIN = "is-isin"] = "IsISIN", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(Na22 || {});
var Ua22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsISMN = "is-ismn"] = "IsISMN", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(Ua22 || {});
var ka22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsISSN = "is-issn"] = "IsISSN", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a))(ka22 || {});
var Fa22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", a))(Fa22 || {});
var Ma22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsNotEqual = "is-not-equal"] = "IsNotEqual", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsString = "is-string"] = "IsString", a[a.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", a))(Ma22 || {});
var Pa22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.HasNumberCount = "has-number-count"] = "HasNumberCount", a[a.HasLowercaseCount = "has-lowercase-count"] = "HasLowercaseCount", a[a.HasLetterCount = "has-letter-count"] = "HasLetterCount", a[a.HasSpacesCount = "has-spaces-count"] = "HasSpacesCount", a[a.HasSymbolCount = "has-symbol-count"] = "HasSymbolCount", a[a.HasUppercaseCount = "has-uppercase-count"] = "HasUppercaseCount", a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", a[a.IsAscii = "is-ascii"] = "IsAscii", a[a.IsBase64 = "is-base-64"] = "IsBase64", a[a.IsColor = "is-color"] = "IsColor", a[a.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", a[a.IsCreditCard = "is-credit-card"] = "IsCreditCard", a[a.IsDataURI = "is-data-uri"] = "IsDataURI", a[a.IsDomainName = "is-domain-name"] = "IsDomainName", a[a.IsEmailAddress = "is-email-address"] = "IsEmailAddress", a[a.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", a[a.IsEAN = "is-ean"] = "IsEAN", a[a.IsEIN = "is-ein"] = "IsEIN", a[a.IsEqual = "is-equal"] = "IsEqual", a[a.IsIBAN = "is-iban"] = "IsIBAN", a[a.IsHSLColor = "is-hsl-color"] = "IsHSLColor", a[a.IsHexColor = "is-hex-color"] = "IsHexColor", a[a.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", a[a.IsIdentityCardCode = "is-identity-card-code"] = "IsIdentityCardCode", a[a.IsIMEI = "is-imei"] = "IsIMEI", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsIPAddress = "is-ip-address"] = "IsIPAddress", a[a.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", a[a.IsISBN = "is-isbn"] = "IsISBN", a[a.IsISIN = "is-isin"] = "IsISIN", a[a.IsISMN = "is-ismn"] = "IsISMN", a[a.IsISRC = "is-isrc"] = "IsISRC", a[a.IsISSN = "is-issn"] = "IsISSN", a[a.IsLanguage = "is-language"] = "IsLanguage", a[a.IsLatitude = "is-latitude"] = "IsLatitude", a[a.IsLongitude = "is-longitude"] = "IsLongitude", a[a.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", a[a.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", a[a.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", a[a.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", a[a.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", a[a.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", a[a.IsLowercase = "is-lowercase"] = "IsLowercase", a[a.IsOctal = "is-octal"] = "IsOctal", a[a.IsMACAddress = "is-mac-address"] = "IsMACAddress", a[a.IsMD5 = "is-md5"] = "IsMD5", a[a.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", a[a.IsMarkdown = "is-markdown"] = "IsMarkdown", a[a.IsMimeType = "is-mime-type"] = "IsMimeType", a[a.IsMonth = "is-month"] = "IsMonth", a[a.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNotNull = "is-not-null"] = "IsNotNull", a[a.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", a[a.IsNumber = "is-number"] = "IsNumber", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a[a.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", a[a.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", a[a.IsPort = "is-port"] = "IsPort", a[a.IsPostalCode = "is-postal-code"] = "IsPostalCode", a[a.IsProvince = "is-province"] = "IsProvince", a[a.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", a[a.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", a[a.IsSlug = "is-slug"] = "IsSlug", a[a.IsSSN = "is-ssn"] = "IsSSN", a[a.IsState = "is-state"] = "IsState", a[a.IsStreetAddress = "is-street-address"] = "IsStreetAddress", a[a.IsString = "is-string"] = "IsString", a[a.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", a[a.IsURL = "is-url"] = "IsURL", a[a.IsUUID = "is-uuid"] = "IsUUID", a[a.IsUppercase = "is-uppercase"] = "IsUppercase", a[a.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", a[a.IsWeekday = "is-weekday"] = "IsWeekday", a[a.IsWeekend = "is-weekend"] = "IsWeekend", a[a.IsYear = "is-year"] = "IsYear", a))(Pa22 || {});
var La22 = ((a) => (a[a.Contains = "contains"] = "Contains", a[a.IsAlpha = "is-alpha"] = "IsAlpha", a[a.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", a[a.IsInList = "is-in-list"] = "IsInList", a[a.IsMarkdown = "is-markdown"] = "IsMarkdown", a[a.IsNotInList = "is-not-in-list"] = "IsNotInList", a[a.IsNumeric = "is-numeric"] = "IsNumeric", a[a.IsLowercase = "is-lowercase"] = "IsLowercase", a[a.IsString = "is-string"] = "IsString", a[a.IsUppercase = "is-uppercase"] = "IsUppercase", a))(La22 || {});
var za22 = ((a) => (a.InvalidCharacters = "invalid-characters", a.InvalidPattern = "invalid-pattern", a.NotComplexEnough = "not-complex-enough", a.NotUnique = "not-unique", a.NotValidEmail = "not-valid-email", a.TooLong = "too-long", a.TooShort = "too-short", a.Required = "required", a))(za22 || {});
var Ra22 = ((a) => (a[a.Allowed = 0] = "Allowed", a[a.Blocked = 1] = "Blocked", a))(Ra22 || {});
var qa22 = ((a) => (a.Canceled = "Canceled", a.Completed = "Completed", a.Created = "Created", a.Faulted = "Faulted", a.Queued = "Queued", a.Running = "Running", a.Waiting = "Waiting", a))(qa22 || {});
var Ga22 = ((a) => (a.Archived = "ARCHIVED", a.Compromised = "COMPROMISED", a.Confirmed = "CONFIRMED", a.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", a.ResetRequired = "RESET_REQUIRED", a.Unconfirmed = "UNCONFIRMED", a.Unknown = "UNKNOWN", a))(Ga22 || {});
var Ka22 = ((a) => (a.Owner = "Owner", a.Admin = "Admin", a.User = "User", a.Visitor = "Visitor", a))(Ka22 || {});
var Oa22 = ((a) => (a.RequiresPaymentMethod = "requires_payment_method", a.RequiresConfirmation = "requires_confirmation", a.RequiresAction = "requires_action", a.Processing = "processing", a.RequiresCapture = "requires_capture", a.Canceled = "canceled", a.Succeeded = "succeeded", a))(Oa22 || {});
var wa22 = ((a) => (a.Incomplete = "incomplete", a.IncompleteExpired = "incomplete_expired", a.Trialing = "trialing", a.Active = "active", a.PastDue = "past_due", a.Canceled = "canceled", a.Unpaid = "unpaid", a))(wa22 || {});
var Ha22 = ((a) => (a.Monthly = "monthly", a.Quarterly = "quarterly", a.Yearly = "yearly", a.Lifetime = "lifetime", a))(Ha22 || {});
var xa22 = ((a) => (a.Delivered = "delivered", a.Read = "read", a.Sending = "sending", a.Sent = "sent", a))(xa22 || {});
var Va22 = ((a) => (a.Audio = "audio", a.File = "file", a.Image = "image", a.Text = "text", a.Video = "video", a))(Va22 || {});
var Wa22 = ((a) => (a.Audio = "audio", a.File = "file", a.Image = "image", a.Video = "video", a))(Wa22 || {});
var ja22 = ((a) => (a.Angry = "angry", a.Laugh = "laugh", a.Like = "like", a.Love = "love", a.Sad = "sad", a.Wow = "wow", a.Wink = "wink", a.Yay = "yay", a))(ja22 || {});
var Za22 = ((a) => (a.Email = "email", a.PhoneNumber = "phone_number", a))(Za22 || {});
var Ya22 = ((a) => (a.Analytics = "analytics", a.Critical = "critical", a.Debug = "debug", a.Exception = "exception", a.Http = "http", a.Info = "info", a.Warning = "warning", a))(Ya22 || {});
var Ja22 = ((a) => (a.Delete = "delete", a.Get = "get", a.Head = "head", a.Patch = "patch", a.Post = "post", a.Put = "put", a))(Ja22 || {});
var Qa22 = ((a) => (a[a.CONTINUE = 100] = "CONTINUE", a[a.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", a[a.PROCESSING = 102] = "PROCESSING", a[a.OK = 200] = "OK", a[a.CREATED = 201] = "CREATED", a[a.ACCEPTED = 202] = "ACCEPTED", a[a.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", a[a.NO_CONTENT = 204] = "NO_CONTENT", a[a.RESET_CONTENT = 205] = "RESET_CONTENT", a[a.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", a[a.MULTI_STATUS = 207] = "MULTI_STATUS", a[a.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", a[a.IM_USED = 226] = "IM_USED", a[a.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", a[a.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", a[a.FOUND = 302] = "FOUND", a[a.SEE_OTHER = 303] = "SEE_OTHER", a[a.NOT_MODIFIED = 304] = "NOT_MODIFIED", a[a.USE_PROXY = 305] = "USE_PROXY", a[a.SWITCH_PROXY = 306] = "SWITCH_PROXY", a[a.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", a[a.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", a[a.BAD_REQUEST = 400] = "BAD_REQUEST", a[a.UNAUTHORIZED = 401] = "UNAUTHORIZED", a[a.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", a[a.FORBIDDEN = 403] = "FORBIDDEN", a[a.NOT_FOUND = 404] = "NOT_FOUND", a[a.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", a[a.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", a[a.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", a[a.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", a[a.CONFLICT = 409] = "CONFLICT", a[a.GONE = 410] = "GONE", a[a.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", a[a.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", a[a.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", a[a.URI_TOO_LONG = 414] = "URI_TOO_LONG", a[a.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", a[a.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", a[a.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", a[a.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", a[a.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", a[a.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", a[a.LOCKED = 423] = "LOCKED", a[a.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", a[a.TOO_EARLY = 425] = "TOO_EARLY", a[a.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", a[a.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", a[a.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", a[a.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", a[a.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", a[a.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", a[a.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", a[a.BAD_GATEWAY = 502] = "BAD_GATEWAY", a[a.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", a[a.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", a[a.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", a[a.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", a[a.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", a[a.LOOP_DETECTED = 508] = "LOOP_DETECTED", a[a.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", a[a.NOT_EXTENDED = 510] = "NOT_EXTENDED", a[a.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", a))(Qa22 || {});
var $a22 = ((a) => (a.Afghanistan = "AF", a.Albania = "AL", a.Algeria = "DZ", a.AmericanSamoa = "AS", a.Andorra = "AD", a.Angola = "AO", a.Anguilla = "AI", a.Antarctica = "AQ", a.AntiguaAndBarbuda = "AG", a.Argentina = "AR", a.Armenia = "AM", a.Aruba = "AW", a.Australia = "AU", a.Austria = "AT", a.Azerbaijan = "AZ", a.Bahamas = "BS", a.Bahrain = "BH", a.Bangladesh = "BD", a.Barbados = "BB", a.Belarus = "BY", a.Belgium = "BE", a.Belize = "BZ", a.Benin = "BJ", a.Bermuda = "BM", a.Bhutan = "BT", a.Bolivia = "BO", a.BosniaAndHerzegovina = "BA", a.Botswana = "BW", a.BouvetIsland = "BV", a.Brazil = "BR", a.BritishIndianOceanTerritory = "IO", a.Brunei = "BN", a.Bulgaria = "BG", a.BurkinaFaso = "BF", a.Burundi = "BI", a.Cambodia = "KH", a.Cameroon = "CM", a.Canada = "CA", a.CapeVerde = "CV", a.CaymanIslands = "KY", a.CentralAfricanRepublic = "CF", a.Chad = "TD", a.Chile = "CL", a.China = "CN", a.ChristmasIsland = "CX", a.CocosKeelingIslands = "CC", a.Colombia = "CO", a.Comoros = "KM", a.Congo = "CG", a.CongoTheDemocraticRepublicOfThe = "CD", a.CookIslands = "CK", a.CostaRica = "CR", a.CoteDIvoire = "CI", a.Croatia = "HR", a.Cuba = "CU", a.Cyprus = "CY", a.CzechRepublic = "CZ", a.Denmark = "DK", a.Djibouti = "DJ", a.Dominica = "DM", a.DominicanRepublic = "DO", a.Ecuador = "EC", a.Egypt = "EG", a.ElSalvador = "SV", a.EquatorialGuinea = "GQ", a.Eritrea = "ER", a.Estonia = "EE", a.Ethiopia = "ET", a.FalklandIslands = "FK", a.FaroeIslands = "FO", a.Fiji = "FJ", a.Finland = "FI", a.France = "FR", a.FrenchGuiana = "GF", a.FrenchPolynesia = "PF", a.FrenchSouthernTerritories = "TF", a.Gabon = "GA", a.Gambia = "GM", a.Georgia = "GE", a.Germany = "DE", a.Ghana = "GH", a.Gibraltar = "GI", a.Greece = "GR", a.Greenland = "GL", a.Grenada = "GD", a.Guadeloupe = "GP", a.Guam = "GU", a.Guatemala = "GT", a.Guernsey = "GG", a.Guinea = "GN", a.GuineaBissau = "GW", a.Guyana = "GY", a.Haiti = "HT", a.HeardIslandMcdonaldIslands = "HM", a.HolySeeVaticanCityState = "VA", a.Honduras = "HN", a.HongKong = "HK", a.Hungary = "HU", a.Iceland = "IS", a.India = "IN", a.Indonesia = "ID", a.Iran = "IR", a.Iraq = "IQ", a.Ireland = "IE", a.IsleOfMan = "IM", a.Israel = "IL", a.Italy = "IT", a.Jamaica = "JM", a.Japan = "JP", a.Jersey = "JE", a.Jordan = "JO", a.Kazakhstan = "KZ", a.Kenya = "KE", a.Kiribati = "KI", a.Kuwait = "KW", a.Kyrgyzstan = "KG", a.Laos = "LA", a.Latvia = "LV", a.Lebanon = "LB", a.Lesotho = "LS", a.Liberia = "LR", a.Libya = "LY", a.Liechtenstein = "LI", a.Lithuania = "LT", a.Luxembourg = "LU", a.Macau = "MO", a.Madagascar = "MG", a.Malawi = "MW", a.Malaysia = "MY", a.Maldives = "MV", a.Mali = "ML", a.Malta = "MT", a.MarshallIslands = "MH", a.Martinique = "MQ", a.Mauritania = "MR", a.Mauritius = "MU", a.Mayotte = "YT", a.Mexico = "MX", a.MicronesiaFederatedStatesOf = "FM", a.Moldova = "MD", a.Monaco = "MC", a.Mongolia = "MN", a.Montenegro = "ME", a.Montserrat = "MS", a.Morocco = "MA", a.Mozambique = "MZ", a.Myanmar = "MM", a.Namibia = "NA", a.Nauru = "NR", a.Nepal = "NP", a.Netherlands = "NL", a.NetherlandsAntilles = "AN", a.NewCaledonia = "NC", a.NewZealand = "NZ", a.NorthKorea = "KP", a.Nicaragua = "NI", a.Niger = "NE", a.Nigeria = "NG", a.Niue = "NU", a.NorfolkIsland = "NF", a.NorthMacedonia = "MK", a.NorthernMarianaIslands = "MP", a.Norway = "NO", a.Oman = "OM", a.Pakistan = "PK", a.Palau = "PW", a.PalestinianTerritoryOccupied = "PS", a.Panama = "PA", a.PapuaNewGuinea = "PG", a.Paraguay = "PY", a.Peru = "PE", a.Philippines = "PH", a.Pitcairn = "PN", a.Poland = "PL", a.Portugal = "PT", a.PuertoRico = "PR", a.Qatar = "QA", a.Reunion = "RE", a.Romania = "RO", a.RussianFederation = "RU", a.Rwanda = "RW", a.SaintBarthelemy = "BL", a.SaintHelena = "SH", a.SaintKittsAndNevis = "KN", a.SaintLucia = "LC", a.SaintMartin = "MF", a.SaintPierreAndMiquelon = "PM", a.SaintVincentAndTheGrenadines = "VC", a.Samoa = "WS", a.SanMarino = "SM", a.SaoTomeAndPrincipe = "ST", a.SaudiArabia = "SA", a.Senegal = "SN", a.Serbia = "RS", a.SerbiaAndMontenegro = "CS", a.Seychelles = "SC", a.SierraLeone = "SL", a.Singapore = "SG", a.Slovakia = "SK", a.Slovenia = "SI", a.SolomonIslands = "SB", a.Somalia = "SO", a.SouthAfrica = "ZA", a.SouthGeorgiaAndTheSouthSandwichIslands = "GS", a.SouthKorea = "KR", a.Spain = "ES", a.SriLanka = "LK", a.Sudan = "SD", a.Suriname = "SR", a.SvalbardAndJanMayen = "SJ", a.Swaziland = "SZ", a.Sweden = "SE", a.Switzerland = "CH", a.Syria = "SY", a.Taiwan = "TW", a.Tajikistan = "TJ", a.Tanzania = "TZ", a.Thailand = "TH", a.TimorLeste = "TL", a.Togo = "TG", a.Tokelau = "TK", a.Tonga = "TO", a.TrinidadAndTobago = "TT", a.Tunisia = "TN", a.Turkey = "TR", a.Turkmenistan = "TM", a.TurksAndCaicosIslands = "TC", a.Tuvalu = "TV", a.Uganda = "UG", a.Ukraine = "UA", a.UnitedArabEmirates = "AE", a.UnitedKingdom = "GB", a.UnitedStates = "US", a.UnitedStatesMinorOutlyingIslands = "UM", a.Uruguay = "UY", a.Uzbekistan = "UZ", a.Vanuatu = "VU", a.Venezuela = "VE", a.Vietnam = "VN", a.VirginIslandsBritish = "VG", a.VirginIslandsUS = "VI", a.WallisAndFutuna = "WF", a.WesternSahara = "EH", a.Yemen = "YE", a.Zambia = "ZM", a.Zimbabwe = "ZW", a))($a22 || {});
var Xa22 = ((a) => (a.AfghanistanAfghani = "AFN", a.AlbaniaLek = "ALL", a.ArmeniaDram = "AMD", a.AlgeriaDinar = "DZD", a.AmericanSamoaTala = "WST", a.AngolaKwanza = "AOA", a.ArgentinaPeso = "ARS", a.AustraliaDollar = "AUD", a.ArubaFlorin = "AWG", a.AzerbaijanNewManat = "AZN", a.BosniaAndHerzegovinaConvertibleMark = "BAM", a.BahrainDinar = "BHD", a.BarbadosDollar = "BBD", a.BangladeshTaka = "BDT", a.BelgiumFranc = "BGN", a.BermudaDollar = "BMD", a.BruneiDollar = "BND", a.BoliviaBoliviano = "BOB", a.BrazilReal = "BRL", a.BahamasDollar = "BSD", a.BhutanNgultrum = "BTN", a.BotswanaPula = "BWP", a.BelarusRuble = "BYN", a.BelizeDollar = "BZD", a.BulgariaLev = "BGN", a.BurundiFranc = "BIF", a.BritishPound = "GBP", a.CanadaDollar = "CAD", a.CambodiaRiel = "KHR", a.ComorosFranc = "KMF", a.CaymanIslandsDollar = "KYD", a.ChilePeso = "CLP", a.ChinaYuan = "CNY", a.ColombiaPeso = "COP", a.CostaRicaColon = "CRC", a.CroatiaKuna = "HRK", a.CubaConvertiblePeso = "CUC", a.CubaPeso = "CUP", a.CapeVerdeEscudo = "CVE", a.CyprusPound = "CYP", a.CzechRepublicKoruna = "CZK", a.DjiboutiFranc = "DJF", a.DenmarkKrone = "DKK", a.DominicaDollar = "XCD", a.DominicanRepublicPeso = "DOP", a.EastCaribbeanDollar = "XCD", a.EgyptPound = "EGP", a.ElSalvadorColon = "SVC", a.EquatorialGuineaEkwele = "GQE", a.EritreaNakfa = "ERN", a.EstoniaKroon = "EEK", a.EthiopiaBirr = "ETB", a.Euro = "EUR", a.FijiDollar = "FJD", a.FalklandIslandsPound = "FKP", a.GambiaDalasi = "GMD", a.GabonFranc = "GMD", a.GeorgiaLari = "GEL", a.GhanaCedi = "GHS", a.GibraltarPound = "GIP", a.GuatemalaQuetzal = "GTQ", a.GuernseyPound = "GGP", a.GuineaBissauPeso = "GWP", a.GuyanaDollar = "GYD", a.HongKongDollar = "HKD", a.HondurasLempira = "HNL", a.HaitiGourde = "HTG", a.HungaryForint = "HUF", a.IndonesiaRupiah = "IDR", a.IsleOfManPound = "IMP", a.IsraelNewShekel = "ILS", a.IndiaRupee = "INR", a.IraqDinar = "IQD", a.IranRial = "IRR", a.IcelandKrona = "ISK", a.JamaicaDollar = "JMD", a.JapanYen = "JPY", a.JerseyPound = "JEP", a.JordanDinar = "JOD", a.KazakhstanTenge = "KZT", a.KenyaShilling = "KES", a.KyrgyzstanSom = "KGS", a.NorthKoreaWon = "KPW", a.SouthKoreaWon = "KRW", a.KuwaitDinar = "KWD", a.LaosKip = "LAK", a.LebanonPound = "LBP", a.LiberiaDollar = "LRD", a.LesothoLoti = "LSL", a.LibyanDinar = "LYD", a.LithuaniaLitas = "LTL", a.LatviaLats = "LVL", a.LibyaDinar = "LYD", a.MacauPataca = "MOP", a.MaldivesRufiyaa = "MVR", a.MalawiKwacha = "MWK", a.MaltaLira = "MTL", a.MauritiusRupee = "MUR", a.MongoliaTughrik = "MNT", a.MoroccoDirham = "MAD", a.MoldovaLeu = "MDL", a.MozambiqueMetical = "MZN", a.MadagascarAriary = "MGA", a.MacedoniaDenar = "MKD", a.MexicoPeso = "MXN", a.MalaysiaRinggit = "MYR", a.MyanmarKyat = "MMK", a.MicronesiaFederatedStatesDollar = "USD", a.NicaraguaCordoba = "NIO", a.NamibiaDollar = "NAD", a.NetherlandsAntillesGuilder = "ANG", a.NewCaledoniaFranc = "XPF", a.NigeriaNaira = "NGN", a.NicaraguaCordobaOro = "NIO", a.NigerCFAFranc = "XOF", a.NorwayKrone = "NOK", a.NepalRupee = "NPR", a.NewZealandDollar = "NZD", a.OmanRial = "OMR", a.PanamaBalboa = "PAB", a.PeruNuevoSol = "PEN", a.PapuaNewGuineaKina = "PGK", a.PhilippinesPeso = "PHP", a.PakistanRupee = "PKR", a.PeruNuevo = "PEN", a.PolandZloty = "PLN", a.ParaguayGuarani = "PYG", a.QatarRial = "QAR", a.RomaniaNewLeu = "RON", a.SerbiaDinar = "RSD", a.SriLankaRupee = "LKR", a.RussiaRuble = "RUB", a.RwandaFranc = "RWF", a.SaudiArabiaRiyal = "SAR", a.SlovakiaKoruna = "SKK", a.SloveniaTolar = "SIT", a.SolomonIslandsDollar = "SBD", a.SeychellesRupee = "SCR", a.SudanPound = "SDG", a.SwedenKrona = "SEK", a.SingaporeDollar = "SGD", a.SaintHelenaPound = "SHP", a.SierraLeoneLeone = "SLL", a.SomaliaShilling = "SOS", a.SurinameDollar = "SRD", a.SintMaartenPound = "SXD", a.SyriaPound = "SYP", a.SwazilandLilangeni = "SZL", a.SwitzerlandFranc = "CHF", a.ThailandBaht = "THB", a.TajikistanSomoni = "TJS", a.TurkmenistanManat = "TMT", a.TunisiaDinar = "TND", a.TongaPaanga = "TOP", a.TurkeyLira = "TRY", a.TrinidadAndTobagoDollar = "TTD", a.TaiwanNewDollar = "TWD", a.TanzaniaShilling = "TZS", a.UnitedArabEmiratesDirham = "AED", a.UkraineHryvnia = "UAH", a.UgandaShilling = "UGX", a.UnitedKingdomPound = "GBP", a.UnitedStatesDollar = "USD", a.UruguayPeso = "UYU", a.UzbekistanSom = "UZS", a.VenezuelaBolivar = "VEF", a.VietnamDong = "VND", a.VanuatuVatu = "VUV", a.SamoaTala = "WST", a.YemenRial = "YER", a.SouthAfricaRand = "ZAR", a.ZambiaKwacha = "ZMW", a.ZimbabweDollar = "ZWL", a))(Xa22 || {});
var ae22 = ((a) => (a.Bitcoin = "BTC", a.Ethereum = "ETH", a.Litecoin = "LTC", a.Ripple = "XRP", a.Dash = "DASH", a.Zcash = "ZEC", a.Dogecoin = "DOGE", a.Monero = "XMR", a.BitcoinCash = "BCH", a.EOS = "EOS", a.Binance = "BNB", a.Stellar = "XLM", a.Cardano = "ADA", a.IOTA = "IOTA", a.Tezos = "XTZ", a.NEO = "NEO", a.TRON = "TRX", a.EOSClassic = "EOSC", a.Ontology = "ONT", a.VeChain = "VEN", a.QTUM = "QTUM", a.Lisk = "LSK", a.Waves = "WAVES", a.OmiseGO = "OMG", a.Zilliqa = "ZIL", a.BitcoinGold = "BTG", a.Decred = "DCR", a.Stratis = "STRAT", a.Populous = "PPT", a.Augur = "REP", a.Golem = "GNT", a.Siacoin = "SC", a.BasicAttentionToken = "BAT", a.ZCoin = "XZC", a.StratisHedged = "SNT", a.VeChainHedged = "VEN", a.PowerLedger = "POWR", a.WavesHedged = "WAVE", a.ZilliqaHedged = "ZRX", a.BitcoinDiamond = "BCD", a.DigiByte = "DGB", a.DigiByteHedged = "DGB", a.Bytecoin = "BCN", a.BytecoinHedged = "BCN", a))(ae22 || {});
var ee22 = ((a) => (a.Afrikaans = "af", a.Albanian = "sq", a.Amharic = "am", a.Arabic = "ar", a.Armenian = "hy", a.Azerbaijani = "az", a.Bashkir = "ba", a.Basque = "eu", a.Belarusian = "be", a.Bengali = "bn", a.Berber = "ber", a.Bhutani = "dz", a.Bihari = "bh", a.Bislama = "bi", a.Bosnian = "bs", a.Breten = "br", a.Bulgarian = "bg", a.Burmese = "my", a.Cantonese = "yue", a.Catalan = "ca", a.Chinese = "zh", a.Chuvash = "cv", a.Corsican = "co", a.Croatian = "hr", a.Czech = "cs", a.Danish = "da", a.Dari = "prs", a.Divehi = "dv", a.Dutch = "nl", a.English = "en", a.Esperanto = "eo", a.Estonian = "et", a.Faroese = "fo", a.Farsi = "fa", a.Filipino = "fil", a.Finnish = "fi", a.French = "fr", a.Frisian = "fy", a.Galician = "gl", a.Georgian = "ka", a.German = "de", a.Greek = "el", a.Greenlandic = "kl", a.Gujarati = "gu", a.Haitian = "ht", a.Hausa = "ha", a.Hebrew = "he", a.Hindi = "hi", a.Hungarian = "hu", a.Icelandic = "is", a.Igbo = "ig", a.Indonesian = "id", a.Irish = "ga", a.Italian = "it", a.Japanese = "ja", a.Javanese = "jv", a.Kannada = "kn", a.Karelian = "krl", a.Kazakh = "kk", a.Khmer = "km", a.Komi = "kv", a.Konkani = "kok", a.Korean = "ko", a.Kurdish = "ku", a.Kyrgyz = "ky", a.Lao = "lo", a.Latin = "la", a.Latvian = "lv", a.Lithuanian = "lt", a.Luxembourgish = "lb", a.Ossetian = "os", a.Macedonian = "mk", a.Malagasy = "mg", a.Malay = "ms", a.Malayalam = "ml", a.Maltese = "mt", a.Maori = "mi", a.Marathi = "mr", a.Mari = "mhr", a.Mongolian = "mn", a.Montenegrin = "me", a.Nepali = "ne", a.NorthernSotho = "nso", a.Norwegian = "no", a.NorwegianBokmal = "nb", a.NorwegianNynorsk = "nn", a.Oriya = "or", a.Pashto = "ps", a.Persian = "fa", a.Polish = "pl", a.Portuguese = "pt", a.Punjabi = "pa", a.Quechua = "qu", a.Romanian = "ro", a.Russian = "ru", a.Sakha = "sah", a.Sami = "se", a.Samoan = "sm", a.Sanskrit = "sa", a.Scots = "gd", a.Serbian = "sr", a.SerbianCyrillic = "sr-Cyrl", a.Sesotho = "st", a.Shona = "sn", a.Sindhi = "sd", a.Sinhala = "si", a.Slovak = "sk", a.Slovenian = "sl", a.Somali = "so", a.Spanish = "es", a.Sudanese = "su", a.Sutu = "sx", a.Swahili = "sw", a.Swedish = "sv", a.Syriac = "syr", a.Tagalog = "tl", a.Tajik = "tg", a.Tamazight = "tmh", a.Tamil = "ta", a.Tatar = "tt", a.Telugu = "te", a.Thai = "th", a.Tibetan = "bo", a.Tsonga = "ts", a.Tswana = "tn", a.Turkish = "tr", a.Turkmen = "tk", a.Ukrainian = "uk", a.Urdu = "ur", a.Uzbek = "uz", a.Vietnamese = "vi", a.Welsh = "cy", a.Xhosa = "xh", a.Yiddish = "yi", a.Yoruba = "yo", a.Zulu = "zu", a))(ee22 || {});
var ie22 = ((a) => (a.Afrikaans = "af", a.AfrikaansSouthAfrica = "af-ZA", a.Albanian = "sq", a.AlbanianAlbania = "sq-AL", a.Amharic = "am", a.AmharicEthiopia = "am-ET", a.Arabic = "ar", a.ArabicAlgeria = "ar-DZ", a.ArabicBahrain = "ar-BH", a.ArabicEgypt = "ar-EG", a.ArabicIraq = "ar-IQ", a.ArabicJordan = "ar-JO", a.ArabicKuwait = "ar-KW", a.ArabicLebanon = "ar-LB", a.ArabicLibya = "ar-LY", a.ArabicMorocco = "ar-MA", a.ArabicOman = "ar-OM", a.ArabicQatar = "ar-QA", a.ArabicSaudiArabia = "ar-SA", a.ArabicSyria = "ar-SY", a.ArabicTunisia = "ar-TN", a.ArabicUnitedArabEmirates = "ar-AE", a.ArabicYemen = "ar-YE", a.Armenian = "hy", a.ArmenianArmenia = "hy-AM", a.Azerbaijani = "az", a.AzerbaijaniAzerbaijan = "az-AZ", a.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", a.Bashkir = "ba", a.Basque = "eu", a.BasqueSpain = "eu-ES", a.Belarusian = "be", a.BelarusianBelarus = "be-BY", a.Bengali = "bn", a.BengaliBangladesh = "bn-BD", a.BengaliIndia = "bn-IN", a.Berber = "ber", a.Bhutani = "dz", a.BhutaniBhutan = "dz-BT", a.Bosnian = "bs", a.BosnianBosniaAndHerzegovina = "bs-BA", a.Breton = "br", a.Bulgarian = "bg", a.BulgarianBosniaAndHerzegovina = "bg-BG", a.BulgarianBulgaria = "bg-BG", a.Burmese = "my", a.BurmeseMyanmar = "my-MM", a.Cantonese = "yue", a.CantoneseHongKong = "yue-HK", a.Catalan = "ca", a.CatalanSpain = "ca-ES", a.Chechen = "ce", a.Cherokee = "chr", a.Chinese = "zh", a.ChineseSimplified = "zh-Hans", a.ChineseSimplifiedChina = "zh-Hans-CN", a.ChineseSimplifiedHongKong = "zh-Hans-HK", a.ChineseSimplifiedMacau = "zh-Hans-MO", a.ChineseSimplifiedSingapore = "zh-Hans-SG", a.ChineseTraditional = "zh-Hant", a.ChineseTraditionalHongKong = "zh-Hant-HK", a.ChineseTraditionalMacau = "zh-Hant-MO", a.ChineseTraditionalSingapore = "zh-Hant-SG", a.ChineseTraditionalTaiwan = "zh-Hant-TW", a.Chuvash = "cv", a.CorsicanFrance = "co-FR", a.Croatian = "hr", a.CroatianBosniaAndHerzegovina = "hr-BA", a.CroatianCroatia = "hr-HR", a.Czech = "cs", a.CzechCzechRepublic = "cs-CZ", a.Danish = "da", a.DanishDenmark = "da-DK", a.Dari = "prs", a.DariAfghanistan = "prs-AF", a.Divehi = "dv", a.DivehiMaldives = "dv-MV", a.Dutch = "nl", a.DutchBelgium = "nl-BE", a.DutchNetherlands = "nl-NL", a.English = "en", a.EnglishAustralia = "en-AU", a.EnglishBelgium = "en-BE", a.EnglishBelize = "en-BZ", a.EnglishCanada = "en-CA", a.EnglishCaribbean = "en-029", a.EnglishIreland = "en-IE", a.EnglishJamaica = "en-JM", a.EnglishNewZealand = "en-NZ", a.EnglishPhilippines = "en-PH", a.EnglishSingapore = "en-SG", a.EnglishSouthAfrica = "en-ZA", a.EnglishTrinidadAndTobago = "en-TT", a.EnglishUnitedKingdom = "en-GB", a.EnglishUnitedStates = "en-US", a.EnglishZimbabwe = "en-ZW", a.Esperanto = "eo", a.Estonian = "et", a.EstonianEstonia = "et-EE", a.Faroese = "fo", a.FaroeseFaroeIslands = "fo-FO", a.Farsi = "fa", a.FarsiIran = "fa-IR", a.Filipino = "fil", a.FilipinoPhilippines = "fil-PH", a.Finnish = "fi", a.FinnishFinland = "fi-FI", a.French = "fr", a.FrenchBelgium = "fr-BE", a.FrenchCanada = "fr-CA", a.FrenchFrance = "fr-FR", a.FrenchLuxembourg = "fr-LU", a.FrenchMonaco = "fr-MC", a.FrenchReunion = "fr-RE", a.FrenchSwitzerland = "fr-CH", a.Frisian = "fy", a.FrisianNetherlands = "fy-NL", a.Galician = "gl", a.GalicianSpain = "gl-ES", a.Georgian = "ka", a.GeorgianGeorgia = "ka-GE", a.German = "de", a.GermanAustria = "de-AT", a.GermanBelgium = "de-BE", a.GermanGermany = "de-DE", a.GermanLiechtenstein = "de-LI", a.GermanLuxembourg = "de-LU", a.GermanSwitzerland = "de-CH", a.Greenlandic = "kl", a.GreenlandicGreenland = "kl-GL", a.Greek = "el", a.GreekGreece = "el-GR", a.Gujarati = "gu", a.GujaratiIndia = "gu-IN", a.Haitian = "ht", a.Hausa = "ha", a.HausaGhana = "ha-GH", a.HausaNiger = "ha-NE", a.HausaNigeria = "ha-NG", a.Hebrew = "he", a.HebrewIsrael = "he-IL", a.Hindi = "hi", a.HindiIndia = "hi-IN", a.Hungarian = "hu", a.HungarianHungary = "hu-HU", a.Icelandic = "is", a.IcelandicIceland = "is-IS", a.Igbo = "ig", a.IgboNigeria = "ig-NG", a.Indonesian = "id", a.IndonesianIndonesia = "id-ID", a.Irish = "ga", a.IrishIreland = "ga-IE", a.Italian = "it", a.ItalianItaly = "it-IT", a.ItalianSwitzerland = "it-CH", a.Japanese = "ja", a.JapaneseJapan = "ja-JP", a.Javanese = "jv", a.Kannada = "kn", a.KannadaIndia = "kn-IN", a.Karelian = "krl", a.Kazakh = "kk", a.KazakhKazakhstan = "kk-KZ", a.Khmer = "km", a.KhmerCambodia = "km-KH", a.KinyarwandaRwanda = "rw-RW", a.Komi = "kv", a.Konkani = "kok", a.KonkaniIndia = "kok-IN", a.Korean = "ko", a.KoreanSouthKorea = "ko-KR", a.Kurdish = "ku", a.KurdishIraq = "ku-IQ", a.KurdishTurkey = "ku-TR", a.Kyrgyz = "ky", a.KyrgyzKyrgyzstan = "ky-KG", a.Lao = "lo", a.LaoLaos = "lo-LA", a.Latin = "la", a.Latvian = "lv", a.LatvianLatvia = "lv-LV", a.Lithuanian = "lt", a.LithuanianLithuania = "lt-LT", a.Luxembourgish = "lb", a.LuxembourgishBelgium = "lb-LU", a.LuxembourgishLuxembourg = "lb-LU", a.Macedonian = "mk", a.MacedonianNorthMacedonia = "mk-MK", a.Malagasy = "mg", a.Malay = "ms", a.MalayBrunei = "ms-BN", a.MalayIndia = "ms-IN", a.MalayMalaysia = "ms-MY", a.MalaySingapore = "ms-SG", a.Malayalam = "ml", a.MalayalamIndia = "ml-IN", a.Maltese = "mt", a.MalteseMalta = "mt-MT", a.Maori = "mi", a.MaoriNewZealand = "mi-NZ", a.Marathi = "mr", a.MarathiIndia = "mr-IN", a.Mari = "chm", a.Mongolian = "mn", a.MongolianMongolia = "mn-MN", a.Montenegrin = "me", a.MontenegrinMontenegro = "me-ME", a.Nepali = "ne", a.NepaliNepal = "ne-NP", a.NorthernSotho = "ns", a.NorthernSothoSouthAfrica = "ns-ZA", a.Norwegian = "nb", a.NorwegianBokmalNorway = "nb-NO", a.NorwegianNynorskNorway = "nn-NO", a.Oriya = "or", a.OriyaIndia = "or-IN", a.Ossetian = "os", a.Pashto = "ps", a.PashtoAfghanistan = "ps-AF", a.Persian = "fa", a.PersianIran = "fa-IR", a.Polish = "pl", a.PolishPoland = "pl-PL", a.Portuguese = "pt", a.PortugueseBrazil = "pt-BR", a.PortuguesePortugal = "pt-PT", a.Punjabi = "pa", a.PunjabiIndia = "pa-IN", a.PunjabiPakistan = "pa-PK", a.Quechua = "qu", a.QuechuaBolivia = "qu-BO", a.QuechuaEcuador = "qu-EC", a.QuechuaPeru = "qu-PE", a.Romanian = "ro", a.RomanianRomania = "ro-RO", a.Russian = "ru", a.RussianKazakhstan = "ru-KZ", a.RussianKyrgyzstan = "ru-KG", a.RussianRussia = "ru-RU", a.RussianUkraine = "ru-UA", a.Sakha = "sah", a.Sanskrit = "sa", a.SanskritIndia = "sa-IN", a.Sami = "se", a.SamiNorway = "se-NO", a.SamiSweden = "se-SE", a.SamiFinland = "se-FI", a.Samoan = "sm", a.SamoanSamoa = "sm-WS", a.Scots = "gd", a.Serbian = "sr", a.SerbianBosniaAndHerzegovina = "sr-BA", a.SerbianSerbiaAndMontenegro = "sr-SP", a.SerbianCyrillic = "sr-SP-Cyrl", a.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", a.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", a.Sesotho = "st", a.SesothoSouthAfrica = "st-ZA", a.Shona = "sn", a.ShonaZimbabwe = "sn-ZW", a.Sindhi = "sd", a.SindhiPakistan = "sd-PK", a.Sinhala = "si", a.SinhalaSriLanka = "si-LK", a.Slovak = "sk", a.SlovakSlovakia = "sk-SK", a.Slovenian = "sl", a.SlovenianSlovenia = "sl-SI", a.Somali = "so", a.SomaliSomalia = "so-SO", a.Spanish = "es", a.SpanishArgentina = "es-AR", a.SpanishBolivia = "es-BO", a.SpanishChile = "es-CL", a.SpanishColombia = "es-CO", a.SpanishCostaRica = "es-CR", a.SpanishCuba = "es-CU", a.SpanishDominicanRepublic = "es-DO", a.SpanishEcuador = "es-EC", a.SpanishEquatorialGuinea = "es-GQ", a.SpanishElSalvador = "es-SV", a.SpanishGuatemala = "es-GT", a.SpanishHonduras = "es-HN", a.SpanishMexico = "es-MX", a.SpanishNicaragua = "es-NI", a.SpanishPanama = "es-PA", a.SpanishParaguay = "es-PY", a.SpanishPeru = "es-PE", a.SpanishPuertoRico = "es-PR", a.SpanishSpain = "es-ES", a.SpanishUnitedStates = "es-US", a.SpanishUruguay = "es-UY", a.SpanishVenezuela = "es-VE", a.Sudanese = "su", a.Sutu = "st", a.SutuSouthAfrica = "st-ZA", a.Swahili = "sw", a.SwahiliKenya = "sw-KE", a.Swedish = "sv", a.SwedishFinland = "sv-FI", a.SwedishSweden = "sv-SE", a.Syriac = "syr", a.SyriacSyria = "syr-SY", a.Tajik = "tg", a.TajikTajikistan = "tg-TJ", a.Tagalog = "tl", a.TagalogPhilippines = "tl-PH", a.Tamazight = "tmh", a.Tamil = "ta", a.TamilIndia = "ta-IN", a.Tatar = "tt", a.Telugu = "te", a.TeluguIndia = "te-IN", a.Thai = "th", a.ThaiThailand = "th-TH", a.Tibetan = "bo", a.TibetanBhutan = "bo-BT", a.TibetanChina = "bo-CN", a.TibetanIndia = "bo-IN", a.Tsonga = "ts", a.Tswana = "tn", a.TswanaSouthAfrica = "tn-ZA", a.Turkish = "tr", a.TurkishTurkey = "tr-TR", a.Turkmen = "tk", a.Ukrainian = "uk", a.UkrainianUkraine = "uk-UA", a.Urdu = "ur", a.UrduAfghanistan = "ur-AF", a.UrduIndia = "ur-IN", a.UrduPakistan = "ur-PK", a.Uzbek = "uz", a.UzbekCyrillic = "uz-Cyrl-UZ", a.UzbekLatin = "uz-Latn-UZ", a.UzbekUzbekistan = "uz-UZ", a.Vietnamese = "vi", a.VietnameseVietnam = "vi-VN", a.Welsh = "cy", a.WelshUnitedKingdom = "cy-GB", a.Xhosa = "xh", a.XhosaSouthAfrica = "xh-ZA", a.Yiddish = "yi", a.Yoruba = "yo", a.YorubaNigeria = "yo-NG", a.ZhuyinMandarinChina = "yue-Hant-CN", a.Zulu = "zu", a.ZuluSouthAfrica = "zu-ZA", a))(ie22 || {});
var ne22 = ((a) => (a.AfricaAbidjan = "Africa/Abidjan", a.AfricaAccra = "Africa/Accra", a.AfricaAddisAbaba = "Africa/Addis_Ababa", a.AfricaAlgiers = "Africa/Algiers", a.AfricaAsmara = "Africa/Asmara", a.AfricaBamako = "Africa/Bamako", a.AfricaBangui = "Africa/Bangui", a.AfricaBanjul = "Africa/Banjul", a.AfricaBissau = "Africa/Bissau", a.AfricaBlantyre = "Africa/Blantyre", a.AfricaBrazzaville = "Africa/Brazzaville", a.AfricaBujumbura = "Africa/Bujumbura", a.AfricaCairo = "Africa/Cairo", a.AfricaCasablanca = "Africa/Casablanca", a.AfricaCeuta = "Africa/Ceuta", a.AfricaConakry = "Africa/Conakry", a.AfricaDakar = "Africa/Dakar", a.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", a.AfricaDjibouti = "Africa/Djibouti", a.AfricaDouala = "Africa/Douala", a.AfricaElAaiun = "Africa/El_Aaiun", a.AfricaFreetown = "Africa/Freetown", a.AfricaGaborone = "Africa/Gaborone", a.AfricaHarare = "Africa/Harare", a.AfricaJohannesburg = "Africa/Johannesburg", a.AfricaJuba = "Africa/Juba", a.AfricaKampala = "Africa/Kampala", a.AfricaKhartoum = "Africa/Khartoum", a.AfricaKigali = "Africa/Kigali", a.AfricaKinshasa = "Africa/Kinshasa", a.AfricaLagos = "Africa/Lagos", a.AfricaLibreville = "Africa/Libreville", a.AfricaLome = "Africa/Lome", a.AfricaLuanda = "Africa/Luanda", a.AfricaLubumbashi = "Africa/Lubumbashi", a.AfricaLusaka = "Africa/Lusaka", a.AfricaMalabo = "Africa/Malabo", a.AfricaMaputo = "Africa/Maputo", a.AfricaMaseru = "Africa/Maseru", a.AfricaMbabane = "Africa/Mbabane", a.AfricaMogadishu = "Africa/Mogadishu", a.AfricaMonrovia = "Africa/Monrovia", a.AfricaNairobi = "Africa/Nairobi", a.AfricaNdjamena = "Africa/Ndjamena", a.AfricaNiamey = "Africa/Niamey", a.AfricaNouakchott = "Africa/Nouakchott", a.AfricaOuagadougou = "Africa/Ouagadougou", a.AfricaPortoNovo = "Africa/Porto-Novo", a.AfricaSaoTome = "Africa/Sao_Tome", a.AfricaTripoli = "Africa/Tripoli", a.AfricaTunis = "Africa/Tunis", a.AfricaWindhoek = "Africa/Windhoek", a.AmericaAdak = "America/Adak", a.AmericaAnchorage = "America/Anchorage", a.AmericaAnguilla = "America/Anguilla", a.AmericaAntigua = "America/Antigua", a.AmericaAraguaina = "America/Araguaina", a.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", a.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", a.AmericaArgentinaCordoba = "America/Argentina/Cordoba", a.AmericaArgentinaJujuy = "America/Argentina/Jujuy", a.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", a.AmericaArgentinaMendoza = "America/Argentina/Mendoza", a.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", a.AmericaArgentinaSalta = "America/Argentina/Salta", a.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", a.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", a.AmericaArgentinaTucuman = "America/Argentina/Tucuman", a.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", a.AmericaAruba = "America/Aruba", a.AmericaAsuncion = "America/Asuncion", a.AmericaAtikokan = "America/Atikokan", a.AmericaAtka = "America/Atka", a.AmericaBahia = "America/Bahia", a.AmericaBahiaBanderas = "America/Bahia_Banderas", a.AmericaBarbados = "America/Barbados", a.AmericaBelem = "America/Belem", a.AmericaBelize = "America/Belize", a.AmericaBlancSablon = "America/Blanc-Sablon", a.AmericaBoaVista = "America/Boa_Vista", a.AmericaBogota = "America/Bogota", a.AmericaBoise = "America/Boise", a.AmericaCambridgeBay = "America/Cambridge_Bay", a.AmericaCampoGrande = "America/Campo_Grande", a.AmericaCancun = "America/Cancun", a.AmericaCaracas = "America/Caracas", a.AmericaCayenne = "America/Cayenne", a.AmericaCayman = "America/Cayman", a.AmericaChicago = "America/Chicago", a.AmericaChihuahua = "America/Chihuahua", a.AmericaCoralHarbour = "America/Coral_Harbour", a.AmericaCordoba = "America/Cordoba", a.AmericaCostaRica = "America/Costa_Rica", a.AmericaCreston = "America/Creston", a.AmericaCuiaba = "America/Cuiaba", a.AmericaCuracao = "America/Curacao", a.AmericaDanmarkshavn = "America/Danmarkshavn", a.AmericaDawson = "America/Dawson", a.AmericaDawsonCreek = "America/Dawson_Creek", a.AmericaDenver = "America/Denver", a.AmericaDetroit = "America/Detroit", a.AmericaDominica = "America/Dominica", a.AmericaEdmonton = "America/Edmonton", a.AmericaEirunepe = "America/Eirunepe", a.AmericaElSalvador = "America/El_Salvador", a.AmericaFortaleza = "America/Fortaleza", a.AmericaGlaceBay = "America/Glace_Bay", a.AmericaGodthab = "America/Godthab", a.AmericaGooseBay = "America/Goose_Bay", a.AmericaGrandTurk = "America/Grand_Turk", a.AmericaGrenada = "America/Grenada", a.AmericaGuadeloupe = "America/Guadeloupe", a.AmericaGuatemala = "America/Guatemala", a.AmericaGuayaquil = "America/Guayaquil", a.AmericaGuyana = "America/Guyana", a.AmericaHalifax = "America/Halifax", a.AmericaHavana = "America/Havana", a.AmericaHermosillo = "America/Hermosillo", a.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", a.AmericaIndianaKnox = "America/Indiana/Knox", a.AmericaIndianaMarengo = "America/Indiana/Marengo", a.AmericaIndianaPetersburg = "America/Indiana/Petersburg", a.AmericaIndianaTellCity = "America/Indiana/Tell_City", a.AmericaIndianaVevay = "America/Indiana/Vevay", a.AmericaIndianaVincennes = "America/Indiana/Vincennes", a.AmericaIndianaWinamac = "America/Indiana/Winamac", a.AmericaInuvik = "America/Inuvik", a.AmericaIqaluit = "America/Iqaluit", a.AmericaJamaica = "America/Jamaica", a.AmericaJuneau = "America/Juneau", a.AmericaKentuckyLouisville = "America/Kentucky/Louisville", a.AmericaKentuckyMonticello = "America/Kentucky/Monticello", a.AmericaKralendijk = "America/Kralendijk", a.AmericaLaPaz = "America/La_Paz", a.AmericaLima = "America/Lima", a.AmericaLosAngeles = "America/Los_Angeles", a.AmericaLouisville = "America/Louisville", a.AmericaLowerPrinces = "America/Lower_Princes", a.AmericaMaceio = "America/Maceio", a.AmericaManagua = "America/Managua", a.AmericaManaus = "America/Manaus", a.AmericaMarigot = "America/Marigot", a.AmericaMartinique = "America/Martinique", a.AmericaMatamoros = "America/Matamoros", a.AmericaMazatlan = "America/Mazatlan", a.AmericaMenominee = "America/Menominee", a.AmericaMerida = "America/Merida", a.AmericaMetlakatla = "America/Metlakatla", a.AmericaMexicoCity = "America/Mexico_City", a.AmericaMiquelon = "America/Miquelon", a.AmericaMoncton = "America/Moncton", a.AmericaMonterrey = "America/Monterrey", a.AmericaMontevideo = "America/Montevideo", a.AmericaMontserrat = "America/Montserrat", a.AmericaMontreal = "America/Montreal", a.AmericaNassau = "America/Nassau", a.AmericaNewYork = "America/New_York", a.AmericaNipigon = "America/Nipigon", a.AmericaNome = "America/Nome", a.AmericaNoronha = "America/Noronha", a.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", a.AmericaNorthDakotaCenter = "America/North_Dakota/Center", a.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", a.AmericaOjinaga = "America/Ojinaga", a.AmericaPanama = "America/Panama", a.AmericaPangnirtung = "America/Pangnirtung", a.AmericaParamaribo = "America/Paramaribo", a.AmericaPhoenix = "America/Phoenix", a.AmericaPortAuPrince = "America/Port-au-Prince", a.AmericaPortOfSpain = "America/Port_of_Spain", a.AmericaPortoVelho = "America/Porto_Velho", a.AmericaPuertoRico = "America/Puerto_Rico", a.AmericaRainyRiver = "America/Rainy_River", a.AmericaRankinInlet = "America/Rankin_Inlet", a.AmericaRecife = "America/Recife", a.AmericaRegina = "America/Regina", a.AmericaResolute = "America/Resolute", a.AmericaRioBranco = "America/Rio_Branco", a.AmericaSantaIsabel = "America/Santa_Isabel", a.AmericaSantarem = "America/Santarem", a.AmericaSantiago = "America/Santiago", a.AmericaSantoDomingo = "America/Santo_Domingo", a.AmericaSaoPaulo = "America/Sao_Paulo", a.AmericaScoresbysund = "America/Scoresbysund", a.AmericaShiprock = "America/Shiprock", a.AmericaSitka = "America/Sitka", a.AmericaStBarthelemy = "America/St_Barthelemy", a.AmericaStJohns = "America/St_Johns", a.AmericaStKitts = "America/St_Kitts", a.AmericaStLucia = "America/St_Lucia", a.AmericaStThomas = "America/St_Thomas", a.AmericaStVincent = "America/St_Vincent", a.AmericaSwiftCurrent = "America/Swift_Current", a.AmericaTegucigalpa = "America/Tegucigalpa", a.AmericaThule = "America/Thule", a.AmericaThunderBay = "America/Thunder_Bay", a.AmericaTijuana = "America/Tijuana", a.AmericaToronto = "America/Toronto", a.AmericaTortola = "America/Tortola", a.AmericaVancouver = "America/Vancouver", a.AmericaWhitehorse = "America/Whitehorse", a.AmericaWinnipeg = "America/Winnipeg", a.AmericaYakutat = "America/Yakutat", a.AmericaYellowknife = "America/Yellowknife", a.AntarcticaCasey = "Antarctica/Casey", a.AntarcticaDavis = "Antarctica/Davis", a.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", a.AntarcticaMacquarie = "Antarctica/Macquarie", a.AntarcticaMawson = "Antarctica/Mawson", a.AntarcticaMcMurdo = "Antarctica/McMurdo", a.AntarcticaPalmer = "Antarctica/Palmer", a.AntarcticaRothera = "Antarctica/Rothera", a.AntarcticaSyowa = "Antarctica/Syowa", a.AntarcticaTroll = "Antarctica/Troll", a.AntarcticaVostok = "Antarctica/Vostok", a.ArcticLongyearbyen = "Arctic/Longyearbyen", a.AsiaAden = "Asia/Aden", a.AsiaAlmaty = "Asia/Almaty", a.AsiaAmman = "Asia/Amman", a.AsiaAnadyr = "Asia/Anadyr", a.AsiaAqtau = "Asia/Aqtau", a.AsiaAqtobe = "Asia/Aqtobe", a.AsiaAshgabat = "Asia/Ashgabat", a.AsiaBaghdad = "Asia/Baghdad", a.AsiaBahrain = "Asia/Bahrain", a.AsiaBaku = "Asia/Baku", a.AsiaBangkok = "Asia/Bangkok", a.AsiaBarnaul = "Asia/Barnaul", a.AsiaBeirut = "Asia/Beirut", a.AsiaBishkek = "Asia/Bishkek", a.AsiaBrunei = "Asia/Brunei", a.AsiaChita = "Asia/Chita", a.AsiaChoibalsan = "Asia/Choibalsan", a.AsiaColombo = "Asia/Colombo", a.AsiaDamascus = "Asia/Damascus", a.AsiaDhaka = "Asia/Dhaka", a.AsiaDili = "Asia/Dili", a.AsiaDubai = "Asia/Dubai", a.AsiaDushanbe = "Asia/Dushanbe", a.AsiaFamagusta = "Asia/Famagusta", a.AsiaGaza = "Asia/Gaza", a.AsiaHebron = "Asia/Hebron", a.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", a.AsiaHongKong = "Asia/Hong_Kong", a.AsiaHovd = "Asia/Hovd", a.AsiaIrkutsk = "Asia/Irkutsk", a.AsiaJakarta = "Asia/Jakarta", a.AsiaJayapura = "Asia/Jayapura", a.AsiaJerusalem = "Asia/Jerusalem", a.AsiaKabul = "Asia/Kabul", a.AsiaKamchatka = "Asia/Kamchatka", a.AsiaKarachi = "Asia/Karachi", a.AsiaKathmandu = "Asia/Kathmandu", a.AsiaKhandyga = "Asia/Khandyga", a.AsiaKolkata = "Asia/Kolkata", a.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", a.AsiaKualaLumpur = "Asia/Kuala_Lumpur", a.AsiaKuching = "Asia/Kuching", a.AsiaKuwait = "Asia/Kuwait", a.AsiaMacau = "Asia/Macau", a.AsiaMagadan = "Asia/Magadan", a.AsiaMakassar = "Asia/Makassar", a.AsiaManila = "Asia/Manila", a.AsiaMuscat = "Asia/Muscat", a.AsiaNicosia = "Asia/Nicosia", a.AsiaNovokuznetsk = "Asia/Novokuznetsk", a.AsiaNovosibirsk = "Asia/Novosibirsk", a.AsiaOmsk = "Asia/Omsk", a.AsiaOral = "Asia/Oral", a.AsiaPhnomPenh = "Asia/Phnom_Penh", a.AsiaPontianak = "Asia/Pontianak", a.AsiaPyongyang = "Asia/Pyongyang", a.AsiaQatar = "Asia/Qatar", a.AsiaQyzylorda = "Asia/Qyzylorda", a.AsiaRangoon = "Asia/Rangoon", a.AsiaRiyadh = "Asia/Riyadh", a.AsiaSakhalin = "Asia/Sakhalin", a.AsiaSamarkand = "Asia/Samarkand", a.AsiaSeoul = "Asia/Seoul", a.AsiaShanghai = "Asia/Shanghai", a.AsiaSingapore = "Asia/Singapore", a.AsiaSrednekolymsk = "Asia/Srednekolymsk", a.AsiaTaipei = "Asia/Taipei", a.AsiaTashkent = "Asia/Tashkent", a.AsiaTbilisi = "Asia/Tbilisi", a.AsiaTehran = "Asia/Tehran", a.AsiaThimphu = "Asia/Thimphu", a.AsiaTokyo = "Asia/Tokyo", a.AsiaTomsk = "Asia/Tomsk", a.AsiaUlaanbaatar = "Asia/Ulaanbaatar", a.AsiaUrumqi = "Asia/Urumqi", a.AsiaUstNera = "Asia/Ust-Nera", a.AsiaVientiane = "Asia/Vientiane", a.AsiaVladivostok = "Asia/Vladivostok", a.AsiaYakutsk = "Asia/Yakutsk", a.AsiaYekaterinburg = "Asia/Yekaterinburg", a.AsiaYerevan = "Asia/Yerevan", a.AtlanticAzores = "Atlantic/Azores", a.AtlanticBermuda = "Atlantic/Bermuda", a.AtlanticCanary = "Atlantic/Canary", a.AtlanticCapeVerde = "Atlantic/Cape_Verde", a.AtlanticFaroe = "Atlantic/Faroe", a.AtlanticMadeira = "Atlantic/Madeira", a.AtlanticReykjavik = "Atlantic/Reykjavik", a.AtlanticSouthGeorgia = "Atlantic/South_Georgia", a.AtlanticStHelena = "Atlantic/St_Helena", a.AtlanticStanley = "Atlantic/Stanley", a.AustraliaAdelaide = "Australia/Adelaide", a.AustraliaBrisbane = "Australia/Brisbane", a.AustraliaBrokenHill = "Australia/Broken_Hill", a.AustraliaCanberra = "Australia/Canberra", a.AustraliaCurrie = "Australia/Currie", a.AustraliaDarwin = "Australia/Darwin", a.AustraliaEucla = "Australia/Eucla", a.AustraliaHobart = "Australia/Hobart", a.AustraliaLindeman = "Australia/Lindeman", a.AustraliaLordHowe = "Australia/Lord_Howe", a.AustraliaMelbourne = "Australia/Melbourne", a.AustraliaPerth = "Australia/Perth", a.AustraliaSydney = "Australia/Sydney", a.EuropeAmsterdam = "Europe/Amsterdam", a.EuropeAndorra = "Europe/Andorra", a.EuropeAthens = "Europe/Athens", a.EuropeBelgrade = "Europe/Belgrade", a.EuropeBerlin = "Europe/Berlin", a.EuropeBratislava = "Europe/Bratislava", a.EuropeBrussels = "Europe/Brussels", a.EuropeBucharest = "Europe/Bucharest", a.EuropeBudapest = "Europe/Budapest", a.EuropeBusingen = "Europe/Busingen", a.EuropeChisinau = "Europe/Chisinau", a.EuropeCopenhagen = "Europe/Copenhagen", a.EuropeDublin = "Europe/Dublin", a.EuropeGibraltar = "Europe/Gibraltar", a.EuropeGuernsey = "Europe/Guernsey", a.EuropeHelsinki = "Europe/Helsinki", a.EuropeIsleOfMan = "Europe/Isle_of_Man", a.EuropeIstanbul = "Europe/Istanbul", a.EuropeJersey = "Europe/Jersey", a.EuropeKaliningrad = "Europe/Kaliningrad", a.EuropeKiev = "Europe/Kiev", a.EuropeKirov = "Europe/Kirov", a.EuropeLisbon = "Europe/Lisbon", a.EuropeLjubljana = "Europe/Ljubljana", a.EuropeLondon = "Europe/London", a.EuropeLuxembourg = "Europe/Luxembourg", a.EuropeMadrid = "Europe/Madrid", a.EuropeMalta = "Europe/Malta", a.EuropeMariehamn = "Europe/Mariehamn", a.EuropeMinsk = "Europe/Minsk", a.EuropeMonaco = "Europe/Monaco", a.EuropeMoscow = "Europe/Moscow", a.EuropeOslo = "Europe/Oslo", a.EuropeParis = "Europe/Paris", a.EuropePodgorica = "Europe/Podgorica", a.EuropePrague = "Europe/Prague", a.EuropeRiga = "Europe/Riga", a.EuropeRome = "Europe/Rome", a.EuropeSamara = "Europe/Samara", a.EuropeSanMarino = "Europe/San_Marino", a.EuropeSarajevo = "Europe/Sarajevo", a.EuropeSimferopol = "Europe/Simferopol", a.EuropeSkopje = "Europe/Skopje", a.EuropeSofia = "Europe/Sofia", a.EuropeStockholm = "Europe/Stockholm", a.EuropeTallinn = "Europe/Tallinn", a.EuropeTirane = "Europe/Tirane", a.EuropeUzhgorod = "Europe/Uzhgorod", a.EuropeVaduz = "Europe/Vaduz", a.EuropeVatican = "Europe/Vatican", a.EuropeVienna = "Europe/Vienna", a.EuropeVilnius = "Europe/Vilnius", a.EuropeVolgograd = "Europe/Volgograd", a.EuropeWarsaw = "Europe/Warsaw", a.EuropeZagreb = "Europe/Zagreb", a.EuropeZaporozhye = "Europe/Zaporozhye", a.EuropeZurich = "Europe/Zurich", a.GMT = "GMT", a.IndianAntananarivo = "Indian/Antananarivo", a.IndianChagos = "Indian/Chagos", a.IndianChristmas = "Indian/Christmas", a.IndianCocos = "Indian/Cocos", a.IndianComoro = "Indian/Comoro", a.IndianKerguelen = "Indian/Kerguelen", a.IndianMahe = "Indian/Mahe", a.IndianMaldives = "Indian/Maldives", a.IndianMauritius = "Indian/Mauritius", a.IndianMayotte = "Indian/Mayotte", a.IndianReunion = "Indian/Reunion", a.PacificApia = "Pacific/Apia", a.PacificAuckland = "Pacific/Auckland", a.PacificBougainville = "Pacific/Bougainville", a.PacificChatham = "Pacific/Chatham", a.PacificChuuk = "Pacific/Chuuk", a.PacificEaster = "Pacific/Easter", a.PacificEfate = "Pacific/Efate", a.PacificEnderbury = "Pacific/Enderbury", a.PacificFakaofo = "Pacific/Fakaofo", a.PacificFiji = "Pacific/Fiji", a.PacificFunafuti = "Pacific/Funafuti", a.PacificGalapagos = "Pacific/Galapagos", a.PacificGambier = "Pacific/Gambier", a.PacificGuadalcanal = "Pacific/Guadalcanal", a.PacificGuam = "Pacific/Guam", a.PacificHonolulu = "Pacific/Honolulu", a.PacificJohnston = "Pacific/Johnston", a.PacificKiritimati = "Pacific/Kiritimati", a.PacificKosrae = "Pacific/Kosrae", a.PacificKwajalein = "Pacific/Kwajalein", a.PacificMajuro = "Pacific/Majuro", a.PacificMarquesas = "Pacific/Marquesas", a.PacificMidway = "Pacific/Midway", a.PacificNauru = "Pacific/Nauru", a.PacificNiue = "Pacific/Niue", a.PacificNorfolk = "Pacific/Norfolk", a.PacificNoumea = "Pacific/Noumea", a.PacificPagoPago = "Pacific/Pago_Pago", a.PacificPalau = "Pacific/Palau", a.PacificPitcairn = "Pacific/Pitcairn", a.PacificPohnpei = "Pacific/Pohnpei", a.PacificPonape = "Pacific/Ponape", a.PacificPortMoresby = "Pacific/Port_Moresby", a.PacificRarotonga = "Pacific/Rarotonga", a.PacificSaipan = "Pacific/Saipan", a.PacificSamoa = "Pacific/Samoa", a.PacificTahiti = "Pacific/Tahiti", a.PacificTarawa = "Pacific/Tarawa", a.PacificTongatapu = "Pacific/Tongatapu", a.PacificTruk = "Pacific/Truk", a.PacificWake = "Pacific/Wake", a.PacificWallis = "Pacific/Wallis", a.PacificYap = "Pacific/Yap", a))(ne22 || {});
var ue22 = ((a) => (a.UTC_MINUS_12 = "UTC-12", a.UTC_MINUS_11_30 = "UTC-11:30", a.UTC_MINUS_11 = "UTC-11", a.UTC_MINUS_10_30 = "UTC-10:30", a.UTC_MINUS_10 = "UTC-10", a.UTC_MINUS_9_30 = "UTC-9:30", a.UTC_MINUS_9 = "UTC-09", a.UTC_MINUS_8_45 = "UTC-8:45", a.UTC_MINUS_8 = "UTC-08", a.UTC_MINUS_7 = "UTC-07", a.UTC_MINUS_6_30 = "UTC-6:30", a.UTC_MINUS_6 = "UTC-06", a.UTC_MINUS_5_45 = "UTC-5:45", a.UTC_MINUS_5_30 = "UTC-5:30", a.UTC_MINUS_5 = "UTC-05", a.UTC_MINUS_4_30 = "UTC-4:30", a.UTC_MINUS_4 = "UTC-04", a.UTC_MINUS_3_30 = "UTC-3:30", a.UTC_MINUS_3 = "UTC-03", a.UTC_MINUS_2_30 = "UTC-2:30", a.UTC_MINUS_2 = "UTC-02", a.UTC_MINUS_1 = "UTC-01", a.UTC_0 = "UTC+00", a.UTC_PLUS_1 = "UTC+01", a.UTC_PLUS_2 = "UTC+02", a.UTC_PLUS_3 = "UTC+03", a.UTC_PLUS_3_30 = "UTC+3:30", a.UTC_PLUS_4 = "UTC+04", a.UTC_PLUS_4_30 = "UTC+4:30", a.UTC_PLUS_5 = "UTC+05", a.UTC_PLUS_5_30 = "UTC+5:30", a.UTC_PLUS_5_45 = "UTC+5:45", a.UTC_PLUS_6 = "UTC+06", a.UTC_PLUS_6_30 = "UTC+6:30", a.UTC_PLUS_7 = "UTC+07", a.UTC_PLUS_8 = "UTC+08", a.UTC_PLUS_8_45 = "UTC+8:45", a.UTC_PLUS_9 = "UTC+09", a.UTC_PLUS_9_30 = "UTC+9:30", a.UTC_PLUS_10 = "UTC+10", a.UTC_PLUS_10_30 = "UTC+10:30", a.UTC_PLUS_11 = "UTC+11", a.UTC_PLUS_11_30 = "UTC+11:30", a.UTC_PLUS_12 = "UTC+12", a.UTC_PLUS_12_45 = "UTC+12:45", a.UTC_PLUS_13 = "UTC+13", a.UTC_PLUS_13_45 = "UTC+13:45", a.UTC_PLUS_14 = "UTC+14", a))(ue22 || {});
var se22 = ((a) => (a.AcreTime = "ACT", a.AfghanistanTime = "AFT", a.AIXCentralEuropeanTime = "DFT", a.AlaskaDaylightTime = "AKDT", a.AlaskaStandardTime = "AKST", a.AlmaAtaTime = "ALMT", a.AmazonSummerTime = "AMST", a.AmazonTime = "AMT", a.AnadyrTime = "ANAT", a.AqtobeTime = "AQTT", a.ArabiaStandardTime = "AST", a.ArgentinaTime = "ART", a.ArmeniaTime = "AMT", a.ASEANCommonTime = "ASEAN", a.AtlanticDaylightTime = "ADT", a.AtlanticStandardTime = "AST", a.AustralianCentralDaylightSavingTime = "ACDT", a.AustralianCentralStandardTime = "ACST", a.AustralianCentralWesternStandardTime = "ACWST", a.AustralianEasternDaylightSavingTime = "AEDT", a.AustralianEasternStandardTime = "AEST", a.AustralianEasternTime = "AET", a.AustralianWesternStandardTime = "AWST", a.AzerbaijanTime = "AZT", a.AzoresStandardTime = "AZOT", a.AzoresSummerTime = "AZOST", a.BakerIslandTime = "BIT", a.BangladeshStandardTime = "BST", a.BhutanTime = "BTT", a.BoliviaTime = "BOT", a.BougainvilleStandardTime = "BST", a.BrasiliaSummerTime = "BRST", a.BrasiliaTime = "BRT", a.BritishIndianOceanTime = "BIOT", a.BritishSummerTime = "BST", a.BruneiTime = "BNT", a.CapeVerdeTime = "CVT", a.CentralAfricaTime = "CAT", a.CentralDaylightTime = "CDT", a.CentralEuropeanSummerTime = "CEST", a.CentralEuropeanTime = "CET", a.CentralIndonesiaTime = "WITA", a.CentralStandardTime = "CST", a.CentralTime = "CT", a.CentralWesternStandardTime = "CWST", a.ChamorroStandardTime = "CHST", a.ChathamDaylightTime = "CHADT", a.ChathamStandardTime = "CHAST", a.ChileStandardTime = "CLT", a.ChileSummerTime = "CLST", a.ChinaStandardTime = "CST", a.ChoibalsanStandardTime = "CHOT", a.ChoibalsanSummerTime = "CHOST", a.ChristmasIslandTime = "CXT", a.ChuukTime = "CHUT", a.ClipptertonIslandStandardTime = "CIST", a.CocosIslandsTime = "CCT", a.ColombiaSummerTime = "COST", a.ColombiaTime = "COT", a.CookIslandTime = "CKT", a.CoordinatedUniversalTime = "UTC", a.CubaDaylightTime = "CDT", a.CubaStandardTime = "CST", a.DavisTime = "DAVT", a.DumontDUrvilleTime = "DDUT", a.EastAfricaTime = "EAT", a.EasterIslandStandardTime = "EAST", a.EasterIslandSummerTime = "EASST", a.EasternCaribbeanTime = "ECT", a.EasternDaylightTime = "EDT", a.EasternEuropeanSummerTime = "EEST", a.EasternEuropeanTime = "EET", a.EasternGreenlandSummerTime = "EGST", a.EasternGreenlandTime = "EGT", a.EasternIndonesianTime = "WIT", a.EasternStandardTime = "EST", a.EasternTime = "ET", a.EcuadorTime = "ECT", a.FalklandIslandsSummerTime = "FKST", a.FalklandIslandsTime = "FKT", a.FernandoDeNoronhaTime = "FNT", a.FijiTime = "FJT", a.FrenchGuianaTime = "GFT", a.FrenchSouthernAndAntarcticTime = "TFT", a.FurtherEasternEuropeanTime = "FET", a.GalapagosTime = "GALT", a.GambierIslandTime = "GIT", a.GambierIslandsTime = "GAMT", a.GeorgiaStandardTime = "GET", a.GilbertIslandTime = "GILT", a.GreenwichMeanTime = "GMT", a.GulfStandardTime = "GST", a.GuyanaTime = "GYT", a.HawaiiAleutianDaylightTime = "HDT", a.HawaiiAleutianStandardTime = "HST", a.HeardAndMcDonaldIslandsTime = "HMT", a.HeureAvanceeDEuropeCentraleTime = "HAEC", a.HongKongTime = "HKT", a.HovdSummerTime = "HOVST", a.HovdTime = "HOVT", a.IndianOceanTime = "IOT", a.IndianStandardTime = "IST", a.IndochinaTime = "ICT", a.InternationalDayLineWestTime = "IDLW", a.IranDaylightTime = "IRDT", a.IranStandardTime = "IRST", a.IrishStandardTime = "IST", a.IrkutskSummerTime = "IRKST", a.IrkutskTime = "IRKT", a.IsraelDaylightTime = "IDT", a.IsraelStandardTime = "IST", a.JapanStandardTime = "JST", a.KaliningradTime = "KALT", a.KamchatkaTime = "KAMT", a.KoreaStandardTime = "KST", a.KosraeTime = "KOST", a.KrasnoyarskSummerTime = "KRAST", a.KrasnoyarskTime = "KRAT", a.KyrgyzstanTime = "KGT", a.LineIslandsTime = "LINT", a.KazakhstanStandardTime = "KAST", a.LordHoweStandardTime = "LHST", a.LordHoweSummerTime = "LHST", a.MacquarieIslandStationTime = "MIST", a.MagadanTime = "MAGT", a.MalaysiaStandardTime = "MST", a.MalaysiaTime = "MYT", a.MaldivesTime = "MVT", a.MarquesasIslandsTime = "MART", a.MarshallIslandsTime = "MHT", a.MauritiusTime = "MUT", a.MawsonStationTime = "MAWT", a.MiddleEuropeanSummerTime = "MEDT", a.MiddleEuropeanTime = "MET", a.MoscowTime = "MSK", a.MountainDaylightTime = "MDT", a.MountainStandardTime = "MST", a.MyanmarStandardTime = "MMT", a.NepalTime = "NCT", a.NauruTime = "NRT", a.NewCaledoniaTime = "NCT", a.NewZealandDaylightTime = "NZDT", a.NewZealandStandardTime = "NZST", a.NewfoundlandDaylightTime = "NDT", a.NewfoundlandStandardTime = "NST", a.NewfoundlandTime = "NT", a.NiueTime = "NUT", a.NorfolkIslandTime = "NFT", a.NovosibirskTime = "NOVT", a.OmskTime = "OMST", a.OralTime = "ORAT", a.PacificDaylightTime = "PDT", a.PacificStandardTime = "PST", a.PakistanStandardTime = "PKT", a.PalauTime = "PWT", a.PapuaNewGuineaTime = "PGT", a.ParaguaySummerTime = "PYST", a.ParaguayTime = "PYT", a.PeruTime = "PET", a.PhilippineStandardTime = "PHST", a.PhilippineTime = "PHT", a.PhoenixIslandTime = "PHOT", a.PitcairnTime = "PST", a.PohnpeiStandardTime = "PONT", a.ReunionTime = "RET", a.RotheraResearchStationTime = "ROTT", a.SaintPierreAndMiquelonDaylightTime = "PMDT", a.SaintPierreAndMiquelonStandardTime = "PMST", a.SakhalinIslandTime = "SAKT", a.SamaraTime = "SAMT", a.SamoaDaylightTime = "SDT", a.SamoaStandardTime = "SST", a.SeychellesTime = "SCT", a.ShowaStationTime = "SYOT", a.SingaporeStandardTime = "SST", a.SingaporeTime = "SGT", a.SolomonIslandsTime = "SBT", a.SouthAfricanStandardTime = "SAST", a.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", a.SrednekolymskTime = "SRET", a.SriLankaStandardTime = "SLST", a.SurinameTime = "SRT", a.TahitiTime = "TAHT", a.TajikistanTime = "TJT", a.ThailandStandardTime = "THA", a.TimorLesteTime = "TLT", a.TokelauTime = "TKT", a.TongaTime = "TOT", a.TurkeyTime = "TRT", a.TurkmenistanTime = "TMT", a.TuvaluTime = "TVT", a.UlaanbaatarStandardTime = "ULAT", a.UlaanbaatarSummerTime = "ULAST", a.UruguayStandardTime = "UYT", a.UruguaySummerTime = "UYST", a.UzbekistanTime = "UZT", a.VanuatuTime = "VUT", a.VenezuelaStandardTime = "VET", a.VladivostokTime = "VLAT", a.VolgogradTime = "VOLT", a.VostokStationTime = "VOST", a.WakeIslandTime = "WAKT", a.WestAfricaSummerTime = "WAST", a.WestAfricaTime = "WAT", a.WestGreenlandSummerTime = "WGST", a.WestGreenlandTime = "WGT", a.WestKazakhstanTime = "WKT", a.WesternEuropeanSummerTime = "WEDT", a.WesternEuropeanTime = "WET", a.WesternIndonesianTime = "WIT", a.WesternStandardTime = "WST", a.YakutskTime = "YAKT", a.YekaterinburgTime = "YEKT", a))(se22 || {});
var te22 = ((a) => (a.Africa = "Africa", a.Americas = "Americas", a.Asia = "Asia", a.Europe = "Europe", a.Oceania = "Oceania", a.Polar = "Polar", a))(te22 || {});
var oe22 = ((a) => (a.CentralAmerica = "Central America", a.EasternAsia = "Eastern Asia", a.EasternEurope = "Eastern Europe", a.EasternAfrica = "Eastern Africa", a.MiddleAfrica = "Middle Africa", a.MiddleEast = "Middle East", a.NorthernAfrica = "Northern Africa", a.NorthernAmerica = "Northern America", a.NorthernEurope = "Northern Europe", a.Polynesia = "Polynesia", a.SouthAmerica = "South America", a.SouthernAfrica = "Southern Africa", a.SouthernAsia = "Southern Asia", a.SouthernEurope = "Southern Europe", a.WesternAfrica = "Western Africa", a.WesternAsia = "Western Asia", a.WesternEurope = "Western Europe", a.WesternAustralia = "Western Australia", a))(oe22 || {});
var re22 = { id: "dev", type: e2.Development, public: false, name: "Development", description: "Development environment" };
var me22 = { id: "test", type: e2.NonProduction, public: false, name: "Test", description: "Test environment" };
var le22 = { id: "production", type: e2.Production, public: true, name: "Production", description: "Production environment" };
function ge22() {
  let a = process.env.NODE_ENV;
  return a === "dev" || a === "development" ? re22 : a === "production" ? le22 : me22;
}
var import_cors = __toESM2(require_lib(), 1);
var import_morgan = __toESM2(require_morgan(), 1);
var logger = new e();
function auth_middleware_default(req, res, next) {
  try {
    return next();
  } catch (err) {
    const isManaged = err instanceof s2;
    const exception = isManaged ? err : new v2(err.name, { cause: err });
    logger.exception(exception.toJSON());
  }
  return next();
}
var q3 = ((U3) => (U3.Comment = "comment", U3.Create = "create", U3.Delete = "delete", U3.Edit = "edit", U3.Invoice = "invoice", U3.Message = "message", U3.PageView = "pageView", U3.Paid = "paid", U3.Payment = "payment", U3.Purchase = "purchase", U3.Referral = "referral", U3.Renewal = "renewal", U3.Signup = "signup", U3.Subscription = "subscription", U3.Upgrade = "upgrade", U3))(q3 || {});
var R3 = ((U3) => (U3.Business = "business", U3.Engineering = "engineering", U3.Exception = "exception", U3.LogMessage = "log-message", U3.Marketing = "marketing", U3.PageLeave = "page-leave", U3.PageView = "page-view", U3.Product = "product", U3.QualityManagement = "quality-management", U3.UserAccess = "user-access", U3.UserLogin = "user-login", U3.UserLogout = "user-logout", U3.UserSignup = "user-signup", U3.UserPreferencesChanged = "user-preferences-changed", U3.WebsiteVisit = "website-visit", U3))(R3 || {});
var F3 = ((o2) => (o2.CloseTab = "close-tab", o2.ExternalLink = "external-link", o2.NavigateAway = "navigate-away", o2.Unknown = "unknown", o2))(F3 || {});
var H3 = ((De22) => (De22.Ecs = "Ecs", De22))(H3 || {});
var O3 = ((o2) => (o2.Finished = "Finished", o2.Queued = "Queued", o2.Running = "Running", o2.Started = "Started", o2))(O3 || {});
var j3 = ((o2) => (o2.Mobile = "mobile", o2.TV = "tv", o2.Watch = "watch", o2.Web = "web", o2))(j3 || {});
var V3 = ((P3) => (P3.Development = "Development", P3.NonProduction = "NonProduction", P3.Production = "Production", P3))(V3 || {});
var W3 = ((P3) => (P3.Completed = "completed", P3.Started = "started", P3.Uncompleted = "uncompleted", P3))(W3 || {});
var J3 = ((P3) => (P3.Build = "Build", P3.Deployment = "Deployment", P3.Test = "Test", P3))(J3 || {});
var Z3 = ((_3) => (_3.Canceled = "Canceled", _3.Completed = "Completed", _3.Failed = "Failed", _3.Running = "Running", _3.Queued = "Queued", _3.Waiting = "Waiting", _3))(Z3 || {});
var Y3 = ((_3) => (_3.Canceled = "Canceled", _3.Completed = "Completed", _3.Failed = "Failed", _3.Running = "Running", _3.Queued = "Queued", _3.Waiting = "Waiting", _3))(Y3 || {});
var Q3 = ((_3) => (_3.ForgotPassword = "forgot_password", _3.Index = "index", _3.Login = "login", _3.PageNotFound = "404", _3.Signup = "signup", _3.VerifyCode = "verify_code", _3))(Q3 || {});
var $3 = ((o2) => (o2.Info = "info", o2.Warning = "warning", o2.Error = "error", o2.Success = "success", o2))($3 || {});
var X3 = ((N3) => (N3.Details = "details", N3.Dialog = "dialog", N3))(X3 || {});
var C3 = ((o2) => (o2.Info = "info", o2.Warning = "warning", o2.Error = "error", o2.Success = "success", o2))(C3 || {});
var aa3 = ((h3) => (h3.AccountBalance = "AccountBalance", h3.UserAssets = "UserAssets", h3.UserCreditCardDebt = "UserCreditCardDebt", h3.UserCreditLimit = "UserCreditLimit", h3.UserCreditUtilization = "UserCreditUtilization", h3.UserDebt = "UserDebt", h3.UserInvestments = "UserInvestments", h3.UserRetirement = "UserRetirement", h3.UserSavings = "UserSavings", h3))(aa3 || {});
var ea2 = ((o2) => (o2.DateTime = "date_time", o2.True = "true", o2.False = "false", o2.UniqueId = "unique_id", o2))(ea2 || {});
var ia3 = ((N3) => (N3.DomainModel = "domain_entity", N3.GenericModel = "generic_entity", N3))(ia3 || {});
var na3 = ((T2) => (T2.AirportCode = "airport-code", T2.BankIDCode = "bank-id-code", T2.BitcoinAddress = "bitcoin-address", T2.Boolean = "boolean", T2.City = "city", T2.Color = "color", T2.CountryCode = "country-code", T2.CreditCard = "credit-card", T2.CurrencyAmount = "currency-amount", T2.CurrencyCode = "currency-code", T2.DataURI = "data-uri", T2.Date = "date", T2.DateRange = "date-range", T2.DateTime = "date-time", T2.DayOfMonth = "day-of-month", T2.DomainName = "domain-name", T2.EmailAddress = "email-address", T2.EthereumAddress = "ethereum-address", T2.EAN = "european-article-number", T2.EIN = "employer-identification-number", T2.Float = "float", T2.GeographicCoordinate = "geographic-coordinate", T2.GeographicCoordinates = "geographic-coordinates", T2.GitRepositoryURL = "git-repository-url", T2.HSLColor = "hsl-color", T2.HexColor = "hex-color", T2.Hexadecimal = "hexadecimal", T2.IBAN = "international-bank-account-number", T2.IMEI = "international-mobile-equipment-identifier", T2.IPAddress = "ip-address", T2.IPAddressRange = "ip-address-range", T2.ISBN = "international-standard-book-number", T2.ISIN = "international-stock-number", T2.ISMN = "international-standard-music-number", T2.ISSN = "international-standard-serial-number", T2.ISO8601 = "iso-8601", T2.ISO31661Alpha2 = "iso-31661-alpha-2", T2.ISO31661Alpha3 = "iso-31661-alpha-3", T2.ISO4217 = "iso-4217", T2.Image = "image", T2.Integer = "integer", T2.JSON = "json", T2.LanguageCode = "language-code", T2.LicensePlateNumber = "license-plate-number", T2.LongText = "long-text", T2.MD5 = "md5", T2.Markdown = "markdown", T2.Menu = "menu", T2.Number = "number", T2.MACAddress = "mac-address", T2.MagnetURI = "magnet-uri", T2.MimeType = "mime-type", T2.Month = "month", T2.Password = "password", T2.PassportNumber = "passport-number", T2.Percent = "percent", T2.PhoneNumber = "phone-number", T2.Port = "port", T2.PostalCode = "postal-code", T2.Province = "province", T2.RFC3339 = "rfc-3339", T2.RGBColor = "rgb-color", T2.SemanticVersion = "semantic-version", T2.SSN = "social-security-number", T2.State = "state", T2.StreetAddress = "street-address", T2.String = "string", T2.Tags = "tags", T2.TaxIDNumber = "tax-id-number", T2.Time = "time", T2.TimeOfDay = "time-of-day", T2.TimeRange = "time-range", T2.TimezoneRegion = "timezone-region", T2.URL = "url", T2.URLPath = "url-path", T2.UUID = "uuid", T2.VATIDNumber = "value-added-tax-id-number", T2.VerificationCode = "verification-code", T2.Video = "video", T2.Weekday = "weekday", T2.Year = "year", T2))(na3 || {});
var ra3 = ((o2) => (o2.Critical = "Critical", o2.Error = "Error", o2.Fatal = "Fatal", o2.Warning = "Warning", o2))(ra3 || {});
var x3 = ((l2) => (l2.Contains = "contains", l2.HasCharacterCount = "has-character-count", l2.HasNumberCount = "has-number-count", l2.HasLetterCount = "has-letter-count", l2.HasLowercaseCount = "has-lowercase-count", l2.HasSpacesCount = "has-spaces-count", l2.HasSymbolCount = "has-symbol-count", l2.HasUppercaseCount = "has-uppercase-count", l2.IsAfter = "is-after", l2.IsAfterOrEqual = "is-after-or-equal", l2.IsAirport = "is-airport", l2.IsAlpha = "is-alpha", l2.IsAlphanumeric = "is-alphanumeric", l2.IsAlgorithmHash = "is-algorithm-hash", l2.IsAscii = "is-ascii", l2.IsBase64 = "is-base-64", l2.IsBefore = "is-before", l2.IsBeforeOrAfter = "is-before-or-after", l2.IsBeforeOrEqual = "is-before-or-equal", l2.IsBetween = "is-between", l2.IsBIC = "is-bic", l2.IsBitcoinAddress = "is-bitcoin-address", l2.IsBoolean = "is-boolean", l2.IsColor = "is-color", l2.IsComplexEnough = "is-complex-enough", l2.IsCountry = "is-country", l2.IsCreditCard = "is-credit-card", l2.IsCurrency = "is-currency", l2.IsDataURI = "is-data-uri", l2.IsDate = "is-date", l2.IsDateRange = "is-date-range", l2.IsDateTime = "is-date-time", l2.IsDayOfMonth = "is-day-of-month", l2.IsDecimal = "is-decimal", l2.IsDivisibleBy = "is-divisible-by", l2.IsDomainName = "is-domain-name", l2.IsEmailAddress = "is-email-address", l2.IsEthereumAddress = "is-ethereum-address", l2.IsEAN = "is-ean", l2.IsEIN = "is-ein", l2.IsEqual = "is-equal", l2.IsEvenNumber = "is-even-number", l2.IsFloat = "is-float", l2.IsIBAN = "is-iban", l2.IsGreaterThan = "greater-than", l2.IsGreaterThanOrEqual = "greater-than-or-equal", l2.IsHSLColor = "is-hsl-color", l2.IsHexColor = "is-hex-color", l2.IsHexadecimal = "is-hexadecimal", l2.IsIdentityCardCode = "is-identity-card-code", l2.IsIMEI = "is-imei", l2.IsInIPAddressRange = "is-in-ip-address-range", l2.IsInList = "is-in-list", l2.IsInTheLast = "is-in-the-last", l2.IsInteger = "is-integer", l2.IsIPAddress = "is-ip-address", l2.IsIPAddressRange = "is-ip-address-range", l2.IsISBN = "is-isbn", l2.IsISIN = "is-isin", l2.IsISMN = "is-ismn", l2.IsISRC = "is-isrc", l2.IsISSN = "is-issn", l2.IsISO4217 = "is-iso-4217", l2.IsISO8601 = "is-iso-8601", l2.IsISO31661Alpha2 = "is-iso-31661-alpha-2", l2.IsISO31661Alpha3 = "is-iso-31661-alpha-3", l2.IsJSON = "is-json", l2.IsLanguage = "is-language", l2.IsLatitude = "is-latitude", l2.IsLongitude = "is-longitude", l2.IsLengthEqual = "is-length-equal", l2.IsLengthGreaterThan = "is-length-greater-than", l2.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", l2.IsLengthLessThan = "is-length-less-than", l2.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", l2.IsLessThan = "less-than", l2.IsLessThanOrEqual = "less-than-or-equal", l2.IsLicensePlateNumber = "is-license-plate-number", l2.IsLowercase = "is-lowercase", l2.IsOctal = "is-octal", l2.IsMACAddress = "is-mac-address", l2.IsMD5 = "is-md5", l2.IsMagnetURI = "is-magnet-uri", l2.IsMarkdown = "is-markdown", l2.IsMimeType = "is-mime-type", l2.IsMonth = "is-month", l2.IsNegativeNumber = "is-negative-number", l2.IsNotDate = "is-not-date", l2.IsNotEqual = "is-not-equal", l2.IsNotInIPAddressRange = "is-not-in-ip-address-range", l2.IsNotInList = "is-not-in-list", l2.IsNotNull = "is-not-null", l2.IsNotRegexMatch = "is-not-regex-match", l2.IsNotToday = "is-not-today", l2.IsNumber = "is-number", l2.IsNumeric = "is-numeric", l2.IsOddNumber = "is-odd-number", l2.IsPassportNumber = "is-passport-number", l2.IsPhoneNumber = "is-phone-number", l2.IsPort = "is-port", l2.IsPositiveNumber = "is-positive-number", l2.IsPostalCode = "is-postal-code", l2.IsProvince = "is-province", l2.IsRGBColor = "is-rgb-color", l2.IsRegexMatch = "is-regex-match", l2.IsRequired = "is-required", l2.IsSemanticVersion = "is-semantic-version", l2.IsSlug = "is-slug", l2.IsSSN = "is-ssn", l2.IsState = "is-state", l2.IsStreetAddress = "is-street-address", l2.IsString = "is-string", l2.IsStrongPassword = "is-strong-password", l2.IsTags = "is-tags", l2.IsTaxIDNumber = "is-tax-id-number", l2.IsThisMonth = "is-this-month", l2.IsThisQuarter = "is-this-quarter", l2.IsThisWeek = "is-this-week", l2.IsThisWeekend = "is-this-weekend", l2.IsThisYear = "is-this-year", l2.IsTime = "is-time", l2.IsTimeOfDay = "is-time-of-day", l2.IsTimeRange = "is-time-range", l2.IsToday = "is-today", l2.IsURL = "is-url", l2.IsUUID = "is-uuid", l2.IsUppercase = "is-uppercase", l2.IsUsernameAvailable = "is-username-available", l2.IsValidStreetAddress = "is-valid-street-address", l2.IsVATIDNumber = "is-vat-id-number", l2.IsWeekday = "is-weekday", l2.IsWeekend = "is-weekend", l2.IsYear = "is-year", l2))(x3 || {});
var sa3 = ((o2) => (o2.IsAuthenticated = "is-authenticated", o2.IsNotAuthenticated = "is-not-authenticated", o2.IsUsernameAvailable = "is-username-available", o2.PasswordMismatch = "password-mismatch", o2))(sa3 || {});
var ta3 = ((A2) => (A2[A2.IsHSLColor = "is-hsl-color"] = "IsHSLColor", A2[A2.IsHexColor = "is-hex-color"] = "IsHexColor", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsRGBColor = "is-rgb-color"] = "IsRGBColor", A2[A2.IsString = "is-string"] = "IsString", A2))(ta3 || {});
var oa3 = ((c3) => (c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsCurrency = "is-currency"] = "IsCurrency", c3[c3.IsDecimal = "is-decimal"] = "IsDecimal", c3[c3.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsFloat = "is-float"] = "IsFloat", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsISO8601 = "is-iso-8601"] = "IsISO8601", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", c3))(oa3 || {});
var ma3 = ((o2) => (o2[o2.IsBitcoinAddress = "is-bitcoin-address"] = "IsBitcoinAddress", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(ma3 || {});
var la3 = ((o2) => (o2[o2.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(la3 || {});
var ca3 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsJSON = "is-json"] = "IsJSON", A2[A2.IsLanguage = "is-language"] = "IsLanguage", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2))(ca3 || {});
var ua3 = ((d2) => (d2[d2.IsAlpha = "is-alpha"] = "IsAlpha", d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(ua3 || {});
var da3 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsCountry = "is-country"] = "IsCountry", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(da3 || {});
var pa3 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsFloat = "is-float"] = "IsFloat", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNumeric = "is-numeric"] = "IsNumeric", A2))(pa3 || {});
var ga3 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsFloat = "is-float"] = "IsFloat", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNumeric = "is-numeric"] = "IsNumeric", A2))(ga3 || {});
var Aa3 = ((o2) => (o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsPostalCode = "is-postal-code"] = "IsPostalCode", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Aa3 || {});
var Ta3 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsProvince = "is-province"] = "IsProvince", e32[e32.IsString = "is-string"] = "IsString", e32))(Ta3 || {});
var fa3 = ((e32) => (e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsState = "is-state"] = "IsState", e32[e32.IsString = "is-string"] = "IsString", e32))(fa3 || {});
var _a3 = ((_3) => (_3[_3.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3[_3.IsStreetAddress = "is-street-address"] = "IsStreetAddress", _3))(_a3 || {});
var ha3 = ((e32) => (e32[e32.IsAirport = "is-airport"] = "IsAirport", e32[e32.IsAlpha = "is-alpha"] = "IsAlpha", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ha3 || {});
var Sa3 = ((d2) => (d2[d2.IsAlgorithmHash = "is-algorithm-hash"] = "IsAlgorithmHash", d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(Sa3 || {});
var Ia3 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", d2[d2.IsString = "is-string"] = "IsString", d2))(Ia3 || {});
var ba3 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2[d2.IsUUID = "is-uuid"] = "IsUUID", d2))(ba3 || {});
var va3 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsMD5 = "is-md5"] = "IsMD5", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(va3 || {});
var Ua3 = ((o2) => (o2[o2.IsBoolean = "is-boolean"] = "IsBoolean", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Ua3 || {});
var Ea3 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsDate = "is-date"] = "IsDate", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsNotDate = "is-not-date"] = "IsNotDate", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNotToday = "is-not-today"] = "IsNotToday", g3[g3.IsThisWeek = "is-this-week"] = "IsThisWeek", g3[g3.IsThisMonth = "is-this-month"] = "IsThisMonth", g3[g3.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", g3[g3.IsThisYear = "is-this-year"] = "IsThisYear", g3[g3.IsToday = "is-today"] = "IsToday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(Ea3 || {});
var ya3 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsDate = "is-date"] = "IsDate", h3[h3.IsDateRange = "is-date-range"] = "IsDateRange", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3))(ya3 || {});
var xa3 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsDate = "is-date"] = "IsDate", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsNotDate = "is-not-date"] = "IsNotDate", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNotToday = "is-not-today"] = "IsNotToday", g3[g3.IsThisWeek = "is-this-week"] = "IsThisWeek", g3[g3.IsThisMonth = "is-this-month"] = "IsThisMonth", g3[g3.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", g3[g3.IsThisYear = "is-this-year"] = "IsThisYear", g3[g3.IsToday = "is-today"] = "IsToday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(xa3 || {});
var Na3 = ((v3) => (v3[v3.IsAfter = "is-after"] = "IsAfter", v3[v3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", v3[v3.IsBefore = "is-before"] = "IsBefore", v3[v3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", v3[v3.IsBetween = "is-between"] = "IsBetween", v3[v3.IsDayOfMonth = "is-day-of-month"] = "IsDayOfMonth", v3[v3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", v3[v3.IsEqual = "is-equal"] = "IsEqual", v3[v3.IsGreaterThan = "greater-than"] = "IsGreaterThan", v3[v3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", v3[v3.IsInteger = "is-integer"] = "IsInteger", v3[v3.IsLessThan = "less-than"] = "IsLessThan", v3[v3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", v3[v3.IsNotEqual = "is-not-equal"] = "IsNotEqual", v3[v3.IsNotNull = "is-not-null"] = "IsNotNull", v3[v3.IsNumber = "is-number"] = "IsNumber", v3[v3.IsOddNumber = "is-odd-number"] = "IsOddNumber", v3[v3.IsToday = "is-today"] = "IsToday", v3[v3.IsWeekday = "is-weekday"] = "IsWeekday", v3[v3.IsWeekend = "is-weekend"] = "IsWeekend", v3))(Na3 || {});
var Pa3 = ((c3) => (c3[c3.IsAfter = "is-after"] = "IsAfter", c3[c3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", c3[c3.IsBefore = "is-before"] = "IsBefore", c3[c3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsEqual = "is-equal"] = "IsEqual", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsMonth = "is-month"] = "IsMonth", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsThisMonth = "is-this-month"] = "IsThisMonth", c3))(Pa3 || {});
var ka3 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3[h3.IsTime = "is-time"] = "IsTime", h3))(ka3 || {});
var Ma3 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsTime = "is-time"] = "IsTime", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3[h3.IsTimeRange = "is-time-range"] = "IsTimeRange", h3))(Ma3 || {});
var za3 = ((I3) => (I3[I3.IsAfter = "is-after"] = "IsAfter", I3[I3.IsBefore = "is-before"] = "IsBefore", I3[I3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", I3[I3.IsBetween = "is-between"] = "IsBetween", I3[I3.IsEqual = "is-equal"] = "IsEqual", I3[I3.IsInList = "is-in-list"] = "IsInList", I3[I3.IsNotEqual = "is-not-equal"] = "IsNotEqual", I3[I3.IsNotInList = "is-not-in-list"] = "IsNotInList", I3[I3.IsNotNull = "is-not-null"] = "IsNotNull", I3[I3.IsTimeOfDay = "is-time-of-day"] = "IsTimeOfDay", I3[I3.IsTimeRange = "is-time-range"] = "IsTimeRange", I3))(za3 || {});
var La3 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsGreaterThan = "greater-than"] = "IsGreaterThan", g3[g3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", g3[g3.IsLessThan = "less-than"] = "IsLessThan", g3[g3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNumber = "is-number"] = "IsNumber", g3[g3.IsOddNumber = "is-odd-number"] = "IsOddNumber", g3[g3.IsWeekday = "is-weekday"] = "IsWeekday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(La3 || {});
var Ba3 = ((c3) => (c3[c3.IsAfter = "is-after"] = "IsAfter", c3[c3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", c3[c3.IsBefore = "is-before"] = "IsBefore", c3[c3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsEqual = "is-equal"] = "IsEqual", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsThisYear = "is-this-year"] = "IsThisYear", c3[c3.IsYear = "is-year"] = "IsYear", c3))(Ba3 || {});
var Da3 = ((p32) => (p32[p32.IsEqual = "is-equal"] = "IsEqual", p32[p32.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", p32[p32.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", p32[p32.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", p32[p32.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", p32[p32.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", p32[p32.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", p32[p32.IsNotEqual = "is-not-equal"] = "IsNotEqual", p32[p32.IsNotNull = "is-not-null"] = "IsNotNull", p32[p32.IsString = "is-string"] = "IsString", p32))(Da3 || {});
var Ga3 = ((o2) => (o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsJSON = "is-json"] = "IsJSON", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Ga3 || {});
var Ka3 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsMarkdown = "is-markdown"] = "IsMarkdown", A2[A2.IsString = "is-string"] = "IsString", A2))(Ka3 || {});
var wa3 = ((o2) => (o2[o2.Contains = "contains"] = "Contains", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(wa3 || {});
var qa3 = ((o2) => (o2[o2.Contains = "contains"] = "Contains", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(qa3 || {});
var Ra3 = ((_3) => (_3[_3.Contains = "contains"] = "Contains", _3[_3.IsDataURI = "is-data-uri"] = "IsDataURI", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3))(Ra3 || {});
var Fa3 = ((_3) => (_3[_3.Contains = "contains"] = "Contains", _3[_3.IsDomainName = "is-domain-name"] = "IsDomainName", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3))(Fa3 || {});
var Ha3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ha3 || {});
var Oa3 = ((p32) => (p32[p32.Contains = "contains"] = "Contains", p32[p32.IsEqual = "is-equal"] = "IsEqual", p32[p32.IsIPAddress = "is-ip-address"] = "IsIPAddress", p32[p32.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", p32[p32.IsInList = "is-in-list"] = "IsInList", p32[p32.IsNotEqual = "is-not-equal"] = "IsNotEqual", p32[p32.IsNotInList = "is-not-in-list"] = "IsNotInList", p32[p32.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", p32[p32.IsNotNull = "is-not-null"] = "IsNotNull", p32[p32.IsString = "is-string"] = "IsString", p32))(Oa3 || {});
var ja3 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIPAddressRange = "is-ip-address-range"] = "IsIPAddressRange", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ja3 || {});
var Va3 = ((e32) => (e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsGreaterThan = "greater-than"] = "IsGreaterThan", e32[e32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e32[e32.IsInteger = "is-integer"] = "IsInteger", e32[e32.IsLessThan = "less-than"] = "IsLessThan", e32[e32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32))(Va3 || {});
var Wa3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMACAddress = "is-mac-address"] = "IsMACAddress", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Wa3 || {});
var Ja3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Ja3 || {});
var Za3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsMimeType = "is-mime-type"] = "IsMimeType", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(Za3 || {});
var Ya3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsSlug = "is-slug"] = "IsSlug", e32))(Ya3 || {});
var Qa3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsURL = "is-url"] = "IsURL", e32))(Qa3 || {});
var $a3 = ((f3) => (f3[f3.IsAfter = "is-after"] = "IsAfter", f3[f3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", f3[f3.IsBefore = "is-before"] = "IsBefore", f3[f3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", f3[f3.IsBetween = "is-between"] = "IsBetween", f3[f3.IsDecimal = "is-decimal"] = "IsDecimal", f3[f3.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", f3[f3.IsEAN = "is-ean"] = "IsEAN", f3[f3.IsEIN = "is-ein"] = "IsEIN", f3[f3.IsEqual = "is-equal"] = "IsEqual", f3[f3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", f3[f3.IsFloat = "is-float"] = "IsFloat", f3[f3.IsGreaterThan = "greater-than"] = "IsGreaterThan", f3[f3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", f3[f3.IsInt = "is-integer"] = "IsInt", f3[f3.IsISBN = "is-isbn"] = "IsISBN", f3[f3.IsISMN = "is-ismn"] = "IsISMN", f3[f3.IsISSN = "is-issn"] = "IsISSN", f3[f3.IsLatitude = "is-latitude"] = "IsLatitude", f3[f3.IsLongitude = "is-longitude"] = "IsLongitude", f3[f3.IsLessThan = "less-than"] = "IsLessThan", f3[f3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", f3[f3.IsMACAddress = "is-mac-address"] = "IsMACAddress", f3[f3.IsNumber = "is-number"] = "IsNumber", f3[f3.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", f3[f3.IsNotEqual = "is-not-equal"] = "IsNotEqual", f3[f3.IsNotNull = "is-not-null"] = "IsNotNull", f3[f3.IsOddNumber = "is-odd-number"] = "IsOddNumber", f3[f3.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", f3[f3.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", f3[f3.IsPort = "is-port"] = "IsPort", f3[f3.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", f3[f3.IsPostalCode = "is-postal-code"] = "IsPostalCode", f3[f3.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", f3[f3.IsSSN = "is-ssn"] = "IsSSN", f3[f3.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", f3[f3.IsUUID = "is-uuid"] = "IsUUID", f3[f3.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", f3))($a3 || {});
var Xa3 = ((p32) => (p32[p32.IsEqual = "is-equal"] = "IsEqual", p32[p32.IsFloat = "is-float"] = "IsFloat", p32[p32.IsGreaterThan = "greater-than"] = "IsGreaterThan", p32[p32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", p32[p32.IsLessThan = "less-than"] = "IsLessThan", p32[p32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", p32[p32.IsNotEqual = "is-not-equal"] = "IsNotEqual", p32[p32.IsNotNull = "is-not-null"] = "IsNotNull", p32[p32.IsNumber = "is-number"] = "IsNumber", p32[p32.IsNumeric = "is-numeric"] = "IsNumeric", p32))(Xa3 || {});
var Ca3 = ((p32) => (p32[p32.IsEqual = "is-equal"] = "IsEqual", p32[p32.IsInteger = "is-integer"] = "IsInteger", p32[p32.IsGreaterThan = "greater-than"] = "IsGreaterThan", p32[p32.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", p32[p32.IsLessThan = "less-than"] = "IsLessThan", p32[p32.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", p32[p32.IsNotEqual = "is-not-equal"] = "IsNotEqual", p32[p32.IsNotNull = "is-not-null"] = "IsNotNull", p32[p32.IsNumber = "is-number"] = "IsNumber", p32[p32.IsNumeric = "is-numeric"] = "IsNumeric", p32))(Ca3 || {});
var ae3 = ((I3) => (I3[I3.IsCreditCard = "is-credit-card"] = "IsCreditCard", I3[I3.IsEqual = "is-equal"] = "IsEqual", I3[I3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", I3[I3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", I3[I3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", I3[I3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", I3[I3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", I3[I3.IsNotEqual = "is-not-equal"] = "IsNotEqual", I3[I3.IsNotNull = "is-not-null"] = "IsNotNull", I3[I3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", I3[I3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", I3))(ae3 || {});
var ee3 = ((E3) => (E3[E3.isEmailAddress = "is-email-address"] = "isEmailAddress", E3[E3.IsEqual = "is-equal"] = "IsEqual", E3[E3.IsInList = "is-in-list"] = "IsInList", E3[E3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", E3[E3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", E3[E3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", E3[E3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", E3[E3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", E3[E3.IsNotEqual = "is-not-equal"] = "IsNotEqual", E3[E3.IsNotInList = "is-not-in-list"] = "IsNotInList", E3[E3.IsNotNull = "is-not-null"] = "IsNotNull", E3[E3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", E3[E3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", E3))(ee3 || {});
var Ge22 = ((A2) => (A2[A2.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", A2[A2.IsString = "is-string"] = "IsString", A2[A2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", A2))(Ge22 || {});
var ie3 = ((o2) => (o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2[o2.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", o2[o2.IsString = "is-string"] = "IsString", o2[o2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", o2))(ie3 || {});
var ne3 = ((y3) => (y3[y3.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", y3[y3.IsInList = "is-in-list"] = "IsInList", y3[y3.IsNotInList = "is-not-in-list"] = "IsNotInList", y3[y3.IsNotNull = "is-not-null"] = "IsNotNull", y3[y3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", y3[y3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", y3[y3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", y3[y3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", y3[y3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", y3[y3.IsStrongPassword = "is-strong-password"] = "IsStrongPassword", y3[y3.IsString = "is-string"] = "IsString", y3[y3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", y3))(ne3 || {});
var re3 = ((A2) => (A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", A2[A2.IsNumber = "is-number"] = "IsNumber", A2[A2.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", A2[A2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", A2))(re3 || {});
var se3 = ((o2) => (o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2[o2.IsSSN = "is-ssn"] = "IsSSN", o2[o2.IsString = "is-string"] = "IsString", o2[o2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", o2))(se3 || {});
var te3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsBIC = "is-bic"] = "IsBIC", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(te3 || {});
var oe3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEAN = "is-ean"] = "IsEAN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(oe3 || {});
var me3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEIN = "is-ein"] = "IsEIN", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(me3 || {});
var le3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsIBAN = "is-iban"] = "IsIBAN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(le3 || {});
var ce22 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISBN = "is-isbn"] = "IsISBN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ce22 || {});
var ue3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISIN = "is-isin"] = "IsISIN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(ue3 || {});
var de22 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISMN = "is-ismn"] = "IsISMN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(de22 || {});
var pe22 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsISSN = "is-issn"] = "IsISSN", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32))(pe22 || {});
var ge3 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e32))(ge3 || {});
var Ae22 = ((e32) => (e32[e32.Contains = "contains"] = "Contains", e32[e32.IsEqual = "is-equal"] = "IsEqual", e32[e32.IsInList = "is-in-list"] = "IsInList", e32[e32.IsNotEqual = "is-not-equal"] = "IsNotEqual", e32[e32.IsNotInList = "is-not-in-list"] = "IsNotInList", e32[e32.IsNotNull = "is-not-null"] = "IsNotNull", e32[e32.IsString = "is-string"] = "IsString", e32[e32.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e32))(Ae22 || {});
var Te22 = ((t3) => (t3[t3.Contains = "contains"] = "Contains", t3[t3.HasNumberCount = "has-number-count"] = "HasNumberCount", t3[t3.HasLowercaseCount = "has-lowercase-count"] = "HasLowercaseCount", t3[t3.HasLetterCount = "has-letter-count"] = "HasLetterCount", t3[t3.HasSpacesCount = "has-spaces-count"] = "HasSpacesCount", t3[t3.HasSymbolCount = "has-symbol-count"] = "HasSymbolCount", t3[t3.HasUppercaseCount = "has-uppercase-count"] = "HasUppercaseCount", t3[t3.IsAlpha = "is-alpha"] = "IsAlpha", t3[t3.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", t3[t3.IsAscii = "is-ascii"] = "IsAscii", t3[t3.IsBase64 = "is-base-64"] = "IsBase64", t3[t3.IsColor = "is-color"] = "IsColor", t3[t3.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", t3[t3.IsCreditCard = "is-credit-card"] = "IsCreditCard", t3[t3.IsDataURI = "is-data-uri"] = "IsDataURI", t3[t3.IsDomainName = "is-domain-name"] = "IsDomainName", t3[t3.IsEmailAddress = "is-email-address"] = "IsEmailAddress", t3[t3.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", t3[t3.IsEAN = "is-ean"] = "IsEAN", t3[t3.IsEIN = "is-ein"] = "IsEIN", t3[t3.IsEqual = "is-equal"] = "IsEqual", t3[t3.IsIBAN = "is-iban"] = "IsIBAN", t3[t3.IsHSLColor = "is-hsl-color"] = "IsHSLColor", t3[t3.IsHexColor = "is-hex-color"] = "IsHexColor", t3[t3.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", t3[t3.IsIdentityCardCode = "is-identity-card-code"] = "IsIdentityCardCode", t3[t3.IsIMEI = "is-imei"] = "IsIMEI", t3[t3.IsInList = "is-in-list"] = "IsInList", t3[t3.IsIPAddress = "is-ip-address"] = "IsIPAddress", t3[t3.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", t3[t3.IsISBN = "is-isbn"] = "IsISBN", t3[t3.IsISIN = "is-isin"] = "IsISIN", t3[t3.IsISMN = "is-ismn"] = "IsISMN", t3[t3.IsISRC = "is-isrc"] = "IsISRC", t3[t3.IsISSN = "is-issn"] = "IsISSN", t3[t3.IsLanguage = "is-language"] = "IsLanguage", t3[t3.IsLatitude = "is-latitude"] = "IsLatitude", t3[t3.IsLongitude = "is-longitude"] = "IsLongitude", t3[t3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", t3[t3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", t3[t3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", t3[t3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", t3[t3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", t3[t3.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", t3[t3.IsLowercase = "is-lowercase"] = "IsLowercase", t3[t3.IsOctal = "is-octal"] = "IsOctal", t3[t3.IsMACAddress = "is-mac-address"] = "IsMACAddress", t3[t3.IsMD5 = "is-md5"] = "IsMD5", t3[t3.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", t3[t3.IsMarkdown = "is-markdown"] = "IsMarkdown", t3[t3.IsMimeType = "is-mime-type"] = "IsMimeType", t3[t3.IsMonth = "is-month"] = "IsMonth", t3[t3.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", t3[t3.IsNotInList = "is-not-in-list"] = "IsNotInList", t3[t3.IsNotNull = "is-not-null"] = "IsNotNull", t3[t3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", t3[t3.IsNumber = "is-number"] = "IsNumber", t3[t3.IsNumeric = "is-numeric"] = "IsNumeric", t3[t3.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", t3[t3.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", t3[t3.IsPort = "is-port"] = "IsPort", t3[t3.IsPostalCode = "is-postal-code"] = "IsPostalCode", t3[t3.IsProvince = "is-province"] = "IsProvince", t3[t3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", t3[t3.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", t3[t3.IsSlug = "is-slug"] = "IsSlug", t3[t3.IsSSN = "is-ssn"] = "IsSSN", t3[t3.IsState = "is-state"] = "IsState", t3[t3.IsStreetAddress = "is-street-address"] = "IsStreetAddress", t3[t3.IsString = "is-string"] = "IsString", t3[t3.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", t3[t3.IsURL = "is-url"] = "IsURL", t3[t3.IsUUID = "is-uuid"] = "IsUUID", t3[t3.IsUppercase = "is-uppercase"] = "IsUppercase", t3[t3.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", t3[t3.IsWeekday = "is-weekday"] = "IsWeekday", t3[t3.IsWeekend = "is-weekend"] = "IsWeekend", t3[t3.IsYear = "is-year"] = "IsYear", t3))(Te22 || {});
var fe22 = ((p32) => (p32[p32.Contains = "contains"] = "Contains", p32[p32.IsAlpha = "is-alpha"] = "IsAlpha", p32[p32.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", p32[p32.IsInList = "is-in-list"] = "IsInList", p32[p32.IsMarkdown = "is-markdown"] = "IsMarkdown", p32[p32.IsNotInList = "is-not-in-list"] = "IsNotInList", p32[p32.IsNumeric = "is-numeric"] = "IsNumeric", p32[p32.IsLowercase = "is-lowercase"] = "IsLowercase", p32[p32.IsString = "is-string"] = "IsString", p32[p32.IsUppercase = "is-uppercase"] = "IsUppercase", p32))(fe22 || {});
var _e22 = ((e32) => (e32.InvalidCharacters = "invalid-characters", e32.InvalidPattern = "invalid-pattern", e32.NotComplexEnough = "not-complex-enough", e32.NotUnique = "not-unique", e32.NotValidEmail = "not-valid-email", e32.TooLong = "too-long", e32.TooShort = "too-short", e32.Required = "required", e32))(_e22 || {});
var he22 = ((N3) => (N3[N3.Allowed = 0] = "Allowed", N3[N3.Blocked = 1] = "Blocked", N3))(he22 || {});
var Se22 = ((d2) => (d2.Canceled = "Canceled", d2.Completed = "Completed", d2.Created = "Created", d2.Faulted = "Faulted", d2.Queued = "Queued", d2.Running = "Running", d2.Waiting = "Waiting", d2))(Se22 || {});
var Ie22 = ((d2) => (d2.Archived = "ARCHIVED", d2.Compromised = "COMPROMISED", d2.Confirmed = "CONFIRMED", d2.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", d2.ResetRequired = "RESET_REQUIRED", d2.Unconfirmed = "UNCONFIRMED", d2.Unknown = "UNKNOWN", d2))(Ie22 || {});
var be22 = ((o2) => (o2.Owner = "Owner", o2.Admin = "Admin", o2.User = "User", o2.Visitor = "Visitor", o2))(be22 || {});
var ve22 = ((d2) => (d2.RequiresPaymentMethod = "requires_payment_method", d2.RequiresConfirmation = "requires_confirmation", d2.RequiresAction = "requires_action", d2.Processing = "processing", d2.RequiresCapture = "requires_capture", d2.Canceled = "canceled", d2.Succeeded = "succeeded", d2))(ve22 || {});
var Ue22 = ((d2) => (d2.Incomplete = "incomplete", d2.IncompleteExpired = "incomplete_expired", d2.Trialing = "trialing", d2.Active = "active", d2.PastDue = "past_due", d2.Canceled = "canceled", d2.Unpaid = "unpaid", d2))(Ue22 || {});
var Ee22 = ((o2) => (o2.Monthly = "monthly", o2.Quarterly = "quarterly", o2.Yearly = "yearly", o2.Lifetime = "lifetime", o2))(Ee22 || {});
var ye22 = ((o2) => (o2.Delivered = "delivered", o2.Read = "read", o2.Sending = "sending", o2.Sent = "sent", o2))(ye22 || {});
var xe22 = ((A2) => (A2.Audio = "audio", A2.File = "file", A2.Image = "image", A2.Text = "text", A2.Video = "video", A2))(xe22 || {});
var Ne22 = ((o2) => (o2.Audio = "audio", o2.File = "file", o2.Image = "image", o2.Video = "video", o2))(Ne22 || {});
var Pe2 = ((e32) => (e32.Angry = "angry", e32.Laugh = "laugh", e32.Like = "like", e32.Love = "love", e32.Sad = "sad", e32.Wow = "wow", e32.Wink = "wink", e32.Yay = "yay", e32))(Pe2 || {});
var ke22 = ((N3) => (N3.Email = "email", N3.PhoneNumber = "phone_number", N3))(ke22 || {});
var Me2 = ((d2) => (d2.Analytics = "analytics", d2.Critical = "critical", d2.Debug = "debug", d2.Exception = "exception", d2.Http = "http", d2.Info = "info", d2.Warning = "warning", d2))(Me2 || {});
var ze22 = ((_3) => (_3.Delete = "delete", _3.Get = "get", _3.Head = "head", _3.Patch = "patch", _3.Post = "post", _3.Put = "put", _3))(ze22 || {});
var Le2 = ((u3) => (u3[u3.CONTINUE = 100] = "CONTINUE", u3[u3.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", u3[u3.PROCESSING = 102] = "PROCESSING", u3[u3.OK = 200] = "OK", u3[u3.CREATED = 201] = "CREATED", u3[u3.ACCEPTED = 202] = "ACCEPTED", u3[u3.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", u3[u3.NO_CONTENT = 204] = "NO_CONTENT", u3[u3.RESET_CONTENT = 205] = "RESET_CONTENT", u3[u3.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", u3[u3.MULTI_STATUS = 207] = "MULTI_STATUS", u3[u3.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", u3[u3.IM_USED = 226] = "IM_USED", u3[u3.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", u3[u3.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", u3[u3.FOUND = 302] = "FOUND", u3[u3.SEE_OTHER = 303] = "SEE_OTHER", u3[u3.NOT_MODIFIED = 304] = "NOT_MODIFIED", u3[u3.USE_PROXY = 305] = "USE_PROXY", u3[u3.SWITCH_PROXY = 306] = "SWITCH_PROXY", u3[u3.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", u3[u3.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", u3[u3.BAD_REQUEST = 400] = "BAD_REQUEST", u3[u3.UNAUTHORIZED = 401] = "UNAUTHORIZED", u3[u3.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", u3[u3.FORBIDDEN = 403] = "FORBIDDEN", u3[u3.NOT_FOUND = 404] = "NOT_FOUND", u3[u3.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", u3[u3.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", u3[u3.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", u3[u3.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", u3[u3.CONFLICT = 409] = "CONFLICT", u3[u3.GONE = 410] = "GONE", u3[u3.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", u3[u3.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", u3[u3.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", u3[u3.URI_TOO_LONG = 414] = "URI_TOO_LONG", u3[u3.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", u3[u3.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", u3[u3.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", u3[u3.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", u3[u3.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", u3[u3.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", u3[u3.LOCKED = 423] = "LOCKED", u3[u3.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", u3[u3.TOO_EARLY = 425] = "TOO_EARLY", u3[u3.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", u3[u3.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", u3[u3.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", u3[u3.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", u3[u3.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", u3[u3.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", u3[u3.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", u3[u3.BAD_GATEWAY = 502] = "BAD_GATEWAY", u3[u3.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", u3[u3.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", u3[u3.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", u3[u3.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", u3[u3.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", u3[u3.LOOP_DETECTED = 508] = "LOOP_DETECTED", u3[u3.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", u3[u3.NOT_EXTENDED = 510] = "NOT_EXTENDED", u3[u3.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", u3))(Le2 || {});
var k3 = ((n2) => (n2.Afghanistan = "AF", n2.Albania = "AL", n2.Algeria = "DZ", n2.AmericanSamoa = "AS", n2.Andorra = "AD", n2.Angola = "AO", n2.Anguilla = "AI", n2.Antarctica = "AQ", n2.AntiguaAndBarbuda = "AG", n2.Argentina = "AR", n2.Armenia = "AM", n2.Aruba = "AW", n2.Australia = "AU", n2.Austria = "AT", n2.Azerbaijan = "AZ", n2.Bahamas = "BS", n2.Bahrain = "BH", n2.Bangladesh = "BD", n2.Barbados = "BB", n2.Belarus = "BY", n2.Belgium = "BE", n2.Belize = "BZ", n2.Benin = "BJ", n2.Bermuda = "BM", n2.Bhutan = "BT", n2.Bolivia = "BO", n2.BosniaAndHerzegovina = "BA", n2.Botswana = "BW", n2.BouvetIsland = "BV", n2.Brazil = "BR", n2.BritishIndianOceanTerritory = "IO", n2.Brunei = "BN", n2.Bulgaria = "BG", n2.BurkinaFaso = "BF", n2.Burundi = "BI", n2.Cambodia = "KH", n2.Cameroon = "CM", n2.Canada = "CA", n2.CapeVerde = "CV", n2.CaymanIslands = "KY", n2.CentralAfricanRepublic = "CF", n2.Chad = "TD", n2.Chile = "CL", n2.China = "CN", n2.ChristmasIsland = "CX", n2.CocosKeelingIslands = "CC", n2.Colombia = "CO", n2.Comoros = "KM", n2.Congo = "CG", n2.CongoTheDemocraticRepublicOfThe = "CD", n2.CookIslands = "CK", n2.CostaRica = "CR", n2.CoteDIvoire = "CI", n2.Croatia = "HR", n2.Cuba = "CU", n2.Cyprus = "CY", n2.CzechRepublic = "CZ", n2.Denmark = "DK", n2.Djibouti = "DJ", n2.Dominica = "DM", n2.DominicanRepublic = "DO", n2.Ecuador = "EC", n2.Egypt = "EG", n2.ElSalvador = "SV", n2.EquatorialGuinea = "GQ", n2.Eritrea = "ER", n2.Estonia = "EE", n2.Ethiopia = "ET", n2.FalklandIslands = "FK", n2.FaroeIslands = "FO", n2.Fiji = "FJ", n2.Finland = "FI", n2.France = "FR", n2.FrenchGuiana = "GF", n2.FrenchPolynesia = "PF", n2.FrenchSouthernTerritories = "TF", n2.Gabon = "GA", n2.Gambia = "GM", n2.Georgia = "GE", n2.Germany = "DE", n2.Ghana = "GH", n2.Gibraltar = "GI", n2.Greece = "GR", n2.Greenland = "GL", n2.Grenada = "GD", n2.Guadeloupe = "GP", n2.Guam = "GU", n2.Guatemala = "GT", n2.Guernsey = "GG", n2.Guinea = "GN", n2.GuineaBissau = "GW", n2.Guyana = "GY", n2.Haiti = "HT", n2.HeardIslandMcdonaldIslands = "HM", n2.HolySeeVaticanCityState = "VA", n2.Honduras = "HN", n2.HongKong = "HK", n2.Hungary = "HU", n2.Iceland = "IS", n2.India = "IN", n2.Indonesia = "ID", n2.Iran = "IR", n2.Iraq = "IQ", n2.Ireland = "IE", n2.IsleOfMan = "IM", n2.Israel = "IL", n2.Italy = "IT", n2.Jamaica = "JM", n2.Japan = "JP", n2.Jersey = "JE", n2.Jordan = "JO", n2.Kazakhstan = "KZ", n2.Kenya = "KE", n2.Kiribati = "KI", n2.Kuwait = "KW", n2.Kyrgyzstan = "KG", n2.Laos = "LA", n2.Latvia = "LV", n2.Lebanon = "LB", n2.Lesotho = "LS", n2.Liberia = "LR", n2.Libya = "LY", n2.Liechtenstein = "LI", n2.Lithuania = "LT", n2.Luxembourg = "LU", n2.Macau = "MO", n2.Madagascar = "MG", n2.Malawi = "MW", n2.Malaysia = "MY", n2.Maldives = "MV", n2.Mali = "ML", n2.Malta = "MT", n2.MarshallIslands = "MH", n2.Martinique = "MQ", n2.Mauritania = "MR", n2.Mauritius = "MU", n2.Mayotte = "YT", n2.Mexico = "MX", n2.MicronesiaFederatedStatesOf = "FM", n2.Moldova = "MD", n2.Monaco = "MC", n2.Mongolia = "MN", n2.Montenegro = "ME", n2.Montserrat = "MS", n2.Morocco = "MA", n2.Mozambique = "MZ", n2.Myanmar = "MM", n2.Namibia = "NA", n2.Nauru = "NR", n2.Nepal = "NP", n2.Netherlands = "NL", n2.NetherlandsAntilles = "AN", n2.NewCaledonia = "NC", n2.NewZealand = "NZ", n2.NorthKorea = "KP", n2.Nicaragua = "NI", n2.Niger = "NE", n2.Nigeria = "NG", n2.Niue = "NU", n2.NorfolkIsland = "NF", n2.NorthMacedonia = "MK", n2.NorthernMarianaIslands = "MP", n2.Norway = "NO", n2.Oman = "OM", n2.Pakistan = "PK", n2.Palau = "PW", n2.PalestinianTerritoryOccupied = "PS", n2.Panama = "PA", n2.PapuaNewGuinea = "PG", n2.Paraguay = "PY", n2.Peru = "PE", n2.Philippines = "PH", n2.Pitcairn = "PN", n2.Poland = "PL", n2.Portugal = "PT", n2.PuertoRico = "PR", n2.Qatar = "QA", n2.Reunion = "RE", n2.Romania = "RO", n2.RussianFederation = "RU", n2.Rwanda = "RW", n2.SaintBarthelemy = "BL", n2.SaintHelena = "SH", n2.SaintKittsAndNevis = "KN", n2.SaintLucia = "LC", n2.SaintMartin = "MF", n2.SaintPierreAndMiquelon = "PM", n2.SaintVincentAndTheGrenadines = "VC", n2.Samoa = "WS", n2.SanMarino = "SM", n2.SaoTomeAndPrincipe = "ST", n2.SaudiArabia = "SA", n2.Senegal = "SN", n2.Serbia = "RS", n2.SerbiaAndMontenegro = "CS", n2.Seychelles = "SC", n2.SierraLeone = "SL", n2.Singapore = "SG", n2.Slovakia = "SK", n2.Slovenia = "SI", n2.SolomonIslands = "SB", n2.Somalia = "SO", n2.SouthAfrica = "ZA", n2.SouthGeorgiaAndTheSouthSandwichIslands = "GS", n2.SouthKorea = "KR", n2.Spain = "ES", n2.SriLanka = "LK", n2.Sudan = "SD", n2.Suriname = "SR", n2.SvalbardAndJanMayen = "SJ", n2.Swaziland = "SZ", n2.Sweden = "SE", n2.Switzerland = "CH", n2.Syria = "SY", n2.Taiwan = "TW", n2.Tajikistan = "TJ", n2.Tanzania = "TZ", n2.Thailand = "TH", n2.TimorLeste = "TL", n2.Togo = "TG", n2.Tokelau = "TK", n2.Tonga = "TO", n2.TrinidadAndTobago = "TT", n2.Tunisia = "TN", n2.Turkey = "TR", n2.Turkmenistan = "TM", n2.TurksAndCaicosIslands = "TC", n2.Tuvalu = "TV", n2.Uganda = "UG", n2.Ukraine = "UA", n2.UnitedArabEmirates = "AE", n2.UnitedKingdom = "GB", n2.UnitedStates = "US", n2.UnitedStatesMinorOutlyingIslands = "UM", n2.Uruguay = "UY", n2.Uzbekistan = "UZ", n2.Vanuatu = "VU", n2.Venezuela = "VE", n2.Vietnam = "VN", n2.VirginIslandsBritish = "VG", n2.VirginIslandsUS = "VI", n2.WallisAndFutuna = "WF", n2.WesternSahara = "EH", n2.Yemen = "YE", n2.Zambia = "ZM", n2.Zimbabwe = "ZW", n2))(k3 || {});
var D3 = ((s3) => (s3.AfghanistanAfghani = "AFN", s3.AlbaniaLek = "ALL", s3.ArmeniaDram = "AMD", s3.AlgeriaDinar = "DZD", s3.AmericanSamoaTala = "WST", s3.AngolaKwanza = "AOA", s3.ArgentinaPeso = "ARS", s3.AustraliaDollar = "AUD", s3.ArubaFlorin = "AWG", s3.AzerbaijanNewManat = "AZN", s3.BosniaAndHerzegovinaConvertibleMark = "BAM", s3.BahrainDinar = "BHD", s3.BarbadosDollar = "BBD", s3.BangladeshTaka = "BDT", s3.BelgiumFranc = "BGN", s3.BermudaDollar = "BMD", s3.BruneiDollar = "BND", s3.BoliviaBoliviano = "BOB", s3.BrazilReal = "BRL", s3.BahamasDollar = "BSD", s3.BhutanNgultrum = "BTN", s3.BotswanaPula = "BWP", s3.BelarusRuble = "BYN", s3.BelizeDollar = "BZD", s3.BulgariaLev = "BGN", s3.BurundiFranc = "BIF", s3.BritishPound = "GBP", s3.CanadaDollar = "CAD", s3.CambodiaRiel = "KHR", s3.ComorosFranc = "KMF", s3.CaymanIslandsDollar = "KYD", s3.ChilePeso = "CLP", s3.ChinaYuan = "CNY", s3.ColombiaPeso = "COP", s3.CostaRicaColon = "CRC", s3.CroatiaKuna = "HRK", s3.CubaConvertiblePeso = "CUC", s3.CubaPeso = "CUP", s3.CapeVerdeEscudo = "CVE", s3.CyprusPound = "CYP", s3.CzechRepublicKoruna = "CZK", s3.DjiboutiFranc = "DJF", s3.DenmarkKrone = "DKK", s3.DominicaDollar = "XCD", s3.DominicanRepublicPeso = "DOP", s3.EastCaribbeanDollar = "XCD", s3.EgyptPound = "EGP", s3.ElSalvadorColon = "SVC", s3.EquatorialGuineaEkwele = "GQE", s3.EritreaNakfa = "ERN", s3.EstoniaKroon = "EEK", s3.EthiopiaBirr = "ETB", s3.Euro = "EUR", s3.FijiDollar = "FJD", s3.FalklandIslandsPound = "FKP", s3.GambiaDalasi = "GMD", s3.GabonFranc = "GMD", s3.GeorgiaLari = "GEL", s3.GhanaCedi = "GHS", s3.GibraltarPound = "GIP", s3.GuatemalaQuetzal = "GTQ", s3.GuernseyPound = "GGP", s3.GuineaBissauPeso = "GWP", s3.GuyanaDollar = "GYD", s3.HongKongDollar = "HKD", s3.HondurasLempira = "HNL", s3.HaitiGourde = "HTG", s3.HungaryForint = "HUF", s3.IndonesiaRupiah = "IDR", s3.IsleOfManPound = "IMP", s3.IsraelNewShekel = "ILS", s3.IndiaRupee = "INR", s3.IraqDinar = "IQD", s3.IranRial = "IRR", s3.IcelandKrona = "ISK", s3.JamaicaDollar = "JMD", s3.JapanYen = "JPY", s3.JerseyPound = "JEP", s3.JordanDinar = "JOD", s3.KazakhstanTenge = "KZT", s3.KenyaShilling = "KES", s3.KyrgyzstanSom = "KGS", s3.NorthKoreaWon = "KPW", s3.SouthKoreaWon = "KRW", s3.KuwaitDinar = "KWD", s3.LaosKip = "LAK", s3.LebanonPound = "LBP", s3.LiberiaDollar = "LRD", s3.LesothoLoti = "LSL", s3.LibyanDinar = "LYD", s3.LithuaniaLitas = "LTL", s3.LatviaLats = "LVL", s3.LibyaDinar = "LYD", s3.MacauPataca = "MOP", s3.MaldivesRufiyaa = "MVR", s3.MalawiKwacha = "MWK", s3.MaltaLira = "MTL", s3.MauritiusRupee = "MUR", s3.MongoliaTughrik = "MNT", s3.MoroccoDirham = "MAD", s3.MoldovaLeu = "MDL", s3.MozambiqueMetical = "MZN", s3.MadagascarAriary = "MGA", s3.MacedoniaDenar = "MKD", s3.MexicoPeso = "MXN", s3.MalaysiaRinggit = "MYR", s3.MyanmarKyat = "MMK", s3.MicronesiaFederatedStatesDollar = "USD", s3.NicaraguaCordoba = "NIO", s3.NamibiaDollar = "NAD", s3.NetherlandsAntillesGuilder = "ANG", s3.NewCaledoniaFranc = "XPF", s3.NigeriaNaira = "NGN", s3.NicaraguaCordobaOro = "NIO", s3.NigerCFAFranc = "XOF", s3.NorwayKrone = "NOK", s3.NepalRupee = "NPR", s3.NewZealandDollar = "NZD", s3.OmanRial = "OMR", s3.PanamaBalboa = "PAB", s3.PeruNuevoSol = "PEN", s3.PapuaNewGuineaKina = "PGK", s3.PhilippinesPeso = "PHP", s3.PakistanRupee = "PKR", s3.PeruNuevo = "PEN", s3.PolandZloty = "PLN", s3.ParaguayGuarani = "PYG", s3.QatarRial = "QAR", s3.RomaniaNewLeu = "RON", s3.SerbiaDinar = "RSD", s3.SriLankaRupee = "LKR", s3.RussiaRuble = "RUB", s3.RwandaFranc = "RWF", s3.SaudiArabiaRiyal = "SAR", s3.SlovakiaKoruna = "SKK", s3.SloveniaTolar = "SIT", s3.SolomonIslandsDollar = "SBD", s3.SeychellesRupee = "SCR", s3.SudanPound = "SDG", s3.SwedenKrona = "SEK", s3.SingaporeDollar = "SGD", s3.SaintHelenaPound = "SHP", s3.SierraLeoneLeone = "SLL", s3.SomaliaShilling = "SOS", s3.SurinameDollar = "SRD", s3.SintMaartenPound = "SXD", s3.SyriaPound = "SYP", s3.SwazilandLilangeni = "SZL", s3.SwitzerlandFranc = "CHF", s3.ThailandBaht = "THB", s3.TajikistanSomoni = "TJS", s3.TurkmenistanManat = "TMT", s3.TunisiaDinar = "TND", s3.TongaPaanga = "TOP", s3.TurkeyLira = "TRY", s3.TrinidadAndTobagoDollar = "TTD", s3.TaiwanNewDollar = "TWD", s3.TanzaniaShilling = "TZS", s3.UnitedArabEmiratesDirham = "AED", s3.UkraineHryvnia = "UAH", s3.UgandaShilling = "UGX", s3.UnitedKingdomPound = "GBP", s3.UnitedStatesDollar = "USD", s3.UruguayPeso = "UYU", s3.UzbekistanSom = "UZS", s3.VenezuelaBolivar = "VEF", s3.VietnamDong = "VND", s3.VanuatuVatu = "VUV", s3.SamoaTala = "WST", s3.YemenRial = "YER", s3.SouthAfricaRand = "ZAR", s3.ZambiaKwacha = "ZMW", s3.ZimbabweDollar = "ZWL", s3))(D3 || {});
var Be22 = ((b3) => (b3.Bitcoin = "BTC", b3.Ethereum = "ETH", b3.Litecoin = "LTC", b3.Ripple = "XRP", b3.Dash = "DASH", b3.Zcash = "ZEC", b3.Dogecoin = "DOGE", b3.Monero = "XMR", b3.BitcoinCash = "BCH", b3.EOS = "EOS", b3.Binance = "BNB", b3.Stellar = "XLM", b3.Cardano = "ADA", b3.IOTA = "IOTA", b3.Tezos = "XTZ", b3.NEO = "NEO", b3.TRON = "TRX", b3.EOSClassic = "EOSC", b3.Ontology = "ONT", b3.VeChain = "VEN", b3.QTUM = "QTUM", b3.Lisk = "LSK", b3.Waves = "WAVES", b3.OmiseGO = "OMG", b3.Zilliqa = "ZIL", b3.BitcoinGold = "BTG", b3.Decred = "DCR", b3.Stratis = "STRAT", b3.Populous = "PPT", b3.Augur = "REP", b3.Golem = "GNT", b3.Siacoin = "SC", b3.BasicAttentionToken = "BAT", b3.ZCoin = "XZC", b3.StratisHedged = "SNT", b3.VeChainHedged = "VEN", b3.PowerLedger = "POWR", b3.WavesHedged = "WAVE", b3.ZilliqaHedged = "ZRX", b3.BitcoinDiamond = "BCD", b3.DigiByte = "DGB", b3.DigiByteHedged = "DGB", b3.Bytecoin = "BCN", b3.BytecoinHedged = "BCN", b3))(Be22 || {});
var G3 = ((m3) => (m3.Afrikaans = "af", m3.Albanian = "sq", m3.Amharic = "am", m3.Arabic = "ar", m3.Armenian = "hy", m3.Azerbaijani = "az", m3.Bashkir = "ba", m3.Basque = "eu", m3.Belarusian = "be", m3.Bengali = "bn", m3.Berber = "ber", m3.Bhutani = "dz", m3.Bihari = "bh", m3.Bislama = "bi", m3.Bosnian = "bs", m3.Breten = "br", m3.Bulgarian = "bg", m3.Burmese = "my", m3.Cantonese = "yue", m3.Catalan = "ca", m3.Chinese = "zh", m3.Chuvash = "cv", m3.Corsican = "co", m3.Croatian = "hr", m3.Czech = "cs", m3.Danish = "da", m3.Dari = "prs", m3.Divehi = "dv", m3.Dutch = "nl", m3.English = "en", m3.Esperanto = "eo", m3.Estonian = "et", m3.Faroese = "fo", m3.Farsi = "fa", m3.Filipino = "fil", m3.Finnish = "fi", m3.French = "fr", m3.Frisian = "fy", m3.Galician = "gl", m3.Georgian = "ka", m3.German = "de", m3.Greek = "el", m3.Greenlandic = "kl", m3.Gujarati = "gu", m3.Haitian = "ht", m3.Hausa = "ha", m3.Hebrew = "he", m3.Hindi = "hi", m3.Hungarian = "hu", m3.Icelandic = "is", m3.Igbo = "ig", m3.Indonesian = "id", m3.Irish = "ga", m3.Italian = "it", m3.Japanese = "ja", m3.Javanese = "jv", m3.Kannada = "kn", m3.Karelian = "krl", m3.Kazakh = "kk", m3.Khmer = "km", m3.Komi = "kv", m3.Konkani = "kok", m3.Korean = "ko", m3.Kurdish = "ku", m3.Kyrgyz = "ky", m3.Lao = "lo", m3.Latin = "la", m3.Latvian = "lv", m3.Lithuanian = "lt", m3.Luxembourgish = "lb", m3.Ossetian = "os", m3.Macedonian = "mk", m3.Malagasy = "mg", m3.Malay = "ms", m3.Malayalam = "ml", m3.Maltese = "mt", m3.Maori = "mi", m3.Marathi = "mr", m3.Mari = "mhr", m3.Mongolian = "mn", m3.Montenegrin = "me", m3.Nepali = "ne", m3.NorthernSotho = "nso", m3.Norwegian = "no", m3.NorwegianBokmal = "nb", m3.NorwegianNynorsk = "nn", m3.Oriya = "or", m3.Pashto = "ps", m3.Persian = "fa", m3.Polish = "pl", m3.Portuguese = "pt", m3.Punjabi = "pa", m3.Quechua = "qu", m3.Romanian = "ro", m3.Russian = "ru", m3.Sakha = "sah", m3.Sami = "se", m3.Samoan = "sm", m3.Sanskrit = "sa", m3.Scots = "gd", m3.Serbian = "sr", m3.SerbianCyrillic = "sr-Cyrl", m3.Sesotho = "st", m3.Shona = "sn", m3.Sindhi = "sd", m3.Sinhala = "si", m3.Slovak = "sk", m3.Slovenian = "sl", m3.Somali = "so", m3.Spanish = "es", m3.Sudanese = "su", m3.Sutu = "sx", m3.Swahili = "sw", m3.Swedish = "sv", m3.Syriac = "syr", m3.Tagalog = "tl", m3.Tajik = "tg", m3.Tamazight = "tmh", m3.Tamil = "ta", m3.Tatar = "tt", m3.Telugu = "te", m3.Thai = "th", m3.Tibetan = "bo", m3.Tsonga = "ts", m3.Tswana = "tn", m3.Turkish = "tr", m3.Turkmen = "tk", m3.Ukrainian = "uk", m3.Urdu = "ur", m3.Uzbek = "uz", m3.Vietnamese = "vi", m3.Welsh = "cy", m3.Xhosa = "xh", m3.Yiddish = "yi", m3.Yoruba = "yo", m3.Zulu = "zu", m3))(G3 || {});
var z3 = ((i3) => (i3.Afrikaans = "af", i3.AfrikaansSouthAfrica = "af-ZA", i3.Albanian = "sq", i3.AlbanianAlbania = "sq-AL", i3.Amharic = "am", i3.AmharicEthiopia = "am-ET", i3.Arabic = "ar", i3.ArabicAlgeria = "ar-DZ", i3.ArabicBahrain = "ar-BH", i3.ArabicEgypt = "ar-EG", i3.ArabicIraq = "ar-IQ", i3.ArabicJordan = "ar-JO", i3.ArabicKuwait = "ar-KW", i3.ArabicLebanon = "ar-LB", i3.ArabicLibya = "ar-LY", i3.ArabicMorocco = "ar-MA", i3.ArabicOman = "ar-OM", i3.ArabicQatar = "ar-QA", i3.ArabicSaudiArabia = "ar-SA", i3.ArabicSyria = "ar-SY", i3.ArabicTunisia = "ar-TN", i3.ArabicUnitedArabEmirates = "ar-AE", i3.ArabicYemen = "ar-YE", i3.Armenian = "hy", i3.ArmenianArmenia = "hy-AM", i3.Azerbaijani = "az", i3.AzerbaijaniAzerbaijan = "az-AZ", i3.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", i3.Bashkir = "ba", i3.Basque = "eu", i3.BasqueSpain = "eu-ES", i3.Belarusian = "be", i3.BelarusianBelarus = "be-BY", i3.Bengali = "bn", i3.BengaliBangladesh = "bn-BD", i3.BengaliIndia = "bn-IN", i3.Berber = "ber", i3.Bhutani = "dz", i3.BhutaniBhutan = "dz-BT", i3.Bosnian = "bs", i3.BosnianBosniaAndHerzegovina = "bs-BA", i3.Breton = "br", i3.Bulgarian = "bg", i3.BulgarianBosniaAndHerzegovina = "bg-BG", i3.BulgarianBulgaria = "bg-BG", i3.Burmese = "my", i3.BurmeseMyanmar = "my-MM", i3.Cantonese = "yue", i3.CantoneseHongKong = "yue-HK", i3.Catalan = "ca", i3.CatalanSpain = "ca-ES", i3.Chechen = "ce", i3.Cherokee = "chr", i3.Chinese = "zh", i3.ChineseSimplified = "zh-Hans", i3.ChineseSimplifiedChina = "zh-Hans-CN", i3.ChineseSimplifiedHongKong = "zh-Hans-HK", i3.ChineseSimplifiedMacau = "zh-Hans-MO", i3.ChineseSimplifiedSingapore = "zh-Hans-SG", i3.ChineseTraditional = "zh-Hant", i3.ChineseTraditionalHongKong = "zh-Hant-HK", i3.ChineseTraditionalMacau = "zh-Hant-MO", i3.ChineseTraditionalSingapore = "zh-Hant-SG", i3.ChineseTraditionalTaiwan = "zh-Hant-TW", i3.Chuvash = "cv", i3.CorsicanFrance = "co-FR", i3.Croatian = "hr", i3.CroatianBosniaAndHerzegovina = "hr-BA", i3.CroatianCroatia = "hr-HR", i3.Czech = "cs", i3.CzechCzechRepublic = "cs-CZ", i3.Danish = "da", i3.DanishDenmark = "da-DK", i3.Dari = "prs", i3.DariAfghanistan = "prs-AF", i3.Divehi = "dv", i3.DivehiMaldives = "dv-MV", i3.Dutch = "nl", i3.DutchBelgium = "nl-BE", i3.DutchNetherlands = "nl-NL", i3.English = "en", i3.EnglishAustralia = "en-AU", i3.EnglishBelgium = "en-BE", i3.EnglishBelize = "en-BZ", i3.EnglishCanada = "en-CA", i3.EnglishCaribbean = "en-029", i3.EnglishIreland = "en-IE", i3.EnglishJamaica = "en-JM", i3.EnglishNewZealand = "en-NZ", i3.EnglishPhilippines = "en-PH", i3.EnglishSingapore = "en-SG", i3.EnglishSouthAfrica = "en-ZA", i3.EnglishTrinidadAndTobago = "en-TT", i3.EnglishUnitedKingdom = "en-GB", i3.EnglishUnitedStates = "en-US", i3.EnglishZimbabwe = "en-ZW", i3.Esperanto = "eo", i3.Estonian = "et", i3.EstonianEstonia = "et-EE", i3.Faroese = "fo", i3.FaroeseFaroeIslands = "fo-FO", i3.Farsi = "fa", i3.FarsiIran = "fa-IR", i3.Filipino = "fil", i3.FilipinoPhilippines = "fil-PH", i3.Finnish = "fi", i3.FinnishFinland = "fi-FI", i3.French = "fr", i3.FrenchBelgium = "fr-BE", i3.FrenchCanada = "fr-CA", i3.FrenchFrance = "fr-FR", i3.FrenchLuxembourg = "fr-LU", i3.FrenchMonaco = "fr-MC", i3.FrenchReunion = "fr-RE", i3.FrenchSwitzerland = "fr-CH", i3.Frisian = "fy", i3.FrisianNetherlands = "fy-NL", i3.Galician = "gl", i3.GalicianSpain = "gl-ES", i3.Georgian = "ka", i3.GeorgianGeorgia = "ka-GE", i3.German = "de", i3.GermanAustria = "de-AT", i3.GermanBelgium = "de-BE", i3.GermanGermany = "de-DE", i3.GermanLiechtenstein = "de-LI", i3.GermanLuxembourg = "de-LU", i3.GermanSwitzerland = "de-CH", i3.Greenlandic = "kl", i3.GreenlandicGreenland = "kl-GL", i3.Greek = "el", i3.GreekGreece = "el-GR", i3.Gujarati = "gu", i3.GujaratiIndia = "gu-IN", i3.Haitian = "ht", i3.Hausa = "ha", i3.HausaGhana = "ha-GH", i3.HausaNiger = "ha-NE", i3.HausaNigeria = "ha-NG", i3.Hebrew = "he", i3.HebrewIsrael = "he-IL", i3.Hindi = "hi", i3.HindiIndia = "hi-IN", i3.Hungarian = "hu", i3.HungarianHungary = "hu-HU", i3.Icelandic = "is", i3.IcelandicIceland = "is-IS", i3.Igbo = "ig", i3.IgboNigeria = "ig-NG", i3.Indonesian = "id", i3.IndonesianIndonesia = "id-ID", i3.Irish = "ga", i3.IrishIreland = "ga-IE", i3.Italian = "it", i3.ItalianItaly = "it-IT", i3.ItalianSwitzerland = "it-CH", i3.Japanese = "ja", i3.JapaneseJapan = "ja-JP", i3.Javanese = "jv", i3.Kannada = "kn", i3.KannadaIndia = "kn-IN", i3.Karelian = "krl", i3.Kazakh = "kk", i3.KazakhKazakhstan = "kk-KZ", i3.Khmer = "km", i3.KhmerCambodia = "km-KH", i3.KinyarwandaRwanda = "rw-RW", i3.Komi = "kv", i3.Konkani = "kok", i3.KonkaniIndia = "kok-IN", i3.Korean = "ko", i3.KoreanSouthKorea = "ko-KR", i3.Kurdish = "ku", i3.KurdishIraq = "ku-IQ", i3.KurdishTurkey = "ku-TR", i3.Kyrgyz = "ky", i3.KyrgyzKyrgyzstan = "ky-KG", i3.Lao = "lo", i3.LaoLaos = "lo-LA", i3.Latin = "la", i3.Latvian = "lv", i3.LatvianLatvia = "lv-LV", i3.Lithuanian = "lt", i3.LithuanianLithuania = "lt-LT", i3.Luxembourgish = "lb", i3.LuxembourgishBelgium = "lb-LU", i3.LuxembourgishLuxembourg = "lb-LU", i3.Macedonian = "mk", i3.MacedonianNorthMacedonia = "mk-MK", i3.Malagasy = "mg", i3.Malay = "ms", i3.MalayBrunei = "ms-BN", i3.MalayIndia = "ms-IN", i3.MalayMalaysia = "ms-MY", i3.MalaySingapore = "ms-SG", i3.Malayalam = "ml", i3.MalayalamIndia = "ml-IN", i3.Maltese = "mt", i3.MalteseMalta = "mt-MT", i3.Maori = "mi", i3.MaoriNewZealand = "mi-NZ", i3.Marathi = "mr", i3.MarathiIndia = "mr-IN", i3.Mari = "chm", i3.Mongolian = "mn", i3.MongolianMongolia = "mn-MN", i3.Montenegrin = "me", i3.MontenegrinMontenegro = "me-ME", i3.Nepali = "ne", i3.NepaliNepal = "ne-NP", i3.NorthernSotho = "ns", i3.NorthernSothoSouthAfrica = "ns-ZA", i3.Norwegian = "nb", i3.NorwegianBokmalNorway = "nb-NO", i3.NorwegianNynorskNorway = "nn-NO", i3.Oriya = "or", i3.OriyaIndia = "or-IN", i3.Ossetian = "os", i3.Pashto = "ps", i3.PashtoAfghanistan = "ps-AF", i3.Persian = "fa", i3.PersianIran = "fa-IR", i3.Polish = "pl", i3.PolishPoland = "pl-PL", i3.Portuguese = "pt", i3.PortugueseBrazil = "pt-BR", i3.PortuguesePortugal = "pt-PT", i3.Punjabi = "pa", i3.PunjabiIndia = "pa-IN", i3.PunjabiPakistan = "pa-PK", i3.Quechua = "qu", i3.QuechuaBolivia = "qu-BO", i3.QuechuaEcuador = "qu-EC", i3.QuechuaPeru = "qu-PE", i3.Romanian = "ro", i3.RomanianRomania = "ro-RO", i3.Russian = "ru", i3.RussianKazakhstan = "ru-KZ", i3.RussianKyrgyzstan = "ru-KG", i3.RussianRussia = "ru-RU", i3.RussianUkraine = "ru-UA", i3.Sakha = "sah", i3.Sanskrit = "sa", i3.SanskritIndia = "sa-IN", i3.Sami = "se", i3.SamiNorway = "se-NO", i3.SamiSweden = "se-SE", i3.SamiFinland = "se-FI", i3.Samoan = "sm", i3.SamoanSamoa = "sm-WS", i3.Scots = "gd", i3.Serbian = "sr", i3.SerbianBosniaAndHerzegovina = "sr-BA", i3.SerbianSerbiaAndMontenegro = "sr-SP", i3.SerbianCyrillic = "sr-SP-Cyrl", i3.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", i3.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", i3.Sesotho = "st", i3.SesothoSouthAfrica = "st-ZA", i3.Shona = "sn", i3.ShonaZimbabwe = "sn-ZW", i3.Sindhi = "sd", i3.SindhiPakistan = "sd-PK", i3.Sinhala = "si", i3.SinhalaSriLanka = "si-LK", i3.Slovak = "sk", i3.SlovakSlovakia = "sk-SK", i3.Slovenian = "sl", i3.SlovenianSlovenia = "sl-SI", i3.Somali = "so", i3.SomaliSomalia = "so-SO", i3.Spanish = "es", i3.SpanishArgentina = "es-AR", i3.SpanishBolivia = "es-BO", i3.SpanishChile = "es-CL", i3.SpanishColombia = "es-CO", i3.SpanishCostaRica = "es-CR", i3.SpanishCuba = "es-CU", i3.SpanishDominicanRepublic = "es-DO", i3.SpanishEcuador = "es-EC", i3.SpanishEquatorialGuinea = "es-GQ", i3.SpanishElSalvador = "es-SV", i3.SpanishGuatemala = "es-GT", i3.SpanishHonduras = "es-HN", i3.SpanishMexico = "es-MX", i3.SpanishNicaragua = "es-NI", i3.SpanishPanama = "es-PA", i3.SpanishParaguay = "es-PY", i3.SpanishPeru = "es-PE", i3.SpanishPuertoRico = "es-PR", i3.SpanishSpain = "es-ES", i3.SpanishUnitedStates = "es-US", i3.SpanishUruguay = "es-UY", i3.SpanishVenezuela = "es-VE", i3.Sudanese = "su", i3.Sutu = "st", i3.SutuSouthAfrica = "st-ZA", i3.Swahili = "sw", i3.SwahiliKenya = "sw-KE", i3.Swedish = "sv", i3.SwedishFinland = "sv-FI", i3.SwedishSweden = "sv-SE", i3.Syriac = "syr", i3.SyriacSyria = "syr-SY", i3.Tajik = "tg", i3.TajikTajikistan = "tg-TJ", i3.Tagalog = "tl", i3.TagalogPhilippines = "tl-PH", i3.Tamazight = "tmh", i3.Tamil = "ta", i3.TamilIndia = "ta-IN", i3.Tatar = "tt", i3.Telugu = "te", i3.TeluguIndia = "te-IN", i3.Thai = "th", i3.ThaiThailand = "th-TH", i3.Tibetan = "bo", i3.TibetanBhutan = "bo-BT", i3.TibetanChina = "bo-CN", i3.TibetanIndia = "bo-IN", i3.Tsonga = "ts", i3.Tswana = "tn", i3.TswanaSouthAfrica = "tn-ZA", i3.Turkish = "tr", i3.TurkishTurkey = "tr-TR", i3.Turkmen = "tk", i3.Ukrainian = "uk", i3.UkrainianUkraine = "uk-UA", i3.Urdu = "ur", i3.UrduAfghanistan = "ur-AF", i3.UrduIndia = "ur-IN", i3.UrduPakistan = "ur-PK", i3.Uzbek = "uz", i3.UzbekCyrillic = "uz-Cyrl-UZ", i3.UzbekLatin = "uz-Latn-UZ", i3.UzbekUzbekistan = "uz-UZ", i3.Vietnamese = "vi", i3.VietnameseVietnam = "vi-VN", i3.Welsh = "cy", i3.WelshUnitedKingdom = "cy-GB", i3.Xhosa = "xh", i3.XhosaSouthAfrica = "xh-ZA", i3.Yiddish = "yi", i3.Yoruba = "yo", i3.YorubaNigeria = "yo-NG", i3.ZhuyinMandarinChina = "yue-Hant-CN", i3.Zulu = "zu", i3.ZuluSouthAfrica = "zu-ZA", i3))(z3 || {});
var L3 = ((a) => (a.AfricaAbidjan = "Africa/Abidjan", a.AfricaAccra = "Africa/Accra", a.AfricaAddisAbaba = "Africa/Addis_Ababa", a.AfricaAlgiers = "Africa/Algiers", a.AfricaAsmara = "Africa/Asmara", a.AfricaBamako = "Africa/Bamako", a.AfricaBangui = "Africa/Bangui", a.AfricaBanjul = "Africa/Banjul", a.AfricaBissau = "Africa/Bissau", a.AfricaBlantyre = "Africa/Blantyre", a.AfricaBrazzaville = "Africa/Brazzaville", a.AfricaBujumbura = "Africa/Bujumbura", a.AfricaCairo = "Africa/Cairo", a.AfricaCasablanca = "Africa/Casablanca", a.AfricaCeuta = "Africa/Ceuta", a.AfricaConakry = "Africa/Conakry", a.AfricaDakar = "Africa/Dakar", a.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", a.AfricaDjibouti = "Africa/Djibouti", a.AfricaDouala = "Africa/Douala", a.AfricaElAaiun = "Africa/El_Aaiun", a.AfricaFreetown = "Africa/Freetown", a.AfricaGaborone = "Africa/Gaborone", a.AfricaHarare = "Africa/Harare", a.AfricaJohannesburg = "Africa/Johannesburg", a.AfricaJuba = "Africa/Juba", a.AfricaKampala = "Africa/Kampala", a.AfricaKhartoum = "Africa/Khartoum", a.AfricaKigali = "Africa/Kigali", a.AfricaKinshasa = "Africa/Kinshasa", a.AfricaLagos = "Africa/Lagos", a.AfricaLibreville = "Africa/Libreville", a.AfricaLome = "Africa/Lome", a.AfricaLuanda = "Africa/Luanda", a.AfricaLubumbashi = "Africa/Lubumbashi", a.AfricaLusaka = "Africa/Lusaka", a.AfricaMalabo = "Africa/Malabo", a.AfricaMaputo = "Africa/Maputo", a.AfricaMaseru = "Africa/Maseru", a.AfricaMbabane = "Africa/Mbabane", a.AfricaMogadishu = "Africa/Mogadishu", a.AfricaMonrovia = "Africa/Monrovia", a.AfricaNairobi = "Africa/Nairobi", a.AfricaNdjamena = "Africa/Ndjamena", a.AfricaNiamey = "Africa/Niamey", a.AfricaNouakchott = "Africa/Nouakchott", a.AfricaOuagadougou = "Africa/Ouagadougou", a.AfricaPortoNovo = "Africa/Porto-Novo", a.AfricaSaoTome = "Africa/Sao_Tome", a.AfricaTripoli = "Africa/Tripoli", a.AfricaTunis = "Africa/Tunis", a.AfricaWindhoek = "Africa/Windhoek", a.AmericaAdak = "America/Adak", a.AmericaAnchorage = "America/Anchorage", a.AmericaAnguilla = "America/Anguilla", a.AmericaAntigua = "America/Antigua", a.AmericaAraguaina = "America/Araguaina", a.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", a.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", a.AmericaArgentinaCordoba = "America/Argentina/Cordoba", a.AmericaArgentinaJujuy = "America/Argentina/Jujuy", a.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", a.AmericaArgentinaMendoza = "America/Argentina/Mendoza", a.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", a.AmericaArgentinaSalta = "America/Argentina/Salta", a.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", a.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", a.AmericaArgentinaTucuman = "America/Argentina/Tucuman", a.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", a.AmericaAruba = "America/Aruba", a.AmericaAsuncion = "America/Asuncion", a.AmericaAtikokan = "America/Atikokan", a.AmericaAtka = "America/Atka", a.AmericaBahia = "America/Bahia", a.AmericaBahiaBanderas = "America/Bahia_Banderas", a.AmericaBarbados = "America/Barbados", a.AmericaBelem = "America/Belem", a.AmericaBelize = "America/Belize", a.AmericaBlancSablon = "America/Blanc-Sablon", a.AmericaBoaVista = "America/Boa_Vista", a.AmericaBogota = "America/Bogota", a.AmericaBoise = "America/Boise", a.AmericaCambridgeBay = "America/Cambridge_Bay", a.AmericaCampoGrande = "America/Campo_Grande", a.AmericaCancun = "America/Cancun", a.AmericaCaracas = "America/Caracas", a.AmericaCayenne = "America/Cayenne", a.AmericaCayman = "America/Cayman", a.AmericaChicago = "America/Chicago", a.AmericaChihuahua = "America/Chihuahua", a.AmericaCoralHarbour = "America/Coral_Harbour", a.AmericaCordoba = "America/Cordoba", a.AmericaCostaRica = "America/Costa_Rica", a.AmericaCreston = "America/Creston", a.AmericaCuiaba = "America/Cuiaba", a.AmericaCuracao = "America/Curacao", a.AmericaDanmarkshavn = "America/Danmarkshavn", a.AmericaDawson = "America/Dawson", a.AmericaDawsonCreek = "America/Dawson_Creek", a.AmericaDenver = "America/Denver", a.AmericaDetroit = "America/Detroit", a.AmericaDominica = "America/Dominica", a.AmericaEdmonton = "America/Edmonton", a.AmericaEirunepe = "America/Eirunepe", a.AmericaElSalvador = "America/El_Salvador", a.AmericaFortaleza = "America/Fortaleza", a.AmericaGlaceBay = "America/Glace_Bay", a.AmericaGodthab = "America/Godthab", a.AmericaGooseBay = "America/Goose_Bay", a.AmericaGrandTurk = "America/Grand_Turk", a.AmericaGrenada = "America/Grenada", a.AmericaGuadeloupe = "America/Guadeloupe", a.AmericaGuatemala = "America/Guatemala", a.AmericaGuayaquil = "America/Guayaquil", a.AmericaGuyana = "America/Guyana", a.AmericaHalifax = "America/Halifax", a.AmericaHavana = "America/Havana", a.AmericaHermosillo = "America/Hermosillo", a.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", a.AmericaIndianaKnox = "America/Indiana/Knox", a.AmericaIndianaMarengo = "America/Indiana/Marengo", a.AmericaIndianaPetersburg = "America/Indiana/Petersburg", a.AmericaIndianaTellCity = "America/Indiana/Tell_City", a.AmericaIndianaVevay = "America/Indiana/Vevay", a.AmericaIndianaVincennes = "America/Indiana/Vincennes", a.AmericaIndianaWinamac = "America/Indiana/Winamac", a.AmericaInuvik = "America/Inuvik", a.AmericaIqaluit = "America/Iqaluit", a.AmericaJamaica = "America/Jamaica", a.AmericaJuneau = "America/Juneau", a.AmericaKentuckyLouisville = "America/Kentucky/Louisville", a.AmericaKentuckyMonticello = "America/Kentucky/Monticello", a.AmericaKralendijk = "America/Kralendijk", a.AmericaLaPaz = "America/La_Paz", a.AmericaLima = "America/Lima", a.AmericaLosAngeles = "America/Los_Angeles", a.AmericaLouisville = "America/Louisville", a.AmericaLowerPrinces = "America/Lower_Princes", a.AmericaMaceio = "America/Maceio", a.AmericaManagua = "America/Managua", a.AmericaManaus = "America/Manaus", a.AmericaMarigot = "America/Marigot", a.AmericaMartinique = "America/Martinique", a.AmericaMatamoros = "America/Matamoros", a.AmericaMazatlan = "America/Mazatlan", a.AmericaMenominee = "America/Menominee", a.AmericaMerida = "America/Merida", a.AmericaMetlakatla = "America/Metlakatla", a.AmericaMexicoCity = "America/Mexico_City", a.AmericaMiquelon = "America/Miquelon", a.AmericaMoncton = "America/Moncton", a.AmericaMonterrey = "America/Monterrey", a.AmericaMontevideo = "America/Montevideo", a.AmericaMontserrat = "America/Montserrat", a.AmericaMontreal = "America/Montreal", a.AmericaNassau = "America/Nassau", a.AmericaNewYork = "America/New_York", a.AmericaNipigon = "America/Nipigon", a.AmericaNome = "America/Nome", a.AmericaNoronha = "America/Noronha", a.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", a.AmericaNorthDakotaCenter = "America/North_Dakota/Center", a.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", a.AmericaOjinaga = "America/Ojinaga", a.AmericaPanama = "America/Panama", a.AmericaPangnirtung = "America/Pangnirtung", a.AmericaParamaribo = "America/Paramaribo", a.AmericaPhoenix = "America/Phoenix", a.AmericaPortAuPrince = "America/Port-au-Prince", a.AmericaPortOfSpain = "America/Port_of_Spain", a.AmericaPortoVelho = "America/Porto_Velho", a.AmericaPuertoRico = "America/Puerto_Rico", a.AmericaRainyRiver = "America/Rainy_River", a.AmericaRankinInlet = "America/Rankin_Inlet", a.AmericaRecife = "America/Recife", a.AmericaRegina = "America/Regina", a.AmericaResolute = "America/Resolute", a.AmericaRioBranco = "America/Rio_Branco", a.AmericaSantaIsabel = "America/Santa_Isabel", a.AmericaSantarem = "America/Santarem", a.AmericaSantiago = "America/Santiago", a.AmericaSantoDomingo = "America/Santo_Domingo", a.AmericaSaoPaulo = "America/Sao_Paulo", a.AmericaScoresbysund = "America/Scoresbysund", a.AmericaShiprock = "America/Shiprock", a.AmericaSitka = "America/Sitka", a.AmericaStBarthelemy = "America/St_Barthelemy", a.AmericaStJohns = "America/St_Johns", a.AmericaStKitts = "America/St_Kitts", a.AmericaStLucia = "America/St_Lucia", a.AmericaStThomas = "America/St_Thomas", a.AmericaStVincent = "America/St_Vincent", a.AmericaSwiftCurrent = "America/Swift_Current", a.AmericaTegucigalpa = "America/Tegucigalpa", a.AmericaThule = "America/Thule", a.AmericaThunderBay = "America/Thunder_Bay", a.AmericaTijuana = "America/Tijuana", a.AmericaToronto = "America/Toronto", a.AmericaTortola = "America/Tortola", a.AmericaVancouver = "America/Vancouver", a.AmericaWhitehorse = "America/Whitehorse", a.AmericaWinnipeg = "America/Winnipeg", a.AmericaYakutat = "America/Yakutat", a.AmericaYellowknife = "America/Yellowknife", a.AntarcticaCasey = "Antarctica/Casey", a.AntarcticaDavis = "Antarctica/Davis", a.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", a.AntarcticaMacquarie = "Antarctica/Macquarie", a.AntarcticaMawson = "Antarctica/Mawson", a.AntarcticaMcMurdo = "Antarctica/McMurdo", a.AntarcticaPalmer = "Antarctica/Palmer", a.AntarcticaRothera = "Antarctica/Rothera", a.AntarcticaSyowa = "Antarctica/Syowa", a.AntarcticaTroll = "Antarctica/Troll", a.AntarcticaVostok = "Antarctica/Vostok", a.ArcticLongyearbyen = "Arctic/Longyearbyen", a.AsiaAden = "Asia/Aden", a.AsiaAlmaty = "Asia/Almaty", a.AsiaAmman = "Asia/Amman", a.AsiaAnadyr = "Asia/Anadyr", a.AsiaAqtau = "Asia/Aqtau", a.AsiaAqtobe = "Asia/Aqtobe", a.AsiaAshgabat = "Asia/Ashgabat", a.AsiaBaghdad = "Asia/Baghdad", a.AsiaBahrain = "Asia/Bahrain", a.AsiaBaku = "Asia/Baku", a.AsiaBangkok = "Asia/Bangkok", a.AsiaBarnaul = "Asia/Barnaul", a.AsiaBeirut = "Asia/Beirut", a.AsiaBishkek = "Asia/Bishkek", a.AsiaBrunei = "Asia/Brunei", a.AsiaChita = "Asia/Chita", a.AsiaChoibalsan = "Asia/Choibalsan", a.AsiaColombo = "Asia/Colombo", a.AsiaDamascus = "Asia/Damascus", a.AsiaDhaka = "Asia/Dhaka", a.AsiaDili = "Asia/Dili", a.AsiaDubai = "Asia/Dubai", a.AsiaDushanbe = "Asia/Dushanbe", a.AsiaFamagusta = "Asia/Famagusta", a.AsiaGaza = "Asia/Gaza", a.AsiaHebron = "Asia/Hebron", a.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", a.AsiaHongKong = "Asia/Hong_Kong", a.AsiaHovd = "Asia/Hovd", a.AsiaIrkutsk = "Asia/Irkutsk", a.AsiaJakarta = "Asia/Jakarta", a.AsiaJayapura = "Asia/Jayapura", a.AsiaJerusalem = "Asia/Jerusalem", a.AsiaKabul = "Asia/Kabul", a.AsiaKamchatka = "Asia/Kamchatka", a.AsiaKarachi = "Asia/Karachi", a.AsiaKathmandu = "Asia/Kathmandu", a.AsiaKhandyga = "Asia/Khandyga", a.AsiaKolkata = "Asia/Kolkata", a.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", a.AsiaKualaLumpur = "Asia/Kuala_Lumpur", a.AsiaKuching = "Asia/Kuching", a.AsiaKuwait = "Asia/Kuwait", a.AsiaMacau = "Asia/Macau", a.AsiaMagadan = "Asia/Magadan", a.AsiaMakassar = "Asia/Makassar", a.AsiaManila = "Asia/Manila", a.AsiaMuscat = "Asia/Muscat", a.AsiaNicosia = "Asia/Nicosia", a.AsiaNovokuznetsk = "Asia/Novokuznetsk", a.AsiaNovosibirsk = "Asia/Novosibirsk", a.AsiaOmsk = "Asia/Omsk", a.AsiaOral = "Asia/Oral", a.AsiaPhnomPenh = "Asia/Phnom_Penh", a.AsiaPontianak = "Asia/Pontianak", a.AsiaPyongyang = "Asia/Pyongyang", a.AsiaQatar = "Asia/Qatar", a.AsiaQyzylorda = "Asia/Qyzylorda", a.AsiaRangoon = "Asia/Rangoon", a.AsiaRiyadh = "Asia/Riyadh", a.AsiaSakhalin = "Asia/Sakhalin", a.AsiaSamarkand = "Asia/Samarkand", a.AsiaSeoul = "Asia/Seoul", a.AsiaShanghai = "Asia/Shanghai", a.AsiaSingapore = "Asia/Singapore", a.AsiaSrednekolymsk = "Asia/Srednekolymsk", a.AsiaTaipei = "Asia/Taipei", a.AsiaTashkent = "Asia/Tashkent", a.AsiaTbilisi = "Asia/Tbilisi", a.AsiaTehran = "Asia/Tehran", a.AsiaThimphu = "Asia/Thimphu", a.AsiaTokyo = "Asia/Tokyo", a.AsiaTomsk = "Asia/Tomsk", a.AsiaUlaanbaatar = "Asia/Ulaanbaatar", a.AsiaUrumqi = "Asia/Urumqi", a.AsiaUstNera = "Asia/Ust-Nera", a.AsiaVientiane = "Asia/Vientiane", a.AsiaVladivostok = "Asia/Vladivostok", a.AsiaYakutsk = "Asia/Yakutsk", a.AsiaYekaterinburg = "Asia/Yekaterinburg", a.AsiaYerevan = "Asia/Yerevan", a.AtlanticAzores = "Atlantic/Azores", a.AtlanticBermuda = "Atlantic/Bermuda", a.AtlanticCanary = "Atlantic/Canary", a.AtlanticCapeVerde = "Atlantic/Cape_Verde", a.AtlanticFaroe = "Atlantic/Faroe", a.AtlanticMadeira = "Atlantic/Madeira", a.AtlanticReykjavik = "Atlantic/Reykjavik", a.AtlanticSouthGeorgia = "Atlantic/South_Georgia", a.AtlanticStHelena = "Atlantic/St_Helena", a.AtlanticStanley = "Atlantic/Stanley", a.AustraliaAdelaide = "Australia/Adelaide", a.AustraliaBrisbane = "Australia/Brisbane", a.AustraliaBrokenHill = "Australia/Broken_Hill", a.AustraliaCanberra = "Australia/Canberra", a.AustraliaCurrie = "Australia/Currie", a.AustraliaDarwin = "Australia/Darwin", a.AustraliaEucla = "Australia/Eucla", a.AustraliaHobart = "Australia/Hobart", a.AustraliaLindeman = "Australia/Lindeman", a.AustraliaLordHowe = "Australia/Lord_Howe", a.AustraliaMelbourne = "Australia/Melbourne", a.AustraliaPerth = "Australia/Perth", a.AustraliaSydney = "Australia/Sydney", a.EuropeAmsterdam = "Europe/Amsterdam", a.EuropeAndorra = "Europe/Andorra", a.EuropeAthens = "Europe/Athens", a.EuropeBelgrade = "Europe/Belgrade", a.EuropeBerlin = "Europe/Berlin", a.EuropeBratislava = "Europe/Bratislava", a.EuropeBrussels = "Europe/Brussels", a.EuropeBucharest = "Europe/Bucharest", a.EuropeBudapest = "Europe/Budapest", a.EuropeBusingen = "Europe/Busingen", a.EuropeChisinau = "Europe/Chisinau", a.EuropeCopenhagen = "Europe/Copenhagen", a.EuropeDublin = "Europe/Dublin", a.EuropeGibraltar = "Europe/Gibraltar", a.EuropeGuernsey = "Europe/Guernsey", a.EuropeHelsinki = "Europe/Helsinki", a.EuropeIsleOfMan = "Europe/Isle_of_Man", a.EuropeIstanbul = "Europe/Istanbul", a.EuropeJersey = "Europe/Jersey", a.EuropeKaliningrad = "Europe/Kaliningrad", a.EuropeKiev = "Europe/Kiev", a.EuropeKirov = "Europe/Kirov", a.EuropeLisbon = "Europe/Lisbon", a.EuropeLjubljana = "Europe/Ljubljana", a.EuropeLondon = "Europe/London", a.EuropeLuxembourg = "Europe/Luxembourg", a.EuropeMadrid = "Europe/Madrid", a.EuropeMalta = "Europe/Malta", a.EuropeMariehamn = "Europe/Mariehamn", a.EuropeMinsk = "Europe/Minsk", a.EuropeMonaco = "Europe/Monaco", a.EuropeMoscow = "Europe/Moscow", a.EuropeOslo = "Europe/Oslo", a.EuropeParis = "Europe/Paris", a.EuropePodgorica = "Europe/Podgorica", a.EuropePrague = "Europe/Prague", a.EuropeRiga = "Europe/Riga", a.EuropeRome = "Europe/Rome", a.EuropeSamara = "Europe/Samara", a.EuropeSanMarino = "Europe/San_Marino", a.EuropeSarajevo = "Europe/Sarajevo", a.EuropeSimferopol = "Europe/Simferopol", a.EuropeSkopje = "Europe/Skopje", a.EuropeSofia = "Europe/Sofia", a.EuropeStockholm = "Europe/Stockholm", a.EuropeTallinn = "Europe/Tallinn", a.EuropeTirane = "Europe/Tirane", a.EuropeUzhgorod = "Europe/Uzhgorod", a.EuropeVaduz = "Europe/Vaduz", a.EuropeVatican = "Europe/Vatican", a.EuropeVienna = "Europe/Vienna", a.EuropeVilnius = "Europe/Vilnius", a.EuropeVolgograd = "Europe/Volgograd", a.EuropeWarsaw = "Europe/Warsaw", a.EuropeZagreb = "Europe/Zagreb", a.EuropeZaporozhye = "Europe/Zaporozhye", a.EuropeZurich = "Europe/Zurich", a.GMT = "GMT", a.IndianAntananarivo = "Indian/Antananarivo", a.IndianChagos = "Indian/Chagos", a.IndianChristmas = "Indian/Christmas", a.IndianCocos = "Indian/Cocos", a.IndianComoro = "Indian/Comoro", a.IndianKerguelen = "Indian/Kerguelen", a.IndianMahe = "Indian/Mahe", a.IndianMaldives = "Indian/Maldives", a.IndianMauritius = "Indian/Mauritius", a.IndianMayotte = "Indian/Mayotte", a.IndianReunion = "Indian/Reunion", a.PacificApia = "Pacific/Apia", a.PacificAuckland = "Pacific/Auckland", a.PacificBougainville = "Pacific/Bougainville", a.PacificChatham = "Pacific/Chatham", a.PacificChuuk = "Pacific/Chuuk", a.PacificEaster = "Pacific/Easter", a.PacificEfate = "Pacific/Efate", a.PacificEnderbury = "Pacific/Enderbury", a.PacificFakaofo = "Pacific/Fakaofo", a.PacificFiji = "Pacific/Fiji", a.PacificFunafuti = "Pacific/Funafuti", a.PacificGalapagos = "Pacific/Galapagos", a.PacificGambier = "Pacific/Gambier", a.PacificGuadalcanal = "Pacific/Guadalcanal", a.PacificGuam = "Pacific/Guam", a.PacificHonolulu = "Pacific/Honolulu", a.PacificJohnston = "Pacific/Johnston", a.PacificKiritimati = "Pacific/Kiritimati", a.PacificKosrae = "Pacific/Kosrae", a.PacificKwajalein = "Pacific/Kwajalein", a.PacificMajuro = "Pacific/Majuro", a.PacificMarquesas = "Pacific/Marquesas", a.PacificMidway = "Pacific/Midway", a.PacificNauru = "Pacific/Nauru", a.PacificNiue = "Pacific/Niue", a.PacificNorfolk = "Pacific/Norfolk", a.PacificNoumea = "Pacific/Noumea", a.PacificPagoPago = "Pacific/Pago_Pago", a.PacificPalau = "Pacific/Palau", a.PacificPitcairn = "Pacific/Pitcairn", a.PacificPohnpei = "Pacific/Pohnpei", a.PacificPonape = "Pacific/Ponape", a.PacificPortMoresby = "Pacific/Port_Moresby", a.PacificRarotonga = "Pacific/Rarotonga", a.PacificSaipan = "Pacific/Saipan", a.PacificSamoa = "Pacific/Samoa", a.PacificTahiti = "Pacific/Tahiti", a.PacificTarawa = "Pacific/Tarawa", a.PacificTongatapu = "Pacific/Tongatapu", a.PacificTruk = "Pacific/Truk", a.PacificWake = "Pacific/Wake", a.PacificWallis = "Pacific/Wallis", a.PacificYap = "Pacific/Yap", a))(L3 || {});
var M3 = ((S3) => (S3.UTC_MINUS_12 = "UTC-12", S3.UTC_MINUS_11_30 = "UTC-11:30", S3.UTC_MINUS_11 = "UTC-11", S3.UTC_MINUS_10_30 = "UTC-10:30", S3.UTC_MINUS_10 = "UTC-10", S3.UTC_MINUS_9_30 = "UTC-9:30", S3.UTC_MINUS_9 = "UTC-09", S3.UTC_MINUS_8_45 = "UTC-8:45", S3.UTC_MINUS_8 = "UTC-08", S3.UTC_MINUS_7 = "UTC-07", S3.UTC_MINUS_6_30 = "UTC-6:30", S3.UTC_MINUS_6 = "UTC-06", S3.UTC_MINUS_5_45 = "UTC-5:45", S3.UTC_MINUS_5_30 = "UTC-5:30", S3.UTC_MINUS_5 = "UTC-05", S3.UTC_MINUS_4_30 = "UTC-4:30", S3.UTC_MINUS_4 = "UTC-04", S3.UTC_MINUS_3_30 = "UTC-3:30", S3.UTC_MINUS_3 = "UTC-03", S3.UTC_MINUS_2_30 = "UTC-2:30", S3.UTC_MINUS_2 = "UTC-02", S3.UTC_MINUS_1 = "UTC-01", S3.UTC_0 = "UTC+00", S3.UTC_PLUS_1 = "UTC+01", S3.UTC_PLUS_2 = "UTC+02", S3.UTC_PLUS_3 = "UTC+03", S3.UTC_PLUS_3_30 = "UTC+3:30", S3.UTC_PLUS_4 = "UTC+04", S3.UTC_PLUS_4_30 = "UTC+4:30", S3.UTC_PLUS_5 = "UTC+05", S3.UTC_PLUS_5_30 = "UTC+5:30", S3.UTC_PLUS_5_45 = "UTC+5:45", S3.UTC_PLUS_6 = "UTC+06", S3.UTC_PLUS_6_30 = "UTC+6:30", S3.UTC_PLUS_7 = "UTC+07", S3.UTC_PLUS_8 = "UTC+08", S3.UTC_PLUS_8_45 = "UTC+8:45", S3.UTC_PLUS_9 = "UTC+09", S3.UTC_PLUS_9_30 = "UTC+9:30", S3.UTC_PLUS_10 = "UTC+10", S3.UTC_PLUS_10_30 = "UTC+10:30", S3.UTC_PLUS_11 = "UTC+11", S3.UTC_PLUS_11_30 = "UTC+11:30", S3.UTC_PLUS_12 = "UTC+12", S3.UTC_PLUS_12_45 = "UTC+12:45", S3.UTC_PLUS_13 = "UTC+13", S3.UTC_PLUS_13_45 = "UTC+13:45", S3.UTC_PLUS_14 = "UTC+14", S3))(M3 || {});
var B3 = ((r32) => (r32.AcreTime = "ACT", r32.AfghanistanTime = "AFT", r32.AIXCentralEuropeanTime = "DFT", r32.AlaskaDaylightTime = "AKDT", r32.AlaskaStandardTime = "AKST", r32.AlmaAtaTime = "ALMT", r32.AmazonSummerTime = "AMST", r32.AmazonTime = "AMT", r32.AnadyrTime = "ANAT", r32.AqtobeTime = "AQTT", r32.ArabiaStandardTime = "AST", r32.ArgentinaTime = "ART", r32.ArmeniaTime = "AMT", r32.ASEANCommonTime = "ASEAN", r32.AtlanticDaylightTime = "ADT", r32.AtlanticStandardTime = "AST", r32.AustralianCentralDaylightSavingTime = "ACDT", r32.AustralianCentralStandardTime = "ACST", r32.AustralianCentralWesternStandardTime = "ACWST", r32.AustralianEasternDaylightSavingTime = "AEDT", r32.AustralianEasternStandardTime = "AEST", r32.AustralianEasternTime = "AET", r32.AustralianWesternStandardTime = "AWST", r32.AzerbaijanTime = "AZT", r32.AzoresStandardTime = "AZOT", r32.AzoresSummerTime = "AZOST", r32.BakerIslandTime = "BIT", r32.BangladeshStandardTime = "BST", r32.BhutanTime = "BTT", r32.BoliviaTime = "BOT", r32.BougainvilleStandardTime = "BST", r32.BrasiliaSummerTime = "BRST", r32.BrasiliaTime = "BRT", r32.BritishIndianOceanTime = "BIOT", r32.BritishSummerTime = "BST", r32.BruneiTime = "BNT", r32.CapeVerdeTime = "CVT", r32.CentralAfricaTime = "CAT", r32.CentralDaylightTime = "CDT", r32.CentralEuropeanSummerTime = "CEST", r32.CentralEuropeanTime = "CET", r32.CentralIndonesiaTime = "WITA", r32.CentralStandardTime = "CST", r32.CentralTime = "CT", r32.CentralWesternStandardTime = "CWST", r32.ChamorroStandardTime = "CHST", r32.ChathamDaylightTime = "CHADT", r32.ChathamStandardTime = "CHAST", r32.ChileStandardTime = "CLT", r32.ChileSummerTime = "CLST", r32.ChinaStandardTime = "CST", r32.ChoibalsanStandardTime = "CHOT", r32.ChoibalsanSummerTime = "CHOST", r32.ChristmasIslandTime = "CXT", r32.ChuukTime = "CHUT", r32.ClipptertonIslandStandardTime = "CIST", r32.CocosIslandsTime = "CCT", r32.ColombiaSummerTime = "COST", r32.ColombiaTime = "COT", r32.CookIslandTime = "CKT", r32.CoordinatedUniversalTime = "UTC", r32.CubaDaylightTime = "CDT", r32.CubaStandardTime = "CST", r32.DavisTime = "DAVT", r32.DumontDUrvilleTime = "DDUT", r32.EastAfricaTime = "EAT", r32.EasterIslandStandardTime = "EAST", r32.EasterIslandSummerTime = "EASST", r32.EasternCaribbeanTime = "ECT", r32.EasternDaylightTime = "EDT", r32.EasternEuropeanSummerTime = "EEST", r32.EasternEuropeanTime = "EET", r32.EasternGreenlandSummerTime = "EGST", r32.EasternGreenlandTime = "EGT", r32.EasternIndonesianTime = "WIT", r32.EasternStandardTime = "EST", r32.EasternTime = "ET", r32.EcuadorTime = "ECT", r32.FalklandIslandsSummerTime = "FKST", r32.FalklandIslandsTime = "FKT", r32.FernandoDeNoronhaTime = "FNT", r32.FijiTime = "FJT", r32.FrenchGuianaTime = "GFT", r32.FrenchSouthernAndAntarcticTime = "TFT", r32.FurtherEasternEuropeanTime = "FET", r32.GalapagosTime = "GALT", r32.GambierIslandTime = "GIT", r32.GambierIslandsTime = "GAMT", r32.GeorgiaStandardTime = "GET", r32.GilbertIslandTime = "GILT", r32.GreenwichMeanTime = "GMT", r32.GulfStandardTime = "GST", r32.GuyanaTime = "GYT", r32.HawaiiAleutianDaylightTime = "HDT", r32.HawaiiAleutianStandardTime = "HST", r32.HeardAndMcDonaldIslandsTime = "HMT", r32.HeureAvanceeDEuropeCentraleTime = "HAEC", r32.HongKongTime = "HKT", r32.HovdSummerTime = "HOVST", r32.HovdTime = "HOVT", r32.IndianOceanTime = "IOT", r32.IndianStandardTime = "IST", r32.IndochinaTime = "ICT", r32.InternationalDayLineWestTime = "IDLW", r32.IranDaylightTime = "IRDT", r32.IranStandardTime = "IRST", r32.IrishStandardTime = "IST", r32.IrkutskSummerTime = "IRKST", r32.IrkutskTime = "IRKT", r32.IsraelDaylightTime = "IDT", r32.IsraelStandardTime = "IST", r32.JapanStandardTime = "JST", r32.KaliningradTime = "KALT", r32.KamchatkaTime = "KAMT", r32.KoreaStandardTime = "KST", r32.KosraeTime = "KOST", r32.KrasnoyarskSummerTime = "KRAST", r32.KrasnoyarskTime = "KRAT", r32.KyrgyzstanTime = "KGT", r32.LineIslandsTime = "LINT", r32.KazakhstanStandardTime = "KAST", r32.LordHoweStandardTime = "LHST", r32.LordHoweSummerTime = "LHST", r32.MacquarieIslandStationTime = "MIST", r32.MagadanTime = "MAGT", r32.MalaysiaStandardTime = "MST", r32.MalaysiaTime = "MYT", r32.MaldivesTime = "MVT", r32.MarquesasIslandsTime = "MART", r32.MarshallIslandsTime = "MHT", r32.MauritiusTime = "MUT", r32.MawsonStationTime = "MAWT", r32.MiddleEuropeanSummerTime = "MEDT", r32.MiddleEuropeanTime = "MET", r32.MoscowTime = "MSK", r32.MountainDaylightTime = "MDT", r32.MountainStandardTime = "MST", r32.MyanmarStandardTime = "MMT", r32.NepalTime = "NCT", r32.NauruTime = "NRT", r32.NewCaledoniaTime = "NCT", r32.NewZealandDaylightTime = "NZDT", r32.NewZealandStandardTime = "NZST", r32.NewfoundlandDaylightTime = "NDT", r32.NewfoundlandStandardTime = "NST", r32.NewfoundlandTime = "NT", r32.NiueTime = "NUT", r32.NorfolkIslandTime = "NFT", r32.NovosibirskTime = "NOVT", r32.OmskTime = "OMST", r32.OralTime = "ORAT", r32.PacificDaylightTime = "PDT", r32.PacificStandardTime = "PST", r32.PakistanStandardTime = "PKT", r32.PalauTime = "PWT", r32.PapuaNewGuineaTime = "PGT", r32.ParaguaySummerTime = "PYST", r32.ParaguayTime = "PYT", r32.PeruTime = "PET", r32.PhilippineStandardTime = "PHST", r32.PhilippineTime = "PHT", r32.PhoenixIslandTime = "PHOT", r32.PitcairnTime = "PST", r32.PohnpeiStandardTime = "PONT", r32.ReunionTime = "RET", r32.RotheraResearchStationTime = "ROTT", r32.SaintPierreAndMiquelonDaylightTime = "PMDT", r32.SaintPierreAndMiquelonStandardTime = "PMST", r32.SakhalinIslandTime = "SAKT", r32.SamaraTime = "SAMT", r32.SamoaDaylightTime = "SDT", r32.SamoaStandardTime = "SST", r32.SeychellesTime = "SCT", r32.ShowaStationTime = "SYOT", r32.SingaporeStandardTime = "SST", r32.SingaporeTime = "SGT", r32.SolomonIslandsTime = "SBT", r32.SouthAfricanStandardTime = "SAST", r32.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", r32.SrednekolymskTime = "SRET", r32.SriLankaStandardTime = "SLST", r32.SurinameTime = "SRT", r32.TahitiTime = "TAHT", r32.TajikistanTime = "TJT", r32.ThailandStandardTime = "THA", r32.TimorLesteTime = "TLT", r32.TokelauTime = "TKT", r32.TongaTime = "TOT", r32.TurkeyTime = "TRT", r32.TurkmenistanTime = "TMT", r32.TuvaluTime = "TVT", r32.UlaanbaatarStandardTime = "ULAT", r32.UlaanbaatarSummerTime = "ULAST", r32.UruguayStandardTime = "UYT", r32.UruguaySummerTime = "UYST", r32.UzbekistanTime = "UZT", r32.VanuatuTime = "VUT", r32.VenezuelaStandardTime = "VET", r32.VladivostokTime = "VLAT", r32.VolgogradTime = "VOLT", r32.VostokStationTime = "VOST", r32.WakeIslandTime = "WAKT", r32.WestAfricaSummerTime = "WAST", r32.WestAfricaTime = "WAT", r32.WestGreenlandSummerTime = "WGST", r32.WestGreenlandTime = "WGT", r32.WestKazakhstanTime = "WKT", r32.WesternEuropeanSummerTime = "WEDT", r32.WesternEuropeanTime = "WET", r32.WesternIndonesianTime = "WIT", r32.WesternStandardTime = "WST", r32.YakutskTime = "YAKT", r32.YekaterinburgTime = "YEKT", r32))(B3 || {});
var K3 = ((_3) => (_3.Africa = "Africa", _3.Americas = "Americas", _3.Asia = "Asia", _3.Europe = "Europe", _3.Oceania = "Oceania", _3.Polar = "Polar", _3))(K3 || {});
var w3 = ((c3) => (c3.CentralAmerica = "Central America", c3.EasternAsia = "Eastern Asia", c3.EasternEurope = "Eastern Europe", c3.EasternAfrica = "Eastern Africa", c3.MiddleAfrica = "Middle Africa", c3.MiddleEast = "Middle East", c3.NorthernAfrica = "Northern Africa", c3.NorthernAmerica = "Northern America", c3.NorthernEurope = "Northern Europe", c3.Polynesia = "Polynesia", c3.SouthAmerica = "South America", c3.SouthernAfrica = "Southern Africa", c3.SouthernAsia = "Southern Asia", c3.SouthernEurope = "Southern Europe", c3.WesternAfrica = "Western Africa", c3.WesternAsia = "Western Asia", c3.WesternEurope = "Western Europe", c3.WesternAustralia = "Western Australia", c3))(w3 || {});
var we2 = { Afghanistan: { i18n: { calling_codes: [93], currencies: ["AFN"], languages: ["ps", "prs", "tk", "uz"], tz: { offsets: ["UTC+4:30"], regions: ["Asia/Kabul"], timezones: ["AFT"] } }, id: "AF", info: { flag: { emoji: "\u{1F1E6}\u{1F1EB}", emoji_unicode: "U+1F1E6 U+1F1EB", svg: "https://www.countryflags.io/af/flat/64.svg" }, tld: [".af"] }, iso: { alpha2: "AF", alpha3: "AFG", numeric: "004" }, name: { alt_spellings: ["AF", "Af\u0121\u0101nist\u0101n"], demonym: "Afghan", native: { endonym: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646" }, official: "Islamic Republic of Afghanistan", short: "Afghanistan", translations: { ["af"]: "Afghanistan", ["sq"]: "Shqip\xEBri", ["am"]: "\u12A0\u134D\u130B\u1295", ["ar"]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["eu"]: "Afganist\xE1n", ["be"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["bn"]: "\u0986\u09AB\u0997\u09BE\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8", ["ber"]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F63\u0F7A\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F46\u0F0D", ["bs"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["br"]: "Afganistan", ["bg"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["my"]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", ["ca"]: "Afganistan", ["zh"]: "\u963F\u5BCC\u6C57", ["hr"]: "Afganistan", ["cs"]: "Afganistan", ["da"]: "Afghanistan", ["nl"]: "Afghanistan", ["en"]: "Afghanistan", ["eo"]: "Afganistan", ["et"]: "Afganistan", ["fi"]: "Afghanistan", ["fr"]: "Afghanistan", ["fy"]: "Afghanistan", ["gl"]: "Afganist\xE1n", ["ka"]: "\u10D0\u10D5\u10E6\u10D0\u10DC\u10D4\u10D7\u10D8", ["de"]: "Afghanistan", ["kl"]: "Afghanistan", ["el"]: "\u0391\u03C6\u03B3\u03B1\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD", ["gu"]: "\u0A85\u0AAB\u0A97\u0ABE\u0AA8\u0ABF\u0AB8\u0ACD\u0AA4\u0ABE\u0AA8", ["ht"]: "Afghanistan", ["ha"]: "Afghanistan", ["he"]: "\u05D0\u05E4\u05D2\u05E0\u05D9\u05E1\u05D8\u05DF", ["hi"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["hu"]: "Afganistan", ["is"]: "Afghanistan", ["ig"]: "Afghanistan", ["id"]: "Afghanistan", ["ga"]: "Afghanistan", ["it"]: "Afghanistan", ["ja"]: "\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3", ["jv"]: "Afghanistan", ["kn"]: "\u0C85\u0CAB\u0C97\u0CBE\u0CA8\u0CBF\u0CB8\u0CCD\u0CA4\u0CBE\u0CA8", ["kk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["km"]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17B7\u1780", ["ko"]: "\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4", ["ku"]: "Afghanistan", ["ky"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["lo"]: "\u0EAD\u0EB2\u0E9F\u0EB2\u0EA5\u0EBD\u0E99", ["la"]: "Afghanistan", ["lv"]: "Afghanistan", ["lt"]: "Afganistanas", ["lb"]: "Afghanistan", ["mk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["mg"]: "Afghanistan", ["ms"]: "Afghanistan", ["ml"]: "\u0D05\u0D2B\u0D17\u0D3E\u0D28\u0D3F\u0D38\u0D4D\u0D24\u0D3E\u0D28", ["mt"]: "Afghanistan", ["mi"]: "Afghanistan", ["mr"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["mn"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ne"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["nb"]: "Afghanistan", ["ps"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["fa"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["pl"]: "Afganistan", ["pt"]: "Afghanistan", ["pa"]: "Afghanistan", ["ro"]: "Afghanistan", ["pl"]: "Afganistan", ["ru"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["sm"]: "Afghanistan", ["sa"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["gd"]: "Afghanistan", ["sr"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["st"]: "Afghanistan", ["sn"]: "Afghanistan", ["sd"]: "Afghanistan", ["si"]: "\u0D86\u0D9C\u0DCA\u200D\u0DBB\u0DDC\u0D9A\u0DCA\u0D9A\u0DD2\u0DBA\u0DCF\u0DC0", ["sk"]: "Afganistan", ["sl"]: "Afganistan", ["so"]: "Afghanistan", ["es"]: "Afganist\xE1n", ["su"]: "Afghanistan", ["sw"]: "Afghanistan", ["sv"]: "Afghanistan", ["tl"]: "Afghanistan", ["tg"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["tt"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ta"]: "\u0B86\u0BAA\u0BCD\u0BAA\u0B95\u0BBE\u0BA9\u0BBF\u0BB8\u0BCD\u0BA4\u0BBE\u0BA9\u0BCD", ["te"]: "\u0C06\u0C2B\u0C4D\u0C18\u0C28\u0C3F\u0C38\u0C4D\u0C24\u0C3E\u0C28\u0C4D", ["th"]: "\u0E2D\u0E31\u0E1F\u0E01\u0E32\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F55\u0F0B\u0F42\u0F7A\u0F0B\u0F53\u0F72\u0F66\u0F72\u0F0B\u0F4F\u0F7A\u0F53\u0F66\u0F72\u0F0D", ["tr"]: "Afganistan", ["uk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ur"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["uz"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["vi"]: "Afghanistan", ["cy"]: "Afghanistan", ["xh"]: "Afghanistan", ["yi"]: "Afghanistan", ["yo"]: "Afghanistan", ["zu"]: "Afghanistan" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Kabul", total: 341e5 } }, geography: { area: 652230, region: "Asia", sub_region: "Southern Asia" }, government: { capital: "Kabul", type: "Islamic Emirate" } } }, Albania: { i18n: { calling_codes: [355], currencies: ["ALL"], languages: ["sq", "el", "tr"], tz: { offsets: ["UTC+01"], regions: ["Europe/Brussels"], timezones: ["CET"] } }, id: "AL", info: { flag: { emoji: "\u{1F1E6}\u{1F1F1}", emoji_unicode: "U+1F1E6 U+1F1F1", svg: "https://www.countryflags.io/al/flat/64.svg" }, tld: [".al"] }, iso: { alpha2: "AL", alpha3: "ALB", numeric: "008" }, name: { alt_spellings: ["AL", "Shqip\xEBri", "Shqip\xEBria", "Shqipnia"], demonym: "Albanian", native: { endonym: "Shqip\xEBri" }, official: "Republic of Albania", short: "Albania", translations: { ["af"]: "Albania", ["sq"]: "Albania", ["am"]: "\u12A0\u120D\u1263\u1295\u12EB", ["ar"]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["eu"]: "Albania", ["be"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["bn"]: "\u0986\u09B2\u09AC\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE", ["ber"]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B", ["bs"]: "Albanija", ["br"]: "Albania", ["bg"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["my"]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", ["ca"]: "Alb\xE0nia", ["zh"]: "\u963F\u5C14\u5DF4\u5C3C\u4E9A", ["hr"]: "Albanija", ["cs"]: "Alb\xE1nie", ["da"]: "Albanien", ["nl"]: "Albani\xEB", ["en"]: "Albania", ["eo"]: "Albanio", ["et"]: "Albaania", ["fi"]: "Albania", ["fr"]: "Albanie", ["fy"]: "Albani\xEB", ["gl"]: "Alb\xE2nia", ["ka"]: "\u10D0\u10DA\u10D1\u10D0\u10DC\u10D8\u10D0", ["de"]: "Albanien", ["kl"]: "Albania", ["el"]: "\u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1", ["gu"]: "\u0A85\u0AB2\u0AAC\u0AA8\u0ABF\u0AAF\u0ABE", ["ht"]: "Albanais", ["ha"]: "Albania", ["he"]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05D4", ["hi"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["hu"]: "Alb\xE1nia", ["is"]: "Alb\xFAnir", ["ig"]: "Albania", ["id"]: "Albania", ["ga"]: "Alb\xE1in", ["it"]: "Albania", ["ja"]: "\u30A2\u30EB\u30D0\u30CB\u30A2", ["jv"]: "Albania", ["kn"]: "\u0C85\u0CB2\u0CCD\u0CAC\u0CBE\u0CA8\u0CBF\u0CAF\u0CBE", ["kk"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["km"]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17C1\u179F\u17CA\u17B8", ["ko"]: "\uC54C\uBC14\uB2C8\uC544", ["ku"]: "\u0622\u0644\u0628\u0627\u0646\u06CC\u0627", ["ky"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["lo"]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E99\u0EB5", ["la"]: "Albania", ["lv"]: "Alb\u0101nija", ["lt"]: "Albanija", ["lb"]: "Albani\xEB", ["mk"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", ["mg"]: "Albania", ["ms"]: "Albania", ["ml"]: "\u0D05\u0D32\u0D4D\u0D2C\u0D3E\u0D28\u0D3F\u0D2F\u0D3E", ["mt"]: "Albania", ["mi"]: "Albania", ["mr"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["mn"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["ne"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["nb"]: "Albania", ["ps"]: "\u0627\u0627\u0644\u0628\u0627\u0646\u06CC", ["fa"]: "\u0622\u0644\u0628\u0627\u0646\u06CC", ["pl"]: "Albania", ["pt"]: "Alb\xE2nia", ["pa"]: "\u0A05\u0A32\u0A2C\u0A28\u0A40\u0A06", ["ro"]: "Alb\u0103n", ["ru"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["sm"]: "Albania", ["sa"]: "Albani", ["gd"]: "Alb\xE0inia", ["sr"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", ["st"]: "Albania", ["sn"]: "Albania", ["sd"]: "Albania", ["si"]: "\u0D87\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", ["sk"]: "Alb\xE1nsko", ["sl"]: "Albanija", ["so"]: "Albania", ["es"]: "Albania", ["su"]: "Albania", ["sw"]: "Albania", ["sv"]: "Albanien", ["tl"]: "Albania", ["tg"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["ta"]: "\u0B85\u0BB2\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF\u0BBE", ["tt"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["te"]: "\u0C05\u0C32\u0C4D\u0C2C\u0C3E\u0C28\u0C3F\u0C2F\u0C3E", ["th"]: "\u0E2D\u0E31\u0E25\u0E41\u0E1A\u0E19\u0E34\u0E19\u0E35", ["bo"]: "\u0F68\u0F63\u0F0B\u0F56\u0F72\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F72", ["tr"]: "Albaniye", ["uk"]: "\u0410\u043B\u0431\u0430\u043D\u0456\u044F", ["ur"]: "\u0622\u0644\u0628\u0627\u0646\u06CC", ["uz"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["vi"]: "Albanie", ["cy"]: "Albania", ["xh"]: "Albania", ["yi"]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05E9", ["yo"]: "Albania", ["zu"]: "Albania" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Tirana", total: 2853e3 } }, geography: { area: 28748, region: "Europe", sub_region: "Southern Europe" }, government: { capital: "Tirana", type: "Republic" } } }, Algeria: { i18n: { calling_codes: [213], currencies: ["DZD"], languages: ["ar", "fr", "ber", "tmh"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Africa/Algiers"], timezones: ["CET"] } }, id: "DZ", info: { flag: { emoji: "\u{1F1E9}\u{1F1FF}", emoji_unicode: "U+1F1E9 U+1F1FF", svg: "https://www.countryflags.io/dz/flat/64.svg" }, tld: [".dz", ".\u062C\u0632\u0627\u0626\u0631"] }, iso: { alpha2: "DZ", alpha3: "DZA", numeric: "012" }, name: { alt_spellings: ["DZ", "Dzayer", "Alg\xE9rie"], demonym: "Algerian", native: { endonym: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631" }, official: "People's Democratic Republic of Algeria", short: "Algeria", translations: { ["af"]: "Algerije", ["sq"]: "Algeria", ["am"]: "\u12A0\u120D\u1300\u122D\u1235", ["ar"]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", ["hy"]: "\u0531\u056C\u0563\u0578\u0580\u056B\u0561", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043B\u0436\u0438\u0440", ["eu"]: "Algeria", ["be"]: "\u0410\u043B\u0436\u0438\u0440", ["bn"]: "\u0986\u09B2\u099C\u09C7\u09B0", ["ber"]: "\u062C\u0632\u0627\u0626\u0631", ["dz"]: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41", ["bs"]: "Al\u017Eir", ["br"]: "Algeria", ["bg"]: "\u0410\u043B\u0436\u0438\u0440", ["my"]: "\u1021\u102C\u101B\u1015\u103A", ["ca"]: "Alg\xE8ria", ["zh"]: "\u963F\u5C14\u53CA\u5229\u4E9A", ["hr"]: "Al\u017Eir", ["cs"]: "Al\u017E\xEDrsko", ["da"]: "Algeriet", ["nl"]: "Algerije", ["en"]: "Algeria", ["eo"]: "Al\u011Derio", ["et"]: "Al\u017Eira", ["fi"]: "Algeria", ["fr"]: "Alg\xE9rie", ["fy"]: "Algeri\xEB", ["gl"]: "Alxeria", ["ka"]: "\u10D0\u10DA\u10D2\u10D8\u10E3\u10E0\u10D8", ["de"]: "Algerien", ["kl"]: "Algeria", ["el"]: "\u0391\u03BB\u03B3\u03B5\u03C1\u03AF\u03B1", ["gu"]: "\u0A86\u0AB2\u0AC7\u0A97\u0AB0\u0ABF\u0AAF\u0ABE", ["ht"]: "Alg\xE9rie", ["ha"]: "Algeria", ["he"]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", ["hi"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["hu"]: "Alg\xE1r", ["is"]: "Alg\xFAra", ["ig"]: "Algeria", ["id"]: "Aljir", ["ga"]: "Alg\xE9rie", ["it"]: "Algeria", ["ja"]: "\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2", ["jv"]: "Aljir", ["kn"]: "\u0C86\u0CB2\u0CCD\u0C97\u0CC7\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", ["kk"]: "\u0410\u043B\u0436\u0438\u0440", ["km"]: "\u17A2\u17B6\u179B\u17CB\u1794\u17B6\u1793\u17B8", ["ko"]: "\uC54C\uC81C\uB9AC", ["ku"]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u062C\u0632\u0627\u06CC\u0631", ["ky"]: "\u0410\u043B\u0436\u0438\u0440", ["lo"]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E88\u0EB5\u0E99", ["la"]: "Algeria", ["lv"]: "Al\u017E\u012Brija", ["lt"]: "Al\u017Eyras", ["lb"]: "Algeria", ["mk"]: "\u0410\u043B\u0436\u0438\u0440", ["mg"]: "Alg\xE9rie", ["ms"]: "Aljir", ["ml"]: "\u0D06\u0D32\u0D02\u0D17\u0D47\u0D30\u0D3F\u0D2F\u0D7B", ["mt"]: "Alg\xE9rie", ["mi"]: "Algeria", ["mr"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["mn"]: "\u0410\u043B\u0436\u0438\u0440", ["ne"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["nb"]: "Algeria", ["ps"]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", ["fa"]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0639\u0631\u0628", ["pl"]: "Algieria", ["pt"]: "Alg\xE9ria", ["pa"]: "\u0A06\u0A32\u0A47\u0A17\u0A40\u0A06", ["ro"]: "Algeria", ["ru"]: "\u0410\u043B\u0436\u0438\u0440", ["sm"]: "Algeria", ["sa"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["gd"]: "Algeria", ["sr"]: "\u0410\u043B\u0436\u0438\u0440", ["st"]: "Algeria", ["sn"]: "Algeria", ["sd"]: "Algeria", ["si"]: "\u0D86\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", ["sk"]: "Al\u017E\xEDrsko", ["sl"]: "Al\u017Eir", ["so"]: "Algeria", ["es"]: "Algeria", ["su"]: "Aljir", ["sw"]: "Aljir", ["sv"]: "Algeriet", ["tl"]: "Algeria", ["tg"]: "\u0410\u043B\u0436\u0438\u0440", ["ta"]: "\u0B86\u0BB2\u0BCD\u0B95\u0BC7\u0BB0\u0BBF\u0BAF\u0BBE", ["tt"]: "\u0410\u043B\u0436\u0438\u0440", ["te"]: "\u0C06\u0C32\u0C4D\u0C17\u0C47\u0C30\u0C3F\u0C2F\u0C3E", ["th"]: "\u0E2D\u0E32\u0E23\u0E32\u0E01\u0E2D\u0E19", ["bo"]: "\u0F68\u0F63\u0F9F\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F61\u0F72", ["tr"]: "Cezayir", ["uk"]: "\u0410\u043B\u0436\u0438\u0440", ["ur"]: "\u0622\u0644\u062C\u06CC\u0631", ["uz"]: "\u0410\u043B\u0436\u0438\u0440", ["vi"]: "\u1EA2\u0301\u1EA1\u1EA3\u1EAD\u1EB5", ["cy"]: "Algeria", ["xh"]: "Algeria", ["yi"]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", ["yo"]: "Algeria", ["zu"]: "Algeria" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Oran", total: 371e5 } }, geography: { area: 2381740, region: "Africa", sub_region: "Northern Africa" }, government: { capital: "Algiers", type: "Republic" } } }, AmericanSamoa: { i18n: { calling_codes: [1684], currencies: ["WST"], languages: ["en", "sm"], tz: { offsets: ["UTC-11"], regions: ["Pacific/Samoa"], timezones: ["SST"] } }, id: "AS", info: { flag: { emoji: "\u{1F1E6}\u{1F1F8}", emoji_unicode: "U+1F1E6 U+1F1F8", svg: "https://www.countryflags.io/as/flat/64.svg" }, tld: [".as"] }, iso: { alpha2: "AS", alpha3: "ASM", numeric: "016" }, name: { alt_spellings: ["AS", "Amerika S\u0101moa", "Amelika S\u0101moa", "S\u0101moa Amelika"], demonym: "American Samoan", native: { endonym: "American Samoa" }, official: "American Samoa", short: "American Samoa", translations: { ["af"]: "Amerikaans Samoa", ["sq"]: "Samoa Amerikane", ["am"]: "\u1233\u121E\u12A0\u122D", ["ar"]: "\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", ["hy"]: "\u054D\u0561\u0570\u0561\u0574\u0561\u056C\u056B\u0561", ["az"]: "Samoa Amerikana", ["ba"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0421\u0430\u043C\u043E\u0430", ["eu"]: "Samoa Amerikana", ["be"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", ["bn"]: "\u0986\u09AE\u09C7\u09B0\u09BF\u0995\u09BE\u09A8 \u09B8\u09BE\u09AE\u09CB\u09AF\u09BC\u09BE", ["ber"]: "\u062C\u0632\u0631 \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", ["dz"]: "\u0F68\u0F62\u0F92\u0FB1\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F58\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F51\u0F0B\u0F46\u0F7A\u0F53\u0F0B\u0F54\u0F7C\u0F0D", ["bs"]: "Ameri\u010Dka Samoa", ["br"]: "Samoa Amerikan", ["bg"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["my"]: "\u1021\u1019\u1039\u1038\u1019\u101B\u102D\u102F\u1018\u102C\u101E\u102C", ["ca"]: "Samoa Americana", ["zh"]: "\u7F8E\u5C5E\u8428\u6469\u4E9A", ["hr"]: "Ameri\u010Dka Samoa", ["cs"]: "Americk\xE1 Samoa", ["da"]: "Amerikansk Samoa", ["nl"]: "Amerikaans Samoa", ["en"]: "American Samoa", ["eo"]: "Samoa Amerika", ["et"]: "Ameerika Samoa", ["fi"]: "Amerikka Samoa", ["fr"]: "American Samoa", ["fy"]: "Amerikaans Samoa", ["gl"]: "Samoa Americana", ["ka"]: "\u10D0\u10DB\u10D4\u10E0\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D0\u10DB\u10DD\u10D0", ["de"]: "Amerikanisch-Samoa", ["kl"]: "Amerikaans Samoa", ["el"]: "\u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03B1\u03BD\u03B9\u03BA\u03AE \u03A3\u03B1\u03BC\u03CC\u03B1", ["gu"]: "\u0A86\u0AAE\u0AC7\u0AB0\u0ABF\u0A95\u0AA8 \u0AB8\u0ABE\u0AAE\u0ACB\u0AAF\u0ABE", ["ht"]: "Amerikaans Samoa", ["ha"]: "Amerikaans Samoa", ["he"]: "\u05D0\u05DE\u05E8\u05D9\u05E7\u05E0\u05D9\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D4", ["hi"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["hu"]: "Amerikai Szamoa", ["is"]: "Amerikai Szamoa", ["ig"]: "Ikina Amerika", ["id"]: "Samoa Amerika", ["ga"]: "Samoa Amerikana", ["it"]: "Samoa Americane", ["ja"]: "\u30A2\u30E1\u30EA\u30AB\u9818\u30B5\u30E2\u30A2", ["jv"]: "Samoa Amerika", ["kn"]: "\u0C85\u0CAE\u0CC7\u0CB0\u0CBF\u0C95\u0CA8\u0CCD \u0CB8\u0CAE\u0CCB\u0C86", ["kk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["km"]: "\u17A2\u17B6\u1798\u17C9\u17B6\u179A\u17B8\u179F\u17D2\u178F\u1784\u17CB", ["ko"]: "\uC544\uBA54\uB9AC\uCE74 \uC0AC\uBAA8\uC544", ["ku"]: "Amerikaans Samoa", ["ky"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["lo"]: "\u0EAD\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94", ["la"]: "Samoa Amerikana", ["lv"]: "Amerikas Samoa", ["lt"]: "Amerikos Samoa", ["lb"]: "Amerikaans Samoa", ["mk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["mg"]: "Samoa Amerika", ["ms"]: "Amerika Samo", ["ml"]: "\u0D05\u0D2E\u0D47\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D \u0D38\u0D2E\u0D4B\u0D06", ["mt"]: "Samoa Amerika", ["mi"]: "Samoa Amerika", ["mr"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["mn"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["ne"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["nb"]: "Amerikansk Samoa", ["ps"]: "\u0627\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", ["fa"]: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", ["pl"]: "Samoa Ameryka\u0144skie", ["pt"]: "Samoa Americana", ["pa"]: "\u0A05\u0A2E\u0A30\u0A40\u0A15\u0A40 \u0A38\u0A3E\u0A2E\u0A4B\u0A06", ["ro"]: "Samoa americane", ["ru"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", ["sm"]: "Samoa Amerika", ["sa"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["gd"]: "Amerikaans Samoa", ["sr"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["st"]: "Amerikaans Samoa", ["sn"]: "Amerikaans Samoa", ["sd"]: "Amerikaans Samoa", ["si"]: "\u0D86\u0DBB\u0DCA\u0DA2\u0DD2\u0DB1\u0DCF\u0DB1\u0DD4 \u0DC3\u0DD0\u0DB8\u0DD0\u0DBD\u0DCA\u0DC0", ["sk"]: "Amerikaans Samoa", ["sl"]: "Amerikaans Samoa", ["so"]: "Amerikaans Samoa", ["es"]: "Samoa Americana", ["su"]: "Amerikaans Samoa", ["sw"]: "Amerikaans Samoa", ["sv"]: "Amerikansk Samoa", ["tl"]: "Amerikaans Samoa", ["tg"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["ta"]: "\u0B85\u0BAE\u0BC6\u0BB0\u0BBF\u0B95\u0BCD \u0B9A\u0BAE\u0BCB\u0BB5\u0BBE", ["tt"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["te"]: "\u0C05\u0C2E\u0C46\u0C30\u0C3F\u0C15\u0C4D \u0C38\u0C2E\u0C4B\u0C35\u0C3E", ["th"]: "\u0E2A\u0E2B\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32", ["bo"]: "\u0F68\u0F7A\u0F0B\u0F62\u0F72\u0F0B\u0F40\u0F0B\u0F68\u0F7A\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F40", ["tr"]: "Amerikan Samoas\u0131", ["uk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["ur"]: "\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0627", ["uz"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["vi"]: "Amerikaans Samoa", ["cy"]: "Amerikaans Samoa", ["xh"]: "Amerikaans Samoa", ["yi"]: "Amerikaans Samoa", ["yo"]: "Amerikaans Samoa", ["zu"]: "Amerikaans Samoa" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Pago Pago", total: 558e3 } }, geography: { area: 199, region: "Oceania", sub_region: "Polynesia" }, government: { capital: "Pago Pago", type: "Nonmetropolitan Territory of the US" } } }, Andorra: { i18n: { calling_codes: [376], currencies: ["EUR"], languages: ["ca", "es"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Europe/Andorra"], timezones: ["CET"] } }, id: "AD", info: { flag: { emoji: "\u{1F1E6}\u{1F1F4}", emoji_unicode: "U+1F1E6 U+1F1F4", svg: "https://www.countryflags.io/ad/flat/64.svg" }, tld: [".ad"] }, iso: { alpha2: "AD", alpha3: "AND", numeric: "020" }, name: { alt_spellings: ["AD", "Principality of Andorra", "Principat d'Andorra"], demonym: "Andorran", native: { endonym: "Andorra" }, official: "Principality of Andorra", short: "Andorra", translations: { ["af"]: "Andorra", ["sq"]: "Andorra", ["am"]: "\u12A0\u1295\u12F6\u122B", ["ar"]: "\u0623\u0646\u062F\u0648\u0631\u0627", ["hy"]: "\u0540\u0561\u0576\u0564\u0561\u0580\u0561\u057E\u0561\u0575\u0584", ["az"]: "Andorra", ["ba"]: "\u0410\u043D\u0434\u043E\u0440\u0430", ["eu"]: "Andorra", ["be"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["bn"]: "\u0985\u09A8\u09CD\u09A1\u09CB\u09B0\u09BE", ["ber"]: "\u0623\u0646\u062F\u0648\u0631\u0627", ["dz"]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", ["bs"]: "Andora", ["br"]: "Andorra", ["bg"]: "\u0410\u043D\u0434\u043E\u0440\u0430", ["my"]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102D\u102F\u1038", ["ca"]: "Andorra", ["zh"]: "\u5B89\u9053\u5C14", ["hr"]: "Andora", ["cs"]: "Andorra", ["da"]: "Andorra", ["nl"]: "Andorra", ["en"]: "Andorra", ["eo"]: "Andora", ["et"]: "Andorra", ["fi"]: "Andorra", ["fr"]: "Andorra", ["fy"]: "Andorra", ["gl"]: "Andorra", ["ka"]: "\u12A0\u1295\u12F6\u122B", ["de"]: "Andorra", ["el"]: "\u0391\u03BD\u03B4\u03CC\u03C1\u03B1", ["he"]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", ["hi"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["hu"]: "Andorra", ["is"]: "Andorra", ["ig"]: "Andorra", ["id"]: "Andorra", ["ga"]: "Andorra", ["it"]: "Andorra", ["ja"]: "\u30A2\u30F3\u30C9\u30E9", ["jv"]: "Andorra", ["kn"]: "\u0C85\u0C82\u0CA1\u0CCB\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", ["kk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["km"]: "\u17A2\u1784\u17CB\u178A\u17B6\u179A\u17B6", ["ko"]: "\uC548\uB3C4\uB77C", ["ku"]: "Andorra", ["ky"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["lo"]: "\u0EAD\u0EB1\u0E99\u0EC2\u0E94\u0EA3\u0EB2", ["la"]: "Andorra", ["lv"]: "Andora", ["lt"]: "Andora", ["lb"]: "Andorra", ["mk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["mg"]: "Andorra", ["ms"]: "Andorra", ["ml"]: "\u0D05\u0D02\u0D21\u0D4B\u0D30\u0D3F\u0D2F\u0D28\u0D4D", ["mt"]: "Andorra", ["mi"]: "Andorra", ["mr"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["mn"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ne"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["nb"]: "Andorra", ["ps"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["fa"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["pl"]: "Andora", ["pt"]: "Andorra", ["pa"]: "\u0A05\u0A70\u0A21\u0A4B\u0A30\u0A3E", ["ro"]: "Andorra", ["ru"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["sm"]: "Andorra", ["sa"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["gd"]: "Andorra", ["sr"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["st"]: "Andorra", ["sn"]: "Andorra", ["sd"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["si"]: "\u0D86\u0DB1\u0DCA\u0DAF\u0DDA", ["sk"]: "Andorra", ["sl"]: "Andora", ["so"]: "Andorra", ["es"]: "Andorra", ["su"]: "Andorra", ["sw"]: "Andorra", ["sv"]: "Andorra", ["tl"]: "Andorra", ["tg"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ta"]: "\u0B85\u0BA9\u0BCB\u0BB0\u0BCD\u0B9F\u0BBE", ["tt"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["te"]: "\u0C05\u0C02\u0C21\u0C4B\u0C30\u0C4D\u0C30\u0C3E", ["th"]: "\u0E2D\u0E31\u0E19\u0E14\u0E2D\u0E23\u0E4C\u0E23\u0E32", ["bo"]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", ["tr"]: "Andora", ["uk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ur"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["uz"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["vi"]: "Andorra", ["cy"]: "Andorra", ["xh"]: "Andorra", ["yi"]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", ["yo"]: "Andorra", ["zu"]: "Andorra" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Andorra la Vella", total: 78e3 } }, geography: { area: 468, region: "Europe", sub_region: "Southern Europe" }, government: { capital: "Andorra la Vella", type: "Constitutional Monarchy" } } }, Angola: { i18n: { calling_codes: [244], currencies: ["AOA"], languages: ["pt", "es", "fr", "it", "de", "en"], tz: { offsets: ["UTC+00", "UTC+01", "UTC+02"], regions: ["Africa/Luanda"], timezones: ["WAT"] } }, id: "AO", info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ao/flat/64.svg" }, tld: [".ao"] }, iso: { alpha2: "AO", alpha3: "AGO", numeric: "024" }, name: { alt_spellings: ["AO", "Rep\xFAblica de Angola", "\u0281\u025Bpublika de an"], demonym: "Angolan", native: { endonym: "Angola" }, official: "Republic of Angola", short: "Angola", translations: { ["af"]: "Angola", ["sq"]: "Ang\xF2la", ["am"]: "\u12A0\u1295\u130E\u120A\u12EB", ["ar"]: "\u0623\u0646\u063A\u0648\u0644\u0627", ["hy"]: "\u0540\u0561\u0576\u0563\u0561\u056C\u0561\u056F\u0561", ["az"]: "Ang\u0259l", ["ba"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["eu"]: "Angola", ["be"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["bn"]: "\u0985\u0999\u09CD\u0997\u09B2\u09BE", ["ber"]: "Angola", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42", ["bs"]: "Angola", ["br"]: "Angola", ["bg"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["my"]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", ["ca"]: "Angola", ["zh"]: "\u5B89\u54E5\u62C9", ["hr"]: "Angola", ["cs"]: "Angola", ["da"]: "Angola", ["nl"]: "Angola", ["en"]: "Angola", ["eo"]: "Angolo", ["et"]: "Angola", ["fi"]: "Angola", ["fr"]: "Angola", ["fy"]: "Angola", ["gl"]: "Angola", ["ka"]: "\u10D0\u10DC\u10D2\u10DD\u10DA\u10D0", ["de"]: "Angola", ["kl"]: "Angola", ["el"]: "\u0391\u03B3\u03BA\u03CC\u03BB\u03B1", ["gu"]: "\u0A85\u0A82\u0A97\u0ACB\u0AB2\u0ABE", ["ht"]: "Angola", ["ha"]: "Angola", ["he"]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", ["hi"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["hu"]: "Angola", ["is"]: "Angola", ["ig"]: "Angola", ["id"]: "Angola", ["ga"]: "Angola", ["it"]: "Angola", ["ja"]: "\u30A2\u30F3\u30B4\u30E9", ["jv"]: "Anggol", ["kn"]: "\u0C85\u0C82\u0C97\u0CCB\u0CB2\u0CBE", ["kk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["km"]: "\u17A2\u1784\u17CB\u1780\u17B6\u179B\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F", ["ko"]: "\uC559\uACE8\uB77C", ["ku"]: "Angola", ["ky"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EB2\u0E94\u0EB2", ["la"]: "Angola", ["lv"]: "Angola", ["lt"]: "Angola", ["lb"]: "Angola", ["mk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["mg"]: "Angola", ["ms"]: "Angola", ["ml"]: "\u0D05\u0D02\u0D17\u0D4B\u0D33\u0D3E", ["mt"]: "Angola", ["mi"]: "Angola", ["mr"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["mn"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ne"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["nb"]: "Angola", ["ps"]: "\u0627\u0646\u06AB\u0648\u0644\u0627", ["fa"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["pl"]: "Angola", ["pt"]: "Angola", ["pa"]: "\u0A05\u0A19\u0A4D\u0A17\u0A4B\u0A32\u0A3E", ["ro"]: "Angole", ["ru"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["sm"]: "Angola", ["sa"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["gd"]: "Angola", ["sr"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["st"]: "Angola", ["sn"]: "Angola", ["sd"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["si"]: "\u0D86\u0D9C\u0DBD\u0DD2\u0DBA\u0DCF\u0DC0", ["sk"]: "Angola", ["sl"]: "Angola", ["so"]: "Angola", ["es"]: "Angola", ["su"]: "Angola", ["sw"]: "Angola", ["sv"]: "Angola", ["tl"]: "Angola", ["tg"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ta"]: "\u0B85\u0B99\u0BCD\u0B95\u0BCB\u0BB2\u0BBE", ["tt"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["te"]: "\u0C05\u0C02\u0C17\u0C4B\u0C32\u0C3E", ["th"]: "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E19\u0E32\u0E21\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", ["tr"]: "Angola", ["uk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ur"]: "\u0627\u0646\u06AF\u0648\u0644\u0627", ["uz"]: "Angola", ["vi"]: "Angola", ["xh"]: "Angola", ["cy"]: "Angola", ["yi"]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", ["yo"]: "Angola", ["zu"]: "Angola" } } }, Anguilla: { i18n: { calling_codes: [1264], currencies: ["XCD", "XCD", "EUR", "USD", "GBP"], languages: ["en", "es"], tz: { offsets: ["UTC-04"], regions: ["America/Anguilla"], timezones: ["AST"] } }, id: "AI", info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ai/flat/64.svg" }, tld: [".ai"] }, iso: { alpha2: "AI", alpha3: "AIA", numeric: "660" }, name: { alt_spellings: ["AI"], demonym: "Anguillian", native: { endonym: "Anguilla" }, official: "Anguilla", short: "Anguilla", translations: { ["af"]: "Anguilla", ["sq"]: "Anguilla", ["am"]: "\u12A0\u1295\u1309\u120B", ["ar"]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", ["hy"]: "\u0531\u0576\u0563\u056B\u056C\u0561", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["eu"]: "Angila", ["be"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["bn"]: "\u0985\u0999\u09CD\u0997\u09C0\u09B2\u09BE", ["ber"]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", ["dz"]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", ["bs"]: "Angila", ["br"]: "Angila", ["bg"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["my"]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", ["ca"]: "Angilla", ["zh"]: "\u5B89\u572D\u62C9", ["hr"]: "Angila", ["cs"]: "Anguilla", ["da"]: "Anguilla", ["nl"]: "Anguilla", ["en"]: "Anguilla", ["eo"]: "Angila", ["et"]: "Anguilla", ["fi"]: "Anguilla", ["fr"]: "Anguilla", ["fy"]: "Angila", ["gl"]: "Anguilla", ["ka"]: "\u10D0\u10DC\u10D2\u10D8\u10DA\u10D0", ["de"]: "Anguilla", ["kl"]: "Anguilla", ["el"]: "\u0391\u03BD\u03B3\u03BA\u03C5\u03BB\u03AC", ["gu"]: "\u0A85\u0A82\u0A97\u0ACD\u0AAF\u0ABE\u0AB2\u0ABE", ["ht"]: "Anguilla", ["ha"]: "Anguilla", ["he"]: "\u05D0\u05E0\u05D2\u05D5\u05D9\u05D0\u05DC\u05D4", ["hi"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["hu"]: "Anguilla", ["is"]: "Anguilla", ["ig"]: "Anguilla", ["id"]: "Anguilla", ["ga"]: "Anguilla", ["it"]: "Anguilla", ["ja"]: "\u30A2\u30F3\u30AE\u30E9", ["jv"]: "Anguilla", ["kn"]: "\u0C85\u0C82\u0C97\u0CCD\u0CB5\u0CC7\u0CB2\u0CBE", ["kk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["km"]: "\u17A2\u1784\u17CB\u1780\u17B6\u179A\u17A0\u17D2\u1782\u17B8\u1798", ["ko"]: "\uC575\uADC8\uB77C", ["ku"]: "Anguilla", ["ky"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EB0\u0E88\u0EB3", ["la"]: "Anguilla", ["lv"]: "Anguilla", ["lt"]: "Anguilla", ["lb"]: "Angilla", ["mk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["mg"]: "Angila", ["ms"]: "Anguilla", ["ml"]: "\u0D05\u0D02\u0D17\u0D4D\u0D35\u0D47\u0D32\u0D3E", ["mt"]: "Anguilla", ["mi"]: "Anguilla", ["mr"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["mn"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ne"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["nb"]: "Anguilla", ["ps"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["fa"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["pl"]: "Anguilla", ["pt"]: "Anguilla", ["pa"]: "\u0A05\u0A02\u0A17\u0A40\u0A32\u0A3E", ["ro"]: "Anguilla", ["ru"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["sm"]: "Anguilla", ["sa"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["gd"]: "Anguilla", ["sr"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["st"]: "Anguilla", ["sn"]: "Anguilla", ["sd"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["si"]: "\u0D86\u0D82\u0D9C\u0DD2\u0DBD\u0DCF\u0DC0", ["sk"]: "Anguilla", ["sl"]: "Anguilla", ["so"]: "Anguilla", ["es"]: "Anguilla", ["su"]: "Anguilla", ["sw"]: "Anguilla", ["sv"]: "Anguilla", ["tl"]: "Anguilla", ["tg"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ta"]: "\u0B85\u0B99\u0BCD\u0B95\u0BC8\u0BB2\u0BBE", ["tt"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["te"]: "\u0C05\u0C02\u0C17\u0C4D\u0C35\u0C47\u0C32\u0C3E", ["th"]: "\u0E2D\u0E31\u0E07\u0E01\u0E32\u0E25\u0E32", ["bo"]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", ["tr"]: "Anguilla", ["uk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ur"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["uz"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["vi"]: "Anguilla", ["cy"]: "Anguilla", ["xh"]: "Anguilla", ["yi"]: "Anguilla", ["yo"]: "Anguilla", ["zu"]: "Anguilla" } } }, Antarctica: { i18n: { calling_codes: [672], currencies: ["USD", "EUR"], languages: ["en", "es", "fr", "pt", "it", "nl", "de", "sv", "nb", "da", "fi"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Antarctica/Casey", "Antarctica/Davis", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera"], timezones: ["AST", "CT", "ET", "AST", "AZOT", "NST"] } }, id: "AQ", info: { flag: { emoji: "\u{1F1E6}\u{1F1F6}", emoji_unicode: "U+1F1E6 U+1F1F6", svg: "https://www.countryflags.io/aq/flat/64.svg" }, tld: [".aq"] }, iso: { alpha2: "AQ", alpha3: "ATA", numeric: "010" }, name: { alt_spellings: ["AQ"], demonym: "Antarctican", native: { endonym: "Antarctica" }, official: "Antarctica", short: "Antarctica", translations: { ["af"]: "Antarctica", ["sq"]: "Antarktika", ["am"]: "\u12A0\u1295\u1272\u120D\u12AB\u1293", ["ar"]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["hy"]: "\u0540\u0561\u0576\u0561\u0580\u0561\u057F\u056F\u0578", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["eu"]: "Antarktika", ["be"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["bn"]: "\u0985\u09A8\u09CD\u09A4\u09B0\u09BE\u09B6\u09CD\u09AC\u09C0", ["ber"]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["dz"]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", ["bs"]: "Antarktika", ["br"]: "Antarktika", ["bg"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["my"]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102E\u1038\u101A\u102C\u1038", ["ca"]: "Ant\xE0rtida", ["zh"]: "\u5357\u6781\u6D32", ["hr"]: "Antarktika", ["cs"]: "Antarktida", ["da"]: "Antarktis", ["nl"]: "Antarctica", ["en"]: "Antarctica", ["eo"]: "Antarktika", ["et"]: "Antarktika", ["fi"]: "Antarktis", ["fr"]: "Antarctica", ["fy"]: "Antarktis", ["gl"]: "Ant\xE1rtida", ["ka"]: "\u10D0\u10DC\u10E2\u10D0\u10E0\u10E5\u10E2\u10D8\u10D9\u10D0", ["de"]: "Antarktis", ["kl"]: "Antarktis", ["el"]: "\u0391\u03BD\u03C4\u03B1\u03C1\u03BA\u03C4\u03B9\u03BA\u03AE", ["gu"]: "\u0A85\u0AA8\u0ACD\u0AA4\u0AB0\u0ABE\u0AB6\u0ACD\u0AB5\u0AC0", ["ht"]: "Antarctica", ["ha"]: "Antarktika", ["he"]: "\u05D0\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4", ["hi"]: "\u0905\u0928\u094D\u0924\u0930\u0915\u094D\u0937\u0947\u0924\u094D\u0930", ["hu"]: "Antarktika", ["is"]: "Antarktis", ["ig"]: "Antarktika", ["id"]: "Antarktika", ["ga"]: "Antarktika", ["it"]: "Antartide", ["ja"]: "\u5357\u6975", ["jv"]: "Antarktika", ["kn"]: "\u0C85\u0CA8\u0CCD\u0CA4\u0CB0\u0CBE\u0CB6\u0CCD\u0CB5\u0CBF", ["kk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["km"]: "\u17A2\u1784\u17CB\u179F\u17D2\u1780\u179A\u17A2\u17B6\u1798\u17C9\u17BB\u1799", ["ko"]: "\uC564\uD2F0\uCE74\uD1A0\uB2C9", ["ku"]: "Antarktika", ["ky"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EAD\u0EA5\u0EB2\u0E81\u0EB4\u0EAA\u0EB0", ["la"]: "Antarctica", ["lv"]: "Antarktika", ["lt"]: "Antarktis", ["lb"]: "Antarktis", ["mk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["mg"]: "Antarctica", ["ms"]: "Antarktika", ["ml"]: "\u0D05\u0D28\u0D4D\u0D24\u0D30\u0D3E\u0D36\u0D4D\u0D35\u0D3F", ["mt"]: "Antarktika", ["mi"]: "Antarktika", ["mr"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["mn"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ne"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["nb"]: "Antarktis", ["ps"]: "\u0627\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["fa"]: "\u0622\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", ["pl"]: "Antarktyka", ["pt"]: "Ant\xE1rtida", ["pa"]: "\u0A05\u0A28\u0A4D\u0A24\u0A30\u0A3E\u0A36\u0A3F\u0A15\u0A3E", ["ro"]: "Antarctica", ["ru"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["sm"]: "Antarktika", ["sa"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["gd"]: "Antarktika", ["sr"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["st"]: "Antarktika", ["sn"]: "Antarktika", ["sd"]: "Antarktika", ["si"]: "\u0D86\u0DB1\u0DCA\u0DA7\u0DCA\u0DA7\u0DD2\u0D9A\u0DCF\u0DC0", ["sk"]: "Antarktika", ["sl"]: "Antarktika", ["so"]: "Antarktika", ["es"]: "Ant\xE1rtida", ["su"]: "Antarktika", ["sw"]: "Antarktika", ["sv"]: "Antarktis", ["tl"]: "Antarktika", ["tg"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ta"]: "\u0B85\u0BA9\u0BCD\u0BA4\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0B95\u0BCD", ["tt"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["te"]: "\u0C05\u0C28\u0C4D\u0C24\u0C30\u0C3E\u0C36\u0C4D\u0C35\u0C3F\u0C15\u0C3E", ["th"]: "\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E2D\u0E32\u0E19\u0E31\u0E19\u0E15\u0E34\u0E01\u0E32", ["bo"]: "\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72\u0F0B\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72", ["tr"]: "Antarktika", ["uk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ur"]: "\u0627\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", ["uz"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["vi"]: "\u0110\u1EA5t Antarktik", ["cy"]: "Antarktika", ["xh"]: "Antarktika", ["yi"]: "Antarktika", ["yo"]: "Antarktika", ["zu"]: "Antarktika" } } }, Armenia: { i18n: { calling_codes: [374], currencies: ["AMD"], languages: ["hy"], tz: { offsets: ["UTC+04"], regions: ["Asia/Jakarta"], timezones: ["AMT"] } }, id: "AM", info: { flag: { emoji: "\u{1F1E6}\u{1F1F2}", emoji_unicode: "U+1F1E6 U+1F1F2", svg: "https://www.countryflags.io/am/flat/64.svg" }, tld: [".am"] }, iso: { alpha2: "AM", alpha3: "ARM", numeric: "051" }, name: { alt_spellings: ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"], demonym: "Armenian", native: { endonym: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576" }, official: "Republic of Armenia", short: "Armenia", translations: { ["af"]: "Armeni\xEB", ["sq"]: "Armenia", ["am"]: "\u12A0\u121B\u122D\u129B", ["ar"]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["eu"]: "Arm\xE9nia", ["be"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["bn"]: "\u0986\u09B0\u09CD\u09AE\u09C7\u09A8\u09BF", ["ber"]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", ["dz"]: "\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42", ["bs"]: "Armenija", ["br"]: "Armeni\xEB", ["bg"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["my"]: "\u1021\u102C\u1019\u1010\u102D\u1010\u1039", ["ca"]: "Arm\xE8nia", ["zh"]: "\u4E9A\u7F8E\u5C3C\u4E9A", ["hr"]: "Armenija", ["cs"]: "Arm\xE9nie", ["da"]: "Armenien", ["nl"]: "Armeni\xEB", ["en"]: "Armenia", ["eo"]: "Armenia", ["et"]: "Armeenia", ["fi"]: "Armenia", ["fr"]: "Armenia", ["fy"]: "Armeenia", ["gl"]: "Arm\xE9nia", ["ka"]: "\u10D0\u10E0\u10DB\u10DD\u10DC\u10D8", ["de"]: "Armenien", ["kl"]: "Armenia", ["el"]: "\u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1", ["gu"]: "\u0A85\u0AB0\u0ACD\u0AAE\u0AC7\u0AA8\u0ABF", ["ht"]: "Armenia", ["ha"]: "Armenia", ["he"]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", ["hi"]: "\u0905\u05E8\u05DE\u05E0\u093F\u092F\u093E", ["hu"]: "\xD6rm\xE9nyorsz\xE1g", ["is"]: "Armenia", ["ig"]: "Armenia", ["id"]: "Armenia", ["ga"]: "Armenia", ["it"]: "Armenia", ["ja"]: "\u30A2\u30EB\u30E1\u30CB\u30A2", ["jv"]: "Armenia", ["kn"]: "\u0C85\u0CB0\u0CCD\u0CAE\u0CC7\u0CA8\u0CBF", ["kk"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["km"]: "\u17A2\u17B6\u1798\u17C9\u17C1\u179A\u17B8", ["ko"]: "\uC544\uB974\uBA54\uB2C8\uC544", ["ku"]: "Armenia", ["ky"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["lo"]: "\u0EAD\u0EB2\u0EAB\u0EBC\u0E99\u0EB2", ["la"]: "Armenia", ["lv"]: "Armeenia", ["lt"]: "Arm\u0117nija", ["lb"]: "Armenien", ["mk"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", ["mg"]: "Armenia", ["ms"]: "Armenia", ["ml"]: "\u0D05\u0D30\u0D4D\u200D\u0D2E\u0D47\u0D28\u0D3F", ["mt"]: "Armenia", ["mi"]: "Armenia", ["mr"]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", ["mn"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["ne"]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", ["nb"]: "Armenia", ["ps"]: "\u0622\u0631\u0645\u06CC\u0646\u06CC\u0627", ["fa"]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", ["pl"]: "Armenia", ["pt"]: "Armenia", ["pa"]: "\u0A05\u0A30\u0A2E\u0A40\u0A28\u0A40", ["ro"]: "Armenia", ["ru"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["sm"]: "Armenia", ["sa"]: "Armenia", ["gd"]: "Armenia", ["sr"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", ["st"]: "Armenia", ["sn"]: "Armenia", ["sd"]: "Armenia", ["si"]: "\u0D86\u0DBB\u0DCA\u0DB8\u0DD3\u0DB1\u0DD2", ["sk"]: "Armenia", ["sl"]: "Armenija", ["so"]: "Armenia", ["es"]: "Armenia", ["su"]: "Armenia", ["sw"]: "Armenia", ["sv"]: "Armenien", ["tl"]: "Armenia", ["tg"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["ta"]: "\u0B85\u0BB0\u0BCD\u0BAE\u0BC7\u0BA9\u0BBF\u0BAF\u0BA9\u0BCD", ["tt"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["te"]: "\u0C05\u0C30\u0C4D\u0C2E\u0C47\u0C28\u0C3F", ["th"]: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F62\u0F0B\u0F58\u0F7A\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F74\u0F0D", ["tr"]: "Ermenistan", ["uk"]: "\u0410\u0440\u043C\u0435\u043D\u0456\u044F", ["ur"]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", ["uz"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["vi"]: "Armenia", ["cy"]: "Armenia", ["xh"]: "Armenia", ["yi"]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", ["yo"]: "Armenia", ["zu"]: "Armenia" } } }, SomeCountry: { i18n: { calling_codes: [], currencies: [], languages: [], tz: { offsets: [], regions: [], timezones: [] } }, id: "AS", info: { flag: { emoji: "", emoji_unicode: "", svg: "" }, tld: [] }, iso: { alpha2: "AS", alpha3: "", numeric: "" }, name: { alt_spellings: [], demonym: "", native: { endonym: "" }, official: "", short: "", translations: { ["af"]: "", ["sq"]: "", ["am"]: "", ["ar"]: "", ["hy"]: "", ["az"]: "", ["ba"]: "", ["eu"]: "", ["be"]: "", ["bn"]: "", ["ber"]: "", ["dz"]: "", ["bs"]: "", ["br"]: "", ["bg"]: "", ["my"]: "", ["ca"]: "", ["zh"]: "", ["hr"]: "", ["cs"]: "", ["da"]: "", ["nl"]: "", ["en"]: "", ["eo"]: "", ["et"]: "", ["fi"]: "", ["fr"]: "", ["fy"]: "", ["gl"]: "", ["ka"]: "", ["de"]: "", ["kl"]: "", ["el"]: "", ["gu"]: "", ["ht"]: "", ["ha"]: "", ["he"]: "", ["hi"]: "", ["hu"]: "", ["is"]: "", ["ig"]: "", ["id"]: "", ["ga"]: "", ["it"]: "", ["ja"]: "", ["jv"]: "", ["kn"]: "", ["kk"]: "", ["km"]: "", ["ko"]: "", ["ku"]: "", ["ky"]: "", ["lo"]: "", ["la"]: "", ["lv"]: "", ["lt"]: "", ["lb"]: "", ["mk"]: "", ["mg"]: "", ["ms"]: "", ["ml"]: "", ["mt"]: "", ["mi"]: "", ["mr"]: "", ["mn"]: "", ["ne"]: "", ["nb"]: "", ["ps"]: "", ["fa"]: "", ["pl"]: "", ["pt"]: "", ["pa"]: "", ["ro"]: "", ["ru"]: "", ["sm"]: "", ["sa"]: "", ["gd"]: "", ["sr"]: "", ["st"]: "", ["sn"]: "", ["sd"]: "", ["si"]: "", ["sk"]: "", ["sl"]: "", ["so"]: "", ["es"]: "", ["su"]: "", ["sw"]: "", ["sv"]: "", ["tl"]: "", ["tg"]: "", ["ta"]: "", ["tt"]: "", ["te"]: "", ["th"]: "", ["bo"]: "", ["tr"]: "", ["uk"]: "", ["ur"]: "", ["uz"]: "", ["vi"]: "", ["cy"]: "", ["xh"]: "", ["yi"]: "", ["yo"]: "", ["zu"]: "" } } } };
var logger2 = new e();
var remediator = new je();
var HealthcheckEndpoint = {
  handler: (req, res) => {
    return res.sendStatus(200);
  },
  method: ze22.Get,
  route: "/healthcheck"
};
var exceptionWrapper = async (req, res, cb) => {
  try {
    return await cb(req, res);
  } catch (err) {
    return remediator.handleException(err, { res });
  }
};
function setupEndpoints({
  basePath,
  server,
  endpoints
}) {
  logger2.info("Attaching network endpoints...");
  for (const endpoint of endpoints) {
    server[endpoint.method](`${basePath}${endpoint.route}`, async (req, res) => await exceptionWrapper(req, res, endpoint.handler));
  }
  return server;
}
var exceptionHandlingMiddleware = async (err, req, res, next) => {
  next();
};
var logger3 = new e();
function configureExceptionHandling(server, listener) {
  logger3.info("Configuring error handling logic...");
  server.use((req, res, next) => {
    const requestId = req.headers["X-Request-Id"];
    if (requestId) {
      res.append("X-Request-Id", requestId);
    }
    next();
  });
  logger3.info("Enabled HTTP request ID tracing.");
  server.use(exceptionHandlingMiddleware);
  logger3.info("Error handling middleware initialized.");
  server.on("error", (err) => {
    console.error("ERROR:", err);
    const isManaged = err instanceof s2;
    const exception = isManaged ? err : new v2(err.name, { cause: err });
    logger3.exception(exception.toJSON());
    console.error("ERROR:", exception.toJSON());
  });
}
var HttpServer = class {
  endpoints = [];
  environment = ge22();
  exceptionsClient;
  listener;
  logger;
  name;
  server;
  options = {
    port: 8080
  };
  constructor({
    endpoints,
    name,
    options
  }) {
    this.logger = new e();
    this.server = express();
    this.name = name;
    this.endpoints = endpoints;
    this.options = { ...this.options, ...options };
    this.exceptionsClient = new we({
      processExceptionsHandler: async (err) => await this.gracefulExit(err),
      processInteruptHandler: async (err) => await this.gracefulExit(err),
      processTerminationHandler: async (err) => await this.gracefulExit(err)
    });
  }
  async configure() {
    this.logger.info("Configuring server...");
    this.server.use(express.urlencoded({ extended: false }));
    const multerStorage = multer.memoryStorage();
    const upload = multer({ storage: multerStorage }).any();
    this.server.use(upload);
    this.server.use(express.json());
    this.server.disable("etag");
    this.server.use(compression());
    this.server.use((req, res, next) => {
      console.log("req", req);
      (0, import_morgan.default)(":method :url -> :status :req[x-request-id]  (:res[content-length]kb/:response-time ms)");
      return next();
    });
    this.server.use((req, res, next) => auth_middleware_default(req, res, next));
    this.logger.info("Authentication middleware setup");
    this.server = setupEndpoints({
      basePath: `/${this.name}`,
      endpoints: [...this.endpoints, HealthcheckEndpoint],
      server: this.server
    });
    this.logger.info("\u2764\uFE0F  Healthcheck service started.");
    this.logger.info("Server configured successfully.");
  }
  async listen(portArg) {
    const port = portArg ?? this.options?.port ?? 8080;
    this.logger.info(`Starting server in "${this.environment.name}" environment...`);
    this.secure();
    this.configure();
    this.listener = this.server.listen(port, () => {
      this.logger.info(`\u26A1 Server listening on port ${port}!`);
      if (this.listener) {
        configureExceptionHandling(this.server, this.listener);
      }
    });
  }
  secure() {
    this.server.disable("x-powered-by");
    this.logger.info("Disabled Express x-powered-by header.");
    this.server.use((0, import_cors.default)({
      credentials: true,
      origin: this.options.trustedOrigins?.[this.environment.id]
    }));
    this.server.use((req, res, next) => {
      if (this.options.trustedOrigins && this.environment?.id) {
        const origins = this.options.trustedOrigins?.[this.environment?.id] ?? [];
        for (const origin of origins) {
          this.logger.info(`Allowing access from origin ${origin}...`);
          res.setHeader("Access-Control-Allow-Origin", origin);
        }
      }
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      return next();
    });
    this.logger.info("CORS enabled.");
  }
  async gracefulExit(error) {
    this.logger.info("Gracefully shutting down server...");
    console.log("error in gracefulExit");
    console.log(error);
    if (this.listener) {
      this.listener.close((err) => {
        if (err) {
          const exception = new g2(`Error shutting down server ${err.name}`, {
            cause: err,
            origin: {
              file: "index.ts",
              function: "gracefulExit()"
            }
          });
          this.logger.exception(exception.toJSON());
        } else {
          this.logger.info("HTTP server successfully closed");
        }
        this.logger.info(`Killing server process... Goodbye.'} `);
        throw new C2("Shutting down gracefully", {
          origin: {
            file: "index.ts",
            function: "gracefulExit()"
          }
        });
      });
    }
  }
};

// node_modules/@srclaunch/logger/dist/index.js
var r3 = class {
  analytics(o2) {
  }
  critical(o2) {
  }
  debug(o2) {
  }
  async exception(o2) {
    console.log(o2);
  }
  http(o2) {
  }
  async info(o2) {
    console.log(o2);
  }
  warning(o2) {
  }
  constructor(o2) {
  }
};
var p3 = r3;
var e3 = p3;

// node_modules/@srclaunch/types/dist/index.js
var q4 = ((U3) => (U3.Comment = "comment", U3.Create = "create", U3.Delete = "delete", U3.Edit = "edit", U3.Invoice = "invoice", U3.Message = "message", U3.PageView = "pageView", U3.Paid = "paid", U3.Payment = "payment", U3.Purchase = "purchase", U3.Referral = "referral", U3.Renewal = "renewal", U3.Signup = "signup", U3.Subscription = "subscription", U3.Upgrade = "upgrade", U3))(q4 || {});
var R4 = ((U3) => (U3.Business = "business", U3.Engineering = "engineering", U3.Exception = "exception", U3.LogMessage = "log-message", U3.Marketing = "marketing", U3.PageLeave = "page-leave", U3.PageView = "page-view", U3.Product = "product", U3.QualityManagement = "quality-management", U3.UserAccess = "user-access", U3.UserLogin = "user-login", U3.UserLogout = "user-logout", U3.UserSignup = "user-signup", U3.UserPreferencesChanged = "user-preferences-changed", U3.WebsiteVisit = "website-visit", U3))(R4 || {});
var F4 = ((o2) => (o2.CloseTab = "close-tab", o2.ExternalLink = "external-link", o2.NavigateAway = "navigate-away", o2.Unknown = "unknown", o2))(F4 || {});
var H4 = ((De3) => (De3.Ecs = "Ecs", De3))(H4 || {});
var O4 = ((o2) => (o2.Finished = "Finished", o2.Queued = "Queued", o2.Running = "Running", o2.Started = "Started", o2))(O4 || {});
var j4 = ((o2) => (o2.Mobile = "mobile", o2.TV = "tv", o2.Watch = "watch", o2.Web = "web", o2))(j4 || {});
var V4 = ((P3) => (P3.Development = "Development", P3.NonProduction = "NonProduction", P3.Production = "Production", P3))(V4 || {});
var W4 = ((P3) => (P3.Completed = "completed", P3.Started = "started", P3.Uncompleted = "uncompleted", P3))(W4 || {});
var J4 = ((P3) => (P3.Build = "Build", P3.Deployment = "Deployment", P3.Test = "Test", P3))(J4 || {});
var Z4 = ((_3) => (_3.Canceled = "Canceled", _3.Completed = "Completed", _3.Failed = "Failed", _3.Running = "Running", _3.Queued = "Queued", _3.Waiting = "Waiting", _3))(Z4 || {});
var Y4 = ((_3) => (_3.Canceled = "Canceled", _3.Completed = "Completed", _3.Failed = "Failed", _3.Running = "Running", _3.Queued = "Queued", _3.Waiting = "Waiting", _3))(Y4 || {});
var Q4 = ((_3) => (_3.ForgotPassword = "forgot_password", _3.Index = "index", _3.Login = "login", _3.PageNotFound = "404", _3.Signup = "signup", _3.VerifyCode = "verify_code", _3))(Q4 || {});
var $4 = ((o2) => (o2.Info = "info", o2.Warning = "warning", o2.Error = "error", o2.Success = "success", o2))($4 || {});
var X4 = ((N3) => (N3.Details = "details", N3.Dialog = "dialog", N3))(X4 || {});
var C4 = ((o2) => (o2.Info = "info", o2.Warning = "warning", o2.Error = "error", o2.Success = "success", o2))(C4 || {});
var aa4 = ((h3) => (h3.AccountBalance = "AccountBalance", h3.UserAssets = "UserAssets", h3.UserCreditCardDebt = "UserCreditCardDebt", h3.UserCreditLimit = "UserCreditLimit", h3.UserCreditUtilization = "UserCreditUtilization", h3.UserDebt = "UserDebt", h3.UserInvestments = "UserInvestments", h3.UserRetirement = "UserRetirement", h3.UserSavings = "UserSavings", h3))(aa4 || {});
var ea3 = ((o2) => (o2.DateTime = "date_time", o2.True = "true", o2.False = "false", o2.UniqueId = "unique_id", o2))(ea3 || {});
var ia4 = ((N3) => (N3.DomainModel = "domain_entity", N3.GenericModel = "generic_entity", N3))(ia4 || {});
var na4 = ((T2) => (T2.AirportCode = "airport-code", T2.BankIDCode = "bank-id-code", T2.BitcoinAddress = "bitcoin-address", T2.Boolean = "boolean", T2.City = "city", T2.Color = "color", T2.CountryCode = "country-code", T2.CreditCard = "credit-card", T2.CurrencyAmount = "currency-amount", T2.CurrencyCode = "currency-code", T2.DataURI = "data-uri", T2.Date = "date", T2.DateRange = "date-range", T2.DateTime = "date-time", T2.DayOfMonth = "day-of-month", T2.DomainName = "domain-name", T2.EmailAddress = "email-address", T2.EthereumAddress = "ethereum-address", T2.EAN = "european-article-number", T2.EIN = "employer-identification-number", T2.Float = "float", T2.GeographicCoordinate = "geographic-coordinate", T2.GeographicCoordinates = "geographic-coordinates", T2.GitRepositoryURL = "git-repository-url", T2.HSLColor = "hsl-color", T2.HexColor = "hex-color", T2.Hexadecimal = "hexadecimal", T2.IBAN = "international-bank-account-number", T2.IMEI = "international-mobile-equipment-identifier", T2.IPAddress = "ip-address", T2.IPAddressRange = "ip-address-range", T2.ISBN = "international-standard-book-number", T2.ISIN = "international-stock-number", T2.ISMN = "international-standard-music-number", T2.ISSN = "international-standard-serial-number", T2.ISO8601 = "iso-8601", T2.ISO31661Alpha2 = "iso-31661-alpha-2", T2.ISO31661Alpha3 = "iso-31661-alpha-3", T2.ISO4217 = "iso-4217", T2.Image = "image", T2.Integer = "integer", T2.JSON = "json", T2.LanguageCode = "language-code", T2.LicensePlateNumber = "license-plate-number", T2.LongText = "long-text", T2.MD5 = "md5", T2.Markdown = "markdown", T2.Menu = "menu", T2.Number = "number", T2.MACAddress = "mac-address", T2.MagnetURI = "magnet-uri", T2.MimeType = "mime-type", T2.Month = "month", T2.Password = "password", T2.PassportNumber = "passport-number", T2.Percent = "percent", T2.PhoneNumber = "phone-number", T2.Port = "port", T2.PostalCode = "postal-code", T2.Province = "province", T2.RFC3339 = "rfc-3339", T2.RGBColor = "rgb-color", T2.SemanticVersion = "semantic-version", T2.SSN = "social-security-number", T2.State = "state", T2.StreetAddress = "street-address", T2.String = "string", T2.Tags = "tags", T2.TaxIDNumber = "tax-id-number", T2.Time = "time", T2.TimeOfDay = "time-of-day", T2.TimeRange = "time-range", T2.TimezoneRegion = "timezone-region", T2.URL = "url", T2.URLPath = "url-path", T2.UUID = "uuid", T2.VATIDNumber = "value-added-tax-id-number", T2.VerificationCode = "verification-code", T2.Video = "video", T2.Weekday = "weekday", T2.Year = "year", T2))(na4 || {});
var ra4 = ((o2) => (o2.Critical = "Critical", o2.Error = "Error", o2.Fatal = "Fatal", o2.Warning = "Warning", o2))(ra4 || {});
var x4 = ((l2) => (l2.Contains = "contains", l2.HasCharacterCount = "has-character-count", l2.HasNumberCount = "has-number-count", l2.HasLetterCount = "has-letter-count", l2.HasLowercaseCount = "has-lowercase-count", l2.HasSpacesCount = "has-spaces-count", l2.HasSymbolCount = "has-symbol-count", l2.HasUppercaseCount = "has-uppercase-count", l2.IsAfter = "is-after", l2.IsAfterOrEqual = "is-after-or-equal", l2.IsAirport = "is-airport", l2.IsAlpha = "is-alpha", l2.IsAlphanumeric = "is-alphanumeric", l2.IsAlgorithmHash = "is-algorithm-hash", l2.IsAscii = "is-ascii", l2.IsBase64 = "is-base-64", l2.IsBefore = "is-before", l2.IsBeforeOrAfter = "is-before-or-after", l2.IsBeforeOrEqual = "is-before-or-equal", l2.IsBetween = "is-between", l2.IsBIC = "is-bic", l2.IsBitcoinAddress = "is-bitcoin-address", l2.IsBoolean = "is-boolean", l2.IsColor = "is-color", l2.IsComplexEnough = "is-complex-enough", l2.IsCountry = "is-country", l2.IsCreditCard = "is-credit-card", l2.IsCurrency = "is-currency", l2.IsDataURI = "is-data-uri", l2.IsDate = "is-date", l2.IsDateRange = "is-date-range", l2.IsDateTime = "is-date-time", l2.IsDayOfMonth = "is-day-of-month", l2.IsDecimal = "is-decimal", l2.IsDivisibleBy = "is-divisible-by", l2.IsDomainName = "is-domain-name", l2.IsEmailAddress = "is-email-address", l2.IsEthereumAddress = "is-ethereum-address", l2.IsEAN = "is-ean", l2.IsEIN = "is-ein", l2.IsEqual = "is-equal", l2.IsEvenNumber = "is-even-number", l2.IsFloat = "is-float", l2.IsIBAN = "is-iban", l2.IsGreaterThan = "greater-than", l2.IsGreaterThanOrEqual = "greater-than-or-equal", l2.IsHSLColor = "is-hsl-color", l2.IsHexColor = "is-hex-color", l2.IsHexadecimal = "is-hexadecimal", l2.IsIdentityCardCode = "is-identity-card-code", l2.IsIMEI = "is-imei", l2.IsInIPAddressRange = "is-in-ip-address-range", l2.IsInList = "is-in-list", l2.IsInTheLast = "is-in-the-last", l2.IsInteger = "is-integer", l2.IsIPAddress = "is-ip-address", l2.IsIPAddressRange = "is-ip-address-range", l2.IsISBN = "is-isbn", l2.IsISIN = "is-isin", l2.IsISMN = "is-ismn", l2.IsISRC = "is-isrc", l2.IsISSN = "is-issn", l2.IsISO4217 = "is-iso-4217", l2.IsISO8601 = "is-iso-8601", l2.IsISO31661Alpha2 = "is-iso-31661-alpha-2", l2.IsISO31661Alpha3 = "is-iso-31661-alpha-3", l2.IsJSON = "is-json", l2.IsLanguage = "is-language", l2.IsLatitude = "is-latitude", l2.IsLongitude = "is-longitude", l2.IsLengthEqual = "is-length-equal", l2.IsLengthGreaterThan = "is-length-greater-than", l2.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal", l2.IsLengthLessThan = "is-length-less-than", l2.IsLengthLessThanOrEqual = "is-length-less-than-or-equal", l2.IsLessThan = "less-than", l2.IsLessThanOrEqual = "less-than-or-equal", l2.IsLicensePlateNumber = "is-license-plate-number", l2.IsLowercase = "is-lowercase", l2.IsOctal = "is-octal", l2.IsMACAddress = "is-mac-address", l2.IsMD5 = "is-md5", l2.IsMagnetURI = "is-magnet-uri", l2.IsMarkdown = "is-markdown", l2.IsMimeType = "is-mime-type", l2.IsMonth = "is-month", l2.IsNegativeNumber = "is-negative-number", l2.IsNotDate = "is-not-date", l2.IsNotEqual = "is-not-equal", l2.IsNotInIPAddressRange = "is-not-in-ip-address-range", l2.IsNotInList = "is-not-in-list", l2.IsNotNull = "is-not-null", l2.IsNotRegexMatch = "is-not-regex-match", l2.IsNotToday = "is-not-today", l2.IsNumber = "is-number", l2.IsNumeric = "is-numeric", l2.IsOddNumber = "is-odd-number", l2.IsPassportNumber = "is-passport-number", l2.IsPhoneNumber = "is-phone-number", l2.IsPort = "is-port", l2.IsPositiveNumber = "is-positive-number", l2.IsPostalCode = "is-postal-code", l2.IsProvince = "is-province", l2.IsRGBColor = "is-rgb-color", l2.IsRegexMatch = "is-regex-match", l2.IsRequired = "is-required", l2.IsSemanticVersion = "is-semantic-version", l2.IsSlug = "is-slug", l2.IsSSN = "is-ssn", l2.IsState = "is-state", l2.IsStreetAddress = "is-street-address", l2.IsString = "is-string", l2.IsStrongPassword = "is-strong-password", l2.IsTags = "is-tags", l2.IsTaxIDNumber = "is-tax-id-number", l2.IsThisMonth = "is-this-month", l2.IsThisQuarter = "is-this-quarter", l2.IsThisWeek = "is-this-week", l2.IsThisWeekend = "is-this-weekend", l2.IsThisYear = "is-this-year", l2.IsTime = "is-time", l2.IsTimeOfDay = "is-time-of-day", l2.IsTimeRange = "is-time-range", l2.IsToday = "is-today", l2.IsURL = "is-url", l2.IsUUID = "is-uuid", l2.IsUppercase = "is-uppercase", l2.IsUsernameAvailable = "is-username-available", l2.IsValidStreetAddress = "is-valid-street-address", l2.IsVATIDNumber = "is-vat-id-number", l2.IsWeekday = "is-weekday", l2.IsWeekend = "is-weekend", l2.IsYear = "is-year", l2))(x4 || {});
var sa4 = ((o2) => (o2.IsAuthenticated = "is-authenticated", o2.IsNotAuthenticated = "is-not-authenticated", o2.IsUsernameAvailable = "is-username-available", o2.PasswordMismatch = "password-mismatch", o2))(sa4 || {});
var ta4 = ((A2) => (A2[A2.IsHSLColor = "is-hsl-color"] = "IsHSLColor", A2[A2.IsHexColor = "is-hex-color"] = "IsHexColor", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsRGBColor = "is-rgb-color"] = "IsRGBColor", A2[A2.IsString = "is-string"] = "IsString", A2))(ta4 || {});
var oa4 = ((c3) => (c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsCurrency = "is-currency"] = "IsCurrency", c3[c3.IsDecimal = "is-decimal"] = "IsDecimal", c3[c3.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsFloat = "is-float"] = "IsFloat", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsISO8601 = "is-iso-8601"] = "IsISO8601", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", c3))(oa4 || {});
var ma4 = ((o2) => (o2[o2.IsBitcoinAddress = "is-bitcoin-address"] = "IsBitcoinAddress", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(ma4 || {});
var la4 = ((o2) => (o2[o2.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(la4 || {});
var ca4 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsJSON = "is-json"] = "IsJSON", A2[A2.IsLanguage = "is-language"] = "IsLanguage", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2))(ca4 || {});
var ua4 = ((d2) => (d2[d2.IsAlpha = "is-alpha"] = "IsAlpha", d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(ua4 || {});
var da4 = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsCountry = "is-country"] = "IsCountry", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(da4 || {});
var pa4 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsFloat = "is-float"] = "IsFloat", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNumeric = "is-numeric"] = "IsNumeric", A2))(pa4 || {});
var ga4 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsFloat = "is-float"] = "IsFloat", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNumeric = "is-numeric"] = "IsNumeric", A2))(ga4 || {});
var Aa4 = ((o2) => (o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsPostalCode = "is-postal-code"] = "IsPostalCode", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Aa4 || {});
var Ta4 = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsProvince = "is-province"] = "IsProvince", e4[e4.IsString = "is-string"] = "IsString", e4))(Ta4 || {});
var fa4 = ((e4) => (e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsState = "is-state"] = "IsState", e4[e4.IsString = "is-string"] = "IsString", e4))(fa4 || {});
var _a4 = ((_3) => (_3[_3.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3[_3.IsStreetAddress = "is-street-address"] = "IsStreetAddress", _3))(_a4 || {});
var ha4 = ((e4) => (e4[e4.IsAirport = "is-airport"] = "IsAirport", e4[e4.IsAlpha = "is-alpha"] = "IsAlpha", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ha4 || {});
var Sa4 = ((d2) => (d2[d2.IsAlgorithmHash = "is-algorithm-hash"] = "IsAlgorithmHash", d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(Sa4 || {});
var Ia4 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", d2[d2.IsString = "is-string"] = "IsString", d2))(Ia4 || {});
var ba4 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2[d2.IsUUID = "is-uuid"] = "IsUUID", d2))(ba4 || {});
var va4 = ((d2) => (d2[d2.IsEqual = "is-equal"] = "IsEqual", d2[d2.IsInList = "is-in-list"] = "IsInList", d2[d2.IsMD5 = "is-md5"] = "IsMD5", d2[d2.IsNotEqual = "is-not-equal"] = "IsNotEqual", d2[d2.IsNotInList = "is-not-in-list"] = "IsNotInList", d2[d2.IsNotNull = "is-not-null"] = "IsNotNull", d2[d2.IsString = "is-string"] = "IsString", d2))(va4 || {});
var Ua4 = ((o2) => (o2[o2.IsBoolean = "is-boolean"] = "IsBoolean", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Ua4 || {});
var Ea4 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsDate = "is-date"] = "IsDate", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsNotDate = "is-not-date"] = "IsNotDate", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNotToday = "is-not-today"] = "IsNotToday", g3[g3.IsThisWeek = "is-this-week"] = "IsThisWeek", g3[g3.IsThisMonth = "is-this-month"] = "IsThisMonth", g3[g3.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", g3[g3.IsThisYear = "is-this-year"] = "IsThisYear", g3[g3.IsToday = "is-today"] = "IsToday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(Ea4 || {});
var ya4 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsDate = "is-date"] = "IsDate", h3[h3.IsDateRange = "is-date-range"] = "IsDateRange", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3))(ya4 || {});
var xa4 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsDate = "is-date"] = "IsDate", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsNotDate = "is-not-date"] = "IsNotDate", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNotToday = "is-not-today"] = "IsNotToday", g3[g3.IsThisWeek = "is-this-week"] = "IsThisWeek", g3[g3.IsThisMonth = "is-this-month"] = "IsThisMonth", g3[g3.IsThisQuarter = "is-this-quarter"] = "IsThisQuarter", g3[g3.IsThisYear = "is-this-year"] = "IsThisYear", g3[g3.IsToday = "is-today"] = "IsToday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(xa4 || {});
var Na4 = ((v3) => (v3[v3.IsAfter = "is-after"] = "IsAfter", v3[v3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", v3[v3.IsBefore = "is-before"] = "IsBefore", v3[v3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", v3[v3.IsBetween = "is-between"] = "IsBetween", v3[v3.IsDayOfMonth = "is-day-of-month"] = "IsDayOfMonth", v3[v3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", v3[v3.IsEqual = "is-equal"] = "IsEqual", v3[v3.IsGreaterThan = "greater-than"] = "IsGreaterThan", v3[v3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", v3[v3.IsInteger = "is-integer"] = "IsInteger", v3[v3.IsLessThan = "less-than"] = "IsLessThan", v3[v3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", v3[v3.IsNotEqual = "is-not-equal"] = "IsNotEqual", v3[v3.IsNotNull = "is-not-null"] = "IsNotNull", v3[v3.IsNumber = "is-number"] = "IsNumber", v3[v3.IsOddNumber = "is-odd-number"] = "IsOddNumber", v3[v3.IsToday = "is-today"] = "IsToday", v3[v3.IsWeekday = "is-weekday"] = "IsWeekday", v3[v3.IsWeekend = "is-weekend"] = "IsWeekend", v3))(Na4 || {});
var Pa4 = ((c3) => (c3[c3.IsAfter = "is-after"] = "IsAfter", c3[c3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", c3[c3.IsBefore = "is-before"] = "IsBefore", c3[c3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsEqual = "is-equal"] = "IsEqual", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsMonth = "is-month"] = "IsMonth", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsThisMonth = "is-this-month"] = "IsThisMonth", c3))(Pa4 || {});
var ka4 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3[h3.IsTime = "is-time"] = "IsTime", h3))(ka4 || {});
var Ma4 = ((h3) => (h3[h3.IsAfter = "is-after"] = "IsAfter", h3[h3.IsBefore = "is-before"] = "IsBefore", h3[h3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", h3[h3.IsBetween = "is-between"] = "IsBetween", h3[h3.IsTime = "is-time"] = "IsTime", h3[h3.IsEqual = "is-equal"] = "IsEqual", h3[h3.IsNotEqual = "is-not-equal"] = "IsNotEqual", h3[h3.IsNotNull = "is-not-null"] = "IsNotNull", h3[h3.IsTimeRange = "is-time-range"] = "IsTimeRange", h3))(Ma4 || {});
var za4 = ((I3) => (I3[I3.IsAfter = "is-after"] = "IsAfter", I3[I3.IsBefore = "is-before"] = "IsBefore", I3[I3.IsBeforeOrAfter = "is-before-or-after"] = "IsBeforeOrAfter", I3[I3.IsBetween = "is-between"] = "IsBetween", I3[I3.IsEqual = "is-equal"] = "IsEqual", I3[I3.IsInList = "is-in-list"] = "IsInList", I3[I3.IsNotEqual = "is-not-equal"] = "IsNotEqual", I3[I3.IsNotInList = "is-not-in-list"] = "IsNotInList", I3[I3.IsNotNull = "is-not-null"] = "IsNotNull", I3[I3.IsTimeOfDay = "is-time-of-day"] = "IsTimeOfDay", I3[I3.IsTimeRange = "is-time-range"] = "IsTimeRange", I3))(za4 || {});
var La4 = ((g3) => (g3[g3.IsAfter = "is-after"] = "IsAfter", g3[g3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", g3[g3.IsBefore = "is-before"] = "IsBefore", g3[g3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", g3[g3.IsBetween = "is-between"] = "IsBetween", g3[g3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", g3[g3.IsEqual = "is-equal"] = "IsEqual", g3[g3.IsGreaterThan = "greater-than"] = "IsGreaterThan", g3[g3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", g3[g3.IsLessThan = "less-than"] = "IsLessThan", g3[g3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", g3[g3.IsNotEqual = "is-not-equal"] = "IsNotEqual", g3[g3.IsNotNull = "is-not-null"] = "IsNotNull", g3[g3.IsNumber = "is-number"] = "IsNumber", g3[g3.IsOddNumber = "is-odd-number"] = "IsOddNumber", g3[g3.IsWeekday = "is-weekday"] = "IsWeekday", g3[g3.IsWeekend = "is-weekend"] = "IsWeekend", g3))(La4 || {});
var Ba4 = ((c3) => (c3[c3.IsAfter = "is-after"] = "IsAfter", c3[c3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", c3[c3.IsBefore = "is-before"] = "IsBefore", c3[c3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", c3[c3.IsBetween = "is-between"] = "IsBetween", c3[c3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", c3[c3.IsEqual = "is-equal"] = "IsEqual", c3[c3.IsGreaterThan = "greater-than"] = "IsGreaterThan", c3[c3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", c3[c3.IsInteger = "is-integer"] = "IsInteger", c3[c3.IsLessThan = "less-than"] = "IsLessThan", c3[c3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", c3[c3.IsNotEqual = "is-not-equal"] = "IsNotEqual", c3[c3.IsNotNull = "is-not-null"] = "IsNotNull", c3[c3.IsNumber = "is-number"] = "IsNumber", c3[c3.IsOddNumber = "is-odd-number"] = "IsOddNumber", c3[c3.IsThisYear = "is-this-year"] = "IsThisYear", c3[c3.IsYear = "is-year"] = "IsYear", c3))(Ba4 || {});
var Da4 = ((p4) => (p4[p4.IsEqual = "is-equal"] = "IsEqual", p4[p4.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", p4[p4.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", p4[p4.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", p4[p4.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", p4[p4.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", p4[p4.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", p4[p4.IsNotEqual = "is-not-equal"] = "IsNotEqual", p4[p4.IsNotNull = "is-not-null"] = "IsNotNull", p4[p4.IsString = "is-string"] = "IsString", p4))(Da4 || {});
var Ga4 = ((o2) => (o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsJSON = "is-json"] = "IsJSON", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(Ga4 || {});
var Ka4 = ((A2) => (A2[A2.IsEqual = "is-equal"] = "IsEqual", A2[A2.IsNotEqual = "is-not-equal"] = "IsNotEqual", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsMarkdown = "is-markdown"] = "IsMarkdown", A2[A2.IsString = "is-string"] = "IsString", A2))(Ka4 || {});
var wa4 = ((o2) => (o2[o2.Contains = "contains"] = "Contains", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(wa4 || {});
var qa4 = ((o2) => (o2[o2.Contains = "contains"] = "Contains", o2[o2.IsEqual = "is-equal"] = "IsEqual", o2[o2.IsNotEqual = "is-not-equal"] = "IsNotEqual", o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2))(qa4 || {});
var Ra4 = ((_3) => (_3[_3.Contains = "contains"] = "Contains", _3[_3.IsDataURI = "is-data-uri"] = "IsDataURI", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3))(Ra4 || {});
var Fa4 = ((_3) => (_3[_3.Contains = "contains"] = "Contains", _3[_3.IsDomainName = "is-domain-name"] = "IsDomainName", _3[_3.IsEqual = "is-equal"] = "IsEqual", _3[_3.IsNotEqual = "is-not-equal"] = "IsNotEqual", _3[_3.IsNotNull = "is-not-null"] = "IsNotNull", _3[_3.IsString = "is-string"] = "IsString", _3))(Fa4 || {});
var Ha4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEmailAddress = "is-email-address"] = "IsEmailAddress", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ha4 || {});
var Oa4 = ((p4) => (p4[p4.Contains = "contains"] = "Contains", p4[p4.IsEqual = "is-equal"] = "IsEqual", p4[p4.IsIPAddress = "is-ip-address"] = "IsIPAddress", p4[p4.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", p4[p4.IsInList = "is-in-list"] = "IsInList", p4[p4.IsNotEqual = "is-not-equal"] = "IsNotEqual", p4[p4.IsNotInList = "is-not-in-list"] = "IsNotInList", p4[p4.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", p4[p4.IsNotNull = "is-not-null"] = "IsNotNull", p4[p4.IsString = "is-string"] = "IsString", p4))(Oa4 || {});
var ja4 = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIPAddressRange = "is-ip-address-range"] = "IsIPAddressRange", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ja4 || {});
var Va4 = ((e4) => (e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsGreaterThan = "greater-than"] = "IsGreaterThan", e4[e4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", e4[e4.IsInteger = "is-integer"] = "IsInteger", e4[e4.IsLessThan = "less-than"] = "IsLessThan", e4[e4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4))(Va4 || {});
var Wa4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMACAddress = "is-mac-address"] = "IsMACAddress", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Wa4 || {});
var Ja4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Ja4 || {});
var Za4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsMimeType = "is-mime-type"] = "IsMimeType", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(Za4 || {});
var Ya4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsSlug = "is-slug"] = "IsSlug", e4))(Ya4 || {});
var Qa4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsURL = "is-url"] = "IsURL", e4))(Qa4 || {});
var $a4 = ((f3) => (f3[f3.IsAfter = "is-after"] = "IsAfter", f3[f3.IsAfterOrEqual = "is-after-or-equal"] = "IsAfterOrEqual", f3[f3.IsBefore = "is-before"] = "IsBefore", f3[f3.IsBeforeOrEqual = "is-before-or-equal"] = "IsBeforeOrEqual", f3[f3.IsBetween = "is-between"] = "IsBetween", f3[f3.IsDecimal = "is-decimal"] = "IsDecimal", f3[f3.IsDivisibleBy = "is-divisible-by"] = "IsDivisibleBy", f3[f3.IsEAN = "is-ean"] = "IsEAN", f3[f3.IsEIN = "is-ein"] = "IsEIN", f3[f3.IsEqual = "is-equal"] = "IsEqual", f3[f3.IsEvenNumber = "is-even-number"] = "IsEvenNumber", f3[f3.IsFloat = "is-float"] = "IsFloat", f3[f3.IsGreaterThan = "greater-than"] = "IsGreaterThan", f3[f3.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", f3[f3.IsInt = "is-integer"] = "IsInt", f3[f3.IsISBN = "is-isbn"] = "IsISBN", f3[f3.IsISMN = "is-ismn"] = "IsISMN", f3[f3.IsISSN = "is-issn"] = "IsISSN", f3[f3.IsLatitude = "is-latitude"] = "IsLatitude", f3[f3.IsLongitude = "is-longitude"] = "IsLongitude", f3[f3.IsLessThan = "less-than"] = "IsLessThan", f3[f3.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", f3[f3.IsMACAddress = "is-mac-address"] = "IsMACAddress", f3[f3.IsNumber = "is-number"] = "IsNumber", f3[f3.IsNegativeNumber = "is-negative-number"] = "IsNegativeNumber", f3[f3.IsNotEqual = "is-not-equal"] = "IsNotEqual", f3[f3.IsNotNull = "is-not-null"] = "IsNotNull", f3[f3.IsOddNumber = "is-odd-number"] = "IsOddNumber", f3[f3.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", f3[f3.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", f3[f3.IsPort = "is-port"] = "IsPort", f3[f3.IsPositiveNumber = "is-positive-number"] = "IsPositiveNumber", f3[f3.IsPostalCode = "is-postal-code"] = "IsPostalCode", f3[f3.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", f3[f3.IsSSN = "is-ssn"] = "IsSSN", f3[f3.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", f3[f3.IsUUID = "is-uuid"] = "IsUUID", f3[f3.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", f3))($a4 || {});
var Xa4 = ((p4) => (p4[p4.IsEqual = "is-equal"] = "IsEqual", p4[p4.IsFloat = "is-float"] = "IsFloat", p4[p4.IsGreaterThan = "greater-than"] = "IsGreaterThan", p4[p4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", p4[p4.IsLessThan = "less-than"] = "IsLessThan", p4[p4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", p4[p4.IsNotEqual = "is-not-equal"] = "IsNotEqual", p4[p4.IsNotNull = "is-not-null"] = "IsNotNull", p4[p4.IsNumber = "is-number"] = "IsNumber", p4[p4.IsNumeric = "is-numeric"] = "IsNumeric", p4))(Xa4 || {});
var Ca4 = ((p4) => (p4[p4.IsEqual = "is-equal"] = "IsEqual", p4[p4.IsInteger = "is-integer"] = "IsInteger", p4[p4.IsGreaterThan = "greater-than"] = "IsGreaterThan", p4[p4.IsGreaterThanOrEqual = "greater-than-or-equal"] = "IsGreaterThanOrEqual", p4[p4.IsLessThan = "less-than"] = "IsLessThan", p4[p4.IsLessThanOrEqual = "less-than-or-equal"] = "IsLessThanOrEqual", p4[p4.IsNotEqual = "is-not-equal"] = "IsNotEqual", p4[p4.IsNotNull = "is-not-null"] = "IsNotNull", p4[p4.IsNumber = "is-number"] = "IsNumber", p4[p4.IsNumeric = "is-numeric"] = "IsNumeric", p4))(Ca4 || {});
var ae4 = ((I3) => (I3[I3.IsCreditCard = "is-credit-card"] = "IsCreditCard", I3[I3.IsEqual = "is-equal"] = "IsEqual", I3[I3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", I3[I3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", I3[I3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", I3[I3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", I3[I3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", I3[I3.IsNotEqual = "is-not-equal"] = "IsNotEqual", I3[I3.IsNotNull = "is-not-null"] = "IsNotNull", I3[I3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", I3[I3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", I3))(ae4 || {});
var ee4 = ((E3) => (E3[E3.isEmailAddress = "is-email-address"] = "isEmailAddress", E3[E3.IsEqual = "is-equal"] = "IsEqual", E3[E3.IsInList = "is-in-list"] = "IsInList", E3[E3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", E3[E3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", E3[E3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", E3[E3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", E3[E3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", E3[E3.IsNotEqual = "is-not-equal"] = "IsNotEqual", E3[E3.IsNotInList = "is-not-in-list"] = "IsNotInList", E3[E3.IsNotNull = "is-not-null"] = "IsNotNull", E3[E3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", E3[E3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", E3))(ee4 || {});
var Ge3 = ((A2) => (A2[A2.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", A2[A2.IsString = "is-string"] = "IsString", A2[A2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", A2))(Ge3 || {});
var ie4 = ((o2) => (o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2[o2.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", o2[o2.IsString = "is-string"] = "IsString", o2[o2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", o2))(ie4 || {});
var ne4 = ((y3) => (y3[y3.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", y3[y3.IsInList = "is-in-list"] = "IsInList", y3[y3.IsNotInList = "is-not-in-list"] = "IsNotInList", y3[y3.IsNotNull = "is-not-null"] = "IsNotNull", y3[y3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", y3[y3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", y3[y3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", y3[y3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", y3[y3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", y3[y3.IsStrongPassword = "is-strong-password"] = "IsStrongPassword", y3[y3.IsString = "is-string"] = "IsString", y3[y3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", y3))(ne4 || {});
var re4 = ((A2) => (A2[A2.IsNotNull = "is-not-null"] = "IsNotNull", A2[A2.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", A2[A2.IsNumber = "is-number"] = "IsNumber", A2[A2.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", A2[A2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", A2))(re4 || {});
var se4 = ((o2) => (o2[o2.IsNotNull = "is-not-null"] = "IsNotNull", o2[o2.IsSSN = "is-ssn"] = "IsSSN", o2[o2.IsString = "is-string"] = "IsString", o2[o2.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", o2))(se4 || {});
var te4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsBIC = "is-bic"] = "IsBIC", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(te4 || {});
var oe4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEAN = "is-ean"] = "IsEAN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(oe4 || {});
var me4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEIN = "is-ein"] = "IsEIN", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(me4 || {});
var le4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsIBAN = "is-iban"] = "IsIBAN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(le4 || {});
var ce3 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISBN = "is-isbn"] = "IsISBN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ce3 || {});
var ue4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISIN = "is-isin"] = "IsISIN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(ue4 || {});
var de3 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISMN = "is-ismn"] = "IsISMN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(de3 || {});
var pe3 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsISSN = "is-issn"] = "IsISSN", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4))(pe3 || {});
var ge4 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", e4))(ge4 || {});
var Ae3 = ((e4) => (e4[e4.Contains = "contains"] = "Contains", e4[e4.IsEqual = "is-equal"] = "IsEqual", e4[e4.IsInList = "is-in-list"] = "IsInList", e4[e4.IsNotEqual = "is-not-equal"] = "IsNotEqual", e4[e4.IsNotInList = "is-not-in-list"] = "IsNotInList", e4[e4.IsNotNull = "is-not-null"] = "IsNotNull", e4[e4.IsString = "is-string"] = "IsString", e4[e4.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", e4))(Ae3 || {});
var Te3 = ((t3) => (t3[t3.Contains = "contains"] = "Contains", t3[t3.HasNumberCount = "has-number-count"] = "HasNumberCount", t3[t3.HasLowercaseCount = "has-lowercase-count"] = "HasLowercaseCount", t3[t3.HasLetterCount = "has-letter-count"] = "HasLetterCount", t3[t3.HasSpacesCount = "has-spaces-count"] = "HasSpacesCount", t3[t3.HasSymbolCount = "has-symbol-count"] = "HasSymbolCount", t3[t3.HasUppercaseCount = "has-uppercase-count"] = "HasUppercaseCount", t3[t3.IsAlpha = "is-alpha"] = "IsAlpha", t3[t3.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", t3[t3.IsAscii = "is-ascii"] = "IsAscii", t3[t3.IsBase64 = "is-base-64"] = "IsBase64", t3[t3.IsColor = "is-color"] = "IsColor", t3[t3.IsComplexEnough = "is-complex-enough"] = "IsComplexEnough", t3[t3.IsCreditCard = "is-credit-card"] = "IsCreditCard", t3[t3.IsDataURI = "is-data-uri"] = "IsDataURI", t3[t3.IsDomainName = "is-domain-name"] = "IsDomainName", t3[t3.IsEmailAddress = "is-email-address"] = "IsEmailAddress", t3[t3.IsEthereumAddress = "is-ethereum-address"] = "IsEthereumAddress", t3[t3.IsEAN = "is-ean"] = "IsEAN", t3[t3.IsEIN = "is-ein"] = "IsEIN", t3[t3.IsEqual = "is-equal"] = "IsEqual", t3[t3.IsIBAN = "is-iban"] = "IsIBAN", t3[t3.IsHSLColor = "is-hsl-color"] = "IsHSLColor", t3[t3.IsHexColor = "is-hex-color"] = "IsHexColor", t3[t3.IsHexadecimal = "is-hexadecimal"] = "IsHexadecimal", t3[t3.IsIdentityCardCode = "is-identity-card-code"] = "IsIdentityCardCode", t3[t3.IsIMEI = "is-imei"] = "IsIMEI", t3[t3.IsInList = "is-in-list"] = "IsInList", t3[t3.IsIPAddress = "is-ip-address"] = "IsIPAddress", t3[t3.IsInIPAddressRange = "is-in-ip-address-range"] = "IsInIPAddressRange", t3[t3.IsISBN = "is-isbn"] = "IsISBN", t3[t3.IsISIN = "is-isin"] = "IsISIN", t3[t3.IsISMN = "is-ismn"] = "IsISMN", t3[t3.IsISRC = "is-isrc"] = "IsISRC", t3[t3.IsISSN = "is-issn"] = "IsISSN", t3[t3.IsLanguage = "is-language"] = "IsLanguage", t3[t3.IsLatitude = "is-latitude"] = "IsLatitude", t3[t3.IsLongitude = "is-longitude"] = "IsLongitude", t3[t3.IsLengthEqual = "is-length-equal"] = "IsLengthEqual", t3[t3.IsLengthGreaterThan = "is-length-greater-than"] = "IsLengthGreaterThan", t3[t3.IsLengthGreaterThanOrEqual = "is-length-great-than-or-equal"] = "IsLengthGreaterThanOrEqual", t3[t3.IsLengthLessThan = "is-length-less-than"] = "IsLengthLessThan", t3[t3.IsLengthLessThanOrEqual = "is-length-less-than-or-equal"] = "IsLengthLessThanOrEqual", t3[t3.IsLicensePlateNumber = "is-license-plate-number"] = "IsLicensePlateNumber", t3[t3.IsLowercase = "is-lowercase"] = "IsLowercase", t3[t3.IsOctal = "is-octal"] = "IsOctal", t3[t3.IsMACAddress = "is-mac-address"] = "IsMACAddress", t3[t3.IsMD5 = "is-md5"] = "IsMD5", t3[t3.IsMagnetURI = "is-magnet-uri"] = "IsMagnetURI", t3[t3.IsMarkdown = "is-markdown"] = "IsMarkdown", t3[t3.IsMimeType = "is-mime-type"] = "IsMimeType", t3[t3.IsMonth = "is-month"] = "IsMonth", t3[t3.IsNotInIPAddressRange = "is-not-in-ip-address-range"] = "IsNotInIPAddressRange", t3[t3.IsNotInList = "is-not-in-list"] = "IsNotInList", t3[t3.IsNotNull = "is-not-null"] = "IsNotNull", t3[t3.IsNotRegexMatch = "is-not-regex-match"] = "IsNotRegexMatch", t3[t3.IsNumber = "is-number"] = "IsNumber", t3[t3.IsNumeric = "is-numeric"] = "IsNumeric", t3[t3.IsPassportNumber = "is-passport-number"] = "IsPassportNumber", t3[t3.IsPhoneNumber = "is-phone-number"] = "IsPhoneNumber", t3[t3.IsPort = "is-port"] = "IsPort", t3[t3.IsPostalCode = "is-postal-code"] = "IsPostalCode", t3[t3.IsProvince = "is-province"] = "IsProvince", t3[t3.IsRegexMatch = "is-regex-match"] = "IsRegexMatch", t3[t3.IsSemanticVersion = "is-semantic-version"] = "IsSemanticVersion", t3[t3.IsSlug = "is-slug"] = "IsSlug", t3[t3.IsSSN = "is-ssn"] = "IsSSN", t3[t3.IsState = "is-state"] = "IsState", t3[t3.IsStreetAddress = "is-street-address"] = "IsStreetAddress", t3[t3.IsString = "is-string"] = "IsString", t3[t3.IsTaxIDNumber = "is-tax-id-number"] = "IsTaxIDNumber", t3[t3.IsURL = "is-url"] = "IsURL", t3[t3.IsUUID = "is-uuid"] = "IsUUID", t3[t3.IsUppercase = "is-uppercase"] = "IsUppercase", t3[t3.IsVATIDNumber = "is-vat-id-number"] = "IsVATIDNumber", t3[t3.IsWeekday = "is-weekday"] = "IsWeekday", t3[t3.IsWeekend = "is-weekend"] = "IsWeekend", t3[t3.IsYear = "is-year"] = "IsYear", t3))(Te3 || {});
var fe3 = ((p4) => (p4[p4.Contains = "contains"] = "Contains", p4[p4.IsAlpha = "is-alpha"] = "IsAlpha", p4[p4.IsAlphanumeric = "is-alphanumeric"] = "IsAlphanumeric", p4[p4.IsInList = "is-in-list"] = "IsInList", p4[p4.IsMarkdown = "is-markdown"] = "IsMarkdown", p4[p4.IsNotInList = "is-not-in-list"] = "IsNotInList", p4[p4.IsNumeric = "is-numeric"] = "IsNumeric", p4[p4.IsLowercase = "is-lowercase"] = "IsLowercase", p4[p4.IsString = "is-string"] = "IsString", p4[p4.IsUppercase = "is-uppercase"] = "IsUppercase", p4))(fe3 || {});
var _e3 = ((e4) => (e4.InvalidCharacters = "invalid-characters", e4.InvalidPattern = "invalid-pattern", e4.NotComplexEnough = "not-complex-enough", e4.NotUnique = "not-unique", e4.NotValidEmail = "not-valid-email", e4.TooLong = "too-long", e4.TooShort = "too-short", e4.Required = "required", e4))(_e3 || {});
var he3 = ((N3) => (N3[N3.Allowed = 0] = "Allowed", N3[N3.Blocked = 1] = "Blocked", N3))(he3 || {});
var Se3 = ((d2) => (d2.Canceled = "Canceled", d2.Completed = "Completed", d2.Created = "Created", d2.Faulted = "Faulted", d2.Queued = "Queued", d2.Running = "Running", d2.Waiting = "Waiting", d2))(Se3 || {});
var Ie3 = ((d2) => (d2.Archived = "ARCHIVED", d2.Compromised = "COMPROMISED", d2.Confirmed = "CONFIRMED", d2.ForcePasswordChange = "FORCE_CHANGE_PASSWORD", d2.ResetRequired = "RESET_REQUIRED", d2.Unconfirmed = "UNCONFIRMED", d2.Unknown = "UNKNOWN", d2))(Ie3 || {});
var be3 = ((o2) => (o2.Owner = "Owner", o2.Admin = "Admin", o2.User = "User", o2.Visitor = "Visitor", o2))(be3 || {});
var ve3 = ((d2) => (d2.RequiresPaymentMethod = "requires_payment_method", d2.RequiresConfirmation = "requires_confirmation", d2.RequiresAction = "requires_action", d2.Processing = "processing", d2.RequiresCapture = "requires_capture", d2.Canceled = "canceled", d2.Succeeded = "succeeded", d2))(ve3 || {});
var Ue3 = ((d2) => (d2.Incomplete = "incomplete", d2.IncompleteExpired = "incomplete_expired", d2.Trialing = "trialing", d2.Active = "active", d2.PastDue = "past_due", d2.Canceled = "canceled", d2.Unpaid = "unpaid", d2))(Ue3 || {});
var Ee3 = ((o2) => (o2.Monthly = "monthly", o2.Quarterly = "quarterly", o2.Yearly = "yearly", o2.Lifetime = "lifetime", o2))(Ee3 || {});
var ye3 = ((o2) => (o2.Delivered = "delivered", o2.Read = "read", o2.Sending = "sending", o2.Sent = "sent", o2))(ye3 || {});
var xe3 = ((A2) => (A2.Audio = "audio", A2.File = "file", A2.Image = "image", A2.Text = "text", A2.Video = "video", A2))(xe3 || {});
var Ne3 = ((o2) => (o2.Audio = "audio", o2.File = "file", o2.Image = "image", o2.Video = "video", o2))(Ne3 || {});
var Pe3 = ((e4) => (e4.Angry = "angry", e4.Laugh = "laugh", e4.Like = "like", e4.Love = "love", e4.Sad = "sad", e4.Wow = "wow", e4.Wink = "wink", e4.Yay = "yay", e4))(Pe3 || {});
var ke3 = ((N3) => (N3.Email = "email", N3.PhoneNumber = "phone_number", N3))(ke3 || {});
var Me3 = ((d2) => (d2.Analytics = "analytics", d2.Critical = "critical", d2.Debug = "debug", d2.Exception = "exception", d2.Http = "http", d2.Info = "info", d2.Warning = "warning", d2))(Me3 || {});
var ze3 = ((_3) => (_3.Delete = "delete", _3.Get = "get", _3.Head = "head", _3.Patch = "patch", _3.Post = "post", _3.Put = "put", _3))(ze3 || {});
var Le3 = ((u3) => (u3[u3.CONTINUE = 100] = "CONTINUE", u3[u3.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", u3[u3.PROCESSING = 102] = "PROCESSING", u3[u3.OK = 200] = "OK", u3[u3.CREATED = 201] = "CREATED", u3[u3.ACCEPTED = 202] = "ACCEPTED", u3[u3.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", u3[u3.NO_CONTENT = 204] = "NO_CONTENT", u3[u3.RESET_CONTENT = 205] = "RESET_CONTENT", u3[u3.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", u3[u3.MULTI_STATUS = 207] = "MULTI_STATUS", u3[u3.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", u3[u3.IM_USED = 226] = "IM_USED", u3[u3.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", u3[u3.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", u3[u3.FOUND = 302] = "FOUND", u3[u3.SEE_OTHER = 303] = "SEE_OTHER", u3[u3.NOT_MODIFIED = 304] = "NOT_MODIFIED", u3[u3.USE_PROXY = 305] = "USE_PROXY", u3[u3.SWITCH_PROXY = 306] = "SWITCH_PROXY", u3[u3.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", u3[u3.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", u3[u3.BAD_REQUEST = 400] = "BAD_REQUEST", u3[u3.UNAUTHORIZED = 401] = "UNAUTHORIZED", u3[u3.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", u3[u3.FORBIDDEN = 403] = "FORBIDDEN", u3[u3.NOT_FOUND = 404] = "NOT_FOUND", u3[u3.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", u3[u3.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", u3[u3.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", u3[u3.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", u3[u3.CONFLICT = 409] = "CONFLICT", u3[u3.GONE = 410] = "GONE", u3[u3.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", u3[u3.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", u3[u3.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", u3[u3.URI_TOO_LONG = 414] = "URI_TOO_LONG", u3[u3.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", u3[u3.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", u3[u3.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", u3[u3.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", u3[u3.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", u3[u3.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", u3[u3.LOCKED = 423] = "LOCKED", u3[u3.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", u3[u3.TOO_EARLY = 425] = "TOO_EARLY", u3[u3.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", u3[u3.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", u3[u3.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", u3[u3.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", u3[u3.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", u3[u3.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", u3[u3.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", u3[u3.BAD_GATEWAY = 502] = "BAD_GATEWAY", u3[u3.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", u3[u3.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", u3[u3.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", u3[u3.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", u3[u3.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", u3[u3.LOOP_DETECTED = 508] = "LOOP_DETECTED", u3[u3.BANDWIDTH_LIMIT_EXCEEDED = 509] = "BANDWIDTH_LIMIT_EXCEEDED", u3[u3.NOT_EXTENDED = 510] = "NOT_EXTENDED", u3[u3.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", u3))(Le3 || {});
var k4 = ((n2) => (n2.Afghanistan = "AF", n2.Albania = "AL", n2.Algeria = "DZ", n2.AmericanSamoa = "AS", n2.Andorra = "AD", n2.Angola = "AO", n2.Anguilla = "AI", n2.Antarctica = "AQ", n2.AntiguaAndBarbuda = "AG", n2.Argentina = "AR", n2.Armenia = "AM", n2.Aruba = "AW", n2.Australia = "AU", n2.Austria = "AT", n2.Azerbaijan = "AZ", n2.Bahamas = "BS", n2.Bahrain = "BH", n2.Bangladesh = "BD", n2.Barbados = "BB", n2.Belarus = "BY", n2.Belgium = "BE", n2.Belize = "BZ", n2.Benin = "BJ", n2.Bermuda = "BM", n2.Bhutan = "BT", n2.Bolivia = "BO", n2.BosniaAndHerzegovina = "BA", n2.Botswana = "BW", n2.BouvetIsland = "BV", n2.Brazil = "BR", n2.BritishIndianOceanTerritory = "IO", n2.Brunei = "BN", n2.Bulgaria = "BG", n2.BurkinaFaso = "BF", n2.Burundi = "BI", n2.Cambodia = "KH", n2.Cameroon = "CM", n2.Canada = "CA", n2.CapeVerde = "CV", n2.CaymanIslands = "KY", n2.CentralAfricanRepublic = "CF", n2.Chad = "TD", n2.Chile = "CL", n2.China = "CN", n2.ChristmasIsland = "CX", n2.CocosKeelingIslands = "CC", n2.Colombia = "CO", n2.Comoros = "KM", n2.Congo = "CG", n2.CongoTheDemocraticRepublicOfThe = "CD", n2.CookIslands = "CK", n2.CostaRica = "CR", n2.CoteDIvoire = "CI", n2.Croatia = "HR", n2.Cuba = "CU", n2.Cyprus = "CY", n2.CzechRepublic = "CZ", n2.Denmark = "DK", n2.Djibouti = "DJ", n2.Dominica = "DM", n2.DominicanRepublic = "DO", n2.Ecuador = "EC", n2.Egypt = "EG", n2.ElSalvador = "SV", n2.EquatorialGuinea = "GQ", n2.Eritrea = "ER", n2.Estonia = "EE", n2.Ethiopia = "ET", n2.FalklandIslands = "FK", n2.FaroeIslands = "FO", n2.Fiji = "FJ", n2.Finland = "FI", n2.France = "FR", n2.FrenchGuiana = "GF", n2.FrenchPolynesia = "PF", n2.FrenchSouthernTerritories = "TF", n2.Gabon = "GA", n2.Gambia = "GM", n2.Georgia = "GE", n2.Germany = "DE", n2.Ghana = "GH", n2.Gibraltar = "GI", n2.Greece = "GR", n2.Greenland = "GL", n2.Grenada = "GD", n2.Guadeloupe = "GP", n2.Guam = "GU", n2.Guatemala = "GT", n2.Guernsey = "GG", n2.Guinea = "GN", n2.GuineaBissau = "GW", n2.Guyana = "GY", n2.Haiti = "HT", n2.HeardIslandMcdonaldIslands = "HM", n2.HolySeeVaticanCityState = "VA", n2.Honduras = "HN", n2.HongKong = "HK", n2.Hungary = "HU", n2.Iceland = "IS", n2.India = "IN", n2.Indonesia = "ID", n2.Iran = "IR", n2.Iraq = "IQ", n2.Ireland = "IE", n2.IsleOfMan = "IM", n2.Israel = "IL", n2.Italy = "IT", n2.Jamaica = "JM", n2.Japan = "JP", n2.Jersey = "JE", n2.Jordan = "JO", n2.Kazakhstan = "KZ", n2.Kenya = "KE", n2.Kiribati = "KI", n2.Kuwait = "KW", n2.Kyrgyzstan = "KG", n2.Laos = "LA", n2.Latvia = "LV", n2.Lebanon = "LB", n2.Lesotho = "LS", n2.Liberia = "LR", n2.Libya = "LY", n2.Liechtenstein = "LI", n2.Lithuania = "LT", n2.Luxembourg = "LU", n2.Macau = "MO", n2.Madagascar = "MG", n2.Malawi = "MW", n2.Malaysia = "MY", n2.Maldives = "MV", n2.Mali = "ML", n2.Malta = "MT", n2.MarshallIslands = "MH", n2.Martinique = "MQ", n2.Mauritania = "MR", n2.Mauritius = "MU", n2.Mayotte = "YT", n2.Mexico = "MX", n2.MicronesiaFederatedStatesOf = "FM", n2.Moldova = "MD", n2.Monaco = "MC", n2.Mongolia = "MN", n2.Montenegro = "ME", n2.Montserrat = "MS", n2.Morocco = "MA", n2.Mozambique = "MZ", n2.Myanmar = "MM", n2.Namibia = "NA", n2.Nauru = "NR", n2.Nepal = "NP", n2.Netherlands = "NL", n2.NetherlandsAntilles = "AN", n2.NewCaledonia = "NC", n2.NewZealand = "NZ", n2.NorthKorea = "KP", n2.Nicaragua = "NI", n2.Niger = "NE", n2.Nigeria = "NG", n2.Niue = "NU", n2.NorfolkIsland = "NF", n2.NorthMacedonia = "MK", n2.NorthernMarianaIslands = "MP", n2.Norway = "NO", n2.Oman = "OM", n2.Pakistan = "PK", n2.Palau = "PW", n2.PalestinianTerritoryOccupied = "PS", n2.Panama = "PA", n2.PapuaNewGuinea = "PG", n2.Paraguay = "PY", n2.Peru = "PE", n2.Philippines = "PH", n2.Pitcairn = "PN", n2.Poland = "PL", n2.Portugal = "PT", n2.PuertoRico = "PR", n2.Qatar = "QA", n2.Reunion = "RE", n2.Romania = "RO", n2.RussianFederation = "RU", n2.Rwanda = "RW", n2.SaintBarthelemy = "BL", n2.SaintHelena = "SH", n2.SaintKittsAndNevis = "KN", n2.SaintLucia = "LC", n2.SaintMartin = "MF", n2.SaintPierreAndMiquelon = "PM", n2.SaintVincentAndTheGrenadines = "VC", n2.Samoa = "WS", n2.SanMarino = "SM", n2.SaoTomeAndPrincipe = "ST", n2.SaudiArabia = "SA", n2.Senegal = "SN", n2.Serbia = "RS", n2.SerbiaAndMontenegro = "CS", n2.Seychelles = "SC", n2.SierraLeone = "SL", n2.Singapore = "SG", n2.Slovakia = "SK", n2.Slovenia = "SI", n2.SolomonIslands = "SB", n2.Somalia = "SO", n2.SouthAfrica = "ZA", n2.SouthGeorgiaAndTheSouthSandwichIslands = "GS", n2.SouthKorea = "KR", n2.Spain = "ES", n2.SriLanka = "LK", n2.Sudan = "SD", n2.Suriname = "SR", n2.SvalbardAndJanMayen = "SJ", n2.Swaziland = "SZ", n2.Sweden = "SE", n2.Switzerland = "CH", n2.Syria = "SY", n2.Taiwan = "TW", n2.Tajikistan = "TJ", n2.Tanzania = "TZ", n2.Thailand = "TH", n2.TimorLeste = "TL", n2.Togo = "TG", n2.Tokelau = "TK", n2.Tonga = "TO", n2.TrinidadAndTobago = "TT", n2.Tunisia = "TN", n2.Turkey = "TR", n2.Turkmenistan = "TM", n2.TurksAndCaicosIslands = "TC", n2.Tuvalu = "TV", n2.Uganda = "UG", n2.Ukraine = "UA", n2.UnitedArabEmirates = "AE", n2.UnitedKingdom = "GB", n2.UnitedStates = "US", n2.UnitedStatesMinorOutlyingIslands = "UM", n2.Uruguay = "UY", n2.Uzbekistan = "UZ", n2.Vanuatu = "VU", n2.Venezuela = "VE", n2.Vietnam = "VN", n2.VirginIslandsBritish = "VG", n2.VirginIslandsUS = "VI", n2.WallisAndFutuna = "WF", n2.WesternSahara = "EH", n2.Yemen = "YE", n2.Zambia = "ZM", n2.Zimbabwe = "ZW", n2))(k4 || {});
var D4 = ((s3) => (s3.AfghanistanAfghani = "AFN", s3.AlbaniaLek = "ALL", s3.ArmeniaDram = "AMD", s3.AlgeriaDinar = "DZD", s3.AmericanSamoaTala = "WST", s3.AngolaKwanza = "AOA", s3.ArgentinaPeso = "ARS", s3.AustraliaDollar = "AUD", s3.ArubaFlorin = "AWG", s3.AzerbaijanNewManat = "AZN", s3.BosniaAndHerzegovinaConvertibleMark = "BAM", s3.BahrainDinar = "BHD", s3.BarbadosDollar = "BBD", s3.BangladeshTaka = "BDT", s3.BelgiumFranc = "BGN", s3.BermudaDollar = "BMD", s3.BruneiDollar = "BND", s3.BoliviaBoliviano = "BOB", s3.BrazilReal = "BRL", s3.BahamasDollar = "BSD", s3.BhutanNgultrum = "BTN", s3.BotswanaPula = "BWP", s3.BelarusRuble = "BYN", s3.BelizeDollar = "BZD", s3.BulgariaLev = "BGN", s3.BurundiFranc = "BIF", s3.BritishPound = "GBP", s3.CanadaDollar = "CAD", s3.CambodiaRiel = "KHR", s3.ComorosFranc = "KMF", s3.CaymanIslandsDollar = "KYD", s3.ChilePeso = "CLP", s3.ChinaYuan = "CNY", s3.ColombiaPeso = "COP", s3.CostaRicaColon = "CRC", s3.CroatiaKuna = "HRK", s3.CubaConvertiblePeso = "CUC", s3.CubaPeso = "CUP", s3.CapeVerdeEscudo = "CVE", s3.CyprusPound = "CYP", s3.CzechRepublicKoruna = "CZK", s3.DjiboutiFranc = "DJF", s3.DenmarkKrone = "DKK", s3.DominicaDollar = "XCD", s3.DominicanRepublicPeso = "DOP", s3.EastCaribbeanDollar = "XCD", s3.EgyptPound = "EGP", s3.ElSalvadorColon = "SVC", s3.EquatorialGuineaEkwele = "GQE", s3.EritreaNakfa = "ERN", s3.EstoniaKroon = "EEK", s3.EthiopiaBirr = "ETB", s3.Euro = "EUR", s3.FijiDollar = "FJD", s3.FalklandIslandsPound = "FKP", s3.GambiaDalasi = "GMD", s3.GabonFranc = "GMD", s3.GeorgiaLari = "GEL", s3.GhanaCedi = "GHS", s3.GibraltarPound = "GIP", s3.GuatemalaQuetzal = "GTQ", s3.GuernseyPound = "GGP", s3.GuineaBissauPeso = "GWP", s3.GuyanaDollar = "GYD", s3.HongKongDollar = "HKD", s3.HondurasLempira = "HNL", s3.HaitiGourde = "HTG", s3.HungaryForint = "HUF", s3.IndonesiaRupiah = "IDR", s3.IsleOfManPound = "IMP", s3.IsraelNewShekel = "ILS", s3.IndiaRupee = "INR", s3.IraqDinar = "IQD", s3.IranRial = "IRR", s3.IcelandKrona = "ISK", s3.JamaicaDollar = "JMD", s3.JapanYen = "JPY", s3.JerseyPound = "JEP", s3.JordanDinar = "JOD", s3.KazakhstanTenge = "KZT", s3.KenyaShilling = "KES", s3.KyrgyzstanSom = "KGS", s3.NorthKoreaWon = "KPW", s3.SouthKoreaWon = "KRW", s3.KuwaitDinar = "KWD", s3.LaosKip = "LAK", s3.LebanonPound = "LBP", s3.LiberiaDollar = "LRD", s3.LesothoLoti = "LSL", s3.LibyanDinar = "LYD", s3.LithuaniaLitas = "LTL", s3.LatviaLats = "LVL", s3.LibyaDinar = "LYD", s3.MacauPataca = "MOP", s3.MaldivesRufiyaa = "MVR", s3.MalawiKwacha = "MWK", s3.MaltaLira = "MTL", s3.MauritiusRupee = "MUR", s3.MongoliaTughrik = "MNT", s3.MoroccoDirham = "MAD", s3.MoldovaLeu = "MDL", s3.MozambiqueMetical = "MZN", s3.MadagascarAriary = "MGA", s3.MacedoniaDenar = "MKD", s3.MexicoPeso = "MXN", s3.MalaysiaRinggit = "MYR", s3.MyanmarKyat = "MMK", s3.MicronesiaFederatedStatesDollar = "USD", s3.NicaraguaCordoba = "NIO", s3.NamibiaDollar = "NAD", s3.NetherlandsAntillesGuilder = "ANG", s3.NewCaledoniaFranc = "XPF", s3.NigeriaNaira = "NGN", s3.NicaraguaCordobaOro = "NIO", s3.NigerCFAFranc = "XOF", s3.NorwayKrone = "NOK", s3.NepalRupee = "NPR", s3.NewZealandDollar = "NZD", s3.OmanRial = "OMR", s3.PanamaBalboa = "PAB", s3.PeruNuevoSol = "PEN", s3.PapuaNewGuineaKina = "PGK", s3.PhilippinesPeso = "PHP", s3.PakistanRupee = "PKR", s3.PeruNuevo = "PEN", s3.PolandZloty = "PLN", s3.ParaguayGuarani = "PYG", s3.QatarRial = "QAR", s3.RomaniaNewLeu = "RON", s3.SerbiaDinar = "RSD", s3.SriLankaRupee = "LKR", s3.RussiaRuble = "RUB", s3.RwandaFranc = "RWF", s3.SaudiArabiaRiyal = "SAR", s3.SlovakiaKoruna = "SKK", s3.SloveniaTolar = "SIT", s3.SolomonIslandsDollar = "SBD", s3.SeychellesRupee = "SCR", s3.SudanPound = "SDG", s3.SwedenKrona = "SEK", s3.SingaporeDollar = "SGD", s3.SaintHelenaPound = "SHP", s3.SierraLeoneLeone = "SLL", s3.SomaliaShilling = "SOS", s3.SurinameDollar = "SRD", s3.SintMaartenPound = "SXD", s3.SyriaPound = "SYP", s3.SwazilandLilangeni = "SZL", s3.SwitzerlandFranc = "CHF", s3.ThailandBaht = "THB", s3.TajikistanSomoni = "TJS", s3.TurkmenistanManat = "TMT", s3.TunisiaDinar = "TND", s3.TongaPaanga = "TOP", s3.TurkeyLira = "TRY", s3.TrinidadAndTobagoDollar = "TTD", s3.TaiwanNewDollar = "TWD", s3.TanzaniaShilling = "TZS", s3.UnitedArabEmiratesDirham = "AED", s3.UkraineHryvnia = "UAH", s3.UgandaShilling = "UGX", s3.UnitedKingdomPound = "GBP", s3.UnitedStatesDollar = "USD", s3.UruguayPeso = "UYU", s3.UzbekistanSom = "UZS", s3.VenezuelaBolivar = "VEF", s3.VietnamDong = "VND", s3.VanuatuVatu = "VUV", s3.SamoaTala = "WST", s3.YemenRial = "YER", s3.SouthAfricaRand = "ZAR", s3.ZambiaKwacha = "ZMW", s3.ZimbabweDollar = "ZWL", s3))(D4 || {});
var Be3 = ((b3) => (b3.Bitcoin = "BTC", b3.Ethereum = "ETH", b3.Litecoin = "LTC", b3.Ripple = "XRP", b3.Dash = "DASH", b3.Zcash = "ZEC", b3.Dogecoin = "DOGE", b3.Monero = "XMR", b3.BitcoinCash = "BCH", b3.EOS = "EOS", b3.Binance = "BNB", b3.Stellar = "XLM", b3.Cardano = "ADA", b3.IOTA = "IOTA", b3.Tezos = "XTZ", b3.NEO = "NEO", b3.TRON = "TRX", b3.EOSClassic = "EOSC", b3.Ontology = "ONT", b3.VeChain = "VEN", b3.QTUM = "QTUM", b3.Lisk = "LSK", b3.Waves = "WAVES", b3.OmiseGO = "OMG", b3.Zilliqa = "ZIL", b3.BitcoinGold = "BTG", b3.Decred = "DCR", b3.Stratis = "STRAT", b3.Populous = "PPT", b3.Augur = "REP", b3.Golem = "GNT", b3.Siacoin = "SC", b3.BasicAttentionToken = "BAT", b3.ZCoin = "XZC", b3.StratisHedged = "SNT", b3.VeChainHedged = "VEN", b3.PowerLedger = "POWR", b3.WavesHedged = "WAVE", b3.ZilliqaHedged = "ZRX", b3.BitcoinDiamond = "BCD", b3.DigiByte = "DGB", b3.DigiByteHedged = "DGB", b3.Bytecoin = "BCN", b3.BytecoinHedged = "BCN", b3))(Be3 || {});
var G4 = ((m3) => (m3.Afrikaans = "af", m3.Albanian = "sq", m3.Amharic = "am", m3.Arabic = "ar", m3.Armenian = "hy", m3.Azerbaijani = "az", m3.Bashkir = "ba", m3.Basque = "eu", m3.Belarusian = "be", m3.Bengali = "bn", m3.Berber = "ber", m3.Bhutani = "dz", m3.Bihari = "bh", m3.Bislama = "bi", m3.Bosnian = "bs", m3.Breten = "br", m3.Bulgarian = "bg", m3.Burmese = "my", m3.Cantonese = "yue", m3.Catalan = "ca", m3.Chinese = "zh", m3.Chuvash = "cv", m3.Corsican = "co", m3.Croatian = "hr", m3.Czech = "cs", m3.Danish = "da", m3.Dari = "prs", m3.Divehi = "dv", m3.Dutch = "nl", m3.English = "en", m3.Esperanto = "eo", m3.Estonian = "et", m3.Faroese = "fo", m3.Farsi = "fa", m3.Filipino = "fil", m3.Finnish = "fi", m3.French = "fr", m3.Frisian = "fy", m3.Galician = "gl", m3.Georgian = "ka", m3.German = "de", m3.Greek = "el", m3.Greenlandic = "kl", m3.Gujarati = "gu", m3.Haitian = "ht", m3.Hausa = "ha", m3.Hebrew = "he", m3.Hindi = "hi", m3.Hungarian = "hu", m3.Icelandic = "is", m3.Igbo = "ig", m3.Indonesian = "id", m3.Irish = "ga", m3.Italian = "it", m3.Japanese = "ja", m3.Javanese = "jv", m3.Kannada = "kn", m3.Karelian = "krl", m3.Kazakh = "kk", m3.Khmer = "km", m3.Komi = "kv", m3.Konkani = "kok", m3.Korean = "ko", m3.Kurdish = "ku", m3.Kyrgyz = "ky", m3.Lao = "lo", m3.Latin = "la", m3.Latvian = "lv", m3.Lithuanian = "lt", m3.Luxembourgish = "lb", m3.Ossetian = "os", m3.Macedonian = "mk", m3.Malagasy = "mg", m3.Malay = "ms", m3.Malayalam = "ml", m3.Maltese = "mt", m3.Maori = "mi", m3.Marathi = "mr", m3.Mari = "mhr", m3.Mongolian = "mn", m3.Montenegrin = "me", m3.Nepali = "ne", m3.NorthernSotho = "nso", m3.Norwegian = "no", m3.NorwegianBokmal = "nb", m3.NorwegianNynorsk = "nn", m3.Oriya = "or", m3.Pashto = "ps", m3.Persian = "fa", m3.Polish = "pl", m3.Portuguese = "pt", m3.Punjabi = "pa", m3.Quechua = "qu", m3.Romanian = "ro", m3.Russian = "ru", m3.Sakha = "sah", m3.Sami = "se", m3.Samoan = "sm", m3.Sanskrit = "sa", m3.Scots = "gd", m3.Serbian = "sr", m3.SerbianCyrillic = "sr-Cyrl", m3.Sesotho = "st", m3.Shona = "sn", m3.Sindhi = "sd", m3.Sinhala = "si", m3.Slovak = "sk", m3.Slovenian = "sl", m3.Somali = "so", m3.Spanish = "es", m3.Sudanese = "su", m3.Sutu = "sx", m3.Swahili = "sw", m3.Swedish = "sv", m3.Syriac = "syr", m3.Tagalog = "tl", m3.Tajik = "tg", m3.Tamazight = "tmh", m3.Tamil = "ta", m3.Tatar = "tt", m3.Telugu = "te", m3.Thai = "th", m3.Tibetan = "bo", m3.Tsonga = "ts", m3.Tswana = "tn", m3.Turkish = "tr", m3.Turkmen = "tk", m3.Ukrainian = "uk", m3.Urdu = "ur", m3.Uzbek = "uz", m3.Vietnamese = "vi", m3.Welsh = "cy", m3.Xhosa = "xh", m3.Yiddish = "yi", m3.Yoruba = "yo", m3.Zulu = "zu", m3))(G4 || {});
var z4 = ((i3) => (i3.Afrikaans = "af", i3.AfrikaansSouthAfrica = "af-ZA", i3.Albanian = "sq", i3.AlbanianAlbania = "sq-AL", i3.Amharic = "am", i3.AmharicEthiopia = "am-ET", i3.Arabic = "ar", i3.ArabicAlgeria = "ar-DZ", i3.ArabicBahrain = "ar-BH", i3.ArabicEgypt = "ar-EG", i3.ArabicIraq = "ar-IQ", i3.ArabicJordan = "ar-JO", i3.ArabicKuwait = "ar-KW", i3.ArabicLebanon = "ar-LB", i3.ArabicLibya = "ar-LY", i3.ArabicMorocco = "ar-MA", i3.ArabicOman = "ar-OM", i3.ArabicQatar = "ar-QA", i3.ArabicSaudiArabia = "ar-SA", i3.ArabicSyria = "ar-SY", i3.ArabicTunisia = "ar-TN", i3.ArabicUnitedArabEmirates = "ar-AE", i3.ArabicYemen = "ar-YE", i3.Armenian = "hy", i3.ArmenianArmenia = "hy-AM", i3.Azerbaijani = "az", i3.AzerbaijaniAzerbaijan = "az-AZ", i3.AzerbaijaniCyrillicAzerbaijan = "az-Cyrl-AZ", i3.Bashkir = "ba", i3.Basque = "eu", i3.BasqueSpain = "eu-ES", i3.Belarusian = "be", i3.BelarusianBelarus = "be-BY", i3.Bengali = "bn", i3.BengaliBangladesh = "bn-BD", i3.BengaliIndia = "bn-IN", i3.Berber = "ber", i3.Bhutani = "dz", i3.BhutaniBhutan = "dz-BT", i3.Bosnian = "bs", i3.BosnianBosniaAndHerzegovina = "bs-BA", i3.Breton = "br", i3.Bulgarian = "bg", i3.BulgarianBosniaAndHerzegovina = "bg-BG", i3.BulgarianBulgaria = "bg-BG", i3.Burmese = "my", i3.BurmeseMyanmar = "my-MM", i3.Cantonese = "yue", i3.CantoneseHongKong = "yue-HK", i3.Catalan = "ca", i3.CatalanSpain = "ca-ES", i3.Chechen = "ce", i3.Cherokee = "chr", i3.Chinese = "zh", i3.ChineseSimplified = "zh-Hans", i3.ChineseSimplifiedChina = "zh-Hans-CN", i3.ChineseSimplifiedHongKong = "zh-Hans-HK", i3.ChineseSimplifiedMacau = "zh-Hans-MO", i3.ChineseSimplifiedSingapore = "zh-Hans-SG", i3.ChineseTraditional = "zh-Hant", i3.ChineseTraditionalHongKong = "zh-Hant-HK", i3.ChineseTraditionalMacau = "zh-Hant-MO", i3.ChineseTraditionalSingapore = "zh-Hant-SG", i3.ChineseTraditionalTaiwan = "zh-Hant-TW", i3.Chuvash = "cv", i3.CorsicanFrance = "co-FR", i3.Croatian = "hr", i3.CroatianBosniaAndHerzegovina = "hr-BA", i3.CroatianCroatia = "hr-HR", i3.Czech = "cs", i3.CzechCzechRepublic = "cs-CZ", i3.Danish = "da", i3.DanishDenmark = "da-DK", i3.Dari = "prs", i3.DariAfghanistan = "prs-AF", i3.Divehi = "dv", i3.DivehiMaldives = "dv-MV", i3.Dutch = "nl", i3.DutchBelgium = "nl-BE", i3.DutchNetherlands = "nl-NL", i3.English = "en", i3.EnglishAustralia = "en-AU", i3.EnglishBelgium = "en-BE", i3.EnglishBelize = "en-BZ", i3.EnglishCanada = "en-CA", i3.EnglishCaribbean = "en-029", i3.EnglishIreland = "en-IE", i3.EnglishJamaica = "en-JM", i3.EnglishNewZealand = "en-NZ", i3.EnglishPhilippines = "en-PH", i3.EnglishSingapore = "en-SG", i3.EnglishSouthAfrica = "en-ZA", i3.EnglishTrinidadAndTobago = "en-TT", i3.EnglishUnitedKingdom = "en-GB", i3.EnglishUnitedStates = "en-US", i3.EnglishZimbabwe = "en-ZW", i3.Esperanto = "eo", i3.Estonian = "et", i3.EstonianEstonia = "et-EE", i3.Faroese = "fo", i3.FaroeseFaroeIslands = "fo-FO", i3.Farsi = "fa", i3.FarsiIran = "fa-IR", i3.Filipino = "fil", i3.FilipinoPhilippines = "fil-PH", i3.Finnish = "fi", i3.FinnishFinland = "fi-FI", i3.French = "fr", i3.FrenchBelgium = "fr-BE", i3.FrenchCanada = "fr-CA", i3.FrenchFrance = "fr-FR", i3.FrenchLuxembourg = "fr-LU", i3.FrenchMonaco = "fr-MC", i3.FrenchReunion = "fr-RE", i3.FrenchSwitzerland = "fr-CH", i3.Frisian = "fy", i3.FrisianNetherlands = "fy-NL", i3.Galician = "gl", i3.GalicianSpain = "gl-ES", i3.Georgian = "ka", i3.GeorgianGeorgia = "ka-GE", i3.German = "de", i3.GermanAustria = "de-AT", i3.GermanBelgium = "de-BE", i3.GermanGermany = "de-DE", i3.GermanLiechtenstein = "de-LI", i3.GermanLuxembourg = "de-LU", i3.GermanSwitzerland = "de-CH", i3.Greenlandic = "kl", i3.GreenlandicGreenland = "kl-GL", i3.Greek = "el", i3.GreekGreece = "el-GR", i3.Gujarati = "gu", i3.GujaratiIndia = "gu-IN", i3.Haitian = "ht", i3.Hausa = "ha", i3.HausaGhana = "ha-GH", i3.HausaNiger = "ha-NE", i3.HausaNigeria = "ha-NG", i3.Hebrew = "he", i3.HebrewIsrael = "he-IL", i3.Hindi = "hi", i3.HindiIndia = "hi-IN", i3.Hungarian = "hu", i3.HungarianHungary = "hu-HU", i3.Icelandic = "is", i3.IcelandicIceland = "is-IS", i3.Igbo = "ig", i3.IgboNigeria = "ig-NG", i3.Indonesian = "id", i3.IndonesianIndonesia = "id-ID", i3.Irish = "ga", i3.IrishIreland = "ga-IE", i3.Italian = "it", i3.ItalianItaly = "it-IT", i3.ItalianSwitzerland = "it-CH", i3.Japanese = "ja", i3.JapaneseJapan = "ja-JP", i3.Javanese = "jv", i3.Kannada = "kn", i3.KannadaIndia = "kn-IN", i3.Karelian = "krl", i3.Kazakh = "kk", i3.KazakhKazakhstan = "kk-KZ", i3.Khmer = "km", i3.KhmerCambodia = "km-KH", i3.KinyarwandaRwanda = "rw-RW", i3.Komi = "kv", i3.Konkani = "kok", i3.KonkaniIndia = "kok-IN", i3.Korean = "ko", i3.KoreanSouthKorea = "ko-KR", i3.Kurdish = "ku", i3.KurdishIraq = "ku-IQ", i3.KurdishTurkey = "ku-TR", i3.Kyrgyz = "ky", i3.KyrgyzKyrgyzstan = "ky-KG", i3.Lao = "lo", i3.LaoLaos = "lo-LA", i3.Latin = "la", i3.Latvian = "lv", i3.LatvianLatvia = "lv-LV", i3.Lithuanian = "lt", i3.LithuanianLithuania = "lt-LT", i3.Luxembourgish = "lb", i3.LuxembourgishBelgium = "lb-LU", i3.LuxembourgishLuxembourg = "lb-LU", i3.Macedonian = "mk", i3.MacedonianNorthMacedonia = "mk-MK", i3.Malagasy = "mg", i3.Malay = "ms", i3.MalayBrunei = "ms-BN", i3.MalayIndia = "ms-IN", i3.MalayMalaysia = "ms-MY", i3.MalaySingapore = "ms-SG", i3.Malayalam = "ml", i3.MalayalamIndia = "ml-IN", i3.Maltese = "mt", i3.MalteseMalta = "mt-MT", i3.Maori = "mi", i3.MaoriNewZealand = "mi-NZ", i3.Marathi = "mr", i3.MarathiIndia = "mr-IN", i3.Mari = "chm", i3.Mongolian = "mn", i3.MongolianMongolia = "mn-MN", i3.Montenegrin = "me", i3.MontenegrinMontenegro = "me-ME", i3.Nepali = "ne", i3.NepaliNepal = "ne-NP", i3.NorthernSotho = "ns", i3.NorthernSothoSouthAfrica = "ns-ZA", i3.Norwegian = "nb", i3.NorwegianBokmalNorway = "nb-NO", i3.NorwegianNynorskNorway = "nn-NO", i3.Oriya = "or", i3.OriyaIndia = "or-IN", i3.Ossetian = "os", i3.Pashto = "ps", i3.PashtoAfghanistan = "ps-AF", i3.Persian = "fa", i3.PersianIran = "fa-IR", i3.Polish = "pl", i3.PolishPoland = "pl-PL", i3.Portuguese = "pt", i3.PortugueseBrazil = "pt-BR", i3.PortuguesePortugal = "pt-PT", i3.Punjabi = "pa", i3.PunjabiIndia = "pa-IN", i3.PunjabiPakistan = "pa-PK", i3.Quechua = "qu", i3.QuechuaBolivia = "qu-BO", i3.QuechuaEcuador = "qu-EC", i3.QuechuaPeru = "qu-PE", i3.Romanian = "ro", i3.RomanianRomania = "ro-RO", i3.Russian = "ru", i3.RussianKazakhstan = "ru-KZ", i3.RussianKyrgyzstan = "ru-KG", i3.RussianRussia = "ru-RU", i3.RussianUkraine = "ru-UA", i3.Sakha = "sah", i3.Sanskrit = "sa", i3.SanskritIndia = "sa-IN", i3.Sami = "se", i3.SamiNorway = "se-NO", i3.SamiSweden = "se-SE", i3.SamiFinland = "se-FI", i3.Samoan = "sm", i3.SamoanSamoa = "sm-WS", i3.Scots = "gd", i3.Serbian = "sr", i3.SerbianBosniaAndHerzegovina = "sr-BA", i3.SerbianSerbiaAndMontenegro = "sr-SP", i3.SerbianCyrillic = "sr-SP-Cyrl", i3.SerbianCyrillicBosniaAndHerzegovina = "sr-Cyrl-BA", i3.SerbianCyrillicSerbiaAndMontenegro = "sr-Cyrl-SP", i3.Sesotho = "st", i3.SesothoSouthAfrica = "st-ZA", i3.Shona = "sn", i3.ShonaZimbabwe = "sn-ZW", i3.Sindhi = "sd", i3.SindhiPakistan = "sd-PK", i3.Sinhala = "si", i3.SinhalaSriLanka = "si-LK", i3.Slovak = "sk", i3.SlovakSlovakia = "sk-SK", i3.Slovenian = "sl", i3.SlovenianSlovenia = "sl-SI", i3.Somali = "so", i3.SomaliSomalia = "so-SO", i3.Spanish = "es", i3.SpanishArgentina = "es-AR", i3.SpanishBolivia = "es-BO", i3.SpanishChile = "es-CL", i3.SpanishColombia = "es-CO", i3.SpanishCostaRica = "es-CR", i3.SpanishCuba = "es-CU", i3.SpanishDominicanRepublic = "es-DO", i3.SpanishEcuador = "es-EC", i3.SpanishEquatorialGuinea = "es-GQ", i3.SpanishElSalvador = "es-SV", i3.SpanishGuatemala = "es-GT", i3.SpanishHonduras = "es-HN", i3.SpanishMexico = "es-MX", i3.SpanishNicaragua = "es-NI", i3.SpanishPanama = "es-PA", i3.SpanishParaguay = "es-PY", i3.SpanishPeru = "es-PE", i3.SpanishPuertoRico = "es-PR", i3.SpanishSpain = "es-ES", i3.SpanishUnitedStates = "es-US", i3.SpanishUruguay = "es-UY", i3.SpanishVenezuela = "es-VE", i3.Sudanese = "su", i3.Sutu = "st", i3.SutuSouthAfrica = "st-ZA", i3.Swahili = "sw", i3.SwahiliKenya = "sw-KE", i3.Swedish = "sv", i3.SwedishFinland = "sv-FI", i3.SwedishSweden = "sv-SE", i3.Syriac = "syr", i3.SyriacSyria = "syr-SY", i3.Tajik = "tg", i3.TajikTajikistan = "tg-TJ", i3.Tagalog = "tl", i3.TagalogPhilippines = "tl-PH", i3.Tamazight = "tmh", i3.Tamil = "ta", i3.TamilIndia = "ta-IN", i3.Tatar = "tt", i3.Telugu = "te", i3.TeluguIndia = "te-IN", i3.Thai = "th", i3.ThaiThailand = "th-TH", i3.Tibetan = "bo", i3.TibetanBhutan = "bo-BT", i3.TibetanChina = "bo-CN", i3.TibetanIndia = "bo-IN", i3.Tsonga = "ts", i3.Tswana = "tn", i3.TswanaSouthAfrica = "tn-ZA", i3.Turkish = "tr", i3.TurkishTurkey = "tr-TR", i3.Turkmen = "tk", i3.Ukrainian = "uk", i3.UkrainianUkraine = "uk-UA", i3.Urdu = "ur", i3.UrduAfghanistan = "ur-AF", i3.UrduIndia = "ur-IN", i3.UrduPakistan = "ur-PK", i3.Uzbek = "uz", i3.UzbekCyrillic = "uz-Cyrl-UZ", i3.UzbekLatin = "uz-Latn-UZ", i3.UzbekUzbekistan = "uz-UZ", i3.Vietnamese = "vi", i3.VietnameseVietnam = "vi-VN", i3.Welsh = "cy", i3.WelshUnitedKingdom = "cy-GB", i3.Xhosa = "xh", i3.XhosaSouthAfrica = "xh-ZA", i3.Yiddish = "yi", i3.Yoruba = "yo", i3.YorubaNigeria = "yo-NG", i3.ZhuyinMandarinChina = "yue-Hant-CN", i3.Zulu = "zu", i3.ZuluSouthAfrica = "zu-ZA", i3))(z4 || {});
var L4 = ((a) => (a.AfricaAbidjan = "Africa/Abidjan", a.AfricaAccra = "Africa/Accra", a.AfricaAddisAbaba = "Africa/Addis_Ababa", a.AfricaAlgiers = "Africa/Algiers", a.AfricaAsmara = "Africa/Asmara", a.AfricaBamako = "Africa/Bamako", a.AfricaBangui = "Africa/Bangui", a.AfricaBanjul = "Africa/Banjul", a.AfricaBissau = "Africa/Bissau", a.AfricaBlantyre = "Africa/Blantyre", a.AfricaBrazzaville = "Africa/Brazzaville", a.AfricaBujumbura = "Africa/Bujumbura", a.AfricaCairo = "Africa/Cairo", a.AfricaCasablanca = "Africa/Casablanca", a.AfricaCeuta = "Africa/Ceuta", a.AfricaConakry = "Africa/Conakry", a.AfricaDakar = "Africa/Dakar", a.AfricaDarEsSalaam = "Africa/Dar_es_Salaam", a.AfricaDjibouti = "Africa/Djibouti", a.AfricaDouala = "Africa/Douala", a.AfricaElAaiun = "Africa/El_Aaiun", a.AfricaFreetown = "Africa/Freetown", a.AfricaGaborone = "Africa/Gaborone", a.AfricaHarare = "Africa/Harare", a.AfricaJohannesburg = "Africa/Johannesburg", a.AfricaJuba = "Africa/Juba", a.AfricaKampala = "Africa/Kampala", a.AfricaKhartoum = "Africa/Khartoum", a.AfricaKigali = "Africa/Kigali", a.AfricaKinshasa = "Africa/Kinshasa", a.AfricaLagos = "Africa/Lagos", a.AfricaLibreville = "Africa/Libreville", a.AfricaLome = "Africa/Lome", a.AfricaLuanda = "Africa/Luanda", a.AfricaLubumbashi = "Africa/Lubumbashi", a.AfricaLusaka = "Africa/Lusaka", a.AfricaMalabo = "Africa/Malabo", a.AfricaMaputo = "Africa/Maputo", a.AfricaMaseru = "Africa/Maseru", a.AfricaMbabane = "Africa/Mbabane", a.AfricaMogadishu = "Africa/Mogadishu", a.AfricaMonrovia = "Africa/Monrovia", a.AfricaNairobi = "Africa/Nairobi", a.AfricaNdjamena = "Africa/Ndjamena", a.AfricaNiamey = "Africa/Niamey", a.AfricaNouakchott = "Africa/Nouakchott", a.AfricaOuagadougou = "Africa/Ouagadougou", a.AfricaPortoNovo = "Africa/Porto-Novo", a.AfricaSaoTome = "Africa/Sao_Tome", a.AfricaTripoli = "Africa/Tripoli", a.AfricaTunis = "Africa/Tunis", a.AfricaWindhoek = "Africa/Windhoek", a.AmericaAdak = "America/Adak", a.AmericaAnchorage = "America/Anchorage", a.AmericaAnguilla = "America/Anguilla", a.AmericaAntigua = "America/Antigua", a.AmericaAraguaina = "America/Araguaina", a.AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires", a.AmericaArgentinaCatamarca = "America/Argentina/Catamarca", a.AmericaArgentinaCordoba = "America/Argentina/Cordoba", a.AmericaArgentinaJujuy = "America/Argentina/Jujuy", a.AmericaArgentinaLaRioja = "America/Argentina/La_Rioja", a.AmericaArgentinaMendoza = "America/Argentina/Mendoza", a.AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos", a.AmericaArgentinaSalta = "America/Argentina/Salta", a.AmericaArgentinaSanJuan = "America/Argentina/San_Juan", a.AmericaArgentinaSanLuis = "America/Argentina/San_Luis", a.AmericaArgentinaTucuman = "America/Argentina/Tucuman", a.AmericaArgentinaUshuaia = "America/Argentina/Ushuaia", a.AmericaAruba = "America/Aruba", a.AmericaAsuncion = "America/Asuncion", a.AmericaAtikokan = "America/Atikokan", a.AmericaAtka = "America/Atka", a.AmericaBahia = "America/Bahia", a.AmericaBahiaBanderas = "America/Bahia_Banderas", a.AmericaBarbados = "America/Barbados", a.AmericaBelem = "America/Belem", a.AmericaBelize = "America/Belize", a.AmericaBlancSablon = "America/Blanc-Sablon", a.AmericaBoaVista = "America/Boa_Vista", a.AmericaBogota = "America/Bogota", a.AmericaBoise = "America/Boise", a.AmericaCambridgeBay = "America/Cambridge_Bay", a.AmericaCampoGrande = "America/Campo_Grande", a.AmericaCancun = "America/Cancun", a.AmericaCaracas = "America/Caracas", a.AmericaCayenne = "America/Cayenne", a.AmericaCayman = "America/Cayman", a.AmericaChicago = "America/Chicago", a.AmericaChihuahua = "America/Chihuahua", a.AmericaCoralHarbour = "America/Coral_Harbour", a.AmericaCordoba = "America/Cordoba", a.AmericaCostaRica = "America/Costa_Rica", a.AmericaCreston = "America/Creston", a.AmericaCuiaba = "America/Cuiaba", a.AmericaCuracao = "America/Curacao", a.AmericaDanmarkshavn = "America/Danmarkshavn", a.AmericaDawson = "America/Dawson", a.AmericaDawsonCreek = "America/Dawson_Creek", a.AmericaDenver = "America/Denver", a.AmericaDetroit = "America/Detroit", a.AmericaDominica = "America/Dominica", a.AmericaEdmonton = "America/Edmonton", a.AmericaEirunepe = "America/Eirunepe", a.AmericaElSalvador = "America/El_Salvador", a.AmericaFortaleza = "America/Fortaleza", a.AmericaGlaceBay = "America/Glace_Bay", a.AmericaGodthab = "America/Godthab", a.AmericaGooseBay = "America/Goose_Bay", a.AmericaGrandTurk = "America/Grand_Turk", a.AmericaGrenada = "America/Grenada", a.AmericaGuadeloupe = "America/Guadeloupe", a.AmericaGuatemala = "America/Guatemala", a.AmericaGuayaquil = "America/Guayaquil", a.AmericaGuyana = "America/Guyana", a.AmericaHalifax = "America/Halifax", a.AmericaHavana = "America/Havana", a.AmericaHermosillo = "America/Hermosillo", a.AmericaIndianaIndianapolis = "America/Indiana/Indianapolis", a.AmericaIndianaKnox = "America/Indiana/Knox", a.AmericaIndianaMarengo = "America/Indiana/Marengo", a.AmericaIndianaPetersburg = "America/Indiana/Petersburg", a.AmericaIndianaTellCity = "America/Indiana/Tell_City", a.AmericaIndianaVevay = "America/Indiana/Vevay", a.AmericaIndianaVincennes = "America/Indiana/Vincennes", a.AmericaIndianaWinamac = "America/Indiana/Winamac", a.AmericaInuvik = "America/Inuvik", a.AmericaIqaluit = "America/Iqaluit", a.AmericaJamaica = "America/Jamaica", a.AmericaJuneau = "America/Juneau", a.AmericaKentuckyLouisville = "America/Kentucky/Louisville", a.AmericaKentuckyMonticello = "America/Kentucky/Monticello", a.AmericaKralendijk = "America/Kralendijk", a.AmericaLaPaz = "America/La_Paz", a.AmericaLima = "America/Lima", a.AmericaLosAngeles = "America/Los_Angeles", a.AmericaLouisville = "America/Louisville", a.AmericaLowerPrinces = "America/Lower_Princes", a.AmericaMaceio = "America/Maceio", a.AmericaManagua = "America/Managua", a.AmericaManaus = "America/Manaus", a.AmericaMarigot = "America/Marigot", a.AmericaMartinique = "America/Martinique", a.AmericaMatamoros = "America/Matamoros", a.AmericaMazatlan = "America/Mazatlan", a.AmericaMenominee = "America/Menominee", a.AmericaMerida = "America/Merida", a.AmericaMetlakatla = "America/Metlakatla", a.AmericaMexicoCity = "America/Mexico_City", a.AmericaMiquelon = "America/Miquelon", a.AmericaMoncton = "America/Moncton", a.AmericaMonterrey = "America/Monterrey", a.AmericaMontevideo = "America/Montevideo", a.AmericaMontserrat = "America/Montserrat", a.AmericaMontreal = "America/Montreal", a.AmericaNassau = "America/Nassau", a.AmericaNewYork = "America/New_York", a.AmericaNipigon = "America/Nipigon", a.AmericaNome = "America/Nome", a.AmericaNoronha = "America/Noronha", a.AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah", a.AmericaNorthDakotaCenter = "America/North_Dakota/Center", a.AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem", a.AmericaOjinaga = "America/Ojinaga", a.AmericaPanama = "America/Panama", a.AmericaPangnirtung = "America/Pangnirtung", a.AmericaParamaribo = "America/Paramaribo", a.AmericaPhoenix = "America/Phoenix", a.AmericaPortAuPrince = "America/Port-au-Prince", a.AmericaPortOfSpain = "America/Port_of_Spain", a.AmericaPortoVelho = "America/Porto_Velho", a.AmericaPuertoRico = "America/Puerto_Rico", a.AmericaRainyRiver = "America/Rainy_River", a.AmericaRankinInlet = "America/Rankin_Inlet", a.AmericaRecife = "America/Recife", a.AmericaRegina = "America/Regina", a.AmericaResolute = "America/Resolute", a.AmericaRioBranco = "America/Rio_Branco", a.AmericaSantaIsabel = "America/Santa_Isabel", a.AmericaSantarem = "America/Santarem", a.AmericaSantiago = "America/Santiago", a.AmericaSantoDomingo = "America/Santo_Domingo", a.AmericaSaoPaulo = "America/Sao_Paulo", a.AmericaScoresbysund = "America/Scoresbysund", a.AmericaShiprock = "America/Shiprock", a.AmericaSitka = "America/Sitka", a.AmericaStBarthelemy = "America/St_Barthelemy", a.AmericaStJohns = "America/St_Johns", a.AmericaStKitts = "America/St_Kitts", a.AmericaStLucia = "America/St_Lucia", a.AmericaStThomas = "America/St_Thomas", a.AmericaStVincent = "America/St_Vincent", a.AmericaSwiftCurrent = "America/Swift_Current", a.AmericaTegucigalpa = "America/Tegucigalpa", a.AmericaThule = "America/Thule", a.AmericaThunderBay = "America/Thunder_Bay", a.AmericaTijuana = "America/Tijuana", a.AmericaToronto = "America/Toronto", a.AmericaTortola = "America/Tortola", a.AmericaVancouver = "America/Vancouver", a.AmericaWhitehorse = "America/Whitehorse", a.AmericaWinnipeg = "America/Winnipeg", a.AmericaYakutat = "America/Yakutat", a.AmericaYellowknife = "America/Yellowknife", a.AntarcticaCasey = "Antarctica/Casey", a.AntarcticaDavis = "Antarctica/Davis", a.AntarcticaDumontDUrville = "Antarctica/DumontDUrville", a.AntarcticaMacquarie = "Antarctica/Macquarie", a.AntarcticaMawson = "Antarctica/Mawson", a.AntarcticaMcMurdo = "Antarctica/McMurdo", a.AntarcticaPalmer = "Antarctica/Palmer", a.AntarcticaRothera = "Antarctica/Rothera", a.AntarcticaSyowa = "Antarctica/Syowa", a.AntarcticaTroll = "Antarctica/Troll", a.AntarcticaVostok = "Antarctica/Vostok", a.ArcticLongyearbyen = "Arctic/Longyearbyen", a.AsiaAden = "Asia/Aden", a.AsiaAlmaty = "Asia/Almaty", a.AsiaAmman = "Asia/Amman", a.AsiaAnadyr = "Asia/Anadyr", a.AsiaAqtau = "Asia/Aqtau", a.AsiaAqtobe = "Asia/Aqtobe", a.AsiaAshgabat = "Asia/Ashgabat", a.AsiaBaghdad = "Asia/Baghdad", a.AsiaBahrain = "Asia/Bahrain", a.AsiaBaku = "Asia/Baku", a.AsiaBangkok = "Asia/Bangkok", a.AsiaBarnaul = "Asia/Barnaul", a.AsiaBeirut = "Asia/Beirut", a.AsiaBishkek = "Asia/Bishkek", a.AsiaBrunei = "Asia/Brunei", a.AsiaChita = "Asia/Chita", a.AsiaChoibalsan = "Asia/Choibalsan", a.AsiaColombo = "Asia/Colombo", a.AsiaDamascus = "Asia/Damascus", a.AsiaDhaka = "Asia/Dhaka", a.AsiaDili = "Asia/Dili", a.AsiaDubai = "Asia/Dubai", a.AsiaDushanbe = "Asia/Dushanbe", a.AsiaFamagusta = "Asia/Famagusta", a.AsiaGaza = "Asia/Gaza", a.AsiaHebron = "Asia/Hebron", a.AsiaHoChiMinh = "Asia/Ho_Chi_Minh", a.AsiaHongKong = "Asia/Hong_Kong", a.AsiaHovd = "Asia/Hovd", a.AsiaIrkutsk = "Asia/Irkutsk", a.AsiaJakarta = "Asia/Jakarta", a.AsiaJayapura = "Asia/Jayapura", a.AsiaJerusalem = "Asia/Jerusalem", a.AsiaKabul = "Asia/Kabul", a.AsiaKamchatka = "Asia/Kamchatka", a.AsiaKarachi = "Asia/Karachi", a.AsiaKathmandu = "Asia/Kathmandu", a.AsiaKhandyga = "Asia/Khandyga", a.AsiaKolkata = "Asia/Kolkata", a.AsiaKrasnoyarsk = "Asia/Krasnoyarsk", a.AsiaKualaLumpur = "Asia/Kuala_Lumpur", a.AsiaKuching = "Asia/Kuching", a.AsiaKuwait = "Asia/Kuwait", a.AsiaMacau = "Asia/Macau", a.AsiaMagadan = "Asia/Magadan", a.AsiaMakassar = "Asia/Makassar", a.AsiaManila = "Asia/Manila", a.AsiaMuscat = "Asia/Muscat", a.AsiaNicosia = "Asia/Nicosia", a.AsiaNovokuznetsk = "Asia/Novokuznetsk", a.AsiaNovosibirsk = "Asia/Novosibirsk", a.AsiaOmsk = "Asia/Omsk", a.AsiaOral = "Asia/Oral", a.AsiaPhnomPenh = "Asia/Phnom_Penh", a.AsiaPontianak = "Asia/Pontianak", a.AsiaPyongyang = "Asia/Pyongyang", a.AsiaQatar = "Asia/Qatar", a.AsiaQyzylorda = "Asia/Qyzylorda", a.AsiaRangoon = "Asia/Rangoon", a.AsiaRiyadh = "Asia/Riyadh", a.AsiaSakhalin = "Asia/Sakhalin", a.AsiaSamarkand = "Asia/Samarkand", a.AsiaSeoul = "Asia/Seoul", a.AsiaShanghai = "Asia/Shanghai", a.AsiaSingapore = "Asia/Singapore", a.AsiaSrednekolymsk = "Asia/Srednekolymsk", a.AsiaTaipei = "Asia/Taipei", a.AsiaTashkent = "Asia/Tashkent", a.AsiaTbilisi = "Asia/Tbilisi", a.AsiaTehran = "Asia/Tehran", a.AsiaThimphu = "Asia/Thimphu", a.AsiaTokyo = "Asia/Tokyo", a.AsiaTomsk = "Asia/Tomsk", a.AsiaUlaanbaatar = "Asia/Ulaanbaatar", a.AsiaUrumqi = "Asia/Urumqi", a.AsiaUstNera = "Asia/Ust-Nera", a.AsiaVientiane = "Asia/Vientiane", a.AsiaVladivostok = "Asia/Vladivostok", a.AsiaYakutsk = "Asia/Yakutsk", a.AsiaYekaterinburg = "Asia/Yekaterinburg", a.AsiaYerevan = "Asia/Yerevan", a.AtlanticAzores = "Atlantic/Azores", a.AtlanticBermuda = "Atlantic/Bermuda", a.AtlanticCanary = "Atlantic/Canary", a.AtlanticCapeVerde = "Atlantic/Cape_Verde", a.AtlanticFaroe = "Atlantic/Faroe", a.AtlanticMadeira = "Atlantic/Madeira", a.AtlanticReykjavik = "Atlantic/Reykjavik", a.AtlanticSouthGeorgia = "Atlantic/South_Georgia", a.AtlanticStHelena = "Atlantic/St_Helena", a.AtlanticStanley = "Atlantic/Stanley", a.AustraliaAdelaide = "Australia/Adelaide", a.AustraliaBrisbane = "Australia/Brisbane", a.AustraliaBrokenHill = "Australia/Broken_Hill", a.AustraliaCanberra = "Australia/Canberra", a.AustraliaCurrie = "Australia/Currie", a.AustraliaDarwin = "Australia/Darwin", a.AustraliaEucla = "Australia/Eucla", a.AustraliaHobart = "Australia/Hobart", a.AustraliaLindeman = "Australia/Lindeman", a.AustraliaLordHowe = "Australia/Lord_Howe", a.AustraliaMelbourne = "Australia/Melbourne", a.AustraliaPerth = "Australia/Perth", a.AustraliaSydney = "Australia/Sydney", a.EuropeAmsterdam = "Europe/Amsterdam", a.EuropeAndorra = "Europe/Andorra", a.EuropeAthens = "Europe/Athens", a.EuropeBelgrade = "Europe/Belgrade", a.EuropeBerlin = "Europe/Berlin", a.EuropeBratislava = "Europe/Bratislava", a.EuropeBrussels = "Europe/Brussels", a.EuropeBucharest = "Europe/Bucharest", a.EuropeBudapest = "Europe/Budapest", a.EuropeBusingen = "Europe/Busingen", a.EuropeChisinau = "Europe/Chisinau", a.EuropeCopenhagen = "Europe/Copenhagen", a.EuropeDublin = "Europe/Dublin", a.EuropeGibraltar = "Europe/Gibraltar", a.EuropeGuernsey = "Europe/Guernsey", a.EuropeHelsinki = "Europe/Helsinki", a.EuropeIsleOfMan = "Europe/Isle_of_Man", a.EuropeIstanbul = "Europe/Istanbul", a.EuropeJersey = "Europe/Jersey", a.EuropeKaliningrad = "Europe/Kaliningrad", a.EuropeKiev = "Europe/Kiev", a.EuropeKirov = "Europe/Kirov", a.EuropeLisbon = "Europe/Lisbon", a.EuropeLjubljana = "Europe/Ljubljana", a.EuropeLondon = "Europe/London", a.EuropeLuxembourg = "Europe/Luxembourg", a.EuropeMadrid = "Europe/Madrid", a.EuropeMalta = "Europe/Malta", a.EuropeMariehamn = "Europe/Mariehamn", a.EuropeMinsk = "Europe/Minsk", a.EuropeMonaco = "Europe/Monaco", a.EuropeMoscow = "Europe/Moscow", a.EuropeOslo = "Europe/Oslo", a.EuropeParis = "Europe/Paris", a.EuropePodgorica = "Europe/Podgorica", a.EuropePrague = "Europe/Prague", a.EuropeRiga = "Europe/Riga", a.EuropeRome = "Europe/Rome", a.EuropeSamara = "Europe/Samara", a.EuropeSanMarino = "Europe/San_Marino", a.EuropeSarajevo = "Europe/Sarajevo", a.EuropeSimferopol = "Europe/Simferopol", a.EuropeSkopje = "Europe/Skopje", a.EuropeSofia = "Europe/Sofia", a.EuropeStockholm = "Europe/Stockholm", a.EuropeTallinn = "Europe/Tallinn", a.EuropeTirane = "Europe/Tirane", a.EuropeUzhgorod = "Europe/Uzhgorod", a.EuropeVaduz = "Europe/Vaduz", a.EuropeVatican = "Europe/Vatican", a.EuropeVienna = "Europe/Vienna", a.EuropeVilnius = "Europe/Vilnius", a.EuropeVolgograd = "Europe/Volgograd", a.EuropeWarsaw = "Europe/Warsaw", a.EuropeZagreb = "Europe/Zagreb", a.EuropeZaporozhye = "Europe/Zaporozhye", a.EuropeZurich = "Europe/Zurich", a.GMT = "GMT", a.IndianAntananarivo = "Indian/Antananarivo", a.IndianChagos = "Indian/Chagos", a.IndianChristmas = "Indian/Christmas", a.IndianCocos = "Indian/Cocos", a.IndianComoro = "Indian/Comoro", a.IndianKerguelen = "Indian/Kerguelen", a.IndianMahe = "Indian/Mahe", a.IndianMaldives = "Indian/Maldives", a.IndianMauritius = "Indian/Mauritius", a.IndianMayotte = "Indian/Mayotte", a.IndianReunion = "Indian/Reunion", a.PacificApia = "Pacific/Apia", a.PacificAuckland = "Pacific/Auckland", a.PacificBougainville = "Pacific/Bougainville", a.PacificChatham = "Pacific/Chatham", a.PacificChuuk = "Pacific/Chuuk", a.PacificEaster = "Pacific/Easter", a.PacificEfate = "Pacific/Efate", a.PacificEnderbury = "Pacific/Enderbury", a.PacificFakaofo = "Pacific/Fakaofo", a.PacificFiji = "Pacific/Fiji", a.PacificFunafuti = "Pacific/Funafuti", a.PacificGalapagos = "Pacific/Galapagos", a.PacificGambier = "Pacific/Gambier", a.PacificGuadalcanal = "Pacific/Guadalcanal", a.PacificGuam = "Pacific/Guam", a.PacificHonolulu = "Pacific/Honolulu", a.PacificJohnston = "Pacific/Johnston", a.PacificKiritimati = "Pacific/Kiritimati", a.PacificKosrae = "Pacific/Kosrae", a.PacificKwajalein = "Pacific/Kwajalein", a.PacificMajuro = "Pacific/Majuro", a.PacificMarquesas = "Pacific/Marquesas", a.PacificMidway = "Pacific/Midway", a.PacificNauru = "Pacific/Nauru", a.PacificNiue = "Pacific/Niue", a.PacificNorfolk = "Pacific/Norfolk", a.PacificNoumea = "Pacific/Noumea", a.PacificPagoPago = "Pacific/Pago_Pago", a.PacificPalau = "Pacific/Palau", a.PacificPitcairn = "Pacific/Pitcairn", a.PacificPohnpei = "Pacific/Pohnpei", a.PacificPonape = "Pacific/Ponape", a.PacificPortMoresby = "Pacific/Port_Moresby", a.PacificRarotonga = "Pacific/Rarotonga", a.PacificSaipan = "Pacific/Saipan", a.PacificSamoa = "Pacific/Samoa", a.PacificTahiti = "Pacific/Tahiti", a.PacificTarawa = "Pacific/Tarawa", a.PacificTongatapu = "Pacific/Tongatapu", a.PacificTruk = "Pacific/Truk", a.PacificWake = "Pacific/Wake", a.PacificWallis = "Pacific/Wallis", a.PacificYap = "Pacific/Yap", a))(L4 || {});
var M4 = ((S3) => (S3.UTC_MINUS_12 = "UTC-12", S3.UTC_MINUS_11_30 = "UTC-11:30", S3.UTC_MINUS_11 = "UTC-11", S3.UTC_MINUS_10_30 = "UTC-10:30", S3.UTC_MINUS_10 = "UTC-10", S3.UTC_MINUS_9_30 = "UTC-9:30", S3.UTC_MINUS_9 = "UTC-09", S3.UTC_MINUS_8_45 = "UTC-8:45", S3.UTC_MINUS_8 = "UTC-08", S3.UTC_MINUS_7 = "UTC-07", S3.UTC_MINUS_6_30 = "UTC-6:30", S3.UTC_MINUS_6 = "UTC-06", S3.UTC_MINUS_5_45 = "UTC-5:45", S3.UTC_MINUS_5_30 = "UTC-5:30", S3.UTC_MINUS_5 = "UTC-05", S3.UTC_MINUS_4_30 = "UTC-4:30", S3.UTC_MINUS_4 = "UTC-04", S3.UTC_MINUS_3_30 = "UTC-3:30", S3.UTC_MINUS_3 = "UTC-03", S3.UTC_MINUS_2_30 = "UTC-2:30", S3.UTC_MINUS_2 = "UTC-02", S3.UTC_MINUS_1 = "UTC-01", S3.UTC_0 = "UTC+00", S3.UTC_PLUS_1 = "UTC+01", S3.UTC_PLUS_2 = "UTC+02", S3.UTC_PLUS_3 = "UTC+03", S3.UTC_PLUS_3_30 = "UTC+3:30", S3.UTC_PLUS_4 = "UTC+04", S3.UTC_PLUS_4_30 = "UTC+4:30", S3.UTC_PLUS_5 = "UTC+05", S3.UTC_PLUS_5_30 = "UTC+5:30", S3.UTC_PLUS_5_45 = "UTC+5:45", S3.UTC_PLUS_6 = "UTC+06", S3.UTC_PLUS_6_30 = "UTC+6:30", S3.UTC_PLUS_7 = "UTC+07", S3.UTC_PLUS_8 = "UTC+08", S3.UTC_PLUS_8_45 = "UTC+8:45", S3.UTC_PLUS_9 = "UTC+09", S3.UTC_PLUS_9_30 = "UTC+9:30", S3.UTC_PLUS_10 = "UTC+10", S3.UTC_PLUS_10_30 = "UTC+10:30", S3.UTC_PLUS_11 = "UTC+11", S3.UTC_PLUS_11_30 = "UTC+11:30", S3.UTC_PLUS_12 = "UTC+12", S3.UTC_PLUS_12_45 = "UTC+12:45", S3.UTC_PLUS_13 = "UTC+13", S3.UTC_PLUS_13_45 = "UTC+13:45", S3.UTC_PLUS_14 = "UTC+14", S3))(M4 || {});
var B4 = ((r4) => (r4.AcreTime = "ACT", r4.AfghanistanTime = "AFT", r4.AIXCentralEuropeanTime = "DFT", r4.AlaskaDaylightTime = "AKDT", r4.AlaskaStandardTime = "AKST", r4.AlmaAtaTime = "ALMT", r4.AmazonSummerTime = "AMST", r4.AmazonTime = "AMT", r4.AnadyrTime = "ANAT", r4.AqtobeTime = "AQTT", r4.ArabiaStandardTime = "AST", r4.ArgentinaTime = "ART", r4.ArmeniaTime = "AMT", r4.ASEANCommonTime = "ASEAN", r4.AtlanticDaylightTime = "ADT", r4.AtlanticStandardTime = "AST", r4.AustralianCentralDaylightSavingTime = "ACDT", r4.AustralianCentralStandardTime = "ACST", r4.AustralianCentralWesternStandardTime = "ACWST", r4.AustralianEasternDaylightSavingTime = "AEDT", r4.AustralianEasternStandardTime = "AEST", r4.AustralianEasternTime = "AET", r4.AustralianWesternStandardTime = "AWST", r4.AzerbaijanTime = "AZT", r4.AzoresStandardTime = "AZOT", r4.AzoresSummerTime = "AZOST", r4.BakerIslandTime = "BIT", r4.BangladeshStandardTime = "BST", r4.BhutanTime = "BTT", r4.BoliviaTime = "BOT", r4.BougainvilleStandardTime = "BST", r4.BrasiliaSummerTime = "BRST", r4.BrasiliaTime = "BRT", r4.BritishIndianOceanTime = "BIOT", r4.BritishSummerTime = "BST", r4.BruneiTime = "BNT", r4.CapeVerdeTime = "CVT", r4.CentralAfricaTime = "CAT", r4.CentralDaylightTime = "CDT", r4.CentralEuropeanSummerTime = "CEST", r4.CentralEuropeanTime = "CET", r4.CentralIndonesiaTime = "WITA", r4.CentralStandardTime = "CST", r4.CentralTime = "CT", r4.CentralWesternStandardTime = "CWST", r4.ChamorroStandardTime = "CHST", r4.ChathamDaylightTime = "CHADT", r4.ChathamStandardTime = "CHAST", r4.ChileStandardTime = "CLT", r4.ChileSummerTime = "CLST", r4.ChinaStandardTime = "CST", r4.ChoibalsanStandardTime = "CHOT", r4.ChoibalsanSummerTime = "CHOST", r4.ChristmasIslandTime = "CXT", r4.ChuukTime = "CHUT", r4.ClipptertonIslandStandardTime = "CIST", r4.CocosIslandsTime = "CCT", r4.ColombiaSummerTime = "COST", r4.ColombiaTime = "COT", r4.CookIslandTime = "CKT", r4.CoordinatedUniversalTime = "UTC", r4.CubaDaylightTime = "CDT", r4.CubaStandardTime = "CST", r4.DavisTime = "DAVT", r4.DumontDUrvilleTime = "DDUT", r4.EastAfricaTime = "EAT", r4.EasterIslandStandardTime = "EAST", r4.EasterIslandSummerTime = "EASST", r4.EasternCaribbeanTime = "ECT", r4.EasternDaylightTime = "EDT", r4.EasternEuropeanSummerTime = "EEST", r4.EasternEuropeanTime = "EET", r4.EasternGreenlandSummerTime = "EGST", r4.EasternGreenlandTime = "EGT", r4.EasternIndonesianTime = "WIT", r4.EasternStandardTime = "EST", r4.EasternTime = "ET", r4.EcuadorTime = "ECT", r4.FalklandIslandsSummerTime = "FKST", r4.FalklandIslandsTime = "FKT", r4.FernandoDeNoronhaTime = "FNT", r4.FijiTime = "FJT", r4.FrenchGuianaTime = "GFT", r4.FrenchSouthernAndAntarcticTime = "TFT", r4.FurtherEasternEuropeanTime = "FET", r4.GalapagosTime = "GALT", r4.GambierIslandTime = "GIT", r4.GambierIslandsTime = "GAMT", r4.GeorgiaStandardTime = "GET", r4.GilbertIslandTime = "GILT", r4.GreenwichMeanTime = "GMT", r4.GulfStandardTime = "GST", r4.GuyanaTime = "GYT", r4.HawaiiAleutianDaylightTime = "HDT", r4.HawaiiAleutianStandardTime = "HST", r4.HeardAndMcDonaldIslandsTime = "HMT", r4.HeureAvanceeDEuropeCentraleTime = "HAEC", r4.HongKongTime = "HKT", r4.HovdSummerTime = "HOVST", r4.HovdTime = "HOVT", r4.IndianOceanTime = "IOT", r4.IndianStandardTime = "IST", r4.IndochinaTime = "ICT", r4.InternationalDayLineWestTime = "IDLW", r4.IranDaylightTime = "IRDT", r4.IranStandardTime = "IRST", r4.IrishStandardTime = "IST", r4.IrkutskSummerTime = "IRKST", r4.IrkutskTime = "IRKT", r4.IsraelDaylightTime = "IDT", r4.IsraelStandardTime = "IST", r4.JapanStandardTime = "JST", r4.KaliningradTime = "KALT", r4.KamchatkaTime = "KAMT", r4.KoreaStandardTime = "KST", r4.KosraeTime = "KOST", r4.KrasnoyarskSummerTime = "KRAST", r4.KrasnoyarskTime = "KRAT", r4.KyrgyzstanTime = "KGT", r4.LineIslandsTime = "LINT", r4.KazakhstanStandardTime = "KAST", r4.LordHoweStandardTime = "LHST", r4.LordHoweSummerTime = "LHST", r4.MacquarieIslandStationTime = "MIST", r4.MagadanTime = "MAGT", r4.MalaysiaStandardTime = "MST", r4.MalaysiaTime = "MYT", r4.MaldivesTime = "MVT", r4.MarquesasIslandsTime = "MART", r4.MarshallIslandsTime = "MHT", r4.MauritiusTime = "MUT", r4.MawsonStationTime = "MAWT", r4.MiddleEuropeanSummerTime = "MEDT", r4.MiddleEuropeanTime = "MET", r4.MoscowTime = "MSK", r4.MountainDaylightTime = "MDT", r4.MountainStandardTime = "MST", r4.MyanmarStandardTime = "MMT", r4.NepalTime = "NCT", r4.NauruTime = "NRT", r4.NewCaledoniaTime = "NCT", r4.NewZealandDaylightTime = "NZDT", r4.NewZealandStandardTime = "NZST", r4.NewfoundlandDaylightTime = "NDT", r4.NewfoundlandStandardTime = "NST", r4.NewfoundlandTime = "NT", r4.NiueTime = "NUT", r4.NorfolkIslandTime = "NFT", r4.NovosibirskTime = "NOVT", r4.OmskTime = "OMST", r4.OralTime = "ORAT", r4.PacificDaylightTime = "PDT", r4.PacificStandardTime = "PST", r4.PakistanStandardTime = "PKT", r4.PalauTime = "PWT", r4.PapuaNewGuineaTime = "PGT", r4.ParaguaySummerTime = "PYST", r4.ParaguayTime = "PYT", r4.PeruTime = "PET", r4.PhilippineStandardTime = "PHST", r4.PhilippineTime = "PHT", r4.PhoenixIslandTime = "PHOT", r4.PitcairnTime = "PST", r4.PohnpeiStandardTime = "PONT", r4.ReunionTime = "RET", r4.RotheraResearchStationTime = "ROTT", r4.SaintPierreAndMiquelonDaylightTime = "PMDT", r4.SaintPierreAndMiquelonStandardTime = "PMST", r4.SakhalinIslandTime = "SAKT", r4.SamaraTime = "SAMT", r4.SamoaDaylightTime = "SDT", r4.SamoaStandardTime = "SST", r4.SeychellesTime = "SCT", r4.ShowaStationTime = "SYOT", r4.SingaporeStandardTime = "SST", r4.SingaporeTime = "SGT", r4.SolomonIslandsTime = "SBT", r4.SouthAfricanStandardTime = "SAST", r4.SouthGeorgiaAndTheSouthSandwichIslandsTime = "GST", r4.SrednekolymskTime = "SRET", r4.SriLankaStandardTime = "SLST", r4.SurinameTime = "SRT", r4.TahitiTime = "TAHT", r4.TajikistanTime = "TJT", r4.ThailandStandardTime = "THA", r4.TimorLesteTime = "TLT", r4.TokelauTime = "TKT", r4.TongaTime = "TOT", r4.TurkeyTime = "TRT", r4.TurkmenistanTime = "TMT", r4.TuvaluTime = "TVT", r4.UlaanbaatarStandardTime = "ULAT", r4.UlaanbaatarSummerTime = "ULAST", r4.UruguayStandardTime = "UYT", r4.UruguaySummerTime = "UYST", r4.UzbekistanTime = "UZT", r4.VanuatuTime = "VUT", r4.VenezuelaStandardTime = "VET", r4.VladivostokTime = "VLAT", r4.VolgogradTime = "VOLT", r4.VostokStationTime = "VOST", r4.WakeIslandTime = "WAKT", r4.WestAfricaSummerTime = "WAST", r4.WestAfricaTime = "WAT", r4.WestGreenlandSummerTime = "WGST", r4.WestGreenlandTime = "WGT", r4.WestKazakhstanTime = "WKT", r4.WesternEuropeanSummerTime = "WEDT", r4.WesternEuropeanTime = "WET", r4.WesternIndonesianTime = "WIT", r4.WesternStandardTime = "WST", r4.YakutskTime = "YAKT", r4.YekaterinburgTime = "YEKT", r4))(B4 || {});
var K4 = ((_3) => (_3.Africa = "Africa", _3.Americas = "Americas", _3.Asia = "Asia", _3.Europe = "Europe", _3.Oceania = "Oceania", _3.Polar = "Polar", _3))(K4 || {});
var w4 = ((c3) => (c3.CentralAmerica = "Central America", c3.EasternAsia = "Eastern Asia", c3.EasternEurope = "Eastern Europe", c3.EasternAfrica = "Eastern Africa", c3.MiddleAfrica = "Middle Africa", c3.MiddleEast = "Middle East", c3.NorthernAfrica = "Northern Africa", c3.NorthernAmerica = "Northern America", c3.NorthernEurope = "Northern Europe", c3.Polynesia = "Polynesia", c3.SouthAmerica = "South America", c3.SouthernAfrica = "Southern Africa", c3.SouthernAsia = "Southern Asia", c3.SouthernEurope = "Southern Europe", c3.WesternAfrica = "Western Africa", c3.WesternAsia = "Western Asia", c3.WesternEurope = "Western Europe", c3.WesternAustralia = "Western Australia", c3))(w4 || {});
var we3 = { Afghanistan: { i18n: { calling_codes: [93], currencies: ["AFN"], languages: ["ps", "prs", "tk", "uz"], tz: { offsets: ["UTC+4:30"], regions: ["Asia/Kabul"], timezones: ["AFT"] } }, id: "AF", info: { flag: { emoji: "\u{1F1E6}\u{1F1EB}", emoji_unicode: "U+1F1E6 U+1F1EB", svg: "https://www.countryflags.io/af/flat/64.svg" }, tld: [".af"] }, iso: { alpha2: "AF", alpha3: "AFG", numeric: "004" }, name: { alt_spellings: ["AF", "Af\u0121\u0101nist\u0101n"], demonym: "Afghan", native: { endonym: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646" }, official: "Islamic Republic of Afghanistan", short: "Afghanistan", translations: { ["af"]: "Afghanistan", ["sq"]: "Shqip\xEBri", ["am"]: "\u12A0\u134D\u130B\u1295", ["ar"]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["eu"]: "Afganist\xE1n", ["be"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["bn"]: "\u0986\u09AB\u0997\u09BE\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8", ["ber"]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F63\u0F7A\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F46\u0F0D", ["bs"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["br"]: "Afganistan", ["bg"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["my"]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", ["ca"]: "Afganistan", ["zh"]: "\u963F\u5BCC\u6C57", ["hr"]: "Afganistan", ["cs"]: "Afganistan", ["da"]: "Afghanistan", ["nl"]: "Afghanistan", ["en"]: "Afghanistan", ["eo"]: "Afganistan", ["et"]: "Afganistan", ["fi"]: "Afghanistan", ["fr"]: "Afghanistan", ["fy"]: "Afghanistan", ["gl"]: "Afganist\xE1n", ["ka"]: "\u10D0\u10D5\u10E6\u10D0\u10DC\u10D4\u10D7\u10D8", ["de"]: "Afghanistan", ["kl"]: "Afghanistan", ["el"]: "\u0391\u03C6\u03B3\u03B1\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD", ["gu"]: "\u0A85\u0AAB\u0A97\u0ABE\u0AA8\u0ABF\u0AB8\u0ACD\u0AA4\u0ABE\u0AA8", ["ht"]: "Afghanistan", ["ha"]: "Afghanistan", ["he"]: "\u05D0\u05E4\u05D2\u05E0\u05D9\u05E1\u05D8\u05DF", ["hi"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["hu"]: "Afganistan", ["is"]: "Afghanistan", ["ig"]: "Afghanistan", ["id"]: "Afghanistan", ["ga"]: "Afghanistan", ["it"]: "Afghanistan", ["ja"]: "\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3", ["jv"]: "Afghanistan", ["kn"]: "\u0C85\u0CAB\u0C97\u0CBE\u0CA8\u0CBF\u0CB8\u0CCD\u0CA4\u0CBE\u0CA8", ["kk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["km"]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17B7\u1780", ["ko"]: "\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4", ["ku"]: "Afghanistan", ["ky"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["lo"]: "\u0EAD\u0EB2\u0E9F\u0EB2\u0EA5\u0EBD\u0E99", ["la"]: "Afghanistan", ["lv"]: "Afghanistan", ["lt"]: "Afganistanas", ["lb"]: "Afghanistan", ["mk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["mg"]: "Afghanistan", ["ms"]: "Afghanistan", ["ml"]: "\u0D05\u0D2B\u0D17\u0D3E\u0D28\u0D3F\u0D38\u0D4D\u0D24\u0D3E\u0D28", ["mt"]: "Afghanistan", ["mi"]: "Afghanistan", ["mr"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["mn"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ne"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["nb"]: "Afghanistan", ["ps"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["fa"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["pl"]: "Afganistan", ["pt"]: "Afghanistan", ["pa"]: "Afghanistan", ["ro"]: "Afghanistan", ["pl"]: "Afganistan", ["ru"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["sm"]: "Afghanistan", ["sa"]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928", ["gd"]: "Afghanistan", ["sr"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["st"]: "Afghanistan", ["sn"]: "Afghanistan", ["sd"]: "Afghanistan", ["si"]: "\u0D86\u0D9C\u0DCA\u200D\u0DBB\u0DDC\u0D9A\u0DCA\u0D9A\u0DD2\u0DBA\u0DCF\u0DC0", ["sk"]: "Afganistan", ["sl"]: "Afganistan", ["so"]: "Afghanistan", ["es"]: "Afganist\xE1n", ["su"]: "Afghanistan", ["sw"]: "Afghanistan", ["sv"]: "Afghanistan", ["tl"]: "Afghanistan", ["tg"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["tt"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ta"]: "\u0B86\u0BAA\u0BCD\u0BAA\u0B95\u0BBE\u0BA9\u0BBF\u0BB8\u0BCD\u0BA4\u0BBE\u0BA9\u0BCD", ["te"]: "\u0C06\u0C2B\u0C4D\u0C18\u0C28\u0C3F\u0C38\u0C4D\u0C24\u0C3E\u0C28\u0C4D", ["th"]: "\u0E2D\u0E31\u0E1F\u0E01\u0E32\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F55\u0F0B\u0F42\u0F7A\u0F0B\u0F53\u0F72\u0F66\u0F72\u0F0B\u0F4F\u0F7A\u0F53\u0F66\u0F72\u0F0D", ["tr"]: "Afganistan", ["uk"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["ur"]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646", ["uz"]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D", ["vi"]: "Afghanistan", ["cy"]: "Afghanistan", ["xh"]: "Afghanistan", ["yi"]: "Afghanistan", ["yo"]: "Afghanistan", ["zu"]: "Afghanistan" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Kabul", total: 341e5 } }, geography: { area: 652230, region: "Asia", sub_region: "Southern Asia" }, government: { capital: "Kabul", type: "Islamic Emirate" } } }, Albania: { i18n: { calling_codes: [355], currencies: ["ALL"], languages: ["sq", "el", "tr"], tz: { offsets: ["UTC+01"], regions: ["Europe/Brussels"], timezones: ["CET"] } }, id: "AL", info: { flag: { emoji: "\u{1F1E6}\u{1F1F1}", emoji_unicode: "U+1F1E6 U+1F1F1", svg: "https://www.countryflags.io/al/flat/64.svg" }, tld: [".al"] }, iso: { alpha2: "AL", alpha3: "ALB", numeric: "008" }, name: { alt_spellings: ["AL", "Shqip\xEBri", "Shqip\xEBria", "Shqipnia"], demonym: "Albanian", native: { endonym: "Shqip\xEBri" }, official: "Republic of Albania", short: "Albania", translations: { ["af"]: "Albania", ["sq"]: "Albania", ["am"]: "\u12A0\u120D\u1263\u1295\u12EB", ["ar"]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["eu"]: "Albania", ["be"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["bn"]: "\u0986\u09B2\u09AC\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE", ["ber"]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B", ["bs"]: "Albanija", ["br"]: "Albania", ["bg"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["my"]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A", ["ca"]: "Alb\xE0nia", ["zh"]: "\u963F\u5C14\u5DF4\u5C3C\u4E9A", ["hr"]: "Albanija", ["cs"]: "Alb\xE1nie", ["da"]: "Albanien", ["nl"]: "Albani\xEB", ["en"]: "Albania", ["eo"]: "Albanio", ["et"]: "Albaania", ["fi"]: "Albania", ["fr"]: "Albanie", ["fy"]: "Albani\xEB", ["gl"]: "Alb\xE2nia", ["ka"]: "\u10D0\u10DA\u10D1\u10D0\u10DC\u10D8\u10D0", ["de"]: "Albanien", ["kl"]: "Albania", ["el"]: "\u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1", ["gu"]: "\u0A85\u0AB2\u0AAC\u0AA8\u0ABF\u0AAF\u0ABE", ["ht"]: "Albanais", ["ha"]: "Albania", ["he"]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05D4", ["hi"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["hu"]: "Alb\xE1nia", ["is"]: "Alb\xFAnir", ["ig"]: "Albania", ["id"]: "Albania", ["ga"]: "Alb\xE1in", ["it"]: "Albania", ["ja"]: "\u30A2\u30EB\u30D0\u30CB\u30A2", ["jv"]: "Albania", ["kn"]: "\u0C85\u0CB2\u0CCD\u0CAC\u0CBE\u0CA8\u0CBF\u0CAF\u0CBE", ["kk"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["km"]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17C1\u179F\u17CA\u17B8", ["ko"]: "\uC54C\uBC14\uB2C8\uC544", ["ku"]: "\u0622\u0644\u0628\u0627\u0646\u06CC\u0627", ["ky"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["lo"]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E99\u0EB5", ["la"]: "Albania", ["lv"]: "Alb\u0101nija", ["lt"]: "Albanija", ["lb"]: "Albani\xEB", ["mk"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", ["mg"]: "Albania", ["ms"]: "Albania", ["ml"]: "\u0D05\u0D32\u0D4D\u0D2C\u0D3E\u0D28\u0D3F\u0D2F\u0D3E", ["mt"]: "Albania", ["mi"]: "Albania", ["mr"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["mn"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["ne"]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E", ["nb"]: "Albania", ["ps"]: "\u0627\u0627\u0644\u0628\u0627\u0646\u06CC", ["fa"]: "\u0622\u0644\u0628\u0627\u0646\u06CC", ["pl"]: "Albania", ["pt"]: "Alb\xE2nia", ["pa"]: "\u0A05\u0A32\u0A2C\u0A28\u0A40\u0A06", ["ro"]: "Alb\u0103n", ["ru"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["sm"]: "Albania", ["sa"]: "Albani", ["gd"]: "Alb\xE0inia", ["sr"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430", ["st"]: "Albania", ["sn"]: "Albania", ["sd"]: "Albania", ["si"]: "\u0D87\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", ["sk"]: "Alb\xE1nsko", ["sl"]: "Albanija", ["so"]: "Albania", ["es"]: "Albania", ["su"]: "Albania", ["sw"]: "Albania", ["sv"]: "Albanien", ["tl"]: "Albania", ["tg"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["ta"]: "\u0B85\u0BB2\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF\u0BBE", ["tt"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["te"]: "\u0C05\u0C32\u0C4D\u0C2C\u0C3E\u0C28\u0C3F\u0C2F\u0C3E", ["th"]: "\u0E2D\u0E31\u0E25\u0E41\u0E1A\u0E19\u0E34\u0E19\u0E35", ["bo"]: "\u0F68\u0F63\u0F0B\u0F56\u0F72\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F72", ["tr"]: "Albaniye", ["uk"]: "\u0410\u043B\u0431\u0430\u043D\u0456\u044F", ["ur"]: "\u0622\u0644\u0628\u0627\u0646\u06CC", ["uz"]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F", ["vi"]: "Albanie", ["cy"]: "Albania", ["xh"]: "Albania", ["yi"]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05E9", ["yo"]: "Albania", ["zu"]: "Albania" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Tirana", total: 2853e3 } }, geography: { area: 28748, region: "Europe", sub_region: "Southern Europe" }, government: { capital: "Tirana", type: "Republic" } } }, Algeria: { i18n: { calling_codes: [213], currencies: ["DZD"], languages: ["ar", "fr", "ber", "tmh"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Africa/Algiers"], timezones: ["CET"] } }, id: "DZ", info: { flag: { emoji: "\u{1F1E9}\u{1F1FF}", emoji_unicode: "U+1F1E9 U+1F1FF", svg: "https://www.countryflags.io/dz/flat/64.svg" }, tld: [".dz", ".\u062C\u0632\u0627\u0626\u0631"] }, iso: { alpha2: "DZ", alpha3: "DZA", numeric: "012" }, name: { alt_spellings: ["DZ", "Dzayer", "Alg\xE9rie"], demonym: "Algerian", native: { endonym: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631" }, official: "People's Democratic Republic of Algeria", short: "Algeria", translations: { ["af"]: "Algerije", ["sq"]: "Algeria", ["am"]: "\u12A0\u120D\u1300\u122D\u1235", ["ar"]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", ["hy"]: "\u0531\u056C\u0563\u0578\u0580\u056B\u0561", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043B\u0436\u0438\u0440", ["eu"]: "Algeria", ["be"]: "\u0410\u043B\u0436\u0438\u0440", ["bn"]: "\u0986\u09B2\u099C\u09C7\u09B0", ["ber"]: "\u062C\u0632\u0627\u0626\u0631", ["dz"]: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41", ["bs"]: "Al\u017Eir", ["br"]: "Algeria", ["bg"]: "\u0410\u043B\u0436\u0438\u0440", ["my"]: "\u1021\u102C\u101B\u1015\u103A", ["ca"]: "Alg\xE8ria", ["zh"]: "\u963F\u5C14\u53CA\u5229\u4E9A", ["hr"]: "Al\u017Eir", ["cs"]: "Al\u017E\xEDrsko", ["da"]: "Algeriet", ["nl"]: "Algerije", ["en"]: "Algeria", ["eo"]: "Al\u011Derio", ["et"]: "Al\u017Eira", ["fi"]: "Algeria", ["fr"]: "Alg\xE9rie", ["fy"]: "Algeri\xEB", ["gl"]: "Alxeria", ["ka"]: "\u10D0\u10DA\u10D2\u10D8\u10E3\u10E0\u10D8", ["de"]: "Algerien", ["kl"]: "Algeria", ["el"]: "\u0391\u03BB\u03B3\u03B5\u03C1\u03AF\u03B1", ["gu"]: "\u0A86\u0AB2\u0AC7\u0A97\u0AB0\u0ABF\u0AAF\u0ABE", ["ht"]: "Alg\xE9rie", ["ha"]: "Algeria", ["he"]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", ["hi"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["hu"]: "Alg\xE1r", ["is"]: "Alg\xFAra", ["ig"]: "Algeria", ["id"]: "Aljir", ["ga"]: "Alg\xE9rie", ["it"]: "Algeria", ["ja"]: "\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2", ["jv"]: "Aljir", ["kn"]: "\u0C86\u0CB2\u0CCD\u0C97\u0CC7\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", ["kk"]: "\u0410\u043B\u0436\u0438\u0440", ["km"]: "\u17A2\u17B6\u179B\u17CB\u1794\u17B6\u1793\u17B8", ["ko"]: "\uC54C\uC81C\uB9AC", ["ku"]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u062C\u0632\u0627\u06CC\u0631", ["ky"]: "\u0410\u043B\u0436\u0438\u0440", ["lo"]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E88\u0EB5\u0E99", ["la"]: "Algeria", ["lv"]: "Al\u017E\u012Brija", ["lt"]: "Al\u017Eyras", ["lb"]: "Algeria", ["mk"]: "\u0410\u043B\u0436\u0438\u0440", ["mg"]: "Alg\xE9rie", ["ms"]: "Aljir", ["ml"]: "\u0D06\u0D32\u0D02\u0D17\u0D47\u0D30\u0D3F\u0D2F\u0D7B", ["mt"]: "Alg\xE9rie", ["mi"]: "Algeria", ["mr"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["mn"]: "\u0410\u043B\u0436\u0438\u0440", ["ne"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["nb"]: "Algeria", ["ps"]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", ["fa"]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0639\u0631\u0628", ["pl"]: "Algieria", ["pt"]: "Alg\xE9ria", ["pa"]: "\u0A06\u0A32\u0A47\u0A17\u0A40\u0A06", ["ro"]: "Algeria", ["ru"]: "\u0410\u043B\u0436\u0438\u0440", ["sm"]: "Algeria", ["sa"]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E", ["gd"]: "Algeria", ["sr"]: "\u0410\u043B\u0436\u0438\u0440", ["st"]: "Algeria", ["sn"]: "Algeria", ["sd"]: "Algeria", ["si"]: "\u0D86\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA", ["sk"]: "Al\u017E\xEDrsko", ["sl"]: "Al\u017Eir", ["so"]: "Algeria", ["es"]: "Algeria", ["su"]: "Aljir", ["sw"]: "Aljir", ["sv"]: "Algeriet", ["tl"]: "Algeria", ["tg"]: "\u0410\u043B\u0436\u0438\u0440", ["ta"]: "\u0B86\u0BB2\u0BCD\u0B95\u0BC7\u0BB0\u0BBF\u0BAF\u0BBE", ["tt"]: "\u0410\u043B\u0436\u0438\u0440", ["te"]: "\u0C06\u0C32\u0C4D\u0C17\u0C47\u0C30\u0C3F\u0C2F\u0C3E", ["th"]: "\u0E2D\u0E32\u0E23\u0E32\u0E01\u0E2D\u0E19", ["bo"]: "\u0F68\u0F63\u0F9F\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F61\u0F72", ["tr"]: "Cezayir", ["uk"]: "\u0410\u043B\u0436\u0438\u0440", ["ur"]: "\u0622\u0644\u062C\u06CC\u0631", ["uz"]: "\u0410\u043B\u0436\u0438\u0440", ["vi"]: "\u1EA2\u0301\u1EA1\u1EA3\u1EAD\u1EB5", ["cy"]: "Algeria", ["xh"]: "Algeria", ["yi"]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4", ["yo"]: "Algeria", ["zu"]: "Algeria" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Oran", total: 371e5 } }, geography: { area: 2381740, region: "Africa", sub_region: "Northern Africa" }, government: { capital: "Algiers", type: "Republic" } } }, AmericanSamoa: { i18n: { calling_codes: [1684], currencies: ["WST"], languages: ["en", "sm"], tz: { offsets: ["UTC-11"], regions: ["Pacific/Samoa"], timezones: ["SST"] } }, id: "AS", info: { flag: { emoji: "\u{1F1E6}\u{1F1F8}", emoji_unicode: "U+1F1E6 U+1F1F8", svg: "https://www.countryflags.io/as/flat/64.svg" }, tld: [".as"] }, iso: { alpha2: "AS", alpha3: "ASM", numeric: "016" }, name: { alt_spellings: ["AS", "Amerika S\u0101moa", "Amelika S\u0101moa", "S\u0101moa Amelika"], demonym: "American Samoan", native: { endonym: "American Samoa" }, official: "American Samoa", short: "American Samoa", translations: { ["af"]: "Amerikaans Samoa", ["sq"]: "Samoa Amerikane", ["am"]: "\u1233\u121E\u12A0\u122D", ["ar"]: "\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", ["hy"]: "\u054D\u0561\u0570\u0561\u0574\u0561\u056C\u056B\u0561", ["az"]: "Samoa Amerikana", ["ba"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0421\u0430\u043C\u043E\u0430", ["eu"]: "Samoa Amerikana", ["be"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", ["bn"]: "\u0986\u09AE\u09C7\u09B0\u09BF\u0995\u09BE\u09A8 \u09B8\u09BE\u09AE\u09CB\u09AF\u09BC\u09BE", ["ber"]: "\u062C\u0632\u0631 \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", ["dz"]: "\u0F68\u0F62\u0F92\u0FB1\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F58\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F51\u0F0B\u0F46\u0F7A\u0F53\u0F0B\u0F54\u0F7C\u0F0D", ["bs"]: "Ameri\u010Dka Samoa", ["br"]: "Samoa Amerikan", ["bg"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["my"]: "\u1021\u1019\u1039\u1038\u1019\u101B\u102D\u102F\u1018\u102C\u101E\u102C", ["ca"]: "Samoa Americana", ["zh"]: "\u7F8E\u5C5E\u8428\u6469\u4E9A", ["hr"]: "Ameri\u010Dka Samoa", ["cs"]: "Americk\xE1 Samoa", ["da"]: "Amerikansk Samoa", ["nl"]: "Amerikaans Samoa", ["en"]: "American Samoa", ["eo"]: "Samoa Amerika", ["et"]: "Ameerika Samoa", ["fi"]: "Amerikka Samoa", ["fr"]: "American Samoa", ["fy"]: "Amerikaans Samoa", ["gl"]: "Samoa Americana", ["ka"]: "\u10D0\u10DB\u10D4\u10E0\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D0\u10DB\u10DD\u10D0", ["de"]: "Amerikanisch-Samoa", ["kl"]: "Amerikaans Samoa", ["el"]: "\u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03B1\u03BD\u03B9\u03BA\u03AE \u03A3\u03B1\u03BC\u03CC\u03B1", ["gu"]: "\u0A86\u0AAE\u0AC7\u0AB0\u0ABF\u0A95\u0AA8 \u0AB8\u0ABE\u0AAE\u0ACB\u0AAF\u0ABE", ["ht"]: "Amerikaans Samoa", ["ha"]: "Amerikaans Samoa", ["he"]: "\u05D0\u05DE\u05E8\u05D9\u05E7\u05E0\u05D9\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D4", ["hi"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["hu"]: "Amerikai Szamoa", ["is"]: "Amerikai Szamoa", ["ig"]: "Ikina Amerika", ["id"]: "Samoa Amerika", ["ga"]: "Samoa Amerikana", ["it"]: "Samoa Americane", ["ja"]: "\u30A2\u30E1\u30EA\u30AB\u9818\u30B5\u30E2\u30A2", ["jv"]: "Samoa Amerika", ["kn"]: "\u0C85\u0CAE\u0CC7\u0CB0\u0CBF\u0C95\u0CA8\u0CCD \u0CB8\u0CAE\u0CCB\u0C86", ["kk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["km"]: "\u17A2\u17B6\u1798\u17C9\u17B6\u179A\u17B8\u179F\u17D2\u178F\u1784\u17CB", ["ko"]: "\uC544\uBA54\uB9AC\uCE74 \uC0AC\uBAA8\uC544", ["ku"]: "Amerikaans Samoa", ["ky"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["lo"]: "\u0EAD\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94", ["la"]: "Samoa Amerikana", ["lv"]: "Amerikas Samoa", ["lt"]: "Amerikos Samoa", ["lb"]: "Amerikaans Samoa", ["mk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["mg"]: "Samoa Amerika", ["ms"]: "Amerika Samo", ["ml"]: "\u0D05\u0D2E\u0D47\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D \u0D38\u0D2E\u0D4B\u0D06", ["mt"]: "Samoa Amerika", ["mi"]: "Samoa Amerika", ["mr"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["mn"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430", ["ne"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["nb"]: "Amerikansk Samoa", ["ps"]: "\u0627\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", ["fa"]: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627", ["pl"]: "Samoa Ameryka\u0144skie", ["pt"]: "Samoa Americana", ["pa"]: "\u0A05\u0A2E\u0A30\u0A40\u0A15\u0A40 \u0A38\u0A3E\u0A2E\u0A4B\u0A06", ["ro"]: "Samoa americane", ["ru"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430", ["sm"]: "Samoa Amerika", ["sa"]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906", ["gd"]: "Amerikaans Samoa", ["sr"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["st"]: "Amerikaans Samoa", ["sn"]: "Amerikaans Samoa", ["sd"]: "Amerikaans Samoa", ["si"]: "\u0D86\u0DBB\u0DCA\u0DA2\u0DD2\u0DB1\u0DCF\u0DB1\u0DD4 \u0DC3\u0DD0\u0DB8\u0DD0\u0DBD\u0DCA\u0DC0", ["sk"]: "Amerikaans Samoa", ["sl"]: "Amerikaans Samoa", ["so"]: "Amerikaans Samoa", ["es"]: "Samoa Americana", ["su"]: "Amerikaans Samoa", ["sw"]: "Amerikaans Samoa", ["sv"]: "Amerikansk Samoa", ["tl"]: "Amerikaans Samoa", ["tg"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["ta"]: "\u0B85\u0BAE\u0BC6\u0BB0\u0BBF\u0B95\u0BCD \u0B9A\u0BAE\u0BCB\u0BB5\u0BBE", ["tt"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["te"]: "\u0C05\u0C2E\u0C46\u0C30\u0C3F\u0C15\u0C4D \u0C38\u0C2E\u0C4B\u0C35\u0C3E", ["th"]: "\u0E2A\u0E2B\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32", ["bo"]: "\u0F68\u0F7A\u0F0B\u0F62\u0F72\u0F0B\u0F40\u0F0B\u0F68\u0F7A\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F40", ["tr"]: "Amerikan Samoas\u0131", ["uk"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0430 \u0421\u0430\u043C\u043E\u0430", ["ur"]: "\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0627", ["uz"]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430", ["vi"]: "Amerikaans Samoa", ["cy"]: "Amerikaans Samoa", ["xh"]: "Amerikaans Samoa", ["yi"]: "Amerikaans Samoa", ["yo"]: "Amerikaans Samoa", ["zu"]: "Amerikaans Samoa" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Pago Pago", total: 558e3 } }, geography: { area: 199, region: "Oceania", sub_region: "Polynesia" }, government: { capital: "Pago Pago", type: "Nonmetropolitan Territory of the US" } } }, Andorra: { i18n: { calling_codes: [376], currencies: ["EUR"], languages: ["ca", "es"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Europe/Andorra"], timezones: ["CET"] } }, id: "AD", info: { flag: { emoji: "\u{1F1E6}\u{1F1F4}", emoji_unicode: "U+1F1E6 U+1F1F4", svg: "https://www.countryflags.io/ad/flat/64.svg" }, tld: [".ad"] }, iso: { alpha2: "AD", alpha3: "AND", numeric: "020" }, name: { alt_spellings: ["AD", "Principality of Andorra", "Principat d'Andorra"], demonym: "Andorran", native: { endonym: "Andorra" }, official: "Principality of Andorra", short: "Andorra", translations: { ["af"]: "Andorra", ["sq"]: "Andorra", ["am"]: "\u12A0\u1295\u12F6\u122B", ["ar"]: "\u0623\u0646\u062F\u0648\u0631\u0627", ["hy"]: "\u0540\u0561\u0576\u0564\u0561\u0580\u0561\u057E\u0561\u0575\u0584", ["az"]: "Andorra", ["ba"]: "\u0410\u043D\u0434\u043E\u0440\u0430", ["eu"]: "Andorra", ["be"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["bn"]: "\u0985\u09A8\u09CD\u09A1\u09CB\u09B0\u09BE", ["ber"]: "\u0623\u0646\u062F\u0648\u0631\u0627", ["dz"]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", ["bs"]: "Andora", ["br"]: "Andorra", ["bg"]: "\u0410\u043D\u0434\u043E\u0440\u0430", ["my"]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102D\u102F\u1038", ["ca"]: "Andorra", ["zh"]: "\u5B89\u9053\u5C14", ["hr"]: "Andora", ["cs"]: "Andorra", ["da"]: "Andorra", ["nl"]: "Andorra", ["en"]: "Andorra", ["eo"]: "Andora", ["et"]: "Andorra", ["fi"]: "Andorra", ["fr"]: "Andorra", ["fy"]: "Andorra", ["gl"]: "Andorra", ["ka"]: "\u12A0\u1295\u12F6\u122B", ["de"]: "Andorra", ["el"]: "\u0391\u03BD\u03B4\u03CC\u03C1\u03B1", ["he"]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", ["hi"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["hu"]: "Andorra", ["is"]: "Andorra", ["ig"]: "Andorra", ["id"]: "Andorra", ["ga"]: "Andorra", ["it"]: "Andorra", ["ja"]: "\u30A2\u30F3\u30C9\u30E9", ["jv"]: "Andorra", ["kn"]: "\u0C85\u0C82\u0CA1\u0CCB\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD", ["kk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["km"]: "\u17A2\u1784\u17CB\u178A\u17B6\u179A\u17B6", ["ko"]: "\uC548\uB3C4\uB77C", ["ku"]: "Andorra", ["ky"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["lo"]: "\u0EAD\u0EB1\u0E99\u0EC2\u0E94\u0EA3\u0EB2", ["la"]: "Andorra", ["lv"]: "Andora", ["lt"]: "Andora", ["lb"]: "Andorra", ["mk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["mg"]: "Andorra", ["ms"]: "Andorra", ["ml"]: "\u0D05\u0D02\u0D21\u0D4B\u0D30\u0D3F\u0D2F\u0D28\u0D4D", ["mt"]: "Andorra", ["mi"]: "Andorra", ["mr"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["mn"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ne"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["nb"]: "Andorra", ["ps"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["fa"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["pl"]: "Andora", ["pt"]: "Andorra", ["pa"]: "\u0A05\u0A70\u0A21\u0A4B\u0A30\u0A3E", ["ro"]: "Andorra", ["ru"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["sm"]: "Andorra", ["sa"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["gd"]: "Andorra", ["sr"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["st"]: "Andorra", ["sn"]: "Andorra", ["sd"]: "\u0905\u0902\u0921\u094B\u0930\u093E", ["si"]: "\u0D86\u0DB1\u0DCA\u0DAF\u0DDA", ["sk"]: "Andorra", ["sl"]: "Andora", ["so"]: "Andorra", ["es"]: "Andorra", ["su"]: "Andorra", ["sw"]: "Andorra", ["sv"]: "Andorra", ["tl"]: "Andorra", ["tg"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ta"]: "\u0B85\u0BA9\u0BCB\u0BB0\u0BCD\u0B9F\u0BBE", ["tt"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["te"]: "\u0C05\u0C02\u0C21\u0C4B\u0C30\u0C4D\u0C30\u0C3E", ["th"]: "\u0E2D\u0E31\u0E19\u0E14\u0E2D\u0E23\u0E4C\u0E23\u0E32", ["bo"]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B", ["tr"]: "Andora", ["uk"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["ur"]: "\u0622\u0646\u062F\u0648\u0631\u0627", ["uz"]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430", ["vi"]: "Andorra", ["cy"]: "Andorra", ["xh"]: "Andorra", ["yi"]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4", ["yo"]: "Andorra", ["zu"]: "Andorra" } }, statistics: { demographics: { age: { distribution: [{ age: "0 to 14 years", percentage: 15.3 }, { age: "15 to 64 years", percentage: 66.7 }, { age: "65 years and over", percentage: 14.6 }], median_age: 35.5 }, population: { largest_city: "Andorra la Vella", total: 78e3 } }, geography: { area: 468, region: "Europe", sub_region: "Southern Europe" }, government: { capital: "Andorra la Vella", type: "Constitutional Monarchy" } } }, Angola: { i18n: { calling_codes: [244], currencies: ["AOA"], languages: ["pt", "es", "fr", "it", "de", "en"], tz: { offsets: ["UTC+00", "UTC+01", "UTC+02"], regions: ["Africa/Luanda"], timezones: ["WAT"] } }, id: "AO", info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ao/flat/64.svg" }, tld: [".ao"] }, iso: { alpha2: "AO", alpha3: "AGO", numeric: "024" }, name: { alt_spellings: ["AO", "Rep\xFAblica de Angola", "\u0281\u025Bpublika de an"], demonym: "Angolan", native: { endonym: "Angola" }, official: "Republic of Angola", short: "Angola", translations: { ["af"]: "Angola", ["sq"]: "Ang\xF2la", ["am"]: "\u12A0\u1295\u130E\u120A\u12EB", ["ar"]: "\u0623\u0646\u063A\u0648\u0644\u0627", ["hy"]: "\u0540\u0561\u0576\u0563\u0561\u056C\u0561\u056F\u0561", ["az"]: "Ang\u0259l", ["ba"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["eu"]: "Angola", ["be"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["bn"]: "\u0985\u0999\u09CD\u0997\u09B2\u09BE", ["ber"]: "Angola", ["dz"]: "\u0F60\u0F56\u0FB2\u0F74\u0F42", ["bs"]: "Angola", ["br"]: "Angola", ["bg"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["my"]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", ["ca"]: "Angola", ["zh"]: "\u5B89\u54E5\u62C9", ["hr"]: "Angola", ["cs"]: "Angola", ["da"]: "Angola", ["nl"]: "Angola", ["en"]: "Angola", ["eo"]: "Angolo", ["et"]: "Angola", ["fi"]: "Angola", ["fr"]: "Angola", ["fy"]: "Angola", ["gl"]: "Angola", ["ka"]: "\u10D0\u10DC\u10D2\u10DD\u10DA\u10D0", ["de"]: "Angola", ["kl"]: "Angola", ["el"]: "\u0391\u03B3\u03BA\u03CC\u03BB\u03B1", ["gu"]: "\u0A85\u0A82\u0A97\u0ACB\u0AB2\u0ABE", ["ht"]: "Angola", ["ha"]: "Angola", ["he"]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", ["hi"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["hu"]: "Angola", ["is"]: "Angola", ["ig"]: "Angola", ["id"]: "Angola", ["ga"]: "Angola", ["it"]: "Angola", ["ja"]: "\u30A2\u30F3\u30B4\u30E9", ["jv"]: "Anggol", ["kn"]: "\u0C85\u0C82\u0C97\u0CCB\u0CB2\u0CBE", ["kk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["km"]: "\u17A2\u1784\u17CB\u1780\u17B6\u179B\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F", ["ko"]: "\uC559\uACE8\uB77C", ["ku"]: "Angola", ["ky"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EB2\u0E94\u0EB2", ["la"]: "Angola", ["lv"]: "Angola", ["lt"]: "Angola", ["lb"]: "Angola", ["mk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["mg"]: "Angola", ["ms"]: "Angola", ["ml"]: "\u0D05\u0D02\u0D17\u0D4B\u0D33\u0D3E", ["mt"]: "Angola", ["mi"]: "Angola", ["mr"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["mn"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ne"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["nb"]: "Angola", ["ps"]: "\u0627\u0646\u06AB\u0648\u0644\u0627", ["fa"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["pl"]: "Angola", ["pt"]: "Angola", ["pa"]: "\u0A05\u0A19\u0A4D\u0A17\u0A4B\u0A32\u0A3E", ["ro"]: "Angole", ["ru"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["sm"]: "Angola", ["sa"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["gd"]: "Angola", ["sr"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["st"]: "Angola", ["sn"]: "Angola", ["sd"]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E", ["si"]: "\u0D86\u0D9C\u0DBD\u0DD2\u0DBA\u0DCF\u0DC0", ["sk"]: "Angola", ["sl"]: "Angola", ["so"]: "Angola", ["es"]: "Angola", ["su"]: "Angola", ["sw"]: "Angola", ["sv"]: "Angola", ["tl"]: "Angola", ["tg"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ta"]: "\u0B85\u0B99\u0BCD\u0B95\u0BCB\u0BB2\u0BBE", ["tt"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["te"]: "\u0C05\u0C02\u0C17\u0C4B\u0C32\u0C3E", ["th"]: "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E19\u0E32\u0E21\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", ["tr"]: "Angola", ["uk"]: "\u0410\u043D\u0433\u043E\u043B\u0430", ["ur"]: "\u0627\u0646\u06AF\u0648\u0644\u0627", ["uz"]: "Angola", ["vi"]: "Angola", ["xh"]: "Angola", ["cy"]: "Angola", ["yi"]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4", ["yo"]: "Angola", ["zu"]: "Angola" } } }, Anguilla: { i18n: { calling_codes: [1264], currencies: ["XCD", "XCD", "EUR", "USD", "GBP"], languages: ["en", "es"], tz: { offsets: ["UTC-04"], regions: ["America/Anguilla"], timezones: ["AST"] } }, id: "AI", info: { flag: { emoji: "\u{1F1E6}\u{1F1EC}", emoji_unicode: "U+1F1E6 U+1F1EC", svg: "https://www.countryflags.io/ai/flat/64.svg" }, tld: [".ai"] }, iso: { alpha2: "AI", alpha3: "AIA", numeric: "660" }, name: { alt_spellings: ["AI"], demonym: "Anguillian", native: { endonym: "Anguilla" }, official: "Anguilla", short: "Anguilla", translations: { ["af"]: "Anguilla", ["sq"]: "Anguilla", ["am"]: "\u12A0\u1295\u1309\u120B", ["ar"]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", ["hy"]: "\u0531\u0576\u0563\u056B\u056C\u0561", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["eu"]: "Angila", ["be"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["bn"]: "\u0985\u0999\u09CD\u0997\u09C0\u09B2\u09BE", ["ber"]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627", ["dz"]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B", ["bs"]: "Angila", ["br"]: "Angila", ["bg"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["my"]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A", ["ca"]: "Angilla", ["zh"]: "\u5B89\u572D\u62C9", ["hr"]: "Angila", ["cs"]: "Anguilla", ["da"]: "Anguilla", ["nl"]: "Anguilla", ["en"]: "Anguilla", ["eo"]: "Angila", ["et"]: "Anguilla", ["fi"]: "Anguilla", ["fr"]: "Anguilla", ["fy"]: "Angila", ["gl"]: "Anguilla", ["ka"]: "\u10D0\u10DC\u10D2\u10D8\u10DA\u10D0", ["de"]: "Anguilla", ["kl"]: "Anguilla", ["el"]: "\u0391\u03BD\u03B3\u03BA\u03C5\u03BB\u03AC", ["gu"]: "\u0A85\u0A82\u0A97\u0ACD\u0AAF\u0ABE\u0AB2\u0ABE", ["ht"]: "Anguilla", ["ha"]: "Anguilla", ["he"]: "\u05D0\u05E0\u05D2\u05D5\u05D9\u05D0\u05DC\u05D4", ["hi"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["hu"]: "Anguilla", ["is"]: "Anguilla", ["ig"]: "Anguilla", ["id"]: "Anguilla", ["ga"]: "Anguilla", ["it"]: "Anguilla", ["ja"]: "\u30A2\u30F3\u30AE\u30E9", ["jv"]: "Anguilla", ["kn"]: "\u0C85\u0C82\u0C97\u0CCD\u0CB5\u0CC7\u0CB2\u0CBE", ["kk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["km"]: "\u17A2\u1784\u17CB\u1780\u17B6\u179A\u17A0\u17D2\u1782\u17B8\u1798", ["ko"]: "\uC575\uADC8\uB77C", ["ku"]: "Anguilla", ["ky"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EB0\u0E88\u0EB3", ["la"]: "Anguilla", ["lv"]: "Anguilla", ["lt"]: "Anguilla", ["lb"]: "Angilla", ["mk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["mg"]: "Angila", ["ms"]: "Anguilla", ["ml"]: "\u0D05\u0D02\u0D17\u0D4D\u0D35\u0D47\u0D32\u0D3E", ["mt"]: "Anguilla", ["mi"]: "Anguilla", ["mr"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["mn"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ne"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["nb"]: "Anguilla", ["ps"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["fa"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["pl"]: "Anguilla", ["pt"]: "Anguilla", ["pa"]: "\u0A05\u0A02\u0A17\u0A40\u0A32\u0A3E", ["ro"]: "Anguilla", ["ru"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["sm"]: "Anguilla", ["sa"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["gd"]: "Anguilla", ["sr"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["st"]: "Anguilla", ["sn"]: "Anguilla", ["sd"]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E", ["si"]: "\u0D86\u0D82\u0D9C\u0DD2\u0DBD\u0DCF\u0DC0", ["sk"]: "Anguilla", ["sl"]: "Anguilla", ["so"]: "Anguilla", ["es"]: "Anguilla", ["su"]: "Anguilla", ["sw"]: "Anguilla", ["sv"]: "Anguilla", ["tl"]: "Anguilla", ["tg"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ta"]: "\u0B85\u0B99\u0BCD\u0B95\u0BC8\u0BB2\u0BBE", ["tt"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["te"]: "\u0C05\u0C02\u0C17\u0C4D\u0C35\u0C47\u0C32\u0C3E", ["th"]: "\u0E2D\u0E31\u0E07\u0E01\u0E32\u0E25\u0E32", ["bo"]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", ["tr"]: "Anguilla", ["uk"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["ur"]: "\u0622\u0646\u06AF\u0648\u0644\u0627", ["uz"]: "\u0410\u043D\u0433\u0438\u043B\u0438", ["vi"]: "Anguilla", ["cy"]: "Anguilla", ["xh"]: "Anguilla", ["yi"]: "Anguilla", ["yo"]: "Anguilla", ["zu"]: "Anguilla" } } }, Antarctica: { i18n: { calling_codes: [672], currencies: ["USD", "EUR"], languages: ["en", "es", "fr", "pt", "it", "nl", "de", "sv", "nb", "da", "fi"], tz: { offsets: ["UTC+01", "UTC+02"], regions: ["Antarctica/Casey", "Antarctica/Davis", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera"], timezones: ["AST", "CT", "ET", "AST", "AZOT", "NST"] } }, id: "AQ", info: { flag: { emoji: "\u{1F1E6}\u{1F1F6}", emoji_unicode: "U+1F1E6 U+1F1F6", svg: "https://www.countryflags.io/aq/flat/64.svg" }, tld: [".aq"] }, iso: { alpha2: "AQ", alpha3: "ATA", numeric: "010" }, name: { alt_spellings: ["AQ"], demonym: "Antarctican", native: { endonym: "Antarctica" }, official: "Antarctica", short: "Antarctica", translations: { ["af"]: "Antarctica", ["sq"]: "Antarktika", ["am"]: "\u12A0\u1295\u1272\u120D\u12AB\u1293", ["ar"]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["hy"]: "\u0540\u0561\u0576\u0561\u0580\u0561\u057F\u056F\u0578", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["eu"]: "Antarktika", ["be"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["bn"]: "\u0985\u09A8\u09CD\u09A4\u09B0\u09BE\u09B6\u09CD\u09AC\u09C0", ["ber"]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["dz"]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B", ["bs"]: "Antarktika", ["br"]: "Antarktika", ["bg"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["my"]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102E\u1038\u101A\u102C\u1038", ["ca"]: "Ant\xE0rtida", ["zh"]: "\u5357\u6781\u6D32", ["hr"]: "Antarktika", ["cs"]: "Antarktida", ["da"]: "Antarktis", ["nl"]: "Antarctica", ["en"]: "Antarctica", ["eo"]: "Antarktika", ["et"]: "Antarktika", ["fi"]: "Antarktis", ["fr"]: "Antarctica", ["fy"]: "Antarktis", ["gl"]: "Ant\xE1rtida", ["ka"]: "\u10D0\u10DC\u10E2\u10D0\u10E0\u10E5\u10E2\u10D8\u10D9\u10D0", ["de"]: "Antarktis", ["kl"]: "Antarktis", ["el"]: "\u0391\u03BD\u03C4\u03B1\u03C1\u03BA\u03C4\u03B9\u03BA\u03AE", ["gu"]: "\u0A85\u0AA8\u0ACD\u0AA4\u0AB0\u0ABE\u0AB6\u0ACD\u0AB5\u0AC0", ["ht"]: "Antarctica", ["ha"]: "Antarktika", ["he"]: "\u05D0\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4", ["hi"]: "\u0905\u0928\u094D\u0924\u0930\u0915\u094D\u0937\u0947\u0924\u094D\u0930", ["hu"]: "Antarktika", ["is"]: "Antarktis", ["ig"]: "Antarktika", ["id"]: "Antarktika", ["ga"]: "Antarktika", ["it"]: "Antartide", ["ja"]: "\u5357\u6975", ["jv"]: "Antarktika", ["kn"]: "\u0C85\u0CA8\u0CCD\u0CA4\u0CB0\u0CBE\u0CB6\u0CCD\u0CB5\u0CBF", ["kk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["km"]: "\u17A2\u1784\u17CB\u179F\u17D2\u1780\u179A\u17A2\u17B6\u1798\u17C9\u17BB\u1799", ["ko"]: "\uC564\uD2F0\uCE74\uD1A0\uB2C9", ["ku"]: "Antarktika", ["ky"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["lo"]: "\u0EAD\u0EB0\u0E99\u0EAD\u0EA5\u0EB2\u0E81\u0EB4\u0EAA\u0EB0", ["la"]: "Antarctica", ["lv"]: "Antarktika", ["lt"]: "Antarktis", ["lb"]: "Antarktis", ["mk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["mg"]: "Antarctica", ["ms"]: "Antarktika", ["ml"]: "\u0D05\u0D28\u0D4D\u0D24\u0D30\u0D3E\u0D36\u0D4D\u0D35\u0D3F", ["mt"]: "Antarktika", ["mi"]: "Antarktika", ["mr"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["mn"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ne"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["nb"]: "Antarktis", ["ps"]: "\u0627\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627", ["fa"]: "\u0622\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", ["pl"]: "Antarktyka", ["pt"]: "Ant\xE1rtida", ["pa"]: "\u0A05\u0A28\u0A4D\u0A24\u0A30\u0A3E\u0A36\u0A3F\u0A15\u0A3E", ["ro"]: "Antarctica", ["ru"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["sm"]: "Antarktika", ["sa"]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E", ["gd"]: "Antarktika", ["sr"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["st"]: "Antarktika", ["sn"]: "Antarktika", ["sd"]: "Antarktika", ["si"]: "\u0D86\u0DB1\u0DCA\u0DA7\u0DCA\u0DA7\u0DD2\u0D9A\u0DCF\u0DC0", ["sk"]: "Antarktika", ["sl"]: "Antarktika", ["so"]: "Antarktika", ["es"]: "Ant\xE1rtida", ["su"]: "Antarktika", ["sw"]: "Antarktika", ["sv"]: "Antarktis", ["tl"]: "Antarktika", ["tg"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ta"]: "\u0B85\u0BA9\u0BCD\u0BA4\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0B95\u0BCD", ["tt"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["te"]: "\u0C05\u0C28\u0C4D\u0C24\u0C30\u0C3E\u0C36\u0C4D\u0C35\u0C3F\u0C15\u0C3E", ["th"]: "\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E2D\u0E32\u0E19\u0E31\u0E19\u0E15\u0E34\u0E01\u0E32", ["bo"]: "\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72\u0F0B\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72", ["tr"]: "Antarktika", ["uk"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["ur"]: "\u0627\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627", ["uz"]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430", ["vi"]: "\u0110\u1EA5t Antarktik", ["cy"]: "Antarktika", ["xh"]: "Antarktika", ["yi"]: "Antarktika", ["yo"]: "Antarktika", ["zu"]: "Antarktika" } } }, Armenia: { i18n: { calling_codes: [374], currencies: ["AMD"], languages: ["hy"], tz: { offsets: ["UTC+04"], regions: ["Asia/Jakarta"], timezones: ["AMT"] } }, id: "AM", info: { flag: { emoji: "\u{1F1E6}\u{1F1F2}", emoji_unicode: "U+1F1E6 U+1F1F2", svg: "https://www.countryflags.io/am/flat/64.svg" }, tld: [".am"] }, iso: { alpha2: "AM", alpha3: "ARM", numeric: "051" }, name: { alt_spellings: ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"], demonym: "Armenian", native: { endonym: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576" }, official: "Republic of Armenia", short: "Armenia", translations: { ["af"]: "Armeni\xEB", ["sq"]: "Armenia", ["am"]: "\u12A0\u121B\u122D\u129B", ["ar"]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", ["hy"]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576", ["az"]: "Az\u0259rbaycan", ["ba"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["eu"]: "Arm\xE9nia", ["be"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["bn"]: "\u0986\u09B0\u09CD\u09AE\u09C7\u09A8\u09BF", ["ber"]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627", ["dz"]: "\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42", ["bs"]: "Armenija", ["br"]: "Armeni\xEB", ["bg"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["my"]: "\u1021\u102C\u1019\u1010\u102D\u1010\u1039", ["ca"]: "Arm\xE8nia", ["zh"]: "\u4E9A\u7F8E\u5C3C\u4E9A", ["hr"]: "Armenija", ["cs"]: "Arm\xE9nie", ["da"]: "Armenien", ["nl"]: "Armeni\xEB", ["en"]: "Armenia", ["eo"]: "Armenia", ["et"]: "Armeenia", ["fi"]: "Armenia", ["fr"]: "Armenia", ["fy"]: "Armeenia", ["gl"]: "Arm\xE9nia", ["ka"]: "\u10D0\u10E0\u10DB\u10DD\u10DC\u10D8", ["de"]: "Armenien", ["kl"]: "Armenia", ["el"]: "\u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1", ["gu"]: "\u0A85\u0AB0\u0ACD\u0AAE\u0AC7\u0AA8\u0ABF", ["ht"]: "Armenia", ["ha"]: "Armenia", ["he"]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", ["hi"]: "\u0905\u05E8\u05DE\u05E0\u093F\u092F\u093E", ["hu"]: "\xD6rm\xE9nyorsz\xE1g", ["is"]: "Armenia", ["ig"]: "Armenia", ["id"]: "Armenia", ["ga"]: "Armenia", ["it"]: "Armenia", ["ja"]: "\u30A2\u30EB\u30E1\u30CB\u30A2", ["jv"]: "Armenia", ["kn"]: "\u0C85\u0CB0\u0CCD\u0CAE\u0CC7\u0CA8\u0CBF", ["kk"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["km"]: "\u17A2\u17B6\u1798\u17C9\u17C1\u179A\u17B8", ["ko"]: "\uC544\uB974\uBA54\uB2C8\uC544", ["ku"]: "Armenia", ["ky"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["lo"]: "\u0EAD\u0EB2\u0EAB\u0EBC\u0E99\u0EB2", ["la"]: "Armenia", ["lv"]: "Armeenia", ["lt"]: "Arm\u0117nija", ["lb"]: "Armenien", ["mk"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", ["mg"]: "Armenia", ["ms"]: "Armenia", ["ml"]: "\u0D05\u0D30\u0D4D\u200D\u0D2E\u0D47\u0D28\u0D3F", ["mt"]: "Armenia", ["mi"]: "Armenia", ["mr"]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", ["mn"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["ne"]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F", ["nb"]: "Armenia", ["ps"]: "\u0622\u0631\u0645\u06CC\u0646\u06CC\u0627", ["fa"]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", ["pl"]: "Armenia", ["pt"]: "Armenia", ["pa"]: "\u0A05\u0A30\u0A2E\u0A40\u0A28\u0A40", ["ro"]: "Armenia", ["ru"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["sm"]: "Armenia", ["sa"]: "Armenia", ["gd"]: "Armenia", ["sr"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430", ["st"]: "Armenia", ["sn"]: "Armenia", ["sd"]: "Armenia", ["si"]: "\u0D86\u0DBB\u0DCA\u0DB8\u0DD3\u0DB1\u0DD2", ["sk"]: "Armenia", ["sl"]: "Armenija", ["so"]: "Armenia", ["es"]: "Armenia", ["su"]: "Armenia", ["sw"]: "Armenia", ["sv"]: "Armenien", ["tl"]: "Armenia", ["tg"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["ta"]: "\u0B85\u0BB0\u0BCD\u0BAE\u0BC7\u0BA9\u0BBF\u0BAF\u0BA9\u0BCD", ["tt"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["te"]: "\u0C05\u0C30\u0C4D\u0C2E\u0C47\u0C28\u0C3F", ["th"]: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19", ["bo"]: "\u0F68\u0F62\u0F0B\u0F58\u0F7A\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F74\u0F0D", ["tr"]: "Ermenistan", ["uk"]: "\u0410\u0440\u043C\u0435\u043D\u0456\u044F", ["ur"]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646", ["uz"]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F", ["vi"]: "Armenia", ["cy"]: "Armenia", ["xh"]: "Armenia", ["yi"]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4", ["yo"]: "Armenia", ["zu"]: "Armenia" } } }, SomeCountry: { i18n: { calling_codes: [], currencies: [], languages: [], tz: { offsets: [], regions: [], timezones: [] } }, id: "AS", info: { flag: { emoji: "", emoji_unicode: "", svg: "" }, tld: [] }, iso: { alpha2: "AS", alpha3: "", numeric: "" }, name: { alt_spellings: [], demonym: "", native: { endonym: "" }, official: "", short: "", translations: { ["af"]: "", ["sq"]: "", ["am"]: "", ["ar"]: "", ["hy"]: "", ["az"]: "", ["ba"]: "", ["eu"]: "", ["be"]: "", ["bn"]: "", ["ber"]: "", ["dz"]: "", ["bs"]: "", ["br"]: "", ["bg"]: "", ["my"]: "", ["ca"]: "", ["zh"]: "", ["hr"]: "", ["cs"]: "", ["da"]: "", ["nl"]: "", ["en"]: "", ["eo"]: "", ["et"]: "", ["fi"]: "", ["fr"]: "", ["fy"]: "", ["gl"]: "", ["ka"]: "", ["de"]: "", ["kl"]: "", ["el"]: "", ["gu"]: "", ["ht"]: "", ["ha"]: "", ["he"]: "", ["hi"]: "", ["hu"]: "", ["is"]: "", ["ig"]: "", ["id"]: "", ["ga"]: "", ["it"]: "", ["ja"]: "", ["jv"]: "", ["kn"]: "", ["kk"]: "", ["km"]: "", ["ko"]: "", ["ku"]: "", ["ky"]: "", ["lo"]: "", ["la"]: "", ["lv"]: "", ["lt"]: "", ["lb"]: "", ["mk"]: "", ["mg"]: "", ["ms"]: "", ["ml"]: "", ["mt"]: "", ["mi"]: "", ["mr"]: "", ["mn"]: "", ["ne"]: "", ["nb"]: "", ["ps"]: "", ["fa"]: "", ["pl"]: "", ["pt"]: "", ["pa"]: "", ["ro"]: "", ["ru"]: "", ["sm"]: "", ["sa"]: "", ["gd"]: "", ["sr"]: "", ["st"]: "", ["sn"]: "", ["sd"]: "", ["si"]: "", ["sk"]: "", ["sl"]: "", ["so"]: "", ["es"]: "", ["su"]: "", ["sw"]: "", ["sv"]: "", ["tl"]: "", ["tg"]: "", ["ta"]: "", ["tt"]: "", ["te"]: "", ["th"]: "", ["bo"]: "", ["tr"]: "", ["uk"]: "", ["ur"]: "", ["uz"]: "", ["vi"]: "", ["cy"]: "", ["xh"]: "", ["yi"]: "", ["yo"]: "", ["zu"]: "" } } } };

// src/lib/aws/s3.ts
import AWS from "aws-sdk";
async function uploadToS3({
  accessKeyId,
  bucket,
  files,
  identityPoolId,
  region,
  secretAccessKey
}) {
  AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region
  });
  const s3 = new AWS.S3({
    params: { Bucket: bucket }
  });
  let responses = [];
  for (const file of files) {
    const { buffer, mimetype, originalname } = file;
    const s3Response = await s3.upload({
      Body: buffer,
      Bucket: bucket,
      ContentType: mimetype,
      Key: `uploads/images/${new Date().getSeconds()}.${originalname}`,
      ACL: "public-read"
    }).promise();
    responses = [...responses, { url: s3Response.Location }];
  }
  return responses;
}

// src/endpoints/entities.ts
var entities_default = ({ aws, dataClient }) => {
  return {
    create: async (req, res) => {
      const model = req.params.model;
      const params = req.body;
      const files = req.files;
      if (!model) {
        return res.status(400).json({ error: "Missing model" });
      }
      if (files) {
        if (!aws.secretAccessKey || !aws.accessKeyId || !aws.cognito.identityPoolId || !aws.s3.bucket || !aws.s3.region) {
          throw new Error("Missing AWS credentials");
        }
        const result = await uploadToS3({
          accessKeyId: aws.accessKeyId,
          secretAccessKey: aws.secretAccessKey,
          files,
          bucket: aws.s3.bucket,
          identityPoolId: aws.cognito.identityPoolId,
          region: aws.s3.region
        });
        params.images = result;
      }
      const entity = await dataClient.create(model, params);
      if (!entity) {
        return res.status(500).json({ error: "Failed to create entity" });
      }
      return res.status(200).json({ ...entity.dataValues });
    },
    deleteMany: async (req, res) => {
      const model = req.params.model;
      const ids = req.body;
      if (!model) {
        return res.status(400).send("Missing model");
      }
      const result = await dataClient.deleteMany(model, ids);
      return res.status(200).json(result);
    },
    deleteOne: async (req, res) => {
      const model = req.params.model;
      const id = req.params.id;
      if (!model) {
        return res.status(400).json({ error: "Missing model" });
      }
      if (!id) {
        return res.status(400).json({ error: "Missing id" });
      }
      const entity = await dataClient.deleteOne(model, id);
      return res.status(200).json(entity);
    },
    getOne: async (req, res) => {
      const model = req.params.model;
      const id = req.params.id;
      if (!model) {
        return res.status(400).json({ error: "Missing model" });
      }
      if (!id) {
        return res.status(400).json({ error: "Missing id" });
      }
      const entity = await dataClient.getOne(model, id);
      return res.status(200).json(entity);
    },
    getMany: async (req, res) => {
      const conditions = req.params.conditions ?? void 0;
      const { limit, model, offset, ...filters } = req.params;
      if (!model) {
        return res.status(400).send("Missing model");
      }
      const result = await dataClient.getMany(model, {
        conditions,
        filters,
        limit: limit ? Number.parseInt(limit) : 25,
        offset: offset ? Number.parseInt(offset) : 0
      });
      return res.status(200).json(result);
    },
    healthcheck: async (req, res) => {
      return res.status(200).send();
    },
    updateMany: async (req, res) => {
      const model = req.params.model;
      const modelObj = req.body;
      if (!model) {
        return res.status(400).json({ error: "Missing model" });
      }
      const entity = await dataClient.updateMany(model, modelObj);
      if (!entity) {
        return res.status(500).json({ error: "Failed to update entities" });
      }
      return res.status(200).json({ ...entity.dataValues });
    },
    updateOne: async (req, res) => {
      const { id, model } = req.params;
      const params = req.body;
      const files = req.files;
      if (!model) {
        return res.status(400).json({ error: "Missing model" });
      }
      if (!id) {
        return res.status(400).json({ error: "Missing id" });
      }
      if (files) {
        if (!aws.secretAccessKey || !aws.accessKeyId || !aws.cognito.identityPoolId || !aws.s3.bucket || !aws.s3.region) {
          throw new Error("Missing AWS credentials");
        }
        const result = await uploadToS3({
          accessKeyId: aws.accessKeyId,
          secretAccessKey: aws.secretAccessKey,
          files,
          bucket: aws.s3.bucket,
          identityPoolId: aws.cognito.identityPoolId,
          region: aws.s3.region
        });
        params.images = params.images && params.images[0] ? [...JSON.parse(params.images[0]), ...result] : [...result];
      }
      console.log({
        model,
        id,
        params
      });
      const entity = await dataClient.updateOne(model, id, params);
      if (!entity) {
        return res.status(500).json({ error: "Failed to update entity" });
      }
      return res.status(200).json(entity);
    }
  };
};

// src/index.ts
var logger4 = new e3();
var CoreAPIServer = class {
  config;
  db;
  models;
  constructor(config) {
    this.config = config;
  }
  async start() {
    logger4.info("Starting Core API Server");
    if (!this.config?.db.connection) {
      throw new s("Core API Server config is missing connection");
    }
    this.db = new DataClient({
      connection: this.config.db.connection,
      models: this.config.db.models
    });
    const server = new HttpServer({
      endpoints: [
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).create,
          method: ze3.Post,
          route: "/:model"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).deleteMany,
          method: ze3.Delete,
          route: "/:model"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).deleteOne,
          method: ze3.Delete,
          route: "/:model/:id"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).getMany,
          method: ze3.Get,
          route: "/:model"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).getOne,
          method: ze3.Get,
          route: "/:model/:id"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).updateMany,
          method: ze3.Put,
          route: "/:model"
        },
        {
          handler: entities_default({
            aws: this.config.aws,
            dataClient: this.db
          }).updateOne,
          method: ze3.Put,
          route: "/:model/:id"
        }
      ],
      name: "core-api",
      options: {
        trustedOrigins: this.config.security?.trustedOrigins
      }
    });
    await this.db.connect({
      alter: this.config.db.alter ?? false,
      force: this.config.db.force ?? false
    });
    await server.listen();
    logger4.info("Core API Server started");
  }
};
export {
  CoreAPIServer
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * basic-auth
 * Copyright(c) 2013 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * depd
 * Copyright(c) 2014-2018 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */
/*!
 * morgan
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * on-headers
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=index.js.map
