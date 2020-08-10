import { StorageBase } from './base';
import { StorageLocal } from './local';
import { StorageNull } from './null';
import { StorageRemote } from './remote';
import { StorageS3 } from './s3';

const storageNameMap = {
    local: StorageLocal,
    null: StorageNull,
    remote: StorageRemote,
    s3: StorageS3,
};

export function getStorageTypeFromName(name) {
    const t = storageNameMap[name];
    if (t === undefined) {
        throw new Error(`No storage type named '${name}' found`);
    }

    return t;
}

export {
    StorageBase,
    StorageLocal,
    StorageNull,
    StorageRemote,
    StorageS3,
};
