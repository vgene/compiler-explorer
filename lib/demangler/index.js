import { BaseDemangler } from './base';
import { CppDemangler } from './cpp';
import { PascalDemangler } from './pascal';
import { Win32Demangler } from './win32';

export {
    BaseDemangler,
    CppDemangler,
    PascalDemangler,
    Win32Demangler,
};

const typeNameMap = {
    base: BaseDemangler,
    cpp: CppDemangler,
    pascal: PascalDemangler,
    win32: Win32Demangler,
};

export function getDemanglerTypeFromName(name) {
    const t = typeNameMap[name];
    if (t === undefined) {
        throw new Error(`No demangler type named '${name}' found`);
    }

    return t;
}
