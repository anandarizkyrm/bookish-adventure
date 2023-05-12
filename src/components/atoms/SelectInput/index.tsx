import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import clsx from "clsx";

export type SelectInputProps = {
    /** Input label */
    label?: string | null;
    /**
     * id to be initialized with React Hook Form,
     * must be the same with the pre-defined types.
     */
    id: string;
    /** Input placeholder */
    placeholder?: string;
    /** Small text below input, useful for additional information */
    helperText?: string;
    /**
     * Input type
     * @example text, email, password
     */
    type?: React.HTMLInputTypeAttribute;
    /** Disables the input and shows defaultValue (can be set from React Hook Form) */
    readOnly?: boolean;
    /** Disable error style (not disabling error validation) */

    hideError?: boolean;
    /** Manual validation using RHF, it is encouraged to use yup resolver instead */
    validation?: RegisterOptions;
    leftIcon?: React.ReactNode | string;
    rightNode?: React.ReactNode;
    containerClassName?: string;
    /** The List that you want to show in the select */
    selectList: string[];

    defaultValue?: string;
    /** Disable border outline */
    isOutline?: boolean;
} & React.ComponentPropsWithoutRef<"select">;

export default function SelectInput({
    label,
    helperText,
    id,
    placeholder,
    disabled,
    readOnly = false,
    hideError = false,
    isOutline = true,
    validation,
    leftIcon: LeftIcon,
    rightNode,
    containerClassName,
    defaultValue,
    selectList,
    ...rest
}: SelectInputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    // const error = get(errors, id)
    const error = errors[id];
    const withLabel = label !== null;

    return (
        <div className={containerClassName}>
            {withLabel && (
                <label className="block" htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={clsx("relative", withLabel && "mt-1")}>
                {LeftIcon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        {LeftIcon}
                    </div>
                )}

                <select
                    {...register(id, validation)}
                    {...rest}
                    name={id}
                    defaultValue={defaultValue}
                    id={id}
                    className={clsx(
                        "flex w-full rounded-lg border p-2 font-normal text-gray-400 shadow-sm focus:outline-none",
                        "min-h-[2.25rem] py-0 md:min-h-[2.5rem]",
                        "focus:border-primary-500 focus:ring-primary-500 border-gray-300",
                        (readOnly || disabled) &&
                            "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0",
                        error &&
                            " e border-red-500 focus:border focus:border-red-500 focus:ring-red-500",
                        LeftIcon && "pl-9",
                        rightNode && "pr-10",
                        !isOutline && "border-none"
                    )}
                >
                    <option value="">{placeholder}</option>
                    {selectList.map((item) => (
                        <option key={item} value={item.toLowerCase()}>
                            {item}
                        </option>
                    ))}
                </select>

                {rightNode && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {rightNode}
                    </div>
                )}
            </div>
            {helperText && <p className="mt-1">{helperText}</p>}
            {!hideError && error && (
                <p className="mt-1 text-red-500">
                    {error?.message?.toString()}
                </p>
            )}
        </div>
    );
}
