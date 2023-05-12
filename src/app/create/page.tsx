"use client";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/Textarea";
import Container from "@/components/organisms/Container";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Createpost = () => {
    const methods = useForm({
        mode: "onTouched",
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: unknown) => {
        console.log({ data });

        return;
    };
    return (
        <Container>
            <FormProvider {...methods}>
                <form className="w-3/6" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        id="judul"
                        validation={{
                            required: "Judul must be filled",
                        }}
                        placeholder="Judul *"
                    />
                    <TextArea
                        id="judul"
                        validation={{
                            required: "Judul must be filled",
                        }}
                        placeholder="Judul *"
                    />
                </form>
            </FormProvider>
        </Container>
    );
};

export default Createpost;
