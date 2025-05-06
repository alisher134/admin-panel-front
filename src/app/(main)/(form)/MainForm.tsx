"use client";

import { Button } from "@/components/ui/button/Button";
import { Field } from "@/components/ui/field/Field";
import Upload from "@/components/ui/upload-field/Upload";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useManageRequestsQuery } from "../useManageRequestQuery";
import { IMainForm } from "./main-form.types";

export const MainForm = () => {
  const {
    register: registerInput,
    handleSubmit,
    control,
    reset,
  } = useForm<IMainForm>({ mode: "onTouched" });

  const { createRequest } = useManageRequestsQuery();

  const onSubmit: SubmitHandler<IMainForm> = (data) => {
    createRequest(data);
    reset();
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-14 ">
        {/* <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">Tirkeu uaqyty</p>
          <Field
            {...registerInput("date", { required: "is required" })}
            type="datetime-local"
            placeholder="01/01/2025"
          />
        </div> */}

        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">Sipattama</p>
          <Field
            {...registerInput("description", { required: "is required" })}
            placeholder=". . . . . . . . ."
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">CVE number</p>
          <Field
            {...registerInput("cve", { required: "is required" })}
            placeholder="CVE-2023-35840"
          />
        </div>
      </div>

      <div className="w-full mt-16">
        <p className="text-start mb-5">
          Oqiga orynynan beine zhukteu / {""}
          <span className="text-red-600">Screenshot</span>
        </p>

        <Controller
          control={control}
          name="screenshot"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Upload
              onChange={onChange}
              value={value}
              error={error}
              folder="users"
              placeholder="Avatar"
            />
          )}
        />
      </div>

      <Button variant="primary" className="mt-10 w-56">
        Zhiberu
      </Button>
    </form>
  );
};
