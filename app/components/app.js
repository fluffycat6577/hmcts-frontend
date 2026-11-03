'use client';

import { Menu } from "./menu";

export function TaskApp() {

    return (
        <div className="relative flex flex-col items-center mt-20">
            <div className="mb-10">
                <h1 className="font-bold underline text-4xl">HMCTS Test App</h1>
            </div>
            <div className="">
                <Menu />
            </div>
        </div>
    )
}