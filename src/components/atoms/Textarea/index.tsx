import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";

export type TextAreaProps = {
    label?: string | null;
    id: string;
    placeholder?: string;
    helperText?: string;
    readOnly?: boolean;
    hideError?: boolean;
    validation?: RegisterOptions;
    containerClassName?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
    label,
    placeholder = "",
    helperText,
    id,
    readOnly = false,
    hideError = false,
    validation,
    disabled,
    containerClassName,
    ...rest
}: TextAreaProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const withLabel = label !== null;
    const error = errors[id];

    return (
        <div className={containerClassName}>
            {withLabel && (
                <label className="block" htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={clsx("relative", withLabel && "mt-1")}>
                <textarea
                    {...register(id, validation)}
                    rows={3}
                    {...rest}
                    name={id}
                    id={id}
                    readOnly={readOnly}
                    disabled={disabled}
                    className={clsx(
                        "block w-full rounded-lg shadow-sm",
                        "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
                        (readOnly || disabled) &&
                            "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0",
                        error &&
                            "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    placeholder={placeholder}
                    aria-describedby={id}
                />
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
