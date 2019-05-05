// Copyright (c) 2018, Compiler Explorer Team
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
"use strict";

const utils = require('./utils');
const findQuotes = /(.*?)("(?:[^"\\]|\\.)*")(.*)/;

class AsmRegex {
    constructor() {
        this.labelDef = /^(?:.proc\s+)?([.a-z_$@][a-z0-9$_@.]*):/i;
    }

    static squashHorizontalWhitespace(line, atStart) {
        const quotes = line.match(findQuotes);
        if (quotes) {
            return this.squashHorizontalWhitespace(quotes[1], atStart) + quotes[2] +
                this.squashHorizontalWhitespace(quotes[3], false);
        }
        return utils.squashHorizontalWhitespace(line, atStart);
    }

    static filterAsmLine(line, filters) {
        if (!filters.trim) return line;
        return this.squashHorizontalWhitespace(line, true);
    }
}

exports.AsmRegex = AsmRegex;