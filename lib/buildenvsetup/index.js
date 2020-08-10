import { BuildEnvSetupBase } from './base';
import { BuildEnvSetupCeConanDirect } from './ceconan';
import { BuildEnvSetupCliConan } from './cliconan';

export {
    BuildEnvSetupBase,
    BuildEnvSetupCeConanDirect,
    BuildEnvSetupCliConan,
};

const typeNameMap = {
    ceconan: BuildEnvSetupCeConanDirect,
    cliconan: BuildEnvSetupCliConan,
};

export function getBuildEnvTypeFromName(name) {
    const t = typeNameMap[name];
    if (t === undefined) {
        throw new Error(`No buildenv type named '${name}' found`);
    }

    return t;
}
