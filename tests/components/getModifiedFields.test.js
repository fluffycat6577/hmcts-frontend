import { describe, it, expect } from "vitest";
import { getModifiedFields } from "@/app/utils/getModifiedFields";

describe("getModifiedFields", () => {

    it("returns only the fields that have changed", () => {

        const original = {
            title: "Original title",
            description: "Original description",
            status: "Pending"
        };

        const updated = {
            title: "Updated title",
            description: "Original description",
            status: "Completed"
        };

        const result = getModifiedFields(original, updated);

        expect(result).toEqual({
            title: "Updated title",
            status: "Completed"
        });

    });

    it("returns an empty object when nothing has changed", () => {

        const original = {
            title: "Original title",
            status: "Pending"
        };

        const updated = {
            title: "Original title",
            status: "Pending"
        };

        expect(getModifiedFields(original, updated)).toEqual({});

    });

});