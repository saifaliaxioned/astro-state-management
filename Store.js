"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.notes = void 0;
var nanostores_1 = require("nanostores");
exports.notes = (0, nanostores_1.atom)([]);
var addNote = function (note) {
    exports.notes.set(__spreadArray([], exports.notes.get(), true));
    console.log('note: ', exports.notes.get);
};
exports.addNote = addNote;
