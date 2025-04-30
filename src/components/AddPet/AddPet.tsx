import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPet } from "@/api/addPet";
import Button from "@/components/UI/Button/Button";
import Message from "@/components/UI/Message/Message";
import { Pet } from "@/api/getPets";
import { v4 } from "uuid";

type PetFormData = {
  name: string;
  image: string;
  status: string;
  category: string;
  tags: string;
};

const AddPet: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PetFormData>();

  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, isPending, error } = useMutation<
    Pet,
    Error,
    Pet
  >({
    mutationFn: addPet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      reset();
    },
  });

  const onSubmit: SubmitHandler<PetFormData> = (data) => {
    mutate({
      ...data,
      id: v4(),
      tags: data.tags.split(",").map((tag) => tag.trim()),
    });
  };

  const fields = [
    { name: "name", label: "Name" },
    { name: "image", label: "Image URL" },
    { name: "status", label: "Status" },
    { name: "category", label: "Category" },
    { name: "tags", label: "Tags (comma-separated)" },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Pet</h2>

      {isSuccess && <Message type="success" text="Pet added successfully!" />}
      {isError && (
        <Message
          type="error"
          text={(error as Error)?.message || "Something went wrong"}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map(({ name, label }) => (
          <div key={name}>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor={name}
            >
              {label}
            </label>
            <input
              {...register(name as keyof PetFormData, { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder={`Enter ${label.toLowerCase()}`}
              id={name}
            />
            {errors[name as keyof PetFormData] && (
              <Message text="This field is required" type="error" />
            )}
          </div>
        ))}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default AddPet;
