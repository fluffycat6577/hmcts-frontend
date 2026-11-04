export function getModifiedFields(original, updated) {
    const changed = {};

    // Omit keys that are not changed rather than setting to null
    // In case we want to use null to represent an empty DB field
    // (In theory this can only happen with the "description" field)
    for (const key in updated) {
        if (original[key] !== updated[key]) {
            changed[key] = updated[key];
        }
    }

    return changed;
}