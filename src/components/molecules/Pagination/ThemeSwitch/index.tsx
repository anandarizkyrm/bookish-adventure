"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
    //   const [mounted, setMounted] = useState(false);
    //   const { resolvedTheme, setTheme } = useTheme();
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (enabled) {
            return setTheme("dark");
        }
        return setTheme("light");
    }, [enabled]);
    return (
        <div className="inline-flex items-center">
            <MoonIcon className="mr-2 h4 w-4" />
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    !enabled ? "bg-gray-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                        !enabled
                            ? "translate-x-6 bg-white"
                            : "translate-x-1   bg-gray-500"
                    } inline-block h-4 w-4 rounded-full transition`}
                />
            </Switch>
            <SunIcon className="ml-2 h-4 w-4" />
        </div>
    );
};

export default ThemeSwitch;
