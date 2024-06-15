"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SpiritualGiftsSlider } from "./SpiritualGiftsSlider";
import { SpiritualGiftsResults } from "./SpiritualGiftsResults";
import { SPIRITUAL_GIFTS_QUESTIONS } from "../lib/data";
import { formSchema } from "@/lib/schema";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function SpiritualGiftsForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const debugQuery = searchParams?.get("debug");
  const defaultQuestionValues =
    debugQuery === "true"
      ? [1, 2, 3, 4, 5, 1, 4, 4, 5, 2, 1, 1, 4, 2, 2].concat(Array(65).fill(5))
      : Array(80).fill("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      questions: defaultQuestionValues,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await fetch("/api/submitToGoogle", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setIsLoading(false);
    if (response.status !== 200) {
      toast("Failed to send to CCFCIV google sheets, please try again");
      return;
    }

    setHasSubmitted(true);
  }

  if (hasSubmitted) {
    return <SpiritualGiftsResults values={form.getValues()} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {SPIRITUAL_GIFTS_QUESTIONS.map((question) => {
          return (
            <FormField
              control={form.control}
              name={`questions.${question.index - 1}`}
              key={question.index}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {question.index}. {question.question}
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-row gap-4 items-center">
                      <Input
                        className="min-w-0 w-14"
                        width={16}
                        type="number"
                        min={1}
                        max={5}
                        step={1}
                        {...field}
                      />
                      <SpiritualGiftsSlider
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        {isLoading ? <BeatLoader /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
}
