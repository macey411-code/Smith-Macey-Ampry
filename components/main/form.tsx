"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
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

// This is where changes to code on original form schema begin 
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  // **Added validation for the email field**
  email: z.string().email({
    message: "Please enter a valid email address.",  // Error message for invalid email
  }),
  // **Added validation for the comments field**
  comments: z.string().min(10, {
    message: "Comments must be at least 10 characters long.",  // Error message for short comments
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      // **Add default value for email field** (empty string initially)
      email: "",
      // **Add default value for comments field** (empty string initially)
      comments: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      <div>
        <div>You submitted the following values:</div>
        <pre className="mt-2 w-full rounded-md p-2 bg-foreground text-background">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
         {/* Original Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

         {/* **Added Email Field** */}
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* **Added Comments Field** */}
         <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <textarea placeholder="Your message..." {...field} className="w-full p-2 border" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
